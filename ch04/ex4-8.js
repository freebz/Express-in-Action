// 예제 4.8 Morgan을 사용하는 app.js

var express = require("express");
var morgan = require("morgan");
// ...

var app = express();

app.use(morgan("short"));

// ...
