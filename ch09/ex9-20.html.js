// 예제 9.20 HTML 응답 테스트 (test/html.js)

var app = require("../app");

var supertest = require("supertest");

describe("html response", function() {

  var request;
  beforeEach(function() {
    request = supertest(app)
      .get("/")
      .set("User-Agent", "a cool browser")
      .set("Accept", "text/html");
  });

  it("returns an HTML response", function(done) {
    // ...
  });

  it("returns your User Agent", function(done) {
    // ...
  });

});
