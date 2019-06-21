// 예제 8.29 인증된 사용자인지 여부를 결정하는 미들웨어 (routes.js)

...

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.flash("info", "먼저 로그인해야 이 페이지를 볼 수 있습니다.");
    res.redirect("/login");
  }
}

...
