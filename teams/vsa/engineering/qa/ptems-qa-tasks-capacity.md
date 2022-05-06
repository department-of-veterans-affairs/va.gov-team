# PTEMS-QA Capacity & Tasks

Currently, with only one PTEMS-QA resource shared across all PTEMS VA.gov Application Teams, capacity limitations preclude PTEMS-QA from handling all the QA testing concerns outlined by Platform.  However, with fewer teams to support than previous VSA contract, PTEMS-QA hopes to increase support-per-team.  \[See **[Shift-Left initiatives](#shift-left-initiatives)** below.\]

## Who should read this?

- Product Managers
- Front-end engineers

## Testing-types & assignments/deputizations

The matrix below illustrates the current reality of what PTEMS-QA can realistically perform, and what PTEMS VA.gov Application Teams are unavoidability "deputized" to perform themselves:

| QA Task | QA | App Teams |
| ------- | ------ | ----------------- |
| [Manual testing][manual-testing] [for Platform Staging Reviews] | :heavy_check_mark: | |
| Unit testing | | :heavy_check_mark: |
| [E2E testing][e2e-testing] (incl. [Regression][regression]) | | :heavy_check_mark: |
| Load testing | | :heavy_check_mark: |

This matrix will be updated if/when PTEMS-QA staffing increases.

## Shift-Left initiatives

Although earlier QA-involvment during Design & Build phases currently have to be lower-priority, you're encouraged to involve PTEMS-QA for the following development aspects:

- Design Intent \[Platform Collaboration touchpoint\] -- invite PTEMS-QA as Optional to your DI meetings w/ Platform
- E2E tests:
  - Add PTEMS-QA \[currently Tze-chiu Lei\] as Optional Reviewer in Pull Requests that have E2E-spec changes
  - Ping PTEMS-QA \[currently Tze-chiu Lei\] for advice and/or hands-on help

PTEMS-QA will make all reasonable efforts to accommodate your requests, as capacity permit.

[shift-left]: https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/vsa/engineering/qa/ptems-qa-tasks-capacity.md#shift-left-initiatives
[manual-testing]: manual-ui-testing-process.md
[e2e-testing]: ptems-qa-e2e-testing.md
[regression]: ptems-qa-regression.md
