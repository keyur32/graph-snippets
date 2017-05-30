HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/devices/%7Bid%7D/registeredUsers")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
