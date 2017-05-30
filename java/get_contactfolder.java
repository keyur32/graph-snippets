HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/me/contactFolders/%7Bid%7D")
  .asString();
