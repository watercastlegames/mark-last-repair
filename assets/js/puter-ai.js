import { CASE_OVERVIEW, ROUNDS, COMPANIONS } from './case-data.js';

const fixed=['네, 그렇습니다.','아니요, 그렇지 않습니다.','그럴 수도 있습니다.','중요하지 않습니다.'];
const AI_MODELS=['gpt-5.4-nano','gpt-5-nano'];
const AI_REQUEST_TIMEOUT_MS=10000;
const COMPANION_TOTAL_TIMEOUT_MS=20000;
const FINAL_AI_REQUEST_TIMEOUT_MS=13000;
const FINAL_COMPANION_TOTAL_TIMEOUT_MS=32000;
const companionIds=COMPANIONS.map(c=>c.id);
const companionNames=COMPANIONS.map(c=>c.name);
const persona={
  hyeseon:'차분하게 눈앞의 단서를 정리하고 서로 이어질 수 있는 맥락을 한 단계씩 확인한다.',
  jinho:'확신을 서두르지 않고 사망 원인과 가능성을 조심스럽게 좁힌다.',
  chulgu:'가장 이상한 현장 요소를 거침없고 짧게 바로 묻는다.',
  sangmin:'경험 많은 전략가처럼 질문 비용 대비 효율이 높은 순서를 강조한다.'
};
const futureTerms={
  1:['장갑','일정표','열쇠','보관함','스프레이','잔류물','결정','티켓','신문','금화','절도','그랜트','낡은 사진','장부','12년'],
  2:['스프레이','잔류물','결정','티켓','신문','금화','절도','그랜트','낡은 사진','장부','12년'],
  3:['신문','금화','절도','그랜트','낡은 사진','장부','12년'],
  4:[]
};
const visibleTerms={
  1:['마크','배전실','폐극장','폭풍우','바닥','물','차단기','작업가방','전기','사망','죽음','사건','원인'],
  2:['마크','배전실','작업가방','장갑','일정표','구역','열쇠','보관함','작업','사망','죽음','사건','원인'],
  3:['마크','배전실','분장실','스프레이','화장대','잔류물','결정','티켓','물건','사망','죽음','사건','원인'],
  4:['마크','그랜트','신문','금화','절도','장부','사진','과거','기록','12년','사망','죽음','사건','원인']
};
let ready=null;

export async function ensurePuter(){
  if(window.puter?.ai)return true;
  if(location.protocol==='file:')return false;
  if(ready){const loaded=await ready;if(loaded&&window.puter?.ai)return true;ready=null;}
  ready=new Promise(resolve=>{
    document.querySelector('script[data-puter-game]')?.remove();
    const s=document.createElement('script');let settled=false;
    const finish=value=>{if(settled)return;settled=true;clearTimeout(timer);resolve(value);};
    const timer=setTimeout(()=>finish(false),12000);
    s.src=`https://js.puter.com/v2/?game=${Date.now()}`;s.dataset.puterGame='1';s.onload=()=>finish(!!window.puter?.ai);s.onerror=()=>finish(false);document.head.append(s);
  });
  const loaded=await ready;
  if(!loaded)ready=null;
  return loaded;
}

function resultText(result){
  if(typeof result==='string')return result;
  const content=result?.message?.content;
  if(typeof content==='string')return content;
  if(Array.isArray(content))return content.map(v=>typeof v==='string'?v:(v?.text||v?.content||'')).join('');
  if(typeof content?.text==='string')return content.text;
  if(typeof result?.text==='string')return result.text;
  return String(result||'');
}

function opinionOutput(result){
  const text=resultText(result).trim();
  if(!text)return null;
  const json=text.match(/\{[\s\S]*\}/)?.[0];
  if(json){
    try{
      const parsed=JSON.parse(json);
      if(typeof parsed?.comment==='string')return parsed;
    }catch{}
  }
  const plain=text
    .replace(/^```(?:json)?\s*/i,'')
    .replace(/\s*```$/,'')
    .replace(/^\s*(?:최종\s*)?의견\s*[:：]\s*/,'')
    .trim();
  return plain?{comment:plain}:null;
}

const finalProposalFields=['victim','killer','place','method','motive','truth'];
const finalProposalLabels={victim:'피해자',killer:'가해자',place:'장소',method:'사망 원인',motive:'동기',truth:'숨겨진 진실'};
const finalProposalAliases={
  victim:['victim','피해자'],
  killer:['killer','culprit','suspect','가해자','범인','용의자'],
  place:['place','location','장소','사건 장소'],
  method:['method','cause','causeOfDeath','사망 원인','사망원인','방법'],
  motive:['motive','동기'],
  truth:['truth','hiddenTruth','숨겨진 진실','숨겨진진실','숨겨진 사실']
};
const finalAsciiLabels={victim:'VICTIM',killer:'KILLER',place:'PLACE',method:'METHOD',motive:'MOTIVE',truth:'TRUTH',comment:'COMMENT'};
const FINAL_PROPOSAL_TOOL={
  type:'function',
  function:{
    name:'submit_final_proposal',
    description:'공개된 수사 기록만으로 최종 발의 6개 항목과 종합 의견을 제출한다.',
    strict:true,
    parameters:{
      type:'object',
      additionalProperties:false,
      properties:{
        victim:{type:'string',description:'피해자 제안'},
        killer:{type:'string',description:'가해자 제안'},
        place:{type:'string',description:'사건 장소 제안'},
        method:{type:'string',description:'사망 원인 제안'},
        motive:{type:'string',description:'동기 제안'},
        truth:{type:'string',description:'숨겨진 진실 제안'},
        comment:{type:'string',description:'여섯 항목을 연결한 동료의 종합 의견'}
      },
      required:['victim','killer','place','method','motive','truth','comment']
    }
  }
};
function parseJsonValue(value){
  if(typeof value!=='string')return value;
  try{return JSON.parse(value);}catch{return value;}
}

function normalizedProposalValue(value){
  value=parseJsonValue(value);
  if(typeof value==='string')return value.trim();
  if(typeof value==='number'||typeof value==='boolean')return String(value);
  if(Array.isArray(value)){
    const parts=value.map(normalizedProposalValue).filter(Boolean);
    return parts.join(', ').trim();
  }
  if(value&&typeof value==='object'){
    for(const key of ['value','name','text','answer','guess','proposal','content']){
      const normalized=normalizedProposalValue(value[key]);
      if(normalized)return normalized;
    }
  }
  return '';
}

function proposalScore(value){
  value=parseJsonValue(value);
  if(Array.isArray(value)){
    return value.reduce((score,item)=>{
      const label=item?.field??item?.key??item?.label;
      return score+(finalProposalFields.some(field=>finalProposalAliases[field].includes(label))?1:0);
    },0);
  }
  if(!value||typeof value!=='object')return 0;
  return finalProposalFields.reduce((score,field)=>{
    const alias=finalProposalAliases[field].find(key=>value[key]!==undefined);
    return score+(alias?1:0);
  },0);
}

function findProposalSource(value,depth=0,seen=new Set()){
  value=parseJsonValue(value);
  if(!value||typeof value!=='object'||depth>5||seen.has(value))return null;
  seen.add(value);
  let best={value,score:proposalScore(value)};
  const preferred=['proposal','result','data','arguments','args','input','output','finalProposal','final_proposal','answer','payload','response'];
  const children=Array.isArray(value)?value:Object.entries(value).sort(([a],[b])=>Number(preferred.includes(b))-Number(preferred.includes(a))).map(([,child])=>child);
  for(const child of children){
    const found=findProposalSource(child,depth+1,seen);
    if(found&&found.score>best.score)best=found;
  }
  return best;
}

function findComment(value,depth=0,seen=new Set()){
  value=parseJsonValue(value);
  if(!value||typeof value!=='object'||depth>5||seen.has(value))return '';
  seen.add(value);
  for(const key of ['comment','summary','opinion','종합 의견','종합의견']){
    const comment=normalizedProposalValue(value[key]);
    if(comment)return comment;
  }
  for(const child of Array.isArray(value)?value:Object.values(value)){
    const comment=findComment(child,depth+1,seen);
    if(comment)return comment;
  }
  return '';
}

function asciiProposalSection(text,label){
  const all=Object.values(finalAsciiLabels).join('|');
  const match=text.match(new RegExp(`(?:\\*\\*)?${label}(?:\\*\\*)?\\s*(?:::|\\|\\|\\||[:：])\\s*([\\s\\S]*?)(?=\\s*(?:[-*•]\\s*)?(?:\\*\\*)?(?:${all})(?:\\*\\*)?\\s*(?:::|\\|\\|\\||[:：])|$)`,'i'));
  return match?.[1]?.replace(/\*\*\s*$/,'').trim()||'';
}

function finalProposalOutput(result){
  const text=resultText(result).trim();
  let parsed=null;
  const toolCall=result?.message?.tool_calls?.find(call=>call?.function?.name==='submit_final_proposal')
    ||result?.tool_calls?.find(call=>call?.function?.name==='submit_final_proposal');
  const contentTool=[...(Array.isArray(result?.message?.content)?result.message.content:[]),...(Array.isArray(result?.content)?result.content:[])]
    .find(item=>(item?.name==='submit_final_proposal'||item?.function?.name==='submit_final_proposal')&&(item?.input!==undefined||item?.arguments!==undefined||item?.function?.arguments!==undefined));
  const toolArguments=toolCall?.function?.arguments??toolCall?.arguments??toolCall?.input??contentTool?.input??contentTool?.arguments??contentTool?.function?.arguments;
  if(toolArguments!==undefined)parsed=parseJsonValue(toolArguments);
  const json=text.match(/\{[\s\S]*\}/)?.[0];
  if(!parsed&&json){try{parsed=JSON.parse(json);}catch{}}
  if(!parsed&&!text)return null;
  const found=findProposalSource(parsed);
  const source=found?.value??parsed;
  const proposal={};
  for(const field of finalProposalFields){
    const aliases=finalProposalAliases[field];
    const alias=aliases.find(key=>source?.[key]!==undefined);
    if(alias)proposal[field]=normalizedProposalValue(source[alias]);
    if(!proposal[field]&&Array.isArray(source)){
      const item=source.find(entry=>aliases.includes(entry?.field)||aliases.includes(entry?.key)||aliases.includes(entry?.label));
      const value=item?.value??item?.answer??item?.text;
      proposal[field]=normalizedProposalValue(value);
    }
  }
  if(finalProposalFields.some(field=>!proposal[field])){
    const plain=text.replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'');
    for(const field of finalProposalFields){
      if(proposal[field])continue;
      proposal[field]=asciiProposalSection(plain,finalAsciiLabels[field]);
      if(proposal[field])continue;
      const labels=finalProposalAliases[field].filter(label=>/[가-힣]/.test(label));
      for(const label of labels){
        const flexible=label.replace(/\s+/g,'\\s*');
        const match=plain.match(new RegExp(`(?:^|\\n)\\s*(?:[-*•]|\\d+[.)])?\\s*${flexible}\\s*[:：-]\\s*([^\\n]+)`));
        if(match){proposal[field]=match[1].trim();break;}
      }
    }
  }
  let comment=findComment(parsed);
  if(!comment)comment=asciiProposalSection(text,finalAsciiLabels.comment);
  if(!comment){
    const match=text.match(/(?:종합\s*의견|최종\s*의견|의견)\s*[:：]\s*([^\n]+(?:\n(?!\s*(?:피해자|가해자|장소|사망\s*원인|동기|숨겨진\s*진실)\s*[:：])[\s\S]*)?)/);
    if(match)comment=match[1].replace(/\s*```$/,'').trim();
  }
  if(!comment&&finalProposalFields.every(field=>proposal[field])){
    comment=`${proposal.victim} 사건은 ${proposal.place}의 공개 단서와 ${proposal.method} 가능성을 중심으로, ${proposal.motive}와 ${proposal.truth}의 연결을 확인해 보자.`;
  }
  return {comment,proposal};
}

async function puterChat(messages,options={},timeoutMs=AI_REQUEST_TIMEOUT_MS){
  const deadline=Date.now()+timeoutMs;let lastError;
  for(const model of AI_MODELS){
    let timer;
    const remaining=deadline-Date.now();
    if(remaining<500){const error=new Error('AI response timeout');error.code='PUTER_TIMEOUT';throw error;}
    const timeout=new Promise((_,reject)=>{timer=setTimeout(()=>{const error=new Error('AI response timeout');error.code='PUTER_TIMEOUT';reject(error);},remaining);});
    try{return await Promise.race([window.puter.ai.chat(messages,{reasoning_effort:'minimal',verbosity:'low',...options,model}),timeout]);}
    catch(error){if(error?.code==='PUTER_TIMEOUT')throw error;lastError=error;}
    finally{clearTimeout(timer);}
  }
  throw lastError||new Error('AI provider unavailable');
}

function publicBrief(roundNo,extraFacts=[],questionFacts=[],revealedClueIds=null){
  const overview=CASE_OVERVIEW;
  const clueSet=Array.isArray(revealedClueIds)?new Set(revealedClueIds):null;
  const revealed=ROUNDS.slice(0,roundNo).map(round=>{const clues=round.clues.filter(clue=>!clueSet||clueSet.has(clue.id));return clues.length?`ROUND ${round.no} ${round.title}: ${clues.map(c=>`${c.title} - ${c.text}`).join(' / ')}`:'';}).filter(Boolean).join('\n');
  const timeRoom=extraFacts.length?`\n시간의 방에서 추가로 공개된 정보:\n- ${extraFacts.join('\n- ')}`:'';
  const questions=questionFacts.length?`\n플레이어가 집사에게 직접 질문해 얻은 확정 답변:\n${questionFacts.map(item=>`- ROUND ${item.roundNo} 질문: ${item.text} / 집사의 답: ${item.answer}`).join('\n')}`:'';
  return `${overview}\n${revealed}${timeRoom}${questions}`;
}

function companionHintIssue(hint,roundNo,companionId,requiredTerms=[],questionTerms=[],allowedContext=''){
  if(!hint||typeof hint.question!=='string'||typeof hint.comment!=='string')return 'question과 comment가 있는 JSON 형식이 아니다.';
  const question=hint.question.trim(),comment=hint.comment.trim(),combined=`${question} ${comment}`;
  if(!question.endsWith('?'))return '질문이 물음표로 끝나지 않았다.';
  if(question.length<6||question.length>120)return '질문 길이가 범위를 벗어났다.';
  if(comment.length<2||comment.length>180)return '의견 길이가 범위를 벗어났다.';
  if(/<[^>]+>|```|\{\s*"|역할|페르소나|시스템|프롬프트/i.test(combined))return '게임 밖의 형식이나 내부 지시를 포함했다.';
  if(/집사님?|호스트|진행자|선생님/.test(combined)||/당신/.test(question))return '집사를 사건 인물처럼 언급했다.';
  if(companionIds.some(id=>new RegExp(`\\b${id}\\b`,'i').test(combined)))return '내부 영문 ID를 포함했다.';
  if(companionNames.some(name=>question.includes(name)))return '동료 이름을 사건 인물처럼 언급했다.';
  if(/정답은|범인은|가해자는|살인자는|죽인 사람은/.test(comment))return '공개 전 정답을 의견에서 단정했다.';
  if(/또는|혹은|그리고|이거나/.test(question))return '한 질문에 두 가지 가설을 합쳤다.';
  const blocked=(futureTerms[roundNo]||[]).find(term=>combined.includes(term)&&!allowedContext.includes(term));
  if(blocked)return `아직 공개되지 않은 '${blocked}' 정보를 새로 만들었다.`;
  if(!(visibleTerms[roundNo]||[]).some(term=>combined.includes(term))&&!/(현장|흔적|피해자|사망|죽음|사고)/.test(combined))return '현재 공개 단서와 연결되는 표현이 없다.';
  if(requiredTerms.length&&!requiredTerms.some(term=>combined.includes(term)))return `최신 시간의 방 정보 핵심어(${requiredTerms.join(', ')})를 반영하지 않았다.`;
  if(questionTerms.length&&!questionTerms.some(term=>combined.includes(term)))return `가장 최근 집사 문답의 핵심어(${questionTerms.join(', ')})를 반영하지 않았다.`;
  if(!COMPANIONS.some(c=>c.id===companionId))return '동료 정보가 올바르지 않다.';
  return '';
}

export function isValidCompanionHint(hint,roundNo,companionId,requiredTerms=[],questionTerms=[],allowedContext=''){
  return companionHintIssue(hint,roundNo,companionId,requiredTerms,questionTerms,allowedContext)==='';
}

export async function companionHint(roundNo,companionId,roomContext={facts:[],currentFacts:[],requiredTerms:[],questionFacts:[],latestQuestion:null,allowedContext:''}){
  const companion=COMPANIONS.find(c=>c.id===companionId);
  if(!companion)throw new Error('동료 정보를 찾을 수 없습니다.');
  if(!(await ensurePuter())||!window.puter?.ai)throw new Error('동료가 잠시 생각을 정리하지 못했습니다. 다시 말을 걸어 주세요.');
  const facts=Array.isArray(roomContext?.facts)?roomContext.facts:[];
  const currentFacts=Array.isArray(roomContext?.currentFacts)?roomContext.currentFacts:[];
  const requiredTerms=Array.isArray(roomContext?.requiredTerms)?roomContext.requiredTerms:[];
  const questionFacts=Array.isArray(roomContext?.questionFacts)?roomContext.questionFacts:[];
  const allowedContext=typeof roomContext?.allowedContext==='string'?roomContext.allowedContext:[...facts,...questionFacts.flatMap(item=>[item.text,item.answer])].join(' ');
  const latestQuestion=roomContext?.latestQuestion&&typeof roomContext.latestQuestion.text==='string'?roomContext.latestQuestion:null;
  const questionTerms=latestQuestion?(visibleTerms[roundNo]||[]).filter(term=>latestQuestion.text.includes(term)):[];
  const latestRoomFact=currentFacts.at(-1)||'';
  const roomRule=latestRoomFact?`플레이어가 시간의 방에서 직접 얻어 너에게 공유한 최신 정보는 다음과 같다: "${latestRoomFact}"\n이 정보를 절대 무시하지 말고, 질문이나 짧은 의견에서 핵심 대상이나 의미를 직접 언급해 이번 의견의 중심 근거로 사용한다.`:'플레이어가 이번 라운드 시간의 방에서 공유한 추가 정보는 아직 없다.';
  const questionRule=latestQuestion?`플레이어가 가장 최근 집사에게 물은 질문은 "${latestQuestion.text}"이고, 집사의 확정 답변은 "${latestQuestion.answer}"이다. 이 질문과 답을 절대 무시하거나 반대로 해석하지 말고, 그 결과로 이미 확인되거나 배제된 내용을 짧은 의견에 언급한 뒤 다음 질문을 제안한다.`:'아직 집사에게서 얻은 질문 결과는 없다.';
  const system=`너는 비공식 팬메이드 추리 게임의 동료 조력자 '${companion.name}'다.
게임용 성격: ${persona[companionId]}
ROUND 1부터 ROUND 4까지 모든 동료 의견은 반드시 네가 직접 생성한다. 미리 작성된 고정 질문이나 대체 문구는 사용하지 않는다.
아래 공개 정보 안에서만 말한다. 공개 정보에 없는 인물, 과거 사건, 범인, 정답을 추측하거나 새로 만들지 않는다.
${roomRule}
${questionRule}
동료 자신이나 다른 동료를 범인으로 지목하지 않는다. 내부 영문 ID를 절대 출력하지 않는다.
집사는 사건 인물이 아니라 답변만 판정하는 게임 호스트다. 집사가 사건 물건을 관리하거나 문을 열었거나 사건에 관여했다고 가정하지 않는다.
질문 문장에 '집사', '집사님', '당신' 같은 호칭을 넣지 말고 사건의 사실 자체만 묻는다.
한 문장에는 반드시 한 가지 사실만 담고 '또는', '혹은', '그리고'로 두 가설을 합치지 않는다.
게임 호스트에게 입력할 수 있는 예/아니요형 질문 하나를 제안한다.
JSON만 출력한다: {"question":"질문 한 문장?","comment":"성격이 드러나는 짧은 제안"}`;
  let lastIssue='',timedOut=false,providerFailed=false;
  const deadline=Date.now()+COMPANION_TOTAL_TIMEOUT_MS;
  for(let attempt=0;attempt<3;attempt++){
    try{
      const remaining=deadline-Date.now();
      if(remaining<1500){timedOut=true;break;}
      const retryRule=attempt===0?'':`이전 출력은 다음 이유로 사용할 수 없었다: ${lastIssue||'공개 정보 또는 형식 규칙 불일치'} 반드시 이 문제를 고쳐 완전히 새로 작성한다. 시간의 방 핵심어 중 하나(${requiredTerms.join(', ')||'없음'})와 최근 집사 문답 핵심어 중 하나(${questionTerms.join(', ')||'없음'})를 자연스럽게 반영한다.`;
      const response=await puterChat([{role:'system',content:system},{role:'user',content:`현재 ROUND ${roundNo}까지 플레이어에게 공개된 정보:\n${publicBrief(roundNo,facts,questionFacts)}\n${retryRule}\n반드시 물음표로 끝나는 질문 한 문장과 짧은 의견을 JSON 하나로만 답한다.`}],{temperature:.25,max_tokens:180},Math.min(AI_REQUEST_TIMEOUT_MS,remaining));
      const raw=resultText(response).match(/\{[\s\S]*\}/)?.[0];
      const output=raw?JSON.parse(raw):null;
      const enforceExactContext=attempt<2;
      lastIssue=companionHintIssue(output,roundNo,companionId,enforceExactContext?requiredTerms:[],enforceExactContext?questionTerms:[],allowedContext);
      if(!lastIssue)return {question:output.question.trim(),comment:output.comment.trim(),source:'puter',timeRoomFactCount:currentFacts.length,questionFactCount:questionFacts.length};
    }catch(error){if(error?.code==='PUTER_TIMEOUT'){timedOut=true;break;}if(error instanceof SyntaxError){lastIssue='JSON 형식이 올바르지 않았다.';continue;}providerFailed=true;break;}
  }
  const error=new Error(timedOut?'동료의 의견 정리가 너무 길어져 이번 요청을 멈췄습니다.':providerFailed?'동료와 연결이 잠시 끊겼습니다.':'동료의 생각이 아직 정리되지 않았습니다. 잠시 후 다시 말을 걸어 주세요.');
  error.code=timedOut?'PUTER_TIMEOUT':providerFailed?'PUTER_UNAVAILABLE':'PUTER_INVALID_RESPONSE';
  throw error;
}

function finalOpinionIssue(opinion,companionId,publicContext=''){
  if(!opinion||typeof opinion.comment!=='string')return 'comment가 있는 JSON 형식이 아니다.';
  if(!opinion.proposal||typeof opinion.proposal!=='object')return '최종 발의 6개 항목이 없다.';
  for(const field of finalProposalFields){
    const value=opinion.proposal[field];
    if(typeof value!=='string'||value.trim().length<2||value.trim().length>220)return `${finalProposalLabels[field]} 항목이 올바르지 않다.`;
    if(/특정\s*(?:하기\s*)?어려움|알\s*수\s*없|판단\s*(?:불가|어려움)|불명|모름/.test(value))return `${finalProposalLabels[field]} 항목에 실제 추천이 없다.`;
  }
  const comment=opinion.comment.trim();
  const combined=[comment,...finalProposalFields.map(field=>opinion.proposal[field])].join(' ');
  if(comment.length<18||comment.length>500)return '최종 의견 길이가 범위를 벗어났다.';
  if(/<[^>]+>|```|\{\s*"|역할|페르소나|시스템|프롬프트|Puter|AI/i.test(combined))return '게임 밖의 형식이나 내부 지시를 포함했다.';
  const benignHostReferences=/(?:집사(?:님)?(?:의|에게|한테서|로부터)?\s*)?(?:질문(?:을)?\s*(?:통해|해서|하여|해)\s*)?(?:얻은|받은|확인한|확정된)?\s*(?:집사\s*)?(?:답변|판정|문답|응답|대답|확인\s*기록)/g;
  const hostRemainder=combined.replace(benignHostReferences,' 확인된 문답 기록 ');
  if(/집사님?|호스트|진행자/.test(hostRemainder))return '게임 호스트를 사건 인물처럼 언급했다.';
  if(companionIds.some(id=>new RegExp(`\\b${id}\\b`,'i').test(combined)))return '내부 영문 ID를 포함했다.';
  if(!COMPANIONS.some(c=>c.id===companionId))return '동료 정보가 올바르지 않다.';
  const anchors=[...new Set([...Object.values(visibleTerms).flat(),'피해자','가해자','현장','단서','흔적','감전'])].filter(term=>!publicContext||publicContext.includes(term));
  if(!anchors.some(term=>combined.includes(term)))return '공개 단서의 핵심어가 포함되지 않았다.';
  const invented=['총','권총','칼','흉기','독극물','약물','교살','추락','폭발','화재','총상','자상','목격자','경찰','형사'].find(term=>combined.includes(term)&&!publicContext.includes(term));
  if(invented)return `공개 기록에 없는 '${invented}' 정보를 새로 만들었다.`;
  return '';
}

export function isValidFinalCompanionOpinion(opinion,companionId,publicContext=''){
  return finalOpinionIssue(opinion,companionId,publicContext)==='';
}

export async function finalCompanionOpinion(companionId,roomContext={facts:[],questionFacts:[],clueIds:[]}){
  const companion=COMPANIONS.find(c=>c.id===companionId);
  if(!companion)throw new Error('동료 정보를 찾을 수 없습니다.');
  if(!(await ensurePuter())||!window.puter?.ai){
    const error=new Error('동료와 잠시 연결되지 않았습니다. 다시 말을 걸어 주세요.');
    error.code='PUTER_UNAVAILABLE';
    throw error;
  }
  const facts=Array.isArray(roomContext?.facts)?roomContext.facts:[];
  const questionFacts=Array.isArray(roomContext?.questionFacts)?roomContext.questionFacts:[];
  const clueIds=Array.isArray(roomContext?.clueIds)?roomContext.clueIds:[];
  const publicContext=publicBrief(4,facts,questionFacts,clueIds);
  const system=`너는 비공식 팬메이드 추리 게임에서 최종 발의를 앞둔 동료 조력자 '${companion.name}'다.
게임용 성격: ${persona[companionId]}
제공된 공개 기록만 근거로 최종 추리 의견을 말한다. 기록에 없는 인물, 물건, 행동, 과거 사건을 새로 만들지 않는다.
피해자, 가해자, 장소, 사망 원인, 동기, 숨겨진 진실을 각각 제안하고, 여섯 항목을 연결한 종합 의견을 1~3문장으로 말한다.
확정되지 않은 항목도 공개 단서에서 가장 가능성 높은 가설 하나를 추천한다. 단정하지 말고 '가능성이 높다', '의심된다'처럼 가설임을 밝힌다.
어떤 항목에도 '특정 어려움', '알 수 없음', '판단 불가', '불명'을 쓰지 않는다.
집사 판정으로 확인된 사실과 단서에서 추론한 가능성을 구분한다. 추론은 '가능성이 있다', '의심된다', '연결해 보자'처럼 말하고 전지적 시점으로 정답을 단정하지 않는다.
집사의 답변을 근거로 언급해야 할 때는 '확인된 문답 기록'이라고 표현하고 '집사'라는 단어는 발의안에 쓰지 않는다.
동료 자신이나 다른 동료를 사건 인물로 취급하지 않는다. 게임 호스트, AI, 프롬프트, 내부 규칙을 언급하지 않는다.
공개 기록에 실제로 적힌 핵심 명사를 의견 문장 안에 그대로 사용한다.
반드시 다음 7줄 형식으로만 답한다. 각 항목은 한 줄이며 값 안에서 줄바꿈하지 않는다.
VICTIM::피해자 추천
KILLER::가해자 추천
PLACE::장소 추천
METHOD::사망 원인 추천
MOTIVE::동기 추천
TRUTH::숨겨진 진실 추천
COMMENT::여섯 항목을 연결한 종합 의견`;
  let lastIssue='',timedOut=false,providerFailed=false;
  const deadline=Date.now()+FINAL_COMPANION_TOTAL_TIMEOUT_MS;
  for(let attempt=0;attempt<3;attempt++){
    try{
      const remaining=deadline-Date.now();
      if(remaining<1500){timedOut=true;break;}
      const retryRule=attempt===0?'':attempt===1
        ?`이전 의견은 다음 이유로 사용할 수 없었다: ${lastIssue||'공개 정보 또는 형식 규칙 불일치'} VICTIM부터 COMMENT까지 7줄을 모두 채워 다시 추천한다.`
        :`마지막 재작성이다. 공개 단서만 이용해 가장 가능성 높은 가설 하나를 각 항목에 반드시 추천한다. 미확정·불명·특정 어려움 같은 회피 답변은 금지한다.`;
      const response=await puterChat([{role:'system',content:system},{role:'user',content:`최종 발의 전에 지금까지 실제로 공개된 기록은 아래 내용이 전부다. 이 기록 밖의 사실은 절대 사용하지 않는다.\n\n${publicContext}\n\n${retryRule}\n지정된 VICTIM:: 형식부터 COMMENT:: 형식까지 정확히 7줄로 답한다.`}],{temperature:.15,max_tokens:420},Math.min(FINAL_AI_REQUEST_TIMEOUT_MS,remaining));
      const output=finalProposalOutput(response);
      lastIssue=finalOpinionIssue(output,companionId,publicContext);
      if(!lastIssue)return {comment:output.comment.trim(),proposal:output.proposal,source:'puter',timeRoomFactCount:facts.length,questionFactCount:questionFacts.length};
    }catch(error){if(error?.code==='PUTER_TIMEOUT'){timedOut=true;break;}providerFailed=true;break;}
  }
  const error=new Error(timedOut?'동료의 최종 의견 정리가 너무 길어져 이번 요청을 멈췄습니다.':providerFailed?'동료와 연결이 잠시 끊겼습니다.':'동료의 최종 의견이 아직 정리되지 않았습니다.');
  error.code=timedOut?'PUTER_TIMEOUT':providerFailed?'PUTER_UNAVAILABLE':'PUTER_INVALID_RESPONSE';
  error.reason=lastIssue;
  throw error;
}

const caseFacts=`
[등장인물과 역할]
- 피해자는 전기 수리공 마크 리다.
- 그랜트는 죽은 사람이 아니라 마크를 죽인 가해자다.
- 최예선, 콩진호, 남출구, 이성민은 플레이어의 가상 동료이며 사건의 범인이나 가해자가 아니다.
- 집사는 사건 세계의 인물이 아니다. 집사는 플레이어의 질문을 판정하는 게임 호스트일 뿐이며 문을 열거나 물건을 관리하거나 사건에 관여하지 않았다.

[사건의 확정 사실]
- 마크는 질식, 자살, 자연사, 단순 작업 사고로 죽지 않았다.
- 마크의 사망 원인은 감전이다.
- 마크는 수리 중 오래된 보관함과 12년 전 극장 금화 절도 사건의 기록을 발견했다.
- 그랜트는 과거 절도 기록이 드러나는 것을 막기 위해 마크를 죽였다.
- 그랜트는 젖은 바닥과 전기 설비를 이용해 감전 사고처럼 보이도록 현장을 위장했다.
- 12년 전 금화 절도 사건과 숨겨진 기록은 현재 사건의 동기와 직접 관련 있다.
- 바닥의 물과 내려간 차단기는 단순히 폭풍우 때문에 생긴 우연한 흔적이 아니다.

[ROUND 1 현장 세부 사실]
- 배전실 바닥의 물은 폭풍우로 우연히 들어온 빗물만이 아니다. 그랜트가 감전 환경을 만들기 위해 의도적으로 더한 물이다.
- 마크의 손과 팔에는 전기 충격과 일치하는 흔적이 있다. 이 흔적은 마크의 감전 사망과 직접 관련 있다.
- 차단기는 마크가 감전되어 쓰러진 뒤 그랜트가 현장을 사고처럼 꾸미는 과정에서 내렸다.
- 발견 당시 차단기가 내려가 있었다고 해서 마크가 감전될 당시에도 전기가 끊겨 있었던 것은 아니다.
- 열려 있던 작업가방은 마크가 예상하지 못한 기록과 보관함을 발견한 일과 관련 있다.

[ROUND 2 작업 흔적 세부 사실]
- 손상된 장갑은 마크가 전기 충격을 받을 당시 생긴 흔적이며 사망과 관련 있다.
- 마크가 예정에 없던 구역을 확인한 것은 오래된 보관 공간과 숨겨진 기록을 발견한 일과 관련 있다.
- 낡은 열쇠는 일반 출입문이 아니라 오래된 보관함을 여는 데 쓰였다.
- 작업가방의 메모는 마크가 예정된 수리 외에 오래된 보관함을 조사하려 했음을 보여준다.

[ROUND 3 분장실 세부 사실]
- 라벨 없는 스프레이 병에는 물에 섞어 전기가 더 잘 흐르게 만드는 용액이 들어 있었다.
- 하얀 잔류물은 물에 녹는 전도성 성분이며 사건과 직접 관련 있다.
- 배전실 바닥의 물에서는 분장실의 하얀 잔류물과 같은 계열의 성분이 검출됐다.
- 스프레이 병과 잔류물은 그랜트가 감전 환경을 준비하는 데 사용한 흔적이다.
- 찢긴 오래된 티켓은 12년 전 극장 사건의 시기와 연결되며 현재 사건의 과거 배경을 찾는 단서다.

[ROUND 4 과거 기록 세부 사실]
- 12년 전 신문은 극장 금화 절도 사건을 다루며 현재 살인의 동기와 직접 관련 있다.
- 금화 목록과 장부는 그랜트가 사라진 금화의 행방과 과거 절도 기록을 알고 있었음을 보여준다.
- 낡은 사진 속 두 사람은 마크와 그랜트이며, 두 사람은 12년 전부터 서로 알고 있었다.
- 마크가 발견한 기록은 그랜트의 과거 절도를 드러낼 수 있었고, 이것이 그랜트가 마크를 죽인 이유다.
`;

async function requestJudgeCategory(system,user,attempts=2){
  for(let attempt=0;attempt<attempts;attempt++){
    try{
      const response=await puterChat([{role:'system',content:system},{role:'user',content:user}],{temperature:0,max_tokens:24});
      const raw=resultText(response).trim();
      const json=raw.match(/\{[\s\S]*\}/)?.[0];
      const category=json?String(JSON.parse(json).category||'').toUpperCase():raw.toUpperCase().replace(/[^A-Z]/g,'');
      if(['YES','NO','MAYBE','IRRELEVANT'].includes(category))return category;
    }catch(error){if(error?.code==='PUTER_TIMEOUT')return null;}
  }
  return null;
}

export async function judgeQuestion(question,roundNo=1){
  if(!(await ensurePuter())||!window.puter?.ai)throw new Error('집사가 사건 기록을 확인하지 못했습니다. 시간은 늘어나지 않았으니 다시 질문해 주세요.');
  const system=`너는 추리 게임의 판정 전용 집사 AI다. 아래 확정 사실만을 근거로 사용자의 질문을 판정한다.
${caseFacts}
[판정 규칙]
1. 질문 문장의 주어, 목적어, 조사(가/이/를/은/는)를 정확히 구분한다. 주어와 목적어를 뒤바꾸거나 생략된 인물을 임의로 만들지 않는다.
2. '너', '네가', '당신', '집사', '집사님'은 모두 게임 호스트인 집사를 가리킨다. 집사는 사건 인물이 아니므로 집사가 살인·절도·문 개방·물건 관리·사건 관여를 했는지 묻는 질문은 IRRELEVANT이다.
3. 주어가 생략된 채 '죽였나요?', '열어줬나요?'처럼 상대에게 행동을 묻는 문장도 집사에게 묻는 것으로 보고 IRRELEVANT로 판정한다.
4. 그랜트는 죽지 않았다. 그랜트가 마크를 죽였다. 마크가 그랜트를 죽인 것이 아니다.
5. 질문의 모든 내용이 확정 사실과 일치하면 YES다.
6. 질문의 모든 내용이 확정 사실과 반대면 NO다.
7. 복합 질문에서 일부만 맞거나, 대명사의 대상이 불분명하거나, 사실만으로 확정할 수 없으면 MAYBE다.
8. 사건 해결과 무관한 질문이나 집사 자신을 사건 인물로 전제한 질문은 IRRELEVANT이다.
9. 공개 라운드와 관계없이 위 확정 사실을 기준으로 진실하게 답한다.
10. MAYBE는 기본 답변이 아니다. 질문의 주어와 대상이 분명하고 위 사실표로 참·거짓을 결정할 수 있으면 반드시 YES 또는 NO로 답한다.
11. 질문이 사실표와 같은 의미를 자연스러운 다른 표현으로 물어도 논리적으로 같은 사실이면 YES 또는 NO로 판정한다.

[판정 예시]
- '네가 그랜트를 죽였나요?' => IRRELEVANT
- '집사님이 마크를 죽였나요?' => IRRELEVANT
- '그랜트가 죽었나요?' => NO
- '마크가 그랜트를 죽였나요?' => NO
- '그랜트가 마크를 죽였나요?' => YES
- '마크는 질식사했나요?' => NO
- '마크의 사망 원인은 감전인가요?' => YES
- '바닥의 물은 사건과 관련 있나요?' => YES
- '바닥의 물은 폭풍우 때문에 우연히 생겼나요?' => NO
- '차단기는 마크가 쓰러진 뒤 내려갔나요?' => YES
- '손상된 장갑은 마크의 죽음과 관련 있나요?' => YES
- '낡은 열쇠는 보관함을 여는 데 쓰였나요?' => YES
- '하얀 잔류물은 감전 환경을 만드는 데 쓰였나요?' => YES
- '12년 전 금화 절도는 현재 사건의 동기와 관련 있나요?' => YES
- '그가 마크를 죽였나요?'처럼 '그'의 대상이 불명확한 질문 => MAYBE
- '마크의 신발 색은 검은색인가요?' => IRRELEVANT

정확히 {"category":"YES"} 형식의 JSON 하나만 출력한다. category는 YES, NO, MAYBE, IRRELEVANT 중 하나다. 설명이나 다른 문장을 절대 추가하지 않는다.`;
  const user=`현재 라운드: ${roundNo}\n판정할 질문: ${question}`;
  const primary=await requestJudgeCategory(system,user,2);
  if(!primary)throw new Error('집사가 답을 정리하지 못했습니다. 시간은 늘어나지 않았으니 다시 질문해 주세요.');
  if(primary!=='MAYBE')return primary;
  const verifier=`너는 추리 게임의 엄격한 재판정자다. 아래 사실표로 질문의 참·거짓을 다시 확인한다.\n${caseFacts}\n주어와 대상이 분명하고 사실표로 결정 가능하면 반드시 YES 또는 NO다. MAYBE는 대명사 대상이 불명확하거나 한 질문에 여러 사실이 섞여 일부만 맞을 때만 사용한다. 사건과 무관하거나 집사를 사건 인물로 전제하면 IRRELEVANT다. 정확히 {"category":"YES"} 형식의 JSON 하나만 출력한다.`;
  const verified=await requestJudgeCategory(verifier,user,2);
  return verified||primary;
}

export const answerText={YES:fixed[0],NO:fixed[1],MAYBE:fixed[2],IRRELEVANT:fixed[3]};
