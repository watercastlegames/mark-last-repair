const SDK_BASE='https://www.gstatic.com/firebasejs/12.16.0';
const COLLECTION='crime_mark_last_repair_v1';
const CASE_ID='mark-last-repair-v1';
const dynamicImport=url=>new Function('url','return import(url)')(url);
let runtimePromise=null;

export function firebaseConfigured(){
  const config=window.CRIME_FIREBASE_CONFIG||{};
  return ['apiKey','authDomain','projectId','appId'].every(key=>typeof config[key]==='string'&&config[key].trim());
}

export async function firebaseDomainAuthorized(){
  if(!firebaseConfigured())return false;
  const config=window.CRIME_FIREBASE_CONFIG;
  const response=await fetch(`https://identitytoolkit.googleapis.com/v1/projects?key=${encodeURIComponent(config.apiKey)}`);
  if(!response.ok){const error=new Error('Firebase Authentication 설정을 확인할 수 없습니다.');error.code='AUTH_CONFIG_UNAVAILABLE';throw error;}
  const data=await response.json();
  const hostname=location.hostname.toLowerCase();
  return hostname==='localhost'||hostname==='127.0.0.1'||(data.authorizedDomains||[]).some(domain=>String(domain).toLowerCase()===hostname);
}

async function runtime(){
  if(!firebaseConfigured()){const error=new Error('Firebase 설정이 아직 연결되지 않았습니다.');error.code='FIREBASE_NOT_CONFIGURED';throw error;}
  if(runtimePromise)return runtimePromise;
  runtimePromise=(async()=>{
    const [appSdk,authSdk,storeSdk]=await Promise.all([
      dynamicImport(`${SDK_BASE}/firebase-app.js`),
      dynamicImport(`${SDK_BASE}/firebase-auth.js`),
      dynamicImport(`${SDK_BASE}/firebase-firestore.js`)
    ]);
    const config=window.CRIME_FIREBASE_CONFIG;
    const existing=appSdk.getApps().find(app=>app.name==='crime-ranking');
    const app=existing||appSdk.initializeApp(config,'crime-ranking');
    const auth=authSdk.getAuth(app);
    await authSdk.setPersistence(auth,authSdk.browserLocalPersistence);
    if(typeof auth.authStateReady==='function')await auth.authStateReady();
    return {app,auth,db:storeSdk.getFirestore(app),authSdk,storeSdk};
  })().catch(error=>{runtimePromise=null;throw error;});
  return runtimePromise;
}

export async function getCloudUser(){
  const cloud=await runtime();
  return cloud.auth.currentUser;
}

export async function signInGoogle(){
  const cloud=await runtime();
  const provider=new cloud.authSdk.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  const credential=await cloud.authSdk.signInWithPopup(cloud.auth,provider);
  return credential.user;
}

export async function getMyCloudRecord(){
  const cloud=await runtime();
  const user=cloud.auth.currentUser;
  if(!user)return null;
  const ref=cloud.storeSdk.doc(cloud.db,COLLECTION,user.uid);
  const snapshot=await cloud.storeSdk.getDoc(ref);
  return snapshot.exists()?{id:snapshot.id,...snapshot.data(),isMine:true}:null;
}

export async function saveCloudRecord(record){
  const cloud=await runtime();
  const user=cloud.auth.currentUser;
  if(!user){const error=new Error('Google 로그인이 필요합니다.');error.code='AUTH_REQUIRED';throw error;}
  const ref=cloud.storeSdk.doc(cloud.db,COLLECTION,user.uid);
  return cloud.storeSdk.runTransaction(cloud.db,async transaction=>{
    const previous=await transaction.get(ref);
    if(previous.exists()){
      const error=new Error('이 Google 계정은 이미 이 사건의 기록을 등록했습니다.');
      error.code='ALREADY_RECORDED';
      error.record={id:previous.id,...previous.data(),isMine:true};
      throw error;
    }
    const payload={
      caseId:CASE_ID,
      displayName:String(user.displayName||'익명 탐정').slice(0,40),
      score2:Math.max(0,Math.min(12,Math.round(Number(record.score2)||0))),
      solved:record.score2===12,
      questionsUsed:Math.max(0,Math.min(12,Math.round(Number(record.questionsUsed)||0))),
      officialTimeMs:Math.max(0,Math.min(604800000,Math.round(Number(record.officialTimeMs)||0))),
      timeRoomVisits:Math.max(0,Math.min(12,Math.round(Number(record.timeRoomVisits)||0))),
      submittedAt:cloud.storeSdk.serverTimestamp()
    };
    transaction.set(ref,payload);
    return {...payload,id:user.uid,isMine:true};
  });
}

export async function loadCloudRankings(){
  const cloud=await runtime();
  const snapshot=await cloud.storeSdk.getDocs(cloud.storeSdk.collection(cloud.db,COLLECTION));
  const uid=cloud.auth.currentUser?.uid||'';
  return snapshot.docs.map(item=>({id:item.id,...item.data(),isMine:item.id===uid}))
    .sort((a,b)=>(Number(b.score2)||0)-(Number(a.score2)||0)||(Number(a.questionsUsed)||0)-(Number(b.questionsUsed)||0)||(Number(a.officialTimeMs)||0)-(Number(b.officialTimeMs)||0))
    .slice(0,100)
    .map((item,index)=>({...item,rank:index+1}));
}

export function cloudErrorMessage(error){
  const code=error?.code||'';
  if(code==='ALREADY_RECORDED')return '이 Google 계정은 이미 이 사건의 기록을 등록했습니다.';
  if(code==='FIREBASE_NOT_CONFIGURED')return '공식 랭킹 저장소가 아직 연결되지 않았습니다.';
  if(code==='auth/popup-closed-by-user')return 'Google 로그인이 취소되었습니다.';
  if(code==='auth/popup-blocked')return '로그인 팝업이 차단되었습니다. 브라우저의 팝업 허용 후 다시 시도해 주세요.';
  if(code==='auth/unauthorized-domain')return 'Firebase 승인 도메인에 sidak.kr을 추가해야 합니다.';
  if(code==='AUTH_DOMAIN_MISSING')return 'Firebase Authentication 승인 도메인에 sidak.kr을 추가해야 합니다.';
  if(code==='AUTH_CONFIG_UNAVAILABLE')return 'Firebase Authentication 설정을 확인할 수 없습니다.';
  if(code==='permission-denied')return '랭킹 저장 권한을 확인할 수 없습니다. Firestore 보안 규칙을 점검해 주세요.';
  return error?.message||'공식 랭킹 저장소와 연결할 수 없습니다.';
}
