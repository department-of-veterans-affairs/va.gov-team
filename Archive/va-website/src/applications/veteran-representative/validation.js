import { getFileError } from '../common/schemaform/validation';

export default function validateFile(errors, file) {
  const error = getFileError(file);

  if (error && !errors) {
    /* eslint-disable no-param-reassign */
    errors = {
      __errors: [],
      addError(msg) {
        this.__errors.push(msg);
      }
    };
    /* eslint-enable no-param-reassign */
  }

  if (error) {
    errors.addError(error);
  }
}
