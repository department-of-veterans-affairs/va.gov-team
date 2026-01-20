# Engineering and Security Checklist

## Instructions

Your document should be brief and high-level.  Please keep it to a single page.  Focus on the high level and link to supporting material where appropriate; this is _not_ a detailed engineering spec.

Some of the items below may not apply to your work--that's okay.  You may not be able to fill in some items that _do_ apply to your work--that's also okay.  If you don't have answers, please come to the Architecture Intent ready to ask questions.

## Engineering Checklist

- Product description
    + Brief overview of motivation for the change from an engineering & security point of view - **Allow Veterans to track the status of their VR&E Chapter 31 benefits claim with confidence by pulling information from authorative sources which includes displaying next steps for the Veteran, so that they can track their VR&E journey from beginning to end. Empower Veterans to interact with applicable stages of their benefits journey and prepopulate data needed to progress with their evaluation and rehabilitation plans.**
    + Link to Collaboration Cycle Request issue - https://github.com/department-of-veterans-affairs/va.gov-team/issues/127317
- UX design description
    + Wireframes - https://www.figma.com/design/T9tPpLgo9QTAE0URYJ4l9K/My-VR-E-Benefits-Tracker?node-id=617-67249&p=f&t=2CYsV05qjNSxUTuQ-0
    + Already conducted design intent and received feedback on adjustments.
- Frontend changes
    + Identify any significant code changes.  Does this add a new function, or substantially refactor existing code? ****Yes**- Adding in 3 new pages for the user to track their VR&E journey. A connection between VA.gov and RES already exists.**
    + Identify any new design system components needed or changes to current components. **We are using all existing components. No new components were added or modified.**
    + Does this update change shared code? **N/A**
    + Describe any product analytics being gathered.  How will errors in the FE system be detected? **Will track the button clicks and integration requests.**
- Backend changes
    + Does the project introduce any new or unusual infrastructure dependencies? **No**
    + Does the project introduce any new connections or exchanges of new information types with other systems? (e.g. "new" meaning a new connection of type of information not already present in `vets-api`) - **We are using an existing connection with RES to retrieve new information.**
    + Do you need to poll any APIs for status?  How is API success or failure determined? **Yes, but either reaching information or not with error handling on frontend**
    + Are you handling all failure and error cases while in custody of your users's data? **Yes**
    + Does this update change shared code? **Yes**
    + What information will be captured in logs or metrics? **No PII data. Using a generalized failure message that does not include PII.**
    + Does this project/update involve user-uploaded data? Are user-uploaded files being scanned for viruses? **N/A**
    + Does this project/update generate intermediate or "temporary" files during processing? If so, where and how are the temporary files materialized? What is the cleanup/removal process or mechanism? **N/A**
- Internal API changes
    + List new or modified APIs in `vets-api` - **We have modified the VRE CH31 service**
    + Are you deprecating or removing any APIs? **No**
    + Do you have API documentation? **No**
    + Describe expected call patterns. **N/A**
    + Are there new endpoints or services that require rate limiting or throttling? **No**
    + Are there any third party integrations, and how are they vetted? **No**
    + Are there any new scheduled/cron jobs? If so, how are their intervals and impact considered? (especially with regard to periods of higher traffic or times when Sidekiq and infrastructure is already handling a high volume of jobs?) **No**
    + Is schema validation enforced (ex: using the vets-json-schema repo)? **N/A**
- External API changes
    + List new or modified APIs for upstream or external systems. **getch31CaseDetails. Veteran is able to track their Chapter 31 Case progress and status. We are also building a new External API for a Veteran to self-certify the completion of the Orientation video. VA.gov will inform RES that the Veteran has completed their orientation using the update-key-milestone API**
    + Describe expected call patterns. **REST API**
    + What PII or PHI will be transmitted to/from the external systems? **ICN**
- Background jobs
    + List any required background processing **N/A**
    + Describe error and dead letter handling **N/A**
- Data storage **N/A to the entire section**
    + Describe new or modified databases, tables or columns
    + Describe indexes and constraints
    + Identify PII and PHI and where and how it will be stored, processed, expired and deleted
    + Is this change introducing a large or new volume of data?
    + Do these changes impact database or caching layers (ex: Redis, Postgres)? Do the changes have implications for data volume, memory, or CPU usage to consider?
    + Does this project/update expect to persist information? What is the expiration policy for data added to the system? What is the cleanup/removal process or mechanism?
- Libraries and dependencies **N/A**
    + List new or updated dependencies
- Metrics, logging, observability, alerting 
    + Identify key areas to monitor. **Using datadog for monitoring and logging.**
    + Are you introducing any custom metric tags? Have you considered their cost and potential cardinality? High cardinality = higher cost **No**
    + Are there any sensitive data risks with logging? **No**
- Infrastructure and network changes 
    + List any changes or additions **No changes**
- Test strategy
    + Describe automated, manual and user acceptance test strategy. **Created test users** - https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vre-ch31.md. **We will also be performing UAT testing.**
    + Describe required test data and test user accounts **https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vre-ch31.md**
- Rollout plan
    + List scope of any feature flags. **Release the new page that has a feature flag on the frontend**
    + Identify other teams to coordinate with  **Working with RES team to create the API and push it to production before our go live date**
    + Describe rollback plan **The API will go live ahead of time, we will remove the feature flag on 03/26 to display new functionality. If anything was to go wrong we will turn off the feature flag hiding all the functionality until necessary repairs were completed**
- Internal administration tasks
    + What maintenance or administration tasks do you anticipate will need to be performed periodically? **None**
    + Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.). **N/A**

## Security Checklist
### Questions to be Answered

The following product or feature descriptions may be answered with a reference link to the team’s documentation. However, the provided links must be specific to the request.
- Please describe what problem this product or feature solves. **Veterans continue to struggle with the lack of communication and clear progress of their 28-1900 VR&E benefits application once it is submitted. This has led to a large number of duplicate applications, continued reapplication, and frustrated Veterans not knowing what is going on with their request. Veterans will now have the ability to track the progress of their application/case, check the status on their own, see what the next steps are in the process, and allow Veterans to be involved with the most up to date information on their claim. The self-management portal will allow Veterans to see their progress in real-time along with having the ability to complete required items such as their orientation and scheduling of their evaluation meetings directly from the portal.**
- Please describe a plan to monitor this code base after deployment, including the following scenarios (NOTE: If you don't (yet) have such a plan, or don't know how to get started with one, we can work on this with you!).
  - The code base is compromised at source- or run-time.
    - How does the code base get disabled in the product? **Team will review and disable and submit PR. We also have a maintenance window via pager duty that can be used to take it down without having to push code.**
    - How would you detect a compromise? **Datadog monitoring and alerts**
    - What process and privilege does the code base execute under?
        - If so, is that process isolated?
        - If so, what additional credentials are available to that process?
    - The code base is infiltrated or ex-filtrated.
  - Links to dashboards that help identify and debug application issues
- Provide your Release Plan with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
- Are there any new application endpoints, front- or back-end? If so, please give examples of how any of the endpoints could be abused by unauthorized parties, as well as a plan to mitigate such threats. 
- Is there any new logging data being captured? If so, what data is being captured, how, and where is it stored? **We are only tracking logs and error logs**
- Is Personal Health Information/PHI, Personal Identifiable Information/PII, or any other Personal Information/PI being captured? **No**
- If so, please answer the following questions: **N/A**
    - Is the PHI strongly encrypted?
    - Is the PII encrypted?
    - Can the sensitive information be scrubbed?
- Are there any new, modified, or existing Cookies being used? **No**
    - If so, are there any new Cookies?
        - If so, why can’t the existing Cookies be used?
    - If so, are there any modified Cookies?
        - If so, how are the Cookies modified?
    - If so, are there any existing Cookies?
- Is this feature authenticated or unauthenticated? **Authenticated through Single Sign On**
- Are there any other specific subjects that you want to highlight or focus additional attention on? **No**

### Artifacts
Please provide the following documentation as attachments.
- Architecture Diagram:
This diagram must go beyond simple boxes and lines. It must clearly indicate which portions of the architecture are within the scope of the review, which portions are dependencies within the product, and which portions are external dependencies.
This diagram must also illustrate the following specifics.
  - Which implementation of security approaches were considered along with the approach that was chosen and why? **Utilizing Single Sign On, API with RES is authenticated and only provides data related to the specific Veterans MPI.**
  - If there are any libraries or components that this code base will depend upon that are currently not yet part of the code base? How and why were these selected? N/A
- Incident Response Plan, including Points of Contact for your system and dependent VA back-ends. 
    - If a security vulnerability is discovered or reported in this code base, what is the plan and timeline for rolling out the fix?
    - **Reapers Team will monitor for errors and if they see a spike or unexpected behavior, they will disable the toggle.**
- Sequence Diagram:
This diagram must include any authentication steps if this is an authenticated experience. 
- Data Flow Diagram:
This diagram must illustrate the following specifics. **No database transactions take place within vets-api**
  - What data is collected or used, and where, including information such as credentials used by this system? 
  - Where is the data is stored and how, including information such as any encryption used?
  - How is the data transferred, including information such as any encryption used? 
  - Who accesses the data and in what capacity (read or read-write)?
  - What is the audit trail of data access and manipulation?
- API Endpoint Documentation:https://github.com/department-of-veterans-affairs/va.gov-team/blob/11c628859be97a04aef6924cae35d063b6fcc363/products/Reapers%20-%20Ch31%20Eligibility_Entitlement/Get%20Case%20Details%20API%20Scenario.txt
- Product Specifics:
    - A link to the Release Plan with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
    - A link to the Product Outline - https://github.com/department-of-veterans-affairs/va.gov-team/blob/11c628859be97a04aef6924cae35d063b6fcc363/products/Reapers%20-%20Ch31%20Eligibility_Entitlement/Phase%20II%20Product%20Outline.md
    - Ensure Product Outline contains Incident Response info, including:
        - Points of contact for your system and dependent VA back-ends
        - Links to dashboards that help identify and debug application issues
    - Is there a playbook included in your product outline, for investigating and handling likely failure modes? If so, link to your Product Playbook
- Code links: Link to relevant code directories in GitHub. If you are adding a small feature to an existing app, please scope these as closely as you can to the relevant code that is driving the change.
    - Front-end code links
    - Back-end code links
    - DevOps code links

## Where to put this checklist and what to name it

This document should be in markdown and should be shared in this location:
[va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist)

Name the file in the following format:
[team]-[application]-[date]

Team and application should match your Collab Cycle Request ticket (so we know who you are). Date should be supplied in the format MMDDYYYY. All Collab Cycle Request tickets can be found in the [Collaboration Cycle Reviews GH project](https://github.com/orgs/department-of-veterans-affairs/projects/998/views/1). 

Once you've dropped this checklist into this folder, please update your Collab Cycle Request ticket with the location as well as a link to your user data flow document.
