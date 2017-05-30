HttpResponse<String> response = Unirest.patch("https://graph.microsoft.com/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets(%3Cid%7Cname%3E)/charts(%3Cname%3E)/axes/valueaxis")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
