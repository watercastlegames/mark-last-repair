const finalRubric=[
  {key:'victim',label:'피해자',expected:'전기 수리공 마크 리',correct:value=>/마크/.test(value),partial:value=>/(전기\s*수리공|수리공|피해자)/.test(value),reasons:['피해자를 마크 리로 정확히 특정했습니다.','피해자의 역할은 맞지만 이름을 특정하지 못했습니다.','피해자는 전기 수리공 마크 리입니다.']},
  {key:'killer',label:'가해자',expected:'그랜트',correct:value=>/그랜트/.test(value),partial:value=>/(금화\s*절도범|과거\s*절도범|기록을\s*숨긴)/.test(value),reasons:['가해자를 그랜트로 정확히 특정했습니다.','가해자의 성격은 짚었지만 그랜트를 특정하지 못했습니다.','마크를 살해한 사람은 그랜트입니다.']},
  {key:'place',label:'장소',expected:'폐극장 배전실',correct:value=>/배전실/.test(value),partial:value=>/(폐극장|극장)/.test(value),reasons:['사건 장소를 폐극장 배전실로 특정했습니다.','폐극장은 맞지만 배전실까지 좁히지 못했습니다.','마크가 숨진 장소는 폐극장 배전실입니다.']},
  {key:'method',label:'사망 원인',expected:'전기가 살아 있는 설비에 의한 감전사',correct:value=>/(감전|전기\s*충격)/.test(value),partial:value=>/(전기|누전|합선)/.test(value),reasons:['마크의 사망 원인을 감전으로 정확히 설명했습니다.','전기와의 관련성은 맞지만 감전사를 명확히 적지 않았습니다.','손과 팔의 흔적 및 손상된 장갑은 감전사를 가리킵니다.']},
  {key:'motive',label:'동기',expected:'12년 전 금화 절도 기록이 드러나는 것을 막기 위해',correct:value=>/(금화|절도|장부|과거\s*기록)/.test(value)&&/(숨기|은폐|들키|밝혀|폭로|발각|막|드러)/.test(value),partial:value=>/(금화|절도|장부|과거|기록|숨기|은폐|폭로)/.test(value),reasons:['과거 금화 절도와 이를 숨기려는 동기를 함께 설명했습니다.','과거 사건 또는 은폐 의도 중 한쪽만 설명했습니다.','그랜트는 12년 전 금화 절도 기록의 폭로를 막으려 했습니다.']},
  {key:'truth',label:'숨겨진 진실',expected:'그랜트가 전도성 용액으로 바닥을 젖게 해 감전시킨 뒤 차단기를 내려 사고로 위장',correct:value=>/(물|젖|전도|스프레이|용액)/.test(value)&&/(감전|전기)/.test(value)&&/(차단기|사고|위장)/.test(value),partial:value=>[/(물|젖|전도|스프레이|용액)/.test(value),/(감전|전기)/.test(value),/(차단기|사고|위장)/.test(value)].filter(Boolean).length>=2,reasons:['함정 준비, 감전, 사후 사고 위장까지 사건의 흐름을 설명했습니다.','살인 방법과 위장 과정 중 일부 연결은 맞았습니다.','물과 전도성 용액은 함정이었고, 차단기는 마크가 쓰러진 뒤 사고 위장을 위해 내려졌습니다.']}
];

export function evaluateFinalAnswers(answers){
  const items=finalRubric.map(rule=>{
    const answer=String(answers?.[rule.key]||'').trim();
    const normalized=answer.toLowerCase().replace(/\s+/g,' ');
    const status=rule.correct(normalized)?'correct':rule.partial(normalized)?'partial':'wrong';
    const reason=rule.reasons[status==='correct'?0:status==='partial'?1:2];
    return {key:rule.key,label:rule.label,answer,expected:rule.expected,status,reason,points2:status==='correct'?2:status==='partial'?1:0};
  });
  const score2=items.reduce((sum,item)=>sum+item.points2,0);
  return {items,score2,score:score2/2,total:items.length,solved:score2===items.length*2,correct:items.filter(item=>item.status==='correct').length,partial:items.filter(item=>item.status==='partial').length,wrong:items.filter(item=>item.status==='wrong').length};
}
