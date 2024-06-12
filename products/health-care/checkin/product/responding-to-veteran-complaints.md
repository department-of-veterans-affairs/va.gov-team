# Responding to Application Issues

## Process for Veterans to Report an Application Issue
- Veteran contacts the VA help desk when they have an issue with the eCheck-in, Pre-Check-in, or stand-alone Travel applications
- Help desk uses the appropriate application's SNOW Knoweldge Article to determine how to escalate incident tickets
    - [Patient Check-in Knowledge Article](https://yourit.va.gov/va?sys_kb_id=4967ba681b1a59d04f6f5316624bcbbb&id=kb_article_view&sysparm_rank=3&sysparm_tsqueryId=2dbb7b091baad190005287b8624bcbcd)
    - [Pre-Check-in Knowledge Article](https://yourit.va.gov/kb_view.do?sys_kb_id=8c9bd58f1bcbc1d09641a867624bcba9&sysparm_rank=1&sysparm_tsqueryId=d4bae8c11b5b05541c29a867624bcbff)
    - [eCheck-in Knowledge Article](https://yourit.va.gov/kb_view.do?sys_kb_id=07548a9787478dd03502b889cebb3587&sysparm_rank=2&sysparm_tsqueryId=d4bae8c11b5b05541c29a867624bcbff)
    - Travel Knowledge Article TBD
- Help desk assists the Veteran in order to resolve the issue
- Help desk creates a SNOW Incident ticket and captures information from the Veteran if the issue cannot be resolved by the help desk
- Help desk assigns the SNOW Incident ticket to our SNOW assignment group 'eCheckInVetFacingApps'
- CIE On-call Production Support engineer responds to SNOW incidents that are assigned to our assignment group 'eCheckInVetFacingApps' per the [PCI API Tier 3 Production Support Team On-Call Monitoring Playbook](https://github.com/department-of-veterans-affairs/checkin-devops/blob/master/docs/PCI%20API%20Tier%203%20Team%20Playbook.md)
    - [All SNOW Tickets](https://yourit.va.gov/now/nav/ui/classic/params/target/task_list.do%3Fsysparm_query%3Dassignment_group%253D9c50fbc51b4f8d5065965318624bcbbf%26sysparm_first_row%3D1%26sysparm_view%3Dcatalog)
    - [Active Non Resolved SNOW tickets](https://yourit.va.gov/now/nav/ui/classic/params/target/task_list.do%3Fsysparm_view%3Dcatalog%26sysparm_first_row%3D1%26sysparm_query%3Dassignment_group%253D9c50fbc51b4f8d5065965318624bcbbf%255Eactive%253Dtrue%255Estate!%253D6%26sysparm_clear_stack%3Dtrue)
    - [CIE SNOW Dashboard](https://yourit.va.gov/now/nav/ui/classic/params/target/%24pa_dashboard.do%3Fsysparm_dashboard%3D8a988d141b707990e4f6cbf7624bcb7f)
    - [SNOW reports that appear on the dashboard](https://yourit.va.gov/now/nav/ui/classic/params/target/report_home.do%3Fjvar_selected_tab%3DmyReports)

## Process for VA Employees (e.g. engineers, training, OCTO) to Report an Application Issue
From time-to-time we are alerted internally to application issues that may or may not be causing a system down.

### System Down Issues
- VA Employee (or on-call Production Support engineer) reports a system down issue in [Slack channel 'check-in-production-support'](https://dsva.slack.com/archives/C02UP02HHGX)  
- CIE On-call Production Support engineer sees the issue and investigates per the [PCI API Tier 3 Production Support Team On-Call Monitoring Playbook](https://github.com/department-of-veterans-affairs/checkin-devops/blob/master/docs/PCI%20API%20Tier%203%20Team%20Playbook.md)
- CIE On-call Production Support engineer communicates status and resolution in the Slack thread
- Product Manager sends emails per [How to Send Patient Check-in System Down Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/system-down-notifications.md) 

### Non-System Down Issues
- VA Employee reports a non-system down issue in any related Slack channel, typically one of these
  - [#check-in-experience](https://dsva.slack.com/archives/C022AC2STBM)
  - [#check-in-experience-engineering](https://dsva.slack.com/archives/C02G6AB3ZRS)
  - [#check-in-production-support](https://dsva.slack.com/archives/C02UP02HHGX)
- CIE Engineers, UX, & Product discuss the issue in the Slack thread, including severity, occurence frequency, and priority
- CIE Product creates a ticket in GitHub for the issue and prioritizes it accordingly based on severity, occurrence frequency, and number of Veteran impacted
