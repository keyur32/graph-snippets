HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/me/getMemberObjects")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
