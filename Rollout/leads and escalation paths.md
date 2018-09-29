👑 = ultimate decision maker

## Go / No Go Group

- 👑 Product Lead
  - Chris Johnston
- Product
  - Andrew Hughey
  - Marcy Jacobs
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
  - Rachael Roueché (703 489 0705, rachael.roueche@adhocteam.us)
  - Mina Farzad
- Marketing and Communications
  - Clare Martorana
  - Mandi Lindner
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

## "On Call" escalation contacts

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

General: Mina Farzad

Ops: Wyatt Walter > Craig Butler > Ryan Watson

Sitewide Engineering: Nick Sullivan > Rob Wilkinson

Header/footer injections: Ben Shyong > Nick Sullivan

API: Patrick Vinograd > Ed Paget

Content: Danielle Thierry > ?

Design: ?

## Rules of Engagement for Escalation during Oct 9 - Nov 9

**Please use good judgement in determining whether something is truly an emergency and needs escalation outside of normal working hours.**

### Oct 9 - Oct 12: "Critical Feature Complete"

On call escalation contacts will be responsive during reasonable business hours (M - F , 9 AM ET - 6 PM ET) via cell phone to support emergencies.

Alex, Paul, Curtis, James travel to NSOC in WV to meet team and establish working relationships.

### Oct 15 - 17

On call escalation contacts may not be fully available due to Ad Hoc retreat and the full day DSVA workshops. Call Rachael Roueche if there is a true emergency.

### Oct 18 - Nov 4

On call escalation contacts will be responsive during a broader range of hours (7 days a week, 9 AM ET - 9 PM ET) via the cell phone to support emergencies.

### Nov 5 - 9

On call escalation contacts will be responsive at all hours via cell phone as needed to support emergency pre-launch, launch, and post-launch needs.

The following members will be on site at NSOC in West Virginia:
- [ ] Curtis?

The following members will be in-person ***Location with good internet TBD***" from 9am to 10pm.

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

Move to "launch checklist"

** Go No Go **

### Assets Available
Beginning on Nov 4, the following assest must be available:
- Join.me (minimum 3):
- 

### Nov 4:
- Create #wbc-launch-ops channel in slack

Members:

   - [ ] Chris J
   - [ ] James
   - [ ] Wyatt
   - [ ] Others?
   
- Post ROEs for this channel in the channel

### Nov 5:
- Test Launch Ops channel by posting @here and @channel
- Post templates and pin to channel
- Have everyone respond to a posting
- Is this an incident, do we need to advocate for rollback, triage
- Establish criteria and disseminate to team on what channel is used for
- Gameday, Gameday, Gameday
- [ ] Prep for gameday
- [ ] Run scenario
- [ ] Outbrief

**OIT / NSOC meeting**
- Do not push layout changes after this
- Do not adjust for lower traffic, in case we need to deploy config update and pipe back to you
- Do not change anything without talking to the new va.gov team


#### Nov 7:

**10 AM: Go / No Go**

In order to create the smoothest launch environment, it is beneficial to establish clear launch criteria early.  This allows the team to the most simple decisions possible.  We propose the follow critiera must be met in order to launch:
- 5,000 users in beta
- Representative of 85% diverse users (across browser types, login types, account types, tool types) have interacted with the site, and there are no unacceptable trends in Google Analytics, performance data, call center reports, user feedback submissions, or social media buzz.
- 100% of www.va.gov traffic is flowing to production VAEC
- AWS is ready for exepected traffic


- 👑 Chris Johnston: Product Owner
- Engineering: James Kassemi, Alex Loehr
- Design + Research: Lauren Alexanderson, Andy Lewendowski, Jeff Barnes
- Content: Melissa Schaff
- Product: Andrew Hughey, Marcy Jacobs
- Implementation: Rachael Roueché, Mina Farzad
- Marketing and Communications: Clare Martorana, Mandi Lindner
- **NSOC**
- **ID.me rep**
- **OIT rep: ?**
- **Help Desk: ?**
- **OIT: ?**
- **MHV: ?**
- **ID.me: ?**
- **NSOC: ?**
- **TeamSite: Josh Tuscher?**
- **Foresee: ?**
- **Medallia: ?**
- **AWS technical manager: probably Sean, who else?**

**11 AM ET chris sends decision doc**

Ad Hoc will have drafted text ready for Chris to send to [who] email out that we're going live

**X PM ET: Ops Engineer merges PR**
- James, if not then Wyatt, if not Wyatt, then Ed.
- Engineer navigates to XXXXXX.
- James approves [preloaded PR name]
- James merges [preloaded PR name]

**X PM ET: Ops Engineer flips switch for teamsite injections**
- James, if not then Wyatt, if not Wyatt, then Ed.
- Engineer does XXXXX

**X PM ET: Monitor**
Thresholds for rollback: 
- Spike in errors above baseline (define baseline based on historical log)
- Latency > X seconds sustained for > X seconds for > X of traffic
- Rachael updates Chris w/[define comms template]

**Crisis plan: rollback**
- Get email confirmation from Chris, give OIT a heads up (Josh Tuscher), deploy configuration update to revert back
- Rachael updates Chris w/template
- Update OIT (teamsite) team on status

**Crisis plan: rollback fails, put up a maintenance page**
- 503 default
- Need improved failure page
- Rachael updates Chris w/template

**Monitor**
- Everyone's back on the phone until it's resolved
- Rachael updates Chris w/template

** No crisis, success!**

## Nov 8: 

Automated vets-website and vets-api production builds are released on normal schedule to www.va.gov and api.va.gov.

## Deployment Change Times

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

