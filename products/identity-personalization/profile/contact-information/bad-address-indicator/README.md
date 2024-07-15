# Project outline: Add a bad address indicator for mailing addresses

**Last Updated: November 9, 2023** add link to GA dashboard

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

#### VA.gov UI updates

We are working on UI updates to VA.gov to show an alert in the VA.gov profile if someone has the bad address indicator. Once a person updates their mailing address, the alert will be removed.

**Launch date**: 100% as of 10/24

#### Email notifications

We are also working with VA Profile to send an initial email blast to folks who have the bad address indicator currently. This email will not be ready at the same time as the UI updates. Instead, we will launch the UI updates first, gather metrics, and then launch the email notification once VA Profile has integrated with VANotify and is ready to do so. 

**Anticipated launch date**: tbd

### Key dates

- January 2022: PM/PO working on discovery for this project. 
- February 2022: Kickoff; Start design
- March 2022: Design intent
- April 2022: Mostly on hold in favor of other project work
- May 2022: Resume project; High fidelity mocks; Discussions with VA Profile on email notifications
- June 2022: Midpoint review
- July 2022: Research
- August 2022: QA
- September 2022: UAT
- October 13, 2022: Launch to 25%
- October 17, 2022: Launch to 50%
- October 24, 2022: Launch to 100%

## Measuring success

Our main objective is to reduce the amount of mail returned to the VA. However, we don't have access to metrics on returned mail, so we can use the bad address indicator and number of address updates as proxies and assume if fewer people have the bad address indicator and more people are updating their addresses, less mail will be returned to the VA. 

### Metrics to track once the UI updates go out

<details>  <summary>UI updates</summary>  

### Objective: Prompt people who visit the profile and have a bad address to update their address.
  
**Please update all dates to reflect the actual dates for pre-launch and post-launch.**

**Key result #1**: Establish baseline metrics for how many people see the bad address prompt (source: [GA Dashboard Widget](https://analytics.google.com/analytics/web/#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/_u.date00=20221024&_u.date01=20221123))

|KPI/metric|Post-launch: One month post-launch to 100% (10/24 - 11/23)| Post-launch: Second month post-launch to 100% (11/24 - 12/23)|
|----------|-------------|---------------|
|# of views of the bad address prompt on Personal Info| 226|226|
|# of views of the bad address prompt on Contact Info|160|167| 

**Key result #2**: Determine if we see an increase in address updates as a result of this prompt (KPI = 10% increase)(source: [GA Dashboard Widget](https://analytics.google.com/analytics/web/#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/_u.date00=20221024&_u.date01=20221123)).

|KPI/metric|Pre-launch: One month pre-launch to any users (9/13 - 10/12) | Post-launch: One month post-launch to 100% (10/24 - 11/23)| Post-launch: Second month post-launch to 100% (11/24 - 12/23)|
|----------|-------------|---------------|---------------|
|Mailing address updates| 24,965 unique events|23,482 unique events|22,756 unique events|
  
**Key result #3**: Determine if we see a decrease in number of folks with the bad address indicator (KPI = 10% decrease).

**Note: These numbers come from VA Profile. Note that BAI address corrections are also made outside of VA.gov; they are included in the overall numbers shown below and account for the large volume of BAI updates compared to GA widget data. Based on our other analytics, we can safely conclude that the VA.gov profile DID NOT have much of an impact on the drastic drop in bad addresses, and that this drop is likely due to address updates happening through medical facilities, regional offices, and other sources.**
  
|KPI/metric|Pre-launch: One month pre-launch to any users (9/13 - 10/12) | Post-launch: One month post-launch to 100% (10/24 - 11/23)| Post-launch: Second month post-launch to 100% (11/24 - 12/23)|
|----------|-------------|---------------|---------------|
|# of people with the bad address indicator|554,093 (as of 10/12/22)|448,551 (as of 11/23/22)|TBD|  

</details>

### Metrics to track once the email notification goes out

The metrics weeren't ultimately tracked when launched. [The GA Dashboard for this can be found here.](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/)
<details>  <summary>Bad address email</summary>  

### Objective: Reduce number of people with the bad address indicator

- [GA Dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/_u.date00=20231001&_u.date01=20231031/)

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

</details>

## Design

- [Sketch files](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/p/B84818F9-2AB7-42E8-BFFD-0C0949B020A3/canvas)
- [Use case](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-marked-as-bad.md)
- [User flow](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/7yPo0rZ) 

### Before

### After

## Frontend

- [Frontend documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/frontend.md)

## Backend

- [Backend documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/contact_information/backend_documentation.md)
