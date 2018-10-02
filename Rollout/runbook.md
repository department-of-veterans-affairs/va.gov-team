👑 = ultimate decision maker

# Go / No Go Attendees

- 👑 Product Lead
  - Chris Johnston
- Execs
  - Charles Worthington
  - Andrew Hughey
  - Marcy Jacobs
- Product
  - David Bao
  - Steve Kovaks
- Engineering
  - James Kassemi
  - Alex Loehr
- DevOps
  - Wyatt Walter
- Design + Research
  - Lauren Alexanderson
  - Andy Lewendowski
  - Jeff Barnes
- Content
  - Melissa Schaff
- Implementation
  - Rachael Roueché
  - Mina Farzad
- Marketing and Communications
  - Clare Martorana
  - Mandi Lindner
- Analytics
  - Tony Whittaker
- **NSOC: ?**
- **EVSS: ?**
- **EWIS: ?**
- **ID.me: ?**
- **OIT: ?**
- **Call Center: ?**
- **MHV: ?**
- **ID.me: ?**
- **TeamSite: Josh Tuscher?**
- **Foresee: ?**
- **Medallia: ?**
- **AWS technical manager: ?**

# "On Call" escalation contacts

### Who to contact if you see a problem:

"On call" means available to respond via cell phone if there's an urgent issue that needs addressing for usability testing or demo'ing reasons.

- Product/implementation/general issues: Rachael Roueche (report out or hand off to Chris Johnston)
- Engineering and DevOps issues: James Kassemi (report out to Alex Loehr, Chris Johnston)
- Design and IA issues: Rachael Roueche (report out to Chris Johnston, Andy Lewendowski, Jeff Barnes)
- Content issues: Rachael Roueche (report out to Melissa Schaff, Chris Johnston)
- Marketing and communications issues: Rachael Roueche (hand off to Clare Martorana, Mandi Lindner, Chris Johnston)
- **NSOC: ?**
- **EWIS: ?**
- **ID.me: ?**
- **OIT: ?**
- **Call Center: ?**
- **MHV: ?**
- **ID.me: ?**
- **TeamSite: Josh Tuscher?**
- **Foresee: ?**
- **Medallia: ?**
- **AWS technical manager: ?**
- **EVSS: ?**

### Who the escalation contacts can work with for implementation in an emergency:

General: Mina Farzad > Rachael Roueche > Elizabeth Lewis

Ops: Wyatt Walter > Craig Butler > Ryan Watson

Sitewide Engineering: Nick Sullivan > Rob Wilkinson

Header/footer injections: Ben Shyong > Nick Sullivan

API: Patrick Vinograd > Ed Paget

Content: Danielle Thierry > Beth Potts

Design: ?

# Rules of Engagement for Escalation during Oct 9 - Nov 9

**Please use good judgement in determining whether something is truly an emergency and needs escalation outside of normal working hours.**

### Oct 9 - Oct 12: "Critical Feature Complete"

On call escalation contacts will be responsive during reasonable business hours (M - F , 9 AM ET - 6 PM ET) via cell phone to support emergencies.

Alex, Paul, Curtis, James travel to NSOC in WV to meet team and establish working relationships.

### Oct 15 - 17: Ad Hoc Retreat

On call escalation contacts may not be fully available due to Ad Hoc retreat and the full day DSVA workshops. Call Rachael Roueche if there is a true emergency.

### Oct 18 - Nov 4: Final Stretch

On call escalation contacts will be responsive during a broader range of hours (7 days a week, 9 AM ET - 9 PM ET) via the cell phone to support emergencies.

### Nov 5 - 9: Launch Window

On call escalation contacts will be responsive at all hours via cell phone as needed to support emergency pre-launch, launch, and post-launch needs.

The following members will be on site at NSOC in West Virginia:
- [ ] Curtis?

The following members will be in-person ***Location with good internet TBD***" from 9am to 7pm.

- Chris Johnston
- Alex Loehr ?
- James Kassemi
- Paul Smith  (if not at NSOC)
- Curtis Mejeur (if not at NSOC)
- Elizabeth Lewis
- Rachael Roueche
- ***Others TBD***

### Nov 10 - onward (if launch is stable)

Back to standard on call coverage via pager duty

---

# The Plays

*thresholds and plays still tbd for these scenarios: major tweet, hack, errors in teamsite injections, horrible user feedback,
call center totally overwhelmed*

## Traffic migration

### Happy Path

1. Start call with NSOC
1. Wyatt routes 5% of production www.va.gov traffic through production VAEC
1. After 15 min, if error rate < 99.9% and 90th percentile latency < 2.5 seconds, move to next step
1. Wyatt routes 15% of production www.va.gov traffic through production VAEC
1. After 10 minutes end the call with NSOC
1. Brian disseminates Load Testing Status Report
1. After 24 hours, if error rate < 99.9% and 90th percentile latency < 2.5 seconds, move to next step
1. Wyatt routes 50% of production www.va.gov traffic through production VAEC
1. Brian disseminates Load Testing Status Report
1. After the weekend, if error rate < 99.9% and 90th percentile latency < 2.5 seconds 
1. Wyatt routes 100% of production www.va.gov traffic through production VAEC
1. Brian disseminates Load Testing Status Report
1. Continue if error rate < 99.9% and 90th percentile latency < 2.5 seconds continuously

### Error rate > 99.9%

***Work in progress - to be defined by Oct 4***

### 90th percentile latency > 2.5 seconds

***Work in progress - to be defined by Oct 4***

## Load Testing
Load testing will focus on local HTML assets and larger local assets (images, css, javascript), as well as proxied HTML assets, and lager proxied assets (images, css, javascript).

***Details of the play in progress - to be defined by Oct 4***

### Happy Path

### Crisis plan: 

- Load test 5 times steady state production traffic against staging.va.gov
- Load test 5 times steady state production traffic (if NSOC and OIT says OK) against preview.va.gov


## Launch Crises

### Rollback

1. Certain criteria/thresholds are met (***to be defined by Nov 5)***, for example: 
  - Spike in errors above baseline (define baseline based on historical log)
  - Latency > X seconds sustained for > X seconds for > X of traffic

2. On call party informs Rachael and James
3. Rachael updates Chris w/Launch Status Report including instructions for communicating decision (***template to defined by Nov 5)***
3. Chris makes decision to rollback based on data in the Launch Report
4. Chris disseminates decision via Slack and email (***recipients TBD, but must at least include OIT since traffic will be reverted to them***), and calls James
5. James coordinates with on call party
6. On call party deploys configuration update to revert back, and monitors grafana dashboards
7. Rachael updates Chris (***and OIT and other stakeholders?***) w/Launch Status Report
8. All parties stay on the joinme line until it's resolved.
9. Rachael updates Chris (***and OIT and other stakeholders?***) w/Launch Status Report

If not resolved...

### Rollback fails, put up a maintenance page

1. Certain criteria/thresholds are met (***to be defined by Nov 5)*** 
2. On call party informs Rachael and James
3. Rachael updates Chris w/Launch Status Report including instructions for communicating decision (***template to dfined by Nov 5)***
3. Chris makes decision to put up a maintenance page

4. Chris disseminates decision via Slack and email (***recipients TBD***), and calls James

5. James coordinates with on call party

6. On call party deploys maintenance page (***issue in progress for developing this page and process***)

7. Rachael updates Chris (***and OIT and other stakeholders?***) w/Launch Status Report

8. All parties stay on the joinme line until it's resolved.

9. Rachael updates Chris (***and OIT and other stakeholders?***) w/Launch Status Report

If not resolved...

## Maintenance page fails, revert to old EWIS configuration 
This constitutes a _full_ revert. Moving the www.va.gov traffic that we acquire on Oct 4 off of our servers and back to the configuration < Oct 4.

1. Certain criteria/thresholds are met (***to be defined by Nov 5)***

2. On call party informs Rachael and James

3. Rachael updates Chris w/Launch Status Report including instructions for communicating decision (***template to dfined by Nov 5)***

3. Chris makes decision to revert to old EWIS configuration

4. Chris disseminates decision via Slack and email (***recipients TBD***), and calls James

5. James coordinates with DevOps On Call party and NSOC Gateway Ops to roll back traffic from production VAEC

6. DevOps On Call party and NSOC Gateway Ops roll back traffic from production VAEC

7. Rachael updates Chris (***and OIT and other stakeholders?***) w/Launch Status Report

8. All parties stay on the joinme line until it's resolved

9. Rachael updates Chris (***and OIT and other stakeholders?***) w/Launch Status Report


# Deployment Change Times post-launch

| Type | Time to Deploy | Overview |
| --- | --- | --- |
| Content Fix | <5m | Change to vagov-content and merge to master |
| Downtime Notification | ~5m | PagerDuty maintenance window update, with 5m cache period |
| Frontend Application Rebuild / Deploy | ~45m | vets-website PR test, master test, build, release, deploy - injection script logic updates |
| Frontend Application Revert | ~4m | vets-website deploy |
| Backend Application Rebuild / Deploy | ~39m | vets-api PR test, master test, build, release, deploy |
| Backend Application Revert | ~5m | vets-api deploy |
| Reverse Proxy Update | 3m | |
| Reverse Proxy Rebuild / Deploy | 16m | |
| Forward Proxy Rebuild / Deploy | 5m | |

