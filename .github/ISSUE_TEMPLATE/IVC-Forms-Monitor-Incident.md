---
name: IVC Forms Monitor Incident
about: IVC Forms team template for tickets that result from monitoring
title: 'IVC Forms: <Date> Monitor Incident - <Description>'
labels: ivc-forms, monitoring
assignees: ''

---

Per [playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/ivc-forms-monitoring-playbook.md), opening ticket to track details of this [**LINK TO DD MONITOR ALERT IN SLACK**].
Slack discussion [**LINK TO SLACK DISCUSSION IF SEPARATE FROM ABOVE]


**Intake**
- [ ] PM (Bo) and DM (Andrea) have been notified
- [ ] PM and DM confirmation of ticket creation
- [ ] Incident ticket linked to sprint monitoring ticket [**LINK HERE TOO?]

**Investigation**
- [ ] Verify that vets-api is receiving submits from vets-website
- [ ] Verify that files are sent successfully to s3
- [ ] Verify that the callback API is available
- [ ] Determine whether the issue arose due to a deployment, either by the IVC Forms team or the PEGA team.
  - [ ] IVC
    - [ ] If root cause has been identified as an issue in vets-website or vets-api, notify PM and DM to determine next stpes with PO
  - [ ] PEGA
    - [ ] If root cause has been identified as an issue outside of vets-website and vets-api, work with the PM, DM, and PO to determine contacts and next steps.

**Resolution**
- [ ] Acknowledge monitoring alerts in slack
- [ ] IVC Forms engineering will provide updates on development and deployment of a solution and its status in each environment
- [ ] IVC Forms engineering will notify PM and DM when resolved
- [ ] IVC Forms engineering will monitor outstanding missing statuses and ensure they are cleared appropriately. No statuses should be deleted or cleared without agreement from PO and or PM
- [ ] If traffic to the site has been altered, PO or PM will determine when to return to previous levels.
