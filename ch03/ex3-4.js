// 예제 3.4 Node 요청 핸들러 함수

function requestHandler(request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello, world!");
}
