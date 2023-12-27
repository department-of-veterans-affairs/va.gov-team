# Project outline: Add claims and disability rating to the authenticated menu

`First Draft`

**Last Updated: December 27, 2023**

### Communications

- **Github labels**: authenticated-experience, authenticated-menu
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

### Roles

#### OCTO team

[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

### Partners 
Sitewide Public Websites
- **Slack channel**: [#sitewide-public-websites](https://dsva.slack.com/channels/sitewide-public-websites)
  
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

We had significant success by adding [letters and dependents](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/authenticated-menu/add-dependents-letter/README.md) to the Authenticated Menu in 2023. 

We're hoping to build on that success by expanding the tools linked from the Authenticated Menu by adding a link to Claims and Disability Rating inforamtion. Additionally, the Sitewide Public Websites team is currently working on a redesigned header/footer for which the Authenticated Experiance team can help support by running usability testing with the new design incorporating the additional tools. 

## Problem Statement

[We analyzed user activity on the site](https://github.com/department-of-veterans-affairs/va.gov-team/issues/71332) to determine which pages veterans are visiting most often and the searches. The most frequently visited pages are also frequently searched leading us to conclude these items being incorporated into the authenticated menu would increase the visibility of these pages that have high traffic.   

## User Outcomes

### Desired User Outcomes

*Why would a user want to use this? With this problem solved, what should users be able to do/achieve that they couldn't before?*

- By elevating Claims and Disability Rating inforamtion in the authenticated menu, users should be able to more easily find these tools.

### Undesired User Outcomes

- Users still look for Claims and Disability Rating inforamtion in the profile.

## Business Outcomes

### Desired Business Outcomes

*Why would your business want this to exist? With this problem solved, what should your business be able to do/achieve that they couldn't before?*

- Adding links to Claims and Disability Rating inforamtion in the authenticated menu is a significantly lighterweight solution than fully integrating these sections into the profile, and even easier than simply linking to these pages from the profile.
- Our first experiment in this menu helped prove out that we can/should more holistically leverage the authenticated menu to support the authenticated experience, we're hoping to see a continued trend here that the authenticated menu can be a helpful tool for the logged in experience 

### Undesired Business Outcomes

- Adding these links to the authenticated menu doesn't move metrics

## Measuring Success

### Objective #1: Increase findability of Claims and Disability Rating 


**KPI: See variations on "Claims" and "Disability Rating" inforamtion entirely removed from the top 10 search terms within the profile.**

[Search results can be found on the Profile Domo dashboard](https://va-gov.domo.com/page/1834995012?userId=66061986)

|KPI/metric|Baseline: 2 weeks pre-launch []|Baseline: 1 week pre-launch []|1 week post-launch to 100% []|2 weeks post-launch to 100% []| 3 weeks post-launch to 100% []|4 weeks post-launch []|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Search rank for "**claims**” or similar from the profile (record whatever variation has the highest rank)|||||||
|Search rank for "**disability rating**” or similar from the profile (record whatever variation has the highest rank)|||||||

**KPI: See overall reduction in "dependents" and "letters" searches within the profile.**

|KPI/metric|Baseline: 2 weeks pre-launch []|Baseline: 1 week pre-launch []|1 week post-launch to 100% []|2 weeks post-launch to 100% []| 3 weeks post-launch to 100% []|4 weeks post-launch []|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Raw number of "**claims**” searches in the top 10 profile searches|||||||
|Raw number of "**disability rating**” searches in the top 10 profile searches|||||||

**KPI: See variations on "dependents" and "letters" entirely removed from the top 10 search terms on VA.gov as a whole.**

[Search results can be found on the Profile Domo dashboard](https://va-gov.domo.com/page/1834995012?userId=66061986)

|KPI/metric|Baseline: 2 weeks pre-launch []|Baseline: 1 week pre-launch []|1 week post-launch to 100% []|2 weeks post-launch to 100% []| 3 weeks post-launch to 100% []|4 weeks post-launch []|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Search rank for "**claims**” or similar from the profile (record whatever variation has the highest rank)|||||||
|Search rank for "**disability rating**” or similar from the profile (record whatever variation has the highest rank)|||||||

**KPI: See overall reduction in "dependents" and "letters" searches on VA.gov as a whole.**

|KPI/metric|Baseline: 2 weeks pre-launch []|Baseline: 1 week pre-launch []|1 week post-launch to 100% []|2 weeks post-launch to 100% []| 3 weeks post-launch to 100% []|4 weeks post-launch []|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Raw number of "**claims**” searches in the top 10 VA.gov searches|||||||
|Raw number of "**disability rating**” searches in the top 10 VA.gov searches|||||||

**KPI: See no increase in bounce rates from the Dependents and Letters pages (increase in bounce rate = people found the page but not what they were looking for).**

- add link to [Bounce rate for claims page]()
- add link to [Bounce rate for disability rating page]()

|KPI/metric|Baseline: 2 weeks pre-launch []|Baseline: 1 week pre-launch []|1 week post-launch to 100% []|2 weeks post-launch to 100% []| 3 weeks post-launch to 100% []|4 weeks post-launch []|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Bounce rate for "**claims**” |||||||
|Bounce rate for "**disability rating**”|||||||

### Objective #2: Explore using authenticated menu as a place to elevate links to tools.

**KPI: Establish baseline metrics for "dependents" and "letters" links in the authenticated menu.**

[GA Dashboard for Auth Menu](https://analytics.google.com/analytics/web/#/dashboard/jTwco5hFRBmuXcjZN9YSPA/a50123418w177519031p176188361/_u.date00=20230901&_u.date01=20231004)

|KPI/metric|Baseline: 2 weeks pre-launch []|Baseline: 1 week pre-launch []|1 week post-launch to 100% []|2 weeks post-launch to 100% []| 3 weeks post-launch to 100% []|4 weeks post-launch []|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Clicks into "**claims**" from the authenticated menu |||||||
|Clicks into "**disability rating**" from the authenticated menu|||||||

**KPI: Track what kind of impact adding Letters and Dependents to the auth menu has on pageviews.**

Note: Increaseing pageviews was not originally part of our goals. We decided to document these metrics post-launch given the substantial change caused by adding these links to the auth menu.

- [Pageviews for Letters page](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Frecords~2Fdownload-va-letters~2Fletters~2Fconfirm-address~2F/)
- [Pageviews for Dependents page](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fview-change-dependents~2Fview~2F/)

|KPI/metric|Baseline: 2 weeks pre-launch []|Baseline: 1 week pre-launch []|1 week post-launch to 100% []|2 weeks post-launch to 100% []| 3 weeks post-launch to 100% []|4 weeks post-launch []|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Pageviews for "**claims**” |||||||
|Pageviews for "**disability rating**”|||||||

## Key deliverables

(This is just a starting list. Feel free to add whatever is relevant here.)

- [EPIC | Profile | Authenticated Menu Expansion #72452](https://github.com/department-of-veterans-affairs/va.gov-team/issues/72452)



## Key dates

- December 2023: Initial discussions; project kickoff


## Design

- Add link to Sketch files
   
### Before
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/b3c9247e-2707-49a8-a3c2-73a3fcaa52ba)

### After


## Frontend
