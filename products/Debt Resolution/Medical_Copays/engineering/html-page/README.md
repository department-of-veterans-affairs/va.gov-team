# Mock data thoughts

## Assumptions

- This data is for multiple statements
- data[X].id is the url param, specific to this debt, not the statement  

## Questions

- there are odd key formating names, like `baRCde`, `ziPCde` and `facilitYNum`. Are we sure those are correct?
- What happens if we have missing data?
  - No statements
  - No balance (4 fields)
- Are there any special cases that we would render a row in the table differently?

## Data needed

> `*` denotes questions about the data

- statement date *
  - `pSStatementDateOutput` and `pSStatementDate`

- Hosiptal (of facility or clinic) name
  - `station.facilitYDesc`

- Total balance *
  - ???
  - `pHAmtDue`, `pHTotCharges`, `pHTotCredits`, `pHNewBalance`
  - or is this calculated?

- Previous balance
  - `pHPrevBal`

- payments received *
  - ???
  - `pHAmtDue`, `pHTotCharges`, `pHTotCredits`, `pHNewBalance`
  - or is this calculated?

- new payments *
  - ???
  - `pHAmtDue`, `pHTotCharges`, `pHTotCredits`, `pHNewBalance`
  - or is this calculated?

- Date range *
  - start date is unknown
  - end date is `pSStatementDate`

- Statement charges
  - `details`

- Description for statement charges *
  - `pDTransDesc` and `pDTransDescOutput`
  - Which fields do we use?

- Billing reference for statement charges
  - `pDRefNo`

- Amount for statement charges
  - `pDTransAmt`

- Sender (facility)
  - `station` object

- Recipient (vet)
  - root level address fields
