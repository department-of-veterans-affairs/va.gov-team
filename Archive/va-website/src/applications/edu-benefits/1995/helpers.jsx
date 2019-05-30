import _ from 'lodash/fp';
import { transformForSubmit } from '../../common/schemaform/helpers';

export function transform(formConfig, form) {
  // All the king’s horses and all the king’s men
  //  Put newSchool back together again.
  const repairedForm = _.set('data.newSchool', {
    name: form.data.newSchoolName,
    address: form.data.newSchoolAddress
  }, form);
  delete repairedForm.data.newSchoolName;
  delete repairedForm.data.newSchoolAddress;

  const formData = transformForSubmit(formConfig, repairedForm);
  return JSON.stringify({
    educationBenefitsClaim: {
      form: formData
    }
  });
}

