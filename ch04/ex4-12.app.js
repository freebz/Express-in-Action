// 예제 4.12 파일을 전송하는 간단한 앱

var express = require("express");
var path = require("path");

var app = express();
var filePath = path.join(__dirname, "celine.jpg");
app.use(function(req, res) {
  res.sendFile(filePath);
});

app.listen(3000, function() {
  console.log("App started on port 3000");
});
