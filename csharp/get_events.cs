var client = new RestClient("https://graph.microsoft.com/v1.0/me/calendar/events");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
