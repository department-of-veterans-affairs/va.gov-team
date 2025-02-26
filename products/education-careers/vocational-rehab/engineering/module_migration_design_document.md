# Design Document: Migrate VRE Into Modules

## Overview

The VA-IIR team is taking ownership of the Veteran Readiness and Employment (VR&E/Ch31) form.  On the front end, we are modernizing the form using the new v3 design components and updating the form to reflect the current version as it exists on paper.  On the back end, we will be moving the code out of the Rails app and into an Engine (called "modules" at VA.gov).  The purpose of this document is to provide a plan for that backend migration.  

Our analysis indicates this will be a low-risk migration because the codebase is already well-structured for this change:

1. **Existing Namespacing**: All core functionality (services, models, jobs) already lives under the `VRE::` namespace
2. **Database Continuity**: Models use Single Table Inheritance through `SavedClaim`, allowing both implementations to coexist during transition
3. **Service Independence**: Monitoring, error handling, and external service integrations are already properly isolated
4. **Feature Toggle**: A [feature toggle](https://github.com/department-of-veterans-affairs/vets-api/blob/2468fdec426c697716c4a0418fa19ee09f8d92b5/app/models/saved_claim/veteran_readiness_employment_claim.rb?plain=1#L140) exists and this should be removed in the migration.  See notes below.

The migration primarily involves:
1. Relocating files from `app/` and `lib/res/` (**NOT** `lib/vre/` - see feature flag notes below) to `modules/vre/`
2. Configuring engine routing
3. Managing transition through frontend feature flags
4. Implementing explicit claim lookups during transition:
```ruby
claim = SavedClaim::VeteranReadinessEmploymentClaim.find_by(id: saved_claim_id) ||
        VRE::VeteranReadinessEmploymentClaim.find_by(id: saved_claim_id)
```

This structure suggests the functionality will remain unchanged through the migration process.

## Plan of Action

### Directory Structure

Follow the instructions on the [VA Platform Documentation Site](https://depo-platform-documentation.scrollhelp.site/developer-docs/backend-endpoint-tutorial) to create a new `vre` module.

Add the following structure to the newly created module.  Copy the file contents, from `app/` or `lib/`.

```
modules/vre/
├── app/
    ├── controllers/
    │   └── claims_controller.rb
    ├── mailers/
    │   └── veteran_readiness_employment_mailer.rb
    ├── models/
    │   └── veteran_readiness_employment_claim.rb
    ├── jobs/
    │   └── submit1900_job.rb
    └── services/
        ├── service.rb
        ├── configuration.rb
        ├── ch31_form.rb
        └── monitor.rb <- this must come from lib/vre/
```

### Implementation Steps

1. Move Model with Abstract Class:
```ruby
# modules/vre/app/models/veteran_readiness_employment_claim.rb
module VRE
  class VeteranReadinessEmploymentClaim < ::SavedClaim
    self.table_name = 'saved_claims'
    # copy existing functionality from 
    # app/models/saved_claim/veteran_readiness_employment_claim.rb`
    # add/modify functionality as needed
  end
end
```

2. Update Namespace References:
Because our code is being moved into a Rails Engine, we will need to explicitly reference the root namespace
```ruby
# Use explicit namespacing
class Service < ::Common::Client::Base
class Configuration < ::Common::Client::Configuration::REST
class Monitor < ::ZeroSilentFailures::Monitor
```

### Implementation Notes

**Model Migration Strategy:**
The model transition is simplified by Single Table Inheritance (STI). Both `SavedClaim::VeteranReadinessEmploymentClaim` and `VRE::VeteranReadinessEmploymentClaim` inherit from `SavedClaim` and use the same `saved_claims` table. Claims are differentiated by their `type` column, allowing both implementations to coexist and handle claims simultaneously. This means claims created under the old implementation remain valid and accessible even after the new code is enabled, as both models can read from and write to the same table.

During the transition period, when looking up claims (like in BenefitsIntakeStatusJob), we'll explicitly check both implementations:
```ruby
claim = SavedClaim::VeteranReadinessEmploymentClaim.find_by(id: saved_claim_id) ||
        VRE::VeteranReadinessEmploymentClaim.find_by(id: saved_claim_id)
```
This explicit lookup strategy ensures proper handling of claims from both implementations and makes the transition process more transparent and debuggable.

**URL/Routing Transition Strategy:**
The separation between old and new implementations will be achieved through distinct routing paths (`/v0/veteran_readiness_employment_claims` vs `/vre/claims`), while the actual transition of traffic between these implementations will be controlled by a feature flag in the frontend application. This approach allows both implementations to coexist in production, with the frontend determining which endpoint to call based on the feature flag state.

**Note:** The benefits intake handler registration in `config/initializers/benefits_intake_submission_status_handlers.rb` already uses the correct namespace (`VRE::BenefitsIntake::SubmissionHandler`) and won't need modification.

**Existing Feature Toggle**:
A feature toggle, `veteran_readiness_employment_to_res` exists and is referenced in [VeteranReadinessEmploymentClaim](https://github.com/department-of-veterans-affairs/vets-api/blob/2468fdec426c697716c4a0418fa19ee09f8d92b5/app/models/saved_claim/veteran_readiness_employment_claim.rb?plain=1#L140).  Here is the [pull request](https://github.com/department-of-veterans-affairs/vets-api/pull/16363) and associated [GitHub issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65386) indicate that the old pathway has been retired/deprecated.  It seems unlikely that we will need to migrate the code behind [`send_vre_form`](https://github.com/department-of-veterans-affairs/vets-api/blob/2468fdec426c697716c4a0418fa19ee09f8d92b5/app/models/saved_claim/veteran_readiness_employment_claim.rb?plain=1#L221), which relies on a service in `/lib/vre/`.  This should be confirmed.  Regardless, we will need to copy `/lib/vre/monitor.rb`, as this file is used to monitor Zero Silent Failure events, and is utilized regardless of the feature toggle state.


**Settings**:
Typically a Rails Engine would carry its own `settings.rb` file.  The current settings/configuration in use is `Settings.veteran_readiness_and_employment`.  We will keep the settings here, as `vets-api` manages settings through runtime environment variables, in a Terraform-managed configuration.  Because settings are environment-specific, we should leave those in the main `Settings` module.


### Additional Considerations

**Move Testing Files:**
Add a section for specs, copy files over from their current locations:
```
modules/vre/
└── spec/
    ├── controllers/
    │   └── claims_controller_spec.rb
    ├── models/
    │   └── veteran_readiness_employment_claim_spec.rb
    ├── jobs/
    │   └── submit1900_job_spec.rb
    └── services/
        ├── service_spec.rb
        └── ch31_form_spec.rb
```

**Enhancements/Improvements:**
- RBS Type Definitions added to the new code
- Enhanced Monitoring/Logging around transition period
- Performance metrics comparison between implementations

**Possible Namespace Clashes**
There are two libraries consumed by the VRE system: `/lib/res` (`RES` namespace) and `/lib/vre` (`VRE` namespace).  It's possible that a `Service` in the new module might clash with the existing service in `/lib/vre`, so classes might not be able to retain their original names, post-migration

## Reference

### Files
Related file are dispersed throughout the Rails monolith.  Some are located in conventional locations (`app/controllers/`, `app/models/`), while service related code is in `lib/res/`

| file type                                                     | link                                                                                                                                                                                                                                                            | namespace    | location in Monolith       |
| ------------                                                  | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----         | --------                   |
| controller - `V0::VeteranReadinessEmploymentClaimsController` | [`veteran_readiness_employment_claims_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/app/controllers/v0/veteran_readiness_employment_claims_controller.rb)                            | `V0`         | `/app/controllers/v0/`     |
| mailer - `VeteranReadinessEmployementMailer`                  | [`veteran_readiness_employment_mailer.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/2468fdec426c697716c4a0418fa19ee09f8d92b5/app/mailers/veteran_readiness_employment_mailer.rb?plain=1#L3)                                              | root         | `/app/mailers/`            |
| model - `SavedClaim::VeteranReadinessEmploymentClaim`         | [`veteran_readiness_employment_claim.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/app/models/saved_claim/veteran_readiness_employment_claim.rb)                                                | `SavedClaim` | `/app/models/saved_claim/` |
| sidekiq job - `VRE::Submit1900Job`                            | [`submit1900_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/app/sidekiq/vre/submit1900_job.rb)                                                                                               | `VRE`        | `/app/sidekiq/vre/`        |
| sidekiq job - `VRE::CreateCh31SubmissionsReportJob`           | [`ch31_submissions_report_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/app/sidekiq/vre/create_ch31_submissions_report_job.rb?plain=1#L50)                                                  | `VRE`        | `/app/sidekiq/vre/`        |
| errors - `Ch31Error`, `Ch31NilClaimError`                     | [`ch31_errors.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/lib/res/errors/ch31_errors.rb)                                                                                                      | root         | `/lib/res/`                |
| service - `VRE::Service`                                      | [`service.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/lib/res/service.rb?plain=1#L8)                                                                                                          | `VRE`        | `/lib/res/`                |
| service - `VRE::Ch31Form`                                     | [`ch31_form`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/lib/res/ch31_form.rb?plain=1#L9)                                                                                                         | `VRE`        | `/lib/res/`                |
| config `VRE::Configuration`                                   | [`configuration.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/lib/res/configuration.rb?plain=1#L6)                                                                                              | `VRE`        | `/lib/res/`                |
| monitor `VRE::Monitor`                                        | [`monitor.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/lib/vre/monitor.rb?plain=1#L9)                                                                                                          | `VRE`        | `/lib/vre/`                |


 
### Inbound References
| file type                               | link                                                                                                                                                                                            | namespace | location                       |
| ------                                  | -----                                                                                                                                                                                           | ----      | ----                           |
| sidekiq job - `BenefitsIntakeStatusJob` | [`benefits_intake_status_job`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/app/sidekiq/benefits_intake_status_job.rb?plain=1#L220) | root      | Monolith: `/app/sidekiq/` |

Notes:
Mentioned in [`monitor_failure()`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/app/sidekiq/benefits_intake_status_job.rb?plain=1#L164) - sends a failure email and logs "silent failure avoided" if there's an email present.  Otherwise logs a silent failure.  
This job is queued in [`periodic_jobs.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/lib/periodic_jobs.rb?plain=1#L66): `# Update FormSubmissionAttempt status from Lighthouse Benefits Intake API`  


### Outbound References
| Line No. | file type                                                         | link                                                                                                                                                                                                             | namespace                           | location in Monolith                              |
| ------   | -----                                                             | ----                                                                                                                                                                                                             | ----                                | ------------------------------------------------- |
| 1        | serializer `SavedClaimSerializer`                                 | [`saved_claim_serializer.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/app/serializers/saved_claim_serializer.rb)                                | root                                | `/app/serializers/`                               |
| 2        | inherited controller `ClaimsBaseController`                       | [`claims_base_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/app/controllers/claims_base_controller.rb)                                | root                                | `/app/controllers/`                               |
| 3        | inherited model `::BenefitsIntake::SubmissionHandler::SavedClaim` | [`saved_claim.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/lib/lighthouse/benefits_intake/submission_handler/saved_claim.rb?plain=1#L7)         | `BenefitsIntake::SubmissionHandler` | `/lighthouse/benefits_intake/submission_handler/` |
| 4        | inherited model `Common::Client::Base`                            | [`base.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/lib/common/client/base.rb?plain=1#L47)                                                      |                                     | `/lib/common/client/`                             |
| 5        | included concern `Common::Client::Concerns::Monitoring`           | [`monitoring.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/lib/common/client/concerns/monitoring.rb?plain=1#L6)                                  | `Common::Client::Conerns`           | `/lib/common/client/`                             |
| 6        | inherited configuration `Common::Client::Configuration`           | [`rest.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/lib/common/client/configuration/rest.rb?plain=1#L38)                                        | `Common::Client::Configuration`     | `/lib/common/client/`                             |
| 7        | inherited monitor `::ZeroSilentFailures::Monitor`                 | [`monitor.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/lib/zero_silent_failures/monitor.rb?plain=1#L9)                                          | `ZeroSilentFailures`                | `/lib/zero_silent_failures/`                      |
| 8        | inherited error `Common::Exceptions::ValidationErrors`            | [`validation_errors.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/ed60a99fc859cd62cdcbe205512f3a2313e51dd9/lib/common/exceptions/validation_errors.rb?plain=1#L9)                         | `Common::Exceptions`                | `/lib/common/exceptions/`                         |
| 9        | pdf filler `PdfFill::Filler`                                      | [`filler.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/2468fdec426c697716c4a0418fa19ee09f8d92b5/lib/pdf_fill/filler.rb?plain=1#L103)                                                      | `PdfFill`                           | `/lib/pdf_fill/`                                  |
| 10       | vbms uploader `ClaimsApi::VBMSUploader`                           | [`vbms_uploader.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/2468fdec426c697716c4a0418fa19ee09f8d92b5/modules/claims_api/lib/claims_api/vbms_uploader.rb?plain=1#L4)                     | `ClaimsApi`                         | `/lib/claims_api/`                                |
| 11       | VA Notify emailer `VANotify::EmailJob`                            | [`email_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/2468fdec426c697716c4a0418fa19ee09f8d92b5/modules/va_notify/app/sidekiq/va_notify/email_job.rb?plain=1#L4)                       | `VANotify`                          | `/sidekiq/va_notify`                          |
| 12       | file attachment model `PersistentAttachment`                      | [`persistent_attachment.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/2468fdec426c697716c4a0418fa19ee09f8d92b5/app/models/persistent_attachment.rb?plain=1#L8)                            | root                                | `/app/models/`                                    |
| 13       | lighthouse job `SubmitBenefitsIntakeClaim`                        | [`submit_benefits_intake_claim.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/2468fdec426c697716c4a0418fa19ee09f8d92b5/app/sidekiq/lighthouse/submit_benefits_intake_claim.rb?plain=1#L13) | `Lighthouse`                        | `/sidekiq/lighthouse/`                            |
| 14       | bgs client `BGS::Services`                                        | can't seem to locate this file ATM                                                                                                                                                                               |                                     |                                                   |
| 15       | bgs client `BGS::People::Request`                                 | [`request.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/2468fdec426c697716c4a0418fa19ee09f8d92b5/app/services/bgs/people/request.rb?plain=1#L8)                                           | `BGS`                               | `/bgs/people/`                                    |
| 16       | encryption client `KmsEncrypted::Box`                             |                                                                                                                                                                                                                  |                                     |                                                   |



Notes/Changes required:
1. alter reference `SavedClaimSerializer` -> `::SavedClaimSerializer` 
2. alter referfence `ClaimsBaseController` -> `::ClaimsBaseController`
3. no change needed, already explicitly referencing root namespace
4. alter reference `Common::Client::Base` -> `::Common::Client::Base`
5. alter reference `Common::Client::Concerns::Monitoring` -> `::Common::Client::Concerns::Monitoring`
6. alter reference `Common::Client::Configuration` -> `::Common::Client::Configuration`
7. no change needed, already explicitly referencing root namespace
8. alter reference `Common::Exceptions::ValidationErrors` -> `::Common::Exceptions::ValidationErrors`
9. alter reference `PdfFiller::Filler` -> `::PdfFiller::Filler`
10. alter reference `ClaimsApi::VBMSUploader` -> `::ClaimsApi::VBMSUploader`
11. alter reference `VANotify::EmailJob` -> `::VANotify::EmailJob`
12. alter reference `PersistentAttachment` -> `::PersistentAttachment`
13. alter reference `Lighthouse::SubmitBenefitsIntakeClaim` -> `::Lighthouse::SubmitBenefitsIntakeClaim`

14. I can't seem to find this module in the codebase, it's probably my editor, else a gem?
15. alter reference `BGS::People::Request` -> `::BGS::People::Request`
16. `KmsEncrypted::Box` - added via gemfile?

