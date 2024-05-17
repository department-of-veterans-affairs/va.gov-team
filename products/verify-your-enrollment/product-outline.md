
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
* *Why would a user want to use this?* A Veteran would want to use this because the streamlined application allows them quicker and easier access to their Chapter 30/1606/1607 education benefits. It will also be located in a centralized location that has supporting functionality within VA.gov. Aside from calling a live agent or through IVR, once it works, VYE is the only way Veterans are able to verify their school enrollment and access their MGIB education benefits. 
* *With this problem solved, what should users be able to do/achieve that they couldn't before?* VYE is simpler and more accessible web-application than WAVE, allowing claimants to quicker and easier access to verify their school enrollment and recieve their benefits. 

## Undesired User Outcomes
> *Describe the undesired user outcomes:* 
* Lack of accessability for disabled Veterans/non-508 compliant. Update: This problem has been solved by working with CAIA, using VA approved design components, and ensuring our design and frontend code meets 508 requirments. 
* Lack of access to data analytics information for the EDU Team. Update: The EDU will have access to data analytics via Google Analytics, which will provide them with more information than they had before. 
* Inability to confirm enrollment. Update: VYE connects to the same databases as WAVE (TIMS/BDN/NEWMAN), so all enrollment information will be available as it was prior to the move to VA.gov.
* Incorrect enrollment/benefit information. Update: VYE connects to the same databases as WAVE (TIMS/BDN/NEWMAN), so all enrollment information will be available as it was prior to the move to VA.gov.
* One issue the VYE Team ran into with information architecture is the existence of the _Manage your benefits_ page on VYE. They thought having a benefits page within VYE (in addition to VA Profile on VA.gov) may be confusing for users. Since Chapter 30/1606/1607 recipients already use this funciton on WAVE and the issue was brought up close to our launch date, VYE and Platform agreed to take on the issue after production. 

## Desired Business Outcomes
> *Describe the desired business outcomes:*
* Effective processing of monthly verification of enrollment through VA.gov
* On-time release of VYE on VA.gov
* No bugs in the application
* Feedback from Veterans considered/used in final product
* Increased automation/less manual labor to verify enrollment
* More information provided to Veterans so they can make informed decisions regarding their enrollment
* Accessibility and 508 Compliance requirements met 

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
  - Moving locations may impact Veterans' ability to find the application. Update: Everything mentioning WAVE on VA.gov is being changed to "Verify your enrollment" with a link leading to the VYE landing page. 
- **Usability Risks** (can people figure out how to use it):
  - Veterans may have difficulty finalizing their enrollment because the application will look and operate differently. Update: Design and flow through the application has been optimized through VA design components and through collaboration with EDU, OIT, and CAIA. 
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - VYE Team will want to leverage technology and data available through VA.gov. Update: VYE is using Google Analytics, DataDog, Domo, etc. through VA.gov to measure data analytics. 
  - VYE Team will need to connect to BDN, TIMS, and NEWMAN. Update: VYE is using a SFTP server to connect to BDN, TIMS, NEWMAN to access all necessary claimant data. 
  - VYE Team will need to tie API call and route updates into NEWMAN for the chapters relevant to this project. This will require the VYE Team to coorinate with BDN to write the logic.
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - VYE is fully accessible according to accessibility standards, it lives on the VA.gov network so it will be easier to navigate to, is no longer a security risk. The primary constraint in pushing VYE into production is that WAVE and VYE cannot be in operation at the same time because of how the databases operate. WAVE will need to be completely shut down 24 hours before VYE is able to go into production. This means some claimants who want to access their Chapter 30/1606/1607 benefits will not be able to until we are able to fully launch VYE on VA.gov
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

## Solution Approach
* By having VYE findable on VA.gov in a modern environment we can manage VYE with VA.gov support for a better user experience.

- *What are you going to build now, and why have you decided to start there?* The VYE Team is building Verify Your Enrollment on VA.gov. We are starting here because the EDU asked it of us. The WAVE application needs to be updated and have its information in a centralized, secure location. 
- *Why this solution / approach over other solutions / approaches?* This approach is best because it protects the PII of claimantas and creates easier access for claimants to verify their enrollment by streamlining the process. 
- *What have you explicitly decided to not include in this initial set of functionality, and why?* The VYE Team decided not the include the administrative portion of WAVE because most of it is not functional or provides unnecessary/impertinent information to the business. This functinality will be available through the use of tools such as Google Analytics; therefore, it is not necessary. Additionally, deleting the administrative portion of WAVE makes navigating VYE more efficient. 
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?* This approach will allow WAVE, now VYE, to be easily accessible and editable by the VA for future changes to the application. After VYE launches on VA.gov the team will undergo merging _Mange your benefits_ (that houses direct deposit and address information) on the VYE applicaiton with VA Profile to eliminate the need for claimants to input their direct deposit and address information in multiple places. 

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- VYE will not undertake new initiatives until after it launches on VA.gov.

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?* The VYE Team will collaborate and coordinate with VA communication centers to market this product so Veterans will know it exists. 
- *What marketing, outreach, or communications are necessary for this product to be successful?* Information about the transition from WAVE to VYE put into SCO in the Know starting April 10, 2024; Communications Team will handle award letters; Carousel will update the EDU webpage; information sent out in the GI Bill student email newsletter; WAVE webpage will have a direct link to VYE landing page.
- [Link to VYE Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/verify-your-enrollment/release-plan-May-2024.md)

## Launch Dates
- *Target Launch Date*
  - mid-June 2024
- *Actual Launch Date* 
  - TBD
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - Two months after launch on VA.gov. 

---

## Solution Narrative

### Current Status
May 17, 2024: VYE is preparing to schedule Staging Review and Privacy, security, infrastructure readiness review 
### Key Decisions
August 2023: Web Automated Verification of Enrollment (WAVE) changed to Verify Your Enrollment (VYE) to more closely align with the system's enhanced functionality but also represents the feature on VA.gov known as “Verify Your Enrollment.” 
September 2023: VYE decided to keep using BDN/TIMS/NEWMAN and spool files for VYE backend because there is no other way to get claimant data until DGIB is completed. 
October 2023: Creation of VYE Benefits Profile page (now called _Manage your benefits_) because VYE backend does not have the functionality to connect to VA Profile.
October 2023: VYE and EDU decided to eliminate the administrative portion of WAVE to reduce noise in the web-applicaiton and because the functionality of the administrative page can be accomplished using VA data analytics integrations.
February 2024: Creation of direct deposit form.
February 2024: Creation of address change form. 
March 2024: VYE decided to set up SFTP server to connect WAVE/VYE backend to VA.gov to keep claimant data secure. 
March 2024: Creation of JSON schema. 
March 2024: Start of creation of SFTP server. 
May 2024: VYE Team and Platform decided to wait until after VYE launch on VA.gov to integrate VYE _Manage your benefits_ page with VA Profile. 

---
   
## Screenshots

### Before
![02f75274-0026-49a5-b0bb-ed0353d6176a](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/4c1ac34a-b6f7-47bb-861c-90168fc11cbd)
![d25b2567-0862-4ab8-a94b-5a0b6eb573ac](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/d2f62412-384e-4ce8-b736-0503df9c9ad6)
![71359376-3d1f-450f-a0c6-5e1625c41cc8](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/c06b3ef7-0917-49a4-9ab0-c540dd3720d7)

### After
![VYE S1](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/76df05fa-15b1-441a-8191-21037b2e9168)
![VYE S2](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/d12fe101-59ae-46f2-b432-59508b74bc96)
![VYE S3](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/3bb89f83-7a7a-4225-b4be-2df67e1a1214)
![VYE S4](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/2ed3d7eb-2383-4bac-8554-da949d9ead71)
![VYE S5](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/fcdc2ad1-5a0c-4da0-8928-40ff52d7cc6a)
![VYE S6](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/83912f5a-81e7-4b4a-a534-a02ca5bd8050)

---

### Updated architecture diagram that shows the involved systems and how they connect 
[Full Architecture Diagram.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/15355298/Full.Architecture.Diagram.pdf)
![Full diagram screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/assets/143453442/c3b8cd67-4e5b-4b60-bffb-a90682fec1be)


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
- TIMS Business Pierre Brown, pierre.brown@va.gov 
- TIMS IT Timothy M. Allgeier, timothy.allgeier@va.gov 
- BDN (TITSA) Primary James (Jim) Sotzen, james.sotzen@va.gov
- IVR Ramesh Pitchumani, ramesh.pitchumani@va.gov
- NEWMAN Cynthia Ross, cynthia.ross1@va.gov 

Links to dashboards that help identify and debug application issues:

#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_ 
EDU, VYE Team at GovCIO
Office of Information and Technology | Contact: Darla van Nieukerk (Darla.VanNieukerk@va.gov)
 
</details>
