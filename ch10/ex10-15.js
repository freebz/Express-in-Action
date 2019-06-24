// 예제 10.15 프레임 밖에서 앱 유지하기

app.use(helmet.frameguard("sameorigin"));
// or ...
app.use(helmet.frameguard("deny"));
