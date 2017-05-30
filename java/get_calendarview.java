HttpResponse<String> response = Unirest.get("https://graph.microsoft.com/v1.0/me/calendarView?endDateTime=2016-10-01T19%3A00%3A00.0000000&startDateTime=2016-01-01T19%3A00%3A00.0000000")
  .asString();
