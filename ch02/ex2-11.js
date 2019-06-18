// 예제 2.11 디스크에서 파일 읽기

var fs = require("fs");

var options = { encoding: "utf-8" };
fs.readFile("myfile.txt", options, function(err, data) {
  if (err) {
    console.log("Error reading file!");
    return;
  }
  console.log(data.match(/x/gi).length + " letter X's");
});
