<!--#include file="../inc/json.asp" -->
<!--#include file="../inc/db.asp" -->
<!--#include file="../inc/auth.asp" -->
<!--#include file="../inc/state_guard.asp" -->
<%
RequireCrimeAuth
Dim body : body = ReadBody()
Dim attemptId : attemptId = JsonNumber(body, "attemptId")
Dim roundNo : roundNo = JsonNumber(body, "roundNo")
If attemptId <= 0 Or roundNo < 1 Or roundNo > 4 Then SendError "INVALID_REQUEST", "라운드 정보를 확인해 주세요.", 422 : Response.End

Dim conn : Set conn = OpenCrimeDb()
Dim rs : Set rs = GetOwnedAttempt(conn, attemptId, CrimeUserId())
If rs("status") <> "in_progress" Or CLng(rs("current_round")) <> roundNo Then
  rs.Close : conn.Close : SendError "INVALID_PHASE", "현재 진행 단계에서는 다음 라운드로 갈 수 없습니다.", 409 : Response.End
End If
rs.Close

If OpenedClueCount(conn, attemptId, roundNo) < 3 Or RoundQuestionCount(conn, attemptId, roundNo) < 1 Then
  conn.Close : SendError "ROUND_NOT_READY", "단서 3개와 질문 1개를 먼저 완료해 주세요.", 409 : Response.End
End If

Dim nextRound, nextPhase
If roundNo = 4 Then
  nextRound = 4
  nextPhase = "FINAL_ANSWER"
Else
  nextRound = roundNo + 1
  nextPhase = "ROUND_INTRO"
End If
conn.Execute "UPDATE CrimeAttempts SET current_round=" & nextRound & ", phase='" & nextPhase & "', updated_at=SYSUTCDATETIME() WHERE attempt_id=" & attemptId
AddEvent conn, attemptId, "ROUND_ADVANCED", roundNo, "{}"
Set rs = GetOwnedAttempt(conn, attemptId, CrimeUserId())
Dim payload : payload = "{\"attempt\":" & AttemptJson(rs) & "}"
rs.Close : conn.Close
SendOk payload
%>
