// 예제 3.14 특정 IP를 블랙리스트로 관리하기

var express = require("express");
var app = express();

var EVIL_IP = "123.45.67.89";

app.use(function(request, response, next) {
  if (request.ip === EVIL_IP) {
    response.status(401).send("Not allowed!");
  } else {
    next();
  }
});

// ... 앱의 나머지 코드 ...
