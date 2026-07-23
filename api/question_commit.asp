<!--#include file="../inc/json.asp" -->
<!--#include file="../inc/db.asp" -->
<!--#include file="../inc/auth.asp" -->
<!--#include file="../inc/state_guard.asp" -->
<%
RequireCrimeAuth
Dim body:body=ReadBody()
Dim questionId:questionId=JsonNumber(body,"questionId")
Dim category:category=UCase(JsonString(body,"answerCategory"))
If questionId<=0 Or InStr("|YES|NO|MAYBE|IRRELEVANT|","|" & category & "|")=0 Then SendError "INVALID_REQUEST","집사 판정이 올바르지 않습니다.",422:Response.End
Dim conn:Set conn=OpenCrimeDb()
Dim rs:Set rs=conn.Execute("SELECT q.*,a.user_id,a.status FROM CrimeQuestions q INNER JOIN CrimeAttempts a ON q.attempt_id=a.attempt_id WHERE q.question_id=" & questionId)
If rs.EOF Or CLng(rs("user_id"))<>CrimeUserId() Then rs.Close:conn.Close:SendError "QUESTION_NOT_FOUND","질문을 찾을 수 없습니다.",404:Response.End
Dim attemptId:attemptId=CLng(rs("attempt_id")), roundNo:roundNo=CLng(rs("round_no"))
If Not IsNull(rs("committed_at")) Then category=rs("answer_category") Else conn.Execute "UPDATE CrimeQuestions SET answer_category='" & Replace(category,"'","''") & "',answer_source='puter',committed_at=SYSUTCDATETIME() WHERE question_id=" & questionId
rs.Close
If RoundQuestionCount(conn,attemptId,roundNo)>=3 Then conn.Execute "UPDATE CrimeAttempts SET phase='ROUND_SUMMARY' WHERE attempt_id=" & attemptId Else conn.Execute "UPDATE CrimeAttempts SET phase='QUESTION_SELECT' WHERE attempt_id=" & attemptId
AddEvent conn,attemptId,"QUESTION_COMMITTED",roundNo,"{}"
conn.Close
SendOk "{""answerCategory"":""" & JsonEscape(category) & """}"
%>
