// 예제 6.6 app.js의 메인 앱 코드

var express = require("express");

var apiVersion1 = require("./api1.js");

var app = express();

app.use("/v1", apiVersion1);

app.listen(3000, function() {
  console.log("App started on port 3000");
});
