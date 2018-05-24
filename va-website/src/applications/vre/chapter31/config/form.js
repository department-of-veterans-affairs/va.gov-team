import _ from 'lodash/fp';

import fullSchema31 from 'vets-json-schema/dist/28-1900-schema.json';

import * as address from '../../../common/schemaform/definitions/address';
import currencyUI from '../../../common/schemaform/definitions/currency';
import phoneUI from '../../../common/schemaform/definitions/phone';
import DD214Description from '../components/DD214Description';
import IntroductionPage from '../components/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import EducationPeriodView from '../components/EducationPeriodView';

import ServicePeriodView from '../../../common/schemaform/components/ServicePeriodView';
import dateRangeUI from '../../../common/schemaform/definitions/dateRange';
import fileUploadUI from '../../../common/schemaform/definitions/file';
import yearUI from '../../../common/schemaform/definitions/year';

import FormFooter from '../../../../platform/forms/components/FormFooter';

import { disabilityRatingLabels, dischargeTypeLabels, serviceFlagLabels } from '../../utils/labels';
import createVeteranInfoPage from '../../pages/veteranInfo';
import { facilityLocatorLink } from '../helpers';
import { validateMatch } from '../../../common/schemaform/validation';
import { validateYearRange } from '../validations';

const {
  serviceFlags,
  daytimePhone,
  email,
  eveningPhone,
  employer,
  disabilityRating,
  disabilities,
  dischargeDocuments,
  jobDuties,
  monthlyIncome,
  previousPrograms,
  serviceHistory,
  vaRecordsOffice,
  yearsOfEducation
} = fullSchema31.properties;

const {
  date,
  dateRange,
  fullName,
  phone,
  requiredServiceHistory,
  ssn,
  vaFileNumber,
  year
} = fullSchema31.definitions;

const TWENTY_FIVE_MB = 26214400;

const expandIfWorking = {
  'ui:options': {
    expandUnder: 'view:isWorking',
  }
};

const formConfig = {
  urlPrefix: '/',
  // submitUrl: '/v0/vre',
  submit: () => Promise.resolve({ attributes: { confirmationNumber: '123123123' } }),
  trackingPrefix: 'vre-chapter-31',
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  formId: '28-1900',
  version: 0,
  prefillEnabled: true,
  footerContent: FormFooter,
  savedFormMessages: {
    notFound: '',
    noAuth: ''
  },
  title: 'Apply for vocational rehabilitation',
  subTitle: 'Form 28-1900',
  defaultDefinitions: {
    address,
    date,
    dateRange,
    phone,
    fullName,
    requiredServiceHistory,
    ssn,
    vaFileNumber,
    year
  },
  chapters: {
    veteranInformation: {
      title: 'Veteran Information',
      pages: {
        veteranInformation: createVeteranInfoPage(fullSchema31)
      }
    },
    militaryHistory: {
      title: 'Military History',
      pages: {
        militaryHistory: {
          path: 'military-history',
          title: 'Military History',
          uiSchema: {
            serviceHistory: {
              'ui:options': {
                itemName: 'Service Period',
                viewField: ServicePeriodView,
                hideTitle: true
              },
              items: {
                serviceBranch: {
                  'ui:title': 'Branch of service'
                },
                dateRange: dateRangeUI(
                  'Service start date',
                  'Service end date',
                  'End of service must be after start of service'
                ),
                dischargeType: {
                  'ui:title': 'Character of discharge',
                  'ui:options': {
                    labels: dischargeTypeLabels
                  }
                }
              }
            },
            serviceFlags: {
              'ui:title': 'Did you serve in:',
              'ui:options': {
                showFieldLabel: true
              },
              ww2: {
                'ui:title': serviceFlagLabels.ww2
              },
              postWw2: {
                'ui:title': serviceFlagLabels.postWw2
              },
              korea: {
                'ui:title': serviceFlagLabels.korea
              },
              postKorea: {
                'ui:title': serviceFlagLabels.postKorea
              },
              vietnam: {
                'ui:title': serviceFlagLabels.vietnam
              },
              postVietnam: {
                'ui:title': serviceFlagLabels.postVietnam
              },
              gulf: {
                'ui:title': serviceFlagLabels.gulf
              },
              operationEnduringFreedom: {
                'ui:title': serviceFlagLabels.operationEnduringFreedom
              },
              operationIraqiFreedom: {
                'ui:title': serviceFlagLabels.operationIraqiFreedom
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              serviceHistory,
              serviceFlags
            }
          }
        }
      }
    },
    workInformation: {
      title: 'Work Information',
      pages: {
        workInformation: {
          path: 'work-information',
          title: 'Work Information',
          uiSchema: {
            'view:isWorking': {
              'ui:title': 'Are you working?',
              'ui:widget': 'yesNo'
            },
            employer: _.merge({
              'ui:title': 'Employer name',
              'ui:required': (formData) => formData['view:isWorking'],
            }, expandIfWorking),
            jobDuties: _.merge({ 'ui:title': 'Job duties' }, expandIfWorking),
            monthlyIncome: _.merge(currencyUI('Monthly pay'), expandIfWorking),
            employerAddress: _.merge(address.uiSchema('Employer address'), expandIfWorking),
          },
          schema: {
            type: 'object',
            required: ['view:isWorking'],
            properties: {
              'view:isWorking': {
                type: 'boolean'
              },
              employer,
              jobDuties,
              monthlyIncome,
              employerAddress: address.schema(fullSchema31)
            }
          }
        }
      }
    },
    educationInformation: {
      title: 'Education Information',
      pages: {
        educationInformation: {
          path: 'education-information',
          title: 'Education Information',
          uiSchema: {
            yearsOfEducation: {
              'ui:title': 'Number of years of education including high school'
            },
            previousPrograms: {
              'ui:options': {
                itemName: 'Program',
                viewField: EducationPeriodView,
                hideTitle: true
              },
              'ui:title': 'List any VA or non-VA vocational rehabilitation programs you have been in.',
              items: {
                program: {
                  'ui:title': 'Name of program'
                },
                yearStarted: Object.assign({}, yearUI, {
                  'ui:title': 'Year you started the program'
                }),
                yearLeft: Object.assign({}, yearUI, {
                  'ui:title': 'Year you left the program'
                }),
                'ui:validations': [
                  validateYearRange
                ]
              }
            }
          },
          schema: {
            type: 'object',
            required: ['yearsOfEducation'],
            properties: {
              yearsOfEducation,
              previousPrograms
            }
          }
        }
      }
    },
    disabilityInformation: {
      title: 'Disability Information',
      pages: {
        disabilityInformation: {
          path: 'Disability-information',
          title: 'Disability Information',
          uiSchema: {
            type: 'object',
            disabilityRating: {
              'ui:title': 'Disability rating',
              'ui:options': {
                labels: disabilityRatingLabels
              }
            },
            disabilities: {
              'ui:title': 'Please describe your disability or disabilities:',
            },
            vaRecordsOffice: {
              'ui:title': 'VA office where your disability records are located',
              'ui:help': facilityLocatorLink
            },
            'view:inHospital': {
              'ui:title': 'Are you currently in the hospital?',
              'ui:widget': 'yesNo'
            },
            'view:hospital': {
              hospitalName: {
                'ui:title': 'Hospital name',
                'ui:options': {
                  'ui:required': (formData) => !!formData['view:inHospital']
                }
              },
              hospitalAddress: address.uiSchema('Hospital address', false, form => form['view:inHospital']),
              'ui:options': {
                expandUnder: 'view:inHospital'
              }
            },
            'ui:options': {
              updateSchema: (formData, schema) => {
                if (formData['view:inHospital']) {
                  schema.properties['view:hospital'].required = ['hospitalName']; // eslint-disable-line no-param-reassign
                } else {
                  schema.properties['view:hospital'].required = []; // eslint-disable-line no-param-reassign
                }
                return schema;
              }
            }
          },
          schema: {
            type: 'object',
            required: [
              'disabilityRating',
              'disabilities',
              'vaRecordsOffice',
              'view:inHospital'
            ],
            properties: {
              disabilityRating,
              disabilities,
              vaRecordsOffice,
              'view:inHospital': {
                type: 'boolean'
              },
              'view:hospital': {
                type: 'object',
                properties: {
                  hospitalName: {
                    type: 'string'
                  },
                  hospitalAddress: address.schema(fullSchema31)
                }
              }
            }
          }
        }
      }
    },
    contactInformation: {
      title: 'Contact Information',
      pages: {
        veteranAddress: {
          path: 'veteran-address',
          title: 'Address Information',
          uiSchema: {
            veteranAddress: address.uiSchema(''),
            'view:isMoving': {
              'ui:title': 'Are you moving within the next 30 days?',
              'ui:widget': 'yesNo'
            },
            veteranNewAddress: _.merge(
              address.uiSchema('New address', false, (formData) => formData['view:isMoving']),
              {
                'ui:options': {
                  expandUnder: 'view:isMoving'
                }
              }
            )
          },
          schema: {
            type: 'object',
            required: ['veteranAddress', 'view:isMoving'],
            properties: {
              veteranAddress: address.schema(fullSchema31, true),
              'view:isMoving': {
                type: 'boolean'
              },
              veteranNewAddress: address.schema(fullSchema31)
            }
          }
        },
        contactInformation: {
          path: 'contact-information',
          title: 'Contact Information',
          uiSchema: {
            daytimePhone: phoneUI('Daytime phone number'),
            eveningPhone: phoneUI('Evening phone number'),
            email: {
              'ui:title': 'Email address'
            },
            'view:confirmEmail': {
              'ui:title': 'Re-enter email address',
              'ui:options': {
                hideOnReview: true
              }
            },
            'ui:validations': [
              validateMatch('email', 'view:confirmEmail')
            ]
          },
          schema: {
            type: 'object',
            properties: {
              daytimePhone,
              eveningPhone,
              email,
              'view:confirmEmail': email,
            }
          }
        }
      }
    },
    documentUpload: {
      title: 'Document Upload',
      reviewTitle: 'Documents',
      pages: {
        dischargeDocumentUpload: {
          path: 'documents/discharge',
          title: 'Discharge document upload',
          reviewTitle: 'Discharge document review',
          depends: form => !form.verified,
          uiSchema: {
            'ui:description': DD214Description,
            dischargeDocuments: fileUploadUI('Upload your discharge document', {
              fileTypes: [
                'pdf',
                'jpeg',
                'jpg'
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
            // TODO: this should be required once the endpoint is set up
            properties: {
              dischargeDocuments
            }
          }
        }
      }
    }
  }
};

export default formConfig;
