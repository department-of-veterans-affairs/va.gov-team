# Project outline: Benefit Application Drafts & Forms Submission Status MVP (WIP)

**Last updated: April 19, 2024 - first published**

This initative is a collabortion between the Authenticated Experience My VA team and the Veteran Facing Forms team.

### Communications

- **GitHub Label**: authenticated-exp; my-va-dashboard; forms-status
- **Slack channel**: veteran-facing-forms or accountexp-authexp
- **Development Epic**: [#81849](https://github.com/department-of-veterans-affairs/va.gov-team/issues/81849)
- **Collab Cycle Epic**: [#58828](https://github.com/department-of-veterans-affairs/va.gov-team/issues/58828)
- **Veteran Facing Forms [outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Product%20Outline.md)**


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

Over the past several months there have been issues with Veterans seemingly submitting a digital form or application and that form then failing to actually make its way into the VA processing system for review. This has been referred to as "silent failures" - the user receives no indication that an error occurred because the process and time between the user clicking submit on their form and the form actually travleling through the Benefits Intake API and making its way into Central Mail can be lengthy.

The Authenticated Experience My VA team is partnering with the Veteran Facing Forms team to address the challenges Veterans face in not knowing there is an error with their form. It is out of scope for our team to address problems with Central Mail.

This work in alignment with [OCTO-DE 2024 priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md) and supports Objective 1: Our digital experiences are the best way to access VA health care and benefits. This initiative is also in alignment with the [OCTO Benefits Portfolio prioritization framework](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705375308356/7e8c7aa4102f88511e577cf51f9092cc1f8bba8a?sender=u5423c3b2d59df3d2f5882779) by supporting category 2: Silent submission failure: _A Veteran believes an online transaction (form, evidence, etc.) has been successfully sent to VA, but it silently desappeared instead._ 
![Screenshot 2024-05-03 at 10 29 56 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/1c530f62-56c2-4520-91f0-4da781b0c9e8)


## Problems

There are three problems we are trying to solve for:

1. Forms that travel through the Benefits Intake API and into Central Mail can be accepted but don't always make it to the System of Record. When the form submission fails to reach the intended destination, the user is unaware and potentially under the assumption that their form submission is being worked on.
2. User expectations are not properly set such that they would know when to follow up with the VA if they have not received any status on their submission.
3. Forms not related to a claim or appeal that are saved "in progress" show up in draft status on My VA in the Benefit applications drafts section, but then are not shown to the user anywhere on VA.gov once that form is submitted. The next contact the user may get from the VA would be when the form was processed. Leaving a potentially long gap between submission and the next communication from the VA.

## Solution approach
There are two (potentially three) major components of work to address these problems:

1. Revising the form confirmation page for forms using the Benefits Intake API to convey to the user that their form submission is pending until it reaches the system of record (i.e. not fully received). -- _to be handled by the VFF team_
2. Conveying the current status, which we can obtain by polling the Benefits Intake API post-submission, to the user on My VA. -- _to be handled by Auth Exp My VA team_
3. TBD - updates to notifications via and in partnership with VA Notify so that updates are triggered to Veterans with these status changes as well.

## User Outcomes

### Desired User Outcomes

- TK
- TK

### Undesired User Outcomes
 
- TK

## Business Outcomes

### Desired Business Outcomes

- TK

### Undesired Business Outcomes

- TK

## Security
[Security Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/claim-status-lighthouse-migration/launch-materials/claim-status-lighthouse-migration-security-playbook.md)

## Measuring Success

TK

## Key deliverables

- [Technical discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/benefit-application-drafts-forms-submission-status/technical-discovery.md)
- ...
  

### Key Dates

- April 2024: Kick-off
- ...
   
## Screenshots

### Before
TK

### After
TK
