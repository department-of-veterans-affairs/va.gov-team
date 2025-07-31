# My HealtheVet Downtime Notification Process

The purpose of this document is to supplement existing downtime procedures with steps specific to the My HealtheVet (MHV) user-facing and API/Platform teams.

Teams will be agile with our process - iterating and refining as we use it and get feedback.

## Planned Downtime

There may be instances where a user-facing impact can be anticipated due to planned activities.

Include the following information in messaging:
- Downtime Reason
- Anticipated Impact
- Planned Downtime Timeframe
- Rollback Plan

Notifications should go out:
- As soon as the team starts planning for the downtime
- Day before the downtime
- When the downtime has concluded

### MHV API/Platform Team
If impact is anticipated from a planned MHV API/Platform team activity:
- Send multi-channel notifications:
  - Slack message in #mhv-health-portal-coordination and tag:
      - MHV OCTO POs and MHV OCTO Engineers (@octo-health-engineers group)
      - Greg Kirk
      - Sean Good
      - MHV User-facing team on-call (Slack user group TBD)
      - Respective MHV User-facing product team Product Manager and Horizon (Slack user group TBD)
      - MHV System Owner and ISSO
      - Others? TBD
  - Email to same audience as Slack
- Submit a SNOW ticket to document downtime approval by System Owner
- Set up PagerDuty maintenance window and coordinate with MHV User-facing team on-call to review/verify

### MHV User-facing Team or VA.gov/VAHB Platform

If impact is anticipated from a planned MHV User-facing team activity:
- Communication Owner^ - Send multi-channel notifications:
   - Slack message in #mhv-health-portal-coordination and tag:
      - MHV OCTO POs and MHV OCTO Engineers (@octo-health-engineers group)
      - Greg Kirk
      - Sean Good
      - Horizon team (Slack user group TBD)
   - Email to same audience as Slack
- Engineer - Set up a PagerDuty maintenance window


^: the Communication Owner will be a product manager or engineering manager for the respective user-facing application

## Incident Response

### MHV API/Platform Team


### MHV User-facing Team or VA.gov/VAHB Platform

