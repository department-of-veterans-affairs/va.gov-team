# Research Plan for Profile UAT

## Goals
1. **What product & team are you doing this research for?**

This UAT will be conducted by the authenticated experience team for the new profile.  This was an initiative to [combine profile and account.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/README.md)

2. **Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?**

The [personalization 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/README.md) effort aims to reimagine and expand the existing personalized functionality on VA.gov in order to better meet user needs and expectations. The first leg of this effort is combining the existing profile and account pages into one section. [Our research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/personalization%202.0/Combine%20Profile%20and%20Account/Research) showed us that these two sections — which were originally separate — have enough similarities in users' minds that we'd be better meeting user needs by combining these two pages. In addition to combining these two pages, this redesign aims to update the visual design and information architecture of the new section to be easier to scan and overall more usable.

We have just started QA'd for this re-design on staging, and we are preparing for UAT.

3. **Research questions: What question(s) do you hope to be able to answer after completing this research?** 

- Is direct deposit showing in people's profiles when it is supposed to?
- Is direct deposit NOT showing when it's NOT supposed to?
- For people who are supposed to see direct deposit, is their information being correctly pulled in from the backend?
- For people who are supposed to see direct deposit, can they update their information?

- Can people find what they're looking for in the profile?
- Do users understand how to update their information??
- What information is important for them to see first?
- Do the terms we use on the profile make sense/mean anything to users?
- Has the side nav increased scanability of the new profile? Do people find what the need easily?
- Do saving/errors interactions feel intuitive?
- Do people understand why some info isn't editable, and how to update it?
- How does the overall nav effect visibility of the profile? Is it easy to find?
- How do people think the new profile compares to profile/account 1.0?
- Do people understand what connected accounts are? Do they want to see this section of the profile if they don't have connected accounts?
- Where would people go to change the email address they use to sign in?
- Does the mobile nav and placement make sense? 
- Do users understand the 'learn more' sections? Are they actually representing the most 'frequently asked questions'?
- Can people find what they're looking for in the profile?
- Does the labeling on the left nav make sense?

4. **Hypothesis: What is your hypothesis for this research?** 

- Direct deposit will work as expected.

## Method
1.	**What method of research are you planning?**
  
  - Moderated UAT.
  
2.	**Why this method? How does this methodology help you answer your research questions?** 

- We need to test that the new profile is working properly on production before launching it to everyone.

3.	**Where are you planning to do your research?**

- Zoom.

4.	**What will you be testing?**

- We will be testing direct deposit functionality on production (beta).

## Participants and Recruitment

1.	**Participant criteria: What are you looking for in a participant?**

We would like **5** participants who must meet the following criteria:

- First and foremost, participants **must receive compensation & pensions payments from the VA**. Please confirm this prior to sessions. If they do not receive these payments, they can not do testing.
- Participants must be LOA3 (identity verified) on VA.gov. **Participants will likely not know what this means**, so please confirm this prior to testing. This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile. If they are prompted to verify their identity, that means they are LOA1 and they are not suitable for testing. If they can see the profile, they are LOA3 and can participate in testing.
- Be able to screenshare via GTM. Please confirm with them that they have GTM downloaded prior to the session and they know how to screenshare. If they can not get GTM working, there is no interview portion of this research and they will not be able to participate.

2.	**What is your recruitment strategy?**

We will work with Perigean to recruit for this study.

## When? 

1.	**Timeline: What dates do you plan to do research?**

We are looking to start sessions **Wednesday, September 4, 2019**.

2.	**Prepare: When will the thing you are testing be ready?**

Direct deposit will be live on production behing a feature flag on **Tuesday, September 3, 2019**.

3. **Length of Sessions: How long do you estimate each session will be?**

We expect sessions to only be 10 – 15 minutes. **Please schedule sessions for 30 minutes with a 30 minute buffer between sessions**.

4.	**Availability: If applicable, when would you like sessions scheduled?**

FYI — **Arthur Green (agreen@governmentcio.com) will be conducting these sessions**. His availability is as follows:

- **Wednesday, September 4**: 8:30 am – 2:00 pm ET
- **Thursday, September 5**: 8:30 am – 2:00 pm ET
- **Friday, September 6**: 8:30 am – 1:30 pm ET
- **Monday, September 9**: 8:30 am – 3:00 pm ET

5.	**Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?**

- **Tuesday, September 3, 2019**

## Team Roles
**Please list the people who will be serving in each role.**

- **Moderator**: Arthur Green (agreen@governmentcio.com)
- **Research guide writing and task development**: Samara Strauss
- **Participant recruiting & screening**: Perigean
- **Project point of contact**: Samara Strauss and Arthur Green
- **Participant(s) for pilot test**: TBD
- **Note-takers**: Emily Waggoner
- **Observers**: Listed below

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**

- Arthur Green (agreen@governmentcio.com)
- Lisa Koenigsberg (lisa.koenigsberg@va.gov)
- Justin Pickett (jpickett@governmentcio.com)
- Erik Hansen (erik@adhocteam.us)
- Tze Lei (tze@adhocteam.us)
- Lihan Li (lihan@adhocteam.us)
- Amen Ra (ara@governmentcio.com)
- Nick Sullivan (nick.sullivan@adhocteam.us)
- Chris Johnston (christopher.johnston2@va.gov)
- Emily Waggoner (emily@adhocteam.us)

## Resources
- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/README.md)
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/UAT/conversation-guide.md)
- Notes
