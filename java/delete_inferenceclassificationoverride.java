HttpResponse<String> response = Unirest.delete("https://graph.microsoft.com/v1.0/me/inferenceClassification/overrides/98f5bdef-576a-404d-a2ea-07a3cf34af4r")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
