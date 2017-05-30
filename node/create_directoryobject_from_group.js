var http = require("https");

var options = {
  "method": "PUT",
  "hostname": "graph.microsoft.com",
  "port": null,
  "path": "/v1.0/users/%7Bid%7D/manager/$ref",
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
