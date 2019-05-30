const mock = require('../../../platform/testing/e2e/mock-helpers');

function completeApplicantInformation(client, data) {
  client
    .fillName('root_veteranFullName', data.veteranFullName)
    .selectRadio('root_gender', data.gender)
    .fill('input[name="root_veteranSocialSecurityNumber"]', data.veteranSocialSecurityNumber)
    .fillDate('root_veteranDateOfBirth', data.veteranDateOfBirth)
    .selectDropdown('root_serviceBranch', data.serviceBranch);
}

function completeAddressInformation(client, data) {
  client
    .fillAddress('root_veteranAddress', data.veteranAddress);
}

function completeContactInformation(client, data) {
  client
    .fill('input[name$="email"]', data.email)
    .fill('input[name$="confirmEmail"]', data.email)
    .fill('input[name$="phone"]', data.phone);
}

function initApplicationSubmitMock() {
  mock(null, {
    path: '/v0/vic/vic_submissions',
    verb: 'post',
    value: {
      data: {
        attributes: {
          guid: '123fake-submission-id-567'
        }
      }
    }
  });
}

function initApplicationPollMock() {
  mock(null, {
    path: '/v0/vic/vic_submissions/123fake-submission-id-567',
    verb: 'get',
    value: {
      data: {
        attributes: {
          state: 'success',
          response: {
            caseNumber: '123fake-submission-id-567' // eslint-disable-line camelcase
          }
        }
      }
    }
  });
}

function initPhotoUploadMock() {
  mock(null, {
    path: '/v0/vic/profile_photo_attachments',
    verb: 'post',
    value: {
      data: {
        attributes: {
          guid: '123fake-submission-id-567',
          filename: 'examplephoto.jpg',
          path: '/test/vic-v2/'
        }
      }
    }
  });
}

function initDocumentUploadMock() {
  mock(null, {
    path: '/v0/vic/supporting_documentation_attachments',
    verb: 'post',
    value: {
      data: {
        attributes: {
          guid: '123fake-submission-id-567'
        }
      }
    }
  });
}

module.exports = {
  initApplicationSubmitMock,
  initApplicationPollMock,
  initPhotoUploadMock,
  initDocumentUploadMock,
  completeAddressInformation,
  completeApplicantInformation,
  completeContactInformation
};
