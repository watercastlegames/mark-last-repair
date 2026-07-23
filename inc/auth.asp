<%
Function CrimeUserId()
  CrimeUserId = SafeLong(Session("crime_user_id"))
End Function

Sub RequireCrimeAuth()
  If CrimeUserId() <= 0 Then
    SendError "AUTH_REQUIRED", "Google 로그인이 필요합니다.", 401
    Response.End
  End If
End Sub
%>
