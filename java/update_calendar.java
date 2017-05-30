HttpResponse<String> response = Unirest.patch("https://graph.microsoft.com/v1.0/me/calendar")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
