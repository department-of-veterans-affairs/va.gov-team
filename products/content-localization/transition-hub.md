# VSA Content and Localization Transition Hub

<br>

>**Team transition document | March 2022**
>
> The purpose of this transition document is to outline the state of 1010-CG product development as of March 2022. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific "feature transition hubs" where you can find direct links to resources and references used during design and development.


<br>

## Table of Contents
[Product context, portfolio, and artifacts](#product-context)


[Our team, VA relationships, and stakeholder meeting cadence](#Our-team-March-2022-team-roster)



<br>


## Product context 
Team vision: A seamless online experience that allows Veterans and Caregivers to easily apply for, track, and manage care-related benefits. The MVP of the online 10-10CG was released in October of 2020 as an unauthenticated experience. We continue to iterate in order to improve the experience of applying for The Program of Comprehensive Assistance for Family Caregivers.

- Used by Veterans and Caregivers of disabled Veterans to apply for Caregiver benefits from the VA
- Approx 4,000 submissions per month
- Login is not available


<br>


### Product portfolio
**10-10CG Application for the Program of Comprehensive Assistance for Family Caregivers**
- [Staging link](https://staging.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction)
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/product/product-outline.md)
- [Product Guide/Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/Online-10-10CG-Product-Guide-Updated-05.26.2021.docx)


<br>


### Product artifacts
- [Content source of truth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/1010cg-mvp/10-10CG-application-copy.md)
- [User flow](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1632923499561/47a15bbef931c358b80a077c7085ede9b26dc25e?sender=u6ad375c1c8425e5bfec67027)
- [Staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
- [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/use-cases.md)


**Analytics**
- Analytics dashboard: [Domo](https://va-gov.domo.com/page/1905395623?userId=1492182741) (Original dashboard, no longer maintained), [Domo](https://va-gov.domo.com/page/447193050) (New consolidated forms dashboard), and [Google Analytics](https://analytics.google.com/analytics/web/#/dashboard/u4Zg-ougQpq-87e5dGIH_w/a50123418w177519031p184624291/_u.date00=20210501&_u.date01=20210524/)
- [Important Google Analytics Event Labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/metrics/Important%20Google%20Analytics%20event%20labels.md)


**Engineering**
- [Architectural overview: example submissions flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10%20Architectural%20Overview.pdf)
- [High level view of systems](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10CG%20High-level%20Architecture%20.png)
- [Submission errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/ux-capture/future.md)
- [Frontend developer README](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/caregivers/README.md)

**Initial discovery**
- [Initial discovery Discovery folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/discovery)
     - [Initial discovery User research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/discovery/Caregiver%20Discovery%20Sprint%201%20User%20Research%20Findings.pdf)
     - [Initial discovery Engineering](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/discovery/engineering)

**Team resources**
- [Team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/team-charter.md#what-we-work-on)
- [Team Zenhub board](https://app.zenhub.com/workspaces/vsa---10-10-team-5fff0cfd1462b6000e320fc7/board)
- [Quarterly planning Mural board](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1632923480744/cef1d0973dbaa76b14c1148dcce780af4f4285fe?sender=u940e2a1fd182724d6c379496)



<br>


## Roadmap

**Now**
- Improve acceptance rate of representative documents that are uploaded by user 
- CARMA Mulesoft Implementation
- Report Automation
- Add Failure alerts
- Send Veteran vs. Legal representative indicator with payload

**Next**
- Improve UX of Primary/Secondary Caregiver selection
- Facility selection redesign
- Primary Caregiver address same as Veteran option to just check box

**Future**
- Rewrite Introduction page
- Notifications: Confirmation Email/text
- Multilingual 
 

### Features and initiatives we worked on
This table includes links to the individual feature directory.



<br>



## Our team March 2022 team roster

- Sharon Kasimow | sharon.Kasimow@va.gov -- Team product manager
- Dené Gabaldón | dene.gabaldon@va.gov -- UX designer/researcher
- Lisa Zapson | lisa.zapson@va.gov -- Frontend engineer
- Kevin Musiorski | kevin.musiorski@va.gov -- Backend engineer
- Lihan Li | lihan@adhocteam.us -- Backend engineer

## VA relationships

- Lauren Alexanderson | lauren.alexanderson@va.gov -- Product owner
- Christopher Froehlich | Christopher.Froehlich@va.gov -- Product owner
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
- Caitlin Reyna | caitlin.reyna@va.gov - CARMA PM
- Paul Kuprionas | paul.kuprionas@va.gov - CARMA tech lead
- Dugar, Ramesh | ramesh.dugar@va.gov - CARMA engineer
- David Wald | David.Wald@va.gov - testing/integration lead



### Recurring stakeholder meetings

- Touchbase with Va.gov & Platform Team for Caregivers
   - Caregivers business team, CARMA team, and VA.gov team meet
   - Depending on the current projects we meet once a week or every other week for ~1 hour



<br>

---
