// 예제 6.4 다른 HTTP 메서드 처리하기

var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("you just sent a GET request, friend");
});

app.post("/", function(req, res) {
  res.send("a POST request? nice");
});

app.put("/", function(req, res) {
  res.send("i don't see a lot of PUT requests anymore");
});

app.delete("/", function(req, res) {
  res.send("oh my, a DELETE??");
});

app.listen(3000, function() {
  console.log("App is listening on port 3000");
});
