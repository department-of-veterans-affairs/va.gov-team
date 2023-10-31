# Verify Your Enrollment Initiative Brief
#### Overview

<details>
 
 *There is roughly a 1:many relationship between products and initiatives, or our attempts to improve a product/achieve Veteran outcomes. The same goes for product outlines and initiative briefs. This template can be used as product documentation for the Collaboration Cycle, especially when iterating an existing product. In addition, the Brief is an important communication tool within a team and between the team and Crew Chief/PO/other teams.* 
 
</details>

<details>
 <Summary>Examples:</Summary>
 
 - *Product: On-site Search* 
   - *Initiatives: Type-ahead, [Search Landing Page](https://github.com/department-of-Veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/search-landing/initiative-brief.md), [Surfacing Other Search Tools](https://github.com/department-of-Veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/surfacing%20other%20search%20tools/initiative-%20brief.md)*
 - *Product: VA.gov Profile*
   - *Initiatives: Combine Account & Profile, Direct Deposit for Disability, Candidate Address Validation, Direct Deposit for Education, Notification Preferences*
 - *Product: Disability Claims*
   - *Initiatives: Original Claims, Benefits Delivery at Discharge (BDD)*
 
 </details>
 
 > 💡 Helpful guidance/tips
 
---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*
* Take the non-compliant legacy system Web Automated Verification of Enrollment (WAVE) on PITC (a local server) and move it Verify Your Enrollment (VYE) on VA.gov. 

**Related/Associated product(s)**
- VYE | Link to product outline, tbd

## Problem
> *Describe the challenge / pain point you seek to address.:* (1) WAVE is non-compliant with current U.S. government regulations because it uses JavaScript; (2) WAVE data lives on PITC, a local server, instead of on VA.gov which would allow VYE to maintain funcitonality in a robust, maintainable way; (3) Current WAVE functionality is not condusive to Veterans with disabilities; (4) Nearly the entire administrative portion of WAVE is not functional or provides unnecessary/impertinent information to the business.
* *What is the problem and who is affected? And, what evidence do we have of the problem?* WAVE is currently non-compliant because it uses JavaScript, which is no longer sanctioned by the U.S. goverment because of data security concerns. This is a problem because WAVE holds Veterans' personally identifiable information. Evidence originated from the business. Moving from WAVE to VYE will primarily affect Veterans who are entitled to benefits under Chapters 33, 1606, and 1607 of the post-9/11 GI bill, it can also affect the VA and other teams contracted through the VA, such as the Veteran Readiness and Employment Product Sustainment and Enhancement Services Team, who use information from WAVE for their work. The administrative portion of WAVE affects people at the VA who need access to the amount of Veterans who verified their enrollment, how many Veterans access the website, and similar information. Evidence of the problem exists in use of the application itself: when attemping to browse the administrative portion of WAVE, the VYE team experienced a lack of functionality. Evidence also exists in the EDU Team's lack of access to proper information, since it does not provide dates past 1999.
* *Why do you think the problem is occurring? Other reasons why this might be occurring?* The problem occurs because WAVE has not been updated - coding, the look and feel of the website, functions of the website, etc. - in nearly 10 years, meaning the system is archaic and can be difficult or confusing to use. Usage difficulties are problematic because they act as a barrier for Veterans seeking to access their education benefits, especially for Veterans with disabilities who require modern technological assistance. 
* *How does this initiative help further OCTO-DE's mission and goals?* Modernizing WAVE and moving it to VA.gov aligns with OCTO-DE's mission to update VA applications, create the best experience for all Veterans by streamlining the process to receive education benefits, and provide a seamless Veteran experience through the delivery of state-of-the-art technology by improving the functionality and experience of the application.

---
## Desired User Outcomes
> *Describe the desired user outcomes:*
* *Why would a user want to use this?* A Veteran would want to use this because the streamlined application allows them quicker and easier access to their Chapter 33 education benefits. It will also be located in a centralized location that has supporting functionality within VA.gov.
* *With this problem solved, what should users be able to do/achieve that they couldn't before?* In VYE, users should be able to confirm their enrollment information without having to wade through unnecessary pages, like the one that asks for change of address or change of login information, that already live on other parts of VA.gov. This will allow users a streamlined experience that excludes unnecessary questions. 

## Undesired User Outcomes
> *Describe the undesired user outcomes:* 
* Lack of accessability for disabled Veterans/non-508 compliant
* Lack of access to data analytics information for the EDU Team
* Inability to confirm enrollment
* Incorrect enrollment/benefit information 
## Desired Business Outcomes
> *Describe the desired business outcomes:*
* Effective processing of monthly verification of enrollment through VA.gov
* On-time release of VYE on VA.gov
* No bugs in the application
* Feedback from Veterans considered/used in final product
* Increased automation/less manual labor to verify enrollment
* More information provided to Veterans so they can make informed decisions regarding their enrollment

- *Why would your business want this to exist?* Each of these aspects are essential to a successful and efficient end-product.

## Undesired Business Outcomes
> *Describe the undesired business outcomes:*
* Veterans receive inaccurate payments
* Veterans receive innacurate enrollment information
* Veterans receive delayed payments
* Veterans do not receive any communication, or diminished communication, about their enrollment
* Veterans cannot access their enrollment information 

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- WAVE does not currently have KPIs | Baseline | Target | VYE Team plans to leverage Google Analytics and Domo through VA.gov to capture data and implement future KPIs.

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Moving locations may impact Veterans' ability to find the application.
- **Usability Risks** (can people figure out how to use it):
  - Veterans may have difficulty finalizing their enrollment because the application will look and operate differently. 
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - VYE Team will want to leverage technology and data available through VA.gov.
  - VYE Team will need to connect to BDN, TIMS, and NEWMAN.
  - VYE Team will need to tie API call and route updates into NEWMAN for the chapters relevant to this project. This will require the VYE Team to coorinate with BDN to write the logic.
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - tbd
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows.
* A new application leveraging VA.gov's authentication that will communicate with TIMS and BDN for efficient enrollment verification. 
> *What have you explicitly decided to **not** include and why?*
* The VYE Team decided not to include the current administrative portion of WAVE. Our reasoning is described in the "Problem" section.  
> *How does this solution address your Assumptions & Risks?
* By having VYE findable on VA.gov in a modern environment we can manage VYE with VA.gov support for a better user experience. 

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
* Communication between the VYE Team and EDU is necessary for this product to be successful.
* Marketing for WAVE to VYE is necessary so Veterans are aware of the transition and can verify their enrollment accordingly.
* VYE Team will leverage VA communications closer to the product launch. 

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket, tbd

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
* August 07, 2023 Project start
* September 29, 2023 Complete OCTO onboarding
* October 2023 Intiiate Collaboration Cycle kickoff
* March 13, 2024 Complete development
* May 13, 2024 Complete testing
* June 2024 Launch prep
* June 2024 Conduct staging review\
* June 2024 Deploy to Prod
* July 12, 2024 Complete collaboration with OCTO
* July 13, 2024 Project end 

* [Link to Release Plan for this Initiative](https://github.com/department-of-Veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - March 2024
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
![02f75274-0026-49a5-b0bb-ed0353d6176a](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/b19c9b41-97bc-4d97-8e68-dada303ea0cf)
![d25b2567-0862-4ab8-a94b-5a0b6eb573ac](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/f238776e-70b3-4fef-b8ac-67b87dd8cca6)
![71359376-3d1f-450f-a0c6-5e1625c41cc8](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/c06b3ef7-0917-49a4-9ab0-c540dd3720d7)


### After
tbd
---

#### Communications
*Where will you discuss this initiative?* VYE Slack Channel (#vye_team), Team of Teams Zoom calls, VYE Business Touchpoint meetings with EDU. 

<details>

- Team Name: Verify Your Enrollment
- GitHub Label(s): #vye_team
- Slack channel: #vye_team
- Product POCs: Jason Wolf (Jason.Wolf1@va.gov | jason-gcio), Cassidy Beach (Cassidy.Beach@va.gov | cassidy-beach)

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?* EDU, VYE Team at GovCIO

<details>
  
- Office/Department: Office of Information and Technology
- Contact(s): Darla van Nieukerk (Darla.VanNieukerk@va.gov)  
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-Veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
