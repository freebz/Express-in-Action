// 예제 5.2 가장 단순한 매개변수

app.get("/users/:userid", function(req, res) {
  var userId = parseInt(req.params.userid, 10);
  // ...
});
