import _ from 'lodash/fp';
import nonMilitaryJobsUi from '../../common/schemaform/definitions/nonMilitaryJobs';

export default function employmentHistoryPage(schema, usePostMilitaryJob = true) {
  let nonMilitaryJobs = schema.definitions.nonMilitaryJobs;
  let jobUISchema = _.set(['ui:options', 'expandUnder'], 'view:hasNonMilitaryJobs', nonMilitaryJobsUi);

  if (!usePostMilitaryJob) {
    nonMilitaryJobs = _.unset('items.properties.postMilitaryJob', nonMilitaryJobs);
  } else {
    jobUISchema = _.set('items.ui:order', [
      'postMilitaryJob',
      'name',
      'months',
      'licenseOrRating'
    ], jobUISchema);
  }

  return {
    title: 'Employment history',
    path: 'employment/history',
    uiSchema: {
      'view:hasNonMilitaryJobs': {
        'ui:title': 'Have you ever held a license of journeyman rating (for example, as a contractor or plumber) to practice a profession?',
        'ui:widget': 'yesNo'
      },
      nonMilitaryJobs: jobUISchema
    },
    schema: {
      type: 'object',
      properties: {
        'view:hasNonMilitaryJobs': {
          type: 'boolean'
        },
        nonMilitaryJobs
      }
    }
  };
}
