// 예제 5.12 충돌 없이 다중 디렉터리에서 정적 파일 제공하기

// ..

app.use("/public", express.static(publicPath));
app.use("/uploads", express.static(userUploadsPath));

// ...
