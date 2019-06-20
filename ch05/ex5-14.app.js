// 예제 5.14 Express 앱으로 HTTPS 사용하기

var express = require("express");
var https = require("https");
var fs = require("fs");

var app = express();
// ... define your app ...

var httpsOptions = {
  key: fs.readFileSync("path/to/private/key.pem"),
  cert: fs.readFileSync("path/to/certificate.pem")
};
https.createServer(httpsOptions, app).listen(3000);
