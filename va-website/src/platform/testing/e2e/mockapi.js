"use strict";  // eslint-disable-line

// Simple mock api server. Allows scripting of a JSON API endpoint for end-to-end tests.
//
// Set the behavior by posting to /mock with a JSON body of
//    verb: The http verb to mock (defaults to 'get')
//    path: /my/api/path
//   value: { "some": "json", "blob": "yay." }

const bodyParser = require('body-parser');
const commandLineArgs = require('command-line-args');
const cors = require('cors');
const express = require('express');
const winston = require('winston');

const optionDefinitions = [
  { name: 'buildtype', type: String, defaultValue: 'development' },
  { name: 'port', type: Number, defaultValue: +(process.env.API_PORT || 3000) },
  { name: 'host', type: String, defaultValue: 'localhost' },

  // Catch-all for bad arguments.
  { name: 'unexpected', type: String, multile: true, defaultOption: true },
];
const options = commandLineArgs(optionDefinitions);

if (options.unexpected && options.unexpected.length !== 0) {
  throw new Error(`Unexpected arguments: '${options.unexpected}'`);
}

function stripTrailingSlash(path) {
  return path.substr(-1) === '/' ? path.slice(0, -1) : path;
}

function makeMockApiRouter(opts) {
  // mockResponses[auth][verb][response]
  const mockResponses = {};

  const router = express.Router(); // eslint-disable-line new-cap
  router.post('/mock', (req, res) => {
    const auth = req.body.auth || '_global';
    const verb = (req.body.verb || 'get').toLowerCase();
    const path = stripTrailingSlash(req.body.path);

    opts.logger.verbose(`mock: ${auth} ${verb} ${path}`);

    mockResponses[auth] = mockResponses[auth] || {};
    mockResponses[auth][verb] = mockResponses[auth][verb] || {};
    mockResponses[auth][verb][path] = { status: req.body.status, value: req.body.value };
    const result = { result: `set auth:${auth} ${verb} ${path} to ${JSON.stringify(req.body.value)}` };
    res.status(200).json(result);
  });

  // Handle CORS preflight.
  router.options('*', cors());

  router.all('*', cors(), (req, res) => {
    const auth = req.get('Authorization') || '_global';
    const verb = req.method.toLowerCase();
    const verbResponses = (mockResponses[auth] || {})[verb];
    const path = stripTrailingSlash(req.path);

    let result = null;
    if (verbResponses) {
      result = verbResponses[path];
    }

    if (!result) {
      res.status(500);
      result = { error: `mock not initialized for auth: ${auth} ${verb} ${path}` };
    }

    if (result.status) {
      res.status(result.status);
    }

    opts.logger.debug(auth, verb, path, result.value);
    res.json(result.value);
  });

  return router;
}

options.logger = winston;

const app = express();
app.use(bodyParser.json());
app.use(makeMockApiRouter(options));
app.listen(options.port, options.host, () => {
  // eslint-disable-next-line no-console
  console.log(`Mock API server listening on port ${options.port}`);
});
