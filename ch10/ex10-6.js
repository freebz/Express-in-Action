// 예제 10.6 Helmet의 HSTS 미들웨어 사용하기

var helmet = require("helmet");
var ms = require("ms");
// ...
app.use(helmet.hsts({
  maxAge: ms("1 year"),
  includeSubdomains: true
}));
