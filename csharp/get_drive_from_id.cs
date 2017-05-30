var client = new RestClient("https://graph.microsoft.com/v1.0/drives/%7Bdrive-id%7D");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
