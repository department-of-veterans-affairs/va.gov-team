# Benefits Management Tools 1 Transition Hub

**Updated 3.31.2025**

**Note:** These Transition Docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts.

<br>

>**Team transition document | TBD**
>
> The purpose of this transition document is to outline the current state of Benefits Management Tools 1 product development. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.


<br>

## Table of Contents
[Product context, portfolio, and artifacts](#portfolio-context)

[Roadmap](#roadmap)

[Features and initiatives we worked on](#Features-and-initiatives-we-worked-on)

[Enablement Team Contacts](#enablement-team)


<br>

## Portfolio context 
### Claim Status Tool
The Claim Status Tool allows Veterans to check the status of their VA claims, decision reviews, or appeals online. Users can view details such as evidence submitted, additional evidence requested by VA, claim types, and specific issues claimed. Additionally, Veterans can upload supporting documents for initial claims and download decision letters for certain types of claims, decision reviews, and appeals.
### VA Benefits Letters
Through the VA Benefits Letters application, Veterans can access and download various official VA letters and documents, including the Benefit Summary Letter (often referred to as a VA award letter). This tool provides Veterans with immediate access to their benefits information, which can be useful for verifying service history, disability ratings, and other benefits-related detail
### Rated Disabilities
The Rated Disabilities tool enables Veterans to view their combined disability rating as well as individual disability ratings online. These ratings are assigned based on the severity of disabilities related to military service and are crucial in determining the benefits Veterans receive. By accessing this tool, Veterans can stay informed about their disability evaluations and ensure they are receiving appropriate benefits. 

<br>


### Product portfolio
**Claim Status Tool**
- [Staging link](https://staging.va.gov/claim-or-appeal-status/)
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/CST%20Product)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Product%20Outline.md)
- [Product Guide/Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/product-guides/VA%20Claim%20Status%20Tool%20Product%20Guide%20v2.1%20SRT%2006262024.docx) 
- [VBA OBA Stakeholder notes](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Benefits%20Management%20-%20CST/BMT%20-%20OBA%20Syncs%20-%20recordings%20and%20notes/BMT+OBA%20syncs.docx?d=w26d8a422385446899056f74d0f528db5&csf=1&web=1&e=1SWbi8)
- [PM Resources folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/CST%20Product)
- [Gap-Bet Scoring](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/Benefits%20Management%20-%20CST/BMT%201%20Gap-Bet%20Scoring%20Framework.xlsx?d=w06da960cab3b433282a414daaeb8fcff&csf=1&web=1&e=UNJbQB)
- [Sharepoint files and resources](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/Benefits%20Management%20-%20CST?csf=1&web=1&e=r44Kqn)



<br>


### Product artifacts
- [Claim Status Tool Data Flow Diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1663867462895/b0161ab939bba7d08f6bea07e3663d9d5cea22d4)
- [Upstream Service Contacts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Service%20Contacts.md)
- [Staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)


**Analytics**
- Analytics dashboard: 
     - [CSAT Domo](https://va-gov.domo.com/page/1545882322) (sort by URL /track-claims)
     - [Google Analytics](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/bMzsgzMCT6yazCs5H-3N_g)
- [DD CST Tracked Item Stats](https://vagov.ddog-gov.com/dashboard/p2a-9ii-9hz/claim-status-tool-statistics?fromUser=false&refresh_mode=sliding&from_ts=1742736772898&to_ts=1742823172898&live=true)
- [DD CST Error Monitoring](https://vagov.ddog-gov.com/dashboard/8me-h86-qmb/benefits---claim-status-tool-dashboard?fromUser=false&refresh_mode=sliding&from_ts=1740231301942&to_ts=1742823301942&live=true)
- [DD BMT Silent Failure Monitoring](https://vagov.ddog-gov.com/dashboard/pps-nf7-ppr/cst-zero-silent-failures-document-uploads?fromUser=false&refresh_mode=sliding&from_ts=1742736972052&to_ts=1742823372052&live=true)
- [DD Letter's app Monitoring](https://vagov.ddog-gov.com/dashboard/86n-b39-hhn/benefits---management-tools---letters?fromUser=false&refresh_mode=sliding&from_ts=1742737025688&to_ts=1742823425688&live=true)
- [Real User Monitoring (RUM) Dashboard](https://vagov.ddog-gov.com/rum/application/9d5155fd-8623-4bc9-8580-ad8ec2cdd7fa/overview/browser?from_ts=1676217734085&to_ts=1676304134085&live=true)


**Engineering**
- [High level view of systems](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1663867462895/b0161ab939bba7d08f6bea07e3663d9d5cea22d4)
- [Silent Failures](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/engineering/testing-silent-failures)
- [Engineering Onboarding Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/engineering/onboarding)
- [Datadog README](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/DataDog/README.md)
- [Engineering README - How to run the benefit management tools team services](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/README.md)


**Design and Research**
- [CST Design Resources](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/design/resources.md)
- [Research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/research)
- [BMT Figma Project](https://www.figma.com/files/team/1278375444205744118/project/175598391/Benefits-Management-Tools?fuid=1046561086805876994)
- [CST V2: Up-to-date design source of truth](https://www.figma.com/design/F8U4wddaFouUPVd4mGBMDI/CST-V2?node-id=0-1&p=f&t=MJJ6bjDadV4zQPzw-0)
- [CST Mural Room](https://app.mural.co/t/departmentofveteransaffairs9999/r/1613770853903?folderUuid=9e1456d1-4532-434c-b053-f7694afc5795)

**Team resources**
- [Github Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1549/views/3?filterQuery=design&visibleFields=%5B%22Title%22%2C%22Assignees%22%2C%22Status%22%2C149737419%2C149737418%2C149737417%2C%22Labels%22%5D)
- [Accessibility documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/accessibility/readme.md)
- [Accessibility project board](https://github.com/orgs/department-of-veterans-affairs/projects/1255/views/1)

<br>


## Roadmap


**Now** (Current Quarter beginning April 1 2025)
- Introduce event-based architecture and decision letter notifications
- CST: Complete VBMS_Connect migration to new LH claim documents service
- CST: Document status feature
- CST: Complete initial load time performance improvement discovery
- CST: Component migration

**Next** (Quarter beginning July 1 2025)
- Introduce gradual performance improvements to CST that reduce latency and load times
- Complete discovery into introducing additional claim events via event-based architecture (Event Bus)
- Complete discovery into C&P exam improvement opportunities
- CST: Improve file history experience

**Future** (Quarter beginning October 2025)
- CST: Expand claim letter sorting functionality
- CST: Introduce C&P exam experience improvements
- 5103 silent failure polling solution
- Evidence request email notifications

### Links
- [Outcome-driven roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689972542685/b1908130a4ad3abdaf8fc015052540a4e15d752e)
- Decision letter notification feature roadmap

### Other in-flight priorities
- [Migrating to new file submission component](https://github.com/orgs/department-of-veterans-affairs/projects/1549/views/3?filterQuery=component&pane=issue&itemId=88731646&issue=department-of-veterans-affairs%7Cva.gov-team%7C87835)
  

<br>


## Features and initiatives we worked on between April 1 2024 and March 31st 2025
This table includes links to the individual feature directory and the latest iteration (doc or code) in design or development.

| Feature                                      | AKA                                        | Status                                                         |
|----------------------------------------------|--------------------------------------------|----------------------------------------------------------------|
| Re-designed Claims Detail Page              | [Improved Evidence Request Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Improved%20Evidence%20Requests%20Initiative.md)       | Released April 2024                                            |
| Re-designed Overview Page and Incorporating 8 claim phase paradigm | [Improved Claim Contextualization Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Improved%20Claims%20Process%20Understanding%20Initiative.md) | Released August 2024                                           |
| [Improved 5103 Request Experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Improved%205103%20Waiver%20Experience%20Initiative.md)            | N/A                                        | Released November 2024                                         |
| Silent Failure Notification Emails          | [Eliminate Silent Failures Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Eliminate%20Silent%20Failures%20Initiative.md)       | Phase 1 (exhaustion handler) released December 2024, Phase 2 (polling solution) released March 2025 |
| Decision Letter Notifications               | [Event Bus Notifications, Event-based Architecture Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Event-Driven%20Notifications%20Initiative.md) | In progress, beginning staging testing and validation testing  |


<br>

## Enablement Team

- Amy Lai | amy.lai2@va.gov - Product Owner
- Julie Strothman | julie.strothman@va.gov - Design Lead
- Cory Sohrakoff | cory.sohrakoff@va.gov - Engineering Lead
- Zack Goldfine | zackary.goldfine@va.gov - Deputy CTO, Benefits Lead
- Steve Albers |steve.albers@va.gov - OCTO Engineering Lead



---
