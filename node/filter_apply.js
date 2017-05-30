var http = require("https");

var options = {
  "method": "POST",
  "hostname": "graph.microsoft.com",
  "port": null,
  "path": "/v1.0/me/drive/items/%7Bid%7D/workbook/tables(%3Cid%7Cname%3E)/columns(%3Cid%7Cname%3E)/filter/apply",
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
