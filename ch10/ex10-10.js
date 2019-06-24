// 예제 10.10 CSRF 토큰 얻기

var csrf = require("csurf");

// ...

app.use(csrf());

app.get("/", function(req, res) {
  res.render("myview", {
    csrfToken: req.csrfToken()
  });
});
