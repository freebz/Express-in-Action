// 예제 8.7 사용자 모델을 만들고 내보내기 (models/user.js)

...

var User = mongoose.model("User", userSchema);
module.exports = User;
