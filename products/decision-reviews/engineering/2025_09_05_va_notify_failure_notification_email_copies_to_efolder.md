# Uploading a Copy of VA Notify-sent Failure Notification Emails to a Veteran's eFolder LOE (Option 4) Spike Writeup 

Note: For details on what was actually implemented, see: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/engineering/2025_12_16_va_notify_failure_notification_email_copies_to_efolder_updated.md

## Table of Contents

- [Background Context](#background-context)
- [LOE Summary](#loe-summary)
- [Key Assumptions](#key-assumptions)
- [Technical Unknowns and Risks](#technical-unknowns-and-risks)
- [Estimated Timelines](#estimated-timelines)
- [Out of Scope](#out-of-scope)
- [External Dependencies](#external-dependencies)
- [MVP Implementation User Stories](#mvp-implementation-user-stories)
- [Proposed Architecture/Implementation](#proposed-architectureimplementation)
- [Appendix](#appendix)

## Background Context

- For more info see [draft brief](https://dsva.slack.com/docs/T03FECE8V/F0992SF90HL)
- **Problem Summary**
  - Today, claims processors, attorneys, judges, and other employees within VA don't have visibility into the details of failed form & evidence submission attempts made by Veterans, leading to a request being made by the Veterans Benefits Administration (VBA) and the Board of Veterans' Appeals (BVA or the Board) for the team to upload a PDF copy of failure notification email contents and other critical metadata to a Veteran's eFolder. 
  - **Volume and Scale Context**
    - Current monthly volume: ~276 failure notification emails
    - Daily average: ~9 emails
    - This low volume influences our architecture decisions below, prioritizing simplicity and reliability over high-performance batch processing
- **Recommended Approach**
  - Option 4: [VA.gov](http://VA.gov) doesn't currently generate PDFs of failure emails, so this would be new functionality for us.
    In this method the must-have metadata (email address and date email was sent) *could* be available in the PDF.
    We can design it so that it's a shared service within `vets-api` that could be extended or leveraged by multiple teams. It's likely that each team might have unique requirements but they should be able to build on our example easily to reduce the effort needed to regenerate a email sent with VA Notify and upload it to a Veteran's eFolder.
  - We recommend our team move forward with Option 4 as a reference implementation.

## LOE Summary

| Aspect                  | Details                                                      |
| ----------------------- | ------------------------------------------------------------ |
| **Estimated Duration**  | 4-7 sprints (1 backend engineer at 70% capacity)             |
| **Confidence Level**    | Medium-High (75%) - POC validates core approach but unknowns remain |
| **Risk Buffer**         | 1.5-2 sprints included for unknowns                          |
| **Critical Path Items** | VA Notify data retention validation, Benefits Intake API testing |

#### Why 4-7 Sprints for Low Volume?
- Integration complexity with external systems (VA Notify, Lighthouse, VBMS)
- 6 distinct email templates requiring individual handling, testing, and error handling
- High reliability requirements (each failure is significant at low volume)
- Building as reference implementation for other teams to follow

#### Delivery Options

| Option            | Duration    | Description                                                  |
| ----------------- | ----------- | ------------------------------------------------------------ |
| **Minimal MVP**   | 2-3 sprints | Generate and upload PDFs, no status tracking, manual monitoring |
| **Standard MVP**  | 4-5 sprints | As described below with automated monitoring and basic error handling |
| **Full Featured** | 6-7 sprints | Comprehensive error handling, alerting, retry logic, and reporting |

## Key Assumptions

1. **PDF can be text/markdown-based** - No pixel-perfect email HTML/CSS rendering required
2. **Benefits Intake API works as documented** - No undocumented quirks or special handling
3. **No accessibility requirements** - PDFs don't need Section 508 compliance
4. **Staging environment sufficient** - Can adequately test the full flow before production
5. **No backfill needed** - Only handling go-forward emails
6. **Standard PR review cycles** - No extended review delays
7. **Stakeholder availability** - For demos and approvals at phase gates

## Technical Unknowns and Risks

### ✅ Validated via POC

- Resposne provided by VA Notify when we use the `send_email` method successfully returns generated email content
  - All 6 email templates can be retrieved with consistent structure
- Personalization fields are redacted but reconstructable
- Notification status updates work as expected
- API authentication using existing keys successful

### ⚠️ Unknowns
#### PDF Generation Requirements (MEDIUM RISK)

- **Impact**: +0.5-1 sprint risk
- **Issue**: Unclear how closely PDF must match email design
- **Unknown Factors**:
  - Markdown-to-PDF sufficient or HTML rendering needed?
  - Special character handling requirements
  - Font/styling requirements from stakeholders
- **Action**: Get sample approved by stakeholders early

## External Dependencies

| Team             | Dependency                       | Status       | Risk   |
| ---------------- | -------------------------------- | ------------ | ------ |
| **VA Notify**    | API usage guidance and rate limits | 🟢 Received (Updated 9/12/25) | Low    |
| **Lighthouse**   | Benefits Intake API guidance     | 🟢 Received   | None   |
| **Lighthouse**   | 14-day polling window confirmed  | 🟢 Documented | None   |
| **Enablement**   | Release plan approval            | 🟡 Future     | Low    |
| **Stakeholders** | PDF format approval              | 🟡 Pending    | Medium |

### No Blocking Dependencies

The team can begin development immediately while validating assumptions in parallel.

## MVP Implementation User Stories

1. **As a system**, I can generate PDF versions of ~~successfully delivered~~ all failure notification emails, whether delivered successfully or not, that include all must-have metadata
2. **As a system**, I can submit generated PDFs to the Lighthouse Benefits Intake API for routing to VBMS
3. **As a system**, I can track the status of PDFs from upload through VBMS confirmation
4. **As an engineer**, I can monitor and be alerted when PDF generation or upload fails
5. **As a claims processor**, I can see failure notification emails in the Veteran's eFolder

## Proposed Architecture/Implementation

### High-level Overview

Leverage existing `vets-api` infrastructure with minimal new components, processing ~9 emails daily through batch job within the 7-day retention window.

### Technical Details

- Using as much of the existing infrastructure in `vets-api` as possible, e.g.:
  -  `DecisionReviews::FailureNotificationEmailJob`
    -  We'll update the job to capture the content of the email sent and store it in our existing audit table, `DecisionReviewNotificationAuditLog`.
  - Custom notification callback classes `DecisionReviews::FormNotificationCallback` and `DecisionReviews::EvidenceNotificationCallback` that validate the delivery status of emails
  - `DecisionReviewNotificationAuditLog` table which tracks delivery status of emails and includes a reference ID that would allow us to locate the original `AppealSubmission`/`SavedClaim` (for Decision Review form uploads), `AppealSubmissionUpload` (for evidence uploads), or`SecondaryAppealForm` (4142s submitted via the Supplemental Claim flow) record for which we sent the failure notification email
    - We will need to update this table with new columns to support creation and tracking of the upload of the PDF to VBMS
  - `VaNotify::Service` , which wraps UK.gov's open source [notifications-ruby-client gem's](https://docs.notifications.service.gov.uk/ruby.html) `Notifications::Client`
    - ~~Although not explicitly exposed in `VaNotify::Service`, POC code below demonstrates that we can use the underlying `Notifications::Client` and existing API key to access the  `get_notification` method, which provides data for one message.~~ We received some [additional guidance from the VANotify team](https://dsva.slack.com/archives/C010R6AUPHT/p1757536769497629?thread_ts=1757513765.094709&cid=C010R6AUPHT) and realized that we can use the response from sending the email. **Critically, this response provides the key data needed for this feature, and also represents no change in our current usage of the API**:
      - **the subject line and content of the email that was sent** **and the date the email was sent**
        - the personalisation fields are redacted, but we can recreate those easily with a database lookup
          - Notably: first name and submission attempt timestamps for all submissions, and filenames for evidence uploads
- We will create the following new service classes and Sidekiq jobs in `vets-api` to facilitate generating PDF copies of failure notification emails and uploading them to a Veteran's eFolder:
  - `DecisionReviews::NotificationEmailToPdfService` 
    - Given email content and required metadata fields, will generate PDF
  - `DecisionReviews::UploadFailureNotificationEmailPdfJob` 
    - A Sidekiq job that we will schedule to run after our daily `DecisionReviews::FailureNotificationEmailJob` 
    - Will query `DecisionReviewNotificationAuditLog` to identify emails that we have not yet created a PDF for/uploaded to LH Benefits Intake API
    - Will invoke `DecisionReviews::NotificationEmailToPdfService`  to generate a PDF and use `BenefitsIntake::Service` to upload the PDF
  - `DecisionReviews::FailureNotificationEmailPdfStatusUpdaterJob` 
    - Similar to our existing `DecisionReviews::SavedClaimStatusUpdaterJob`, a Sidekiq job that we will schedule to run regularly that polls for the status of failure notification email PDFs uploaded via the LH Benefits Intake Service
    - Will update new fields on the `DecisionReviewNotificationAuditLog` to track the status of the uploaded PDF
    - Will alert if PDFs reach an error state or are stuck in a non-final state for >14 days, [per guidance from the LH team](https://dsva.slack.com/archives/C5AGLBNRK/p1756996382014779?thread_ts=1756926424.341849&cid=C5AGLBNRK)

- **Mermaid diagram**

  - Simplified diagram:

    ```mermaid
    sequenceDiagram
    participant Veteran
    participant vets-api
    participant VA Notify
    participant Email Provider
    participant PDF Generator
    participant Benefits Intake
    participant VBMS
    
    Note over vets-api: Daily at midnight
    vets-api->>VA Notify: Send failure notification
    VA Notify-->>vets-api: Response with full email content
    vets-api->>vets-api: Create audit log (status: 'pending')<br/>Store email content
    VA Notify->>Email Provider: Deliver email
    Email Provider->>Veteran: Email delivered
    Email Provider-->>VA Notify: Delivery confirmation
    VA Notify-->>vets-api: Callback with delivery status
    vets-api->>vets-api: Update audit log (status: 'delivered')
    
    Note over vets-api: Next day (no time pressure)
    vets-api->>vets-api: Query for delivered emails without PDFs
    loop For each delivered email
        vets-api->>vets-api: Retrieve stored email content from audit log
        vets-api->>PDF Generator: Generate PDF
        PDF Generator-->>vets-api: PDF created
        vets-api->>Benefits Intake: Upload PDF
        Benefits Intake-->>vets-api: Upload confirmed
        Benefits Intake->>VBMS: Process to eFolder
    end
    
    Note over vets-api: Status polling
    vets-api->>Benefits Intake: Check status
    Benefits Intake-->>vets-api: VBMS confirmed
    vets-api->>vets-api: Update audit log (status: 'vbms_confirmed')
    ```

  - With more technical detail (adapted from the [asynchronous sending diagram from VA Notify's docs](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/va_notify/README.md), showing proposed functionality)

    ```mermaid
    sequenceDiagram          
    box vets-api
    participant DecisionReviewsCustomNotificationCallbacks
    participant DecisionReviewsFailureNotificationEmailJob
    participant VANotify module
    participant DecisionReviewNotificationAuditLog
    participant UploadCopiesOfFailureNotificationEmailsJob
    participant NotificationEmailToPdfService
    participant LH Benefits Intake Service
    
    end
    box notification-api
    participant VANotify API (outside of vets-api)
    end      
    box External Services
    participant Relevant third party delivery service
    end
    participant Recipient

    
    Note over DecisionReviewsFailureNotificationEmailJob: Existing: Runs daily at midnight
    Note over DecisionReviewNotificationAuditLog: Existing: Table - UPDATED to store<br/>email content at send time
    Note over UploadCopiesOfFailureNotificationEmailsJob: NEW
    Note over NotificationEmailToPdfService: NEW: Creates PDF from stored content
    Note over LH Benefits Intake Service: Existing, widely used in<br/> vets-api to upload docs to VBMS

    %% Original notification flow - UPDATED
    DecisionReviewsFailureNotificationEmailJob->>+VANotify module: VaNotify::Service <br/> (synchronous call) <br/> Required params: recipient, template_id, personalisation, api_key <br/> Optional params: callback_metadata
    
    VANotify module->>+VANotify API (outside of vets-api): Create notification request
    VANotify API (outside of vets-api)-->>-VANotify module: 201 successfully created with unique `notification_id` <br/> Response includes full email body and subject
    
    VANotify module->>VANotify module: VANotify::Notification record created
    
    Note over DecisionReviewNotificationAuditLog: NEW: Create with email content immediately
    VANotify module->>DecisionReviewNotificationAuditLog: Create audit record with:<br/>- notification_id<br/>- email_content (from response.body)<br/>- email_subject<br/>- delivery_status: 'pending'
    
    VANotify module-->>-DecisionReviewsFailureNotificationEmailJob: Response containing message body and `notification_id`

    %% Delivery flow
    VANotify API (outside of vets-api)->>+Relevant third party delivery service: Request notification send
    Relevant third party delivery service->>Recipient: Attempt notification delivery
    Relevant third party delivery service-->>+VANotify API (outside of vets-api): Updated delivery status <br/> (delivered, permanent-failure, etc)
    
    VANotify API (outside of vets-api)-->>+VANotify module: Delivery status callback <br/> (if callbacks are configured for API key/service) <br/> VANotify::DefaultCallback will increment relevant StatsD metrics
    VANotify module->>VANotify module: VANotify::Notification record updated

    VANotify module-->>-DecisionReviewsCustomNotificationCallbacks: Custom callback classes called <br/> DecisionReviews::FormNotificationCallback,<br/> DecisionReviews::EvidenceNotificationCallback
    
    Note over DecisionReviewNotificationAuditLog: UPDATED: Find and update existing record
    DecisionReviewsCustomNotificationCallbacks->>DecisionReviewNotificationAuditLog: Update existing audit record:<br/>- delivery_status: 'delivered'<br/>- delivered_at: timestamp

    rect rgb(191, 223, 255)
        %% PDF generation flow (next day)    
        Note over UploadCopiesOfFailureNotificationEmailsJob: NEW: Set to run daily, shortly after<br/> DecisionReviews::FailureNotificationEmailJob
        Note over DecisionReviewNotificationAuditLog: Email content already stored,<br/>no external API calls needed
        UploadCopiesOfFailureNotificationEmailsJob->>DecisionReviewNotificationAuditLog: Query for records where:<br/>- delivery_status = 'delivered'<br/>- email_pdf_status = 'not_generated'
        
        loop For each delivered email without PDF
            UploadCopiesOfFailureNotificationEmailsJob->>NotificationEmailToPdfService: generate_pdf_from_audit_log(audit_log_record)
            Note over NotificationEmailToPdfService: Uses stored email_content<br/>No VA Notify API call needed
            NotificationEmailToPdfService->>NotificationEmailToPdfService: Generate PDF with stored content<br/>and submission data
            NotificationEmailToPdfService->>LH Benefits Intake Service: Upload PDF
            Note over NotificationEmailToPdfService: Status polling handled by<br/>separate StatusUpdaterJob
            LH Benefits Intake Service-->>NotificationEmailToPdfService: Initial upload confirmation
            NotificationEmailToPdfService-->>UploadCopiesOfFailureNotificationEmailsJob: PDF generated and uploaded
            Note over DecisionReviewNotificationAuditLog: Separate StatusUpdaterJob<br/>(not shown) polls Benefits Intake<br/>and updates to 'vbms_upload_confirmed'
            UploadCopiesOfFailureNotificationEmailsJob->>DecisionReviewNotificationAuditLog: Update record:<br/>- email_pdf_status: 'upload_pending'<br/>- benefits_intake_uuid<br/>- pdf_generated_at
        end
    end
    ```

## Estimated Timelines 

- We anticipate that the overall delivery of this feature is well-sized for one backend engineer working full-time, adjusted for focus time spent on other tasks like production monitoring, coordination, etc, for ~4-7 sprints, or approximately one quarter.

##### Phase 1: Core PDF Generation Service Development and Integration with Existing VA Notify Callbacks (~1-1.5 sprints)

```ruby
# something like the following
class DecisionReviews::NotificationEmailToPdfService 
  def generate_pdf_from_email_content(email_content:, lookup_data: {})    
    # 1. Reconstruct full content using lookup_data for redacted fields
    content = reconstruct_full_content(email_content, lookup_data)
    
    # 2. Generate PDF with metadata
    generate_pdf_with_metadata(content, notification)
  end
end
```

- Implement feature flag for toggling PDF generation functionality on/off 

- Implement HTML-to-PDF conversion for email content, making sure to include required metadata (email address, send date, template version)

- Goals

  - Demo E2E flow: 

    1. Sending a failure notification email, triggering the PDF generation code directly from the failure notification email job
    2. Generating the PDF copy of the failure notification email with the required metadata

  - Sample of the most common failure notification email and the corresponding PDF copy, to be shared with the enablement team and stakeholders for review

    - Stretch goal: provide this for all 6 email templates (Higher Level Review form failure, Supplemental Claim form failure, Supplemental Claim evidence failure, Supplemental Claim 4142 failure, NOD/Board Appeal form failure, NOD/Board appeal evidence failure) in production currently

##### Phase 2: Support Async PDF Generation and Upload to eFolder (~1-2 sprints)

- Create `DecisionReviews::UploadFailureNotificationEmailPdfJob` 

- Implement storing of email content from email sending response (updates to `DecisionReviewNotificationAuditLog`)
- Goals:

  - Demo E2E flow: 

    1. Sending a failure notification email **and creating a new `DecisionReviewNotificationAuditLog` record with `status: "pending"`. Also store email content in this record** 
    2. Triggering ~~the PDF generation code~~ **update of the`DecisionReviewNotificationAuditLog` record**  from the notification callback on successful delivery, **to indicate that we need to generate a PDF and upload it to VBMS for this email**
    3. **Running the new `DecisionReviews::UploadFailureNotificationEmailPdfJob` , which calls the  `DecisionReviews::NotificationEmailToPdfService` to generate the PDF and `BenefitsIntake::Service` to upload the PDF**
    4. Updating the`DecisionReviewNotificationAuditLog` record to indicate that the PDF was generated and submitted to LH Benefits Intake API successfully 
    5. Manually query LH Benefits Intake API to validate receipt of PDF upload

  - Stretch goals: error handling 

##### Phase 3: Status Polling and Logging/Monitoring Updates (~1-2 sprints)

- Add error handling and stress test retry logic
- Determine cleanup strategy for edge case (in case callback never fires for email notifications, resulting in orphaned "pending" `DecisionReviewNotificationAuditLog` records
- Implement audit logging
- Coordinate with enablement team on any reporting required for this feature 

##### Phase 4: Testing, Release, and Monitoring in Production (~1-1.5 sprints)

- Thoroughly test feature in staging
- Develop and get release plan approved by enablement team (go/no-go)
- Release feature and monitor impact

---

#### Appendix

- **Does this feature need to go through the Platform Collaboration Cycle?**

  - No. This feature does not meet that requirement according to [Platform docs](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/faqs):

    > Any new tool, product, or page or substantial change to the user experience of an existing tool/product or page should go through the Collaboration Cycle. This means anything that significantly modifies the page’s content, structure, or interactivity.

- **Design choices for tracking PDF upload to eFolder status** 

  - **Polling for Status Updates**

    - To poll for the status of the email copy PDFs being uploaded to VBMS successfully through the LH Benefits Intake API, we'll have to update our DecisionReviews `StatusUpdaterJob` code. 
    - Other explored alternative: There are other Sidekiq jobs used by multiple teams for polling the LH Benefits Intake APIs for submission statuses, which conveniently roll up into a shared Datadog dashboard veiw. However, as [previously discovered](https://dsva.slack.com/archives/C5AGLBNRK/p1755615830513409?thread_ts=1755554628.563939&cid=C5AGLBNRK), our code is not currently wired up to use them. Additionally, the other status updater jobs hinge on `FormSubmissionAttempt` records, which are not suited for the kind of document we are uploading (as they are not form submission attempts).

  - **Storing Status Updates**

    - Recommendation: Update and extend existing `DecisionReviewNotificationAuditLog` table rather than creating separate table.

      - Strong cohesion: PDF upload is a direct consequence of the notification event with tightly coupled lifecycle
      - 1:1 relationship: Each notification produces exactly one PDF, making separate table unnecessary
      - Query efficiency: Most operations require both notification and PDF status data together, avoiding JOIN overhead
      - Operational simplicity: Single source of truth for notification outcomes aligns with existing audit patterns
      - Data consistency: Same retention policies and team ownership for both notification and PDF data

      - Sample required schema additions to `DecisionReviewNotificationAuditLog`

        ```ruby# Replace simple boolean with comprehensive status tracking
        # Something like the following...
        enum email_pdf_status: {
          not_generated: 0,
          pdf_generation_pending: 1,
          pdf_generation_failed: 2,
          upload_pending: 3,
          upload_failed: 4,
          benefits_intake_processing: 5,
          vbms_upload_confirmed
        }
        
        # Additional tracking fields
        
        add_column :pdf_generated_at, :datetime
        add_column :benefits_intake_uuid, :string      # Links to LH Benefits Intake submission
        add_column :benefits_intake_status_details, :text    # Store status information from LH Bnefits Intake API 
        add_column :last_status_check_at, :datetime    # Supports polling workflow
        ```

    - Integration Benefits:
      - Leverages existing status polling infrastructure used for other document uploads
      - Provides end-to-end visibility from notification through eFolder delivery
      - Supports existing monitoring and alerting patterns
      - Enables comprehensive audit trail for compliance requirements

    - This approach maintains architectural simplicity while providing the granular tracking needed for reliable PDF delivery to Veterans' eFolders.

- **Alternative approaches evaluated**

  - ❌ Recreating VA Notify's templates and template processing logic in `vets-api`
    - No benefit to duplicating template management logic in two places if we can retrieve our template content another way 
  - ❌ Attempting to directly access our VA Notify templates and leverage their existing template processing logic in [notifications-utils](https://github.com/department-of-veterans-affairs/notification-utils/blob/main/docs/README.md)
    - Access problems: we can only access our VA Notify templates using the admin UI, which is only available on the VA internal network/via Citrix Access Gateway (CAG)
    - Invoking Python package (`notifications-utils`) from Ruby code (`vets-api`) is risky and error-prone

- **POC code validating technical approach**

  - Performed in Argo `vets-api-staging` Rails console

    ```ruby
    # Using the same API key from your failure notification job
    api_key = Settings.vanotify.services.benefits_decision_review.api_key
    # Should return something like:
          #   higher_level_review_form_error_email: "<uuid>"
          #   notice_of_disagreement_evidence_error_email: "<uuid>"
          #   notice_of_disagreement_form_error_email: "<uuid>"
          #   supplemental_claim_evidence_error_email: "<uuid>"
          #   supplemental_claim_form_error_email: "<uuid>"
          #   supplemental_claim_secondary_form_error_email: "<uuid>"
    template_ids_hash = Settings.vanotify.services.benefits_decision_review.template_id.to_h
    
    test_email_address = "<replace with your email address for testing>"
    
    def get_service_name(template_key)
      if template_key.to_s.start_with?("notice_of_disagreement")
        return ["board-appeal", "NOD"]
      elsif template_key.to_s.start_with?("higher_level_review")
        return ["higher-level-review", "HLR"]
      elsif template_key.to_s.start_with?("supplemental_claim")
        return ["supplemental-claim", "SC"]
      end
    end
    
    def get_template_type(template_key)
      if template_key.to_s.include?("secondary_form")
        return ["secondary form", "Evidence"]
      elsif template_key.to_s.include?("form")
        return ["form", "Form"]
      elsif template_key.to_s.include?("evidence")
        return ["evidence", "Evidence"]
      end
    end
    
    def create_stub_callback_options(template_key, template_id)
      stub_uuid = SecureRandom.uuid
      service_name, acronym = get_service_name(template_key)
      type, callback_type = get_template_type(template_key)
      callback_options = {"callback_metadata"=>
      {"function"=>"#{type} submission",
       "reference"=>"#{acronym}-#{type.gsub(" ", "-")}-#{stub_uuid}",
       "email_type"=>"error",
       "statsd_tags"=>["service:#{service_name}", "function:#{type} submission"],
       "service_name"=>service_name,
       "email_template_id"=>template_id,
       "submitted_appeal_uuid"=>stub_uuid},
       "callback_klass"=>"DecisionReviews::#{callback_type}NotificationCallback"}
    end
    
    notifications = []
    
    template_ids_hash.each do |template_key, template_id|
      # Create a VaNotify service instance (which wraps the notifications client)
      service = VaNotify::Service.new(api_key, create_stub_callback_options(template_key, template_id))
    
      # Get notification details (you'll need an actual notification ID)
      # Send a test email first
        begin
          # Send a test email first to get a notification ID
          response = service.send_email({
          email_address: test_email_address,
          template_id: template_id,
          personalisation: {
            first_name: "Test",
            filename: "test.pdf",
            date_submitted: "January 1, 2025"
          }
        })
    
        notification_id = response.id
        puts "Test email sent with ID: #{notification_id}"
    
        # Now try to get the notification details
        notification = service.notify_client.get_notification(notification_id)
        puts "Notification status: #{notification.status}"
        puts "Notification type: #{notification.type}"
        puts "Created at: #{notification.created_at}"
        notifications << notification
      rescue => e
        puts "Error: #{e.message}"
      end
    end
    
    # returns content for each template
    notifications.map { |n| n.body }
    
    # sample notification response, when queried immediately
    # vets-api(prod)> notifications.first
    # => #<Notifications::Client::Notification:0x00007f9ba030be50
    #  @body=
    #   "# Action needed: We can't process your request for a Higher-Level Review\n\nDear <redacted>,\n\nYou submitted a request for a Higher-Level Review (VA Form 20-0996), but we had a problem with our system. We can’t process your form. We’re sorry about this.\n\n## What to do next\nYou'll need to submit your form again. We recommend you submit your form again by mail or in person.\n\nYou’ll need to download and fill out a Decision Review Request: Higher-Level Review (VA Form 20-0996).\n>>[Get VA Form 20-0996 to download](https://www.va.gov/find-forms/about-form-20-0996/)\u2028\n\n### Option 1: By mail\nMail the completed form to this address:\n\nDepartment of Veterans Affairs\nClaims Intake Center\nPO Box 4444\nJanesville, WI 53547-4444\n\n### Option 2: In person\nBring the completed form to a VA regional office.\n[Find a VA regional office near you](https://www.va.gov/find-locations/)\u2028\n\n**Note:** You can ask a VA regional office for copies of the forms to fill out. Or call us at 800-827-1000 (TTY: 711) to request forms. We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET. \n\n> ## Submission Details\n> ### Form submitted\n> **Decision Reviews Request: Higher-Level Review**\n> VA Form 20-0996\n>\n> ### Date submitted\n> <redacted>\n\n\n## What to do if you have questions\nCall us at 800-827-1000 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.\n\n\nThank you\n\n***\n\nYou're receiving this email because you submitted a form on [VA.gov](http://www.va.gov). Don't reply to this email.",
    #  @completed_at=nil,
    #  @cost_details=nil,
    #  @cost_in_pounds=nil,
    #  @created_at="2025-09-03T15:22:36.044879Z",
    #  @created_by_name=nil,
    #  @email_address="<email>",
    #  @id="<id>",
    #  @is_cost_data_ready=nil,
    #  @line_1=nil,
    #  @line_2=nil,
    #  @line_3=nil,
    #  @line_4=nil,
    #  @line_5=nil,
    #  @line_6=nil,
    #  @one_click_unsubscribe_url=nil,
    #  @phone_number=nil,
    #  @postage=nil,
    #  @postcode=nil,
    #  @reference=nil,
    #  @sent_at=nil, # this is also updated once the email has been sent
    #  @status="created", # note that the status is updated appropriately once the email has been sent
    #  @subject="Action needed: We can’t process your VA Form",
    #  @template=
    #   {"id"=>"<template_id>",
    #    "uri"=>
    #     "https://staging.api.notifications.va.gov/v2/template/<template_id>/version/19",
    #    "version"=>19},
    #  @type="email">
    ```

    - **Critical Note on Data Retention**: The 7-day retention window (per UK.gov documentation) creates a hard constraint on our batch processing approach. If VA Notify's actual retention differs, the architecture may need adjustment to ensure PDFs are generated before data expires.
