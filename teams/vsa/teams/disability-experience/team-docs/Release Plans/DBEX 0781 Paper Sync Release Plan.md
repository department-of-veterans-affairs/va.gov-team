# Release Plan: 0781 Paper Sync - MVP 


## Purpose
The purpose of this release plan is to document and align the delivery teams and stakeholders on what will be delivered and when. This release plan is specifically for the 0781 Paper Sync MVP (first release). It is not intended to include the next generation of enhancements to the 0781 product (i.e., supporting documents, in progress forms, etc). 

## Feature description
For Veterans who have been diagnosed with PTSD (post traumatic stress disorder) or mental health issues and want to apply for related benefits or services, the VA.gov's new online 0781 form provides all the questions related for claiming mental health conditions and in-service traumatic events need to submit a benefits claim. Unlike the previous version of the 0781 form, the new online form will be in compliance by being up to date with the most recent paper form version (June 2024).

## Project goals
Create a new 0781 online form that will match the newest paper version of the PDF form. The data in the online form will used in the generation of the new (2024) 0781 PDF that will be sent to the eFolder after a successful submit.

## Success criteria
- Deliver a new 0781 form that can capture the same data that is needed as the 2024 PDF form.
- Keep the existing form available for claims already in progress and for piloting the new version.
- Direct users who do not have a claim already in progress to the new online 0781 form.
- Human centered design to help reduce friction and abandonment among Veterans filling out the forms.
- 

## Resource materials
- [0781 Paper Sync Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87438) 
- [Story Mapping Board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718308823134/02c2c9ea74f16b276692af8f31eb65202acc7928?wid=0-1719930043260)
- [Figma 0781 redesigns](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=9856-83462&t=us3dJI6ZkhtJ0Wz8-4)
- [Figma 0781 redesigns-final](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=8144-135894)
- [Final -0781 PS Field Mapping.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/0781%20Paper%20Sync/0781%20PS%20Field%20Mapping.md)
- [Final - 0781 PS New SubURL.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/0781%20Paper%20Sync/0781%20PS%20New%20SubURL.md)
- Architecture
- Datadog log
- Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing) (pre-production)
- Product Guide
- [Collaboration Cycle Plan](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80848)
- [0781 Paper Sync Staging Test Plan](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-526EZ-0781-mental-health.md)
- [Release calendar](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1739482666003/8c148f924688c05f897075c420034f628d3f0970)
- 

## New capabilities and changes


## Production release plan
The production release will include a canary rollout. The rollout plan involves deploying the new 0781 flow version to a small, representative subset of users (the "canary" group) before releasing it to the entire user base, allowing for early detection of issues and a swift rollback if necessary. 

**Monitoring the Canary Deployment**

We'll closely monitor the canary deployment for performance issues, errors, and user feedback. We'll be looking at the following ... 
- Number of claims in progress with new 0781 mental health data/form
- Number of successful submissions with new 0781 mental health data/form
- Number of failed submissions with new 0781 mental health data/form
- Number of submissions with new 0781 mental health data/form down the primary path
- Number of submissions with new 0781 mental health data/form down the secondary/backup path
- Number of successful submissions with old 0781/a PTSD data/form

[Datadog monitors should be included here]

**Scale Gradually**

Each week the team will be monitoring the progress of disability claims ... reporting the metrics in the # benefits-disability slack channel ... 

If the canary deployment is performing well, we'll gradually increase the percentage of traffic to the new 0781 flow. 

Once we're confident that the canary deployment is stable, we'll fully roll it out to all users by routing all traffic ...  

**Canary rollout plan**


| Percent |Go/No Go Date |Planned release date | Actual release date |Notes            |
|---------|--------------|---------------------|---------------------|-----------------|
|1% | 04/29/2025 | 04/30/2025 | | |
|5% | 05/05/2025 | 05/06/2025 | | |
|25% | 05/12/2025 | 05/13/2025 | | |
|50% | 05/19/2025 | 05/20/2025 | | |
|75% | 05/27/2025 | 05/28/2025 | |Memorial day holiday this week |
|100%|  06/08/2025 | 06/10/2025 | | |

_These dates do not represent commitment and are subject to change._


## Risks

## Production issues recovery plan

DBEX team Carbs and OCTO PO will monitor analytics. If something goes wrong, the engineering teams will be on standby to disable the flippers which redirect all submissions back to the existing 0781 path. 

The recovery playbook is included in the QA document linked in this issue 

## Rollback

Rollback if any of the following is encountered
- Qualitative anomalies that affect a significant number of users
- Any new severe or widespread errors identified
- High volume of 500 errors
- High volume of Call Center complaints
- Abnormally high latency
- Traffic metrics deviate abnormally from the Flipper allotment

