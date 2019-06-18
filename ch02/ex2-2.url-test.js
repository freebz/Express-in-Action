// 예제 2.2 Node의 url 모듈 요청하기

var url = require("url");
var parsedURL = url.parse("http://www.example.com/profile?name=barry");

console.log(parsedURL.protocol);    // "http:"
console.log(parsedURL.host);	    // "www.example.com"
console.log(parsedURL.query);	    // "name=barry"
