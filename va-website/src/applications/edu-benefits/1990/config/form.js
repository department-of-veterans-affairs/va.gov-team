import _ from 'lodash/fp';
import moment from 'moment';

import fullSchema1990 from 'vets-json-schema/dist/22-1990-schema.json';
import contactInformationPage from '../../pages/contactInformation';
import applicantInformation from '../../../common/schemaform/pages/applicantInformation';
import GetFormHelp from '../../components/GetFormHelp';
import createSchoolSelectionPage from '../../pages/schoolSelection';
import dateRangeUI from '../../../common/schemaform/definitions/dateRange';
import { schema as addressSchema, uiSchema as addressUI } from '../../../common/schemaform/definitions/address';
import phoneUI from '../../../common/schemaform/definitions/phone';
import FormFooter from '../../../../platform/forms/components/FormFooter';

import seniorRotcUI from '../../definitions/seniorRotc';
import employmentHistoryPage from '../../pages/employmentHistory';
import createDirectDepositPage from '../../pages/directDeposit';

import postHighSchoolTrainingsUI from '../../definitions/postHighSchoolTrainings';
import currentOrPastMonthYearUI from '../../../common/schemaform/definitions/currentOrPastMonthYear';
import yearUI from '../../../common/schemaform/definitions/year';
import * as toursOfDuty from '../../definitions/toursOfDuty';
import serviceBefore1977UI from '../../definitions/serviceBefore1977';
import IntroductionPage from '../components/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';

import BenefitsRelinquishmentField from '../BenefitsRelinquishmentField';

import { validateBooleanGroup } from '../../../common/schemaform/validation';
import dateUI from '../../../common/schemaform/definitions/date';

import {
  transform,
  benefitsEligibilityBox,
  benefitsRelinquishmentWarning,
  benefitsRelinquishmentLabels,
  benefitsRelinquishedDescription,
  directDepositDescription,
  reserveKickerWarning
} from '../helpers';

import { urlMigration } from '../../config/migrations';

import {
  hasServiceBefore1977
} from '../../utils/helpers.jsx';

import {
  benefitsLabels
} from '../../utils/labels';

const {
  chapter33,
  chapter30,
  chapter1606,
  chapter32,
  seniorRotcScholarshipProgram,
  seniorRotc,
  civilianBenefitsAssistance,
  additionalContributions,
  activeDutyKicker,
  reserveKicker,
  benefitsRelinquished,
  benefitsRelinquishedDate,
  faaFlightCertificatesInformation,
  highSchoolOrGedCompletionDate,
  serviceAcademyGraduationYear,
  secondaryContact
} = fullSchema1990.properties;


const {
  postHighSchoolTrainings,
  date,
  dateRange,
  year,
  currentlyActiveDuty,
  address,
  phone,
  serviceBefore1977
} = fullSchema1990.definitions;

const formConfig = {
  urlPrefix: '/',
  submitUrl: '/v0/education_benefits_claims/1990',
  trackingPrefix: 'edu-',
  formId: '22-1990',
  version: 1,
  migrations: [urlMigration('/1990')],
  savedFormMessages: {
    notFound: 'Please start over to apply for education benefits.',
    noAuth: 'Please sign in again to resume your application for education benefits.'
  },
  prefillEnabled: true,
  transformForSubmit: transform,
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  defaultDefinitions: {
    date,
    dateRange,
    year,
    address,
    phone,
    serviceBefore1977
  },
  title: 'Apply for education benefits',
  subTitle: 'Form 22-1990',
  footerContent: FormFooter,
  getHelp: GetFormHelp,
  chapters: {
    applicantInformation: {
      title: 'Applicant Information',
      pages: {
        applicantInformation: _.merge(applicantInformation(fullSchema1990, {
          isVeteran: true,
          fields: [
            'veteranFullName',
            'veteranSocialSecurityNumber',
            'veteranDateOfBirth',
            'gender'
          ],
          required: [
            'veteranFullName',
            'veteranSocialSecurityNumber',
            'veteranDateOfBirth',
          ]
        }), {
          uiSchema: {
            veteranDateOfBirth: {
              'ui:validations': [
                (errors, dob) => {
                  // If we have a complete date, check to make sure it’s a valid dob
                  if (/\d{4}-\d{2}-\d{2}/.test(dob) && moment(dob).isAfter(moment().endOf('day').subtract(17, 'years'))) {
                    errors.addError('You must be at least 17 to apply');
                  }
                }
              ]
            }
          }
        })
      }
    },
    benefitsEligibility: {
      title: 'Benefits Eligibility',
      pages: {
        benefitsEligibility: {
          title: 'Benefits eligibility',
          path: 'benefits-eligibility/benefits-selection',
          uiSchema: {
            'ui:description': benefitsEligibilityBox,
            'view:selectedBenefits': {
              'ui:title': 'Select the benefit that is the best match for you.',
              'ui:validations': [
                validateBooleanGroup
              ],
              'ui:errorMessages': {
                atLeastOne: 'Please select at least one benefit'
              },
              'ui:options': {
                showFieldLabel: true
              },
              chapter33: {
                'ui:title': benefitsLabels.chapter33,
                'ui:options': {
                  expandUnderClassNames: 'schemaform-expandUnder-indent',
                }
              },
              'view:chapter33ExpandedContent': {
                'ui:description': 'When you choose to apply for your Post-9/11 benefit, you have to relinquish (give up) 1 other benefit you may be eligible for. You’ll make this decision on the next page.',
                'ui:options': {
                  expandUnder: 'chapter33',
                }
              },
              chapter30: {
                'ui:title': benefitsLabels.chapter30
              },
              chapter1606: {
                'ui:title': benefitsLabels.chapter1606
              },
              chapter32: {
                'ui:title': benefitsLabels.chapter32
              }
            }
          },
          schema: {
            type: 'object',
            required: ['view:selectedBenefits'],
            properties: {
              'view:selectedBenefits': {
                type: 'object',
                properties: {
                  chapter33,
                  'view:chapter33ExpandedContent': {
                    type: 'object',
                    properties: {}
                  },
                  chapter30,
                  chapter1606,
                  chapter32
                }
              }
            }
          }
        },
        benefitsRelinquishment: {
          title: 'Benefits relinquishment',
          path: 'benefits-eligibility/benefits-relinquishment',
          depends: (formData) => formData['view:selectedBenefits'].chapter33,
          initialData: {
            'view:benefitsRelinquishedContainer': {
              benefitsRelinquishedDate: moment().format('YYYY-MM-DD')
            }
          },
          uiSchema: {
            'ui:title': 'Benefits relinquishment',
            'ui:description': benefitsRelinquishmentWarning,
            'view:benefitsRelinquishedContainer': {
              'ui:field': BenefitsRelinquishmentField,
              benefitsRelinquished: {
                'ui:title': 'I choose to give up:',
                'ui:widget': 'radio',
                'ui:options': {
                  labels: benefitsRelinquishmentLabels,
                }
              },
              benefitsRelinquishedDate: _.merge(dateUI('Effective date'), {
                'ui:required': (formData) => _.get('view:benefitsRelinquishedContainer.benefitsRelinquished', formData) !== 'unknown'
              })
            },
            'view:questionText': {
              'ui:description': benefitsRelinquishedDescription
            }
          },
          schema: {
            type: 'object',
            properties: {
              'view:benefitsRelinquishedContainer': {
                type: 'object',
                required: ['benefitsRelinquished'],
                properties: {
                  benefitsRelinquished,
                  benefitsRelinquishedDate
                }
              },
              'view:questionText': {
                type: 'object',
                properties: {}
              }
            }
          }
        }
      }
    },
    militaryHistory: {
      title: 'Military History',
      pages: {
        servicePeriods: {
          title: 'Service periods',
          path: 'military-history/service-periods',
          uiSchema: {
            'ui:title': 'Service periods',
            toursOfDuty: _.merge(toursOfDuty.uiSchema, {
              'ui:title': null,
              'ui:description': 'Please record all your periods of service.'
            })
          },
          schema: {
            type: 'object',
            properties: {
              toursOfDuty: toursOfDuty.schema(fullSchema1990, {
                required: ['serviceBranch', 'dateRange.from'],
                fields: ['serviceBranch', 'serviceStatus', 'dateRange', 'applyPeriodToSelected', 'benefitsToApplyTo', 'view:disclaimer']
              })
            }
          }
        },
        militaryService: {
          title: 'Military service',
          path: 'military-history/military-service',
          uiSchema: {
            serviceAcademyGraduationYear: _.assign(yearUI, {
              'ui:title': 'If you received a commission from a military service academy, what year did you graduate?'
            }),
            currentlyActiveDuty: {
              yes: {
                'ui:title': 'Are you on active duty now?',
                'ui:widget': 'yesNo'
              },
              onTerminalLeave: {
                'ui:title': 'Are you on terminal leave now?',
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
              serviceAcademyGraduationYear,
              currentlyActiveDuty: {
                type: 'object',
                properties: {
                  yes: currentlyActiveDuty.properties.yes,
                  onTerminalLeave: currentlyActiveDuty.properties.onTerminalLeave
                }
              }
            }
          }
        },
        rotcHistory: {
          title: 'ROTC history',
          path: 'military-history/rotc-history',
          uiSchema: {
            'ui:title': 'ROTC history',
            seniorRotcScholarshipProgram: {
              'ui:title': 'Are you in a senior ROTC scholarship program right now that pays your tuition, fees, books, and supplies? (Covered under Section 2107 of Title 10, U.S. Code)',
              'ui:widget': 'yesNo'
            },
            'view:seniorRotc': {
              'ui:title': 'Were you commissioned as a result of senior ROTC?',
              'ui:widget': 'yesNo'
            },
            seniorRotc: {
              commissionYear: _.merge(yearUI, {
                'ui:title': 'Year of commission:'
              }),
              rotcScholarshipAmounts: seniorRotcUI,
              'ui:options': {
                expandUnder: 'view:seniorRotc'
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              seniorRotcScholarshipProgram,
              'view:seniorRotc': {
                type: 'boolean'
              },
              seniorRotc: _.unset('required', seniorRotc)
            }
          }
        },
        contributions: {
          title: 'Contributions',
          path: 'military-history/contributions',
          uiSchema: {
            'ui:title': 'Contributions',
            'ui:description': 'Select all that apply:',
            civilianBenefitsAssistance: {
              'ui:title': 'I am receiving benefits from the U.S. Government as a civilian employee during the same time as I am seeking benefits from VA.'
            },
            additionalContributions: {
              'ui:title': 'I made contributions (up to $600) to increase the amount of my monthly benefits.'
            },
            activeDutyKicker: {
              'ui:title': 'I qualify for an Active Duty Kicker (sometimes called a college fund).'
            },
            reserveKicker: {
              'ui:title': 'I qualify for a Reserve Kicker (sometimes called a college fund).'
            },
            'view:reserveKickerWarning': {
              'ui:description': reserveKickerWarning,
              'ui:options': {
                expandUnder: 'reserveKicker',
                hideIf: (data) => _.get('view:benefitsRelinquishedContainer.benefitsRelinquished', data) !== 'chapter30'
              }
            },
            'view:activeDutyRepayingPeriod': {
              'ui:title': 'I have a period of service that the Department of Defense counts toward an education loan payment.',
              'ui:options': {
                expandUnderClassNames: 'schemaform-expandUnder-indent'
              }
            },
            activeDutyRepayingPeriod: _.merge({
              'ui:options': {
                expandUnder: 'view:activeDutyRepayingPeriod'
              },
              to: {
                'ui:required': formData => formData['view:activeDutyRepayingPeriod']
              },
              from: {
                'ui:required': formData => formData['view:activeDutyRepayingPeriod']
              }
            }, dateRangeUI('Start date', 'End date'))
          },
          schema: {
            type: 'object',
            properties: {
              civilianBenefitsAssistance,
              additionalContributions,
              activeDutyKicker,
              reserveKicker,
              'view:reserveKickerWarning': {
                type: 'object',
                properties: {}
              },
              'view:activeDutyRepayingPeriod': {
                type: 'boolean'
              },
              activeDutyRepayingPeriod: dateRange
            }
          }
        }
      }
    },
    educationHistory: {
      title: 'Education History',
      pages: {
        educationHistory: {
          title: 'Education history',
          // There’s only one page in this chapter (right?), so this url seems a
          //  bit heavy-handed.
          path: 'education-history/education-information',
          uiSchema: {
            highSchoolOrGedCompletionDate: currentOrPastMonthYearUI('When did you earn your high school diploma or equivalency certificate?'),
            postHighSchoolTrainings: postHighSchoolTrainingsUI,
            faaFlightCertificatesInformation: {
              'ui:title': 'If you have any FAA flight certificates, please list them here.',
              'ui:widget': 'textarea'
            }
          },
          schema: {
            type: 'object',
            properties: {
              highSchoolOrGedCompletionDate,
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
        employmentHistory: _.merge(employmentHistoryPage(fullSchema1990), {
          path: 'employment-history/employment-information'
        })
      }
    },
    schoolSelection: {
      title: 'School Selection',
      pages: {
        schoolSelection: _.merge(createSchoolSelectionPage(fullSchema1990, {
          fields: [
            'educationProgram',
            'educationObjective',
            'educationStartDate',
            'currentlyActiveDuty'
          ],
          required: ['educationType']
        }), {
          path: 'school-selection/school-information'
        })
      }
    },
    personalInformation: {
      title: 'Personal Information',
      pages: {
        contactInformation: _.merge(contactInformationPage(fullSchema1990), {
          uiSchema: {
            'ui:title': 'Contact information'
          }
        }),
        secondaryContact: {
          title: 'Secondary contact',
          path: 'personal-information/secondary-contact',
          uiSchema: {
            'ui:title': 'Secondary contact',
            'ui:description': 'This person should know where you can be reached at all times.',
            secondaryContact: {
              fullName: {
                'ui:title': 'Name'
              },
              phone: phoneUI('Telephone number'),
              'view:address': {
                'ui:title': 'Address',
                sameAddress: {
                  'ui:title': 'Address for secondary contact is the same as mine'
                },
                address: _.merge(addressUI('', false), {
                  'ui:options': {
                    hideIf: formData => formData.secondaryContact && formData.secondaryContact['view:address'].sameAddress
                  }
                })
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              secondaryContact: {
                type: 'object',
                properties: {
                  fullName: secondaryContact.properties.fullName,
                  phone,
                  'view:address': {
                    type: 'object',
                    properties: {
                      sameAddress: secondaryContact.properties.sameAddress,
                      address: addressSchema(fullSchema1990)
                    }
                  }
                }
              }
            }
          }
        },
        dependents: {
          title: 'Dependent information',
          path: 'personal-information/dependents',
          depends: hasServiceBefore1977,
          uiSchema: {
            'ui:title': 'Dependents',
            serviceBefore1977: serviceBefore1977UI
          },
          schema: {
            type: 'object',
            properties: {
              serviceBefore1977
            }
          }
        },
        directDeposit: _.merge(createDirectDepositPage(fullSchema1990), {
          uiSchema: {
            'ui:description': directDepositDescription
          }
        })
      }
    }
  }
};

export default formConfig;
