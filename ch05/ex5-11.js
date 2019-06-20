// 예제 5.11 다중 디렉터리에서 정적 파일 제공하기

// ...

var publicPath = path.resolve(__dirname, "public");
var userUploadsPath = path.resolve(__dirname, "user_uploads");

app.use(express.static(publicPath));
app.use(express.static(userUploadsPath));

// ...
