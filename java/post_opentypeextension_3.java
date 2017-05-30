HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/groups(%27f5480dfd-7d77-4d0b-ba2e-3391953cc74a%27)/events(%27AAMkADVl17IsAAA=%27)/extensions")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
