# A place for helpful notes and good times
Notes for debt teams back end!


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