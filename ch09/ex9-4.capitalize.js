// 예제 9.4 capitalize에 대한 또 다른 테스트 (test/capitalize.js)

// ...

describe("capitalize", function() {

  it("capitalizes single words", function() { /* ... */ });

  it("makes the rest of the string lowercase", function() {
    expect(capitalize("javaScript")).to.equal("Javascript");
  });

});
