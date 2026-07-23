import { CASE_OVERVIEW, CASE_OVERVIEW_SUMMARY, CASE_OVERVIEW_DETAILS, ROUNDS, COMPANIONS, TIME_ROOM_HINTS, TIME_ROOM_HINT_TERMS, ENDING } from './case-data.js';
import { state, notify, patchAttempt, resetDemo, restoreLocalProgress } from './state.js?v=round31';
import { openPopup, closePopup, setPopupBusy } from './popup.js';
import { companionHint, finalCompanionOpinion, judgeQuestion, answerText, ensurePuter, isValidCompanionHint, isValidFinalCompanionOpinion } from './puter-ai.js?v=round41';
import { firebaseConfigured, firebaseDomainAuthorized, signInGoogle, saveCloudRecord, loadCloudRankings, cloudErrorMessage } from './firebase-ranking.js';
import { evaluateFinalAnswers } from './final-evaluation.js';

const $=s=>document.querySelector(s);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const currentRound=()=>ROUNDS[state.attempt.roundNo-1];
const key=(round,id)=>`${round}:${id}`;
const phaseLabel={CASE_HOME:'사건 시작',CASE_START:'사건 개요',ROUND_INTRO:'다음 라운드',IMAGE_REVEAL:'그림 공개',CLUE_SELECT:'단서 조사',COMPANION_SELECT:'동료 의견',QUESTION_SELECT:'집사 질문',ROUND_SUMMARY:'라운드 정리',FINAL_ANSWER:'최종 발의',ENDING_STORY:'사건 해설',RESULT:'결과'};
let cloudReady=false,cloudIssue='';
function currentEvaluation(){return evaluateFinalAnswers(state.finalDraft);}
function evaluationHtml(evaluation){
  const statusLabel={correct:'정답',partial:'부분정답',wrong:'오답'};
  return `<section class="evaluation-panel"><div class="evaluation-head"><span>항목별 판정</span><b>${evaluation.score} / ${evaluation.total}점</b><p>정답 ${evaluation.correct} · 부분정답 ${evaluation.partial} · 오답 ${evaluation.wrong}</p></div><div class="evaluation-list">${evaluation.items.map(item=>`<article class="evaluation-row ${item.status}"><header><b>${esc(item.label)}</b><em>${statusLabel[item.status]}</em></header><div class="evaluation-answer"><small>내 발의</small><p>${esc(item.answer||'미입력')}</p></div><div class="evaluation-standard"><small>정답 기준</small><p>${esc(item.expected)}</p></div><footer>${esc(item.reason)}</footer></article>`).join('')}</div></section>`;
}

function elapsedMs(){if(!state.attempt.startedAt)return 0;const started=typeof state.attempt.startedAt==='number'?state.attempt.startedAt:Date.parse(state.attempt.startedAt);const end=state.attempt.completedAt?(typeof state.attempt.completedAt==='number'?state.attempt.completedAt:Date.parse(state.attempt.completedAt)):Date.now();return Math.max(0,end-started)+state.attempt.penaltyMs;}
function formatTime(ms){const sec=Math.floor(ms/1000);return `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`;}
function setPhase(phase){patchAttempt({phase});}
function toast(message,error=false){const root=$('#toastRoot');root.innerHTML=`<div class="toast ${error?'error':''}">${esc(message)}</div>`;setTimeout(()=>root.innerHTML='',3400);}

function renderHud(){
  $('#hudRound').textContent=state.attempt.status==='not_started'?'준비':`R${state.attempt.roundNo}/4`;
  const currentMs=elapsedMs();
  $('#hudTime').textContent=formatTime(currentMs);
  const popupTime=$('#popupMiniTime');
  if(popupTime){popupTime.textContent=formatTime(currentMs);popupTime.parentElement.classList.toggle('warning',currentMs>=300000&&currentMs<600000);popupTime.parentElement.classList.toggle('danger',currentMs>=600000);}
  $('#hudTimeStat').classList.toggle('warning',currentMs>=300000&&currentMs<600000);
  $('#hudTimeStat').classList.toggle('danger',currentMs>=600000);
  $('#hudQuestions').textContent=`${state.attempt.totalQuestions}회`;
  $('#hudLeader').textContent=state.leader?formatTime(state.leader.timeMs):'기록 없음';
  $('#hudLeaderMeta').textContent=state.leader?`${(Number(state.leader.score2)||0)/2}/6점 · 질문 ${state.leader.questions}회`:'';
}
function flashPenalty(label='+1:00'){const stat=$('#hudTimeStat'),badge=$('#hudPenalty'),popupTimer=document.querySelector('.popup-mini-timer');badge.textContent=label;stat.classList.remove('penalty-flash');popupTimer?.classList.remove('penalty-flash');void stat.offsetWidth;stat.classList.add('penalty-flash');popupTimer?.classList.add('penalty-flash');setTimeout(()=>{badge.textContent='';stat.classList.remove('penalty-flash');popupTimer?.classList.remove('penalty-flash');},1800);renderHud();}
function detailParagraphs(){return esc(CASE_OVERVIEW_DETAILS).split(/\n\n/).map(text=>`<p>${text}</p>`).join('');}
function overviewHtml(){return `<section class="brief-main"><span>최초 공개</span><strong>${esc(CASE_OVERVIEW_SUMMARY)}</strong></section><section class="brief-details"><small>현장 상세 기록</small>${detailParagraphs()}</section>`;}
function timeRoomLimit(roundNo=state.attempt.roundNo){return (TIME_ROOM_HINTS[roundNo]||[]).length;}
function timeRoomCount(roundNo=state.attempt.roundNo){return Math.min(timeRoomLimit(roundNo),Number(state.timeRoomVisits?.[roundNo])||0);}
function revealedTimeRoomFacts(){return ROUNDS.slice(0,state.attempt.roundNo).flatMap(round=>(TIME_ROOM_HINTS[round.no]||[]).slice(0,timeRoomCount(round.no)));}
function revealedQuestionFacts(roundNo=state.attempt.roundNo){return state.questions.filter(item=>item.roundNo<=roundNo).map(item=>({roundNo:item.roundNo,text:item.text,answer:item.answerText||answerText[item.category]||answerText.MAYBE}));}
function currentCompanionContext(roundNo=state.attempt.roundNo){const count=timeRoomCount(roundNo),facts=revealedTimeRoomFacts(),questionFacts=revealedQuestionFacts(roundNo);return {facts,currentFacts:(TIME_ROOM_HINTS[roundNo]||[]).slice(0,count),requiredTerms:count?(TIME_ROOM_HINT_TERMS[roundNo]?.[count-1]||[]):[],questionFacts,latestQuestion:questionFacts.at(-1)||null,allowedContext:[...facts,...questionFacts.flatMap(item=>[item.text,item.answer])].join(' ')};}
function currentFinalContext(){const context=currentCompanionContext(4);return {...context,clueIds:[...state.attempt.clueIds]};}
function returnFromTimeRoom(origin){if(origin==='question')return openQuestionSelect;if(origin==='clue')return openClueSelect;return openCompanionSelect;}
function isBetterRecord(candidate,current){const candidateScore=Number(candidate?.score2)||0,currentScore=Number(current?.score2)||0;return !current||candidateScore>currentScore||(candidateScore===currentScore&&(candidate.questions<current.questions||(candidate.questions===current.questions&&candidate.timeMs<current.timeMs)));}
function readDemoLeader(){try{const value=JSON.parse(localStorage.getItem('markMysteryLocalLeaderV2')||'null');if(value&&Number.isFinite(value.timeMs)&&Number.isFinite(value.questions)&&Number.isFinite(value.score2))return value;}catch{}return null;}
function saveDemoLeader(){const evaluation=currentEvaluation();const candidate={timeMs:elapsedMs(),questions:state.attempt.totalQuestions,score2:evaluation.score2,name:'이 기기의 최고 기록'};const current=readDemoLeader();if(isBetterRecord(candidate,current)){try{localStorage.setItem('markMysteryLocalLeaderV2',JSON.stringify(candidate));}catch{}state.leader=candidate;notify();}}
async function loadLeader(){
  const demo=readDemoLeader();
  if(demo)state.leader=demo;
  if(firebaseConfigured()){
    try{
      if(!await firebaseDomainAuthorized()){const error=new Error('승인 도메인 누락');error.code='AUTH_DOMAIN_MISSING';throw error;}
      const first=(await loadCloudRankings())[0];
      cloudReady=true;cloudIssue='';
      if(first)state.leader={timeMs:Number(first.officialTimeMs)||0,questions:Number(first.questionsUsed)||0,score2:Number(first.score2)||0,name:first.displayName||'1위'};
    }catch(error){cloudReady=false;cloudIssue=cloudErrorMessage(error);}
  }
  notify();
  renderHud();
}
function renderDashboard(){
  renderHud();
  const roundNo=state.attempt.roundNo;
  const tiles=ROUNDS.map(round=>{const cls=state.attempt.status==='completed'||round.no<roundNo?'done':round.no===roundNo?'active':'';const status=state.attempt.status==='completed'||round.no<roundNo?'완료':round.no===roundNo?phaseLabel[state.attempt.phase]||'진행 중':'잠김';return `<article class="round-tile ${cls}"><small>ROUND ${round.no}</small><b>${round.title}</b><span>${status}</span></article>`}).join('');
  const name=state.user?.displayName||'로그인 필요';
  const primary=state.attempt.status==='completed'?'내 결과 보기':state.attempt.status==='in_progress'?'이어서 진행':'사건 시작';
  const cast=COMPANIONS.map(c=>`<span class="cast-mini"><img src="${c.image}" alt="${c.name}"><b>${c.name}</b></span>`).join('');
  $('#caseDashboard').innerHTML=`<div><span class="dashboard-kicker">사건 기록 01 · 미스터리 타임</span><h1 class="dashboard-title">마크의<br>마지막 수리</h1><p class="dashboard-lead">폭풍우가 치던 밤, 폐극장 배전실에서 발견된 전기 수리공.<br>네 명의 동료와 함께 사건의 전말을 추리하세요.</p><div class="round-progress">${tiles}</div><div class="cast-strip" aria-label="함께하는 동료">${cast}</div><div class="dash-actions"><button class="button primary" id="continueButton">${primary} →</button></div><p class="dash-note">진행 상황은 이 브라우저에 자동 저장됩니다 · 질문을 확정할 때마다 개인 시간 +1분</p></div>`;
  $('#continueButton').onclick=startOrResume;
}

async function startOrResume(){
  if(state.attempt.status==='completed'){openResult();return;}
  if(state.attempt.status==='not_started'){resetDemo();openCaseStart();}
  else openByPhase();
}

function openCaseStart(){
  setPhase('CASE_START');
  const cast=COMPANIONS.map(c=>`<span class="cast-mini"><img src="${c.image}" alt="${c.name}"><b>${c.name}</b></span>`).join('');
  openPopup({kicker:'CASE 01 · 사건 개요',title:'전기 수리공 마크의 사망 사건',lead:'현장에 처음 공개된 내용입니다. 단순 사고인지부터 의심해 보세요.',body:`<div class="case-brief"><div class="brief-scene">${overviewHtml()}</div><div class="brief-questions"><span><b>피해자는 누구인가?</b></span><span><b>왜 죽었는가?</b></span><span><b>숨겨진 진실은 무엇인가?</b></span></div></div><div class="cast-strip" aria-label="함께 추리할 동료">${cast}</div><div class="guide-step"><b>1</b><span>먼저 첫 번째 현장 사진을 확인합니다. 사진이 공개되면 ‘시간의 방’에서 라운드마다 추가 정보 3개를 얻을 수 있습니다.</span></div>`,actions:[{label:'사건 내용을 확인했습니다 →',primary:true,onClick:openRoundIntro}]});
}

function openRoundIntro(){
  setPhase('ROUND_INTRO');const round=currentRound();
  openPopup({kicker:`ROUND ${round.no} / 4`,title:'새로운 그림이 공개됩니다',lead:round.intro,body:`<div class="summary-grid"><div><span>이번 라운드 단서</span><b>3개</b></div><div><span>집사 질문</span><b>최대 3회</b></div><div><span>누적 질문</span><b>${state.attempt.totalQuestions}회</b></div></div>`,actions:[{label:'그림 공개 →',primary:true,onClick:openImage}]});
}
function openImage(){
  setPhase('IMAGE_REVEAL');const round=currentRound();
  openPopup({kicker:`ROUND ${round.no} · 그림 공개`,title:round.title,lead:'사진 전체를 확인하세요. 다음 단계에서 단서 세 곳이 표시됩니다.',body:imageHtml(round,false),actions:[{label:'사진을 확인했습니다 · 단서 찾기 →',primary:true,onClick:openClueSelect}]});
}
function imageHtml(round,showPins=true){
  const opened=new Set(state.attempt.clueIds.filter(id=>id.startsWith(`r${round.no}_`)));
  const pins=showPins?round.clues.map(c=>`<button class="clue-pin ${opened.has(c.id)?'checked':''}" type="button" data-clue="${c.id}" aria-label="${c.title} 단서">${opened.has(c.id)?'✓':'?'}</button>`).join(''):'';
  return `<figure class="popup-image-frame"><div class="popup-image-canvas"><img src="${round.image}" alt="${esc(round.title)} 현장">${pins}</div><figcaption class="image-caption"><span>ROUND ${round.no} 현장 사진</span><b>${showPins?'물음표를 눌러 조사하세요':'사진 전체 공개'}</b></figcaption></figure>`;
}
function openClueSelect(){
  setPhase('CLUE_SELECT');const round=currentRound();const opened=new Set(state.attempt.clueIds.filter(id=>id.startsWith(`r${round.no}_`)));
  openPopup({kicker:`ROUND ${round.no} · 단서 ${opened.size}/3`,title:opened.size===0?'사진 속 물음표를 눌러주세요':'다음 단서를 찾아주세요',lead:'사진은 화면 폭에 맞춰 원본 비율로 표시됩니다.',body:`<div class="clue-progress"><span>현장 단서 진행</span><span class="progress-dots">${round.clues.map((_,i)=>`<i class="${i<opened.size?'on':''}"></i>`).join('')}</span></div>${imageHtml(round,true)}<div class="clue-list">${round.clues.map(c=>`<button class="clue-card ${opened.has(c.id)?'open':''}" type="button" data-clue-card="${c.id}"><b>${esc(c.title)}</b>${opened.has(c.id)?esc(c.text):'물음표를 눌러 확인'}</button>`).join('')}</div>`,actions:[{label:opened.size===3?'단서 3개 확인 완료 · 동료 의견 →':'사진의 물음표를 눌러주세요',primary:true,disabled:opened.size!==3,onClick:openCompanionSelect},{label:`⏳ 시간의 방 ${timeRoomCount(round.no)}/${timeRoomLimit(round.no)}`,onClick:()=>openTimeRoom('clue')}]});
  document.querySelectorAll('[data-clue],[data-clue-card]').forEach(el=>el.onclick=()=>openClue(el.dataset.clue||el.dataset.clueCard));
}
async function openClue(clueId){
  const round=currentRound();const clue=round.clues.find(c=>c.id===clueId);const already=state.attempt.clueIds.includes(clueId);
  if(!already){state.attempt.clueIds.push(clueId);notify();}
  setPhase('CLUE_RESULT');
  const done=state.attempt.clueIds.filter(id=>id.startsWith(`r${round.no}_`)).length===3;
  openPopup({kicker:`ROUND ${round.no} · 현장 단서 ${done?'3/3':''}`,title:clue.title,lead:already?'이미 확인한 단서입니다. 다시 확인해도 시간 비용은 없습니다.':'현장 조사 결과',body:`<div class="result-box"><small>획득 단서</small><b>${esc(clue.title)}</b><p>${esc(clue.text)}</p></div>`,actions:[{label:done?'동료 의견 듣기 →':'다음 단서 찾기 →',primary:true,onClick:done?openCompanionSelect:openClueSelect}]});
}
function openTimeRoom(origin='companion'){
  const round=currentRound();const count=timeRoomCount(round.no);const hints=TIME_ROOM_HINTS[round.no]||[];const back=returnFromTimeRoom(origin);
  if(count>=hints.length){
    openPopup({kicker:`ROUND ${round.no} · 시간의 방`,title:'이번 라운드의 힌트를 모두 확인했습니다',lead:'이미 얻은 힌트는 다시 봐도 시간이 늘지 않습니다.',body:`<div class="time-room-hints">${hints.map((hint,i)=>`<article><small>추가 정보 ${i+1}</small><b>${esc(hint)}</b></article>`).join('')}</div>`,actions:[{label:'수사로 돌아가기 →',primary:true,onClick:back}]});
    return;
  }
  openPopup({kicker:`ROUND ${round.no} · 시간의 방`,title:'추가 정보를 확인할까요?',lead:'힌트를 얻는 대신 개인 기록에 시간이 추가됩니다.',body:`<div class="time-room-door"><span>⏳</span><b>추가 정보 ${count+1} / ${hints.length}</b><p>입장 즉시 개인 시간 <strong>+2:00</strong><br>한 번 확인한 정보는 사건 기록에서 무료로 다시 볼 수 있습니다.</p></div>`,actions:[{label:'돌아가기',onClick:back},{label:'시간 +2:00 · 입장 →',primary:true,onClick:()=>enterTimeRoom(origin)}]});
}
async function enterTimeRoom(origin='companion'){
  const round=currentRound();const back=returnFromTimeRoom(origin);setPopupBusy(true,'시간의 방에서 추가 기록을 찾고 있습니다…');
  try{
    const hintNo=timeRoomCount(round.no)+1;
    state.attempt.penaltyMs+=120000;
    state.timeRoomVisits[round.no]=hintNo;notify();flashPenalty('+2:00');
    const hint=TIME_ROOM_HINTS[round.no][hintNo-1];
    const limit=timeRoomLimit(round.no);openPopup({kicker:`ROUND ${round.no} · 시간의 방 ${hintNo}/${limit}`,title:'추가 정보를 획득했습니다',lead:`개인 시간 +2:00 · 이번 라운드 힌트 ${hintNo}/${limit}`,body:`<div class="time-room-reveal"><span>새로운 단서</span><b>${esc(hint)}</b><p>이 정보는 사건 기록에 보관되며, 아직 의견을 듣지 않은 동료들에게도 공유됩니다.</p></div>`,actions:[{label:hintNo<limit?'힌트 하나 더 보기 (+2:00)':'확인한 힌트 다시 보기',onClick:()=>openTimeRoom(origin)},{label:'수사로 돌아가기 →',primary:true,onClick:back}]});
  }catch(e){setPopupBusy(false);toast(e.message||'시간의 방에 입장하지 못했습니다.',true);openTimeRoom(origin);}
}
function openCompanionSelect(){
  setPhase('COMPANION_SELECT');const round=currentRound();const heard=new Set(roundHints().map(h=>h.companionId));const allHeard=heard.size===4;
  const roomCount=timeRoomCount(round.no),roomLimit=timeRoomLimit(round.no),questionCount=revealedQuestionFacts(round.no).length;openPopup({kicker:`ROUND ${round.no} · 동료 의견 ${heard.size}/4`,title:allHeard?'네 명의 의견을 모두 들었습니다':'누구의 의견을 들을까요?',lead:'아직 의견을 듣지 않은 동료는 현재까지 공유된 모든 정보와 집사의 답변을 바탕으로 질문을 제안합니다.',body:`<div class="team-progress"><span>확인한 동료 ${heard.size}명</span><span class="progress-dots">${COMPANIONS.map((_,i)=>`<i class="${i<heard.size?'on':''}"></i>`).join('')}</span></div><div class="companion-grid">${COMPANIONS.map(c=>`<button class="companion-button ${heard.has(c.id)?'viewed':''}" data-companion="${c.id}" type="button"><img src="${c.image}" alt="${c.name} 일러스트"><span><b>${c.name}</b><small>${c.role}</small><small class="shared-hints">${heard.has(c.id)?'기존 의견 유지':`시간의 방 ${roomCount}개 · 집사 답변 ${questionCount}개 공유됨`}</small></span>${heard.has(c.id)?'<em class="viewed-badge">의견 확인</em>':''}</button>`).join('')}</div><div class="time-room-callout"><b>추리가 막혔나요?</b><span>시간의 방 힌트 ${roomCount}/${roomLimit} · 새 힌트마다 +2:00</span></div>${allHeard?'<div class="team-ready">추천 질문이 모두 준비됐습니다. 이제 집사에게 질문하세요.</div>':''}`,actions:[{label:allHeard?'추천 질문 선택하기 →':'현재까지의 의견으로 질문하기 →',primary:true,onClick:openQuestionSelect},{label:`⏳ 시간의 방 ${roomCount}/${roomLimit}`,onClick:()=>openTimeRoom('companion')},{label:'사건 기록',onClick:openHistory}]});
  document.querySelectorAll('[data-companion]').forEach(el=>el.onclick=()=>openCompanion(el.dataset.companion));
}
async function openCompanion(companionId){
  const round=currentRound();const companion=COMPANIONS.find(c=>c.id===companionId);const hintKey=key(round.no,companionId);const companionContext=currentCompanionContext(round.no);let hint=state.hints[hintKey];
  if(hint&&(!isValidCompanionHint(hint,round.no,companionId,[],[],companionContext.allowedContext)||hint.source==='fallback')){delete state.hints[hintKey];hint=null;}
  if(!hint){
    setPopupBusy(true,`${companion.name}, 의견을 정리하고 있습니다… 잠시만 기다려 주세요.`);
    try{
      hint=await companionHint(round.no,companionId,companionContext);
      state.hints[hintKey]={...hint,source:'puter',timeRoomFactCount:companionContext.currentFacts.length,questionFactCount:companionContext.questionFacts.length,companionId,name:companion.name};
    }catch(e){
      setPopupBusy(false);
      const delayed=e?.code==='PUTER_TIMEOUT',unavailable=e?.code==='PUTER_UNAVAILABLE';
      toast(delayed?'의견 정리가 길어져 이번 요청을 멈췄습니다. 진행 내용은 그대로 유지됩니다.':unavailable?'동료와의 연결이 잠시 끊겼습니다. 진행 내용은 그대로 유지됩니다.':'동료가 생각을 정리하고 있습니다. 잠시 후 다시 말을 걸어 주세요.',true);
      openPopup({kicker:`ROUND ${round.no} · ${delayed?'잠시 지연 중':unavailable?'연결 확인 중':'잠시 생각 중'}`,title:delayed?'의견 정리가 조금 늦어졌습니다':unavailable?'동료와의 연결이 잠시 끊겼습니다':'동료가 생각을 가다듬고 있습니다',lead:delayed?'기다리던 요청은 종료했습니다. 시간이나 진행 내용에는 영향이 없습니다.':unavailable?'잠시 뒤 다시 말을 걸어주세요. 수사 기록과 개인 시간은 그대로 유지됩니다.':'잠시 후 다시 말을 걸면 지금까지의 단서를 살펴보고 의견을 들려줍니다.',body:`<div class="confirm-box">${esc(companion.name)}에게 다시 말을 걸어 의견을 들어보세요.</div>`,actions:[{label:'다시 의견 듣기 →',primary:true,onClick:()=>openCompanion(companionId)},{label:'다른 동료에게 가기',onClick:openCompanionSelect}]});
      return;
    }
  }
  setPhase('COMPANION_RESULT');
  const sharedCount=Number(hint.timeRoomFactCount)||0,sharedQuestions=Number(hint.questionFactCount)||0;openPopup({kicker:`ROUND ${round.no} · ${companion.name}`,title:`${companion.name}의 의견`,lead:sharedCount||sharedQuestions?`시간의 방 정보 ${sharedCount}개와 집사 답변 ${sharedQuestions}개를 공유한 뒤 들은 의견입니다.`:'현재 공개된 현장 단서를 바탕으로 들은 의견입니다.',body:`<div class="companion-scene"><figure class="companion-portrait"><img src="${companion.image}" alt="${companion.name} 초상화"><figcaption>${companion.name}<small>${companion.role}</small></figcaption></figure><article class="speech-bubble"><b>${companion.name}</b>${sharedCount||sharedQuestions?`<small class="speech-shared">시간의 방 ${sharedCount}개 · 집사 답변 ${sharedQuestions}개 반영</small>`:''}<p>${esc(hint.comment)}</p><button id="useHintQuestion" class="question-chip" type="button">추천 질문으로 선택 →<br>${esc(hint.question)}</button></article></div>`,actions:[{label:'다른 동료 의견 듣기',onClick:openCompanionSelect},{label:'질문 화면으로 이동 →',primary:true,onClick:openQuestionSelect}]});
  $('#useHintQuestion').onclick=()=>openQuestionSelect(hint.question);
}
function roundHints(){return Object.entries(state.hints).filter(([k])=>k.startsWith(`${state.attempt.roundNo}:`)).map(([,v])=>{const companion=COMPANIONS.find(c=>c.id===v.companionId);return {...v,name:v.name||companion?.name||'동료'};});}
function openQuestionSelect(preset=''){
  setPhase('QUESTION_SELECT');const round=currentRound();const hints=roundHints();const current=state.attempt.questionCount;
  openPopup({kicker:`ROUND ${round.no} · 질문 ${current}/3`,title:'집사에게 무엇을 물을까요?',lead:'추천 질문을 선택하거나 직접 입력하세요. 선택만으로는 시간이 늘지 않습니다.',body:`<div class="suggestion-list">${hints.length?hints.map(h=>`<button class="suggestion ${preset===h.question?'selected':''}" type="button" data-suggestion="${esc(h.question)}"><b>${esc(h.name)}</b><br>${esc(h.question)}</button>`).join(''):'<div class="confirm-box">동료 의견을 들으면 여기에 추천 질문이 추가됩니다.</div>'}</div><div class="input-row"><input id="questionInput" maxlength="120" value="${esc(preset)}" placeholder="예: 마크의 사망 원인은 전기와 관련 있습니까?"><button id="questionNext" class="button primary" type="button">질문 확인</button></div><div class="question-log">${state.questions.filter(q=>q.roundNo===round.no).map((q,i)=>`<article><small>${i+1}번째 질문 · ${esc(q.text)}</small><b>${esc(q.answerText)}</b></article>`).join('')||'<article><small>아직 질문하지 않았습니다.</small><b>한 번에 한 가지 사실만 짧게 물어보세요.</b></article>'}</div>`,actions:[{label:'← 동료 의견 다시 보기',onClick:openCompanionSelect},{label:`⏳ 시간의 방 ${timeRoomCount(round.no)}/${timeRoomLimit(round.no)}`,onClick:()=>openTimeRoom('question')},{label:'남은 질문 포기 · 라운드 정리',disabled:current<1,onClick:openRoundSummary}]});
  document.querySelectorAll('[data-suggestion]').forEach(el=>el.onclick=()=>{const input=$('#questionInput');input.value=el.dataset.suggestion;input.focus();});
  $('#questionNext').onclick=()=>openQuestionConfirm($('#questionInput').value.trim());
}
function openQuestionConfirm(text){
  if(!text){toast('질문을 입력하세요.',true);return;}const round=currentRound();
  openPopup({kicker:`ROUND ${round.no} · 질문 확정`,title:'이 질문을 확정할까요?',lead:'확정하면 개인 시간이 1분 증가하고, 취소할 수 없습니다.',body:`<div class="confirm-box"><b>질문</b><br>${esc(text)}<br><br><b>비용</b> 개인 시간 +1:00</div>`,actions:[{label:'문장 바꾸기',onClick:()=>openQuestionSelect(text)},{label:'질문 확정 →',primary:true,onClick:()=>commitQuestion(text)}]});
}
async function commitQuestion(text){
  const round=currentRound();setPhase('QUESTION_PENDING');setPopupBusy(true,'집사가 판단하고 있습니다…');
  try{const category=await judgeQuestion(text,round.no);let answer=category;
    state.attempt.questionCount++;state.attempt.totalQuestions++;state.attempt.penaltyMs+=60000;notify();flashPenalty();
    state.questions.push({roundNo:round.no,text,category:answer,answerText:answerText[answer]||answerText.MAYBE});notify();openQuestionResult(text,answer);
  }catch(e){toast(e.message,true);openQuestionSelect(text);}
}
function openQuestionResult(text,category){
  const round=currentRound();const count=state.attempt.questionCount;const complete=count>=3;
  setPhase('QUESTION_RESULT');
  openPopup({kicker:`ROUND ${round.no} · 집사의 답`,title:answerText[category]||answerText.MAYBE,lead:'집사는 이유를 설명하지 않습니다.',body:`<div class="result-box good"><small>집사 판정</small><b>${esc(answerText[category]||answerText.MAYBE)}</b><p>질문 ${count} / 3 · 누적 질문 ${state.attempt.totalQuestions}회</p></div>`,actions:[{label:complete?'라운드 결과 보기 →':'다음 질문하기 →',primary:true,onClick:complete?openRoundSummary:openQuestionSelect},{label:complete?'':'남은 질문 포기',disabled:complete,onClick:openRoundSummary}].filter(a=>a.label)});
}
function openRoundSummary(){
  const round=currentRound();setPhase('ROUND_SUMMARY');const q=state.attempt.questionCount;
  openPopup({kicker:`ROUND ${round.no} · 조사 정리`,title:`ROUND ${round.no} 조사가 끝났습니다`,lead:'이번 라운드에서 얻은 정보를 정리합니다.',body:`<div class="summary-grid"><div><span>확인 단서</span><b>3개</b></div><div><span>시간의 방</span><b>${timeRoomCount(round.no)}회</b></div><div><span>사용 질문</span><b>${q}회</b></div><div><span>누적 시간</span><b>${formatTime(elapsedMs())}</b></div></div>`,actions:[{label:round.no<4?'다음 그림 공개 →':'최종 발의로 이동 →',primary:true,onClick:advanceRound},{label:'사건 기록',onClick:openHistory}]});
}
async function advanceRound(){
  if(state.attempt.roundNo<4){state.attempt.roundNo++;state.attempt.questionCount=0;state.attempt.phase='ROUND_INTRO';notify();}
  else setPhase('FINAL_ANSWER');
  if(state.attempt.phase==='FINAL_ANSWER')openFinalAnswer();else openRoundIntro();
}
const finalFields={victim:'ansVictim',killer:'ansKiller',place:'ansPlace',method:'ansMethod',motive:'ansMotive',truth:'ansTruth'};
const finalFieldLabels={victim:'피해자',killer:'가해자',place:'장소',method:'사망 원인',motive:'동기',truth:'숨겨진 진실'};
function finalHintKey(companionId){return `final:${companionId}`;}
function finalOpinions(){return COMPANIONS.map(companion=>state.hints[finalHintKey(companion.id)]).filter(Boolean);}
function syncFinalDraft(){for(const [field,id] of Object.entries(finalFields)){const input=$(`#${id}`);if(input)state.finalDraft[field]=input.value.slice(0,240);}notify();return state.finalDraft;}
function bindFinalDraft(){for(const [field,id] of Object.entries(finalFields)){const input=$(`#${id}`);if(input)input.oninput=()=>{state.finalDraft[field]=input.value.slice(0,240);notify();};}document.querySelectorAll('[data-final-companion]').forEach(button=>button.onclick=()=>openFinalCompanion(button.dataset.finalCompanion));}
function adoptFinalOpinion(companionId){
  const companion=COMPANIONS.find(item=>item.id===companionId),opinion=state.hints[finalHintKey(companionId)];
  if(!companion||!opinion?.proposal)return;
  for(const field of Object.keys(finalFields))state.finalDraft[field]=String(opinion.proposal[field]||'').slice(0,240);
  notify();openFinalAnswer();toast(`${companion.name}의 의견으로 발의서를 채웠습니다.`);
}
function openFinalAnswer(){
  setPhase('FINAL_ANSWER');
  const heard=new Set(finalOpinions().map(opinion=>opinion.companionId));
  const context=currentFinalContext();
  const companionCards=COMPANIONS.map(companion=>`<button class="companion-button ${heard.has(companion.id)?'viewed':''}" data-final-companion="${companion.id}" type="button"><img src="${companion.image}" alt="${companion.name} 일러스트"><span><b>${companion.name}</b><small>${companion.role}</small><small class="shared-hints">${heard.has(companion.id)?'최종 의견 다시 듣기':`공개 정보 ${state.attempt.clueIds.length}개 · 문답 ${context.questionFacts.length}개`}</small></span>${heard.has(companion.id)?'<em class="viewed-badge">의견 확인</em>':''}</button>`).join('');
  const draft=state.finalDraft;
  openPopup({kicker:`최종 발의 · 동료 의견 ${heard.size}/4`,title:'사건의 전말을 발의하세요',lead:'동료에게 지금까지 공개된 정보만 공유해 최종 추리 의견을 들을 수 있습니다.',body:`<section class="final-team-panel"><div class="final-team-head"><span>최종 작전 회의</span><b>의견을 들을 동료를 선택하세요</b><p>동료의 추리는 정답이 아니라 공개 단서를 바탕으로 한 가설입니다.</p></div><div class="companion-grid">${companionCards}</div></section><div class="answer-grid"><label>피해자<input id="ansVictim" maxlength="240" value="${esc(draft.victim)}" placeholder="누구인가"></label><label>가해자<input id="ansKiller" maxlength="240" value="${esc(draft.killer)}" placeholder="누구인가"></label><label>장소<input id="ansPlace" maxlength="240" value="${esc(draft.place)}" placeholder="어디인가"></label><label>사망 원인<input id="ansMethod" maxlength="240" value="${esc(draft.method)}" placeholder="어떤 방법인가"></label><label>동기<input id="ansMotive" maxlength="240" value="${esc(draft.motive)}" placeholder="왜 그랬는가"></label><label>숨겨진 진실<input id="ansTruth" maxlength="240" value="${esc(draft.truth)}" placeholder="과거의 비밀"></label></div>`,actions:[{label:'사건 기록',onClick:()=>{syncFinalDraft();openHistory();}},{label:'정답 발의 →',primary:true,onClick:submitFinal}]});
  bindFinalDraft();
}
async function openFinalCompanion(companionId){
  syncFinalDraft();
  const companion=COMPANIONS.find(item=>item.id===companionId);if(!companion)return;
  const hintKey=finalHintKey(companionId),context=currentFinalContext();let opinion=state.hints[hintKey];
  if(opinion&&!isValidFinalCompanionOpinion(opinion,companionId)){delete state.hints[hintKey];opinion=null;notify();}
  if(!opinion){
    setPopupBusy(true,`${companion.name}, 최종 추리를 정리하고 있습니다…`);
    try{
      const generated=await finalCompanionOpinion(companionId,context);
      opinion={...generated,question:'최종 발의 조언',companionId,name:companion.name};state.hints[hintKey]=opinion;notify();
    }catch(e){
      console.warn('[final companion opinion]',companionId,e?.code||'UNKNOWN',e?.reason||e?.message||'');
      setPopupBusy(false);const delayed=e?.code==='PUTER_TIMEOUT',unavailable=e?.code==='PUTER_UNAVAILABLE';
      const invalidDetail=!delayed&&!unavailable&&e?.reason?`<small class="opinion-delay-reason">발의안 확인: ${esc(e.reason)}</small>`:'';
      openPopup({kicker:`최종 발의 · ${companion.name}`,title:delayed?'의견 정리가 조금 늦어졌습니다':unavailable?'동료와의 연결이 잠시 끊겼습니다':'공개 기록을 다시 대조하고 있습니다',lead:'작성한 최종 발의 내용과 수사 기록은 그대로 유지됩니다.',body:`<div class="confirm-box">${unavailable?'동료 호출 연결을 다시 시도해 주세요.':'공개되지 않은 추측은 제외하고 다시 의견을 정리합니다.'}${invalidDetail}</div>`,actions:[{label:'다시 의견 듣기 →',primary:true,onClick:()=>openFinalCompanion(companionId)},{label:'최종 발의로 돌아가기',onClick:openFinalAnswer}]});return;
    }
  }
  const sharedRoom=Number(opinion.timeRoomFactCount)||0,sharedQuestions=Number(opinion.questionFactCount)||0;
  const proposalHtml=Object.keys(finalFields).map(field=>`<div class="final-proposal-item"><span>${finalFieldLabels[field]}</span><b>${esc(opinion.proposal[field])}</b></div>`).join('');
  openPopup({kicker:`최종 작전 회의 · ${companion.name}`,title:`${companion.name}의 최종 발의안`,lead:`공개 단서 ${state.attempt.clueIds.length}개 · 시간의 방 ${sharedRoom}개 · 집사 답변 ${sharedQuestions}개를 바탕으로 한 추리입니다.`,body:`<div class="companion-scene final-companion-scene"><figure class="companion-portrait"><img src="${companion.image}" alt="${companion.name} 초상화"><figcaption>${companion.name}<small>${companion.role}</small></figcaption></figure><article class="speech-bubble final-opinion-bubble"><b>${companion.name}</b><small class="speech-shared">공개된 정보만 반영</small><div class="final-proposal-grid">${proposalHtml}</div><p>${esc(opinion.comment)}</p></article></div>`,actions:[{label:'다른 동료 의견 듣기',onClick:openFinalAnswer},{label:'이 의견으로 발의서 채우기 →',primary:true,onClick:()=>adoptFinalOpinion(companionId)}]});
}
async function submitFinal(){
  syncFinalDraft();const answers=Object.fromEntries(Object.entries(state.finalDraft).map(([field,value])=>[field,value.trim()]));
  if(Object.keys(finalFields).some(k=>!answers[k])){toast('피해자부터 숨겨진 진실까지 6개 항목을 모두 입력하세요.',true);return;}
  const evaluation=evaluateFinalAnswers(answers);const solved=evaluation.solved;
  state.attempt.completedAt=Date.now();state.attempt.status='completed';
  state.attempt.solved=solved;state.attempt.phase='ENDING_STORY';notify();openEnding(0);
}
function openEnding(index){
  setPhase('ENDING_STORY');const ending=ENDING[index],evaluation=currentEvaluation(),solved=evaluation.solved;
  const evidence=(ending.evidence||[]).map(item=>`<span>${esc(item)}</span>`).join('');
  openPopup({kicker:`사건의 내막 ${String(index+1).padStart(2,'0')} / ${String(ENDING.length).padStart(2,'0')}`,title:ending.title,lead:ending.lead,body:`<figure class="ending-frame"><img class="ending-slide active" src="${ending.image}" alt="${esc(ending.title)} 장면"><figcaption>결말 장면 ${String(index+1).padStart(2,'0')}</figcaption></figure><section class="ending-reveal"><span class="ending-label">사건의 전말</span><p>${esc(ending.story)}</p><div class="ending-proof-title">이 장면을 입증한 핵심 단서</div><div class="ending-evidence">${evidence}</div></section>${index===0?`<div class="result-box ${solved?'good':'bad'}"><small>최종 판정</small><b>${evaluation.score} / 6점 · ${solved?'사건 해결':'미해결'}</b><p>${solved?'6개 핵심 항목을 모두 정확히 설명했습니다.':`정답 ${evaluation.correct}개 · 부분정답 ${evaluation.partial}개 · 오답 ${evaluation.wrong}개입니다. 전체 내막을 확인한 뒤 상세 판정을 볼 수 있습니다.`}</p></div>`:''}`,actions:[{label:index<ENDING.length-1?'다음 내막 확인 →':'상세 채점 결과 보기 →',primary:true,onClick:()=>index<ENDING.length-1?openEnding(index+1):openResult()}]});
}
function openResult(){
  setPhase('RESULT');const evaluation=currentEvaluation(),solved=evaluation.solved;
  state.attempt.solved=solved;saveDemoLeader();loadLeader();
  const roomTotal=Object.values(state.timeRoomVisits||{}).reduce((sum,value)=>sum+Number(value||0),0);
  const cloudPanel=cloudReady?'<section class="cloud-record-panel ready"><span>공식 랭킹</span><b>Google 계정으로 기록을 남길 수 있습니다</b><p>이 사건은 계정당 한 번만 등록되며, 등록 후 기록을 바꾸거나 다시 제출할 수 없습니다.</p></section>':`<section class="cloud-record-panel"><span>기록 저장 상태</span><b>현재 결과는 이 기기에만 저장됩니다</b><p>${esc(firebaseConfigured()?(cloudIssue||'공식 기록 보관소 설정을 확인하고 있습니다.'):'공식 Firebase 기록 보관소가 연결되기 전에는 이름이나 기록을 서버 랭킹에 올리지 않습니다.')}</p></section>`;
  const actions=[{label:'전체 내막 다시 보기',onClick:()=>openEnding(0)},{label:'랭킹 보기',onClick:openRanking}];
  if(cloudReady)actions.push({label:'Google로 로그인하고 기록 등록 →',primary:true,onClick:registerCloudRecord});else actions[1].primary=true;
  openPopup({kicker:'사건 결과 · 항목별 채점',title:solved?'6개 핵심 항목을 모두 맞혔습니다':`${evaluation.score} / 6점 · 미해결`,lead:solved?'사건의 인물, 장소, 원인과 숨겨진 진실을 정확히 설명했습니다.':'아래에서 맞은 부분과 부족했던 부분을 항목별로 확인할 수 있습니다.',body:`<div class="result-box ${solved?'good':'bad'}"><small>최종 결과</small><b>${solved?'사건 해결':`${evaluation.score} / 6점`}</b><p>진행 시간 ${formatTime(elapsedMs())} · 사용 질문 ${state.attempt.totalQuestions}회 · 시간의 방 ${roomTotal}회</p></div><div class="summary-grid"><div><span>정답</span><b>${evaluation.correct}개</b></div><div><span>부분정답</span><b>${evaluation.partial}개</b></div><div><span>오답</span><b>${evaluation.wrong}개</b></div><div><span>최종 판정</span><b>${solved?'해결':'미해결'}</b></div></div>${evaluationHtml(evaluation)}${cloudPanel}`,actions});
}
async function registerCloudRecord(){
  if(!cloudReady){toast(cloudIssue||'공식 랭킹 저장소가 아직 연결되지 않았습니다.',true);return;}
  const evaluation=currentEvaluation();
  const roomTotal=Object.values(state.timeRoomVisits||{}).reduce((sum,value)=>sum+Number(value||0),0);
  setPopupBusy(true,'Google 계정을 확인하고 공식 기록을 접수하고 있습니다…');
  try{
    const user=await signInGoogle();
    state.user={displayName:user.displayName||'익명 탐정',firebase:true};notify();
    await saveCloudRecord({score2:evaluation.score2,questionsUsed:state.attempt.totalQuestions,officialTimeMs:elapsedMs(),timeRoomVisits:roomTotal});
    await loadLeader();setPopupBusy(false);toast('공식 랭킹에 기록을 등록했습니다.');openRanking();
  }catch(error){
    setPopupBusy(false);toast(cloudErrorMessage(error),true);
    if(error?.code==='ALREADY_RECORDED')openRanking();
  }
}
async function openRanking(){
  let list=[],source='local',loadError='';
  if(firebaseConfigured()){try{if(!await firebaseDomainAuthorized()){const error=new Error('승인 도메인 누락');error.code='AUTH_DOMAIN_MISSING';throw error;}list=await loadCloudRankings();source='firebase';cloudReady=true;cloudIssue='';}catch(e){loadError=cloudErrorMessage(e);cloudReady=false;cloudIssue=loadError;}}
  if(source==='local'){const local=readDemoLeader();if(local)list=[{rank:1,displayName:local.name,score2:local.score2,questionsUsed:local.questions,officialTimeMs:local.timeMs,isLocal:true}];}
  const rows=list.map((record,index)=>`<div class="rank-row ${record.isMine?'me':''}"><b>${record.rank||index+1}위</b><span>${esc(record.displayName||record.name||'익명 탐정')}<small>${(Number(record.score2)||0)/2}/6점${record.isLocal?' · 이 기기':''}${record.isMine?' · 나':''}</small></span><span>질문 ${record.questionsUsed??record.questions??0}</span><span>${formatTime(record.officialTimeMs??record.timeMs??0)}</span></div>`).join('');
  const warning=loadError?`<div class="confirm-box">${esc(loadError)} 현재는 이 기기의 기록만 표시합니다.</div>`:'';
  const empty=source==='firebase'?'<div class="confirm-box">아직 등록된 공식 기록이 없습니다. 첫 번째 탐정이 되어 보세요.</div>':'<div class="confirm-box">이 기기에 저장된 기록이 없습니다. 표시용 가짜 순위는 사용하지 않습니다.</div>';
  const lead=source==='firebase'?'Firebase에 실제 등록된 기록입니다. 점수 → 질문 수 → 진행 시간 순으로 정렬합니다.':'현재는 이 브라우저의 개인 기록만 표시합니다. 서버에 등록된 공식 랭킹이 아닙니다.';
  const actions=[{label:'메인으로',primary:!cloudReady,onClick:()=>{closePopup();renderDashboard();}}];
  if(cloudReady&&state.attempt.status==='completed')actions.push({label:'내 기록 등록 →',primary:true,onClick:registerCloudRecord});
  openPopup({kicker:`첫 번째 사건 · ${source==='firebase'?'공식 기록':'개인 기록'}`,title:'랭킹',lead,body:`${warning}<div class="rank-list">${rows||empty}</div>`,actions,dismissible:true});
}
function revealedPhotoRounds(){
  if(state.attempt.status==='completed')return ROUNDS;
  const beforeImage=['CASE_HOME','CASE_START','ROUND_INTRO'].includes(state.attempt.phase);
  const count=Math.max(0,state.attempt.roundNo-(beforeImage?1:0));
  return ROUNDS.slice(0,count);
}
function openHistory(){
  const clueIds=state.attempt.clueIds;
  const photos=revealedPhotoRounds().map(r=>`<button class="history-image-card" type="button" data-history-image="${r.no}"><img src="${r.image}" alt="ROUND ${r.no} ${esc(r.title)}"><span><small>ROUND ${r.no}</small><b>${esc(r.title)}</b><em>사진 다시 보기 →</em></span></button>`).join('');
  const clues=ROUNDS.slice(0,state.attempt.roundNo).flatMap(r=>r.clues.filter(c=>clueIds.includes(c.id)).map(c=>`<article><small>ROUND ${r.no} · ${esc(c.title)}</small><b>${esc(c.text)}</b></article>`));
  const roomHints=ROUNDS.flatMap(r=>(TIME_ROOM_HINTS[r.no]||[]).slice(0,timeRoomCount(r.no)).map((hint,i)=>`<article class="time-record"><small>ROUND ${r.no} · 시간의 방 추가 정보 ${i+1}</small><b>${esc(hint)}</b></article>`));
  const questions=state.questions.map(x=>`<article><small>ROUND ${x.roundNo} · ${esc(x.text)}</small><b>${esc(x.answerText)}</b></article>`);
  openPopup({kicker:'수사 기록',title:'사건 기록',lead:'지금까지 공개된 사진과 정보만 다시 볼 수 있습니다.',body:`<section class="history-photo-section"><h3>공개된 현장 사진</h3>${photos?`<div class="history-images">${photos}</div>`:'<div class="confirm-box">아직 공개된 현장 사진이 없습니다.</div>'}</section><div class="question-log"><article><small>공개 사건 개요</small><b>${esc(CASE_OVERVIEW)}</b></article>${clues.length?clues.join(''):'<article><small>현장 단서</small><b>아직 확인한 단서가 없습니다.</b></article>'}${roomHints.join('')}${questions.length?questions.join(''):'<article><small>집사 판정</small><b>아직 질문 기록이 없습니다.</b></article>'}</div>`,actions:[{label:'현재 진행으로 돌아가기',primary:true,onClick:openByPhase}],dismissible:true});
  document.querySelectorAll('[data-history-image]').forEach(button=>button.onclick=()=>openHistoryImage(Number(button.dataset.historyImage)));
}
function openHistoryImage(roundNo){
  const round=revealedPhotoRounds().find(item=>item.no===roundNo);
  if(!round){toast('아직 공개되지 않은 사진입니다.',true);return;}
  openPopup({kicker:`사건 기록 · ROUND ${round.no}`,title:round.title,lead:'이미 공개된 사진입니다. 다시 봐도 시간이나 질문 수는 늘지 않습니다.',body:imageHtml(round,false),actions:[{label:'← 사건 기록으로 돌아가기',onClick:openHistory},{label:'현재 수사로 돌아가기 →',primary:true,onClick:openByPhase}],dismissible:true});
}
function openByPhase(){switch(state.attempt.phase){case'CASE_HOME':case'CASE_START':return openCaseStart();case'ROUND_INTRO':return openRoundIntro();case'IMAGE_REVEAL':return openImage();case'CLUE_SELECT':case'CLUE_RESULT':return openClueSelect();case'COMPANION_SELECT':case'COMPANION_RESULT':return openCompanionSelect();case'QUESTION_SELECT':case'QUESTION_PENDING':case'QUESTION_RESULT':return openQuestionSelect();case'ROUND_SUMMARY':return openRoundSummary();case'FINAL_ANSWER':return openFinalAnswer();case'ENDING_STORY':return openEnding(0);case'RESULT':return openResult();default:return openCaseStart();}}
async function boot(){
  $('#historyButton').onclick=openHistory;$('#rankingButton').onclick=openRanking;ensurePuter();
  const restored=restoreLocalProgress();
  await loadLeader();renderDashboard();
  if(restored){openByPhase();toast('저장된 수사 기록에서 이어서 시작합니다.');}
}
setInterval(renderHud,1000);boot();
