# Project outline: Sign-in errors | Audit and updates

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

## POCs

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
- We have heard from our Credential Service Providers (CSPs) that they've seen drastic increases in calls that need to be routed back to VA. We've determined the root of this is from select AccessVA pages that send people through the HRC call center IVR.
  - [Calls routed back to VA from ID.me](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/idme/ID.me%20reasons%20calls%20are%20sent%20back%20to%20VA.png)
  - [Calls routed back to VA from Login.gov](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/logingov/2024-05-22%20Summary%20for%20VA%20IVR%20metrics.docx) 

As a result, we need to do the following:

- Review [existing error documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/error-messages#readme), and determine if it is up-to-date and accurate.
- Based on this audit, determine areas for improvement with messaging. **This should happen with significant partnership from CAIA and the Contact Center Support team**.
- Work with product to break down this work into meaningful and manageable phases.
- Begin to make updates, partnering with IAM as necessary.

## User problem statements

- As a Veteran, I want to be able to quickly and easily sign in through the VA.gov unified sign-in page to manage my health and benefits.
- As a Veteran, I want to be able to quickly resolve any issues that might arise while signing in through the VA.gov unified sign-in page.

## User outcomes

### Desired User Outcomes

- Users can more quickly and easily resolve sign in issues.

### Undesired User Outcomes

- Updates to messaging don't help and only continue to send users in the wrong direction.

## Business outcomes

### Desired Business Outcomes

- Users are more easily able to resolve sign in issues on their own through better guidance to appropriate help channels.
- Users are sent to the right help channels the first time -- whether that is an online resource or a call center.
- We see a reduction in calls through the HRC IVR.
- We see a decrease in CSP's % of calls that need to be routed back to VA.

### Undesired Business Outcomes

- Updates to messaging don't help and only continue to send users in the wrong direction.
- We see no decrease in call volume through the HRC IVR.
- We see no decrease in CSP's % of calls that need to be routed back to VA.

## Measuring success

### Objective: People signing into VA.gov are routed to more effective help when they receive an error.

- **KPI**: CSPs see a decrease in the % of calls they are routing back to VA.
- **KPI**: We see an increase in the customer satisfaction score for sign-in.

## Solution approach

### Next steps coming out of 6.5.24 meeting between identity and contact center support teams

- Contact center support team is going to meet to figure out what the most common error codes are that refer people to support. We'll use this to determine high priority errors that we might want to update first.
- In the next sprint, the identity team will review existing VA.gov error documentation, and begin to audit and document AccessVA errors.

### General approach

- Review the existing error documentation to determine what is up-to-date and what needs to be modified.
- Create an audit of all sign-in errors, expanding the existing documentation as needed.
- Determine areas for improvement:
  - We should prioritize biggest impact first.
  - Contact Center Support, CSPs, and HRC folks can help us determine where we should be routing people.
  - CAIA will determine language, tone, and can work with us on rollout strategy.
 - Start drafting and implementing improvements, working across teams (including IAM) as necessary.
 - Update documentation on GitHub to reflect improved errors.

### Key dates

- June 2024: Kickoff meeting between Identity and Contact Center Support teams.

## Backend
## Frontend
## Design
