<!--#include file="../inc/json.asp" -->
<!--#include file="../inc/db.asp" -->
<!--#include file="../inc/auth.asp" -->
<!--#include file="../inc/state_guard.asp" -->
<%
RequireCrimeAuth
Dim body : body=ReadBody()
Dim attemptId : attemptId=JsonNumber(body,"attemptId")
Dim roundNo : roundNo=JsonNumber(body,"roundNo")
Dim question : question=JsonString(body,"text")
If attemptId<=0 Or roundNo<1 Or roundNo>4 Or Len(question)=0 Or Len(question)>120 Then SendError "INVALID_REQUEST","질문은 1~120자로 입력하세요.",422:Response.End
Dim conn:Set conn=OpenCrimeDb()
Dim rs:Set rs=GetOwnedAttempt(conn,attemptId,CrimeUserId())
If rs("status")<>"in_progress" Or CLng(rs("current_round"))<>roundNo Then rs.Close:conn.Close:SendError "PHASE_CONFLICT","현재 라운드에서 질문할 수 없습니다.",409:Response.End
rs.Close
If OpenedClueCount(conn,attemptId,roundNo)<>3 Then conn.Close:SendError "PHASE_CONFLICT","단서 3개를 먼저 확인하세요.",409:Response.End
Dim qNo:qNo=RoundQuestionCount(conn,attemptId,roundNo)+1
If qNo>3 Then conn.Close:SendError "QUESTION_LIMIT","이번 라운드의 질문 3회를 모두 사용했습니다.",409:Response.End
conn.BeginTrans
Dim cmd:Set cmd=DbCommand(conn,"INSERT INTO CrimeQuestions(attempt_id,round_no,question_no,question_text,penalty_ms) VALUES(?,?,?,?,60000); SELECT CAST(SCOPE_IDENTITY() AS BIGINT) AS question_id")
AddBigInt cmd,attemptId:cmd.Parameters.Append cmd.CreateParameter("",17,1,,roundNo):cmd.Parameters.Append cmd.CreateParameter("",17,1,,qNo):AddText cmd,question,150
Set rs=cmd.Execute
Dim questionId:questionId=CLng(rs("question_id")):rs.Close
conn.Execute "UPDATE CrimeAttempts SET questions_used=questions_used+1, penalty_ms=penalty_ms+60000 WHERE attempt_id=" & attemptId
AddEvent conn,attemptId,"QUESTION_RESERVED",roundNo,"{}"
conn.CommitTrans
conn.Close
SendOk "{""questionId"":" & questionId & ",""questionNo"":" & qNo & ",""penaltyMs"":60000}"
%>
