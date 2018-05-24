import _ from 'lodash/fp';

import fullSchema1990e from 'vets-json-schema/dist/22-1990E-schema.json';

import additionalBenefits from '../../pages/additionalBenefits';
import applicantInformation from '../../../common/schemaform/pages/applicantInformation';
import FormFooter from '../../../../platform/forms/components/FormFooter';
import GetFormHelp from '../../components/GetFormHelp';
import createContactInformationPage from '../../pages/contactInformation';
import createSchoolSelectionPage, { schoolSelectionOptionsFor } from '../../pages/schoolSelection';
import createDirectDepositPage from '../../pages/directDeposit';
import employmentHistoryPage from '../../pages/employmentHistory';

import * as address from '../../../common/schemaform/definitions/address';
import fullNameUISchema from '../../../common/schemaform/definitions/fullName';
import monthYearUI from '../../../common/schemaform/definitions/monthYear';
import postHighSchoolTrainingsUi from '../../definitions/postHighSchoolTrainings';
import * as personId from '../../../common/schemaform/definitions/personId';

import IntroductionPage from '../components/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';

import {
  transform,
  eligibilityDescription,
  benefitsLabels
} from '../helpers';

import { urlMigration } from '../../config/migrations';

const {
  benefit,
  faaFlightCertificatesInformation,
  serviceBranch
} = fullSchema1990e.properties;

const {
  date,
  dateRange,
  educationType,
  fullName,
  postHighSchoolTrainings
} = fullSchema1990e.definitions;

const formConfig = {
  urlPrefix: '/',
  submitUrl: '/v0/education_benefits_claims/1990e',
  trackingPrefix: 'edu-1990e-',
  formId: '22-1990E',
  version: 1,
  migrations: [urlMigration('/1990e')],
  prefillEnabled: true,
  savedFormMessages: {
    notFound: 'Please start over to apply to use transferred education benefits.',
    noAuth: 'Please sign in again to resume your application for transferred education benefits.'
  },
  transformForSubmit: transform,
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  defaultDefinitions: {
    date,
    dateRange,
    educationType
  },
  title: 'Apply to use transferred education benefits',
  subTitle: 'Form 22-1990E',
  footerContent: FormFooter,
  getHelp: GetFormHelp,
  chapters: {
    applicantInformation: {
      title: 'Applicant Information',
      pages: {
        applicantInformation: applicantInformation(fullSchema1990e),
        additionalBenefits: additionalBenefits(fullSchema1990e)
      }
    },
    benefitEligibility: {
      title: 'Benefits Eligibility',
      pages: {
        benefitEligibility: {
          path: 'benefits/eligibility',
          title: 'Benefits eligibility',
          uiSchema: {
            'ui:description': eligibilityDescription,
            benefit: {
              'ui:widget': 'radio',
              'ui:title': 'Select the benefit that has been transferred to you.',
              'ui:options': {
                labels: benefitsLabels
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
    sponsorVeteran: {
      title: 'Sponsor Information',
      pages: {
        sponsorVeteran: {
          title: 'Sponsor information',
          path: 'sponsor/information',
          uiSchema: {
            veteranFullName: _.merge(fullNameUISchema, {
              first: {
                'ui:title': 'Sponsor first name'
              },
              last: {
                'ui:title': 'Sponsor last name'
              },
              middle: {
                'ui:title': 'Sponsor middle name'
              },
              suffix: {
                'ui:title': 'Sponsor suffix',
              }
            }),
            'view:veteranId': _.merge(personId.uiSchema(), {
              veteranSocialSecurityNumber: {
                'ui:title': 'Sponsor Social Security number'
              },
              'view:noSSN': {
                'ui:title': 'I don’t know my sponsor’s Social Security number',
              },
              vaFileNumber: {
                'ui:title': 'Sponsor file number',
              }
            }),
            veteranAddress: address.uiSchema('Sponsor address'),
            serviceBranch: {
              'ui:title': 'Sponsor Branch of Service'
            }
          },
          schema: {
            type: 'object',
            required: ['veteranFullName'],
            properties: {
              veteranFullName: fullName,
              'view:veteranId': personId.schema(fullSchema1990e),
              veteranAddress: address.schema(fullSchema1990e),
              serviceBranch
            }
          }
        }
      }
    },
    educationHistory: {
      title: 'Education History',
      pages: {
        educationHistory: {
          path: 'education/history',
          title: 'Education history',
          initialData: {
          },
          uiSchema: {
            highSchoolOrGedCompletionDate: monthYearUI('When did you earn your high school diploma or equivalency certificate?'),
            postHighSchoolTrainings: postHighSchoolTrainingsUi,
            faaFlightCertificatesInformation: {
              'ui:title': 'If you have any FAA flight certificates, please list them here.',
              'ui:widget': 'textarea'
            }
          },
          schema: {
            type: 'object',
            properties: {
              highSchoolOrGedCompletionDate: date,
              postHighSchoolTrainings,
              faaFlightCertificatesInformation
            }
          }
        }
      }
    },
    employmentHistory: {
      title: 'Employment History',
      pages: {
        employmentHistory: employmentHistoryPage(fullSchema1990e, false)
      }
    },
    schoolSelection: {
      title: 'School Selection',
      pages: {
        schoolSelection: createSchoolSelectionPage(fullSchema1990e, schoolSelectionOptionsFor['1990e'])
      }
    },
    personalInformation: {
      title: 'Personal Information',
      pages: {
        contactInformation: createContactInformationPage(fullSchema1990e, 'relativeAddress'),
        directDeposit: createDirectDepositPage(fullSchema1990e)
      }
    }
  }
};

export default formConfig;
