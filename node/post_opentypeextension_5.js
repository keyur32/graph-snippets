var http = require("https");

var options = {
  "method": "POST",
  "hostname": "graph.microsoft.com",
  "port": null,
  "path": "/v1.0/groups(%2737df2ff0-0de0-4c33-8aee-75289364aef6%27)/conversations",
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
