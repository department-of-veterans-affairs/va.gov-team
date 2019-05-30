import _ from 'lodash/fp';
import { isValidDateRange } from '../../platform/forms/validations';
import { convertToDateField } from '../common/schemaform/validation';

export function validateAfterMarriageDate(errors, dateOfSeparation, formData) {
  const fromDate = convertToDateField(formData.dateOfMarriage);
  const toDate = convertToDateField(dateOfSeparation);

  if (!isValidDateRange(fromDate, toDate)) {
    errors.addError('Date marriage ended must be after date of marriage');
  }
}

export function validateServiceBirthDates(errors, service, formData) {
  const fromDate = convertToDateField(formData.veteranDateOfBirth);
  const toDate = convertToDateField(_.get('activeServiceDateRange.from', service));

  if (!isValidDateRange(fromDate, toDate)) {
    errors.activeServiceDateRange.from.addError('Date entering active service should be after birth date');
  }
}
