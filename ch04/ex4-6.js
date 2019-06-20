// 예제 4.6 마지막 미들웨어: 404 핸들러

// ...

app.use(function(req, res) {
  res.status(404);
  res.send("File not found!");
});

// ...
