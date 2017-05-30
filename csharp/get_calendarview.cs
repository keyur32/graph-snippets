var client = new RestClient("https://graph.microsoft.com/v1.0/me/calendar/calendarView?endDateTime=2017-01-07T19%3A00%3A00.0000000&startDateTime=2017-01-01T19%3A00%3A00.0000000");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
