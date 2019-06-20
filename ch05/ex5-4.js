// 예제 5.4 복잡한 라우트에 대한 정규식 사용하기

app.get(/^\/users\/(\d+)-(\d+)$/, function(req, res) {
  var startId = parseInt(req.params[0], 10);
  var endId = parseInt(req.params[1], 10);
  // ...
});
