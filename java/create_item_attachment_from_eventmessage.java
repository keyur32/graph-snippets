HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/me/events/%7Bid%7D/attachments")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
