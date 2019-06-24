// 예제 9.3 capitalize에 대한 첫 번째 테스트 (test/capitalize.js)

var capitalize = require("../capitalize");

var chai = require("chai");
var expect = chai.expect;

describe("capitalize", function() {

  it("capitalizes single words", function() {
    expect(capitalize("express")).to.equal("Express");
    expect(capitalize("cats")).to.equal("Cats");
  });

});
