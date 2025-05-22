
# Product Outline - Accredited Representative Portal - Claim Submission and Self-Service Auth

---

## Overview
Representatives need a way to submit benefits claims forms on the Accredited Representative Portal. VA has asked us to find the quickest path to getting the most forms possible supported on VA.gov. Existing digitized forms are Veteran-centric and use the wizard pattern. Our technical exploration found that reusing Veteran-facing forms is suboptimal design (reps are power users and research shows that they don't want a card/wizard pattern), and the eng lift would create a lot of messy conditional logic and be vulnerable to continued breaking.

Simple Forms is a PDF-only form submission tool that can easily be extended to cover many forms and meets accessibility standards, so our POs directed us to use Simple Forms to stand up the first version of claims submission in ARP. We will iterate from there, and although all claims will initially go through the mail portal, we hope to establish claims directly using structured data in future iterations, and are exploring ways to do that. 

We forked Simple Forms code as a starting point, rather than re-using it. Lifting and shifting the code saved us a lot of time, but in the early design phases, it became clear that forking the code rather than reusing it in-place was the better option:

- We needed to make it an Accredited Representative Portal (ARP) app which required functionality changes
- We need to do additional checks on the backend for an established Power of Attorney (POA)
- We will eventually need to add multi-form upload for documents that require supporting evidence
- Because reps are power users, we wanted to simplify the process by making the digital form one page

Our plan is to start by piloting form upload for the 686c form, then expand to 526, then roll out a number of forms.

When releasing claims submission, we'll also introduce the ability for accredited representatives to self-service sign up for ARP, rather than our team having to manually grant them access. 

## Problem Statement
Representatives need a reliable tool to upload and submit documents for their claimants. Stakeholder Enterprise Portal (SEP) is able to process claims well. However, forms were often outdated, which could delay processing even more. This is [the research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2024-10-VSO-VAbenefits-interviews/research-findings.md#detractors-pain-points) that references the VSOs pain points. 


## Desired User Outcomes

When fully rolled out, this will increase the number of digital claims submissions through VA.gov. By increasing the number of claims, this would allow more Veterans to gain access to VA health care and benefits faster. 

---
### Key Performance Indicators (KPIs)
- Number of forms submitted
- Number of representatives using platform
- Uptime of platform
---

## Assumptions
- Reps would be able to access it in the ARP, which is also where they can manage POA requests
- Some reps may continue to use third-party tools but the quick access to VBMS after accepting POA requests might entice them

## Solution Approach
A digital form submission tool
- Ability to upload a standalone 686c PDF and routed through central mail
- Established Intent-to-File with structured data directly to VBMS
- Support 526 form PDF upload, and routed through central mail
- Ability to upload supporting documents 
- Ability to track past submissions made through ARP

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - Jun 16, 2025
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

Team Name: Accredited Representative Facing
GitHub Label: accredited-rep-facing
Slack channel: #benefits-representative-facing

</details>

#### Team Members

<details>
 
DEPO Lead: Jennifer Bertsch
PM: Candi Lemoine
Technical Architect: Alex Prokop
Engineering: Oren Mittman
Research/Design: Laura Paradis and Kate Allbee
 
</details>


#### Stakeholders

<details>
Kevin Schneider
 
</details>

