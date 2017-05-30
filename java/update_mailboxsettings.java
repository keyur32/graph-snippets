HttpResponse<String> response = Unirest.patch("https://graph.microsoft.com/api/v1.0/me/mailboxSettings")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
