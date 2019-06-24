// 예제 10.12 CSRF 에러 처리하기

// ...

app.use(function(err, req, res, next) {
  if (err.code !== "EBADCSRFTOKEN") {
    next(err);
    return;
  }
  res.status(403);
  res.send("CSRF error.");
});

// ...
