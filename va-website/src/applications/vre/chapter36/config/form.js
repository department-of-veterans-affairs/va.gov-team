import _ from 'lodash/fp';

import fullSchema36 from 'vets-json-schema/dist/28-8832-schema.json';

import { genderLabels } from '../../../../platform/static-data/labels.jsx';

import * as address from '../../../common/schemaform/definitions/address';
import { benefitsLabels, dischargeTypeLabels } from '../../utils/labels.jsx';
import IntroductionPage from '../components/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import { transform } from '../helpers';
import createVeteranInfoPage from '../../pages/veteranInfo';

import ServicePeriodView from '../../../common/schemaform/components/ServicePeriodView';
import dateRangeUI from '../../../common/schemaform/definitions/dateRange';
import currentOrPastDateUI from '../../../common/schemaform/definitions/currentOrPastDate';
import fullNameUI from '../../../common/schemaform/definitions/fullName';
import phoneUI from '../../../common/schemaform/definitions/phone';
import ssnUI from '../../../common/schemaform/definitions/ssn';
import { validateMatch } from '../../../common/schemaform/validation';

import FormFooter from '../../../../platform/forms/components/FormFooter';

const {
  applicantEmail,
  applicantFullName,
  applicantGender,
  veteranGender,
  applicantPrimaryPhone,
  applicantOtherPhone,
  applicantSocialSecurityNumber,
  seekingRestorativeTraining,
  seekingVocationalTraining,
  receivedPamphlet,
  previousBenefitApplications,
  veteranDateOfDeathMIAPOW,
  veteranSocialSecurityNumber,
  veteranVaFileNumber
} = fullSchema36.properties;

const {
  date,
  fullName,
  gender,
  phone,
  ssn,
  vaFileNumber,
  dateRange,
  serviceHistory
} = fullSchema36.definitions;

const requiredDateRange = _.merge(dateRange, {
  required: ['to', 'from']
});

function isVeteran({ 'view:isVeteran': isVeteranApplicant }) {
  return isVeteranApplicant;
}

function isNotVeteran(formData) {
  return !isVeteran(formData);
}

function isSpouse({ applicantRelationshipToVeteran: relationship }) {
  return relationship === 'Spouse' || relationship === 'Surviving spouse';
}

function isVeteranOrSpouse(formData) {
  return isVeteran(formData) || isSpouse(formData);
}

function isVeteranOrNoApplications(formData) {
  const { previousBenefitApplications: applications } = formData;
  return isVeteran(formData) || !_.some(Boolean, applications);
}

const serviceHistoryUI = {
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
};

const applicantServiceHistory = _.merge(serviceHistory, {
  minItems: 1,
  items: {
    required: ['serviceBranch', 'dateRange', 'dischargeType'],
    properties: {
      dateRange: {
        $ref: '#/definitions/requiredDateRange'
      }
    }
  }
});

const previousBenefitApplicationsUI = {
  'ui:title': 'Have you ever applied for any of the following VA benefits? (Check all that apply.)',
  'ui:options': {
    showFieldLabel: true
  },
  chapter31: {
    'ui:title': benefitsLabels.chapter31,
    'ui:options': {
      hideIf: isNotVeteran
    }
  },
  ownServiceBenefits: {
    'ui:title': benefitsLabels.ownServiceBenefits,
    'ui:options': {
      hideIf: isNotVeteran
    }
  },
  dic: {
    'ui:title': benefitsLabels.dic,
    'ui:options': {
      hideIf: isVeteran
    }
  },
  other: {
    'ui:title': benefitsLabels.other
  },
  otherExplanation: {
    'ui:title': benefitsLabels.otherExplanation,
    'ui:options': {
      expandUnder: 'other'
    }
  }
};

const formConfig = {
  urlPrefix: '/',
  // submitUrl: '/v0/vre',
  submit: () => Promise.resolve({ attributes: { confirmationNumber: '123123123' } }),
  trackingPrefix: 'vre-chapter-36',
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  transformForSubmit: transform,
  formId: '28-8832',
  version: 0,
  prefillEnabled: true,
  footerContent: FormFooter,
  savedFormMessages: {
    notFound: 'Please start over to apply for vocational counseling.',
    noAuth: 'Please sign in again to resume your application for vocational counseling.'
  },
  title: 'Apply for vocational counseling',
  subTitle: 'Form 28-8832',
  defaultDefinitions: {
    address,
    date,
    fullName,
    gender,
    phone,
    ssn,
    vaFileNumber,
    dateRange,
    requiredDateRange
  },
  chapters: {
    applicantInformation: {
      title: 'Applicant Information',
      pages: {
        applicantInformation: {
          title: 'Applicant information',
          path: 'applicant-information',
          uiSchema: {
            'view:isVeteran': {
              'ui:title': 'Are you a Servicemember or Veteran applying for counseling service?',
              'ui:widget': 'yesNo'
            },
            applicantFullName: _.merge(fullNameUI, {
              first: {
                'ui:required': isNotVeteran
              },
              last: {
                'ui:required': isNotVeteran
              },
              'ui:options': {
                expandUnder: 'view:isVeteran',
                expandUnderCondition: false
              }
            }),
            applicantRelationshipToVeteran: {
              'ui:title': 'What is your relationship to the Servicemember or Veteran?',
              'ui:widget': 'radio',
              'ui:required': isNotVeteran,
              'ui:options': {
                expandUnder: 'view:isVeteran',
                expandUnderCondition: false
              }
            }
          },
          schema: {
            type: 'object',
            required: ['view:isVeteran'],
            properties: {
              'view:isVeteran': {
                type: 'boolean'
              },
              applicantFullName: _.unset('required', applicantFullName),
              applicantRelationshipToVeteran: {
                type: 'string',
                'enum': [
                  'Spouse',
                  'Surviving spouse',
                  'Child',
                  'Stepchild',
                  'Adopted child'
                ]
              }
            }
          }
        },
        dependentInformation: {
          title: 'Applicant information',
          path: 'dependent-information',
          depends: {
            'view:isVeteran': false
          },
          uiSchema: {
            applicantSocialSecurityNumber: ssnUI,
            applicantGender: {
              'ui:title': 'Gender',
              'ui:widget': 'radio',
              'ui:options': {
                labels: genderLabels
              }
            },
            seekingRestorativeTraining: {
              'ui:title': 'Are you a child who is at least 14 years old, a spouse, or a surviving spouse with a disability and looking for special restorative training?',
              'ui:widget': 'yesNo'
            },
            seekingVocationalTraining: {
              'ui:title': 'Are you a child, a spouse, or a surviving spouse with a disability and looking for special vocational training',
              'ui:widget': 'yesNo'
            },
            receivedPamphlet: {
              'ui:title': 'Have you received a pamphlet explaining survivors’ and dependents’ educational assistance benefits?',
              'ui:widget': 'yesNo'
            }
          },
          schema: {
            type: 'object',
            properties: {
              applicantSocialSecurityNumber,
              applicantGender,
              seekingRestorativeTraining,
              seekingVocationalTraining,
              receivedPamphlet
            }
          }
        }
      }
    },
    veteranInformation: {
      title: 'Veteran Information',
      pages: {
        veteranInformation: createVeteranInfoPage(fullSchema36, {
          uiSchema: {
            veteranDateOfDeathMIAPOW: _.merge(
              currentOrPastDateUI('Date of Veteran’s death or date listed as missing in action or POW'),
              {
                'ui:options': {
                  hideIf: isVeteran
                }
              }
            ),
            veteranGender: {
              'ui:title': 'Gender',
              'ui:widget': 'radio',
              'ui:required': formData => formData['view:isVeteran'] === true,
              'ui:options': {
                labels: genderLabels,
                hideIf: formData => formData['view:isVeteran'] === false
              }
            },
          },
          schema: {
            veteranDateOfDeathMIAPOW,
            veteranGender
          }
        })
      }
    },
    additionalInformation: {
      title: 'Additional Information',
      pages: {
        additionalInformation: {
          title: 'Additional Information',
          path: 'additional-information',
          depends: isVeteranOrSpouse,
          uiSchema: {
            previousBenefitApplications: previousBenefitApplicationsUI,
            divorceOrAnnulmentPending: {
              'ui:title': 'If you are the spouse of a disabled Veteran is a divorce or annulment pending?',
              'ui:widget': 'yesNo',
              'ui:options': {
                hideIf: ({ applicantRelationshipToVeteran }) => applicantRelationshipToVeteran !== 'Spouse'
              }
            },
            remarried: {
              'ui:title': 'Did you remarry?',
              'ui:widget': 'yesNo',
              'ui:options': {
                hideIf: ({ applicantRelationshipToVeteran }) => applicantRelationshipToVeteran !== 'Surviving spouse'
              }
            },
            previousVeteranBenefitsFullName: _.merge(fullNameUI, {
              'ui:title': 'Veteran’s name under whom you‘ve claimed benefits',
              'ui:options': {
                classNames: 'schemaform-field-template',
                hideIf: isVeteranOrNoApplications
              }
            }),
            previousVeteranBenefitsSocialSecurityNumber: _.assign(ssnUI, {
              'ui:title': 'Social Security number (must have this or a VA file number)',
              'ui:options': {
                hideIf: isVeteranOrNoApplications
              }
            }),
            previousVeteranBenefitsVaFileNumber: {
              'ui:title': 'VA file number (must have this or a Social Security number)',
              'ui:errorMessages': {
                pattern: 'Your VA file number must be between 7 to 9 digits'
              },
              'ui:options': {
                hideIf: isVeteranOrNoApplications
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              divorceOrAnnulmentPending: {
                type: 'boolean'
              },
              remarried: {
                type: 'boolean'
              },
              previousBenefitApplications,
              previousVeteranBenefitsFullName: _.unset(
                'required',
                fullName
              ),
              previousVeteranBenefitsSocialSecurityNumber: _.unset(
                'required',
                veteranSocialSecurityNumber
              ),
              previousVeteranBenefitsVaFileNumber: _.unset(
                'required',
                veteranVaFileNumber
              )
            }
          }
        }
      }
    },
    militaryHistory: {
      title: 'Military History',
      pages: {
        militaryHistoryVeteran: {
          depends: {
            'view:isVeteran': true
          },
          path: 'military-history',
          title: 'Military History',
          uiSchema: {
            veteranServiceHistory: serviceHistoryUI
          },
          schema: {
            type: 'object',
            properties: {
              veteranServiceHistory: applicantServiceHistory
            }
          }
        },
        militaryHistory: {
          depends: formData => !formData['view:isVeteran'],
          path: 'military-history-applicant',
          title: 'Military History',
          uiSchema: {
            'view:hasMilitaryHistory': {
              'ui:title': 'Have you served on active duty in the Armed Forces? (This can include active duty for training for 3 months or more, or subsequent periods of active duty for training of 6 months or more.)',
              'ui:widget': 'yesNo'
            },
            applicantServiceHistory: _.merge(serviceHistoryUI, {
              'ui:options': {
                expandUnder: 'view:hasMilitaryHistory'
              }
            })
          },
          schema: {
            type: 'object',
            required: ['view:hasMilitaryHistory'],
            properties: {
              'view:hasMilitaryHistory': {
                type: 'boolean'
              },
              applicantServiceHistory
            }
          }
        }
      }
    },
    contactInformation: {
      title: 'Contact Information',
      pages: {
        applicantAddress: {
          path: 'applicant-address',
          title: 'Address information',
          uiSchema: {
            applicantAddress: address.uiSchema('Please provide a mailing address where we could reach you in the next 30 to 60 days.'),
          },
          schema: {
            type: 'object',
            required: ['applicantAddress'],
            properties: {
              applicantAddress: address.schema(fullSchema36, true)
            }
          }
        },
        contactInformation: {
          path: 'contact-information',
          title: 'Contact information',
          uiSchema: {
            applicantPrimaryPhone: phoneUI('Primary phone number where a message can be left'),
            applicantOtherPhone: phoneUI('Other phone number'),
            applicantEmail: {
              'ui:title': 'Email address'
            },
            'view:confirmEmail': {
              'ui:title': 'Re-enter email address',
              'ui:options': {
                hideOnReview: true
              }
            },
            'ui:validations': [
              validateMatch('applicantEmail', 'view:confirmEmail')
            ]
          },
          schema: {
            type: 'object',
            properties: {
              applicantPrimaryPhone,
              applicantOtherPhone,
              applicantEmail,
              'view:confirmEmail': applicantEmail,
            }
          }
        }
      }
    }
  }
};


export default formConfig;
