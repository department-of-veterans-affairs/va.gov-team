# Project outline: Add ~claims and~ disability rating to the authenticated menu

**Last Updated: February 13: Travis updated to remove claims**

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

We had substantial success by adding [letters and dependents](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/authenticated-menu/add-dependents-letter/README.md) to the Authenticated Menu in 2023. 

We're hoping to build on that success by expanding the tools linked from the Authenticated Menu by adding a link to **_Disability Rating_**. Additionally, the Sitewide Public Websites team is currently working on a redesigned header/footer for which the Authenticated Experience team can help by running usability testing for the new design that incorporate the additional tools in the Auth Menu. 

> [!NOTE]  
> We originally considered including both claims and disability rating and later narrowed this to just disability rating; [see this slack thread where this was discussed](https://dsva.slack.com/archives/C909ZG2BB/p1704921178281609) 


## Problem Statement

[We analyzed user activity on the site](https://github.com/department-of-veterans-affairs/va.gov-team/issues/71332) to determine which pages veterans are visiting most often and the searches. The most frequently visited pages are also frequently searched leading us to conclude these items being incorporated into the authenticated menu would increase the visibility of these pages that have high traffic.   

## User Outcomes

### Desired User Outcomes

*Why would a user want to use this? With this problem solved, what should users be able to do/achieve that they couldn't before?*

- By elevating Claims and Disability Rating information in the authenticated menu, users should be able to more easily find these tools.

### Undesired User Outcomes

- User search patterns show veterans still unable to located Disability Rating information

## Business Outcomes

### Desired Business Outcomes

*Why would your business want this to exist? With this problem solved, what should your business be able to do/achieve that they couldn't before?*

- Adding link Disability Rating information in the authenticated menu is a significantly lighterweight solution than fully integrating this into the profile, and even easier than simply linking to these pages from the profile.
- Our first experiment in this menu helped prove out that we can/should more holistically leverage the authenticated menu to support the authenticated experience, we're hoping to see a continued trend here that the authenticated menu can be a helpful tool for the logged in experience 

### Undesired Business Outcomes

- Adding these links to the authenticated menu doesn't move metrics

## Measuring Success

### Objective #1: TBD

### Samara needs to figure out KPIs

**KPI: See no increase in bounce rates from the Claims and Disability Rating pages (increase in bounce rate = people found the page but not what they were looking for).**

- add link to [Bounce rate for claims page]()
- add link to [Bounce rate for disability rating page]()

|KPI/metric|Baseline: 2 weeks pre-launch []|Baseline: 1 week pre-launch []|1 week post-launch to 100% []|2 weeks post-launch to 100% []| 3 weeks post-launch to 100% []|4 weeks post-launch []|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Bounce rate for "**claims**” |||||||
|Bounce rate for "**disability rating**”|||||||

### Objective #2: Explore using authenticated menu as a place to elevate links to tools.

**KPI: Establish baseline metrics for "claims" and "disability rating" links in the authenticated menu.**

[GA Dashboard for Auth Menu](https://analytics.google.com/analytics/web/#/dashboard/jTwco5hFRBmuXcjZN9YSPA/a50123418w177519031p176188361/_u.date00=20230901&_u.date01=20231004)

|KPI/metric|1 week post-launch to 100% []|2 weeks post-launch to 100% []| 3 weeks post-launch to 100% []|4 weeks post-launch []|
|----------|-------------|---------------|-------------------|-------------------|
|Clicks into "**claims**" from the authenticated menu |||||
|Clicks into "**disability rating**" from the authenticated menu|||||

**KPI: Track what kind of impact adding Claims and Disability Rating to the auth menu has on pageviews.**

- add link to [Pageviews for claims page]()
- add link to [Pageviews for disability rating page]()

|KPI/metric|Baseline: 2 weeks pre-launch []|Baseline: 1 week pre-launch []|1 week post-launch to 100% []|2 weeks post-launch to 100% []| 3 weeks post-launch to 100% []|4 weeks post-launch []|
|----------|-------------|---------------|-------------------|-------------------|-------------------|-------------------|
|Pageviews for "**claims**” |||||||
|Pageviews for "**disability rating**”|||||||

## Key deliverables

(This is just a starting list. Feel free to add whatever is relevant here.)

- [EPIC | Profile | Authenticated Menu Expansion #72452](https://github.com/department-of-veterans-affairs/va.gov-team/issues/72452
- [Research can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/discovery-research/authenticated-menu-usability)



## Key dates

- December 2023: Initial discussions; project kickoff
- January - February 2024: Research
- February `decision pending what we do next`


## Design

- [Auth Menu Figma](https://www.figma.com/file/Gubm02mbd7AqhrJBSMt81Z/Authenticated-Experience---Authenticated-Menu?type=design&node-id=1-280&mode=design&t=Wm4Jn5dsr4jFLRzq-0)
- [Public Websites Redesign](https://www.sketch.com/s/4558672b-741f-4d59-84f0-796020d3ef57/p/35AABFD6-32D4-4484-A092-69366F2D69EA/canvas)
- [Research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/authenticated-menu-usability/summary.md#recommendations)
   
### Before
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/b3c9247e-2707-49a8-a3c2-73a3fcaa52ba)

### After


## Frontend
