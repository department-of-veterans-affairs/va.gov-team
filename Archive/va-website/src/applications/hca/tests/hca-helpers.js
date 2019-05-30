const mock = require('../../../platform/testing/e2e/mock-helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts.js');
const Auth = require('../../../platform/testing/e2e/auth.js');
const moment = require('moment');

function completePersonalInformation(client, data) {
  client
    .waitForElementVisible('input[name="root_veteranFullName_first"]', Timeouts.normal)
    .fill('input[name="root_veteranFullName_first"]', data.veteranFullName.first)
    .fill('input[name="root_veteranFullName_last"]', data.veteranFullName.last)
    .selectDropdown('root_veteranFullName_suffix', data.veteranFullName.suffix)
    .fill('input[name="root_veteranFullName_middle"]', data.veteranFullName.middle)
    .fill('input[name="root_mothersMaidenName"]', data.mothersMaidenName);
}

function completeBirthInformation(client, data) {
  client
    .fillDate('root_veteranDateOfBirth', data.veteranDateOfBirth)
    .fill('input[name="root_veteranSocialSecurityNumber"]', data.veteranSocialSecurityNumber)
    .fill('input[name="root_view:placeOfBirth_cityOfBirth"]', data['view:placeOfBirth'].cityOfBirth)
    .selectDropdown('root_view:placeOfBirth_stateOfBirth', data['view:placeOfBirth'].stateOfBirth);
}

function completeDemographicInformation(client, data) {
  client
    .selectDropdown('root_gender', data.gender)
    .selectDropdown('root_maritalStatus', data.maritalStatus)
    .click('input[name="root_view:demographicCategories_isAmericanIndianOrAlaskanNative"]')
    .click('input[name="root_view:demographicCategories_isBlackOrAfricanAmerican"]')
    .click('input[name="root_view:demographicCategories_isNativeHawaiianOrOtherPacificIslander"]')
    .click('input[name="root_view:demographicCategories_isAsian"]')
    .click('input[name="root_view:demographicCategories_isWhite"]')
    .click('input[name="root_view:demographicCategories_isSpanishHispanicLatino"]');
}

function completeVeteranAddress(client, data) {
  client
    .fill('input[name="root_veteranAddress_street"]', data.veteranAddress.street)
    .fill('input[name="root_veteranAddress_street2"]', data.veteranAddress.street2)
    .fill('input[name="root_veteranAddress_street3"]', data.veteranAddress.street3)
    .fill('input[name="root_veteranAddress_city"]', data.veteranAddress.city)
    .selectDropdown('root_veteranAddress_country', data.veteranAddress.country)
    .selectDropdown('root_veteranAddress_state', data.veteranAddress.state)
    // Has to be after the dropdowns or it fails mysteriously
    .fill('input[name="root_veteranAddress_postalCode"]', data.veteranAddress.postalCode);
}

function completeVeteranContactInformation(client, data) {
  client
    .waitForElementVisible('input[name="root_email"]', Timeouts.normal)
    .setValue('input[name="root_email"]', data.email)
    .setValue('input[name="root_view:emailConfirmation"]', data['view:emailConfirmation'])
    .setValue('input[name="root_homePhone"]', data.homePhone)
    .setValue('input[name="root_mobilePhone"]', data.mobilePhone);
}

function completeMilitaryService(client, data) {
  client
    .selectDropdown('root_lastServiceBranch', data.lastServiceBranch)
    .fillDate('root_lastEntryDate', data.lastEntryDate)
    .fillDate('root_lastDischargeDate', data.lastDischargeDate)
    .selectDropdown('root_dischargeType', data.dischargeType);
}

function completeAdditionalInformation(client) {
  client
    .click('input[name="root_purpleHeartRecipient"]')
    .click('input[name="root_isFormerPow"]')
    .click('input[name="root_postNov111998Combat"]')
    .click('input[name="root_disabledInLineOfDuty"]')
    .click('input[name="root_swAsiaCombat"]')
    .click('input[name="root_vietnamService"]')
    .click('input[name="root_exposedToRadiation"]')
    .click('input[name="root_radiumTreatments"]')
    .click('input[name="root_campLejeune"]');
}

function completeVaBenefits(client, data) {
  client
    .selectRadio('root_vaCompensationType', data.vaCompensationType);
}

function completeFinancialDisclosure(client) {
  client
    .click('input#root_discloseFinancialInformationYes');
}

function completeSpouseInformation(client, data) {
  client
    .fillDate('root_spouseDateOfBirth', data.spouseDateOfBirth)
    .fillDate('root_dateOfMarriage', data.dateOfMarriage)
    .fill('input[name="root_spouseFullName_first"]', data.spouseFullName.first)
    .fill('input[name="root_spouseFullName_middle"]', data.spouseFullName.middle)
    .fill('input[name="root_spouseFullName_last"]', data.spouseFullName.last)
    .selectDropdown('root_spouseFullName_suffix', data.spouseFullName.suffix)
    .fill('input[name="root_spouseSocialSecurityNumber"]', data.spouseSocialSecurityNumber)
    .click('input#root_sameAddressNo');

  client.expect.element('label[for="root_view:spouseContactInformation_spouseAddress_country"]').to.be.visible.before(Timeouts.slow);

  client
    .fill('input[name="root_view:spouseContactInformation_spouseAddress_street"]', data['view:spouseContactInformation'].spouseAddress.street)
    .fill('input[name="root_view:spouseContactInformation_spouseAddress_street2"]', data['view:spouseContactInformation'].spouseAddress.street2)
    .fill('input[name="root_view:spouseContactInformation_spouseAddress_street3"]', data['view:spouseContactInformation'].spouseAddress.street3)
    .fill('input[name="root_view:spouseContactInformation_spouseAddress_city"]', data['view:spouseContactInformation'].spouseAddress.city)
    .selectDropdown('root_view:spouseContactInformation_spouseAddress_country', data['view:spouseContactInformation'].spouseAddress.country)
    .selectDropdown('root_view:spouseContactInformation_spouseAddress_state', data['view:spouseContactInformation'].spouseAddress.state)
    .fill('input[name="root_view:spouseContactInformation_spouseAddress_postalCode"]', data['view:spouseContactInformation'].spouseAddress.postalCode)
    .click('input#root_cohabitedLastYearNo')
    .click('input#root_provideSupportLastYearYes')
    .fill('input[name="root_view:spouseContactInformation_spousePhone"]', data['view:spouseContactInformation'].spousePhone);
}

function completeAnnualIncomeInformation(client, data) {
  client
    .setValue('input[name="root_veteranGrossIncome"]', data.veteranGrossIncome)
    .setValue('input[name="root_veteranNetIncome"]', data.veteranNetIncome)
    .setValue('input[name="root_veteranOtherIncome"]', data.veteranOtherIncome)
    .setValue('input[name="root_view:spouseIncome_spouseGrossIncome"]', data['view:spouseIncome'].spouseGrossIncome)
    .setValue('input[name="root_view:spouseIncome_spouseNetIncome"]', data['view:spouseIncome'].spouseNetIncome)
    .setValue('input[name="root_view:spouseIncome_spouseOtherIncome"]', data['view:spouseIncome'].spouseOtherIncome)
    .setValue('input[name="root_dependents_0_grossIncome"]', data.dependents[0].grossIncome)
    .setValue('input[name="root_dependents_0_netIncome"]', data.dependents[0].netIncome)
    .setValue('input[name="root_dependents_0_otherIncome"]', data.dependents[0].otherIncome);
}

function completeDependentInformation(client, data) {
  client
    .click('input#root_view\\:reportDependentsYes');

  client.expect.element('label[for="root_dependents_0_fullName_first"]').to.be.visible.before(Timeouts.normal);
  client
    .selectDropdown('root_dependents_0_dependentRelation', data.dependents[0].dependentRelation)
    .fillDate('root_dependents_0_dateOfBirth', data.dependents[0].dateOfBirth)
    .fillDate('root_dependents_0_becameDependent', data.dependents[0].becameDependent)
    .setValue('input[name="root_dependents_0_fullName_first"]', data.dependents[0].fullName.first)
    .setValue('input[name="root_dependents_0_fullName_middle"]', data.dependents[0].fullName.middle)
    .setValue('input[name="root_dependents_0_fullName_last"]', data.dependents[0].fullName.last)
    .selectDropdown('root_dependents_0_fullName_suffix', data.dependents[0].fullName.suffix)
    .setValue('input[name="root_dependents_0_socialSecurityNumber"]', data.dependents[0].socialSecurityNumber)
    .setValue('input[name="root_dependents_0_dependentEducationExpenses"]', data.dependents[0].dependentEducationExpenses)
    .click('input#root_dependents_0_disabledBefore18Yes')
    .click('input#root_dependents_0_attendedSchoolLastYearYes')
    .click('input#root_dependents_0_cohabitedLastYearNo')
    .click('input#root_dependents_0_receivedSupportLastYearYes');
}

function completeDeductibleExpenses(client, data) {
  client
    .setValue('input[name="root_deductibleMedicalExpenses"]', data.deductibleMedicalExpenses)
    .setValue('input[name="root_deductibleFuneralExpenses"]', data.deductibleFuneralExpenses)
    .setValue('input[name="root_deductibleEducationExpenses"]', data.deductibleEducationExpenses);
}


function completeMedicareAndMedicaid(client, data) {
  client
    .click('input#root_isMedicaidEligibleYes')
    .click('input#root_isEnrolledMedicarePartAYes')
    .fillDate('root_medicarePartAEffectiveDate', data.medicarePartAEffectiveDate);
}

function completeInsuranceInformation(client, data) {
  client
    .click('input#root_isCoveredByHealthInsuranceYes')
    .setValue('input[name="root_providers_0_insuranceName"]', data.providers[0].insuranceName)
    .setValue('input[name="root_providers_0_insurancePolicyHolderName"]', data.providers[0].insurancePolicyHolderName)
    .setValue('input[name="root_providers_0_insurancePolicyNumber"]', data.providers[0].insurancePolicyNumber)
    .setValue('input[name="root_providers_0_insuranceGroupCode"]', data.providers[0].insuranceGroupCode);
}

function completeVaInsuranceInformation(client, data) {
  client
    .selectDropdown('root_view:preferredFacility_view:facilityState', data['view:preferredFacility']['view:facilityState'])
    .selectDropdown('root_view:preferredFacility_vaMedicalFacility', data['view:preferredFacility'].vaMedicalFacility)
    .click('input[name="root_isEssentialAcaCoverage"]')
    .click('input#root_wantsInitialVaContactYes');
}

function completeEntireForm(client, data) {
  completePersonalInformation(client, data);
  client.click('.form-panel .usa-button-primary');
  completeBirthInformation(client, data);
  client.click('.form-panel .usa-button-primary');
  completeDemographicInformation(client, data);
  client.click('.form-panel .usa-button-primary');
  completeVeteranAddress(client, data);
  client.click('.form-panel .usa-button-primary');
  completeVeteranContactInformation(client, data);
  client.click('.form-panel .usa-button-primary');
  completeMilitaryService(client, data);
  client.click('.form-panel .usa-button-primary');
  completeAdditionalInformation(client, data);
  client.click('.form-panel .usa-button-primary');
  completeVaBenefits(client, data);
  client.click('.form-panel .usa-button-primary');
  completeFinancialDisclosure(client, data);
  client.click('.form-panel .usa-button-primary');
  completeSpouseInformation(client, data);
  client.click('.form-panel .usa-button-primary');
  completeDependentInformation(client, data);
  client.click('.form-panel .usa-button-primary');
  completeAnnualIncomeInformation(client, data);
  client.click('.form-panel .usa-button-primary');
  completeDeductibleExpenses(client, data);
  client.click('.form-panel .usa-button-primary');
  completeMedicareAndMedicaid(client, data);
  client.click('.form-panel .usa-button-primary');
  completeInsuranceInformation(client, data);
  client.click('.form-panel .usa-button-primary');
  completeVaInsuranceInformation(client, data);
  client.click('.form-panel .usa-button-primary');
}

function initApplicationSubmitMock() {
  mock(null, {
    path: '/v0/health_care_applications',
    verb: 'post',
    value: {
      formSubmissionId: '123fake-submission-id-567',
      timestamp: '2016-05-16'
    }
  });
}

function initSaveInProgressMock(url, client) {
  const token = Auth.getUserToken();

  mock(null, {
    path: '/v0/health_care_applications',
    verb: 'post',
    value: {
      formSubmissionId: '123fake-submission-id-567',
      timestamp: '2016-05-16'
    }
  });

  /* eslint-disable camelcase */
  mock(token, {
    path: '/v0/sessions',
    verb: 'delete',
    value: {
      logout_via_get: 'http://fake'
    }
  });

  mock(token, {
    path: '/v0/sessions/new',
    verb: 'get',
    value: {
      logout_via_get: 'http://fake'
    }
  });

  mock(token, {
    path: '/v0/user',
    verb: 'get',
    value: {
      data: {
        attributes: {
          profile: {
            email: 'fake@fake.com',
            loa: {
              current: 3
            },
            first_name: 'Jane',
            middle_name: '',
            last_name: 'Doe',
            gender: 'F',
            birth_date: '1985-01-01',
          },
          veteran_status: {
            is_veteran: true,
            status: 'OK',
          },
          in_progress_forms: [{
            form: '1010ez',
            last_updated: 1501608808,
            metadata: {
              last_updated: 1506792808,
              expires_at: moment().add(1, 'day').unix(),
            }
          }],
          prefills_available: [],
          services: ['facilities', 'hca', 'edu-benefits', 'evss-claims', 'user-profile', 'rx', 'messaging'],
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
  });

  mock(token, {
    path: '/v0/in_progress_forms/1010ez',
    verb: 'get',
    value: {
      formData: {
        privacyAgreementAccepted: false,
        veteranSocialSecurityNumber: '123445544',
        veteranFullName: {
        },
        'view:placeOfBirth': {
        },
        'view:demographicCategories': {
        },
        isSpanishHispanicLatino: false,
        veteranAddress: {
          country: 'USA'
        },
        spouseFullName: {

        },
        isEssentialAcaCoverage: false,
        'view:preferredFacility': {
        },
        'view:locator': {

        }
      },
      metadata: {
        version: 0,
        returnUrl: '/veteran-information/birth-information',
        savedAt: 1498588443698,
        expires_at: moment().add(1, 'day').unix(),
        last_updated: 1498588443
      }
    }
  });
  mock(token, {
    path: '/v0/in_progress_forms/1010ez',
    verb: 'put',
    value: {
      data: {
        attributes: {
          metadata: {
            version: 0,
            returnUrl: '/veteran-information/birth-information',
            savedAt: 1498588443698,
            expires_at: moment().add(1, 'day').unix(),
            last_updated: 1498588443
          }
        }
      }
    }
  });
  /* eslint-enable camelcase */

  client
    .url(url)
    .waitForElementVisible('body', Timeouts.normal);

  Auth.setUserToken(token, client);

  return token;
}
module.exports = {
  completePersonalInformation,
  completeBirthInformation,
  completeDemographicInformation,
  completeVeteranAddress,
  completeVeteranContactInformation,
  completeMilitaryService,
  completeVaBenefits,
  completeFinancialDisclosure,
  completeSpouseInformation,
  completeDependentInformation,
  completeAnnualIncomeInformation,
  completeDeductibleExpenses,
  completeMedicareAndMedicaid,
  completeInsuranceInformation,
  completeVaInsuranceInformation,
  completeAdditionalInformation,
  completeEntireForm,
  initApplicationSubmitMock,
  initSaveInProgressMock
};
