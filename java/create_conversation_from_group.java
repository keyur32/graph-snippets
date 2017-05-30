HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/groups/%7Bid%7D/conversations")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
