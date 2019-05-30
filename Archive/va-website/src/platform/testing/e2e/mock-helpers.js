const request = require('request');
const E2eHelpers = require('./helpers');

function mock(token, json) {
  return new Promise((resolve, reject) => {
    const jsonWithToken = token ? {
      ...json, auth: `Token token=${token}`
    } : json;

    request({
      uri: `${E2eHelpers.apiUrl}/mock`,
      method: 'POST',
      json: jsonWithToken
    }, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
}

module.exports = mock;
