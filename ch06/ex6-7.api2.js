// 예제 6.7 API 버전 2, api2.js

var express = require("express");

var api = express.Router();

api.get("/timezone", function(req, res) {
  res.send("API 2: super cool new response for /timezone");
});

module.exports = api;
