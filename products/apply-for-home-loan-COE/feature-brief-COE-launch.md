# Feature Brief: Certificate of Eligibility

---
- GitHub Label: COE
- Slack channel: This feature is currently managed by the decision review team in [#benefits-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK)
- [Design link](https://preview.uxpin.com/65c0623a799c268173fe1a3cb4375f9ce00ad820#/pages/140680778/simulate/sitemap)
- [Staging link](http://staging.va.gov/housing-assistance/home-loans/request-coe-form-26-1880)

## Executive Summary
When Veterans want or need assistance getting a home loan, they can request a certificate of eligibility (COE) for a VA loan from the Loan Guarantee Service (LGY). They may do this by asking their lender to apply on their behalf or by applying directly. 

Veterans that have a "character of service" issue related to their discharge may benefit from applying independently to avoid adjudication challenges prompted by requests sent through lenders.

## Problem Statement(s)
- As a Veteran seeking a home loan, I want to quickly determine my eligibility for a VA home loan so I can get financing.
- As a Veteran with a "character of service" issue related to my discharge, I want to quickly and independently determine my eligibility for a VA home loan without the burden of adjudication that can sometimes be triggered by applying for a COE through a lender. 

## Desired Outcomes
- As a Veteran, I can apply through a straighforward process that will help me determine if I am eligibile for a VA home loan.
- As a Veteran applying online, I can easily understand what I need in order to apply, and I'm not at risk of abandoning the form due to confusion or a lack of confidence.
- As a Veteran with a "character of service" issue related to my discharge, I can apply for a COE independently rather than working solely through a lender to apply for eligibility to get a VA home loan. 
- As an application processor, I can use the data submitted to review the application and easily make a determination.

## Undesired Outcomes
- As a Veteran, I do not want to do more work than necessary to find out if I am eligible. 
- As a Veteran, I do not want to see false positives related to my eligibility status. 
- As an application processor, I do not want data inconsistencies caused by submissions from VA.gov to interfere with the integrity of the Veteran's determination.

## Audiences Served
- Veterans seeking a self-service solution to apply for a cerfiticate of eligibility

## Core Bet
We bet that if Veterans have a simple way of checking their eligibility on their own that they will do so, and that having the ability to check this independently will fulfill their desire to get autonomous access to their benefits. 

## KPIs
We think these are the signals that indicate whether or not our bet is accurate.
- Number of conversions from submission to approval
- Average time to approval
- Number of Contact Center calls
- Number of data errors

## Solution Approach

### Now
- **Automatic eligibility lookup**: VA.gov automatically checks for eligibility of there is enough information on record, and displays to the Veteran that they are eligible when they login. 
- **Self-service online application**: Veterans that want to check their eligibility without having to go to a lender may apply directly online. 
- **Document management**: Veterans can login to review the notification letters sent to them. 

### Next
- **Document management V2**:Veterans will be able to review the documents they've submitted so they don't forget what they previously shared. This is handy for Veterans that may need to submit more information for their application.
- **REST API Service**: As of early January 2023, The Loan Guarantee Service is planning to build an restful API and migrate away from the current technical approach. When this happens, VA.gov will revisit the current user experience to explore new opportunities.

---

## Go-to-market Strategy
As of early January 2023, the current Certificate of Eligibility feature on eBenefits is experiencing a major defect, preventing users from applying online. To remedy this, VA.gov will pursue an expedited release schedule to ensure Veterans dont' continue to experience a loss in functionality. If the release is in good shape at 50% we may release to 100% sooner.

- VA.gov will incrementally release the feature on VA.gov, following an expedited cadence due to the defect on eBenefits.
- eBenefits will post a hard re-direct banner once the feature is released to 100% of users on VA.gov.
- Link to the [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/apply-for-home-loan-COE/Test%20and%20Launch/Release%20Plan.md)

## Target Launch Dates (last updated January 30, 2023)
- 1/19/2023 - Feature Toggle will be set at 0% - VA.gov will whitelist Veteran volunteers to assist in submitting COE requests.
- 2/2/2023 - Feature Toggle will be increased to 25% - Will be released to VA.gov without throttling to eBenefits.
- 2/9/2023 - Feature Toggle will be increased to 50% - Will be released to VA.gov without throttling to eBenefits.
- 2/16/2023 - Feature Toggle will be increased to 75% - Will be released to VA.gov without throttling to eBenefits.
- 2/23/2023 - Feature Toggle will be increased to 100% - for all Veterans to have the ability to go through VA.gov.

---

## Appendix

>**Feature transition document is available.**
> The Certificate of Eligibility feature transition document is on Github [(Link to Github page)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/apply-for-home-loan-COE/coe-transition-design.md)

### Stakeholders (last updated January 30, 2023)
- VA Product Owner: Matt Self
- Product manager: Sade Ragsdale
- Engineer: Robin Garrison
- Engineer: Eugene Lynch
- Engineer: Jerek Shoemaker
- LGY VA Product Owner: Jyssica Sule
- LGY product manager: Kelli Deinarowicz
- LGY stakeholder: Heather Sborz
- LGY stakeholder: Jennifer Tillery
