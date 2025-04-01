# Engineering Overview

## Dashboards
-  [686/674 Backup Submission Report](https://vagov.ddog-gov.com/dashboard/66t-jtz-guk/686c-674-backup-submission-reporting?fromUser=false&refresh_mode=sliding&from_ts=1742841362400&to_ts=1742844962400&live=true)
-  [686 Only](https://vagov.ddog-gov.com/dashboard/cmg-5ss-r6d/benefits-dependents-686-only?fromUser=false&refresh_mode=sliding&from_ts=1742841362993&to_ts=1742844962993&live=true)
-  [Failure Logs](https://vagov.ddog-gov.com/dashboard/rsa-yxe-we2/benefits-dependents-686-submission-failure-logs?fromUser=false&refresh_mode=sliding&from_ts=1742758563851&to_ts=1742844963851&live=true)
-  [Success/Failure Dashboard](https://vagov.ddog-gov.com/dashboard/vad-969-xqc/benefits-dependents-686674?fromUser=false&refresh_mode=sliding&from_ts=1742758564342&to_ts=1742844964342&live=true)
-  [VA.gov off-ramp for manual processing](https://vagov.ddog-gov.com/logs?query=%40payload.txt%3AClaim%5C%20set%5C%20to%5C%20manual%5C%20by%2A%20&agg_m=count&agg_m_source=base&agg_q=%40payload.txt&agg_q_source=base&agg_t=count&cols=host%2Cservice%2C%40payload.txt&fromUser=true&messageDisplay=inline&refresh_mode=paused&storage=online_archives&stream_sort=desc&top_n=10&top_o=top&viz=toplist&x_missing=true&from_ts=1704088800000&to_ts=1726080480000&live=false)

## Technical Diagrams
- https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727757799534/c7c5f5a6dc1b8f451ecab5f02afa70a9325b93c8?sender=u070fbdc641c5ca111da83793
- Dependency Claim Submission Flow Overview
    * https://docs.google.com/document/d/16lfdICIMRbCTlaY4qM6nXJldpAsWBk4-l1qwL--VNCQ/edit#heading=h.guuvbv6eus3

## Endpoints
- [Documentation](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Dependents%20Management/Documentation/BGS%20686C-674%20Documentation.docx?d=w1707457645dc4eb191a0ea89fb73453b&csf=1&web=1&e=dvkS2w) (sharepoint) of calls made for 686C and 674 claims from vets-api through the bgs-ext repository. 

## Scripts for debugging
- https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/benefits/scripts/dependents

## Code Repository
- [Vets-API](https://github.com/department-of-veterans-affairs/vets-api)
- [Vets-Website](https://github.com/department-of-veterans-affairs/vets-website)

## Playbooks
- [Monitoring Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/engineering/686-674_Monitoring_Playbook.md)
- [Security Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/engineering/686-674_Playbook_Security.md)

## Zero Silent Failures Findings
- https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/findings/dependents_21-686c/checklist.md
