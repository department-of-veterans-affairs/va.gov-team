# Appeals Status

## Links
- Production: https://www.va.gov/claim-or-appeal-status/
- Staging: https://staging.va.gov/claim-or-appeal-status/ (redirects to staging.va.gov/track-claims/your-claims)

## Testing
- [How to log into staging](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/mvi-staging-users.csv)

## Important Keywords
appeals, appeals status, claims and appeals, check appeals

---

## Product Overview

Veterans have the right to appeal any benefits decision made by the Veterans Benefits Administration (VBA). The VA appeals process is set in law and is different from other judicial appeals processes.

After VBA has made a decision on a certain claim, Veterans can file an appeal. The Appeals Status tool allows Veterans to check on the current status of the appeal.

The Appeals Status information is displayed within the same tool as [Claims Status](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/claims-status).

---
## Points of Contact (POCs)

### VA:
See [Project Charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/appeals-status/appeals-charter-signed.pdf) for more information

- VBA Product Co-Business Owner: Nina Tann, Assistant Director, Program Administration, Appeals Management Office, _Delegated authority by David Mclenachen_
- VBA Product Co-Business Owner: James Ridgway, Chief Counsel for Strategy, Innovation, and Programs
- VBA Product Owner and Appeals SME: Nicholas Holtz, VBA

### DSVA:
- Andrea Schneider 
### Ad Hoc:
- Sprint Team: Apps Team 1 / Unicorns - [#unicorns-team](https://dsva.slack.com/archives/C5AGLBNRK)

---

## Background, Narrative, and Important Decisions:

- [How is Appeals Status service related to Claims Status, and what decisions were made about how to organize them?](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/claims-status)

## Version history:

Appeals is currently on V2. There are active plans to build a V3 version to accomodate Appeals Modernization Act changes.

## V1
### Problem Statement
Veterans do not understand the status of their appeals and are frustrated due to lack of useful information and absence of transparency.

## V2

### Project description

On July 13, 2017, Vets.gov launched Appeals Status, which allows Veterans to check the status of their appeal online through various devices. While the Vets.gov and Appeals team works together to improve this application, the Appeals research will zoom out and talk to Veterans to better understand how they are perserving the process and provide information

### High-level goal

- For Veterans to build confidence in the appeals process
- For Veterans to have answers to their most frequently asked questions
	- How long is this going to take?
	- Why is it taking a long time?
	- Where is it now?
- Create a seamless transition to the new legislation that allows Veterans to clearly and easily understand their new options and the outcome of each

### Measure of Success
- Adoption - Have more reoccuring Veterans over time
- Contact center volume - Reduce the amount of contact center volume for information on their appeals status
- For Veterans to say "I understand why the appeals process is long."
___

### Top resources

- [Contact Center guides](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/appeals-status/scripts-contact-center.pdf)
   - [Contact Center discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/appeals-status/scripts-contact-center.pdf)
- [Design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/appeals-status/v2/appeal-status-designs-and-features.md)
- [Content](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/appeals-status/v2/content)
- [User Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/appeals-status/v2/research)
  - Everybody on the vets.gov-team repo should have access the Appeals design and research repo. For access, please contact Chris Given.
  - For usability videos, quotes, consent forms, please contact Chris Given.

___

### Timeline

### 2017
#### July
- Appeal Status V1 launches

#### August
- Chris and Gina do V2 Discovery work at Oakland, California. They develop relationships with CalVet and OakRO and had a chance to talk to Veterans and attend their Travel Board hearings.

#### September
- Veterans can now see appeal status on vets.gov by logging in with their DS log on accounts.
- First round of usability sessions with Veterans

#### October
- Chris and Gina visit Wilkes-Barre to talk to Board Call Center
- Team Unicorn officially working on Appeals Status V2

#### November
- We start working on content

#### December 2017
- There is a pause on development work.
- Two weeks are devoted to usability testing for 508 compliance and content

### 2018

#### January - February

- Amy Behrens joins V2 for content and then leaves DS.
- Content working session with VBA and Board
- Beth Potts helps us with updated static pages and Advanced on Docket page

#### March
- Mar 13 - Chris and Gina demos Appeals Status to Dr. Shulkin
- Mar 21 - Appeals Status V2 launches

## V3
- Goal: update Appeal Status app to accomodate Appeals Modernization Act changes. The Act goes into effect no earlier than Feb 14, 2019.
- All relevant links [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/appeals-status/v3)

---

## Error Handling
- vets-api -> vets-website: [Error handling information]
- vets-api -> vets-website: [API endpoint documentation]

---

## Appeals Events
Each appeal has a list of associated events.

The [Events documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/appeals-status/v2/content/events.md) contains detailed information on what each event means.

---

## Service-Level Objectives
The general site-wide availability and latency objectives that are monitored in Prometheus apply to Appeals Status as well. See [here](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/site.rules) for details. 

Additionally, there are a few monitored SLOs specifically applicable to the Appeals application:

**Availability:**
5xx responses should not exceed 5% of total responses for more than 5 consecutive minutes
[Link](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/application.rules#L6)

**Latency:**
Percent of requests served in under 10 seconds should not drop to or below 95% of total requests for more than 5 consecutive minutes [NOTE: Temporarily disabled due to known EVSS service issues]
[Link](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/application.rules#L24)

**Incident Response:**
Any availability / latency incident should be acknowledged within 15 minutes of initial alert.
[Link](https://github.com/department-of-veterans-affairs/devops/blob/2913da3512a65a8cb988ad189235794ed1067299/terraform/modules/pagerduty_team/main.tf#L21)


## APIs / Dependent Systems

## Front End API dependencies
The Claims Status product on va.gov makes use of the following `vets-api` call:
- `v0/appeals` (returns list of appeals)

These `vets-api` endpoints are a pass-through for connecting to the evss async claims service. `vets-api` documentation for various EVSS services can be found in the [EVSS section of the vets-api readme](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems/eBenefits-EVSS)

EVSS connects to BGS to retrieve the requested data. BGS has known uptime issues stemming from planned and unplanned maintenance, especially over the weekends. Please see related information on the BGS system in the [vets-api database documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems/BGS)

## Known issues
Known issues and product backlog is being tracked via the appeals label on our zenhub boards.
