// 예제 5.1 올리비아의 홈페이지를 보여주는 간단한 Express 앱

var express = require("express");
var app = express();

app.get("/olivia", function(request, response) {
  response.send("Welcome to Olivia's homepage!");
});

app.use(function(request, response) {
  response.status(404).send("Page not found!");
});

app.listen(3000);
