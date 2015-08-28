casper.test.begin('BTMash site has 10 blog posts', 2, function suite(test) {
    casper.start("http://btmash.com", function() {
        test.assertTitle("BTMash | Blob of contradictions", "BTMash.com homepage title is the one expected");
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
    casper.start("http://btmash.com", function() {
        test.assertExists('form[action="/"]', "main form is found");
        test.assertVisible('form[action="/"]', "main form is visible");
        this.fill('form[action="/"]', {
            search_block_form: "drupal"
        }, true);
    });

    casper.then(function() {
        test.assertTitle("Search | BTMash");
        test.assertUrlMatch('/search/node/drupal', "Search term successfully submitted");
        test.assertEval(function() {
            return __utils__.findAll("h3.title").length >= 10;
        }, "google search for \"drupal\" retrieves 10 or more results");
    });

    casper.run(function() {
        test.done();
    });
});
