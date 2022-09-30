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
  
  // Report marriage of a child under 18
   
  childMarriage: {
    marriedChildName: {
    first: 'James',
    middle: 'Quandry',
    last: 'Beanstalk',
    suffix: 'Sr.'
    },
    dateChildMarried: '1977-02-02'
  },
  
  // End Report marriage of a child under 18
  
  // Report a divorce
  
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
  
  // End Report a divorce
  
  // Report the death of a dependent
  
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
  
  // End Report death of a dependent
  
  // Add spouse
      
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
     
  // End add spouse
  
  // Report stepchild is no longer part of household
      
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
  
  End stepshild no longer part of household
  
  // Report child has stopped attending school
  
  childNoLongerAtSchoolName: {
    first: 'Billy',
    middle: 'Yohan',
    last: 'Johnson',
    suffix: 'Sr.'
  },
  dateChildLeftSchool: '2019-03-03',
  
  // End report child has stopped attending school
  
  // Add a child
  
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
      
      // End add a child
      
      // 674
      
      studentDoesHaveNetworth: true,
      networthInformation: {
        savings: '3455',
        securities: '3234',
        realEstate: '5623',
        otherAssets: '4566',
        remarks: 'Some remarks about the student\'s net worth'
      },
      studentDoesEarnIncome: true,
      studentEarningsFromSchoolYear: {
        earningsFromAllEmployment: '12000',
        annualSocialSecurityPayments: '3453',
        otherAnnuitiesIncome: '30595',
        allOtherIncome: '5596'
      },
      studentWillEarnIncomeNextYear: true,
      studentExpectedEarningsNextYear: {
        earningsFromAllEmployment: '12000',
        annualSocialSecurityPayments: '3940',
        otherAnnuitiesIncome: '3989',
        allOtherIncome: '984'
      },
      studentDidAttendSchoolLastTerm: true,
      lastTermSchoolInformation: {
        schoolName: 'Another amazing school',
        schoolAddress: {
          countryName: 'United States',
          addressLine1: '2037 29th St',
          city: 'Rock Island',
          stateCode: 'AR',
          zipCode: '61201'
        },
        dateTermBegan: '2016-03-04',
        dateTermEnded: '2017-04-05',
        classesPerWeek: 4,
        hoursPerWeek: 40
      },
      termDates: {
        officialSchoolStartDate: '2019-03-03',
        expectedStudentStartDate: '2019-02-03',
        expectedGraduationDate: '2020-06-02'
      },
      programInformation: {
        studentIsEnrolledFullTime: false,
        courseOfStudy: 'An amazing program',
        classesPerWeek: 4,
        hoursPerWeek: 37
      },
      schoolInformation: {
        schoolName: 'My Great School',
        trainingProgram: 'Something amazing',
        schoolAddress: {
          countryName: 'United States',
          addressLine1: '2037 29th St',
          addressLine2: 'another line',
          addressLine3: 'Yet another line',
          city: 'Rock Island',
          stateCode: 'AR',
          zipCode: '61201'
        }
      },
      studentAddress: {
        'view:livesOnMilitaryBaseInfo': {},
        countryName: 'United States',
        addressLine1: '1019 Robin Cir',
        addressLine2: 'NA',
        addressLine3: 'NA',
        city: 'Arroyo Grande',
        stateCode: 'CA',
        zipCode: '93420'
      },
      studentWasMarried: true,
      marriageDate: '2015-03-04',
      tuitionIsPaidByGovAgency: true,
      agencyName: 'Some Agency',
      datePaymentsBegan: '2019-02-03',
      'view:674Information': {},
      studentFullName: {
        first: 'Ernie',
        middle: 'bubkis',
        last: 'McCracken',
        suffix: 'II'
      },
      studentSSN: '370947141',
      studentDOB: '2001-03-03',
      
      // end 674
}

```
