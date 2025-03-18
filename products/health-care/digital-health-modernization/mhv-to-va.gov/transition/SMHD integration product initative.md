# SMHD Integration to MHV on VA.gov Initiative Brief
#### Overview

## Outcome Summary
OCC has launched a new app/website for Veterans to track their shared vitals called Share My Health Data. Veterans need to be able to access this website from the patient portal on VA.gov to manage their health information from a central location.  This work needs to be complete on VA.gov by the time we sunset the MHV national portal since veterans were able to do this through the Shared Vitals feature there. 

**Related/Associated product(s)**
- [MHV Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov)
- VAHB outline

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
- The number of Veterans who are aware of SMHD increases over time - pending data
- The number of Veterans who sign up to use SMHD increases over time - pending data
- The number of Veterans who collect a device or manually input data into SMHD increases over time - pending data
- The number of SMHD users equals or exceeds the number of users who used Shared Vitals app
  
## Undesired Business Outcomes
- Veterans awareness of SMHD does not increase over time
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

SMHD Analytics Links: 
- https://app.powerbigov.us/groups/me/reports/ed822b31-b659-40ae-b849-272014a76ea4/ReportSectiona08aa2c96a16e609067a
- https://staff.apps.va.gov/pulse-analytics/login?preLoginUrl=Lw
---

## Discovery
### Assumptions/Risks
- **Value Risks** (will people use it): 
  - Veterans don't understand the value of the SMHD app through the integration points on VA.gov/VAHB.
  - Veterans don't click on the integration and we risk veterans not getting the care they need or expect of the VA because they don't share with their providers.
- **Usability Risks** (can people figure out how to use it):
  - Veterans get frusturated with the experience of going between two sites/apps.
  - Veterans need to sign-in twice.
  - Veterans get frusturated they need to notify their providers that they are using the integration.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - QA/testing across multiple organizations
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Coordinating strategy, content and direction across multiple organizations

### What're you building
- A seamless sign-in integration with the new SMHD app/website from VA.gov and VAHB so users only have to authenticate once.
- Content and placement within the portal and health section of the app that drives users to enage with the link and share their health information.
- Careful consideration on placement and communication on VA.gov/VAHB and associating this product with MHV.  Taking lessons learned about association of MHV sign in credentials with the new portal experience. And being mindful that this is not a replacement for shared vitals but more. With this we should consider placing this outside of the Medical Records section on Va.gov.
- We want to ensure there is a smooth user experience for veterans who click on this link from the VA.gov/VAHB and back again but we are not responsible for the user experience on the SMHD website/app.
- Veterans understand the value of sharing their data with there providers and veterans who specifically need more care and support from their providers.

### Addditional Links
- [SHMD App and Website Audit](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1733945376690/0922bcaa83d13ab4336e6e04608e515f73bf5033)
- Sandbox: https://smhd2.mapsandbox.net/smhdWeb/
- Staging/SQA: https://veteran.apps-staging.va.gov/smhdWeb
- Production: https://veteran.apps.va.gov/smhdWeb/
- https://mobile.va.gov/app/share-my-health-data

### Addditional Context on the app 
Notes from SME meeting 2/19 with Dr. Newton, Dr. Shah, Kim Bielicki, Theresa Hancock, Robyn Singleton, Lauren Alexanderson, Kaitlin Fink: 
- SMHD app/website is more than just a replacement of Shared Vitals experience that exists on MHV today.  It's an ecosystem that has a lot of clinical uses and value to both providers and Veterans.
- SMHD has it's own ATO.  Data is stored in FISMA high database and is covered under a SORN and NARA retention standards.
- We've learned from the MHV sign-in transition that communications and associating the sign-in to the new MHV experience on VA.gov can have some downsteam impacts on the Veteran experience so we should be cognizant of how we communicate the new SHMD app/website to users and where it shows up on VA.gov.  
- The web version allows users to connect CGM devices, the mobile version veterans can connect bluetooth devices.  There is a pilot going on to understand if veterans have a prefernce of mobile vs web in connecting CGM devices.
- There are no plans for the personal health information users can self-enter on MHV today to be added to the SHMD experience.  We know from research with veterans they have confusion with this and intepret the word share differently.  We should take this into consideration when designing the content and experience on VA.gov and the transition/sunset communications on MHV classic for self-entered information.  Also consider the language of that currently exists with the VHIE (veterans health information exchange) and sharing data through that.
- Veterans do still have to tell their provider they are using SMHD for them to be notified.  Providers have nothing telling them/notifying them of the patients using this app.
  - There is guidance in the field for providers to tell how to use it. (AI: Kaitlin trying to get ahold of the guidance providers get)
  - Providers can connect directly from their CPRS console to the diabetes dashboard where all the CGM data is available.
- There is a broad ecosystem of clinical usage of the data in SMHD:
  - meet quality metrics around hypertension
  - continuous glucose monitors to manage diabetes
  - connect movement and activity and tie these to move goals
- Veterans who get continuous glucose monitors through the VA should be encouraged to connect their accounts through SMHD to share with their healthcare team.
- SMHD web version has same features and functions as the app just no bluetooth connection.  Users can connect continuous glucose monitors (CGMs) through the website.
- There is currently a CGM pilot with 40 pharmacists all over the VA with the web version to understand do veterans prefer a mobile or web app to connect CGM devices.

  
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
  - No later than Milestone 2 : June 4, 2025 
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
No experience today, but current experience on MHV National Portal with Shared Vitals
![image](https://github.com/user-attachments/assets/e2f132ae-ae6a-493e-8bbf-8fed81d44210)


### After

---

#### Communications
- Team Name: MHV Portal 
- GitHub Label(s): 
- Slack channel: mhv-health-portal-coordination, mhv-on-vagov-cartography-team, mhv-medical-records
- Product POCs: Kaitlin Fink, Patrick Bateman, Marci McGuire,Robyn Singleton


#### Stakeholders
- Office/Department: Office of Connected Care 
- Contact(s): Brian Olinger (PM- newly added to project), Dr. Terry Newton, Dr. Nil Shah, Dr. Meredith Josephs, Theresa Hancock, Kim Bielicki, Bresha Lipscomb
 
