// 예제 2.12 비동기 작업 다음에 console.log 추가하기

var fs = require("fs");

var options = { encoding: "utf-8" };
fs.readFile("myfile.txt", options, function(err, data) {
  // ...
});

console.log("Hello world!");
