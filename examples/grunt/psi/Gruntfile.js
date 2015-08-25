// The settings var includes your PageSpeed API Key. To use yours, first go to
// the following URL and generate/lookup your Google PageSpeed API key:
//
// @see https://code.google.com/apis/console/
//
// Now make a file called settings.json in the same dir as this Gruntfile and
// include an object like this:
//
// {
//    "key": "your-google-pagespeed-api-key"
// }
// var settings = require('./settings.json');

// This is the normal Gruntfile
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
// This one passes
    pagespeed: {
      desktop: {
        url: "http://btmash.com",
        locale: "en_US",
        strategy: "desktop",
        threshold: 80
      },
// This one fails
      mobile: {
        url: "http://btmash.com",
        locale: "en_US",
        strategy: "mobile",
        threshold: 70
      },
      options: {
          nokey: true
//        key: settings.key
      }
    }
  });

  grunt.loadNpmTasks('grunt-pagespeed');

  grunt.registerTask('default', ['pagespeed:desktop']);
};
