// 예제 5.15 Express에서 HTTP와 HTTPS 사용하기

var express = require("express");
var http = require("http");
var https = require("https");

var fs = require("fs");

var app = express();

// ... define your app ...

var httpsOptions = {
  key: fs.readFileSync("path/to/private/key.pem"),
  cert: fs.readFileSync("path/to/certificate.pem")
};
http.createServer(app).listen(80);
https.createServer(httpsOptions, app).listen(443);
