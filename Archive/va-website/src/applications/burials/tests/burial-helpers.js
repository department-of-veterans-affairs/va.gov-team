const mock = require('../../../platform/testing/e2e/mock-helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts.js');

function completeClaimantInformation(client, data) {
  client
    .fillName('root_claimantFullName', data.claimantFullName)
    .selectRadio('root_relationship_type', data.relationship.type);

  if (data.relationship.type === 'other') {
    client
      .waitForElementVisible('input[name="root_relationship_other"]', Timeouts.normal)
      .fill('input[name="root_relationship_other"]', data.relationship.other)
      // Not sure what to do with this, exactly, but I'll make it an option.
      .clickIf('#root_relationship_view:isEntity', data.relationship.isEntity);
  }
}

function completeVeteranInformation(client, data) {
  client
    .fillName('root_veteranFullName', data.veteranFullName)
    .fill('input[name="root_veteranSocialSecurityNumber"]', data.veteranSocialSecurityNumber)
    .fill('input[name="root_vaFileNumber"]', data.vaFileNumber)
    .fillDate('root_veteranDateOfBirth', data.veteranDateOfBirth)
    .fill('input[name="root_placeOfBirth"]', data.placeOfBirth);
}

function completeBurialInformation(client, data) {
  client
    .fillDate('root_deathDate', data.deathDate)
    .fillDate('root_burialDate', data.burialDate)
    .selectRadio('root_locationOfDeath_location', data.locationOfDeath.location);

  if (data.locationOfDeath.location === 'other') {
    client.fill('input[name="root_locationOfDeath_other"]', data.locationOfDeath.other);
  }
}

function completeServicePeriods(client, data) {
  data.toursOfDuty.forEach((tour, index) => {
    client
      .waitForElementVisible(`input[name="root_toursOfDuty_${index}_dateRange_fromYear"]`, Timeouts.normal)
      .fillDate(`root_toursOfDuty_${index}_dateRange_from`, tour.dateRange.from)
      .fillDate(`root_toursOfDuty_${index}_dateRange_to`, tour.dateRange.to)
      .fill(`input[name="root_toursOfDuty_${index}_serviceBranch"]`, tour.serviceBranch)
      .fill(`input[name="root_toursOfDuty_${index}_rank"]`, tour.rank)
      .fill(`input[name="root_toursOfDuty_${index}_serviceNumber"]`, tour.serviceNumber)
      .fill(`input[name="root_toursOfDuty_${index}_placeOfEntry"]`, tour.placeOfEntry)
      .fill(`input[name="root_toursOfDuty_${index}_placeOfSeparation"]`, tour.placeOfEntry);

    // Keep adding them until we're finished.
    if (index < data.toursOfDuty.length - 1) {
      client.click('.usa-button-secondary.va-growable-add-btn');
    }
  });
}

function completePreviousNames(client, data) {
  if (data.previousNames.length) {
    client.selectYesNo('root_view:serveUnderOtherNames', true);
    data.previousNames.forEach((name, index) => {
      client.fillName(`root_previousNames_${index}`, name);

      if (index < data.previousNames.length - 1) {
        client.click('.usa-button-secondary.va-growable-add-btn');
      }
    });
  } else {
    client.selectYesNo('root_view:serveUnderOtherNames', false);
  }
}

function completeBenefitSelection(client, data) {
  client
    .clickIf('input[name="root_view:claimedBenefits_burialAllowance"]', data['view:claimedBenefits'].burialAllowance)
    .clickIf('input[name="root_view:claimedBenefits_plotAllowance"]', data['view:claimedBenefits'].plotAllowance);

  // TODO: Uncomment this when we get file upload working and testable
  // if (data['view:claimedBenefits'].transportation) {
  //   client
  //     .click('input[name="root_view:claimedBenefits_transportation"]')
  //     .fill('input[name="root_view:claimedBenefits_amountIncurred"]', data['view:claimedBenefits'].amountIncurred);
  // }
}

function completeBurialAllowance(client, data) {
  client.selectRadio('root_burialAllowanceRequested', data.burialAllowanceRequested);

  if (data.burialAllowanceRequested === 'vaMC') {
    client.fill('input[name="root_burialCost"]', data.burialCost);
  }

  if (data.relationship.type === 'spouse') {
    client.selectYesNo('root_previouslyReceivedAllowance', data.previouslyReceivedAllowance);
  } else if (data.relationship.type === 'other') {
    client.selectYesNo('root_benefitsUnclaimedRemains', data.benefitsUnclaimedRemains);
  }
}

function completePlotAllowance(client, data) {
  client
    .fill('input[name="root_placeOfRemains"]', data.placeOfRemains)
    .selectYesNo('root_federalCemetery', data.federalCemetery);

  if (!data.federalCemetery) {
    client.selectYesNo('root_stateCemetery', data.stateCemetery);
  }

  client.selectYesNo('root_govtContributions', data.govtContributions);
  if (data.govtContributions) {
    client.fill('input[name="root_amountGovtContribution"]', data.amountGovtContribution);
  }
}

function completeClaimantContactInformation(client, data) {
  if (!data.relationship['view:isEntity']) {
    client.fill('input[name="root_officialPosition"]', data.officialPosition);
  }
  client
    .fillAddress('root_claimantAddress', data.claimantAddress)
    .fill('input[name="root_claimantEmail"]', data.claimantEmail)
    .fill('input[name="root_claimantPhone"]', data.claimantPhone);
}


function initApplicationSubmitMock() {
  mock(null, {
    path: '/v0/burial_claims',
    verb: 'post',
    value: {
      data: {
        attributes: {
          regionalOffice: [],
          guid: '1234',
          confirmationNumber: '123fake-submission-id-567',
          submittedAt: '2016-05-16'
        }
      }
    }
  });
  mock(null, {
    path: '/v0/burial_claims/1234',
    verb: 'get',
    value: {
      data: {
        attributes: {
          state: 'success',
        }
      }
    }
  });
}

module.exports = {
  completeClaimantInformation,
  completeVeteranInformation,
  completeBurialInformation,
  completeServicePeriods,
  completePreviousNames,
  completeBenefitSelection,
  completeBurialAllowance,
  completePlotAllowance,
  completeClaimantContactInformation,

  initApplicationSubmitMock
};
