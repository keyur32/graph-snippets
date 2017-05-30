var client = new RestClient("https://graph.microsoft.com/v1.0/me/calendarGroups/%7Bid%7D/calendars");
var request = new RestRequest(Method.POST);
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{ }", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
