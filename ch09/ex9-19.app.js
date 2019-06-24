// 예제 9.19 평문을 반환하는 app.js 만들기

// ...

app.get("/", function(req, res) {
  res.type("text");
  res.send(req.headers["user-agent"]);
});

// ...
