HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/devices")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
