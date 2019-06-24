// 예제 9.8 String 개체 테스트

// ...

it("capitalizes String objects without changing their values", function() {
  var str = new String("who is JavaScript?");
  expect(capitalize(str)).to.equal("Who is javascript?");  
  expect(str.valueOf()).to.equal("who is JavaScript?");
});

// ...
