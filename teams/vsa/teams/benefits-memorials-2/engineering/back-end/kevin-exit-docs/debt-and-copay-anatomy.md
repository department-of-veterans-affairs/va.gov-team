## Anatomy of a Debt
```
{
	"fileNumber": "012345678",
	"payeeNumber": "00",
	"personEntitled": "XXXXXXX",
	"deductionCode": "72",
	"benefitType": "CH33 Housing EDU",
	"diaryCode": "100",
	"diaryCodeDescription": "First Demand Letter - Inactive Benefits",
	"amountOverpaid": 9000.6,
	"amountWithheld": 0.0,
	"originalAR": 8380.02,
	"currentAR": 9000.6,
	"debtHistory": [
		{ 
			"date": "04/22/2024", 
			"letterCode": "130", 
			"description": "Debt Increase - Due Process"
		}
	]
}
```
We get our debt data from the Debt Management Center. We use the [Debt Service](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/debt_management_center/debts_service.rb) to get debts for a given *logged in* user. 

## Anatomy of a Copay
```

{
  "id": "ffffffff-ffff-ffff-ffff-ffffffffffff", // hexidecimal uuid
  "pS_SEQ_NUM": 310,
  "pS_TOT_SEQ_NUM": 312,
  "pS_FACILITY_NUM": "672",
  "pS_FAC_PHONE_NUM": "1-800-555-5555",
  "pS_TOT_STATEMENT": 23,
  "pS_STATEMENT_VAL": "0000012790{",
  "pS_STATEMENT_DATE": "10102023",
  "pS_STATEMENT_DATE_Output": "10/10/2023",
  "pS_PROCESS_DATE": "10062023",
  "pS_PROCESS_DATE_Output": "10/06/2023",
  "pH_PATIENT_LST_NME": "SUAREZ",
  "pH_PATIENT_FST_NME": "BEVIN",
  "pH_PATIENT_MID_NME": "JORMS",
  "pH_ADDRESS_1": "PO BOX 123",
  "pH_ADDRESS_2": null,
  "pH_ADDRESS_3": null,
  "pH_CITY": "CHICAGO",
  "pH_STATE": "IL",
  "pH_ZIP_CDE": "007940542",
  "pH_ZIP_CDE_Output": "00794-0542",
  "pH_CTRY_NME": null,
  "pH_AMT_DUE": 85,
  "pH_AMT_DUE_Output": "85.00&nbsp;&nbsp;",
  "pH_PREV_BAL": 0,
  "pH_PREV_BAL_Output": ".00&nbsp;&nbsp;",
  "pH_TOT_CHARGES": 85,
  "pH_TOT_CHARGES_Output": "85.00&nbsp;&nbsp;",
  "pH_TOT_CREDITS": 0,
  "pH_TOT_CREDITS_Output": ".00&nbsp;&nbsp;",
  "pH_NEW_BALANCE": 85,
  "pH_NEW_BALANCE_Output": "85.00&nbsp;&nbsp;",
  "pH_SPECIAL_NOTES": "To pay your statement online, go to www.pay.gov or call 1-888-827-4817.",
  "pH_R_O_PARA_CDES": "012345678901234567",
  "pH_NUM_OF_LINES": 19,
  "pH_DFN_NUMBER": 123456,
  "pH_CERNER_STATEMENT_NUMBER": 0,
  "pH_CERNER_PATIENT_ID": "                ",
  "pH_CERNER_ACCOUNT_NUMBER": "                ",
  "pH_ICN_NUMBER": "                 ",
  "pH_ACCOUNT_NUMBER": 6720000000123456, // facility-number padding DFN/CERNER
  "pH_Large_Font_Indcator": 0,
  "details": [
    {
      "pD_DATE_POSTED": "09282023",
      "pD_DATE_POSTED_Output": "09/28/2023",
      "pD_TRANS_DESC": "COPAY RX:blablabla",
      "pD_TRANS_DESC_Output": "COPAY RX#blablabla FILL DATE: 09/28/2023",
      "pD_TRANS_AMT": 24,
      "pD_TRANS_AMT_Output": "24.00&nbsp;&nbsp;",
      "pD_REF_NO": "123-K00F0ZZ"
    }
  ],
  "station": {
    "facilitY_NUM": "672",
    "visN_NUM": "08",
    "facilitY_DESC": "SAN JUAN VA MEDICAL CENTER (672)",
    "cyclE_NUM": "008",
    "remiT_TO_FLAG": "L",
    "maiL_INSERT_FLAG": "0",
    "staT_ADDRESS_1": "ONE VETERANS PLAZA",
    "staT_ADDRESS_2": null,
    "staT_ADDRESS_3": null,
    "city": "SAN JUAN",
    "state": "PR",
    "ziP_CDE": "009270000",
    "ziP_CDE_Output": "00927-0000",
    "baR_CDE": null,
    "teL_NUM_FLAG": "S",
    "teL_NUM": "1-866-793-4591",
    "teL_NUM_2": null,
    "contacT_INFO": null,
    "dM2_TEL_NUM": null,
    "contacT_INFO2": null,
    "toP_TEL_NUM": null,
    "lbX_FEDEX_ADDRESS_1": null,
    "lbX_FEDEX_ADDRESS_2": null,
    "lbX_FEDEX_ADDRESS_3": null,
    "lbX_FEDEX_CITY": null,
    "lbX_FEDEX_STATE": null,
    "lbX_FEDEX_ZIP_CDE": null,
    "lbX_FEDEX_BAR_CDE": null,
    "lbX_FEDEX_CONTACT": null,
    "lbX_FEDEX_CONTACT_TEL_NUM": null
  }
}
```

We get our copay statement data from VBS via [this service](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/services/medical_copays/vbs/service.rb)

---

See the [Active Record Queries](useful-active-record-queries.md) in this documentation for scripts that can pull debts and copays with only a user UUID (no login required)