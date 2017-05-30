HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/me/messages(%27AAMkAGE1M2IyNGNmLTI5MTktNDUyZi1iOTVl===%27)?%24expand=extensions(%24filter%3Did%20eq%20'Microsoft.OutlookServices.OpenTypeExtension.Com.Contoso.Referral')")
  .asString();
