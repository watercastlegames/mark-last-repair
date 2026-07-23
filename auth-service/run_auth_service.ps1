$ErrorActionPreference = 'Stop'
if (-not $env:CRIME_GOOGLE_CLIENT_ID -or -not $env:CRIME_AUTH_INTERNAL_KEY) {
  throw 'CRIME_GOOGLE_CLIENT_ID와 CRIME_AUTH_INTERNAL_KEY 환경 변수를 먼저 설정하세요.'
}
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
& python (Join-Path $root 'google_verify.py')
