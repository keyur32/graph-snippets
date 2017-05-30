HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/me/mailFolders")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
