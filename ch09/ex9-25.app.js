// 예제 9.25 HTML 응답을 지원하는 app.js 채우기

var express = require("express");
var path = require("path");

var app = express();

app.set("port", process.env.PORT || 3000);

var viewsPath = path.join(__dirname, "views");
app.set("view engine", "ejs");
app.set("views", viewsPath);

app.get("/", function(req, res) {
  var userAgent = req.headers["user-agent"] || "none";
  if (req.accepts("html")) {
    res.render("index", { userAgent: userAgent });
  } else {
    res.type("text");
    res.send(userAgent);
  }
});

// ...
