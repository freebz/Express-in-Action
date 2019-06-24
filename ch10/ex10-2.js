// 예제 10.2 req.query 가져오기 (버그를 포함하고 있다)

app.get("/search", function(req, res) {
  var search = req.query.q.replace(/\+/g, " ");
  // ... 검색 관련 작업 수행 ...
});
