# 21-686c and 21-674 Playbook

NOTE: 
- links to complete data for each of the sections below is welcome and encouraged.
- This document serves the requirement of an incident response procedure for your product. This document should be iterated upon as changes are made to the product.

## Product Description ([product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/README.md))
The online 686c form allows Veterans to add or remove dependents from their VA disability or pension benefits. The online form flow is integrated with the 21-674 form (Request for Approval of School Attendance), which is used when claiming benefits for a Veteran's child who is at least 18 years old, but under 23, and attending school.
- [About VA Form 21-686c (Application Request to Add and/or Remove Dependents)](https://www.va.gov/find-forms/about-form-21-686c/) 
- [About VA Form 21-674 (Request for Approval of School Attendance)](https://www.va.gov/find-forms/about-form-21-674/)
- Launched on VA.gov: May 2018
- 686c annual submission volume: 342,750 (2024)
- 674 annual submission volume: 73,300 (2024)

## Routes to code
- [Vets-API](https://github.com/department-of-veterans-affairs/vets-api)
- [Vets-Website](https://github.com/department-of-veterans-affairs/vets-website)

## Known Issues
- PDF page size error [#903833](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90383) and [#91831](https://github.com/department-of-veterans-affairs/va.gov-team/issues/91831)
- The `lib/bgs/form686c.rb` block is only logging a warning when it should be raising and error [#94467](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94467)
- List of known errors that need to be investigated [#101120](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101120)
- Metrics and logging need to be added to SubmitDependentsPdfJob VBMS uploads [#100911](https://github.com/department-of-veterans-affairs/va.gov-team/issues/100911)
- Add metrics and monitors to failure points [#100943](https://github.com/department-of-veterans-affairs/va.gov-team/issues/100943)
- Unique contrant person error [#67527](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67527)
- Remove retries and exhaustion handler from 'SubmitDependentsPDFJob' [#100960](https://github.com/department-of-veterans-affairs/va.gov-team/issues/100960)
- Spouse ssn and file number do not match [#64137](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64137) and [#64340](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64340)
- Veteran ssn and file number do not match [#64138](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64138) and [#64339](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64339)

## Contacts

### Team Members:
- DSVA Product Lead: Sanja Bajovic | sanja.bajovic2@va.gov | sanjabaj2 (github)
- Team Product Manager: Laura Steele | laura.steele1@va.gov / laura.steele@coforma.io | steele-lm (github)
- Team Engineering Lead: Matthew Knight | matthew.knight3@va.gov / matt.knight@coforma.io | mjknight50 (github)

### Outage Contacts:
- DSVA Product Lead: Sanja Bajovic | sanja.bajovic2@va.gov | sanjabaj2 (github)
- Team Product Manager: Laura Steele | laura.steele1@va.gov / laura.steele@coforma.io | steele-lm (github)
- Team Engineering Lead: Matthew Knight | matthew.knight3@va.gov / matt.knight@coforma.io | mjknight50 (github)
- pagerduty email/activation call (if available)

## Troubleshooting

### Errors and Metrics
- Submission flows: [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1697740873991/4be42fcadc013be6b3d65bd620522ee68e8e0faf?wid=0-1708962483237) and [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727757799534/c7c5f5a6dc1b8f451ecab5f02afa70a9325b93c8)
- Code Repository: [Vets-API](https://github.com/department-of-veterans-affairs/vets-api) and [Vets-Website](https://github.com/department-of-veterans-affairs/vets-website)
- [DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/vad-969-xqc/benefits-dependents-686674?fromUser=false&refresh_mode=sliding&from_ts=1729703196402&to_ts=1737479196402&live=true)
- [DataDog Monitors](https://vagov.ddog-gov.com/monitors/manage?q=dependent&order=desc)
- [Backup submission reporting](https://vagov.ddog-gov.com/dashboard/66t-jtz-guk/686c-674-backup-submission-reporting?fromUser=false&refresh_mode=sliding&from_ts=1736874419874&to_ts=1737479219874&live=true)
- [Count of claims off-ramped for manual processing](https://vagov.ddog-gov.com/logs?query=%40payload.txt%3AClaim%5C%20set%5C%20to%5C%20manual%5C%20by%2A&agg_m=count&agg_m_source=base&agg_q=%40payload.txt&agg_q_source=base&agg_t=count&cols=host%2Cservice%2C%40payload.txt&fromUser=true&messageDisplay=inline&refresh_mode=paused&storage=flex_tier&stream_sort=desc&top_n=10&top_o=top&viz=toplist&x_missing=true&from_ts=1704088800000&to_ts=1726080480000&live=false)
- [674 Zero Silent Failures Checklist](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/findings/dependents_21-674/checklist.md)
- [686 Zero Silent Failures Checklist](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/findings/dependents_21-686c/checklist.md)

### Issue investigation steps
- Describe common issues that may arise and explain the basic troubleshooting steps or code to modify if these issues arise.

### Flipper Features and Rollback
- Is there a flipper feature? If yes, describe here and explain when to modify the flipper and to what exactly.
- At what point, if applicable, should your code be rolled back, to what state? (optional)

## Security
descibe any security concerns the responders should be aware, for example: Does your product have PII? Do you log senstive information that needs to be handled in a particular manner? Does your product have a known security vulnerability that has been accepted by leadership? etc.
