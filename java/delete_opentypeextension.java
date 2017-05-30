HttpResponse<String> response = Unirest.delete("https://graph.microsoft.com/v1.0/me/messages(%27AAMkAGE1M2IyNGNmLTI5MTktNDUyZi1iOTVl===%27)/extensions(%27Com.Contoso.Referral%27)")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
