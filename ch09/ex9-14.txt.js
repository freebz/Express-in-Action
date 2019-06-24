// 예제 9.14 SuperTest를 사용한 응답 확인 (test/txt.js)

var supertest = require("supertest");

// ...

it("returns a plain text response", function(done) {
  supertest(app)
    .get("/")
    .get("User-Agent", "my cool browser")
    .set("Accept", "text/plain")
    .expect("Content-Type", /text\/plain/)
    .expect(200)
    .end(done);
});

// ...
