import _ from 'lodash/fp';
import moment from 'moment';

import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';

import {
  maritalStatuses
} from '../../../platform/static-data/options-for-select';
import {
  states
} from '../../../platform/forms/address';
import { genderLabels } from '../../../platform/static-data/labels';
import FormFooter from '../../../platform/forms/components/FormFooter';

import applicantDescription from '../../common/schemaform/components/ApplicantDescription';
import PrefillMessage from '../../common/schemaform/save-in-progress/PrefillMessage';
import MilitaryPrefillMessage from '../../common/schemaform/save-in-progress/MilitaryPrefillMessage';

import GetFormHelp from '../components/GetFormHelp';
import { validateMatch } from '../../common/schemaform/validation';
import { createUSAStateLabels } from '../../common/schemaform/helpers';

import {
  transform,
  dischargeTypeLabels,
  lastServiceBranchLabels,
  facilityHelp,
  isEssentialAcaCoverageDescription,
  medicaidDescription,
  medicalCentersByState,
  medicalCenterLabels,
  medicarePartADescription,
  financialDisclosureText,
  incomeDescription,
  disclosureWarning,
  expensesGreaterThanIncomeWarning,
  expensesLessThanIncome,
  deductibleExpensesDescription
} from '../helpers';

import migrations from './migrations';

import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import ErrorMessage from '../components/ErrorMessage';
import InsuranceProviderView from '../components/InsuranceProviderView';
import DependentView from '../components/DependentView';
import DemographicField from '../components/DemographicField';

import fullNameUI from '../../common/schemaform/definitions/fullName';
import phoneUI from '../../common/schemaform/definitions/phone';
import { schema as addressSchema, uiSchema as addressUI } from '../../common/schemaform/definitions/address';

import { createDependentSchema, uiSchema as dependentUI, createDependentIncomeSchema, dependentIncomeUiSchema } from '../definitions/dependent';
import currentOrPastDateUI from '../../common/schemaform/definitions/currentOrPastDate';
import dateUI from '../../common/schemaform/definitions/date';
import ssnUI from '../../common/schemaform/definitions/ssn';
import currencyUI from '../../common/schemaform/definitions/currency';

import { validateServiceDates, validateMarriageDate } from '../validation';

const dependentSchema = createDependentSchema(fullSchemaHca);
const dependentIncomeSchema = createDependentIncomeSchema(fullSchemaHca);
const emptyFacilityList = [];
const emptyObjectSchema = {
  type: 'object',
  properties: {}
};

const {
  gender,
  mothersMaidenName,
  cityOfBirth,
  isSpanishHispanicLatino,
  isAmericanIndianOrAlaskanNative,
  isBlackOrAfricanAmerican,
  isNativeHawaiianOrOtherPacificIslander,
  isAsian,
  isWhite,
  email,
  lastEntryDate,
  lastDischargeDate,
  lastServiceBranch,
  dischargeType,
  purpleHeartRecipient,
  isFormerPow,
  postNov111998Combat,
  disabledInLineOfDuty,
  swAsiaCombat,
  vietnamService,
  exposedToRadiation,
  radiumTreatments,
  campLejeune,
  isMedicaidEligible,
  isEnrolledMedicarePartA,
  medicarePartAEffectiveDate,
  isCoveredByHealthInsurance,
  vaMedicalFacility,
  isEssentialAcaCoverage,
  wantsInitialVaContact,
  vaCompensationType,
  discloseFinancialInformation,
  spouseFullName,
  spouseSocialSecurityNumber,
  spouseDateOfBirth,
  dateOfMarriage,
  sameAddress,
  cohabitedLastYear,
  provideSupportLastYear,
  spousePhone,
  dependents,
  veteranGrossIncome,
  veteranNetIncome,
  veteranOtherIncome,
  veteranFullName,
  spouseGrossIncome,
  spouseNetIncome,
  spouseOtherIncome,
  deductibleMedicalExpenses,
  deductibleFuneralExpenses,
  deductibleEducationExpenses
} = fullSchemaHca.properties;

const {
  fullName,
  date,
  provider,
  phone,
  monetaryValue,
  ssn
} = fullSchemaHca.definitions;


const stateLabels = createUSAStateLabels(states);

const formConfig = {
  urlPrefix: '/',
  submitUrl: '/v0/health_care_applications',
  trackingPrefix: 'hca-',
  formId: '1010ez',
  version: 5,
  migrations,
  prefillEnabled: true,
  savedFormMessages: {
    notFound: 'Please start over to apply for health care.',
    noAuth: 'Please sign in again to resume your application for health care.'
  },
  transformForSubmit: transform,
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  submitErrorText: ErrorMessage,
  title: 'Apply for health care',
  subTitle: 'Form 10-10EZ',
  footerContent: FormFooter,
  getHelp: GetFormHelp,
  defaultDefinitions: {
    date,
    provider,
    fullName: _.set('properties.middle.maxLength', 30, fullName),
    ssn: ssn.oneOf[0], // Mmm...not a fan.
    phone,
    dependent: dependentSchema,
    monetaryValue,
  },
  chapters: {
    veteranInformation: {
      title: 'Veteran Information',
      pages: {
        veteranInformation: {
          path: 'veteran-information/personal-information',
          title: 'Veteran information',
          initialData: {},
          uiSchema: {
            'ui:description': applicantDescription,
            veteranFullName: _.merge(fullNameUI, {
              first: {
                'ui:errorMessages': {
                  minLength: 'Please provide a valid name. Must be at least 1 character.',
                  pattern: 'Please provide a valid name. Must be at least 1 character.'
                }
              },
              last: {
                'ui:errorMessages': {
                  minLength: 'Please provide a valid name. Must be at least 2 characters.',
                  pattern: 'Please provide a valid name. Must be at least 2 characters.'
                }
              }
            }),
            mothersMaidenName: {
              'ui:title': 'Mother’s maiden name'
            }
          },
          schema: {
            type: 'object',
            properties: {
              veteranFullName,
              mothersMaidenName: _.set('maxLength', 35, mothersMaidenName)
            }
          }
        },
        birthInformation: {
          path: 'veteran-information/birth-information',
          title: 'Veteran information',
          initialData: {},
          uiSchema: {
            'ui:description': PrefillMessage,
            veteranDateOfBirth: currentOrPastDateUI('Date of birth'),
            veteranSocialSecurityNumber: ssnUI,
            'view:placeOfBirth': {
              'ui:title': 'Place of birth',
              cityOfBirth: {
                'ui:title': 'City'
              },
              stateOfBirth: {
                'ui:title': 'State',
                'ui:options': {
                  labels: stateLabels
                }
              }
            }
          },
          schema: {
            type: 'object',
            required: ['veteranDateOfBirth', 'veteranSocialSecurityNumber'],
            properties: {
              veteranDateOfBirth: date,
              veteranSocialSecurityNumber: ssn.oneOf[0],
              'view:placeOfBirth': {
                type: 'object',
                properties: {
                  cityOfBirth,
                  stateOfBirth: {
                    type: 'string',
                    'enum': states.USA.map(state => state.value)
                  }
                }
              }
            }
          }
        },
        demographicInformation: {
          path: 'veteran-information/demographic-information',
          title: 'Veteran information',
          initialData: {
            'view:demographicCategories': {
              isSpanishHispanicLatino: false
            }
          },
          uiSchema: {
            gender: {
              'ui:title': 'Gender',
              'ui:options': {
                labels: genderLabels
              }
            },
            maritalStatus: {
              'ui:title': 'Marital status'
            },
            'view:demographicCategories': {
              'ui:field': DemographicField,
              'ui:title': 'Which categories best describe you?',
              'ui:description': 'You may check more than one.',
              isSpanishHispanicLatino: {
                'ui:title': 'Spanish, Hispanic, or Latino'
              },
              isAmericanIndianOrAlaskanNative: {
                'ui:title': 'American Indian or Alaskan Native'
              },
              isBlackOrAfricanAmerican: {
                'ui:title': 'Black or African American'
              },
              isNativeHawaiianOrOtherPacificIslander: {
                'ui:title': 'Native Hawaiian or Other Pacific Islander'
              },
              isAsian: {
                'ui:title': 'Asian'
              },
              isWhite: {
                'ui:title': 'White'
              }
            }
          },
          schema: {
            type: 'object',
            required: ['gender', 'maritalStatus'],
            properties: {
              gender,
              maritalStatus: {
                type: 'string',
                'enum': maritalStatuses
              },
              'view:demographicCategories': {
                type: 'object',
                properties: {
                  isSpanishHispanicLatino,
                  isAmericanIndianOrAlaskanNative,
                  isBlackOrAfricanAmerican,
                  isNativeHawaiianOrOtherPacificIslander,
                  isAsian,
                  isWhite
                }
              }
            }
          }
        },
        veteranAddress: {
          path: 'veteran-information/veteran-address',
          title: 'Permanent address',
          initialData: {},
          uiSchema: {
            veteranAddress: _.merge(addressUI('Permanent address', true), {
              street: {
                'ui:errorMessages': {
                  pattern: 'Please provide a valid street. Must be at least 1 character.'
                }
              },
              city: {
                'ui:errorMessages': {
                  pattern: 'Please provide a valid city. Must be at least 1 character.'
                }
              }
            })
          },
          schema: {
            type: 'object',
            properties: {
              veteranAddress: _.merge(addressSchema(fullSchemaHca, true), {
                properties: {
                  street: {
                    minLength: 1,
                    maxLength: 30
                  },
                  street2: {
                    minLength: 1,
                    maxLength: 30
                  },
                  street3: {
                    type: 'string',
                    minLength: 1,
                    maxLength: 30
                  },
                  city: {
                    minLength: 1,
                    maxLength: 30
                  }
                }
              })
            }
          }
        },
        contactInformation: {
          path: 'veteran-information/contact-information',
          title: 'Contact information',
          initialData: {},
          uiSchema: {
            'ui:validations': [
              validateMatch('email', 'view:emailConfirmation')
            ],
            email: {
              'ui:title': 'Email address',
              'ui:errorMessages': {
                pattern: 'Please put your email in this format x@x.xxx'
              }
            },
            'view:emailConfirmation': {
              'ui:title': 'Re-enter email address',
              'ui:errorMessages': {
                pattern: 'Please enter a valid email address'
              }
            },
            homePhone: phoneUI('Home telephone number'),
            mobilePhone: phoneUI('Mobile telephone number')
          },
          schema: {
            type: 'object',
            properties: {
              email,
              'view:emailConfirmation': email,
              homePhone: phone,
              mobilePhone: phone
            }
          }
        }
      }
    },
    militaryService: {
      title: 'Military Service',
      pages: {
        serviceInformation: {
          path: 'military-service/service-information',
          title: 'Service periods',
          uiSchema: {
            'ui:description': __BUILDTYPE__ !== 'production' ? MilitaryPrefillMessage : undefined,
            lastServiceBranch: {
              'ui:title': 'Last branch of service',
              'ui:options': {
                labels: lastServiceBranchLabels
              }
            },
            // TODO: this should really be a dateRange, but that requires a backend schema change. For now
            // leaving them as dates, but should change these to get the proper dateRange validation
            lastEntryDate: currentOrPastDateUI('Service start date'),
            lastDischargeDate: dateUI('Service end date'),
            dischargeType: {
              'ui:title': 'Character of service',
              'ui:required': (formData) => !moment(_.get('lastDischargeDate', formData), 'YYYY-MM-DD').isAfter(moment().startOf('day')),
              'ui:options': {
                labels: dischargeTypeLabels,
                hideIf: (formData) => moment(_.get('lastDischargeDate', formData), 'YYYY-MM-DD').isAfter(moment().startOf('day'))
              }
            },
            'ui:validations': [
              validateServiceDates
            ]
          },
          schema: {
            type: 'object',
            properties: {
              lastServiceBranch,
              lastEntryDate,
              lastDischargeDate,
              dischargeType
            },
            required: [
              'lastServiceBranch',
              'lastEntryDate',
              'lastDischargeDate'
            ],
          }
        },
        additionalInformation: {
          path: 'military-service/additional-information',
          title: 'Service history',
          uiSchema: {
            'ui:title': 'Service history',
            'ui:description': 'Check all that apply to you.',
            purpleHeartRecipient: {
              'ui:title': 'Purple Heart award recipient',
            },
            isFormerPow: {
              'ui:title': 'Former Prisoner of War',
            },
            postNov111998Combat: {
              'ui:title': 'Served in combat theater of operations after November 11, 1998',
            },
            disabledInLineOfDuty: {
              'ui:title': 'Discharged or retired from the military for a disability incurred in the line of duty',
            },
            swAsiaCombat: {
              'ui:title': 'Served in Southwest Asia during the Gulf War between August 2, 1990, and Nov 11, 1998',
            },
            vietnamService: {
              'ui:title': 'Served in Vietnam between January 9, 1962, and May 7, 1975',
            },
            exposedToRadiation: {
              'ui:title': 'Exposed to radiation while in the military',
            },
            radiumTreatments: {
              'ui:title': 'Received nose/throat radium treatments while in the military',
            },
            campLejeune: {
              'ui:title': 'Served on active duty at least 30 days at Camp Lejeune from January 1, 1953, through December 31, 1987',
            }
          },
          schema: {
            type: 'object',
            properties: {
              purpleHeartRecipient,
              isFormerPow,
              postNov111998Combat,
              disabledInLineOfDuty,
              swAsiaCombat,
              vietnamService,
              exposedToRadiation,
              radiumTreatments,
              campLejeune
            }
          }
        }
      }
    },
    vaBenefits: {
      title: 'VA Benefits',
      pages: {
        vaBenefits: {
          path: 'va-benefits/basic-information',
          title: 'VA benefits',
          uiSchema: {
            'ui:title': 'Current compensation',
            vaCompensationType: {
              'ui:title': 'Which type of VA compensation do you currently receive?',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  lowDisability: 'Service-connected disability pay for a 10%, 20%, 30%, or 40% disability rating',
                  highDisability: 'Service-connected disability pay for a 50% or higher disability rating',
                  pension: 'VA pension',
                  none: 'I don’t receive any VA pay'
                }
              }
            }
          },
          schema: {
            type: 'object',
            required: ['vaCompensationType'],
            properties: {
              vaCompensationType
            }
          }
        }
      }
    },
    householdInformation: {
      title: 'Household Information',
      pages: {
        financialDisclosure: {
          path: 'household-information/financial-disclosure',
          title: 'Financial disclosure',
          uiSchema: {
            'ui:title': 'Financial disclosure',
            'ui:description': financialDisclosureText,
            discloseFinancialInformation: {
              'ui:title': 'Do you want to provide your financial information?',
              'ui:widget': 'yesNo'
            },
            'view:noDiscloseWarning': {
              'ui:description': disclosureWarning,
              'ui:options': {
                hideIf: (form) => form.discloseFinancialInformation !== false
              }
            }
          },
          schema: {
            type: 'object',
            required: ['discloseFinancialInformation'],
            properties: {
              discloseFinancialInformation,
              'view:noDiscloseWarning': emptyObjectSchema
            }
          }
        },
        spouseInformation: {
          path: 'household-information/spouse-information',
          title: 'Spouse’s information',
          initialData: {},
          depends: (formData) => formData.discloseFinancialInformation && formData.maritalStatus &&
          (formData.maritalStatus.toLowerCase() === 'married' || formData.maritalStatus.toLowerCase() === 'separated'),
          uiSchema: {
            'ui:title': 'Spouse’s information',
            'ui:description': 'Please fill this out to the best of your knowledge. The more accurate your responses, the faster we can process your application.',
            spouseFullName: fullNameUI,
            spouseSocialSecurityNumber: _.merge(ssnUI, {
              'ui:title': 'Spouse’s Social Security number',
            }),
            spouseDateOfBirth: currentOrPastDateUI('Date of birth'),
            dateOfMarriage: _.assign(currentOrPastDateUI('Date of marriage'), {
              'ui:validations': [
                validateMarriageDate
              ]
            }),
            cohabitedLastYear: {
              'ui:title': 'Did your spouse live with you last year?',
              'ui:widget': 'yesNo'
            },
            provideSupportLastYear: {
              'ui:title': 'If your spouse did not live with you last year, did you provide financial support?',
              'ui:widget': 'yesNo',
              'ui:options': {
                expandUnder: 'cohabitedLastYear',
                expandUnderCondition: false
              }
            },
            sameAddress: {
              'ui:title': 'Do you have the same address as your spouse?',
              'ui:widget': 'yesNo'
            },
            'view:spouseContactInformation': {
              'ui:title': 'Spouse’s address and telephone number',
              'ui:options': {
                expandUnder: 'sameAddress',
                expandUnderCondition: false
              },
              spouseAddress: addressUI('', true, (formData) => formData.sameAddress === false),
              spousePhone: phoneUI()
            }
          },
          schema: {
            type: 'object',
            required: [
              'spouseSocialSecurityNumber',
              'spouseDateOfBirth',
              'dateOfMarriage',
              'sameAddress'
            ],
            properties: {
              spouseFullName,
              spouseSocialSecurityNumber,
              spouseDateOfBirth,
              dateOfMarriage,
              cohabitedLastYear,
              provideSupportLastYear,
              sameAddress,
              'view:spouseContactInformation': {
                type: 'object',
                properties: {
                  spouseAddress: addressSchema(fullSchemaHca),
                  spousePhone
                }
              }
            }
          }
        },
        dependentInformation: {
          path: 'household-information/dependent-information',
          title: 'Dependent information',
          depends: (data) => data.discloseFinancialInformation,
          uiSchema: {
            'view:reportDependents': {
              'ui:title': 'Do you have any dependents to report?',
              'ui:widget': 'yesNo'
            },
            dependents: {
              items: dependentUI,
              'ui:options': {
                expandUnder: 'view:reportDependents',
                itemName: 'Dependent',
                hideTitle: true,
                viewField: DependentView
              },
              'ui:errorMessages': {
                minItems: 'You must add at least one dependent.'
              }
            }
          },
          schema: {
            type: 'object',
            required: ['view:reportDependents'],
            properties: {
              'view:reportDependents': { type: 'boolean' },
              dependents: _.assign(dependents, {
                minItems: 1
              })
            }
          }
        },
        annualIncome: {
          path: 'household-information/annual-income',
          title: 'Annual income',
          initialData: {},
          depends: (data) => data.discloseFinancialInformation,
          uiSchema: {
            'ui:title': 'Annual income',
            'ui:description': incomeDescription,
            veteranGrossIncome: currencyUI('Veteran gross annual income from employment'),
            veteranNetIncome: currencyUI('Veteran net income from your farm, ranch, property or business'),
            veteranOtherIncome: currencyUI('Veteran other income amount'),
            'view:spouseIncome': {
              'ui:title': 'Spouse income',
              'ui:options': {
                hideIf: (formData) => !formData.maritalStatus ||
                (formData.maritalStatus.toLowerCase() !== 'married' && formData.maritalStatus.toLowerCase() !== 'separated')
              },
              spouseGrossIncome: _.merge(currencyUI('Spouse gross annual income from employment'), {
                'ui:required': (formData) => formData.maritalStatus && (formData.maritalStatus.toLowerCase() === 'married' || formData.maritalStatus.toLowerCase() === 'separated')
              }),
              spouseNetIncome: _.merge(currencyUI('Spouse net income from your farm, ranch, property or business'), {
                'ui:required': (formData) => formData.maritalStatus && (formData.maritalStatus.toLowerCase() === 'married' || formData.maritalStatus.toLowerCase() === 'separated')
              }),
              spouseOtherIncome: _.merge(currencyUI('Spouse other income amount'), {
                'ui:required': (formData) => formData.maritalStatus && (formData.maritalStatus.toLowerCase() === 'married' || formData.maritalStatus.toLowerCase() === 'separated')
              })
            },
            dependents: {
              'ui:field': 'BasicArrayField',
              items: dependentIncomeUiSchema,
              'ui:options': {
                hideIf: (formData) => !_.get('view:reportDependents', formData)
              }
            }
          },
          schema: {
            type: 'object',
            required: ['veteranGrossIncome', 'veteranNetIncome', 'veteranOtherIncome'],
            definitions: {
              // Override the default schema and use only the income fields
              dependent: dependentIncomeSchema
            },
            properties: {
              veteranGrossIncome,
              veteranNetIncome,
              veteranOtherIncome,
              'view:spouseIncome': {
                type: 'object',
                properties: {
                  spouseGrossIncome,
                  spouseNetIncome,
                  spouseOtherIncome
                }
              },
              dependents: _.merge(dependents, {
                minItems: 1
              })
            }
          }
        },
        deductibleExpenses: {
          path: 'household-information/deductible-expenses',
          title: 'Deductible expenses',
          depends: (data) => data.discloseFinancialInformation,
          uiSchema: {
            'ui:title': 'Previous Calendar Year’s Deductible Expenses',
            'ui:description': deductibleExpensesDescription,
            deductibleMedicalExpenses: currencyUI('Amount you or your spouse paid in non-reimbursable medical expenses this past year.'),
            'view:expensesIncomeWarning1': {
              'ui:description': expensesGreaterThanIncomeWarning,
              'ui:options': {
                hideIf: expensesLessThanIncome('deductibleMedicalExpenses')
              }
            },
            deductibleFuneralExpenses: currencyUI('Amount you paid in funeral or burial expenses for a deceased spouse or child this past year.'),
            'view:expensesIncomeWarning2': {
              'ui:description': expensesGreaterThanIncomeWarning,
              'ui:options': {
                hideIf: expensesLessThanIncome('deductibleFuneralExpenses')
              }
            },
            deductibleEducationExpenses: currencyUI('Amount you paid for anything related to your own education (college or vocational) this past year. Do not list your dependents’ educational expenses.'),
            'view:expensesIncomeWarning3': {
              'ui:description': expensesGreaterThanIncomeWarning,
              'ui:options': {
                hideIf: expensesLessThanIncome('deductibleEducationExpenses')
              }
            }
          },
          schema: {
            type: 'object',
            required: ['deductibleMedicalExpenses', 'deductibleFuneralExpenses', 'deductibleEducationExpenses'],
            properties: {
              deductibleMedicalExpenses,
              'view:expensesIncomeWarning1': emptyObjectSchema,
              deductibleFuneralExpenses,
              'view:expensesIncomeWarning2': emptyObjectSchema,
              deductibleEducationExpenses,
              'view:expensesIncomeWarning3': emptyObjectSchema
            }
          }
        }
      }
    },
    insuranceInformation: {
      title: 'Insurance Information',
      pages: {
        medicare: {
          path: 'insurance-information/medicare',
          title: 'Medicaid or Medicare coverage',
          initialData: {},
          uiSchema: {
            isMedicaidEligible: {
              'ui:title': 'Are you eligible for Medicaid?',
              'ui:description': medicaidDescription,
              'ui:widget': 'yesNo',
            },
            isEnrolledMedicarePartA: {
              'ui:title': 'Are you enrolled in Medicare Part A (hospital insurance)?',
              'ui:description': medicarePartADescription,
              'ui:widget': 'yesNo',
            },
            medicarePartAEffectiveDate: _.merge(
              currentOrPastDateUI('What is your Medicare Part A effective date?'), {
                'ui:required': (formData) => formData.isEnrolledMedicarePartA,
                'ui:options': {
                  expandUnder: 'isEnrolledMedicarePartA'
                }
              }
            )
          },
          schema: {
            type: 'object',
            required: ['isMedicaidEligible', 'isEnrolledMedicarePartA'],
            properties: {
              isMedicaidEligible,
              isEnrolledMedicarePartA,
              medicarePartAEffectiveDate
            }
          }
        },
        general: {
          path: 'insurance-information/general',
          title: 'Other coverage',
          uiSchema: {
            'ui:title': 'Other coverage',
            isCoveredByHealthInsurance: {
              'ui:title': 'Are you covered by health insurance? (Including coverage through a spouse or another person)',
              'ui:widget': 'yesNo'
            },
            providers: {
              'ui:options': {
                itemName: 'Insurance Policy',
                expandUnder: 'isCoveredByHealthInsurance',
                viewField: InsuranceProviderView
              },
              'ui:errorMessages': {
                minItems: 'You need to at least one provider.'
              },
              items: {
                insuranceName: {
                  'ui:title': 'Name of provider'
                },
                insurancePolicyHolderName: {
                  'ui:title': 'Name of policyholder'
                },
                insurancePolicyNumber: {
                  'ui:title': 'Policy number (either this or the group code is required)',
                  'ui:required': (formData, index) => !_.get(`providers[${index}].insuranceGroupCode`, formData)
                },
                insuranceGroupCode: {
                  'ui:title': 'Group code (either this or policy number is required)',
                  'ui:required': (formData, index) => !_.get(`providers[${index}].insurancePolicyNumber`, formData)
                }
              }
            }
          },
          schema: {
            type: 'object',
            required: ['isCoveredByHealthInsurance'],
            properties: {
              isCoveredByHealthInsurance,
              providers: {
                type: 'array',
                minItems: 1,
                items: _.merge(provider, {
                  required: [
                    'insuranceName',
                    'insurancePolicyHolderName',
                    'insurancePolicyNumber',
                    'insuranceGroupCode'
                  ]
                })
              }
            }
          }
        },
        vaFacility: {
          path: 'insurance-information/va-facility',
          title: 'VA Facility',
          initialData: {
            isEssentialAcaCoverage: false
          },
          uiSchema: {
            'ui:title': 'VA Facility',
            isEssentialAcaCoverage: {
              'ui:title': isEssentialAcaCoverageDescription
            },
            'view:preferredFacility': {
              'ui:title': 'Select your preferred VA medical facility',
              'view:facilityState': {
                'ui:title': 'State',
                'ui:options': {
                  labels: stateLabels
                }
              },
              vaMedicalFacility: {
                'ui:title': 'Center or clinic',
                'ui:options': {
                  labels: medicalCenterLabels,
                  updateSchema: (form) => {
                    const state = _.get('view:preferredFacility.view:facilityState', form);
                    if (state) {
                      return {
                        'enum': medicalCentersByState[state] || emptyFacilityList
                      };
                    }

                    return {
                      'enum': emptyFacilityList
                    };
                  }
                }
              }
            },
            'view:locator': {
              'ui:description': facilityHelp
            },
            wantsInitialVaContact: {
              'ui:title': 'Do you want VA to contact you to schedule your first appointment?',
              'ui:widget': 'yesNo'
            }
          },
          schema: {
            type: 'object',
            properties: {
              isEssentialAcaCoverage,
              'view:preferredFacility': {
                type: 'object',
                required: ['view:facilityState', 'vaMedicalFacility'],
                properties: {
                  'view:facilityState': {
                    type: 'string',
                    'enum': states.USA
                      .map(state => state.value)
                      .filter(state => !!medicalCentersByState[state])
                  },
                  vaMedicalFacility: _.assign(vaMedicalFacility, {
                    'enum': emptyFacilityList
                  })
                }
              },
              'view:locator': emptyObjectSchema,
              wantsInitialVaContact
            }
          }
        }
      }
    },
  }
};

export default formConfig;
