<!--#include file="../inc/json.asp" -->
<!--#include file="../inc/db.asp" -->
<!--#include file="../inc/auth.asp" -->
<!--#include file="../inc/case_mark_v1.asp" -->
<!--#include file="../inc/state_guard.asp" -->
<%
RequireCrimeAuth
Dim conn : Set conn = OpenCrimeDb()
Dim userId : userId = CrimeUserId()
Dim caseIdValue : caseIdValue = CaseId(conn)
If caseIdValue = 0 Then SendError "CASE_NOT_FOUND", "사건 데이터가 준비되지 않았습니다.", 503 : Response.End
conn.BeginTrans
Dim rs : Set rs = conn.Execute("SELECT * FROM CrimeAttempts WITH (UPDLOCK,HOLDLOCK) WHERE user_id=" & userId & " AND case_id=" & caseIdValue)
If rs.EOF Then
  rs.Close
  conn.Execute "INSERT INTO CrimeAttempts(user_id,case_id,status,phase,current_round) VALUES(" & userId & "," & caseIdValue & ",'in_progress','ROUND_INTRO',1)"
  Set rs = conn.Execute("SELECT * FROM CrimeAttempts WHERE user_id=" & userId & " AND case_id=" & caseIdValue)
End If
If rs("status") = "completed" Then
  rs.Close : conn.CommitTrans : conn.Close
  SendError "ATTEMPT_LOCKED", "이미 완료한 사건입니다. 결과와 랭킹만 확인할 수 있습니다.", 409
  Response.End
End If
Dim json : json = AttemptJson(rs)
rs.Close : conn.CommitTrans : conn.Close
SendOk "{""attempt"":" & json & "}"
%>
