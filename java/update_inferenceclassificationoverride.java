HttpResponse<String> response = Unirest.patch("https://graph.microsoft.com/v1.0/me/inferenceClassification/overrides/%7Bid%7D")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
