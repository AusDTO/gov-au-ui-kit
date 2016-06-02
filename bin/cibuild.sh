#!/usr/bin/env bash

# Fail fast and be aware of exit codes
set -eo pipefail

npm install
# build scss into css, minify and generate styleguide
./node_modules/.bin/gulp build