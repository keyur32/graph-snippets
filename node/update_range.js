var http = require("https");

var options = {
  "method": "PATCH",
  "hostname": "graph.microsoft.com",
  "port": null,
  "path": "/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets(%27sheet1%27)/range(address=%27A1:B2%27)",
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
