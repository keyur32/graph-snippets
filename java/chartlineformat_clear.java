HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets(%3Cid%7Cname%3E)/charts(%3Cname%3E)/axes/seriesaxis/format/line/clear")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
