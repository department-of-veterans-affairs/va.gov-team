<!-- markdownlint-disable MD024 -->
# Release Plan - New Landing Page with Today's VISTA Appointments

## Step 1: Development

You'll need to create a feature toggle (or two) or feature branch for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

**We created a feature branch**

## Step 2: Validation

- [X] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [X] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [X] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [X] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [X] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Do I need a staged rollout?

**Yes**
- We are planning to rollout this feature to a pilot facility and then to additional facilities, as determined by OCTO. 
- We have built a utility into the application to be able to toggle a feature on for specific facilitiies.
- We will interview Veterans and staff to gather feedback and decide if adjustments are necessary before doing a staged rollout to all facilities. 
- Rollback plan consists of turning off the feature flag.

### Rollout Plan

- Desired date range: July 2024
- Because this is just a design change, we plan to release to everyone
  - Originally we planned to include upcoming VAOS appointments, but we are speparating that into it's own release
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like *abandonment rate < 20%*, *reported contact center calls < 2 calls*, *error rate < 5%*, etc.\]
    - Number of users who have completed Pre-Check-in is relatively unchanged from the previous month
    - Number of users who have completed eCheck-in is relatively unchanged from the previous month    
- Links to the dashboard(s) showing "success criteria" metrics: 
  - For page views, button clicks, & collapses/expands of collapsible components
      - [PCI GA4 Check-in Metrics](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/v08dnfMeRpi0OZRusDBV9w)
      - [PCI GA4 Pre-Check-in Metrics](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/fBTnZD1-T3SQ5HtcKHsT_A)
      - [PCI GA4 Travel Metrics](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/tPiLrf3xTV6yL_RPS8eFEA)
  - For audience count, completion count, verification rate, conversion rate, and error rate (based on API call successes/failures)
      - [PCI Datadog Metrics](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1716916715976&to_ts=1719508715976&live=true)
- Who is monitoring the dashboard(s)?: Ben Brasso & Lori Pusey

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Number of users who have completed Pre-Check-in: [FILL_IN]
- Number of users who have completed eCheck-in: [FILL_IN]
- Change in number of users who have completed Pre-Check-in: [FILL_IN]
- Change in number of users who have completed eCheck-in: [FILL_IN]
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of users who have completed Pre-Check-in: [FILL_IN]
- Number of users who have completed eCheck-in: [FILL_IN]
- Change in number of users who have completed Pre-Check-in: [FILL_IN]
- Change in number of users who have completed eCheck-in: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
