# VSA TRIAGE AND ON-CALL PROCESS

## Implementation Strategy 

The VSA will assign the Product Managers (PMs) as the Tier 2 support with an SME for each team as Tier 3 support. This process is a complement to the VSP process located here [VSP - Triage Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/7000a834537bdad1172bf57f968b040ae6b45cb7/platform/working-with-vsp/policies-work-norms/reporting-an-incident-to-the-platform.md).

## Triage and Support

### Tier 1 Support<a name="Tier1"></a>

The VSP BE Tools team (previously named the "Triage" team) (Tier 1) in coordination with the on-call team will log in any defect reported on the production version of our products and provide Tier 1 support.

For details on how and when to report Triage incidents access the [VSP - Triage Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/7000a834537bdad1172bf57f968b040ae6b45cb7/platform/working-with-vsp/policies-work-norms/reporting-an-incident-to-the-platform.md). The aforementioned VSP document is the authoratative document, particularly for the Tier 1 issues process: 

#### Tier 1 Process Details<a name="Tier1Details"></a>

1. The new GitHub issue is received and processed by the VSP Triage team or the on-call team as established in the [VSP - Triage Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/7000a834537bdad1172bf57f968b040ae6b45cb7/platform/working-with-vsp/policies-work-norms/reporting-an-incident-to-the-platform.md). 
2. If the issue needs escalation, then it gets assigned to the VSA team as a [VSA Tier 2](#Tier2) issue.
3. If the [VSA Tier 2](#Table1) resource cannot be reached and the issued is deemed &quot;critical&quot; per the criteria listed in [Table 3](#Table3) herein, the Tier 1 team will contact the appropriate VSA Tier 3 SME as identified in [Table 2](#Table2).

The VSP (BE Tools) team defines the tiers and the escalation process in the following document [VSP Support Tiers and Escalation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/triage/support-tiers.md). The details for the VSA [Tier 2](#Tier2) and [Tier 3](#Tier3) processes are found below.

### Tier 2 Support (VSA)<a name="Tier2"></a>

VSA comes into play when Tier 1 is unable to resolve the issue from a platform perspective.  If VSA resources are needed, the Triage effort is escalated to Tier 2 support and a GitHub issue will be updated using the appropriate labels and assigned to the appropriate team as defined in [Table 1](#Table1).

VSA Tier 2 support involves the PMs for each product group.  The PM is contacted first. If VSP has not already created an issue in GitHub, the VSA PM must create an issue in GitHub. **IMPORTANT: The VSA PM must ensure  that that the "vsa-triage" label has been added to the Githhub issue.** This label is important, particularly for reporting purposes. 

Please note that it's also possible for an issue to come to us directly (i.e. bypassing VSP Triage On-Call process). In these cases, it's particularly important to ensure that the issue has a GitHub issue created for it, and that the GitHub issue is also labeled with the "vsa-triage" tag.

The PM is responsible for pulling in the appropriate resources and doing an escalation analysis based on the level of severity as described on the [Triage Severity Assessment](#Table3) table.

#### Table 1: Tier 2 Support<a name="Table1"></a>

| Product Team | Product Manager | Email | Phone  | GitHub Labels |
| --- | --- | --- | --- | --- |
| Public Websites | Kara Kemali | kara@adhocteam.us| (410) 905-7239 | vsa-public-websites, vsa-Triage |
| Authenticated Experience | Justin Pickett | jpickett@governmentcio.com| (405) 808-6419 | vsa-authenticated-exp, vsa-Triage |
| Benefits and Memorials 1 | Yana Roy | yroy@governmentcio.com| (732) 822-1200 | vsa-benefits, vsa-Triage |
| eBenefits | Jason Wolf | jwolf@governmentcio.com| (540) 250-5217 | vsa-ebenefits, vsa-Triage |
| Facility Locator | Michelle Middaugh | michelle.middaugh@adhocteam.us| (208) 659-9368 or (509) 838-7491 | vsa-facilities, vsa-Triage |
| Benefits and Memorials 2 | Nicolaus Wygonik | nwygonik@governmentcio.com| (708) 560-3506 | vsa-benefits-2, vsa-Triage |
| Medical Center Sites | Stan Gardner | sgardner@governmentcio.com| (775) 772-1409 | vsa-medical-sites, vsa-Triage |

### Tier 3 Support<a name="Tier3"></a>

VSA Tier 3 support would be contacted in the event the VSP Tier 1 team cannot resolve an issue which  they classify as &quot;critical&quot; and the PM cannot be reached.  Please see [Table 3](#Table3) for the definition of a &quot;critical&quot; issue.  In the event the PM cannot be contacted, the VSP Tier 1 team can directly contact the SME from the appropriate product area to obtain support.  This process is further defined in the [VSA Triage Process Workflow](#VSATriage) section below.

#### Table 2: Tier 3 Support<a name="Table2"></a>

| Product Team | SME | Email | Phone |
| --- | --- | --- | --- |
| Public Websites | Nick Sullivan | nick.sullivan@adhocteam.us| (859) 496-5292  |
| Authenticated Experience | Erik Hansen | erik@adhocteam.us| (415) 845-2279  |
| Benefits and Memorials 1 | Silvio Luthi | silvio@adhocteam.us | (503) 516-0588  |
| eBenefits | Kathleen Crawford | kcrawford@governmentcio.com | (267) 738-7227 |
| Facility Locator | Gilbran Rodriguez | grodriguez@governmentcio.com | (248) 709-9976  |
| Benefits and Memorials 2 | Amen Ra | ara@governmentcio.com | (202) 607-8069  |
| Medical Center Sites | Sundar Kumarasamy | skumarasamy@governmentcio.com | (202) 525-8970  |

## VSA Triage Process Workflow<a name="VSATriage"></a>

1. Once the ticket/issue has been received by the PM, they will coordinate with the team resources to resolve the issue. The issue will be managed according to the VSP process detail in the [Incident Response Playbook](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Incident%20Response%20Playbook.md)
2. Depending on the severity of the issue, the PM will determine whether the current sprint (tickets and goals) need to be adjusted.
3. Triage Severity Assessment - Issue Escalation Process
  1. In the case of critical production issues (definitions are found in [Table 3](#Table3) below), the sprint will be immediately adjusted and resources will be pulled into the Triage effort.  A new story will be immediately written (if necessary) and put into the sprint.
  2. In the case of major production issues, the PM will determine whether the issue is of enough impact to cause for an immediate fix by the end of the sprint.  If the issue is deemed significant enough to require fixing by the end of the sprint, the PM will work with his team to update the sprint stories and objectives to ensure closure of Triage issue by the end of the sprint.
  3. In the case of minor issues, the story will be prioritized along with other backlog items during the next backlog grooming and/or sprint planning.
4. The PM will notify the VSA Lead Engineer, the VA Business Owners, and the Program Manager of the issue
5. Once the issue has been resolved, a root cause analysis will be performed by the PM.  If desired by the DSVA, the PM can provide a Root Cause Analysis (RCA) summary using the document template stored in the [VSA Google drive](https://docs.google.com/document/d/16HGKtXGhDx1n0tlk55gmtiFxvGbGhy6n/edit) and will submit it to the VSA Lead Engineer, the VA Business Owners, and the Program Manager.

### Table 3: <a name="Table3"></a>Triage Severity Assessment

| Severity | Conditions | Response |
| --- | --- | --- |
| Critical | Requires immediate fix.  Impacting veterans directly.  Complete blocker to being able to use the existing product. | The sprint will be immediately adjusted and resources will be pulled into the Triage effort.  A new story will be immediately written and put into the sprint.  |
| Major | Requires fix within the current sprint.  Impacting veterans directly but not considered a blocker to their usage of the product. | PM will determine whether the issue is of enough impact to cause for an immediate fix by the end of the sprint.  If the issue is deemed significant enough to require fixing by the end of the sprint, the PM will work with his team to update the sprint stories and objectives to ensure closure of Triage issue by the end of the sprint. |
| Minor | Does not come directly from a report by a veteran.  These issues are identified internally and it is when the product does not meet the expected capability or performance that was supposed to be delivered in previous stories. | A new story will be written and prioritized along with other backlog items during the next backlog grooming and/or sprint planning |
