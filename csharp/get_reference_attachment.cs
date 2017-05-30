var client = new RestClient("https://graph.microsoft.com/v1.0/me/events/%7Bid%7D/attachments/%7Bid%7D");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
