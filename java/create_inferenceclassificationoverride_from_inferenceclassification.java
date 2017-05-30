HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/me/inferenceClassification/overrides")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
