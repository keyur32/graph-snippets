HttpResponse<String> response = Unirest.patch("https://graph.microsoft.com/v1.0/organization")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
