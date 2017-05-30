HttpResponse<String> response = Unirest.delete("https://graph.microsoft.com/v1.0/users/mba9a3254-9f18-4209-aeb3-9e42a35b5be4")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
