HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/me/drive/items/%7Bitem-id%7D/thumbnails/%7Bthumb-id%7D/%7Bsize%7D/content")
  .asString();
