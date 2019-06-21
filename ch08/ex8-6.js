// 예제 8.6 사용자의 비밀번호 검사하기 (models/user.js)

...

userSchema.methods.checkPassword = function(guess, done) {
  bcrypt.compare(guess, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};
