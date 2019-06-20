// 예제 4.14 파일 전송이 실패하는 경우 에러 모드 진입하기

// ...

app.use(function(req, res, next) {
  res.sendFile(filePath, function(err) {
    if (err) {
      next(new Error("Error sending file!"));
    }
  });
});

// ...
