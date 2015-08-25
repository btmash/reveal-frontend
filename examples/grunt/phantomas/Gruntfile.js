module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    phantomas: {
      default: {
        options: {
          indexPath: './reports/',
          options: {},
          url: 'http://btmash.com/'
        }
      },
      screenshot: {
        options: {
          indexPath: './reports/',
          options: {
            'screenshot': 'screenshots/sample-' + Date.now() + '.png'
          },
          url: 'http://btmash.com/'
        }
      },
      requests: {
        options: {
          indexPath: './reports/',
          options: {
            'assert-requests': 20
          },
          url: 'http://btmash.com/'
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-phantomas');

  grunt.registerTask('default', ['phantomas:default']);
};
