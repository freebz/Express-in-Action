// 예제 3.17 Express에서 뷰 렌더링하기

app.get("/", function(request, response) {
  response.render("index", {
    message: "Hey everyone! This is my webpage."
  });
});
