// 예제 5.13 프로필 그림 전송하기

app.get("/users/:userid/profile_photo", function(req, res) {
  res.sendFile(getProfilePhotoPath(req.params.userid));
});
