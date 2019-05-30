const mock = require('../../../../platform/testing/e2e/mock-helpers');
const util = require('util');
const events = require('events');

function MockData() {
  events.EventEmitter.call(this);
}

util.inherits(MockData, events.EventEmitter);

/**
 * Calls mock data api, in line with test calls
 * @param {any} data The data to send to the mock api
 * @param {string} [token=null] The token to use for the api call
 */
MockData.prototype.command = function mockDataCommand(data, token = null) {
  const self = this;
  mock(token, data)
    .then(() => {
      self.emit('complete');
    })
    .catch(() => {
      self.emit('complete');
    });

  return this;
};

module.exports = MockData;
