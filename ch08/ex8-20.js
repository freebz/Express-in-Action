// 예제 8.20 Passport 설정 요청과 사용 (app.js)

...

var setUpPassport = require("./setuppassport");

...

var app = express();
mongoose.connect("mongodb://localhost:27017/test");
setUpPassport();

...
