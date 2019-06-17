// 예제 1.1 Express의 "Hello World"

var express = require("express");

var app = express();

app.get("/", function(request, response) {
  response.send("Hello, world!");
});

app.listen(3000, function() {
  console.log("Express app started on port 3000.");
});
