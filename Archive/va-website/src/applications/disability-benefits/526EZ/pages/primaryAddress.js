import _ from 'lodash';

import fullSchema526EZ from 'vets-json-schema/dist/21-526EZ-schema.json';

import dateUI from '../../../common/schemaform/definitions/date';
import SSNWidget from '../../../common/schemaform/widgets/SSNWidget';

import ReviewCardField from '../components/ReviewCardField';

import { PrimaryAddressViewField } from '../helpers';

function isValidZIP(value) {
  if (value !== null) {
    return /^\d{5}(?:(?:[-\s])?\d{4})?$/.test(value);
  }
  return true;
}

function isValidPhone(value) {
  if (value !== null) {
    return /^\d{10}$/.test(value) || /^\d{11}$/.test(value);
  }
  return true;
}

function validatePhone(errors, phone) {
  if (phone && !isValidPhone(phone)) {
    errors.addError(
      'Phone numbers must be at least 10 digits (dashes allowed)'
    );
  }
}

function validateZIP(errors, zip) {
  if (zip && !isValidZIP(zip)) {
    errors.addError('Please enter a valid 9 digit ZIP (dashes allowed)');
  }
}

const typeLabels = {
  DOMESTIC: 'Domestic',
  MILITARY: 'Military',
  INTERNATIONAL: 'International'
};

const states = [
  'AL',
  'AK',
  'AS',
  'AZ',
  'AR',
  'AA',
  'AE',
  'AP',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
  'PI',
  'UM'
];

const stateLabels = {
  AL: 'Alabama',
  AK: 'Alaska',
  AS: 'American Samoa',
  AZ: 'Arizona',
  AR: 'Arkansas',
  AA: 'Armed Forces Americas (AA)',
  AE: 'Armed Forces Europe (AE)',
  AP: 'Armed Forces Pacific (AP)',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  DC: 'District Of Columbia',
  FM: 'Federated States Of Micronesia',
  FL: 'Florida',
  GA: 'Georgia',
  GU: 'Guam',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MH: 'Marshall Islands',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  MP: 'Northern Mariana Islands',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PW: 'Palau',
  PA: 'Pennsylvania',
  PR: 'Puerto Rico',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VI: 'Virgin Islands',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
  PI: 'Rizal state',
  UM: 'United States Minor Outlying Islands'
};

const countries = [
  'USA',
  'Afghanistan',
  'Albania',
  'Algeria',
  'Angola',
  'Anguilla',
  'Antigua',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Azores',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Barbuda',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia-Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burma',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo, Democratic Republic of',
  "Congo, People's Republic of",
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'England',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Great Britain',
  'Great Britain and Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guatemala',
  'Guinea',
  'Guinea, Republic of Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel (Jerusalem)',
  'Israel (Tel Aviv)',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Leeward Islands',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Mali',
  'Malta',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Moldavia',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'Nevis',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'Northern Ireland',
  'Norway',
  'Oman',
  'Pakistan',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Philippines (restricted payments)',
  'Poland',
  'Portugal',
  'Qatar',
  'Republic of Yemen',
  'Romania',
  'Russia',
  'Rwanda',
  'Sao-Tome/Principe',
  'Saudi Arabia',
  'Scotland',
  'Senegal',
  'Serbia',
  'Serbia/Montenegro',
  'Seychelles',
  'Sicily',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Somalia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'St. Kitts',
  'St. Lucia',
  'St. Vincent',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey (Adana only)',
  'Turkey (except Adana)',
  'Turkmenistan',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Vietnam',
  'Wales',
  'Western Samoa',
  'Yemen Arab Republic',
  'Zambia',
  'Zimbabwe'
];

export const militaryPostOfficeTypeLabels = { // TODO: determine whether these are necessary
  APO: 'Army Post Office',
  FPO: 'Fleet Post Office',
  DPO: 'Diplomatic Post Office'
};

const addressUISchema = (addressName, title) => {
  return {
    'ui:title': title,
    type: {
      'ui:title': 'Type',
      'ui:options': {
        labels: typeLabels
      }
    },
    country: {
      'ui:title': 'Country'
    },
    state: {
      'ui:title': 'State',
      'ui:options': {
        labels: stateLabels,
        hideIf: formData => {
          return (
            _.get(formData, `veteran[${addressName}].country`) !== 'USA'
          );
        }
      }
    },
    addressLine1: {
      'ui:title': 'Street'
    },
    addressLine2: {
      'ui:title': 'Line 2'
    },
    addressLine3: {
      'ui:title': 'Line 3'
    },
    city: {
      'ui:title': 'City'
    },
    militaryStateCode: {
      'ui:title': 'Military State Code',
      'ui:options': {
        labels: stateLabels,
        hideIf: formData => _.get(formData, `veteran[${addressName}].type`) !== 'MILITARY'
      }
    },
    zipCode: {
      'ui:title': 'ZIP code',
      'ui:validations': [validateZIP],
      'ui:errorMessages': {
        pattern: 'Please enter a valid 9 digit ZIP code (dashes allowed)'
      },
      'ui:options': {
        widgetClassNames: 'va-input-medium-large',
        hideIf: formData =>
          _.get(formData, `veteran[${addressName}].type`) !== 'DOMESTIC'
      }
    },
    militaryPostOfficeTypeCode: {
      'ui:title': 'Military Post Office Type Code',
      'ui:options': {
        labels: militaryPostOfficeTypeLabels,
        hideIf: formData => _.get(formData, `veteran[${addressName}].type`) !== 'MILITARY'
      }
    }
  };
};

const addressSchema = {
  type: 'object',
  required: ['country', 'addressLine1'],
  properties: {
    type: {
      type: 'string',
      'enum': ['MILITARY', 'DOMESTIC', 'INTERNATIONAL']
    },
    country: {
      type: 'string',
      'enum': countries
    },
    state: {
      type: 'string',
      'enum': states
    },
    addressLine1: {
      type: 'string',
      maxLength: 35,
      pattern: "([a-zA-Z0-9-'.,,&#]([a-zA-Z0-9-'.,,&# ])?)+$"
    },
    addressLine2: {
      type: 'string',
      maxLength: 35,
      pattern: "([a-zA-Z0-9-'.,,&#]([a-zA-Z0-9-'.,,&# ])?)+$"
    },
    addressLine3: {
      type: 'string',
      maxLength: 35,
      pattern: "([a-zA-Z0-9-'.,,&#]([a-zA-Z0-9-'.,,&# ])?)+$"
    },
    city: {
      type: 'string',
      maxLength: 35,
      pattern: "([a-zA-Z0-9-'.#]([a-zA-Z0-9-'.# ])?)+$"
    },
    zipCode: {
      type: 'string'
    },
    militaryPostOfficeTypeCode: {
      type: 'string',
      'enum': ['APO', 'DPO', 'FPO']
    },
    militaryStateCode: {
      type: 'string',
      'enum': ['AA', 'AE', 'AP']
    }
  }
};

export const uiSchema = {
  veteran: {
    'ui:title': 'Contact information',
    'ui:field': ReviewCardField,
    'ui:options': {
      viewComponent: PrimaryAddressViewField
    },
    mailingAddress: addressUISchema('mailingAddress'),
    primaryPhone: {
      'ui:title': 'Primary telephone number',
      'ui:widget': SSNWidget, // TODO: determine whether to rename widget
      'ui:validations': [validatePhone],
      'ui:errorMessages': {
        pattern: 'Phone numbers must be at least 10 digits (dashes allowed)'
      },
      'ui:options': {
        widgetClassNames: 'va-input-medium-large'
      }
    },
    secondaryPhone: {
      'ui:title': 'Secondary telephone number',
      'ui:widget': SSNWidget,
      'ui:validations': [validatePhone],
      'ui:errorMessages': {
        pattern: 'Phone numbers must be at least 10 digits (dashes allowed)'
      },
      'ui:options': {
        widgetClassNames: 'va-input-medium-large'
      }
    },
    emailAddress: {
      'ui:title': 'Email address',
      'ui:errorMessages': {
        pattern: 'Please put your email in this format x@x.xxx'
      }
    },
    'view:hasForwardingAddress': {
      'ui:title':
        'I want to provide a forwarding address since my address will be changing soon.'
    },
    forwardingAddress: _.merge(
      addressUISchema('forwardingAddress', 'Forwarding address'),
      {
        'ui:options': {
          expandUnder: 'view:hasForwardingAddress'
        },
        country: {
          'ui:required': formData => _.get("veteran['view:hasForwardingAddress']", formData)
        },
        addressLine1: {
          'ui:required': formData => _.get("veteran['view:hasForwardingAddress']", formData)
        },
        effectiveDate: dateUI('Effective date')
      }
    )
  }
};

export const primaryAddressSchema = {
  type: 'object',
  properties: {
    veteran: {
      type: 'object',
      properties: {
        mailingAddress: addressSchema,
        primaryPhone: {
          type: 'string'
        },
        secondaryPhone: {
          type: 'string'
        },
        emailAddress: {
          type: 'string',
          format: 'email'
        },
        'view:hasForwardingAddress': {
          type: 'boolean'
        },
        forwardingAddress: _.merge({}, addressSchema, {
          type: 'object',
          properties: {
            effectiveDate: fullSchema526EZ.definitions.date
          }
        })
      }
    }
  }
};

