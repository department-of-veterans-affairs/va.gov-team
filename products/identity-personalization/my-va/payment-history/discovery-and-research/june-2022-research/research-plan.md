# Research Plan for Authenticated Experience team - Benefit Payments and Debts, July 2022

## Background

Throughout [My VA payment information research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/payment-information-research-plan.md) in January 2022, the recurring theme mentioned by Veterans is that seeing financial info on My VA dashboard is a high priority. We gathered information during that research around what the critical pieces of information about a veteran's financials are, such as amounts and due dates.

Since the addition of benefit payments and debts on My VA, the importance of financial information is also reflected in analytics, as viewing payments is a top interaction on My VA and managing debt has performed well since its launch in April 2022.

This effort aims to iterate and build on the recent addition of benefit payments and debts by incorporating payment and debt details that will encourage action where necessary and include key pieces of information that veterans want to see on My VA. This effort will also introduce outstanding copays on My VA.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history).

### OCTO Objectives

The iteration of a financial information section should help fulfill our north star objective of moving toward My VA being the one-stop shop for action items and benefit status, so that it provides more direct, personalized routes to Veterans’ most critical updates and tasks, and a clear path to resolution.

### Veteran Journey

Since Veterans can incur debt and receive payments any time after establishing benefits with VA, this work impacts the Veteran journey from Starting Up and beyond.

## Research Goals

### **1. Determine if the redesigned notification style is clear and actionable.**

- Do users notice the notification at the top of the page?
- Do any users have trouble seeing any aspect of the notification?
- What would users do next after reading this notification?
- What would users do if they had settled all debts but this notification was still appearing at the top of My VA?

### **2. Determine if the title of the two sections accurately convey the content.**

- Before reviewing the content of these two sections, what do users expect to see in each?
- What do users think that outstanding debts are?
- What do users think that benefit payments are?
- After revealing the content of both sections, are there any surprises?
- Is this information that veterans would want to see once they log into VA.gov?

### **3. Validate that the details displayed are the most important pieces of information for debts.**

- Do veterans understand what debt is and why it might be due from them?
- Do veterans find it useful to see the last date that the debt was updated on My VA?
- Is showing the total amount of outstanding debt useful on My VA?
- Does the usage of the dark red color and parantheses for debt make it clear that this amount is due and convey a sense of importance? Do colorblind and low vision users have any difficulty seeing the dark red text?
- Is it better to show the total for all debts and copays as one card or as two separate cards? Is the difference between debts and copays clear for each option?
- Is there any important information missing in this section?

### **4. Validate that the logical next step for debts is effectively presented to the veteran and they know how to take action on it.**

- How do users think they would go about paying or requesting help for debt?
- What do users expect to happen when they click the Manage all VA debt link?
- Do users want to be able to click on an individual debt, or go to a page to view and manage your VA debt? What about the manage your VA bills link?
- What would a user do if they had questions about their debts?
- Would a user expect to see anything here if they had paid off a debt?

### **5. Validate that the most important pieces of payment information are being presented on My VA.**

- Is the difference between debts and payments clear?
- Is it clear that the payment shown is just the most recent payment?
- How long would veterans want this info to persist on My VA if they were no longer receiving monthly payments?
- Is it unclear if we take away the account number where this money was deposited to? Do veterans know where to find that info if they are unsure?
- Do the dark green color and plus sign convey that these are payments that have been deposited to them? Do colorblind and low vision users have any difficulty seeing the dark green text?
- Is there any important information missing in this section?

### Outcome

We'll use the findings from this research to update the content and links in this section of My VA, and to propose a new notification component for the design system.

### Hypothesis

- We believe that all users will be able to clearly see and read the notification at the top of the page and will know how to act on it if they wished to see more details or resolve a debt.
- We believe Veterans will find the debt information useful and will be able to determine a path to resolve debts that are due from My VA.
- We believe Veterans will be able to tell the difference between amounts that are due and amounts that have been paid to them on My VA.
- We believe that surfacing more details about debts and payments is important to Veterans and is something they would want to see upon logging into the site.
- We believe that there may be some confusion around whether copays should fall under debts or belong under a healthcare-related section because feedback on this topic has been split fairly even so far.

## Method

We'll conduct remote usability testing over Zoom using a prototype. This method will enable us to show various types of debt and payments for all participants without restricting by which they currently have so we have a diverse user population to pull from and all users can see both debts and payments. We will plan to test in production with a screen reader user before launch since that is a limitation of testing with a prototype.

### Research materials

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/june-2022-research/conversation-guide.md)

**Links to prototypes:** Sketch prototypes no longer supported after February 16, 2024
- ~~[Desktop version 1](https://www.sketch.com/s/5b39a70d-f5f1-421f-b2d6-f988cc56d7c3/prototype/a/C420F965-7F88-4A6E-A886-36385E9B7C82)~~
- ~~[Desktop version 2](https://www.sketch.com/s/5b39a70d-f5f1-421f-b2d6-f988cc56d7c3/prototype/a/1CC7B24C-E3F9-4032-9C80-3087E1DEAC91)~~
- ~~[Mobile version 1](https://www.sketch.com/s/5b39a70d-f5f1-421f-b2d6-f988cc56d7c3/prototype/a/A4FB6758-495D-4468-95CE-9876FF97782C)~~
- ~~[Mobile version 2](https://www.sketch.com/s/5b39a70d-f5f1-421f-b2d6-f988cc56d7c3/prototype/a/F49A6509-A8FB-410D-AC45-1861C1DC959D)~~

## Recruitment

### Recruitment approach

We will recruit Veteran participants using a lean maximum variation strategy. We'll leverage Perigean's recruiting services to find our participants.

### Recruitment criteria

Schedule 16 Veterans for a minimum of 8 successfully completed sessions.

#### **Primary criteria (must-haves)**

- All participants should have received education benefit or compensation/pension payments from the VA. Screener question:

  - Have you ever received an education, compensation, or pension payment from the VA?

  - Answering yes would qualify the participant for the study.

- At least 50% of participants should have incurred education (CH 33, CH 34, CH 35), compensation/pension debts, or have a copay balance due. Screener questions:

  1. Do you have education, compensation, or pension debt with VA?
  2. Do you have health care related debt with VA?

  - Answering yes to question **1 OR 2** would qualify the participant for the study.

- All participants must able to screenshare via Zoom. Please confirm with them that they have Zoom downloaded prior to the session and they know how to screenshare. If they can not get Zoom working, there is no interview portion of this research and they will not be able to participate.

- 50% of participants should be able to participant from a desktop device.

- 50% of participants should be able to participate from a non-desktop device (tablet or mobile phone).

- 8 women, 8 men

- 3 participants who have a form of colorblindness

- 8 participants who identify as other than white

#### **Secondary criteria (nice-to-haves)**

- 5 participants who identify as other than straight/heterosexual and cisgender
- 8 participants age 55+
- 5 participants who identify as having a cognitive disability
- 5 participants who do not have a college degree
- 5 participants who live in a rural area

##### Geography

- 6 participants from the east coast
- 5 participants from the mid-west
- 5 participants from the west coast

## Timeline

### Prepare

When will the thing you are testing be finalized?

- Fall 2022

Please indicate the date and name of a mock participant for a pilot session.

- Date: Tuesday, July 26, 2022 4:00pm EST
- Name: Christia Troyer

### Research sessions

What dates do you plan to do research?

Monday, August 1 - Friday, August 5, 2022

### Length of sessions

- Sessions will be 45 minutes
- Schedule minimum of 30 minutes between sessions

### Availability

| Date | Time (all Eastern)|
| ---- | ----------------- |
| 8/1/2022 | 9am - 5pm |
| 8/2/2022 | 9am - 11am, 12-12:45pm, 1:30-5pm |
| 8/3/2022 | 9am - 11:30am, 1pm-5pm |
| 8/4/2022 | 9am - 10:30am, 12pm-3pm, 4-5pm |
| 8/5/2022 | 9am - 4pm |


## Team Roles

Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker**

- Moderator: Angela Agosto, 570-807-0619, angela.agosto@adhocteam.us
- Research guide writing and task development (usually but not always same as moderator): Angela Agosto

- Participant recruiting & screening: Perigean

- Project point of contact: Angela Agosto

- Participant(s) for pilot test: Christia Troyer

- Note-takers: Perigean

- Observers:

  - samara.strauss@va.gov

  - ana@adhocteam.us

  - erica.sauve@adhocteam.us

  - taylor.mitchell@gcio.com
