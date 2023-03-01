# Samara's 2023 maternity leave plan

**Last updated: March 1, 2023**

Roughly, this will be some time between March - June of 2023, depending on when the baby arrives.

## [Long-term planning spreadsheet](https://docs.google.com/spreadsheets/d/1EN2Z0MPLZ-6qAS3S4q6uiwCekSU1daysJkykDs5bPCs/edit#gid=1487111095)

This was last updated by Samara in February in 2023. It is meant to change, be flexible, and grow over time depending on how things shake out, so please don't take this as an unchangeable plan.

## Work we need to wrap up

### [My VA audit updates](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2022-audit#readme)

- **Status**: Pre-launch; Should launch early in April 2023 if everything stays on track
- [Long-term planning](https://docs.google.com/spreadsheets/d/1EN2Z0MPLZ-6qAS3S4q6uiwCekSU1daysJkykDs5bPCs/edit#gid=923468617)

## Top priorities

These projects are the top priorities, as they align with the top OCTO objectives for the year:

### [Onsite notifications V2: Scale notifications feature](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/notifications-v2#readme)

- **OCTO objective**: Enhance Veterans' personalized online experience
- **Status**: Next steps are up in the air, as we are trying to figure out if any of the existing VANotify notifications are good candidates to incorporate into VA.gov
- [Long-term planning](https://docs.google.com/spreadsheets/d/1EN2Z0MPLZ-6qAS3S4q6uiwCekSU1daysJkykDs5bPCs/edit#gid=1904788724)

This is very up in the air depending on whether we are more immediately moving forward with adding notifications (dependent on what is in VANotify) or if we are moving forward with notification center research and putting the new notification design through the collab cycle & build.

That being said, once there are notifications we are sure we want to add to VA.gov, we should start the process of moving that forward.

### [Notification preferences: Updates to add email as a channel](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/add-email-channel)

- **OCTO objective**: Enhance Veterans' personalized online experience; Support MHV health migration
- **Status**: Discovery and design complete; Backend and frontend code updates are next
- [Long-term planning](https://docs.google.com/spreadsheets/d/1EN2Z0MPLZ-6qAS3S4q6uiwCekSU1daysJkykDs5bPCs/edit#gid=1678753305) -- Note that I have not been able to complete detailed planning because next steps depend on some level of technical discovery and estimation. The team + new profile PM will need to do this.

Why we are adding email as a channel: We need to be able to support email as a channel in order to support MHV notification preferences, and notification preferences from other partners that may require email. This is critical work.

In order to be able to add email as a channel, we need to do two things: add the default-send indicator, and update the UI to move from a radio button to checkbox design. We'll likely complete the default send work in Q2 of the calendary year, and start the UI updates in Q2 but launch them in Q3 of the calendar year.

Behind the scenes, Samara is coordinating backend implementation of the MHV notification preferences in VA Profile, which use email as a channel. Once those have been implemented in VA Profile and MHV, we should be in good shape to add them to our UI.

### [Support generative logged-in IA/navigation research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ia-and-navigation/2023-generative-logged-in-research)

- **OCTO objective**: Refresh the VA.gov homepage and information architecture
- **Status**: User research planning; User research; Generating a report that summarizes all research activities
- [Long-term planning](https://docs.google.com/spreadsheets/d/1EN2Z0MPLZ-6qAS3S4q6uiwCekSU1daysJkykDs5bPCs/edit#gid=189401760)

In Q2 of the calendar year, we'll be running some generative user research to uncover what problems people have navigating the logged-in experience. After research synthesis, we'll work with Mikki and Chante to figure out next steps.

## Necessary maintenance

This doesn't align with OCTO objectives, but this is work we have to get done in order to continue to support critical existing integrations:

### EVSS > Lighthouse migrations

- **OCTO objective**: None
- **Team objective**: Maintenance & UX improvements

#### [Update direct deposit for comp & pen section of the profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/README.md)

For Q2, we'll be ready to conduct QA, go through pre-launch activities, and launch the updated integration. 

#### Update the claim status section of My VA

Assuming we have availability, we can leverage the updated claim status integration that now relies on Lighthouse so that My VA pulls data from there instead of EVSS.

## What about other work?

We already have a packed quarter for when I am out. If there are requests that come in, the OCTO lead(s) should work with the PMs to slot those in to planning **if time allows**. If the team is full and does not have bandwidth, do not hesitate to communicate that to stakeholders and work to figure out on what timeline we might be able to get to the work. The auth exp team is very capable, and I trust them to communicate when they do and do not have bandwidth accurately.

### VA Profile work that they might want us to start while I am out

- Notification preferences for "early comms" work (ie. eBenefits prefs that need to move over) -- This will likely be very straightforward. If VA Profile just needs some copy for the new preference(s) and for us to implement a feature toggle, this should be slated in pretty easily. If they need more comprehensive work (I don't think they do), please plan accordingly to other priorities.
- Telephone number validation -- This will likely require interface and code changes, and I don't know when the team will have bandwidth. We can get to this eventually, but if this needs to wait until I'm back, so be it. Please work with the team to scope this work, and then only put it into planning if there are available people. If not, let VA Profile know we need to hold off for a few sprints.

## For OCTO

These are things that I have my eye on that need to be kept up with by whoever my OCTO replacement(s) is/are:

### MHV: Integrating their interface with VA Profile

In order for VA.gov to incorporate the MHV notification preferences into our interface, MHV has to integrate their interface with the VA Profile backend for both contact information and notification preferences. I need someone on the OCTO side of things to keep up with Carnetta and the VA Profile team (Mike Richards etc) to make sure the MHV side of things is moving along. VA Profile's work on this is easy -- they already support contact info, and they have been able to get the MHV notification preferences in the backend fairly easily. Keeping up on what MHV is doing and making sure that is moving along is the harder part, and is what is a large dependecy for us to update the VA.gov interface.

