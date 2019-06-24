// 예제 9.24 Cheerio로 HTML 분석하기 (test/html.js)

// ...

var cheerio = require("cheerio");

// ...

it("returns your User Agent", function(done) {
  request
    .expect(function(res) {
      var htmlResponse = res.text;
      var $ = cheerio.load(htmlResponse);
      var userAgent = $(".user-agent").html().trim();
      if (userAgent !== "a cool browser") {
	throw new Error("User Agent not found");
      }
    })
    .end(done);
});

// ...
