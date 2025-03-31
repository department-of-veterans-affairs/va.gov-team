# `vets-api` Internal CSP UUID Usage Audit

## Audit Query Results

### `current_user.uuid` - 69 results - 47 files

### `current_user&.uuid` - 22 results - 13 files

### `(?<!current_)user.uuid` - 603 results - 188 files

### `idme_uuid` - 197 results - 51 files

### `logingov_uuid` - 142 results - 48 files

    excluded files: vendor/, index.html, spec/, log/

## Core Identity Code

### User Model

- `vets-api/app/models/user.rb`
- `recache`
  - `mpi.cache(uuid, mpi.mvi_response)`
  - uses uuid to re-cache the MPI response
  - impact: low
- delegations/calls out to `UserIdentity`
  - `@identity ||= UserIdentity.find(uuid)`
  - impact: low
- delegations/calls out to `UserVerification`
  - `UserVerification.find_by(idme_uuid:) || UserVerification.find_by(backing_idme_uuid: idme_uuid)`
  - used for credential lock status and MHV account creation
  - impact: high

### User Identity

- `vets-api/app/services/sign_in/user_loader.rb`
- `vets-api/lib/saml/user_attributes/base.rb`
- uses idme_uuid / logingov_uuid to create UserIdentity
- looks up UserIdentity with idme_uuid
- impact: moderate

### SignIn AttributeValidator

- `vets-api/app/services/sign_in/attribute_validator.rb`
- checks for presence of logingov_uuid, idme_uuid, mhv_uuid, dslogon_uuid
- impact: moderate

### SignIn CredentialLeveLCreator

- `vets-api/app/services/sign_in/credential_level_creator.rb`
- checks for idme_uuid/logingov_uuid for auto_uplevel purposes
- impact: low

### User Verification

- `vets-api/rakelib/prod/backfill_user_account_id_for_in_progress_forms.rake`
- `vets-api/modules/debts_api/app/models/debts_api/v0/form5655_submission.rb`
- `vets-api/app/services/sign_in/user_code_map_creator.rb`
- `vets-api/app/services/sign_in/session_spawner.rb`
- `vets-api/app/models/user_verification.rb`
- `vets-api/app/models/form526_submission.rb`
- idme_uuid, backing_idme_uuid, logingov_uuid required & used to query
- impact: high

### User Verifier

- `vets-api/app/services/login/user_verifier.rb`
- checks logingov_uuid, idme_uuid, mhv_uuid, dslogon_uuid
- impact: high

### SAML UserAttributes SSOe

- `vets-api/lib/saml/user_attributes/ssoe.rb`
- raises error if no idme_uuid/logingov_uuid, sets `uuid` to those CSP uuids
- impact: high

### Account

- `vets-api/app/models/account.rb`
- relies on idme_uuid, logingov_uuid, or sec_id
- impact: how much do we still depend on Account?
  - marked for deprecation 13 months ago

### User Session Form

- `vets-api/app/models/user_session_form.rb`
- runs MPI updating logic to set idme_uuid
- attempts to pull idme_uuid in case of error
- impact: medium

### User Acceptable Verified Credential Updator

- `vets-api/app/services/login/user_acceptable_verified_credential_updater.rb`
- `vets-api/app/services/login/user_acceptable_verified_credential_updater_logger.rb`
- depends on idme_uuid or logingov_uuid
- impact: moderate

### AccredditedRepresentativePortal

- `vets-api/modules/accredited_representative_portal/app/services/accredited_representative_portal/representative_user_loader.rb`
- uses access_token.user_uuid to find a RepresentativeUser
- impact: low

## Mobile

### Awards

- `vets-api/modules/mobile/app/controllers/mobile/v0/awards_controller.rb`
- uses user_uuid for "Mobile::V0::Award" id
- impact: low

### PaymentInformation

- `vets-api/modules/mobile/app/controllers/mobile/v0/payment_information_controller.rb`
- create "Mobile::V0::PaymentInformation" & legacy creation methods using user_uuid
- impact: low

### Users

- `vets-api/modules/mobile/app/controllers/mobile/v0/users_controller.rb`
- `vets-api/modules/mobile/app/controllers/mobile/v1/users_controller.rb`
- uses user_uuid to enqueue a job & attempt to look up "IAMUser"/"User" with it
- same for "Vet360LinkingJob"
- impact: moderate

### FaciltyInfo

- `vets-api/modules/mobile/app/models/mobile/v0/adapters/facility_info.rb`
- create "Mobile::V0::FacilityInfo" using user_uuid
- impact: low

## Class, Form, & Job Submissions

### EVSSClaim

- `vets-api/app/models/evss_claim.rb`
- `vets-api/app/services/evss_claim_service.rb`
- `vets-api/app/services/evss_claim_service_async.rb`
- `vets-api/app/controllers/v0/benefits_claims_controller.rb`
- `vets-api/app/sidekiq/evss/document_upload.rb`
- `vets-api/app/sidekiq/evss/retrieve_claims_from_remote_job.rb`
- `vets-api/app/sidekiq/evss/update_claim_from_remote_job.rb`
- `vets-api/app/sidekiq/evss/disability_compensation_form/submit_form526_cleanup.rb`
- creates "EVSSClaim" and other EVSS classes using user_uuid, also uses user_account.
- impact: moderate

### Form526

- `vets-api/app/controllers/v0/disability_compensation_forms_controller.rb`
- creates "Form526Submission" using user_uuid, also uses user_account
- impact: moderate

### EducationBenefitsClaim

- `vets-api/app/controllers/v0/education_benefits_claims_controller.rb`
- Filters "EducationBenefitsClaim" using user_uuid
- impact: moderate

### InProgressForm

- `vets-api/app/controllers/v0/in_progress_forms_controller.rb`
- `vets-api/app/sidekiq/bgs/job.rb`
- creates "InProgressForm" using user_uuid, also uses user_account
- impact: moderate

### HigherLevelReviews

- `vets-api/app/controllers/v1/higher_level_reviews_controller.rb`
- creates "AppealSubmission" using user_uuid, also uses user_account
- impact: moderate

### SupplementalClaims

- `vets-api/app/controllers/v1/supplemental_claims_controller.rb`
- creates "AppealSubmission" using user_uuid, also uses user_account
- impact: moderate

### AppealSubmissions

- `vets-api/app/models/appeal_submission.rb`
- creates "AppealSubmission" using user_uuid, also uses user_account
- impact: moderate

### MHVLoggingService

- `vets-api/app/services/mhv_logging_service.rb`
- enqueues "MHV::AuditLoginJob" using user_uuid to look up user again
- impact: low

### DebtsAPI

- `vets-api/modules/debts_api/app/controllers/debts_api/v0/financial_status_reports_controller.rb`
- uses user_uuid to look up "DebtsApi::V0::Form5655Submission" & attempt to run "DebtsApi::V0::FsrRehydrationService"
- impact: moderate

### EducationCareerCounselingClaims

- `vets-api/app/controllers/v0/education_career_counseling_claims_controller.rb`
- uses user_uuid to look up User for purpose of sending an email
- impact: low

### BGS

- `vets-api/lib/bgs/service.rb`
- uses user.uuid (after user.icn) to create new BGS::Services
- impact: low

### DebtManagementCenter

- `vets-api/lib/debt_management_center/debts_service.rb`
- uses user.uuid to find/create/cache DebtManagementCenter::DebtStore
- impact: low

### KMS Encryption

#### VeteranReadinessEmploymentClaims

- `vets-api/app/controllers/v0/veteran_readiness_employment_claims_controller.rb`
- user_uuid included in encrypted_user for VRE::Submit1900Job call
- impact: low

#### DependentsApplication

- `vets-api/app/models/dependents_application.rb`
- user_uuid included in encrypted_user for EVSS::DependentsApplicationJob call
- impact: low

#### Form1010EZR

- `vets-api/lib/form1010_ezr/service.rb`
- user_uuid included in HCA::EzrSubmissionJob & HealthCareApplication::LOCKBOX.encryption

## ID.me & Login.gov UUID usage

### DemographicsPolicy

- `vets-api/app/policies/demographics_policy.rb`
- checks for idme_uuid/logingov_uuid to determine access
- impact: moderate

### VAProfilePolicy

- `vets-api/app/policies/va_profile_policy.rb`
- checks for vet360id, then idme_uuid/logingov_uuid to determine access to V2
- impact: low

### AccountCreator

- `vets-api/app/services/identity/account_creator.rb`
- checks for sec_id/idme_uuid/logingov_uuid, uses one of them to create an "Account"
- impact: low/none if Account is deprecated

### ClaimsAPI

- `vets-api/modules/claims_api/app/models/claims_api/veteran.rb`
- pulls idme_uuid/logingov_uuid from UserIdentity
- impact: unknown

### TUD

- `vets-api/modules/test_user_dashboard/app/services/test_user_dashboard/create_test_user_account.rb`
- test user account creation requires idme_uuid/logingov_uuid
- impact: low

### Login Rakefile

- `vets-api/rakelib/login.rake`
- uses idme_uuid/logingov_uuid to pass as User uuid to look up a user
- impact: low
