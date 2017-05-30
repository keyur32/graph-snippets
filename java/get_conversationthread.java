HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/groups/%7Bid%7D/threads/%7Bid%7D")
  .asString();
