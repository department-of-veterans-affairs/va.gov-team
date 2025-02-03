# 686c/674 Transition Hub

**Updated February 2025**

> The purpose of this transition document is to outline the current state of 21-686c, 21-674, and 21-0538 forms' product development. It serves as a "front door" to documentation and resources collected during the course of product design and development from March 2023 through March 2025. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development. These Transition Docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts.

## Table of Contents
[Product context, portfolio, and artifacts](#product-context)

[Roadmap](#roadmap)

[Features and initiatives we worked on](#Features-and-initiatives-we-worked-on)

[Our team, VA relationships, and stakeholder meeting cadence](#Our-team-2024/25-roster)

## Product context 
- The online 21-686c form allows Veterans to add or remove dependents to/from their VA disability compensation or pension benefits. If a Veteran is supporting a dependent, they may be eligible to receive additional disability or pension compensation.
   - [About VA Form 21-686c (Application Request to Add and/or Remove Dependents)](https://www.va.gov/find-forms/about-form-21-686c/)
   - Launched on VA.gov: May 2018 with 674 form flow
   - 686c annual submission volume: 342,750 (2024)
   - Current pdf version on VA.gov: AUG 2022
- The online form flow for the 21-686c form is integrated with the 21-674 form (Request for Approval of School Attendance). The 674 form is used to extend benefits to a Veteran’s child if they are between 18-23 years old and attending school full time. Normally, a minor child dependent ages out of benefits when they turn 18 unless a 674 is filed indicating the child is in school.
   - [About VA Form 21-674 (Request for Approval of School Attendance)](https://www.va.gov/find-forms/about-form-21-674/)
   - Launched on VA.gov: May 2018 with 686 form flow
   - 674 annual submission volume: 73,300 (2024)
   - Current pdf version on VA.gov: OCT 2021
- The 21-0538 (Mandatory Verification of Dependents) is currently a paper form that this team was tasked with turning into an online tool. Preliminary research on a lightweight prototype was completed in Feb/Mar 2025.
   - [About VA Form 21-0538 (Mandatory Verification of Dependents)](https://www.va.gov/find-forms/about-form-21-0538/)
   - 113,928 paper forms submitted per year

### Product Goal
Make the online dependent experience as easy to complete and cohesive as possible, while ensuring that Veterans verify dependent information on a regular basis and that submissions are reliable and processed as quickly as possible.

### Product portfolio
#### 21-686c Add/Remove Dependent and 21-674 Request Approval of School Attendance
- [Staging link](https://staging.va.gov/view-change-dependents/add-remove-form-21-686c-v2/introduction)
- [Production link](https://www.va.gov/view-change-dependents/add-remove-form-21-686c-v2/introduction)
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/README.md)
- Product Guide/Contact Center Guide

#### 21-0538 Mandatory Verification of Dependents (paper form)
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/README.md)
- [Initative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/initiative-brief-dependent-verification-tool.md)
- [Form Flow (proposed)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=0-1716382766670)
- [Wireframes (proposed)](https://www.figma.com/design/bvj72inycD0iZkuCbjYTWL/Dependent-Verification-MVP?node-id=59-960&t=yWIz3IUP2uFChYib-0) (Figma)
- [MVP Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=0-1723479332670)
- [IA/User Flow Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=522-1737736233308)
- [MVP Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/research/2025-02-dependents-verification-mvp-research)

### Product artifacts
- Content source of truth
- [Page/User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1687976281975/2a9c6ca9ea6d955afa7977c777bbb72b15280903?sender=u934f98f179a86c76e6ee9592)
- [Wireframes and page designs](https://www.figma.com/file/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?type=design&node-id=8-9&mode=design&t=kcdjZspxOR8ocdvT-0)
- Staging users
- [Priorities](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692908527043/0da94b7ded52e8a943d798bcb8ae39697c2fb56f?wid=0-1702913614567)

### Analytics dashboard:
- Domo (none)
- Google Analytics (none)
- [Backend Stats on DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/vad-969-xqc/benefits-dependents-686674?fromUser=false&refresh_mode=sliding&from_ts=1729703196402&to_ts=1737479196402&live=true)
- [Backend monitoring](https://vagov.ddog-gov.com/monitors/manage?q=dependent&order=desc)
- [Backup submission reporting](https://vagov.ddog-gov.com/dashboard/66t-jtz-guk/686c-674-backup-submission-reporting?fromUser=false&refresh_mode=sliding&from_ts=1736874419874&to_ts=1737479219874&live=true)
- [Count of claims off-ramped for manual processing](https://vagov.ddog-gov.com/logs?query=%40payload.txt%3AClaim%5C%20set%5C%20to%5C%20manual%5C%20by%2A&agg_m=count&agg_m_source=base&agg_q=%40payload.txt&agg_q_source=base&agg_t=count&cols=host%2Cservice%2C%40payload.txt&fromUser=true&messageDisplay=inline&refresh_mode=paused&storage=flex_tier&stream_sort=desc&top_n=10&top_o=top&viz=toplist&x_missing=true&from_ts=1704088800000&to_ts=1726080480000&live=false)
- Real User Monitoring (RUM) Dashboard (none)

### Engineering
- High level view of systems
- Sequence Diagram
- Application Diagram
- [Backup submission diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1697740873991/4be42fcadc013be6b3d65bd620522ee68e8e0faf?sender=u0e8ac1d6d7681bb7e1b80558)
- Frontend developer README
- Endpoints consumed and owned
- Code Repository
   - [Vets-API](https://github.com/department-of-veterans-affairs/vets-api)
   - [Vets-Website](https://github.com/department-of-veterans-affairs/vets-website)
 
### Latest Discovery Research
- [Research Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/research)
- [Dependents Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/research/2023-09-dependents-research)
- [Dependency Verification Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/research/2025-02-dependents-verification-mvp-research)

### Team resources
- [Team Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/12?sliceBy%5Bvalue%5D=686%2F674) (GitHub)
- Sprint Planning
- [Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692908527043/0da94b7ded52e8a943d798bcb8ae39697c2fb56f?wid=120-1729780466015) (Mural)
- Ticketing
   - Team label: dependents-benefits
   - Product label: 686, 674, dependent-verification (if ticket is specific to one, but not all forms)
   - Workstream label: discovery, product, design, or engineering + frontend or backend

## Roadmap
### Done (recently)
- Updated form flow to produce Aug 2022 version of pdf on Aug 13, 2024.
- [Updated form flow](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1292) to use v3 design system components, improve user experience, and comply with current accessibility requirements.
- Send [674-only claims from VA.gov directly to RBPS](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97875) rather than flagging them for manual processing.
- Completed concept testing for the [MVP prototype](https://www.figma.com/design/bvj72inycD0iZkuCbjYTWL/Dependent-Verification-MVP?node-id=59-960&t=yWIz3IUP2uFChYib-0) of dependent verification tool. Intent is to capture “no changes to dependents” through an online tool on VA.gov and submit a 21-0538 (dependent verification) form on the Veteran’s behalf.
- [Met with CAIA](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84170) in January 2025 to discuss [IA of dependent experience](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=91-1737736233308) and [improvement opportunities](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=522-1737736233308).

### Now
- Test pension-related [income questions](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76468) and [API](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76465)

### Next
- Build out MVP of dependent verification tool to capture “no changes to dependents” and auto-submit a 21-0538 form. ([milestone for this project](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1409))
- Add claim submission in-progress email and update confirmation email to align with requirements from Zero Silent Failure initiative. Seperate existing confirmation email into seperate emails for each claim submission type. ([milestone for this project](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1420))
- Code modularization
- Auto fill spouse and dependent information ([discovery ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102343))
- [Migrate to RESTful APIs](https://github.com/department-of-veterans-affairs/va.gov-team/issues/91282)
- Determine why submission and saved dates do not match MyVA. ([submission date](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101056) and [saved date](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101040))

### Future
- Add the ability to [download a pdf of the submitted claim](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/13?sliceBy%5Bvalue%5D=ND%2FD+ZSF+%7C+Stage+5+%28Confirmation+page+full+update%29) from the confirmation page (as part of the Zero Silent Failure initiative). This work was put on hold until another team implements a solution.
- Work with MyVA to update the [status card](https://design.va.gov/patterns/help-users-to/stay-informed-of-their-application-status#status-in-myva) shown to claimants as part of the Zero Silent Failure initiative.
- Integrate dependent management into the MyVA profile experience. ([milestone for this project](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102346))
- Integrate dependent parent form (21-509) into 686/674 form flow on VA.gov. ([discovery ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102348))
- Explore reminders for life events ([discovery ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102351))


## Features and initiatives we worked on
This table includes links to the individual feature directory and the latest iteration (doc or code) in design or development.
|Feature|Completed|
|-------|---------|
|Backup submission pathway implemented|Oct 5, 2023|
|Code Yellow 1 closed. All failed dependency claims were rememdiated.|Aug 24, 2024|
|Updated VA.gov to submit the Aug 2022 version of the 686c pdf (instead of the Sep 2018 version)|Aug 13, 2024|
|Updated VA.gov to submit the Oct 2021 version of the 674 pdf (instead of the Jun 2019 version)|Aug 13, 2024|
|“Action needed” emails to alert Veterans of a claim failure implemented|Nov 12, 2024|
|Annual net worth value updated from $155,356 to $159,240. It needs to be manually updated every year by November 30. Ticket to automate update is [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96876).| Dec 2, 2024|
|[686/674 form updated to v3 components](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/form_updates/Initiative-Brief-686-674-Form-Updates.md)| Mar 2025|
|User research on dependency verification tool prototype|Feb/Mar 2025| 

### Collab Cycle Artifacts
- [Dependent Verification](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83353) | [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/initiative-brief-dependent-verification-tool.md) | [CAIA Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84170)
- [Dependent form updates](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74059) | [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/form_updates/Initiative-Brief-686-674-Form-Updates.md) | [CAIA Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75068)
- [CAIA Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89314) for dependent card updates

### Our team 2024/25 roster
- Product manager: Laura Steele | laura.steele1@va.gov / laura.steele@coforma.io
- Engineering Lead: Matthew Knight | matthew.knight3@va.gov / matt.knight@coforma.io
- Delivery Lead: Amy Plange | amy.plange@va.gov/ amy.plange@coforma.io
- UX Design/Research Lead: Ruben Sun | ruben.sun@va.gov / ruben@coforma.io
- UX Design/Research: Fiorella Geedi | fiorella.GeediCotrina@va.gov / fiorella.geedi@coforma.io
- UX Design/Research: Ajia Wallace | ajia.wallace@va.gov / ajia.wallace@softrams.com
- Full Stack Engineer: Evan Smith | evan.smith6@va.gov / evan.smith@oddball.io
- Full Stack Engineer: Micah Frazier | micah.frazier@va.gov / micah.frazier@oddball.io
- Frontend Engineer: Sean Midgley | sean.midgley3@va.gov / sean.midgley@oddball.io
- Frontend Engineer: Dakota Larson | dakota.larson@va.gov / dakota.larson@oddball.io
- QA Engineer: Jon Keister | jonathan.keister@va.gov / jonathan.keister@oddball.io

### VA Leads
- Product Crew Lead: Sanja Bajovic | Sanja.Bajovic2@va.gov
- Engineering Crew Lead: Sanja Bajovic | Sanja.Bajovic2@va.gov
- Design Crew Lead: Dene Gabaldon | dene.gabaldon@va.gov

### VBA stakeholders
|Name|Title|Office|Email|Description|
|----|-----|------|-----|-----------|
|Kevin Schneider |Senior Automation Strategist |Office of Benefits Automation (OBA) | Kevin.schneider1@va.gov |SME on dependency claim submissions and dependency verification.|
|David Reis |Senior Automation Strategist| Office of Benefits Automation (OBA)|david.reis@va.gov |Kevin’s backup. SME on dependency claim submissions and dependency verification. Expert on VBMS diary entries.|
|Kayce White|Program Analyst|Compensation Services|Kayce.White@va.gov|SME on form pdfs. Manages the pdf forms. Makes updates to the pdfs, fixes fields and formatting.|
|Linda Ciston|Contractor|RBPS|linda.ciston@va.gov |RBPS expert, retired from VA, but still works limited hours.|
|Bahaeddin (Baha) Abukhaled|Contractor|RBPS |BahaEddin.AbuKhaled@va.gov | Linda’s replacement. RBPS SME.|
|Yvette Allmond|Management Analyst|Office of Mission Support|yvette.allmond@va.gov | Source for providing unlocked pdf files that can be edited by VA.gov.|

#### Reoccuring Stakeholders Meetings
- Bi-weekly Dependents Design Sync with Kevin, design/research, product, and VA Leads
- Bi-weekly Product Sync with VA Leads, product manager, and delivery lead
- Weekly engineering sync with VA Engineering Crew Lead and team Engineering Lead
- [Weekly design sync](https://dsva.slack.com/docs/T03FECE8V/F0839KD75K8) with VA Design Crew Lead, team design/researchers, product manager
