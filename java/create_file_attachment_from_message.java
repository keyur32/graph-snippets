HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/me/messages/AAMkpsDRVK/attachments")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
