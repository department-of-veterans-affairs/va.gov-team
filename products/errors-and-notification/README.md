# Errors and Notifications

## Communications
- GitHub Label: [???](https://github.com/department-of-veterans-affairs/va.gov-team/labels/???)
- Slack channel: n/a (#vsa-benefits-memorials)
- Product POCs: Andrea Schneider and Luke Majewski
- va.gov link: N/A, this is an internal tool to help with several products, here is the [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7475)
- Stakeholders: N/A

## The Problem
We have identified some improvements to the error logging and reporting in sentry and other tools. In order to more effectively trace errors coming through for veterans. Right now, the primary workaround is to find the exact time a veteran made a submission and try and read the logs. We did some discovery around this in #6813 and realized there are a number of possible fixes and directions to go with this.  Therefore, we have decided to create an Epic and a product to continue tracking the work and improvement to how we do error logging and notifications to the veteran.

Primary Issues:
1. No way to correlate veteran-facing errors to Call Center calls.
2. No way to help the veteran without getting on the phone with them.
3. No recource for the veterans that do not have the time or the patience to call the Call Center.

### History
Since we have had the Call Center turn on the flow of veteran issues, we have realized that the Call Center does not have enough data in order for us to find the detailed information about the veteran's issues.  Therefore, we knew we needed to not only fix some of the causes of the errors (common issues for all veterans) by digging into the error reports but we also needed to create a better infrastructure for logging messages.  Essentially, we need to be able to provide information in the veteran-facing error that allows us to correlate their error to somethung in the Sentry logs.

### User Goals
Reduce the time it takes to solve their disability claim or other form submission errors.  At a higher level, reduce this for all BAM1 and VSA forms/submissions.  Currently focused on just BAM1.

### Business Goals
1. Reduce the number of Call Center calls.
2. Allow us to solve/find a veteran's issue without resorting to a one-on-one call.
3. Proactive analysis of error logs to address errors that are not being reported to Call Center.

## Assumptions
1. We cannot put PII into the error message.
2. We have to be able to correlate the veteran's errors with an entry in the logs without using PII.

## Solution Approach
Multiple ways to approach this, but they are outlined in the tickets attached to the main epic.  More info needed here.

## Value Propositions
Less frustration for veteran's, Call Center staff, and technical team when encountering veteran issues.

## OKRs and KPIs
## KPIs
- Number of Center Calls (input KPI)
- Time to fixing veteran issue (input KPI)
- Less one-on-one call with veterans (input KPI)

### Baseline KPIs
- TBD

## Key Results (KRs)
1. TBD


# Implementation Info

## Intial Discovery
https://github.com/department-of-veterans-affairs/va.gov-team/issues/6813
Essentially this work determined that we have several main areas of solutioneering we need to focus on.

Problem 1: Bug tickets originating from the Help Desk often lack the context we need to investigate and resolve the issue. The logging and monitoring systems do not contain PII or other information that would help us find the exact transaction or exception that the user is experiencing. Oftentimes, the only information we use to search the logs is a general time of day or an error message; search terms that yield thousands of results.

Proposed Solution:
All errors that are reported to the user with help text directing the user to contact the service desk include an identifier unique to that user session and directs the user to include the report the identified to the help desk. The identifier is logged in Sentry, thereby allowing developers to find the exact error quickly. There are several ids peppering the logs that are possible candidates to be the id used for this: request_id, request_uuid, and transaction_id. We need to investigate which one is most appropriate to this purpose, standardize its use, and communicate its renewed purpose to VSP. This change will need investigation and buy in from design/research, frontend and backend developers, and VSP.

Problem 2: It is tedious and time intensive for developers to review Sentry for errors and determine which are under our team's purview. Sentry is not pro actively reviewed by developers. Bugs are often surfaced and corrected after they negatively affect the users.

Proposed solution:
Filtering rules are added to Sentry to identify errors related to our team's code. As a second step, it may be prudent for those alerts to be surfaced in a platform developers check regularly, Slack.

## Status
1. We have reduced the error rate significantly
2. We have improved reporting (charting) in Grafana.
3. We have added an "job" or "submission id" to non-retryable errors.

## Team

- VA Digital Strategist(s): Andrea Schneider and Luke Majewski
- Product Manager: Luke Majewski 
- Research Lead: N/A
- Design Lead: N/A
- Engineers: Anna Carey and Sarah-Jaine Szekeresh

