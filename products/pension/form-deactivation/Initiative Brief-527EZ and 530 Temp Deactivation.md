# Initiative Brief Template

## Outcome Summary
* Temporarily prevent users on VA.gov from submitting the online Application for Pension (527EZ) and Burial (530) forms. The online forms will be restored once it is updated to align with the paper versions. The goal is to acheive 0 online submissions for the 527EZ and 530 forms.
* Notify users with in-progress forms via email of the change and provide instructrions on how to submit a claim (via paper).
* Allow users with in-progress online forms view a summary of the data they have input. 

**Related/Associated product(s)**
- Product | [527EZ and 530 online forms](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/pension) 

## Problem
* The online forms are several versions behind the paper versions. Because of this, the online forms can no longer be processed.
* Currently, users who submit a 527EZ or 530 online are instructed (via mailed letter) to start over using the paper forms.
* Temporarily preventing users from submitting the online 527EZ and 530 forms will:
  * Decrease the time Veterans spend waiting for an outcome
  * Increase the quality and reliability of VA services

## Desired User Outcomes
- By solving this problem, users will be able to establish pension and burial benefits faster without filing multiple claims.

## Undesired User Outcomes
- Users contiue to access the online 527EZ and 530 forms and submit claims.

---
## Measuring Success

### Key Performance Indicators (KPIs)
- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
- Volume of online 527 EZ form submissions
   - Current: 3,000 per year
   - Goal: 0 during deactivation period
   - Source: Eric Henne and team
- Volume of online 530 form submissions
   - Current: unknown
   - Goal: 0 during deactivation period

---

## Discovery
### Assumptions/Risks
- **Value Risks** (will people use it): 
  - Removing access to the online forms and redirecting users to the paper form will create less frustration for users and get them benefits faster.
- **Usability Risks** (can people figure out how to use it):
  - Users will understand that they can not start or continue online 527EZ and 530 form submissions, and they will user the paper forms instead.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - The content changes on VA. gov will be easy to implement.
  - The in-progress review functionality will leverage the existing form review functionality on VA.gov.
  - The VA Notify team will facilitate emailing users with in-progress claims.
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Temporarily deactivating the 527EZ and 530 online forms will decrease the number of claim submissions that require development.

### What're you building
- Remove access to the 527EZ and 530 online forms by deactivating links to the forms within the authenticated user experience on VA.gov
- Add language to the affected pages explaining that the online forms are not working and provide instructions on next steps for the user
- Allow users to view a summary of the form data they have already filled in via a review form page.
- An email communication notifiying users with in-progress claims that they cannot submit them and need to start over with the paper form.
- This work will **not** involve updating the online 527EZ and 530 form.

#### Go-to-market 
- Email outreach (via VA Notify) will be send to users with in-progress 527EZ and 530 forms. A seperate request to review the email message content has been submitted to CAIA for [527EZ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62448#event-9901396761) and [530](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62448#event-9901396761).

--- 

## Launch Planning
### Collaboration Cycle

- [Kickoff Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62889)
- [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/35cd638de089a34c261752762c8e5928f9a9759a/products/pension/Release%20Plan-527EZ%20and%20530%20Temp%20Deactivation.md)
- [UAT Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/79d2a7cef66e87523f2433e585f4c55236e3f002/products/pension/UAT%20Plan-527EZ%20abd%20530%20Temp%20Deactivation.md)

### Timeline 
- ASAP. This is a high-priority project for OCTO, and work will start as soon as it is approved by the Collab Cycle and CAIA.

#### Initiative Launch Dates
- *Target Launch Date*
  - August 2023
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots
- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689262813123/cb880912d3f71ef79be0d63d0e61e306d1e6ae31?wid=0-1689360929417&sender=u0e8ac1d6d7681bb7e1b80558) of proposed plan for deactivation

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: OCTO | Non-Disability Experience Team | Pension (Team Umbrella)
- GitHub Label(s): pension, burial
- Slack channel: benefits-ce-non_disability_exp
- [Epic to deactivate forms](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62027)
- Product POCs: Laura Steele

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO
- Contact(s): Matt Self, Julie Strothman
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
