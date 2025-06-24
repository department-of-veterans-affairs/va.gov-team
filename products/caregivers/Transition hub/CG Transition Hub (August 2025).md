# **10-10CG (Caregiver program) Transition Hub**

**Updated June 24, 2025**

**Note:** These Transition Docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts beyond the last update date.
>**Team transition document**
>The purpose of this transition document is to outline the state of 10-10CG product development. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific "feature transition hubs" where you can find direct links to resources and references used during design and development.
>
>**Note:** The 10-10EZ health care application management was under the purview of the 10-10 Health Apps team. You may find some intermixed documentation; however, this hub focuses solely on the 10-10CG.  If you're looking for information about the 10-10CG (Caregiver application) or the 10-10EZ Veteran Health care application, please refer to their dedicated transition documents.
>- [10-10EZ Transition Hub document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Transition%20hub/EZ%20Transition%20Hub%20(August%202025).md)
>- [10-10EZR Transition Hub document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Transition%20hub/EZR%20Transition%20Hub%20(August%202025).md)

## **Table of Contents**
- [Product context, portfolio, and artifacts](#product-context)
- [Roadmap](#roadmap)
- [Features and initiatives we worked on](#Features-and-initiatives-we-worked-on)
- [Our team, VA relationships, and stakeholder meeting cadence](#Our-team,-VA-relationships,-and-stakeholder-meeting-cadence)
- [Outstanding Questions and Action Items](#Outstanding-Questions-and-Action-Items)

## **Product context**
**Team Vision:** An effortless online experience that allows Veterans and their Caregivers to easily apply for, track, and update Family Caregiver information. The MVP of the online 10-10CG was released in October of 2020 as an unauthenticated experience. We continue to iterate in order to improve the experience of applying for The Program of Comprehensive Assistance for Family Caregivers.
* Used by Veterans and Caregivers of disabled Veterans to apply for Caregiver benefits from the VA.
* Caregiver benefits are services, support and education for Caregivers, so they can provide better care to their Veterans.
* Unauthenticated experience only at this time.
* Approximately 6,500 submissions per month.


### **Product portfolio**

**10-10CG Application for the Program of Comprehensive Assistance for Family Caregivers**
* [Staging link](https://staging.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction)
* [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers)
* [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Caregiver%20application%20product-outline.md)
* [Product Guide/Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Current%20PDF%20Form%20%26%20Product%20Guide/Caregiver.Benefits.Application.Form.1010CG.v1.3.SRT.01102025.pdf)
* [Things to know](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/10-10CG%20-%20Things%20to%20Know.md) (various points of information we learned since the last transition)
* [PM Resources folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/Product/PM%20Resources) for documents used in routines and research
* [Stakeholder meeting notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/Meeting%20Notes)


### **Product artifacts**
* [Page/User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1687288632872/0728ba8a597b439671741c573fbba777ad0dac16)
* [Figma file](https://www.figma.com/design/TxXD5bGUOhbHHWLb85GPjK/10-10CG?node-id=0-1&t=xgkK7brjz069I7kE-0) with wireflows and page designs (including proposals and experiments)
* [Staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
* [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/10-10CG%20Use%20Cases.md)
* [Various form info](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/10-10CG%20Form)

**Analytics**
* Analytics dashboard:
    * [Domo](https://va-gov.domo.com/page/447193050) (consolidated forms dashboard)
    * [Google Analytics](https://analytics.google.com/analytics/web/#/analysis/p419143770)
* [Important Google Analytics Event Labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/metrics/Important%20Google%20Analytics%20event%20labels.md)
* [Backend Stats on DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?from_ts=1657212129534&to_ts=1657215729534&live=true)

**Engineering**
* [Architectural overview: example submissions flow](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/1010-health-apps/10-10cg-sequence-diagram-10072024.md)
* [High level view of systems](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10CG%20High-level%20Architecture%20.png)
* [Submission errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/ux-capture/future.md)
* [Frontend developer README](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/caregivers/README.md)
* [Endpoints consumed & owned](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/Endpoints%20Information.md)

**Initial discovery**
* [Initial discovery Discovery folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/discovery)
    * [Initial discovery User research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/discovery/Caregiver%20Discovery%20Sprint%201%20User%20Research%20Findings.pdf)
    * [Initial discovery Engineering](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/discovery/engineering)

**Team resources**
* [Team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Team%20docs/team-charter.md)
* [Team GH Project board](https://github.com/orgs/department-of-veterans-affairs/projects/1433)
* [Sprint Planning and Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/Team%20docs)


## **Roadmap**

This roadmap reflects current priorities and efforts for the 10-10CG application as of June 2025, based on the latest priority list.

**Now (Active/Launched Initiatives):**
* **Facilities Search:** Launched 2/14, improved facility search & selection.
* **Submission Failure Email:** Launched 2/21, provides notifications for failed submissions.
* **OAuth 2.0:** Launched 4/2, enhancing security and app authentication.
* **Signature Page Update:** Engineering in progress for improvements to the signature page.

**Next (Planned / In Progress Discovery):**
* **Caregiver Clarification:** Content refresh is in progress to improve clarity around caregiver roles and definitions. This likely aligns with previous "Primary/Secondary Caregiver selection" work.
* **Integrate with Mobile app:** Ongoing exploration for possible integration with the VA mobile application, and whether this integration would be beneficial.

## **Features and initiatives we worked on**

This table includes links to the individual feature directory and their current status for the 10-10CG application.
| Product | Initiative                                      | Status                                   |
|---------|-------------------------------------------------|------------------------------------------|
| CG      | [Facilities Search](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19433)                                | 🎉 Launched 2/14                       |
| CG      | [Submission failure email](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95359)                         | 🎉 Launched 2/21                       |
| CG      | [OAuth 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89108)                                        | 🎉 Launched 4/2                        |
| CG      | [Signature page update](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102073)                           | Eng in progress                         |
| CG      | [Caregiver clarification](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37541)                          | Content refresh                         |
| CG      | [Integrate with Mobile app](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103250)                       |                                         |

### Descoped

| Product | Initiative                                      | Status                                   |
|---------|-------------------------------------------------|------------------------------------------|
| CG      | [Choose your own adventure](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103252)  | Descoped due to feature being unnecessary for this simpler form, no need to create complexity       |


## **Our team, VA relationships, and stakeholder meeting cadence**


### **Team Members:**

The current 10-10 Health Apps team roster includes:
* **Product Manager:**
    * Heather Justice | heather.justice1@va.gov / heather.justice@adhocteam.us / GH "hdjustice"
* **Delivery Lead:**
    * Alexandria "Alex" Parker | alexandria.parker@va.gov / alexandria.parker@agile6.com / GH "ACParker89"
* **UX Design/Research:**
    * Jessica Stump | jessica.stump@va.gov / jessica.stump@adhocteam.us / "jessicastump" (Sr.)
    * Liza McRuer | elizabeth.mcruer@va.gov / liza.mcruer@adhocteam.us / GH "emcruer"
* **Engineers:**
    * Matt Long | matthew.long6@va.gov / matt.long@adhocteam.us / GH "longmd" (Sr. Frontend)
    * Mitch Saltykov | dmitry.saltykov@va.gov / mitch.saltykovs@agile6.com / GH "mitch-a6" (Full Stack)
    * Brandon Cooper | brandon.cooper1@va.gov / brandon.cooper@adhocteam.us / GH "coope93" (Full Stack/Backend focus)
* **Sr. Data Analyst:**
    * Luis Simauchi | luis.simauchi@va.gov / luis.simauchi@adhocteam.us / GH "luis-simauchi"
* **QA Engineer:**
    * Allan To | allan.to@va.gov / allan.to@adhocteam.us / GH "allanto-ah"


### **VA relationships**

**OCTO-DE**
* Lauren Alexanderson | lauren.alexanderson@va.gov - Product Crew Lead
* Patrick Bateman | patrick.bateman@va.gov - Product Owner
* Amanda Klausmeier | amanda.klausmeier@va.gov - Design Lead
* Danielle Thierry | danielle.thierry@va.gov - Content writer

**Caregiver Program Business Unit Team**
* Matt Brown | Matthew.Brown4@va.gov -- Assoc. Director (leads the relationship between the program and VA.gov)
* Tiffany Puckett | Tiffany.Puckett@va.gov -- Health System Specialist
* Tamara Scott | tamara.scott@va.gov -- Social Worker: Caregiver Support Program
* Margaret Featherstone | Margaret.Featherston@va.gov -- Caregiver Support Program Manager
* Hollie-Lyn James | hollie.speer@va.gov -- Health System Specialist
* Gaspare Caruso | gaspare.caruso@va.gov -- Clinical Program Coordinator
* Drew DeRocco | drew.derocco@va.gov -- PMO, scheduling

**CARMA team/MuleSoft.Salesforce team (End-to-End Testing POCs)**
* Paul Kuprionas | paul.kuprionas@va.gov - CARMA tech lead
* Ramesh Dugar | ramesh.dugar@va.gov - CARMA engineer
* David Wald | David.Wald@va.gov - testing/integration lead
* Ranganathan Vekataraman | Ranganathan.Vekataraman@va.gov - CARMA engineer
* Igor Khurgin | igor.khurgin@va.gov - CARMA engineer
* Marla Clayton | marla.clayton@va.gov - Technical Project Manager CARMA
* Mili Riddout | mili.riddout@salesforce.com - CARMA point of contact
* Slack channel | #vecms-carma_vadotgov_development_external


### **Recurring stakeholder meetings**
* 10-10CG Caregiver team
    * Every other Friday at 12:30pm ET/11:30am CT/9:30am PT


## **Outstanding Questions and Action Items**

This section is for any outstanding specific questions, unresolved issues, or tasks requiring immediate attention as the new team onboards. Key areas to focus on include:
* **Dependencies:** Any initiatives currently blocked by external teams (e.g., specific CARMA or Program team dependencies) should be actively monitored and followed up on.
* **Stakeholder Engagements:** Confirming open action items from recent stakeholder engagements with the Caregiver Program Business Unit or CARMA team.
* **Research Follow-ups:** Any pending decisions or next steps from recent research findings or discoveries, particularly regarding caregiver clarification or the baseline study.
* **Technical Debt/Maintenance:** Identifying any known technical debt items specific to 10-10CG that may need future attention.
* **Ad-hoc Requests:** Any immediate, unprioritized requests that have come in.
