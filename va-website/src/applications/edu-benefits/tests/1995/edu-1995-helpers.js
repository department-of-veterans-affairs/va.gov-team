function completeMilitaryService(client) {
  client
    .click('input#root_view\\:hasServiceBefore1978Yes');
}

function completeNewSchool(client, data) {
  client
    .clearValue('select[name="root_educationType"]')
    .selectDropdown('root_educationType', data.educationType)
    .clearValue('input[name="root_newSchoolName"]')
    .setValue('input[name="root_newSchoolName"]', data.newSchoolName);

  client
    .clearValue('input[name="root_newSchoolAddress_street"]')
    .setValue('input[name="root_newSchoolAddress_street"]', data.newSchoolAddress.street)
    .clearValue('input[name="root_newSchoolAddress_street2"]')
    .setValue('input[name="root_newSchoolAddress_street2"]', data.newSchoolAddress.street2)
    .clearValue('input[name="root_newSchoolAddress_city"]')
    .setValue('input[name="root_newSchoolAddress_city"]', data.newSchoolAddress.city)
    .clearValue('select[name="root_newSchoolAddress_state"]')
    .selectDropdown('root_newSchoolAddress_state', data.newSchoolAddress.state)
    .clearValue('input[name="root_newSchoolAddress_postalCode"]')
    .setValue('input[name="root_newSchoolAddress_postalCode"]', data.newSchoolAddress.postalCode)
    .setValue('textarea[id="root_educationObjective"]', data.educationObjective)
    .click('input#root_nonVaAssistanceYes')
    .click('input#root_civilianBenefitsAssistanceNo');
}

function completeOldSchool(client, data) {
  client
    .clearValue('input[name="root_oldSchool_name"]')
    .setValue('input[name="root_oldSchool_name"]', data.oldSchool.name);

  const dateFields = data.trainingEndDate.split('-');
  client
    .clearValue('input[name="root_oldSchool_address_street"]')
    .setValue('input[name="root_oldSchool_address_street"]', data.oldSchool.address.street)
    .clearValue('input[name="root_oldSchool_address_street2"]')
    .setValue('input[name="root_oldSchool_address_street2"]', data.oldSchool.address.street2)
    .clearValue('input[name="root_oldSchool_address_city"]')
    .setValue('input[name="root_oldSchool_address_city"]', data.oldSchool.address.city)
    .clearValue('select[name="root_oldSchool_address_state"]')
    .selectDropdown('root_oldSchool_address_state', data.oldSchool.address.state)
    .clearValue('input[name="root_oldSchool_address_postalCode"]')
    .setValue('input[name="root_oldSchool_address_postalCode"]', data.oldSchool.address.postalCode)
    .clearValue('select[name="root_trainingEndDateMonth"]')
    .selectDropdown('root_trainingEndDateMonth', 'Jun')
    .clearValue('select[name="root_trainingEndDateDay"]')
    .selectDropdown('root_trainingEndDateDay', parseInt(dateFields[2], 10).toString())
    .clearValue('input[name="root_trainingEndDateYear"]')
    .setValue('input[name="root_trainingEndDateYear"]', dateFields[0])
    .setValue('input[name="root_reasonForChange"]', data.reasonForChange);
}

function completeDependents(client) {
  client
    .click('input#root_serviceBefore1977_marriedYes')
    .click('input#root_serviceBefore1977_haveDependentsYes')
    .click('input#root_serviceBefore1977_parentDependentYes');
}

module.exports = {
  completeMilitaryService,
  completeNewSchool,
  completeOldSchool,
  completeDependents
};
