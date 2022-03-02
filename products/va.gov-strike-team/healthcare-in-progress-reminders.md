# Product Outline - Health care application in progress reminders
---

## Problem Statement

- How can we help remind Veterans of their incomplete applications?

## Who, What, When, Where, Why
*What:* Send email reminders to Veterans when an application has been started but not completed.

*Who:* Veterans who have begun to fill out the 10-10 EZ (while authenticated) but haven’t submitted.

*When:* Reminders will be sent 7 days after they began the application, then 30 days, 53 days, and finally 59 days. When the application is submitted the further reminders end.

*Why:* The reminders will encourage the Veteran to submit the application in order to receive benefits sooner. By following the link in the reminder it will streamline quickly take them back to the in progress application.

 
## Desired User Outcomes

- Shorten the time the application remains "in progress"
- Fewer expired applications
- More returns and submissions of saved applications

## Undesired User Outcomes
- Frustration in overcomplicated notifications or too many notifications
- More complex application workflow to get to "in progress" application

## Desired Business Outcomes
- Veterans are reminded of in progress applications and return to complete them

## Undesired Business Outcomes
- Confusion on submission status that leads to more expired applications

---
## Measuring Success

### Key Performance Indicators (KPIs)



* How many Veterans are completing and submitting the form online? 
* How many Veterans start the form but don’t complete it?
* How long does it take Veterans to submit the completed form?
* How many Veterans start filling out the form, save their progress, and then come back to it?
* How many Veterans don't complete the form after saving one in progress?

#### Baseline KPI Values
* Current amount of applications that expire before they are completed?
* Average amount of time from the start date to the submission date?

### Objectives and Key results (OKRs)

- Objective: More applications are successfully submitted
  - Key result: Number of applications increase
  - Key result: Length of time between starting application and submitting decreases 

---

## Assumptions
- If we remind Veterans of their in progress applications:
  - Provide a link for them to get back to their application
  - Give regular reminders
 -  then more Veterans will complete the health care application online.

## Key Decisions
- We understand that applications might have accidentally been started. 
  - Currently there is not a way to close out these applications. 
  - We are tabling this for now as it would lengthen our go to market and add complexity.
- Multiple applications for various benefits might be in progress for the Veteran.
  - We are focusing on the Healthcare 10-10 EZ at the moment because the need for reminder notifications has been brought up before.
  - The plan at this point is to complete the 10-10 EZ form reminders and then onboard additional forms. Additional forms add complexity around timing the reminders for applications. The potential need to deliver a "digest" of all pending applications. It is something we want to do eventually but will tackle later.

## Additional Points
-https://app.zenhub.com/workspaces/vanotify-business-intake-board-606cc5c49392c900162c3971/issues/department-of-veterans-affairs/vanotify-team/23
-https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va.gov-strike-team/healthcare-in-progress-reminders.md
-https://github.com/department-of-veterans-affairs/va.gov-team/issues/23609

## Solution Approach

- As of 2/2022, we're going to focus on:
  - Creating a reminder system that sends at specific intervals
  - Reminders will be delivered via email
  - Providing content for the email reminders


--- 

## Go-to-market Strategy
- [Coming soon: Link to Release Plan]

## Launch Dates
- *Initial Launch Date*
  - Coming soon
- *Actual Launch Date* 
  - Coming soon
- *What date will you evaluate impact after launch?*
  - Coming soon
---


## Screenshots
[Workflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va.gov-strike-team/10-10%20EZ%20Reminders%20Workflow.JPG)

[Mural Workflow](https://app.mural.co/invitation/mural/oddball5855/1645722089026?sender=ian7950&key=7366e5a3-34a8-4ea1-843d-f93f06a3cd1b)

## Keep in Mind
- Should allow us to re-use the code/process for additional forms
- Allow customization of delivery time and frequency
- Multiple applications can be “in progress”
- All authenticated forms have the ability to be saved in progress
- The form authenticated form. Unauthenticated forms are not tied to the profile id
- The “in progress” application expires after 60 days

## Questions
- What happens if they try to start the same application again?
- What link should be included in the reminder?
    - Direct to the application that is “in progress”
    - Send them to their “My VA” page and have them scroll down to find the applications they began
    - Send them to their “My VA” page and automatically scroll them to the application section


#### Communications

<details>

- Team Name: VA.gov Strike Team
- GitHub Label: #Strike 
- Slack channel: #va-notify-forms-strike-team
- Product POCs: Megan Siddle
- Stakeholders: Beverly Nelson

</details>

#### Team Members

<details>
 
 - PM: Megan Siddle
 - DM: Zachary Law
 - Engineering: Nathan Wright, Olaf Minkowicz, Andrew Mauricio
 - Research/Design: Ian Hilton, Elissa Folk
 - QA: Chris Peck
 
</details>
