# Feature Specification Document

## Pay.gov Integration

## Documentation
* [Link to super epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105733)
* [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/Debt%20Resolution/Pay.gov%20for%20Benefit%20Overpayment%20Debt%20Payments)
* [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Pay.gov%20for%20Benefit%20Overpayment%20Debt%20Payments/product%20outline.md)
* [Discovery FAQ Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Pay.gov%20for%20Benefit%20Overpayment%20Debt%20Payments/Discovery%20FAQ%20Document.md)

* We need the _REAL_ documentation

### Docs I found
* [Technical implementation](https://imlive.s3.amazonaws.com/Federal%20Government/ID82112911311871723120403732303947743906/ESM%20RFI_Attachment%204_Pay.Gov%20Technical%20Overview.pdf?utm_source=chatgpt.com)
* [Getting Started](https://www.fiscal.treasury.gov/pay.gov/getting-started.html?utm_source=chatgpt.com)
* [pay.gov.sg??????](https://guide.pay.gov.sg/)

## 🧭 Overview
Brief description of the feature, its purpose, and any relevant background context.

## Questions
* Is this even permitted in va.gov?
* Do we handle payment info on our server? (PCI compliance)
* Who was the latest integration? How long did it take?
  * peace corp
* Do we persist anything?
* Do we have to keep record of what debt was paid?
  * Are there endpoints in pay.gov that keep track of payments?
* What user id is used by pay.gov? ICN?

## Acceptance Criteria
Requirements, due dates, and any other relevant information for the feature. This should be a bulleted list of items that need to be completed before the feature can be considered done.


## Gotchas/Unknowns


## Go Live Process
1. Feature development
2. Architecture Intent
   * [Diagram of user flow and system interactions in sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams)
   *  TODO:
2. Staging review
   * [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/commit/0e27a4d5a95c4d96e30e4f9e4e3c41ef43262606)
   * [Test artifacts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/commit/cc6647dc004af407ba8a9b6f8849ac1897d023e6)
   * TODO:

---

## ⚙️ Backend Requirements

### 📊 Datadog Metrics
Metrics to be emitted:
- `your_app.feature_name.submission_started`
- `your_app.feature_name.submission_received`
- `your_app.feature_name.error_occurred`
- Add any custom `distribution` metrics for performance timing

### 🔔 Datadog Monitors
Monitors to be created:

### 📧 Email Notifications
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
- [ ] VBA
- [ ] VBS
- [ ] DMC
- [ ] Any other services

### 🔁 Internal Endpoints
Expected Rails controller actions:
- `POST /api/v1/submissions`
- `GET /api/v1/submissions/:id`
- `PUT /api/v1/submissions/:id`
- `POST /api/v1/submissions/:id/validate`

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
Idea:
```
create_table :payment_transactions do |t|
  t.string   :external_id, null: false                      # e.g., Pay.gov Tracking ID or similar
  t.string   :provider, null: false                         # e.g., 'paygov', 'va_internal', etc.
  t.string   :form_name, null: false                        # form or flow type
  t.string   :status, null: false, default: 'initiated'     # initiated, pending, completed, failed
  t.string   :payment_method                                # e.g., 'card', 'ach'
  t.string   :confirmation_number                           # returned on success
  t.string   :user_uuid, null: false                        # veteran/user identifier
  t.decimal  :amount, precision: 10, scale: 2, null: false  # amount charged
  t.jsonb    :request_metadata                              # payload sent to the provider
  t.jsonb    :response_metadata                             # provider’s response
  t.datetime :expires_at                                    # optional for hosted links
  t.datetime :completed_at                                  # success timestamp
  t.timestamps
end

add_index :payment_transactions, :external_id, unique: true
add_index :payment_transactions, :provider
add_index :payment_transactions, :user_uuid
add_index :payment_transactions, :status
```

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
