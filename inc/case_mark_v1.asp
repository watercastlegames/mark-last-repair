<%
Function CaseId(conn)
  Dim rs : Set rs = conn.Execute("SELECT TOP 1 case_id FROM CrimeCases WHERE slug='mark-last-repair-v1' AND is_active=1 ORDER BY version_no DESC")
  If rs.EOF Then CaseId = 0 Else CaseId = CLng(rs("case_id"))
  rs.Close
End Function

Function ValidClue(roundNo, clueId)
  Dim allowed
  allowed = Array("", "r1_breaker,r1_water,r1_toolbag", "r2_glove,r2_schedule,r2_key", "r3_spray,r3_residue,r3_ticket", "r4_news,r4_gold_list,r4_connection")
  ValidClue = (roundNo >= 1 And roundNo <= 4 And InStr(1, "," & allowed(roundNo) & ",", "," & clueId & ",", 1) > 0)
End Function

Function ClueText(clueId)
  Select Case clueId
    Case "r1_breaker": ClueText = "차단기는 내려가 있지만, 이것만으로 사고 원인을 단정할 수는 없다."
    Case "r1_water": ClueText = "바닥의 물은 폭풍우와 관계있어 보인다."
    Case "r1_toolbag": ClueText = "작업가방은 누군가 급히 놓은 듯 열려 있다."
    Case "r2_glove": ClueText = "장갑 한쪽에 찢어진 흔적이 남아 있다."
    Case "r2_schedule": ClueText = "일정표에는 마크가 예정에 없던 구역을 확인했다는 흔적이 있다."
    Case "r2_key": ClueText = "열쇠는 극장 일반 출입문보다 오래된 보관함에 어울려 보인다."
    Case "r3_spray": ClueText = "라벨이 없는 스프레이 병이 화장대 위에 놓여 있다."
    Case "r3_residue": ClueText = "화장대 표면에 물에 녹을 듯한 하얀 결정이 남아 있다."
    Case "r3_ticket": ClueText = "티켓 조각은 최근 공연의 것이 아니다."
    Case "r4_news": ClueText = "신문은 극장 금화 절도 사건을 다루고 있다."
    Case "r4_gold_list": ClueText = "장부에는 사라진 금화와 보관 위치가 표시되어 있다."
    Case "r4_connection": ClueText = "사진 속 두 사람은 마크와 그랜트로 보인다."
    Case Else: ClueText = ""
  End Select
End Function

Function IsSolved(victim, killer, place, method, motive, truth)
  Dim all : all = LCase(victim & " " & killer & " " & place & " " & method & " " & motive & " " & truth)
  IsSolved = (InStr(all,"마크")>0 And InStr(all,"그랜트")>0 And InStr(all,"배전실")>0 And InStr(all,"감전")>0 And (InStr(all,"금화")>0 Or InStr(all,"절도")>0))
End Function
%>
