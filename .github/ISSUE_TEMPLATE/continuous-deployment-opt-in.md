---
name: Continuous Deployment Opt In
about: Continuous deployment opt in per app.
title: Continuous Deployment Opt In for <App>
labels: team-platform-release-tools
assignees: laineymajor, theodur

---

## General Information
- This is only eligible for apps on the allowlist ([apps without cross-app imports](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/cross-app-import-report)).
- Detailed developer [documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/continuous-deployment) can be found here.

## Continuous Deployment (If we do not hear from you by September 9, your application will be opted IN to continuous deployment)
App team has reviewed this ticket in full, and chooses to move forward as:
- [ ] OPTION 1: Part of **continuous deployment** and daily production deploy
- [ ] OPTION 2: NOT part of **continuous deployment**; will continue solely with the daily production deploy

**If you choose OPTION 2:** 
1. List the _specific_ reasons your team does not want to participate in CD in a comment below. 
2. PO must be tagged and made aware of decision
*_Release Tools Team will follow-up with you about this if you do not provide this information._

## Apps that are part of daily deploy (all VFS apps)
_Beginning September 6, 2022 (unless otherwise notified via slack)_
- There will no longer be a 1-hour delay to daily production deploy. There will no longer be an advance Slack message about the daily production deploy 1 hour in prior to said deploy; the deployment status notification will still occur.
- Code cutoff time has been changed from 2:00PM ET to 3:00PM ET as the 60min deployment wait will be removed.
- Allowlist apps opting out of CD may not have access to certain new features.

## Apps that utilize Continuous Deployment
**MERGED TO MAIN = LIVE TO PRODUCTION**
- Your app's code will be deployed to production upon the completion of the CI process in the main branch
- If your team needs to hold something back from production, you will need to utilize feature toggles. We also recommend using feature branches to release larger features together.

**WATCH CI. RE-RUN ERRORS IF NECESSARY.**
- You will need to keep eyes on your own CI run & deployment because your team will be taking ownership of the CI/CD run. Your team will need to re-run your own failures from the GitHub UI in order to fix them (with assistance from support if needed).

**FEWER/NO OUT-OF-BAND DEPLOYMENTS**
- If your team needs to roll something back or fix a production bug, the out-of-band deployment process will no longer be required. Your team will need to create a new PR. *New PRs _should_ go through the process faster as we will only be running a smaller amount of tests, then it’s deployed.
