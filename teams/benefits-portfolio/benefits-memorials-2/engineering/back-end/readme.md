# A place for helpful notes and good times
Notes for debt teams back end!

Here is the table with the formatting fixed and the 3rd column removed:

**Old → New File Mapping**

| Old Location                                                         | New Location                                                                    |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------|
| `back-end/kevin-exit-docs/debt-and-copay-anatomy.md`                 | [architecture/debt-and-copay-anatomy.md](./architecture/debt-and-copay-anatomy.md) |
| `back-end/kevin-exit-docs/fsr-submission-dependency-graph.png`       | [architecture/fsr-submission-dependency-graph.png](./architecture/fsr-submission-dependency-graph.png) |
| `back-end/kevin-exit-docs/high-level-fsr-submission-graph.png`       | [architecture/high-level-fsr-submission-graph.png](./architecture/high-level-fsr-submission-graph.png) |
| `back-end/kevin-exit-docs/ongoing-future-initiatives-and-features.md`| [features/ongoing-future-initiatives-and-features.md](./features/ongoing-future-initiatives-and-features.md) |
| `back-end/kevin-exit-docs/team-contacts.md`                          | [onboarding/team-contacts.md](./onboarding/team-contacts.md) |
| `back-end/kevin-exit-docs/the-financial-status-report.md`            | [features/the-financial-status-report.md](./features/the-financial-status-report.md) |
| `back-end/kevin-exit-docs/up-and-running.md`                         | [onboarding/up-and-running.md](./onboarding/up-and-running.md) |
| `back-end/kevin-exit-docs/back-end-responsibilities.md`              | [guides-and-howtos/back-end-responsibilities.md](./guides-and-howtos/back-end-responsibilities.md) |
| `back-end/kevin-exit-docs/useful-active-record-queries.md`           | [guides-and-howtos/useful-active-record-queries.md](./guides-and-howtos/useful-active-record-queries.md) |
| `back-end/kevin-exit-docs/what-is-a-financial-status-report.md`      | [features/what-is-a-financial-status-report.md](./features/what-is-a-financial-status-report.md) |
| `back-end/onboarding/FAQ.md`                                         | [onboarding/FAQ.md](./onboarding/FAQ.md) |
| `back-end/onboarding/5655.pdf`                                       | [onboarding/5655.pdf](./onboarding/5655.pdf) |
| `back-end/onboarding/readme.md` & `back-end/onboarding/Readme.md`    | [onboarding/readme.md](./onboarding/readme.md) |
| `back-end/silent-errors/checklist.md`                                | [operations-and-monitoring/silent-errors/checklist.md](./operations-and-monitoring/silent-errors/checklist.md) |
| `back-end/silent-errors/queries.md`                                  | [operations-and-monitoring/silent-errors/queries.md](./operations-and-monitoring/silent-errors/queries.md) |
| `back-end/silent-errors/argo.md`                                     | [operations-and-monitoring/argo.md](./operations-and-monitoring/argo.md) |
| `back-end/silent-errors/datadog.md`                                  | [operations-and-monitoring/datadog.md](./operations-and-monitoring/datadog.md) |
| `back-end/silent-errors/inprogress-exploration.md`                   | [guides-and-howtos/inprogress-exploration.md](./guides-and-howtos/inprogress-exploration.md) |
| `back-end/silent-errors/local-setup.md`                              | [onboarding/local-setup.md](./onboarding/local-setup.md) |
| `back-end/silent-errors/logging_into_staging.md`                     | [guides-and-howtos/logging_into_staging.md](./guides-and-howtos/logging_into_staging.md) |
| `back-end/silent-errors/outage-tracker.md`                           | [operations-and-monitoring/outage-tracker.md](./operations-and-monitoring/outage-tracker.md) |
| `back-end/silent-errors/readme.md`                                   | [operations-and-monitoring/readme.md](./operations-and-monitoring/readme.md) |
| `back-end/silent-errors/user-relational-structure.md`                | [architecture/user-relational-structure.md](./architecture/user-relational-structure.md) |
| `back-end/silent-errors/user-uuid-to-copays-script.md`               | [guides-and-howtos/user-uuid-to-copays-script.md](./guides-and-howtos/user-uuid-to-copays-script.md) |
| `back-end/readme.md`                                                 | [readme.md](./readme.md) |

## Notable Files
This is likely going to go out of date quick but in an effort to help new team members and keep track of files covered during a logging audit, Debt team files are listed below.

### Controllers
- `app/controllers/v0/debts_controller.rb`: Controller for Debt API
- `app/controllers/v0/medical_copays_controller.rb`: Controller for Medical Copay API
- `app/controllers/v0/financial_statements_controller.rb`: Controller for Financial Statement API
- `modules/debts_api/app/controllers/debts_api/v0/financial_status_reports_calculations_controller.rb`: Controller for calculating expenses
- `modules/debts_api/app/controllers/debts_api/v0/financial_status_reports_controller.rb`: Controller for Financial Status Reports Submissions

### Services
- `modules/debts_api/lib/debts_api/v0/financial_status_report_service.rb`: Base service for FSR submission
- `modules/debts_api/lib/debts_api/v0/fsr_form_builder.rb`
- `modules/debts_api/lib/debts_api/v0/user_fsr_form.rb`
- `modules/debts_api/lib/debts_api/v0/vba_fsr_form.rb`
- `modules/debts_api/lib/debts_api/v0/fsr_form_transform/full_transform_service.rb`
- `modules/debts_api/lib/debts_api/v0/fsr_form_transform/asset_calculator.rb`
- `modules/debts_api/lib/debts_api/v0/fsr_form_transform/income_calculator.rb`
- `modules/debts_api/lib/debts_api/v0/fsr_form_transform/expense_calculator.rb`
- `modules/debts_api/lib/debts_api/v0/fsr_form_transform/additional_data_calculator.rb`
- `modules/debts_api/lib/debts_api/v0/fsr_form_transform/discretionary_income_calculator.rb`
- `modules/debts_api/lib/debts_api/v0/fsr_form_transform/installment_contracts_other_debts_calculator.rb`
- `modules/debts_api/lib/debts_api/v0/fsr_form_transform/personal_data_calculator.rb`
- `modules/debts_api/lib/debts_api/v0/fsr_form_transform/personal_identification_calculator.rb`
- `modules/debts_api/lib/debts_api/v0/fsr_form_transform/streamlined_calculator.rb`

### Models
- `app/models/in_progress_form.rb`: Model for in progress forms this is for ALL in progress forms not just our 5655
- `modules/debts_api/app/models/debts_api/v0/form5655_submission.rb`

### Jobs
- `modules/debts_api/app/sidekiq/debts_api/v0/form5655/vba_submission_job.rb`
- `modules/debts_api/app/sidekiq/debts_api/v0/form5655/vha_submission_job.rb`
- `modules/debts_api/app/workers/debts_api/v0/form5655/vha/sharepoint_submission_job.rb`
- `modules/debts_api/app/workers/debts_api/v0/form5655/vha/vbs_submission_job.rb`
