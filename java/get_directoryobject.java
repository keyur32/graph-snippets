HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/directoryObject/%7Bid%7D")
  .asString();
