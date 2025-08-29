Reference: Request Templates
---

## Metrics Reporting Request Template

---

| name | about | title | labels | assignees |
|---|---|---|---|---|
| Metrics Reporting Request Template | To request ad hoc data or metrics | Analytics Reporting Request for [person or team] | analytics-insights, analytics-request | joanneesteban, jonwehausen, nedierecel |

---

# Metrics Reporting Request

## What this form is for

Use this template to request performance, usability, or outcomes va.gov metrics that is difficult to access or that needs analytics interpretation.

Insights will usually provide data reports within the current sprint, but if there is time-sensitivity, please note them in "additional comments."

## Instructions

Please fill out the following sections:
- [ ] Description
- [ ] Timeframe for Analytics Requested
- [ ] Analytics to Track Down
- [ ] Which Product Questions are you trying to answer?
- [ ] Additional Comments

## Description
Who is this request for?

- [Insert Name(s)]
    _Send Slack message to DSVA Slack Channel that includes: email address(es) for user(s) requesting data and link to this Github issue._
- What team/project is this work for?
    _this adds context for the data_
    - [Insert team and project)
    

## Timeframe for Analytics Requested
_Please provide the timeframe for the metrics you are requesting._


## Analytics to Track Down
> Examples
> 
> - [ ] Metric 1
> - [ ] Metric 2
> - [ ] Metric 3


## Which Product Questions are you trying to answer?


## Additional Comments
_Add any comments or questions for the Insights team here (if applicable)._

> Please leave the following blank

## Acceptance Criteria
- [ ] The data has been identified and documented in this ticket - items that we don't have access to are noted with _cannot be accessed_
- [ ] The metrics are shared back with users.

## Definition of Done
- [ ] All appropriate issue tagging is completed
- [ ] All AC completed

---

## Analytics Implementation or QA Request Template

---

| name | about | title | labels | assignees |
|---|---|---|---|---|
| Analytics Implementation or QA Request Template | To request Google Analytics implementation or QA for product launches or iterations | Analytics Implementation or QA Support for [Product] | analytics-insights, analytics-request | joanneesteban, jonwehausen, nedierecel |

---

# Analytics Implementation or QA Request

## What this form is for
Use this template to request Google Tag Manager and Google Analytics implementation or QA for your product. Please fill out all brackets. 

> _Please see the following information for implementation timeline:_
> New Teams: Implementation will usually be completed in 4 sprints:
> 
> - Sprint 1: Discovery/Orientation
> - Sprint 2: FE Implementation
> - Sprint 3: Tagging Implementation
> - Sprint 4: QA
> 
> All other teams: Implementation will usually be completed in 2 sprints
> 
> - Sprint 1: Discovery and FE Implementation
> - Sprint 2: Tagging Implementation and QA

## Description
- Is this request for Google Analytics implementation or QA?


- Who is this request for?

    - [Insert Name(s)]
    _Provide any relevant contact information and link this issue to the insights team on the DSVA Slack Channel: `#VSP-Analytics`._
    
- What team/project is this work for?
    _this adds context for the data_
    
    - [Insert team and project]
    
- Provide the Domain where Google Analytics needs to be implemented
    _i.e. www.staging.va.gov_
    
    _Identify if PII is passed in URL or title tag_
    
    - [Provide Domain here]
- Please provide any upcoming deadlines or important milestones
    _ex: launch_
    
    - [Provide relevant dates here]

- Typical Website Interactions to Track

    - *Conversions - Understanding the User Flow:* _Provide URLs that are part of the application from introduction page to successful form completion; conditional pages that are visible depending on an applicant's answer should be marker accordingly._
    
    - [URLs here]
    
    - *Other User Interactions*: _Provide details on other interactions and metrics, like click to help text links, that are helpful in understanding user behavior._
    
    - [Other user interactions here]

- Sample Users when authentication is required

    - [Provide users here]

- Test Users to replicate the event

    - [Provide test users here]

- Certain conditions/responses that need to be reviewed

    - [Provide conditions/responses here]

- Additional Comments

    - [Add any comments or questions for the Insights team here (if applicable).]

> Please leave the following blank

## Acceptance Criteria
- [ ] QA has been completed

## Definition of Done
- [ ] All appropriate issue tagging is completed
- [ ] All AC completed
