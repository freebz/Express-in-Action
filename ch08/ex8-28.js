// 예제 8.28 뷰에 데이터 전달하기 (routes.js)

...

router.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});

...
