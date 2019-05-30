const mock = require('../../../platform/testing/e2e/mock-helpers');

function completeVeteranInformation(client, data) {
  client
    .fillName('root_veteranFullName', data.veteranFullName)
    .fill('input[name="root_veteranSSN"]', data.veteranSSN)
    .fill('input[name="root_vaFileNumber"]', data.vaFileNumber)
    .fill('input[name="root_insuranceNumber"]', data.insuranceNumber);
}

function completeClaimantInformation(client, data) {
  client
    .fillName('root_claimantFullName', data.claimantFullName)
    .selectDropdown('root_relationship', data.relationship)
    .selectDropdown(
      'root_claimantAddress_country',
      data.claimantAddress.country
    )
    .fill(
      'input[name="root_claimantAddress_street"]',
      data.claimantAddress.street
    )
    .fill(
      'input[name="root_claimantAddress_street2"]',
      data.claimantAddress.street2
    )
    .fill('input[name="root_claimantAddress_city"]', data.claimantAddress.city)
    .selectDropdown('root_claimantAddress_state', data.claimantAddress.state)
    .fill(
      'input[name="root_claimantAddress_postalCode"]',
      data.claimantAddress.postalCode
    )
    .fill('input[name="root_claimantEmail"]', data.claimantEmail)
    .fill('input[name="root_claimantDaytimePhone"]', data.claimantDaytimePhone)
    .fill('input[name="root_claimantEveningPhone"]', data.claimantEveningPhone);
}

function completeVeteranServiceOrganizationInformation(client, data) {
  client
    .fill('input[name="root_organizationName"]', data.organizationName)
    .fill('input[name="root_organizationEmail"]', data.organizationEmail)
    .fill(
      'input[name="root_organizationRepresentativeName"]',
      data.organizationRepresentativeName
    )
    .fill(
      'input[name="root_organizationRepresentativeTitle"]',
      data.organizationRepresentativeTitle
    );
}

function completeAuthorizationForRepresentativeAccessToRecords(client) {
  client.click('input[type="checkbox"]');
}

function completeLimitationOfConsent(client) {
  client.click('input[name="root_disclosureExceptionDrugAbuse"]');
}

function completeAuthorizationToChangeClaimantAddress(client) {
  client.click('input[name="root_authorizationToChangeClaimantAddress"]');
}

function initApplicationSubmitMock() {
  mock(null, {
    path: '/v0/vso_appointments',
    verb: 'post',
    value: {
      data: {
        attributes: {
          confirmationNumber: '123fake-submission-id-567',
          submittedAt: '2016-05-16',
        },
      },
    },
  });
}

module.exports = {
  completeClaimantInformation,
  completeVeteranInformation,
  completeVeteranServiceOrganizationInformation,
  completeAuthorizationForRepresentativeAccessToRecords,
  completeLimitationOfConsent,
  completeAuthorizationToChangeClaimantAddress,
  initApplicationSubmitMock,
};
