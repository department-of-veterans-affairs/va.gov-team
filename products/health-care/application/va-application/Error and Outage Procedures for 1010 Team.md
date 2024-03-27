# Version one of the general error & outage procedures for EZ & EZR
- Last updated: 3/25/2024
---

## Incident Commander for all errors and outage triage is The Delivery Manager
- The tasks / responsibilities of an incident commander most closely align with that of a delivery manager so she is best suited to tackle the role.
– How does an incident commanders handle critical incidents:
-- Identify the objectives of the incident response.
-- Next, devise a command plan to address the problem. Can be more of a collaborative effort
-- Monitor the situation and make adjustments as needed.

## Acknowledge & communicate that there is an error or outage present
- Should be handled by the Data Analyst & PM team first as they typically have eyes on this. However Devs should be receiving notifications that an error or outage is present (when an alert captures it) and can start preparing to address it. Commuinications are delivered through the health-tools-1010-apm channel on DSVA Slack.
- In the event that the Data Analyst is out, PMs are capable of doing all of the DD & sentry related tasks associated with this procedure exercise.


## Informing Product Owners that there is a problem
- If the error or outage persists for longer than 1 hour / leads to multiple failures of form submissions / or a spike in error rate that exceeds 10%; then the POs are informed there is an issue. PMs can inform the stakeholders that there is an issue. Stakeholders to reach out to will depend on the nature of the problem and where the issue is stemming from. The forms are dependent on different external services per se but the top of the list of folks that need to be informed are:
     - Patrick Bateman
     - Kristen McConnell

## Maintenance Window
-  Product Owners can make the call to put up the maintenance windows if we determine that the error / outage is severe enough to warrant that action /  we cannot determine the issue within the first 2 hours. Maintenance window’s length of time will be assessed on an hourly basis of whether we can isolate the problem and push a hotfix out to prod within the hour.

## Review the errors (if any) and VA.gov monitors to determine if the root cause is on the form or sitewide
- Data analyst is the first one on the scene here; Check logs to determine a root cause if possible (DD, Sentry, etc.). But as the investigation furthers past the dev op tools in place, Dev team will be pulled in shortly there after these sources have been exhausted. Maybe bring in UX folks to ask if there were content changes made in the recent days that could have impacted anything on site.
     - List of links to Data Dog dashboards to review the frontend:
          - [Overall 10-10EZ performance and VA.gov monitors](https://vagov.ddog-gov.com/dashboard/8yz-qzc-bng/1010ez-vagov-performance?fromUser=false&refresh_mode=sliding&from_ts=1710775897553&to_ts=1710779497553&live=true)
          - [Overall 10-10EZR performance monitors](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1710606729330&to_ts=1710779529330&live=true)


## Mini Check Ins through out the first 4-6 hours of response
- Analyst can set up a call during the investigation with Dev / Analyst / PMs
- Devs (when possible) to communicate a root cause when identified with the broader team. Or update the team that a cause is still unidentified within the first hours of the triage process. PMs can forward the updates as they come in.


## Inform Product Stakeholders (HEC)
- If the error / outage persists for longer than 4 hours / leads to multiple failures of form submissions / or a spike in error rate that exceeds 10%; then HEC is informed that there is a full stop blockage preventing veterans from accessing benefits. PMs can inform the stakeholders that there is an issue, or communicate that the scope of the issue extends outside of the code base we have access to with color commentary given by Devs when needed. communicating with HEC should always be done by an OCTO person. & we should use the HEC distribution list instead of individual emails. in the event that a OCTO person cannot be reached, a PMs should be a viable backup for OCTO/PO. In the event PO is not available, the team could reach out to Crew Lead (Currently Lauren Alexanderson) if OCTO representation is needed.
     - Stakeholders:
          - Lauren Alexanderson - Health Tools Crew Lead
          - Kara Eakin - HEC
          - Shana Watson - HEC
          - Ambroja Watson - HEC
          - Simone Gully - HEC
          - Jessica Soza - HEC
          - Bryan Burgan - HEC (slowly taking over for Jessica Soza)
          - Josh Faulkner - Enrollment System main POC

## Talk to Platform
- If needed, we can communicate with the platform team of necessary changes or reverts in the code base or that there needs to be other engineers from their side present to triage the problem. To begin engagement with this team, open a ticket on the VFS platform support channel on DSVA Slack (#vfs-platform-support).
     - Typical Platform folks:
          - Adrian Rollett
          - Brenden Matos
          - Patrick Vinograd
          - Rachel Cassity
          - Ryan McNeil

## In the event of an error or outage in the afternoon of pacific time (i.e. east coast evening time) there will be a modifided procedure 
- The PM that is still online will acknowledge & communicate that there is an error or outage present and inform Product Owners that there is a problem.
- The issue at hand may have to wait to be fully triaged until the next morning because right now, all of our 1010 Devs & Data analyst staff are ET or CT, they would not be online to address the issue in the momment.
- The following morning the Devs / Analyst will be brought up to speed on the situation and can resume the regular chain of commnication and triage for the issue. 


## Start postmortem and document timeline as you go
- Postmortems are mainly for outage based issues that the team will face and learn from. During the process of building a postmortem, everyone is contributing to the timeline document, specifically as they continue to do their part in the overall procedure (Team, HEC, PO, etc...). The start of the document is something PMs can manage, but the wrap up / takeaway side is by Devs & Analyst.
     - [Postmortem document folder with template](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems)
