import _ from 'lodash/fp';

import fullSchema1990n from 'vets-json-schema/dist/22-1990N-schema.json';

import schoolSelectionPage, { schoolSelectionOptionsFor } from '../../pages/schoolSelection';
import applicantInformationPage from '../../../common/schemaform/pages/applicantInformation';
import FormFooter from '../../../../platform/forms/components/FormFooter';
import GetFormHelp from '../../components/GetFormHelp';
import additionalBenefitsPage from '../../pages/additionalBenefits';
import contactInformationPage from '../../pages/contactInformation';
import createDirectDepositPage from '../../pages/directDeposit';

import * as toursOfDuty from '../../definitions/toursOfDuty.jsx';

import IntroductionPage from '../components/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';

import {
  transform
} from '../helpers';

import { urlMigration } from '../../config/migrations';

const {
  payHighestRateBenefit
} = fullSchema1990n.properties;

const {
  currentlyActiveDuty,
  date
} = fullSchema1990n.definitions;

const formConfig = {
  urlPrefix: '/',
  submitUrl: '/v0/education_benefits_claims/1990n',
  trackingPrefix: 'edu-1990n-',
  formId: '22-1990N',
  version: 1,
  migrations: [urlMigration('/1990n')],
  prefillEnabled: true,
  savedFormMessages: {
    notFound: 'Please start over to apply for education benefits.',
    noAuth: 'Please sign in again to resume your application for education benefits.'
  },
  transformForSubmit: transform,
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  defaultDefinitions: {
    date
  },
  title: 'Apply for education benefits under the National Call to Service program',
  subTitle: 'Form 22-1990N',
  footerContent: FormFooter,
  getHelp: GetFormHelp,
  chapters: {
    applicantInformation: {
      title: 'Applicant Information',
      pages: {
        applicantInformation: applicantInformationPage(fullSchema1990n, {
          fields: [
            'veteranFullName',
            'veteranSocialSecurityNumber',
            'veteranDateOfBirth',
            'gender',
          ],
          required: [
            'veteranFullName',
            'veteranDateOfBirth'
          ],
          isVeteran: true
        }),
        additionalBenefits: additionalBenefitsPage(fullSchema1990n, {
          fields: [
            'civilianBenefitsAssistance',
            'civilianBenefitsSource',
            'seniorRotcScholarshipProgram'
          ]
        }),
        applicantService: {
          title: 'Applicant service',
          path: 'applicant/service',
          initialData: {
          },
          uiSchema: {
            'ui:title': 'Applicant service',
            toursOfDuty: toursOfDuty.uiSchema,
            currentlyActiveDuty: {
              yes: {
                'ui:title': 'Are you on active duty now?',
                'ui:widget': 'yesNo',
              },
              onTerminalLeave: {
                'ui:title': 'Are you on terminal leave now?',
                'ui:widget': 'yesNo',
                'ui:options': {
                  expandUnder: 'yes'
                }
              },
              nonVaAssistance: {
                'ui:title': 'Are you getting, or do you expect to get any money from the Armed Forces or public health services for any part of your coursework or training? (Including, but not limited to, Federal Tuition Assistance.)',
                'ui:widget': 'yesNo',
                'ui:options': {
                  expandUnder: 'yes'
                }
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              toursOfDuty: toursOfDuty.schema(fullSchema1990n, {
                fields: [
                  'serviceBranch',
                  'dateRange',
                  'serviceStatus'
                ],
                required: ['serviceBranch', 'dateRange.from']
              }),
              currentlyActiveDuty
            }
          }
        }
      }
    },
    benefitSelection: {
      title: 'Benefit Selection',
      pages: {
        benefitSelection: {
          path: 'benefits/selection', // other forms this is benefits/eligibility
          title: 'Benefit selection',
          uiSchema: {
            payHighestRateBenefit: {
              'ui:title': 'If during the review made by VA I am found eligible for more than one benefit, I authorize VA to pay the benefit with the highest monthly rate.'
            }
          },
          schema: {
            type: 'object',
            properties: {
              payHighestRateBenefit: _.merge(payHighestRateBenefit, {
                'default': true
              })
            }
          }
        }
      }
    },
    schoolSelection: {
      title: 'School Selection',
      pages: {
        schoolSelection: schoolSelectionPage(fullSchema1990n, schoolSelectionOptionsFor['1990n'])
      }
    },
    personalInformation: {
      title: 'Personal Information',
      pages: {
        contactInformation: contactInformationPage(fullSchema1990n),
        directDeposit: createDirectDepositPage(fullSchema1990n, {
          required: ['accountType', 'accountNumber', 'routingNumber']
        })
      }
    }
  }
};

export default formConfig;
