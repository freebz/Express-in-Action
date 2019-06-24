// 예제 9.7 대문자 처리에 대한 새로운 테스트 (test/capitalize.js)

// ...

it("leaves strings with no words alone", function() {
  expect(capitalize(" ")).to.equal(" ");
  expect(capitalize("123")).to.equal("123");
});

it("capitalizes multiple-word strings", function() {
  expect(capitalize("what is Express?")).to.equal("What is express?");
  expect(capitalize("i love lamp")).to.equal("I love lamp");
});

it("leaves already-capitalized words alone", function() {
  expect(capitalize("Express")).to.equal("Express");
  expect(capitalize("Evan")).to.equal("Evan");
  expect(capitalize("Catman")).to.equal("Catman");
});

// ...
