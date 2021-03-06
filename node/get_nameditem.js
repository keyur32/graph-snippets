var http = require("https");

var options = {
  "method": "GET",
  "hostname": "graph.microsoft.com",
  "port": null,
  "path": "/v1.0/me/drive/items/%7Bid%7D/workbook/names(%3Cname%3E)",
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
