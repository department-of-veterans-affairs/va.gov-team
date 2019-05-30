const EduHelpers = require('../1990/edu-helpers');

function completeOldSchool(client, data) {
  client
    .fill('input[name="root_oldSchool_name"]', data.oldSchool.name);

  client
    .fill('input[name="root_oldSchool_address_street"]', data.oldSchool.address.street)
    .fill('input[name="root_oldSchool_address_street2"]', data.oldSchool.address.street2)
    .fill('input[name="root_oldSchool_address_city"]', data.oldSchool.address.city)
    .fill('select[name="root_oldSchool_address_state"]', data.oldSchool.address.state)
    .fill('input[name="root_oldSchool_address_postalCode"]', data.oldSchool.address.postalCode)
    .fillDate('root_trainingEndDate', data.trainingEndDate)
    .fill('input[name="root_reasonForChange"]', data.reasonForChange);
}

function completeSponsorInformation(client, data) {
  EduHelpers.completeVeteranInformation(client,
    data
  );
  client
    .clickIf('input#root_outstandingFelonyYes', data.outstandingFelony);
}

module.exports = {
  completeOldSchool,
  completeSponsorInformation
};
