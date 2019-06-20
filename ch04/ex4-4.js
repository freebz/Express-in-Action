// 예제 4.4 로깅 미들웨어 고치기

// ...

app.use(function(req, res, next) {
  console.log("Request IP: " + req.url);
  console.log("Request date: " + new Date());
  next();
});

// ...
