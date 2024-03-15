# Login Product Outline

## Communications
- GitHub Label: login
- Slack channel: [#griffin-team](https://dsva.slack.com/channels/griffin-team)
- Product POCs: 
   - David Bao, DSVA

## Table of Contents
- [User Problem Statement](#user-problem-statement)
- [Assumptions](#assumptions)
- [Limitations](#limitations)
- [Value Propositions](#value-propositions)
- [Solution Approach](#solution-approach)
- [Success Metrics](#success-metrics)
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [Service Level Objectives](#service-level-objectives)
- [Testing](#testing)
- [Team](#team)
- [Screenshots](#screenshots)


## User Problem Statement
As a Veteran, it’s hard to access VA digital services that rely on sensitive personal information.

We've mapped out the specific login problems users are experiencing [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/roadmapping/identity-prioritizedproblems.md#improve-login).

### User Goals - Outcomes
- I want to be able sign in on VA.gov easily, quickly, and reliably to get greater access to VA digital services.
- When I have issues loging in, I want to be able to resolve them quickly.

### Business Goals - Objectives
- Increase the number of Veterans who own digital identity accounts to access digial services.
- Increase usage of digital identity accounts to access benefits and services.
- Increase the number of users who identity proof and secure their accounts through MFA, so that they can access more digital services securely.
- Decrease the number of errors and issues that prevent users from accessing their digital identity.
- Improve the ability for Veterans to resolve digital identity issues on their own, and get help from the VA when they are unable to do so.

## Assumptions
- Users have issues signing in with DS Logon, MHV, and ID.me.
- When users do have issues, they don't know how to resolve them because error messaging is too vague
- We're getting too high of a volume of help request forms from users, and as a result, can't respond to them quickly enough or in-depth enough to help users resolve issues. 
- If we do get login help request volume lower, our help request support doesn't have the information it needs to meaningfully help users troubleshoot login issues.
- Some users do not trust the VA enough to create accounts and/or use existing credentialing systems.

## Limitations
- We are unable to get information about success, errors, and abandonment rates from DS Logon or MHV
- some Veterans have multiple identity accounts (DS Logon, MHV, ID.me) 
- not all Veterans are found in MVI (Master Veteran Index). When users are not found in MVI, its not clear whether that's because they're not a Veteran (expected behavior), or that they are a Veteran and not correctly listed in MVI (error)
- Some users may be found in MVI, but the information MVI has on users may be incorrect

## Value Propositions
An effective login experience will:
- Work, easily and quickly
- Reduce the burden on the user to remember multiple credentials to access multiple services
- Create a cohesive sign-in experience across the VA to eliminate the use of multiple digital properties
- Give users a self-service way to fix problems with logging in and accessing their digital identity, so that they can restore access to services when it is interrupted

## Solution Approach
### Current Approach
   - We ran a full 508 accessibility audit on the existing login solutions provided by DS Logon, MHV, and ID.me. We identified 36 issues and prioritized based on severity which we are now working with those teams to implement and improve the accessibility of login for all users. Epic here:
https://github.com/department-of-veterans-affairs/vets.gov-team/issues/16221
   - the full-screen login flow takes the user to an externally hosted page, while presenting the appearance of staying on the same site by keeping the login flow all within the same tab. Because of this, we loose the ability to save form data when the user is not already logged in (navigating away from the app clears form data). We explored the technical feasibility of a new session key to save form data #16181, but due to complexity (and high need for full-screen login enhancment), decided to remove the functionality for save in-progress forms for unauthenticated users. Instead, we're enhancing our messaging to encourage users to sign in first if they'd like to save form data #16553. We're tracking the following **metrics related to SIP forms**:
      - Overall form conversions
      - Sign-in SIP events
      - Sign-in attemps through header while on a form in-progress

2. We are doing discovery on the current process for users to get help when having login issues. Our goal is to make the sign-in experience more reliable ([OKR #1](#okr-1)) and when there are issues with sign-in, make it easier for veterans to resolve them ([OKR #2](#okr-2)). Our iniatives to achieve this objective include: 
   - Better understanding issues users are unable to resolve, so that we can either fix them on our end or provide better instructions for self-service resolution 
   - Improve data that is submitted through the request form so that help center can better provide instructions on how to resolve and that we can get better insight into ongoing issues
   
### Future Approach
We've prioritized a list of [problems facing login and identity here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/roadmapping/identity-prioritizedproblems.md), based on value, cost, and controllability. Given this priotized problems list, and input from analytics(#google-analytics) and errors(#sentry), we've built out a roadmap capturing our [next and future initiative here](https://github.com/department-of-veterans-affairs/vfs-planning/projects/10)

## Success Metrics
The login success metrics are [documented here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/user-login/successmetrics.md)

### Status
#### 1. Login Flow
Our current login solution is a 37+ step process documented [here (nontechnical)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/auth/authentication-and-authorization-simplified.md) and [here (technical)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/auth/authentication-and-authorization.md). The login and registration windows are presented to the user through a full-screen flow triggered by clicking the corresponding sign-in or sign-up links on the initial sign-in modal. Users are given the option to verify their identity to get greater access to services, and add Multi-Factor Authentication to add additional security to their accounts. When users encounter an error signing in, they are shown one of the [error messages documented here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/sign-in-error-handling.md). Login events and successes can be accessed via [google analytics here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/analytics/readme.md#Comparing-all-logged-in-and-logged-out-users). Help for commonly experienced login issues is explained on our [Sign-in FAQ page](https://www.va.gov/sign-in-faq), which is accessible to users via the sign-in modal.


#### 2. Identity Provider Integrations
We currently integrate with three Identity Providers to give Veterans access to digital services on VA.gov. Those Identity Providers currently include DS Logon, My HealtheVet (MHV), and ID.me, and our integrations with each are [covered in more detail here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/user-login/login-data-flow.md). Registration is currently available for ID.me and DS Logon, but not MHV, on VA.gov.


#### 3. User Creation
After logging the user in through their preferred Identity Provider, we create a user object using our [backend user model](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/user.rb). This user object is populated with the [attributes we've obtained from the Identity Provider](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/user-login/login-data-flow.md) and the [corresponding MVI attributes]() we receive when the user is found in MVI. Based on the attributes returned by MVI, we make additional calls to external data services to obtain relevant information for the user's identity (e.g., call Vet360 to get contact information if MVI sends us a vet360_id). Sensitive user information is witheld from the browser using the [userserializer class](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/serializers/user_serializer.rb#L97-L116) and cached in a separate Redis database for a short duration. This secures the user's Personally Identifiable Information (PII) while allowing authorized digital service applications to access sensitive user data when needed. The browser is provided with a [leaner, more secure user object](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/user/getUser) that provides basic information including which digital services are available to the user.

#### 4. Single Sign On (SSO)
VA.gov is currently integrated with My HealtheVet (MHV), which is an external, health-focused web property where Veterans can schedule appointments online, refill prescriptions, view their health records, and send Secure Messages to their team. Prior to the introduction of SSO, users had to sign in anew if they leave their current site to access a tool that lives behind a different login mechanism. With SSO, users can now navigate from VA.gov to MHV without having to sign in. The full product outline for SSO is [documented here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/sso/design).

## Solution Narrative
#### 6/5/19 - [Decoupled MHV login from MVI]() 
We no longer require user validation checks for login, something that was blocking the login of MHV premium users when MVI is down (MHV is the one credential that does not send baseline attributes upon successful login). We decided to decouple these two services, since MVI often experiences very brief outages for 1-5 minutes, and the user may be able to access the service they are seeking once they've logged in (we attempt to draw from MVI on each page load or every 60 seconds. Early results from comparing our pre-decoupling baseline to post-change measurements show this has already significantly improved MHV login success in the two weeks following implementation.

#### 4.29.19 - [Identity provider outage warning/error messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/identityprovideroutages.md))
We've created error messages to show on the sign-in modal when an identity provider (DS Logon, MHV, ID.me) or MVI is experiencing outages, and configered these messages to be easily trigger from pager duty. 

#### 4.16.19 - MVI & MHV Account Creation error handling updates
We consolidated information for the statuses returned by MVI, examples of messaging to be shown, and outlined general [error handling for MVI here](). We also created an in-depth guide for [MHV account creation error handling here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/mhvaccountcreation-errorhandling.md). We've consolidated [all identity error handling here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/readme.md).

#### 4.15.19 - Improved CTA for creating MHV accounts on health tool page
We learned that MHV and MVI are now out of sync for some MHV accounts, which means VA.gov might mistakenly think a user does not have an MHV account, when in fact they do. As a result, we made an [immediate implementation here]() to improve the design, copy, and analytics around our "Create an MHV Account" CTA on health tool pages, and are [tracking the analytics here](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.dateOption=last7days&explorer-table.plotKeys=%5B%5D&explorer-table.filter=logout-link-clicked-createcta-mhv&_r.drilldown=analytics.eventCategory:Sign-on,analytics.eventAction:Login%20-%20vagovprod/) around how often users sign out because they have a non-recognized MHV account. In the first week, we've determined a baseline of ~150 missing MHV account sign-outs, which we can use to introduce experiments with MHV to resolve the issue.

#### 3.4.19 - Help Request Form Redesign
We did [discovery]() on the existing login help request form and found several opportunities to improve it, including UX, 508 accessibility, and data collection geared towards resolving login issues more effectively by connecting issues submitted to the backend stack trace through a RequestID. The form [design was completed here](). [Product requirement documentation was compiled here]() and a conversation is being scheduled with the Microsoft Dynamics team to migrate this form onto VA.gov with the necessary enhancements.

#### 3.1.19 - Login Error Mapping
We mapped the [login-related error messages](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/error-messages) our users see while attempting to sign in on VA.gov. The allowed us to identity areas we could make improvements, by offering more helpful copy, directing users to appropriate next actions through CTAs, and offering up directions to our help request form when appropriate. The [implementation of the new error messages is captured here]().

#### 2.11.19 - MVI Connection Experiment
We noticed repeated outages (~1 x per week) where connections to MVI would fail in large quantities, triggering our breakers (which cuts off the MVI connection fully). To try to remedy this issue, we [ran an experiment]() where we increased our connection times with MVI. While we did see a large decrease in the number of "timeout" related errors (connection fails due to taking too long), we still see conisistent outages with MVI around 1 x Week, ranging from minutes to hours, which we've [documented here](). We have an ongoing conversation in email with the MVI team.

#### 1.29.19 - Full Screen Login Flow Full Launch
We launched the full-screen login flow to all VA.gov users. Our "failed to open a new window" pop-up error dropped from a high of 16k errors per day (all failing login) to 0 after this release. This work is captured by the epic [Change to a full-screen login flow instead of opening up a popup]()

#### 1.24.19 - Full Screen Login Flow Mobile Beta Launch
We launched the full-screen login flow to mobile users only first as a beta release. In the hour preceding the release, we logged 1,200 "failed to open a new window" pop-up errors that failed sign-in altogether. In the first hour post release, we logged 1 of these errors.

#### 12.14.18 - SessionStore Cookie Implemented
A Sessionstore Cookie was implemented to allow the user to stay logged in across multiple tabs. The purpose of this change was to improve user experience across multiple tabs and to related errors. Metrics were not yet available to measure this impact. Epic here: [Implement SessionStore Cookie to replace Authentication Headers]()

## Service Level Objectives
- all login related SLOs are covered in the [Authentication and Authorization Product Outline]()

## Testing
  * [Test users can be found here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Administrative)
  * Visit https://staging.va.gov
  * Click "Sign In"
  * Enter your chosen user/password in the ID.me dialog and click "Sign In"
  * You should see a 6-digit confirmation automatically entered for you; click "Continue"
  * You should now be logged in to VA.gov

## Screenshots
### 1.29.19
#### Full Screen Login Flow
![screen shot 2019-02-20 at 5 39 16 pm](https://user-images.githubusercontent.com/21130918/53129769-76d9c480-3536-11e9-8cb6-cc3f153ea147.png)


### 12.26.18
#### Pop-Up Login Flow
<img width="1676" alt="screen shot 2018-12-26 at 2 41 45 pm" src="https://user-images.githubusercontent.com/21130918/50455570-e6f41180-091c-11e9-881f-b72c889ddf8a.png">
