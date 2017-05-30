HttpResponse<String> response = Unirest.delete("https://graph.microsoft.com/v1.0/me/mailFolders/%7Bid%7D")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
