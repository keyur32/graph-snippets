var http = require("https");

var options = {
  "method": "GET",
  "hostname": "graph.microsoft.com",
  "port": null,
  "path": "/v1.0/me/messages(%27AAMkAGE1M2IyNGNmLTI5MTktNDUyZi1iOTVl===%27)?%24expand=extensions(%24filter%3Did%20eq%20'Microsoft.OutlookServices.OpenTypeExtension.Com.Contoso.Referral')",
  "headers": {}
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
