# 10-10CG (Care Giver) Transition Hub
**Note:** These Transition Docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts.
<br>


>**Team transition document | TBD**
>
> The purpose of this transition document is to outline the state of 1010-CG product development as of TBD. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific "feature transition hubs" where you can find direct links to resources and references used during design and development.
>
> **Note:** The 10-10EZ health care application management was under the purview of the 10-10 Health Apps team, thus you will notice that some 10-10EZ documentation is intermixed with 10-10CG documentation folders. This hub page avoids this, please see the [10-10EZ transition hub (Feb 2023)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Transition%20hub/Transition%20Hub%20(updated%20Feb%202023).md) if you are looking for information on the health care application.


<br>


## Table of Contents
[Product context, portfolio, and artifacts](#product-context)

[Roadmap](#roadmap)

[Features and initiatives we worked on](#Features-and-initiatives-we-worked-on)

[Our team, VA relationships, and stakeholder meeting cadence](#Our-team-March-2022-team-roster)



<br>


## Product context
Team vision: An effortless online experience that allows Veterans and their Caregivers to easily apply for, track, and update Family Caregiver Program benefits. The MVP of the online 10-10CG was released in October of 2020 as an unauthenticated experience. We continue to iterate in order to improve the experience of applying for The Program of Comprehensive Assistance for Family Caregivers.

- Used by Veterans and Caregivers of disabled Veterans to apply for Caregiver benefits from the VA
- Caregiver benefits are services, support and education for Caregivers, so they can provide better care to their Veterans.
- Approx 5,000 submissions per month


<br>


### Product portfolio
**10-10CG Application for the Program of Comprehensive Assistance for Family Caregivers**
- [Staging link](https://staging.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction)
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Caregiver%20application%20product-outline.md)
- [Product Guide/Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Online-10-10CG-Product-Guide.docx)
- [Things to know](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/10-10CG%20-%20Things%20to%20Know.md) (various points of information we learned since the last transition in April 2022)
- [PM Resources folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/Product/PM%20Resources) for documents used in routines and research
- [Latest Stakeholder discussion on top processing errors/issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Meeting%20Notes/01-13-2023%20CG%20Stakeholder%20Touchbase.md)
     - We planned to use some of this information to conduct research with special attention to what might cause these errors, determine small changes we might make to reduce the errors, and potentially resolve with the Primary/Secondary clarification work.


<br>


### Product artifacts
- [Content source of truth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/1010cg-mvp/10-10CG-application-copy.md)
- [Page/User flow](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1632923499561/47a15bbef931c358b80a077c7085ede9b26dc25e?sender=u6ad375c1c8425e5bfec67027)
- - [Sketch file](https://www.sketch.com/s/5a676881-7aa8-4054-9b6e-34d86ced43d8) with wireflows and page designs (including proposals and experiments)
- [Staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
- [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/10-10CG%20Use%20Cases.md)
- [Various form info](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/10-10CG%20Form)


**Analytics**
- Analytics dashboard: 
     - [Domo](https://va-gov.domo.com/page/447193050) (consolidated forms dashboard)
     - [Google Analytics](https://analytics.google.com/analytics/web/#/dashboard/u4Zg-ougQpq-87e5dGIH_w/a50123418w177519031p184624291/_u.date00=20210501&_u.date01=20210524/)
- [Important Google Analytics Event Labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/metrics/Important%20Google%20Analytics%20event%20labels.md)
- [Backend Stats on DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?from_ts=1657212129534&to_ts=1657215729534&live=true)


**Engineering**
- [Architectural overview: example submissions flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10%20Architectural%20Overview.pdf)
- [High level view of systems](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10CG%20High-level%20Architecture%20.png)
- [Submission errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/ux-capture/future.md)
- [Frontend developer README](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/caregivers/README.md)
- [Endpoints consumed & owned](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/Endpoints%20Information.md)

**Initial discovery**
- [Initial discovery Discovery folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/discovery)
     - [Initial discovery User research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/discovery/Caregiver%20Discovery%20Sprint%201%20User%20Research%20Findings.pdf)
     - [Initial discovery Engineering](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/discovery/engineering)

**Team resources**
- [Team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/team-charter.md)
- [Team Zenhub board](https://app.zenhub.com/workspaces/vsa---10-10-team-5fff0cfd1462b6000e320fc7/board)
- [Sprint Planning and Roadmap](https://docs.google.com/presentation/d/1ASalrxCcn-SXoNzz7ueIYQws97O6ROkXZznVch1mF-c/edit#slide=id.p1)
- [Quarterly planning GitHub board](https://github.com/orgs/department-of-veterans-affairs/projects/847/views/1?layout=board)



<br>


## Roadmap

**Now**
- Discovery on improving the Facility Selection page
- Translate form into Spanish

**Next**
- Improve UX of Primary/Secondary Caregiver selection
- 10-10CG Baseline study

**Future**
- Translate form into Tagalog


### Features and initiatives we worked on
This table includes links to the individual feature directory.

| Feature (Github link) | AKA | Status |
| :--- | :--- | :--- |
| [Sign as a representative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Sign%20as%20a%20representative%20(In%20Prod%202022).md) |Formally called "POA" (power of attorney)| In production |
| [Mulesoft integration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Mulesoft%20integration%20(In%20Prod%202022)md) | Mule in the Middle, Mulesoft Proxy | In production |
| [Facility selection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Facility%20selection.md) | Also design for 10-10EZ consideration | In discovery |
| [Form language Translation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Form%20language%20Translation.md) | N/A | With Content team (Danielle Thierry) |
| [Primary/Secondary Caregiver selection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Primary%20and%20Secondary%20Caregiver%20selection.md) | Primary/Secondary clarification | In Discovery |
| [10-10CG Baseline Study]() | N/A | Pending completion of 10-10EZ Baseline study |


<br>



## Our team 2023 team roster

- Heather Justice | heather.justice1@va.gov / heather.justice@adhocteam.us - Product manager
- Nick Osmanski | nick.osmanski@va.gov / nick.osmanski@amida.com -- UX Design/Research
- Jessica Stump | jessica.stump@va.gov / jessica.stump@adhocteam.us - Sr UX Design/Research
- Lisa Zapson | lisa.zapson@va.gov / lisa.zapson@adhocteam.us - Frontend Engineer
- Matt Long | matthew.long@va.gov / matt.long@adhocteam.us - Sr Frontend Engineer
- Lihan Li | han.li@va.gov / lihan@adhocteam.us - Backend Engineer

## VA relationships

- Lauren Alexanderson | lauren.alexanderson@va.gov - Product Crew Lead
- Patrick Bateman | patrick.bateman@va.gov - Product Owner
- Katherine Lawyer | katherine.lawyer@va.gov - Product Owner
- Mark Dewey | mark.dewey@va.gov - Engineering Product Owner
- Stephen Barrs |stephen.barrs@va.gov - Engineering Product Owner
- Danielle Thierry | danielle.thierry@va.gov - Content writer

**Caregiver Program Business Unit Team**
- Matt Brown | Matthew.Brown4@va.gov  - Assoc. Director (leads the relationship between the program and VA.gov)
- Marla Clayton |marla.clayton@va.gov - Technical Project Manager
- Tiffany Puckett | Tiffany.Puckett@va.gov  - Health System Specialist
- Tamara Scott | tamara.scott@va.gov  - Social Worker: Caregiver Support Program
- Margaret Featherstone | Margaret.Featherston@va.gov  - Caregiver Support Program Manager
- Hollie-Lyn James | hollie.speer@va.gov - Health System Specialist
- Rebecca (Becca) Bixler | rebecca.bixler@va.gov - Health System Specialist

**CARMA team**
- Thamaraiselvi (Tham) Kaliannan | THAMARAISELVI.KALIANNAN@va.gov - PM, scheduling
- Paul Kuprionas | paul.kuprionas@va.gov - CARMA tech lead
- Dugar, Ramesh | ramesh.dugar@va.gov - CARMA engineer
- David Wald | David.Wald@va.gov - testing/integration lead
- Mili Riddout | mili.riddout@salesforce.com - 

### Recurring stakeholder meetings

- Touchbase with Va.gov & Platform Team for Caregivers
   - Caregivers business team, CARMA team, and VA.gov team meet
   - Depending on the current projects we meet once a week or every other week for ~1 hour on Fridays
   - Tham manages the agenda, work with her to share topics
   - 10-10 team responsible to track and share metrics for total online applications submitted - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?from_ts=1657212129534&to_ts=1657215729534&live=true) source

![image](https://user-images.githubusercontent.com/92328831/204030100-c83dca4c-b5e2-4b86-9049-2a396c35d5ae.png)

![image](https://user-images.githubusercontent.com/92328831/204030164-84173342-3963-4d75-910a-4530ce29c1d1.png)




<br>

---
