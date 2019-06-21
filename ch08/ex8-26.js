// 예제 8.26 login 수행 (routes.js)

var passport = require("passport");

...

router.post("/login", passport.authenticate("login", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true
}));

...
