<!--#include file="../inc/json.asp" -->
<!--#include file="../inc/db.asp" -->
<!--#include file="../inc/auth.asp" -->
<!--#include file="../inc/state_guard.asp" -->
<%
RequireCrimeAuth
Dim body : body = ReadBody()
Dim attemptId : attemptId = JsonNumber(body,"attemptId")
Dim roundNo : roundNo = JsonNumber(body,"roundNo")
Dim companionId : companionId = JsonString(body,"companionId")
Dim question : question = JsonString(body,"question")
Dim comment : comment = JsonString(body,"comment")
If attemptId<=0 Or roundNo<1 Or roundNo>4 Or Len(companionId)>30 Or question="" Or comment="" Then SendError "INVALID_REQUEST","동료 의견 정보가 올바르지 않습니다.",422 : Response.End
Dim conn : Set conn = OpenCrimeDb()
Dim rs : Set rs = GetOwnedAttempt(conn,attemptId,CrimeUserId())
If rs("status")<>"in_progress" Or CLng(rs("current_round"))<>roundNo Then rs.Close:conn.Close:SendError "PHASE_CONFLICT","현재 라운드에서 들을 수 없는 의견입니다.",409:Response.End
rs.Close
Set rs = conn.Execute("SELECT comment_text,question_text,ai_source FROM CrimeCompanionHints WHERE attempt_id=" & attemptId & " AND round_no=" & roundNo & " AND companion_id='" & Replace(companionId,"'","''") & "'")
If rs.EOF Then
  rs.Close
  Dim cmd : Set cmd=DbCommand(conn,"INSERT INTO CrimeCompanionHints(attempt_id,round_no,companion_id,comment_text,question_text,ai_source) VALUES(?,?,?,?,?,?)")
  AddBigInt cmd,attemptId:cmd.Parameters.Append cmd.CreateParameter("",17,1,,roundNo):AddText cmd,companionId,30:AddText cmd,comment,300:AddText cmd,question,150:AddText cmd,"puter",20:cmd.Execute
  AddEvent conn,attemptId,"COMPANION_HINT",roundNo,"{}"
Else
  comment=rs("comment_text"):question=rs("question_text")
  rs.Close
End If
conn.Close
SendOk "{""hint"":{""comment"":""" & JsonEscape(comment) & """,""question"":""" & JsonEscape(question) & """}}"
%>
