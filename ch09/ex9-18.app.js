// 예제 9.18 app.js의 초안

var express = require("express");

var app = express();

app.set("post", process.env.PORT || 3000);

app.get("/", function(req, res) {
  res.send(req.headers["user-agent"]);
});

app.listen(app.get("port"), function() {
  console.log("App started on port " + app.get("port"));
});

module.exports = app;
