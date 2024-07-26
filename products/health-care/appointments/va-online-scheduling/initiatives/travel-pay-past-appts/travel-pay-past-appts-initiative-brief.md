# Initiative Brief - Travel Pay for Past Appointments
## Overview

This initiative allows Veterans to submit a mileage-only travel reimbursement claim for a past appointment via the VA.gov Appointments application. A past appointment is defined as an appointment that occured up through 30 days prior to today.
 
## Outcome Summary

A Veteran can submit a mileage-only travel reimbursement claim for a past appointment via the Appointments VA.gov application in addition to existing options of submitting a paper form to the travel office or submitting via the BTSSS portal.

## Problem
* What is the problem and who is affected? And, what evidence do we have of the problem?
  - Veterans find it difficult to use the BTSSS portal to file a travel reimbursement claim.
  - Veterans find it time consuming to submit a paper form for a travel reimbursement claim.
* Why do you think the problem is occurring? Other reasons why this might be occurring?
  - Filling out paper forms is time consuming
  - BTSSS portal is confusing 
* How does this initiative help further OCTO-DE's mission and goals?
  - Improve user satisfaction
  - Meet user expectations of available online transactions 
 * Veteran feedback during research
   ![image](https://github.com/user-attachments/assets/80e797a7-f14f-4410-9fdf-a01390a35e94)


## Desired Outcomes
- Veterans have an online application with which they can submit a mileage-only travel reimbursement claim for a past appointment.
- Veterans find the online process to submit a mileage-only travel reimbursement claim for a past appointment easy-to-use.

## Undesired Outcomes
- Veterans do not understand that they can only submit a mileage-only travel reimbursement claim via the VA.gov Appointments application.
- Veterans do not undersatnd how to submit a mileage-only travel reimbursement claim via the VA.gov Appointments application.
- Veterans prefer to submit a travel reimbursement claim via a paper form or the BTSSS portal.

## Key Decisions
- We are limiting submission of a travel reimbursement claim to mileage-only claims because that is the only type of claim the BTSSS API currently supports.

## Measuring Success
- Success will be measured by the % of veterans using VA.gov's Appointments application to submit a travel reimbursement claim versus paper forms or the BTSSS portal.
  - Number of users who click the link that opens the travel claim form
  - Number of users who submit the travel claim form
  
## Discovery

### Relevant studies
- [Travel Reimbursement MVP Remote Usability Test - August 15-23 2022](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/veteran-facing/travel-reimbursement-mvp-remote-test)
- [Patient Check-in Travel Reimbursement Staff Research at Wilkes-Barre - August 2023](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/2022-12%20Patient%20Check%20In%20Travel%20Reimbursement%20Staff%20Interviews%20at%20Wilkes-Barre)
- [Patient Check-in Travel Reimbursement Veteran Research at Wilkes-Barre - August 2023](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/2022-12%20Patient%20Check%20In%20Travel%20Reimbursement%20Veteran%20Intercept%20at%20Wilkes-Barre)
- [Past Appointments Travel Reimbursement Generative Usability Research - January 2024](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/2023-11%20Past%20Appointments%20Travel%20Reimbursement%20Generative%20Usability%20Study)

### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The experience may vary based on the data we have for the appointment type
  - If user is unable to find any value in VAOS, they may lose trust in the application and are less likely to return
- **Usability Risks** (can people figure out how to use it):
  - We will have to balance between showing the right amount of information in the appointment list 
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Must work with our engineers to see what available data we can use to enhance the appointment details 
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: VA stakeholder testing, marketing, compliance requirements 

### Prioritization
1. Provide clear and value information in the appointment list
2. Facility location 
3. TBD - "Appointment List Improvement" requests

### Solution Summary
- Date and time change only


--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
1. Launch of the updated appointment list view will be marketed as an enhancement and will be part of a re-launch campaign for VAOS.
* Re-launch and new appointment list will be marketed through veteran focused electronic newsletters, especially those related to health care.
* Specific newsletters need to be identified and timelines for publication coordinated with launch plans

2. VAOS team investigating the use of an online, one time notice that would appear to veterans when navigating to VAOS landing page
* Notice would be a small indicator that something is new on the site.
* Clicking on the notice would provide more details about the change to the appointment list view.
* The online notification would lose focus after a veteran has clicked on it.  This includes subsequent sessions.
* Online notification would only be visible for a configurable date range.
* VAOS team to investigate feasibility of such a feature with the platform support team.

3. VA and CC scheduling personnel will need to be informed of the appointment view update and provided a demonstration.

4. VAOS product guide will need to be updated to include new screen shots of the updated appointment list view

5. Call Center will need to be informed of change to appointment list view

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

Current State: 

<img width="592" alt="Screen Shot 2022-05-05 at 8 01 54 AM" src="https://user-images.githubusercontent.com/90797205/166919184-d6aa9850-f205-4542-b78c-b28836dd24e8.png">

Future State (Post v2 Launch): 

<img width="638" alt="Screen Shot 2022-05-05 at 7 58 13 AM" src="https://user-images.githubusercontent.com/90797205/166919230-c2640d26-5b42-44b1-81d0-361842eb8e4d.png">


### After

[Prototype](https://www.figma.com/proto/JpGM8LGBCqAlL8qh3DmFk8/Home-Page-Redesign?node-id=193%3A24159&starting-point-node-id=193%3A24159)

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: VA Online Scheduling
- GitHub Label(s): vaos 
- Slack channel: #vaos-team
- Product POCs: [Leah De La Costa](https://dsva.slack.com/team/U02F00JPL79) and [Jeff Roof](https://dsva.slack.com/archives/D02UD9VS3JP)

</details>
 
#### Team Members

<details>
 
- DEPO Lead: [Lauren Alexanderson](https://dsva.slack.com/team/U772MC9BQ)
- PM: [Leah De La Costa](https://dsva.slack.com/team/U02F00JPL79) and [Jeff Roof](https://dsva.slack.com/archives/D02UD9VS3JP)
- Engineering: [Simi Adebowale](https://dsva.slack.com/archives/D037VNB23T2)
- Research/Design:[Peter Russo](https://dsva.slack.com/team/U01C2UUHXH9) and [Ciera Maddox](https://dsva.slack.com/team/U02JWT564E9)
 
</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:
- Contact(s): Kay Lawyer (OCC)
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
