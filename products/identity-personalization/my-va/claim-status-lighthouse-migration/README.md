# Project outline: My VA Claim status EVSS > Lighthouse migration

**Last updated: November 17, 2023 - updated 2 month stats**

### Communications

- **GitHub Label**: authenticated-exp; my-va-dashboard
- **Slack channel**: accountexp-authexp
- **Development Epic**: [#54403](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54403)
- **Collab Cycle Epic**: [#54584](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54584)


### Roles

[Please see the My VA product outline for the current My VA team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#roles).

### Table of Contents

- [Overview](#overview)
- [Problems](#problems)
- [Solution approach](#solution-approach)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Security](#security)
- [Measuring Success](#measuring-success)
- [Key deliverables](#key-deliverables)
- [Key Dates](#key-dates)
- [Screenshots](#screenshots)

## Overview

In June 2023, the EVSS API will be deprecated. In order to continue supporting critical existing integrations in our products we need to update our integrations. This is a continuation of the work done by the claim status team (on slack at `#benefits-claim-appeal-status`), which led the overall migration of the claim status tool to Lighthouse from EVSS.

Specifically for My VA, we need to update the claims status widget to connect to Lighthouse instead of EVSS. This should only involve frontend updates, though we will be thoroughly investigating to rule out additional backend needs.

Additional technical background on EVSS > Lighthouse migration [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/lighthouse-migration/main.md).

## Problem

The Claims and Appeals section of My VA is powered by an integration with EVSS. If we don't update the integration, in June 2023 the widget will no longer pull in claims and appeals details. 

## Solution approach

In order to continue providing claims and appeals details on My VA we need to update our current EVSS integration to Lighthouse.

## User Outcomes

### Desired User Outcomes

- Users do not experience any disruption in access to their claims and appeals information.
- There is no visual difference in the claim status widget on My VA

### Undesired User Outcomes
 
- We inadvertently break the integration between My VA and claims and appeals details preventing Veterans from seeing claims and appeals details seamlessly on My VA.
 
## Business Outcomes

### Desired Business Outcomes

- My VA continues to provide Veterans with timely, actionable information pertaining to their claims and appeals.

### Undesired Business Outcomes

- The updated integration disrupts the Veteran's access to their claims and appeals information on My VA

## Security
[Security Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/claim-status-lighthouse-migration/launch-materials/claim-status-lighthouse-migration-security-playbook.md)

## Measuring Success

- [My VA Domo dashboard](https://va-gov.domo.com/page/1167851935?userId=1322887837)
- [EVSS > Lighthouse migration dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/)
- [Authenticated Experience API monitoring (Product GA)](https://analytics.google.com/analytics/web/?authuser=3#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/) - _see "Benefits" widget_
- [Authenticated Experience API monitoring (Staging GA)](https://analytics.google.com/analytics/web/authuser=3#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w178298118p176884211/_u.date00=20230601&_u.date01=20230802/)
- [Sentry](http://sentry.vfs.va.gov/organizations/vsp/discover/results/?display=daily&environment=staging&field=url&field=error.value&field=timestamp&field=browser.name&name=Errors+by+URL&query=event.type%3Aerror+url%3Ahttps%3A%2F%2Fstaging-api.va.gov%2Fv0%2Fbenefits_claims&sort=-timestamp&statsPeriod=14d&widths=-1&widths=-1&widths=-1&widths=-1)
- [Datadog](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fbenefits_claims%2A%20%40http.status_code%3A403%20&cols=host%2Cservice%2C%40http.status_code%2C%40payload.user_uuid&index=%2A&messageDisplay=inline&sort=time&stream_sort=%40payload.user_uuid%2Cdesc&viz=stream&from_ts=1690751268671&to_ts=1690837668671&live=true)

### Objective 1: Improve claim status retrieval rates by migrating to Lighthouse.

**KPI: Get claim status retrievals to a 95% success rate.**

Stats based on the [My VA Domo dashboard](https://va-gov.domo.com/page/1167851935?userId=1322887837) and the [EVSS > Lighthouse migration dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/).

|KPI|Rate (%) 1 month pre-launch (7/8/2023-8/7/2023)|1 week @10% (8/8/23 - 8/14/23)| 1 week @25% (8/15/23 - 8/21/23)|1 week @50% (8/22/23 - 8/27/23) |1 week @100% (8/29/23 -9/4/23)|1 month @100% (9/5/23 - 10/4/23)| 2nd month @100% (10/5/23 - 11/4/23) | 
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|% of successful retrievals|91%|99%|97%|98%|99%|99%|99%|
|% of failed retrievals|9%|1%|3%|2%|1%|1%|1%|

Note: 
- On Sept 12, 2023 the migration to Lighthouse needed to be rolled back so that the CST on My VA was again calling EVSS. The benefits team found an issue in the CST that they need to resolve before we can again point to Lighthouse.
- On Sept 14, 2023 the feature was re-enabled for all users 

## Key deliverables

- [Technical discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/claim-status-lighthouse-migration/technical-discovery.md)
- Update the claim status section of My VA to connect to Lighthouse instead of EVSS

### Key Dates

- March 2023: Project kick-off
- June - July 2023: Development
- July 2023: Pre-launch activities
- August 8, 2023: Launch to 10%
- August 15, 2023: Launch to 25%
- August 22, 2023: Launch to 50%
- August 28,2023: Launch to 100%
- September 12, 2023: Feature temporarily rolled back (feature flag turned off) while the benefits team resolves an issue with the Claims Status Tool on their side.
- September 14, 2023: Feature re-enabled for all users on production (upstream issue resolved)
   
## Screenshots
_Not applicable as no visual to My VA will occur when the work is complete_

### Before
NA

### After
NA
