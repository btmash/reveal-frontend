casper.test.begin('BTMash site has 10 blog posts', 2, function suite(test) {
  casper.start("http://dev.btmash.com", function() {
    test.assertTitle("(D) BTMash | Blob of contradictions", "dev.btmash.com homepage title is the one expected");
  });

  casper.then(function() {
    test.assertEval(function() {
      return __utils__.findAll("article.node-article").length >= 10;
    }, "BTM blog has 10 or more blog posts on home page");
  });

  casper.run(function() {
    test.done();
  });
});

casper.test.begin('BTMash site has working search', 5, function suite(test) {
  casper.start("http://dev.btmash.com", function() {
    this.waitForSelector("#search-block-form",
      function pass () {
        test.pass("Found search form");
      },
      function fail () {
        test.fail("Did not load search form");
      }
    );
    test.assertExists('#search-block-form', "main form is found");
    this.fill('#search-block-form', {
      'search_block_form': "drupal"
    }, true);
  });

  casper.then(function() {
    test.assertUrlMatch('/search/node/drupal', "Search term successfully submitted");
    test.assertTitle("(D) Search | BTMash");
    test.assertEval(function() {
      return __utils__.findAll("h3.title").length >= 10;
    }, "Site search for \"drupal\" retrieves 10 or more results");
  });

  casper.run(function() {
    test.done();
  });
});
