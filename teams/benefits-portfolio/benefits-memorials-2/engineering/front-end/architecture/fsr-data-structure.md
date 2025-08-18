
Sample Object Structure for FSR

```json
{
  "personalData": {
    "veteranContactInformation": {
      "email": "email@example.com",
      "mobilePhone": "123-456-7890",
      "address": "123 Main St, City, State, ZIP"
    },
    "employmentHistory": {
      "employmentRecords": [
        {
          "employer": "Company A",
          "position": "Developer",
          "startDate": "2020-01-01",
          "endDate": "2022-01-01",
          "isCurrent": true
        }
      ],
      "spEmploymentRecords": [
        {
          "employer": "Company B",
          "position": "Designer",
          "startDate": "2019-01-01",
          "endDate": "2021-01-01",
          "isCurrent": false
        }
      ]
    }
  },
  "questions": {
    "vetIsEmployed": true,
    "spouseIsEmployed": false,
    "hasDependents": true,
    "hasBeenAdjudicatedBankrupt": true
  },
  "reviewNavigation": true,
  "assets": {
    "monetaryAssets": [
      {
        "name": "Cash in Bank",
        "amount": "5000"
      },
      {
        "name": "Cash on Hand",
        "amount": "200"
      }
    ],
    "otherAssets": [
      {
        "name": "Car",
        "amount": "15000"
      }
    ],
    "automobiles": [
      {
        "name": "Toyota",
        "amount": "10000"
      }
    ]
  },
  "expenses": {
    "creditCardBills": [
      {
        "name": "Visa",
        "amount": "2000"
      }
    ],
    "installmentContracts": [
      {
        "name": "Car Loan",
        "amount": "10000"
      }
    ],
    "otherExpenses": [
      {
        "name": "Gym Membership",
        "amount": "50"
      }
    ],
    "utilityRecords": [
      {
        "name": "Electricity",
        "amount": "100"
      }
    ]
  },
  "additionalIncome": {
    "addlIncRecords": [
      {
        "name": "Freelance",
        "amount": "1000"
      }
    ],
    "spAddlIncome": [
      {
        "name": "Side Job",
        "amount": "500"
      }
    ]
  },
  "gmtData": {
    "incomeBelowGmt": true,
    "incomeBelowOneFiftyGmt": false,
    "assetsBelowGmt": false,
    "liquidAssetsBelowGmt": false,
    "discretionaryBelow": true,
    "cashBelowGmt": true
  },
  "additionalData": {
    "additionalComments": "No additional comments",
    "bankruptcy": {
      "dateDischarged": "2020-01-01",
      "courtLocation": "City Court",
      "docketNumber": "12345"
    }
  }
}
```
Here is the markdown version:

## Detailed Data Points and Objects:

Here is a comprehensive list of the data points and objects in the provided Financial Status Report (FSR) JSON object:

## Top-level Data Points:
- `view:enhancedFinancialStatusReport`: boolean
- `view:streamlinedWaiver`: boolean
- `view:streamlinedWaiverAssetUpdate`: boolean
- `view:reviewPageNavigationToggle`: boolean

## Questions:
- `questions`:
  - `hasRepayments`: boolean
  - `hasCreditCardBills`: boolean
  - `hasRecreationalVehicle`: boolean
  - `hasVehicle`: boolean
  - `hasRealEstate`: boolean
  - `spouseHasBenefits`: boolean
  - `isMarried`: boolean
  - `hasDependents`: string
  - `hasBeenAdjudicatedBankrupt`: boolean
  - `vetIsEmployed`: boolean
  - `spouseIsEmployed`: boolean

## View Components:
- `view:components`:
  - `view:contractsAdditionalInfo`: object
  - `view:recVehicleInfo`: object
  - `view:realEstateAdditionalInfo`: object
  - `view:maritalStatus`: object
  - `view:veteranInfo`: object
  - `view:dependentsAdditionalInfo`: object
  - `view:vaBenefitsOnFile`: object

## Assets:
- `assets`:
  - `recVehicleAmount`: string
  - `realEstateValue`: string
  - `monetaryAssets`: array of objects
    - `name`: string
    - `amount`: string
  - `otherAssets`: array of objects
    - `name`: string
    - `amount`: string
  - `automobiles`: array of objects
    - `make`: string
    - `model`: string
    - `resaleValue`: string

## Benefits:
- `benefits`:
  - `spouseBenefits`:
    - `compensationAndPension`: string
    - `education`: string

## Personal Data:
- `personalData`:
  - `spouseFullName`:
    - `first`: string
    - `last`: string
  - `veteranFullName`:
    - `first`: string
    - `last`: string
    - `middle`: string
  - `dateOfBirth`: string
  - `veteranContactInformation`:
    - `email`: string
    - `mobilePhone`: object
      - (multiple fields)
    - `address`: object
      - (multiple fields)
  - `dependents`: array of objects
    - `dependentAge`: string
  - `address`:
    - `street`: string
    - `city`: string 
    - `state`: string
    - `country`: string
    - `postalCode`: string
  - `telephoneNumber`: string
  - `emailAddress`: string
  - `employmentHistory`:
    - `veteran`: 
      - `employmentRecords`: array of objects
        - (multiple fields)
    - `spouse`:
      - `spEmploymentRecords`: array of objects
        - (multiple fields)

## Personal Identification:
- `personalIdentification`:
  - `ssn`: string
  - `fileNumber`: string

## Selected Debts and Copays:
- `selectedDebtsAndCopays`: array of objects
  - (multiple fields)

## Additional Income:
- `additionalIncome`:
  - `addlIncRecords`: array of objects
    - `name`: string
    - `amount`: string
  - `spouse`:
    - `spAddlIncome`: array of objects
      - `name`: string
      - `amount`: string

## Expenses:
- `expenses`:
  - `expenseRecords`: array of objects
    - `name`: string
    - `amount`: string
  - `creditCardBills`: array of objects
    - (multiple fields)

## Utility Records:
- `utilityRecords`: array of objects
  - `name`: string
  - `amount`: string

## Other Expenses:  
- `otherExpenses`: array of objects
  - `name`: string
  - `amount`: string

## Additional Data:
- `additionalData`:
  - `bankruptcy`:
    - `dateDischarged`: string
    - `courtLocation`: string
    - `docketNumber`: string
  - `additionalComments`: string

## Income:
- `income`: array of objects
  - `veteranOrSpouse`: string

## GMT Data:
- `gmtData`:
  - `isEligibleForStreamlined`: boolean
  - `gmtThreshold`: null
  - `error`:
    - `error`: string

## Installment Contracts:
- `installmentContracts`: array of objects
  - (multiple fields)


    
    --------------------



| File Path | Form Data |
|-----------|-----------|
| containers/App.jsx | `{ ...formData, reviewNavigation: shouldShowReviewButton, }` |
| containers/App.jsx | `{ ...formData, personalData: { ...personalData, veteranContactInformation: { email: email?.emailAddress, mobilePhone, address: mailingAddress, }, }, }` |
| containers/App.jsx | `{ ...formData, "view:enhancedFinancialStatusReport": true, "view:streamlinedWaiver": true, "view:streamlinedWaiverAssetUpdate": true, "view:reviewPageNavigationToggle": showReviewPageNavigationFeature, "view:showUpdatedExpensePages": showUpdatedExpensePages, }` |
| components/employment/EmploymentHistorySummaryCard.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: updatedEmploymentHistory, }, }` |
| components/employment/EmploymentQuestion.jsx | `{ ...data, questions: { ...data?.questions, vetIsEmployed: hasJobToAdd, }, }` |
| components/employment/EmploymentRecord.jsx | `{ ...formData, [`${userArray}`]: updated.filter(record => record.isCurrent), personalData: { ...formData.personalData, employmentHistory: { ...employmentHistory, [`${userType}`]: { ...employmentHistory[`${userType}`], employmentRecords: [...updated], }, }, }, }` |
| components/employment/EmploymentWorkDates.jsx | `{ ...data, personalData: { ...data.personalData, employmentHistory: { ...data.personalData.employmentHistory, [`${userType}`]: { ...data.personalData.employmentHistory[`${userType}`], employmentRecords: updatedRecords, }, }, }, }` |
| components/employment/EmploymentWorkDates.jsx | `{ ...data, personalData: { ...data.personalData, employmentHistory: { ...data.personalData.employmentHistory, newRecord: { ...employmentRecord }, }, }, }` |
| components/employment/EmploymentWorkDates.jsx | `{ ...data, personalData: { ...data.personalData, employmentHistory: { ...data.personalData.employmentHistory, newRecord: { ...BASE_EMPLOYMENT_RECORD }, [`${userType}`]: { ...data.personalData.employmentHistory[`${userType}`], employmentRecords: [{ ...employmentRecord }, ...employmentRecords], }, }, }, }` |
| components/employment/EnhancedEmploymentRecord.jsx | `{ ...data, personalData: { ...data.personalData, employmentHistory: { ...data.personalData.employmentHistory, [`${userType}`]: { ...data.personalData.employmentHistory[`${userType}`], employmentRecords: updatedRecords, }, }, }, }` |
| components/employment/EnhancedEmploymentRecord.jsx | `{ ...data, personalData: { ...data.personalData, employmentHistory: { ...data.personalData.employmentHistory, newRecord: { ...employmentRecord }, }, }, }` |
| components/employment/EnhancedEmploymentRecord.jsx | `{ ...data, personalData: { ...data.personalData, employmentHistory: { ...data.personalData.employmentHistory, newRecord: { ...BASE_EMPLOYMENT_RECORD }, }, }, }` |
| components/employment/EnhancedSpouseEmploymentRecord.jsx | `{ ...data, personalData: { ...data.personalData, employmentHistory: { ...data.personalData.employmentHistory, [`${userType}`]: { ...data.personalData.employmentHistory[`${userType}`], spEmploymentRecords: updatedRecords, }, }, }, }` |
| components/employment/EnhancedSpouseEmploymentRecord.jsx | `{ ...data, personalData: { ...data.personalData, employmentHistory: { ...data.personalData.employmentHistory, newRecord: { ...employmentRecord }, }, }, }` |
| components/employment/EnhancedSpouseEmploymentRecord.jsx | `{ ...data, personalData: { ...data.personalData, employmentHistory: { ...data.personalData.employmentHistory, newRecord: { ...BASE_EMPLOYMENT_RECORD }, }, }, }` |
| components/employment/SpouseEmploymentQuestion.jsx | `{ ...data, questions: { ...data?.questions, spouseIsEmployed: hasJobToAdd, }, }` |
| components/employment/SpouseEmploymentWorkDates.jsx | `{ ...data, personalData: { ...data.personalData, employmentHistory: { ...data.personalData.employmentHistory, [`${userType}`]: { ...data.personalData.employmentHistory[`${userType}`], spEmploymentRecords: updatedRecords, }, }, }, }` |
| components/employment/SpouseEmploymentWorkDates.jsx | `{ ...data, personalData: { ...data.personalData, employmentHistory: { ...data.personalData.employmentHistory, newRecord: { ...employmentRecord }, }, }, }` |
| components/employment/SpouseEmploymentWorkDates.jsx | `{ ...data, personalData: { ...data.personalData, employmentHistory: { ...data.personalData.employmentHistory, newRecord: { ...BASE_EMPLOYMENT_RECORD }, [`${userType}`]: { ...data.personalData.employmentHistory[`${userType}`], spEmploymentRecords: [ { ...employmentRecord }, ...spEmploymentRecords, ], }, }, }, }` |
| components/household/DependentCount.jsx | `{ ...data, reviewNavigation: false, }` |
| components/household/DependentCount.jsx | `{ ...data, questions: { ...data?.questions, hasDependents: newValue, }, personalData: newValue === "0" ? { ...data?.personalData, dependents: [] } : data?.personalData, }` |
| components/householdExpenses/CreditCardBillSummary.jsx | `{ ...formData, expenses: { ...expenses, creditCardBills: creditCardBills.filter( (_, index) => index !== deleteIndex, ), }, }` |
| components/householdExpenses/CreditCardBill.jsx | `{ ...data, expenses: { ...data.expenses, creditCardBills: newCreditCardBillArray, }, }` |
| components/householdExpenses/HouseholdExpensesExplainerWidget.jsx | `{ ...data, reviewNavigation: false, }` |
| components/householdExpenses/InstallmentContractSummary.jsx | `{ ...formData, installmentContracts: installmentContracts.filter( (_, index) => index !== deleteIndex, ), }` |
| components/householdIncome/AdditionalIncomeCheckList.jsx | `{ ...data, gmtData: { ...gmtData, incomeBelowGmt: calculatedIncome < gmtData?.gmtThreshold, incomeBelowOneFiftyGmt: calculatedIncome < gmtData?.incomeUpperThreshold, }, }` |
| components/householdIncome/AdditionalIncomeCheckList.jsx | `{ ...data, additionalIncome: { ...additionalIncome, addlIncRecords: addlIncRecords.filter( source => source.name !== value, ), }, }` |
| components/householdIncome/AdditionalIncomeCheckList.jsx | `{ ...data, additionalIncome: { ...additionalIncome, addlIncRecords: [...addlIncRecords, { name: value, amount: "" }], }, }` |
| components/householdIncome/AdditionalIncomeCheckList.jsx | `{ ...data, reviewNavigation: false, }` |
| components/householdExpenses/InstallmentContract.jsx | `{ ...data, installmentContracts: newInstallmentContractArray, }` |
| components/householdIncome/AddIncome.jsx | `{ ...data, additionalIncome: { ...additionalIncome, addlIncRecords: newAssets, }, }` |
| components/householdIncome/GrossMonthlyIncomeInput.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, [`${userType}`]: { ...formData.personalData.employmentHistory[`${userType}`], employmentRecords: updatedRecords, }, }, }, }` |
| components/householdIncome/GrossMonthlyIncomeInput.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, newRecord: { ...employmentRecord, grossMonthlyIncome: grossMonthlyIncome.value, }, }, }, }` |
| components/bankruptcy/BankruptcyDetails.jsx | `{ ...data, reviewNavigation: false, }` |
| components/bankruptcy/BankruptcyDetails.jsx | `{ ...data, additionalData: { ...data?.additionalData, bankruptcy: { dateDischarged, courtLocation, docketNumber, }, }, }` |
| components/householdIncome/OtherIncomeSummary.jsx | `{ ...data, gmtData: { ...gmtData, incomeBelowGmt: calculatedIncome < gmtData?.gmtThreshold, incomeBelowOneFiftyGmt: calculatedIncome < gmtData?.incomeUpperThreshold, }, }` |
| components/householdIncome/OtherIncomeSummary.jsx | `{ ...data, additionalIncome: { ...additionalIncome, addlIncRecords: addlIncRecords.filter( (_, index) => index !== deleteIndex, ), }, }` |
| components/householdIncome/OtherIncomeSummary.jsx | `{ ...data, reviewNavigation: false, }` |
| components/householdIncome/PayrollDeductionInputList.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, [`${userType}`]: { ...formData.personalData.employmentHistory[`${userType}`], employmentRecords: updatedRecords, }, }, }, }` |
| components/householdIncome/PayrollDeductionInputList.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, newRecord: { ...BASE_EMPLOYMENT_RECORD }, [`${userType}`]: { ...formData.personalData.employmentHistory[`${userType}`], employmentRecords: [ { ...employmentRecord, deductions: selectedDeductions }, ...employmentRecords, ], }, }, }, }` |
| components/householdIncome/PayrollDeductionChecklist.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, [`${userType}`]: { ...formData.personalData.employmentHistory[`${userType}`], employmentRecords: updatedRecords, }, }, }, }` |
| components/householdIncome/PayrollDeductionChecklist.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, newRecord: { ...employmentRecord, deductions: selectedDeductions }, }, }, }` |
| components/householdIncome/PayrollDeductionChecklist.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, newRecord: { ...BASE_EMPLOYMENT_RECORD, }, [`${userType}`]: { ...formData.personalData.employmentHistory[`${userType}`], employmentRecords: [ { ...employmentRecord, deductions: selectedDeductions, }, ...employmentRecords, ], }, }, }, }` |
| components/householdIncome/SpouseAdditionalIncomeCheckList.jsx | `{ ...data, gmtData: { ...gmtData, incomeBelowGmt: calculatedIncome < gmtData?.gmtThreshold, incomeBelowOneFiftyGmt: calculatedIncome < gmtData?.incomeUpperThreshold, }, }` |
| components/householdIncome/SpouseAdditionalIncomeCheckList.jsx | `{ ...data, additionalIncome: { ...additionalIncome, spouse: { spAddlIncome: spAddlIncome.filter( source => source.name !== value, ), }, }, }` |
| components/householdIncome/SpouseAdditionalIncomeCheckList.jsx | `{ ...data, additionalIncome: { ...additionalIncome, spouse: { ...additionalIncome.spouse, spAddlIncome: [...spAddlIncome, { name: value, amount: "" }], }, }, }` |
| components/householdIncome/SpouseAdditionalIncomeCheckList.jsx | `{ ...data, reviewNavigation: false, }` |
| components/householdIncome/SpouseAddIncome.jsx | `{ ...data, additionalIncome: { ...additionalIncome, spouse: { spAddlIncome: newAssets, }, }, }` |
| components/householdIncome/SpouseOtherIncomeSummary.jsx | `{ ...data, gmtData: { ...gmtData, incomeBelowGmt: calculatedIncome < gmtData?.gmtThreshold, incomeBelowOneFiftyGmt: calculatedIncome < gmtData?.incomeUpperThreshold, }, }` |
| components/householdIncome/SpouseOtherIncomeSummary.jsx | `{ ...data, additionalIncome: { ...additionalIncome, spouse: { spAddlIncome: spAddlIncome.filter( (_, index) => index !== deleteIndex, ), }, }, }` |
| components/householdIncome/SpouseOtherIncomeSummary.jsx | `{ ...data, reviewNavigation: false, }` |
| components/householdIncome/SpousePayrollDeductionChecklist.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, [`${userType}`]: { ...formData.personalData.employmentHistory[`${userType}`], spEmploymentRecords: updatedRecords, }, }, }, }` |
| components/householdIncome/SpousePayrollDeductionChecklist.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, newRecord: { ...employmentRecord, deductions: selectedDeductions }, }, }, }` |
| components/householdIncome/SpousePayrollDeductionChecklist.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, newRecord: { ...BASE_EMPLOYMENT_RECORD }, [`${userType}`]: { ...formData.personalData.employmentHistory[`${userType}`], spEmploymentRecords: [ { ...employmentRecord, deductions: selectedDeductions, }, ...spEmploymentRecords, ], }, }, }, }` |
| components/householdIncome/SpouseGrossMonthlyIncomeInput.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, [`${userType}`]: { ...formData.personalData.employmentHistory[`${userType}`], spEmploymentRecords: updatedRecords, }, }, }, }` |
| components/householdIncome/SpouseGrossMonthlyIncomeInput.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, newRecord: { ...employmentRecord, grossMonthlyIncome: grossMonthlyIncome.value, }, }, }, }` |
| components/householdIncome/SpousePayrollDeductionInputList.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, [`${userType}`]: { ...formData.personalData.employmentHistory[`${userType}`], spEmploymentRecords: updatedRecords, }, }, }, }` |
| components/householdIncome/SpousePayrollDeductionInputList.jsx | `{ ...formData, personalData: { ...formData.personalData, employmentHistory: { ...formData.personalData.employmentHistory, newRecord: { ...BASE_EMPLOYMENT_RECORD }, [`${userType}`]: { ...formData.personalData.employmentHistory[`${userType}`], spEmploymentRecords: [ { ...employmentRecord, deductions: selectedDeductions }, ...spEmploymentRecords, ], }, }, }, }` |
| components/monetary/CashInBank.jsx | `{ ...data, assets: { ...assets, monetaryAssets: [ ...newMonetaryAssetsArray, { name: CASH_IN_BANK, amount: cash }, ], }, gmtData: { ...gmtData, liquidAssetsBelowGmt: liquidCash < gmtData?.assetThreshold, }, }` |
| components/monetary/MonetaryCheckList.jsx | `{ ...data, assets: { ...assets, monetaryAssets: monetaryAssets.filter( source => source.name !== value, ), }, }` |
| components/monetary/MonetaryCheckList.jsx | `{ ...data, assets: { ...assets, monetaryAssets: [...monetaryAssets, { name: value, amount: "" }], }, }` |
| components/monetary/MonetaryCheckList.jsx | `{ ...data, reviewNavigation: false, }` |
| components/monetary/CashOnHand.jsx | `{ ...data, assets: { ...data.assets, monetaryAssets: [ ...filteredMonetaryAssets, { name: CASH_ON_HAND, amount: cash }, ], }, }` |
| components/monetary/CashOnHand.jsx | `{ ...data, assets: { ...data.assets, cashOnHand: cash, }, gmtData: { ...gmtData, cashBelowGmt: safeNumber(cash) < gmtData?.assetThreshold, }, }` |
| components/monetary/CashOnHand.jsx | `{ ...data, reviewNavigation: false, }` |
| components/bankruptcy/BankruptcyQuestion.jsx | `{ ...data, questions: { ...data?.questions, hasBeenAdjudicatedBankrupt: val, }, }` |
| components/bankruptcy/BankruptcyQuestion.jsx | `{ ...data, reviewNavigation: false, }` |
| components/otherAssets/OtherAssetsChecklist.jsx | `{ ...data, gmtData: { ...gmtData, assetsBelowGmt: calculatedAssets < gmtData?.assetThreshold, }, }` |
| components/otherAssets/OtherAssetsChecklist.jsx | `{ ...data, assets: { ...assets, otherAssets: otherAssets.filter(source => source.name !== value), }, }` |
| components/otherAssets/OtherAssetsChecklist.jsx | `{ ...data, assets: { ...assets, otherAssets: [...otherAssets, { name: value, amount: "" }], }, }` |
| components/otherAssets/OtherAssetsChecklist.jsx | `{ ...data, reviewNavigation: false, }` |
| components/otherAssets/AddAsset.jsx | `{ ...data, assets: { ...assets, otherAssets: newAssets, }, }` |
| components/otherAssets/OtherAssetsSummary.jsx | `{ ...data, gmtData: { ...gmtData, assetsBelowGmt: calculatedAssets < gmtData?.assetThreshold, }, }` |
| components/otherAssets/OtherAssetsSummary.jsx | `{ ...data, assets: { ...assets, otherAssets: otherAssets.filter((_, index) => index !== deleteIndex), }, }` |
| components/otherAssets/OtherAssetsSummary.jsx | `{ ...data, reviewNavigation: false, }` |
| components/otherAssets/VehicleSummaryWidget.jsx | `{ ...data, assets: { ...assets, automobiles: automobiles.filter((_, index) => index !== deleteIndex), }, }` |
| components/otherExpenses/AddOtherExpense.jsx | `{ ...data, otherExpenses: newExpenses, }` |
| components/otherExpenses/OtherExpensesChecklist.jsx | `{ ...data, otherExpenses: otherExpenses.filter(source => source.name !== value), }` |
| components/otherExpenses/OtherExpensesChecklist.jsx | `{ ...data, otherExpenses: [...otherExpenses, { name: value, amount: "" }], }` |
| components/otherExpenses/OtherExpensesChecklist.jsx | `{ ...data, gmtData: { ...gmtData, discretionaryBelow: calculatedDiscretionaryIncome < gmtData?.discretionaryIncomeThreshold, }, }` |
| components/otherExpenses/OtherExpensesChecklist.jsx | `{ ...data, reviewNavigation: false, }` |
| components/otherExpenses/OtherExpensesSummary.jsx | `{ ...data, gmtData: { ...gmtData, discretionaryBelow: calculatedDiscretionaryIncome < gmtData?.discretionaryIncomeThreshold, }, }` |
| components/otherExpenses/OtherExpensesSummary.jsx | `{ ...data, otherExpenses: newExpenses, }` |
| components/otherExpenses/OtherExpensesSummary.jsx | `{ ...data, reviewNavigation: false, }` |
| components/resolution/ResolutionComments.jsx | `{ ...data, additionalData: { ...additionalData, additionalComments: commentText, }, }` |
| components/resolution/ResolutionComments.jsx | `{ ...data, reviewNavigation: false, }` |
| components/resolution/ResolutionExplainerWidget.jsx | `{ ...data, reviewNavigation: false, }` |
| components/otherAssets/EnhancedVehicleRecord.jsx | `{ ...data, assets: { ...data.assets, automobiles: newVehicleArray, }, }` |
| components/utilityBills/AddUtilityBill.jsx | `{ ...data, utilityRecords: newUtility, }` |
| components/utilityBills/UtilityBillSummary.jsx | `{ ...data, utilityRecords: utilityRecords.filter( (_, index) => index !== deleteIndex, ), }` |
| components/veteranInformation/VeteranInformation.jsx | `{ ...data, reviewNavigation: false, }` |
