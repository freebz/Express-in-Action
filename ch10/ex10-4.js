// 예제 10.4 쿼리가 배열이 아니라는 가정을 하지 말자

var arrayWrap = require("arraywrap");

// ...

app.get("/search", function(req, res) {
  var search = arrayWrap(req.query.q || "");
  var terms = search[0].split("+");
  // ... terms으로 수행하는 작업 ...
});
