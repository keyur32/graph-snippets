HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/me/drive/special/%7Bname%7D")
  .asString();
