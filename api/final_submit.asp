<!--#include file="../inc/json.asp" -->
<!--#include file="../inc/db.asp" -->
<!--#include file="../inc/auth.asp" -->
<!--#include file="../inc/case_mark_v1.asp" -->
<!--#include file="../inc/state_guard.asp" -->
<%
RequireCrimeAuth
Dim body : body = ReadBody()
Dim attemptId : attemptId = JsonNumber(body, "attemptId")
Dim victim : victim = JsonString(body, "victim")
Dim killer : killer = JsonString(body, "killer")
Dim place : place = JsonString(body, "place")
Dim method : method = JsonString(body, "method")
Dim motive : motive = JsonString(body, "motive")
Dim truth : truth = JsonString(body, "truth")
If attemptId <= 0 Or killer = "" Or method = "" Or motive = "" Or truth = "" Then SendError "INVALID_REQUEST", "최종 발의 항목을 모두 입력해 주세요.", 422 : Response.End

Dim conn : Set conn = OpenCrimeDb()
Dim rs : Set rs = GetOwnedAttempt(conn, attemptId, CrimeUserId())
If rs("status") <> "in_progress" Or rs("phase") <> "FINAL_ANSWER" Then
  rs.Close : conn.Close : SendError "INVALID_PHASE", "아직 최종 발의를 할 단계가 아닙니다.", 409 : Response.End
End If
Dim solved : solved = IsSolved(victim, killer, place, method, motive, truth)
rs.Close

Dim sql, answerJson
answerJson = "{\"victim\":\"" & JsonEscape(victim) & "\",\"killer\":\"" & JsonEscape(killer) & "\",\"place\":\"" & JsonEscape(place) & "\",\"method\":\"" & JsonEscape(method) & "\",\"motive\":\"" & JsonEscape(motive) & "\",\"truth\":\"" & JsonEscape(truth) & "\"}"
sql = "INSERT INTO CrimeFinalAnswers (attempt_id, answer_json, solved) VALUES (" & attemptId & ",N'" & Replace(answerJson, "'", "''") & "'," & IIf(solved, 1, 0) & ")"
conn.Execute sql
conn.Execute "UPDATE CrimeAttempts SET status='completed', phase='RESULT', solved=" & IIf(solved, 1, 0) & ", completed_at=SYSUTCDATETIME(), official_time_ms=DATEDIFF_BIG(millisecond, started_at, SYSUTCDATETIME()) + penalty_ms, updated_at=SYSUTCDATETIME() WHERE attempt_id=" & attemptId
AddEvent conn, attemptId, "FINAL_SUBMITTED", 4, "{}"
Set rs = GetOwnedAttempt(conn, attemptId, CrimeUserId())
Dim payload : payload = "{\"solved\":" & LCase(CStr(solved)) & ",\"attempt\":" & AttemptJson(rs) & "}"
rs.Close : conn.Close
SendOk payload
%>
