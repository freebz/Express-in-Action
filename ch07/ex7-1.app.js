// 예제 7.1 간단한 뷰 렌더링 예제

var express = require("express");
var path = require("path");

var app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.get("/", function(req, res) {
  res.render("index"); });

app.listen(3000);
