
# Verify Your Enrollment Product Outline
*Iterating on a product? Have a new feature? Check out the [Initiative Brief Template.](https://bit.ly/initiative-brief-template)*

---

## Overview
*After you've explored the problem and through testing / hypothesis have identified the ideal solution, write up one sentence describing the solution you'll be creating.*
* Take the non-compliant legacy system Web Automated Verification of Enrollment (WAVE) on PITC (a local server) and move it Verify Your Enrollment (VYE) on VA.gov.

## Problem Statement
*In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address. [Here's a sample problem statement definition activity you can try on your team to help generate this](https://www.atlassian.com/team-playbook/plays/problem-framing)*
* *What is the problem and who is affected? And, what evidence do we have of the problem?* WAVE is currently non-compliant because it uses JavaScript, which is no longer sanctioned by the U.S. goverment because of data security concerns. This is a problem because WAVE holds Veterans' personally identifiable information. Evidence originated from the business. Moving from WAVE to VYE will primarily affect Veterans who are entitled to benefits under Chapters 30, 1606, and 1607 of the post-9/11 GI bill, it can also affect the VA and other teams contracted through the VA, such as the Veteran Readiness and Employment Product Sustainment and Enhancement Services Team, who use information from WAVE for their work. The administrative portion of WAVE affects people at the VA who need access to the amount of Veterans who verified their enrollment, how many Veterans access the website, and similar information. Evidence of the problem exists in use of the application itself: when attemping to browse the administrative portion of WAVE, the VYE team experienced a lack of functionality. Evidence also exists in the EDU Team's lack of access to proper information, since it does not provide dates past 1999.
* *Why do you think the problem is occurring? Other reasons why this might be occurring?* The problem occurs because WAVE has not been updated - coding, the look and feel of the website, functions of the website, etc. - in nearly 10 years, meaning the system is archaic and can be difficult or confusing to use. Usage difficulties are problematic because they act as a barrier for Veterans seeking to access their education benefits, especially for Veterans with disabilities who require modern technological assistance. 
* *How does this initiative help further OCTO-DE's mission and goals?* Modernizing WAVE and moving it to VA.gov aligns with OCTO-DE's mission to update VA applications, create the best experience for all Veterans by streamlining the process to receive education benefits, and provide a seamless Veteran experience through the delivery of state-of-the-art technology by improving the functionality and experience of the application.

*Follow your problem description up with a "How might we... _______" statement re-framing that challenge as an opportunity. Don't hint too much at what the solution might be, you should have enough of a focal point here to guide your ideas, but plenty of freedom to think laterally and innovatively as you experiment and prototype later.*
 
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
- WAVE does not currently have KPIs | Baseline | Target | VYE Team plans to leverage Google Analytics and Domo through VA.gov to capture data and implement future KPIs.
  
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
  - Key result: 


---

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

## Solution Approach
* By having VYE findable on VA.gov in a modern environment we can manage VYE with VA.gov support for a better user experience.

- *What are you going to build now, and why have you decided to start there?* The VYE Team is building Verify Your Enrollment on VA.gov. We are starting here because the EDU asked it of us. The WAVE application needs to be updated and have its information in a centralized location. 
- *Why this solution / approach over other solutions / approaches?* This approach is best because it protects the PII of Veterans and creates easier access for Veterans to verify their enrollment by streamlining the process. 
- *What have you explicitly decided to not include in this initial set of functionality, and why?* The VYE Team decided not the include the administrative portion of WAVE because most of it is not functional or provides unnecessary/impertinent information to the business.
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?* This approach will allow WAVE, now VYE, to be easily accessible and editable by the VA for future changes to the application. 

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*
* tbd

- Initiative | [Link to Initiative Brief](#)

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?* The VYE Team will collaboration and coordinate with VA communication centers to market this product so Veterans will know it exists. 
- *What marketing, outreach, or communications are necessary for this product to be successful?* tbd
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - March 2024
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before
![02f75274-0026-49a5-b0bb-ed0353d6176a](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/4c1ac34a-b6f7-47bb-861c-90168fc11cbd)
![d25b2567-0862-4ab8-a94b-5a0b6eb573ac](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/d2f62412-384e-4ce8-b736-0503df9c9ad6)
![71359376-3d1f-450f-a0c6-5e1625c41cc8](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/c06b3ef7-0917-49a4-9ab0-c540dd3720d7)

### After
tbd
---

#### Communications

<details>

- Team Name: Verify Your Enrollment
- GitHub Label(s): #vye_team
- Slack channel: #vye_team
- Product POCs: Jason Wolf (Jason.Wolf1@va.gov | jason-gcio), Cassidy Beach (Cassidy.Beach@va.gov | cassidy-beach)
- Stakeholders: EDU, VYE Team at GovCIO

</details>

#### Team Members

<details>
 
 - DEPO Lead: Emily Theis (Emily.Theis@va.gov) 
 - PM: Jason Wolf (Jason.Wolf1@va.gov)/Cassidy Beach (Cassidy.Beach@va.gov)
 - Engineering: Jarred Simon (Jarred.Simon@va.gov)
 - Research/Design: Ryan Gray (Ryan.Gray1@va.gov)
 
</details>

## Indicents Response Information

Points of contact for your system and dependent VA backends:

Links to dashboards that help identify and debug application issues:

#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_ 
EDU, VYE Team at GovCIO
Office of Information and Technology | Contact: Darla van Nieukerk (Darla.VanNieukerk@va.gov)
 
</details>
