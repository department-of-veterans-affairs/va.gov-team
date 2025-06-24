# **10-10EZ Transition Hub**

**Updated June 24, 2025**

**Note:** These Transition Docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts beyond the last update date.
>**Team transition document**
>The purpose of this transition document is to outline the current state of 10-10EZ product development. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.
>
>**Note:** The 10-10EZ management is under the purview of the 10-10 Health Apps team. If you're looking for information about the 10-10CG (Caregiver application) or the 10-10EZR Health update form, please refer to their dedicated transition documents.
>- [10-10EZR Transition Hub document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Transition%20hub/EZR%20Transition%20Hub%20(August%202025).md)
>- [10-10CG Transition Hub document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/CG%20Transition%20Hub%20(August%202025).md)


## **Table of Contents**
- [Product context, portfolio, and artifacts](#product-context)
- [Roadmap](#roadmap)
- [Features and initiatives we worked on](#Features-and-initiatives-we-worked-on)
- [Our team, VA relationships, and stakeholder meeting cadence](#Our-team,-VA-relationships,-and-stakeholder-meeting-cadence)
- [Outstanding Questions and Action Items](#Outstanding-Questions-and-Action-Items)


## **Product context**
The 10-10EZ: Application for VA health care was one of the first applications to be adapted for online use on VA.gov. Our ongoing work focuses on continuously improving its user experience (UX) and functionality to better serve Veterans.

* Used by Veterans to apply for health care.
* Averaging 20,000 submissions per month.
* Users can log into their VA.gov account (authenticate), but a VA.gov account is not required.
    * Users who have a VA.gov account must log in.
    * Some fields are prefilled for authenticated users.
    * Authenticated users can "save in progress" and return to complete their application.
  


### **Product portfolio**
**10-10EZ Application VA health care**
* [Staging link](https://staging.va.gov/health-care/apply-for-health-care-form-10-10ez/introduction)
* [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application)
* [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)
* [Product Guide/Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/Current%20PDF%20form%20%26%20Product%20Guide/10-10EZ.Product.Guide_v3.2_9-2024.pdf)
* [Things to know](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/10-10EZ%20-%20Things%20to%20know.md) (various points of information we learned since the last transition)
* [Stakeholder Meeting Notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/Meetings)
* [PM Resources folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/product/PM%20Resources) for documents used in routines and research


### **Product artifacts**
* [Page/User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1711487613901/3f988d8dd69c59340e4b850ef5caf362fa490927)
* [Figma file](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=0-1&t=zGqPQ71Gdv4QrpPj-1) with wireflows and page designs (including proposals and experiments)
* [Staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
* [Various form info](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/10-10EZ%20Form)

**Analytics**
* Analytics dashboard:
    * [Domo](https://va-gov.domo.com/page/447193050) (consolidated forms dashboard)
    * [Google Analytics](https://analytics.google.com/analytics/web/#/analysis/p419143770)
* [Important Google Analytics Event Labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/Analytics/Important%20Google%20Analytics%20event%20labels.md)
* [Backend Stats on DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?from_ts=1657212129534&to_ts=1657215729534&live=true)
* [Real User Monitoring (RUM) Dashboard](https://vagov.ddog-gov.com/rum/application/9d5155fd-8623-4bc9-8580-ad8ec2cdd7fa/overview/browser?from_ts=1676217734085&to_ts=1676304134085&live=true)

**Engineering**
* [High level view of systems](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/engineering/10-10EZ%20High-level%20Architecture.png)
* [Sequence Diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/1010-health-apps/10-10ez-data-flow-chart-10242024.md)
* [Application Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/engineering/architecture-diagram.md)
* [Frontend developer README](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/hca/README.md)
* [Prefill fields engineering research](https://app.zenhub.com/workspaces/vsa---10-10-team-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/27278)
* [Endpoints consumed and owned](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/engineering/Endpoints%20Information.md)

**Latest discovery research**
* [Research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/research)

**Team resources**
* [Team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Team%20docs/team-charter.md)
* [Team GH Project board](https://github.com/orgs/department-of-veterans-affairs/projects/1433)
* [Sprint Planning and Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/Team%20docs)


## **Roadmap**
This roadmap reflects current priorities and efforts for the 10-10EZ application as of June 2025, based on the latest priority list.

**Now (Active Development/Discovery):**
* **Submission Traceability:** Ongoing Proof of Concept (POC) with the Submission Tracking (ST) team to enhance visibility into application submission statuses.
* **Form Statuses:** Active discovery phase led by the Product Manager to define and implement clear statuses for submitted applications.
* **Choose Your Own Adventure (step toward 1-click):** Research planning is in progress for this initiative, aiming to streamline the application process.
* **Multi-form Completion:** Exploration is underway with the Benefits Delivery System (BDS) team to understand possibilities for completing multiple forms.

**Next (Planned / Blocked with known dependencies):**
* **Unhoused/No Address:** This initiative is currently blocked, pending the development and availability of a new VES (Veteran Eligibility Services) REST API.
* **Confirmation Emails:** Currently blocked, pending prioritization from the VES team for implementation of confirmation email functionality.
* **Save-In-Progress List & Loop Fix:** Blocked, pending updates and fixes from the DST/Forms Library team.
* **Insurance Page List & Loop:** Blocked, pending updates and fixes from the DST/Forms Library team.
* **Mobile App Integration:** Further exploration is needed to determine additional integration points beyond the current link on the mobile app.

**Future (Long-term Vision / To be prioritized):**
* **Short Form - 1-click:** Full implementation of a simplified 1-click short form, building on the 'Choose Your Own Adventure' discovery. This is a significant long-term goal.


## **Features and initiatives we worked on**
This table details recent and ongoing features and initiatives specifically for the 10-10EZ application, along with their current status.
| Product | Initiative                                      | Status                                   |
|---------|-------------------------------------------------|------------------------------------------|
| EZ      | [Print/Save completed PDF](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60909)                         | 🎉 Launched 5/5                                                      |
| EZ      | [Submission Traceability](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80978)                          | POC with ST team in progress                                          |
| EZ      | [Form Statuses](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95313)                                    | Discovery in progress (PM)                                            |
| EZ      | [Choose your own adventure](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103253) (step toward 1-click) | Research planning in progress                                         |
| EZ      | [Multi-form Completion](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103260)                           | Exploration with BDS team                                             |
| EZ      | [Integrate with Mobile app](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103255)                       | Link already on app, what else?                                       |
| EZ      | [Unhoused/No Address](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103256)                             | BLOCKED<br>Pending VES REST api                                       |
| EZ      | [Confirmation emails](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40765)                              | BLOCKED<br>Pending VES prioritization                                 |
| EZ      | [Save-In-Progress L&L fix](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94818)                         | BLOCKED<br>Pending DST/Forms Library                                  |
| EZ      | [Insurance page (L&L)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90159)                             | BLOCKED<br>Pending DST/Forms Library                                  |
| EZ      | [Short Form - 1-click](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103258)                            |                                                                       |



### Descoped

| Product | Initiative                                      | Status                                   |
|---------|-------------------------------------------------|------------------------------------------|
| EZ      | [Facility selection](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30650)          | Descoped due to recent enhancements being sufficient without complicating the form, function or code|


## **Our team, VA relationships, and stakeholder meeting cadence**

### **Team Members:**
The current 10-10 Health Apps team roster includes:
* **Product Managers:**
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

**HEC (Health Eligibility Center) Program Team**
* Bryan Burgan | Bryan.burgan@va.gov -- VHA Member Services Publications Control Officer - Main POC
* Ambroja Watson | ambroja.watson@va.gov -- Veteran Experience Officer, HEC - 2nd POC
* Stacey Echols | stacey.echols@va.gov -- Director, HEC
* Amanda Scully | amanda.scully@va.gov -- Deputy Director, HEC
* Zachariah Bell | zachariah.bell@va.gov -- Acting ECM Supervisory Program Specialist
* Cheylanda Griffith | cheylanda.griffith@va.gov -- Supervisory Program Specialist
* Kimberly Bostic | Kimberly.Bostic@va.gov -- Associate Director, QA division HEC
* Lindsey Peace | Lindsey.Peace@va.gov -- Assistant Associate Director, Income Verification division
* Jessica Soza | Jessica.Soza@va.gov -- Management & Program Analyst, BSO Business Policy (Paper forms)
* Annie Rice | Annie.Rice@va.gov -- Contact Representative office
* Shana Watson | shana.watson@va.gov -- Member Services SME
* Simone Gully | simone.gully@va.gov -- Member Services SME
* Angela Fulton | angela.fulton@va.gov -- Member Services SME
* Tiffany Gaines | tiffany.gaines@va.gov -- Member Services SME

**Enrollment System (ES) (End-to-End Testing POCs)**
* Joshua Faulkner | joshua.faulkner@va.gov - Technical Director, EHBD (Enrollment system)
    * Primary contact for ES testing (end2end)
* Ramya Venkataraman | ramya.venkataraman@va.gov - SQA Test Lead, Enrollement system
    * Secondary contact for ES testing
* Reetu Dhanda | reetu.dhanda@va.gov - SQA Test Engineer (VES PACT Act scrum team)
* Turkan Kasamanly | turkan.kasamanli@va.gov - Test Automation Engineer (VES PACT Act scrum team)


### **Recurring stakeholder meetings**
* **10-10EZ Online Application Update:**
    * The bi-weekly routine was cancelled due to low attendance and engagement
        * It was agreed to engage audience as needed
        * We will continue to share features and research information, as well as hold any knowledge share sessions with this audience
    * Bryan Burgan is currently the main point of contact for assisting with facilitating meetings.


## **Outstanding Questions and Action Items**

This section is for any outstanding specific questions, unresolved issues, or tasks requiring immediate attention as the new team onboards. Key areas to focus on include:



* **Dependencies:** Any initiatives currently blocked by external teams (e.g., VES REST API, DST/Forms Library, VES prioritization) should be actively monitored and followed up on.
* **Stakeholder Engagements:** Confirming open action items from recent stakeholder meetings with HEC, ES, and other relevant teams.
* **Research Follow-ups:** Any pending decisions or next steps from recent research findings or discoveries.
* **Technical Debt/Maintenance:** Identifying any known technical debt items specific to 10-10EZ that may need future attention.
* **Ad-hoc Requests:** Any immediate, unprioritized requests that have come in.
