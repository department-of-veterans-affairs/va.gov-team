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
* EZR form went online at 100% on April 11, 2024 (phased launch from December 2023)
* Used by Veterans to update their VA health care information.
* Averaging approximately 4,500 submissions per month.
* This form requires VA.gov authentication to access it and submit updates.
* Housed under the va.gov/my-health (MHV on VA.gov) umbrella


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
    * [Google Analytics](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/B1BuF9JgTgCgLV3cx4EB4Q)
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
* [Add Military History to EZR](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77527) - NEED INITIATIVE BRIEF

**Later:**
* [International Phone number](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106955)

**Descoped:** *
* [Mobile integration](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103829) - need to revisit this

## **Features and initiatives we worked on**

This table details recent and ongoing features and initiatives specifically for the 10-10EZR application, along with their current status.
- Link to current [Work In Progress - engineering doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Form/Work%20In%20Progress.md)

| Product | Initiative                                      | Status                                   |
|---------|-------------------------------------------------|------------------------------------------|
| EZR    | [Next of Kin/Emergency Contact](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75046)               | In production, not enabled. Pending successful UAT        |
| EZR    | [Print PDF](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109746)                                  | FE: Merged, but behind a feature flag. BE: Not merged           |
| EZR    | [V2 - Confirmation Flow: Household section](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98353)   | Dev in progress            |
| EZR    | [V2 - Confirmation Flow: Insurance section](https://github.com/department-of-veterans-affairs/va.gov-team/issues/104121)   | Dev in progress            |
| EZR    | TBD  |TBD            |
| EZR    | TBD  |TBD            |
| EZR    | TBD  |TBD            |

### PR statuses
| Product | PR link                                      | Status                                   |
|---------|-------------------------------------------------|------------------------------------------|
| EZR    | [V2 Dependents](https://github.com/department-of-veterans-affairs/vets-website/pull/38058) | In QA. Not merged. |
| EZR    | [V2 Financial Info](https://github.com/department-of-veterans-affairs/vets-website/pull/35177) | Merged but feature flag is disabled |
| EZR    | [V2 Spouse + Prefill](https://github.com/department-of-veterans-affairs/vets-website/pull/37774) | Awaiting QA |
| EZR    | [Emergency Contacts/Next of Kin](https://github.com/department-of-veterans-affairs/vets-website/pull/37849) | Merged. Feature flag disabled `ezr_emergency_contacts_enabled` |
| EZR    | [PDF Download](https://github.com/department-of-veterans-affairs/vets-website/pull/37492) | FE: Merged, but behind a feature flag. BE: Not merged |



### **Recurring stakeholder meetings**
* **10-10EZR Online Update form:**
    * The bi-weekly routine was cancelled due to low attendance and engagement
        * It was agreed to engage audience as needed
        * We will continue to share features and research information, as well as hold any knowledge share sessions with this audience
    * Bryan B is currently the main point of contact for assisting with facilitating meetings.

## **Outstanding Questions and Action Items**

This section is for any outstanding specific questions, unresolved issues, or tasks requiring immediate attention as the new team onboards. Key areas to focus on include:
* **Dependencies:** Any initiatives currently blocked by external teams (e.g., VES REST API, DST/Forms Library, VES prioritization) should be actively monitored and followed up on.
* **Stakeholder Engagements:** Confirming open action items from recent stakeholder meetings with HEC, ES, and other relevant teams.
* **Research Follow-ups:** Any pending decisions or next steps from recent research findings or discoveries.
* **Technical Debt/Maintenance:** Identifying any known technical debt items specific to 10-10EZR that may need future attention.
* **Unplanned Requests:** Any immediate, unprioritized requests that have come in.
