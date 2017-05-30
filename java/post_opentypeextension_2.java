HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/me/messages(%27AAMkAGE1M2IyNGNmLTI5MTktNDUyZi1iOTVl===%27)/extensions")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
