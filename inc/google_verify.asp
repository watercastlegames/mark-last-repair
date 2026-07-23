<%
Function VerifyGoogleCredential(credential)
  Dim internalKey : internalKey = Application("crimeGame_AuthInternalKey") & ""
  If internalKey = "" Then
    SendError "CONFIG_MISSING", "Google 인증 내부 설정이 완료되지 않았습니다.", 503
    Response.End
  End If
  Dim req : Set req = Server.CreateObject("WinHttp.WinHttpRequest.5.1")
  req.Open "POST", "http://127.0.0.1:8765/verify", False
  req.SetRequestHeader "Content-Type", "application/json"
  req.SetRequestHeader "X-Crime-Auth-Key", internalKey
  req.Send "{""credential"":""" & JsonEscape(credential) & """}"
  If req.Status <> 200 Then
    SendError "INVALID_GOOGLE_TOKEN", "Google 계정을 확인할 수 없습니다.", 401
    Response.End
  End If
  Dim result : result = req.ResponseText
  Dim subId : subId = JsonString(result, "sub")
  If subId = "" Then
    SendError "INVALID_GOOGLE_TOKEN", "Google 계정 식별자를 찾을 수 없습니다.", 401
    Response.End
  End If
  VerifyGoogleCredential = result
End Function
%>
