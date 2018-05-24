#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
MOCHA=$SCRIPT_DIR/../node_modules/.bin/mocha

if [ ! -f $MOCHA ]; then
  echo "Mocha not found. Try \`yarn install\`"
  exit 1
fi

# No test specified; run all of them
if [[ -z "$1" ]] || [[ $1 == -* ]]; then
  BABEL_ENV=test $MOCHA --opts src/platform/testing/unit/mocha.opts --recursive '$SCRIPT_DIR/../{test,src}/**/*.unit.spec.js?(x)' src/platform/testing/unit/helper.js "$@"
  exit $?
fi

BABEL_ENV=test $MOCHA --opts src/platform/testing/unit/mocha.opts src/platform/testing/unit/helper.js "$@"
# Stop that bloody npm error messaging after failed tests
# NOTE: This is only to cut down on the visual clutter when running a single test.
#  This WILL be the wrong status if the test actually failed, so don't rely on it.
exit 0

