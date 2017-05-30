var client = new RestClient("https://graph.microsoft.com/v1.0/me/contactFolders/%7Bid%7D/contacts");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
