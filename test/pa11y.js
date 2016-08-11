'use strict';

const glob = require('glob'),
  path = require('path'),
  express = require('express'),
  chalk = require('chalk'),
  pa11y = require('pa11y'),
  assert = require('assert');

const paths = {
  output: './build/',
  pa11yConfig: path.join(process.cwd(), 'pa11y.js')
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
        pagesCount = pages.length,
        options = require(paths.pa11yConfig),
        test = pa11y(options),
        runTest = function() {
          let url = 'http://localhost:3000/' + pages.shift();
          console.log(msg.info('Testing page', pagesCount - pages.length, 'of', pagesCount, url, '...'));

          test.run(url, function(error, results) {
            if (error) {
              console.log(msg.error(error));
            } else {
              displayResults(results);
            }

            if (pages.length) {
              runTest();
            } else {
              server.close();
              done();
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
