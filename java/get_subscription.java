HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/subscriptions/%7BsubscriptionId%7D")
  .asString();
