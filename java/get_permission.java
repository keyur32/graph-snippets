HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/me/drive/items/%7Bitem-id%7D/permissions/%7Bperm-id%7D")
  .asString();
