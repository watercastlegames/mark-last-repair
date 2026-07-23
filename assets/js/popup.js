const root = () => document.querySelector('#popupRoot');
let lastFocus = null;
let keyHandler = null;

export function closePopup(){
  if(keyHandler) document.removeEventListener('keydown', keyHandler);
  keyHandler = null;
  root().innerHTML = '';
  document.body.classList.remove('popup-open');
  if(lastFocus) lastFocus.focus?.();
}

export function openPopup({ kicker='', title='', lead='', body='', actions=[], dismissible=false, onClose=null }){
  if(keyHandler) document.removeEventListener('keydown', keyHandler);
  keyHandler = null;
  if(!document.body.classList.contains('popup-open')) lastFocus = document.activeElement;
  document.body.classList.add('popup-open');
  const actionHtml = actions.length ? `<footer class="popup-actions">${actions.map((a,i)=>`<button class="button ${a.primary?'primary':''}" type="button" data-popup-action="${i}" ${a.disabled?'disabled':''}>${a.label}</button>`).join('')}</footer>` : '';
  root().innerHTML = `<section class="popup-layer" role="presentation"><div class="popup-mini-timer" aria-label="나의 누적 시간"><button class="popup-mini-home" type="button" aria-label="게임 메인화면으로 이동"><img src="assets/images/home.svg" alt="" width="15" height="15" aria-hidden="true"></button><span aria-hidden="true">⏱</span><b id="popupMiniTime">00:00</b></div><article class="game-popup" role="dialog" aria-modal="true" aria-labelledby="popupTitle"><header class="popup-head">${dismissible?'<button class="popup-close" type="button" aria-label="닫기">×</button>':''}<span class="popup-kicker">${kicker}</span><h2 class="popup-title" id="popupTitle" tabindex="-1">${title}</h2>${lead?`<p class="popup-lead">${lead}</p>`:''}</header><div class="popup-body">${body}</div>${actionHtml}</article></section>`;
  const layer=root().querySelector('.popup-layer');
  const popup=root().querySelector('.game-popup');
  const close=()=>{closePopup();onClose?.();};
  root().querySelector('.popup-mini-home')?.addEventListener('click',()=>{
    closePopup();
    document.querySelector('#caseDashboard')?.scrollIntoView({block:'start'});
  });
  root().querySelectorAll('[data-popup-action]').forEach(btn=>btn.onclick=()=>actions[Number(btn.dataset.popupAction)]?.onClick?.());
  root().querySelector('.popup-close')?.addEventListener('click',close);
  layer.addEventListener('click',e=>{if(dismissible&&e.target===layer)close();});
  keyHandler=e=>{
    if(e.key==='Escape'&&dismissible){e.preventDefault();close();return;}
    if(e.key!=='Tab')return;
    const focusable=[...popup.querySelectorAll('button:not([disabled]),input:not([disabled]),[tabindex]:not([tabindex="-1"])')];
    if(!focusable.length)return;
    const first=focusable[0],last=focusable[focusable.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  };
  document.addEventListener('keydown',keyHandler);
  popup.scrollTop=0;
  popup.querySelector('.popup-body').scrollTop=0;
  (popup.querySelector('[data-popup-action]:not([disabled])')||popup.querySelector('button:not([disabled]),input')||popup.querySelector('#popupTitle'))?.focus();
}

export function setPopupBusy(value,message='사건 기록을 확인하고 있습니다…'){
  const popup=root().querySelector('.game-popup'); if(!popup)return;
  popup.querySelector('.popup-busy')?.remove();
  if(value) popup.insertAdjacentHTML('beforeend',`<div class="popup-busy" role="status"><span class="busy-spinner"></span><b>${message}</b></div>`);
  popup.querySelectorAll('button,input').forEach(el=>{if(value){el.dataset.wasDisabled=el.disabled?'1':'0';el.disabled=true;}else{el.disabled=el.dataset.wasDisabled==='1';delete el.dataset.wasDisabled;}});
}
