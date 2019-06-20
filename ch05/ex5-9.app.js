// 예제 5.9 express.static의 간단한 예제

var express = require("express");
var path = require("path");
var http = require("http");
var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Locks like you didn't find a static file.");
});

http.createServer(app).listen(3000);
