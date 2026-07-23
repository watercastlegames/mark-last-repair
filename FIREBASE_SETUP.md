# CASE 01 Firebase 랭킹 연결

## 선택 이유

- Firebase Authentication으로 Google 로그인을 제공한다.
- Cloud Firestore에 사용자당 사건 기록 하나만 생성한다.
- Puter 기본 KV는 사용자별 저장소라서 공용 랭킹에 사용할 수 없다.
- 이메일은 저장하지 않고 Firebase UID를 문서 키로만 사용한다.

## Firebase Console 설정

1. 이 게임 전용 Firebase 프로젝트를 Spark 요금제로 만든다.
2. Authentication → Sign-in method에서 Google을 활성화한다.
3. Authentication → Settings → Authorized domains에 `sidak.kr`을 추가한다.
4. Firestore Database를 만든다.
5. Firestore Rules에 루트의 `firestore.rules` 내용을 배포한다.
6. 프로젝트 설정 → 앱 → 웹 앱 추가에서 받은 설정을 `assets/js/firebase-config.js`에 입력한다.

```js
window.CRIME_FIREBASE_CONFIG = {
  apiKey: '...',
  authDomain: '....firebaseapp.com',
  projectId: '...',
  appId: '...'
};
```

## 저장 및 정렬 규칙

- Google 계정당 `mark-last-repair-v1` 기록은 한 번만 `create`할 수 있다.
- 수정과 삭제는 클라이언트에서 허용하지 않는다.
- 랭킹은 정답 점수 내림차순 → 질문 수 오름차순 → 공식 시간 오름차순이다.
- 점수는 정답 2점, 부분정답 1점, 오답 0점으로 총 12점이다.
