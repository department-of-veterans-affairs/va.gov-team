
# Product Outline - Memorials Self-Service VA Form 1330 Headstones and Markers
*Iterating on a product? Have a new feature? Check out the [Initiative Brief Template.](https://bit.ly/initiative-brief-template)*

---

## Overview
*After you've explored the problem and through testing / hypothesis have identified the ideal solution, write up one sentence describing the solution you'll be creating.*

## Problem Statement
Applicants need an easier way to order a headstone or marker for a deceased Veteran, spouse, or dependent child in a national, state, or military cemetery. The PDF paper form creates complications for NSOs, the NCA, family members, and representatives. Currently, applicants must visit the cemetery in person to obtain a necessary signature for the benefit. As a result, the processing time through the Memorial Products Services/Memorial Processing Station (MPS) increases and it is difficult for both applicants and NCA agents to process the application quickly in a time of grief.

How we might solve this problem is by digitizing the paper form, creating a simple web solution to help users apply for a Headstone or Marker and get the signatures they need to complete the processing of the benefit.
 
## Desired User Outcomes

*Why would a user want to use this?*
  
+ Cemeteries and funeral homes can  sign and submit requests digitally; effectively providing better service to their clients in a difficult time. 

+ Family members of Veterans and personal representatives can have an easier, more user-friendly experience when requesting a headstone or marker by applying directly on VA.gov, thereby ensuring that they can honor their loved ones and receive their benefits in a timely manner. 

*With this problem solved, what should users be able to do/achieve that they couldn't before?*

+ Cemeteries and funeral homes no longer need to take in-person signature requests from applicants looking to order a headstone or marker for a Veteran, their spouse, or dependent child. 

+ Cemeteries and funeral homes will no longer need to mail or fax requests to MPS for processing – saving time and money. 

+ Veteran’s family members and personal representatives will be able to digitally request a headstone or marker at any time and in the comfort of their own homes, which could reduce the emotional burden to the applicant in a time of grief. 

## Undesired User Outcomes

+ Longer time to complete headstone and marker requests.

+ Inability to complete the form without additional assistance, or intervention from other parties.


## Desired Business Outcomes

*Why would your business want this to exist?*

+ MPS wants to provide the best experience possible to cemeteries and funeral homes, Veterans, family members, and personal representatives looking to use their earned benefits.

*With this problem solved, what should your business be able to do/achieve that they couldn't before?*

+ MPS will be able to process headstones and marker requests more effectively and efficiently with cases digitally populating information needed to determine eligibility for ordering a headstone or marker to place in a national, state, or military cemetery. 

+ Greater data accuracy for MPS due to the reduction of manual data entry.

+ The Headstones and Markers form will be available on VA.gov which will reduce hold and call times to MPS.

## Undesired Business Outcomes

+ Increased processing times for headstones or marker requests.

---
## Measuring Success


### Key Performance Indicators (KPIs)
*What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*

+ User feedback ratings on Headstones and Markers form

+ Processing time for form submission

+ Submitted and failure metrics

+ Sessions to complete

+ Open form metrics

+ Failed submission errors to determine the root cause

+ Surveys with user feedback on MPS side

+ Comparative processing times for Headstones and Markers from with the MPS cases created in AMAS/MBMS (from mail/fax) vs. cases created digitally on VA.gov


_What are the most important metrics that track with this product/initiative's success?_


+ User feedback ratings on Headstones and Markers form

+ Processing time for form submission

+ Submitted and failed submission metrics

+ Open form metrics

+ Failed submission errors to determine the root cause

  

* _Include links to Domo or Google Analytics Dashboards/Reports_


TBD


* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

TBD (Work with AMAS/MBMS to gather some base metrics and review current avg form metrics for VA.gov)

- Objective:
  - Key result: 
  - Key result: 


---

## Assumptions
*Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

+ Multiple signatures from different parties are needed for the majority of Headstones and Markers requests. 

+ The submission rate may be lower than expected due to multiple signature requirements that can result in drop off rates between form pieces.

## Solution Approach

*What are you going to build now, and why have you decided to start there?*

+ The digitized version of the 1330 form gathers all information inputted by the applicant and is then passed to additional signees in the order in which they should be signed and submitted.  
Accepted applications will be sent as a package to CMP (Centralized Mail Portal) for processing

*Why this solution / approach over other solutions / approaches?*

+ This is the most simplistic and scalable solution for a multi-signature form that adheres to VA.gov standards, and would be using pre-existing VA.gov components, foundations, and patterns.

+ Greater control for 508 compliance

+ Endpoint connectivity reductions, which reduces possible points of failure


*What have you explicitly decided to not include in this initial set of functionality, and why?*
+ There may be limitations with advanced images or vectors at this time, and will explore options to link out to existing web pages. 

+ We may not have the capability for a second and third signee to send an application back to the applicant for updates (in the original application) Why: Far greater level of complexity, would result in significant delay in delivery of value to the Veterans versus a phased approach that builds on itself.

*How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

+ We will explore options for editing between signees, and possibly a way to deny a request.

+ We will explore options for embedded images within the form.

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Launch Strategy
*How are Veterans and others using this product going to know it exists?*
+ How are Veterans and others using this product going to know it exists?
+ TBD (Need to cycle with NCA/BTRS on this)

*What marketing, outreach, or communications are necessary for this product to be successful?*
+ TBD (Need to cycle with NCA/BTRS on this)

*What marketing, outreach, or communications are necessary for this product to be successful?*
+ [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: Memorials Self Service
- GitHub Label: Headstones and Markers, Memorials Self Service
- Slack channel: 
- Product POCs: Catherine Hughes (Release Train Engineer) , Carly Yamrus (UX Designer), Brian Cambell (UX Designer)
- Stakeholders:  BTRS/NCA

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: Catherine Hughes
 - Engineering: Kenneth Santiago
 - Research/Design: Carly Yamrus, Brian Campbell
 
</details>


#### Stakeholders

<details>

  BTRS, NCA
  
_What offices/departments are critical to make this initiative successful?_
 
</details>
