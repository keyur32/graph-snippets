HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/drives/%7Bdrive-id%7D")
  .asString();
