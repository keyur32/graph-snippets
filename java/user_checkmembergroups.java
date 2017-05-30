HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/me/checkMemberGroups")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
