// 예제 9.10 Chai를 사용한 에러에 대한 테스트

// ...

it("throws an error if passed a number", function() {
  expect(function() { capitalize(123); }).to.throw(Error);
});

// ...
