// 예제 9.21 HTML 응답에 대한 테스트 (test/html.js)

// ...

it("returns an HTML response", function(done) {
  request
    .expect("Content-Type", /html/)
    .expect(200)
    .end(done);
});

// ...
