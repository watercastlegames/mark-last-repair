<!--#include file="../inc/json.asp" -->
<!--#include file="../inc/db.asp" -->
<!--#include file="../inc/google_verify.asp" -->
<%
Dim body : body = ReadBody()
Dim credential : credential = JsonString(body, "credential")
If credential = "" Then SendError "INVALID_REQUEST", "Google 인증 정보가 없습니다.", 422 : Response.End
Dim claims : claims = VerifyGoogleCredential(credential)
Dim subId : subId = JsonString(claims, "sub")
Dim displayName : displayName = JsonString(claims, "name")
Dim picture : picture = JsonString(claims, "picture")
If displayName = "" Then displayName = "탐정"
Dim conn : Set conn = OpenCrimeDb()
Dim cmd, rs, userId
Set cmd = DbCommand(conn, "SELECT user_id,display_name FROM CrimeUsers WHERE google_sub=?")
AddText cmd, subId, 64
Set rs = cmd.Execute
If rs.EOF Then
  rs.Close
  Set cmd = DbCommand(conn, "INSERT INTO CrimeUsers(google_sub,display_name,avatar_url) VALUES(?,?,?); SELECT CAST(SCOPE_IDENTITY() AS BIGINT) AS user_id")
  AddText cmd, subId, 64 : AddText cmd, displayName, 80 : AddText cmd, picture, 500
  Set rs = cmd.Execute
  userId = CLng(rs("user_id"))
Else
  userId = CLng(rs("user_id"))
End If
rs.Close : conn.Close
Session("crime_user_id") = userId
Session("crime_google_sub") = subId
Session("crime_display_name") = displayName
SendOk "{""user"":{""id"":" & userId & ",""displayName"":""" & JsonEscape(displayName) & """}}"
%>
