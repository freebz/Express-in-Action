// 예제 9.5 빈 문자열의 대문자 처리 테스트 (test/capitalize.js)

// ...

describe("capitalize", function() {

  // ...

  it("leaves empty strings alone", function() {
    expect(capitalize("")).to.equal("");
  });

});
