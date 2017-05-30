HttpResponse<String> response = Unirest.put("https://graph.microsoft.com/v1.0/users/%7Bid%7D/manager/$ref")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
