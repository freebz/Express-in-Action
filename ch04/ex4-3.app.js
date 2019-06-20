// 예제 4.3 정적 파일 서버용 app.js 시작

var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();

app.use(function(req, res, next) {
  console.log("Request IP: " + req.url);
  console.log("Request date: " + new Date());
});

app.listen(3000, function() {
  console.log("App started on port 3000");
});
