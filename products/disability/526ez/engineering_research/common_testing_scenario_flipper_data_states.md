## Form 526 Common Testing Scenario Flipper and data states 

#### Problem Statement
We noticed that devs newer to the Disability Benefits Crew and VA space weren't clear on how to set up local or staging environment test submissions to observe certain pages and behavior for testing purposes. 

#### Solution
We want to document recent and historical Flipper and other data states to make testing scenarios easier to set up. 

---
### How to know what setup is needed for which feature
First, start by looking in the Form Config in vets-website `src/applications/disability-benefits/all-claims/config/form.js` to see the page or related set of pages you want to display. 

The `depends` logic for the page will show you in what state you need the data to be. 

#### Mapping Flipper states between Frontend and Backend
_TODO: explain metadata mappings in vets-api/config/form_profile_mappings/21-526EZ.yml (like startedFormVersion: [prefill_526, started_form_version] and
syncModern0781Flow: [prefill_526, sync_modern_0781_flow])_

Frontend mapping (from vets-website src/platform/utilities/feature-toggles/featureFlagNames.json)
```
{
  "disability526ToxicExposure": "disability_526_toxic_exposure",
  "disability526Enable2024Form4142": "disability_526_form4142_use_2024_version",
  "disability526ShowConfirmationReview": "disability_526_show_confirmation_review",
  "disabilityCompensationToxicExposureDestructionModal": "disability_compensation_toxic_exposure_destruction_modal",
  "disability526ToxicExposureOptOutDataPurge": "disability_526_toxic_exposure_opt_out_data_purge",
  "disablityBenefitsBrowserMonitoringEnabled": "disablity_benefits_browser_monitoring_enabled",
  }
```

#### Set the Flipper State
You can set Flipper states in two ways:
- in the vets-api console by starting a Rails console, and something like `Flipper.enable(:your_feature_flag)`
- in the Flipper UI [locally](http://localhost:3000/flipper/features) or in [Staging](https://staging-api.va.gov/flipper/features/)
---

### [WIP] Common testing setup scenarios
_TODO: figure out way to organize, perhaps based on feature or sub-form? It would be good to mark which flags have been vetted as well._


#### Testing BDD claims
This involves starting an application by choosing Active Duty with a discharge date 90 to 180 days in the future.

#### Testing 0781 
- To test modern 0781, you need disability_compensation_sync_modern_0781_flow to be on. You will also notice syncModern0781Flow or sync_modern_0781_flow set in the data. 
- To test legacy 0781, you need disability_compensation_sync_modern_0781_flow to be off. After turning modern flow off, you will need to start a NEW application. You will most likely need to claim PTSD as a new condition as well.

  
| Area affected | Flipper name | Current state in Staging | Current state in Production | Behavior if on: | Behavior if off |
| ------------- | ------------- | ------------------------ | -------------------------- | ---------------- | -------------- |
| 0781 sub form | disability_compensation_0781_stats_job | on | on | runs a stats job | stats job doesn't run  |
| 0781 sub form | disability_compensation_sync_modern_0781_flow | on | on | NEW forms will use the modern 0781 | New forms will not use the modern 0781 |
| 0781 sub form | disability_compensation_sync_modern0781_flow_metadata | on | on | adds modern 0781 metadata to In Progress Forms and Saved Claims | metadata not added | 
| 0781 sub form | disability_compensation_upload_0781_to_lighthouse | on | on | routes all 0781 subform submissions to Lighthouse 


#### 4142:

#### Toxic Exposure: 

----
#### [WIP] Attempt at an exhaustive Disability Compensation Flipper list 

| **Flipper Flag**                                      | **Description**                                                                 | **Area Affected** | **Current State in Staging** | **Current State in Production** | **Behavior if On** | **Behavior if Off** |
|-------------------------------------------------------|---------------------------------------------------------------------------------|-------------------|-----------------------------|---------------------------------|---------------------|----------------------|
| `disability_compensation_new_conditions_workflow`     | Enables new Conditions/Rated Disabilities workflow in 526EZ                     |                   |                             |                                 |                     |                      |
| `disability_compensation_temp_separation_location_code_string` | Enables forcing separation location code to be a string in submit_all_claim endpoint |                   |                             |                                 |                     |                      |
| `disability_compensation_temp_toxic_exposure_optional_dates_fix` | Enables removing malformed optional dates from the Toxic Exposure node of a Form526Submission at SavedClaim creation |                   |                             |                                 |                     |                      |
| `disability_compensation_toxic_exposure_destruction_modal` | Enables confirmation modal when removing toxic exposure data from Form 526 |                   |                             |                                 |                     |                      |
| `disability_compensation_form4142_supplemental`       | Use Lighthouse API to submit supplemental Form 21-4142 from Form 526EZ submissions |                   |                             |                                 |                     |                      |
| `disability_compensation_pif_fail_notification`       | Enables sending notifications to vets if their 526 claim submission fails with PIF in Use Error |                   |                             |                                 |                     |                      |
| `disability_compensation_production_tester`           | Disable certain functionality for production testing of the 526 submission workflow |                   |                             |                                 |                     |                      |
| `disability_compensation_fail_submission`             | Enable to test the backup submission path |                   |                             |                                 |                     |                      |
| `disability_compensation_sync_modern_0781_flow`       | Enables a new form flow for 0781 and 0781a in the 526 submission workflow |                   |                             |                                 |                     |                      |
| `disability_compensation_sync_modern0781_flow_metadata` | Enables adding new 0781 form indicator to in progress 526 forms and saved claim records for 526 submissions |                   |                             |                                 |                     |                      |
| `disability_compensation_0781_stats_job`              | Enables a job to run that will check DB records and report stats as metrics, into Datadog |                   |                             |                                 |                     |                      |
| `disability_526_form4142_polling_records`             | Enables creation of, and tracking of, sent form 4142 documents, from the 526 flow, to the Lighthouse Benefits Intake API |                   |                             |                                 |                     |                      |
| `disability_526_form4142_polling_record_failure_email` | Enables failure email when explicit failure is detected downstream |                   |                             |                                 |                     |                      |
| `disability_526_ee_mst_special_issue`                 | Enables adding MST special issue to disability_526 prior to submission |                   |                             |                                 |                     |                      |
| `disability_526_ee_process_als_flash`                 | Enables adding applicable flashes to disability_526 prior to submission |                   |                             |                                 |                     |                      |
| `disability_526_call_received_email_from_polling`     | Enables received email in poll_form526_pdf job and disables calling from form526_submission |                   |                             |                                 |                     |                      |
| `disability_526_improved_autosuggestions_add_disabilities_page` | Enables new version of add disabilities page, with updates to content and search functionality |                   |                             |                                 |                     |                      |
| `disability_526_show_confirmation_review`             | Enables showing a submission review section on the 526 confirmation page |                   |                             |                                 |                     |                      |
| `disability_526_send_form526_submitted_email`         | Enables sending submitted email in both primary and backup paths |                   |                             |                                 |                     |                      |
| `disability_526_send_mas_all_ancillaries`             | Enables sending all 526 uploads and ancillary forms to MAS's APCAS API |                   |                             |                                 |                     |                      |
| `disability_526_send_received_email_from_backup_path` | Enables received email in complete success state of backup path |                   |                             |                                 |                     |                      |
| `disability_526_form4142_validate_schema`             | Enables the use of schema validation for form 4142 in disability 526 applications |                   |                             |                                 |                     |                      |
| `disability_526_form4142_use_2024_version`            | Enables the 2024 version of form 4142 in the disability 526 submission frontend workflow |                   |                             |                                 |                     |                      |
| `disability_526_toxic_exposure_opt_out_data_purge`    | Enables function that removes toxic exposure data if user has opted out from toxic exposure condition on Form 526 submission |                   |                             |                                 |                     |                      |
| `disability_526_track_saved_claim_error`              | Enables improved logging of SavedClaim::DisabilityCompensation::Form526AllClaim save failures |                   |                             |                                 |                     |                      |
| `form526_include_document_upload_list_in_overflow_text` | Appends a list of SupportingEvidenceAttachment filenames the veteran uploaded for a Form 526 into the overflow text in the form submission |                   |                             |                                 |                     |                      |
| `form526_legacy`                                      | If true, points controllers to the legacy EVSS Form 526 instance. If false, the controllers will use the Dockerized instance running in DVP |                   |                             |                                 |                     |                      |
| `form526_send_document_upload_failure_notification`   | Enables enqueuing a Form526DocumentUploadFailureEmail if a EVSS::DisabilityCompensationForm::SubmitUploads job exhausts its retries |                   |                             |                                 |                     |                      |
| `form526_send_backup_submission_polling_failure_email_notice` | Enables enqueuing a Form526SubmissionFailureEmailJob if a submission is marked as unprocessable through polling of the Benefits Intake API |                   |                             |                                 |                     |                      |
| `form526_send_backup_submission_exhaustion_email_notice` | Enables enqueuing of a Form526SubmissionFailureEmailJob if a submission exhausts it's attempts to upload to the Benefits Intake API |                   |                             |                                 |                     |                      |
| `form526_send_4142_failure_notification`              | Enables enqueuing of a Form4142DocumentUploadFailureEmail if a SubmitForm4142Job job exhausts its retries |                   |                             |                                 |                     |                      |
| `form526_send_0781_failure_notification`              | Enables enqueuing a Form0781DocumentUploadFailureEmail if a SubmitForm0781Job job exhausts its retries |                   |                             |                                 |                     |                      |
| `subform_8940_4192`                                   | Form 526 subforms for unemployability & connected employment information |                   |                             |                                 |                     |                      |


