# VA Sitewide Facilities Team Definition of Done

Definition of Done
Sitewide Facilities Team
Created 2/3/2023

“Definition of Done” is to be used as a checklist for every user story (“issue”, “ticket”) in order to call the work “done”. Note that this is a living document and as such will be reviewed and revised at least quarterly.

**For Every User Story:**
- [ ] All Acceptance Criteria are met
- [ ] Code is reviewed by at least two developers (detailed with more than LGTM)
- [ ] Unit tests completed if required
- [ ] QA steps completed/pass
- [ ] QA steps should include related manual tests to check for regressions - check that non special work continues to work
- [ ] QA on production
- [ ] If new tests are required to support the change, tests are written and pass
- [ ] All existing tests pass
- [ ] New code is written in a way that's easily tested and/or has new tests added
- [ ] Pull Request follows "Conventional Commits" and "Conventional Comments" format. Commit bundling when possible
- [ ] Documentation is created or updated
- [ ] If needed, new user story is created

**For User-experience stories:**
- [ ] UX requirements are met
- [ ] Accessibility reviewed
- [ ] UX review (where UX changes are made)

**Further thought for discussion:**
- [ ] If the change is not dependent on external teams - deployed to production
- [ ] If the change IS dependent on external teams a separate deployment issue has been generated
- [ ] What is our process for closing a ticket or calling it done, when dependent on other teams?
- [ ] No known defects
