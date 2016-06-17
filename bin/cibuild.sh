#!/usr/bin/env bash

# Fail fast and be aware of exit codes
set -eo pipefail

gem install scss_lint scss_lint_reporter_checkstyle
npm install
# do linting, build scss into css, minify and generate styleguide
./node_modules/.bin/gulp ui-kit build.prod