// 예제 10.3 쿼리가 존재하는지 가정하지 않도록 한다 (여전히 버그가 있다)

app.get("/search", function(req, res) {
  var search = req.query.q || "";
  var terms = search.split("+");
  // ... terms으로 수행하는 작업 ...
});
