[Eligibility API Scenario Curls.txt](https://github.com/user-attachments/files/22517820/Eligibility.API.Scenario.Curls.txt)# Engineering and Security Checklist

## Instructions

Your document should be brief and high-level.  Please keep it to a single page.  Focus on the high level and link to supporting material where appropriate; this is _not_ a detailed engineering spec.

Some of the items below may not apply to your work--that's okay.  You may not be able to fill in some items that _do_ apply to your work--that's also okay.  If you don't have answers, please come to the Architecture Intent ready to ask questions.

## Engineering Checklist

- Product description
    + Allow veterans to apply with confidence for ch31 benefits by pulling information from authorative sources on eligibility and displaying benefit information. 
    + [Link to Collaboration Cycle Request issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/118500)
- UX design description
    + Wireframes - https://www.figma.com/design/PSBJqTnGhWaC9orrGziVz5/Ch31-RES?node-id=51-15746&p=f&t=f2UbvgJmE8csvv8h-0
    + Already conducted design intent and recieved feedback on adjustments. 
- Frontend changes
    + Identify any significant code changes.  Does this add a new function, or substantially refactor existing code? **No significant code changes, will create a new page to display veteran specific eligibility and benefits for chapter 31 utilizing an api call to RES, a connection between RES and Va.gov already exists. **
    + Identify any new design system components needed or changes to current components - **NA**
    + Does this update change shared code? - **NA**
    + Describe any product analytics being gathered.  How will errors in the FE system be detected? **NA**
- Backend changes
    + Does the project introduce any new or unusual infrastructure dependencies? **NA**
    + Does the project introduce any new connections or exchanges of new information types with other systems? (e.g. "new" meaning a new connection of type of information not already present in `vets-api`) **No new API, utilizing existing connection between RES and Va.gov**
    + Do you need to poll any APIs for status?  How is API success or failure determined? **Yes, but either reaching information or not with error handling on frontend**
    + Are you handling all failure and error cases while in custody of your users's data? **Yes**
    + Does this update change shared code? **No**
    + What information will be captured in logs or metrics? **N/A**
    + Does this project/update involve user-uploaded data? Are user-uploaded files being scanned for viruses? **No**
    + Does this project/update generate intermediate or "temporary" files during processing? If so, where and how are the temporary files materialized? What is the cleanup/removal process or mechanism? **No**
- Internal API changes **No internal API changes**
    + List new or modified APIs in `vets-api`**No**
    + Are you deprecating or removing any APIs? **No**
    + Do you have API documentation? **No**
    + Describe expected call patterns **No**
    + Are there new endpoints or services that require rate limiting or throttling? **No**
    + Are there any third party integrations, and how are they vetted? **No**
    + Are there any new scheduled/cron jobs? If so, how are their intervals and impact considered? (especially with regard to periods of higher traffic or times when Sidekiq and infrastructure is already handling a high volume of jobs?) **No**
    + Is schema validation enforced (ex: using the vets-json-schema repo)? **No**
- External API changes
    + List new or modified APIs for upstream or external systems **Veterans to check Chapter 31 eligibility from VA.gov, prior to submitting a 28-1900 application, so that the Veteran is tracking Chapter 31 details and has a streamlined understanding of eligibility prior to submitting applications. As such, RES is creating a REST API that VA.gov can call, following Veteran login to VA.gov, which will return eligibility data for the Veteran indicating whether the Veteran is eligible for Chapter 31 benefits based on eligibility criteria. API titled - checkCh31Eligibility**
    + Describe expected call patterns **Uploading documents of API call responses and Postman File**
    + What PII or PHI will be transmitted to/from the external systems? **Name, Birthdate, ICN, Military Service Period and Service Connected Disability Details **
- Background jobs
    + List any required background processing 
    + Describe error and dead letter handling
- Data storage **N/A to this whole section**
    + Describe new or modified databases, tables or columns 
    + Describe indexes and constraints
    + Identify PII and PHI and where and how it will be stored, processed, expired and deleted 
    + Is this change introducing a large or new volume of data?
    + Do these changes impact database or caching layers (ex: Redis, Postgres)? Do the changes have implications for data volume, memory, or CPU usage to consider?
    + Does this project/update expect to persist information? What is the expiration policy for data added to the system? What is the cleanup/removal process or mechanism?
- Libraries and dependencies
    + List new or updated dependencies
- Metrics, logging, observability, alerting **N/A to this whole section**
    + Identify key areas to monitor
    + Are you introducing any custom metric tags? Have you considered their cost and potential cardinality? High cardinality = higher cost
    + Are there any sensitive data risks with logging?
- Infrastructure and network changes **NA**
    + List any changes or additions
- Test strategy
    + Describe automated, manual and user acceptance test strategy **Our team is working to test the new page against the designs mocked up and approved by the business. We will also be conducting TestRail and UAT testing**
    + Describe required test data and test user accounts **Veterans who ICN's existing in Va.gov that can link across other systems MPI, VA Profile, Corp and RES**
- Rollout plan
    + List scope of any feature flags **Feature flag currently contains all information for the new page we are creating.**
    + Identify other teams to coordinate with **Working with RES team to create the API and push it to production before our go live date of 11/7**
    + Describe rollback plan **The API will go live ahead of time, we will remove the feature flag on 11/7 to display new functionality. If anything was to go wrong we will turn off the feature flag hiding all the functionality until necessary repairs were completed**
- Internal administration tasks **None**
    + What maintenance or administration tasks do you anticipate will need to be performed periodically?
    + Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.).

## Security Checklist
### Questions to be Answered

The following product or feature descriptions may be answered with a reference link to the team’s documentation. However, the provided links must be specific to the request.
- Please describe what problem this product or feature solves.
- Please describe a plan to monitor this code base after deployment, including the following scenarios (NOTE: If you don't (yet) have such a plan, or don't know how to get started with one, we can work on this with you!).
  - The code base is compromised at source- or run-time.
    - How does the code base get disabled in the product?
    - How would you detect a compromise?
    - What process and privilege does the code base execute under?
        - If so, is that process isolated?
        - If so, what additional credentials are available to that process?
    - The code base is infiltrated or ex-filtrated.
  - Links to dashboards that help identify and debug application issues
- Provide your Release Plan with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
- Are there any new application endpoints, front- or back-end? If so, please give examples of how any of the endpoints could be abused by unauthorized parties, as well as a plan to mitigate such threats.
- Is there any new logging data being captured? If so, what data is being captured, how, and where is it stored?
- Is Personal Health Information/PHI, Personal Identifiable Information/PII, or any other Personal Information/PI being captured? If so, please answer the following questions:
    - Is the PHI strongly encrypted?
    - Is the PII encrypted?
    - Can the sensitive information be scrubbed?
- Are there any new, modified, or existing Cookies being used?
    - If so, are there any new Cookies?
        - If so, why can’t the existing Cookies be used?
    - If so, are there any modified Cookies?
        - If so, how are the Cookies modified?
    - If so, are there any existing Cookies?
- Is this feature authenticated or unauthenticated?
- Are there any other specific subjects that you want to highlight or focus additional attention on?

### Artifacts
Please provide the following documentation as attachments.
- Architecture Diagram:
This diagram must go beyond simple boxes and lines. It must clearly indicate which portions of the architecture are within the scope of the review, which portions are dependencies within the product, and which portions are external dependencies.
This diagram must also illustrate the following specifics.
  - Which implementation of security approaches were considered along with the approach that was chosen and why?
  - If there are any libraries or components that this code base will depend upon that are currently not yet part of the code base? How and why were these selected?
- Incident Response Plan, including Points of Contact for your system and dependent VA back-ends.
    - If a security vulnerability is discovered or reported in this code base, what is the plan and timeline for rolling out the fix?
- Sequence Diagram:
This diagram must include any authentication steps if this is an authenticated experience.
- Data Flow Diagram:
This diagram must illustrate the following specifics.
  - What data is collected or used, and where, including information such as credentials used by this system?
  - Where is the data is stored and how, including information such as any encryption used?
  - How is the data transferred, including information such as any encryption used?
  - Who accesses the data and in what capacity (read or read-write)?
  - What is the audit trail of data access and manipulation?
- API Endpoint Documentation:[Documentation of RES Integration API Scenarios (1).docx](https://github.com/user-attachments/files/22517801/Documentation.of.RES.Integration.API.Scenarios.1.docx)
**PostMan File Example**
Scenario 1 : Valid Input + Eligible Veteran + Case Already Exist in RES 
--------------------------------------------------

curl --location 'https://stage.res.vaec.va.gov/suite/webapi/chapter31-eligibility-details-search' \
--header 'Content-Type: application/json' \
--header 'Appian-API-Key: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjNDdiNzNjMy04ZTgzLTQ5MzQtODViMS1kOTNhMmNhMjgxN2UifQ.8TqYLKpQKmdK5PrWvS1FeA7nE2a8HU9S0BuTVXIR5Gw' \
--data '{
"icn":"1018666199V574819"
}'


Scenario 2 : Valid Input + Not-Eligible Veteran  + Case Already Exist in RES 
-----------------------------
curl --location 'https://stage.res.vaec.va.gov/suite/webapi/chapter31-eligibility-details-search' \
--header 'Content-Type: application/json' \
--header 'Appian-API-Key: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjNDdiNzNjMy04ZTgzLTQ5MzQtODViMS1kOTNhMmNhMjgxN2UifQ.8TqYLKpQKmdK5PrWvS1FeA7nE2a8HU9S0BuTVXIR5Gw' \
--data '{
"icn":"1018616478V531227"
}'

Scenario 3 : Valid Input + Eligible Veteran + Case Does Exists in RES
--------------------------------------------------

curl --location 'https://stage.res.vaec.va.gov/suite/webapi/chapter31-eligibility-details-search' \
--header 'Content-Type: application/json' \
--header 'Appian-API-Key: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjNDdiNzNjMy04ZTgzLTQ5MzQtODViMS1kOTNhMmNhMjgxN2UifQ.8TqYLKpQKmdK5PrWvS1FeA7nE2a8HU9S0BuTVXIR5Gw' \
--data '{
"icn":"1018663471V253279"
}'

Scenario 4 : Valid Input + Not-Eligible Veteran  + Case Does Exists in RES
-----------------------------
curl --location 'https://stage.res.vaec.va.gov/suite/webapi/chapter31-eligibility-details-search' \
--header 'Content-Type: application/json' \
--header 'Appian-API-Key: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjNDdiNzNjMy04ZTgzLTQ5MzQtODViMS1kOTNhMmNhMjgxN2UifQ.8TqYLKpQKmdK5PrWvS1FeA7nE2a8HU9S0BuTVXIR5Gw' \
--data '{
"icn":"1018666167V127238"
}'



Scenarion 5 : Invalid Input/No ICN
------------------------------
curl --location 'https://stage.res.vaec.va.gov/suite/webapi/chapter31-eligibility-details-search' \
--header 'Content-Type: application/json' \
--header 'Appian-API-Key: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjNDdiNzNjMy04ZTgzLTQ5MzQtODViMS1kOTNhMmNhMjgxN2UifQ.8TqYLKpQKmdK5PrWvS1FeA7nE2a8HU9S0BuTVXIR5Gw' \
--data '{
"icn":""
}'


Scenarion 6: Wrong ICN / ICN not present in MPI 
----------------------------------
curl --location 'https://stage.res.vaec.va.gov/suite/webapi/chapter31-eligibility-details-search' \
--header 'Content-Type: application/json' \
--header 'Appian-API-Key: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjNDdiNzNjMy04ZTgzLTQ5MzQtODViMS1kOTNhMmNhMjgxN2UifQ.8TqYLKpQKmdK5PrWvS1FeA7nE2a8HU9S0BuTVXIR5Gw' \
--data '{
"icn":"XXXX1018616478V531227"
}'g Eligibility API Scenario Curls.txt…]()


This may include a link to a Swagger/OpenAPI document. Any new API endpoints introduced by this product or feature must be explicitly identified.
- Product Specifics:
    - A link to the Release Plan with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
    - A link to the Product Outline
    - Ensure Product Outline contains Incident Response info, including:
        - Points of contact for your system and dependent VA back-ends
        - Links to dashboards that help identify and debug application issues
    - Is there a playbook included in your product outline, for investigating and handling likely failure modes? If so, link to your Product Playbook
- Code links: Link to relevant code directories in GitHub.
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
