# VSA 1010-CG Transition Document

<br>

>**Team transition document | March 2022**
>
> The purpose of this transition document is to outline the current state of 1010-CG product development. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.

<br>

## Table of Contents
[Product context (PM)](#product-context)

[Product portfolio (PM)](#product-portfolio)

[Product approach (Team)](#product-approach)

[VA relationships (Team)](#va-relationships)

## Product context 
Team vision: A seamless online experience that allows Veterans and caregivers to easily apply for, track, and manage care-related benefits. The MVP of the online 10-10CG was released in October of 2020 as an unauthenticated experience. We continue to iterate in order to improve the experience of applying for The Program of Comprehensive Assistance for Family Caregivers.

- Allows the caregivers of disabled Veterans to apply for benefits from the VA
- Approx 4,000 submissions per month
- Login is not available


## Product portfolio
### 10-10CG Application for the Program of Comprehensive Assistance for Family Caregivers
- [Staging link](https://staging.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction)
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/product/product-outline.md)
- [Product Guide](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/caregivers/README.md#:~:text=Product%20Outline-,Product%20Guide,-Submission%20Process)
- Analytics dashboard: [Domo](https://va-gov.domo.com/page/1905395623?userId=1492182741) (Original dashboard, no longer maintained), [Domo](https://va-gov.domo.com/page/447193050) (New consolidated forms dashboard), and [Google Analytics](https://analytics.google.com/analytics/web/#/dashboard/u4Zg-ougQpq-87e5dGIH_w/a50123418w177519031p184624291/_u.date00=20210501&_u.date01=20210524/)


#### Now/Next/Later Roadmap

**Now**
- Improve acceptable rate of representative documents that are uploaded by user
- CARMA Mulesoft Implementation
- Report Automation
- Add Failure alerts
- Send Veteran vs. Legal representative indicator with payload

**Next**
- Improve UX of Primary/Secondary Caregiver selection
- Facility selection redesign
- Primary Caregiver address same as Veteran option to just check box


## Product approach 

### Artifacts
- [Team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/team-charter.md#what-we-work-on)
- [Content source of truth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/1010cg-mvp/10-10CG-application-copy.md)
- [Important Google Analytics Event Labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/metrics/Important%20Google%20Analytics%20event%20labels.md)
- [Staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
- [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/use-cases.md)

**Initial discovery**
- [Discovery folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/discovery)
     - [User research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/discovery/Caregiver%20Discovery%20Sprint%201%20User%20Research%20Findings.pdf)
     - [Engineering](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/discovery/engineering)



### Research and design
- [**Reasearch and design hub page**]()
- [Sign as a representative]()
- [Facility selection]()
- [Primary/Secondary Caregiver selection]()

### Engineering
- [Architectural overview: example submissions flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10%20Architectural%20Overview.pdf)
- [High level view of systems](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10CG%20High-level%20Architecture%20.png)
- [Submission errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/ux-capture/future.md)
- [Frontend developer README](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/caregivers/README.md)

**Mulesoft documentation**
- [CARMA integration roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/roadmap%20-%20carma%20mulesoft%20integration.pdf)

<br>

## VA relationships

### Contacts
- Lauren Alexanderson | lauren.alexanderson@va.gov -- Product owner
- Christopher.Froehlich | Christopher.Froehlich@va.gov -- Product owner

**Caregiver Program Business Unit Team**
- Matt Brown| email.address@va.gov -- Assoc. Director (leads  the relationship between the program and VA.gov)
- Tiffany Puckett | email.address@va.gov -- 
- Tamara Scott | email.address@va.gov -- 
- Margaret Featherstone | email.address@va.gov -- 
- Hollie-Lyn James | email.address@va.gov -- 
- Rebecca Bixler | email.address@va.gov --
- Aaron Sudholdt  | email.address@va.gov -- PM, scheduling 

**CARMA team**
- Caitlin Reyna | email.address@va.gov - CARMA PM
- Paul Kuprionas | email.address@va.gov - CARMA tech lead
- Ranga, Ramesh | email.address@va.gov - CARMA engineers
- David Wald | email.address@va.gov - testing/integration lead


### Meetings

- Touchbase with Va.gov & Platform Team for Caregivers
   - Caregivers business team, CARMA team, and VA.gov team meet
   - Depending on the current projects we meet once a week or every other week


### Open questions

- Open question lorem ipsum dolor sit amet?
- Open question lorem ipsum dolor sit amet?
- Open question lorem ipsum dolor sit amet?

<br>

---


