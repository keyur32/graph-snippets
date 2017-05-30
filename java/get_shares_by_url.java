HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/shares/%7BshareIdOrUrl%7D")
  .asString();
