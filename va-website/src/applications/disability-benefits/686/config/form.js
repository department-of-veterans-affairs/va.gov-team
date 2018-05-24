import { createSelector } from 'reselect';
import _ from 'lodash/fp';
import moment from 'moment';

import ArrayCountWidget from '../../../common/schemaform/widgets/ArrayCountWidget';
import FormFooter from '../../../../platform/forms/components/FormFooter';
import GetFormHelp from '../../components/GetFormHelp.jsx';
import fullSchema686 from 'vets-json-schema/dist/21-686C-schema.json';
import currentOrPastDateUI from '../../../common/schemaform/definitions/currentOrPastDate';
import ssnUI from '../../../common/schemaform/definitions/ssn';
import * as address from '../../../common/schemaform/definitions/address';
import fullNameUI from '../../../common/schemaform/definitions/fullName';
import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import SpouseMarriageTitle from '../components/SpouseMarriageTitle';
import DependentField from '../components/DependentField';
import createHouseholdMemberTitle from '../components/DisclosureTitle';

import {
  VAFileNumberDescription,
  getSpouseMarriageTitle,
  relationshipLabels,
  dependentsMinItem,
  schoolAttendanceWarning,
  disableWarning,
  childRelationshipStatusLabels,
  getMarriageTitleWithCurrent,
  isMarried
} from '../helpers';

import { validateAfterMarriageDate } from '../validation';

const {
  spouseDateOfBirth,
  spouseSocialSecurityNumber,
  spouseVaFileNumber,
  liveWithSpouse,
  spouseIsVeteran,
  claimantFullName,
  claimantEmail,
  veteranFullName,
  veteranSocialSecurityNumber,
  dependents
} = fullSchema686.properties;

const {
  marriages,
  maritalStatus,
  fullName,
  ssn,
  date,
  vaFileNumber,
} = fullSchema686.definitions;

const marriageProperties = marriages.items.properties;

function isCurrentMarriage(form, index) {
  const numMarriages = form && form.marriages ? form.marriages.length : 0;
  return isMarried(form) && numMarriages - 1 === index;
}
const spouseSelector = createSelector(form => {
  return (form.marriages && form.marriages.length)
    ? form.marriages[0].spouseFullName
    : null;
}, spouse => spouse);

function createSpouseLabelSelector(nameTemplate) {
  return createSelector(spouseSelector, spouseFullName => {
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
function calculateChildAge(form, index) {
  if (form.dependents[index].childDateOfBirth) {
    const childAge = (form.dependents[index].childDateOfBirth);
    return moment().diff(childAge, 'years');
  }
  return null;
}

const reasonForSeparation = _.assign(marriageProperties.reasonForSeparation, {
  'enum': [
    'Widowed',
    'Divorced'
  ]
});

const formConfig = {
  urlPrefix: '/',
  submitUrl: '/v0/api',
  trackingPrefix: '686-',
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  formId: '21-686C',
  version: 0,
  prefillEnabled: false,
  savedFormMessages: {
    notFound: 'Please start over to apply to add a dependent to your VA compensation benefits.',
    noAuth: 'Please sign in again to continue your application to add a dependent to your VA compensation benefits.'
  },
  title: 'Apply to add a dependent to your VA benefits',
  subTitle: 'VA Form 21-686c',
  footerContent: FormFooter,
  getHelp: GetFormHelp,
  defaultDefinitions: {
    address,
    marriages,
    fullName,
    ssn,
    date,
    vaFileNumber
  },
  chapters: {
    veteranInformation: {
      title: 'Veteran Information',
      pages: {
        veteranInformation: {
          path: 'veteran-information',
          title: 'Veteran Information',
          uiSchema: {
            veteranFullName: fullNameUI,
            veteranSSN: _.merge(ssnUI, {
              'ui:required': form => !form.veteranVAfileNumber
            }),
            veteranVAfileNumber: {
              'ui:title': 'VA file number (must have this or a Social Security number)',
              'ui:required': form => !form.veteranSSN,
              'ui:help': VAFileNumberDescription,
              'ui:errorMessages': {
                pattern: 'Your VA file number must be between 7 to 9 digits'
              }
            },
            'view:relationship': {
              'ui:title': 'Relationship to Veteran',
              'ui:widget': 'radio',
              'ui:options': {
                labels: relationshipLabels
              }
            },
            'view:applicantInfo': {
              'ui:title': 'Applicant Information',
              claimantFullName: _.merge(fullNameUI, {
                first: {
                  'ui:required': (formData) => formData['view:relationship'] !== 'veteran'
                },
                last: {
                  'ui:required': (formData) => formData['view:relationship'] !== 'veteran'
                }
              }),
              ssn: _.assign(ssnUI, {
                'ui:required': (formData) => formData['view:relationship'] !== 'veteran'
              }),
              address: address.uiSchema('', false, (formData) => {
                return formData['view:relationship'] !== 'veteran';
              }),
              claimantEmail: {
                'ui:title': 'Email address',
                'ui:required': (formData) => formData['view:relationship'] !== 'veteran'
              },
              'ui:options': {
                expandUnder: 'view:relationship',
                expandUnderCondition: (field) => field === 'spouse' || field === 'child' || field === 'other'
              }
            },
          },
          schema: {
            type: 'object',
            required: ['view:relationship'],
            properties: {
              veteranFullName,
              veteranSSN: veteranSocialSecurityNumber,
              veteranVAfileNumber: vaFileNumber,
              'view:relationship': {
                type: 'string',
                'enum': [
                  'veteran',
                  'spouse',
                  'child',
                  'other'
                ]
              },
              'view:applicantInfo': {
                type: 'object',
                properties: {
                  claimantFullName,
                  ssn,
                  address: address.schema(fullSchema686),
                  claimantEmail
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
                spouseFullName: {
                  'ui:options': {
                    updateSchema: (function makeUpdateSchema() {

                      let formerSpouseSchema;
                      let currentSpouseSchema;

                      return (form, schema, uiSchema, index) => {

                        if (!formerSpouseSchema) {
                          formerSpouseSchema = _.merge(schema, {
                            properties: {
                              first: {
                                title: 'Former spouse’s first name'
                              },
                              last: {
                                title: 'Former spouse‘s last name'
                              },
                              middle: {
                                title: 'Former spouse‘s middle name'
                              },
                              suffix: {
                                title: 'Former spouse‘s suffix'
                              }
                            }
                          });
                          currentSpouseSchema = _.merge(schema, {
                            properties: {
                              first: {
                                title: 'Spouse‘s first name'
                              },
                              last: {
                                title: 'Spouse‘s last name'
                              },
                              middle: {
                                title: 'Spouse‘s middle name'
                              },
                              suffix: {
                                title: 'Spouse‘s suffix'
                              }
                            }
                          });
                        }
                        return isCurrentMarriage(form, index) ? currentSpouseSchema : formerSpouseSchema;
                      };
                    }())
                  }
                },
                dateOfMarriage: currentOrPastDateUI('When did you get married?'),
                locationOfMarriage: {
                  'ui:title': 'Where did you get married? (city and state or foreign country)'
                },
                'view:pastMarriage': {
                  'ui:options': {
                    hideIf: isCurrentMarriage
                  },
                  dateOfSeparation: _.assign(currentOrPastDateUI('When did marriage end?'), {
                    'ui:required': (...args) => !isCurrentMarriage(...args),
                    'ui:validations': [
                      validateAfterMarriageDate
                    ]
                  }),
                  locationOfSeparation: {
                    'ui:title': 'Where did the marriage end? (city and state or foreign country)',
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
                    'locationOfMarriage'
                  ],
                  properties: {
                    spouseFullName: marriageProperties.spouseFullName,
                    dateOfMarriage: marriageProperties.dateOfMarriage,
                    locationOfMarriage: marriageProperties.locationOfMarriage,
                    'view:pastMarriage': {
                      type: 'object',
                      properties: {
                        dateOfSeparation: marriageProperties.dateOfSeparation,
                        locationOfSeparation: marriageProperties.locationOfSeparation
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    currentSpouseInfo: {
      title: 'Current Spouse’s Information',
      pages: {
        spouseInfo: {
          title: 'Spouse information',
          path: 'spouse-info',
          depends: isMarried,
          uiSchema: {
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
              spouseAddress: address.schema(fullSchema686),
              spouseMarriages: marriages
            }
          }
        },
        spouseMarriageHistory: {
          title: (form, { pagePerItemIndex }) => getSpouseMarriageTitle(pagePerItemIndex),
          path: 'spouse-info/marriages/:index',
          depends: isMarried,
          showPagePerItem: true,
          arrayPath: 'spouseMarriages',
          uiSchema: {
            spouseMarriages: {
              items: {
                'ui:title': SpouseMarriageTitle,
                dateOfMarriage: _.merge(currentOrPastDateUI(''), {
                  'ui:options': {
                    updateSchema: createSpouseLabelSelector(spouseName =>
                      `When did ${spouseName.first} ${spouseName.last} get married?`)
                  }
                }),
                locationOfMarriage: {
                  'ui:options': {
                    updateSchema: createSpouseLabelSelector(spouseName =>
                      `Where did ${spouseName.first} ${spouseName.last} get married? (city and state or foreign country)`)
                  }
                },
                spouseFullName: _.merge(fullNameUI, {
                  first: {
                    'ui:title': '',
                    'ui:options': {
                      updateSchema: createSpouseLabelSelector(spouseName =>
                        `First name of ${spouseName.first} ${spouseName.last}’s former spouse`)
                    }
                  },
                  middle: {
                    'ui:title': '',
                    'ui:options': {
                      updateSchema: createSpouseLabelSelector(spouseName =>
                        `Middle name of ${spouseName.first} ${spouseName.last}’s former spouse`)
                    }
                  },
                  last: {
                    'ui:title': '',
                    'ui:options': {
                      updateSchema: createSpouseLabelSelector(spouseName =>
                        `Last name of ${spouseName.first} ${spouseName.last}’s former spouse`)
                    }
                  }
                }),
                dateOfSeparation: _.assign(currentOrPastDateUI('When did this marriage end?'), {
                  'ui:validations': [
                    validateAfterMarriageDate
                  ]
                }),
                locationOfSeparation: {
                  'ui:title': 'Where did this marriage end? (city and state or foreign country)',
                },
                reasonForSeparation: {
                  'ui:title': 'How did this marriage end?',
                  'ui:widget': 'radio'
                }
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              spouseMarriages: {
                type: 'array',
                minItems: 1,
                items: {
                  type: 'object',
                  required: [
                    'spouseFullName',
                    'dateOfMarriage',
                    'locationOfMarriage',
                    'reasonForSeparation',
                    'dateOfSeparation',
                    'locationOfSeparation'
                  ],
                  properties: {
                    dateOfMarriage: marriageProperties.dateOfMarriage,
                    locationOfMarriage: marriageProperties.locationOfMarriage,
                    spouseFullName: marriageProperties.spouseFullName,
                    dateOfSeparation: marriageProperties.dateOfSeparation,
                    locationOfSeparation: marriageProperties.locationOfSeparation,
                    reasonForSeparation
                  }
                }
              }
            }
          }
        }
      }
    },
    unMarriedChildren: {
      title: 'Veteran’s Unmarried Children',
      pages: {
        dependents: {
          path: 'unmarried-children',
          title: 'Veteran’s Unmarried Children',
          uiSchema: {
            'ui:description': 'Please provide details about your unmarried children.',
            'view:hasUnmarriedChildren': {
              'ui:widget': 'yesNo',
              'ui:title': 'Do you have unmarried children?',
            },
            dependents: {
              'ui:options': {
                itemName: 'Child',
                expandUnder: 'view:hasUnmarriedChildren',
                viewField: DependentField,
              },
              'ui:errorMessages': {
                minItems: dependentsMinItem
              },
              items: {
                fullName: _.merge(fullNameUI, {
                  first: {
                    'ui:title': 'Child’s first name'
                  },
                  middle: {
                    'ui:title': 'Child’s middle name'
                  },
                  last: {
                    'ui:title': 'Child’s last name'
                  },
                  suffix: {
                    'ui:title': 'Child’s suffix'
                  }
                }),
                childDateOfBirth: currentOrPastDateUI('Child’s date of birth')
              }
            }
          },
          schema: {
            type: 'object',
            required: ['view:hasUnmarriedChildren'],
            properties: {
              'view:hasUnmarriedChildren': {
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
                    childDateOfBirth: dependents.items.properties.childDateOfBirth
                  }
                }
              }
            }
          }
        },
        childrenInformation: {
          path: 'unmarried-children/information/:index',
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
                  required: ['childRelationship'],
                  properties: {
                    childSocialSecurityNumber: dependents.items.properties.childSocialSecurityNumber,
                    'view:noSSN': { type: 'boolean' },
                    childRelationship: dependents.items.properties.childRelationship,
                    inSchool: dependents.items.properties.attendingCollege,
                    'view:schoolWarning': {
                      type: 'object',
                      properties: {}
                    },
                    disabled: dependents.items.properties.disabled,
                    'view:disableWarning': {
                      type: 'object',
                      properties: {}
                    },
                    married: dependents.items.properties.previouslyMarried,
                    'view:stepChildCondition': {
                      type: 'boolean',
                    },
                  }
                }
              }
            }
          },
          uiSchema: {
            dependents: {
              items: {
                'ui:title': createHouseholdMemberTitle('fullName', 'Information'),
                childSocialSecurityNumber: _.merge(ssnUI, {
                  'ui:title': 'Child’s Social Security number',
                  'ui:required': (formData, index) => !_.get(`dependents.${index}.view:noSSN`, formData)
                }),
                'view:noSSN': {
                  'ui:title': 'Does not have a Social Security number (foreign national, etc.)'
                },
                childRelationship: {
                  'ui:title': 'What’s the status of this child? (Please check all that apply.)',
                  'ui:options': {
                    showFieldLabel: true,
                    labels: childRelationshipStatusLabels
                  },
                  'ui:widget': 'radio',
                },
                inSchool: {
                  'ui:title': 'Child is 18 to 23 years old and in school',
                  'ui:options': {
                    hideIf: (form, index) => {
                      const childAge = calculateChildAge(form, index);
                      if (childAge) {
                        return childAge < 18 || childAge > 23;
                      }
                      return true;
                    }
                  }
                },
                'view:schoolWarning': {
                  'ui:description': schoolAttendanceWarning,
                  'ui:options': {
                    expandUnder: 'inSchool'
                  }
                },
                disabled: {
                  'ui:title': 'Seriously disabled before 18 years old',
                  'ui:options': {
                    hideIf: (form, index) => {
                      const childAge = calculateChildAge(form, index);
                      if (childAge) {
                        return childAge > 18;
                      }
                      return true;
                    }
                  }
                },
                'view:disableWarning': {
                  'ui:description': disableWarning,
                  'ui:options': {
                    expandUnder: 'disabled'
                  }
                },
                married: {
                  'ui:title': 'Child was previously married'
                },
                'view:stepChildCondition': {
                  'ui:options': {
                    expandUnder: 'childRelationship',
                    expandUnderCondition: (formData) => formData === 'stepchild'
                  },
                  'ui:required': (formData, index) => _.get(`dependents.${index}.childRelationship`, formData) === 'stepchild',
                  'ui:widget': 'yesNo',
                  'ui:title': 'Is your child the biological child of your spouse?',
                },
              }
            }
          }
        },
        childrenAddress: {
          path: 'unmarried-children/address/:index',
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
                    childInfo: {
                      type: 'object',
                      properties: {
                        childAddress: address.schema(fullSchema686),
                        personChildLiveWith: {
                          type: 'object',
                          properties: {
                            firstName: {
                              type: 'string'
                            },
                            lastName: {
                              type: 'string'
                            }
                          }
                        }
                      }
                    }
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
                  'ui:title': 'Does your child currently live with you?',
                  'ui:widget': 'yesNo'
                },
                childInfo: {
                  'ui:options': {
                    expandUnder: 'childInHousehold',
                    expandUnderCondition: false
                  },
                  childAddress: _.merge(address.uiSchema('Address', false, (form, index) => !_.get(['dependents', index, 'childInHousehold'], form)),
                    {
                      'ui:title': 'Child’s Address',
                    }),
                  personChildLiveWith: {
                    firstName: {
                      'ui:title': 'First name of person child lives with (if applicable)'
                    },
                    lastName: {
                      'ui:title': 'Last name of person child lives with (if applicable)'
                    }
                  }
                },
              }
            }
          }
        }
      }
    }
  }
};

export default formConfig;
