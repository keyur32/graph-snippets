HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/groups/%7Bid%7D/threads/%7Bid%7D/posts/%7Bid%7D/forward")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
