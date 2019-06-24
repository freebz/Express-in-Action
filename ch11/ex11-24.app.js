// 예제 11.24 connect-assets 미들웨어 설정하기

var express = require("express");
var assets = require("connect-assets");

var app = express();
app.use(assets({
  helperContext: app.locals,
  paths: ["assets/css", "assets/js"]
}));

// ...
