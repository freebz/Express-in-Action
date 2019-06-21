// 예제 8.30 GET /edit (router.js)

...

router.get("/edit", ensureAuthenticated, function(req, res) {
  res.render("edit");
});

...
