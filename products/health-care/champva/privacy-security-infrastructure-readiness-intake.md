## Guidance

- VFS Lead engineer or product manager: using this template, create issue in `va.gov-team-sensitive` and answer the questionnaire in its entirety.
* Do _**NOT**_ put any PII, PHI, or other Potentially Sensitive Data into the Issue contents.
* The Platform Security Team will review this issue and **conduct all conversations and follow-ups through this issue** (**ex**cluding PII/PHI/Potentially Sensitive Data).
    * As a requester: complete any follow-up action items and provide all requested information in this issue.
* Do _**NOT**_ close this issue, Security Reviews may only be closed by a member of the Platform Security Team. The Platform Security Team will update the [Platform Collaboration Point Tracker](https://docs.google.com/spreadsheets/d/1OgPyEvUlNF6EnaYMFAXJkV6FKOvZnlPnbOQ2fAJ7W7A/edit#gid=1116695886) upon closure.

## Stakeholders from the **IVC ChampVA Forms**
- Lead engineer(s): **Bryan Alexander(Ad Hoc) and Don Shin(Agile6)**
- Product manager(s): **Bo Altes(Agile6) and Mary Wang(Ad Hoc)**
- OCTO-DE product lead: **Premal Shah**
- Anyone else on your team whose presence is needed to speak to the technical architecture and security concerns: **Michael Clement(Ad Hoc) and Rachel Eiting(CoPilot)**

## Questions to be Answered

The following product or feature descriptions may be answered with a reference link to the team’s documentation. However, the provided links must be specific to the request.

* Please describe what problem this product or feature solves.
  - **This product is similar to SimpleForms but for OHI and FMP IVC ChampVA Forms. It's giving Veterans/Applicants the ability to complete their forms online instead of hand-written/mail.**
* Please describe a plan to monitor this code base after deployment, including the following scenarios (_NOTE: If you don't (yet) have such a plan, or don't know how to get started with one, we can work on this with you!_).
    * The code base is compromised at source- or run-time.
        * How does the code base get disabled in the product?
          - **Front-end will have Flipper set up to hide the forms from the website. The back-end doesn't need one at the moment as we are just responding to the front-end**
        * How would you detect a compromise?
          - **We will be monitoring via our [IVC ChampVA DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/zsa-453-at7/ivc-champva-forms) will be our primary way of monitoring this product.**
        * What process and privilege does the code base execute under?
            * If so, is that process isolated?
              - **We don’t know what this is**
            * If so, what additional credentials are available to that process?
        * The code base is infiltrated or ex-filtrated.
    * Links to dashboards that help identify and debug application issues
      - **[IVC ChampVA DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/zsa-453-at7/ivc-champva-forms)**
* Provide your [**Release Plan**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) **BO OR MARY CHANGE URL** with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
* Are there any new application endpoints, front- or back-end? If so, please give examples of how any of the endpoints could be abused by unauthorized parties, as well as a plan to mitigate such threats.
  - **New back-end endpoints:**
    - **The endpoints should not be able to be abused by unauthorized parties, only identity verified users can access the form and they only have access to their data. PEGA also will be utilizing SiS (Sign-In Service) to access the last endpoint**
      - **POST `/ivc_champva/v1/forms`**
      - **POST `/ivc_champva/v1/forms/submit_supporting_documents`**
      - **POST `/ivc_champva/v1/forms/status_updates`**

* Is there any new logging data being captured?  If so, what data is being captured, how, and where is it stored?
  - **Error messages are logged to the rails logs and DataDog. PII is not sent to any logging.**
* Is [Personal Health Information/PHI](https://www.hhs.gov/hipaa/index.html), [Personal Identifiable Information/PII](https://www.dol.gov/general/ppii), or any other [Personal Information/PI](https://www.oag.ca.gov/privacy/ccpa) being captured? If so, please answer the following questions:
  - **We are storing the Veteran's First name, Last name, and Email in IvcChampvaForms table.**
    * Is the PHI strongly encrypted?
      - **N/A**
    * Is the PII encrypted?
      - **No**
    * Can the sensitive information be scrubbed?
      - **We can scrub the data in the table after the Veteran is notified of a completed application cycle**
* Are there any new, modified, or existing Cookies being used?
  - **The existing logged-in user cookie is used, only identity-verified users are allowed to access the form.**
    * If so, are there any new Cookies?
      - **No**
        * If so, why can’t the existing Cookies be used?
          - **N/A**
    * If so, are there any modified Cookies?
      - **No**
        * If so, how are the Cookies modified?
          - **N/A**
    * If so, are there any existing Cookies?
      - **Yes**
* Is this feature authenticated or unauthenticated?
  - **Authenticated normally for uploads and Platform's SiS feature for incoming requests from PEGA**
* Are there any other specific subjects that you want to highlight or focus additional attention on?
  - **Don't think so**

## Artifacts

Please provide the following documentation as attachments.
* [x] [**Architecture Diagram**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/engineering/architecture_diagram.md)
    - **The PEGA system is outside the scope of the review**
    - This diagram must also illustrate the following specifics.
    * Which implementation of security approaches were considered along with the approach that was chosen and why?
      - **We are using SiS(Sign-inService) as our authenticator between us and PEGA. It was chosen because it already existed with max security in mind and required minimal setup.**
    * If there are any libraries or components that this code base will depend upon that are currently not yet part of the code base? How and why were these selected?
      - **There are no new backend libraries.**
* [ ] Incident Response Plan **BO OR MARY TURN THIS INTO URL**, including Points of Contact for your system and dependent VA back-ends.
    * If a security vulnerability is discovered or reported in this code base, what is the plan and timeline for rolling out the fix?
      - **BO OR MARY INSERT HERE**
* [x] [**Sequence Diagram**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/engineering/sequence_diagram.md)
    - This diagram must include any authentication steps if this is an authenticated experience.
* [x] Data Flow Diagram:
    This diagram must illustrate the following specifics.
   - **The Data flow is the same as the [**Architecture Diagram**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/engineering/architecture_diagram.md)**
    * What data is collected or used, and where, including information such as credentials used by this system?
      - **We created a new table called IvcChampvaForms, below is the Factory to show you the data we store and its structure. Credentials for SiS are stored in their own table unrelated to anything we've added.**
        ```
        factory :ivc_champva_form do
          email { Faker::Internet.email }
          first_name { Faker::Name.first_name }
          last_name { Faker::Name.last_name }
          form_number { '10-10D' }
          file_name { Faker::File.file_name }
          form_uuid { SecureRandom.uuid }
          s3_status { '[200]' }
          pega_status { %w[pending processing completed].sample }
          case_id { 'ABC-1234' }
        end
    * Where is the data is stored and how, including information such as any encryption used?
      - **See above. No encryption at this time.**
    * How is the data transferred, including information such as any encryption used?
      - **Data from vets-website to vets-api is transferred with HTTPS. Data from PEGA system to the vets-api is also transferred with HTTPS with BearerToken through SiS.**
    * Who accesses the data and in what capacity (read or read-write)?
      - **Form submissions can only be accessed by external systems. IvcChampvaForms table can be accessed by developers with production console access.**
    * What is the audit trail of data access and manipulation?
      - **As we understand, there is no audit trail for access to the IvcChampvaForms table**
* [x] [**API Endpoint Documentation**](https://staging-api.va.gov/v1/apidocs)
    - This may include a link to a Swagger/OpenAPI document. Any new API endpoints introduced by this product or feature must be explicitly identified.
   - **New endpoints**
     - **POST `/ivc_champva/v1/forms`**
      - **POST `/ivc_champva/v1/forms/submit_supporting_documents`**
      - **POST `/ivc_champva/v1/forms/status_updates`**
* Product Specifics:
    * [ ] A link to the [**Release Plan**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/10-10d-release-plan.md) with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
    * [ ] A link to the [**Product Outline**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/10-10d-product-outline.md) 
    - Ensure Product Outline contains **Incident Response** info, including:
        - Points of contact for your system and dependent VA back-ends
        - Links to dashboards that help identify and debug application issues
    * [ ] Is there a playbook included in your product outline, for investigating and handling likely failure modes? If so, link to your [Product Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/Product_Playbook_Security.md) **BO OR MARY CHANGE URL**

## Additional information

Please refer to [Platform Collaboration Cycle](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/index.html) or the [Privacy and Security Review Touchpoint](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Privacy-and-security-review.1782317101.html) on Platform website for more information about the Collaboration Cycle.
