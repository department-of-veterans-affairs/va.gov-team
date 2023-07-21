# Project outline: My VA Claim status EVSS > Lighthouse migration

**Last updated July 3, 2023 - updated security section**

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

TBD

## Key deliverables

- [Technical discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/claim-status-lighthouse-migration/technical-discovery.md)
- Update the claim status section of My VA to connect to Lighthouse instead of EVSS

### Key Dates

- March 2023: Project kick-off
- June - July 2023: Development
- July 2023: Pre-launch activities
- ...
   
## Screenshots
_Not applicable as no visual to My VA will occur when the work is complete_

### Before
NA

### After
NA
