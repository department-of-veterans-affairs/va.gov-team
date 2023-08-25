# Feature flags utilized in code owned by the Debt team
#### `combined_financial_status_report`
 Used in: 
- `modules/debts_api/lib/debts_api/v0/financial_status_report_service.rb` but will be removed when debts_api module is brought up to date.
- `modules/debts_api/spec/lib/debt_api/v0/financial_status_report_service_spec.rb`
- `spec/lib/debt_management_center/financial_status_report_service_spec.rb`
---
#### `combined_financial_status_report_enhancements`
##### Used nowhere.
---
#### `medical_copays_api_key_change`
Used in:
- `app/services/medical_copays/request.rb`
- `app/services/medical_copays/vbs/service.rb`
---
#### `medical_copays_six_mo_window`
##### Used in: `app/services/medical_copays/vbs/response_data.rb`
---
#### `medical_copays_zero_debt`
##### Used in: `app/services/medical_copays/vbs/service.rb`
---
#### `fsr_confirmation_email`
Used in: 
- `modules/debts_api/lib/debts_api/v0/financial_status_report_service.rb`
- `lib/debt_management_center/financial_status_report_service.rb`
