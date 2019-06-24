// 예제 9.15 앱에서 올바른 User-Agent 문자열을 반환하는지 테스트하기 (test/txt.js)

// ...

it("returns your User Agent", function(done) {
  supertest(app)
    .get("/")
    .set("User-Agent", "my cool browser")
    .set("Accept", "text/plain")
    .expect(function(res) {
      if(res.text !== "my cool browser") {
	throw new Error("Response does not contain User Agent");
      }
    })
    .end(done);
});

// ...
