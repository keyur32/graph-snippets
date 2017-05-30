var http = require("https");

var options = {
  "method": "GET",
  "hostname": "graph.microsoft.com",
  "port": null,
  "path": "/%7Bver%7D/drive/root/workbook/worksheets/%7Bid%7D/pivotTables",
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
