#!/usr/bin/env bash

# Fail fast and be aware of exit codes
set -eo pipefail

npm install
# lint sass/scss
./node_modules/.bin/sass-lint
# build scss into css
./node_modules/.bin/gulp
# generate style examples
./node_modules/.bin/kss-node assets/sass build --verbose --homepage=../../README.md