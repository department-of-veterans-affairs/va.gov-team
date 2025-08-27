# Benefits Management Tools II Transition Hub

**Updated: 8.31.2025**

> **Note:** These Transition Docs are "point in time" documents, and may not reflect current progress, deployments, or upcoming efforts.

---

## Team Transition Document  
 
The purpose of this transition document is to outline the current state of Benefits Management Tools II product development.  
It serves as a "front door" to documentation and resources collected during the course of product design and development.  
Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.

---

## Table of Contents
- [Product context, portfolio, and artifacts](#product-context-portfolio-and-artifacts)
- [Analytics Dashboards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/Benefits%20Management%20Tools%20II%20Transition%20Hub%208.31.2025.md#analytics-dashboards)
- [Content Center and Medallia Data Analysis - Document Upload Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/claim-appeal-status/Benefits%20Management%20Tools%20II%20Transition%20Hub%208.31.2025.md#manual-process-for-analyzing-contact-centermedallia-data)
- [Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/Benefits%20Management%20Tools%20II%20Transition%20Hub%208.31.2025.md#roadmap)
- [Features and initiatives we worked on](#features-and-initiatives-we-worked-on)  
- [Enablement Team Contacts](#enablement-team-contacts)
- [Stakeholders and Supported Initiatives](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/Benefits%20Management%20Tools%20II%20Transition%20Hub%208.31.2025.md#stakeholders-and-supported-initiatives)
- [BMT2 Initiatives - File links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/Benefits%20Management%20Tools%20II%20Transition%20Hub%208.31.2025.md#bmt2-initiatives--file-links)
- [Additional Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/Benefits%20Management%20Tools%20II%20Transition%20Hub%208.31.2025.md#-additional-documentation)

---

## Product Context, Portfolio, and Artifacts

### Portfolio Context

#### Claim Status Tool  
The Claim Status Tool allows Veterans to check the status of their VA claims, decision reviews, or appeals online.  
Users can view details such as evidence submitted, additional evidence requested by VA, claim types, and specific issues claimed.  
Additionally, Veterans can upload supporting documents for initial claims and download decision letters for certain types of claims, decision reviews, and appeals.

#### VA Benefits Letters  
Through the VA Benefits Letters application, Veterans can access and download various official VA letters and documents, including the Benefit Summary Letter (often referred to as a VA award letter).  
This tool provides Veterans with immediate access to their benefits information, which can be useful for verifying service history, disability ratings, and other benefits-related detail.

#### Rated Disabilities  
The Rated Disabilities tool enables Veterans to view their combined disability rating as well as individual disability ratings online.  
These ratings are assigned based on the severity of disabilities related to military service and are crucial in determining the benefits Veterans receive.  
By accessing this tool, Veterans can stay informed about their disability evaluations and ensure they are receiving appropriate benefits.


## Analytics Dashboards

[Benefits - Claim Status Tool Dashboard](https://vagov.ddog-gov.com/dashboard/8me-h86-qmb) (DataDog) - metrics on all CST related endpoints


**Decisions letters**

[BMT Campaigns](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/-_4NVL0zS0C_T3jvb4vUCw) - used to calculate click rate for decision letter availability emails


[Benefits - Management Tools - Letters](https://vagov.ddog-gov.com/dashboard/86n-b39-hhn) (DataDog) - logs and error rates for Your VA Benefits Letters & Documents.
Once we finish investigating why EVSS is still getting hits (Jane working on this, may not be finished by the time we end so this may fall to the next team), EVSS monitors and metrics can be removed

**Evidence request:**

[Claim Status Tool Statistics](https://vagov.ddog-gov.com/dashboard/p2a-9ii-9hz) (DataDog) - Metrics around data, including types of evidence requests, contentions, claim types, and decision letter information; shows frequency of different types of data present in claims accessed through CST over a specified time frame

[Web GA: (Explore report > CST evidence requests > Funnel - Evidence + 5103 responses)](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/wdstw7U5TR-vGC5L8Xl3ow)


**VA Letters and Documents:**

[web GA: Explore report > Benefits Letters > Benefits Letter Downloads](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/SvIXt89hQnCx4HDFQ6iKNw) - Total count of benefits letters downloaded by letter type

[DataDog Report, by letter, by month](https://vagov.ddog-gov.com/metric/explorer?fromUser=true&start=1704092400000&end=1735714799999&paused=true#N4Ig7glgJg5gpgFxALlAGwIYE8D2BXJVEADxQEYAaELcqyKBAC1pEbghkcLIF8qo4AMwgA7CAgg4RKUAiwAHOChASAtnADOcAE4RNIKtrgBHPJoQaUAbVBGN8qVoD6gnNtUZCKiOq279VKY6epbINiAiGOrKQdpYZAYgUJ4YThr42gDGSsgg6gi6mZaBZnHKGniqyABuiBpOGPIQAHQaCJ4aUM2qOABGEGhwToMICDr1UDhgImg4GFBOcorAcCLVyHAA1hoAtPLaOFA8AAS9WMfAS3A8zRj1mfgiCAAUAJQgPAC6VK7ueJihcK-VT-DAxUrxD7fEBtLCDGQgeQYEZjZSTGBOTIAjQQTKJNCiIZXco4AlQfGEpz0JjKERuDxoD78CD2TBYRYKHIgXoYbSWL48Pgw+QEhAAYSkwhgKBE-zQPCAA)

[Abandonment rate](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/SvIXt89hQnCx4HDFQ6iKNw)


**BMT - Eventbus Gateway**

[BMT - Eventbus Gateway (DataDog)](https://vagov.ddog-gov.com/dashboard/diy-2n4-4my) - monitoring Eventbus Gateway application + any errors reported from VANotify for sending the emails

[Silent Failure Tracker (Official Count)](https://vagov.ddog-gov.com/dashboard/n6c-twn-swr/silent-failure-tracker-official-count?fromUser=false&refresh_mode=sliding&tpl_var_service%5B0%5D=claim-status&from_ts=1755616223224&to_ts=1755789023224&live=true) (DataDog) - not our dashboard, but useful to check on and see if there are silent failures occurring for any of our services.  Watch officers will post about items we own that appear on this dashboard.


**Design and Research**

- [CST v2 (Figma)](https://www.figma.com/design/F8U4wddaFouUPVd4mGBMDI/CST-V2?node-id=0-1&p=f&t=VdBXNB4Nn7fV2SyX-0)
- [Claims and appeals content & data modeling (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1719581824942/975bd9a22e21177415cdb238525b3e1aac95a288)
- [BMT 2 draft content (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1730491796385/2ae33589d99eac75e0dd49b29c290e4acab0a46a)
- [CST V2 Breadcrumbs Update (Figma)](https://www.figma.com/design/F8U4wddaFouUPVd4mGBMDI/CST-V2?node-id=0-1&p=f&t=uqbPJ9MpgUm3XCVg-0)
- [Proposed copy for link to VA.gov from mobile app (GitHub)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/108465)

**Team Resources**
- [GitHub Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1430)  

### Manual Process for Analyzing Contact Center/Medallia Data

- [BMT2 Manual Process for Analyzing Contact Center & Medallia Data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/BMT2%20Manual%20Process%20for%20Analyzing%20Contact%20Center%20%26%20Medallia%20Data.md)
- [Call Center and Medallia Data Analysis](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/Benefits%20Management%20-%20CST/cst%20-%20document%20uploads%20+%20upload%20status/Call%20Center%20and%20Medallia%20Data%20Analysis?csf=1&web=1&e=ANP5jy)
- [Call Center Data Analysis/Synthesis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1730231194923/cb140daff8eb9a2988238c992ec32e7c9c4963c6?sender=ub840cb68d1886aa35b202891)
- [Spreadsheet with Raw Data Analysis](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/Benefits%20Management%20-%20CST/cst%20-%20analytics%20+%20success%20metrics/CST%20call%20center%20and%20medallia%20data/COPY----MyVA411%20-%20call%20notes%20-%2002.01.2024%20-%2009.30.2024%20-%2021.xlsx?d=w3bf22df3e5c64deaab9914e5772b71bd&csf=1&web=1&e=kZDkvU&nav=MTVfe0FCMERDNzM0LTFFMUQtNDU5Ni05MDE4LUFBNTdEM0VFNTI0NX0)
- [Call center data analysis (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1730231194923/cb140daff8eb9a2988238c992ec32e7c9c4963c6)

---

## Roadmap

## Initiative and Tasks in backlog for New BMTII Team

-   [Tickets for new BMTII Team](https://github.com/orgs/department-of-veterans-affairs/projects/1430/views/26)

**Links**
- [Roadmap for BMTII ](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1741805196727/ad752328cce58f0ea2428a4e421af18abfbfc10a?sender=ub840cb68d1886aa35b202891) 

---

## Features and Initiatives We Worked On

# Release Timeline – Contract Features & Changes

## Jan 31, 2025 – Suppress Payments History
- **What was done:** Suppressed internal/incorrectly categorized tracked items from Claim Status Tool (Attorney Fee, Secondary Action Required, Stage 2 Development).  
- **Value to Veterans:** Veterans now only see payments that truly relates to them, reducing confusion and unnecessary worry.  


## Jun 17, 2025 – Improved Pension Claims Experience
- **What was done:** Expanded pension claims process from 5 to 8 phases by separating evidence gathering, review, and decision.  
- **Value to Veterans:** Provides a clearer, more accurate view of claim progress, reducing uncertainty and increasing trust in VA systems.  


## Jun 24, 2025 – EVSS to Lighthouse Letters Migration
- **What was done:** Began migration of Benefits Letters API from EVSS to Lighthouse.  
- **Value to Veterans:** Modernizes backend services to improve stability and long-term reliability of letter access. 


## Jun 25, 2025 – Decision Letter Email Notifications (EventBus Gateway)
- **What was done:** Released proactive email notifications to inform Veterans when a Decision Letter is available.  
- **Value to Veterans:** Ensures timely updates so Veterans can take next steps sooner, improving confidence and reducing reliance on call centers.   


## Jul 16, 2025 – Evidence Request Content Improvements
- **What was done:** Released plain-language content model and mockups for 1st and 3rd party evidence requests.  
- **Value to Veterans:** Veterans can more easily find, understand, and act on evidence request information, reducing confusion and delays.  


## Jul 21, 2025 – Evidence Upload Improvements
- **What was done:**  
  - Added duplicate check to prevent multiple uploads of the same document.  
  - Added claimant validation check to block ineligible dependents from uploading.  
- **Value to Veterans:** Prevents wasted effort and confusion, provides clear error messages, protects privacy, and ensures uploads are processed correctly.  


## Aug 19, 2025 – Your VA Letters and Documents
- **What was done:** Improved letter download flow by removing unnecessary steps, updating plain language, adding contextual labels, and aligning accessibility.  
- **Value to Veterans:** Veterans can more easily download their letters without friction, reducing abandonment and ensuring quicker access to critical benefits documents.  

---

## Enablement Team Contacts

| Name             | Email                        | Role                              |
|------------------|------------------------------|-----------------------------------|
| Amy Lai          | amy.lai2@va.gov             | Product Owner                     |
| Julie Strothman  | julie.strothman@va.gov      | Design Lead                       |
| Cory Sohrakoff   | cory.sohrakoff@va.gov       | Engineering Lead                  |



# Stakeholders and Supported Initiatives


# Stakeholders and Initiatives

| **Name**                               | **Role/Title**                                | **Initiatives Worked On**                                                                 |
|----------------------------------------|-----------------------------------------------|--------------------------------------------------------------------------------------------|
| **Andrew Gray (VBAVACO)**              | Senior Automation Strategist                  | Supplemental Claims, Payment History, Evidence Request                                     |
| **Alejandro Mendiolaflores (VBAVACO)** | Senior Automation Strategist                  | Supplemental Claims, Payment History, Evidence Request                                     |
| **Danielle M. Atwood (VBAVACO)**       | Senior Program Analyst                        | Dependency Letters                                                                         |
| **Lisa L. Lotts (VBAVACO)**            | Lead Program Analyst                          | Dependency Letters                                                                         |
| **Melissa Rebstock (VBASPT)**          | Branch Chief of Digital Experience            | Dependency Letters                                                                         |
| **Elizabeth A. Eskew-Howard (VBAVACO)**| —                                             | Payment History                                                                           |
| **Amy Davis (VBAVACO)**                | —                                             | Payment History                                                                           |
| **Eric Colinares (OAR)**               | Management & Program Analyst                  | Payment History (Agent/Attorney Fees)                                                     |
| **Jacqueline N. Hale (VBAVACO)**       | Senior Management & Program Analyst           | Payment History                                                                           |
| **Alicia M. Harvala (VBAVACO)**        | Program Analyst                               | Payment History                                                                           |
| **Daniel J. Gifford (VBAVACO)**        | Management & Program Analyst                  | Pension Claims                                                                            |
| **Derek Uttley (VBAVACO)**             | Program Analyst                               | Pension Claims                                                                            |
| **Anthony Nguyen (VA OIT)**            | EventBus Team                                 | Decision Letter Notifications (EventBus / EventBus Gateway)                               |
| **Kaitlyn Hunt**                       | Senior Content Designer (Content/IA)          | Evidence Requests, Benefit Letters                                                        |
| **Danielle Thierry**                   | Content Practice Lead                         | Evidence Requests, Benefit Letters                                                        |
| **Kimberley Monroe-Daniels**           | Veteran Support Customer Success Manager      | Veteran Issues, Silent Failures                                                           |
| **Jinmay Patel**                       | BGS                                           | Backend Services (BGS)                                                                    |
| **Janelle Finnerty**                   | UX Lead for Authenticated Experience                                           | Mailing Address initiatives                                                               |


# BMT2 Initiatives – File Links

Below are the initiatives worked on during the contract, with links to their respective documentation or files.

## 1. Your VA Letters and Documents

[VA Letters and Documents Page - Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/VA%20Letters%20and%20Documents.md)

[Your VA benefit letters and documents (Figma)](https://www.figma.com/design/61I2UcRPJDXdw0xCl9BlEe/Your-VA-benefit-letters-and-documents?node-id=0-1&p=f&t=VZj88nDIza2UMwRm-0)

[Mailing address validation alerts (SharePoint)](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/_layouts/15/Doc.aspx?sourcedoc=%7BDF[%E2%80%A6]alidation%20alerts.docx&action=default&mobileredirect=true)

[VA Benefit Letters Checkbox Labels (SharePoint)](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/_layouts/15/Doc.aspx?sourcedoc=%7B6F[%E2%80%A6]0Checkbox%20Labels.docx&action=default&mobileredirect=true)

[Note-taking VA benefit letters and documents research sessions (SharePoint)](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/_layouts/15/Doc.aspx?sourcedoc=%7B31[%E2%80%A6]nd-docs-study-2025.xlsx&action=default&mobileredirect=true)

[Collaboration Cycle for [BMT2, Claim Status Tool, VA Letters and Documents] #98499](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1452)

## 2. Evidence Request Improvements

[Process for Updating Evidence Requests with Plain Language](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/evidence-requests-pattern/updating-evidence-requests.md)

[Evidence Requests Pattern Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/evidence-requests-pattern/release-plan.md)

[Reclassifying or Suppressing Evidence Request Types](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Evidence%20Requests%20Alterations.md)

[Evidence requests (Figma)](https://www.figma.com/design/P9rl860Qt8qqVFZGg4sejE/Evidence-Requests?node-id=0-1&p=f&t=K6DMW1XVl7VvimiI-0)

[Evidence request description drafting (SharePoint)](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/_layouts/15/Doc.aspx?sourcedoc=%7B38[%E2%80%A6]iptions%20drafting.docx&action=default&mobileredirect=true)

[Evidence Request Content Worksheet (SharePoint)](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/_layouts/15/Doc.aspx?sourcedoc=%7B6D[%E2%80%A6]idence%20requests).docx&action=default&mobileredirect=true)

[PTSD evidence requests unedited (SharePoint)](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/_layouts/15/Doc.aspx?sourcedoc=%7B12[%E2%80%A6]-evidence-requests.docx&action=default&mobileredirect=true)

[Initiative Brief – Evidence Request Improvements (SharePoint)](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/_layouts/15/Doc.aspx?sourcedoc=%7BEA[%E2%80%A6]est%20improvements.docx&action=default&mobileredirect=true)

[Collaboration Cycle for [BMTII, Claim Status Tool, Evidence Requests Pattern] #105105](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1513)

## 3. Supplemental Claim (Discovery Phase)

[Supplemental claim and higher level review improvement Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Supplemental%20claim%20and%20higher%20level%20review%20improvement%20initiative.md)

[Supplemental claims (Figma)](https://www.figma.com/design/T2cH3R8rckAlIFNwgx214H/CST---Supplemental-Claim?node-id=62-891&p=f&t=XLnuhDNhzWzijtEn-0)

[Migration Approach for Supplemental Claims and Higher Level Reviews](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Supplemental%20claim%20and%20higher%20level%20review%20improvement%20initiative.md) 

## 4. Payments History – Suppressed 3rd Party Payments

[Payment History Suppressions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/payment-history/payment-history-suppressions.md)

## 5. Pension Claims Modernization (8-Step Workflow)

[Figma file](https://www.figma.com/design/QTZuETCjjgYfRYCmqbNu5d/Pension-claim-process-overview?node-id=2201-3233&t=YLNZEZaRevuH9Gqa-0)

[Pension claim process overview (Figma)](https://www.figma.com/design/QTZuETCjjgYfRYCmqbNu5d/Pension-claim-process-overview?node-id=2201-3233&t=Y6VvofzuuyPMatz3-0)

[Veterans Pension benefits claim process (SharePoint)](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/_layouts/15/Doc.aspx?sourcedoc=%7B3D[%E2%80%A6]ss-pensions-021325.docx&action=default&mobileredirect=true)

## 6. Intent to File
For the Intent to File (ITF) discovery phase, the team investigated how Veterans currently check their ITF status and identified significant usability gaps on VA.gov and in the Claims Status Tool (CST). They reviewed existing ITF workflows, upstream data sources (VBMS and Lighthouse ITF API), and confirmed there was no direct, user-friendly way for Veterans to see if an ITF was active or when it expired. The team gathered pain points from Veteran research, Reddit feedback, and contact center insights, revealing confusion around ITF timelines, expiration dates, and the association between ITFs and claims. They explored design concepts for displaying ITF information in CST, including scenarios for active, expired, and multiple ITFs, as well as empty states for education. They documented potential risks, and technical dependencies. This discovery work laid the foundation for a UI solution to make ITF status transparent and actionable for Veterans.

[Initiative Brief: Display Intent to File (ITF) Status in the Claims Status Tool (CST)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Intend%20To%20File%20-%20Product%20Brief.md)

[Design Pitch: Display Intent to File (ITF) Status in CST](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Display%20Intent%20to%20File%20(ITF)%20Status%20in%20CST%20Initiative.md)

[ITF (Intent to File) in CST (Figma)](https://www.figma.com/design/ZLDFINlvw5skb6ckTT9skw/ITF--Intent-to-File--in-CST?node-id=201-192&p=f&t=jJsHCj2cYR6sJMrd-0)

[Intent to File - CST (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745429653435/fdc61adbcd6f7c35a14ff23036dc131bd3cfad34)

[Technical Discovery (part of initiative brief)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Intend%20To%20File%20-%20Product%20Brief.md#techinal-information)

[ITF (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745429653435/fdc61adbcd6f7c35a14ff23036dc131bd3cfad34)

## 7. Letter Migration to Lighthouse

The development work to support this effort was done by the previous BMT1 team.  BMT2 was responsible for releasing this work after the previous BMT1 team's contract ended.

The [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/VA%20Benefits%20Letters%20EVSS%20to%20Lighthouse%20API%20Migration%20Release%20Plan.md) was executed and updated as findings caused various pivots.  The release was completed on **June 24, 2025**.

## 8. Event Bus Gateway – Decision Letter Email Notifications

[Architecture Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/event-bus-notify/Architecture%20Diagram.md)

[Data Flow Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/event-bus-notify/Data%20Flow%20Diagram.md)

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/event-bus-notify/Product%20Outline.md)

[Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/event-bus-notify/Release%20Plan.md)

[Sequence Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/event-bus-notify/Sequence%20Diagram.md)

[Other documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/event-bus-notify/documentation.md)

[Decision Letter Email Metrics](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/Benefits%20Management%20-%20CST/BMT%20metrics/Decision%20Letter%20Email%20Metrics.xlsx?d=wb15afdf335a64f0798d4eef2fa457425&csf=1&web=1&e=XDqfij) (SharePoint)

Readme update #1: [department-of-veterans-affairs/eventbus-gateway#112](https://github.com/department-of-veterans-affairs/eventbus-gateway/pull/112)

[This is the Directory for our EventBus (Gateway) Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/event-bus-notify)

Uploaded the Venify onboarding instructions to SharePoint (due to the sensitivity of certification access) and added a link to that in the [general documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/event-bus-notify/documentation.md) file in the eventbus gateway folder.
## 📑 Additional Documentation


- [Silent Failure Remediation (Production Monitoring)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits-portfolio/benefits-management-tools/claim-status-tool/engineering/troubleshooting/retrieve-failed-evidence-submissions.md)  
- [CST Troubleshooting Guide](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/benefits-portfolio/benefits-management-tools/claim-status-tool/engineering/troubleshooting)  

