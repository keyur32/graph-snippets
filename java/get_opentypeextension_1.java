HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/me/messages(%27AAMkAGE1M2IyNGNmLTI5MTktNDUyZi1iOTVl===%27)/extensions(%27Com.Contoso.Referral%27)")
  .asString();
