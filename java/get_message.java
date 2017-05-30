HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/me/messages/%7Bid%7D")
  .asString();
