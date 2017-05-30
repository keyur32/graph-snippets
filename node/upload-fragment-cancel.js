var http = require("https");

var options = {
  "method": "DELETE",
  "hostname": "tenant-my.sharepoint.com",
  "port": null,
  "path": "/alkjl1kjklna",
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
