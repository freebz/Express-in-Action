// 예제 8.3 사용자가 모델에 간단한 메서드 추가하기 (models/user.js)

...

userSchema.methods.name = function() {
  return this.displayName || this.username;
};
