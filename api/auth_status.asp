<%
' 이 엔드포인트는 게임 진입을 막지 않도록 DB/인증 모듈을 의도적으로 불러오지 않는다.
' Google/DB 운영값이 적용되기 전에도 브라우저는 안전하게 데모 모드로 진입한다.
Response.Buffer = True
Response.ContentType = "application/json"
Response.CharSet = "utf-8"
Response.AddHeader "Cache-Control", "no-store"
Response.Write "{""ok"":true,""data"":{""config"":{""googleClientId"":"""",""ready"":false},""user"":null},""serverNow"":""""}"
%>
