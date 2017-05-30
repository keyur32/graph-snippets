HttpResponse<String> response = Unirest.delete("https://graph.microsoft.com/v1.0/me/drive/root/items/%7Bitem-id%7D/permissions/%7Bperm-id%7D")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
