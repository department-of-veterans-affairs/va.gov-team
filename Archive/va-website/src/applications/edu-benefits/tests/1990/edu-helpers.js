const mock = require('../../../../platform/testing/e2e/mock-helpers');

// Create API routes
function initApplicationSubmitMock(form) {
  mock(null, {
    path: `/v0/education_benefits_claims/${form}`,
    verb: 'post',
    value: {
      data: {
        attributes: {
          confirmationNumber: '123fake-submission-id-567',
          submittedAt: '2016-05-16',
          regionalOffice: 'Test'
        }
      }
    }
  });
}

function completeVeteranInformation(client, data, root = 'root') {
  client
    .fill(`input[name="${root}_veteranFullName_first"]`, data.veteranFullName.first)
    .fill(`input[name="${root}_veteranFullName_last"]`, data.veteranFullName.last);

  if (data['view:veteranId']) {
    client
      .fill(`input[name="${root}_view:veteranId_veteranSocialSecurityNumber"]`, data['view:veteranId'].veteranSocialSecurityNumber)
      .fillCheckbox(`input[name="${root}_view:veteranId_view:noSSN"]`)
      .setValue(`input[name="${root}_view:veteranId_vaFileNumber"]`, data['view:veteranId'].vaFileNumber);
  } else {
    client.fill(`input[name="${root}_veteranSocialSecurityNumber"]`, data.veteranSocialSecurityNumber);
  }

  if (data.relationship === 'spouse') {
    client.selectYesNo('root_spouseInfo_divorcePending', data.spouseInfo.divourcePending);
  }

  if (data.veteranDateOfBirth) {
    client.fillDate('root_veteranDateOfBirth', data.veteranDateOfBirth);
  }

  client
    .setValue(`input[name="${root}_veteranFullName_middle"]`, data.veteranFullName.middle)
    .setValue(`select[name="${root}_veteranFullName_suffix"]`, data.veteranFullName.suffix);
  if (data.relationship === 'spouse') {
    client.selectYesNo('root_spouseInfo_remarried', data.spouseInfo.remarried);
    if (data.spouseInfo.remarried) {
      client.fillDate('root_spouseInfo_remarriageDate', data.spouseInfo.remarriageDate);
    }
  }
  if (data.veteranDateOfDeath) {
    client.fillDate('root_veteranDateOfDeath', data.veteranDateOfDeath);
  }
}

function completeApplicantInformation(client, data, prefix = 'relative') {
  const fullName = data[`${prefix}FullName`];
  if (fullName) {
    client
      .fill(`input[name="root_${prefix}FullName_first"]`, fullName.first)
      .setValue(`input[name="root_${prefix}FullName_middle"]`, fullName.middle)
      .fill(`input[name="root_${prefix}FullName_last"]`, fullName.last)
      .selectDropdown(`root_${prefix}FullName_suffix`, fullName.suffix);
  }

  const ssn = data[`${prefix}SocialSecurityNumber`];
  if (ssn) {
    client.fill(`input[name="root_${prefix}SocialSecurityNumber"]`, ssn);
  }
  if (data.relativeVaFileNumber) {
    client
      .fillCheckbox('input[name="root_view:noSSN"]')
      .fill('input[name="root_relativeVaFileNumber"]', data.relativeVaFileNumber);
  } else if (data.vaFileNumber) {
    client
      .fillCheckbox('input[name="root_view:noSSN"]')
      .fill('input[name="root_vaFileNumber"]', data.vaFileNumber);
  }

  const dob = data[`${prefix}DateOfBirth`];
  if (dob) {
    client.fillDate(`root_${prefix}DateOfBirth`, dob);
  }

  if (typeof data.relationship !== 'undefined') {
    client
      .click('input#root_relationship_0');
  }

  if (data.gender) {
    client.click(data.gender === 'M' ? 'input#root_gender_0' : 'input#root_gender_1');
  }
}

function completeAdditionalBenefits(client, data) {
  if (typeof data.nonVaAssistance !== 'undefined') {
    client.click(data.nonVaAssistance ? '#root_nonVaAssistanceYes' : '#root_nonVaAssistanceNo');
  }
  if (typeof data.civilianBenefitsAssistance !== 'undefined') {
    client.click(data.civilianBenefitsAssistance ? '#root_civilianBenefitsAssistanceYes' : '#root_civilianBenefitsAssistanceNo');

    if (typeof data.civilianBenefitsSource !== 'undefined') {
      client.fill('input[name="root_civilianBenefitsSource"]', data.civilianBenefitsSource);
    }
  }
}

function completeBenefitsSelection(client, data) {
  if (data.benefit) {
    client.click(`input[value="${data.benefit}"]`);
  } else if (typeof data.payHighestRateBenefit !== 'undefined') {
    // Defaults to true, so only click if we need to make it false
    client.clickIf('input[name="root_payHighestRateBenefit"]', !data.payHighestRateBenefit);
  } else {
    client.click('.form-radio-buttons:first-child input');
  }
}

/**
 * Completes the service periods page.
 *
 * @param {Object} client   - The nightwatch client
 * @param {Object} data     - The testing data
 * @param {String} | {Bool} - The name of the yes / no widget or false to skip
 *                            clicking on the yes / no
 */
function completeServicePeriods(client, data, serviceName = 'view:newService') {
  if (serviceName) {
    client
      .selectYesNo(`root_${serviceName}`, true);
  }

  client
    .fill('input[name="root_toursOfDuty_0_serviceBranch"]', data.toursOfDuty[0].serviceBranch)
    .fillDate('root_toursOfDuty_0_dateRange_from', data.toursOfDuty[0].dateRange.from)
    .fillDate('root_toursOfDuty_0_dateRange_to', data.toursOfDuty[0].dateRange.to);

  if (data.toursOfDuty[0].serviceStatus) {
    client.fill('input[name="root_toursOfDuty_0_serviceStatus"]', data.toursOfDuty[0].serviceStatus);
  }

  if (data.toursOfDuty[0].applyPeriodToSelected === false) {
    client
      .fillCheckbox('input[name="root_toursOfDuty_0_applyPeriodToSelected"]')
      .fill('textarea[id="root_toursOfDuty_0_benefitsToApplyTo"]', data.toursOfDuty[0].benefitsToApplyTo);
  }

  client
    .click('button.va-growable-add-btn')
    .fill('input[name="root_toursOfDuty_1_serviceBranch"]', data.toursOfDuty[1].serviceBranch)
    .fillDate('root_toursOfDuty_1_dateRange_from', data.toursOfDuty[1].dateRange.from)
    .fillDate('root_toursOfDuty_1_dateRange_to', data.toursOfDuty[1].dateRange.to);

  if (data.toursOfDuty[1].serviceStatus) {
    client.fill('input[name="root_toursOfDuty_1_serviceStatus"]', data.toursOfDuty[1].serviceStatus);
  }

  if (data.toursOfDuty[1].applyPeriodToSelected === false) {
    client
      .fillCheckbox('input[name="root_toursOfDuty_1_applyPeriodToSelected"]')
      .fill('textarea[id="root_toursOfDuty_1_benefitsToApplyTo"]', data.toursOfDuty[1].benefitsToApplyTo);
  }
}

function completeVeteranAddress(client, data) {
  client
    .clearValue('input[name="root_veteranAddress_street"]')
    .setValue('input[name="root_veteranAddress_street"]', data.veteranAddress.street)
    .clearValue('input[name="root_veteranAddress_street2"]')
    .setValue('input[name="root_veteranAddress_street2"]', data.veteranAddress.street2)
    .clearValue('input[name="root_veteranAddress_city"]')
    .setValue('input[name="root_veteranAddress_city"]', data.veteranAddress.city)
    .clearValue('select[name="root_veteranAddress_state"]')
    .selectDropdown('root_veteranAddress_state', data.veteranAddress.state)
    .clearValue('input[name="root_veteranAddress_postalCode"]')
    .setValue('input[name="root_veteranAddress_postalCode"]', data.veteranAddress.postalCode);
}

function completeRelativeAddress(client, data) {
  client
    .clearValue('input[name="root_relativeAddress_street"]')
    .setValue('input[name="root_relativeAddress_street"]', data.relativeAddress.street)
    .clearValue('input[name="root_relativeAddress_street2"]')
    .setValue('input[name="root_relativeAddress_street2"]', data.relativeAddress.street2)
    .clearValue('input[name="root_relativeAddress_city"]')
    .setValue('input[name="root_relativeAddress_city"]', data.relativeAddress.city)
    .clearValue('select[name="root_relativeAddress_state"]')
    .selectDropdown('root_relativeAddress_state', data.relativeAddress.state)
    .clearValue('input[name="root_relativeAddress_postalCode"]')
    .setValue('input[name="root_relativeAddress_postalCode"]', data.relativeAddress.postalCode);
}

function completeContactInformation(client, data, isRelative = false) {
  if (isRelative) {
    completeRelativeAddress(client, data);
  } else {
    completeVeteranAddress(client, data);
  }
  client
    .clearValue('input[name="root_view:otherContactInfo_email"]')
    .setValue('input[name="root_view:otherContactInfo_email"]', data['view:otherContactInfo'].email)
    .clearValue('input[name="root_view:otherContactInfo_view:confirmEmail"]')
    .setValue('input[name="root_view:otherContactInfo_view:confirmEmail"]', data['view:otherContactInfo']['view:confirmEmail']);

  client
    .click('input#root_preferredContactMethod_2')
    .clearValue('input[name="root_view:otherContactInfo_homePhone"]')
    .setValue('input[name="root_view:otherContactInfo_homePhone"]', data['view:otherContactInfo'].homePhone)
    .clearValue('input[name="root_view:otherContactInfo_mobilePhone"]')
    .setValue('input[name="root_view:otherContactInfo_mobilePhone"]', data['view:otherContactInfo'].mobilePhone);
}

function completePaymentChange(client) {
  client
    .click('input#root_bankAccountChange_1');
}

function completeDirectDeposit(client, data) {
  client
    .click('input#root_bankAccount_accountType_1')
    .setValue('input[name="root_bankAccount_accountNumber"]', data.bankAccount.accountNumber)
    .setValue('input[name="root_bankAccount_routingNumber"]', data.bankAccount.routingNumber);
}

function completeSchoolSelection(client, data) {
  client
    .selectDropdown('root_educationProgram_educationType', data.educationProgram.educationType)
    .fill('input[name="root_educationProgram_name"]', data.educationProgram.name)
    .fill('input[name="root_educationProgram_address_street"]', data.educationProgram.address.street)
    .fill('input[name="root_educationProgram_address_street2"]', data.educationProgram.address.street2)
    .fill('input[name="root_educationProgram_address_city"]', data.educationProgram.address.city)
    .fill('select[name="root_educationProgram_address_state"]', data.educationProgram.address.state)
    .fill('input[name="root_educationProgram_address_postalCode"]', data.educationProgram.address.postalCode)
    .fill('textarea[id="root_educationObjective"]', data.educationObjective);

  if (data.educationStartDate) {
    client.fillDate('root_educationStartDate', data.educationStartDate);
  }
}

function completeEmploymentHistory(client, data) {
  const nonMilitaryJob = data.nonMilitaryJobs[0];
  client
    .click('input#root_view\\:hasNonMilitaryJobsYes')
    .fill('input[name="root_nonMilitaryJobs_0_name"]', nonMilitaryJob.name)
    .fill('input[name="root_nonMilitaryJobs_0_months"]', nonMilitaryJob.months)
    .fill('input[name="root_nonMilitaryJobs_0_licenseOrRating"]', nonMilitaryJob.licenseOrRating);

  if (nonMilitaryJob.postMilitaryJob) {
    client.selectYesNo('root_nonMilitaryJobs_0_postMilitaryJob', nonMilitaryJob.postMilitaryJob);
  }
}


module.exports = {
  initApplicationSubmitMock,
  completeVeteranInformation,
  completeApplicantInformation,
  completeAdditionalBenefits,
  completeBenefitsSelection,
  completeServicePeriods,
  completeVeteranAddress,
  completeContactInformation,
  completePaymentChange,
  completeDirectDeposit,
  completeSchoolSelection,
  completeEmploymentHistory
};
