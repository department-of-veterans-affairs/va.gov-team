### CDP Data Points


Example data that we currently use
```json
[
  {
    "file_number": "string",
    "payee_number": "string",
    "person_entitled": "string",
    "deduction_code": "string",
    "benefit_type": "string",
    "amount_overpaid": "string",
    "amount_withheld": "string",
    "debt_history": [
      {
        "date": "string",
        "letter_code": "string",
        "status": "string",
        "description": "string"
      }
    ]
  }
]
```

Debt letters
```json
[
  {
    "document_id": "string",
    "doc_type": "string",
    "type_description": "string",
    "received_at": "string"
  }
]
```
Debt Portal
Here is the detailed structure of the provided JSON object in markdown format:

## Top-level Data Points:
- `hasDependentDebts`: boolean

## Debts:
- `debts`: array of objects
  - `fileNumber`: string
  - `payeeNumber`: string
  - `personEntitled`: string
  - `deductionCode`: string
  - `benefitType`: string
  - `diaryCode`: string
  - `diaryCodeDescription`: string (optional)
  - `description`: string (optional)
  - `amountOverpaid`: number
  - `amountWithheld`: number
  - `originalAr`: number
  - `currentAr`: number
  - `debtHistory`: array of objects
    - `date`: string
    - `letterCode`: string
    - `description`: string


The object contains a `hasDependentDebts` boolean field at the top level, and a `debts` array which holds multiple debt objects. Each debt object contains various fields related to the debt, such as `fileNumber`, `payeeNumber`, `personEntitled`, `deductionCode`, `benefitType`, `diaryCode`, `diaryCodeDescription` (optional), `description` (optional), `amountOverpaid`, `amountWithheld`, `originalAr`, and `currentAr`.



