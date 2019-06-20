// 예제 4.15 모든 에러를 로깅하는 미들웨어

// ...

app.use(function(err, req, res, next) {
  console.error(err);
  next(err);
});

// ...
