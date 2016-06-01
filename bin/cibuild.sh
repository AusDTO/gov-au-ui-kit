#!/usr/bin/env bash

# Fail fast and be aware of exit codes
set -eo pipefail

npm install
./node_modules/.bin/sass-lint
./node_modules/.bin/gulp
./node_modules/.bin/kss-node assets/sass build