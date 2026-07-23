# CASE 01 배포 체크리스트

공개 경로: `https://sidak.kr/autodev/GameCreator/crimeGame/`

## 웹 파일

이 폴더의 `index.html`, `assets`, `api`, `inc`를 IIS 사이트의 `GameCreator/crimeGame`에 배포한다. `tmp`와 로컬 참고 이미지는 배포하지 않는다.

## SQL Server

1. 신규 설치는 `sql/001_crime_game_schema.sql`을 한 번 실행한다. 기존 설치에서 001을 이미 적용했다면 `sql/003_add_updated_at_for_existing_install.sql`도 먼저 실행한다.
2. `sql/002_case_mark_v1_seed.sql`을 실행한다.
3. IIS Application에 다음 Application 값을 제공한다.
   - `crimeGame_ConnectionString`
   - `crimeGame_GoogleWebClientId`
   - `crimeGame_AuthInternalKey`

값은 저장소나 프런트엔드에 넣지 않는다. `crimeGame_GoogleWebClientId`만 브라우저에 공개되는 식별자다.

## Google 로그인

Google Cloud Console OAuth Web client의 Authorized JavaScript origins에 아래 주소를 등록한다.

`https://sidak.kr`

인증 보조 서비스에는 같은 Google client ID와 내부 공유 키를 환경 변수로 등록하고 `auth-service/run_auth_service.ps1`을 localhost 서비스로 상시 실행한다.

## 운영 확인

1. 로그인하지 않은 상태에서 데모 체험이 4라운드까지 완주되는지 확인한다.
2. Google 로그인 후 새 계정으로 CASE 01을 시작한다.
3. 새로고침 뒤 단서·질문·동료 의견이 유지되는지 확인한다.
4. 같은 Google 계정으로 완료 후 다시 시작하면 결과/랭킹만 보이는지 확인한다.
5. 모바일(360px)과 PC에서 중앙 팝업, 가로 스크롤 이미지, 고정 HUD를 점검한다.
