import _ from 'lodash/fp';

import { transformForSubmit } from '../../common/schemaform/helpers';

export function transform(formConfig, form) {
  let updatedFormData = _.unset('veteranServiceHistory', form);

  if (form['view:isVeteran']) {
    updatedFormData = _.set('applicantServiceHistory', form.veteranServiceHistory, updatedFormData);
  }

  const formData = transformForSubmit(formConfig, updatedFormData);
  return JSON.stringify({
    vreClaim: {
      form: formData
    }
  });
}
