# Project outline: Migrate direct deposit for comp & pen from EVSS > Lighthouse

**Last Updated: December 11, 2023 -- updating metrics**

### Communications

- **Github labels**: vsa-authenticated-exp; profile; direct-deposit
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#vfs-evss-service-migration](https://dsva.slack.com/channels/vfs-evss-service-migration)

### Roles  
  
[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

#### Lighthouse team

|Name|Role|Email|
|----|----|-----|
|Lee Helmer| Lead on the entire EVSS > Lighthouse effort| lee.helmer@adhocteam.us|
|Lorri Glover | Involved with the direct deposit migration|glover_Lorri@bah.com|
|Greg Feliberty |Involved with the direct deposit migration|feliberty_gregory@bah.com|
|Andrew Ramos | Involved with the direct deposit migration| ramos_andrew@bah.com|
|Dana Harris | Involved with the direct deposit migration|dana.harris@adhocteam.us|

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Goals](#goals)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Key deliverables](#key-deliverables)
- [Key dates](#key-dates)
- [Backend](#backend)

## Overview

EVSS -- the VA backend that stores direct deposit for comp & pen, disability ratings, and more -- is being retired in favor of the Lighthouse platform. Lighthouse has been working hard to migrate data from EVSS to their platform, and they have successfully done so with direct deposit for comp & pen information. This means that we need to reintegrate the VA.gov profile to point to Lighthouse instead of EVSS.

## Problem Statement

As a person that receives payments from VA, I want to be able to easily view and update my direct deposit information.

## Goals

- Migrate from EVSS to Lighthouse without any disruptions in service for veterans and other users.
- See improvements in direct deposit save success rates, which are only about 90% currently.

## User outcomes

### Desired User Outcomes

- Users see no interruptions in service or issues with updating their direct deposit for comp & pen info as this migration happens.

### Undesired User Outcomes

- Users have additional issues or blockers in updating their direct deposit for comp & pen information.

## Business outcomes

### Desired Business Outcomes

- Direct deposit works seamlessly with no interruption.
- We are one step closer to retiring EVSS.

### Undesired Business Outcomes

- There are disruptions or issues as a result of the migration from EVSS > Lighthouse.

## Measuring success

### Metrics
- [Profile Domo dashboard](https://va-gov.domo.com/page/1834995012?userId=66061986)
- [EVSS > Lighthouse migration dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/)
- [Direct deposit GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/naG_-UneTxy50WvvIH0GGQ/a50123418w177519031p176188361/)
- [Sentry](http://sentry.vfs.va.gov/organizations/vsp/discover/results/?display=daily&environment=production&field=url&field=error.value&field=timestamp&name=Errors+by+URL&query=event.type%3Aerror+url%3Ahttps%3A%2F%2Fapi.va.gov%2Fv0%2Fprofile%2Fdirect_deposits%2Fdisability_compensations&sort=-url&statsPeriod=14d&widths=-1&widths=-1&widths=-1)
- Data Dog
  - [LH Direct Deposit Logs](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fprofile%2Fdirect_deposits%2Fdisability_compensations%2A%20&cols=host%2Cservice%2C%40http.status_code%2C%40payload.user_uuid&index=%2A&messageDisplay=inline&sort=time&spanID=336994431213512540&stream_sort=%40payload.user_uuid%2Cdesc&viz=stream&from_ts=1693859845627&to_ts=1693946245627&live=true)
     - [Viewing LH Direct Deposit APM](https://vagov.ddog-gov.com/apm/resource/vets-api/rack.request/e504ea6e07d6848b?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Avets-api%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AProfile%3A%3ADirectDeposits%3A%3ADisabilityCompensationsController%23show%22&env=eks-prod&spanType=service-entry&topGraphs=latency%3Alatency%2Chits%3Acount%2Cerrors%3Acount%2CbreakdownAs%3Apercentage&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&start=1690315410527&end=1690920210527&paused=true)
     - [Updating LH Direct Deposit](https://vagov.ddog-gov.com/apm/resource/vets-api/rack.request/bc1e3cb125eb0125?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Avets-api%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AProfile%3A%3ADirectDeposits%3A%3ADisabilityCompensationsController%23update%22&env=eks-prod&spanType=service-entry&topGraphs=latency%3Alatency%2Chits%3Acount%2Cerrors%3Acount%2CbreakdownAs%3Apercentage&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&start=1690315475062&end=1690920275062&paused=true)

  <p></p>

### Objective 1: Improve direct deposit for comp & pen success rates by migrating to Lighthouse.

**KPI: Get direct deposit retrievals and saves to a 95% success rate.**

- [Pre-launch stats from direct deposit dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/naG_-UneTxy50WvvIH0GGQ/a50123418w177519031p176188361/)
- [Launch monitoring from Adam's EVSS > Lighthouse dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/)
- **Success rate** = Failed [retrievals/saves]/Successful [retrievals/saves]

|KPI|Rate (%) 1 month pre-launch (7/8/2023-8/7/2023)|1 week @5% (8/8/23 - 8/14/23)| 1 week @10% (8/15/23 - 8/21/23)| 2nd week @10% (8/22/23 - 8/28/23)| Re-Launch to 10% (9/12/23 - 9/18/23) | Stayed @ 10% (9/19/23 - 9/26/23) | 1 week @25% ( 9/26-10/10/2023 ) |1 week @50% ( 10/3-10/10/2023 )|1 week @100% ( 10/10-10/17/2023 )| 1 month @100% ( 10/10-11/10/2023 ) | 2nd month @100% of users ( 10/10-12/10/2023 )|
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|% of successful retrievals|90%|96%|94%|92%|94.71%|95%|96.65%|96.8%|94.61%|95.77%|94.77%|
|% of failed retrievals|10%|4%|6%|7%|5.29%|5%|3.35%|3.18%|5.39%|4.23%|5.23%|
|% of successful saves|84%|91%|85%|78%|90.45%|94.95%|93.11%|94.22%|93.05%|93.54%|93.68%|
|% of save failures|16%|9%|15%|22%|9.55%|5.05%|6.89%|5.78%|6.95%|6.46%|6.32%|


## Key deliverables

|Deliverable|Date completed|
|-----------|--------------|
|[Project epic: #51900](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51900)| TBD |
|[QA Testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/QA/README.md)| 07/20/2023 |
| [UAT Go/no-go](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61177) |07/24/2023|
|[UAT results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/Research/2023-08-direct-deposit-UAT/2023-08%20UAT%20findings.md)|08/07/2023|
|[Launch Go/no-go](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63029)|08/07/2023|
|[Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/direct-deposit-release-plan.md)|08/08/2023|

## Key dates

- Early 2022: Support Lighthouse's discovery
- December 2022: Lighthouse is ready for us to begin integration
- January 2023: Profile team begins discovery
- February 2023: Backend migration
- March 2023: Backend migration continues; FE + BE updates; QA planning
- April 2023: ???
- May 2023: On hold while Samara is on maternity leave
- June 2023: On hold while Samara is on maternity leave
- July 2023: QA; Pre-launch activities
- August 8, 2023: Launch to 5% of users
- August 15, 2023: Launched to 10% of users
- Late August 2023: Reduced launch back to 5% while we investigated a sudden increase in timeouts
- September 6, 2023: Lighthouse production increase in Gateway timeout changed from 10s to 20s, resulting in a drop in timeout errors
- September 12, 2023: Launch increased to 10% of users
- September 26, 2023: Launch increased to 25% of users
- October 3, 2023: Launch increased to 50% of users
- October 10, 2023: Launch increased to 100% of users

### Launch issues

Some time after we launched to 10%, we started to see a huge increase of `PUT` failures due to timeout (`504s`). Unfortunately, it was not clear why these were happening, and Lighthouse was not seeing the same degree of errors that we were seeing in both our Datadog and Google Analytics logs. They were also seeing a weird issue where `PUTs` were coming through as `GETs`, which may have effected their error logs. We made the decision to reduce the launch percentage back to 5% while we investigated these errors before continuing with launch. 

- [Relevant Slack convo #1](https://dsva.slack.com/archives/C02CQP3RFFX/p1693230969286509?thread_ts=1691443341.253769&cid=C02CQP3RFFX)
- [Relevant Slack convo #2](https://dsva.slack.com/archives/C909ZG2BB/p1693498626192619)

On Sept 6, 2023, Lighthouse production increased the timeout window from 10s to 20s, resulting in a drop in timeout errors.

## Backend

- We need to request OAuth credentials to sandbox. We'll also need production credentials.

### Documentation

- [Developer.va.gov documents](https://developer.va.gov/explore/benefits/docs/direct-deposit-management?version=current)
- [Request Sandbox Access](https://developer.va.gov/onboarding/request-sandbox-access)
- [Max.gov API docs](https://community.max.gov/pages/viewpage.action?pageId=2286748585)

### How to test

- [Sandbox Test Accounts for Direct Deposit Management API](https://github.com/department-of-veterans-affairs/vets-api-clients/blob/master/test_accounts/direct_deposit_test_accounts.md)


## Summary of where to locate info on EVSS > LH Migration for Direct Deposit Comp & Pen API

There are several places where things have been documented. 


### Public Directories 

**Outside of the Profile Documentation**
<br>
[va.gov-team/products/identity-personalization/direct-deposit
/evss-lighthouse-migration/](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration)


**Inside Profile Documentation**
<br>
[va.gov-team/products/identity-personalization/profile
/evss-migration/](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/evss-migration)

### Private Directory
[products/identity-personalization/lighthouse-migration](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/identity-personalization/lighthouse-migration)
