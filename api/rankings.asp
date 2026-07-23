<!--#include file="../inc/json.asp" -->
<!--#include file="../inc/db.asp" -->
<%
Dim conn : Set conn = OpenCrimeDb()
Dim rs : Set rs = conn.Execute("SELECT TOP 50 u.display_name, a.questions_used, a.official_time_ms, ROW_NUMBER() OVER (ORDER BY a.questions_used ASC, a.official_time_ms ASC, a.completed_at ASC) AS rank_no FROM CrimeAttempts a INNER JOIN CrimeUsers u ON a.user_id=u.user_id INNER JOIN CrimeCases c ON a.case_id=c.case_id WHERE c.slug='mark-last-repair-v1' AND a.status='completed' AND a.solved=1 ORDER BY a.questions_used ASC, a.official_time_ms ASC, a.completed_at ASC")
Dim items : items = ""
Do Until rs.EOF
  If items <> "" Then items = items & ","
  items = items & "{\"rank\":" & CLng(rs("rank_no")) & ",\"displayName\":\"" & JsonEscape(rs("display_name")) & "\",\"questionsUsed\":" & CLng(rs("questions_used")) & ",\"officialTimeMs\":" & CLng(rs("official_time_ms")) & "}"
  rs.MoveNext
Loop
rs.Close : conn.Close
SendOk "{\"items\":[" & items & "]}"
%>
