# Google 인증 보조 서비스

Classic ASP는 Google ID 토큰의 공개키 검증을 직접 안정적으로 수행하기 어려워, IIS 서버의 localhost에서만 실행하는 작은 검증 서비스를 둡니다.

## 준비

1. Google Cloud Console에서 이 게임의 HTTPS 주소를 Authorized JavaScript origin으로 등록한다.
2. 서버 환경 변수 `CRIME_GOOGLE_CLIENT_ID`, `CRIME_AUTH_INTERNAL_KEY`를 설정한다.
3. Python 가상환경에서 `pip install -r requirements.txt`를 실행한다.
4. `run_auth_service.ps1`을 서비스 관리자(NSSM/작업 스케줄러 등)로 상시 실행한다.
5. IIS Application 값 `crimeGame_GoogleClientId`, `crimeGame_AuthInternalKey`에 동일한 값을 등록한다.

이 서비스는 `127.0.0.1:8765`만 열며, 외부에 포트를 공개하지 않는다.
