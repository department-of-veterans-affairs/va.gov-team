import _ from 'lodash/fp';

import FileField from '../fields/FileField';
import { validateFileField } from '../validation';

export default function fileUiSchema(label, userOptions = {}) {
  return {
    'ui:title': label,
    'ui:field': FileField,
    'ui:options': _.assign({
      fileTypes: ['pdf', 'jpg', 'jpeg', 'png'],
      maxSize: 20971520,
      minSize: 1024,
      createPayload: (file, formId) => {
        const payload = new FormData();
        payload.append('file', file);
        payload.append('form_id', formId);

        return payload;
      },
      parseResponse: (fileInfo) => {
        return {
          name: fileInfo.data.attributes.name,
          size: fileInfo.data.attributes.size,
          confirmationCode: fileInfo.data.attributes.confirmationCode
        };
      },
      endpoint: '/v0/claim_attachments',
      addAnotherLabel: 'Add Another',
      showFieldLabel: true,
      keepInPageOnReview: true,
      classNames: 'schemaform-file-upload'
    }, userOptions),
    'ui:errorMessages': {
      required: 'You must upload a file',
      minItems: 'You must upload a file'
    },
    'ui:validations': [
      validateFileField
    ]
  };
}

// An example schema so we don’t forget it for now
export const fileSchema = {
  type: 'array',
  minItems: 1,
  items: {
    type: 'object',
    properties: {
      fileName: {
        type: 'string'
      },
      fileSize: {
        type: 'integer'
      },
      confirmationNumber: {
        type: 'string'
      },
      errorMessage: {
        type: 'string'
      },
      uploading: {
        type: 'boolean'
      }
    }
  }
};
