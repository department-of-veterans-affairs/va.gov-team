# Form: 26-1880 - Certificate of Eligibility

### Context

VA Form 26-1880 is also referred to as COE


### Async and Error Handling for COE

- app/controllers/v0/coe_controller.rb
    - assuming `submit_coe_claim` is called to begin process
    - there are also a couple of InProgress jobs for COE
        - lib/periodic_jobs.rb
            - `mgr.register('0 * * * *', 'VANotify::InProgress1880Form')`
        - modules/va_notify/app/workers/va_notify/in_progress_1880_form.rb
        - modules/va_notify/app/workers/va_notify/in_progress_1880_form_reminder.rb

- Create SavedClaim::CoeClaim
  - argument: CoeController::filteredParams :form
    - formatted JSON string
    - validate against VetsJsonSchema::SCHEMAS['education_career_counseling_claim']
    - lib/pdf_fill/forms/va261880.rb
        - fullName
        - dateOfBirth
        - contactPhone
        - contactEmail
        - applicantAddress
        - identity
        - periodsOfService
        - periodsOfServiceReserveGuard
        - vaLoanIndicator
        - relevantPriorLoans
        - resortationIntent
        - relevantPriorLoansResortation
        - cashOutIntent
        - relevantPriorLoansCashOut
        - lowerRateIntent
        - relevantPriorLoansLowerRate
        - signature
        - date_signed
    - ** could not find conditions or other error handling **

- Save claim
  - SavedClaim::CoeClaim < ApplictionRecord < ActiveRecord::Base

- If return is FALSE (`unless claim.save`)
  - ** could not find conditions or other error handling **
  - increment failure count for "#{stats_key}.failure" == api.lgy_coe.failure
  - tag sentry logs with `team: 'vfs-ebenefits'`
  - raises Common::Exceptions::ValidationErrors

- On save complete:
    - SavedClaim::CoeClaim.send_to_lgy edipi:, icn:
        - if edipi is blank:
            - SentryLogging.log_message_to_sentry
            - no error raised
        - no condition on icn

        - lib/lgy/service.rb - LGY::Service
        - LGY::Service.put_application payload:
            - payload = prepare_form_data
                - update form json
                    - ** unsure where/which 'update' is being called
                    - ** did not see error handling
                - return updated form data
            - with_monitoring do
                - ?? where does with monitoring come from
                - perform put
                    - ** not perfom_async?
                    - "#{Settings.lgy.base_url}/eligibility-manager/api/eligibility/application?edipi=#{@edipi}&icn=#{@icn}"
                    - payload.to_json
            - rescue Common::Client::Errors::ClientError
                - log_message_to_sentry
                    - ?? not log_exception_to_sentry?
                - raise exception

        - NO Exception handling in CoeClaim for put_application

        - log_message_to_sentry
            - successful claim message
            - as `:warn` (?)
        - process_attachments!
            - if parsed_form has attached files:
                - files = PersistentAttachment.where
                    - app/models/persistent_attachment.rb
                - prepare_document_data
                    - document_data:
                        - documentType
                        - description
                        - contentsBase64
                        - fileName
                    - lgy_service.post_document
                        - with_monitoring do
                            - ?? where does with_monitoring come from
                            - perform post
                                - ** not perfom_async?
                                - "#{Settings.lgy.base_url}/eligibility-manager/api/eligibility/document?edipi=#{@edipi}&icn=#{@icn}"
                                - payload.to_json
                    - rescue Common::Client::Errors::ClientError
                        - raise exception
            - NO Exception handling in CoeClaim for process_attachement

        - return `response['reference_number']` (response == put_application)

    - NO Exception handling in CoeController for CoeClaim.send_to_lgy

    - Rails log claimId + class::FORM
    - clear saved form
    - render claim using json data
