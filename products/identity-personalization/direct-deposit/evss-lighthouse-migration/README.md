# Project outline: Migrate direct deposit for comp & pen from EVSS > Lighthouse

**Last Updated: December 21, 2022**

### Communications

- **Github labels**: vsa-authenticated-exp; profile; direct-deposit
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#va-profile](https://dsva.slack.com/channels/va-profile)

### Roles  
  
[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

#### Lighthouse team

|Name|Role|Email|
|----|----|-----|
|Nichole Harris|Lighthouse PM|harris_nichole@bah.com or Nichole.Harris@va.gov|

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Goals](#goals)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Solution Approach](#solution-approach)
- [Measuring Success](#measuring-success)
- [Design](#design)
- [Frontend](#frontend)
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

## Solution approach

**Anticipated launch date**: tbd

### Key dates

- Early 2022: Support Lighthouse's discovery
- December 2022: Lighthouse is ready for us to begin integration
- January 2023: Profile team begins discovery

## Measuring success

**Objective 1: Improve save success rates by migrating to Lighthouse**.

|Save success rate 1 month pre-launch [dates]|Save success rate 1 month post-launch to 100% of users [dates]|Save success rate 2 months post-launch to 100% of users [dates]|
|------|------|-----|
|TBD|TBD|TBD|

## Design

- Sketch files
- Use cases
- User flows

### Before

### After

## Frontend

## Backend

- We need to request OAuth credentials to sandbox. We'll also need production credentials.

### Key documentation

- [Developer.va.gov documents](https://developer.va.gov/explore/benefits/docs/direct-deposit-management?version=current)
- [Request Sandbox Access](https://developer.va.gov/onboarding/request-sandbox-access)
- [Max.gov API docs](https://community.max.gov/pages/viewpage.action?pageId=2286748585)

### How to test

- [Sandbox Test Accounts for Direct Deposit Management API](https://github.com/department-of-veterans-affairs/vets-api-clients/blob/master/test_accounts/direct_deposit_test_accounts.md)
