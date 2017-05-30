HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/devices/%7Bid%7D/registeredOwners")
  .asString();
