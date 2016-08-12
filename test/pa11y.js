'use strict';

const glob = require('glob'),
  path = require('path'),
  express = require('express'),
  chalk = require('chalk'),
  async = require('async'),
  pa11y = require('pa11y');

const options = {
  outputHTML: './build/**/*.html',
  pa11y: path.join(process.cwd(), 'pa11y.js'),
  host: 'localhost',
  port: 3000,
  concurrency: 2
};

const msg = {
  info: chalk.blue,
  error: chalk.red,
  success: chalk.green
};

function buildUrls(files) {
  return files.map(function(file) {
    return path.join(options.host + ':' + options.port, file);
  });
}

function htmlFiles() {
  let pattern = path.join(options.outputHTML);
  return glob.sync(pattern);
}

function errorsFromResults(results) {
  return results.filter(result => result.type === 'error');
}

function displayResults(results) {
  let errors = errorsFromResults(results);
  if (errors.length) {
    while (errors.length) {
      testErrors++;
      let error = errors.shift();
      console.log('\n' + msg.error('✘', 'Error found at ' + error.selector), '\n' + error.context + '\n' + error.message);
    }
  } else {
    console.log(msg.success('✔', 'No errors'));
  }
}

function runTest(url, done) {
  test.run(url, function(error, results) {
    console.log(msg.info('Testing page:', url));
    if (error) {
      console.log(msg.error(error));
    } else {
      displayResults(results);
      done();
    }
  });
}

function runTests() {
  let urls = buildUrls(htmlFiles());
  console.log(msg.info('Starting tests for', urls.length, 'pages', '\n'));
  queue.push(urls);
}

var test = pa11y(require(options.pa11y));

var testErrors = 0;

var queue = async.queue(runTest, options.concurrency);
queue.drain = function() {
  console.log(msg.info('All done! Total errors:', testErrors));
  server.close();
};

var app = express();
app.use('/build', express.static('build'));

var server = app.listen(options.port, runTests);
