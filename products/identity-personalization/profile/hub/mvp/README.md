# Project outline: Profile hub MVP

**Last Updated: January 2, 2024** updated metrics

### Communications

- **Github labels**: `profile-hub` ([GH issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3Aprofile-hub))
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

### Roles

#### OCTO team

[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

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

When we launched [profile 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account#readme) in 2020, the profile went from a single page to a multi-page section. The URL `va.gov/profile` became obsolete, as we opted to land users right on the first page of the profile (at the time, a combined personal & contact information section), which had a more specific URL.

While landing people directly in the first section of the profile generally doesn't cause major usability issues, there have been a few notable exceptions to this:

- In the mobile view, people often don't realize the profile menu is collapsed, and they think `Personal information` is the only section of the profile. We have seen this in usability testing, and we think this might be why we sometimes see search results for sections that are already part of the profile.
- For people that use screen readers, they expect to land on a page with an H1 that says `Profile` after clicking on the profile link from the authenticated menu. But since we drop people right into `Personal information`, there is no `Profile` header. This breaks accessibility best practices.
- When reviewing search analytics, we see people using search terms to find things that are already in profile. This suggests that the navigation isn't offering enough contextual clues to users, or simply isn't being noticed.

To solve for these problems, we are building a profile hub page, which resolves the issues mentioned above by doing the following:

- Provide people to scan a page instead of an easy-to-miss menu for the contents of the profile.
- This allows us to create a proper profile landing page with a `Profile` H1, which aligns with accessibility best practices.

## Problem Statement

- As a mobile user, I can easily miss the mobile menu in the profile, which leads me to think that `Personal information` is the only section of the profile.
- As a person using a screen reader, I expect to see a `Profile` H1 when I go to the profile.

## User Outcomes

### Desired User Outcomes

*Why would a user want to use this? With this problem solved, what should users be able to do/achieve that they couldn't before?*

- On mobile, users can more easily scan for what is available in the profile.
- For people using screen readers, it will be much clearer that links to `Profile` landed them in the right place.
- People won't need to use search from profile to find things that are in profile.

### Undesired User Outcomes

- This reduces overall scannability of the profile.

## Business Outcomes

### Desired Business Outcomes

*Why would your business want this to exist? With this problem solved, what should your business be able to do/achieve that they couldn't before?*

- This allows us to fix longstanding issues for mobile and screen reader users.
- This allows us to surface links associated with the profile without having to build whole new sections within the profile.
- This allows us to experiment with the hub model and whether it might be part of a more holistic authenticated experience.
  
### Undesired Business Outcomes

- The profile hub becomes a dumping ground.

## Measuring Success

### Objective #1: Reduce searches from within profile for items in the profile

**KPI: The top 10 searches from the profile should not include any content that exists within the profile.**

[Domo dashboard for profile searches by search term](https://va-gov.domo.com/page/1834995012/kpis/details/203579416)
/
|KPI/metric|Baseline: 1 month pre-launch [11/18 - 12/18/2023]| 1 week post-launch to 100% [12/19-12/25/2023]| 2 weeks post-launch to 100% [12/26/2023-1/1/2024]| 3 weeks post-launch to 100% [1/2-1/8/2024]| 4 weeks post-launch to 100% [1/9-1/15/2024]|
|----------|:-:|:-:|:-:|:-:|:-:|
|dd214|167(ranked 3rd)|16 (ranked 13th)|16 (ranked 13th)||||
|direct deposit|188 (ranked 1st)|27(ranked 4th)|31 (ranked 2nd)||||

## Analytics 
Analytics for hub vs menu nav clicks can be found on [this board](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/_u.date00=20231119&_u.date01=20231128/)

For more complete list [see this report](https://analytics.google.com/analytics/web/?authuser=0#/analysis/a50123418w177519031p176188361/edit/_K1zzMjpQ2qxlfcC--aNiw) 

<details>
  <summary>example screen grab of the relevant section</summary>
not maintained 

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/63d4760b-3136-4f84-bc33-ef7624df91ea)

</details>

### Baseline Metrics for Hub vs Side Nav

| **Event Action**                                                                         | **Users**                 | **%users** | **Events** | **% total events** |
|--------------------------------------------------------------------------------------|-----------------------|--------|--------------|----------------|
| **Side Nav**                                                                             |                       |        |              |                |
| Navigation - Side - Profile - Personal information                                   | 6924                  | 19.79% | 8214         | 8.28%          |
| Navigation - Side - Profile - Notification settings                                  | 5264                  | 15.04% | 5932         | 5.98%          |
| Navigation - Side - Profile - Military information                                   | 7265                  | 20.76% | 8414         | 8.48%          |
| Navigation - Side - Profile - Direct deposit information                             | 5931                  | 16.95% | 7504         | 7.56%          |
| Navigation - Side - Profile - Contact information                                    | 6935                  | 19.82% | 8233         | 8.29%          |
| Navigation - Side - Profile - Connected apps                                         | 3174                  | 9.07%  | 3334         | 3.36%          |
| Navigation - Side - Profile - Account security                                       | 4393                  | 12.55% | 4928         | 4.96%          |
|                                                                                      |                       |        |              |                |
| **Profile Hub**                                                                          |                       |        |              |                |
| Navigation - Link Click - View payment history                                       | 4736                  | 13.53% | 5507         | 5.55%          |
| Navigation - Link Click - Update your sign-in info on the My HealtheVet website      | 82                    | 0.23%  | 88           | 0.09%          |
| Navigation - Link Click - Update your sign-in info on the Login.gov website          | 98                    | 0.28%  | 101          | 0.10%          |
| Navigation - Link Click - Update your sign-in info on the ID.me website              | 185                   | 0.53%  | 190          | 0.19%          |
| Navigation - Link Click - Update your sign-in info on the DS Logon website           | 114                   | 0.33%  | 123          | 0.12%          |
| Navigation - Link Click - Update your mobile phone number                            | 157                   | 0.45%  | 165          | 0.17%          |
| Navigation - Link Click - Profile Hub - Review your military information             | 6393                  | 18.27% | 6920         | 6.97%          |
| Navigation - Link Click - Profile Hub - Review account security                      | 607                   | 1.73%  | 652          | 0.66%          |
| Navigation - Link Click - Profile Hub - Manage your personal information             | 11183                 | 31.96% | 12325        | 12.42%         |
| Navigation - Link Click - Profile Hub - Manage your direct deposit information       | 4402                  | 12.58% | 5497         | 5.54%          |
| Navigation - Link Click - Profile Hub - Manage your contact information              | 7677                  | 21.94% | 8337         | 8.40%          |
| Navigation - Link Click - Profile Hub - Manage notification settings                 | 1623                  | 4.64%  | 1664         | 1.68%          |
| Navigation - Link Click - Profile Hub - Manage connected apps                        | 1149                  | 3.28%  | 1179         | 1.19%          |
| Navigation - Link Click - Profile Hub -                                              | 6763                  | 19.33% | 7870         | 7.93%          |
| Navigation - Link Click - Learn how to verify your identity on VA.gov                | 114                   | 0.33%  | 118          | 0.12%          |
| Navigation - Link Click - Learn how to request your DD214 and other military records | 1247                  | 3.56%  | 1309         | 1.32%          |
| Navigation - Link Click - Add a phone number to your profile                         | 652                   | 1.86%  | 656          | 0.66%          |
| Navigation - Link Click - Account security                                           | 1                     | 0.00%  | 1            | 0.00%          |
|                                                                                      |                       |        |              |                |
| **Grand totals**                                                                         | 34992                 |        | 99261        |                |


## Key deliverables

(This is just a starting list. Feel free to add whatever is relevant here.)

- [Project epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40593)
- [Usability Testing](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability) 
- [Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/hub/mvp/hubReleasePlan.md)

## Key dates

- July 2023: Initial discussions; project kickoff
- August 2023: Design and design intent review
- September 2023: Build
- October 2023: Usability Testing
- November 2023: Build corrections
- December 2023: Launch

## Design
<details>
  <summary>Initial Design Work</summary>

  [Initial Designs:](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60822)
- User flow is available on the left side of [this page](https://www.sketch.com/s/113f0ee6-e77d-4b1b-bf02-af27580931fe/p/07E02D01-E54B-4ECE-9B5A-838FF0A10CA2/canvas) in Sketch
- [Mobile](https://www.sketch.com/s/113f0ee6-e77d-4b1b-bf02-af27580931fe/a/ZVvVnp3)
- [Desktop](https://www.sketch.com/s/113f0ee6-e77d-4b1b-bf02-af27580931fe/a/JAaAJyk)

</details>

<details open>
  <summary>Current Design and User Flow</summary>

- [Desktop](https://www.sketch.com/s/b41a687f-8ab8-4be1-b189-692e5818cffd/p/EFCD1C39-A0C1-4A07-8510-1C0A7713FA1A/canvas)
- [Mobile/user flow](https://www.sketch.com/s/b41a687f-8ab8-4be1-b189-692e5818cffd)

</details>
   
### Before
<details>
  <summary>Before Hub Launch </summary>
  
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/f6d472cc-0a2b-4c0d-b73b-fcda985c8e00)

</details>


### After
<details>
  <summary>After Hub Launch </summary>
  
Not maintained, see sketch files

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/0c7f3df6-500e-4d2a-b480-ebe52ad36010)

</details>



