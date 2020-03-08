# Debt Letters MVP Product Outline
Last Updated February 26, 2020

## Keywords/Labels
- GitHub Label: Debt Letters MVP 
- Slack channel: #vsa-bam-2
- Keywords
     - Debt Letters 
     - Debt
     - DMC

## POCs
|Name|Role|
|----|----|
|Matthew Self| DSVA Lead| 
|Leah Keeler | Product Manager|
|Cameron Testerman | BE Engineer|
|Amen Ra | FE Engineer|
|Mahariel Rosario | FE Engineer|
|Riley Orr | Designer|
|Becca Walsh | Designer|
|Melissa Rebstock | Veterans Experience Office (VEO) Executive Partner|
|Jason Hoge | Debt Mgmt Center (DMC) Contact|

---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Hypothesis](#hypothesis)
- [Requirements](#requirements)
- [Constraints](#constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Decisions](#decisions)
- [The Plan](#the-plan)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Service Level Objective](#service-level-objective)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Design](#design)
- [Screenshots](#screenshots)

# Appendix
- [DMC Proposed Epic](#dmc-proposal)
- [Legislation](#legislation)

---
 
# Executive Summary

There’s an overarching project called the Veteran Debt Processing Enhancement that was put into place due to several overarching legislative requirements specifically related to Veteran debt.  VA is working on a comprehensive solution across all administrations that encompasses all requirements, to include business process re-engineering and modernization of systems.
As an initial MVP, the DMC is looking to demonstrate forward progress on this initiative by implementing a solution that allows Veterans to more quickly and easily understand if and why they may have debts with the VA, and how to work with the VA to resolve them.

## User Problem Statement
### OPTIONS
- How might we make communications regarding debt accurate, timely, and clear, while treating Veterans with dignity and compassion?
- Veterans who have incurred a debt with the VA need a way to get accurate, timely, and clear information about the reason and status of that debt, along with their options for resolving it, while being treated with dignity and compassion.
- I am a Veteran who has incurred a debt with the VA for one reason or another, and I need to understand why and what my options for resolving it are. Currently, in addition to the information sometimes being inaccurate or out of date, the communications I receive from the VA about debt leave me feeling frustrated and demeaned.
- Those of our Veterans who have incurred a debt with the VA struggle to understand the reason for the debt and what their options are to resolve it because the communications about debt the VA sends are difficult to understand and slow to arrive. Our solution should focus on making all content and communication about debt accurate, timely, clear, and compassionate, so that Veterans can take appropriate action while maintaining their dignity.


## Solution Goals

- TBD
- 

### User Goals
- To have a single place through which I can manage any debts I have with the VA
- To be able to understand all of the communication about any debts I have with the VA
- To be able to understand and access all of the available paths to resolve any debts I have incurred
- To understand ahead of time what benefits and/or set of circumstances might lead to me incurring a debt with the VA
- To know as quickly as possible about changes to my debt status with the VA, to include newly filed debts, and changes to existing debts regardless of the cause of the change
- For the overall experience of handling a debt with the VA be as painless as possible instead of leaving me feeling frustrated and demeaned
- To receive consistently accurate information about the status of my account, regardless of the way in which that communication gets to me

## Hypotheses

- TBD

## Requirements 
### High-Level

- Digital "landing page" explaining the debt management process at the VA
- Veterans can view information about debts they owe the VA in a single place
- Veterans are automatically notified when new communications about debts are available to them, and given a way to navigate directly to the new communication on VA.gov
- Outgoing notifications about debt are configurable
- Veterans can understand the communications they receive from the VA about debts; they are plain-language, adhere to modern design practices, and engage with Veterans in an empathetic way
- Information delivered to Veterans about the status and nature of their debts is accurate and up-to-date

## Constraints

There are two main contraints known at this time, one coming from the business and one from the technical landscape within the VA.

Business: This problem affects Veterans as well as eligible dependents, however due to external pressures from Congress, there is a desire to limit the scope of this problem to indebted Veterans to expedite the process of launching something meaningful to Veterans. It's currently unclear how much wiggle room there is here; it's possible we might be able to address the concerns of non-Veterans without adding complexity to the problem or lengthening the delivery timeline

Technical: There are many different types communications about debt (typically referred to as "debt letters) that are sent out to Veterans. At this time, many of these have yet to be migrated into a central respository and organized in a reliable fashion. Because of this, the scope of this problem is limited to addressing only those letters types which ARE organized and accessible in a central respository (VBMS eFolder)


## Discovery Takeaways
- Initial Discovery notes can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/debt-letters-mvp/discovery-research)

## Decisions


## The Plan

## Roll-Out Approach

## KPIs

[KPI Process Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/d5625a8ebf6a4fc0ff21ce0830907de993593d21/teams/vsp/teams/insights-analytics/kpi-tracking/kpi-process.md)

[KPI Worksheet Template](
https://docs.google.com/spreadsheets/d/1LGN2TKNwmobdl4yhxjyd_bua22KUkW3K56RU7yHMNrk/edit#gid=1554481611)

[Sample KPI Worksheet (Disability and Appeals)](https://docs.google.com/spreadsheets/d/1kd9BINUvJYvSa5vO2a4gCjs2x8-6ouhVYXA_VFj4eDY/edit#gid=1554481611)

---

# Implementation Info

## Status

**February 2020**

On Wednesday, February 27, the Debt Letters MVP was officially assigned to BAM2 to be slotted in as our next project. We will be moving forward with the project. Our first major milestone will be creating and delivering a first draft roadmap to all stakeholders; the target window for delivering this roadmap is early March 2020.

## Solution Narrative

- **Sprint XX: (02/26/2020 - 03/10/2020)**:
  - Project officially passed intake and was assigned to BAM2 to begin work immediately, in parallel with existing projects
  - A recurring meeting series has been established with the primary stakeholder group (Thursdays at 1200PM, EST) to discuss project status and to help coordinate with various secondary stakeholders both within the VA (numerous lines of business that deal with debt) and without (Congress, Pay.gov, etc)

## How to Access and Test

**Staging**

## Error Handling

## Service Level Objective

TBD; sample below from MyVA team

| Service&#160;Level&#160;Indicator | Service Level Objective |
| :-------------------------------- | ----------------------- |
| Availability | Should not exceed 5% 5xx error rates (as a percent of all requests) for more than 5 consecutive minutes<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/c6827877dda83b878bf9a71f80e4703f7977beee/ansible/deployment/config/prometheus/rules/application.rules#L6) |
| Latency | Percent of requests served in under 2 seconds should not drop to or below 95% for more than 5 consecutive minutes<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/c6827877dda83b878bf9a71f80e4703f7977beee/ansible/deployment/config/prometheus/rules/application.rules#L24) |
| Incident Response | Initial acknowledgement of the issue within 15 minutes of a triggered alert<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/2913da3512a65a8cb988ad189235794ed1067299/terraform/modules/pagerduty_team/main.tf#L21) |

## API Calls and Dependent Systems

VBMS eFolder
- We've been told that there are five (5) unique debt letter types that are currently available in a Veterans eFolder (where applicable)
- That means we will need to integrate with the eFolder to be able to retrieve each of those different letter types for a given Veteran
- We are reliant on letters in the eFolder being consistently and accurately identifiable; in other words, there needs to be a defined set of characteristics (a taxonomy, if you must) for each of the letter types we care about, and that definition needs to be adhered to in order for the solution to succeed
- The burder of defining and maintaing the letter taxonomy will be managed, both up-front and on an ongoing basis by our partners in...(DMC? VBMS? Other?)

## On Call Support

#vsp-platform-support and #vsa-bam-2 slack channels

## Design 

- The Debt Letters MVP lo-fi mock-ups can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/debt-letters-mvp/discovery-research)
- The Debt Letters MVP product designs can be found [here](https://)

### Screenshots

#### Before

![DMC Veteran-facing homepage](https://)

![DMC debt payment hub](https://)

#### After 

VA.gov's MVP debt letters page
![DMC debt payment hub](https://)

# Appendix
https://www.va.gov/debtman/
## DMC Proposed Epic
This document was provided to DEPO (Chris Johnston, Andrea Schneider, Steve Kovacs, Matthew Self) from our executive partners within the Veterans Experience Office (VEO). This was the document that ultimately formed the basis of the intake work request (https://github.com/department-of-veterans-affairs/digitalservice/issues/1072) that was proposed during DEPO product intake on February 24, 2020.

The original document can be found here: https://github.com/department-of-veterans-affairs/va.gov-team/raw/master/products/debt-letters-mvp/discovery/DMC%20Proposed%20EPIC%20(%22Light%22%20version).docx. Text below.

### Veteran Debt Processing Enhancements LIGHT 
#### Epic Summary
This is a potential FY20 quick win solution to enhance veteran experience by providing veterans a limited view of Veteran Debt Letters and leveraging an existing Veteran-facing platform, with  delectronic notification of viewing availability.

This solution addresses only one of the requirements per legislation S.2248 Veterans Benefits and Transition Act of 2018: “delivery of debt notices by standard mail and electronic means.” Currently, debt letter delivery is limited to US Mail notification.

#### Contacts
Requested by: Debt Management Center (DMC)
Point of Contact: Jason Hoge

#### Epic Value Statement:
We will provide online access of four (4) debt letters to increase visibility.

**For:** Veterans

**Who:** Veterans with profiles in VA Profile, a self-service platform maintained by VEO and formerly known as VETS360, who will benefit from automated emails notifying them that their debt letters are available to view online.

**The:** This Quick Win capability will provide:
1. Veteran debt letters displayed via VA.GOV or another veteran-facing system where veterans create a profile. The display will be a digital image like a .jpg, .png, etc.

2. A landing page on an existing Veteran-facing platform to allow viewing of VA debt letters.  The expectation is that four (4) Debt Letter types will be available, as not all debt letters are in-scope.  (Debt  letters, their origin, totality, and the system in which they reside will be vetted and confirmed by OIT, DMC, VBA and VEO).

3. VMBS currently stores DMC debt letters and is a potential source for obtaining the 4 Debt Letter types. 

4. An automated electronic notification to Veterans that their Debt Letters are available for viewing digitally. There is potential to leverage the VeteransProfile platform for Veteran contact information, and the ePharmancy notification process to leverage existing trigger and notification technology. 

5. Electronic notification should include a link to the landing page using VA prescribed security and access parameters. 

6. A technical solution that communicates with VBMS, the datasource of DMC debt letters, that is capable of pulling DMC debt letters from VBMS.

**That:** The compelling key benefit is that this functionailty dramatically enhances the Veteran experience and complies with a portion of the Veterans and Benefit Transition Act of 2018: delivery of debt notices by standard mail and electronic means. This does not address the rest of the sections of the said law.

**Unlike:** Current means of antiquated debt letter delivery using ordinary mail alone no longer meets the needs of veterans because of its inability to provide timely and accurate current status and amounts related to veteran debt. There is no online access for veterans to view their Debt Letters.

**Our Process/Solution Will:**
- Provide a limited view of VA debt letters to Veterans with automated, electronic notification and ability to view their Debt Letters online.
- Enhance veteran experience related to Debt Letters
- Bring VA debt notification online and move VA forward in our pursit to resolve misalignment with current industry standards, in compliance with a portion of the Veterans and Benefit Transition Act of 2018. 

#### In Scope:
- Online viewing of a subset of debt notification letters via an exsisting Veteran-facing platform.
- Automated electronic notification of availablilty and viewing access of debt notification letters.
- Online interface for veterans to view electronic debt records as a digital image via VA.GOV. VEO has the capability to whitelist MyDocuments. VA Profile is currently used for email notifications.
- Based on a predetermined system trigger, automated email notifications to veterans informing them that their debt letters are available for viewing digitally on VA.GOV or similar system.
- Development of a technical solution/interface that communicates with VBMS, the datasource for the debt letters, that is capable of pulling DMC debt letters from VBMS.

#### Out of Scope:
- This solution does not address the following legislations: (1) S.2155 Economic Growth, Regulatory Relief, and Consumer Protection Act, Sec.302 and (2) HR.5895, MILCON/VA appropriations Act of 2018, page 262.
- This solution only partially addresses S.2248 Veterans Benefits and Transition Act of 2018 and does not address its sections requiring that (1) SECVA collaborate with veteran service organizations to develop standard letter format in plain language and shall include a notice of the debt and a clear explanation; (2) Notice to Congress: initially 90 days from act, then every 30 days; develop a standard letter, study and report; (3) Treasury Study coordination
- Non-Veteran Beneficiaries.
- Means for Veterans to submit a Financial Status Report, VA Form 5655, and request a waiver, negotiate, dispute, and/or payment plan through VA.gov to the centralized mail portal to DMC.
- Debt letters that are not part of the initial limited scope capability.
- Display of DMC-issued pen letters (aka Ad Hoc letters) are out of scope.
- User training for employees, stakeholders and veterans.
- Collaboration with Veteran Service Operations.
- Analysis of the requirements and resources that would be necessary to develop the capability for creating a single consolidated snapshot of a Veteran’s debt.

#### Non-Functional Requirements:
- Seamless platform integration.
- Our Veteran-facing platform shouldwhitelist the function for debt notification letters and should not display documents from any other source in order to prevent over-exposure.
- The solution needs to have the capability to send out timely email notifications, based on a technical trigger, that inform veterans who have profiles in VeteransProfile that their debt letter is available for viewing digitally on VA.GOV or another veteran-facing system.
- The system solution must be reliable—email notifications must always be sent out to veterans when the trigger for notification occurs.
- The digital image of the debt letters must be available for secure viewing as a digital image by veterans when they log-onto their profiles on VA.gov or selected other veteran-facing system.
- The solution must meet capacity of in-scope debt letters.
- The solution must interface with VBMS.

#### References:
- S.2248 Veterans Benefits and Transition Act of 2018, Law 12/31/18
- S.2155 Economic Growth, Regulatory Relief, and Consumer Protection Act, Sec.302
- HR.5895, MILCON/VA appropriations Act of 2018, page 262

## Legislation
There are two (2) relevant pieces of legislation driving this work: the Veterans Fair Debt Notice Act of 2017, and the Veterans Benefits and Transition Act of 2018. The first was the originating piece of legislation essentially directing the VA to do three things in a kind-of non-specific way: make their debt communications more clear, make them available electronically, and report in to Congress regularly. The second bill (which doesn't appear to have actually passed yet, although it is what the VA is citing as the driver for this work) gets more specific about how the VA will actually meet the objectives of clarity and digital called out in the first bill. Summaries, full text, and links to the official record for each are below.
### Veterans Fair Debt Notice Act of 2017 (H.R.3705)
https://www.congress.gov/bill/115th-congress/house-bill/3705

#### Summary
This bill directs the Department of Veterans Affairs (VA) to collaborate with veterans service organizations to write a standard letter to be provided to individuals who owe debts to the VA. Such letter shall be written in plain language and shall include a notice of the debt and a clear explanation of: (1) why the individual owes such money, and (2) available options.

The VA shall develop a method by which individuals may elect to receive debt notification letters by electronic means and shall ensure that the letter is delivered: (1) by both standard mail and electronic means to individuals who have made such election, and (2) only by standard mail to individuals who have not made such election.

The VA shall: (1) notify Congress regarding the completion of such letter, and (2) study and report to Congress on the process by which it notifies veterans of debt collection efforts.
#### Full Text
H. R. 3705
IN THE SENATE OF THE UNITED STATES
November 9, 2017
Received; read twice and referred to the Committee on Veterans' Affairs

AN ACT
To direct the Secretary of Veterans Affairs to require the use of certified mail and plain language in certain debt collection activities.

Be it enacted by the Senate and House of Representatives of the United States of America in Congress assembled,
SECTION 1. SHORT TITLE.

This Act may be cited as the “Veterans Fair Debt Notice Act of 2017”.

SEC. 2. DEPARTMENT OF VETERANS AFFAIRS NOTICE RELATING TO DEBT COLLECTION ACTIVITIES.

(a) Debt Notification Letters.—The Secretary of Veterans Affairs shall collaborate with veterans service organizations to write a standard letter to be provided to individuals who the Secretary determines owe debts to the Department of Veterans Affairs. Such letter shall be written in plain language and shall include a notice of the debt and a clear explanation of—

(1) why the individual owes money to the Department of Veterans Affairs; and

(2) the options available to the individual.

(b) Delivery Of Letters.—The Secretary shall develop a method by which individuals may elect to receive debt notification letters by electronic means and shall ensure, to the extent practicable, that the letter developed under subsection (a) is delivered to intended recipients who have made such an election by both standard mail and by electronic means and to intended recipients who have not made such an election only by standard mail.

(c) Notice To Congress.—

(1) NOTICE OF COMPLETION.—Upon completion of the letter required under subsection (a), the Secretary shall submit to Congress notice of the completion of the letter.

(2) PROGRESS REPORTS.—If the Secretary has not submitted the notice required by paragraph (1) by the date that is 90 days after the date of the enactment of this Act, the Secretary shall—

(A) submit to Congress a report describing the progress of the Secretary toward implementing subsection (a) and an explanation for why the letter has not been completed; and

(B) every 30 days thereafter until the submittal of the notice required by paragraph (1), submit to Congress an update to the report under subparagraph (A) that includes an additional explanation for the failure to complete the letter.

(d) Study; Report.—

(1) STUDY.—The Secretary of Veterans Affairs shall conduct a study on the process by which the Department of Veterans Affairs notifies veterans of debt collection efforts. Such study shall include—

(A) an analysis of the scope of the problem of veterans not receiving debt collection notices;

(B) a description of any non-legislative actions the Secretary could take to reduce the number of incorrect or unknown addresses of veterans in the databases of the Department and a timeline for adopting such actions; and

(C) an estimate of the costs associated with sending debt collection notices by certified mail.

(2) REPORT.—Not later than 12 months after the date of the enactment of this Act, the Secretary shall submit to Congress a report on the study conducted under paragraph (1).

Passed the House of Representatives November 8, 2017.

### Veterans Benefits and Transition Act of 2018 (S.2248)
https://www.congress.gov/bill/115th-congress/senate-bill/2884

#### Summary
This bill directs the Department of Veterans Affairs (VA) to collaborate with veterans service organizations to write a standard letter to be provided to individuals who owe debts to the VA. Such letter shall be written in plain language and shall include a notice of the debt and a clear explanation of: (1) why the individual owes such money, and (2) available options.

The VA shall develop a method by which individuals may elect to receive debt notification letters by electronic means and shall ensure that the letter is delivered: (1) by both standard mail and electronic means to individuals who have made such election, and (2) only by standard mail to individuals who have not made such election.
#### Full Text
To require the Secretary of Veterans Affairs to develop a standard letter format to be provided to individuals who are indebted to the United States by virtue of their participation in benefits programs administered by the Secretary, to provide notice of debt by electronic means to such individuals when so elected, and for other purposes.

Be it enacted by the Senate and House of Representatives of the United States of America in Congress assembled,
SECTION 1. SHORT TITLE.

This Act may be cited as the “Veterans Fair Debt Notice Act of 2018”.

SEC. 2. DEPARTMENT OF VETERANS AFFAIRS NOTICE RELATING TO DEBT COLLECTION ACTIVITIES.

(a) Debt Notification Letter Formats.—The Secretary of Veterans Affairs shall collaborate with veterans service organizations to develop a standard format for any letter provided to individuals who the Secretary determines are indebted to the United States by virtue of such person's participation in a benefits program administered by the Secretary. Such letter shall be written in plain language and shall include a notice of the debt and a clear explanation of—

(1) why the individual is indebted to the United States by virtue of such person's participation in a benefits program administered by the Secretary; and

(2) the options available to the individual.

(b) Delivery Of Debt Notices By Standard Mail And Electronic Means.—The Secretary shall develop a method by which individuals may elect to receive notice of debt by electronic means and shall ensure, to the extent practicable, that the letter developed under subsection (a) is delivered—

(1) by both standard mail and by electronic means to intended recipients who have made such an election; and

(2) only by standard mail to intended recipients who have not made such an election.

(c) Notice To Congress.—

(1) NOTICES OF COMPLETION.—Upon completion of the development of the standard letter format required under subsection (a) and upon completion of development of the method under subsection (b), the Secretary shall submit to Congress notice of the completion of the development.

(2) PROGRESS REPORTS.—If the Secretary has not submitted each notice required by paragraph (1) by the date that is 90 days after the date of the enactment of this Act, the Secretary shall—

(A) submit to Congress a report describing the progress of the Secretary toward implementing subsections (a) and (b) and an explanation for why the respective development has not been completed; and

(B) every 30 days thereafter until all of the notices required by paragraph (1) have been submitted, submit to Congress an update to the report under subparagraph (A) that includes an additional explanation for the failure to complete the respective development.

(d) Study And Report.—

(1) STUDY.—The Secretary of Veterans Affairs, in coordination with the Secretary of the Treasury, shall conduct a study on the process by which individuals who are indebted to the United States by virtue of their participation in a benefits program administered by the Secretary of Veterans Affairs are notified of debt collection efforts relating to such indebtedness.

(2) ELEMENTS.—The study required by paragraph (1) shall include the following:

(A) An analysis of the scope of the problem of individuals who are indebted to the United States by virtue of their participation in a benefits program administered by the Secretary of Veterans Affairs not receiving debt collection notices relating to such indebtedness.

(B) Identification of administrative actions the Secretary of Veterans Affairs and the Secretary of the Treasury can carry out to reduce the number of incorrect or unknown addresses of such individuals in the databases of the Department Veterans Affairs and the Department of the Treasury and a timeline for carrying out such actions.

(C) An estimate of the costs associated with sending debt collection notices to such individuals by certified mail.

(D) An analysis of whether, or to what extent, sending debt collection notices to such individuals by certified mail would address the problem analyzed under subparagraph (A).

(E) An analysis of the requirements and resources that would be necessary to develop the capability for creating a single consolidated snapshot of a veteran's debt.

(F) An analysis of the extent to which individuals indebted to the United States by virtue of their participation in a benefits program administered by the Secretary of Veterans Affairs are so indebted as a result of an error, misrepresentation, or fraud by such individuals.

(3) REPORT.—Not later than one year after the date of the enactment of this Act, the Secretary of Veterans Affairs, in coordination with the Secretary of the Treasury, shall submit to Congress a report on the findings of the Secretaries with respect to the study conducted under paragraph (1).
