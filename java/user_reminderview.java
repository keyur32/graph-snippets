HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/me/reminderView?endDateTime=endDateTime-value&startDateTime=startDateTime-value")
  .asString();
