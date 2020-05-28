DMC Sample Response (GET /debts)

```json
[
   {
      "fileNumber":"000000009",
      "payeeNumber":"00",
      "personEntitled":"STUB_M",
      "deductionCode":"21",
      "benefitType":"Loan Guaranty (Principal + Interest)",
      "amountOverpaid":0.00,
      "amountWithheld":0.00,
      "debtHistory":[
         {
            "debtId":9,
            "date":"09/11/1997",
            "letterCode":"914",
            "status":"Paid In Full",
            "description":"Account balance cleared via offset, not including TOP."
         }
      ]
   },
   {
      "fileNumber":"000000009",
      "payeeNumber":"00",
      "personEntitled":"STUB_M",
      "deductionCode":"30",
      "benefitType":"Comp & Pen",
      "amountOverpaid":0.00,
      "amountWithheld":0.00,
      "debtHistory":[
         {
            "debtId":85,
            "date":"12/03/2008",
            "letterCode":"488",
            "status":"Death Status - Pending Action",
            "description":"Pending review for reclamation or next action."
         },
         {
            "debtId":85,
            "date":"02/07/2009",
            "letterCode":"905",
            "status":"Administrative Write Off",
            "description":"Full debt amount cleared by return of funds to DMC from outside entities (reclamations, insurance companies, etc.)"
         },
         {
            "debtId":85,
            "date":"02/25/2009",
            "letterCode":"914",
            "status":"Paid In Full",
            "description":"Account balance cleared via offset, not including TOP."
         }
      ]
   },
   {
      "fileNumber":"000000009",
      "payeeNumber":"00",
      "personEntitled":"STUB_M",
      "deductionCode":"30",
      "benefitType":"Comp & Pen",
      "amountOverpaid":0.00,
      "amountWithheld":0.00,
      "debtHistory":[
         {
            "debtId":4378,
            "date":"03/05/2004",
            "letterCode":"914",
            "status":"Paid In Full",
            "description":"Account balance cleared via offset, not including TOP."
         }
      ]
   },
   {
      "fileNumber":"000000009",
      "payeeNumber":"00",
      "personEntitled":"STUB_M",
      "deductionCode":"44",
      "benefitType":"CH35 EDU",
      "amountOverpaid":16000.00,
      "amountWithheld":0.00,
      "debtHistory":[
         {
            "debtId":7418,
            "date":"09/18/2012",
            "letterCode":"100",
            "status":"First Demand Letter - Inactive Benefits",
            "description":"First due process letter sent when debtor is not actively receiving any benefits."
         },
         {
            "debtId":7418,
            "date":"09/28/2012",
            "letterCode":"117",
            "status":"Second Demand Letter",
            "description":"Second demand letter where debtor has no active benefits to offset so debtor is informed that debt may be referred to CRA (60 timer), TOP, CAIVRS or Cross Servicing.  CRA is only one with timer.\r\n117A - Second collections letter sent to schools"
         },
         {
            "debtId":7418,
            "date":"10/17/2012",
            "letterCode":"212",
            "status":"Bad Address - Locator Request Sent",
            "description":"Originates from mail room Beep File (file of bad addresses to be sent to LexisNexis).  Remains in this status until LexisNexis comes back with updated address information."
         },
         {
            "debtId":7418,
            "date":"11/14/2012",
            "letterCode":"117",
            "status":"Second Demand Letter",
            "description":"Second demand letter where debtor has no active benefits to offset so debtor is informed that debt may be referred to CRA (60 timer), TOP, CAIVRS or Cross Servicing.  CRA is only one with timer.\r\n117A - Second collections letter sent to schools"
         },
         {
            "debtId":7418,
            "date":"12/11/2012",
            "letterCode":"510",
            "status":"Mailing Status Inactive/Invalid - Forced to TOP/Cross Servicing",
            "description":"Demand letters returned.  Unable to verify address with third party.  Account forced to TOP and/or CS."
         },
         {
            "debtId":7418,
            "date":"04/11/2013",
            "letterCode":"080",
            "status":"Referred To Cross Servicing",
            "description":"Debt referred to Treasury for Cross servicing"
         },
         {
            "debtId":7418,
            "date":"12/19/2014",
            "letterCode":"681",
            "status":"Returned From Cross Servicing - At TOP",
            "description":"Account returned from Treasury Cross Servicing. Account is at TOP.  TOP offsets will be applied to account as Federal funds become available."
         }
      ]
   }
```
