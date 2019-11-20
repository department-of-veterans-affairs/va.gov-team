# TRIAGE AND ON-CALL PROCESS

## Implementation Strategy

The VSA will assign the Product Owners as the Tier 2  support with an SME for each team as Tier 3 support.

## Triage and Support

### Tier 1 Support (VSP)

The VSP BE Tools team (Tier 1) in coordination with the oncall team will log in any defect reported on the production version of our products and provide Tier 1 support.

#### Tier 1 Process Details

1. New GitHub issue is received &quot;User reported bug, Downtime issue, Performance issue&quot;
2. VSP BE Tools team (Tier 1) addresses issue and attempts to resolve per description in Table 3
3. If BE Tools team is unable to resolve issue, a Triage ticket is created using the Triage issue template.
4. The Tier 1 team analyzes the issue and assigns it to the proper team by following the  &quot;[VSP - On Call Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/7000a834537bdad1172bf57f968b040ae6b45cb7/platform/working-with-vsp/policies-work-norms/reporting-an-incident-to-the-platform.md)&quot;
5. If the issues involves a VSA product, Tier 1 team will add the appropriate team&#39;s tag and the &quot;vsa-Triage&quot; tags to the issue.  The &quot;vsa-Triage&quot; tag will allow identification of Tier 2/3 triaged issues for identification and reporting purposes.
6. If the VSA Tier 2 resource cannot be reached and the issued is deemed &quot;critical&quot; per the criteria listed in Table 3 herein, the Tier 1 team will contact the appropriate VSA Tier 3 SME as identified in Table 2.

The VSP (BE Tools) team defines the tiers and the escalation process in the following document [VSP Support tiers and Escalation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/triage/support-tiers.md), Find the details for the VSA Tier 2 and Tier 3 bellow.

### Tier 2 Support (VSA)

VSA comes into play when Tier 1 is unable to solve the issue from a platform perspective.  If VSA resources are needed, the Triage effort is escalated to Tier 2 support and a GitHub issue will be updated using the appropriate labels and assigned to the appropriate team as defined on the section below

VSA Tier 2 support involves the primary POCs for each product group.  The Product Manager is contacted first and is responsible for pulling in the appropriate resources and doing an escalation analysis based on the level of severity.

#### Table 1: Tier 2 Support

| Product Team | Product Manager | Email | Phone  | GitHub Labels |
| --- | --- | --- | --- | --- |
| Public Websites | Kara Kemali | kara@adhocteam.us| (410) 905-7239 | vsa-public-websites, vsa-Triage |
| Authenticated Experience | Justin Pickett | jpickett@governmentcio.com| (405) 808-6419 | vsa-authenticated-exp, vsa-Triage |
| Benefits and Memorials 1 | Yana Roy | yroy@governmentcio.com| (732) 822-1200 | vsa-benefits, vsa-Triage |
| eBenefits | Jason Wolf | jwolf@governmentcio.com| (540) 250-5217 | vsa-ebenefits, vsa-Triage |
| Facility Locator | Michelle Middaugh | michelle.middaugh@adhocteam.us|  | vsa-facilities, vsa-Triage |
| Benefits and Memorials 2 | Nicolaus Wygonik | nwygonik@governmentcio.com|  | vsa-benefits-2, vsa-Triage |
| Medical Center Sites | Stan Gardner | sgardner@governmentcio.com| (775) 772-1409 | vsa-medical-sites, vsa-Triage |

### Tier 3 Support

VSA Tier 3 support would be contacted in the event the VSP Tier 1 team cannot resolve an issue which  they classify as &quot;critical&quot; and the Product Manager cannot be reached.  Please see Table 3 for the definition of a &quot;critical&quot; issue.  In the event the PM cannot be contacted, the VSP Tier 1 team can directly contact the SME from the appropriate product area to obtain support.  This process is further defined in section 4 below.

#### Table 2: Tier 3 Support

| Product Team | SME | Email | Phone |
| --- | --- | --- | --- |
| Public Websites | Nick Sullivan | nick.sullivan@adhocteam.us| (859) 496-5292  |
| Authenticated Experience | Erik Hansen | erik@adhocteam.us| (415) 845-2279  |
| Benefits and Memorials 1 | Silvio Luthi | silvio@adhocteam.us | (503) 516-0588  |
| eBenefits | Kathleen Crawford | kcrawford@governmentcio.com | (267) 738-7227 |
| Facility Locator | Gilbran Rodriguez | grodriguez@governmentcio.com | (248) 709-9976  |
| Benefits and Memorials 2 | Amen Ra | ara@governmentcio.com | (202) 607-8069  |
| Medical Center Sites | Sundar Kumarasamy | skumarasamy@governmentcio.com | (202) 525-8970  |

## VSA Triage Process Workflow

1. Once the ticket/issue has been received by the Product Manager, they will coordinate with the team resources to resolve the issue. The issue will be managed according to the VSP process detail in the [Incident Response Playbook](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Incident%20Response%20Playbook.md)
2. Depending on the severity of the issue, the PM will determine whether the current sprint (tickets and goals) need to be adjusted.
3. Triage Severity Assessment - Issue Escalation Process
  1. In the case of critical production issues (definitions are found in Table 3 below), the sprint will be immediately adjusted and resources will be pulled into the Triage effort.  A new story will be immediately written (if necessary) and put into the sprint.
  2. In the case of major production issues, the PM will determine whether the issue is of enough impact to cause for an immediate fix by the end of the sprint.  If the issue is deemed significant enough to require fixing by the end of the sprint, the PM will work with his team to update the sprint stories and objectives to ensure closure of Triage issue by the end of the sprint.
  3. In the case of minor issues, the story will be prioritized along with other backlog items during the next backlog grooming and/or sprint planning.
4. The Product Manager will notify the VSA Lead Engineer, the VA Business Owners, and the Program Manager of the issue
5. Once the issue has been resolved, a root cause analysis will be performed by the PM.  If desired by the DSVA, the PM can provide a Root Cause Analysis (RCA) summary using the document template stored in the [VSA Google drive](https://docs.google.com/document/d/16HGKtXGhDx1n0tlk55gmtiFxvGbGhy6n/edit) and will submit it to the VSA Lead Engineer, the VA Business Owners, and the Program Manager.

### Table 3: Triage Severity Assessment

| Severity | Conditions | Response |
| --- | --- | --- |
| Critical | Requires immediate fix.  Impacting veterans directly.  Complete blocker to being able to use the existing product. | The sprint will be immediately adjusted and resources will be pulled into the Triage effort.  A new story will be immediately written and put into the sprint.  |
| Major | Requires fix within the current sprint.  Impacting veterans directly but not considered a blocker to their usage of the product. | PM will determine whether the issue is of enough impact to cause for an immediate fix by the end of the sprint.  If the issue is deemed significant enough to require fixing by the end of the sprint, the PM will work with his team to update the sprint stories and objectives to ensure closure of Triage issue by the end of the sprint. |
| Minor | Does not come directly from a report by a veteran.  These issues are identified internally and it is when the product does not meet the expected capability or performance that was supposed to be delivered in previous stories. | a new story will be written and prioritized along with other backlog items during the next backlog grooming and/or sprint planning |
