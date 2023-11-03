# Project outline: Create dot indicator on unread health care messages

**Last Updated: September 28, 2023  -- updated communications links**

### Communications

- **Github labels**: authenticated-experience
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)
- **Development Epic:** [#63788](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63788)
- **My VA Collaboration Cycle Epic:** [#66544](https://github.com/department-of-veterans-affairs/va.gov-team/issues/66544)
- **MHV Landing Page Collaboration Cycle Epic:** [#60663](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60663)

### Roles

This is managed by [the authenticated experience team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization#team) and the following people:

|Name|Role|Email|
|----|----|-----|
|Patrick Bateman| OCTO lead for MHV landing page|patrick.bateman@va.gov|
|Florence McCafferty| Designer for MHV landing page|Florence.McCafferty@agile6.com|
|Mike Collier| PM for MHV landing page|michael.collier@agile6.com|
|Ryan Thurlwell|OCTO design lead for the mobile app|ryan.thurlwell@va.gov|

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Key deliverables](#key-deliverables)
- [Key Dates](#key-dates)
- [Design](#design)
- [Frontend](#frontend)


## Overview

The dot indicator is a notification style that aims to call a user's attention to unread messages. For MVP, we plan to launch this style and test whether it changes metrics for the health inbox link on My VA and the MHV landing page.

## Problem statement

- As a VA.gov user, I want to be able to easily see items that require my attention or action when I log into the website.

## User Outcomes

### Desired User Outcomes

- Users will more easily be able to see they have unread messages.
  
### Undesired User Outcomes

- Done wrong, the dot indicator would be easily missed by users.

## Business Outcomes

### Desired Business Outcomes

- The dot indicator is simple and easily scalable as an attention mechanism.

### Undesired Business Outcomes

- The dot indicator makes no difference in drawing attention to unread messages.

## Measuring Success

### Objective: Increase traffic to secure messaging link on My VA.

**KPI: Increase clicks into secure messaging link by 25% week-over-week.**

[My VA Domo dashboard](https://va-gov.domo.com/page/1167851935?userId=1322887837) (event action: Navigation - Link List - Health care - View your messages)

- Note: "You have a new message" warning alert was removed 8/28/23; Updated to static "Go to your inbox" link ahead of adding the dot indicator.

|KPI/metric|Pre-launch [7/19 - 7/25]|Pre-launch [7/26 - 8/1]| Pre-launch [8/2 - 8/8]|Pre-launch [8/9 - 8/15]|Pre-launch [8/16 - 8/22]|Pre-launch [8/29 - 9/4]|1 week post-launch to 100% [9/5 - 9/11]| 2nd week post-launch to 100% [9/12 - 9/18]|
|----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|
|Number of clicks into "secure messaging" link on My VA|27,364|24,259|26,748|29,918|26,119|25,080|**39,582**|**36,883**|
|% change in clicks from previous week|-|-11%|+10%|+12%|-13%|-4%|**+58%**|**+47** (over baseline 8/29 - 9/4)|

#### Further explanation on significance of week 1 (9/5/23 - 9/11/23) metrics

[Related Slack convo](https://dsva.slack.com/archives/C909ZG2BB/p1694525904888789)

First, it's important to note we saw an overall increase in traffic to My VA from the last baseline week (8/29/23 -9/4/23), but that probably only accounts for part of the increase we saw to the `Go to your inbox` link.

- **Total interactions on My VA August 29 - September 4**: 1,003,927
- **Total interactions on My VA September 5 - September 11**: 1,154,077

So the increase in total interactions is 15%.

Here are some other notable increases from baseline (8/29 - 9/4) to week 1 metrics (9/5 - 9/11). It's important to note the following had no notable design changes to result in these numbers:

- **Clicks into individual claims**: 23% increase
- **Clicks into all claims**: 24% increase
- **Clicks to the profile from My VA**: 17% increase
- **Clicks to view post-9/11 GI bill benefits**: 4% increase

So a lot of other links in the top 10 saw an increase due to activity, but that could only account for maybe a quarter of the activity we saw on the inbox link. Nothing else saw even close to a 58% increase in clicks, which means **the dot indicator is likely effective**.

#### Further explanation on significance of week 2 (9/12/23 - 9/18/23) metrics

Like the first week of the experiment, we saw an overall increase in traffic to My VA from the last baseline week (8/29/23 -9/4/23), but it is much smaller than the increase we saw in week 1 of the experiment. 

- **Total interactions on My VA August 29 - September 4**: 1,003,927
- **Total interactions on My VA September 12 - September 18**: 1,007,783

This is a less than 1% increase in interactions, so this can not account for the jump in interactions with the `Go to your inbox` link.

Here are some other changes from baseline (8/29 - 9/4) to week 1 metrics (9/5 - 9/11). It's important to note the following had no notable design changes to result in these numbers:

- **Clicks into individual claims**: 1% decrease
- **Clicks into all claims**: 5% increase
- **Clicks to view prescriptions**: 15% increase
- **Clicks to schedule and manage appointments**: 21% increase

So we can see some of the other health-related tools saw a big bump, but nothing even close to the 47% increase we saw for `Go to your inbox`. This implies that it's still likely -- as we suspected in week 1 -- that the dot indicator is the contributing factor in the large jump in activity for `Go to your inbox`.


## Key deliverables

(This is just a starting list. Feel free to add whatever is relevant here.)

- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63788)
- Sketch files
- Release plan

## Key dates

- August 2023: Initial discussions; project kickoff; design intent; implementation on My VA.
- August 28, 2023: "You have a new message" warning alert removed; Updated to static "Go to your inbox" link ahead of adding the dot indicator.
- September 5, 2023: Launched dot indicator to 100%

## Design

### Before
![Screenshot 2023-10-30 at 2 39 12 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/aa9443aa-a92f-4793-bdd1-816f1d4d6ac9)


### After
![Screenshot 2023-10-30 at 2 38 51 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/cf395ee7-db9c-442b-a119-0da40ed33881)



## Frontend

