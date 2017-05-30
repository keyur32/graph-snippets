HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/users")
  .asString();
