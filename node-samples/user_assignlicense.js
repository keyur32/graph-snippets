var http = require("https");

var options = {
  "method": "POST",
  "hostname": "graph.microsoft.com",
  "port": null,
  "path": "/v1.0/me/assignLicense",
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

req.write("\r\n{\r\n  \"addLicenses\": [\r\n    {\r\n      \"disabledPlans\": [ \"11b0131d-43c8-4bbb-b2c8-e80f9a50834a\" ],\r\n      \"skuId\": \"skuId-value\"\r\n    }\r\n  ],\r\n  \"removeLicenses\": [ \"bea13e0c-3828-4daa-a392-28af7ff61a0f\" ]\r\n}\n");
req.end();
