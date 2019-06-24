// 예제 9.22 HTML 응답 받기 (test/html.js)

// ...

it("returns your User Agent", function(done) {
  request
    .expect(function(res) {
      var htmlResponse = res.text;
      // ...
    })
    .end(done);
});

// ...
