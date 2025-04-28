# Feature Specification Document

## Feature name

## Due Date

## Documentation

## 🧭 Overview
Brief description of the feature, its purpose, and any relevant background context.

## Questions

## Acceptance Criteria
Requirements, due dates, and any other relevant information for the feature. This should be a bulleted list of items that need to be completed before the feature can be considered done.


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
- **Submission In Progress**
> The notification we send immediately after someone selects the Submit button on an online form.`
- **Submission Received** – User receives final confirmation
> The notification we send when we’ve received a submitted form in the system of record. This means the form is ready for processing. **Only send this status notification when we have confirmation that the request has reached the system of record.**
- **Action Needed** – User is alerted to resolve a validation issue or failure
> The error notification we send if a form submission fails to reach the system of record. This means we need the person to resubmit or take another action before we can process their form. This notification must include instructions for the person to recover from the error. There are different templates available based on the remediation steps specific to the form.

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
