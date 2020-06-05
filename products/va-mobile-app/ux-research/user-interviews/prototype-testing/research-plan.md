# Research Plan for Mobile App Prototype Testing, May 29, 2020

# What product & team?
Team Hummingbird

# Background
In an early May 2020 round of discovery research, we had ten 60-minute interviews with Veterans focused on the following questions: 
- What benefits or services are Veterans accessing (e.g. education, healthcare, disability)?
- What are all the ways Veterans manage their VA benefits (web sites, mobile apps, phone, in-person visits, VSO, etc.)?
- What pain points exist in interacting with VA?
- How do Veterans currently use their mobile devices?
- How to Veterans think a mobile app could help them better interact with VA?

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/user-interviews/research-plan.md), [Discussion guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/user-interviews/discussion-guide.md)


This round of research mainly aims to validate features for an MVP mobile app (~80%) and as a secondary goal (~20%) garner reactions to some more “blue sky” features and prepare for further testing for features past the MVP. 

# Research questions
- Is our hypothesis right that limited Claims and Health features plus some standard mobile features (e.g. notifications, notification settings, profile, biometric sign in) are the right places to start for the MVP?
  - Do Claims and Health features seem equally useful? Or do participants respond to one more than the other?
  - Would either Claims _or_ Health be enough for an MVP? 
  - Is there one feature, or a couple features, that people are most excited about?
    - If so, what are they? Why are they most useful?
- Would participants download an app with limited Claims and Health features as the core features?
  - If yes, why? If no, why not?
  - Are the features we're showing enough for users to find the app valuable?
    - If not, what needs to be added for the app to be a "great start"?
- How important and useful are:
  - Notificaftions?
  - An editable profile?
  - Saved documents?
  - Facility locator?
- What is _not_ in our prototype that Veterans would like to see in an app?
  - What in Health and Claims should be considered next?
  - Is there an area outside of Health and Claims that should be considered either in the MVP or soon after in the product roadmap?


# Hypothesis 

[View data from VA.gov](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190501&_u.date01=20200501&_.useg=&explorer-segmentExplorer.segmentId=analytics.pageTitle&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50/), [View data from all VA sites](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20190501&_u.date01=20200501&_.useg=&explorer-segmentExplorer.segmentId=analytics.pageTitle&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50/), _All data from Google Analytics, May 1, 2019 - May 1, 2020_

- **Checking claims status is a high value feature for a mobile app**
  - The claim status tool is the most popular tool on VA.gov with 4 of the top 10 most visited pages relating to claims and ~9.5% or 33 million users visiting the Track Claims page, the most highly visited page after the homepage.
  - From Jun-Oct 2019 there were ~28,000 calls to VA to check appeals status and ~25,000 calls to check claims status 
- **Rx Refill and Secure Messaging are the most high value Health features for a mobile app**.
  - The top visited page amongst VA sites is My HealtheVet homepage, showing that health features are highly used.
  - The top visited tool with ~5% or 56 million users visiting is Secure Messaging, followed next by Rx Refill with ~4% or 47 million users. 
  - Other pages in the Pharmacy section of MHV are less visited than Rx Refill: Pharmacy (7 million), Prescription History (6.2 million), Prescription Tracking (6.2 million), My Medications List (3.7 million). 
- **Participants will want more health features than our prototype includes, but including some health features in an app might still be considered valuable.**
  - Labs + Tests (~2.2%, 24 million) Appointments (~1.8%, 19 million), and VA Blue Button Report (~1.1%, 12 million) are still highly used but significantly less than Rx Refill and Secure Messaging.
- **Notifications will be highly valued**
  - The bounce rate for Secure Messaging is ~48%, potentially indicating that users are navigating to that page to check if they have messages
  - In discovery research, we learned that a lack of transparency and communication from VA to Veterans and needing to persist with frequent phone calls were pain points. Notifications may be valued for their ability to update Veterans as soon as an update is available.
    - "Once my request goes to VA, it goes into a black hole and can take awhile" -- P5
    - "There is aniticipation that you don’t want to miss anything...It would have been nice to get a text saying there’s been a status change, check online." -- P8
- **Claims and Health features together in one app is something that Veterans would desire if navigation of the app is clear. However, Health features may be more valuable than Claims features due to the sustained interaction people have with them over time.**
  - 70% of Veterans receiving Disability Compensation used VA Health Care in FY 2016, up from 59% in FY 2007 (source: VA Utilization Profile FY 2016)
- **Participants will highly desire and respond positively to features that put them in closer and more immediate touch with people who can help them at VA. Claims Support Chat and One Touch Call to VSO will test well.**
  - "[I think an app could] facilitate better communication." -- P10
  - "I’d like to text my provider or a nurse." -- P8
  - "I don’t have time to be calling the VA nonstop to figure out why a doctor isn’t signing off...[the value of an app would be] eliminate having to call." -- P5
- **A mobile friendly UI with large CTAs and a digestable amount of information on a screen will test positively with Veterans and is critical to the success of a mobile app.**
  - "I don't use MHV on my phone because it's hard to see...I wait until I'm on my computer." -- P12

# Method

## What method of research are you planning?
Remote user interviews with 6-8 of Veterans over the course of 1 week. Each of these interviews will be moderated and conducted remotely. The sessions will be led by targeted questions that go along with an interactive mobile app prototype (~35 minutes) and end with a 'Build your app homescreen' exercise in Mural, driven by the facilitator (~10 minutes). 

## Why this method?
This method will allow members of the Hummingbird team to observe sessions and allow us to speak with a diverse population of Veterans located across the United States. Using a limited interactive prototype as stimuli will help us best understand the usefulness of a limited MVP app, and validate or challenge our hypothesis about what features should be placed as highest priority for the MVP. Doing a 'build your app homescreen' exercise will help us plan for future phases of testing. 

## Where are you planning to do your research?
We will use the Perigean zoom account. We will send a link to a Figma prototype and in the chat and ask participants to share their screen with us. We will share our screen when working in the Mural.

## What will you be testing?
- We will test an interactive Figma prototype of VA mobile app
- We will conduct a co-design exercise using Mural

## Participants and Recruitment
- We would like to interview 6-8 Veterans for this generative research project. Participant criteria: 
  - All participants must be Veterans.
  - Participant pool should be diverse in:
    - Branch of service
    - Gender (30% or more women)
    - Race
    - Age (ideally two people each from 18-30, 31-50, 50-64, 65+, but can be flexible)
    - Geography
    - Density (rural)
  - Diversity of experience with VA benefits and services, but ideally all participants with experience in the following 2 areas: 
    - Disability benefits
    - Health care benefits
      - A majority should be My HealtheVet users 
  - No assistive device users (low-fi prototype does not support assistive technology)
  - If possible, Veterans should not be VA employees

  
## What is your recruitment strategy?
1. Perigean will recruit
2. In order to get 6-8 participants, we would like Perigean to schedule 10 participants total, with the expectation that there be a max of 4 no-shows.

## When?
1. Timeline for this study: June 8 - June 12 (depending on recruitment)
2. Length of Sessions: Schedule for 1 hour (plan to go for 45 minutes)
3. Availability: Monday-Friday (11 AM EST – 6 PM EST). Please don’t schedule back to back sessions. 
4. Prepare: We will conduct a pilot interview on June 4 or 5.

## Team Roles
Please list the people who will be serving in each role. Include the primary phone number for moderator and the emails for moderator, notetaker, and observers.
- Moderators: Bridget Hapner, bridget@adhocteam.us (773-875-9019)
- Conversation guide writing and task development: Bridget in collaboration with Alex and Sophie
- Participant recruiting & screening: Perigean
- Project point of contact: Sophie Myers (202-617-1829) and Ming Ligh (202-830-4609)
- Participant(s) for pilot test: Ambika Roos
- Note-takers (1 per session): Sophie Myers, Ambika Roos
- Observers: Team Hummingbird members


