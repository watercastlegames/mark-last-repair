<!--#include file="../inc/json.asp" -->
<!--#include file="../inc/db.asp" -->
<!--#include file="../inc/auth.asp" -->
<!--#include file="../inc/case_mark_v1.asp" -->
<!--#include file="../inc/state_guard.asp" -->
<%
RequireCrimeAuth
Dim conn : Set conn = OpenCrimeDb()
Dim cid : cid = CaseId(conn)
Dim rs : Set rs = conn.Execute("SELECT TOP 1 * FROM CrimeAttempts WHERE user_id=" & CrimeUserId() & " AND case_id=" & cid)
If rs.EOF Then
  rs.Close : conn.Close : SendOk "{""attempt"":null,""clueIds"":[],""questions"":[],""hints"":{},""timeRoomVisits"":{}}" : Response.End
End If
Dim attemptId : attemptId = CLng(rs("attempt_id"))
Dim out : out = "{""attempt"":" & AttemptJson(rs)
rs.Close

Dim clueItems, hints, questionItems, timeRoomItems, r2
clueItems = ""
Set r2 = conn.Execute("SELECT clue_id FROM CrimeOpenedClues WHERE attempt_id=" & attemptId & " ORDER BY round_no, clue_id")
Do Until r2.EOF
  If clueItems <> "" Then clueItems = clueItems & ","
  clueItems = clueItems & """" & JsonEscape(r2("clue_id")) & """"
  r2.MoveNext
Loop
r2.Close

hints = ""
Set r2 = conn.Execute("SELECT round_no, companion_id, comment_text, question_text FROM CrimeCompanionHints WHERE attempt_id=" & attemptId & " ORDER BY round_no, companion_id")
Do Until r2.EOF
  If hints <> "" Then hints = hints & ","
  hints = hints & """" & CLng(r2("round_no")) & ":" & JsonEscape(r2("companion_id")) & """:{""comment"":""" & JsonEscape(r2("comment_text")) & """,""question"":""" & JsonEscape(r2("question_text")) & """,""companionId"":""" & JsonEscape(r2("companion_id")) & """}"
  r2.MoveNext
Loop
r2.Close

questionItems = ""
Set r2 = conn.Execute("SELECT round_no, question_text, answer_category FROM CrimeQuestions WHERE attempt_id=" & attemptId & " AND committed_at IS NOT NULL ORDER BY question_id")
Do Until r2.EOF
  If questionItems <> "" Then questionItems = questionItems & ","
  questionItems = questionItems & "{""roundNo"":" & CLng(r2("round_no")) & ",""text"":""" & JsonEscape(r2("question_text")) & """,""category"":""" & JsonEscape(r2("answer_category")) & """}"
  r2.MoveNext
Loop
r2.Close

timeRoomItems = ""
Set r2 = conn.Execute("SELECT round_no, COUNT(*) AS visit_count FROM CrimeAttemptEvents WHERE attempt_id=" & attemptId & " AND event_type='TIME_ROOM_HINT' GROUP BY round_no ORDER BY round_no")
Do Until r2.EOF
  If timeRoomItems <> "" Then timeRoomItems = timeRoomItems & ","
  timeRoomItems = timeRoomItems & """" & CLng(r2("round_no")) & """:" & CLng(r2("visit_count"))
  r2.MoveNext
Loop
r2.Close
out = out & ",""clueIds"":[" & clueItems & "],""questions"":[" & questionItems & "],""hints"":{" & hints & "},""timeRoomVisits"":{" & timeRoomItems & "}}"
conn.Close
SendOk out
%>
