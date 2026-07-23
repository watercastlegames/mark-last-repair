# CASE 01 배포 체크리스트

공개 경로: `https://sidak.kr/autodev/GameCreator/crimeGame/`

## 웹 파일

`index.html`, `developer.html`, `assets`를 정적 웹사이트 경로 `GameCreator/crimeGame`에 배포한다. `tmp`, `release`와 로컬 참고 이미지는 배포하지 않는다.

이 게임은 별도 Classic ASP·SQL Server 백엔드를 사용하지 않는다. 진행 상황은 브라우저 로컬 저장소에 보관하고, Google 로그인과 공개 랭킹은 Firebase Authentication·Cloud Firestore를 사용한다.

## Firebase

1. `assets/js/firebase-config.js`에 Firebase 웹 설정을 입력한다.
2. Firebase Authentication에서 Google 로그인을 활성화한다.
3. Authentication의 Authorized domains에 `sidak.kr`을 등록한다.
4. `firestore.rules`를 Firebase Console의 Firestore Rules에 게시한다.
5. 운영 도메인에서 Google 로그인, 사건당 1회 등록과 공개 랭킹을 확인한다.

## 운영 확인

1. 로그인하지 않은 상태에서 게임을 4라운드까지 완주할 수 있는지 확인한다.
2. 결과 화면에서 Google 로그인 후 기록을 등록한다.
3. 새로고침 뒤 단서·질문·동료 의견이 유지되는지 확인한다.
4. 같은 Google 계정으로 같은 사건 기록을 두 번 등록할 수 없는지 확인한다.
5. 모바일(360px)과 PC에서 중앙 팝업, 가로 스크롤 이미지, 고정 HUD를 점검한다.
