
# Tier Definitions
As part of VSP we will Provide Tier 2/3 support as necessary to resolve platform-originated bugs/issues discovered on the VSP. However, if bugs/issues originate from Veteran-facing services built or maintained by other VA teams Tier 2/3 support will not be required under this contract. 

**Tier 1** Support is staffed by the VA's Contact Centers

**Tier 2** Support is comprised of technicians experienced and knowledgeable about the Veteran-facing Services Platform that can assist end-users to resolve problems. 

**Tier 3** Support is comprised of developers and engineers that analyze technical problems and define root causes. 

# Escalation
## Tier 1
Tier 1 shall categorize supports requests using our [Incident categories](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/OnCall/Incident%20Categorization.md) to the best of their knowledge. If the Tier 1 support person believes the incident to be minor or normal, it will be logged in the current VA's Contact Center software system.  If further action is necessary by the VFP or VSA teams the Tier 1 support person will assign the issue to the VSP team.  The VSP team will review assigned issues at a regular interval (daily/weekly) and attempt to find trends. 

If an issue is suspected to be Major, Severe or Critical the Tier 1 support person will escalate immediately to the Tier 2 support specialist through the agreed upon channels (slack/email/phone?)

## Tier 2 
The Tier 2 specialist will routinely review open issues from Tier 1 support people, looking for trends.  If an issue is escalated directly from Tier 1, the Tier 2 support specialist will attempt to verify the issues and validate the presumed severity using available metrics such as Google Analytics and Grafana, when practical. If it is suspected tha the issue is severe/critical the Tier 2 specialist will raise the issue in the #oncall slack channel. If the tier 2 specialist is unable to resolve the issue they will write an issue in github and assign it to the PM of the responsible team for minor/normal/major incidents.  The tier 2 Support person will use slack (team channels or general channels) to communicate with Tier 3 engineers/PM's as necessary. Especially when resolving issues, open communication is beneficial. 

## Tier 3
The Tier 3 specialist will provide support to the Tier 2 specialist, further triaging issues escalated by the Tier 2 specialist, as prioritized by the Triage team PM, as practical.  The Tier 3 specialist will work with the Tier 2 specialist to make relevant metrics available. 
