// 예제 5.3 숫자 라우트용 정규식 사용하기

app.get(/^\/users\/(\d+)$/, function(req, res) {
  var userId = parseInt(req.params[0], 10);
  // ...
});
