

The current `formData` grew out of necessity, but I think with a little TLC we can oraganize it in a more readable and usable fasion. Looking like we can make this happen with default form functionality as well (I will add links/references soon). 

Idea here is to break the main object up by chapters, and simplifiying the structure so we can write more effective `schema`/`uiSchema` and leverage all the wonderful forms system functionality. 

Using the heavily customized pages means we are losing out on the third party validator that can run on the final sumbit, and adds an additional layer of complexity which makes the form more difficult to debug (is our custom component styling funky, or is that a platform thing?). 

The downside of using the default forms system is mainly the final review & submit page where veterans can see all of the information they added and can make final changes before submitting. The techniques used for those changes invovle forcing some buttions/text/pages onto the scren inside the review pannel which isn't ideal for screen reader users, and can be a little confusing in general. 
  - There are some default edit options that navigate the veteran back into the form to make changes which is way more ideal, but at the time of writing that is a work in progress. Other default options include modals that are a little more clear and screen reader friendly. 



### `formData`
```
{
  "data": {
    "features": {
      "enhancedFinancialStatusReport": true,
      "streamlinedWaiver": true,
      "streamlinedWaiverAssetUpdate": true,
      "reviewPageNavigationToggle": true
    },
    "gmtData": {
      "isEligibleForStreamlined": false,
      "pensionThreshold": 16037,
      "nationalThreshold": 39849,
      "gmtThreshold": 52850,
      "incomeUpperThreshold": 79275,
      "assetThreshold": 3435.25,
      "discretionaryIncomeThreshold": 660.625,
      "error": {
        "error": "example error"
      },
      "incomeBelowGmt": true,
      "incomeBelowOneFiftyGmt": true
    },
    "informationChapter": {
      "dateOfBirth":   "1950-09-06",
      "dependents": ["12","13"],
      "personalIdentification": {
        "ssn":   "3018",
        "fileNumber":   "3018"
      },
      "spouseFullName": {
        "first":   "Rosemary",
        "last":   "Woodhouse"
      },
      "selectedDebtsAndCopays": [
        {
          "_note": "Only including form added info for clarity",
          "debtType": "DEBT",
          "id": 1,
          "resolutionOption": "compromise",
          "resolutionComment": "1200.00"
        },
        {
          "_note": "Only including form added info for clarity",
          "debtType": "DEBT",
          "id": 2,
          "resolutionOption": "waiver",
          "resolutionWaiverCheck": true
        },
        {
          "_note": "Only including form added info for clarity",
          "debtType": "COPAY",
          "id": 3,
          "resolutionOption": "monthly",
          "resolutionComment": "120.00"
        }
      ],
      "veteranContactInformation": {
        "email":   "test@user.com",
        "mobilePhone": {
          "areaCode":   "510",
          "countryCode":   "1",
          "createdAt":   "2020-06-12T16:56:37.000+00:00",
          "extension":   "",
          "effectiveEndDate": null,
          "effectiveStartDate":   "2020-07-14T19:07:45.000+00:00",
          "id": 146766,
          "isInternational": false,
          "isTextable": null,
          "isTextPermitted": null,
          "isTty": null,
          "isVoicemailable": null,
          "phoneNumber":   "9224444",
          "phoneType":   "HOME",
          "sourceDate":   "2020-07-14T19:07:45.000+00:00",
          "sourceSystemUser": null,
          "transactionId":   "92c49d39-22b2-4bd6-92b4-0b7e7c63c6a9",
          "updatedAt":   "2020-07-14T19:07:46.000+00:00",
          "vet360Id":   "1273780"
        },
        "address": {
          "addressLine1":   "1200 Park Ave",
          "addressLine2":   "c/o Pixar",
          "addressPou":   "CORRESPONDENCE",
          "addressType":   "DOMESTIC",
          "city":   "Emeryville",
          "countryName":   "United States",
          "countryCodeIso2":   "US",
          "countryCodeIso3":   "USA",
          "countryCodeFips": null,
          "countyCode": null,
          "countyName": null,
          "createdAt":   "2020-05-30T03:57:20.000+00:00",
          "effectiveEndDate": null,
          "effectiveStartDate":   "2020-07-10T20:10:45.000+00:00",
          "id": 173917,
          "province": null,
          "sourceDate":   "2020-07-10T20:10:45.000+00:00",
          "sourceSystemUser": null,
          "stateCode":   "CA",
          "transactionId":   "7139aa82-fd06-45ea-a217-9654869924bd",
          "updatedAt":   "2020-07-10T20:10:46.000+00:00",
          "validationKey": null,
          "vet360Id":   "1273780",
          "zipCode":   "94608",
          "zipCodeSuffix": null
        }
      },
      "veteranFullName": {
        "first":   "Travis",
        "last":   "Jones",
        "middle":   "D"
      }
    },
    "incomeChapter": {
      "veteran": {
        "benefitIncome": {
            "compensationAndPension": "1413.68",
            "education": "123.11"
        },
        "employmentHistory": [
          {
            "type": "Full time",
            "start": "2020-3-XX",
            "end": null,
            "isCurrent": true,
            "employerName": "Veteran Current",
            "grossMonthlyIncome": "2000.00",
            "deductions": [
              {
                "name": "State tax",
                "amount": "20.00"
              }
            ]
          },
          {
            "type": "Part time",
            "start": "2019-3-XX",
            "end": "2020-3-XX",
            "isCurrent": false,
            "employerName": "Veteran Previous"
          }
        ],
        "otherIncome": [
          {
            "name": "Renter income",
            "amount": "1000.00"
          }
        ]
      },
      "spouse": {
        "benefitIncome": {
          "compensationAndPension": "1413.68",
          "education": "123.11"
        },
        "employmentHistory": [
          {
            "type": "Full time",
            "start": "2020-3-XX",
            "end": null,
            "isCurrent": true,
            "employerName": "Spouse Current",
            "grossMonthlyIncome": "2000.00",
            "deductions": [
              {
                "name": "State tax",
                "amount": "20.00"
              }
            ]
          },
          {
            "type": "Part time",
            "start": "2019-3-XX",
            "end": "2020-3-XX",
            "isCurrent": false,
            "employerName": "Spouse Previous"
          }
        ],
        "otherIncome": [
          {
            "name": "Social Security",
            "amount": "1000.00"
          }
        ]
      }
    },
    "assetsChapter": {
      "cashInBank":   "1000.00",
      "cashOnHand":   "500.00",
      "otherAssets": [
        {
          "name":   "Fine art",
          "value":   "10000.00"
        }
      ],
      "realEstateValue":   "32120.00",
      "recreationalVehicleAmount":   "6500.00",
      "vehicles": [
        {
          "make":   "Toyota",
          "model":   "Camry",
          "year":   "2010",
          "value":   "5000.00"
        }
      ]
    },
    "expensesChapter": {
      "creditCardBills": [
        {
          "_note": "null values below are due to cc not asking for that info.",
          "purpose": "Credit card payment",
          "creditorName": null,
          "originalAmount": null,
          "unpaidBalance": "1204.21",
          "amountDueMonthly": "100.00",
          "dateStarted": null,
          "amountPastDue": "100.00"
        }
      ],
      "installmentContracts": [
        {
          "purpose": "Medical bills",
          "creditorName": "Some Hospital",
          "originalAmount": "20000.00",
          "unpaidBalance": "1204.21",
          "amountDueMonthly": "100.00",
          "dateStarted": "2021-02-XX",
          "amountPastDue": "0.00"
        }
      ],
      "monthlyHousingExpenses":   "2500.00",
      "otherExpenses": [
        {
          "name": "Clothing",
          "amount": "100.00"
        },
        {
          "name": "Food",
          "amount": "200.00"
        }
      ],
      "utililtyExpenses": [
        {
          "name": "Electricity",
          "amount": "100.00"
        }
      ]
    },
    "resolutionChapter": {
      "additionalComments": "I am a veteran, here is information."
    },
    "bankruptcyChapter": {
      "dateDischarged":  "2020-01-01",
      "courtLocation": "Fairvale, California",
      "docketNumber": "11-BK-12345-SK"
    }
  }
}
```
