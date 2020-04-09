## FE & BE meeting Agenda topics

### What is the current data structure being used by the BE?

```
{
  "veteran": {
    "first_name": "Mark",
    "middle_name": "",
    "last_name": "Webster",
    "suffix": "Jr",
    "ssn": "796104437",
    "va_file_number": "123VAFileNumber",
    "service_number": "123service_number",
    "date_of_birth": "1970-01-01",
    "phone": "1112223334",
    "email_address": "foo@foo.com",
    "address": {
      "country": "USA",
      "line_one": "8200 Doby Ln",
      "line_two": "",
      "line_three": "",
      "city": "PASADENA",
      "state": "MD",
      "postal_code": "67201"
    },
    "spouse": {
      "type": "Spouse",
      "first_name": "CurrentSpouseFirstName",
      "middle_name": "CurrentSpouseMiddleName",
      "last_name": "CurrentSpouseLastName",
      "suffix": "",
      "ssn": "796104437",
      "phone": "1112223333",
      "date_of_birth": "1970-01-01",
      "veteran_status": false,
      "reason_for_separation": "",
      "address": {},
      "marriage": {
        "date": "1990-01-01",
        "state": "MD",
        "city": "PASADENA",
        "type": "ceremonial"
      },
      "former_spouses": [
        {
          "first_name": "CurrentSpouseFormerSpouseFirstName",
          "middle_name": "CurrentSpouseFormerSpouseMiddleName",
          "last_name": "CurrentSpouseFormerSposueLastName",
          "suffix": ""
        }
      ]
    },
    "former_spouses": [
      {
        "first_name": "SpouseFirstName",
        "middle_name": "SpouseMiddleName",
        "last_name": "SpouseLastName",
        "suffix": "SpouseSuffix",
        "marraige": {
          "date":"1990-01-01",
          "state": "MD",
          "city": "PASADENA",
          "type": "divorce",
          "reason": "divorce",
          "end_date": "1993-01-01",
          "end_state": "FL",
          "end_city":"Tampa"
        },
        "former_spouses": [
          {
            "first_name": "FormerSpouseFirstName",
            "middle_name": "FormerSpouseMiddleName",
            "last_name": "FormerSposueLastName"
          }
        ]
      }
    ],
    "dependents": [
      {
        "type": "Child",
        "first_name": "Mia",
        "middle_name": "MiddleName",
        "last_name": "Webster",
        "suffix": "",
        "ssn": "796104437",
        "dob": "1992-02-01",
        "state_of_birth": "MD",
        "city_of_birth": "PASADENA",
        "status": "biological",
        "phone": "1112223333",
        "living_with_veteran": true,
        "step_child_date": "",
        "attendingSchool": true,
        "school_info": {
          "graduation_date": "2022-04-09T13:26:32Z"
        }
      },
      {
        "type": "Child",
        "first_name": "Randall",
        "middle_name": "MiddleName",
        "last_name": "Webster",
        "suffix": "",
        "ssn": "796104437",
        "dob": "1992-02-01",
        "state_of_birth": "MD",
        "city_of_birth": "PASADENA",
        "status": "biological",
        "phone": "1112223333",
        "living_with_veteran": true,
        "step_child_date": "",
        "attending_school": false
      }
    ]
  }
}
```


### What is the current data structure being created by the FE?

```
formData: {
  stepChildren: [
    {}
  ],
  marriedChildName: {
    first: 'Steve',
    last: 'Scallion'
  },
  dateChildMarried: '2008-04-03',
  deaths: [
    {
      deceasedDateOfDeath: '2009-04-03',
      deceasedLocationOfDeath: {
        state: 'California',
        city: 'Aomplea'
      },
      fullName: {
        first: 'Ernie',
        last: 'Doe'
      },
      dependentType: 'CHILD',
      childStatus: {
        childUnder18: true
      }
    }
  ],
  veteranWasMarriedBefore: true,
  veteranMarriageHistory: [
    {
      marriageStartDate: '2011-02-03',
      marriageStartLocation: {
        state: 'California (CA)',
        city: 'Claremont'
      },
      reasonMarriageEnded: 'DIVORCE',
      marriageEndDate: '2012-10-10',
      marriageEndLocation: {
        state: 'California (CA)',
        city: 'Claremont'
      },
      formerSpouseName: {
        first: 'Kelly',
        last: 'Kapowski'
      }
    }
  ],
  spouseWasMarriedBefore: true,
  spouseMarriageHistory: [
    {
      marriageStartDate: '2012-03-04',
      marriageStartLocation: {
        state: 'California',
        city: 'Clawson'
      },
      reasonMarriageEnded: 'DIVORCE',
      marriageEndDate: '2013-05-02',
      marriageEndLocation: {
        state: 'California',
        city: 'Clawson'
      },
      formerSpouseName: {
        first: 'Adam',
        last: 'Jerk'
      }
    }
  ],
  spouseDoesLiveWithVeteran: true,
  dateOfMarriage: '2014-03-03',
  locationOfMarriage: {
    state: 'California',
    city: 'Arroyo Grande'
  },
  marriageType: 'CEREMONIAL',
  'view:marriageTypeInformation': {},
  spouseFullName: {
    first: 'Jane',
    last: 'Doe'
  },
  spouseSsn: '399873454',
  spouseDob: '1982-03-03',
  isSpouseVeteran: false,
  childrenToAdd: [
    {
      doesChildLiveWithYou: true,
      childPlaceOfBirth: {
        state: 'California',
        city: 'United States'
      },
      childStatus: {
        biological: true
      },
      'view:childStatusInformation': {},
      childPreviouslyMarried: 'No',
      first: 'Billy',
      last: 'Bob',
      ssn: '370947141',
      birthDate: '1982-05-04'
    }
  ],
  veteranAddress: {
    'view:livesOnMilitaryBaseInfo': {},
    countryName: 'United States',
    addressLine1: '1019 Robin Cir',
    addressLine2: 'NA',
    addressLine3: 'NA',
    city: 'Arroyo Grande',
    stateCode: 'CA',
    zipCode: '93420'
  },
  phoneNumber: '2146866521',
  emailAddress: 'cohnjesse@gmail.xom',
  first: 'Adam',
  last: 'Huberws',
  ssn: '370948141',
  birthDate: '1982-04-04',
  'view:selectable686Options': {
    addChild: true,
    addSpouse: true,
    reportDivorce: true,
    reportDeath: true,
    reportStepchildNotInHousehold: true,
    reportMarriageOfChildUnder18: true,
    reportChild18OrOlderIsNotAttendingSchool: true,
    report674: true
  },
  'view:additionalEvidenceDescription': {},
  formerSpouseName: {},
  locationOfDivorce: {},
  childNoLongerAtSchoolName: {},
  'view:674Information': {},
  studentFullName: {},
  studentAddress: {
    'view:livesOnMilitaryBaseInfo': {}
  },
  schoolInformation: {
    schoolAddress: {}
  },
  termDates: {},
  programInformation: {}
},
```

Each "page" in each workflow comes through as a separate JSON object, for instance the veteran information and the veteran address are two separate pages so they come through as two separate JSON objects, is this ok for BE?

Todo: Wrap each page object in a wrapper object to give context

### What conventions do we need to agree on (i.e. do all states come through as just a two digit abbreviation)?

Country needs to be just a letter code

### What are the known limitations for the BE (if any)?


### What are the known limitations for the FE (if any)?
