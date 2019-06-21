// 예제 8.27 로그아웃 (routes.js)

...

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

...
