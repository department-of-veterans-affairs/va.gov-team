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
- Send multi-channel notifications with downtime information:
  - Slack message in #mhv-health-portal-coordination and tag:
      - MHV OCTO POs and MHV OCTO Engineers (@octo-health-engineers group)
      - Greg Kirk and Sean Good
      - MHV User-facing team on-call (Slack user group TBD)
      - Respective MHV User-facing product team Product Manager and Horizon (Slack user group TBD)
      - MHV System Owner and ISSO
      - Others? TBD
  - Email to same audience as Slack
    - OCTO forwards to respective OCC partners as necessary
- Submit a SNOW ticket to document downtime approval by System Owner
- Set up PagerDuty maintenance window and coordinate with MHV User-facing team on-call to review/verify

### MHV User-facing Team or VA.gov/VAHB Platform

If impact is anticipated from a planned MHV User-facing team activity:
- Communication Owner^ - Send multi-channel notifications with downtime information:
   - Slack message in #mhv-health-portal-coordination and tag:
      - MHV OCTO POs and MHV OCTO Engineers (@octo-health-engineers group)
      - Greg Kirk and Sean Good
      - Horizon team (Slack user group TBD)
   - Email to same audience as Slack
     - OCTO forwards to respective OCC partners as necessary
- Engineer - Set up a PagerDuty maintenance window


^: the Communication Owner will be a product manager or engineering manager for the respective user-facing application

## Incident Response

When an incident response is initiated, teams will follow their respective procedures (linked in details below).

Include the following information in messaging as best as possible:
- Issue/Outage Summary
- Estimated User Impact
- Incident Start Time

### MHV API/Platform Team
If team is notified of or identifies an issue:
- Follow steps in VA Enterprise Incident Response Plan (link TBD)
  - Detection, Notification and Analysis
    - Upon detection of incident, notify core MHV IR team via slack channel #mhv-health-portal-coordination and tag:
      - MHV User-facing team on-call (Slack user group TBD)
      - Horizon team (Slack user group TBD)
      - MHV System Owner
      - MHV ISSO
      - MHV Privacy Officer
      - MHV Senior Security Specialist
      - MHV Team Lead/Delivery Manager
      - OCTO
      - V/CHIO/Business
   - IR team convenes group chat and adds needed SMEs
      - ISSO or Privacy submits PSETS ticket
      - CSOC Data Breach Response Service (DBRS), if Veteran data has possibly been compromised
   - IR team notifies other key stakeholders:
      - OCC
      - MHV Help Desk
      - VAEC
  - Containment and Eradication
    - IR team takes steps to contain/eradicate issue as applicable
    - May need to enlist help from CSOC/NSOC
- Recover from outage/restore service per MHV Contingency Plan (to be updated).

### MHV User-facing Team or VA.gov/VAHB Platform
On-call details are outlined in the [On-Call Overview](oncall.md)

If team is notified of or identifies an issue:
- Follow [incident response procedures](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te)
   - While in STEP ONE, On-call Engineer sends Slack message in #mhv-health-portal-coordination and tags MHV API/Platform (contacts TBD) with awareness of new incident
 
#### P1 or P2
If incident is rated P1 or P2:
- Send multi-channel notifications:
  - Slack message in #mhv-health-portal-coordination and tag:
    - MHV API/Platform (contacts TBD)
    - MHV OCTO POs and MHV OCTO Engineers (@octo-health-engineers group)
    - Greg Kirk and Sean Good
    - Horizon team (Slack user group TBD)
    - Contact Center/Veteran Support (Chante, additional contacts TBD)
  - Email to same audience as Slack
    - OCTO forwards to respective OCC partners as necessary
    - Contact Center/Veteran Support forwards to respective HRC and Help Desk partners as necessary
- Continue [incident response procedures](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te)

Send updates to notification audience:
- When a solution to resolve is determined
- End of each day issue is unresolved
- When the issue is resolved

#### P3 or P4
If incident is rated P3 or P4:
- Update initial Slack message with priority level and tag:
  - MHV OCTO POs
  - Respective MHV User-facing product team Product Manager and Horizon (Slack user group TBD) for further prioritization
- Continue [incident response procedures](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te)

Send updates to notification audience:
- When the issue is resolved


