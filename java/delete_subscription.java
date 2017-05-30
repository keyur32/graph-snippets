HttpResponse<String> response = Unirest.delete("https://graph.microsoft.com/v1.0/subscriptions/%7BsubscriptionId%7D")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
