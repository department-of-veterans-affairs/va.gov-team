__Please note: many links in this document point to documents in the vets.gov-team repo.__

# Product Outline: Combine Profile and Account

## Communications

- **GitHub Label**: vsa-authenticated-exp; personalization-2.0
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|
|----|----|
|Samara Strauss |Auth exp lead designer; Personalization 2.0 project lead|
|Tressa Furner | Auth exp designer|
|Erik Hansen | Auth exp FE engineer|
|Brad Conley | Auth exp FE engineer|
|Lihan Li | Auth exp BE engineer |
|Tze-chiu Lei | VSA QA Analyst |
|Jennifer Strickland | VSA Accessibility Specialist, designer |

## The Problem

There are four main problems with the Profile/Account 1.0 approach:

1. **Confusion about the difference between Profile/Account** — We have observed that the difference between Profile and Account is either not as important or not as clear to VA.gov users as we thought it was. 
  - During [user testing for the direct deposit feature](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/usability-research/research-summary.md), participants were split as to whether this functionality belonged in the Profile or made more sense on the Account page. 
  - Through a card sort, we observed that participants overwhelmingly put features we currently have separated between the Profile and Account pages into one "Personal Information" section.
2. **Scaling** — Having separate Profile/Account pages has made it difficult to figure out where new features should live since there are often arguments for them to live in both sections.
3. **Wayfinding** — We could do a better job of guiding users to the Profile/Account from outside those pages. 
4. **Visual design** — We have not effectively employed [the design system](https://design.va.gov/). The Profile and Account pages are designed like content pages, so adding new content has made these pages extremely lenghty and hard to scan.


### User Goals

**As a user, I want to quickly complete tasks like updating contact information, direct deposit information, and settings and preferences. I also want to be able to quickly view non-editable personal information**. 

In order for this to be possible:

- The site needs to guide me to information in a way that I expect it to guide me.
- Information needs to be in the places I expect to find it.
- Pages and sections need to be easy to scan.
- Pages and sections need to be called what I expect them to be called.

### Business Goals

As the authenticated experience team, we want to be able to do the following:

- Remove the uneccessary confusion between "Profile" and "Account."
- Guide users to the Profile/Account section from the logged out and logged in states.
- More effectively employ the VA.gov design system so pages are easier to scan and less lenghty.
- Improve the overall information architecture so it is easier to figure out where to add new features in the future.

## Assumptions

1. People don't care about the difference between Profile and Account as much as our internal team does. They think that features we have separated between each section could exist in one section. This was supported in discovery.
2. Combining Profile and Account will make personal information and settings easier for people to find.
3. Users will find the new combined Profile/Account to be more digestible if we divide sections in a side navigation.
4. We need to add additional wayfinding throughout VA.gov to guide people to the new combined Profile/Account.

## Questions

1. Is a side nav the best approach to organizing information?
2. Should "My VA" be this new combined Profile/Account?
3. Will users expect to find benefit information in their "personal information" section?
4. What are the best ways to guide people to the new combined Profile/Account, and when do people need to be guided there?
5. Is it a good idea to add multiple links to this new section in the personalized menu, or do we only need one?

## Requirements

### Goals

1. **Scale gracefully** — Our design approach should allow for future updates and expansion. 
2. **Prioritize wayfinding** — We should make it easy for users to navigate to their personal information/settings, and we should make it easy find specific pieces of information within this section. 
3. **Effectively use visual space** — We need to prioritize scanability by using secondary navigation and more effectively employing [the design system](https://design.va.gov/).

### In Scope 

1. Figure out new IA for this combined section.
2. Navigation
  - Rename this section.
  - Figure out what links we want to elevate in the personalized menu.
3. A new visual approach.
4. Wayfinding — Figure out how and when to guide people to the Profile.

### Out of Scope

1. Adding any new features to the combined Profile/Account that aren't already in development.  
  - Notification MVP and disability rating MVP are OK since they are already in development.

## Solution Approach

## Value Propositions

## KPIs

We need to figure out how to measure the following:

1. Reduced time finding a task (eg. reduced time finding the direct deposit tool or updating contact information).
2. Reduced abandoment of the profile/account (which we can maybe assume meant people didn't find what they were looking for).
3. Insuring all tasks have path reports that include start to finish flows
4. Insuring all tasks have detailed error reports (what errors are users receiving and what do they do next)

Other metrics are qualitative:

1. How do these new designs compare and perform in user testing? Can people find information quickly and do they report pages are easy to scan and information is easy to update.

---

# Implementation Info

## Status

## Technical Decisions

## Product Decisions

## Screenshots

### Before

#### Profile 

![Profile 1.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/design/Profile%20with%20direct%20deposit.png)

#### Account

### After
