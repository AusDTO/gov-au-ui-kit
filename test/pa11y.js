'use strict';

const glob = require('glob'),
  path = require('path'),
  express = require('express'),
  chalk = require('chalk'),
  pa11y = require('pa11y'),
  assert = require('assert');

const paths = {
  output: './build/'
};

const msg = {
  info: chalk.blue,
  error: chalk.red,
  success: chalk.green
};

describe('Accessibility tests', function() {
  it('Should pass with no errors', function(done) {

    function runTests() {
      let pages = htmlFiles(),
        totalPages = pages.length,
        runTest = function() {
          let url = 'http://localhost:3000/' + pages.shift();
          console.log(msg.info('Testing page', totalPages - pages.length, 'of', totalPages, url, '...'));
          pa11y().run(url, function(error, results) {
            if (error) {
              console.log(msg.error(error));
            } else {
              displayResults(results);
            }

            if (pages.length) {
              runTest();
            } else {
              server.close();
            }
          });
        };
      runTest();
    }

    function displayResults(results) {
      let errors = results.filter(result => result.type === 'error'),
        errorCount = errors.length;
      while (errors.length) {
        let error = errors.shift();
        console.log('\n' + msg.error('Error found at ' + error.selector), '\n' + error.context + '\n' + error.message);
      }
      assert.equal(errorCount, 0);
      done();
    }

    function htmlFiles() {
      let pattern = path.join(paths.output, '**/*.html');
      return glob.sync(pattern);
    };

    var app = express();
    app.use('/build', express.static('build'));
    var server = app.listen(3000, runTests);

  });
});
