# Initiative Brief Template
#### Overview

<details>
 
 *There is roughly a 1:many relationship between products and initiatives, or our attempts to improve a product/achieve Veteran outcomes. The same goes for product outlines and initiative briefs. This template can be used as product documentation for the Collaboration Cycle, especially when iterating an existing product. In addition, the Brief is an important communication tool within a team and between the team and Crew Chief/PO/other teams.* 
 
</details>

<details>
 <Summary>Examples:</Summary>
 
 - *Product: On-site Search* 
   - *Initiatives: Type-ahead, [Search Landing Page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/search-landing/initiative-brief.md), [Surfacing Other Search Tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/surfacing%20other%20search%20tools/initiative-%20brief.md)*
 - *Product: VA.gov Profile*
   - *Initiatives: Combine Account & Profile, Direct Deposit for Disability, Candidate Address Validation, Direct Deposit for Education, Notification Preferences*
 - *Product: Disability Claims*
   - *Initiatives: Original Claims, Benefits Delivery at Discharge (BDD)*
 
 </details>
 
 > 💡 Helpful guidance/tips
 
---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*
* . Take the non-compliant legacy system Web Automated Verification of Enrollment (WAVE) on PITC (a local server) and move it Verify Your Enrollment (VYE) on VA.gov. 

**Related/Associated product(s)**
- Product | Link to product outline 

## Problem
> *Describe the challenge / pain point you seek to address.:* (1) WAVE is non-compliant with current U.S. government regulations because it uses JavaScript; (2) WAVE data also lives on PITC, a local server, instead of on VA.gov; (3) Current WAVE functionality is not condusive to veterans with disabilities; (4) Nearly the entire administrative portion of WAVE is not functional or provides unnecessary/impertinent information to the business.
* *What is the problem and who is affected? And, what evidence do we have of the problem?* WAVE is currently non-compliant because it uses JavaScript, which is no longer sanctioned by the U.S. goverment because of data security concerns. This is a problem because WAVE holds veterans' personally identifiable information. Evidence exists in current U.S. policy and memorandums from the U.S. Congress. Moving from WAVE to VYE will primarily effect veterans who are entitled to benefits under Chapter 33 of the post-9/11 GI bill, it can also affect the VA and other teams contracted through the VA, such as the Veteran Readiness and Employment Product Sustainment and Enhancement Services Team, who use information from WAVE for their work. The administrative portion of WAVE affects people at the VA who need access to the amount of veterans who verified their enrollment, how many veterans access the website, and similar information. Evidence of the problem exists in use of the application itself: when attemping to browse the administrative portion of WAVE, the VYE team experienced a lack of functionality. Evidence also exists in the EDU Team's lack of access to proper information, since it does not provide dates past 1999.
* *Why do you think the problem is occurring? Other reasons why this might be occurring?* The problem occurs because WAVE has not been updated - coding, the look and feel of the website, functions of the website, etc. - in nearly 10 years, meaning the system is archaic and can be difficult or confusing to use. Usage difficulties are problematic because they act as a barrier for veterans seeking to access their education benefits, especially for veterans with disabilities who require modern technological assistance. 
* *How does this initiative help further OCTO-DE's mission and goals?* Modernizing WAVE and moving it to VA.gov aligns with OCTO-DE's mission to update VA applications, create the best experience for all veterans by streamlining the process to receive education benefits, and provide a seamless veteran experience through the delivery of state-of-the-art technology by improving the functionality and experience of the application.

<!--
## Desired User Outcomes
* *Why would a user want to use this?* A veteran would want to use this because the streamlined application allows them more quicker and easier access to their Chapter 33 education benefits. 
* *With this problem solved, what should users be able to do/achieve that they couldn't before?* In VYE users should be able to confirm their enrollment information without having to wade through unnecessary information pages, like the one that asks for change of address or change of login information, that already live on other parts of VA.gov. This will allow users a streamlined experience that excludes unnecessary questions. 

## Undesired User Outcomes
* Increased hardship to access benefits for veterans.
* Lack of accessability for disabled veterans.
* Lack of access to data analytics information for the EDU Team at the VA.
* Inability to confirm enrollment.
## Desired Business Outcomes
- 

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes
-->

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - .
- **Usability Risks** (can people figure out how to use it):
  - .
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
> > August 07, 2023 Project start
> > September 29, 2023 Complete OCTO onboarding
> > October 2023 Intiiate Collaboration Cycle kickoff
> > March 13, 2024 Complete development
> > May 13, 2024 Complete testing
> > June 2024 Launch prep
> > June 2024 Conduct staging review\
> > June 2024 Deploy to Prod
> > July 12, 2024 Complete collaboration with OCTO
> > July 13, 2024 Project end 

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Verify Your Enrollment
- GitHub Label(s): #vye_team
- Slack channel: #vye_team
- Product POCs: Jason Wolf (Jason.Wolf1@va.gov | jason-gcio), Cassidy Beach (Cassidy.Beach@va.gov | cassidy-beach)

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
