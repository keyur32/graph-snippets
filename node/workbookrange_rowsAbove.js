var http = require("https");

var options = {
  "method": "POST",
  "hostname": "graph.microsoft.com",
  "port": null,
  "path": "/%7Bver%7D/drive/root/workbook/worksheets/%7Bid%7D/range/rowsAbove(count=2)",
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
