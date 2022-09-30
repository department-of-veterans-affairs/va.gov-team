# Project outline: Add a bad address indicator for mailing addresses

Last Updated: August 5, 2022

### Communications

- **Github labels**: vsa-authenticated-exp; profile
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#va-profile](https://dsva.slack.com/channels/va-profile)

### Roles  
  
[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Solution Approach](#solution-approach)
- [Measuring Success](#measuring-success)
- [Design](#design)
- [Frontend](#frontend)
- [Backend](#backend)

## Overview

When mail is sent to a veteran and then returned to the VA, the address is marked as "bad" in VA Profile. The address may very well be a real, valid address, but the returned mail implies that it is no longer the right address for the veteran for whom the mail was intended. Currently, 300K veterans have the bad address indicator flag on their mailing address in VA Profile.

## Problem Statement

- As a veteran, I want the VA to be able to reach my at my current mailing address.
- As a veteran, if the VA does not have my current address, I want them to reach out to me and let me know.

## User outcomes

### Desired User Outcomes

- Users will realize that the VA does not have a good address for them and update their information.

### Undesired User Outcomes

- User update their home address without updating their mailing address.

## Business outcomes

### Desired Business Outcomes

- Reduction in returned mail.
- Increase in veterans updating their addresess.
- Reduction in users who have the bad address indicator flag in VA Profile.

### Undesired Business Outcomes

- We can't proactively reach out to people who have the BAI.
- No reduction in users with the bad address indicator flag.
- No reduction in returned mail.

## Solution approach

### Update phases

There are going to be two phases of bad address updates, which will happen asynchronously:

#### Email notifications

We are working with VA Profile to send an initial email blast to folks who have the bad address indicator currently. **This email will go out before the UI updates are completed on VA.gov.** The current plan:

- VA Profile wants to pilot an initial email that's sent to 10K of 300K users with the bad address indicator.
- We will track analytics, and then scale the email and send to more users.

Once this email is sent out to the people who currently have the bad address indicator, VA Profile will also send out an email to user for whom the bad address indicator is newly added going forward.

**Anticipated launch date**: Early summer 2022

#### VA.gov UI updates

We are also working on UI updates to VA.gov to show an alert in the VA.gov profile if someone has the bad address indicator. Once a person updates their mailing address, the alert will be removed.

**Anticipated launch date**: Late summer 2022

### Key dates

- January 2022: PM/PO working on discovery for this project. 
- February 2022: Kickoff; Start design
- March 2022: Design intent
- April 2022: Mostly on hold in favor of other project work
- May 2022: Resume project; High fidelity mocks; Discussions with VA Profile on email notifications

## Measuring success

Our main objective is to reduce the amount of mail returned to the VA. However, we don't have access to metrics on returned mail, so we can use the bad address indicator and number of address updates as proxies and assume if fewer people have the bad address indicator and more people are updating their addresses, less mail will be returned to the VA. 

### Metrics to track once the initial email blast goes out to 10K people

#### Objective: Reduce number of people with the bad address indicator

**Key Result #1** -- Establish baseline metric for what % of 10K people receiving this email update their mailing address (we will determine this by seeing how many of them have the bad address indicator removed)

|KPI/metric|Baseline|Post-launch #1| Post-launch #2|
|----------|-------------|---------------|-------------------|
|% of people who click the email link| ?|?|?|

|KPI/metric|Baseline|Post-launch #1| Post-launch #2|
|----------|-------------|---------------|-------------------|
|% of people who click email link + complete login| ?|?|?|

|KPI/metric|Baseline|Post-launch #1| Post-launch #2|
|----------|-------------|---------------|-------------------|
|% of people who click link, login, and update their mailing address| ?|?|?|

**Key Result #2** -- Establish baseline metric for what % increase we should see in terms of address updates in VA.gov.

|KPI/metric|Baseline|Post-launch #1| Post-launch #2|
|----------|-------------|---------------|-------------------|
|% of mailing address updates|?|?|?|

### Metrics to track once the initial email blast goes to 100%

**Key Result #1** -- Decrease the number of users in VA Profile who have addresses that are marked as bad by 25%.

|KPI/metric|Baseline|Post-launch #1| Post-launch #2|
|----------|-------------|---------------|-------------------|
|% of addresses with the bad address indicator| ?|?|?|

**Key Result #2** -- Increase the number of mailing addresses updated per week by 25% from baseline.

|KPI/metric|Baseline|Post-launch #1| Post-launch #2|
|----------|-------------|---------------|-------------------|
|Number/% of mailing address updates|?|?|?|

### Metrics to track once the UI updates go out

TBD

## Design

- [Sketch files](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/p/B84818F9-2AB7-42E8-BFFD-0C0949B020A3/canvas)
- Need use case documentatio

### Before

### After

## Frontend

- [Frontend documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/frontend.md)

## Backend

- Need backend documentation
