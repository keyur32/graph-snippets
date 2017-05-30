HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/users/%7Bid%7CuserPrincipalName%7D/manager")
  .asString();
