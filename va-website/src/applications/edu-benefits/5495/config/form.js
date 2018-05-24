import _ from 'lodash/fp';
import fullSchema5495 from 'vets-json-schema/dist/22-5495-schema.json';

import applicantInformation from '../../../common/schemaform/pages/applicantInformation';
import FormFooter from '../../../../platform/forms/components/FormFooter';
import GetFormHelp from '../../components/GetFormHelp';
import applicantServicePage from '../../pages/applicantService';
import createOldSchoolPage from '../../pages/oldSchool';
import createSchoolSelectionPage from '../../pages/schoolSelection';
import contactInformationPage from '../../pages/contactInformation';
import createDirectDepositChangePage from '../../pages/directDepositChange';

import fullNameUI from '../../../common/schemaform/definitions/fullName';

import * as personId from '../../../common/schemaform/definitions/personId';

import IntroductionPage from '../components/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';

import {
  transform
} from '../helpers';

import { urlMigration } from '../../config/migrations';

import {
  survivorBenefitsLabels
} from '../../utils/labels';

const {
  benefit,
  outstandingFelony,
  veteranFullName
} = fullSchema5495.properties;

const {
  school,
  educationType,
  date,
  fullName
} = fullSchema5495.definitions;

const formConfig = {
  urlPrefix: '/',
  submitUrl: '/v0/education_benefits_claims/5495',
  trackingPrefix: 'edu-5495-',
  formId: '22-5495',
  version: 1,
  migrations: [urlMigration('/5495')],
  prefillEnabled: true,
  savedFormMessages: {
    notFound: 'Please start over to apply for education benefits.',
    noAuth: 'Please sign in again to resume your application for education benefits.'
  },
  transformForSubmit: transform,
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  defaultDefinitions: {
    fullName,
    school,
    educationType,
    date
  },
  title: 'Update your Education Benefits',
  subTitle: 'Form 22-5495',
  footerContent: FormFooter,
  getHelp: GetFormHelp,
  chapters: {
    applicantInformation: {
      title: 'Applicant Information',
      pages: {
        applicantInformation: applicantInformation(fullSchema5495, {
          required: ['relativeFullName', 'relativeDateOfBirth'],
          fields: [
            'relativeFullName',
            'relativeDateOfBirth',
            'gender',
            'relativeSocialSecurityNumber',
            'view:noSSN',
            'relativeVaFileNumber'
          ]
        }),
        applicantService: applicantServicePage(fullSchema5495)
      }
    },
    benefitSelection: {
      title: 'Benefit Selection',
      pages: {
        benefitSelection: {
          path: 'benefits/selection', // other forms this is benefits/eligibility
          title: 'Benefit selection',
          uiSchema: {
            benefit: {
              'ui:title': 'Select the benefit under which you are applying for a change in program or place of training:',
              'ui:widget': 'radio',
              'ui:options': {
                labels: survivorBenefitsLabels
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              benefit
            }
          }
        }
      }
    },
    sponsorInformation: {
      title: 'Sponsor Information',
      pages: {
        sponsorInformation: {
          path: 'sponsor/information',
          title: 'Sponsor information',
          uiSchema: {
            veteranFullName: fullNameUI,
            'view:veteranId': _.merge(personId.uiSchema(), {
              'view:noSSN': {
                'ui:title': 'I don’t know my sponsor’s Social Security number',
              },
              veteranSocialSecurityNumber: {
                'ui:validations': [
                  (errors, fieldData, formData) => {
                    if (fieldData === formData.relativeSocialSecurityNumber) {
                      errors.addError('Your sponsor’s SSN cannot be the same as yours.');
                    }
                  }
                ]
              }
            }),
            outstandingFelony: {
              'ui:title': 'Do you or your sponsor have an outstanding felony and/or warrant?',
              'ui:widget': 'yesNo'
            }
          },
          schema: {
            type: 'object',
            properties: {
              veteranFullName,
              'view:veteranId': personId.schema(fullSchema5495),
              outstandingFelony
            }
          }
        }
      }
    },
    schoolSelection: {
      title: 'School Selection',
      pages: {
        newSchool: createSchoolSelectionPage(fullSchema5495, {
          required: ['educationType', 'name'],
          fields: [
            'educationProgram',
            'educationObjective'
          ],
          title: 'School, university, program, or training facility you want to attend'
        }),
        oldSchool: createOldSchoolPage(fullSchema5495)
      }
    },
    personalInformation: {
      title: 'Personal Information',
      pages: {
        contactInformation: contactInformationPage(fullSchema5495, 'relativeAddress'),
        directDeposit: createDirectDepositChangePage(fullSchema5495)
      }
    }
  }
};


export default formConfig;
