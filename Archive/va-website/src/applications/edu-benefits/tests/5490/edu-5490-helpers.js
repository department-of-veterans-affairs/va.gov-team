import _ from 'lodash/fp';

const Timeouts = require('../../../../platform/testing/e2e/timeouts.js');


function completeBenefitRelinquishment(client, data) {
  const date = data.benefitsRelinquishedDate.split('-');
  client
    .selectDropdown('root_benefitsRelinquishedDateMonth', date[1])
    .selectDropdown('root_benefitsRelinquishedDateDay', date[2])
    .fill('input[name="root_benefitsRelinquishedDateYear"]', date[0]);
}

function completeBenefitHistory(client, data) {
  const { previousBenefits } = data;
  client
    .clickIf('input[name="root_previousBenefits_view:noPreviousBenefits"]', previousBenefits['view:noPreviousBenefits'])
    .clickIf('input[name="root_previousBenefits_disability"]', previousBenefits.disability)
    .clickIf('input[name="root_previousBenefits_dic"]', previousBenefits.dic)
    .clickIf('input[name="root_previousBenefits_chapter31"]', previousBenefits.chapter31);

  if (previousBenefits['view:ownServiceBenefits']) {
    client
      .click('input[name="root_previousBenefits_view:ownServiceBenefits"]')
      .fill('input[name="root_previousBenefits_ownServiceBenefits"]', previousBenefits.ownServiceBenefits);
  }

  if (previousBenefits['view:claimedSponsorService']) {
    client
      .click('input[name="root_previousBenefits_view:claimedSponsorService"]')
      .clickIf('input[name="root_previousBenefits_chapter35"]', previousBenefits.chapter35)
      .clickIf('input[name="root_previousBenefits_chapter33"]', previousBenefits.chapter33)
      .clickIf('input[name="root_previousBenefits_transferOfEntitlement"]', previousBenefits.transferOfEntitlement)
      .fill('input[name="root_previousBenefits_veteranFullName_first"]', previousBenefits.veteranFullName.first)
      .fill('input[name="root_previousBenefits_veteranFullName_middle"]', previousBenefits.veteranFullName.middle)
      .fill('input[name="root_previousBenefits_veteranFullName_last"]', previousBenefits.veteranFullName.last)
      .selectDropdown('root_previousBenefits_veteranFullName_suffix', previousBenefits.veteranFullName.suffix)
      .fill('input[name="root_previousBenefits_view:veteranId_veteranSocialSecurityNumber"]', previousBenefits['view:veteranId'].veteranSocialSecurityNumber);
  }

  client.fill('input[name="root_previousBenefits_other"]', previousBenefits.other);
}

function completeSponsorService(client, data) {
  const activeDuty = `root_currentlyActiveDuty${data.currentlyActiveDuty ? 'Yes' : 'No'}`;
  const felony = `root_outstandingFelony${data.outstandingFelony ? 'Yes' : 'No'}`;
  client
    .fill('input[name="root_serviceBranch"]', data.serviceBranch)
    .click(`#${activeDuty}`)
    .click(`#${felony}`);
}

function completeSecondaryContact(client, data) {
  const { fullName, phone, address } = data.secondaryContact;
  client
    .fill('input[name="root_secondaryContact_fullName"]', fullName)
    .fill('input[name="root_secondaryContact_phone"]', phone)
    .selectDropdown('root_secondaryContact_address_country', address.country)
    .fill('input[name="root_secondaryContact_address_street"]', address.street)
    .fill('input[name="root_secondaryContact_address_street2"]', address.street2)
    .fill('input[name="root_secondaryContact_address_city"]', address.city)
    .selectDropdown('root_secondaryContact_address_state', address.state)
    .fill('input[name="root_secondaryContact_address_postalCode"]', address.postalCode);
}

function completeEducationHistory(client, data) {
  const completionDate = _.get('highSchool.highSchoolOrGedCompletionDate', data);

  client.selectDropdown('root_highSchool_status', data.highSchool.status);
  if (completionDate) {
    client.fillDate('root_highSchool_highSchoolOrGedCompletionDate', completionDate);
  }

  if (!_.isEmpty(data.postHighSchoolTrainings)) {
    // Open up the trainings section if there are trainings in the data
    client
      .click('input#root_view\\:hasTrainingsYes')
      .waitForElementVisible('input[name="root_postHighSchoolTrainings_0_name"]', Timeouts.normal);

    // Fill out the information for each training
    _.forEach(data.postHighSchoolTrainings, (training, index, allTrainings) => {
      // I'm not convinced this is running.
      const dateFrom = _.get('dateRange.from', training);
      const dateTo = _.get('dateRange.to', training);

      client
        .fill(`input[name="root_postHighSchoolTrainings_${index}_name"]`, training.name)
        .fill(`input[name="root_postHighSchoolTrainings_${index}_city"]`, training.city)
        .selectDropdown(`root_postHighSchoolTrainings_${index}_state`, training.state);

      if (dateFrom) {
        client.fillDate(`root_postHighSchoolTrainings_${index}_dateRange_from`, dateFrom);
      }
      if (dateTo) {
        client.fillDate(`root_postHighSchoolTrainings_${index}_dateRange_to`, dateTo);
      }

      client
        .fill(`input[name="root_postHighSchoolTrainings_${index}_hours"]`, training.hours)
        .selectDropdown(`root_postHighSchoolTrainings_${index}_hoursType`, training.hoursType)
        .fill(`input[name="root_postHighSchoolTrainings_${index}_degreeReceived"]`, training.degreeReceived)
        .fill(`input[name="root_postHighSchoolTrainings_${index}_major"]`, training.major);

      // If this isn't the last training, add another
      if (allTrainings[index + 1]) {
        client.click('button.va-growable-add-btn');
      }
    });
  }
}

module.exports = {
  completeBenefitRelinquishment,
  completeBenefitHistory,
  completeSponsorService,
  completeSecondaryContact,
  completeEducationHistory
};
