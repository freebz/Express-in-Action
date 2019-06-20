// 예제 4.5 미들웨어 스택에 정적 파일 미들웨어 추가하기

//...
app.use(function(req, res, next) {
  // ...
});

app.use(function(req, res, next) {
  var filePath = path.join(__dirname, "static", req.url);
  fs.stat(filePath, function(err, fileInfo) {
    if (err) {
      next();
      return;
    }

    if (fileInfo.isFile()) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });
});

app.listen(3000, function() {
//...
