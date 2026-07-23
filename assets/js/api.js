async function request(path, options={}){
  const res=await fetch(path,{credentials:'same-origin',headers:{'Content-Type':'application/json',...(options.headers||{})},...options});
  const json=await res.json().catch(()=>null);
  if(!res.ok||!json?.ok){const err=new Error(json?.error?.message||'기록 보관실의 확인이 늦어지고 있습니다. 잠시 후 다시 시도해 주세요.');err.code=json?.error?.code||`HTTP_${res.status}`;throw err;}
  return json.data;
}
export const api={
  status:()=>request('api/auth_status.asp'),
  authGoogle:credential=>request('api/auth_google.asp',{method:'POST',body:JSON.stringify({credential})}),
  start:()=>request('api/attempt_start.asp',{method:'POST',body:JSON.stringify({caseSlug:'mark-last-repair-v1'})}),
  state:()=>request('api/attempt_state.asp?case=mark-last-repair-v1'),
  clue:payload=>request('api/clue_open.asp',{method:'POST',body:JSON.stringify(payload)}),
  hint:payload=>request('api/companion_hint.asp',{method:'POST',body:JSON.stringify(payload)}),
  timeRoom:payload=>request('api/time_room.asp',{method:'POST',body:JSON.stringify(payload)}),
  reserve:payload=>request('api/question_reserve.asp',{method:'POST',body:JSON.stringify(payload)}),
  commit:payload=>request('api/question_commit.asp',{method:'POST',body:JSON.stringify(payload)}),
  advance:payload=>request('api/round_advance.asp',{method:'POST',body:JSON.stringify(payload)}),
  final:payload=>request('api/final_submit.asp',{method:'POST',body:JSON.stringify(payload)}),
  rankings:()=>request('api/rankings.asp?case=mark-last-repair-v1&limit=100')
};
