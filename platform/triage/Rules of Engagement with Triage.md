# Preface
This document will help all team members working on VA.gov understand when it is appropriate to engage the Triage team for support and provide relevant information to assist in routing reported issues to other appropriate teams.  Because of the limited number of resources on Triage, they cannot be a "catch-all" for every issue reported on the platform and every application.  Please read the following document carefully in order to determine the appropriate path for your incident.

## Is this is a Severity 1 Issue? - Notify On-call Immediately

When the incident is believed to be **Severity 1** which can be defined as (but not limited to)
* Issue resolution is required in a 24 hour period
* Part of (or all of) va.gov is severely disrupted

In these cases, immediately escalate to [#oncall](https://dsva.slack.com/messages/oncall/).

Examples:
- va.gov is unresponsive
- Platform errors causing extreme delays for users
- Login to va.gov is unavailable
  
## When to engage the Triage Team
  
**General Rule:** Any issue that is discovered that is outside your team's scope of work can be reported to Triage.

Examples:
- An internal load testing tool is broken
- Mock data is not working or is out of date
- Metrics are being reported incorrectly or not reported at all

**How to Report the Issue:**

Choose one of the following:

* If you know which team the issue should be routed to, reach out to their point of contact to confirm and directly assign the issue to that team.

* If you aren't sure which team owns the issue and would like to send it directly to them without the assistance of Triage, the [Product Owner Mapping Document](https://docs.google.com/spreadsheets/d/1hzz6whEGoQJQbiNvIggirhydYYdv57nfOZfLvFqZ1pQ/edit?ts=5d28958a#gid=1535759874) can help guide you in the right direction.

* If you aren't sure which team owns the issue and want to send it to Triage team, choose one of the following:

  * Reach out on [`#vsp-triage`](https://dsva.slack.com/messages/CK1FA11H8)

  * Submit a GitHub issue using our [Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=triage%2C+triage-incident&template=triage-incident-template.md&title=)

    * _NOTE_: Is there already a GitHub Issue? Add the following labels and post in `#vsp-triage` for visibility:
      * `triage`
      * `triage-incident`
 
_NOTE_: Assigning an issue to Triage using the [Triage Incident Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=triage%2C+triage-incident&template=triage-incident-template.md&title=) does not guarantee that the work will be completed by the Triage team.  Triage will do their own investigation, prioritization and scoping to determine the best team responsible for resolution.

## When to NOT engage the Triage Team

* Bugs that belong within your own team
* Feature Improvements that belong within your own team

## Still not sure?

If you still have a doubt about where to report your incident for whatever reason, please reach out to the [`#vsp-triage`](https://dsva.slack.com/messages/CK1FA11H8) Slack channel and we would be happy to assist you.

When in doubt, submit any issue through our [Triage Incident Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=triage%2C+triage-incident&template=triage-incident-template.md&title=) and the Triage team will ensure it gets through the process correctly!

