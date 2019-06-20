// 예제 5.5 regexp를 사용한 UUID 매칭 라우트

var horribleRegexp = /^([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/i;

app.get(horribleRegexp, function(req, res) {
  var uuid = req.params[0];
  // ...
});
