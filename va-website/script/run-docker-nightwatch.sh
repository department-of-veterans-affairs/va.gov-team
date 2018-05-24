#!/bin/bash

node src/platform/testing/e2e/test-server.js --buildtype=production --host=0.0.0.0 --port=3001 &
node src/platform/testing/e2e/mockapi.js --host=0.0.0.0 --port=3000 &

while ! echo exit | nc localhost ${API_PORT:-3000}; do sleep 3; done
while ! echo exit | nc localhost ${WEB_PORT:-3333}; do sleep 3; done

wait
