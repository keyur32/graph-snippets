HttpResponse<String> response = Unirest.delete("https://tenant-my.sharepoint.com/alkjl1kjklna")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
