const mock = require('./mock-helpers');

// by default, mock shows that user has agreed to latest terms
// this behavior can be set using the bypass arg
function initMHVTermsMocks(token, termsName = 'mhvac', bypass = true) {
  mock(token, {
    path: `/v0/terms_and_conditions/${termsName}/versions/latest`,
    verb: 'get',
    value: {
      data: {
        id: '1',
        type: 'termsAndConditions',
        attributes: {
          name: 'mhvac',
          yesContent: 'I agree',
        }
      }
    }
  });

  mock(token, {
    path: `/v0/terms_and_conditions/${termsName}/versions/latest/user_data`,
    verb: 'get',
    value: {
      data: {
        id: '1',
        type: 'termsAndConditions',
        attributes: {
          createdAt: bypass ? 'today' : null,
        }
      }
    }
  });

  mock(token, {
    path: `/v0/terms_and_conditions/${termsName}/versions/latest/user_data`,
    verb: 'post',
    value: {
      data: {}
    }
  });

  mock(token, {
    path: '/v0/mhv_account',
    verb: 'get',
    value: {
      data: {
        attributes: {
          accountState: bypass ? 'upgraded' : 'needs_terms_acceptance'
        }
      }
    }
  });
}

module.exports = {
  initMHVTermsMocks,
};
