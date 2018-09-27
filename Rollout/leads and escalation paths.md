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
- Engineering: Nick (hydra), Eugene (draongs), Kam (griffin) -> James
- DevOps: Wyatt -> James
- Content: Beth -> Jennifer Lee?
- Design: Amy -> Andy?

### Oct 9 - Oct 15

All members on these paths agree to be responsive during reasonable business hours (M - F , 9 AM ET - 6 PM ET) via the email -> slack -> phone escalation path as needed to support usability testing and demos.

### Oct 16 - Nov 4

All members on these paths agree to be responsive during a broader range of hours (7 days a week, 9 AM ET - 9 PM ET) via the email -> slack -> phone escalation path as needed to support urgent fixes during this unmoderated site usage time.

**Please use good judgement in determining whether something is truly "urgent" and needs escalation outside of normal working hours.**

### Nov 5 - 9

The following members will be on site at NSOC in West Virginia:


The following members are invited to be at the in-person Team Space "war room" during working hours, at 811 Vermont.

[ ] 

All members on these paths agree to be responsive at all hours via the email -> slack -> phone escalation path as needed to support urgent pre-launch, launch, and post-launch work.

**Please use good judgement in determining whether something is truly "urgent" and needs escalation outside of normal working hours.**

** Go No Go **

#### Nov 4:
- Create Launch Ops channel in slack
- Post ROEs for this channel in the channel

### Nov 5:
- Test Launch Ops channel
- Is this an incident, do we need to advocate for rollback, triage
- 

**OIT / NSOC meeting**
- Do not push layout changes after this
- Do not adjust for lower traffic, in case we need to deploy config update and pipe back to you


#### Nov 7:

**10 AM: Go / No Go**
- 5,000 users in beta
- Representative of 85% diverse users (across device types, login types, account types, tool types) have interacted with the site, and there are no unacceptable trends in Google Analytics, performance data, call center reports, user feedback submissions, or social media buzz.
- 100% of www.va.gov traffic is flowing to production VAEC
- AWS is ready for exepected traffic
- 


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

Ad Hoc will have drafted text ready for Chris to posts send to [who] email out that we're going live

**X PM ET: Ops Engineer merges PR**
- James, if not then Wyatt, if not Wyatt, then Ed.

**X PM ET: Ops Engineer flips switch for teamsite injections**
- James, if not then Wyatt, if not Wyatt, then Ed.

**X PM ET: Monitor**
Thresholds for rollback: 
- Spike in errors above baseline
- Latency > X seconds sustained for > X seconds for > X of traffic
- Rachael updates Chris w/template

**Crisis plan: rollback**
- Get email confirmation from Chris, give OIT a heads up (Josh Tuscher), deploy configuration update to revert back
- Rachael updates Chris w/template

**Crisis plan: rollback fails, put up a maintenance page**
- 503 default
- Rachael updates Chris w/template

**Monitor**
- Everyone's back on the phone until it's resolved
- Rachael updates Chris w/template

** No crisis, success!**
- 
