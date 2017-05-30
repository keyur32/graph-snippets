HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/me/calendarGroups/%7Bid%7D/calendars")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
