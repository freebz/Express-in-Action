// 예제 3.5 아무 일도 하지 않는 빈 미들웨어

function myFuncMiddleware(request, response, next) {

  ...

  next();
}
