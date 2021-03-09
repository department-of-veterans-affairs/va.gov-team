# Postmortem for 7 non-Cerner facilities that directed to My VA Health for 3 days on 5 pages

Date: 03/09/2021

Authors: Kelson Adams

Status: Resolved

## What happened?

On March 1, 2021 @ 11:45am EST a [`vets-api` PR was merged](https://github.com/department-of-veterans-affairs/vets-api/pull/6045) that added the following feature toggles:

```
cerner_override_463
cerner_override_531
cerner_override_648
cerner_override_653
cerner_override_668
cerner_override_687
cerner_override_692
```

This was in preparation for facilities that would soon become Cerner facilities later this year. In tandem with that PR, [a `vets-website` PR was merged](https://github.com/department-of-veterans-affairs/vets-website/pull/16220) on March 5, 2021 @ 11:40am EST that added support for the Cerner facilities mentioned above.

However, that `vets-website` PR was missing one crucial step ([the addition of the new feature toggles in our feature toggles network request](https://github.com/department-of-veterans-affairs/vets-website/pull/16295/files)), which resulted in facilities 463, 531, 648, 653, 668, 687, and 692 showing as `isCerner: true` whereas they should have remained `isCerner: false`.

This was then [discovered by Cory Trimm](https://dsva.slack.com/archives/C52CL1PKQ/p1615231277236500) and he posted on the Public Websites channel about a production user in Seattle being directed to My VA Health instead of My Healthe Vet on March 8, 2021 @ 2:20pm EST. The cause of the issue (the missing feature toggles in the feature toggle network request) [was then identified at 2:54pm EST the same day](https://dsva.slack.com/archives/C52CL1PKQ/p1615233244248900?thread_ts=1615231277.236500&cid=C52CL1PKQ).

[A PR that fixed the issue passed CI and was merged @ 4:07pm EST](https://dsva.slack.com/archives/CBU0KDSB1/p1615237653334300?thread_ts=1615233939.312300&cid=CBU0KDSB1). An off-schedule [deploy to production was then initiated and completed at March 8, 2021 @ 5:55pm EST](https://dsva.slack.com/archives/CBU0KDSB1/p1615244095346700?thread_ts=1615233939.312300&cid=CBU0KDSB1).

## Background

The following non-Cerner facilities are becoming Cerner facilities in 2021:

```
'463', // Alaska VA
'531', // Boise, ID
'648', // Portland, OR
'653', // Roseburg (Roseburg OR)
'663', // Puget Sound (Seattle WA)
'687', // Walla Walla, WA
'692', // White City, OR
```

The feature toggle work was preemptive work done by Public Websites so that we would be prepared to "flip the switch" for each facility when they wanted to go live with being a Cerner facility.

## Detection
_How was the issue found?_ It was found by Cory Trimm.

This was [discovered by Cory Trimm](https://dsva.slack.com/archives/C52CL1PKQ/p1615231277236500) and he posted on the Public Websites channel about a production user in Seattle being directed to My VA Health instead of My Healthe Vet on March 8, 2021 @ 2:20pm EST. The cause of the issue (the missing feature toggles in the feature toggle network request) [was then identified at 2:54pm EST the same day](https://dsva.slack.com/archives/C52CL1PKQ/p1615233244248900?thread_ts=1615231277.236500&cid=C52CL1PKQ).

_Date/time of discovery_ March 8, 2021, 2:20pm EST

## Impact

_What was the impact on Veterans, business and team?_

Any user with any of the following facilities:

```
'463', // Alaska VA
'531', // Boise, ID
'648', // Portland, OR
'653', // Roseburg (Roseburg OR)
'663', // Puget Sound (Seattle WA)
'687', // Walla Walla, WA
'692', // White City, OR
```

would have experienced links for those respective facilities to My VA Health instead of My Healthe Vet on the following routes:

```
https://www.va.gov/health-care/refill-track-prescriptions/
https://www.va.gov/health-care/secure-messaging/
https://www.va.gov/health-care/schedule-view-va-appointments/
https://www.va.gov/health-care/view-test-and-lab-results/
https://www.va.gov/health-care/get-medical-records/
```

from March 5, 2021 @ 11:40am EST until March 8, 2021 @ 5:55pm EST.

## Root Causes

_What caused this situation?_

The cause of the issue (the missing feature toggles in the feature toggle network request) [was identified on March 8, 2021 @ 2:54pm EST](https://dsva.slack.com/archives/C52CL1PKQ/p1615233244248900?thread_ts=1615231277.236500&cid=C52CL1PKQ).

## Resolution
_What steps were taken to resolve the issue?_

[A PR that fixed the issue passed CI and was merged @ 4:07pm EST](https://dsva.slack.com/archives/CBU0KDSB1/p1615237653334300?thread_ts=1615233939.312300&cid=CBU0KDSB1). An off-schedule [deploy to production was then initiated and completed at March 8, 2021 @ 5:55pm EST](https://dsva.slack.com/archives/CBU0KDSB1/p1615244095346700?thread_ts=1615233939.312300&cid=CBU0KDSB1).

_Date/time of resolution_

March 8, 2021 @ 5:55pm EST

## Documentation links

- [`vets-api` PR to add feature toggles](https://github.com/department-of-veterans-affairs/vets-api/pull/6045)
- [`vets-website` PR to add Cerner facility IDs (culprit)](https://github.com/department-of-veterans-affairs/vets-website/pull/16220)
- [Detection](https://dsva.slack.com/archives/C52CL1PKQ/p1615231277236500)
- [`vets-website` PR to add missing feature toggles (fix)](https://github.com/department-of-veterans-affairs/vets-website/pull/16295)
- [Off-schedule deploy](https://dsva.slack.com/archives/CBU0KDSB1/p1615233939312300)

## Action Items

| Description                    | Type    | Owner        | Issue # |
| ------------------------------ | ------- | ------------ | ------- |
| We should add a unit test [here](https://github.com/department-of-veterans-affairs/vets-website/blob/dbd95d9098ccd5acc1787ceb9ee3fc55da3e7852/src/platform/utilities/cerner/index.js#L5) to ensure that any Cerner facility ID that is added to `vets-website` has a related feature toggle [here](https://github.com/department-of-veterans-affairs/vets-website/blob/3f41da4363074b54dc3efab7baff0f4898bb47a4/src/platform/utilities/feature-toggles/featureFlagNames.js#L67) | Frontend | Public Websites | Ticket not created yet |
| We should have __at least__ 1 test account on a non-production environment that belongs to all Cerner facilities. | Database | Unknown | Ticket not created yet |
| We should create a step-by-step guide to adding support for a facility to become a Cerner facility that documents all necessary steps that have to be taken. | Frontend | Public Websites | Ticket not created yet |

### What went well

Root cause was discovered and resolved quickly once the issue was noticed.

### What went wrong

There was a more-than-3-day gap between the issue being introduced on production and anyone noticing.

### Where we got lucky

The proposed fix did indeed fix the issue + there was quick response times from all stakeholders when the issue was detected.

## Timeline (all times ETC, asc order)

_date, time, step/event_

- March 1, 2021 @ 11:45am EST - [`vets-api` PR was merged](https://github.com/department-of-veterans-affairs/vets-api/pull/6045)
- March 5, 2021 @ 11:40am EST - [`vets-website` PR was merged (bug introduced)](https://github.com/department-of-veterans-affairs/vets-website/pull/16220)]
- March 8, 2021 @ 2:20pm EST - [detection of bug](https://dsva.slack.com/archives/C52CL1PKQ/p1615231277236500)
- March 8, 2021 @ 2:54pm EST - [solution identified](https://dsva.slack.com/archives/C52CL1PKQ/p1615233244248900?thread_ts=1615231277.236500&cid=C52CL1PKQ)
- March 8, 2021 @ 4:07pm EST - [PR with fix merged](https://dsva.slack.com/archives/CBU0KDSB1/p1615237653334300?thread_ts=1615233939.312300&cid=CBU0KDSB1)
- March 8, 2021 @ 5:55pm EST - [Deployment to production, bug fixed](https://dsva.slack.com/archives/CBU0KDSB1/p1615244095346700?thread_ts=1615233939.312300&cid=CBU0KDSB1)
