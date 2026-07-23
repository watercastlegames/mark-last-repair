# GitHub 전체 공개 전 체크리스트

## 저장소

- [ ] `watercastlegames` 계정에 새 공개 저장소를 만든다.
- [ ] 저장소 이름과 설명을 결정한다.
- [ ] README의 GitHub 링크를 새 저장소 직접 주소로 바꾼다.
- [ ] 개발자 페이지의 GitHub 버튼을 새 저장소 직접 주소로 바꾼다.
- [ ] 기본 브랜치를 `main`으로 사용한다.

추천 저장소 이름:

```text
mark-last-repair
```

추천 설명:

```text
피의게임 X를 보고 팬의 마음으로 바이브코딩한 AI 미스터리 웹게임. 전체 개발 소스 공개.
```

## 공개 파일

- [ ] `tmp/`와 외부 참고 사진이 포함되지 않았는지 확인한다.
- [ ] 사용하지 않는 과거 `game-round*.bundle.js`를 제외한다.
- [ ] 현재 사용하는 `game-round51.bundle.js`는 포함한다.
- [ ] SFTP 비밀번호, 서버 연결 문자열과 내부 키가 없는지 검색한다.
- [ ] 플레이 GIF와 현재 가상 인물명이 적용된 스크린샷을 포함한다.

## 실행 확인

- [ ] `python -m http.server 8080`으로 시작한다.
- [ ] `http://localhost:8080/?demo=1`에서 네 라운드를 완주한다.
- [ ] 동료 의견과 집사 질문이 Puter AI로 동작한다.
- [ ] 새로고침 후 진행이 복구된다.
- [ ] 360px 모바일에서 잘림과 가로 스크롤이 없다.

## Firebase

- [ ] Firestore Rules가 최신인지 확인한다.
- [ ] 공개 서비스 도메인만 Firebase Authorized domains에 등록한다.
- [ ] 테스트 계정의 불필요한 랭킹 기록을 정리한다.
- [ ] README에 Firebase 연결이 선택 기능임을 표시한다.

## 공개 후

- [ ] 저장소 About에 게임 주소와 Topics를 추가한다.
- [ ] 추천 Topics: `mystery-game`, `puter-js`, `firebase`, `vibe-coding`, `vanilla-javascript`, `korean`
- [ ] 첫 Release에 플레이 GIF와 주요 변경 내용을 첨부한다.
- [ ] Threads에 게임 주소와 GitHub 저장소 주소를 함께 소개한다.
