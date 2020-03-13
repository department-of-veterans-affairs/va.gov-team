# Reporting an Incident to the Platform

## Preface

This document will help all team members working on VA.gov understand how to report incidents to the platform and provide relevant information to assist in routing reported issues to other appropriate teams.  Please read the following document carefully in order to determine the appropriate path for your incident.

## Is this is a Severity 1 Issue? - Notify On-call Immediately

When the incident is believed to be **Severity 1** which can be defined as (but not limited to)
* Issue resolution is required in a 24 hour period
* Part of (or all of) va.gov is severely disrupted

In these cases, immediately escalate to [#oncall](https://dsva.slack.com/messages/oncall/).

Examples:
- va.gov is unresponsive
- Platform errors causing extreme delays for users
- Login to va.gov is unavailable
  
## When to Report an Issue to be Triaged
  
**General Rule:** As stated below, VFS teams are responsible for finding and fixing bugs in the products within their jurisdiction.  However, if you notice an issue 
- That seems more systemic
- Seems related to a product or service provided by the VSP team
- Seems related to a product managed by another VFS team
- Or has an unknown source and is causing problems for va.gov users
report it to Triage.

Examples:
- An internal load testing tool is broken
- Mock data is not working or is out of date
- Metrics are being reported incorrectly or not reported at all
- You are the Global UX team and you learn in research sessions that a lot of Veterans are having trouble accessing their education benefits

**How to Report the Issue to be Triaged:**

Choose one of the following:

* If you know which team the issue should be routed to, reach out to their point of contact to confirm and directly assign the issue to that team.

* If you aren't sure which team owns the issue and would like to send it directly to them without the assistance of Triage, the [Product Directory](https://docs.google.com/spreadsheets/d/1hzz6whEGoQJQbiNvIggirhydYYdv57nfOZfLvFqZ1pQ/edit?ts=5d28958a#gid=1535759874) can help guide you in the right direction.

* If you aren't sure which team owns the issue and want to submit it to VSP for triage, submit a GitHub issue using our [Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=triage%2C+triage-incident&template=triage-incident-template.md&title=)

  * _NOTE_: Is there already a GitHub Issue? Add the following labels and post in `#vfs-platform-support` for visibility:
    * `triage`
    * `triage-incident`
 
_NOTE_: Assigning an issue to VSP using the [Triage Incident Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=triage%2C+triage-incident&template=triage-incident-template.md&title=) does not guarantee that the work will be completed by VSP. VSP will do their own investigation, prioritization and scoping to determine the best team responsible for resolution.

## When to NOT report the issue to be Triaged

* Bugs with products under your team's jurisdiction including endpoints and integrations with APIs
* Feature Improvements that belong within your own team

## Still not sure?

If you still have a doubt about where to report your incident for whatever reason, please reach out to the [`#vsp-triage`](https://dsva.slack.com/messages/CK1FA11H8) Slack channel and we would be happy to assist you.

When in doubt, submit any issue through our [Triage Incident Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=triage%2C+triage-incident&template=triage-incident-template.md&title=) and VSP will ensure it gets through the process correctly!


## How Reported Issues will be Triaged

### VSP will resolve:

Issues with products/systems that fall under VSP ownership. [Product Directory](https://docs.google.com/spreadsheets/d/1hzz6whEGoQJQbiNvIggirhydYYdv57nfOZfLvFqZ1pQ/edit?ts=5d28958a#gid=1535759874) for clarity on which products and systems fall under VSP ownership.

### Issue will be routed to VFS teams to resolve:

All issues with Veteran-facing Services (including endpoints and integrations with APIs) by assigning a ZenHub issue to the  POC of the VFS team whose product is experiencing issues - per the ownership indicated in the [Product Directory](https://docs.google.com/spreadsheets/d/1hzz6whEGoQJQbiNvIggirhydYYdv57nfOZfLvFqZ1pQ/edit?ts=5d28958a#gid=1535759874).  

In the event there is no VFS team owner indicated in the [Product Directory](https://docs.google.com/spreadsheets/d/1hzz6whEGoQJQbiNvIggirhydYYdv57nfOZfLvFqZ1pQ/edit?ts=5d28958a#gid=1535759874) Triage will assign the issue to Chris Johnston.

