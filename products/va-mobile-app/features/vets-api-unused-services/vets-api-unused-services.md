# Vets-api services Mobile has not integrated with as of 8/18/23

# Forms / Documents

  ## app/services/form1010cg/service.rb
  - APPLICATION FOR THE PROGRAM
    OF COMPREHENSIVE ASSISTANCE FOR FAMILY CAREGIVERS FORM
  - Uses MPI::Service and EMIS::VeteranStatusService.
  - /v0/caregivers_assistance_claims
  - Submit a 10-10CG form (Application for the Program of Comprehensive Assistance for Family Caregivers), can also download pdf

  ## lib/bb/client.rb
  - get_extract_status: PHR (Personal Health Record) refresh
  - get_eligible_data_classes: Build the checkboxes for the form used to make a generate report request
  - post_generate: generates report: Trigger a BB report generation
  - get_download_report: Get a health record report. Because of potentially large payload size the content must be streamed.
  - post_opt_in: Opt user in to VHIE sharing.
  - post_opt_out: Opt user out of VHIE sharing.
  - get_status: Get current status of user's VHIE sharing.

  ## lib/efolder/service.rb
  Not first class. Uses VBMS::Client.
  - list_documents
  - get_document

  ## lib/form526_backup_submission/service.rb
  - get_upload_location
  - get_upload_docs
  - upload_doc

  ## lib/forms/client.rb
  - get_all: Get all forms with an optional query parameter "query" for wildcard filtering.

  ## lib/lgy/service.rb
  - coe_status
  - get_determination
  - get_application
  - put_application
  - get_coe_file
  - post_document
  - get_coe_documents
  - get_document

  ## lib/simple_forms_api_submission/service.rb
  Proxy Service for the Lighthouse Benefits Intake API Service
  - get_upload_location
  - generate_tmp_metadata
  - get_upload_docs
  - upload_doc

# Awards/Dependents

  ## app/services/bgs/awards_service.rb
  - get_awards
  - returns a reward amount (EX: 541.83) 
  - can't find any more info on this. This service doesn't seem to be actively used by anything. 

  ## app/services/bgs/dependency_verification_service.rb
  - method: read_diaries
  - Get the veteran’s dependent status
  - /v0/dependents_verifications

  ## app/services/bgs/dependent_service.rb
  - get_dependents
  - submit_686c_form
  - /v0/dependents_applications/show
  - Get the dependents for a veteran by participant ID

  ## lib/bid/awards/service.rb
  - get_awards_pension
  - Get pension Info 

# Debts
  ## lib/debt_management_center/sharepoint/request.rb
  - upload: Upload a PDF file of 5655 form to VHA SharePoint
  - set_sharepoint_access_token: Set the access token for SharePoint authentication from Microsoft Access Control
  - upload_pdf: Upload PDF document to SharePoint site
  - get_pdf_list_item_id: Get the ID of the uploaded document's list item
  - update_list_item_fields: Populate data columns with properties needed by VHA
 
  ## lib/debt_management_center/vbs/request.rb
  - post: Make a HTTP POST call to the VBS service in order to submit VHA FSR

  ## lib/debt_management_center/debt_letter_downloader.rb
  - download debt letters
  - get_letter: by document id
  - file_name: by document id
  - list_letters: for user

  ## lib/debt_management_center/debts_service.rb
  - get_debts
  - get_debt_by_id
  - veteran_has_dependent_debts

  ## lib/debt_management_center/financial_status_report_downloader.rb
  - download financial status report pdf
  - download_pdf

  ## lib/debt_management_center/financial_status_report_service.rb
  - submit_financial_status_report: Submit a financial status report to the Debt Management Center
  - get_pdf: Downloads a copy of a user's filled Financial Status Report (VA-5655)
  - submit_combined_fsr
  - create_vba_fsr
  - create_vha_fsr
  - submit_vba_fsr
  - submit_vha_fsr

  ## lib/debt_management_center/payments_service.rb
  uses BGS::PaymentService and BGS::People::Request from gem
  - compensation_and_pension: Returns a list of BGS Payment Hashes filtered by :payment_type == 'Compensation & Pension - Recurring' and sorted by :payment_date, ascending.
  - education: Returns a list of BGS Payment Hashes filtered by :payment_type == 'Post-9/11 GI Bill' and sorted by :payment_date, ascending.

# Claims 
  ## lib/decision_review/service.rb
  - create_higher_level_review: Create a Higher-Level Review
  - create_notice_of_disagreement: Create a Notice of Disagreement
  - get_higher_level_review: Retrieve a Higher-Level Review
  - get_notice_of_disagreement: Retrieve a Notice of Disagreement
  - get_higher_level_review_contestable_issues: Get Contestable Issues for a Higher-Level Review
  - get_notice_of_disagreement_contestable_issues: Get Contestable Issues for a Notice of Disagreement
  - get_notice_of_disagreement_upload_url: Get the url to upload supporting evidence for a Notice of Disagreement
  - put_notice_of_disagreement_upload: Upload notice of disagreement
  - get_notice_of_disagreement_upload: Returns all of the data associated with a specific Notice of Disagreement Evidence Submission.

  ## lib/decision_review/utilities/pdf_validation/service.rb
  - validate_pdf_with_lighthouse

  ## lib/decision_review_v1/appeals/supplemental_claim_services.rb
  - get_supplemental_claim
  - create_supplemental_claim
  - process_form4142_submission: Creates a new 4142(a) PDF, and sends to central mail
  - get_supplemental_claim_contestable_issues
  - get_supplemental_claim_upload_url
  - put_supplemental_claim_upload
  - get_supplemental_claim_upload
  - queue_submit_evidence_uploads
  - queue_form4142

  ## lib/decision_review_v1/service.rb
  - create_higher_level_review
  - get_higher_level_review
  - get_higher_level_review_contestable_issues
  - get_legacy_appeals
  - create_notice_of_disagreement
  - get_notice_of_disagreement
  - get_notice_of_disagreement_contestable_issues
  - get_notice_of_disagreement_upload_url
  - put_notice_of_disagreement_upload
  - get_notice_of_disagreement_upload

  ## lib/lighthouse/benefits_reference_data/service.rb
  - get_data: Hit a Benefits Reference Data End-point

# Disability

  ## lib/disability_compensation/providers/intent_to_file/lighthouse_intent_to_file_provider.rb
  Uses lighthouse/benefits_claims/service
  - get_intent_to_file
  - create_intent_to_file

  ## lib/disability_compensation/providers/rated_disabilities/lighthouse_rated_disabilities_provider.rb
  not first class. Uses lighthouse/veteran_verification/service
  - get_combined_disability_rating
  - get_rated_disabilities
  - get_data

# Military Information
  
  ## lib/emis/military_information_service.rb
  - get_deployment
  - get_disabilities
  - get_guard_reserve_service_periods
  - get_military_service_eligibility_inf
  - get_military_occupation
  - get_military_service_episode
  - get_retirement
  - get_unit_information

  ## lib/emis/military_information_service_v2.rb
  - get_deployment
  - get_guard_reserve_service_periods
  - get_military_service_episodes

  ## lib/emis/payment_service.rb
  - get_combat_pay
  - get_reserve_drill_days
  - get_retirement_pay
  - get_separation_pay

  ## lib/emis/payment_service_v2.rb
  - get_pay_grade_history

  ## lib/emis/veteran_status_service.rb
  - get_veteran_status

# Facility Info from PWT
  https://www.accesstopwt.va.gov/ 
  Features: 
  - Appointment wait times and availability by specialty.
  - Quality data on how VA medical centers and nursing homes are meeting quality standards.
  - How satisfied Veterans are with health care at VA medical centers.
  - Other health care information that may be useful such as VA's COVID-19 data.

  ## lib/facilities/drivetime_bands/client.rb
  - get_drivetime_bands

  ## lib/facilities/access_satisfaction_client.rb
  - download

  ## lib/facilities/access_wait_time_client.rb
  - download

  ## lib/facilities/client.rb
  - get_all_facilities: by facility type

  ## lib/facilities/metadata/client.rb
  - get_metadata

# GI
  Discover institutions at which GI Bill benefits may be used

  ## lib/gi/client.rb
  - get_institution_autocomplete_suggestions_v0
  - get_institution_program_autocomplete_suggestions_v0
  - get_calculator_constants_v0
  - get_institution_details_v0
  - get_institution_children_v0
  - get_yellow_ribbon_programs_v0
  - get_zipcode_rate_v0
  - get_institution_autocomplete_suggestions_v1
  - get_institution_program_autocomplete_suggestions_v1
  - get_calculator_constants_v1
  - get_institution_details_v1
  - get_institution_children_v1
  - get_yellow_ribbon_programs_v1
  - get_zipcode_rate_v1

  ## lib/gi/search_client.rb
  - get_institution_search_results_v0
  - get_institution_program_search_results_v0
  - get_institution_search_results_v1
  - get_institution_program_search_results_v1

# HCA
  HCA stands for HealthCareApplication

  ## lib/hca/enrollment_eligibility/service.rb
  - lookup_user

  ## lib/hca/service.rb
  - submit_form
  - health_check

# Labs and Tests

  ## lib/lighthouse/veterans_health/client.rb
  - list_bp_observations
  - list_conditions
  - list_observations
  - list_medication_requests

  ## lib/medical_records/client.rb
  - get_patient_by_identifier
  - get_vaccine
  - list_vaccines
  - get_allergy
  - list_allergies
  - get_clinical_note
  - list_clinical_notes
  - get_diagnostic_report
  - list_labs_and_tests
  - list_vitals
  - get_condition
  - list_conditions


# Misc

  ## lib/mail_automation/client.rb
  - initiate_apcas_processing: seems to be for sending emails regarding form526 processing. The file name makes it seem much more generic than it is.
    
  ## lib/ihub/appointments/service.rb
  - appointments: Fetches a collection of veteran appointment data from iHub.

  ## lib/mdot/client.rb

  Medical Devices Ordering Tool
  
  This service integrates with the DLC API and allows veterans to reorder medical devices such as hearing aid batteries.
  
  - get_supplies: GETs medical supplies available for reorder for veteran.
  - submit_order: POSTs to DLC endpoint to create a new order.

  ## lib/preneeds/service.rb
  - get_cemeteries: POST to retrieve military cemeteries
  - receive_pre_need_application: POST to submit a {Preneeds::BurialForm}

  ## lib/search/service.rb
  - results: GETs a list of search results from Search.gov web results API

  ## lib/bgs/service.rb
  uses BGS gem
  - create_proc: not sure what a proc is in this case. doesn't appear to be about ruby procs
  - find_rating_data
  - create_proc_form
  - update_proc
  - create_participant
  - create_person
  - create_address
  - create_phone
  - create_child_school
  - create_child_student
  - create_relationship
  - find_benefit_claim_type_increment
  - vnp_create_benefit_claim
  - vnp_benefit_claim_update
  - update_manual_proc
  - insert_benefit_claim
  - get_ch33_dd_eft_info
  - find_bank_name_by_routng_trnsit_nbr
  - find_ch33_dd_eft
  - update_ch33_dd_eft
  - get_regional_office_by_zip_code
  - find_regional_offices
  - create_note

  ## modules/dhp_connected_devices/lib/fitbit/client.rb
  
  Digital Health Platform (DHP) Fitbit Pilot 

  - get_token: HTTP POST call to the Fitbit API to exchange a string of the auth code for a user token
  - auth_url_with_pkce: Generates a Fitbit auth URL with PKCE code challenge
  - get_auth_code: Retrieves auth code from callback_params
  - revoke_token: Revokes fitbit access token
