// 예제 10.5 Express에서 HTTPS 적용하기

var enforceSSL = require("express-enforces-ssl");
// ...
app.enable("trust proxy");
app.use(enforceSSL());
