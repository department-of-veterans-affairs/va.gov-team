## eMIS API  

http://viers.va.gov/cdi/eMIS/getCombatPay/v1  

### CombatPay  
segment_identifier, String  
begin_date, Date  
end_date, Date  
type_code, String  
combat_zone_country_code, String  

---  
http://viers.va.gov/cdi/eMIS/getDeployment/v1  

### DeploymentLocation  
segment_identifier, String  
country, String  
iso_alpha3_country, String  
begin_date, Date  
end_date, Date  
termination_reason_code, String  
transaction_date, Date  

### Deployment  

segment_identifier, String  
begin_date, Date  
end_date, Date  
project_code, String  
termination_reason, String  
transaction_date, Date  
locations, Array[DeploymentLocation]  

---  
http://viers.va.gov/cdi/eMIS/getDisabilities/v1  
### Disability  

disability_percent, Float  
pay_amount, Float  

---  
http://viers.va.gov/cdi/eMIS/getGuardReserveServicePeriods/v1  

### GuardReserveServicePeriod  

segment_identifier, String  
begin_date, Date  
end_date, Date  
termination_reason, String  
character_of_service_code, String  
narrative_reason_for_separation_code, String  
statute_code, String  
project_code, String  
post_911_gibill_loss_category_code, String  
training_indicator_code, String  

---  
http://viers.va.gov/cdi/eMIS/getMilitaryOccupation/v1  

### MilitaryOccupation  

segment_identifier, String  
dod_occupation_type, String  
occupation_type, String  
service_specific_occupation_type, String  
service_occupation_date, Date  

---  
http://viers.va.gov/cdi/eMIS/getMilitaryServiceEligibilityInfo/v1  

### DentalIndicator  

separation_date, Date  
dental_indicator, String  

### EligibilityDeploymentLocation  

segment_identifier, String  
begin_date, Date  
end_date, Date  
project_code, String  
locations, Array[EligibilityDeploymentLocation]  

### EligibilityMilitaryServiceEpisode  

begin_date, Date  
end_date, Date  
branch_of_service_code, String  
discharge_character_of_service_code, String  
honorable_discharge_for_va_purpose_code, String  
narrative_reason_for_separation_code, String  
deployments, Array[EligibilityDeployment]  
combat_pay, Array[EMIS::Models::CombatPay]  

### MilitaryServiceEligibilityInfo  

veteran_status, Array[EMIS::Models::VeteranStatus]  
dental_indicator, Array[DentalIndicator]  
military_service_episodes, Array[EligibilityMilitaryServiceEpisode]  

---  
http://viers.va.gov/cdi/eMIS/getMilitaryServiceEpisodes/v1  

### MilitaryServiceEpisode  

begin_date, Date  
end_date, Date  
termination_reason, String  
branch_of_service_code, String  
retirement_type_code, String  
personnel_projected_end_date, Date  
personnel_projected_end_date_certainty_code, String  
discharge_character_of_service_code, String  
honorable_discharge_for_va_purpose_code, String  
personnel_status_change_transaction_type_code, String  
narrative_reason_for_separation_code, String  
post911_gi_bill_loss_category_code, String  
mgad_loss_category_code, String  
active_duty_service_agreement_quantity, String  
initial_entry_training_end_date, Date  
uniform_service_initial_entry_date, Date  
military_accession_source_code, String  
personnel_begin_date_source, String  
personnel_termination_date_source_code, String  
active_federal_military_service_base_date, Date  
mgsr_service_agreement_duration_year_quantity_code, String  
dod_beneficiary_type_code, String  
reserve_under_age60_code, String  

---  
http://viers.va.gov/cdi/eMIS/getReserveDrillDays/v1  

### ReserveDrillDays  

segment_identifier, String  
reserve_active_duty_monthly_current_paid_days, Integer  
reserve_drill_monthly_current_paid_days, Integer  
reserve_drill_current_monthly_paid_date, Date  

---  
http://viers.va.gov/cdi/eMIS/getRetirement/v1  

### Retirement  

service_code, String  
begin_date, Date  
end_date, Date  
termination_reason_code, String  

---  
http://viers.va.gov/cdi/eMIS/getRetirementPay/v1  

### RetirementPay  

segment_identifier, String  
monthly_gross_amount, Float  
begin_date, Date  
end_date, String  
termination_reason, String  
stop_payment_reason, String  
dod_disability_percentage_code, String  
payment_status, String  
chapter61_service_gross_pay_amount, Float  
chapter61_effective_date, Date  
retirement_date_differenc_code, String  
survivor_benefit_plan_premium_monthly_cost_amount, Float  
direct_remitter_survivor_benefit_plan_amount, Float  
direct_remitter_survivor_benefit_plan_effective_date, Date  
projected_survivor_benefit_plan_annuity_amount, Float  
survivor_benefit_plan_beneficiary_type_code, String  
original_retirement_pay_date, String  
functional_account_number_code, String  

---  
http://viers.va.gov/cdi/eMIS/getSeparationPay/v1  

### SeparationPay  

segment_identifier, String  
type, String  
gross_amount, Float  
net_amount, Float  
begin_date, Date  
end_date, Date  
termination_reason, String  
disability_severance_pay_combat_code, String  
federal_income_tax_amount, Float  
status_code, String  

---  
http://viers.va.gov/cdi/eMIS/getUnitInformation/v1  

### UnitInformation  

  
segment_identifier, String  
identification_code, String  
uic_type_code, String  
assigned_date, Date  

---  
http://viers.va.gov/cdi/eMIS/getVeteranStatus/v1  

### VeteranStatus  

title38_status_code, String  
post911_deployment_indicator, String  
post911_combat_indicator, String  
pre911_deployment_indicator, String  
