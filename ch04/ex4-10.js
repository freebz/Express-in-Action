// 예제 4.10 정적 파일 미들웨어를 Express의 것으로 바꾸기

// ...

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

// ...
