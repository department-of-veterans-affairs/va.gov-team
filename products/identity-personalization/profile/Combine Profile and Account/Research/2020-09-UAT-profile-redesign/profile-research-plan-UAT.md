# Research Plan for Profile UAT

## Goals
1. **What product & team are you doing this research for?**

This UAT will be conducted by the authenticated experience team for the new profile. 

2. **Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?**

The [personalization 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/README.md) effort aims to reimagine and expand the existing personalized functionality on VA.gov in order to better meet user needs and expectations. The first leg of this effort was combining the existing profile and account pages into one section titled 'Profile'. [Our research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/personalization%202.0/Combine%20Profile%20and%20Account/Research) showed us that these two sections — which were originally separate — have enough similarities in users' minds that we'd be better meeting user needs by combining these two pages. In addition to combining these two pages, this redesign aims to update the visual design and information architecture of the new section to be easier to scan and overall more usable.

We have wrapped up QA for this re-design on staging, and we are preparing for UAT.

3. **Research questions: What question(s) do you hope to be able to answer after completing this research?** 

The profile has many details in each section that we need to test, so I have broken out the research questions into specific sections.

**General**

- Is the profile loading properly with the users name and military badge (if applicable)?
- Is the profile loading all sections when it should be? (LOA3)
- Is the profile NOT showing when it's NOT supposed to be? (LOA1, Can't match records)
- Can a user get to the profile from other links on VA.gov? (change address page, direct deposit page, account bookmark) 

**Personal and Contact Information**

- If a user is LOA3, does the profile land on the Personal and Contact Information page?
- If there is an issue loading either personal or contact information, is the correct error displayed?
- Is a user's non-editable personal information being pulled in correctly from the database?
- Is a user's editable contact information being pulled in correctly from the database?
- If there is nothing in a field is it showing the correct link?
- If a section is editable, is it correctly updating in the appropriate field? (addresses, phone numbers, contact email)
- If a user would like to remove information from their profile, does that work correctly?
- If a user tries to leave the page without saving, does the correct messaging display?
- If a user tries to cancel in the middle of editing, are they notified that their progress will be lost?
- If a section is taking too long to update is the correct messaging displayed?
- If a user would like to change their sign in email, does the link take them to the correct place? (ID.me, MHV, DS.logon)
- If address validation is needed, is it working properly?
- Do all of the faq dropdowns work properly on the page? Are they answering the questions that users have?

**Military Information**

- Is a user's military information being pulled in correctly from the database?
- If the military information cannot be pulled in, is the correct error displayed?
- Does a user understand what to do if their military information does not look correct?
- Do all of the faq dropdowns work properly on the page? Are they answering the questions that users have?

**Direct Deposit**

- Is direct deposit showing in people's profiles when it is supposed to?
- Is direct deposit NOT showing when it's NOT supposed to?
- For people who are not eligible for direct deposit, is direct deposit hidden from the navigation?
- For people who are supposed to see direct deposit, is their information being correctly pulled in from the backend?
- For people who are supposed to see direct deposit, can they update their information?
- Do users understand how to update benefits for GI bill or education?
- Do all of the faq dropdowns work properly on the page? Are they answering the questions that users have?

**Account Security**

- Is the identity verification correctly displaying a user's status? (LOA1 or LOA3)
- Is 2-factor authentication correctly displaying a user's status?
- Is the terms and conditions section correctly displaying the correct messaging for a users status? (accepted/not accepted)
- If a user would like to change their sign in email, does the link take them to the correct place? (ID.me, MHV, DS.logon)
- If a user has questions about signing into VA.gov, does the link take them to the correct place?
- Do all of the faq dropdowns work properly on the page? Are they answering the questions that users have?

**Connected Apps**

- If a user does not have any connected apps, is the correct screen showing (the 'no apps connected' screen)?
- Is the list of possible apps to connect pulling correctly from the database?
- If a user has connected apps, are they pulling correctly from the database?
- If a user connects an app, does the app show?
- If a user who connects an app had no apps previously, does the page state change correctly?
- If a user would like to disconnect an app, does that flow work correctly? Does the app disconnect?
- If a user only had one connected app previously, does the page state change correctly?
- If there is an issue retrieving a users connected apps, does the correct error show?
- If there is an issue disconnecting an app, does the correct error show?
- If a user has additional questions about connected apps, does the FAQ link take them to the correct place?
- Do all of the faq dropdowns work properly on the page? Are they answering the questions that users have?

4. **Hypothesis: What is your hypothesis for this research?** 

- Profile will work as expected, but we will discover some bugs that we did not previously know about.

## Method
1.	**What method of research are you planning?**
  
  - Moderated UAT.
  
2.	**Why this method? How does this methodology help you answer your research questions?** 

- We need to test that the new profile is working properly on production before launching it to everyone.

3.	**Where are you planning to do your research?**

- Zoom.

4.	**What will you be testing?**

- We will be testing the new profile functionality on production (beta).

## Participants and Recruitment

1.	**Participant criteria: What are you looking for in a participant?**

We would like **10** total participants.

- We will need **5** participants who receive compensation & pensions payments from the VA. Please confirm this prior to sessions.

- We will need **5** participants who do NOT receive compensation & pensions payments from the VA. Please confirm this prior to sessions. 

- All participants must be LOA3 (identity verified) on VA.gov. **Participants will likely not know what this means**, so please confirm this prior to testing. This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile. If they are prompted to verify their identity, that means they are LOA1 and they are not suitable for testing. If they can see the profile, they are LOA3 and can participate in testing.
- Be able to screenshare via Zoom. Please confirm with them that they have Zoom downloaded prior to the session and they know how to screenshare. If they can not get Zoom working, there is no interview portion of this research and they will not be able to participate.

2.	**What is your recruitment strategy?**

We will work with Perigean to recruit for this study.

## When? 

1.	**Timeline: What dates do you plan to do research?**

We are looking to start sessions **September 1, 2020**.

2.	**Prepare: When will the thing you are testing be ready?**

The new profile **is currently** live on production behind a feature flag.

3. **Length of Sessions: How long do you estimate each session will be?**

We expect sessions to only be 15-30 minutes. **Please schedule sessions for 30 minutes with a 30 minute buffer between sessions**.

4.	**Availability: If applicable, when would you like sessions scheduled?**

FYI — **Tressa Furner (tressa.furner@adhocteam.us) will be conducting these sessions**. Her availability is as follows:

- **10 am - 6pm EST any day**

5.	**Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?**

- **1 PM EST Friday Aug 28, 2020 OR 4 PM EST on Monday Aug 31 **

## Team Roles
**Please list the people who will be serving in each role.**

- **Moderator**: Tressa Furner (tressa.furner@adhocteam.us)
- **Research guide writing and task development**: Tressa Furner
- **Participant recruiting & screening**: Perigean
- **Project point of contact**: Tressa Furner or Matt Shea
- **Participant(s) for pilot test**: Cassandra Allen
- **Note-takers**: TBD
- **Observers**: TBD

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**

- Tressa Furner (tressa.furner@adhocteam.us)
- Samara Strauss (samara.strauss@va.gov)
- Erik Hansen (erik@adhocteam.us)
- Lihan Li (lihan@adhocteam.us)
- Sandra Hallie (shallie@governmentcio.com)
- Matt Shea (matt.shea@adhocteam.us)
- Carey Otto (carey.otto@adhocteam.us)
- Mark Greenburg (mark.greenburg@adhocteam.us)

## Resources
- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account)
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Research/UAT/profile-conversation-guide-UAT.md)
- [Notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Research/UAT/Session%20Notes)
- [Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Research/UAT/Profile%202.0%20Research%20Findings.md)
