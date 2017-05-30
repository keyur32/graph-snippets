var client = new RestClient("https://graph.microsoft.com/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets(%3Cid%7Cname%3E)/charts/ItemAt");
var request = new RestRequest(Method.POST);
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{ }", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
