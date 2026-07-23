<!--#include file="../inc/json.asp" -->
<!--#include file="../inc/db.asp" -->
<!--#include file="../inc/auth.asp" -->
<!--#include file="../inc/case_mark_v1.asp" -->
<!--#include file="../inc/state_guard.asp" -->
<%
RequireCrimeAuth
Dim body : body = ReadBody()
Dim attemptId : attemptId = JsonNumber(body,"attemptId")
Dim roundNo : roundNo = JsonNumber(body,"roundNo")
Dim clueId : clueId = JsonString(body,"clueId")
If attemptId <= 0 Or Not ValidClue(roundNo, clueId) Then SendError "INVALID_REQUEST", "단서 정보가 올바르지 않습니다.", 422 : Response.End
Dim conn : Set conn = OpenCrimeDb()
Dim rs : Set rs = GetOwnedAttempt(conn,attemptId,CrimeUserId())
If rs("status") <> "in_progress" Or CLng(rs("current_round")) <> roundNo Then rs.Close : conn.Close : SendError "PHASE_CONFLICT", "현재 라운드에서 열 수 없는 단서입니다.",409 : Response.End
rs.Close
conn.BeginTrans
On Error Resume Next
conn.Execute "INSERT INTO CrimeOpenedClues(attempt_id,round_no,clue_id) VALUES(" & attemptId & "," & roundNo & ",'" & Replace(clueId,"'","''") & "')"
On Error GoTo 0
AddEvent conn,attemptId,"CLUE_OPEN",roundNo,"{\"clueId\":\"" & JsonEscape(clueId) & "\"}"
conn.CommitTrans
Dim opened : opened = OpenedClueCount(conn,attemptId,roundNo)
conn.Close
SendOk "{""clue"":{""id"":""" & JsonEscape(clueId) & """,""text"":""" & JsonEscape(ClueText(clueId)) & """},""openedCount"":" & opened & "}"
%>
