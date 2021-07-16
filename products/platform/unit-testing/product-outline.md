# Unit Testing (Frontend) - Product Outline

## Overview
Unit tests test a single part of implementation in code (a unit). All FE apps on VA.gov should have unit tests (VSP's [unit testing guidance](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-unit-test/) is that tests cover at least 75% of code paths).

## Problem Statement
[From 2020] VSP has limited guidance on best practices for unit tests, and does not currently report on test coverage. We know that unit tests are a pain point (because as of Q4 2020 they keep failing and causing builds to fail), but we have a very limited aggregate view into how VFS teams are writing them. 

How might we improve the stability and coverage of `vets-website` unit tests while maintaining VFS team automony? 

## Personas
- VFS engineers
- VSP engineers

## Measuring Success

### Key Performance Indicators (KPIs)
* Average percent unit test coverage of VFSs
* Rate of unit test failure in master branch _(unit tests that fail in master are assumed to be flaky/intermittently failing because it is assumed that they passed in a PR)_

#### Baseline KPI Values
* Average percent unit test coverage of VFSs
   * _Unknown, measurement being implemented as part of [2021 initiative](https://app.zenhub.com/workspaces/vsp---frontend-tools-5fc9325744944e0015ed1861/issues/department-of-veterans-affairs/va.gov-team/16716)_
* Rate of unit test failure in master branch [spreadsheet for manual data collection](https://docs.google.com/spreadsheets/d/1ygkhUItmLr9KtNIVLutpvLznQoKqWXjFbRltnxTWeGA/edit#gid=0)
   * March 17 - April 15 2021: 59 master builds had failed unit tests = 15% failure rate
   * May 18 - June 22 2021 (after Platform changes implemented as part of initiative work): 21 master builds had failed unit tests = 5% failure rate

---

## Assumptions
- VFS teams should be responsible for unit testing their own apps

## Solution Approach

See [Unit test overview](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-unit-test/) in FE documentation for a description of the current solution approach.

2021 unit testing initiative is summarized in [this demo presentation](https://docs.google.com/presentation/d/1onkyabt0B04WnwUEPf5g9IrgXKxocoQPlNWaAV4Tk34/edit#slide=id.p).

--- 

## Launch Dates
- *Launch Date*: 2021 unit test initiative completed in July

---

## Reference Material

_Link to the following materials as relevant._

- VFS-facing Product README (in `/platform`)
- [Unit test coverage report](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard)

### Communications

<details>

- Team Name: Platform FE Tools
- GitHub Label: tools-fe
- Slack channel: #vsp-tools-fe

</details>
