# Feature Specification Document

## Digital Dispute

## Due Date
Target Launch in Production May 28, 25

## Documentation

## 🧭 Overview
The FSR/5655 is a form that allows the Veteran to ask for **relief** from a financial obligation with the VA. It's an ackowldgement that they owe the money but cannot pay it at this time.

With the Digital Dispute, the Veteran can **object** to the financial obligation. Saying they don't owe the money.

## Questions
* Can we do this synchronous?
* What does C & P stand for?
* Can/should we get the debt type (C&P or education) from the FE? Is it in the payload already?

## Acceptance Criteria

### Frontend
#### V1
* User can select debts
* User can add dispute type
* User add dispute reason

#### V2
* User can select copays
* User can see debts/copays that have already been disputed (grayed out/selected?)

### Backend
#### V1
* Data from form is accepted by vets-api endpoint
* Data is validated
* Type of debt is added to payload (already in payload?)
* Data is sent to DMC

#### V2
* Record of disputes are persisted somewhere and can be provided to FE

## Gotchas/Unknowns

## Go Live Process
- [ ] Feature development
- [ ] Architecture Intent
   - [ ] [Diagram of user flow and system interactions in sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams)
   - [ ] TODO: Can't remember other things to add here
- [ ] Staging review
   - [ ] [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/commit/0e27a4d5a95c4d96e30e4f9e4e3c41ef43262606)
   - [ ] [Test artifacts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/commit/cc6647dc004af407ba8a9b6f8849ac1897d023e6)
   - [ ] TODO: Can't remember other things to add here

---

## ⚙️ Backend Requirements
- [ ] New API endpoint
- [ ] Data validation
- [ ] PDF templates are created for types of debt (2)
  - [ ] C & P Dispute
  - [ ] Education Dispute
- [ ] Type of dispute is added to payload
  - [ ] C & P Dispute 
  - [ ] Education Dispute

### 📊 Datadog Metrics
Metrics to be emitted:
- `your_app.feature_name.submission_started`
- `your_app.feature_name.submission_received`
- `your_app.feature_name.error_occurred`
- Add any custom `distribution` metrics for performance timing

### 🔔 Datadog Monitors
Monitors to be created:

### 📧 Email Notifications (May not need)
1. Staging template created
2. Staging temaplate ID added to AWS parameter store
3. Staging copy, tempalte id, and screenshot sent to security team
4. Template pushed to production
5. Production template ID added to AWS parameter store

Emails that will be triggered:
- **Submission In Progress** – User receives confirmation that submission has started
- **Submission Received** – User receives final confirmation
- **Action Needed** – User is alerted to resolve a validation issue or failure

### 🌐 Third-Party Integrations
External systems used:
- [ ] DMC

### 🔁 Internal Endpoints
Expected Rails controller actions:
- `POST /debts_api/v0/digital_disputes`
```
{
  "selected_debts": [
    {
      "support_statement": "test test",
      "dispute_reason": "I don't think I owe this debt to VA",
      "composite_debt_id": "71166",
      "label": "$120.40 overpayment for Post-9/11 GI Bill debt for books and supplies",
      "description": "Pay or request help by November 17, 2020",
      "debt_type": "DEBT",
      "selected_debt_id": "71166"
    },
    {
      "support_statement": "test test",
      "dispute_reason": "I don't think I owe this debt to VA",
      "composite_debt_id": "72321",
      "label": "$227.42 overpayment for Post-9/11 GI Bill debt for housing",
      "description": "Pay or request help by September 7, 2018",
      "debt_type": "DEBT",
      "selected_debt_id": "72321"
    }
  ],
  "veteran_information": {
    "email": "myemail72585885@unattended.com",
    "mobile_phone": {
      "area_code": "619",
      "country_code": "1",
      "phone_number": "5551234",
      "extension": "",
      "phone_type": "MOBILE",
      "source_date": "2022-02-17T20:15:44.000Z",
      "source_system_user": "",
      "transaction_id": "fdb13953-f670-4bd3-a3bb-8881eb9165dd",
      "vet360_id": "1273766",
      "updated_at": "2022-02-17T20:15:45.000Z",
      "effective_start_date": "2022-02-17T20:15:44.000Z",
      "effective_end_date": "",
      "created_at": "2022-01-12T16:22:03.000Z",
      "id": 269804,
      "is_international": false,
      "is_textable": "",
      "is_text_permitted": "",
      "is_tty": "",
      "is_voicemailable": ""
    },
    "mailing_address": {
      "address_line1": "123 Mailing Address St.",
      "address_line2": "Apt 1",
      "address_line3": "",
      "address_pou": "CORRESPONDENCE",
      "address_type": "DOMESTIC",
      "bad_address": "",
      "city": "Fulton",
      "country_code_fips": "",
      "country_code_iso2": "US",
      "country_code_iso3": "USA",
      "county_code": "",
      "country_name": "United States",
      "created_at": "2022-03-21T21:06:15.000Z",
      "effective_end_date": "",
      "effective_start_date": "2022-03-23T19:14:59.000Z",
      "id": 311999,
      "geocode_date": "2022-03-23T19:15:00.000Z",
      "geocode_precision": "",
      "international_postal_code": "",
      "latitude": 45.2248,
      "longitude": -121.3595,
      "province": "",
      "source_date": "2022-03-23T19:14:59.000Z",
      "source_system_user": "",
      "state_code": "NY",
      "transaction_id": "3ea3ecf8-3ddf-46d9-8a4b-b5554385b3fb",
      "updated_at": "2022-03-23T19:15:01.000Z",
      "validation_key": "",
      "vet360_id": "1273766",
      "zip_code": "97063",
      "zip_code_suffix": ""
    }
  }
}
```

### 🛠 Internal Services
Expected service objects used:

### 🧾 PDF Requirements
Details for PDF generation:
- Required fields and formatting
- Font and accessibility compliance
- Merge with static legal PDFs if needed
- Headers/footers
- Naming convention: `submission_{{id}}.pdf`

### 💾 Database Changes
Schema and migration needs:
- New table: `submissions`
- Fields: `user_id`, `status`, `pdf_url`, `metadata`, `timestamps`
- Indexes and constraints

### 🧪 Testing Requirements
1. Manual testing in staging
2. Verification of data submission to 3rd party teams
3. Test with Veteran in production

### 🧱 Feature Flags / Rollout Strategy
- Flag name: `enable_submission_v2`
- Gradual rollout (dev → staging → prod)

### 📁 Logging & Error Handling
What to log:
- Non-sensitive data like submission id
- Error messages

### 🧵 Background Jobs
Jobs considerations:
- Job name: `ProcessSubmissionJob`
- Retry logic (e.g., max 5 retries)
- Exhaustion block added
- Alert on exhausted retries
- Logging in exhaustion block
