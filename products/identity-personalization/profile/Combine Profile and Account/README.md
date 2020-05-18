# Product Outline: Combine Profile and Account (Profile 2.0)

## Communications

- **GitHub Label**: vsa-authenticated-exp; personalization-2.0
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DSVA Lead| samara.strauss@va.gov |
|Matt Shea |Product Manager| matt.shea@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Brad Conley | FE Engineer| bconley@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Tze-chiu Lei | QA Analyst | tze@adhocteam.us |
|Jen Strickland | 508/Accessibility support| jennifer.strickland@adhocteam.us |

## Table of Contents

# Executive Summary 
- [Problem overview](#problem-overview)
- [User Problem Statement](#user-problem-statement)
- [Business Goals](#business-goals)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Discovery Takeaways](#discovery-takeaways)
- [Requirements](#requirements)
- [Solution Approach](#solution-approach)
- [OKRs & KPIs](#okrs--kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Service Level Objective](#service-level-objective)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Design](#design)
- [Screenshots](#screenshots)


## Problem overview

There are four main problems with the Profile/Account 1.0 approach:

1. **Confusion about the difference between Profile/Account** — We have observed that the difference between Profile and Account is either not as important or not as clear to VA.gov users as we thought it was. 
  - During [user testing for the direct deposit feature](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/usability-research/research-summary.md), participants were split as to whether this functionality belonged in the Profile or made more sense on the Account page. 
  - Through a card sort, we observed that participants overwhelmingly put features we currently have separated between the Profile and Account pages into one "Personal Information" section.
2. **Scaling** — Having separate Profile/Account pages has made it difficult to figure out where new features should live since there are often arguments for them to live in both sections.
3. **Wayfinding** — We could do a better job of guiding users to the Profile/Account from outside those pages. 
4. **Visual design** — We have not effectively employed [the design system](https://design.va.gov/). The Profile and Account pages are designed like content pages, so adding new content has made these pages extremely lenghty and hard to scan.


### User Problem Statement

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
- Improve the overall information architecture so it is easier to add new features in the future.

## Assumptions

1. People don't care about the difference between Profile and Account as much as our internal team does. They think that features we have separated between each section could exist in one section. This was supported in discovery.
2. Combining Profile and Account will make personal information and settings easier for people to find.
3. Users will find the new combined Profile/Account to be more digestible if we divide sections in a side navigation.
4. We need to add additional wayfinding throughout VA.gov to guide people to the new combined Profile/Account.
5. Mobile navigation for the new profile should not mimic the mobile nav pattern we use in content sections.

## Questions

1. Is a side nav or top nav the best approach to organizing information?
2. Should the design be one page or tabbed?
3. What is the clearest implementation of a mobile navigation in the profile?
4. Will users expect to find benefit information in their profile?
5. What are the best ways to guide people to the new combined Profile/Account, and when do people need to be guided there?
6. Is it a good idea to add multiple links to this new section in the personalized menu, or do we only need one?

## Discovery Takeaways

- Please see the [Personalization 2.0 discovery write-up](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md). A summary of the requirements that came out of this are below.

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

## Solution Approach

## Value Propositions

1. It should be easier for veterans to find the information they expect to find in a profile section.
2. The profile should feel more personalized, making veterans feel "seen" by the VA.
3. This new approach should allow us to easily scale the profile as new sections are added/needed.

## OKRs & KPIs

### Profile overall

**Objective**: Make it easier for people to find profile-related tools and complete profile-related tasks

**Key result**: Decreased time to find and update contact information
- Bet 1: Update the design patterns as needed to better fit design needs for authenticated tools
- Bet 2: Improve the information architecture
- Potential KPIs
  - Less time on the profile, *plus* same amount or more of successful contact information submissions

**Key result**: Decreased time to find and update direct deposit information
- Bet 1: Create side-nav menu
- Bet 2: Update the design patterns as needed to better fit design needs for authenticated tools
- Bet 3: Improve the information architecture
- Potential KPIs
  - Clicks on the "Direct deposit" link in the navigation *plus* the same amount or more of direct deposit submissions
  - Less time on the profile, *plus* same amount or more of successful direct deposit submissions 

**Key result**: Decreased time to find and interact with account settings
- Bet 1: Create side-nav menu
- Bet 2: Update the design patterns as needed to better fit design needs for authenticated tools
- Bet 3: Improve the information architecture
- Potential KPIs
  - Less time on the profile, *plus* same amount or more of clicks on links to verify identity/set up 2FA/reset password 
  - Clicks on the "Account settings" link in the navigation *plus* the same amount or more of clicks to verify identity/set up 2FA/reset password

**Key result**: Increase overall satisfaction with the profile experience
- Bet 1: Combine Profile and Account pages
- Bet 2: Update IA and visual design of the profile
- KPI: Foresee data (need link)

**Key result**: Increase scalability of Profile
- Bet 1: Add side-nav menu
- Bet 2: Updated design system
  - KPI: Increase in number of features included in profile

**Key result**: Reducing the number of places a user has to go to update their information
  - Bet 1: Combining profile and account pages
  - Bet 2: Improved IA
    - KPI: Decreased count of places a user has to go to update information

We need to figure out how to measure the following:

1. Reduced time finding a task (eg. reduced time finding the direct deposit tool or updating contact information).
2. Reduced abandoment of the profile/account (which we can maybe assume meant people didn't find what they were looking for).
3. Insuring all tasks have path reports that include start to finish flows
4. Insuring all tasks have detailed error reports (what errors are users receiving and what do they do next)

Other metrics are qualitative:

1. How do these new designs compare and perform in user testing? Can people find information quickly and do they report pages are easy to scan and information is easy to update.

### Tool-specific OKRs & KPIs

#### Contact Information

- [GA metrics for successful contact information submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25&_r.drilldown=analytics.eventLabel:profile-transaction/)
- [GA metrics for failed contact information submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20200305&_u.date01=20200311&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&_r.drilldown=analytics.eventLabel:profile-edit-failure&explorer-graphOptions.selected=analytics.nthDay/)

#### Address validation

- [OKRs & KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/README.md#okrs--kpis)
- [GA dashboard for address validation](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/arWBC7_-SkK3WHQuJQHQoQ/a50123418w177519031p176188361/)

#### Direct deposit

- [OKRs & KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/README.md#okrs--kpis)
- [Direct deposit GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/T7daIpzoRw2LOg1BVHJ0Dw/a50123418w177519031p187673796/)

---

# Implementation Info

## Status

- **Summer 2019**: Discovery completed.
- **September 2019**: Initial design explorations
- **October 2019**: Project put on hold due to other team needs.
- **January 2020**: Project resumed. Design explorations delivered. Beginning profile refactoring.
- **February 2020**: Initial designs completed; beginning copy.
- **March 2020**: Completing copy, beginning build, conducting user testing.
- **April 2020**: User testing completed; build in progress.

## Solution Narrative

## How to Access and Test

## Error Handling

## Service Level Objective

## API Calls and Dependent Systems

## Design

### Screenshots

### Before

#### Profile 

![Profile 1.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/design/Profile%20with%20direct%20deposit.png)

#### Account

### After
