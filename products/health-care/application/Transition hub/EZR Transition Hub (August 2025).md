# **10-10EZR Transition Hub**

**Updated June 24, 2025**

**Note:** These Transition Docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts beyond the last update date.
>**Team transition document**
>The purpose of this transition document is to outline the current state of 10-10EZR product development. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.
>
>**Note:** The 10-10EZR management is under the purview of the 10-10 Health Apps team. If you're looking for information about the 10-10CG (Caregiver application) or the 10-10EZ Veteran Health care application, please refer to their dedicated transition documents.
>* [10-10EZ Transition Hub document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Transition%20hub/EZ%20Transition%20Hub%20(August%202025).md)
>* [10-10CG Transition Hub document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/CG%20Transition%20Hub%20(August%202025).md)


## **Table of Contents**

- [Product context, portfolio, and artifacts](#product-context)
- [Roadmap](#roadmap)
- [Features and initiatives we worked on](#Features-and-initiatives-we-worked-on)
- [Our team, VA relationships, and stakeholder meeting cadence](#Our-team,-VA-relationships,-and-stakeholder-meeting-cadence)
- [Outstanding Questions and Action Items](#Outstanding-Questions-and-Action-Items)


## **Product context**

The 10-10EZR form is designed to allow Veterans to easily update their VA health care information online. This ensures that their records are current, enabling timely and accurate benefits administration. Our ongoing work focuses on enhancing the user experience and ensuring seamless data flow for these crucial updates.
* Used by Veterans to update their VA health care information.
* Averaging approximately 4,500 submissions per month.
* This form requires VA.gov authentication to access it and submit updates.


### **Product portfolio**

**10-10EZR VA Health Benefits Update Form**
* [Staging link](https://staging.va.gov/my-health/update-benefits-information-form-10-10ezr/introduction)
* [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/health-update-form)
* [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Product%20Brief%20(standalone%20form).md)
* [Product Guide/Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Form/Current%20PDF%20and%20Product%20Guide/10-10EZR%20Health%20Benefits%20update%20form%20-%20Product%20Guide%2008112024.docx.pdf)
* [Things to know](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Form/10-10EZR%20-%20Things%20to%20know.md)
* [Stakeholder Meeting Notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/health-update-form/Meeting%20Notes)


### **Product artifacts**
* [EZR Mural boards](https://app.mural.co/t/departmentofveteransaffairs9999/search?term=EZR&type=mural) 
* [Figma file](https://www.figma.com/design/tggcJk382w9yQ0ElwKfh3N/10-10EZR?node-id=0-1&p=f&t=97ZZGWDgjbxuR6BE-0)
* [Staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
* [Various form info](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/health-update-form/10-10EZR%20Form)

**Analytics**
* Analytics dashboard:
    * [Domo](https://va-gov.domo.com/page/447193050) (consolidated forms dashboard)
    * [Google Analytics](https://analytics.google.com/analytics/web/#/analysis/p419143770) (Placeholder - please specify EZR Analytics dashboard)
* [Backend Stats on DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?fromUser=false&refresh_mode=sliding&from_ts=1748201783568&to_ts=1750793783568&live=true) 
* [Real User Monitoring (RUM) Dashboard](https://vagov.ddog-gov.com/rum/performance-monitoring?query=%40application.id%3Ad6b6178d-eef9-4252-baae-896432d38d45%20%40session.type%3Auser&agg_m=%40view.loading_time&fromUser=false&from_ts=1750189023883&to_ts=1750793823883&live=true) 

**Engineering**
* [High level view of systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/1010-health-apps/10-10ezr-data-flow-chart-09252024.md)
* [Sequence Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/Engineering/Sequence%20Diagram.md)
* [Application Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/Engineering/Architecture%20Diagram.md)
* [Endpoints consumed and owned](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/Engineering/Endpoints.md)

**Latest discovery research**
* [Research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/research)

**Team resources**
* [Team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Team%20docs/team-charter.md)
* [Team GH Project board](https://github.com/orgs/department-of-veterans-affairs/projects/1433)
* [Sprint Planning and Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/Team%20docs)


## **Roadmap**

This roadmap reflects current priorities and efforts for the 10-10EZR application as of June 2025.

**Now:** 
* [Next of Kin/Emergency Contact](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75046)
* [Print PDF](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109746)
* [V2 - Confirmation Flow: Household section](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98353)

**Next:** 
* [V2 - Confirmation Flow: Insurance section](https://github.com/department-of-veterans-affairs/va.gov-team/issues/104121)

**Later:**
* International Phone number

**Descoped:** *


## **Features and initiatives we worked on**

This table details recent and ongoing features and initiatives specifically for the 10-10EZR application, along with their current status.

| Product | Initiative                                      | Status                                   |
|---------|-------------------------------------------------|------------------------------------------|
| EZR    | [Next of Kin/Emergency Contact](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75046)               | Dev/QA in progress         |
| EZR    | [Print PDF](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109746)                                  | Dev in progress            |
| EZR    | [V2 - Confirmation Flow: Household section](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98353)   | Dev in progress            |
| EZR    | [V2 - Confirmation Flow: Insurance section](https://github.com/department-of-veterans-affairs/va.gov-team/issues/104121)   | Dev in progress            |
| EZR    | TBD  |TBD            |
| EZR    | TBD  |TBD            |
| EZR    | TBD  |TBD            |

## **Our team, VA relationships, and stakeholder meeting cadence**
### **Team Members:**

The current 10-10 Health Apps team roster includes:
* **Product Managers:**
    * Michael Skinner | michael.skinner1@va.gov / michael.skinner@agile6.com / GH "Agile6MSkinner"
* **Delivery Lead:**
    * Alexandria "Alex" Parker | alexandria.parker@va.gov / alexandria.parker@agile6.com / GH "ACParker89"
* **UX Design/Research:**
    * Renata Keck | renata.keck@va.gov / renata.keck@agile6.com / GH "renatakeck"
    * Hieu Vo | hieu.vo@va.gov / hieu.vo@agile6.com / GH "IMHieuVo"
* **Engineers:**
    * Daniel Sasser | daniel.sasser@va.gov / daniel.sasser@agile6.com / GH "dsasser" (Frontend)
    * Derrick Ellerbie | derrick.ellerbie@va.gov / derrick.ellerbie@Agile6.com / GH "dellerbie" (Full Stack)
    * Joshua Drumm | joshua.drumm@va.gov / joshua.drumm@agile6.com / GH "JoshingYou1" (Full Stack/Backend focus)
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
* **10-10EZR Online Update form:**
    * The bi-weekly routine was cancelled due to low attendance and engagement
        * It was agreed to engage audience as needed
        * We will continue to share features and research information, as well as hold any knowledge share sessions with this audience
    * Bryan Burgan is currently the main point of contact for assisting with facilitating meetings.

## **Outstanding Questions and Action Items**

This section is for any outstanding specific questions, unresolved issues, or tasks requiring immediate attention as the new team onboards. Key areas to focus on include:
* **Dependencies:** Any initiatives currently blocked by external teams (e.g., VES REST API, DST/Forms Library, VES prioritization) should be actively monitored and followed up on.
* **Stakeholder Engagements:** Confirming open action items from recent stakeholder meetings with HEC, ES, and other relevant teams.
* **Research Follow-ups:** Any pending decisions or next steps from recent research findings or discoveries.
* **Technical Debt/Maintenance:** Identifying any known technical debt items specific to 10-10EZR that may need future attention.
* **Ad-hoc Requests:** Any immediate, unprioritized requests that have come in.
