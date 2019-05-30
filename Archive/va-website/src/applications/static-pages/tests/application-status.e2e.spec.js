const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts.js');
const Auth = require('../../../platform/testing/e2e/auth');

function testStatus(client, page, url) {
  client
    .url(`${E2eHelpers.baseUrl}${page}`)
    .waitForElementVisible('.sip-application-status', Timeouts.slow)
    .axeCheck('.main');

  client
    .expect.element('a.usa-button-primary')
    .to.have.attribute('href').contains(url);

  client
    .click('.usa-button-secondary')
    .waitForElementPresent('.va-modal', Timeouts.normal)
    .expect.element('#start-over-modal-title').text.equals('Starting over will delete your in-progress form.');

  client
    .axeCheck('.main');

}

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    const token = Auth.getUserToken();

    Auth.logIn(token, client, '/', 3);

    /* eslint-disable camelcase */
    client.mockData({
      path: '/v0/user',
      verb: 'get',
      value: {
        data: {
          attributes: {
            profile: {
              authn_context: 'idme',
              email: 'fake@fake.com',
              loa: { current: 3 },
              first_name: 'Jane',
              middle_name: '',
              last_name: 'Doe',
              gender: 'F',
              birth_date: '1985-01-01',
              verified: true
            },
            veteran_status: {
              status: 'OK',
              is_veteran: true,
            },
            in_progress_forms: [
              {
                form: '1010ez',
                metadata: {}
              },
              {
                form: '22-1995',
                metadata: {}
              },
              {
                form: '21P-530',
                metadata: {}
              },
              {
                form: '21P-527EZ',
                metadata: {}
              }
            ],
            prefills_available: [],
            services: ['facilities', 'hca', 'edu-benefits', 'evss-claims', 'user-profile', 'rx', 'messaging'],
            mhv_account_state: 'upgraded',
            health_terms_current: true,
            va_profile: {
              status: 'OK',
              birth_date: '19511118',
              family_name: 'Hunter',
              gender: 'M',
              given_names: ['Julio', 'E'],
              active_status: 'active'
            }
          }
        }
      }
    }, token);
    /* eslint-enable camelcase */

    testStatus(client, '/health-care/apply', '/health-care/apply/application/resume');
    testStatus(client, '/health-care/', '/health-care/apply/application/resume');
    testStatus(client, '/health-care/eligibility', '/health-care/apply/application/resume');

    testStatus(client, '/pension/apply', '/pension/application/527EZ/resume');
    testStatus(client, '/pension/', '/pension/application/527EZ/resume');
    testStatus(client, '/pension/eligibility', '/pension/application/527EZ/resume');

    testStatus(client, '/burials-and-memorials/', '/burials-and-memorials/application/530/resume');
    testStatus(client, '/burials-and-memorials/survivor-and-dependent-benefits/burial-costs', '/burials-and-memorials/application/530/resume');

    testStatus(client, '/education/apply', '/education/apply-for-education-benefits/application/1995/resume');
    testStatus(client, '/education/', '/education/apply-for-education-benefits/application/1995/resume');
    testStatus(client, '/education/eligibility', '/education/apply-for-education-benefits/application/1995/resume');
    client.end();
  }
);
