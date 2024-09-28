This doc is very stale. Take everything with a large grain of salt.

# IVC Forms Strategy
## What is this document?
This document is intended as a distillation of our Performance Work Statement (PWS) so that we have guiding principles for decision making. This doc isn’t meant to contradict the PWS in any way, and if it does, the PWS is the source of truth. Much of what follows comes directly from the PWS.

This doc is not a product brief, but can be thought of as a guide that can apply to all briefs for the team’s work.

This doc is meant to be shared widely with the team, our colleagues, and our government partners/stakeholders. Feedback is not only welcome, but critical to the team’s success.


## What is the IVC Forms Team?
### Our Services
The work of the IVC Forms  team includes digital services related to three programs:
- [Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)](https://www.va.gov/health-care/family-caregiver-benefits/champva/)
- [Foreign Medical Program](https://www.va.gov/COMMUNITYCARE/programs/veterans/fmp/index.asp)
- [Camp Lejeune Family Member Program](https://www.va.gov/COMMUNITYCARE/programs/dependents/CLFMP.asp)

Our customers are those who are requesting services from these programs.
### Mission
The mission of the IVC Forms Team is to deliver exceptional digital services to our customers

The team’s mission is anchored to the mission and vision of the VA OCTO.

The VA Digital Modernization Vision defined in July 2017:

VA will deliver self-service tools on par with top private sector companies and will have the best online experience in the Federal Government. Every digital service will be customized to the individual using it. Interacting with VA digital services will feel like navigating TurboTax, not filling out a form.
### Goals
The work of the IVC Forms Team directly supports the VA OCTO and its three North Star goals:

1. Increase the usage and throughput of VA services
2. Decrease the time Veterans spend waiting for an outcome
3. Increase the quality and reliability of VA services

In addition to these north stars, the team that runs VA.gov (OCTO-DE) has a vision and mission that describes our idea of the state of the world and role in making it happen.

*Our Vision: Every Veteran is guaranteed access to self-service benefits and accurate data
* Our Mission: Continuously deliver high-quality digital experiences for the benefit of all
Veterans and their families
## The Landscape
### Business Goals
VA provides a digital submission for Veterans and their family members to apply for CHAMPVA, Camp Lejeune Family Member Program, and Foreign Medical Program benefits through VA.gov.
#### Desired user outcomes
- Veterans and family members can easily find the form they are looking for on VA.gov.
- Veterans and family members can complete and digitally submit the forms they are looking for on VA.gov.
- Veterans and family members can upload applicable documents related to their form submission to VA.gov and include the attachments in their submission.
- Each form has an appropriate digital experience that is accessible, user-friendly, uses plain language in accordance with VA.gov’s content style guide.
- Veterans and family members receive an email notification letting them know their form was successfully submitted or not.
#### Desired business outcomes
- Congress has been asking for an experience similar to that provided to Veterans on VA.gov for family members and beneficiaries. The business is looking to respond to that demand.
- Expedite the application process for these three programs by digitizing the forms.
- Reduce the number of paper forms mailed and faxed.

### Who are our customers?
Our customers are the family members and dependents of veterans who are seeking services from these programs.
- [Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)](https://www.va.gov/health-care/family-caregiver-benefits/champva/)
- [Foreign Medical Program](https://www.va.gov/COMMUNITYCARE/programs/veterans/fmp/index.asp)
- [Camp Lejeune Family Member Program](https://www.va.gov/COMMUNITYCARE/programs/dependents/CLFMP.asp)
### Who are our stakeholders?
- IVC
- VFMP (Veteran Family Member Program)
### Who are our Partners?
- IVC
- VFF
- Platform
- CAIA
- Perigian
### What are the systems?
- DAPER: Document and Process Enabled Repository
- PEGA
  - Will replace DAPER
  - https://www.pega.com/customers/veterans-affairs-platform
  - https://www.oit.va.gov/Services/TRM/ToolPage.aspx?tid=7199
  - CHAMPVA enrollment support is coming (maybe Jan 2024)
CP&E: Claims Processing & Eligibility
 - May be replaced by VES
VISTA: Veterans Health Information Systems and Technology Architecture
 - VA's system for managing health information was gold standard at one point; now dated rewrite in the works ("VistA 4")
Central Mail
- AKA CMP
- AKA Mail Portal
VA Enterprise Event Bus
- https://department-of-veterans-affairs.github.io/ves-event-bus-developer-portal/


### What are the tools?
- Forms library


### Requirements
- Forms are digitally delivered
  - How, and what happens after form submission?
- Forms are self-serve
  - User can find and complete the form independently. 
  - Question: Do they know which form they need? Do they understand the benefit of completing the form?
- Forms can be digitally signed
  - QUESTION: Does this require prior authentication? We’re assuming users are authenticated, but need details
- Do we need to support languages in addition to english?
##$ Sources to consider
- https://digital.gov/resources/delivering-digital-first-public-experience/
  - What does it mean to digitize forms and services?
  - OMB’s policy guidance (M-23-22) requires to the greatest extent practicable that agencies:
   - Make forms available to the public in a digital format
   - Make services provided to the public available in a digital channel and in a manner that maximizes self-service task or transaction completion
   - Not require a handwritten signature (“wet signature”) or other in-person identity proofing requirements as a requirement for completing a public-facing form or service without providing the public with an equivalent digital method



###  Constraints
The team will seek to learn about broader requirements, and prescribed processes and tools.

- VA Platform collaboration process
## Risks
Integrations with other systems will be a moving target
- PEGA may or may not be ready for us in 2024 when we’re ready to send data

## Current State
### What’s working well?
- One user shared that although they had to go to a print shop to print out form 10-10d, completing the form was relatively easy, quick, and straightforward
### What isn’t working well?
- Users might not have a good understanding of the CHAMPVA program and why they should submit a 10-10d
- Traceability of customers is a challenge
### What are customers saying?
* This is not sanctioned user research, just some comments from the internet. Take with a large grain of salt.

I have it for my wife and kids. With what we save on copays, we were able to bump up into the next tier of my my wife's health insurance. Administratively, it's the VA, so you already know it can be a headache, but once it's in place it's like clockwork. [link]([link](https://www.reddit.com/r/Veterans/comments/qj2k9c/comment/hinf2av/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button))

Because the application process is stupid and annoying? I've applied for my daughter FOUR times, and every time they send it all back with a form letter to fill out the application and sign it. Um. Signed, and filled out, with all information included! I'm going to try again soon, it's just darn frustrating. [link]([link](https://www.reddit.com/r/Veterans/comments/qj2k9c/comment/hir5ics/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button))

I'm a spouse of a veteran. Me and my daughter use CHAMPVA, and it is our primary insurance. I like it, I have found it beneficial, and all the medical/lab bills I've gotten after CHAMPVA covers their portion have been affordable. It can be difficult to find a provider who accepts CHAMPVA, at least it was for me when I needed to find a PCP and a gynecologist, but I've also noticed some providers do not show what insurance they accept on their website so a quick call can resolve that if their website doesn't disclose it. [link](https://www.reddit.com/r/VeteransBenefits/comments/llofbr/comment/gnrsv52/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)


Honestly, champva does do everything through snail mail. It is my wife’s primary and only health insurance and we still don’t know much about it. We just figure it out as we go. Basically we call any doctor she wants to use and verify that they take champva as a health insurance. It can be quite difficult as most have bever heard of it and instantly deny it, of they have zero idea how to bill champva so it takes months to figure it out. It is awesome though and covers what we need it for, but finding a provider in some areas can be tough. Best part is you don’t have to be in any specific region, it can be used anywhere in the US at anytime. We travel full time so she can go to a doctor or hospital anywhere as needed. I would calo the champva phone number at 1-800-733-8387 for any questions as they really are old school and not up with the times yet.[link](https://www.reddit.com/r/Veterans/comments/185vohf/comment/kb4h64g/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)
## What if…
## What’s the opportunity?
BLUF: The most valuable opportunity for the IVC Forms Team to pursue is:

* Background
What are the opportunities in the scope of our work to forward OCTO’s three north star goals?

OCTO Goal 1: Increase the usage and throughput of VA services
- CHAMPVA opportunity: Reduce friction in customer registration

OCTO Goal 1: Decrease the time Veterans spend waiting for an outcome
- CHAMPVA opportunity: Make handoffs clear so that customers know what to expect next

OCTO Goal 1: Increase the quality and reliability of VA services
- CHAMPVA opportunity: Maximize usability for everyone
- CHAMPVA opportunity: Maximize quality

## What does success look like?
The IVC Forms team’s customers 
- are supported first and foremost in the task they are trying to complete  
- receive guidance on which task they need to complete
- Understand what to expect after they’ve completed their task

### How success will be measured

## What does failure look like?
- The team becomes a factory for form digitization
- The services provided by the team result in degraded user experience
## Objectives and Key Results

## Reference
### Videos
- [Your VA Healthcare Options](https://youtu.be/7ISB2W3Ujmg?feature=shared)
- [Civilian Health and Medical Program of VA (CHAMPVA)](https://youtu.be/AHblDO_nb2U?feature=shared)
- [Foreign Medical Program](https://youtu.be/eY6zyRRhk8E?feature=shared)

### CHAMPVA
- https://www.va.gov/health-care/family-caregiver-benefits/champva/
- https://www.va.gov/family-member-benefits/
- https://www.va.gov/find-forms/about-form-10-10d/
- https://www.va.gov/find-forms/about-form-10-7959c/
- https://www.va.gov/find-forms/about-form-10-7959a/


### FMP
New pages
- [Foreign Medical Program (main page in hub)](https://www.va.gov/health-care/foreign-medical-program/)
- [How to file a Foreign Medical Program claim](https://www.va.gov/resources/how-to-file-a-va-foreign-medical-program-claim/)
- [Getting care through the Foreign Medical Program](https://www.va.gov/resources/getting-care-through-the-foreign-medical-program/)
