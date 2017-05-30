var client = new RestClient("https://b0mpua-by3301.files.1drv.com/y23vmag");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
