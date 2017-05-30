HttpResponse<String> response = Unirest.patch("https://graph.microsoft.com/v1.0/users/%7Bid%7CuserPrincipalName%7D/photo")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
