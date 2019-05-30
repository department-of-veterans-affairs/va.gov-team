const mock = require('../../../../platform/testing/e2e/mock-helpers');

function initApplicationSubmitMock() {
  mock(null, {
    path: 'v0/vre/okay',
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

function completeContactInformation(client, data) {
  client
    .fill('input[name="root_daytimePhone"]', data.daytimePhone)
    .fill('input[name="root_eveningPhone"]', data.eveningPhone)
    .fill('input[name="root_email"]', data.email)
    .fill('input[name="root_view:confirmEmail"]', data.email);
}

function completeDisabilityInformation(client, data) {

  client
    .selectDropdown('root_disabilityRating', data.disabilityRating)
    .fill('input[name=root_disabilities]', data.disabilities)
    .fill('input[name=root_vaRecordsOffice]', data.vaRecordsOffice)
    .selectYesNo('root_view:inHospital', data['view:inHospital'])
    .fill('input[name="root_view:hospital_hospitalName"]', data.hospitalName)
    .fillAddress('root_view:hospital_hospitalAddress', data.hospitalAddress);
}

function completeDischargeDocumentUpload(client) {
  client
    .setValue('input#root_dischargeDocuments', require('path').resolve(`${__dirname}/VA40-10007.pdf`));
}

function completeEducationInformation(client, data) {
  client
    .fill('input[name=root_yearsOfEducation]', data.yearsOfEducation)
    .fill('input[name=root_previousPrograms_0_program]', data.previousPrograms[0].program)
    .fill('input[name=root_previousPrograms_0_yearStarted]', data.previousPrograms[0].yearStarted)
    .fill('input[name=root_previousPrograms_0_yearLeft]', data.previousPrograms[0].yearLeft);
}


function completeEmployerInformation(client, data) {
  client
    .selectYesNo('root_view:isWorking', data['view:isWorking'])
    .fillAddress('root_employerAddress', data.employerAddress)
    .fill('input[name=root_employer]', data.employer)
    .fill('input[name=root_jobDuties]', data.jobDuties)
    .fill('input[name=root_monthlyIncome]', data.monthlyIncome);
}

function completeMilitaryHistory(client, data) {
  client
    .fill('input[name=root_serviceHistory_0_serviceBranch]', data.serviceHistory[0].serviceBranch)
    .fillDate('root_serviceHistory_0_dateRange_from', data.serviceHistory[0].dateRange.from)
    .fillDate('root_serviceHistory_0_dateRange_to', data.serviceHistory[0].dateRange.to)
    .selectDropdown('root_serviceHistory_0_dischargeType', data.serviceHistory[0].dischargeType)
    .fillCheckbox('input[name=root_serviceFlags_ww2]', data.serviceFlags.ww2);
}

function completeVeteranAddress(client, data) {
  client
    .selectYesNo('root_view:isMoving', data['view:isMoving'])
    .fillAddress('root_veteranAddress', data.veteranAddress)
    .fillAddress('root_veteranNewAddress', data.newVeteranAddress);
}

function completeVeteranInformation(client, data) {
  client
    .fillName('root_veteranFullName', data.veteranFullName)
    .fillDate('root_veteranDateOfBirth', data.veteranDateOfBirth)
    .fill('input[name=root_veteranSocialSecurityNumber]', data.veteranSocialSecurityNumber)
    .fill('input[name=root_veteranVaFileNumber]', data.veteranVaFileNumber);
}

module.exports = {
  completeContactInformation,
  completeDisabilityInformation,
  completeDischargeDocumentUpload,
  completeEducationInformation,
  completeEmployerInformation,
  completeMilitaryHistory,
  completeVeteranAddress,
  completeVeteranInformation,
  initApplicationSubmitMock,
  initDocumentUploadMock
};
