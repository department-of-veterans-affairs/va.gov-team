import _ from 'lodash/fp';
import moment from 'moment';
import { createSelector } from 'reselect';

import fullSchemaPensions from 'vets-json-schema/dist/21P-527EZ-schema.json';
import { isFullDate } from '../../../platform/forms/validations';
import FormFooter from '../../../platform/forms/components/FormFooter';
import GetFormHelp from '../../../platform/forms/components/GetPensionOrBurialFormHelp';

import * as address from '../../common/schemaform/definitions/address';
import bankAccountUI from '../../common/schemaform/definitions/bankAccount';
import applicantDescription from '../../common/schemaform/components/ApplicantDescription';

import {
  employmentDescription,
  getSpouseMarriageTitle,
  getMarriageTitleWithCurrent,
  spouseContribution,
  fileHelp,
  directDepositWarning,
  isMarried,
  uploadMessage,
  dependentsMinItem,
  wartimeWarning,
  servedDuringWartime,
  disabilityDocs,
  schoolAttendanceWarning,
  marriageWarning,
  fdcWarning,
  noFDCWarning,
  expeditedProcessDescription,
  aidAttendanceEvidence,
  dependentWarning,
  expectedIncomeDescription,
  spouseExpectedIncomeDescription,
  submit,
  dependentExpectedIncomeDescription
} from '../helpers';
import IntroductionPage from '../components/IntroductionPage';
import DisabilityField from '../components/DisabilityField';
import MedicalCenterField from '../components/MedicalCenterField';
import SpouseMarriageTitle from '../components/SpouseMarriageTitle';
import ConfirmationPage from '../containers/ConfirmationPage';
import FullNameField from '../../common/schemaform/fields/FullNameField';
import DependentField from '../components/DependentField';
import EmploymentField from '../components/EmploymentField';
import ServicePeriodView from '../components/ServicePeriodView';
import FinancialDisclosureDescription from '../components/FinancialDisclosureDescription';
import createHouseholdMemberTitle from '../components/DisclosureTitle';
import netWorthUI from '../definitions/netWorth';
import monthlyIncomeUI from '../definitions/monthlyIncome';
import expectedIncomeUI from '../definitions/expectedIncome';
import { additionalSourcesSchema } from '../definitions/additionalSources';
import currentOrPastDateUI from '../../common/schemaform/definitions/currentOrPastDate';
import phoneUI from '../../common/schemaform/definitions/phone';
import fullNameUI from '../../common/schemaform/definitions/fullName';
import dateRangeUI from '../../common/schemaform/definitions/dateRange';
import ArrayCountWidget from '../../common/schemaform/widgets/ArrayCountWidget';
import ssnUI from '../../common/schemaform/definitions/ssn';
import fileUploadUI from '../../common/schemaform/definitions/file';
import createNonRequiredFullName from '../../common/schemaform/definitions/nonRequiredFullName';
import otherExpensesUI from '../definitions/otherExpenses';
import currencyUI from '../../common/schemaform/definitions/currency';

import { validateServiceBirthDates, validateAfterMarriageDate } from '../validation';
import migrations from '../migrations';

const {
  nationalGuardActivation,
  nationalGuard,
  disabilities,
  previousNames,
  combatSince911,
  jobs,
  placeOfSeparation,
  powDateRange,
  severancePay,
  spouseDateOfBirth,
  spouseSocialSecurityNumber,
  spouseVaFileNumber,
  liveWithSpouse,
  reasonForNotLivingWithSpouse,
  spouseIsVeteran,
  monthlySpousePayment,
  dependents,
  email,
  altEmail,
  dayPhone,
  nightPhone,
  mobilePhone,
  veteranFullName,
  veteranDateOfBirth,
  veteranSocialSecurityNumber,
  vamcTreatmentCenters,
  noRapidProcessing
} = fullSchemaPensions.properties;

const {
  fullName,
  usaPhone,
  dateRange,
  date,
  monthlyIncome,
  netWorth,
  maritalStatus,
  marriages,
  expectedIncome,
  ssn,
  vaFileNumber,
  files,
  otherExpenses,
  bankAccount
} = fullSchemaPensions.definitions;

const nonRequiredFullName = createNonRequiredFullName(fullName);

function isUnder65(formData) {
  return moment().startOf('day').subtract(65, 'years')
    .isBefore(formData.veteranDateOfBirth);
}

function isBetween18And23(childDOB) {
  return moment(childDOB).isBetween(moment().startOf('day').subtract(23, 'years'), moment().startOf('day').subtract(18, 'years'));
}

// Checks to see if they’re under 17.75 years old
function isEligibleForDisabilitySupport(childDOB) {
  return moment().startOf('day').subtract(17, 'years').subtract(9, 'months')
    .isBefore(childDOB);
}

function isCurrentMarriage(form, index) {
  const numMarriages = form && form.marriages ? form.marriages.length : 0;
  return isMarried(form) && numMarriages - 1 === index;
}

function usingDirectDeposit(formData) {
  return formData['view:noDirectDeposit'] !== true;
}

const marriageProperties = marriages.items.properties;

const marriageType = _.assign(marriageProperties.marriageType, {
  'enum': [
    'Ceremonial',
    'Common-law',
    'Proxy',
    'Tribal',
    'Other'
  ]
});

const reasonForSeparation = _.assign(marriageProperties.reasonForSeparation, {
  'enum': [
    'Widowed',
    'Divorced'
  ]
});

function createSpouseLabelSelector(nameTemplate) {
  return createSelector(form => {
    return (form.marriages && form.marriages.length)
      ? form.marriages[form.marriages.length - 1].spouseFullName
      : null;
  }, spouseFullName => {
    if (spouseFullName) {
      return {
        title: nameTemplate(spouseFullName)
      };
    }

    return {
      title: null
    };
  });
}

const formConfig = {
  urlPrefix: '/',
  submit,
  trackingPrefix: 'pensions-527EZ-',
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  formId: '21P-527EZ',
  version: 1,
  migrations,
  prefillEnabled: true,
  savedFormMessages: {
    notFound: 'Please start over to apply for pension benefits.',
    noAuth: 'Please sign in again to resume your application for pension benefits.'
  },
  title: 'Apply for pension benefits',
  subTitle: 'Form 21P-527EZ',
  footerContent: FormFooter,
  getHelp: GetFormHelp,
  defaultDefinitions: {
    address: address.schema(fullSchemaPensions),
    additionalSources: additionalSourcesSchema(fullSchemaPensions),
    date,
    dateRange,
    usaPhone,
    fullName,
    ssn,
    vaFileNumber,
    monthlyIncome,
    expectedIncome,
    netWorth
  },
  chapters: {
    applicantInformation: {
      title: 'Applicant Information',
      pages: {
        applicantInformation: {
          path: 'applicant/information',
          title: 'Applicant information',
          uiSchema: {
            'ui:description': applicantDescription,
            veteranFullName: fullNameUI,
            veteranSocialSecurityNumber: _.assign(ssnUI, {
              'ui:title': 'Social Security number (must have this or a VA file number)',
              'ui:required': form => !form.vaFileNumber,
            }),
            vaFileNumber: {
              'ui:title': 'VA file number (must have this or a Social Security number)',
              'ui:required': form => !form.veteranSocialSecurityNumber,
              'ui:options': {
                widgetClassNames: 'usa-input-medium'
              },
              'ui:errorMessages': {
                pattern: 'Your VA file number must be between 7 to 9 digits'
              }
            },
            veteranDateOfBirth: currentOrPastDateUI('Date of birth')
          },
          schema: {
            type: 'object',
            required: ['veteranFullName', 'veteranDateOfBirth'],
            properties: {
              veteranFullName,
              veteranSocialSecurityNumber,
              vaFileNumber,
              veteranDateOfBirth
            }
          }
        }
      }
    },
    militaryHistory: {
      title: 'Military History',
      pages: {
        servicePeriods: {
          path: 'military/history',
          title: 'Service Periods',
          uiSchema: {
            'ui:title': 'Service periods',
            servicePeriods: {
              'ui:options': {
                itemName: 'Service Period',
                viewField: ServicePeriodView,
                reviewTitle: 'Service periods'
              },
              items: {
                serviceBranch: {
                  'ui:title': 'Branch of service'
                },
                activeServiceDateRange: dateRangeUI(
                  'Service start date',
                  'Service end date',
                  'Date entered service must be before date left service'
                ),
                'ui:validations': [
                  validateServiceBirthDates
                ]
              }
            },
            'view:wartimeWarning': (() => {
              const hideWartimeWarning = createSelector(
                form => form.servicePeriods,
                (periods) => {
                  const completePeriods = (periods || []).filter(period => {
                    return period.activeServiceDateRange &&
                      isFullDate(period.activeServiceDateRange.to) &&
                      isFullDate(period.activeServiceDateRange.from);
                  });
                  if (!completePeriods.length) {
                    return true;
                  }
                  return completePeriods.some(period => {
                    return servedDuringWartime(period.activeServiceDateRange);
                  });
                }
              );

              return {
                'ui:description': wartimeWarning,
                'ui:options': {
                  hideIf: hideWartimeWarning
                }
              };
            })()
          },
          schema: {
            type: 'object',
            properties: {
              servicePeriods: {
                type: 'array',
                minItems: 1,
                items: {
                  type: 'object',
                  required: ['serviceBranch', 'activeServiceDateRange'],
                  properties: {
                    serviceBranch: {
                      type: 'string'
                    },
                    activeServiceDateRange: _.assign(dateRange, {
                      required: ['from', 'to']
                    })
                  }
                }
              },
              'view:wartimeWarning': {
                type: 'object',
                properties: {}
              }
            }
          }
        },
        general: {
          path: 'military/general',
          title: 'General History',
          uiSchema: {
            'view:serveUnderOtherNames': {
              'ui:title': 'Did you serve under another name?',
              'ui:widget': 'yesNo'
            },
            previousNames: {
              'ui:options': {
                itemName: 'Name',
                expandUnder: 'view:serveUnderOtherNames',
                viewField: FullNameField,
                reviewTitle: 'Previous names'
              },
              items: fullNameUI
            },
            placeOfSeparation: {
              'ui:title': 'Place of last or anticipated separation (city and state or foreign country)'
            },
            combatSince911: (() => {
              const rangeExcludes911 = createSelector(
                form => form.servicePeriods,
                (periods) => {
                  return (periods || []).every(period => {
                    return !period.activeServiceDateRange ||
                      !isFullDate(period.activeServiceDateRange.to) ||
                      !moment('2001-09-11').isBefore(period.activeServiceDateRange.to);
                  });
                }
              );

              return {
                'ui:title': 'Did you serve in a combat zone after 9/11/2001?',
                'ui:widget': 'yesNo',
                'ui:required': formData => !rangeExcludes911(formData),
                'ui:options': {
                  hideIf: rangeExcludes911
                }
              };
            })()
          },
          schema: {
            type: 'object',
            required: ['view:serveUnderOtherNames'],
            properties: {
              'view:serveUnderOtherNames': {
                type: 'boolean'
              },
              previousNames: _.assign(previousNames, {
                minItems: 1
              }),
              placeOfSeparation,
              combatSince911
            }
          }
        },
        reserveAndNationalGuard: {
          path: 'military/reserve-national-guard',
          title: 'Reserve and National Guard',
          uiSchema: {
            'ui:title': 'Reserve and National Guard',
            nationalGuardActivation: {
              'ui:title': 'Are you currently on federal active duty in the National Guard?',
              'ui:widget': 'yesNo'
            },
            nationalGuard: {
              'ui:options': {
                expandUnder: 'nationalGuardActivation',
              },
              name: {
                'ui:title': 'Name of Reserve/National Guard unit',
                'ui:required': form => form.nationalGuardActivation === true
              },
              address: _.merge(address.uiSchema('Unit address', false, false, true), {
                state: {
                  'ui:required': form => form.nationalGuardActivation === true
                }
              }),
              phone: phoneUI('Unit phone number'),
              date: currentOrPastDateUI('Service activation date')
            }
          },
          schema: {
            type: 'object',
            required: ['nationalGuardActivation'],
            properties: {
              nationalGuardActivation,
              nationalGuard: _.set('properties.address', address.schema(fullSchemaPensions), nationalGuard)
            }
          }
        },
        powAndSeverance: {
          path: 'military/pow-severance',
          title: 'POW Status & Severance Pay',
          uiSchema: {
            'ui:title': 'POW Status & Severance Pay',
            'ui:order': ['view:powStatus', 'powDateRange', 'view:receivedSeverancePay', 'severancePay'],
            'view:powStatus': {
              'ui:title': 'Have you ever been a POW?',
              'ui:widget': 'yesNo'
            },
            powDateRange: _.set('ui:options.expandUnder', 'view:powStatus', dateRangeUI(
              'Start of confinement',
              'End of confinement',
              'Confinement start date must be before end date'
            )),
            'view:receivedSeverancePay': {
              'ui:title': 'Have you received any type of severance or separation pay?',
              'ui:widget': 'yesNo'
            },
            severancePay: {
              'ui:order': [
                'type',
                'amount'
              ],
              'ui:options': {
                expandUnder: 'view:receivedSeverancePay'
              },
              amount: currencyUI('Amount'),
              type: {
                'ui:title': 'Pay Type',
                'ui:widget': 'radio',
                'ui:options': {
                  labels: {
                    PDRL: 'Permanent Disability Retirement List (PDRL)',
                    TDRL: 'Temporary Disability Retirement List (TDRL)'
                  }
                }
              }
            }
          },
          schema: {
            type: 'object',
            required: ['view:powStatus', 'view:receivedSeverancePay'],
            properties: {
              'view:powStatus': {
                type: 'boolean'
              },
              powDateRange,
              'view:receivedSeverancePay': {
                type: 'boolean'
              },
              severancePay
            }
          }
        }
      }
    },
    workHistory: {
      title: 'Work history',
      pages: {
        disabilityHistory: {
          title: 'Disability history',
          path: 'disability/history',
          depends: isUnder65,
          uiSchema: {
            disabilities: {
              'ui:title': 'What disabilities prevent you from working?',
              'ui:order': ['name', 'disabilityStartDate'],
              'ui:options': {
                viewField: DisabilityField,
                reviewTitle: 'Disability history',
                itemName: 'Disability'
              },
              'ui:errorMessages': {
                minItems: 'Please add at least one disability.'
              },
              items: {
                name: {
                  'ui:title': 'Disability'
                },
                disabilityStartDate: currentOrPastDateUI('Date disability began')
              }
            },
            'view:hasVisitedVAMC': {
              'ui:title': 'Have you been treated at a VA medical center for the above disability?',
              'ui:widget': 'yesNo'
            },
            vamcTreatmentCenters: {
              'ui:description': 'Please enter all VA medical centers where you have received treatment',
              'ui:options': {
                viewField: MedicalCenterField,
                itemName: 'Medical Center',
                expandUnder: 'view:hasVisitedVAMC'
              },
              items: {
                location: {
                  'ui:title': 'Name and location (city, state) of VA medical center'
                }
              }
            }
          },
          schema: {
            type: 'object',
            required: ['disabilities', 'view:hasVisitedVAMC'],
            properties: {
              disabilities: {
                type: 'array',
                minItems: 1,
                items: {
                  type: 'object',
                  required: ['name', 'disabilityStartDate'],
                  properties: disabilities.items.properties
                }
              },
              'view:hasVisitedVAMC': {
                type: 'boolean'
              },
              vamcTreatmentCenters: _.assign(vamcTreatmentCenters, {
                minItems: 1
              })
            }
          }
        },
        employmentHistory: {
          title: 'Employment history',
          path: 'employment/history',
          depends: isUnder65,
          uiSchema: {
            'view:workedBeforeDisabled': {
              'ui:title': 'Have you had a job (including being self-employed) from 1 year before you became disabled to now?',
              'ui:widget': 'yesNo'
            },
            'view:history': {
              'ui:options': {
                expandUnder: 'view:workedBeforeDisabled'
              },
              'ui:description': employmentDescription,
              jobs: {
                'ui:options': {
                  viewField: EmploymentField
                },
                items: {
                  employer: {
                    'ui:title': 'Name of employer'
                  },
                  address: address.uiSchema('Address of employer'),
                  jobTitle: {
                    'ui:title': 'Job title'
                  },
                  dateRange: dateRangeUI(),
                  daysMissed: {
                    'ui:title': 'How many days lost to disability'
                  },
                  annualEarnings: currencyUI('Total annual earnings')
                }
              }
            }
          },
          schema: {
            type: 'object',
            required: ['view:workedBeforeDisabled'],
            properties: {
              'view:workedBeforeDisabled': { type: 'boolean' },
              'view:history': {
                type: 'object',
                properties: {
                  jobs: {
                    type: 'array',
                    minItems: 1,
                    items: {
                      type: 'object',
                      required: ['address', 'employer', 'jobTitle', 'dateRange', 'daysMissed', 'annualEarnings'],
                      properties: _.assign(jobs.items.properties, {
                        address: address.schema(fullSchemaPensions, true),
                        dateRange: _.set('required', ['to', 'from'], dateRange)
                      })
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    householdInformation: {
      title: 'Household Information',
      pages: {
        marriageInfo: {
          title: 'Marriage history',
          path: 'household/marriage-info',
          uiSchema: {
            maritalStatus: {
              'ui:title': 'What’s your marital status?',
              'ui:widget': 'radio'
            },
            marriages: {
              'ui:title': 'How many times have you been married?',
              'ui:widget': ArrayCountWidget,
              'ui:field': 'StringField',
              'ui:required': (form) => !!_.get('maritalStatus', form)
                  && form.maritalStatus !== 'Never Married',
              'ui:options': {
                showFieldLabel: 'label',
                keepInPageOnReview: true,
                expandUnder: 'maritalStatus',
                expandUnderCondition: (status) => !!status
                  && status !== 'Never Married'
              },
              'ui:errorMessages': {
                required: 'You must enter at least 1 marriage'
              }
            }
          },
          schema: {
            type: 'object',
            required: ['maritalStatus'],
            properties: {
              maritalStatus,
              marriages
            }
          }
        },
        marriageHistory: {
          title: (form, { pagePerItemIndex }) => getMarriageTitleWithCurrent(form, pagePerItemIndex),
          path: 'household/marriages/:index',
          showPagePerItem: true,
          arrayPath: 'marriages',
          uiSchema: {
            marriages: {
              items: {
                'ui:options': {
                  updateSchema: (form, schema, uiSchema, index) => {
                    return {
                      title: getMarriageTitleWithCurrent(form, index)
                    };
                  }
                },
                spouseFullName: _.merge(fullNameUI, {
                  first: {
                    'ui:title': 'Spouse first name'
                  },
                  last: {
                    'ui:title': 'Spouse last name'
                  },
                  middle: {
                    'ui:title': 'Spouse middle name'
                  },
                  suffix: {
                    'ui:title': 'Spouse suffix',
                  }
                }),
                dateOfMarriage: currentOrPastDateUI('Date of marriage'),
                locationOfMarriage: {
                  'ui:title': 'Place of marriage (city and state or foreign country)'
                },
                marriageType: {
                  'ui:title': 'Type of marriage',
                  'ui:widget': 'radio'
                },
                otherExplanation: {
                  'ui:title': 'Please specify',
                  'ui:required': (form, index) => {
                    return _.get(['marriages', index, 'marriageType'], form) === 'Other';
                  },
                  'ui:options': {
                    expandUnder: 'marriageType',
                    expandUnderCondition: 'Other'
                  }
                },
                'view:marriageWarning': {
                  'ui:description': marriageWarning,
                  'ui:options': {
                    hideIf: (form, index) => _.get(['marriages', index, 'marriageType'], form) !== 'Common-law'
                  }
                },
                'view:pastMarriage': {
                  'ui:options': {
                    hideIf: isCurrentMarriage
                  },
                  reasonForSeparation: {
                    'ui:title': 'How did marriage end?',
                    'ui:widget': 'radio',
                    'ui:required': (...args) => !isCurrentMarriage(...args)
                  },
                  dateOfSeparation: _.assign(currentOrPastDateUI('Date marriage ended'), {
                    'ui:required': (...args) => !isCurrentMarriage(...args),
                    'ui:validations': [
                      validateAfterMarriageDate
                    ]
                  }),
                  locationOfSeparation: {
                    'ui:title': 'Place marriage ended (city and state or foreign country)',
                    'ui:required': (...args) => !isCurrentMarriage(...args)
                  }
                }
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              marriages: {
                type: 'array',
                items: {
                  type: 'object',
                  required: [
                    'spouseFullName',
                    'dateOfMarriage',
                    'locationOfMarriage',
                    'marriageType'
                  ],
                  properties: {
                    spouseFullName: marriageProperties.spouseFullName,
                    dateOfMarriage: marriageProperties.dateOfMarriage,
                    locationOfMarriage: marriageProperties.locationOfMarriage,
                    marriageType,
                    otherExplanation: marriageProperties.otherExplanation,
                    'view:marriageWarning': { type: 'object', properties: {} },
                    'view:pastMarriage': {
                      type: 'object',
                      properties: {
                        reasonForSeparation,
                        dateOfSeparation: marriageProperties.dateOfSeparation,
                        locationOfSeparation: marriageProperties.locationOfSeparation
                      }
                    }
                  }
                }
              }
            }
          }
        },
        spouseInfo: {
          title: 'Spouse information',
          path: 'household/spouse-info',
          depends: isMarried,
          uiSchema: {
            'ui:title': 'Spouse information',
            spouseDateOfBirth: _.merge(currentOrPastDateUI(''), {
              'ui:options': {
                updateSchema: createSpouseLabelSelector(spouseName =>
                  `${spouseName.first} ${spouseName.last}’s date of birth`)
              }
            }),
            spouseSocialSecurityNumber: _.merge(ssnUI, {
              'ui:title': '',
              'ui:options': {
                updateSchema: createSpouseLabelSelector(spouseName =>
                  `${spouseName.first} ${spouseName.last}’s Social Security number`)
              }
            }),
            spouseIsVeteran: {
              'ui:widget': 'yesNo',
              'ui:options': {
                updateSchema: createSpouseLabelSelector(spouseName =>
                  `Is ${spouseName.first} ${spouseName.last} also a Veteran?`)
              }
            },
            spouseVaFileNumber: {
              'ui:title': 'What is their VA file number?',
              'ui:options': {
                expandUnder: 'spouseIsVeteran'
              },
              'ui:errorMessages': {
                pattern: 'Your VA file number must be between 7 to 9 digits'
              }
            },
            liveWithSpouse: {
              'ui:widget': 'yesNo',
              'ui:options': {
                updateSchema: createSpouseLabelSelector(spouseName =>
                  `Do you live with ${spouseName.first} ${spouseName.last}?`)
              }
            },
            spouseAddress: _.merge(address.uiSchema('Spouse address', false, form => form.liveWithSpouse === false),
              {
                'ui:options': {
                  expandUnder: 'liveWithSpouse',
                  expandUnderCondition: false
                }
              }
            ),
            reasonForNotLivingWithSpouse: {
              'ui:title': 'What is the reason you do not live with your spouse?',
              'ui:required': form => form.liveWithSpouse === false,
              'ui:options': {
                expandUnder: 'liveWithSpouse',
                expandUnderCondition: false
              }
            },
            monthlySpousePayment: _.merge(currencyUI(spouseContribution), {
              'ui:required': form => form.liveWithSpouse === false,
              'ui:options': {
                expandUnder: 'liveWithSpouse',
                expandUnderCondition: false
              }
            }),
            spouseMarriages: {
              'ui:title': 'How many times has your spouse been married (including current marriage)?',
              'ui:widget': ArrayCountWidget,
              'ui:field': 'StringField',
              'ui:options': {
                showFieldLabel: 'label',
                keepInPageOnReview: true,
                countOffset: -1
              },
              'ui:errorMessages': {
                required: 'You must enter at least 1 marriage'
              }
            }
          },
          schema: {
            type: 'object',
            required: [
              'spouseDateOfBirth',
              'spouseSocialSecurityNumber',
              'spouseIsVeteran',
              'liveWithSpouse',
              'spouseMarriages'
            ],
            properties: {
              spouseDateOfBirth,
              spouseSocialSecurityNumber,
              spouseIsVeteran,
              spouseVaFileNumber,
              liveWithSpouse,
              spouseAddress: address.schema(fullSchemaPensions),
              reasonForNotLivingWithSpouse,
              monthlySpousePayment,
              spouseMarriages: marriages
            }
          }
        },
        spouseMarriageHistory: {
          title: (form, { pagePerItemIndex }) => getSpouseMarriageTitle(pagePerItemIndex),
          path: 'household/spouse-marriages/:index',
          depends: isMarried,
          showPagePerItem: true,
          arrayPath: 'spouseMarriages',
          uiSchema: {
            spouseMarriages: {
              items: {
                'ui:title': SpouseMarriageTitle,
                spouseFullName: _.merge(fullNameUI, {
                  first: {
                    'ui:title': 'Their spouse’s first name'
                  },
                  last: {
                    'ui:title': 'Their spouse’s last name'
                  },
                  middle: {
                    'ui:title': 'Their spouse’s middle name'
                  },
                  suffix: {
                    'ui:title': 'Their spouse’s suffix',
                  }
                }),
                dateOfMarriage: _.merge(currentOrPastDateUI(''), {
                  'ui:options': {
                    updateSchema: createSpouseLabelSelector(spouseName =>
                      `Date of ${spouseName.first} ${spouseName.last}’s marriage`)
                  }
                }),
                locationOfMarriage: {
                  'ui:options': {
                    updateSchema: createSpouseLabelSelector(spouseName =>
                      `Place of ${spouseName.first} ${spouseName.last}’s marriage (city and state or foreign country)`)
                  }
                },
                marriageType: {
                  'ui:title': 'Type of marriage',
                  'ui:widget': 'radio'
                },
                otherExplanation: {
                  'ui:title': 'Please specify',
                  'ui:required': (form, index) => {
                    return _.get(['spouseMarriages', index, 'marriageType'], form) === 'Other';
                  },
                  'ui:options': {
                    expandUnder: 'marriageType',
                    expandUnderCondition: 'Other'
                  }
                },
                'view:marriageWarning': {
                  'ui:description': marriageWarning,
                  'ui:options': {
                    hideIf: (form, index) => _.get(['spouseMarriages', index, 'marriageType'], form) !== 'Common-law'
                  }
                },
                reasonForSeparation: {
                  'ui:title': 'Why did the marriage end?',
                  'ui:widget': 'radio'
                },
                dateOfSeparation: _.assign(currentOrPastDateUI('Date marriage ended'), {
                  'ui:validations': [
                    validateAfterMarriageDate
                  ]
                }),
                locationOfSeparation: {
                  'ui:title': 'Place marriage ended (city and state or foreign country)',
                }
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              spouseMarriages: {
                type: 'array',
                items: {
                  type: 'object',
                  required: [
                    'spouseFullName',
                    'dateOfMarriage',
                    'marriageType',
                    'locationOfMarriage',
                    'reasonForSeparation',
                    'dateOfSeparation',
                    'locationOfSeparation'
                  ],
                  properties: {
                    dateOfMarriage: marriageProperties.dateOfMarriage,
                    locationOfMarriage: marriageProperties.locationOfMarriage,
                    spouseFullName: marriageProperties.spouseFullName,
                    marriageType,
                    otherExplanation: marriageProperties.otherExplanation,
                    'view:marriageWarning': { type: 'object', properties: {} },
                    reasonForSeparation,
                    dateOfSeparation: marriageProperties.dateOfSeparation,
                    locationOfSeparation: marriageProperties.locationOfSeparation
                  }
                }
              }
            }
          }
        },
        dependents: {
          title: 'Dependent children',
          path: 'household/dependents',
          uiSchema: {
            'ui:title': 'Dependent children',
            'view:hasDependents': {
              'ui:title': 'Do you have any dependent children?',
              'ui:widget': 'yesNo'
            },
            dependents: {
              'ui:options': {
                itemName: 'Dependent',
                expandUnder: 'view:hasDependents',
                viewField: DependentField
              },
              'ui:errorMessages': {
                minItems: dependentsMinItem
              },
              items: {
                fullName: fullNameUI,
                childDateOfBirth: currentOrPastDateUI('Date of birth')
              }
            }
          },
          schema: {
            type: 'object',
            required: ['view:hasDependents'],
            properties: {
              'view:hasDependents': {
                type: 'boolean'
              },
              dependents: {
                type: 'array',
                minItems: 1,
                items: {
                  type: 'object',
                  required: ['fullName', 'childDateOfBirth'],
                  properties: {
                    fullName: dependents.items.properties.fullName,
                    childDateOfBirth: dependents.items.properties.childDateOfBirth,
                  }
                }
              }
            }
          }
        },
        childrenInformation: {
          path: 'household/dependents/children/information/:index',
          title: item => `${item.fullName.first || ''} ${item.fullName.last || ''} information`,
          showPagePerItem: true,
          arrayPath: 'dependents',
          schema: {
            type: 'object',
            properties: {
              dependents: {
                type: 'array',
                items: {
                  type: 'object',
                  required: ['childPlaceOfBirth', 'childRelationship', 'previouslyMarried'],
                  properties: {
                    childPlaceOfBirth: dependents.items.properties.childPlaceOfBirth,
                    childSocialSecurityNumber: dependents.items.properties.childSocialSecurityNumber,
                    'view:noSSN': { type: 'boolean' },
                    childRelationship: dependents.items.properties.childRelationship,
                    attendingCollege: dependents.items.properties.attendingCollege,
                    'view:schoolWarning': {
                      type: 'object',
                      properties: {}
                    },
                    disabled: dependents.items.properties.disabled,
                    'view:disabilityDocs': {
                      type: 'object',
                      properties: {}
                    },
                    'view:dependentWarning': {
                      type: 'object',
                      properties: {}
                    },
                    previouslyMarried: dependents.items.properties.previouslyMarried,
                    married: dependents.items.properties.married,
                  }
                }
              }
            }
          },
          uiSchema: {
            dependents: {
              items: {
                'ui:title': createHouseholdMemberTitle('fullName', 'Information'),
                childPlaceOfBirth: {
                  'ui:title': 'Place of birth (city and state or foreign country)'
                },
                childSocialSecurityNumber: _.merge(ssnUI, {
                  'ui:title': 'Social Security number',
                  'ui:required': (formData, index) => !_.get(`dependents.${index}.view:noSSN`, formData)
                }),
                'view:noSSN': {
                  'ui:title': 'Does not have a Social Security number (foreign national, etc.)'
                },
                childRelationship: {
                  'ui:title': 'Relationship',
                  'ui:widget': 'radio',
                  'ui:options': {
                    labels: {
                      biological: 'Biological child',
                      adopted: 'Adopted child',
                      stepchild: 'Stepchild'
                    }
                  }
                },
                attendingCollege: {
                  'ui:title': 'Is your child in school?',
                  'ui:widget': 'yesNo',
                  'ui:required': (formData, index) => isBetween18And23(_.get(['dependents', index, 'childDateOfBirth'], formData)),
                  'ui:options': {
                    hideIf: (formData, index) => !isBetween18And23(_.get(['dependents', index, 'childDateOfBirth'], formData)),
                  }
                },
                'view:schoolWarning': {
                  'ui:description': schoolAttendanceWarning,
                  'ui:options': {
                    expandUnder: 'attendingCollege'
                  }
                },
                disabled: {
                  'ui:title': 'Is your child seriously disabled?',
                  'ui:required': (formData, index) => !isEligibleForDisabilitySupport(_.get(['dependents', index, 'childDateOfBirth'], formData)),
                  'ui:options': {
                    hideIf: (formData, index) => isEligibleForDisabilitySupport(_.get(['dependents', index, 'childDateOfBirth'], formData))
                  },
                  'ui:widget': 'yesNo',
                },
                'view:disabilityDocs': {
                  'ui:description': disabilityDocs,
                  'ui:options': {
                    expandUnder: 'disabled'
                  }
                },
                'view:dependentWarning': {
                  'ui:description': dependentWarning,
                  'ui:options': {
                    hideIf: (formData, index) => _.get(['dependents', index, 'disabled'], formData) !== false
                      || _.get(['dependents', index, 'attendingCollege'], formData) !== false
                  }
                },
                previouslyMarried: {
                  'ui:title': 'Has your child ever been married?',
                  'ui:widget': 'yesNo'
                },
                married: {
                  'ui:title': 'Are they currently married?',
                  'ui:widget': 'yesNo',
                  'ui:required': (formData, index) => !!_.get(['dependents', index, 'previouslyMarried'], formData),
                  'ui:options': {
                    expandUnder: 'previouslyMarried'
                  }
                }
              }
            }
          }
        },
        childrenAddress: {
          path: 'household/dependents/children/address/:index',
          title: item => `${item.fullName.first || ''} ${item.fullName.last || ''} address`,
          showPagePerItem: true,
          arrayPath: 'dependents',
          schema: {
            type: 'object',
            properties: {
              dependents: {
                type: 'array',
                items: {
                  type: 'object',
                  required: ['childInHousehold'],
                  properties: {
                    childInHousehold: dependents.items.properties.childInHousehold,
                    childAddress: dependents.items.properties.childAddress,
                    personWhoLivesWithChild: dependents.items.properties.personWhoLivesWithChild,
                    monthlyPayment: dependents.items.properties.monthlyPayment
                  }
                }
              }
            }
          },
          uiSchema: {
            dependents: {
              items: {
                'ui:title': createHouseholdMemberTitle('fullName', 'Address'),
                childInHousehold: {
                  'ui:title': 'Does your child live with you?',
                  'ui:widget': 'yesNo'
                },
                childAddress: _.merge(address.uiSchema('Address', false, (form, index) => !_.get(['dependents', index, 'childInHousehold'], form)),
                  {
                    'ui:options': {
                      expandUnder: 'childInHousehold',
                      expandUnderCondition: false
                    }
                  }
                ),
                personWhoLivesWithChild: _.merge(fullNameUI,
                  {
                    'ui:title': 'Who do they live with?',
                    'ui:options': {
                      updateSchema: (form, UISchema, schema, index) => {
                        if (!_.get(['dependents', index, 'childInHousehold'], form)) {
                          return fullName;
                        }
                        return nonRequiredFullName;
                      },
                      expandUnder: 'childInHousehold',
                      expandUnderCondition: false
                    }
                  }
                ),
                monthlyPayment: _.merge(currencyUI('How much do you contribute per month to their support?'), {
                  'ui:required': (form, index) => !_.get(['dependents', index, 'childInHousehold'], form),
                  'ui:options': {
                    expandUnder: 'childInHousehold',
                    expandUnderCondition: false
                  }
                })
              }
            }
          }
        }
      }
    },
    financialDisclosure: {
      title: 'Financial Disclosure',
      reviewDescription: FinancialDisclosureDescription,
      pages: {
        netWorth: {
          path: 'financial-disclosure/net-worth',
          title: item => `${item.veteranFullName.first} ${item.veteranFullName.last} net worth`,
          schema: {
            type: 'object',
            required: ['netWorth'],
            properties: {
              netWorth
            }
          },
          uiSchema: {
            'ui:title': createHouseholdMemberTitle('veteranFullName', 'Net worth'),
            'ui:description': 'Bank accounts, investments, and property',
            netWorth: netWorthUI
          }
        },
        monthlyIncome: {
          path: 'financial-disclosure/monthly-income',
          title: item => `${item.veteranFullName.first} ${item.veteranFullName.last} monthly income`,
          initialData: {
          },
          schema: {
            type: 'object',
            required: ['monthlyIncome'],
            properties: {
              monthlyIncome
            }
          },
          uiSchema: {
            'ui:title': createHouseholdMemberTitle('veteranFullName', 'Monthly income'),
            'ui:description': 'Social Security or other pensions (gross income)',
            monthlyIncome: monthlyIncomeUI
          }
        },
        expectedIncome: {
          path: 'financial-disclosure/expected-income',
          title: item => `${item.veteranFullName.first} ${item.veteranFullName.last} expected income`,
          initialData: {
          },
          schema: {
            type: 'object',
            required: ['expectedIncome'],
            properties: {
              expectedIncome
            }
          },
          uiSchema: {
            'ui:title': createHouseholdMemberTitle('veteranFullName', 'Expected income'),
            'ui:description': expectedIncomeDescription,
            expectedIncome: expectedIncomeUI
          }
        },
        otherExpenses: {
          path: 'financial-disclosure/other-expenses',
          title: item => `${item.veteranFullName.first} ${item.veteranFullName.last} expenses`,
          schema: {
            type: 'object',
            required: ['view:hasOtherExpenses'],
            properties: {
              'view:hasOtherExpenses': {
                type: 'boolean'
              },
              otherExpenses
            }
          },
          uiSchema: {
            'ui:title': createHouseholdMemberTitle('veteranFullName', 'Medical, legal, or other unreimbursed expenses'),
            'view:hasOtherExpenses': {
              'ui:title': 'Do you have any medical, legal or other unreimbursed expenses?',
              'ui:widget': 'yesNo'
            },
            otherExpenses: _.merge(otherExpensesUI, {
              'ui:options': {
                expandUnder: 'view:hasOtherExpenses'
              }
            })
          }
        },
        spouseNetWorth: {
          path: 'financial-disclosure/net-worth/spouse',
          title: 'Spouse net worth',
          depends: isMarried,
          initialData: {
          },
          schema: {
            type: 'object',
            properties: {
              spouseNetWorth: netWorth
            }
          },
          uiSchema: {
            'ui:title': createHouseholdMemberTitle('spouse', 'Net worth'),
            'ui:description': 'Bank accounts, investments, and property',
            spouseNetWorth: netWorthUI
          }
        },
        spouseMonthlyIncome: {
          path: 'financial-disclosure/monthly-income/spouse',
          title: 'Spouse monthly income',
          depends: isMarried,
          initialData: {
          },
          schema: {
            type: 'object',
            properties: {
              spouseMonthlyIncome: monthlyIncome
            }
          },
          uiSchema: {
            'ui:title': createHouseholdMemberTitle('spouse', 'Monthly income'),
            'ui:description': 'Social Security or other pensions (gross income)',
            spouseMonthlyIncome: monthlyIncomeUI
          }
        },
        spouseExpectedIncome: {
          path: 'financial-disclosure/expected-income/spouse',
          title: 'Spouse expected income',
          depends: isMarried,
          initialData: {
          },
          schema: {
            type: 'object',
            properties: {
              spouseExpectedIncome: expectedIncome
            }
          },
          uiSchema: {
            'ui:title': createHouseholdMemberTitle('spouse', 'Expected income'),
            'ui:description': spouseExpectedIncomeDescription,
            spouseExpectedIncome: expectedIncomeUI
          }
        },
        spouseOtherExpenses: {
          path: 'financial-disclosure/other-expenses/spouse',
          depends: isMarried,
          title: 'Spouse other expenses',
          schema: {
            type: 'object',
            required: ['view:spouseHasOtherExpenses'],
            properties: {
              'view:spouseHasOtherExpenses': {
                type: 'boolean'
              },
              spouseOtherExpenses: otherExpenses
            }
          },
          uiSchema: {
            'ui:title': createHouseholdMemberTitle('spouse', 'Medical, legal, or other unreimbursed expenses'),
            'view:spouseHasOtherExpenses': {
              'ui:title': 'Does your spouse have any medical, legal or other unreimbursed expenses?',
              'ui:widget': 'yesNo'
            },
            spouseOtherExpenses: _.merge(otherExpensesUI, {
              'ui:options': {
                expandUnder: 'view:spouseHasOtherExpenses'
              }
            })
          }
        },
        dependentsNetWorth: {
          path: 'financial-disclosure/net-worth/dependents/:index',
          title: item => `${item.fullName.first || ''} ${item.fullName.last || ''} net worth`,
          showPagePerItem: true,
          arrayPath: 'dependents',
          schema: {
            type: 'object',
            properties: {
              dependents: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    netWorth
                  }
                }
              }
            }
          },
          uiSchema: {
            dependents: {
              items: {
                'ui:title': createHouseholdMemberTitle('fullName', 'Net worth'),
                'ui:description': 'Bank accounts, investments, and property',
                netWorth: netWorthUI
              }
            }
          }
        },
        dependentsMonthlyIncome: {
          path: 'financial-disclosure/monthly-income/dependents/:index',
          title: item => `${item.fullName.first || ''} ${item.fullName.last || ''} monthly income`,
          showPagePerItem: true,
          arrayPath: 'dependents',
          initialData: {
          },
          schema: {
            type: 'object',
            properties: {
              dependents: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    monthlyIncome
                  }
                }
              }
            }
          },
          uiSchema: {
            dependents: {
              items: {
                'ui:title': createHouseholdMemberTitle('fullName', 'Monthly income'),
                'ui:description': 'Social Security or other pensions (gross income)',
                monthlyIncome: monthlyIncomeUI
              }
            }
          }
        },
        dependentsExpectedIncome: {
          path: 'financial-disclosure/expected-income/dependents/:index',
          title: item => `${item.fullName.first || ''} ${item.fullName.last || ''} expected income`,
          showPagePerItem: true,
          arrayPath: 'dependents',
          initialData: {
          },
          schema: {
            type: 'object',
            properties: {
              dependents: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    expectedIncome
                  }
                }
              }
            }
          },
          uiSchema: {
            dependents: {
              items: {
                'ui:title': createHouseholdMemberTitle('fullName', 'Expected income'),
                'ui:description': dependentExpectedIncomeDescription,
                expectedIncome: expectedIncomeUI
              }
            }
          }
        },
        dependentsOtherExpenses: {
          path: 'financial-disclosure/other-expenses/dependents/:index',
          showPagePerItem: true,
          arrayPath: 'dependents',
          title: item => `${item.fullName.first || ''} ${item.fullName.last || ''} expenses`,
          schema: {
            type: 'object',
            properties: {
              dependents: {
                type: 'array',
                items: {
                  type: 'object',
                  required: ['view:hasOtherExpenses'],
                  properties: {
                    'view:hasOtherExpenses': {
                      type: 'boolean'
                    },
                    otherExpenses
                  }
                }
              }
            }
          },
          uiSchema: {
            dependents: {
              items: {
                'ui:title': createHouseholdMemberTitle('fullName', 'Medical, legal, or other unreimbursed expenses'),
                'view:hasOtherExpenses': {
                  'ui:title': 'Does your child have any medical, legal or other unreimbursed expenses?',
                  'ui:widget': 'yesNo'
                },
                otherExpenses: _.merge(otherExpensesUI, {
                  'ui:options': {
                    expandUnder: 'view:hasOtherExpenses'
                  }
                })
              }
            }
          }
        }
      }
    },
    additionalInformation: {
      title: 'Additional Information',
      pages: {
        directDeposit: {
          title: 'Direct deposit',
          path: 'additional-information/direct-deposit',
          initialData: {},
          uiSchema: {
            'ui:title': 'Direct deposit',
            'view:noDirectDeposit': {
              'ui:title': 'I don’t want to use direct deposit'
            },
            bankAccount: _.merge(bankAccountUI, {
              'ui:order': [
                'accountType',
                'bankName',
                'accountNumber',
                'routingNumber'
              ],
              'ui:options': {
                hideIf: formData => !usingDirectDeposit(formData)
              },
              bankName: {
                'ui:title': 'Bank name'
              },
              accountType: {
                'ui:required': usingDirectDeposit
              },
              accountNumber: {
                'ui:required': usingDirectDeposit
              },
              routingNumber: {
                'ui:required': usingDirectDeposit
              }
            }),
            'view:stopWarning': {
              'ui:description': directDepositWarning,
              'ui:options': {
                hideIf: usingDirectDeposit
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              'view:noDirectDeposit': {
                type: 'boolean',
              },
              bankAccount,
              'view:stopWarning': {
                type: 'object',
                properties: {}
              }
            }
          }
        },
        contactInformation: {
          title: 'Contact information',
          path: 'additional-information/contact',
          uiSchema: {
            'ui:title': 'Contact information',
            veteranAddress: address.uiSchema('Mailing address'),
            email: {
              'ui:title': 'Primary email'
            },
            altEmail: {
              'ui:title': 'Secondary email'
            },
            dayPhone: phoneUI('Daytime phone'),
            nightPhone: phoneUI('Evening phone'),
            mobilePhone: phoneUI('Mobile phone'),
          },
          schema: {
            type: 'object',
            required: ['veteranAddress'],
            properties: {
              veteranAddress: address.schema(fullSchemaPensions, true),
              email,
              altEmail,
              dayPhone,
              nightPhone,
              mobilePhone
            }
          }
        },
        aidAttendance: {
          path: 'additional-information/aid-attendance',
          title: 'Aid and Attendance and Housebound Benefits',
          uiSchema: {
            'ui:title': 'Aid and Attendance and Housebound Benefits',
            'view:evidenceInfo': {
              'ui:description': aidAttendanceEvidence
            }
          },
          schema: {
            type: 'object',
            properties: {
              'view:evidenceInfo': {
                type: 'object',
                properties: {}
              }
            }
          }
        },
        documentUpload: {
          title: 'Document upload',
          path: 'documents',
          editModeOnReviewPage: true,
          uiSchema: {
            'ui:title': 'Document upload',
            'ui:description': fileHelp,
            files: fileUploadUI('', {
              hideLabelText: true
            }),
            'view:uploadMessage': {
              'ui:description': uploadMessage
            }
          },
          schema: {
            type: 'object',
            properties: {
              files,
              'view:uploadMessage': {
                type: 'object',
                properties: {}
              }
            }
          }
        },
        expedited: {
          title: 'Fully developed claim program',
          path: 'additional-information/fdc',
          uiSchema: {
            'ui:description': expeditedProcessDescription,
            noRapidProcessing: {
              'ui:title': 'Do you want to apply using the Fully Developed Claim program?',
              'ui:widget': 'yesNo',
              'ui:options': {
                yesNoReverse: true,
                labels: {
                  Y: 'Yes, I have uploaded all my documentation.',
                  N: 'No, I have some extra information that I will submit to VA later.'
                }
              }
            },
            fdcWarning: {
              'ui:description': fdcWarning,
              'ui:options': {
                expandUnder: 'noRapidProcessing',
                expandUnderCondition: false
              }
            },
            noFDCWarning: {
              'ui:description': noFDCWarning,
              'ui:options': {
                expandUnder: 'noRapidProcessing',
                expandUnderCondition: true
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              noRapidProcessing,
              fdcWarning: {
                type: 'object',
                properties: {}
              },
              noFDCWarning: {
                type: 'object',
                properties: {}
              }
            }
          }
        }
      }
    },
  }
};

export default formConfig;
