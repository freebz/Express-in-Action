// 예제 8.14 body-parser 미들웨어 추가하기 (app.js)

var bodyParser = require("body-parser");

...

app.use(bodyParser.urlencoded({ extended: false }));

...
