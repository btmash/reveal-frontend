casper.test.begin('BTMash site has 10 blog posts', 2, function suite(test) {
  var start, end;

  //we use casper events to calculate the time between a http request and its response
  casper.on('page.resource.requested', function(requestData, request) {
      //console.log("request url " + requestData.url);
      start = new Date().getTime();
  });

  casper.on('page.resource.received', function(response) {
      //console.log("response url " + response.url);
      end = new Date().getTime();
      casper.echo("Time between HTTP request and HTTP response : " + (end-start) + "ms","INFO");
  });

  casper.start("http://btmash.com", function() {
      test.assertTitle("BTMash | Blob of contradictions", "BTMash.com homepage title is the one expected");
  });

  casper.then(function() {
    test.assertEval(function() {
      return ((end - start) < 200);
    }, "Page load is less than 200 ms");
  });

  casper.run(function() {
    test.done();
  });
});
