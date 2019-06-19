// 예제 3.11 경로에서 데이터 가져오기

app.get("/hello/:who", function(request, response) {
  response.end("Hello, " + request.params.who + ".");
  // 재미있는 사실: 이 코드는 일부 보안 문제가 있다!
});
