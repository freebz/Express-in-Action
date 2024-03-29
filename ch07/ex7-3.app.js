// 예제 7.3 Walrus를 사용한 렌더링

var express = require("express");
var engines = require("consolidate");
var path = require("path");
var app = express();

app.set("view engine", "wal");
app.engine("wal", engines.walrus);
app.set("views", path.resolve(__dirname, "views"));

app.get("/", function(req, res) {
  res.render("index"); });

app.listen(3000);
