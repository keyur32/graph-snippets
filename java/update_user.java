HttpResponse<String> response = Unirest.patch("https://graph.microsoft.com/v1.0/me")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
