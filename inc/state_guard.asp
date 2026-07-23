<%
Function GetOwnedAttempt(conn, attemptId, userId)
  Dim rs : Set rs = conn.Execute("SELECT a.*, c.slug FROM CrimeAttempts a INNER JOIN CrimeCases c ON a.case_id=c.case_id WHERE a.attempt_id=" & CLng(attemptId) & " AND a.user_id=" & CLng(userId))
  If rs.EOF Then
    rs.Close : SendError "ATTEMPT_NOT_FOUND", "진행 중인 사건을 찾을 수 없습니다.", 404 : Response.End
  End If
  Set GetOwnedAttempt = rs
End Function

Function AttemptJson(rs)
  AttemptJson = "{""id"":" & CLng(rs("attempt_id")) & ",""status"":""" & JsonEscape(rs("status")) & """,""phase"":""" & JsonEscape(rs("phase")) & """,""roundNo"":" & CLng(rs("current_round")) & ",""penaltyMs"":" & CLng(rs("penalty_ms")) & ",""totalQuestions"":" & CLng(rs("questions_used")) & ",""startedAt"":""" & JsonEscape(rs("started_at")) & """,""solved"":"
  If IsNull(rs("solved")) Then AttemptJson = AttemptJson & "null" Else AttemptJson = AttemptJson & LCase(CStr(CBool(rs("solved"))))
  AttemptJson = AttemptJson & "}"
End Function

Function RoundQuestionCount(conn, attemptId, roundNo)
  Dim rs : Set rs = conn.Execute("SELECT COUNT(*) AS cnt FROM CrimeQuestions WHERE attempt_id=" & CLng(attemptId) & " AND round_no=" & CLng(roundNo))
  RoundQuestionCount = CLng(rs("cnt"))
  rs.Close
End Function

Function OpenedClueCount(conn, attemptId, roundNo)
  Dim rs : Set rs = conn.Execute("SELECT COUNT(*) AS cnt FROM CrimeOpenedClues WHERE attempt_id=" & CLng(attemptId) & " AND round_no=" & CLng(roundNo))
  OpenedClueCount = CLng(rs("cnt"))
  rs.Close
End Function
%>
