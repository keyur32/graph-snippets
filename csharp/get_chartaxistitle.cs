var client = new RestClient("https://graph.microsoft.com/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets(%3Cid%7Cname%3E)/charts(%3Cname%3E)/axes/valueaxis/title");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
