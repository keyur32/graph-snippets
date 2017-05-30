var client = new RestClient("https://graph.microsoft.com/v1.0/me/calendarGroups/%7Bid%7D/calendars");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
