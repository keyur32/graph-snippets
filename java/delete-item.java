HttpResponse<String> response = Unirest.delete("https://graph.microsoft.com/v1.0/me/drive/items/%7Bitem-id%7D")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
