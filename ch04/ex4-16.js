// 예제 4.16 에러에 응답하기

// ...

app.use(function(err, req, res, next) {
  res.status(500);
  res.send("Internal server error.");
});

// ...
