#!/usr/bin/env bash

# Exit immediately if any commands return non-zero
set -e
# Output the commands we run
set -x
cf push gov-au-ui-kit$1 -b staticfile_buildpack -p ./build -i 1