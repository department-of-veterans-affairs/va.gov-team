# Sprint 0: In-App Review Updates

[Link to Epic](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7169)

## Problem Statement

Our in-app review code hasn't been updated to reflect new features added to the app, so our users are only being prompted to review the app based off of using features released Aug 2021 or earlier.

### Current Experience ###

If a veteran...
* Has not reviewed their currently-installed version of the app, AND
* Is more than 122 days since either a) their most recent app review or b) saying NO to the in-app review prompt, AND
* Has done 7 'review event' actions in the app (see list below)
...then, they will be prompted to give the VA app a review via the native in-app review prompt.

Example of the in-app review prompt, in iOS:

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/94404065/cf47a398-91a7-45c0-b5f6-b1b64b8c7fa1)

#### Current list of 'review events' in the app
Letters
- Successfully generating a letter
- Editing or adding a mailing address in letters

Secure Messaging
- Successfully viewing a message
- Successfully sending a message
- Successfully saving a draft

Claims
- Viewing the detail page of any open or closed claim or appeal

Appointments
- Viewing the detail page for an appointment
- Cancelling an appointment

Profile
- Successfully viewing any information in Contact information (email, phone numbers, address)
- Successfully updating any information in Contact information (email, phone numbers, address)

### Desired Outcomes ###
We would like to prompt veterans to review the app after a number of meaningful interactions with app functionality. Right now, with our event list based off of an outdated subset of our features, we're missing prompting veterans who are using new features of the app predominantly/exclusively.

## Assumptions and Level of Confidence

1. Updating the in-app review event list to include features since Aug 2021 will result in less bias towards a subset of users, in terms of who we're prompting to review the app.
2. We may also see a slight increase in app reviews or a change in veteran audiences submitting reviews, which could impact our qualitative research done with app and play store reviews.

## Risks

1. In-app review pop-ups are perceived by some users as annoying. Putting them into newer features could cause those users to be less happy with their VA app experience.

## Business Goals
* Mobile app objective 1: Veterans will use authenticated services that are highly personalized and valuable. Key Result: Satisfaction: maintain at least 4.8 app store ratings


## Roadmap

**V1**

* Updating the project template to include a question prompting in-app review update review for new features going forward ([already done](https://github.com/department-of-veterans-affairs/va-mobile-app/pull/7165))
* Adding the in-app review event to features added between Aug 2021 and when this work is picked up

**V2 and beyond**

* What would we save for later iterations?

## Technical Approach

*	Are there other VA groups or tools we need to work with? n/a

## Measuring success 

*	What metrics can we watch to see if our efforts are reaching the desired outcomes?

## Stakeholders

* Who within VA do we need to ensure we work with?  Who has ‘veto’ power?
* Rachel H and Ryan T - mobile-only project.

## Open Questions

* How does this one-off 'catch up' effort tie into a more holistic approach to user feedback in/about the app?
* Can we capture metrics around: 1) what 7 events a user had when prompted, 2) what screen they were on when prompted, and 3) whether they said yes/no to reviewing the app at that point?

#### Proposed list of 'review events' in the app
Letters
- Successfully generating a letter
- Editing or adding a mailing address in letters

Secure Messaging
- Successfully viewing a Secure Message
- Successfully sending a Secure Message
- Successfully saving a draft

Claims
- Viewing the detail page of any open or closed claim or appeal
- Viewing a decision letter *NEW*

Appointments
- Viewing the detail page for an appointment
- Cancelling an appointment

Profile
- Successfully viewing any information in Contact information (email, phone numbers, address)
- Successfully updating any information in Contact information (email, phone numbers, address)
- Viewing disability rating screen *NEW*
- Editing or adding preferred name *NEW*
- Editing or adding gender identity *NEW*

Medications *NEW*
- Viewing the detail page for a medication
- Viewing the tracking detail page for a medication
- Successfully submitting a refill request for medication(s)

Payments *NEW*
- Editing or adding a direct deposit account
- Viewing payment details

Home/Profile
- Viewing veteran status card *NEW*

## Important Links
