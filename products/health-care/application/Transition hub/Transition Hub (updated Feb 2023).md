# 10-10EZ Transition Hub

**Updated 2/13/2023**

**Note:** These Transition Docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts.

<br>

>**Team transition document | TBD**
>
> The purpose of this transition document is to outline the current state of 1010-EZ product development. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.
> 
> **Note:** The 10-10EZ management was under the purview of the 10-10 Health Apps team, if you're looking for information about the 10-10CG (Caregiver application) visit [10-10CG Transition Hub (Feb 2023)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/Transition%20Hub%20(updated%20Feb%202023).md).


<br>

## Table of Contents
[Product context, portfolio, and artifacts](#product-context)

[Roadmap](#roadmap)

[Features and initiatives we worked on](#Features-and-initiatives-we-worked-on)

[Our team, VA relationships, and stakeholder meeting cadence](#Our-team-March-2022-team-roster)


<br>

## Product context 
The 10-10EZ: Application for VA health care was one of the first applications to be adapted to online on va.gov. Currently we are working to improve the UX and functionality. 

- Used by Veterans to apply for health care
- Averaging 12,500 submissions per month
- Login is available, but not required
     - Some fields are prefilled for authenticated users
     - Authenticated users can "save in progress" and return to complete their application

<br>


### Product portfolio
**10-10EZ Application VA health care**
- [Staging link](https://staging.va.gov/health-care/apply/application/introduction)
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)
- [Product Guide/Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/HCA.Product.Guide.docx)
- [Things to know](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/10-10EZ%20-%20Things%20to%20know.md) (various points of information we learned since the last transition in April 2022)
- [Stakeholder Meeting Notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/product/Bi-weekly%20Stakeholder%20Mtg%20notes)
- [PM Resources folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/product/PM%20Resources) for documents used in routines and research



<br>


### Product artifacts
- [Content source of truth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/10-10EZ-application-copy.md)
- [Page/User flow](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1632923531828/474bfdde942c22a0df26ad416a0b23e36b834d4a?sender=u6ad375c1c8425e5bfec67027)
- [Sketch file](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6) with wireflows and page designs (including proposals and experiments)
- [Staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
- [Various form info](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/10-10EZ%20Form)


**Analytics**
- Analytics dashboard: 
     - [Domo](https://va-gov.domo.com/page/447193050) (consolidated forms dashboard)
     - [Google Analytics](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/gSXa5lOYRyuXpauKyXSYug/a50123418w177519031p184624291/_u.date00=20210301&_u.date01=20210524/)
- [Important Google Analytics Event Labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/Analytics/Important%20Google%20Analytics%20event%20labels.md)
- [Backend Stats on DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?from_ts=1657212129534&to_ts=1657215729534&live=true)
- [Real User Monitoring (RUM) Dashboard](https://vagov.ddog-gov.com/rum/application/9d5155fd-8623-4bc9-8580-ad8ec2cdd7fa/overview/browser?from_ts=1676217734085&to_ts=1676304134085&live=true)


**Engineering**
- [High level view of systems](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/engineering/10-10EZ%20High-level%20Architecture.png)
- [Sequence Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/engineering/sequence-diagram.md)
- [Application Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/engineering/architecture-diagram.md)
- [Frontend developer README](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/hca/README.md)
- [Prefill fields engineering research](https://app.zenhub.com/workspaces/vsa---10-10-team-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/27278)
- [Endpoints consumed and owned](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/engineering/Endpoints%20Information.md)

**Latest discovery research**
- [Research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/research/april-may-2021/end-user-discovery)
- [Research readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/april-may-2021/end-user-discovery/10-10EZ%20Discovery%20Research%20readout.pdf)

**Team resources**
- [Team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/team.charter.md)
- [Team Zenhub board](https://app.zenhub.com/workspaces/vsa---10-10-team-5fff0cfd1462b6000e320fc7/board)
- [Sprint Planning and Roadmap](https://docs.google.com/presentation/d/1ASalrxCcn-SXoNzz7ueIYQws97O6ROkXZznVch1mF-c/edit#slide=id.p1)
- [Quarterly planning GitHub board](https://github.com/orgs/department-of-veterans-affairs/projects/847/views/1?layout=board)

<br>


## Roadmap


**Now**
- Improve UX of Household information section

**Next**
- Update address design to align with design system and add option for Veterans abroad address and homeless consideration
- Redesign screener at application start for unauthenticated users

**Future**
- Short form for combat status Veterans
- Evaluate if some questions can be removed for all applicants 
- Facility selection redesign
- Improve Military history section
- Notifications: Confirmation Email/text (Intake Request sent to HEC to get on roadmap)
- Multilingual 


<br>


## Features and initiatives we worked on
This table includes links to the individual feature directory and the latest iteration (doc or code) in design or development.

| Feature (Github link) | AKA | Status |
| :--- | :--- | :--- |
| [Household section optimization](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Transition%20hub/In%20progress%20features/Household%20section.md) | N/A | Dev in progress |
| [10-10EZ Baseline Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Transition%20hub/In%20progress%20features/Baseline%20Study.md) | N/A | Research completed Jan-Feb 2023 |
| [Facility selection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Transition%20hub/In%20progress%20features/Facility%20selection.md) | Also similarly designed for 10-10CG use | In design |
| [Notiifcations: Confirmation Email](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Transition%20hub/In%20progress%20features/Confirmation%20Emails.md) | N/A | Pending ES roadmap schedule, HEC Team to inform us |
| [Short Form Expansion](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Transition%20hub/In%20progress%20features/Short%20Form%20Expansion.md) | Combat status | Initial discovery - Pending further discussions with stakeholders |

<br>


## Our team 2023 team roster

- Heather Justice | heather.justice1@va.gov / heather.justice@adhocteam.us - Product manager
- Nick Osmanski | nick.osmanski@va.gov / nick.osmanski@amida.com -- UX Design/Research
- Jessica Stump | jessica.stump@va.gov / jessica.stump@adhocteam.us - Sr UX Design/Research
- Matt Long | matthew.long@va.gov / matt.long@adhocteam.us - Sr Frontend Engineer
- Lihan Li | han.li@va.gov / lihan@adhocteam.us - Backend Engineer

## VA relationships

- Lauren Alexanderson | lauren.alexanderson@va.gov - Product Crew Lead
- Patrick Bateman | patrick.bateman@va.gov - Product Owner
- Katherine Lawyer | katherine.lawyer@va.gov - Product Owner
- Mark Dewey | mark.dewey@va.gov - Engineering Product Owner
- Stephen Barrs |stephen.barrs@va.gov - Engineering Product Owner
- Danielle Thierry | danielle.thierry@va.gov -- Content writer

**HEC (Health Eligibility Center) Program Team**
- **TBD** (main point of contact between the program and VA.gov) - Tarsha Tremble was previous HEC Project lead, and has moved to another position. As of 2/13/2023, we are still pending a new project lead.
- Edward Horne | edward.horne@va.gov -- Associate Director, HEC
- Stacey Echols  | stacey.echols@va.gov  --  Deputy Director, HEC
- Christopher Hawkins  | christopher.hawkins2@va.gov  -- Supervisory Management Analyst
- Zachariah Bell  | zachariah.bell@va.gov  -- Acting ECM Supervisory Program Specialist
- Cheylanda Griffith  | cheylanda.griffith@va.gov  --  Supervisory Program Specialist
- Kimberly Bostic | Kimberly.Bostic@va.gov -- Associate Director, QA division HEC
- Lindsey Peace | Lindsey.Peace@va.gov -- Assistant Associate Director, Income Verification division
- Jessica Soza | Jessica.Soza@va.gov -- Management & Program Analyst, BSO Business Policy (Paper forms)
- Annie Rice | Annie.Rice@va.gov -- Contact Representative office

**Enrollment System (ES)**
- Joshua Faulkner | joshua.faulkner@va.gov - Technical Director, EHBD


<br>


### Recurring stakeholder meetings

- 10-10EZ Online Application Update
   - HEC team and VA.gov team meet bi-weekly on Wednesdays at 2pm ET/11am PT for 1 hour
   - **TBD** is main POC for agenda



<br>

---
