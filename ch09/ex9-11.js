// 예제 9.11 부정 테스트

// ...

it("changes the value", function() {
  expect(capitalize("foo")).not.to.equal("foo");
});

// ...
