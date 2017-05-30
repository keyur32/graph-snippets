HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/me/messages/%7Bid%7D/forward")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
