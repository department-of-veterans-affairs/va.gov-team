# VSA 10-10EZ Transition Hub

<br>

>**Team transition document | March 2022**
>
> The purpose of this transition document is to outline the current state of 1010-EZ product development. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.
> 
> **Note:** The 10-10EZ management was under the purview of the VSA-Caregivers team, thus you will notice that some links lead to va.gov-team/products/caregivers/10-10EZ/. Moving forward 10-10EZ documentation should live in va.gov-team/products/health-care/application/va-application/ If you're looking for information about the 10-10CG (Caregiver application) visit [10-10CG Transition Hub](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/README.md).


<br>

## Table of Contents
[Product context, portfolio, and artifacts](#product-context)

[Roadmap](#roadmap)

[Features and initiatives we worked on](#Features-and-initiatives-we-worked-on)

[Our team, VA relationships, and meeting cadence](#Our-team-March-2022-team-roster)


<br>

## Product context 
Team vision: A seamless online experience that allows Veterans and Caregivers to easily apply for, track, and manage care-related benefits. The MVP of the online 10-10CG was released in October of 2020 as an unauthenticated experience. We continue to iterate in order to improve the experience of applying for The Program of Comprehensive Assistance for Family Caregivers.

- Used by Veterans to apply for health care
- Approx. 8,000 submissions per month
- Login is available, but not required
     - Some fields are prefilled for authenticated users
     - Authenticated users can "save in progress" and return to complete their application


<br>


### Product portfolio
**10-10EZ Application VA health care**
- [Staging link](https://staging.va.gov/health-care/apply/application/introduction)
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/health-benefits/healthcare-application/product-outline.md)
- [Product Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/health-benefits/healthcare-application/HCA.Product.Guide.docx)
- Analytics dashboard: [Domo](https://va-gov.domo.com/page/980067552) (Original dashboard, no longer maintained), [Domo](https://va-gov.domo.com/page/447193050) (New consolidated forms dashboard), and [Google Analytics](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/gSXa5lOYRyuXpauKyXSYug/a50123418w177519031p184624291/_u.date00=20210301&_u.date01=20210524/)


<br>


### Product artifacts
- [Content source of truth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10EZ/10-10EZ-application-copy.md)
- [User flow](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1632923531828/474bfdde942c22a0df26ad416a0b23e36b834d4a?sender=u6ad375c1c8425e5bfec67027)
- [Important Google Analytics Event Labels]()
- [Staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
- [Use cases]()
- [Call center guide](

**Engineering**
- [Architectural overview: example submissions flow]()
- [High level view of systems](
- [Frontend developer README](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/hca/README.md)


**Team resources**
- [Team charter](
- [Team Zenhub board](https://app.zenhub.com/workspaces/vsa---10-10-team-5fff0cfd1462b6000e320fc7/board)
- [Quarterly planning Mural board](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1632923480744/cef1d0973dbaa76b14c1148dcce780af4f4285fe?sender=u940e2a1fd182724d6c379496)


<br>


## Roadmap

**Now**
- Improve acce

**Next**
- Improve U


**Future**
- Notifications: Confirmation Email/text
- Multilingual 


<br>


## Features and initiatives we worked on
This table includes links to the individual feature directory and the latest iteration (doc or code) in design or development.

| Feature (Github link) | AKA | Status (Latest feature link) |
| :--- | :--- | :--- |
| [Short form]() |Formally called "auto-qualify"| [In development]() |
| [Facility selection]() | Also designed for 10-10CG use | [In design]() |
| [Household information section]() | N/A | [In discovery]() |
| [Locked MPI]() | Veteran Name, DOB, SSN locked when authenticated | [In production]() |
| [SIGI]() | Self-identified gender identity | [In staging]() |
| [American Indian question]() | N/A | [In staging]() |
| [Notifications]() | Email notifications for in progress reminders and application submission | [In discovery]() |
| [Add Medicare claim number]() | N/A | [In discovery]() |
| [Redesign screener at application start for unauthenticated users]() | N/A | [Not started]() |

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

**HEC (Health Eligibility Center) Program Team**
- Tarsha Tremble | tarsha.tremble@va.gov -- Management Analyst HEC, scheduling (main point of contact between the program and VA.gov)
- Stacey Echols  | stacey.echols@va.gov  --  Deputy Director, HEC
- Dionne Dent-Lockett  | dionne.dent-lockett@va.gov  --  Director, HEC
- Christopher Hawkins  | christopher.hawkins2@va.gov  -- Supervisory Management Analyst
- Zachariah Bell  | zachariah.bell@va.gov  -- Acting ECM Supervisory Program Specialist
- Cheylanda Griffith  | cheylanda.griffith@va.gov  --  Supervisory Program Specialist

**Enrollment System (ES)**
- Joshua Faulkner | joshua.faulkner@va.gov - Technical Director, EHBD


<br>


### Meetings

- 10-10EZ Online Application Update
   - HEC team and VA.gov team meet
   - We meet every other week for ~1 hour



<br>

---
