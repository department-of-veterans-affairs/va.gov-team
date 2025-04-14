# Non-VA Patient Landing Page Initative Brief

## Outcome Summary
Non-VA patients who visit va.gov/my-health have access to the same information they were able to access on MHV Classic - self-entered health information and DOD military service infromation - easily and without having to look around.  They should be informed of their new experience on MHV on VA.gov and how to sign-up for VA healthcare if they choose.

**Related/Associated product(s)**
- [MHV on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov)
- [MHV on VA.gov landing page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page)
-  [Account Creation API
](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/governance/mhv-account-creation-api.md)

## Problem
* At Milestone 2, when MHV Classic features are no longer available, MHV users who are non-VA patients (except for CHAMPVA meds by mail users) will loose the ability to retrieve their historical self-entered health information and the ability to retrieve their DOD military service information from Blue Button on Classic.
* With the current access logic implemented by MHV on VA.gov, MHV users who are non-VA patients are gated at va.gov/my-health with an alert that doesn't allow them to access tools in the portal to have access to the historical self-entered health information report in Medical Records or Blue Button report in Medical Records which includes DOD military information.
* Opening up full access to the MHV on VA.gov portal to these users, sets them up for multiple dead ends and doesn't help them understand where to find the informaiton the are seeking or why the experience is different.

## Impacted Users
- This impacts roughly 10,000 users (~1%) of users who have logged into MHV Classic in the past two months. 
- February 2025 - 9.5K non-VA patients logged into MHV Classic 
- March 2025 - 9.8K non-VA patients logged into MHV Classic

## Desired User Outcomes
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*
- MHV users who are non-VA patients and are directed to va.gov/my-health after Milestone 2 are able to easily access their self-entered health information report and DOD military history from the landing page.
- These users understand why they don't have full access to all of MHV on VA.gov and are able to find key health information links to support them in managing their health ie. Veterans Health Library, Mental Health Resources, etc. 
- These users understand how to sign up/register for VA healthcare if they wish to.

## Undesired User Outcomes
- These users need to search within the MHV on VA.gov portal to access this information.  
- These users are confused why they don't have full access to the portal. 

## Desired Business Outcomes
- Create a simplifed MHV on VA.gov landing page to provide an experience catered for MHV users who are non-VA patients.
- Non-VA patients don't loose access to information they previously were able to access.

## Undesired Business Outcomes
- Non-VA patients loose access to information they previously were able to access.

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

### What're you building
- A simplifed MHV on VA.gov landing page to provide an experience catered for MHV users who are non-VA patients.
- A link to download self-entered health information report from the MHV landing page.
- A link to download DOD military service information from the MHV landing page. Ideally this should be a new-stand alone report for non-VA patients.  If constrained by tech or resources can consider a link to download Blue Button report with only access to DOD service information. 
- Non-VA patients no longer experience a warning alert, instead a simplfied landing page. 
- Not updating the logic on MHV on VA.gov portal to expand to non-VA patients.


#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

#### Initiative Launch Dates
- *Target Launch Date*
  - Milestone 2 - June 4, 2025
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before - [Figma](https://www.figma.com/design/m992k2m1DSl9MXV9hDytsQ/MHV-Account-Security---Access-Standards?node-id=6-14351&p=f&t=c4KkjqPDTxFJrasK-0)
![image](https://github.com/user-attachments/assets/55b733af-b035-499b-ae65-21a81887e987)


### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: MHV Cartography Team, which may need to coordinate with MHV Medical Records team for the information. 
- GitHub Label(s): 
- Slack channel: #mhv-on-vagov-cartography-team, mhv-health-portal-coordination
- Product POCs: Kaitlin Fink, Robyn Singleton, Marci McGuire

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCC
- Contact(s): Theresa Hancock, Carnetta Scruggs
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-ris
