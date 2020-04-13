```
{

  veteranAddress: {
    'view:livesOnMilitaryBase': false,
    'view:livesOnMilitaryBaseInfo': {},
     countryName: 'United States',
     addressLine1: '1019 Robin Cir',
     addressLine2: 'NA',
     addressLine3: 'NA',
     city: 'Arroyo Grande',
     stateCode: 'CA',
     zipCode: '93420'
  },

  veteranInformation: {
     first: 'Adam',
     middle: 'billy',
     last: 'Huberws',
     suffix: 'Jr.',
     ssn: '370947141',
     vaFileNumber: '000000000',
     serviceNumber: '12345678',
     birthDate: '1982-02-04'
  },
   
  moreVeteranInformation: {
    phoneNumber: '2146866521',
    emailAddress: 'cohnjesse@gmail.xom'
  },
   
  childMarriage: {
    marriedChildName: {
    first: 'James',
    middle: 'Quandry',
    last: 'Beanstalk',
    suffix: 'Sr.'
    },
    dateChildMarried: '1977-02-02'
  },
  
  reportDivorce: {
    formerSpouseName: {
      first: 'Ron',
      middle: 'Walter',
      last: 'Swanson'
    },
    dateOfDivorce: '2001-02-03',
    locationOfDivorce: {
      state: 'Michigan (MI)',
      city: 'Clawson'
    },
    isMarriageAnnulledOrVoid: true,
    explanationOfAnnullmentOrVoid: 'Some stuff about the marriage being declared void.'
  },
  
  deaths: [
    {
          deceasedDateOfDeath: '2011-02-03',
          deceasedLocationOfDeath: {
            state: 'California',
            city: 'Aomplea'
      },
          fullName: {
            first: 'John',
            middle: 'Henry',
            last: 'Doe',
            suffix: 'Sr.'
      },
          dependentType: 'CHILD',
          childStatus: {
            childUnder18: true
        /* this could also be one of the following
            stepChild: true
            adopted: true
            disabled: true
            childOver18InSchool: true
            */
      }
    },
    {
          deceasedDateOfDeath: '2012-03-03',
          deceasedLocationOfDeath: {
            state: 'California',
            city: 'Clawson'
      },
          fullName: {
            first: 'Sally',
            middle: 'Bertram',
            last: 'Struthers',
            suffix: 'Jr.'
      },
          dependentType: 'SPOUSE'
    },
    {
          deceasedDateOfDeath: '2009-03-04',
          deceasedLocationOfDeath: {
            state: 'Michigan',
            city: 'Ann Arbor'
      },
          fullName: {
            first: 'Rob',
            middle: 'Bertram',
            last: 'Stark',
            suffix: 'II'
      },
          dependentType: 'DEPENDENT_PARENT'
    }
  ],
      
  veteranWasMarriedBefore: true,
      veteranMarriageHistory: [
    {
          marriageStartDate: '2007-04-03',
          marriageStartLocation: {
            state: 'Arkansas',
            city: 'Rock Island'
      },
          reasonMarriageEnded: 'OTHER',
      /* This could also be
          reasonMarriageEnded: 'DIVORCE'
          reasonMarriageEnded: 'DEATH'
          reasonMarriageEnded: 'ANNULMENT'
          */
          reasonMarriageEndedOther: 'Some other reason',
          marriageEndDate: '2009-05-05',
          marriageEndLocation: {
            state: 'Illinois',
            city: 'Rock Island'
      },
          formerSpouseName: {
            first: 'Sansa',
            middle: 'Bigfoot',
            last: 'Stark',
            suffix: 'III'
      }
    }
  ],
      spouseWasMarriedBefore: true,
      spouseMarriageHistory: [
    {
          marriageStartDate: '2008-03-03',
          marriageStartLocation: {
            state: 'Illinois',
            city: 'Rock Island'
      },
          reasonMarriageEnded: 'OTHER', 
          reasonMarriageEndedOther: 'Some other reason',
          marriageEndDate: '2010-03-04',
          marriageEndLocation: {
            state: 'Illinois',
            city: 'Rock Island'
      },
          formerSpouseName: {
            first: 'Clovis',
            middle: 'Nigel',
            last: 'The Cat',
            suffix: 'Sr.'
      }
    }
  ],
      spouseDoesLiveWithVeteran: false,
      currentSpouseReasonForSeparation: 'Somthing happened',
      currentSpouseAddress: {
        countryName: 'United States',
        addressLine1: '2037 29th St',
        city: 'Rock Island',
        stateCode: 'IL',
        zipCode: '61201'
  },
      currentMarriageDetails: {
        dateOfMarriage: '2014-03-04',
        locationOfMarriage: {
          state: 'California',
          city: 'Slawson'
    },
        marriageType: 'OTHER',
    /* This could also be
        marriageType: 'CEREMONIAL'
        marriageType: 'COMMON-LAW'
        marriageType: 'TRIBAL'
        marriageType: 'PROXY'
        */
        marriageTypeOther: 'Some Other type',
        'view:marriageTypeInformation': {}
  },
      spouseInformation: {
        spouseFullName: {
          first: 'Jenny',
          middle: 'Lauren',
          last: 'McCarthy',
          suffix: 'Sr.'
    },
        spouseSSN: '323454323',
        spouseDOB: '1981-04-04',
        isSpouseVeteran: true,
        spouseVAFileNumber: '00000000',
        spouseServiceNumber: '11111111'
  },
      
      
  stepChildren: [
    {
          stillSupportingStepchild: true,
          stepchildLivingExpensesPaid: 'More than half',
          /* This could also be
          stepchildLivingExpensesPaid: 'Less than half',
          stepchildLivingExpensesPaid: 'Half',
          */
          whoDoesTheStepchildLiveWith: {
            first: 'Adam',
            middle: 'Steven',
            last: 'Huberws'
      },
          stepchildAddress: {
            countryName: 'United States',
            addressLine1: '412 Crooks Road',
            addressLine2: 'another thing',
            addressLine3: 'some other thing',
            city: 'Clawson',
            stateCode: 'AL',
            zipCode: '48017'
      },
          first: 'Billy',
          middle: 'Bob',
          last: 'Thorton',
          suffix: 'II'
    }
  ],
  
  childNoLongerAtSchoolName: {
    first: 'Billy',
    middle: 'Yohan',
    last: 'Johnson',
    suffix: 'Sr.'
  },
  dateChildLeftSchool: '2019-03-03',
  
  childrenToAdd: [
        {
          doesChildLiveWithYou: false,
          childAddressInfo: {
            personChildLivesWith: {
              first: 'Bill',
              middle: 'Oliver',
              last: 'Bradsky'
            },
            childAddress: {
              countryName: 'United States',
              addressLine1: '1019 Robin Cir',
              addressLine2: 'NA',
              addressLine3: 'NA',
              city: 'Arroyo Grande',
              stateCode: 'CA',
              zipCode: '93420'
            }
          },
          childPlaceOfBirth: {
            state: 'California',
            city: 'Slawson'
          },
          childStatus: {
            biological: true
          },
          'view:childStatusInformation': {},
          childPreviouslyMarried: 'Yes',
          childPreviousMarriageDetails: {
            dateMarriageEnded: '2018-03-04',
            reasonMarriageEnded: 'Other',
            otherReasonMarriageEnded: 'Some other reason'
          },
          first: 'John',
          middle: 'oliver',
          last: 'Hamm',
          suffix: 'Sr.',
          ssn: '000000000',
          birthDate: '2009-03-03'
        }
      ],
}

```
