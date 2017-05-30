HttpResponse<String> response = Unirest.put("https://graph.microsoft.com/v1.0/me/photo/$value")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
