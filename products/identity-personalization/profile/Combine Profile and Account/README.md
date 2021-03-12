# Project Outline: Combine Profile and Account (Profile 2.0)

Last Updated September 30, 2020

## Communications

- **GitHub Label**: vsa-authenticated-exp; personalization-2.0
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|Matt Shea |Product Manager| matt.shea@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Cassandra Allen |Designer| callen@governmentcio.com |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Sandra Hallie | FE Engineer| shallie@governmentcio.com |
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
  - [Through a card sort](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/card-sort/research-summary.md#takeaways), we observed that participants overwhelmingly put features we currently have separated between the Profile and Account pages into one "Personal Information" section.
  - We can see in analytics that people are not finding what they expect to find on the account page. [The second most common action for people on the account page is to go to the profile](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-pages/a50123418w177519031p176188361/_u.date00=20200101&_u.date01=20200705&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Faccount~2F,analytics.eventCategory:Interactions/).
2. **Scaling** — Having separate Profile/Account pages has made it difficult to figure out where new features should live since there are often arguments for them to live in both sections.
3. **Wayfinding/guidance** — People aren't sure of where to find the direct deposit feature. We see people split between looking for it in the profile page and on the account page.
  - "Direct deposit" is [third-most searched term on VA.gov so far this year](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-search-terms/a50123418w177519031p176188361/_u.date00=20200101&_u.date01=20200705/). It is even searched for [from the profile](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-pages/a50123418w177519031p176188361/_u.date00=20200101&_u.date01=20200705&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.searchStartPage:www.va.gov~2Fprofile~2F/), where it lives, and [from the account page](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-pages/a50123418w177519031p176188361/_u.date00=20200101&_u.date01=20200705&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.searchStartPage:www.va.gov~2Faccount~2F/), which further supports our user testing observations that some people expect to find it there.
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

https://docs.google.com/spreadsheets/d/1B6c1rY-1l64cWhHO7D8WjA328zwfdAhSgKkPatIKmts/edit#gid=79350264

### Objective 

**People can more easily find and update their personal and security information.**
- "An easy way to keep my info at the VA current"  

### Key results - Findability

#### Reduce the amount of searches for direct deposit by 20%.

In 6 months, of ~13K searches for "direct deposit", ~2K are initiated from the account page, and ~1400 are initiated from the profile itself, even though the feature lives on this page. We can expect those search numbers to go down now that we are consolidating Profile and Account and have "Direct deposit" in the profile side nav.

*Reports*

- [Search terms initiated from the profile 1.1.20 - 6.30.20](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-pages/a50123418w177519031p176188361/_u.date00=20200101&_u.date01=20200630&_.useg=builtin1&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.searchStartPage:www.va.gov~2Fprofile~2F/)
- [Search terms initiated from the account page 1.1.20 - 6.30.20](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-pages/a50123418w177519031p176188361/_u.date00=20200101&_u.date01=20200630&_.useg=builtin1&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.searchStartPage:www.va.gov~2Faccount~2F/)

*KPI*
- Search terms initiated from the profile

*Bets*
- Combining profile and account
- Profile side nav
- Redesigned visual styles for easier scanning

#### Reduce % of users who visit /account before updating direct deposit from about 33% to 0.

Right now, we can see that about 1/3 of users who update their direct deposit information go to the account page before doing so. By combining the profile and account pages, and therefore removing "Account" from the navigation, we can simplify the path to this feature and reduce the number of users who make an extra step before going to the profile from 1/3 of users to 0.

*Reports*

- https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_.useg=users8eLcGNEThaF2u2Zmp52Kg,userlR1DzVh0Q_CcZk-CuOS0yA/
- https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200712&_r.tabId=navigationsummary&_r.drilldown=analytics.pagePath:~2Fprofile~2Findex.html&_.useg=users8eLcGNEThaF2u2Zmp52Kg&navigationsummary-keySelector.searchTerm=~2Fprofile/

*KPI*

- Number of users who visit /account before updating direct deposit

*Bets*

- Combining profile and account

### Key results — Engagement

#### Reduce time on the profile by 10% (about 20 seconds based on first six months of 2020).

Note: This will need to consider the new URL structure.

With improvements like the new side nav and tightened up visual design (which should both result in less scrolling), we think that users will need to spend less time in the profile overall to do the tasks they came to do. However, should we see a reduction in time spent on the profile, we should make sure we do not see markedly fewer interactions with sections like Contact information and Direct deposit. 

*Report*

- [Profile usage report 1.1.20 - 6.30.20](https://analytics.google.com/analytics/web/?authuser=0#/report/content-drilldown/a50123418w177519031p176188361/_u.date00=20200101&_u.date01=20200630&_.useg=builtin1,useri0ZvPaPpQKyUHGrYCFPigw&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePathLevel1:www.va.gov~2F,analytics.pagePathLevel2:~2Fprofile~2F)

*KPI*
- Time on profile

*Bets*
- Profile side nav
- Redesigned visual styles for easier scanning

#### Increase average user satisfaction (ForeSee score) from ~2.4 to 3.4

Currently, the profile satisfaction score is pretty low. My hypothesis is that people give it a bad rating if they get there and can't find what they are looking for. With the combination of combining profile and account, updating the design, and adding a side nav, we are hopeful we can raise the average Foresee rating by about a point. We think we could raise this score even higher with the addition of features users may expect to see in the profile (eg. DD214).

*Report*

- [Foresee data from 3.17.20 (when ForeSee was added to the profile) to 6.30.20](https://dsva.slack.com/archives/C909ZG2BB/p1593694606363000?thread_ts=1593637959.362000&cid=C909ZG2BB)

*KPIs*
- Foresee data

*Bets*
- Combining profile and account
- Profile side nav
- Redesigned visual styles for easier scanning

--- 

## Go-to-market Strategy
*How are Veterans and others using this product going to know it exists?*
- The VA.gov profile is an existing feature

*What marketing, outreach, or communications are necessary for this product to be successful?*
- After having worked with the VA comms team, they determined we did not need to do additional marketing to support this feature launch.

## Target Launch Date
- Target launch date is mid-September 2020.
- We will begin measuring success as soon as we launch via GA analytics data. We should have materially significant data to view within 1 week of launch.

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
- **May 2020**: Build; additional design as needed.
- **June 2020**: Build; additional design as needed.
- **July 2020**: Finish build; QA; pre-launch.
- **Aug 2020**: Pre-launch; UAT.
- **Sept 2020**: **LAUNCH! 25% of users on September 16; 50% of users on September 23; 100% of users on September 30.**

## How to Access and Test

**Staging**
https://staging.va.gov/profile

In order for a user to view the VA.gov user profile, they have to meet the following criteria:
- Be logged in to VA.gov.
- Be found in the Master Person Index (MPI).
- Have verified their identity on VA.gov.

**The Master Person Index (MPI)**
- Veterans found in Master Person Index (MPI) will have access to the VA.gov profile if they are logged in and have verified their identity (see below). To be in the MPI, a person has to have had some sort of interaction with the VA where they had data entered into the MPI system.  This could be online or offline. In most cases, a person calling into the call center will have already had some interaction with the VA and be in MPI.

**Users who have not verified their identity (LOA1)**
- If someone is logged in and is in MPI but has not verified their identity on VA.gov, they will only see the Account security section of the VA.gov profile when they go to www.va.gov/profile. From here, they can add additional security to their account by verifying their identity or adding 2-factor authentication (2FA). In order to view their personal and contact information, military information, or direct deposit information (if applicable), they must verify their identity (https://va.gov/verify/).

![LOA1 screen](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/LOA1.png)

**Users who have verified their identity (LOA3)**
 Users that are logged in, in MPI, and have verified their identity (LOA3) will be able to view their full profile on VA.gov.

![LOA3 screen](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/LOA3.png)

[Use Cases - Staging Users Matrix](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/QA/Staging%20Users%20-%20Test%20Cases.md)

## Error Handling
Error handling information can be found in the [Product Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Call%20Center/Product%20Guide%20-%20VA%20Profile.docx)

## Service Level Objective

## API Calls and Dependent Systems

- EVSS PPIU API (retrieve and update a veteran's financial information)
- GovDelivery API (send Direct Deposit related emails)
- Vet360 (address and contact information details)
- EMIS (user details call, ex: if user is a Veteran or not)
- Connected apps: vets-api -> lighthouse api -> okta (fetch/disconnect apps)

## Design

### Screenshots
- [Desktop inVision](https://vsateams.invisionapp.com/share/FJW9OGY2B9A#/screens)

- [Mobile inVision](https://vsateams.invisionapp.com/share/34WJ8JOCMAB#/screens)

### Before

#### Profile 
![Profile 1.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/design/Profile%20with%20direct%20deposit.png)

#### Account
![Account 1.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/design/account_screenshot.png)

### After (Profile 2.0)
![Profile 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/design/profile_2.0_screenshot.png)
