HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/me/contactFolders/%7Bid%7D/childFolders")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
