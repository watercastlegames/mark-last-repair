const PROGRESS_KEY = 'markMysteryProgressV1';
const PROGRESS_VERSION = 1;
const VALID_PHASES = new Set(['CASE_HOME','CASE_START','ROUND_INTRO','IMAGE_REVEAL','CLUE_SELECT','CLUE_RESULT','COMPANION_SELECT','COMPANION_RESULT','QUESTION_SELECT','QUESTION_PENDING','QUESTION_RESULT','ROUND_SUMMARY','FINAL_ANSWER','ENDING_STORY','RESULT']);
const baseAttempt = () => ({ id: null, status: 'not_started', phase: 'CASE_HOME', roundNo: 1, clueIds: [], questionCount: 0, totalQuestions: 0, penaltyMs: 0, startedAt: null, completedAt: null, solved: null });
const emptyFinalDraft = () => ({ victim:'', killer:'', place:'', method:'', motive:'', truth:'' });

export const state = {
  mode: new URLSearchParams(location.search).get('demo') === '1' ? 'demo' : 'server',
  config: { googleClientId: '', ready: false },
  user: null,
  attempt: baseAttempt(),
  hints: {},
  timeRoomVisits: {},
  questions: [],
  finalDraft: emptyFinalDraft(),
  leader: null,
  popup: null,
  busy: false
};

const plainObject=value=>value&&typeof value==='object'&&!Array.isArray(value);
const numberIn=(value,min,max,fallback=0)=>{const number=Number(value);return Number.isFinite(number)?Math.min(max,Math.max(min,Math.floor(number))):fallback;};
const timestamp=value=>{if(Number.isFinite(Number(value)))return Number(value);const parsed=Date.parse(value);return Number.isNaN(parsed)?null:parsed;};
const safeHints=value=>{
  if(!plainObject(value))return {};
  return Object.fromEntries(Object.entries(value).filter(([key,hint])=>/^(?:[1-4]|final):[a-z]+$/i.test(key)&&plainObject(hint)&&typeof hint.question==='string'&&typeof hint.comment==='string').slice(0,20));
};
const safeVisits=value=>{
  if(!plainObject(value))return {};
  return Object.fromEntries([1,2,3,4].map(round=>[round,numberIn(value[round],0,3,0)]).filter(([,count])=>count>0));
};
const safeQuestions=value=>Array.isArray(value)?value.filter(item=>plainObject(item)&&typeof item.text==='string').slice(0,12).map(item=>({roundNo:numberIn(item.roundNo,1,4,1),text:item.text.slice(0,120),category:typeof item.category==='string'?item.category:'MAYBE',answerText:typeof item.answerText==='string'?item.answerText:''})):[];
const safeFinalDraft=value=>Object.fromEntries(Object.keys(emptyFinalDraft()).map(key=>[key,typeof value?.[key]==='string'?value[key].slice(0,240):'']));

export function saveLocalProgress(){
  if(state.mode!=='demo'||state.attempt.status==='not_started')return false;
  try{
    localStorage.setItem(PROGRESS_KEY,JSON.stringify({version:PROGRESS_VERSION,caseId:'mark-death-v1',savedAt:Date.now(),user:state.user,attempt:state.attempt,hints:state.hints,timeRoomVisits:state.timeRoomVisits,questions:state.questions,finalDraft:state.finalDraft}));
    return true;
  }catch{return false;}
}

export function restoreLocalProgress(){
  try{
    const saved=JSON.parse(localStorage.getItem(PROGRESS_KEY)||'null');
    if(!plainObject(saved)||saved.version!==PROGRESS_VERSION||saved.caseId!=='mark-death-v1'||!plainObject(saved.attempt))return false;
    const questions=safeQuestions(saved.questions);
    const roundNo=numberIn(saved.attempt.roundNo,1,4,1);
    const roundQuestionCount=questions.filter(item=>item.roundNo===roundNo).length;
    const phase=VALID_PHASES.has(saved.attempt.phase)?saved.attempt.phase:'ROUND_INTRO';
    const status=['in_progress','completed'].includes(saved.attempt.status)?saved.attempt.status:'in_progress';
    state.mode='demo';
    state.user={displayName:typeof saved.user?.displayName==='string'?saved.user.displayName.slice(0,40):'도전 탐정',demo:true};
    state.attempt={...baseAttempt(),id:'demo-mark-v1',status,phase:phase==='QUESTION_PENDING'?'QUESTION_SELECT':phase,roundNo,clueIds:Array.isArray(saved.attempt.clueIds)?[...new Set(saved.attempt.clueIds.filter(id=>typeof id==='string').slice(0,12))]:[],questionCount:numberIn(saved.attempt.questionCount,roundQuestionCount,3,roundQuestionCount),totalQuestions:numberIn(saved.attempt.totalQuestions,questions.length,12,questions.length),penaltyMs:numberIn(saved.attempt.penaltyMs,0,86400000,0),startedAt:timestamp(saved.attempt.startedAt)||Date.now(),completedAt:timestamp(saved.attempt.completedAt),solved:typeof saved.attempt.solved==='boolean'?saved.attempt.solved:null};
    state.hints=safeHints(saved.hints);
    state.timeRoomVisits=safeVisits(saved.timeRoomVisits);
    state.questions=questions;
    state.finalDraft=safeFinalDraft(saved.finalDraft);
    saveLocalProgress();
    return true;
  }catch{return false;}
}

export function clearLocalProgress(){try{localStorage.removeItem(PROGRESS_KEY);return true;}catch{return false;}}

const subscribers = new Set();
export function notify(){ saveLocalProgress(); subscribers.forEach(fn => fn(state)); }
export function subscribe(fn){ subscribers.add(fn); return () => subscribers.delete(fn); }
export function patch(data){ Object.assign(state, data); notify(); }
export function patchAttempt(data){ Object.assign(state.attempt, data); notify(); }
export function resetDemo(){
  clearLocalProgress();
  state.user = { displayName: '도전 탐정', demo: true };
  state.attempt = { id: 'demo-mark-v1', status: 'in_progress', phase: 'ROUND_INTRO', roundNo: 1, clueIds: [], questionCount: 0, totalQuestions: 0, penaltyMs: 0, startedAt: Date.now(), completedAt: null, solved: null };
  state.hints = {}; state.timeRoomVisits = {}; state.questions = []; state.finalDraft = emptyFinalDraft(); state.popup = null; notify();
}
