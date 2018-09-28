👑 = ultimate decision maker

## Pause / Pivot / Continue Discussion Group

- 👑 Chris Johnston: Product Owner
- Engineering: James Kassemi, Alex Loer
- Design + Research: Lauren Alexanderson, Andy Lewendowski, Jeff Barnes
- Content: Melissa Schaff
- Product: Andrew Hughey, Marcy Jacobs
- Implementation: Rachael Roueché, Mina Farzad
- Marketing and Communications: Clare Martorana, Mandi Lindner

## "On Call" escalation paths

"On call" means available to respond via email -> slack -> phone if there's an urgent issue that needs addressing for usability testing or demo'ing reasons.

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
- **AWS technical manager: ?**
- Overall Implementation: Mina -> Rachael -> Chris
- Engineering: Nick (hydra), Eugene (dragons), Kam (griffin) -> James
- DevOps: Wyatt -> James
- Content: Beth -> Jennifer Lee?
- Design: Amy -> Andy?

### Oct 9 - Oct 15

All members on these paths agree to be responsive during reasonable business hours (M - F , 9 AM ET - 6 PM ET) via the email -> slack -> phone escalation path as needed to support usability testing and demos.

Alex, Paul, Curtis, James travel to NSOC in WV to meet team and establish working relationships.

### Oct 16 - Nov 4

All members on these paths agree to be responsive during a broader range of hours (7 days a week, 9 AM ET - 9 PM ET) via the email -> slack -> phone escalation path as needed to support urgent fixes during this unmoderated site usage time.

- [ ] NLT Nov 1, Chris Gansen (lead ops engineer for healthcare.gov) reviews:
   - [ ] Testing posture
   - [ ] Monitoring posture
   - [ ] Runbook
   - [ ] Incident Management Plan
   - [ ] Launch tik-tok
- [ ] Ops Readiness Report (Chris G.)

**Please use good judgement in determining whether something is truly "urgent" and needs escalation outside of normal working hours.**

### Nov 5 - 9

The following members will be on site at NSOC in West Virginia:
- [ ] Curtis?

The following members will be in the in-person Team Space "war room ***Need Room Assignment***" from 6am to 10pm, at 811 Vermont.

- [ ] Chris
- [ ] James
- [ ] Paul (escort needed)
- [ ] Elizabeth
- [ ] Rachael
- [ ] Larry (escort needed)
- [ ] Curtis (escort needed)

All members on these paths agree to be responsive at all hours via the email -> slack -> phone escalation path as needed to support urgent pre-launch, launch, and post-launch work.

- Pentest completed by Demian Ginther

**Please use good judgement in determining whether something is truly "urgent" and needs escalation outside of normal working hours.**

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
- Engineering: James Kassemi, Alex Loer
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

