HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/drive/items/%7Bitem-id%7D/invite")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
