// 예제 8.21 사용자 직렬화와 역직렬화 (setuppassport.js)

var passport = require("passport");

var User = require("./models/user");

module.exports = function() {

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
