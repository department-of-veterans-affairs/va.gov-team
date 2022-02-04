## Guidance

- VFS Lead engineer or product manager: using this template, create issue in `va.gov-team-sensitive` and answer the questionnaire in its entirety.
* Do _**NOT**_ put any PII, PHI, or other Potentially Sensitive Data into the Issue contents.
* Notify the Platform Security Team of this request in the #vfs-platform-support Slack channel upon filing.
* The Platform Security Team will review this issue and **conduct all conversations and follow-ups through this issue** (**ex**cluding PII/PHI/Potentially Sensitive Data).
    * As a requester: complete any follow-up action items and provide all requested information in this issue.
* Do _**NOT**_ close this issue, Security Reviews may only be closed by a member of the Platform Security Team. The Platform Security Team will update the [Platform Collaboration Point Tracker](https://docs.google.com/spreadsheets/d/1OgPyEvUlNF6EnaYMFAXJkV6FKOvZnlPnbOQ2fAJ7W7A/edit#gid=1116695886) upon closure.

## Stakeholders from the **requesting team**
- Lead engineer: Cesar Santiago
- Product manager: Shamik Desai
- OCTO-DE product lead: Matt Self
- Anyone else on your team whose presence is needed to speak to the technical architecture and security concerns: Won Choi: Devops lead

## Questions to be Answered

The following product or feature descriptions may be answered with a reference link to the team’s documentation. However, the provided links must be specific to the request.

* Please describe what problem this product or feature solves.
The My Education Benefits application is an application hosted on VA.gov for submitting education benefit claims. It will require the user to be logged in on ID.me to be used. The vets-api endpoints developed for it will ultimately communicate with the DGIB Managed Environment. The DGIB Managed Environment is an externally hosted managed service that provides the API to support claim submissions and secures communications with vets-api throught https and JWT tokens included on the vets-api request header.
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
* Are there any new, modified, or existing Cookies being used?: No
    * If so, are there any new Cookies?: N/A
        * If so, why can’t the existing Cookies be used?: N/A
    * If so, are there any modified Cookies?: No
        * If so, how are the Cookies modified?: No
    * If so, are there any existing Cookies?: No
* Is this feature authenticated or unauthenticated? The MEB application can only be used when logged in on VA.gov
* Are there any other specific subjects that you want to highlight or focus additional attention on? No

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
    For My Education Benefits we have created a series of endpoints to get a claimant's information, eligibility status, submit a claim, get claim status, and get letters from the DGIB Managed Environment. The DGIB Managed Environment is an external managed service that provides an API supporting education claim benefit functions including fetching claimant/claim status information and also claim processing automation.

The logged in user information is never sent from the FE, to avoid query manipulation. Instead, each one of these endpoints will use the logged in user information available on vets-api to generate the appropriate REST queries for the logged in user to the DGIB Managed Environment API. Secure communication between the vets-api endpoints and DGIB will be implemented using https and JWT tokens. DGIB expects vets-api endpoints to send JWT tokens on the request header and will validate them before sending or processing any information. 

The implemented endpoints are:

- meb_api/v0/claimant_info: This endpoint communicates with the DGIB services and returns claimant information to be displayed and used on My Education Benefits. A sample return object would look like:
```
{
  "claimant": {
    "claimantId": 0,
    "suffix": "string",
    "dateOfBirth": "2021-12-10T15:58:16.633Z",
    "firstName": "string",
    "lastName": "string",
    "middleName": "string",
    "notificationMethod": "NONE",
    "contactInfo": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "zipcode": "string",
      "emailAddress": "string",
      "addressType": "DOMESTIC",
      "mobilePhoneNumber": "string",
      "homePhoneNumber": "string",
      "countryCode": "string",
      "stateCode": "string"
    },
    "preferredContact": "string"
  },
  "serviceData": [
    {
      "branchOfService": "string",
      "beginDate": "2021-12-10T15:58:16.633Z",
      "endDate": "2021-12-10T15:58:16.633Z",
      "characterOfService": "string",
      "reasonForSeperation": "string",
      "exclusionPeriods": [
        {
          "beginDate": "2021-12-10T15:58:16.633Z",
          "endDate": "2021-12-10T15:58:16.633Z"
        }
      ],
      "trainingPeriods": [
        {
          "beginDate": "2021-12-10T15:58:16.633Z",
          "endDate": "2021-12-10T15:58:16.633Z"
        }
      ]
    }
  ]
}
```
-  meb_api/v0/eligibility: This endpoint communicates with the DGIB services and returns an array indicating the education benefits a claimant is eligible for. A sample response would be:
```
[
  {
    "veteranIsEligible": false,
    "chapter": "Chapter30"
  },
   {
    "veteranIsEligible": true,
    "chapter": "Chapter33"
  },
]
```

- meb_api/v0/claim_status: This endpoint communicates with the DGIB services and returns the status for a given claim, A sample response would be:
```
{
  "claimantId": 11111111,
  "claimId": 2222222,
  "status": "ELIGIBLE"
}
```

- meb_api/v0/claim_letter: This endpoint communicates with the DGIB services and returns a pdf letter which will either be a Certificate of Eligibility or a Dissallowance letter.

- meb_api/v0/submit_claim: This endpoint submits the completed My Education Benefits form to DGIB services and returns a 200 OK upon succesful submission. A sample post request would be:

```
{
  "claimant": {
    "claimantId": 0,
    "suffix": "string",
    "dateOfBirth": "2021-12-10T16:42:37.822Z",
    "firstName": "string",
    "lastName": "string",
    "middleName": "string",
    "notificationMethod": "NONE",
    "contactInfo": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "zipcode": "string",
      "emailAddress": "string",
      "addressType": "DOMESTIC",
      "mobilePhoneNumber": "string",
      "homePhoneNumber": "string",
      "countryCode": "string",
      "stateCode": "string"
    },
    "preferredContact": "string"
  },
  "relinquishedBenefit": {
    "effRelinquishDate": "2021-12-10",
    "relinquishedBenefit": "Chapter30"
  },
  "additionalConsiderations": {
    "activeDutyKicker": "string",
    "academyRotcScholarship": "string",
    "reserveKicker": "string",
    "seniorRotcScholarship": "string",
    "activeDutyDodRepayLoan": "string",
    "terminalLeave": "string"
  },
  "comments": {
    "claimantComment": {
      "commentDate": "2021-12-10T16:42:37.822Z",
      "comments": "string"
    },
    "disagreeWithServicePeriod": true
  }
}
```
    
* Product Specifics:
    * [ ][**Release Plan**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/my-education-benefits/education-benefits-form/release-plan.md) with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
    * [ ] [**Product Outline**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/my-education-benefits/education-benefits-form/product-outline.md)
    - Ensure Product Outline contains **Incident Response** info, including:
        - Points of contact for your system and dependent VA back-ends
        - Links to dashboards that help identify and debug application issues
    * [ ] Is there a playbook included in your product outline, for investigating and handling likely failure modes? If so, link to your [Product Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/Product_Playbook_Security.md)

## Additional information

Please refer to [Platform Collaboration Cycle](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/index.html) or the [Privacy and Security Review Touchpoint](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Privacy-and-security-review.1782317101.html) on Platform website for more information about the Collaboration Cycle.
