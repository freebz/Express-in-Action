// 예제 9.16 beforeEach로 코드의 반복 줄이기 (test/txt.js)

/// ...

describe("plain text response", function() {
  var request;
  beforeEach(function() {
    request = supertest(app)
      .get("/")
      .set("User-Agent", "my cool browser")
      .set("Accept", "text/plain");
  });

  it("returns a plain text response", function(done) {
    request
      .expect("Content-Type", /text\/plain/)
      .expect(200)
      .end(done);
  });

  it("returns your User Agent", function(done) {
    request
      .expect(function(res) {
	if (res.text !== "my cool browser") {
	  throw new Error("Response does not contain User Agent");
	}
      })
      .end(done);
  });
});
