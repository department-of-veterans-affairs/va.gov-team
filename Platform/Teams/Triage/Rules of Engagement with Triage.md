# Preface
This document will help all team members working on VA.gov understand when it is appropriate to engage the Triage team for support and provide relevant information to assist in routing reported issues to other appropriate teams.  Because of the limited number of resources on Triage, they cannot be a "catch-all" for every issue reported on the platform and every application.  Please read the following document carefully in order to determine the appropriate path for your incident.

## Is this is a Severity 1 Issue? - Notify On Call Immediatley

When the incident is believed to be **Severity 1** which can be defined as (but not limited to)
 * Issue resolution is required in a 24 hour period
 * Part of (or all of) va.gov is severely disrupted
  
Examples:
- va.gov is unresponsive
- Platform errors causing extreme delays for users
  
If you believe the issue falls into the Severity 1 category, there is no need to follow the Triage process.  Immediate notification to On Call is the best path to resolution.

Slack - [#oncall](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Practice%20Areas/Engineering/OnCall)

[Instructions on escalting to On Call can be found here](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Incident%20Response%20Playbook.md)

## When to engage the Triage Team
  
**General Rule:** Any issue that is discovered that is outside your teams scope of work can be reported to Triage

**How to Report the Issue:**
Reach out on our [Slack Channel](https://dsva.slack.com/messages/CK1FA11H8)

Submit a GitHub issue using our [Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=triage%2C+triage-incident&template=triage-incident-template.md&title=)

Is there already a GitHub Issue? Add the following tags and notify the Slack Channel for visibility:
* Triage
* Triage-incident
 
If you know which team the issue should be routed to, reach out to their pont of contact to confirm and directly asssign the issue to that team.  If you aren't sure which team owns the issue and would like to send it directly to them without the assistance of Triage, the [Product Owner Mapping Document](https://docs.google.com/spreadsheets/d/1hzz6whEGoQJQbiNvIggirhydYYdv57nfOZfLvFqZ1pQ/edit?ts=5d28958a#gid=1535759874) can help guide you in the right direction.

*The Product Owner Mapping Document listed above is a living document.  If you would like to suggest edits to add or change owner to products please reach out to the PM of Triage (Alex Pappas).  It is also protected as this is a public repo*
 
NOTE: Assigning an issue to Triage using the [Triage Incident Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=triage%2C+triage-incident&template=triage-incident-template.md&title=) does not guarentee the work will be completed by the triage team.  Triage will do their own investigation, priotization and scoping to determine the best team to be resonsible for resolution.

## When is it NOT ok to engage the Triage Team

* Bugs that belong within your own team
* Feature Improvements that belong within your own team

## Still not sure?
If you still have a doubt about where to report your incident for whatever reason, please reach out to the #vsp-triage slack channel and we would be happy to assist you.

When in doubt, submit any issue through our [Triage Incident Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=triage%2C+triage-incident&template=triage-incident-template.md&title=) and the Triage team will ensure it gets through the process correctly!







# I Don't think we need to define this anymore?

## Difference between a Bug and an Incident (for reference)
**Incident:** An unplanned interruption. When the operational status of any activity turns from working to failed and causes the system to behave in an unplanned manner it is an incident. A problem can cause multiple incidents which are to be resolved—preferably as soon as possible.

**Bug:** A defect found by a tester or reported by a user that is not stopping a user from sucessfully achieving their goal but needs to be addressed in a timely manner.

---

# NOTES on improvements to this doc:

Create a process flow diagram to compliment what is being said in a visaul manner

