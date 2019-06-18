// 예제 2.7 Mustache 모듈 사용하기

var Mustache = require("mustache");
var result = Mustache.render("Hi, {{first}} {{last}}!", {
  first: "Nicolas",
  last: "Cage"
});
console.log(result);
