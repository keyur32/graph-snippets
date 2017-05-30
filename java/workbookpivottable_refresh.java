HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/%7Bver%7D/drive/root/workbook/worksheets/%7Bid%7D/pivotTables/%7Bid%7D/refresh")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
