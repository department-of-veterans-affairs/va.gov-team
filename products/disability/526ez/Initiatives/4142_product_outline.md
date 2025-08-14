# 526ez 4142 Paper Sync Initiative

## Overview

We are updating the 4142 form embedded in the 526 disability application to the latest version to be compliant.

## Problem Statement
Veterans use the VA Form 21-4142 to request and authorize that VA retrieve their private medical records. This form is nested within the disability application (Form 526) on Va.gov.as an ancillary form.
The current version of the 4142, is outdated. It matches the March 2018 release and a new version was updated in August 2024.

Bringing the 4142 up to parity ensures claimants are equipped with the most up-to-date form content and claim submissions and aligns with the benefits portfolio prioritization framework and OKRs. We want to ensure all forms are up to date within 12 months of changes. Submitting an outdated form risks having that form rejected by either VA or the private medical record providers.



 
## Desired User Outcomes
* The latest 21-4142 form is updated within the 526 disability compensation form
* 100% of Veterans with new and in-progress form 4142s are on the new version of the form.
* Veterans who already started a form on the old version will have to accept the new terms and conditions.

## Undesired User Outcomes
Delays in Processing

* If the form is incomplete or contains errors, it may take longer for the VA to process a claim.

Denial of claims

* If the updated information doesn't meet the VA's criteria, the claim could be denied, and Veterans may receive a letter asking them to re-submit their claims
  
## Desired Business Outcomes
Compliance and accuracy

* Updated 4142 form within 526 application to meet current regulations and standards can reduce legal risks

Reduced manual intervention

* VA employees will perform fewer manual actions on claims submitted via VA.gov, such as adding missing data.

## Undesired Business Outcomes
Silent submission failure

* A Veteran believes an online 4142 form was successfully sent to VA, but it silently disappeared instead.

Full stoppage preventing the Veteran for applying online

* A Veteran cannot apply for a normally available benefit online because of an obviously broken and erroring feature (4142 authorization of consent to disclose info)


---
## Measuring Success 


### Key Performance Indicators (KPIs)
* 100% Veterans can opt-in to submit an updated version of 4142 form



#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
  - Key result: 


---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*
* Decision Reviews Team will produce all the backend features that we will be integrating to support the new 4142 form
* Disability Benefits will handle the integration and handling of in-progress forms with the old version.   




## Solution Approach
* What are you going to build now, and why have you decided to start there?

The biggest change that is being made is the handling of the in-progress forms (IPF). Veterans with IPF will need to re-authorize their 4142 since the terms and conditions have changed. We do a direct redirect of in-progress 526 users who had previously authorized the 4142, back to the 4142 authorization page upon resuming progress on their claim (return_url change). Additionally, we display an in-page alert on the authorization page for returning users, instructing them about the need to review updated terms and conditions and re-authorize

* Why this solution/approach over other solutions/approaches? 

We chose this approach because it allows us to provide more context about why re-authorization is needed and set the expectation for re-direct upon resume. It aligns with the approach the decision review team has taken.
The approach has been validated to work by the Decision Reviews team. 
Please see ticket https://github.com/department-of-veterans-affairs/va.gov-team/issues/113171 for additional details. 


* Does your solution include the VA Health and Benefits mobile application? Explain why or why not.

No, this doesn’t impact the mobile application. 

--- 

## Launch Strategy
* How are Veterans and others using this product going to know it exists? 

Users who have already started filling out the form will receive an alert message to reauthorize and accept the new terms and conditions for Form 4142. 

* What marketing, outreach, or communications are necessary for this product to be successful?

N/A

* Link to Release Plan
    * Work in progress - https://github.com/department-of-veterans-affairs/va.gov-team/issues/114568 



## Launch Dates
- *Target Launch Date*
  - End of August
- *Actual Launch Date* 
  - tbd

---

---
## Resources 
[Old 4142 form]

[New 4142 form](https://www.vba.va.gov/pubs/forms/VBA-21-4142-ARE.pdf)

## Screenshots
Current Work in Progress documented in this [Figma](https://www.figma.com/design/gvWPL7Z8llEy0tg6bEZbms/Initiative-%E2%80%A2-4142-Paper-Sync?node-id=1-401)

### Before
See 

### After
See  

---

#### Communications

<details>

- Team Name: Disability Benefits Team 
- GitHub Label: TBD
- Slack channel: #benefits-disability 
- Product POCs: Emily Theis
- Stakeholders: Disability Benefits Crew

</details>

#### Team Members

<details>

Release: 

- Prod Manager: Andrew Belov
- Delivery Lead: Jane Kim
- Des/Res Lead: Irene Vailikit
- Eng: Kyle Soskin

</details>
 
#### Stakeholders

<details>
 
Disability Benefits Crew: 
- Product Owner: Emily Theis
- Eng Lead: Sam Wiley
- Design Lead: Shannon Ford 
- OBA Lead: David Reis
 
</details>
