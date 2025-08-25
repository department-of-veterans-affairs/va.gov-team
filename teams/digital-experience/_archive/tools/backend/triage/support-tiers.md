----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Triage-Tier-Definitions.1887272961.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Tier Definitions

The PWS defines support tiers as follows:

 Provide Tier 2/3 support as necessary to resolve platform-originated bugs/issues discovered on the VSP. However, if bugs/issues originate from Veteran-facing services built or maintained by other VA teams Tier 2/3 support is not required under this contract.

**Tier 1** Support is staffed by the VA's Contact Centers

**Tier 2** Support is comprised of technicians experienced and knowledgeable about the Veteran-facing Services Platform that can assist end-users to resolve problems.

**Tier 3** Support is comprised of developers and engineers that analyze technical problems and define root causes.

# Escalation
## Tier 1
Tier 1 will:
* categorize supports requests using our [Incident categories](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/OnCall/incident-categorization.md)

* **minor** or **normal** incidents will be logged in the current VA's Contact Center software system.  If further action is necessary by the VFP or VSA teams the Tier 1 support person will assign the issue to the VSP team.  The VSP team will review assigned issues at a regular interval (daily/weekly) and attempt to find trends.
* **Major**, **Severe** or **Critical** incidents will escalate immediately to the Tier 2 support specialist through the agreed upon channels **TBD**

## Tier 2

The Tier 2 specialist will:
* Attempt to verify the issue and validate its severity using available metrics from Google Analytics and Grafana
* For **Severe** or **Critical** issues, raise the issue in the [#oncall](https://dsva.slack.com/messages/C30LCU8S3) Slack channel
* For **Minor**, **Normal**, or **Major** issues, attempt to resolve the issue themselves or [write an issue in the va.gov-team repo](https://github.com/department-of-veterans-affairs/va.gov-team/issues) and assign it to the PM of the responsible team.
* Use Slack channels to communicate with Tier 3 engineers and PMs as necessary.


## Tier 3
The Tier 3 specialist will provide support to the Tier 2 specialist, further triaging issues escalated by the Tier 2 specialist, as prioritized by the Triage team PM, as practical.  The Tier 3 specialist will work with the Tier 2 specialist to make relevant metrics available.
