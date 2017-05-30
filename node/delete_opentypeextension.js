var http = require("https");

var options = {
  "method": "DELETE",
  "hostname": "graph.microsoft.com",
  "port": null,
  "path": "/v1.0/me/messages(%27AAMkAGE1M2IyNGNmLTI5MTktNDUyZi1iOTVl===%27)/extensions(%27Com.Contoso.Referral%27)",
  "headers": {
    "content-type": "application/json"
  }
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

req.write("{ }");
req.end();
