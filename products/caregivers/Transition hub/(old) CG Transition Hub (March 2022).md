# VSA 10-10CG (Care Giver) Transition Hub
**Note:** These Transition Docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts.
<br>


>**Team transition document | March 2022**
>
> The purpose of this transition document is to outline the state of 1010-CG product development as of March 2022. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific "feature transition hubs" where you can find direct links to resources and references used during design and development.
>
> **Note:** The 10-10EZ health care application management was under the purview of the VSA-Caregivers team, thus you will notice that some 10-10EZ documentation is intermixed with 10-10CG documentation folders. This hub page avoids this, please see the [VSA 10-10EZ transition hub](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Transition%20hub/Transition%20Hub%20(March%202022).md) if you are looking for information on the health care application.


<br>


## Table of Contents
[Product context, portfolio, and artifacts](#product-context)

[Roadmap](#roadmap)

[Features and initiatives we worked on](#Features-and-initiatives-we-worked-on)

[Our team, VA relationships, and stakeholder meeting cadence](#Our-team-March-2022-team-roster)



<br>


## Product context
Team vision: A seamless online experience that allows Veterans and Caregivers to easily apply for, track, and manage care-related benefits. The MVP of the online 10-10CG was released in October of 2020 as an unauthenticated experience. We continue to iterate in order to improve the experience of applying for The Program of Comprehensive Assistance for Family Caregivers.

- Used by Veterans and Caregivers of disabled Veterans to apply for Caregiver benefits from the VA
- Approx 5,000 submissions per month


<br>


### Product portfolio
**10-10CG Application for the Program of Comprehensive Assistance for Family Caregivers**
- [Staging link](https://staging.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction)
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Caregiver%20application%20product-outline.md)
- [Product Guide/Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/Online-10-10CG-Product-Guide-Updated-05.26.2021.docx)
- [Up to date information and things to know](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/10-10CG%20Form)


<br>


### Product artifacts
- [Content source of truth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/1010cg-mvp/10-10CG-application-copy.md)
- [User flow](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1632923499561/47a15bbef931c358b80a077c7085ede9b26dc25e?sender=u6ad375c1c8425e5bfec67027)
- [Staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
- [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/10-10CG%20Use%20Cases.md)


**Analytics**
- Analytics dashboard: [Domo](https://va-gov.domo.com/page/447193050), and [Google Analytics](https://analytics.google.com/analytics/web/#/dashboard/u4Zg-ougQpq-87e5dGIH_w/a50123418w177519031p184624291/)
- [Important Google Analytics Event Labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/metrics/Important%20Google%20Analytics%20event%20labels.md)
- [Backend Stats on DataDog Dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team?from_ts=1648597677333&to_ts=1649202477333&live=true) (need Datadog credentials)


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
- [Team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/team-charter.md#what-we-work-on)
- [Team Zenhub board](https://app.zenhub.com/workspaces/vsa---10-10-team-5fff0cfd1462b6000e320fc7/board)
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
| [Sign as a representative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Sign%20as%20a%20representative.md) |Formally called "POA" (power of attorney)| In production |
| [Mulesoft integration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Mulesoft%20integration.md) | Mule in the Middle, Mulesoft Proxy | In production |
| [Facility selection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Facility%20selection.md) | Also design for 10-10EZ consideration | In discovery |
| [Form language Translation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/Form%20Language%20Translation) | N/A | With Content team (Danielle Thierry) |
| [Primary/Secondary Caregiver selection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Primary%20and%20Secondary%20Caregiver%20selection.md) | Primary/Secondary clarification | In Discovery |
| [10-10CG Baseline Study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/research/2023-01-Baseline%20Task%20Research) | N/A | Pending completion of 10-10EZ Baseline study |


<br>



## Our team 2023 team roster

- Heather Justice | heather.justice1@va.gov -- Team product manager
- Jessica Stump | jessica.stump@va.gov -- Sr. UX designer/researcher
- Nick Osmanski | nick.osmanski@amida.com -- UI/UX designer/researcher
- Lisa Zapson | lisa.zapson@va.gov -- Frontend engineer
- Matt Long | matt.long@va.gov --  Frontend engineer
- Lihan Li | lihan@adhocteam.us -- Backend engineer

## VA relationships

- Lauren Alexanderson | lauren.alexanderson@va.gov -- Product Lead
- Patrick Bateman | patrick.bateman@va.gov -- Product Owner
- Katherine Lawyer | katherine.lawyer@va.gov -- Product Owner
- Stephen Barrs | stephen.barrs@va.gov -- Engineering Lead
- Mark Dewey | mark.dewey@va.gov -- Engineering Lead
- Danielle Thierry | danielle.thierry@va.gov -- Content writer

**Caregiver Program Business Unit Team**
- Matt Brown | Matthew.Brown4@va.gov  -- Assoc. Director (leads  the relationship between the program and VA.gov)
- Tiffany Puckett | Tiffany.Puckett@va.gov  -- Health System Specialist
- Tamara Scott | tamara.scott@va.gov  -- Social Worker: Caregiver Support Program
- Margaret Featherstone | Margaret.Featherston@va.gov  -- Caregiver Support Program Manager
- Hollie-Lyn James | hollie.speer@va.gov -- Health System Specialist
- Rebecca Bixler | rebecca.bixler@va.gov -- Health System Specialist
- Aaron Sudholdt  | aaron.sudholt@va.gov -- PM, scheduling

**CARMA team**
- Thamaraiselvi Kaliannan | thamaraiselvi.kaniannan@va.gov - CARMA PM
- Paul Kuprionas | paul.kuprionas@va.gov - CARMA tech lead
- Ramesh Dugar | ramesh.dugar@va.gov - CARMA engineer
- David Wald | David.Wald@va.gov - testing/integration lead



### Recurring stakeholder meetings

- Bi-weekly Friday Touchbase with stakeholders for Caregivers
   - Caregivers business team, Mulesoft/Salesforce/CARMA team, and VA.gov team meet
   - Depending on the current projects we meet once a week or every other week for ~1 hour



<br>

---
