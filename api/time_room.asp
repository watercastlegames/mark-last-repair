<!--#include file="../inc/json.asp" -->
<!--#include file="../inc/db.asp" -->
<!--#include file="../inc/auth.asp" -->
<!--#include file="../inc/state_guard.asp" -->
<%
RequireCrimeAuth
Dim body : body = ReadBody()
Dim attemptId : attemptId = JsonNumber(body, "attemptId")
Dim roundNo : roundNo = JsonNumber(body, "roundNo")
If attemptId <= 0 Or roundNo < 1 Or roundNo > 4 Then
  SendError "INVALID_REQUEST", "시간의 방 입장 정보가 올바르지 않습니다.", 422
  Response.End
End If

Dim conn : Set conn = OpenCrimeDb()
Dim rs : Set rs = GetOwnedAttempt(conn, attemptId, CrimeUserId())
If rs("status") <> "in_progress" Or CLng(rs("current_round")) <> roundNo Then
  rs.Close : conn.Close
  SendError "PHASE_CONFLICT", "현재 라운드의 시간의 방에 입장할 수 없습니다.", 409
  Response.End
End If
rs.Close
Set rs = conn.Execute("SELECT COUNT(*) AS cnt FROM CrimeAttemptEvents WHERE attempt_id=" & attemptId & " AND round_no=" & roundNo & " AND event_type='TIME_ROOM_HINT'")
Dim hintNo : hintNo = CLng(rs("cnt")) + 1
rs.Close
If hintNo > 3 Then
  conn.Close
  SendError "HINT_LIMIT", "이번 라운드의 시간의 방 힌트를 모두 확인했습니다.", 409
  Response.End
End If

conn.BeginTrans
conn.Execute "UPDATE CrimeAttempts SET penalty_ms=penalty_ms+120000, updated_at=SYSUTCDATETIME() WHERE attempt_id=" & attemptId
AddEvent conn, attemptId, "TIME_ROOM_HINT", roundNo, "{""hintNo"":" & hintNo & ",""penaltyMs"":120000}"
conn.CommitTrans
Set rs = conn.Execute("SELECT penalty_ms FROM CrimeAttempts WHERE attempt_id=" & attemptId)
Dim totalPenaltyMs : totalPenaltyMs = CLng(rs("penalty_ms"))
rs.Close : conn.Close
SendOk "{""hintNo"":" & hintNo & ",""penaltyMs"":120000,""totalPenaltyMs"":" & totalPenaltyMs & "}"
%>
