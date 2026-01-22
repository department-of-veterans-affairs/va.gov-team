# Engineering and Security Checklist

## Engineering Checklist

- Product description
  - Brief overview of motivation for the change from an engineering & security point of view
    - The changes driving this project are focused on the front-end user experience.  The goal is to allow veterans to select from a list of their dependents rather than asking them to fill them out by hand.
  - Link to Collaboration Cycle Request issue
    - https://github.com/department-of-veterans-affairs/va.gov-team/issues/111613
- UX design description
  - For user-facing changes, link to UX prototype or wireframes if available
    - https://www.figma.com/design/7aJrwvfqkN4yvfMdoZj3XB/686c-674---2025-2026-Improvements?node-id=4-22&p=f&t=DqyeWMt0Bk8vSmSt-0
  - Call out any engineering challenges; UX is reviewed in the [Design Intent meeting][DI]
    - The engineering challenges are explored in this document:
      - https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/dependents/686c-674/components/picklist/README.md
- Frontend changes
  - Identify any significant code changes. Does this add a new function, or substantially refactor existing code?
    - The changes to support picklist are here:
      - https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/dependents/686c-674/components/picklist
      - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/picklist/flow.md
  - Identify any new design system components needed or changes to current components
      - To support the picklist flow, a custom routing system was developed:    
        -  Review of the built-in form system routing reveals that it would allow the addition of a single follow up page.    
        - The array builder list loop could have worked, but doesn't allow for a custom summary page. It also would force Veterans to "edit" each pre-populated dependent   
        - The custom routing system:      
          - Uses a single CustomPage and URL search parameters to determine which page to display.      
          - It steps through all the unique follow up pages for each selected dependent.      
          - Once all dependent follow up questions have been answered, the Veteran is directed to the review & submit page.  
          - Within the picklist follow up flow, if there is a case where the dependent is still eligible, an exit form page is shown. Once the form is exited, the current in-progress form is deleted.
  - Does this update change shared code?
      - No
  - Describe any product analytics being gathered. How will errors in the FE system be detected?
      - RUM and Google Analytics are already present on the 686c form.
- Backend changes
  - Does the project introduce any new or unusual infrastructure dependencies?
    - No
  - Does the project introduce any new connections or exchanges of new information types with other systems? (e.g. "new" meaning a new connection of type of information not already present in `vets-api`)
    - No
  - Do you need to poll any APIs for status? How is API success or failure determined?
    - No
  - Are you handling all failure and error cases while in custody of your users's data?
    - Yes
  - Does this update change shared code?
    - No
  - What information will be captured in logs or metrics?
    - Nothing new or additional. 
  - Does this project/update involve user-uploaded data? Are user-uploaded files being scanned for viruses?
    - This project does not change the way this works, but ClamAV is in place on vets-api
  - Does this project/update generate intermediate or "temporary" files during processing? If so, where and how are the temporary files materialized? What is the cleanup/removal process or mechanism?
    - N/A
- Internal API changes
  - List new or modified APIs in `vets-api`
    - N/A - no new API's
  - Are you deprecating or removing any APIs?
    - No
  - Do you have API documentation?
    - https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727757799534/c7c5f5a6dc1b8f451ecab5f02afa70a9325b93c8
  - Describe expected call patterns
    - https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/dependents_benefits/documentation/flows.md (the current refactoring effort)
    - https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/dependents_benefits/documentation/legacy_flow.md (the legacy flow for V1 and V2)
  - Are there new endpoints or services that require rate limiting or throttling?
    - N/A
  - Are there any third party integrations, and how are they vetted?
    - N/A
  - Are there any new scheduled/cron jobs? If so, how are their intervals and impact considered? (especially with regard to periods of higher traffic or times when Sidekiq and infrastructure is already handling a high volume of jobs?)
    - No
  - Is schema validation enforced (ex: using the vets-json-schema repo)?
    - Yes, with vets-json-schema
      - https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/21-686C-V2-schema.json
- External API changes
  - List new or modified APIs for upstream or external systems
    - None
  - Describe expected call patterns
    - N/A
  - What PII or PHI will be transmitted to/from the external systems?
    - N/A
- Background jobs
  - List any required background processing
    - This isn't new to this work, but our team uses Sidekiq
  - Describe error and dead letter handling
    - N/A, but all of our logging is done as described here:  https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/logging
- Data storage
  - Describe new or modified databases, tables or columns
    - None
  - Describe indexes and constraints
    - None
  - Identify PII and PHI and where and how it will be stored, processed, expired and deleted
    - N/A.  Nothing new
  - Is this change introducing a large or new volume of data?
    - No
  - Do these changes impact database or caching layers (ex: Redis, Postgres)? Do the changes have implications for data volume, memory, or CPU usage to consider?
    - No
  - Does this project/update expect to persist information? What is the expiration policy for data added to the system? What is the cleanup/removal process or mechanism?
    - No
- Libraries and dependencies
  - List new or updated dependencies
    - None
- Metrics, logging, observability, alerting
  - Identify key areas to monitor
    - The existing monitors will cover the back-end to determine if we have any issues.  On the front-end, we use RUM to look at outcomes.
  - Are you introducing any custom metric tags? Have you considered their cost and potential cardinality? High cardinality = higher cost
    - No
  - Are there any sensitive data risks with logging?
    - We have taken into consideration how the front-end components may log PII. `enableAnalytics` is the attribute we would use to determine if a radio button, for example is safe to log.
- Infrastructure and network changes
  - List any changes or additions
    - None
- Test strategy
  - Describe automated, manual and user acceptance test strategy
    - [Regression test plan](https://dvagov.sharepoint.com/:x:/s/vaabdvro/EZ5_txHWGnhAoiQfrSZuXHgBO3FxGnCMTEElOJHvSC_4LA?e=6Br9Cc&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wNTAwLTAwMDAwMDAwMDAwMH0)
    - Test plan [Link 1](https://dvagov.sharepoint.com/:x:/s/vaabdvro/EZ5_txHWGnhAoiQfrSZuXHgBO3FxGnCMTEElOJHvSC_4LA?e=46DzQf&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0) & [Link 2](https://dvagov.sharepoint.com/:x:/s/vaabdvro/EZ5_txHWGnhAoiQfrSZuXHgBO3FxGnCMTEElOJHvSC_4LA?e=x8XZVz&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMTAwLTAwMDAwMDAwMDAwMH0)
    - [Coverage for References](https://dvagov.sharepoint.com/:x:/s/vaabdvro/EZ5_txHWGnhAoiQfrSZuXHgBO3FxGnCMTEElOJHvSC_4LA?e=R8zh3C&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMzAwLTAwMDAwMDAwMDAwMH0)
  - Describe required test data and test user accounts
    - Test user account are located in the `va.gov-team-sensitive` repository: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/dependents-picklist-test-users.md
    - Test users should be populated with data necessary to test dependent removal flows using the Picklist feature. 
- Rollout plan
  - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/picklist/picklist-release-plan.md
    - List scope of any feature flags
      - The `va_dependents_v3` feature flag hides all the previous form version's dependent removal pages and makes the new picklist dependent removal pages visible.   
    - Identify other teams to coordinate with
      - This is a front-end change. We do not anticipate any need for coordination with other systems. However, during rollout we will smoke test the changes with RBPS. 
    - Describe rollback plan
      - The rollback plan is described in the [Rollback Criteria section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/form_updates/686c-674_V3_Picklist_Release_Plan.md#rollback-criteria) of the 686c Picklist Go/No-Go and Phased Release Plan. In short, we will reenable the `va_dependents_v3` feature flag.
  
- Internal administration tasks  
  - What maintenance or administration tasks do you anticipate will need to be performed periodically?
    - None
  - Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.).
    - N/A

## Security Checklist

### Questions to be Answered

The following product or feature descriptions may be answered with a reference link to the team’s documentation. However, the provided links must be specific to the request.

- Please describe what problem this product or feature solves.
  - In cases where a Veteran has an existing dependent currently on their disability award and wants to remove them from their benefit, they will no longer be required to fill out the dependent personal information, and instead can choose the dependent from a "picklist" for removal. This will alleviate issues where a Veteran may submit incorrect dependent personal information, and thereby reduce the likelihood of triggering a manual review.

- Please describe a plan to monitor this code base after deployment, including the following scenarios (NOTE: If you don't (yet) have such a plan, or don't know how to get started with one, we can work on this with you!).
  - The code base is compromised at source- or run-time.
    - How does the code base get disabled in the product?
      - We will re-enable the `va_dependents_v3` feature flag.
    - How would you detect a compromise?
      - It isn't really in the scope of our team to detect compromises. We are conscious to never put PII in query strings and we try to keep PII out of DataDog.
    - What process and privilege does the code base execute under?
      - N/A. Our code is managed by platform.
    - The code base is infiltrated or ex-filtrated.
      - N/A. Our code is managed by platform.
  - Links to dashboards that help identify and debug application issues
    - https://vagov.ddog-gov.com/dashboard/txg-mfx-xha/benefits-dependents-686674-v2?fromUser=false&refresh_mode=paused&from_ts=1762446627286&to_ts=1762448427286&live=false
- Provide your Release Plan with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
  - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/form_updates/686c-674_V3_Picklist_Release_Plan.md

- Are there any new application endpoints, front- or back-end? If so, please give examples of how any of the endpoints could be abused by unauthorized parties, as well as a plan to mitigate such threats.
  - No. There are no new endpoints.

- Is there any new logging data being captured? If so, what data is being captured, how, and where is it stored?
  - No. The existing monitors will cover the back-end to determine if we have any issues.  On the front-end, we use RUM to look at outcomes.

- Is Personal Health Information/PHI, Personal Identifiable Information/PII, or any other Personal Information/PI being captured? If so, please answer the following questions:
  - Is the PHI strongly encrypted?
    - Where applicable, it would be in Redis or encrypted in Postgres
  - Is the PII encrypted?
    - Where applicable, it would be in Redis or encrypted in Postgres
  - Can the sensitive information be scrubbed?
    - Yes
- Are there any new, modified, or existing Cookies being used?
  - No
- Is this feature authenticated or unauthenticated?
  - Authenticated

- Are there any other specific subjects that you want to highlight or focus additional attention on?
  - No


### Artifacts

Please provide the following documentation as attachments.

- Architecture Diagram:
  This diagram must go beyond simple boxes and lines. It must clearly indicate which portions of the architecture are within the scope of the review, which portions are dependencies within the product, and which portions are external dependencies.
  - Attached in #111613: [686c_674-Architecture.Diagram.pdf](https://github.com/user-attachments/files/23526826/686c_674-Architecture.Diagram.pdf)
- Incident Response Plan, including Points of Contact for your system and dependent VA back-ends.
  - If a security vulnerability is discovered or reported in this code base, what is the plan and timeline for rolling out the fix?
    - See the [VA Lifestage Incident Response Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/incident_response.md)
- Sequence Diagram:
  - Attached in #111613: [686c_674_Sequence_Diagram.pdf](https://github.com/user-attachments/files/23526856/686c_674_Sequence_Diagram.pdf)
  
- Data Flow Diagram:
  - https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727757799534/c7c5f5a6dc1b8f451ecab5f02afa70a9325b93c8
  - https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/dependents_benefits/documentation/flows.md (the current refactoring effort)
  - https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/dependents_benefits/documentation/legacy_flow.md
- API Endpoint Documentation:
  This may include a link to a Swagger/OpenAPI document. Any new API endpoints introduced by this product or feature must be explicitly identified.
  - We are not introducing any new API endpoints for this feature.

- Product Specifics:
  - A link to the Release Plan with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
    - [686c Picklist Go/No-Go and Phased Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/form_updates/686c-674_V3_Picklist_Release_Plan.md)
    - [686 Picklist Release Plan](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1760709157629/cf91d54b10405601b5653a0020ffc323bfa20d3d)
  - A link to the Product Outline
    - [Product Outline: 21-686c (Application Request to Add and/or Remove Dependents) and 21-674 (Request for Approval of School Attendance)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/README.md)
  - Ensure Product Outline contains Incident Response info, including:
    - Points of contact for your system and dependent VA back-ends
    - Links to dashboards that help identify and debug application issues
  - Is there a playbook included in your product outline, for investigating and handling likely failure modes? If so, link to your Product Playbook
- Code links: Link to relevant code directories in GitHub.
  - FE: https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/dependents/686c-674
  - Back-end code links: NA
  - DevOps code links: NA

## Where to put this checklist and what to name it

This document should be in markdown and should be shared in this location:
[va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist)

Name the file in the following format:
[team]-[application]-[date]

Team and application should match your Collab Cycle Request ticket (so we know who you are). Date should be supplied in the format MMDDYYYY. All Collab Cycle Request tickets can be found in the [Collaboration Cycle Reviews GH project](https://github.com/orgs/department-of-veterans-affairs/projects/998/views/1).

Once you've dropped this checklist into this folder, please update your Collab Cycle Request ticket with the location as well as a link to your user data flow document.
