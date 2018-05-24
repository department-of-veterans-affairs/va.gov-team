import { isValidDateRange } from '../../../platform/forms/validations';
import { convertToDateField } from '../../common/schemaform/validation';

export function validateAfterMarriageDate(errors, dateOfSeparation, formData) {
  const fromDate = convertToDateField(formData.dateOfMarriage);
  const toDate = convertToDateField(dateOfSeparation);

  if (!isValidDateRange(fromDate, toDate)) {
    errors.addError('Date marriage ended must be after date of marriage');
  }
}

