# Version one of the general error & outage procedures for EZ & EZR
- Last updated: 3/19/2024
---

## Acknowledge & Communicate that there is an error or outage present
- Should be handled by the Data Analyst & PM team first as they typically have eyes on this. However Devs should be receiving notifications that an error or outage is present (when an alert captures it) and can start preparing to address it. Commuinications are delivered through the health-tools-1010-apm channel on DSVA Slack.

## Informing Product owners that there is a problem
- PMs can inform the stakeholders that there is an issue. Stakeholders to reach out to will depend on the nature of the problem and where the issue is stemming from. The forms are dependent on different external services per se but the top of the list of folks that need to be informed are:
     - Alex Seelig
     - Patrick Bateman
     - Kristen McConnell

## Review the errors (if any) and VA.gov monitors to determine if the root cause is on the form or sitewide
- Data analyst is the first one on the scene here; Check logs to determine a root cause if possible (DD, Sentry, etc.). But as the investigation furthers past the dev op tools in place, Dev team will be pulled in shortly there after these sources have been exhausted. Maybe bring in UX folks to ask if there were content changes made in the recent days that could have impacted anything on site.
     - List of links to Data Dog dashboards to review the frontend:
          - [Overall 10-10EZ performance and VA.gov monitors](https://vagov.ddog-gov.com/dashboard/8yz-qzc-bng/1010ez-vagov-performance?fromUser=false&refresh_mode=sliding&from_ts=1710775897553&to_ts=1710779497553&live=true)
          - [Overall 10-10EZR performance monitors](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1710606729330&to_ts=1710779529330&live=true)


## Mini Check Ins through out the first 4-6 hours of response
- Analyst can set up a call during the investigation with Dev / Analyst / PMs
- Devs (when possible) to communicate a root cause when identified with the broader team. Or update the team that a cause is still unidentified within the first hours of the triage process. PMs can forward the updates as they come in.

## Inform Product Stakeholders (HEC)
- PMs can inform the stakeholders that there is an issue, or communicate that the scope of the issue extends outside of the code base we have access to with color commentary given by Devs when needed. 
     - Stakeholders:
          - Lauren Alexanderson - Health Tools Crew Lead
          - Kara Eakin - HEC
          - Shana Watson - HEC
          - Ambroja Watson - HEC
          - Josh Faulkner - Enrollment System main POC

## Talk to Platform
- If needed, we can communicate with the platform team of necessary changes or reverts in the code base or that there needs to be other engineers from their side present to triage the problem. To begin engagement with this team, open a ticket on the VFS platform support channel on DSVA Slack (#vfs-platform-support).
     - Typical Platform folks:
          - Adrian Rollett
          - Brenden Matos
          - Patrick Vinograd
          - Rachel Cassity
          - Ryan McNeil


## Start postmortem and document timeline as you go
- Postmortems are mainly for outage based issues that the team will face and learn from. During the process of building a postmortem, everyone is contributing to the timeline document, specifically as they continue to do their part in the overall procedure (Team, HEC, PO, etc...). The start of the document is something PMs can manage, but the wrap up / takeaway side is by Devs & Analyst.
     - [Postmortem document folder with template](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems)
