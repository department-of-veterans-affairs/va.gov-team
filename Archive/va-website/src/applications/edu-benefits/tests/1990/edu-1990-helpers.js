import _ from 'lodash/fp';

function completeBenefitRelinquishment(client, data) {
  client
    .selectRadio('root_view:benefitsRelinquishedContainer_benefitsRelinquished', data['view:benefitsRelinquishedContainer'].benefitsRelinquished)
    .fillDate('root_view:benefitsRelinquishedContainer_benefitsRelinquishedDate', data['view:benefitsRelinquishedContainer'].benefitsRelinquishedDate);
}

function completeBenefitsSelection(client, data) {
  const benefits = data['view:selectedBenefits'];
  client
    .clickIf('input[name="root_view:selectedBenefits_chapter33"]', benefits.chapter33)
    .clickIf('input[name="root_view:selectedBenefits_chapter30"]', benefits.chapter30)
    .clickIf('input[name="root_view:selectedBenefits_chapter1606"]', benefits.chapter1606)
    .clickIf('input[name="root_view:selectedBenefits_chapter32"]', benefits.chapter32);
}

function completeMilitaryHistory(client, data) {
  client
    .fill('input[name="root_serviceAcademyGraduationYear"]', data.serviceAcademyGraduationYear)
    .selectYesNo('root_currentlyActiveDuty_yes', data.currentlyActiveDuty.yes)
    .selectYesNo('root_currentlyActiveDuty_onTerminalLeave', data.currentlyActiveDuty.onTerminalLeave);
}

function completeRotcHistory(client, data) {
  client
    .selectYesNo('root_seniorRotcScholarshipProgram', data.seniorRotcScholarshipProgram)
    .selectYesNo('root_view:seniorRotc', data['view:seniorRotc'])
    .fill('input[name="root_seniorRotc_commissionYear"]', data.seniorRotc.commissionYear)
    .fill('input[name="root_seniorRotc_rotcScholarshipAmounts_0_year"]', data.seniorRotc.rotcScholarshipAmounts[0].year)
    .fill('input[name="root_seniorRotc_rotcScholarshipAmounts_0_amount"]', data.seniorRotc.rotcScholarshipAmounts[0].amount)
    .click('button.va-growable-add-btn')
    .fill('input[name="root_seniorRotc_rotcScholarshipAmounts_1_year"]', data.seniorRotc.rotcScholarshipAmounts[1].year)
    .fill('input[name="root_seniorRotc_rotcScholarshipAmounts_1_amount"]', data.seniorRotc.rotcScholarshipAmounts[1].amount);
}

function completeContributions(client, data) {
  client
    .fillCheckbox('input[name="root_civilianBenefitsAssistance"]', data.civilianBenefitsAssistance)
    .fillCheckbox('input[name="root_additionalContributions"]', data.civilianBenefitsAssistance)
    .fillCheckbox('input[name="root_activeDutyKicker"]', data.civilianBenefitsAssistance)
    .fillCheckbox('input[name="root_reserveKicker"]', data.civilianBenefitsAssistance)
    .fillCheckbox('input[name="root_view:activeDutyRepayingPeriod"]', data.civilianBenefitsAssistance)
    .fillDate('root_activeDutyRepayingPeriod_from', data.activeDutyRepayingPeriod.from)
    .fillDate('root_activeDutyRepayingPeriod_to', data.activeDutyRepayingPeriod.to);
}

function completeSecondaryContact(client, data) {
  const { fullName, phone } = data.secondaryContact;
  const address = data.secondaryContact['view:address'].address;
  client
    .fill('input[name="root_secondaryContact_fullName"]', fullName)
    .fill('input[name="root_secondaryContact_phone"]', phone)
    .selectDropdown('root_secondaryContact_view:address_address_country', address.country)
    .fill('input[name="root_secondaryContact_view:address_address_street"]', address.street)
    .fill('input[name="root_secondaryContact_view:address_address_street2"]', address.street2)
    .fill('input[name="root_secondaryContact_view:address_address_city"]', address.city)
    .selectDropdown('root_secondaryContact_view:address_address_state', address.state)
    .fill('input[name="root_secondaryContact_view:address_address_postalCode"]', address.postalCode);
}

function completeEducationHistory(client, data) {
  client.fillMonthYear('root_highSchoolOrGedCompletionDate', data.highSchoolOrGedCompletionDate);

  const training = data.postHighSchoolTrainings[0];
  const dateFrom = _.get('dateRange.from', training);
  const dateTo = _.get('dateRange.to', training);

  client
    .fill('input[name="root_postHighSchoolTrainings_0_name"]', training.name)
    .fill('input[name="root_postHighSchoolTrainings_0_city"]', training.city)
    .selectDropdown('root_postHighSchoolTrainings_0_state', training.state)
    .fillMonthYear('root_postHighSchoolTrainings_0_dateRange_from', dateFrom)
    .fillMonthYear('root_postHighSchoolTrainings_0_dateRange_to', dateTo)
    .fill('input[name="root_postHighSchoolTrainings_0_hours"]', training.hours)
    .selectRadio('root_postHighSchoolTrainings_0_hoursType', training.hoursType)
    .fill('input[name="root_postHighSchoolTrainings_0_degreeReceived"]', training.degreeReceived)
    .fill('input[name="root_postHighSchoolTrainings_0_major"]', training.major)
    .fill('textarea[id="root_faaFlightCertificatesInformation"]', data.faaFlightCertificatesInformation);
}

module.exports = {
  completeBenefitRelinquishment,
  completeBenefitsSelection,
  completeRotcHistory,
  completeContributions,
  completeMilitaryHistory,
  completeSecondaryContact,
  completeEducationHistory
};
