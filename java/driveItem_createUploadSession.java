HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/me/drive/root:/%7Bitem-path%7D:/createUploadSession")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
