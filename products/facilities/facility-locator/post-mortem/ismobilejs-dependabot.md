# Postmortem for Upgrade ismobilejs dependency by depandabot 

Date: 06/29/2020

Authors: Gibran Rodriguez, GCIO

Status: Resolving

## What happened?
VSP dependabot upgraded a dependecy called ismobilejs used by the facility locator that broke the logic on mobile layouts. The dependecy was upgraded from 0.4.1 to 1.1.1 without the facilty locator team being notified. 

## Background
ismobilejs (https://www.npmjs.com/package/ismobilejs) was being used by the facility locator to detect mobile devices rendering the Map/Search controls page. This dependecy helps to decide which css clases to use after isMobile.any is called.


## Detection
The issue was detected while working on a related issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/5999 .It was first identified by Michael Pelz-Sherman (Front-end developer) and then debugged together with Gibran Rodriguez (Front-end Developer). The issue was logged for a fix -https://github.com/department-of-veterans-affairs/va.gov-team/issues/10749

## Impact
This is impacting mobile users accessing https://www.va.gov/find-locations/ . They UI is crooked.

## Root Causes
The new dependecy 1.1.1 has a change on isMobile.any. It needs a parameter passed isMobile(window.navigator). This was not handled by the facility locator.

## Resolution
- VSP has already reverted the dependecy number with https://github.com/department-of-veterans-affairs/vets-website/pull/13334
- There another PR that will remove the dependency https://github.com/department-of-veterans-affairs/vets-website/pull/13319 and use another approach to detect mobile layouts 


## Documentation links
- [Slack Thread] https://dsva.slack.com/archives/C0FQSS30V/p1593461805260600
- [Support issue] https://dsva.slack.com/archives/CBU0KDSB1/p1593538043037100
- [Github issue(s)] https://github.com/department-of-veterans-affairs/vets-website/pull/13319


## Action Items

| Description                    | Type    | Owner        | Issue # |
| ------------------------------ | ------- | ------------ | ------- |
| | | | |

## Lessons Learned

### What went well

### What went wrong

### Where we got lucky

### Takeaways

## Timeline (all times ETC, asc order)
_date, time, step/event_
