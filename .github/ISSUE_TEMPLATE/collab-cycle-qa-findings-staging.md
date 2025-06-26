---
name: QA Collab Cycle Findings for Staging
about: Staging findings template for Collaboration Cycle reviewers to provide QA findings
  to VFS teams
title: QA Standards - VFS Team - VFS Product
labels: collab-cycle-feedback, QA, qa-standards, Staging
assignees: ''

---

### General Information

#### VFS team, product, feature name

#### Point of Contact/Reviewers

QA -

---
### [QA Standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards) 
**Note**: all standards are launch-blocking.
#### Regression Test Plan 
- [ ] Standard has been met
- [ ] Standard has not been met
##### Explanation of failure to meet standard (if applicable): #####
#### Test Plan
- [ ] Standard has been met
- [ ] Standard has not been met
##### Explanation of failure to meet standard (if applicable): #####
#### Traceability Reports 
- [ ] Standard has been met
- [ ] Standard has not been met
##### Explanation of failure to meet standard (if applicable): #####
#### E2E Test Participation
- [ ] Standard has been met
- [ ] Standard has not been met
##### Explanation of failure to meet standard (if applicable): #####
#### Unit Test Coverage
- Statements %:
- Branches %:
- Functions %:
- Lines %:

- [ ] Standard has been met
- [ ] Standard has not been met
##### Explanation of failure to meet standard (if applicable): #####
#### Endpoint Monitoring (Completed Playbook)
- [ ] Standard has been met
- [ ] Standard has not been met
##### Explanation of failure to meet standard (if applicable): #####
#### Logging Silent Failures
- [ ] Standard has been met
- [ ] Standard has not been met
##### Explanation of failure to meet standard (if applicable): #####
---

### Next Steps for the VFS team

- [ ] **Questions?** For the most timely response, comment on Slack in your team channel tagging `@platform-governance-team-members` with any questions or to get help validating the issue.
- [ ] **Close the ticket** when your Product Owner determines that you have sufficiently met the QA Standards.

### Platform directions
- Update "Issue Title" to be of the form "QA Standards - VFS Team - VFS Product"
- Add the VFS team, product name, and feature name
- Add your name, practice area, and GH handle under Point of Contact/Reviewers
- Complete the QA Standards section, making sure to include an "Explanation of failure to meet standard" for every Standard the product does not meet.
- Add epic's milestone
- Add assignees: 
  - VFS PM
- Add labels:
  - VFS team label
  - VFS product label
  - launch-blocking label if the product has failed to meet a required QA Standard
  - for every standard violated, add the corresponding label, e.g. `QA1` for a failing Regression Test Plan.
