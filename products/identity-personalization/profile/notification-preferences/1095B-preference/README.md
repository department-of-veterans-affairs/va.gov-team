# Project outline: Add 1095B mail opt-out preference to notification settings

## As of August 18, 2022, this project is on hold. The 1095B preference flow requires changes to the health care enrollment system (ES), and the team who manages the ES is unable to prioritize this work until 2023. We will pick up this effort again once all teams are ready to do so.

Last updated: August 22, 2022 

### Communications

- **Github labels**: vsa-authenticated-exp
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#cedar-1095b](https://dsva.slack.com/channels/cedar-1095b); [#va-profile](https://dsva.slack.com/channels/va-profile); [#va-notify-public](https://dsva.slack.com/channels/va-notify-public)

### Roles

#### OCTO team

[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

#### Stakeholders & Partners

|Name|Role|Email|
|----|----|-----|
|Tracey Mulrooney | OCTO 1095B lead|tracey.mulrooney@va.gov|
|Tamera Corson| 1095B PM|tamera.corson@serveadvisory.com|
|Beverly Nelson|OCTO VANotify lead|beverly.nelson@va.gov|
|Melanie Jones|VANotify PM|melanie.jones@oddball.io|
|Barbie Flowers| VEO VA Profile lead|barbara.flowers3@va.gov|
|Michael Richard| VA Profile|michael.richard2@va.gov|
|Barry WIllbanks| VA Profile|bwilbanks@meetveracity.com|

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Solution Approach](#solution-approach)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design](#design)

## Overview

The 1095B team is working on an effort to allow veterans and other health care recipients to download their 1095B (proof of health care) tax form from VA.gov. Part of this effort requires that veterans be able to opt-out of the mailed copy of their 1095B in favor of the digital download. The 1095B team would like to work in partnership with VA.gov, VA Profile, and VANotify to support this preference. This setting would live in the VA.gov profile and be managed by the VA Profile backend. VANotify would be responsible for various emails that are associate with opting in and out of a mailed copy of the 1095B.

## Problem Statement

- As a VA health care recipient, I want to be able to quickly and easily find and download my 1095B form online.
- As a VA health care recipient, I want to be able to choose whether or not I receive a hard copy of my 1095B form via mail.

## User outcomes

### Desired User Outcomes

- VA health care recipients can quickly and easily find their 1095B tax form online and download it.
- VA health care recipients can quickly and easily opt into and out of a mailed copy of the 1095B tax form whenever they want.

### Undesired User Outcomes

- VA health care recipients can't find their 1095B form or where to update their preferences on whether or not they receive a mailed copy.

## Business outcomes

### Desired Business Outcomes

- A significant amount of people opt out of a mailed copy of the 1095B, saving the VA $$$ on mail.

### Undesired Business Outcomes

- People do not opt-out of the mailed copy of the 1095B.

## Measuring success

OKRs and KPIs TBD.

## Solution approach

### Requirements

- Support a notification preference in the profile that allows veterans to opt into and out of a mailed copy of their 1095B. It should be clear that they can change this option at any time.
  - This would connect to VA Profile.
- Make sure anyone who updates this permission has an email on file, given that there are a number of legally required emails associated with this work.
- Any time someone updates their 1095B preference, send a confirmation email.
- There may be additional legal requirements around language we need to include in the notification settings section, but this is still TBD.

### Key dates

- July 2022: Initial intake and requirements gathering with 1095B team, VA Profile, and VANotify
- August 2022: Begin design explorations
- August 18, 2022: Work on hold until health care enrollment system team is ready to implement ES changes

## Backend

### Retrofitting VA Profile's current structure

- We should be able to leverage the current Group -- Item -- Channel structure we currently have with VA Profile. This should, in theory, allow us to complete development more quickly.
- However, VA Profile is retrofitting their system to make this work. They are treating a preference -- send me a copy via mail, or let me download digitally -- as a permission.

## Frontend

### Retrofitting VA Profile's current structure

- The channel we'll get back from VA Profile is **email** because there are emails associated with this work outside of the confirmation email we need to send. But, instead of relying on our copy structure we have now -- "Send me an email" or "Don't send me an email" -- we're going to have to customize this copy to something like "Mail me a copy of my 1095B" or "Don't mail me a copy of my 1095B. I'll download it digitally (note: you will receive XYZ emails if you choose to download your 1095B digitally)". This would be a departure from [how things are currently coded](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/frontend/display-notes.md).

## Design

### Previous research

These are links to reports from research conducted by the 1095B team:

- [1095-B Tax Document Research Findings – Round 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/research/Research-Findings-Round1.md)
- [1095-B Tax Document Research Findings – Round 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/research/round2/round2-research-report.md)

### Design artifacts

- Add link to use cases
- Add link to Sketch files
