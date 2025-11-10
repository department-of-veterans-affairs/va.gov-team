
# Engineering and Security Checklist

## Engineering Checklist

- Product description
    + Brief overview of motivation for the change from an engineering & security point of view
**Under the Dole Act, institutions are mandated to provide clear visibility into reported student complaints, including the complaint year and the complaint type, to support transparency and 
informed decision-making. Currently, the complaint grid in the GI Bill Comparison Tool’s tracking grid does not display these required data points in an accessible, read-only format, 
creating compliance risks and limiting the tool’s effectiveness for Veteran’s evaluating entry into the institution being reviewed.**
    + Link to Collaboration Cycle Request issue
**https://github.com/department-of-veterans-affairs/va.gov-team/issues/110858**
- UX design description
    + For user-facing changes, link to UX prototype or wireframes if available
    + Call out any engineering challenges; UX is reviewed in the [Design Intent meeting][DI]
** https://www.figma.com/design/mf4fn2L4iyngrucp0MuHSu/Comparison-Tool?node-id=855-3880&t=35FRsHrDUI0oFi71-4**
- Frontend changes
    + Identify any significant code changes.  Does this add a new function, or substantially refactor existing code? 
    **No**
    + Identify any new design system components needed or changes to current components 
    **N/A**
    + Does this update change shared code? 
    **N/A**
    + Describe any product analytics being gathered.  How will errors in the FE system be detected? 
	 **Frontend tests are captured by unit testing.**
- Backend changes
    + Does the project introduce any new or unusual infrastructure dependencies? 
    **No**
    + Does the project introduce any new connections or exchanges of new information types with other systems? (e.g. "new" meaning a new connection of type of information not already present in `vets-api`) 
    **No**
    + Do you need to poll any APIs for status?  How is API success or failure determined? 
    **No**
    + Are you handling all failure and error cases while in custody of your users's data? 
    **Yes**
    + Does this update change shared code? 
    **No**
    + What information will be captured in logs or metrics? 
    **High-level notifications only if Comparison Tool is down. No data being passed from FE to BE.**
    + Does this project/update involve user-uploaded data? Are user-uploaded files being scanned for viruses? 
    **No**
    + Does this project/update generate intermediate or "temporary" files during processing? If so, where and how are the temporary files materialized? What is the cleanup/removal process or mechanism? 
    **No**
- Internal API changes
    + List new or modified APIs in `vets-api` 
    **N/A**
    + Are you deprecating or removing any APIs? 
    **No** 
    + Do you have API documentation? 
    **Yes, general API doc** 
    + Describe expected call patterns Vets website calls Vets API, GIBCT returns data 
    + Are there new endpoints or services that require rate limiting or throttling? 
    **No**
    + Are there any third party integrations, and how are they vetted? 
    **No**
    + Are there any new scheduled/cron jobs? If so, how are their intervals and impact considered? (especially with regard to periods of higher traffic or times when Sidekiq and infrastructure is already handling a high volume of jobs?) 
    **No**
    + Is schema validation enforced (ex: using the vets-json-schema repo)? 
    **No schema validation**
- External API changes
    + List new or modified APIs for upstream or external systems 
    **N/A**
    + Describe expected call patterns 
    **N/A**
    + What PII or PHI will be transmitted to/from the external systems? 
    **N/A**
- Background jobs
    + List any required background processing 
    **N/A**
    + Describe error and dead letter handling 
    **N/A**
- Data storage
    + Describe new or modified databases, tables or columns 
    **N/A** 
    + Describe indexes and constraints 
    **N/A** 
    + Identify PII and PHI and where and how it will be stored, processed, expired and deleted 
    **N/A**
    + Is this change introducing a large or new volume of data? 
    **No**
    + Do these changes impact database or caching layers (ex: Redis, Postgres)? Do the changes have implications for data volume, memory, or CPU usage to consider? 
    **No**
    + Does this project/update expect to persist information? What is the expiration policy for data added to the system? What is the cleanup/removal process or mechanism? 
   **N/A** 
- Libraries and dependencies
    + List new or updated dependencies 
    **N/A** 
- Metrics, logging, observability, alerting
    + Identify key areas to monitor 
    **N/A**
    + Are you introducing any custom metric tags? Have you considered their cost and potential cardinality? High cardinality = higher cost 
    **No**
    + Are there any sensitive data risks with logging? 
**No**
- Infrastructure and network changes
    + List any changes or additions 
    **N/A**
- Test strategy
    + Describe automated, manual and user acceptance test strategy
    + Describe required test data and test user accounts
- Rollout plan
    + List scope of any feature flags 
	 **Turning on feature flag to enable new feature** 
    + Identify other teams to coordinate with 
    **N/A**
    + Describe rollback plan
**Turn off feature flag** 
- Internal administration tasks
    + What maintenance or administration tasks do you anticipate will need to be performed periodically? 
    **N/A**
    + Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.). 
    **N/A**

## Security Checklist
### Questions to be Answered

The following product or feature descriptions may be answered with a reference link to the team’s documentation. However, the provided links must be specific to the request.
- Please describe what problem this product or feature solves. 
- Please describe a plan to monitor this code base after deployment, including the following scenarios (NOTE: If you don't (yet) have such a plan, or don't know how to get started with one, we can work on this with you!).
  - The code base is compromised at source- or run-time. 
	**We intend to monitor Datadog for any unusual activity.**
    - How does the code base get disabled in the product?
     **Disable the feature flag.**
    - How would you detect a compromise?
    **Unusual activity in Datadog.**
    - What process and privilege does the code base execute under?
        - If so, is that process isolated?
        **Same as vets-api and vets-website.**
        - If so, what additional credentials are available to that process?
        **Same as vets-api and vets-website.**
    - The code base is infiltrated or ex-filtrated. 
    **Same as vets-api and vets-website.**
  - Links to dashboards that help identify and debug application issues
  **TBD dashboards will be built out.**
- Provide your Release Plan with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
- Are there any new application endpoints, front- or back-end? If so, please give examples of how any of the endpoints could be abused by unauthorized parties, as well as a plan to mitigate such threats.
- Is there any new logging data being captured? If so, what data is being captured, how, and where is it stored?
**N/A**
- Is Personal Health Information/PHI, Personal Identifiable Information/PII, or any other Personal Information/PI being captured? If so, please answer the following questions:
    - Is the PHI strongly encrypted? 
    **No**
    - Is the PII encrypted? 
    **No**
    - Can the sensitive information be scrubbed? 
    **N/A**
- Are there any new, modified, or existing Cookies being used?
**No**
- Is this feature authenticated or unauthenticated? 
**Unauthenticated**
- Are there any other specific subjects that you want to highlight or focus additional attention on?
**No**
### Artifacts
Please provide the following documentation as attachments.
- Architecture Diagram:
This diagram must go beyond simple boxes and lines. It must clearly indicate which portions of the architecture are within the scope of the review, which portions are dependencies within the product, and which portions are external dependencies.
This diagram must also illustrate the following specifics.
  - Which implementation of security approaches were considered along with the approach that was chosen and why?
  - If there are any libraries or components that this code base will depend upon that are currently not yet part of the code base? How and why were these selected?

```mermaid
graph TB
    subgraph "User Layer"
        User[Unauthenticated User<br/>Browser]
    end
    
    subgraph "Frontend - vets-website"
        CT[Comparison Tool]
        Profile[Institution Profile Page]
        ComplaintSection["Student Feedback and<br/>Complaints Data Section"]
    end
    
    subgraph "Backend - vets-api"
        APIEndpoint["/gi/institutions/[facility_code]<br/>GET endpoint"]
    end
    
    subgraph "Data Source - GIBCT"
        GIBCTEndpoint["/v1/gi/institutions/[facility_code]<br/>GET endpoint"]
        Serializer["Institution Serializer<br/>(Enhanced with additional<br/>complaint data specifics)"]
        GIBCT[(GIBCT Database)]
    end
    
    User -->|Navigate & View| CT
    CT --> Profile
    Profile --> ComplaintSection
    
    ComplaintSection -->|Request institution data| APIEndpoint
    APIEndpoint -->|Route to GIBCT| GIBCTEndpoint
    GIBCTEndpoint -->|Query institution data with complaint details| GIBCT
    GIBCT -->|Return institution data with complaint details| Serializer
    Serializer -->|Return institution data with expanded complaint data| APIEndpoint
    APIEndpoint -->|Return data| ComplaintSection
    
    style ComplaintSection fill:#e1f5ff
    style Serializer fill:#fff4e1
    style GIBCT fill:#f0f0f0
   ```
    
## Where to put this checklist and what to name it

This document should be in markdown and should be shared in this location:
[va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist)

Name the file in the following format:
[team]-[application]-[date]

Team and application should match your Collab Cycle Request ticket (so we know who you are). Date should be supplied in the format MMDDYYYY. All Collab Cycle Request tickets can be found in the [Collaboration Cycle Reviews GH project](https://github.com/orgs/department-of-veterans-affairs/projects/998/views/1). 

Once you've dropped this checklist into this folder, please update your Collab Cycle Request ticket with the location as well as a link to your user data flow document.
