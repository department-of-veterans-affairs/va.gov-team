# My VA: 2018 Outline
## Points of Contact
- GitHub Label: dashboard
- Slack channel: [#dragons-team](https://dsva.slack.com/channels/dragons-team)

|Name|Role|Email|
|----|----|-----|
|Matt Self | DSVA Lead| matthew.self2@va.gov |
|Samara Strauss | DSVA Designer; Dragons team lead| samara.strauss@va.gov |
|TJ Rice | Ad Hoc Product Manager| tj@adhocteam.us |

## Product Key Words
- Dashboard 
- User Dashboard

## How to Access

**Staging**

- https://staging.va.gov/my-va/
- LOA3: Sign in with [any staging user](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/MVI%20Integration/reference_documents/mvi_stagingUsers_fullList.csv) and navigate to the dashboard.
- LOA1: Create an account on staging and navigate to the dashboard. You will see a limited view of the dashboard compared to what LOA3 users see.

**Production**

- https://www.va.gov/my-va/
- LOA3: Only veterans that have verified their identity can view the LOA3 dashboard on production.
- LOA1: Create an account on staging and navigate to the dashboard. You will see a limited view of the dashboard compared to what LOA3 users see.

## Overview 
The Dashboard is the single source of truth for customer-facing goals and actions.

## User Problem Statement
_"As a veteran, I want to see an easy-to-understand list of all the things I have to do to obtain benefits and services, so that I can quickly get approved for and enrolled in the services I care about."_

- There are something like two dozen things I qualify for, and something like a dozen things I have to actually do for each of those. That's like a hundred things I have to do. Why can't you just show me all the things I have to do, and why I have to do them, and how long they'll take to do?

### User Goal
- Shows the Veteran the statuses of her claims, applications, and anything else she has in flight at the VA.

## Why Veterans Want Us To Work On This

- There are hundreds of potential touchpoints along a servicemember/ veteran's VA journey, with each touchpoint representing a task, job, or action that a veteran has to do.
- There is no one way or place that surfaces all these tasks, jobs, or actions.
- The more complete a profile becomes, the better the dashboard represents the things a veteran can/ should/ ought to do in regards to VA benefits and servcies.

## The Plan

- Implement a straightforward, easy to use, best in class dashboard page
- Build on existing work piece by piece
- Integrate Vet360 services as they come online
- Test, test, test

# The Solution
One location where veterans can see all of there "in-flight" activity at the VA

## Narrative

The original dashboard launched in Spring 2018 on Vets.gov with four features — Continue applications, Claim status, Secure messages, and Prescriptions — as well as links to the then-newly launched user profile and account settings pages. The dashboard also served as the signed-in homepage for logged in users. 

In November 2018, as part of the Vets.gov --> VA.gov merger, the logged in dashboard was renamed "My VA." It moved from the logged in homepage to a separate page on the site in favor of the new VA homepage serving as the landing page for both logged out and logged in users.

In January 2019, we added the "Find VA benefits", which allowed users to select a list of benefits they'd like to learn more about and have widgets for those benefits appear on the dashboard.

In April 2019, we changed "Continue applications" to "Your applications" as part of an upcoming update to display the status of health care applications on the dashboard ([HCA updates launching June 2019](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Dashboard/README.md#current-status)).

## Relevant Widget Information

#### Find VA benefits
- Allows users to select benefits they're interested in so they can see information about those benefits on their dashboards.
- LOA3 and LOA1.

#### Your applications
- Displays any in-progress applications started on VA.gov.
- LOA3 and LOA1.

#### Claims status
- Displays recent open claims & appeals statuses, and links to a full list of claims.
- LOA3 only.

#### Secure messages widget 
- Displays recent **unread** messages from their health care provider.
- For users with VA health care only. 
- LOA3 only.

#### Prescriptions widget
- Displays active prescriptions in the **past 30 days**.
- For users with VA health care only. 
- LOA3 only.

## API Calls / Dependent systems

#### Claims status
- Dependent system: EVSS
- API calls URL: https://www.ebenefits.va.gov/wss-claims-services-web-3.0/rest/vbaClaimStatusService
  
#### Secure messages
- Dependent system: MHV
- API calls URL: https://essapi.myhealth.va.gov/mhv-sm-api/patient/v1

#### Prescriptions
- Dependent system: MHV
- API calls URL: https://essapi.myhealth.va.gov/mhv-sm-api/patient/v1

## Navigation
- Expected behavior for logo and "home" breadcrumb is for the site to redirect back to the logged-in user dashboard, NOT the unauthenticated homepage

## Current Status

As of May 2019, the Dragons/Personalization team is working to implement [some updates to the HCA](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Health%20care/HealthApplication/181023HCAChanges.md)As part of this, we are making the following updates to the dashboard:

- Users will see their health care application status on the dashboard.
- Users who have been enrolled in VA health care will see a section to manage their health care benefits on their dashboard.

## Service Level Objectives

| Service&#160;Level&#160;Indicator  | Service Level Objective |
| :------------- | ------------- |
| Availability  | Should not exceed 5% 5xx error rates (as a percent of all requests) for more than 5 consecutive minutes<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/application.rules#L6)  |
| Latency  | Percent of requests served in under 2 seconds should not drop to or below 95% for more than 5 consecutive minutes<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/application.rules#L15)  |
| Incident Response  | Initial acknowledgement of the issue within 15 minutes of a triggered alert<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/2913da3512a65a8cb988ad189235794ed1067299/terraform/modules/pagerduty_team/main.tf#L21)  |

## Team

- VA Digital Strategist(s) *: Steve Kovacs steven.kovacs@va.gov
- Product Manager *: 
    - Ben Barone ben.barone@adhocteam.us 
    - TJ Rice tj@adhocteam.us (Active)
- Design Lead: Mel Woodard Mel Woodard <mel@adhocteam.us>
- Eng Lead: Ben Shyong ben.shyong@adhocteam.us 
- Engineers:
   - Erik Hansen (Active)
   - Tze-chiu Lei (Active)
   - Ben Shyong
   - Nick Sullivan
   - Harry Levine
   - Ryan Baker
   - Emerson Loustau
- Designers
   - Mel Woodard
   - Samara Strauss (Active)
   - Lauren Alexanderson

## Error Handling
- [Error Handling](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Dashboard/Design/Error_Handling.md)
  
## Screenshots
### Before
![legacy profile](https://user-images.githubusercontent.com/21130918/47655213-e597aa00-db62-11e8-870c-4ebbf0ec2e4a.png)

### After V1 (Spring 2018)
![dashboard](https://user-images.githubusercontent.com/21130918/47656467-80918380-db65-11e8-9ffc-3a833f60056f.png)

### Find VA benefits feature (Launched Jan 2019)

![Find VA benefits dashboard](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Design/MVP%20Design/Mockups/Dashboard-Find%20VA%20Benefits-Default%20State-One%20open.png)
