# Project outline: Add links to dependents and letters tools to the authenticated menu

**Last Updated: November 6, 2023 -- updating post-launch stats**

### Communications

- **Github labels**: authenticated-experience
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

### Roles

#### OCTO team

[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

#### Partners

|Name|Role|Email|
|----|----|-----|
|Kristin Ouellette Muskat| Information architect for Sitewide content/IA| kristin.o.m@coforma.io|

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

We're looking to run a lightweight experiment by adding links into the authenticated menu for [Dependents ](https://staging.va.gov/view-change-dependents/view)and [Letters](https://staging.va.gov/records/download-va-letters/).

- [We saw evidence in Liz's logged-in navigation user research from April that we need to elevate dependents](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/comprehensive-research-summary.md#its-hard-to-get-to-tasks-when-theyre-not-obviously-linked-from-the-homepage-my-va-or-the-mega-menu). People had significant trouble finding dependent information on the site, and many people said they expected to find dependent information in the profile.
- In analytics, variations on "dependents" and "letters" make up the majority of the top 10 search terms in the profile. [These are the stats for the last six months](https://dsva.slack.com/archives/C909ZG2BB/p1689612516606549?thread_ts=1689606177.353799&cid=C909ZG2BB).

However, we're looking for a lighter weight solution than fully integrating these sections into the profile. By adding things into the authenticated menu, we're hoping to catch people a step earlier than the profile. We plan to experiment with this solution, see if it moves metrics, and determine next steps based on the outcome.

## Problem Statement

Users have trouble finding dependent information and where to download their benefit letters. Through research and analytics, we have observed people expect to find these things in the VA.gov profile, but those things are currently not linked from there.

## User Outcomes

### Desired User Outcomes

*Why would a user want to use this? With this problem solved, what should users be able to do/achieve that they couldn't before?*

- By elevating dependent and letters in the authenticated menu, users should be able to more easily find these tools.

### Undesired User Outcomes

- Users still look for dependent and letters in the profile.

## Business Outcomes

### Desired Business Outcomes

*Why would your business want this to exist? With this problem solved, what should your business be able to do/achieve that they couldn't before?*

- Adding links to dependents and letters to the personalized menu is a significantly lighterweight solution than fully integrating these sections into the profile, and even easier than simply linking to these pages from the profile.
- This may help prove out that we can/should more holistically leverage the authenticated menu to support the authenticated experience.

### Undesired Business Outcomes

- Adding these links to the authenticated menu doesn't move metrics, and we're back at square one.

## Measuring Success

### Objective #1: Increase findability of Dependents and Letters information

**When filling in data -- update dates to be 1 month pre-launch, one month post launch (to 100%), and the second month post-launch (to 100%) based on actual launch dates.**

**KPI: See variations on "dependents" and "letters" entirely removed from the top 10 search terms within the profile.**

[Search results can be found on the Profile Domo dashboard](https://va-gov.domo.com/page/1834995012?userId=66061986)

|KPI/metric|Baseline: 2 weeks pre-launch [9/20 - 9/26/2023]|Baseline: 1 week pre-launch [9/27 - 10/3/2023]|1 week post-launch to 100% [10/4 - 10/10]|2 weeks post-launch to 100% [10/11 - 10/17]| 3 weeks post-launch to 100% [10/18 - 10/24]|4 weeks post-launch [10/25 - 10/31]|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Search rank for "**letters**” or similar from the profile (record whatever variation has the highest rank)|#3 (and 6,8)|#2 (and 3,8)|#3 (and #10)|#4 (and 6,9,10)|#5|#5|
|Search rank for "**dependents**” or similar from the profile (record whatever variation has the highest rank)|#1 (and 2,4,9)|#1 (and 4,5,10)|#1|#2|#3|#1|

**KPI: See overall reduction in "dependents" and "letters" searches within the profile.**

|KPI/metric|Baseline: 2 weeks pre-launch [9/20 - 9/26/2023]|Baseline: 1 week pre-launch [9/27 - 10/3/2023]|1 week post-launch to 100% [10/4 - 10/10]|2 weeks post-launch to 100% [10/11 - 10/17]| 3 weeks post-launch to 100% [10/18 - 10/24]|4 weeks post-launch [10/25 - 10/31]|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Raw number of "**letters**” searches in the top 10 profile searches|189|121|63 (-48% from 1-week pre-launch)|111 (-9% from 1-week pre-launch: +76% from 1-week post-launch)|27 (-78% from 1-week pre-launch)|33 (-73% from 1-week pre-launch) |
|Raw number of "**dependents**” searches in the top 10 profile searches|426|239|55 (-77% from 1-week pre-launch)|41 (-83% from 1-week pre-launch)|33 (-86% from 1-week pre-laumch)|51 (-79% from 1-week pre-launch)|

**KPI: See variations on "dependents" and "letters" entirely removed from the top 10 search terms on VA.gov as a whole.**

[Search results can be found on the Profile Domo dashboard](https://va-gov.domo.com/page/1834995012?userId=66061986)

|KPI/metric|Baseline: 2 weeks pre-launch [9/20 - 9/26/2023]|Baseline: 1 week pre-launch [9/27 - 10/3/2023]|1 week post-launch to 100% [10/4 - 10/10]|2 weeks post-launch to 100% [10/11 - 10/17]| 3 weeks post-launch to 100% [10/18 - 10/24]|4 weeks post-launch [10/25 - 10/31]|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Search rank for "**letters**” or similar from the profile (record whatever variation has the highest rank)|#2 (5,9)|#3 (and 5)|#2 (and 10)|#2 (and 10)|#2|#2|
|Search rank for "**dependents**” or similar from the profile (record whatever variation has the highest rank)|#1|#1|#3|#5|#6|#7|

**KPI: See overall reduction in "dependents" and "letters" searches on VA.gov as a whole.**

|KPI/metric|Baseline: 2 weeks pre-launch [9/20 - 9/26/2023]|Baseline: 1 week pre-launch [9/27 - 10/3/2023]|1 week post-launch to 100% [10/4 - 10/10]|2 weeks post-launch to 100% [10/11 - 10/17]| 3 weeks post-launch to 100% [10/18 - 10/24]|4 weeks post-launch [10/25 - 10/31]|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Raw number of "**letters**” searches in the top 10 VA.gov searches|3,549|2,665|1,653 (-38% from 1-week pre-launch)|1,755 (-34% from 1-week pre-launch; +6% from 1-week post-launch)|1078 (-60% from 1-week pre-launch)|1,025 (-62% from 1-week pre-launch)|
|Raw number of "**dependents**” searches in the top 10 VA.gov searches|1,929|1,762|957 (-46% from 1-week pre-launch)|834 (-53% from 1-week pre-launch)|810 (-54% from 1-week pre-launch)|752 (-57% from 1-week pre-launch)|

**KPI: See no increase in bounce rates from the Dependents and Letters pages (increase in bounce rate = people found the page but not what they were looking for).**

- [Bounce rate for Letters page](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Frecords~2Fdownload-va-letters~2Fletters~2Fconfirm-address~2F/)
- [Bounce rate for Dependents page](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fview-change-dependents~2Fview~2F/)

|KPI/metric|Baseline: 2 weeks pre-launch [9/20 - 9/26/2023]|Baseline: 1 week pre-launch [9/27 - 10/3/2023]|1 week post-launch to 100% [10/4 - 10/10]|2 weeks post-launch to 100% [10/11 - 10/17]| 3 weeks post-launch to 100% [10/18 - 10/24]|4 weeks post-launch [10/25 - 10/31]|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Bounce rate for "**Letters**” |1.98%|2.23%|0.96%|1.33%|0.57%|1.13%|
|Bounce rate for "**Dependents**”|0.55%|0.27%|0.89%|0.24%|0.52%|0.89%|

### Objective #2: Explore using authenticated menu as a place to elevate links to tools.

**KPI: Establish baseline metrics for "dependents" and "letters" links in the authenticated menu.**

[GA Dashboard for Auth Menu](https://analytics.google.com/analytics/web/#/dashboard/jTwco5hFRBmuXcjZN9YSPA/a50123418w177519031p176188361/_u.date00=20230901&_u.date01=20231004)

|KPI/metric|1 week post-launch to 100% [10/4 - 10/10]|2 weeks post-launch to 100% [10/11 - 10/17]| 3 weeks post-launch to 100% [10/18 - 10/24]|4 weeks post-launch [10/25 - 10/31]|
|----------|-------------|---------------|-------------------|-------------------|
|Clicks into "**Letters**" from the authenticated menu |44,825|50,170|52,545|50,681|
|Clicks into "**Dependents**" from the authenticated menu|23,204|25,611|27,597|26,397|

**KPI: Track what kind of impact adding Letters and Dependents to the auth menu has on pageviews.**

Note: Increaseing pageviews was not originally part of our goals. We decided to document these metrics post-launch given the substantial change caused by adding these links to the auth menu.

- [Pageviews for Letters page](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Frecords~2Fdownload-va-letters~2Fletters~2Fconfirm-address~2F/)
- [Pageviews for Dependents page](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fview-change-dependents~2Fview~2F/)

|KPI/metric|Baseline: 2 weeks pre-launch [9/20 - 9/26/2023]|Baseline: 1 week pre-launch [9/27 - 10/3/2023]|1 week post-launch to 100% [10/4 - 10/10]|2 weeks post-launch to 100% [10/11 - 10/17]| 3 weeks post-launch to 100% [10/18 - 10/24]|4 weeks post-launch [10/25 - 10/31]|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Pageviews for "**Letters**” |48,255|48,396|89,967 (+86% from 1-week pre-launch)|97,549 (+102% from 1-week pre-launch)|99,070 (+105% from 1-week pre-launch)|95,496 (+97% from 1-week pre-launch)|
|Pageviews for "**Dependents**”|16,937|16,295|37,349 (+129% from 1-week pre-launch)|41,045 (+152% from 1-week pre-launch)|43,103 (+165% from 1-week pre-launch)|41,638 (+155% from 1-week pre-launch)|

## Key deliverables

(This is just a starting list. Feel free to add whatever is relevant here.)

- [EPIC | Profile | Authenticated Menu Modifications #62186](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62186)
- [Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/authenticated-menu/add-dependents-letter/release-plan.md)

## Key dates

- July 2023: Initial discussions; project kickoff
- August 2023: Design
- September 2023: Build
- October 4, 2023: Launched to 100% of users

## Design

- [Design Intent Sketch files](https://www.sketch.com/s/113f0ee6-e77d-4b1b-bf02-af27580931fe/p/F06226AA-DBC6-482C-A474-E9585FDF7178/canvas)
- [Final Sketch files](https://www.sketch.com/s/b1dacba9-064d-4a24-bfa4-ae0da5790f08)
   
### Before
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/76d5cd22-fab0-4c53-a69e-4d80bb82797a)

### After
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/b3c9247e-2707-49a8-a3c2-73a3fcaa52ba)

## Frontend
