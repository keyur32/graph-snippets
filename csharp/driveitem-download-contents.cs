var client = new RestClient("https://graph.microsoft.com/v1.0/me/drive/items/%7Bitem-id%7D/content");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
