const mock = require('../../../platform/testing/e2e/mock-helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts');

function completeApplicantInformation(client, data) {
  client
    .fillName('root_veteranFullName', data.veteranFullName)
    .fill('input[name="root_veteranSocialSecurityNumber"]', data.veteranSocialSecurityNumber)
    .fill('input[name="root_vaFileNumber"]', data.vaFileNumber)
    .fillDate('root_veteranDateOfBirth', data.veteranDateOfBirth);
}

function completeMilitaryHistory(client, data) {
  client
    .fill('input[name="root_servicePeriods_0_serviceBranch"]', data.servicePeriods[0].serviceBranch)
    .fillDate('root_servicePeriods_0_activeServiceDateRange_from', data.servicePeriods[0].activeServiceDateRange.from)
    .fillDate('root_servicePeriods_0_activeServiceDateRange_to', data.servicePeriods[0].activeServiceDateRange.to)
    .click('.va-growable-add-btn')
    .fill('input[name="root_servicePeriods_1_serviceBranch"]', data.servicePeriods[1].serviceBranch)
    .fillDate('root_servicePeriods_1_activeServiceDateRange_from', data.servicePeriods[1].activeServiceDateRange.from)
    .fillDate('root_servicePeriods_1_activeServiceDateRange_to', data.servicePeriods[1].activeServiceDateRange.to);
}

function completeGeneralMilitaryInfo(client, data) {
  client
    .selectYesNo('root_view:serveUnderOtherNames', data['view:serveUnderOtherNames'])
    .fillName('root_previousNames_0', data.previousNames[0])
    .click('.va-growable-add-btn')
    .fillName('root_previousNames_1', data.previousNames[1])
    .fill('input[name="root_placeOfSeparation"]', data.placeOfSeparation)
    .selectYesNo('root_combatSince911', data.combatSince911);
}

function completeNationalGuard(client, data) {
  client
    .selectYesNo('root_nationalGuardActivation', data.nationalGuardActivation)
    .fill('input[name="root_nationalGuard_name"]', data.nationalGuard.name)
    .fillAddress('root_nationalGuard_address', data.nationalGuard.address)
    .fill('input[name="root_nationalGuard_phone"]', data.nationalGuard.phone)
    .fillDate('root_nationalGuard_date', data.nationalGuard.date);
}

function completePOW(client, data) {
  client
    .selectYesNo('root_view:powStatus', data['view:powStatus'])
    .fillDate('root_powDateRange_from', data.powDateRange.from)
    .fillDate('root_powDateRange_to', data.powDateRange.to)
    .selectYesNo('root_view:receivedSeverancePay', data['view:receivedSeverancePay'])
    .selectRadio('root_severancePay_type', data.severancePay.type)
    .fill('input[name="root_severancePay_amount"]', data.severancePay.amount);
}

function completeDisabilityHistory(client, data) {
  client
    .fill('input[name="root_disabilities_0_name"]', data.disabilities[0].name)
    .fillDate('root_disabilities_0_disabilityStartDate', data.disabilities[0].disabilityStartDate)
    .click('.va-growable-add-btn')
    .fill('input[name="root_disabilities_1_name"]', data.disabilities[1].name)
    .fillDate('root_disabilities_1_disabilityStartDate', data.disabilities[1].disabilityStartDate)
    .selectYesNo('root_view:hasVisitedVAMC', data['view:hasVisitedVAMC'])
    .fill('input[name="root_vamcTreatmentCenters_0_location"]', data.vamcTreatmentCenters[0].location)
    .click('.form-expanding-group .va-growable-add-btn')
    .fill('input[name="root_vamcTreatmentCenters_1_location"]', data.vamcTreatmentCenters[1].location);
}

function completeWorkHistory(client, data) {
  data['view:history'].jobs.forEach((job, index) => {
    client
      .selectYesNo('root_view:workedBeforeDisabled', data['view:workedBeforeDisabled'])
      .fill(`input[name="root_view:history_jobs_${index}_employer"]`, job.employer)
      .fillAddress(`root_view:history_jobs_${index}_address`, job.address)
      .fill(`input[name="root_view:history_jobs_${index}_jobTitle"]`, job.jobTitle)
      .fillDate(`root_view:history_jobs_${index}_dateRange_from`, job.dateRange.from)
      .fillDate(`root_view:history_jobs_${index}_dateRange_to`, job.dateRange.to)
      .fill(`input[name="root_view:history_jobs_${index}_daysMissed"]`, job.daysMissed)
      .fill(`input[name="root_view:history_jobs_${index}_annualEarnings"]`, job.annualEarnings)
      .clickIf('.va-growable-add-btn', index < data['view:history'].jobs.length - 1);
  });
}

function completeMaritalStatus(client, data) {
  client
    .selectRadio('root_maritalStatus', data.maritalStatus)
    .fill('input[name="root_marriages"]', data.marriages.length);
}

function completeMarriage(client, data, index) {
  client
    .fillName('root_spouseFullName', data.marriages[index].spouseFullName)
    .fillDate('root_dateOfMarriage', data.marriages[index].dateOfMarriage)
    .fill('input[name="root_locationOfMarriage"]', data.marriages[index].locationOfMarriage)
    .selectRadio('root_marriageType', data.marriages[index].marriageType);
  if (data.marriages[index]['view:pastMarriage']) {
    client
      .selectRadio('root_view:pastMarriage_reasonForSeparation', data.marriages[index]['view:pastMarriage'].reasonForSeparation)
      .fillDate('root_view:pastMarriage_dateOfSeparation', data.marriages[index]['view:pastMarriage'].dateOfSeparation)
      .fill('input[name="root_view:pastMarriage_locationOfSeparation"]', data.marriages[index]['view:pastMarriage'].locationOfSeparation);
  }
}

function completeSpouseInfo(client, data) {
  client
    .fillDate('root_spouseDateOfBirth', data.spouseDateOfBirth)
    .fill('input[name="root_spouseSocialSecurityNumber"]', data.spouseSocialSecurityNumber)
    .selectYesNo('root_spouseIsVeteran', data.spouseIsVeteran)
    .fill('input[name="root_spouseVaFileNumber"]', data.spouseVaFileNumber)
    .selectYesNo('root_liveWithSpouse', data.liveWithSpouse)
    .fillAddress('root_spouseAddress', data.spouseAddress)
    .fill('input[name="root_reasonForNotLivingWithSpouse"]', data.reasonForNotLivingWithSpouse)
    .fill('input[name="root_monthlySpousePayment"]', data.monthlySpousePayment)
    .fill('input[name="root_spouseMarriages"]', data.spouseMarriages.length + 1);
}

function completeSpouseMarriage(client, data) {
  client
    .fillDate('root_dateOfMarriage', data.spouseMarriages[0].dateOfMarriage)
    .fill('input[name="root_locationOfMarriage"]', data.spouseMarriages[0].locationOfMarriage)
    .fillName('root_spouseFullName', data.spouseMarriages[0].spouseFullName)
    .selectRadio('root_marriageType', data.spouseMarriages[0].marriageType)
    .selectRadio('root_reasonForSeparation', data.spouseMarriages[0].reasonForSeparation)
    .fillDate('root_dateOfSeparation', data.spouseMarriages[0].dateOfSeparation)
    .fill('input[name="root_locationOfSeparation"]', data.spouseMarriages[0].locationOfSeparation);
}

function completeDependents(client, data) {
  client
    .selectYesNo('root_view:hasDependents', data['view:hasDependents']);

  data.dependents.forEach((dependent, index) => {
    client
      .fillName(`root_dependents_${index}_fullName`, data.dependents[index].fullName)
      .fillDate(`root_dependents_${index}_childDateOfBirth`, data.dependents[index].childDateOfBirth)
      .clickIf('.va-growable-add-btn', index < data.dependents.length - 1);
  });
}

function completeDependentInfo(client, data, index) {
  client
    .fill('input[name="root_childPlaceOfBirth"]', data.dependents[index].childPlaceOfBirth)
    .fillCheckboxIf('input[name="root_view:noSSN"]', data.dependents[index]['view:noSSN'])
    .fill('input[name="root_childSocialSecurityNumber"]', data.dependents[index].childSocialSecurityNumber)
    .selectRadio('root_childRelationship', data.dependents[index].childRelationship);

  // These pauses seem to have something to do with the messages that expand underneath

  if (typeof data.dependents[index].attendingCollege !== 'undefined') {
    client
      .selectYesNo('root_attendingCollege', data.dependents[index].attendingCollege)
      .pause(1000);
  }

  if (typeof data.dependents[index].disabled !== 'undefined') {
    client
      .selectYesNo('root_disabled', data.dependents[index].disabled)
      .pause(1000);
  }

  client
    .selectYesNo('root_previouslyMarried', data.dependents[index].previouslyMarried);

  if (data.dependents[index].previouslyMarried) {
    client
      .pause(1000)
      .selectYesNo('root_married', data.dependents[index].married);
  }
}

function completeDependentAddressInfo(client, data, index) {
  client
    .selectYesNo('root_childInHousehold', data.dependents[index].childInHousehold);

  if (!data.dependents[index].childInHousehold) {
    client
      .fillAddress('root_childAddress', data.dependents[index].childAddress)
      .fillName('root_personWhoLivesWithChild', data.dependents[index].personWhoLivesWithChild)
      .fill('input[name="root_monthlyPayment"]', data.dependents[index].monthlyPayment);
  }
}

function completeNetWorthInfo(client, data) {
  client
    .fill('input[name$="bank"]', data.bank)
    .fill('input[name$="interestBank"]', data.interestBank)
    .fill('input[name$="ira"]', data.ira)
    .fill('input[name$="stocks"]', data.stocks)
    .fill('input[name$="realProperty"]', data.realProperty)
    .click('body')
    .click('.pensions-sources-add-btn')
    .waitForElementPresent('input[name$="additionalSources_0_name"]', Timeouts.normal)
    .fill('input[name$="additionalSources_0_name"]', data.additionalSources[0].name)
    .fill('input[name$="additionalSources_0_amount"]', data.additionalSources[0].amount)
    .click('.va-growable-expanded .float-left');
}

function completeMonthlyIncomeInfo(client, data) {
  client
    .fill('input[name$="socialSecurity"]', data.socialSecurity)
    .fill('input[name$="civilService"]', data.civilService)
    .fill('input[name$="railroad"]', data.railroad)
    .fill('input[name$="blackLung"]', data.blackLung)
    .fill('input[name$="serviceRetirement"]', data.serviceRetirement)
    .fill('input[name$="ssi"]', data.ssi)
    .click('body')
    .click('.pensions-sources-add-btn')
    .waitForElementPresent('input[name$="additionalSources_0_name"]', Timeouts.normal)
    .fill('input[name$="additionalSources_0_name"]', data.additionalSources[0].name)
    .fill('input[name$="additionalSources_0_amount"]', data.additionalSources[0].amount)
    .click('.va-growable-expanded .float-left');
}

function completeExpectedIncomeInfo(client, data) {
  client
    .fill('input[name$="salary"]', data.salary)
    .fill('input[name$="interest"]', data.interest)
    .click('body')
    .click('.pensions-sources-add-btn')
    .waitForElementPresent('input[name$="additionalSources_0_name"]', Timeouts.normal)
    .fill('input[name$="additionalSources_0_name"]', data.additionalSources[0].name)
    .fill('input[name$="additionalSources_0_amount"]', data.additionalSources[0].amount)
    .click('.va-growable-expanded .float-left');
}

function completeOtherExpensesInfo(client, data, prefix = 'other') {
  client
    .fill('input[name$="amount"]', data.amount)
    .fill('input[name$="purpose"]', data.purpose)
    .fillDate(`root_${prefix}Expenses_0_date`, data.date)
    .fill('input[name$="paidTo"]', data.paidTo);
}

function completeDirectDepositInfo(client, data) {
  client
    .selectRadio('root_bankAccount_accountType', data.accountType)
    .fill('input[name$="bankName"]', data.bankName)
    .fill('input[name$="accountNumber"]', data.accountNumber)
    .fill('input[name$="routingNumber"]', data.routingNumber);
}

function completeContactInfo(client, data) {
  client
    .fillAddress('root_veteranAddress', data.veteranAddress)
    .fill('input[name$="email"]', data.email)
    .fill('input[name$="altEmail"]', data.altEmail)
    .fill('input[name$="dayPhone"]', data.dayPhone)
    .fill('input[name$="nightPhone"]', data.nightPhone)
    .fill('input[name$="mobilePhone"]', data.mobilePhone);
}

function completeExpeditedInfo(client, data) {
  client
    .selectYesNo('root_noRapidProcessing', data.noRapidProcessing)
    .waitForElementVisible('.usa-alert-info', Timeouts.normal);
}

function initApplicationSubmitMock() {
  mock(null, {
    path: '/v0/pension_claims',
    verb: 'post',
    value: {
      data: {
        attributes: {
          guid: '1234',
          regionalOffice: [],
          confirmationNumber: '123fake-submission-id-567',
          submittedAt: '2016-05-16'
        }
      }
    }
  });
  mock(null, {
    path: '/v0/pension_claims/1234',
    verb: 'get',
    value: {
      data: {
        attributes: {
          state: 'success'
        }
      }
    }
  });
}

function initDocumentUploadMock() {
  mock(null, {
    path: '/v0/claim_attachments',
    verb: 'post',
    value: {
      data: {
        attributes: {
          size: 155993,
          name: 'test.png',
          confirmationCode: '871af1d9-ae04-4ed2-99ef-4c11686c53d2',
        }
      }
    }
  });
}

module.exports = {
  completeApplicantInformation,
  completeMilitaryHistory,
  completeNationalGuard,
  completeGeneralMilitaryInfo,
  completePOW,
  completeDisabilityHistory,
  completeWorkHistory,
  completeMaritalStatus,
  completeMarriage,
  completeSpouseInfo,
  completeSpouseMarriage,
  completeDependents,
  completeDependentInfo,
  completeDependentAddressInfo,
  completeNetWorthInfo,
  completeMonthlyIncomeInfo,
  completeExpectedIncomeInfo,
  completeOtherExpensesInfo,
  completeDirectDepositInfo,
  completeContactInfo,
  completeExpeditedInfo,
  initApplicationSubmitMock,
  initDocumentUploadMock
};

