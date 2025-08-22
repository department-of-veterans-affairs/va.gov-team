# Benefits Management Tools II Transition Hub

**Updated: 8.31.2025**

> **Note:** These Transition Docs are "point in time" documents, and may not reflect current progress, deployments, or upcoming efforts.

---

## Team Transition Document  
**Status:** TBD  

The purpose of this transition document is to outline the current state of Benefits Management Tools II product development.  
It serves as a "front door" to documentation and resources collected during the course of product design and development.  
Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.

---

## Table of Contents
- [Product context, portfolio, and artifacts](#product-context-portfolio-and-artifacts)  
- [Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/Benefits%20Management%20Tools%20II%20Transition%20Hub%208.31.2025.md#roadmap)
- [Features and initiatives we worked on](#features-and-initiatives-we-worked-on)  
- [Enablement Team Contacts](#enablement-team-contacts)
- [Stakeholders and Supported Initiatives](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/Benefits%20Management%20Tools%20II%20Transition%20Hub%208.31.2025.md#stakeholders-and-supported-initiatives)
- [Content Center and Medallia Data Analysis - Document Upload Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/claim-appeal-status/Benefits%20Management%20Tools%20II%20Transition%20Hub%208.31.2025.md#manual-process-for-analyzing-contact-centermedallia-data)
- [Analytics Dashboards](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/claim-appeal-status/Benefits%20Management%20Tools%20II%20Transition%20Hub%208.31.2025.md#analytics-dashboards)


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

---

### Product Portfolio

**Claim Status Tool**
- Staging link  
- Product folder  
- Product outline  
- Product Guide / Contact Center Guide  
- VBA OBA Stakeholder notes  
- PM Resources folder  
- Gap-Bet Scoring  
- SharePoint files and resources  

---

### Product Artifacts

**Claim Status Tool**
- Data Flow Diagram  
- Upstream Service Contacts  
- Staging users  
- Analytics  

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



**Engineering**
- High-level view of systems  
- Silent Failures  
- Engineering Onboarding Documentation  
- Datadog README  
- Engineering README: How to run the Benefits Management Tools team services  

**Design and Research**
- CST Design Resources  
- Research folder  
- BMT Figma Project  
- CST V2: Up-to-date design source of truth  
- CST Mural Room  

**Team Resources**
- GitHub Project Board  
- Accessibility documentation  
- Accessibility project board  

### Manual Process for Analyzing Contact Center/Medallia Data

- [BMT2 Manual Process for Analyzing Contact Center & Medallia Data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/BMT2%20Manual%20Process%20for%20Analyzing%20Contact%20Center%20%26%20Medallia%20Data.md)
- [Call Center and Medallia Data Analysis](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/Benefits%20Management%20-%20CST/cst%20-%20document%20uploads%20+%20upload%20status/Call%20Center%20and%20Medallia%20Data%20Analysis?csf=1&web=1&e=ANP5jy)
- [Call Center Data Analysis/Synthesis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1730231194923/cb140daff8eb9a2988238c992ec32e7c9c4963c6?sender=ub840cb68d1886aa35b202891)
- [Spreadsheet with Raw Data Analysis](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/Benefits%20Management%20-%20CST/cst%20-%20analytics%20+%20success%20metrics/CST%20call%20center%20and%20medallia%20data/COPY----MyVA411%20-%20call%20notes%20-%2002.01.2024%20-%2009.30.2024%20-%2021.xlsx?d=w3bf22df3e5c64deaab9914e5772b71bd&csf=1&web=1&e=kZDkvU&nav=MTVfe0FCMERDNzM0LTFFMUQtNDU5Ni05MDE4LUFBNTdEM0VFNTI0NX0)

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


## May 16, 2025 – Intent to File (Discovery)
- **What was done:** Completed discovery to improve visibility into Intent to File (ITF) status and expiration.  
- **Value to Veterans:** Veterans will gain transparency into their ITF status, helping them avoid missed benefits due to expired filings or duplicate ITFs. *(Not released yet)*  


## Jun 17, 2025 – Improved Pension Claims Experience
- **What was done:** Expanded pension claims process from 5 to 8 phases by separating evidence gathering, review, and decision.  
- **Value to Veterans:** Provides a clearer, more accurate view of claim progress, reducing uncertainty and increasing trust in VA systems.  


## Jun 30, 2025 – Decision Letter Email Notifications (EventBus)
- **What was done:** Released proactive email notifications to inform Veterans when a Decision Letter is available.  
- **Value to Veterans:** Ensures timely updates so Veterans can take next steps sooner, improving confidence and reducing reliance on call centers.  


## Jul 1, 2025 – EVSS to Lighthouse Letters Migration
- **What was done:** Began migration of Benefits Letters API from EVSS to Lighthouse (rolled back due to issues, pending re-release).  
- **Value to Veterans:** Modernizes backend services to improve stability and long-term reliability of letter access.  


## Jul 10, 2025 – Evidence Request Content Improvements
- **What was done:** Released plain-language content model and mockups for 1st and 3rd party evidence requests.  
- **Value to Veterans:** Veterans can more easily find, understand, and act on evidence request information, reducing confusion and delays.  


## Jul 21, 2025 – Evidence Upload Improvements
- **What was done:**  
  - Added duplicate check to prevent multiple uploads of the same document.  
  - Added claimant validation check to block ineligible dependents from uploading.  
- **Value to Veterans:** Prevents wasted effort and confusion, provides clear error messages, protects privacy, and ensures uploads are processed correctly.  


## Aug 10, 2025 (week ending) – Your VA Letters and Documents
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

| **Name**                        | **Title**                              | **Organization** | **Initiatives Supported**                                                          |
|---------------------------------|-----------------------------------------|------------------|-------------------------------------------------------------------------------------|
| **Andrew Gray**                 | Senior Automation Strategist            | VBAVACO          | Supplemental Claims, Payment History, Evidence Request                              |
| **Alejandro Mendiolaflores**   | Senior Automation Strategist            | VBAVACO          | Supplemental Claims, Payment History, Evidence Request                              |
| **Danielle M. Atwood**         | Senior Program Analyst                  | VBAVACO          | Dependency Letters                                                                  |
| **Lisa L. Lotts**              | Lead Program Analyst                    | VBAVACO          | Dependency Letters                                                                  |
| **Melissa Rebstock**          | Branch Chief, Digital Experience        | VBASPT           | Dependency Letters                                                                  |
| **Elizabeth A. Eskew-Howard**  |           | VBAVACO          | Payment History                                                                     |
| **Amy Davis**                  |          | VBAVACO          | Payment History                                                                     |
| **Eric Colinares**             | Management & Program Analyst            | OAR              | Payment History (Agent/Attorney Fees)                                               |
| **Jacqueline N. Hale**         | Senior Management & Program Analyst     | VBAVACO          | Payment History                                                                     |
| **Alicia M. Harvala**          | Program Analyst                         | VBAVACO          | Payment History                                                                     |
| **Daniel J. Gifford**          | Management and Program Analyst          | VBAVACO          | Pension Claims                                                                      |
| **Derek Uttley**               | [Title not specified in image]          | VBAVACO          | Pension Claims                                                                      |


# BMT2 Initiatives – File Links

Below are the initiatives worked on during the contract, with links to their respective documentation or files.

## 1. Your VA Letters and Documents

[VA Letters and Documents Page - Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/VA%20Letters%20and%20Documents.md)

## 2. Evidence Request Improvements

[Process for Updating Evidence Requests with Plain Language](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/evidence-requests-pattern/updating-evidence-requests.md)

[Evidence Requests Pattern Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/evidence-requests-pattern/release-plan.md)

## 3. Supplemental Claim (Discovery Phase)

[Supplemental claim and higher level review improvement Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Supplemental%20claim%20and%20higher%20level%20review%20improvement%20initiative.md)

## 4. Payments History – Suppressed 3rd Party Payments


## 5. Pension Claims Modernization (8-Step Workflow)


## 6. Intent to File
For the Intent to File (ITF) discovery phase, the team investigated how Veterans currently check their ITF status and identified significant usability gaps on VA.gov and in the Claims Status Tool (CST). They reviewed existing ITF workflows, upstream data sources (VBMS and Lighthouse ITF API), and confirmed there was no direct, user-friendly way for Veterans to see if an ITF was active or when it expired. The team gathered pain points from Veteran research, Reddit feedback, and contact center insights, revealing confusion around ITF timelines, expiration dates, and the association between ITFs and claims. They explored design concepts for displaying ITF information in CST, including scenarios for active, expired, and multiple ITFs, as well as empty states for education. They documented potential risks, and technical dependencies. This discovery work laid the foundation for a UI solution to make ITF status transparent and actionable for Veterans.

[Initiative Brief: Display Intent to File (ITF) Status in the Claims Status Tool (CST)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Intend%20To%20File%20-%20Product%20Brief.md)

[Design Pitch: Display Intent to File (ITF) Status in CST](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Display%20Intent%20to%20File%20(ITF)%20Status%20in%20CST%20Initiative.md)

[ITF (Intent to File) in CST (Figma)](https://www.figma.com/design/ZLDFINlvw5skb6ckTT9skw/ITF--Intent-to-File--in-CST?node-id=201-192&p=f&t=jJsHCj2cYR6sJMrd-0)

[Intent to File - CST (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745429653435/fdc61adbcd6f7c35a14ff23036dc131bd3cfad34)

[Technical Discovery (part of initiative brief)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Intend%20To%20File%20-%20Product%20Brief.md#techinal-information)

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

## 9. Silent Failures – Investigation & Response


## 10. Fixing Dependents Document Upload Issues
-


