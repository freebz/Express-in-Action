// 예제 3.3 Express의 Hello, World

var express = require("express");
var http = require("http");

var app = express();

app.use(function(request, response) {
  console.log("In comes & request to: " + request.url);
  response.end("Hello, world!");
});

http.createServer(app).listen(3000);
