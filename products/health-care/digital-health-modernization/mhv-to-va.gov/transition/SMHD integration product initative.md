# SMHD Integration to MHV on VA.gov Initiative Brief
#### Overview

## Outcome Summary
OCC has launched a new app/website for Veterans to track their shared vitals called Share My Health Data. Veterans need to be able to access this website from the patient portal on VA.gov to manage their health information from a central location.  This work needs to be complete on VA.gov by the time we sunset the MHV national portal since veterans were able to do this through the Shared Vitals feature there. 

**Related/Associated product(s)**
- Product | Link to product outline 

## Problem
- Veterans need to be able to seamlessly manage their health information from the health portal on VA.gov and VAHB.  
- Veterans should be able to understand the value of using the SMHD app/website to enter their health information and share with their providers.
- Veterans should be able to find all the tools to manage their healthcare in one place without having to carry the mental load of where they should go to look. 

## Desired User Outcomes
- Veterans go to va.gov/my-health or VAHB-> Health section to navigate to and manage all of their healthcare needs.
- Veterans understand the value of using SMHD and choose to interact with it.
- Veterans sign-in once and can maintain their credentials across the two sites/apps without having to sign-in again.

## Undesired User Outcomes
- Veterans do not engage with the SMHD app/website from the portal/app.
- Veterans get frusturated with the experience of going between two sites/apps.
- Users associate this as a replacement for shared vitals.
  
## Desired Business Outcomes
- Veterans use of SMHD goes up over time.
- 
## Undesired Business Outcomes
- Veterans usage of SMHD goes down from the baseline use of Shared Vitals/SHMD today.
- Users associate this as a replacement for shared vitals and don't find value in using the new app. 

---
## Measuring Success

### Key Performance Indicators (KPIs)
> *Example: 
> Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

 We do not have access to current data or a great baseline of use.  The success of SHMD goes beyond the reach of VA.gov/VAHB but we would like to create awareness in the product.  Team will work on KPI based on the design we move forward with.  

- Increase the total number of clicks from VAHB/VA.gov | Baseline of 0 | Target X% of all users | Link to data source

Data available today: 
- Between 2021-12-17 and 2025-02-19, 12,016 veterans entered 1,045,375 observations into PGHD (Shared vitals) - Data came from Dr. Terry Newton
- 4000 users of SMHD app as of 2/18 - Data came from Iron Bow program team Balbi Todd

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
- A seamless sign-in integration with the new SMHD app/website from VA.gov and VAHB so users only have to authenticate once.
- Content and placement within the portal and health section of the app that drives users to enage with the link and share their health information.
- Careful consideration on placement and communication on VA.gov/VAHB and associating this product with MHV.  Taking lessons learned about association of MHV sign in credentials with the new portal experience. And being mindful that this is not a replacement for shared vitals but more. 
- 
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?

### Addditional Links
- [SHMD App and Website Audit](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1733945376690/0922bcaa83d13ab4336e6e04608e515f73bf5033)

### Addditional Context on the app 
Notes from SME meeting 2/19 with Dr. Newton, Dr. Shah, Kim Bielicki, Theresa Hancock, Robyn Singleton, Lauren Alexanderson, Kaitlin Fink: 
- SMHD app/website is more than just a replacement of Shared Vitals experience that exists on MHV today.  It's an ecosystem that has a lot of clinical uses and value to both providers and Veterans.
- SMHD has it's own ATO.  Data is stored in FISMA high database and is covered under a SORN and NARA retention standards.
- We've learned from the MHV sign-in transition that communications and associating the sign-in to the new MHV experience on VA.gov can have some downsteam impacts on the Veteran experience so we should be cognizant of how we communicate the new SHMD app/website to users and where it shows up on VA.gov.  
- The web version allows users to connect CGM devices, the mobile version veterans can connect bluetooth devices.  There is a pilot going on to understand if veterans have a prefernce of mobile vs web in connecting CGM devices.
- There are no plans for the personal health information users can self-enter on MHV today to be added to the SHMD experience.  We know from research with veterans they have confusion with this and intepret the word share differently.  We should take this into consideration when designing the content and experience on VA.gov and the transition/sunset communications on MHV classic for self-entered information.  Also consider the language of that currently exists with the VHIE (veterans health information exchange) and sharing data through that.
- 

  
#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

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

- Team Name: 
- GitHub Label(s): 
- Slack channel: 
- Product POCs:

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
