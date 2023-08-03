# Project outline: Migrate direct deposit for comp & pen from EVSS > Lighthouse

**Last Updated: July 21, 2023**

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
- [GA Dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/naG_-UneTxy50WvvIH0GGQ/a50123418w177519031p176188361/)
- [Sentry](http://sentry.vfs.va.gov/organizations/vsp/discover/results/?display=daily&environment=production&field=url&field=error.value&field=timestamp&name=Errors+by+URL&query=event.type%3Aerror+url%3Ahttps%3A%2F%2Fapi.va.gov%2Fv0%2Fprofile%2Fdirect_deposits%2Fdisability_compensations&sort=-url&statsPeriod=14d&widths=-1&widths=-1&widths=-1)
- Data Dog
     - [Viewing LH Direct Deposit](https://vagov.ddog-gov.com/apm/resource/vets-api/rack.request/e504ea6e07d6848b?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Avets-api%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AProfile%3A%3ADirectDeposits%3A%3ADisabilityCompensationsController%23show%22&env=eks-prod&spanType=service-entry&topGraphs=latency%3Alatency%2Chits%3Acount%2Cerrors%3Acount%2CbreakdownAs%3Apercentage&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&start=1690315410527&end=1690920210527&paused=true)
     - [Updating LH Direct Deposit](https://vagov.ddog-gov.com/apm/resource/vets-api/rack.request/bc1e3cb125eb0125?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Avets-api%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AProfile%3A%3ADirectDeposits%3A%3ADisabilityCompensationsController%23update%22&env=eks-prod&spanType=service-entry&topGraphs=latency%3Alatency%2Chits%3Acount%2Cerrors%3Acount%2CbreakdownAs%3Apercentage&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&start=1690315475062&end=1690920275062&paused=true)

  <p></p>

**Objective 1: Improve save success rates by migrating to Lighthouse**.

|KPI|Rate 1 month pre-launch [7/9/2023-8/2/2023]|10% UAT|25% UAT |50% UAT |75% UAT |1 week 100% | Rate 1mo. 100% of users [dates]|Rate 2mo. 100% of users [dates]|
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|Successful retrievals of direct deposit (C&P) information|236,452||||||||
|Failed retrievals of direct deposit (C&P) information|22,925||||||||
|Form Submits for direct deposit (C&P) information|18,238||||||||
|Failures in saving direct deposit (C&P) information|3,023||||||||


## Key deliverables

|Deliverable|Date completed|
|-----------|--------------|
|[Project epic: #51900](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51900)| TBD |
|[QA Testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/QA/README.md)| 07/20/2023 |
| [UAT Go/no-go](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61177) |07/24/2023|
|UAT results|TBD|
|[Launch Go/no-go](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63029)|TBD|
|[Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/direct-deposit-release-plan.md)|TBD|

## Key dates

- Early 2022: Support Lighthouse's discovery
- December 2022: Lighthouse is ready for us to begin integration
- January 2023: Profile team begins discovery
- February 2023: Backend migration
- March 2023: Backend migration continues; FE + BE updates; QA planning
- April 2023: QA & Pre-launch activities
- May 2023: On hold while Samara is on maternity leave
- June 2023: On hold while Samara is on maternity leave
- July 2023: Launch

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
