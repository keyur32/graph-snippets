HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/directoryRoleTemplates/%7Bid%7D")
  .asString();
