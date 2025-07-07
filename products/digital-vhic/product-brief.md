# Digital VHIC (Veteran Health Identification Card)

## Overview
The Veteran Health Identification Card is a photo ID card which offers Veterans convenient and secure access to their identification for VA healthcare services, commissary/exchange privileges, and verification of Veteran status for discounts. This work will create a digital card, accessible via the VA Health and Benefits (VAHB) mobile app, with future consideration for web wallet integration.

## Problem Statement
Veterans currently rely on a physical VHIC card for various services and benefits. These cards can be lost, forgotten, or damaged, leading to inconvenience, potential identity theft, and a 7-day replacement process. There is also a cost to the VA for reissuing cards. Creating a digital alternative will align with modern digital expectations and improve Veteran satisfaction and operational efficiency.

## Personas
- As a Veteran enrolled in VA health care, I need an easy way to access my VHIC so that I can check in for my appointment or access Veteran transportation.  
- As a Veteran using the commissary/exchange, I need an easy way to access my VHIC so that I can gain access to the base. 
- As a Veteran, I need an easy way to access my VHIC so I can prove my Veteran status in order to receive discounts. 
- As a VA staff member assisting with health care check-ins or transportation, I need an easy way to verify Veteran eligibility so that the check-in process is efficient.  

## Background
- Veterans Health Identification Cards are available to Veterans enrolled in VA health care. Veterans can apply for a VHIC in person at a VA medical center or online at AccessVA.
- Regardless of renewal method, cards are printed and mailed from a central off-site location regardless of renewal method.Veterans can expect to receive their card in the mail witin 7-14 days (~30 business days for Veterans living outside the US)
- The VHIC also displays the latest branch of service emblem and any special awards received.

## Measuring Success

### Key Performance Indicators (KPIs)
- Number of Veterans accessing the Digital VHIC in the VAHB app
- Reduction in physical VHIC replacement requests
- User satisfaction scores (e.g., survey results, app store ratings)
- Incidents of lost/stolen VHICs reported
- Cost savings from reduced card printing/mailing
- Time to access identification (qualitative feedback)

#### Baseline KPI Values
- Establish current monthly average of VHIC replacement requests
- Baseline app satisfaction score
- Baseline number of VHIC logins/views per user

## Assumptions
- Veterans have access to and are comfortable using the VAHB app
- The digital card will be accepted in all places the physical card is used
- Reducing physical card usage will lead to cost savings (most risky)
- Veterans will find a digital card more convenient and secure

## Solution Approach

### MVP
- Build and release a Digital VHIC feature in the VAHB app, mirroring the Veteran Status Card experience already available.
  - Allow Veterans to view their VHIC in-app.
  - Enable saving VHIC to mobile wallets (Apple/Google).
- Chose this approach due to high Veteran mobile usage and proven success with the digital Veteran Status Card.

### Adjacent work
- We may explore how to improve discoverability of the digital card on VA.gov (e.g., Find a Form, R&S article updates).

--- 

## Launch Dates
- *Launch Date*: TBD

---

## Screenshots

_Include before/after screenshots, if applicable. Delete this section otherwise._

### Before

### After

---

## Reference Material

- [Digital VHIC GitHub Issue #1403](https://github.com/department-of-veterans-affairs/digital-experience-products/issues/1403)


### Communications

<details>

- Team Name: Mobile Feature Support
- GitHub Label: digital-VHIC
- Slack channel: #mobile-feature-support-public
- Product POCs
  - Michelle Middaugh, VA Product Owner, Mobile Feature Support
  - Ryan Thurlwell, VA Lead, VA Mobile App
  - Chante Lantos-Swett, VA Product Owner, Profile
  

</details>

### Stakeholders

<details>
- Health Eligibility Center (HEC) Business Owners
- VEO
</details>
