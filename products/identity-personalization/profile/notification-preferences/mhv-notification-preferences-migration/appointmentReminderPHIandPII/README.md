# Initiative Brief - Permission to Include PHI and PII in Appointment Reminders

**Last Update:** 5/15/25 - new slack channel added

It was determined on 5/15/2025 this is no longer needed. The privacy office determined that PHI/PII is required in the appointment reminder for them to be meaningful and there will not be an option to have an alert w/o phi/pii.

- **Product:** VA.gov Profile | Notification Settings
- **Initiative:** Support the MHV to VA.gov Migration by displaying the PHI/PII Appointment Reminder Permission 

## Table of Contents 
  - [Communications](#communications)
  - [Overview](#overview)
  - [Outcome Summary](#outcome-summary)
  - [Problem](#problem)
  - [Desired User Outcomes](#desired-user-outcomes)
  - [Undesired User Outcomes](#undesired-user-outcomes)
  - [Desired Business Outcomes](#desired-business-outcomes)
  - [Undesired Business Outcomes](#undesired-business-outcomes)
  - [Measuring Success](#measuring-success)
    - [Key Performance Indicators (KPIs)](#key-performance-indicators-kpis)
  - [Discovery](#discovery)
    - [Assumptions/Risks](#assumptionsrisks)
  - [What're you building](#whatre-you-building)
  - [Important artifacts](#important-artifacts)
  - [Screenshots](#screenshots)



## Communications


- Team Name: Auth Experience - Profile 
- GitHub Label(s): profile, authenticated-experience, notification-settings
- Slack channels: [#accountexp-authexp](https://dsva.slack.com/archives/C909ZG2BB); [#appointment-email-reminders](https://dsva.slack.com/archives/C081Y4X4W1L)
- Product POCs: [Auth Exp Team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization#team)




## Overview

Historically, the VA was sending generic appointment reminders devoid of PHI/PII. Some veterans have multiple appointments at different VA Facilities so it is important they receive specifics around the location and doctor's office they are scheduled to visit. 

Veterans expressed frustration at the legacy reminders and shared the desire to have additional context in their unencrypted text and email appointment reminders. MHV responded to the request by allowing users to grant permission to send PHI/PII in their appointment reminders. As MHV migrates to VA.gov we'll need to support this feature to ensure a consistent user experience for veterans who opt in to have PHI/PII in appointment reminders. 

We need to allow for the same functionality on VA.gov Profile where users can grant or rescind permission for PHI/PII in appointment reminders.





## Outcome Summary

The goal of this is to ensure veterans who use MHV today are able to maintain the same capabilities as MHV migrates to VA.gov. The option to grant the VA permission to include PHI/PII in appointment reminders is an important aspect of that. 



## Problem

Email and Text Message are unencrypted communication channels. When communicating with veterans we have to be mindful of the risks inherent to unencrypted messaging which can expose sensitive information. In light of the risks associated with unencrypted messaging it's important Veterans opt-in and grant us permission to send sensitive PII and PHI in those unencrypted channels. Additionally, this is a requirement mandated by law.

Today, MHV users have an opt in/out process that allows them to decide if they would like to see PII/PHI in their appointment reminders. There's a process flow through Vet Text that allows them to opt in / grant permission for MHV to send PII/PHI in appointment reminders. The goal of this initiative is allow users to update their VA.gov profile to grant or rescind permission for including PHI/PII in appointment reminders on VA.gov in the Notification Settings page of their Profile 


## Desired User Outcomes
- Enhanced Control: Users can easily opt in or out of receiving PII/PHI in appointment reminders.
- Improved Privacy: Users have greater control over their personal information, aligning with privacy concerns.
- Streamlined Experience: The update simplifies the management of notification preferences within the VA.gov platform, currently there isn't a page that allows users to opt in or out. 

## Undesired User Outcomes
- A confusing or challenging to navigate UI 
- If we delay in deploying this, users could have a  loss of functionality when MHV is migrated to VA.gov


## Desired Business Outcomes
- Successful implementation of this feature is an important component of documenting that our users have granted permission to include PHI/PII in appointment reminders. 

## Undesired Business Outcomes
- Increased Complexity: The need for additional development and maintenance efforts may strain resources.
- Potential User Confusion: If not implemented well, users might struggle with understanding or using the new privacy settings.
- Increased Support Burden: Misunderstanding or issues with the new feature could lead to more customer support requests.



## Measuring Success

### Key Performance Indicators (KPIs)

Things we might be able to measure when this launches:

- **Opt-in/Opt-out Adoption Rate:** Percentage of users who actively manage their PII/PHI notification settings within a set period.
- **User Satisfaction Score:** Measured via surveys focusing on ease of use and clarity of the new settings.
- **Support Requests Related to Notification Settings:** Number of support queries received about the new feature, indicating clarity or confusion.


## Discovery
### Assumptions/Risks

#### 1. Usability Risk:
Risk: Users may find the new settings confusing or difficult to use or may not locate the settings at all
Validation: Conduct user testing sessions with prototypes to gather feedback and iterate on design based on user interactions.
#### 2. Value Risk:
This is a high demand feature, this brings high value since veterans have specifically asked for this functionality 
#### 3. Feasibility Risk:
Risk: Technical challenges in integrating the feature with VA Profile and building a new UI that reduces complexity and can be used by all types of users (especially visually impaired) could delay implementation.
Validation: Conduct a technical feasibility assessment early in the project to identify potential challenges and plan accordingly.
#### 4. Viability Risk:
Risk: Organizational constraints such as conflicting priorities might hinder the project’s success - this initiative has been deprioritized several times but it is critical to ensure we're in compliance 
Validation: Align with key stakeholders early to secure commitment and ensure the project aligns with organizational goals.

These risks can be managed through proactive testing, stakeholder engagement, and continuous user feedback to ensure the feature delivers value and is effectively implemented.
VA Notify is assuming the risk of sending PHI/PII in unencrypted messages and is coordinating the work necessary to ensure they have the proper approvals in place. In the VA.gov Profile, we will give users a way to grant permission. 


### What're you building

In the VA.gov profile under notification settings > "your healthcare" > "appointment reminders" selection we will enable users to grant permission for PHI/PII in their appointment reminders 

Currently users see:

![image](https://github.com/user-attachments/assets/6ce88e76-6f69-469d-8791-69755198664f)


We'd need a check box or radio button feature to be determined with the team's designers to allow veterans a means to see if they've granted the VA permission to include PII/PHI in their appointment reminders and to opt in or out. 

This would be for text and email. A user could opt in to the permission to allow PHI/PII in Text OR Email, BOTH, or Neither. 

#### Go-to-market 

We will be coordinating with VA Profile, VA Notify, Mobile, and MHV teams to ensure this rolls out at the necessary moment. 

## Important artifacts 
- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/58797)
- [notification settings figma file](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?node-id=1-12888&t=ffRZ8R6IwgMyND70-0)
     - [PHI/PII specific tab of the figma](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?node-id=572-10323&t=ffRZ8R6IwgMyND70-0)
- [mural for design concept noodling](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1724854864669/fd19195a421188d983c7395240861de29b87ed6d?sender=uaa72d11015d3f7c704a64191)
- [Collaboration Cycle for: AE Profile | Notification Settings | Appointment Reminders PHI/PII #91788](https://github.com/department-of-veterans-affairs/va.gov-team/issues/91788)
   
## Screenshots

### Before

<details><summary>screenshot </summary>
<p>
  
radio button format that has since been replaced w/checkboxes: 

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/fb11bba5-6574-405b-bed1-7e981d4d3aa8)

current checkbox configuration: 

![image](https://github.com/user-attachments/assets/41adcfd3-79c3-486a-9e30-53235bc002ca)


</p>
</details> 

### After




