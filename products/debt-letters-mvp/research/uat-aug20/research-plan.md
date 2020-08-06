# Debt Letters MVP UAT Research Plan

## Goals
1. **What product & team are you doing this research for?**

This UAT will be conducted by BaM2 for the Debt Letters MVP 

2. **Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?**

The Debt Letters MVP is a congressionally-mandated initiative to provide VA debt letters online. Today, debt letters are delivered by mail and often don't make it into the hands of the Veterans they address. As an initial MVP, the DMC is looking to demonstrate forward progress on this initiative by implementing a solution that allows Veterans to more quickly and easily understand if and why they may have debts with the VA, and how to work with the VA to resolve them.

The MVP will display a list of the Veteran’s current debts including debt type, date the debt was received, and amount owed. Additionally, there will be a table listing of all the debt letters available to download and the ability to download individual letters. 

3. **Research questions: What question(s) do you hope to be able to answer after completing this research?** 

There are two sections with data being pulled from separate API’s, so I have split out the sections 

**General**

- Is the ‘Your VA debt’ page loading the list of current debts and the list of downloadable debt letters when it should be?
- Is the ‘Your VA debt’ page loading the empty state when it should be?
- If a user is unauthenticated and is sent a link to the tool itself, are they redirected to the content page? 
Can a user access the tool through the content page?

**Your current debts**
- Does the correct number of debts on a user’s record load? 
- Is the following data being pulled in through the database correctly for each debt:
	- Debt type
	- Date the debt was received
	- Amount owed
- Does the empty state load if a user doesn’t have any current debts on record but they have letters from past debts?
- Is the correct ‘Why might I have this debt’ text displayed for each debt type?

**Your debt letters**
Does the correct number of debt letters on a user’s record load? 
Does the correct empty state load if a user has a current debt but no debt letters due to COVID-19 debt suspension?
Is the following data being pulled in through the database correctly for each letter:
Date
Letter type 
Is a user able to download a letter? 
Does the downloaded letter match the corresponding data in the debt letter table?

4. **Hypothesis: What is your hypothesis for this research?** 

- The Debt Letters MVP functionality will work as expected, but we may discover unexpected bugs. 

## Method
1.	**What method of research are you planning?**
  
  - Moderated UAT
  
2.	**Why this method? How does this methodology help you answer your research questions?** 

- We are unable to test the functionality using test users, so we need to validate with real users prior to launch 

3.	**Where are you planning to do your research?**

- Zoom

4.	**What will you be testing?**

- We will be testing the Debt Letters MVP (Link TBD)

## Participants and Recruitment

1.	**Participant criteria: What are you looking for in a participant?**

We would like **21** total participants.

**Note:** This tool does not include VA medical copay debts. **Please verify during screening that the participant has one of the following debt types: CH 33, CH 35, or Compensation & Pension** 

- 9 participants who have at least one VA debt (CH 33, CH 35, or Compensation & Pension) that was received at least 90 days prior to April 3, 2020 
	- 3 participants who have a CH 33 debt
	- 3 participants who have a CH 35 debt
	- 3 participants who have a Compensation & Pension debt
- 3 participants who have at least one VA debt (CH 33, CH 35, or Compensation & Pension) that was received after April 3, 2020
- 3 participants who do not have a current VA debt (CH 33, CH 35, or Compensation & Pension) but have resolved a debt in the past. Please confirm with the participant that their debt has been resolved in one of the following ways: paid in full, waived, or disputed.  
- 3 participants who have never had a VA debt (CH 33, CH 35, or Compensation & Pension)
- 3 participants who have more than one current VA debt (mixture of CH 33, CH 35, and Compensation & Pension debts) 
- All participants must be LOA3 (identity verified) on VA.gov. Participants will likely not know what this means, so please confirm this prior to testing. This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile. If they are prompted to verify their identity, that means they are LOA1 and they are not suitable for testing. If they can see the profile, they are LOA3 and can participate in testing.
- All participants must be comfortable providing the last four numbers of their SSN. This information, in addition to their full name, will be sent to both the Debt Management Center (DMC) and VBMS so the participant's debt information shown within the tool can be verified with the participant’s debt information within their record.<br>
- All participants must be comfortable providing the email address they use to sign into VA.gov. We need this information 2-3 days before the study begins in order to give participants access to the tool in production.

- Be able to screenshare via Zoom. Please confirm with them that they have Zoom downloaded prior to the session and they know how to screenshare. If they can not get Zoom working, there is no interview portion of this research and they will not be able to participate.

2.	**What is your recruitment strategy?**

We will work with Perigean to recruit for this study.

## When? 

1.	**Timeline: What dates do you plan to do research?**

We are looking to start sessions **August 14th**.

2.	**Prepare: When will the thing you are testing be ready?**

The Debt Letters MVP will be live on production behind a feature flag on **August 5th**.

3. **Length of Sessions: How long do you estimate each session will be?**

We expect sessions to only be 15-30 minutes. **Please schedule sessions for 30 minutes with a 15 minute buffer between sessions**.

4.	**Availability: If applicable, when would you like sessions scheduled?**

- August 14: 10:00am 10:30am EST; 11:30am - 5:00pm EST
- August 17: 10:00am - 4:00pm EST
- August 18: 10:00am - 5:00pm EST
- August 19: 10:00am - 5:00pm EST


5.	**Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?**

- **Brad Conley, August 12, 3:00pm - 3:30pm EST**

## Team Roles
**Please list the people who will be serving in each role.**

- **Moderator**: Riley Orr
- **Research guide writing and task development**: Riley Orr
- **Participant recruiting & screening**: Perigean
- **Project point of contact**: Riley Orr, Rebecca Walsh, or Leah Keeler 
- **Participant(s) for pilot test**: Brad Conley
- **Note-takers**: TBD
- **Observers**: Rebecca Walsh, Leah Keeler, Matthew Self, Brad Conley, Cameron Testerman, Jill Anderson, additional DMC personnel 

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**

- Riley Orr
- Rebecca Walsh 
- Leah Keeler 
- Matthew Self 
- Brad Conley 
- Cameron Testerman
- Jill Anderson (jill.anderson3@va.gov) 

## Resources
- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/debt-letters-mvp) 
- [Conversation Guide] (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/debt-letters-mvp/research/uat-aug20/conversation-guide.md)
- Notes (TBD)
