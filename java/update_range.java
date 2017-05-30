HttpResponse<String> response = Unirest.patch("https://graph.microsoft.com/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets(%27sheet1%27)/range(address=%27A1:B2%27)")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
