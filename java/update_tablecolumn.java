HttpResponse<String> response = Unirest.patch("https://graph.microsoft.com/v1.0/me/drive/items/%7Bid%7D/workbook/tables(%3Cid%7Cname%3E)/columns(%3Cid%7Cname%3E)")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
