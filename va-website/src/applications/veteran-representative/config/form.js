import fullSchema from '../2122-schema.json';
import _ from 'lodash/fp';
import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';

import fullNameUI from '../../common/schemaform/definitions/fullName';
import ssnUI from '../../common/schemaform/definitions/ssn';
import * as addressUI from '../../common/schemaform/definitions/address.js';
import currentOrPastDateUI from '../../common/schemaform/definitions/currentOrPastDate';
import phoneUI from '../../common/schemaform/definitions/phone';

const {
  veteranFullName,
  veteranSSN,
  insuranceNumber,
  claimantFullName,
  claimantEmail,
  claimantDaytimePhone,
  claimantEveningPhone,
  relationship,
  appointmentDate,
  organizationName,
  organizationEmail,
  organizationRepresentativeName,
  organizationRepresentativeTitle,
  authorization,
  disclosureExceptionDrugAbuse,
  disclosureExceptionAlcoholism,
  disclosureExceptionHIV,
  disclosureExceptionSickleCellAnemia,
  authorizationToChangeClaimantAddress,
} = fullSchema.properties;

const { fullName, address, vaFileNumber } = fullSchema.definitions;

const authorizationForRepresentativeAccessToRecordsDescription =
  'I authorize the VA facility having custody of my VA claimant records to disclose to the service organization named in Item 3A treatment records relating to drug abuse, alcoholism or alcohol abuse, infection with the human immunodeficiency virus (HIV), or sickle cell anemia. Redisclosure of these records by my service organization representative, other than to the VA or the Court of Appeals for Veterans Claims, is not authorized without my further consent. This authorization will remain in effect until the earlier of the following events: (1) I revoke this authorization by filing a written revocation with VA; or (2) I revoke the appointment of the service organization named above, either by explicit revocation or the appointment if another representative';

const limitationOfConsentDescription =
  'I authorize disclosure of records related to treatment for all conditions listed in Item 12 except:';

const authorizationToChangeClaimantAddressDescription =
  'I authorize any official representative of the organization named in Item 3A to act on my behalf to change my address in my VA records. This authorization does not extend to any other organization without my further written consent. This authorization will remain in effect until the earlier of the following events: (1) I file a written revocation with VA; or (2) I appoint another representative, or (3) I have been determined unable to manage my financial affairs and the individual or organization named in Item 3A is not my appointed fiduciary';

const formConfig = {
  urlPrefix: '/',
  submitUrl: '/v0/vso_appointments',
  trackingPrefix: 'form-2122-',
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  formId: '21-22',
  version: 0,
  prefillEnabled: true,
  savedFormMessages: {
    notFound: 'Please start over to apply for veteran representative.',
    noAuth:
      'Please sign in again to continue your application for veteran representative.',
  },
  title: 'Appoint a Veteran Service Officer as your representative',
  defaultDefinitions: {
    fullName,
    address,
    vaFileNumber,
  },
  chapters: {
    veteranInformation: {
      title: 'Veteran Information',
      pages: {
        veteranInformation: {
          path: 'veteran-information',
          title: 'Veteran information',
          uiSchema: {
            veteranFullName: _.merge(fullNameUI, {
              first: {
                'ui:title': 'Veteran’s first name',
              },
              last: {
                'ui:title': 'Veteran’s last name',
              },
              middle: {
                'ui:title': 'Veteran’s middle name',
              },
              suffix: {
                'ui:title': 'Veteran’s suffix',
              },
            }),
            veteranSSN: _.merge(ssnUI, {
              'ui:title': 'Veteran’s Social Security number'
            }),
            vaFileNumber: {
              'ui:title': 'Veteran’s VA file number',
              'ui:errorMessages': {
                pattern: 'Your VA file number must be between 7 to 9 digits'
              }
            },
            insuranceNumber: { 'ui:title': 'Veteran’s Insurance number' },
          },
          schema: {
            type: 'object',
            required: [
              'veteranFullName',
              'veteranSSN',
            ],
            properties: {
              veteranFullName,
              veteranSSN,
              vaFileNumber,
              insuranceNumber,
            },
          },
        },
      },
    },
    claimantInformation: {
      title: 'Claimant Information',
      pages: {
        claimantInformation: {
          path: 'claimant-information',
          title: 'Claimant information',
          uiSchema: {
            claimantFullName: _.merge(fullNameUI, {
              first: {
                'ui:title': 'Claimant’s first name',
              },
              last: {
                'ui:title': 'Claimant’s last name',
              },
              middle: {
                'ui:title': 'Claimant’s middle name',
              },
              suffix: {
                'ui:title': 'Claimant’s suffix',
              },
            }),
            relationship: {
              'ui:select': 'Relationship to Veteran',
            },
            claimantAddress: addressUI.uiSchema('Claimant’s Address'),
            claimantEmail: { 'ui:title': 'Email address' },
            claimantDaytimePhone: phoneUI('Daytime phone number'),
            claimantEveningPhone: phoneUI('Evening phone number'),
            appointmentDate: currentOrPastDateUI(
              'Date of claimaint’s appointment'
            ),
          },
          schema: {
            type: 'object',
            required: [
              'claimantFullName',
              'relationship',
              'claimantAddress',
              'claimantEmail',
            ],
            properties: {
              claimantFullName,
              relationship,
              claimantAddress: addressUI.schema(fullSchema, true),
              claimantEmail,
              claimantDaytimePhone,
              claimantEveningPhone,
              appointmentDate,
            },
          },
        },
      },
    },
    veteranServiceOrganization: {
      title: 'Veteran Service Organization',
      pages: {
        veteranServiceOrganization: {
          path: 'veteran-service-organization',
          title: 'Veteran service organization',
          uiSchema: {
            organizationName: { 'ui:title': 'Service organization name' },
            organizationEmail: {
              'ui:title': 'Service organization email address',
            },
            organizationRepresentativeName: {
              'ui:title': 'Official representative’s name',
            },
            organizationRepresentativeTitle: {
              'ui:title': 'Official representative’s job title',
            },
          },
          schema: {
            type: 'object',
            required: [
              'organizationName',
              'organizationEmail',
              'organizationRepresentativeName',
              'organizationRepresentativeTitle',
            ],
            properties: {
              organizationName,
              organizationEmail,
              organizationRepresentativeName,
              organizationRepresentativeTitle,
            },
          },
        },
      },
    },
    authorizationForRepresentativeAccessToRecords: {
      title:
        'Authorization for Representative’s Access to Records',
      pages: {
        authorizationForRepresentativeAccessToRecords: {
          path: 'authorization-for-representative-access-to-records',
          title:
            'Authorization for representative’s access to records',
          uiSchema: {
            authorization: {
              'ui:title': authorizationForRepresentativeAccessToRecordsDescription,
            },
          },
          schema: {
            type: 'object',
            properties: {
              authorization,
            },
          },
        },
      },
    },
    limitationOfConsent: {
      title: 'Limitation of Consent',
      pages: {
        limitationOfConsent: {
          path: 'limitation-of-consent',
          title: 'Limitation of consent',
          uiSchema: {
            'ui:title': limitationOfConsentDescription,
            disclosureExceptionHIV: {
              'ui:title':
                'Infection with the Human Immunodeficiency Virus (HIV)',
            },
            disclosureExceptionDrugAbuse: {
              'ui:title': 'Drug abuse',
            },
            disclosureExceptionAlcoholism: {
              'ui:title': 'Alcoholism or Alcohol abuse',
            },
            disclosureExceptionSickleCellAnemia: {
              'ui:title': 'Sickle cell anemia',
            },
          },
          schema: {
            type: 'object',
            properties: {
              disclosureExceptionDrugAbuse,
              disclosureExceptionAlcoholism,
              disclosureExceptionHIV,
              disclosureExceptionSickleCellAnemia,
            },
          },
        },
      },
    },
    authorizationToChangeClaimantAddress: {
      title: 'Authorization to Change Claimant’s Address',
      pages: {
        authorizationToChangeClaimantAddress: {
          path: 'authorization-to-change-claimant-address',
          title: 'Authorization to change claimant’s address',
          uiSchema: {
            authorizationToChangeClaimantAddress: {
              'ui:title': authorizationToChangeClaimantAddressDescription,
            },
          },
          schema: {
            type: 'object',
            properties: {
              authorizationToChangeClaimantAddress,
            },
          },
        },
      },
    },
  },
};

export default formConfig;
