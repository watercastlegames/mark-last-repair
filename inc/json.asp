<%
Option Explicit
Response.CodePage = 65001
Response.CharSet = "utf-8"
Response.ContentType = "application/json"
Response.CacheControl = "no-cache"
Response.AddHeader "Cache-Control", "no-store"

Function ReadBody()
  ReadBody = Request.BinaryRead(Request.TotalBytes)
  If LenB(ReadBody) > 0 Then
    Dim stm : Set stm = Server.CreateObject("ADODB.Stream")
    stm.Type = 1 : stm.Open : stm.Write ReadBody : stm.Position = 0 : stm.Type = 2 : stm.Charset = "utf-8"
    ReadBody = stm.ReadText : stm.Close
  Else
    ReadBody = ""
  End If
End Function

Function JsonEscape(v)
  Dim s : s = CStr(v & "")
  s = Replace(s, "\", "\\")
  s = Replace(s, """", "\"")
  s = Replace(s, vbCrLf, "\n")
  s = Replace(s, vbCr, "\n")
  s = Replace(s, vbLf, "\n")
  JsonEscape = s
End Function

Function JsonString(body, key)
  Dim re, m
  Set re = New RegExp
  re.Global = False : re.IgnoreCase = True
  re.Pattern = """" & key & """\s*:\s*""((?:[^""\\]|\\.)*)"""
  Set m = re.Execute(body)
  If m.Count = 0 Then JsonString = "" Else JsonString = Replace(Replace(m(0).SubMatches(0), "\"", """"), "\\", "\")
End Function

Function JsonNumber(body, key)
  Dim re, m
  Set re = New RegExp
  re.Global = False : re.IgnoreCase = True
  re.Pattern = """" & key & """\s*:\s*(-?\d+)"
  Set m = re.Execute(body)
  If m.Count = 0 Then JsonNumber = 0 Else JsonNumber = CLng(m(0).SubMatches(0))
End Function

Function SafeLong(v)
  If IsNumeric(v) Then SafeLong = CLng(v) Else SafeLong = 0
End Function

Sub SendOk(jsonData)
  Response.Status = "200 OK"
  Response.Write "{""ok"":true,""data"":" & jsonData & ",""serverNow"":""" & JsonEscape(Now()) & """}"
End Sub

Sub SendError(code, message, status)
  Response.Status = CStr(status) & " Error"
  Response.Write "{""ok"":false,""error"":{""code"":""" & JsonEscape(code) & """,""message"":""" & JsonEscape(message) & """}}"
End Sub
%>
