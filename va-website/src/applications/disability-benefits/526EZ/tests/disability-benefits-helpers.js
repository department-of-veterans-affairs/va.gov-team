const mock = require('../../../../platform/testing/e2e/mock-helpers');
const Timeouts = require('../../../../platform/testing/e2e/timeouts.js');

function completeApplicantInformation(client, data) {
  client
    .fillName('root_fullName', data.fullName)
    .selectDropdown('root_gender', data.gender)
    .fill('input[name="root_socialSecurityNumber"]', data.socialSecurityNumber)
    .fillDate('root_dateOfBirth', data.dateOfBirth)
    .selectDropdown('root_serviceBranch', data.serviceBranch);
}

function selectDisabilities(client) {
  client
    .fillCheckbox('input[name="root_disabilities_0"]', true);
}

function completeEvidenceTypeInformation(client, data) {
  client
    .fillCheckbox('input[name="root_view:vaMedicalRecords"]', data.disabilities[0]['view:vaMedicalRecords'])
    .fillCheckbox('input[name="root_view:privateMedicalRecords"]', data.disabilities[0]['view:privateMedicalRecords'])
    .fillCheckbox('input[name="root_view:otherEvidence"]', data.disabilities[0]['view:otherEvidence']);
}

function completeVAFacilitiesInformation(client, data) {
  data.treatments.forEach((treatment, i, list) => {
    client
      .waitForElementVisible(`input[name="root_treatments_${i}_treatment_treatmentCenterName"]`, Timeouts.normal)
      .selectDropdown(`root_treatments_${i}_treatment_startTreatmentMonth`, data.treatments[0].startTreatmentMonth)
      .selectDropdown(`root_treatments_${i}_treatment_startTreatmentDay`, data.treatments[0].startTreatmentDay)
      .fill(`input[name="root_treatments_${i}_treatment_startTreatmentYear"]`, data.treatments[0].startTreatmentYear)
      .selectDropdown(`root_treatments_${i}_treatment_endTreatmentMonth`, data.treatments[0].endTreatmentMonth)
      .selectDropdown(`root_treatments_${i}_treatment_endTreatmentDay`, data.treatments[0].endTreatmentDay)
      .fill(`input[name="root_treatments_${i}_treatment_endTreatmentYear"]`, data.treatments[0].endTreatmentYear)
      .fill(`input[name="root_treatments_${i}_treatment_treatmentCenterName"]`, data.treatments[0].treatmentCenterName);
    if (i < list.length - 1) client.click('.va-growable-add-btn');
  });
}

function completeRecordReleaseInformation(client, data) {
  data.treatments.forEach((treatment, i, list) => {
    client
      .waitForElementVisible(`input[name="root_privateRecordReleases_${i}_privateRecordRelease_treatmentCenterName"]`, Timeouts.normal)
      .fill(`input[name="root_privateRecordReleases_${i}_privateRecordRelease_startTreatmentYear"]`,
        data.treatments[0].startTreatmentYear)
      .selectDropdown(`root_privateRecordReleases_${i}_privateRecordRelease_startTreatmentMonth`, data.treatments[0].startTreatmentMonth)
      .selectDropdown(`root_privateRecordReleases_${i}_privateRecordRelease_startTreatmentDay`, data.treatments[0].startTreatmentDay)
      .fill(`input[name="root_privateRecordReleases_${i}_privateRecordRelease_endTreatmentYear"]`, data.treatments[0].endTreatmentYear)
      .selectDropdown(`root_privateRecordReleases_${i}_privateRecordRelease_endTreatmentMonth`, data.treatments[0].endTreatmentMonth)
      .selectDropdown(`root_privateRecordReleases_${i}_privateRecordRelease_endTreatmentDay`, data.treatments[0].endTreatmentDay)
      .fill(`input[name="root_privateRecordReleases_${i}_privateRecordRelease_treatmentCenterName"]`, data.treatments[0].treatmentCenterName)
      .fill(`input[name="root_privateRecordReleases_${i}_privateRecordRelease_treatmentCenterCountry"]`, data.treatments[0].treatmentCenterCountry)
      .fill(`input[name="root_privateRecordReleases_${i}_privateRecordRelease_treatmentCenterCity"]`, data.treatments[0].treatmentCenterCity)
      .fill(`input[name="root_privateRecordReleases_${i}_privateRecordRelease_treatmentCenterState"]`, data.treatments[0].treatmentCenterState)
      .fill(`input[name="root_privateRecordReleases_${i}_privateRecordRelease_treatmentCenterStreet1"]`, data.treatments[0].treatmentCenterStreet)
      .fill(`input[name="root_privateRecordReleases_${i}_privateRecordRelease_treatmentCenterPostalCode"]`, data.treatments[0].treatmentCenterPostalCode);
    if (i < list.length - 1) client.click('.va-growable-add-btn');
  });
}

function completePrivateMedicalRecordsChoice(client, data) {
  client
    .selectRadio('root_view:uploadPrivateRecords', data.disabilities[0]['view:uploadPrivateRecords']);
}

function initApplicationSubmitMock() {
  mock(null, {
    path: '/v0/21-526EZ',
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

function initDocumentUploadMock() {
  mock(null, {
    path: '/v0/claim_attachments',
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
  initDocumentUploadMock,
  completeApplicantInformation,
  selectDisabilities,
  completeEvidenceTypeInformation,
  completeVAFacilitiesInformation,
  completeRecordReleaseInformation,
  completePrivateMedicalRecordsChoice
};
