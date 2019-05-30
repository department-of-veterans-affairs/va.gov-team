// import { transform } from '../helpers';
import _ from 'lodash/fp';
import fullSchemaVIC from 'vets-json-schema/dist/VIC-schema.json';

import FormFooter from '../../../platform/forms/components/FormFooter';

import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import IdentityFieldsWarning from '../components/IdentityFieldsWarning';
import asyncLoader from '../../../platform/utilities/ui/asyncLoader';
import DD214Description from '../components/DD214Description';
import PhotoDescription from '../components/PhotoDescription';
import { prefillTransformer, submit, identityMatchesPrefill } from '../helpers';

import fullNameUI from '../../common/schemaform/definitions/fullName';
import ssnUI from '../../common/schemaform/definitions/ssn';
import * as addressDefinition from '../definitions/address';
import currentOrPastDateUI from '../../common/schemaform/definitions/currentOrPastDate';
import phoneUI from '../../common/schemaform/definitions/phone';
import fileUploadUI from '../../common/schemaform/definitions/file';
import { genderLabels } from '../../../platform/static-data/labels';
import { validateMatch } from '../../common/schemaform/validation';
import validateFile from '../validation';

const {
  veteranDateOfBirth,
  veteranSocialSecurityNumber,
  veteranFullName,
  email,
  serviceBranch,
  dd214,
  photo
} = fullSchemaVIC.properties;

const {
  fullName,
  ssn,
  date,
  phone,
  gender
} = fullSchemaVIC.definitions;

const TWENTY_FIVE_MB = 26214400;
const TEN_MB = 10485760;

const formConfig = {
  urlPrefix: '/',
  submit,
  trackingPrefix: 'veteran-id-card-',
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  formId: 'VIC',
  version: 0,
  prefillEnabled: true,
  prefillTransformer,
  footerContent: FormFooter,
  savedFormMessages: {
    notFound: 'Please start over to apply for a Veteran ID Card.',
    noAuth: 'Please sign in again to continue your application for a Veteran ID Card.'
  },
  title: 'Apply for a Veteran ID Card',
  defaultDefinitions: {
    ssn,
    fullName,
    date
  },
  chapters: {
    veteranInformation: {
      title: 'Veteran Information',
      pages: {
        veteranInformation: {
          path: 'veteran-information',
          title: 'Veteran information',
          uiSchema: {
            'ui:description': IdentityFieldsWarning,
            veteranFullName: fullNameUI,
            veteranSocialSecurityNumber: ssnUI,
            gender: {
              'ui:widget': 'radio',
              'ui:title': 'Gender',
              'ui:options': {
                labels: genderLabels
              },
              'ui:errorMessages': {
                required: 'Please select the response that most closely aligns with how you identify.'
              }
            },
            veteranDateOfBirth: currentOrPastDateUI('Date of birth'),
            serviceBranch: {
              'ui:title': 'Branch of service',
              'ui:description': 'If you have more than one branch of service, choose the one you want printed on your Veteran ID Card.',
              'ui:options': {
                labels: {
                  F: 'Air Force',
                  A: 'Army',
                  C: 'Coast Guard',
                  M: 'Marine Corps',
                  N: 'Navy'
                }
              }
            }
          },
          schema: {
            type: 'object',
            required: [
              'veteranFullName',
              'veteranSocialSecurityNumber',
              'veteranDateOfBirth',
              'serviceBranch',
              'gender'
            ],
            properties: {
              veteranFullName,
              gender,
              veteranSocialSecurityNumber,
              veteranDateOfBirth,
              serviceBranch
            }
          }
        }
      }
    },
    contactInformation: {
      title: 'Contact Information',
      pages: {
        addressInformation: {
          path: 'address-information',
          title: 'Address information',
          uiSchema: {
            veteranAddress: addressDefinition.uiSchema(fullSchemaVIC, 'Please provide the address where you would like us to ship your Veteran ID Card.'),
          },
          schema: {
            type: 'object',
            required: ['veteranAddress'],
            properties: {
              veteranAddress: addressDefinition.schema(fullSchemaVIC, true),
            }
          }
        },
        contactInformation: {
          path: 'contact-information',
          title: 'Contact information',
          uiSchema: {
            email: {
              'ui:title': 'Email address'
            },
            'view:confirmEmail': {
              'ui:title': 'Re-enter email address',
              'ui:options': {
                hideOnReview: true
              }
            },
            phone: phoneUI('Phone number'),
            'ui:validations': [
              validateMatch('email', 'view:confirmEmail')
            ]
          },
          schema: {
            type: 'object',
            required: ['email', 'view:confirmEmail'],
            properties: {
              email,
              'view:confirmEmail': email,
              phone
            }
          }
        }
      }
    },
    documentUpload: {
      title: 'Document Upload',
      reviewTitle: 'Documents',
      pages: {
        photoUpload: {
          path: 'documents/photo',
          title: 'Photo upload',
          reviewTitle: 'Photo review',
          pageClass: 'photo-field-page',
          uiSchema: {
            'ui:title': 'Upload Your Photo',
            'ui:description': PhotoDescription,
            photo: _.assign(fileUploadUI('Upload a digital photo', {
              endpoint: '/v0/vic/profile_photo_attachments',
              fileTypes: [
                'png',
                'tiff',
                'tif',
                'gif',
                'jpeg',
                'jpg'
              ],
              maxSize: TEN_MB,
              showFieldLabel: false,
              createPayload: (file) => {
                const payload = new FormData();
                payload.append('profile_photo_attachment[file_data]', file, file.name);

                return payload;
              },
              parseResponse: (response, file) => {
                return {
                  name: file.name,
                  confirmationCode: response.data.attributes.guid
                };
              }
            }), {
              'ui:field': asyncLoader(() => import(/* webpackChunkName: "photo-field" */'../components/PhotoField')
                .then(m => m.default)),
              'ui:validations': [
                validateFile
              ]
            })
          },
          schema: {
            type: 'object',
            required: ['photo'],
            properties: {
              photo
            }
          }
        },
        dd214Upload: {
          path: 'documents/discharge',
          title: 'Discharge document upload',
          reviewTitle: 'Discharge document review',
          depends: form => !form.verified || !identityMatchesPrefill(form),
          uiSchema: {
            'ui:description': DD214Description,
            dd214: fileUploadUI('Upload your discharge document', {
              endpoint: '/v0/vic/supporting_documentation_attachments',
              fileTypes: [
                'pdf',
                'png',
                'jpeg',
                'jpg',
                'gif',
                'tif',
                'tiff'
              ],
              maxSize: TWENTY_FIVE_MB,
              buttonText: 'Upload Your Discharge Document',
              createPayload: (file) => {
                const payload = new FormData();
                payload.append('supporting_documentation_attachment[file_data]', file);

                return payload;
              },
              parseResponse: (response, file) => {
                return {
                  name: file.name,
                  confirmationCode: response.data.attributes.guid
                };
              }
            })
          },
          schema: {
            type: 'object',
            required: ['dd214'],
            properties: {
              dd214
            }
          }
        }
      }
    }
  }
};

export default formConfig;
