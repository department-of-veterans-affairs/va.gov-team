# Project outline: Sign-in errors -- audit and updates

**Last updated: June 3, 2024**

## Table of Contents

- [POCs](#pocs)
- [Overview](#overview)
- [User Problem Statements](#user-problem-statements)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Solution Approach](#solution-approach)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design](#design)

### OCTO teams

This work involves the following teams:

- Identity
- Contact Center Support
- CAIA

### Additional partners

- IAM (if we need to update AccessVA errors)

## Overview

The need to audit and potentially update sign-in related errors comes from a few different places:

- Logging in to VA.gov is one of the most poorly rated experiences on the website. Part of this is due to when things go wrong. Issues can be confusing or frustrating to resolve, and this can keep people from managing their benefits online.
- Current error messaging may not provide the right or helpful info, as [found in a recent review completed by the Identity team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-04%20FE%20Sign%20in%20Flows/Front%20end%20sign%20in%20flow%20-%20discovery%20research.md#1-error-messaging). Additionally, errors are split between VA.gov and AccessVA, which provide very different experiences and messaging.
- We have heard from our CSP partners that they've seen drastic increases in calls that need to be routed back to VA. We've determined the root of this is from select AccessVA pages that send people through the HRC call center IVR.

As a result, we need to do the following:

- Review [existing error documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/error-messages#readme), and determine if it is up-to-date and accurate.
- Based on this audit, determine areas for improvement with messaging. **This should happen with significant partnership from CAIA and the Contact Center Support team**.
- Work with product to break down this work into meaningful and manageable phases.
- Begin to make updates, partnering with IAM as necessary.

## User problem statements

- 

## User outcomes

### Desired User Outcomes

- 

### Undesired User Outcomes

- 

## Business outcomes

### Desired Business Outcomes

-

### Undesired Business Outcomes

- 

## Measuring success

TBD

### Objective: TBD

**KPI**: TBD

## Solution approach


### Key dates

- June 2024: Kickoff meeting between Identity and Contact Center Support teams.

## Backend
## Frontend
## Design
