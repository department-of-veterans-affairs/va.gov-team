const mock = require('../../../../platform/testing/e2e/mock-helpers');

function completeApplicantInformation(client, data) {
  client
    .selectYesNo('root_view:isVeteran', data['view:isVeteran'])
    .fillName('root_applicantFullName', data.applicantFullName)
    .selectRadio('root_applicantRelationshipToVeteran', data.applicantRelationshipToVeteran);
}

function completeDependentInformation(client, data) {
  client
    .fill('input[name=root_applicantSocialSecurityNumber]', data.applicantSocialSecurityNumber)
    .selectRadio('root_applicantGender', data.applicantGender)
    .selectYesNo('root_seekingRestorativeTraining', data.seekingRestorativeTraining)
    .selectYesNo('root_seekingVocationalTraining', data.seekingVocationalTraining)
    .selectYesNo('root_receivedPamphlet', data.receivedPamphlet);
}

function completeVeteranInformation(client, data) {
  client
    .fillName('root_veteranFullName', data.veteranFullName)
    .fillDate('root_veteranDateOfBirth', data.veteranDateOfBirth)
    .fill('input[name=root_veteranSocialSecurityNumber]', data.veteranSocialSecurityNumber)
    .fill('input[name=root_veteranVaFileNumber]', data.veteranVaFileNumber)
    .fillDate('root_veteranDateOfDeathMIAPOW', data.veteranDateOfDeathMIAPOW);
}

function completeAdditionalInformation(client, data) {
  client
    .selectYesNo('root_divorceOrAnnulmentPending', data.divorceOrAnnulmentPending)
    .fillCheckbox('input[name=root_previousBenefitApplications_dic]', data.previousBenefitApplications.dic)
    .fillCheckbox('input[name=root_previousBenefitApplications_other]', data.previousBenefitApplications.other)
    .fill('input[name=root_previousBenefitApplications_otherExplanation]', data.previousBenefitApplications.otherExplanation)
    .fillName('root_previousVeteranBenefitsFullName', data.veteranFullName)
    .fill('input[name=root_previousVeteranBenefitsSocialSecurityNumber]', data.previousVeteranBenefitsSocialSecurityNumber)
    .fill('input[name=root_previousVeteranBenefitsVaFileNumber]', data.previousVeteranBenefitsVaFileNumber);
}

function completeMilitaryHistoryInformation(client, data) {
  client
    .selectYesNo('root_view:hasMilitaryHistory', data['view:hasMilitaryHistory'])
    .fill('input[name=root_applicantServiceHistory_0_serviceBranch]', data.applicantServiceHistory[0].serviceBranch)
    .fillDate('root_applicantServiceHistory_0_dateRange_from', data.applicantServiceHistory[0].dateRange.from)
    .fillDate('root_applicantServiceHistory_0_dateRange_to', data.applicantServiceHistory[0].dateRange.to)
    .selectDropdown('root_applicantServiceHistory_0_dischargeType', data.applicantServiceHistory[0].dischargeType);
}

function completeAddressInformation(client, data) {
  client
    .fillAddress('root_applicantAddress', data.applicantAddress);
}

function completeContactInformation(client, data) {
  client
    .fill('input[name="root_applicantEmail"]', data.applicantEmail)
    .fill('input[name="root_view:confirmEmail"]', data.applicantEmail)
    .fill('input[name="root_applicantPrimaryPhone"]', data.applicantPrimaryPhone)
    .fill('input[name="root_applicantOtherPhone"]', data.applicantOtherPhone);
}

function initApplicationSubmitMock() {
  mock(null, {
    path: '/v0/vre/whatever',
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
  completeApplicantInformation,
  completeVeteranInformation,
  completeAdditionalInformation,
  completeMilitaryHistoryInformation,
  completeAddressInformation,
  completeContactInformation,
  completeDependentInformation
};
