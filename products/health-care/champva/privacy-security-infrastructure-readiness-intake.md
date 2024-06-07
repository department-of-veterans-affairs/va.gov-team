## Guidance

- VFS Lead engineer or product manager: using this template, create issue in `va.gov-team-sensitive` and answer the questionnaire in its entirety.
* Do _**NOT**_ put any PII, PHI, or other Potentially Sensitive Data into the Issue contents.
* The Platform Security Team will review this issue and **conduct all conversations and follow-ups through this issue** (**ex**cluding PII/PHI/Potentially Sensitive Data).
    * As a requester: complete any follow-up action items and provide all requested information in this issue.
* Do _**NOT**_ close this issue, Security Reviews may only be closed by a member of the Platform Security Team. The Platform Security Team will update the [Platform Collaboration Point Tracker](https://docs.google.com/spreadsheets/d/1OgPyEvUlNF6EnaYMFAXJkV6FKOvZnlPnbOQ2fAJ7W7A/edit#gid=1116695886) upon closure.

## Stakeholders from the **requesting team**
- Lead engineer: **name**
- Product manager: **name**
- OCTO-DE product lead: **name**
- Anyone else on your team whose presence is needed to speak to the technical architecture and security concerns: **names**

## Questions to be Answered

The following product or feature descriptions may be answered with a reference link to the team’s documentation. However, the provided links must be specific to the request.

* Please describe what problem this product or feature solves.
* Please describe a plan to monitor this code base after deployment, including the following scenarios (_NOTE: If you don't (yet) have such a plan, or don't know how to get started with one, we can work on this with you!_).
    * The code base is compromised at source- or run-time.
        * How does the code base get disabled in the product?
        * How would you detect a compromise?
        * What process and privilege does the code base execute under?
            * If so, is that process isolated?
            * If so, what additional credentials are available to that process?
        * The code base is infiltrated or ex-filtrated.
    * Links to dashboards that help identify and debug application issues
* Provide your [**Release Plan**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
* Are there any new application endpoints, front- or back-end? If so, please give examples of how any of the endpoints could be abused by unauthorized parties, as well as a plan to mitigate such threats.
* Is there any new logging data being captured?  If so, what data is being captured, how, and where is it stored?
* Is [Personal Health Information/PHI](https://www.hhs.gov/hipaa/index.html), [Personal Identifiable Information/PII](https://www.dol.gov/general/ppii), or any other [Personal Information/PI](https://www.oag.ca.gov/privacy/ccpa) being captured? If so, please answer the following questions:
    * Is the PHI strongly encrypted?
    * Is the PII encrypted?
    * Can the sensitive information be scrubbed?
* Are there any new, modified, or existing Cookies being used?
    * If so, are there any new Cookies?
        * If so, why can’t the existing Cookies be used?
    * If so, are there any modified Cookies?
        * If so, how are the Cookies modified?
    * If so, are there any existing Cookies?
* Is this feature authenticated or unauthenticated?
* Are there any other specific subjects that you want to highlight or focus additional attention on?

## Artifacts

Please provide the following documentation as attachments.
* [ ] Architecture Diagram:
    This diagram must go beyond simple boxes and lines. It must clearly indicate which portions of the architecture are within the scope of the review, which portions are dependencies within the product, and which portions are external dependencies.
    This diagram must also illustrate the following specifics.
    * Which implementation of security approaches were considered along with the approach that was chosen and why?
    * If there are any libraries or components that this code base will depend upon that are currently not yet part of the code base? How and why were these selected?
* [ ] Incident Response Plan, including Points of Contact for your system and dependent VA back-ends.
    * If a security vulnerability is discovered or reported in this code base, what is the plan and timeline for rolling out the fix?
* [ ] Sequence Diagram:
    This diagram must include any authentication steps if this is an authenticated experience.
* [ ] Data Flow Diagram:
    This diagram must illustrate the following specifics.
    * What data is collected or used, and where, including information such as credentials used by this system?
    * Where is the data is stored and how, including information such as any encryption used?
    * How is the data transferred, including information such as any encryption used?
    * Who accesses the data and in what capacity (read or read-write)?
    * What is the audit trail of data access and manipulation?
* [ ] API Endpoint Documentation:
    This may include a link to a Swagger/OpenAPI document. Any new API endpoints introduced by this product or feature must be explicitly identified.
* Product Specifics:
    * [ ] A link to the [**Release Plan**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
    * [ ] A link to the [**Product Outline**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md)
    - Ensure Product Outline contains **Incident Response** info, including:
        - Points of contact for your system and dependent VA back-ends
        - Links to dashboards that help identify and debug application issues
    * [ ] Is there a playbook included in your product outline, for investigating and handling likely failure modes? If so, link to your [Product Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/Product_Playbook_Security.md)

## Additional information

Please refer to [Platform Collaboration Cycle](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/index.html) or the [Privacy and Security Review Touchpoint](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Privacy-and-security-review.1782317101.html) on Platform website for more information about the Collaboration Cycle.
