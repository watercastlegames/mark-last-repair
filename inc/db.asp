<%
Function OpenCrimeDb()
  Dim connStr : connStr = Application("crimeGame_ConnectionString") & ""
  If connStr = "" Then
    SendError "CONFIG_MISSING", "게임 DB 연결 설정이 완료되지 않았습니다.", 503
    Response.End
  End If
  Dim conn : Set conn = Server.CreateObject("ADODB.Connection")
  conn.Open connStr
  Set OpenCrimeDb = conn
End Function

Function DbCommand(conn, sql)
  Dim cmd : Set cmd = Server.CreateObject("ADODB.Command")
  Set cmd.ActiveConnection = conn
  cmd.CommandType = 1
  cmd.CommandText = sql
  Set DbCommand = cmd
End Function

Sub AddText(cmd, value, size)
  cmd.Parameters.Append cmd.CreateParameter("", 202, 1, size, CStr(value & ""))
End Sub

Sub AddBigInt(cmd, value)
  cmd.Parameters.Append cmd.CreateParameter("", 20, 1, , CLng(value))
End Sub

Function NextEventSeq(conn, attemptId)
  Dim rs : Set rs = conn.Execute("SELECT ISNULL(MAX(seq_no),0)+1 AS next_seq FROM CrimeAttemptEvents WHERE attempt_id=" & CLng(attemptId))
  NextEventSeq = CLng(rs("next_seq"))
  rs.Close
End Function

Sub AddEvent(conn, attemptId, eventType, roundNo, payload)
  Dim cmd : Set cmd = DbCommand(conn, "INSERT INTO CrimeAttemptEvents(attempt_id,seq_no,event_type,round_no,payload_json) VALUES(?,?,?,?,?)")
  AddBigInt cmd, attemptId
  cmd.Parameters.Append cmd.CreateParameter("", 3, 1, , NextEventSeq(conn, attemptId))
  AddText cmd, eventType, 40
  cmd.Parameters.Append cmd.CreateParameter("", 17, 1, , CLng(roundNo))
  AddText cmd, payload, 4000
  cmd.Execute
End Sub
%>
