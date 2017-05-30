var http = require("https");

var options = {
  "method": "GET",
  "hostname": "tenant-my.sharepoint.com",
  "port": null,
  "path": "/alkjl1kjklna",
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
