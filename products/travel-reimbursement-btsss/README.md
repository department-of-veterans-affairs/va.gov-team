# Product Outline Template
---

## Overview
The Travel Reimbursement Widget will enable Veterans to log into VAgov and then deep-link into their travel reimbursement claim dashboard within BTSSS ("BT3S" or the Beneficiary Travel Self-Service System).

## Problem Statement
Submitting travel reimbursement claims is a very common Veteran task. Accessing the BTSSS system from VAgov is a clear pain point for Veterans, and research subjects mentioned that pain in top task research undergone around homepage iteration project in 2022. The pain comes from two areas: 1) having to log into BTSSS despite being logged into VAgov, and 2) the UX of BTSSS itself. One of those subjects spontaenously told us that he stopped filing travel reimbursement claims due to the UX.

While OCTO-DE cannot improve the experience on BTSSS once Veterans arrive there, as of late 2022 an OAuth integration was completed by BTSSS's owners such that Veterans authenticated on VAgov will not have to log in again on BTSSS.

*Follow your problem description up with a "How might we... _______" statement re-framing that challenge as an opportunity. Don't hint too much at what the solution might be, you should have enough of a focal point here to guide your ideas, but plenty of freedom to think laterally and innovatively as you experiment and prototype later.*
 
## Desired User Outcomes

As a Veteran, caregiver, or beneficiary eligible for reimbursement of mileage and other travel expenses to and from approved health care appointments, I want access to the travel reimbursement tool (BTSSS) from the [Travel pay reimbursement page](https://www.va.gov/health-care/get-reimbursed-for-travel-pay/) on VAgov to be easier and faster so that I will be more likely to receive the travel reimbursement benefit to which I'm entitled.

## Undesired User Outcomes

Continued inefficiencies when moving between the two systems.

## Desired Business Outcomes

- Count of claims being filed successfully through BTSSS increased or same level. (We don't currently have access to data to confirm this outcome.)

## Undesired Business Outcomes

- Reduced claims
- Increased complaints through the contact center

---
## Measuring Success

We don't currently have access to data to confirm this outcome. Google Analytics loses the user as soon as they click the link to file a claim.


## Assumptions
Initial testing of the OAuth integration indicates that the deep-link strategy should work for Veterans logged into VAgov.

## Solution Approach

A react widget will be placed on the [Travel pay reimbursement page](https://www.va.gov/health-care/get-reimbursed-for-travel-pay/) on VAgov in place of the link to BTSSS that is there today. The react widget will detect whether the user is logged in. 
- Users who are already logged in will see a version of the widget with a CTA Button that links directly to the BTSSS dashboard
- Users who are not logged in will see a CTA Button inviting them to sign in. A click will open the sign-in modal overlay over the page that they're on. Upon successful authetication, the user will be taken to their BTSSS dashboard

### Risks

It is our understanding from a demo of the BTSSS system that it sometimes requires users to view their profile (on BTSSS) and accept terms and conditions before viewing their dashboard. We will have to test how our deep-link approach adapts to those situations.

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - March 2023
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

[Epic for implementation](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9157)

### Current Status

### Key Decisions

---
   
## Screenshots

[Proposed flow in Mural](https://app.mural.co/t/vagov6717/m/vagov6717/1675275822734/78f98f031eff6be4d0e1df871d6352524328724d?wid=0-1675977665373)
- Placeholder copy will be replaced before launch

### Before

<img width="525" alt="image" src="https://user-images.githubusercontent.com/4054752/219800378-5015f263-aaeb-4cfd-b47c-4fa795ca7715.png">

### After

User is not logged in:
<img width="738" alt="image" src="https://user-images.githubusercontent.com/4054752/219800234-95084ed9-459e-42af-9b60-d525f8211408.png">

User is logged in:
<img width="739" alt="image" src="https://user-images.githubusercontent.com/4054752/219800306-080936f8-83b5-4e3c-b349-99ffb60d96c3.png">


---

#### Communications

<details>

- Team Name: Sitewide Public Websites
- GitHub Label: Public Websites
- Slack channel: #sitewide-public-websites
- Product POCs: 
- Stakeholders: Danielle Thierry, Sitewide Content

</details>

#### Team Members

<details>
 
 - DEPO Lead: Dave Conlon
 - PM: Wesley Rowe
 - Engineering: Josh Mills
 - Research/Design: Jordan Wood
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>

