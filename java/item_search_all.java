HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/me/drive/search(q=%27%7Bsearch-query%7D%27)")
  .asString();
