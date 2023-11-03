# Initiative Brief Template
#### Overview

<details>
 
 *There is roughly a 1:many relationship between products and initiatives, or our attempts to improve a product/achieve Veteran outcomes. The same goes for product outlines and initiative briefs. This template can be used as product documentation for the Collaboration Cycle, especially when iterating an existing product. In addition, the Brief is an important communication tool within a team and between the team and Crew Chief/PO/other teams.* 
 
</details>

<details>
 <Summary>Examples:</Summary>
 
 - *Product: On-site Search* 
   - *Initiatives: Type-ahead, [Search Landing Page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/search-landing/initiative-brief.md), [Surfacing Other Search Tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/surfacing%20other%20search%20tools/initiative-%20brief.md)*
 - *Product: VA.gov Profile*
   - *Initiatives: Combine Account & Profile, Direct Deposit for Disability, Candidate Address Validation, Direct Deposit for Education, Notification Preferences*
 - *Product: Disability Claims*
   - *Initiatives: Original Claims, Benefits Delivery at Discharge (BDD)*
 
 </details>
 
 > 💡 Helpful guidance/tips
 
---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*
- Increase the submission of the digital PreNeed Form VA-4010007 and decrease processing time.

**Related/Associated product(s)**
- Pre-Need Self Service | (https://github.com/department-of-veterans-affairs/va.gov-team/compare/master...CatherineHughes202:va.gov-team:patch-3)

## Problem
> *Describe the challenge / pain point you seek to address.:* 

The National Cemetery Administration (NCA) is working to modernize its systems, including the system that processes Preneed applications (Form VA40-10007). Presently, Preneed is processed in the newly modernized system and in the legacy system. Users are swiveling between the two systems to manage cases, which impacts timeliness measures for Eligibility Office (EO) Analysts and Scheduling Office (SO) Agents at the National Cemetery Scheduling Office (NCSO). Ultimately, the customer is impacted, as eligibility determinations are delayed.  

What is the problem and who is affected? And, what evidence do we have of the problem?
  * What - Longer processing times for eligibility determinations and interment requests due to swivel between two systems.
  * Who – 
    * Veterans and their families and representatives (hospice care, lawyers, etc.)
    * NCSO EO Analysts
    * NCSO SO Agents
  * Evidence – 
    * EO and SO agents are currently working in both the CaMEO Salesforce Application (i.e., newly modernized system) and the legacy system to manage preneed 
    * The time needed to switch between the two systems throughout the day to manage preneed cases impacts timeliness measures. 
    * Manual entry of some Pre-Need form data, by analysts, is needed due to misalignment of the digital form, paper form, and systems for certain fields 

Why do you think the problem is occurring? Other reasons why this might be occurring?
  * Why
    * The CaMEO Salesforce application cannot ingest the digital Pre-Need Form VA40-10007 application data; thus, requiring two systems to manage preneed. 
    * The misalignment of the fields and options means that the data cannot be automatically ingested which results in further manual assessment and entry by the analyst.
  * Other Possible Reasons
    * Managing preneed within two systems is too cumbersome leading to user errors. 

How does this initiative help further OCTO-DE's mission and goals?
  * Decreased processing times for Pre-Need applications will provide a better experience for the veterans and their families/representatives who request eligibility determinations and/or request interments. 
  * Consistency between the digital Pre-Need form and CaMEO Salesforce application will reduce submission of inaccurate (“bad”) data and allow a more seamless process within a single system. 
  

---
## Measuring Success

### Key Performance Indicators (KPIs) - TBD
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery
### Assumptions/Risks - TBD
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - TBD
- **Usability Risks** (can people figure out how to use it):
  - TBD
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - TBD
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - TBD
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building - TBD
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?* 
> *How does this solution address your Assumptions & Risks? 

#### Go-to-market - TBD
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket - In progress to generate

### Timeline - TBD
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates - TBD
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
    - https://app.mural.co/t/bahdigitalexperience6902/m/bahdigitalexperience6902/1674680396503/7020ee7494584418ae4fd09eb378770b63585b0a?sender=hughescatherine1856 

### After - TBD

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 
    - GitHub Team Label: BAH-MBS-SelfServ
 - GitHub Label(s)
    - pre-need
    - selfserv-team1
    - selfserv-team2
- Slack channel: #va-gov-mbs
- Product POCs:
 - Product Manager: 
    - Hughes, Catherine M. (BAH) Catherine.Hughes2@va.gov
 - Product Owner Representatives: 
    - Hughes, Catherine M. (BAH) Catherine.Hughes2@va.gov
    - Stewart, Kelby R. (BAH) Kelby.Stewart@va.gov
 - Scrum Master: 
    - Dieudonne Yenyo, Michelle R. (Booz Allen Hamilton) Michelle.DieudonneYenyo@va.gov
    - Yamrus, Carly (BAH) Carly.Yamrus@va.gov
 - UI/UX: 
    - Cruz Granados, Cindy A. (Booz Allen Hamilton) Cindy.CruzGranados@va.gov
    - Barron, Charles J. (BAH) Charles.Barron1@va.gov
 - Developers
    - Santiago, Kenneth (Booz Allen Hamilton) Kenneth.Santiago@va.gov
    - Gilbert, Douglas C. (Booz Allen Hamilton) Douglas.Gilbert@va.gov
    - Sherrow, Alexander J. (BAH) Alexander.Sherrow@va.gov
    - Fewin, Connor J. (BAH) Connor.Fewin@va.gov
 - QA
    - Sonntag, Adam E. (BAH) Adam.Sonntag@va.gov


</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:
  - OIT and NCA/BTRS and NCSO
- Contact(s): 
  - OIT
    - Ouslander, Michael S. Michael.Ouslander@va.gov
  - NCA/BTRS
    - Wilson, Ginger Ginger.Wilson@va.gov 
    - Jones, Rhonda M. Rhonda.Jones1@va.gov
   - NCA/NCSO
     - Dalrymple, Jay Jay.Dalrymple@va.gov 
     - Ridgeway, Kevin Kevin.Ridgeway@va.gov 

 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
