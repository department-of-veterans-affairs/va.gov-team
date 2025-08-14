# My HealtheVet Downtime Notification Process

The purpose of this document is to supplement existing downtime procedures with steps specific to the My HealtheVet (MHV) user-facing and API/Platform teams.

Teams will be agile with our process - iterating and refining as we use it and get feedback.

## Planned Downtime

There may be instances where a user-facing impact can be anticipated due to planned activities.

Include the following information in messaging:
- Downtime Reason
- Anticipated User Impact [number of users, services (e.g. medications)]
- Planned Downtime Timeframe
- Rollback Plan

Notifications should go out:
- As soon as the team starts planning for the downtime
- Day before the downtime
- When the downtime has concluded

### MHV API/Platform Team
If impact is anticipated from a planned MHV API/Platform team activity:
- Send multi-channel notifications with downtime information:
  - Slack message in [#mhv-health-portal-coordination](https://dsva.slack.com/archives/C04DRS3L9NV) and tag:
      - MHV OCTO POs ([@Marci](https://dsva.slack.com/team/U04K6QYPP6V), [@Kay](https://dsva.slack.com/team/U04K6QYPP6V), and [@Patrick](https://dsva.slack.com/team/U04K6QYPP6V)) and MHV OCTO Engineers (@octo-health-engineers group)
      - [@Greg Kirk](https://dsva.slack.com/team/U04DD9G1G02) and [@Sean Good](https://dsva.slack.com/team/U04JDKU8ZM5)
      - MHV User-facing team on-call (Slack user group TBD)
      - MHV User-facing Product Managers (Slack user group TBD) and Horizon team ([@Bryan Ivie](https://dsva.slack.com/team/U02EA0XLRD1), [@Daniel Cloud](https://dsva.slack.com/team/U03CLNHG23S), [@Florence McCafferty](https://dsva.slack.com/team/U03HQRVPZD1), [@Cara Frissell](https://dsva.slack.com/team/U05123T8FT7), [@Sara Sterkenburg](https://dsva.slack.com/team/U045GGS6V25), and [@Lauren Ernest](https://dsva.slack.com/team/U01DKQVCEGY))
      - Contact Center/Veteran Support ([@Chante](https://dsva.slack.com/team/UGWD2V2BB))
      - If impacts mobile, include VAHB PO ([@rtwell](https://dsva.slack.com/team/UEY4D750B))
      - MHV System Owner and ISSO
  - Email to same audience as Slack
    - OCTO forwards to respective OCC partners as necessary
      - OCC forwards to MHV business stakeholders (MHV Coordinators, EHRM, etc) as necessary
- Submit a SNOW ticket to document downtime approval by System Owner
- Set up PagerDuty maintenance window and coordinate with MHV User-facing team on-call to review/verify


### MHV User-facing Team or VA.gov/VAHB Platform

If impact is anticipated from a planned MHV User-facing team activity:
- Communication Owner^ - Send multi-channel notifications with downtime information:
   - Slack message in [#mhv-health-portal-coordination](https://dsva.slack.com/archives/C04DRS3L9NV) channel and tag:
      - MHV OCTO POs ([@Marci](https://dsva.slack.com/team/U04K6QYPP6V), [@Kay](https://dsva.slack.com/team/U04K6QYPP6V), and [@Patrick](https://dsva.slack.com/team/U04K6QYPP6V)) and MHV OCTO Health Engineers (@octo-health-engineers)
      - [@Greg Kirk](https://dsva.slack.com/team/U04DD9G1G02) and [@Sean Good](https://dsva.slack.com/team/U04JDKU8ZM5)
      - Horizon team ([@Bryan Ivie](https://dsva.slack.com/team/U02EA0XLRD1), [@Daniel Cloud](https://dsva.slack.com/team/U03CLNHG23S), [@Florence McCafferty](https://dsva.slack.com/team/U03HQRVPZD1), [@Cara Frissell](https://dsva.slack.com/team/U05123T8FT7), [@Sara Sterkenburg](https://dsva.slack.com/team/U045GGS6V25), and [@Lauren Ernest](https://dsva.slack.com/team/U01DKQVCEGY))
      - If impacts mobile, include VAHB PO ([@rtwell](https://dsva.slack.com/team/UEY4D750B))
   - Email to same audience as Slack
     - OCTO forwards to respective OCC partners as necessary
       - OCC forwards to MHV business stakeholders (MHV Coordinators, EHRM, etc) as necessary
- Engineer - Set up a PagerDuty maintenance window

Many MHV user-facing products are part of the VA.gov/VAHB Platform ecosystem and may be tangentially impacted by broader planned Platform downtimes.
- The respective user-facing team product manager or engineering manager will evaluate potential MHV impact
- If a MHV-specific impact is determined, team will work with OCTO POs on path forward for communication based on the use case

Note-Contact Center/Veteran Support does not need to be notified for planned downtimes.

^: the Communication Owner will be a product manager or engineering manager for the respective user-facing application

## Incident Response

When an incident response is initiated, teams will follow their respective procedures (linked in details below).

Include the following information in messaging as best as possible:
- Issue/Outage Summary
- Estimated User Impact [number of users, services (e.g. medications)]
- Incident Start Time

### MHV API/Platform Team
If team is notified of or identifies an issue:
- Follow steps in VA Enterprise Incident Response Plan (link TBD)
  - Detection, Notification and Analysis
    - Upon detection of incident, notify core MHV IR team via slack channel[#mhv-health-portal-coordination](https://dsva.slack.com/archives/C04DRS3L9NV) and tag:
      - MHV User-facing team on-call (Slack user group TBD)
      - MHV User-facing team product managers ([@Bryan Ivie](https://dsva.slack.com/team/U02EA0XLRD1), [@David Koger](https://github.com/davidkoger), [@Michael Brodsky](https://dsva.slack.com/team/U08HKSYE285), or [@Stacy Blackwood](https://dsva.slack.com/archives/D098WLHCP4J)) and Horizon team ([@Bryan Ivie](https://dsva.slack.com/team/U02EA0XLRD1), [@Daniel Cloud](https://dsva.slack.com/team/U03CLNHG23S), [@Florence McCafferty](https://dsva.slack.com/team/U03HQRVPZD1), [@Cara Frissell](https://dsva.slack.com/team/U05123T8FT7), [@Sara Sterkenburg](https://dsva.slack.com/team/U045GGS6V25), and [@Lauren Ernest](https://dsva.slack.com/team/U01DKQVCEGY))
      - MHV System Owner
        - Sean Good
      - MHV ISSO
        - Joe Decoteu
      - MHV Privacy Officer
      - MHV Senior Security Specialist
        - Janiece Wade
          - Slack - [@Janiece Wade](https://dsva.slack.com/team/U04JMG0T5FG)
      - MHV Team Lead/Delivery Manager
        - Slack - [@Matt Bain](https://dsva.slack.com/team/U045AC9PL9L)
      - OCTO
        - Slack - @Marci @Kay @patrick (PM for the product); OCTO health engineers (@octo-health-engineers)
      - V/CHIO/VHA Partners
   - IR team convenes group chat and adds needed SMEs
      - ISSO or Privacy submits PSETS ticket
      - CSOC Data Breach Response Service (DBRS), if Veteran data has possibly been compromised
   - IR team notifies other key stakeholders:
      - OCC
      - MHV Help Desk and OCTO Contact Center
      - VAEC
  - Containment and Eradication
    - IR team takes steps to contain/eradicate issue as applicable
    - May need to enlist help from CSOC/NSOC
- Recover from outage/restore service per MHV Contingency Plan (to be updated).

### MHV User-facing Team
On-call details are outlined in the [On-Call Overview](oncall.md)

If team is notified of or identifies an issue:
- Follow [incident response procedures](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te)
   - While in STEP ONE, On-call Engineer sends Slack message in [#mhv-health-portal-coordination](https://dsva.slack.com/archives/C04DRS3L9NV) channel
     - Tag MHV API/Platform ([@Kyle MacMillan](https://dsva.slack.com/team/U0331QNU4BV), [@Greg Broz](https://dsva.slack.com/team/U03637N2BQ9), and [@Matt Bain](https://dsva.slack.com/team/U045AC9PL9L)) with awareness of new incident

 <details><summary>Service Type for Incident Priority Matrix</summary>
   
| User-facing Application                                  | Service Type    |
| -------------------------------------------------------- | --------------- |
| VA.gov portal landing                                    | Tier 1          |
| VA.gov Medical Records                                   | Tier 1          |
| VA.gov Medications                                       | Tier 1          |
| VA.gov Secure Messaging                                  | Tier 1          |
| VA.gov Medical Devices and Supplies (supply reordering)  | Tier 1          |
| VAHB health section screen                               | Tier 1          |
| VAHB Medical Records                                     | Tier 1          |
| VAHB Medications                                         | Tier 1          |
| VAHB Secure Messaging                                    | Tier 1          |
| Secure Messaging Admin portal                            | Tier 1          |
| Secure Messaging Clinician portal                        | Tier 1          |
| MHV Classic Admin portal                                 | Tier 1          |
| MHV Classic portal home                                  | Tier 3          |
| MHV Classic Medical Records                              | Tier 3          |
| MHV Classic Medications                                  | Tier 3          |
| MHV Classic Secure Messaging                             | Tier 3          |

</details>


#### P1
If incident is rated P1:
- Incident Commander^ - Send multi-channel notifications:
  - Slack message in [#mhv-health-portal-coordination](https://dsva.slack.com/archives/C04DRS3L9NV) channel and tag:
    - MHV API/Platform ([@Kyle MacMillan](https://dsva.slack.com/team/U0331QNU4BV), [@Greg Broz](https://dsva.slack.com/team/U03637N2BQ9), and [@Matt Bain](https://dsva.slack.com/team/U045AC9PL9L))
    - MHV OCTO POs ([@Marci](https://dsva.slack.com/team/U04K6QYPP6V), [@Kay](https://dsva.slack.com/team/U04K6QYPP6V), and [@Patrick](https://dsva.slack.com/team/U04K6QYPP6V)) and MHV OCTO Engineers (@octo-health-engineers group)
    - [@Greg Kirk](https://dsva.slack.com/team/U04DD9G1G02) and [@Sean Good](https://dsva.slack.com/team/U04JDKU8ZM5)
    - Horizon team ([@Bryan Ivie](https://dsva.slack.com/team/U02EA0XLRD1), [@Daniel Cloud](https://dsva.slack.com/team/U03CLNHG23S), [@Florence McCafferty](https://dsva.slack.com/team/U03HQRVPZD1), [@Cara Frissell](https://dsva.slack.com/team/U05123T8FT7), [@Sara Sterkenburg](https://dsva.slack.com/team/U045GGS6V25), and [@Lauren Ernest](https://dsva.slack.com/team/U01DKQVCEGY))
    - MHV user-facing team Product Managers ([@Bryan Ivie](https://dsva.slack.com/team/U02EA0XLRD1), [@David Koger](https://github.com/davidkoger), [@Michael Brodsky](https://dsva.slack.com/team/U08HKSYE285), or [@Stacy Blackwood](https://dsva.slack.com/archives/D098WLHCP4J))
    - Contact Center/Veteran Support ([@Chante](https://dsva.slack.com/team/UGWD2V2BB))
    - If impacts mobile, include VAHB PO ([@rtwell](https://dsva.slack.com/team/UEY4D750B))
  - Email to same audience as Slack
    - OCTO forwards to respective OCC partners as necessary
      - OCC forwards to MHV business stakeholders (MHV Coordinators, EHRM, etc) as necessary
    - Contact Center/Veteran Support forwards to respective HRC and Help Desk partners as necessary
- Continue [incident response procedures](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te)
  - While in STEP THREE, as part of the [Resolve the Issue procedures](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te#Incidentresponsedocumentationforapplicationteams-Resolvetheissue), the Incident Commander works with OCTO PO to ensure that the Major Incident Management process has been triggered.

Send updates to notification audience:
- At major milestones during triage (e.g. a solution to resolve is determined, root causes have been ruled out)
- End of each day issue is unresolved
- When the issue is resolved

^: the Incident Commander will be a product manager or engineering manager for the respective user-facing application


#### P2
If incident is rated P2:
- Incident Commander^ - Send multi-channel notifications:
  - Slack message in [#mhv-health-portal-coordination](https://dsva.slack.com/archives/C04DRS3L9NV) channel and tag:
    - MHV API/Platform ([@Kyle MacMillan](https://dsva.slack.com/team/U0331QNU4BV), [@Greg Broz](https://dsva.slack.com/team/U03637N2BQ9), and [@Matt Bain](https://dsva.slack.com/team/U045AC9PL9L))
    - MHV OCTO POs ([@Marci](https://dsva.slack.com/team/U04K6QYPP6V), [@Kay](https://dsva.slack.com/team/U04K6QYPP6V), and [@Patrick](https://dsva.slack.com/team/U04K6QYPP6V)) and MHV OCTO Engineers (@octo-health-engineers group)
    - [@Greg Kirk](https://dsva.slack.com/team/U04DD9G1G02) and [@Sean Good](https://dsva.slack.com/team/U04JDKU8ZM5)
    - Horizon team ([@Bryan Ivie](https://dsva.slack.com/team/U02EA0XLRD1), [@Daniel Cloud](https://dsva.slack.com/team/U03CLNHG23S), [@Florence McCafferty](https://dsva.slack.com/team/U03HQRVPZD1), [@Cara Frissell](https://dsva.slack.com/team/U05123T8FT7), [@Sara Sterkenburg](https://dsva.slack.com/team/U045GGS6V25), and [@Lauren Ernest](https://dsva.slack.com/team/U01DKQVCEGY))
    - MHV user-facing team Product Managers ([@Bryan Ivie](https://dsva.slack.com/team/U02EA0XLRD1), [@David Koger](https://github.com/davidkoger), [@Michael Brodsky](https://dsva.slack.com/team/U08HKSYE285), or [@Stacy Blackwood](https://dsva.slack.com/archives/D098WLHCP4J))
    - Contact Center/Veteran Support ([@Chante](https://dsva.slack.com/team/UGWD2V2BB))
  - Email to same audience as Slack
    - OCTO forwards to respective OCC partners as necessary
      - OCC forwards to MHV business stakeholders (MHV Coordinators, EHRM, etc) as necessary
    - Contact Center/Veteran Support forwards to respective HRC and Help Desk partners as necessary
- Continue [incident response procedures](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te) which includes [resolution timeline](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te#Incidentresponsedocumentationforapplicationteams-Resolutiontimeline) and communication updates cadence

^: the Incident Commander will be a product manager or engineering manager for the respective user-facing application


#### P3 or P4
If incident is rated P3 or P4:
- Incident Commander^ - Update initial Slack message with priority level and tag:
  - MHV OCTO POs ([@Marci](https://dsva.slack.com/team/U04K6QYPP6V), [@Kay](https://dsva.slack.com/team/U04K6QYPP6V), and [@Patrick](https://dsva.slack.com/team/U04K6QYPP6V))
  - Horizon team ([@Bryan Ivie](https://dsva.slack.com/team/U02EA0XLRD1), [@Daniel Cloud](https://dsva.slack.com/team/U03CLNHG23S), [@Florence McCafferty](https://dsva.slack.com/team/U03HQRVPZD1), [@Cara Frissell](https://dsva.slack.com/team/U05123T8FT7), [@Sara Sterkenburg](https://dsva.slack.com/team/U045GGS6V25), and [@Lauren Ernest](https://dsva.slack.com/team/U01DKQVCEGY))
  - Respective MHV User-facing product team Product Manager ([@Bryan Ivie](https://dsva.slack.com/team/U02EA0XLRD1), [@David Koger](https://github.com/davidkoger), [@Michael Brodsky](https://dsva.slack.com/team/U08HKSYE285), or [@Stacy Blackwood](https://dsva.slack.com/archives/D098WLHCP4J)) for further prioritization
- Continue [incident response procedures](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te) which includes [resolution timeline](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te#Incidentresponsedocumentationforapplicationteams-Resolutiontimeline) and communication updates cadence

^: the Incident Commander will be a product manager or engineering manager for the respective user-facing application


#### VA.gov/VAHB Platform / Incidents Beyond MHV Scope
Many MHV user-facing products are part of the VA.gov/VAHB Platform ecosystem and may be tangentially impacted by incidents on the Platform (the platform itself or another team on the platform).
- The team will evaluate if the broader incident results in MHV user-facing impact
- If a MHV-specific impact is determined, team will work with OCTO POs on path forward for communication based on the use case


## References
- [Incident response documentation for application teams "Watchtower"](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te)
- [On-Call Overview](/oncall.md)


