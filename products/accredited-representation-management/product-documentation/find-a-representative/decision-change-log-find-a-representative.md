# Decision and Change Log: Find a Representative

This document is actively maintained by Product Manager, Lindsay Li-Smith, and updates are made every Friday.

- **10/20/2023**: Decided to split into distinct products (Find, Appoint and Widget).\
  _Discussed by the ARM team starting on 10/18/2023 and direction confirmed by Product Owner Zach Goldfine ([Slack conversation](https://dsva.slack.com/archives/C05L6HSJLHM/p1697658933875239))._
- **10/27/2023**: Representative definitions are updated with stakeholder feedback.\
  _Feedback requested by Product Manager Lindsay Li-Smith via email “Validating Representative Definitions” and received from Martin Caraway (VBA) and Jenny Rosenau (Compensation Service)._
- **12/11/2023**: “No Go” on 1.0 (MVP) release, due to concerns around the data powering our search results being only 40-60% (+/- 10%) accurate.\
  _Collective team decision, during Go/No Go meeting (_[_release plan_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-1.0.md)_)._
- **12/13/2023**: Changed the search method designs to focus on individual VSO representatives instead of entire Veterans Service Organizations. This change better aligned with Veterans' expectations of working with a local representative on their claims. It also met database requirements, as organizations have only a headquarters address in the OGC database, while VSO representatives can be found through local searches.\
  _Recommended as part of research findings for the Find a Representative User Test (_[_research recommendations_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2023-11-ARM-findarep-nav-usertest/research-findings.md#mission-critical-recommendations)_)._
- **:tada: 3/13/2024**: Released 2.0 to 100% of users, “Best Bets” keywords were implemented to boost search-ability.\
  _([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-2.0.md))._
- **3/18/2024**: Lighthouse requests we move our code (endpoints, controllers, modules and Sideqik jobs) out of the `Veteran` module in `vets-api` to avoid any unexpected/unintended access, as the the `Veteran` module is publicly routable through the Lighthouse Gateway and this mixed module leads to unexpected code review requirements and untracked endpoints routable via the Lighthouse Gateway. \
  _Communicated by Technical Lead Holden Hinkle and context provided by Lighthouse team members ([Slack message](https://dsva.slack.com/archives/C013VCQKSE7/p1710784815479299))._
- ⚠️ **6/7/2024**: Removed the “Other” text input in the Report Outdated Information modal, because users were entering PII. All PII data has been removed.\
  _Initiated by Program Manager Parker Baranowski, managed by the ARM team, with VA Enablement staying informed ([2024-06-06 - Find a Representative Report Incorrect Information PII Exposure](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/2024/2024-06-06%20-%20FAR%20Report%20Incorrect%20Information%20PII%20Exposure.md))._
- **7/18/2024**: Decided to remove the Report Outdated Information feature.\
  _Product Owner Jennifer Bertsch requested this be prioritized for the next sprint ([Slack conversation](https://dsva.slack.com/archives/C05L6HSJLHM/p1721334455491939))._
- **7/25/2024**: The Report Outdated Information feature was removed from Production.\
  _Product Manager Lindsay Li-Smith confirmed this change and has updated OGC stakeholders ([Slack conversation](https://dsva.slack.com/archives/C05L6HSJLHM/p1721931488251949))._
- **8/27/2024**: VA Enablement advises to continue to omit ~500 representatives from Find a Rep search results due to invalid/incomplete addresses, since a key functionality is for Veterans to find representatives based on location. The OGC Accreditation tool still exists as a means to access information for these representatives.\
  _Confirmed in the ARM Leadership Sync ([meeting notes](https://dsva.slack.com/docs/T03FECE8V/F05SKGFB50Q?focus_section_id=temp:C:VBD109f834c96fe497bb35d622af))._
- **9/13/2024**: OGC's Benefits Law Group (Jonathan Taylor) requested to be informed when our team receives more than 5 reports of outdated information in one week. After discussion with Product Owner Jennifer Bertsch, agreed that we will share if we receive more than 5 direct reports and simultaneously focus on creating a solution wiht the ARF team; reports to the Contact Center will not be factored in.\
  _Confirmed by Product Owner Jennifer Bertsch ([Slack message](https://dsva.slack.com/archives/C06GE5N7QJ0/p1726258168134879?thread_ts=1726256358.678779&cid=C06GE5N7QJ0)) and this was communicated to OGC by Product Manager Lindsay Li-Smith via email "Question about messaging"._
- **9/19/2024**: Confirmed that we are not at risk for silent failures. \
  _Confirmed by Technical Lead Holden Hinkle ([Github ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93229))._
- **10/29/2024**: Updated address validation logic to handle instances where a representative has a mix of both P.O. Box and street address. In these instances, we will only display one or the other (whichever returns a valid location) and as a result some addresses will only show the P.O. Box or the street address (not both). \
  _Communicated by Product Manager Lindsay Li-Smith ([Slack message](https://dsva.slack.com/archives/C05L6HSJLHM/p1730218859270719))._
- **1/29/2025**: A link to Find a Representative was added to the VA.gov homepage.
  _Communicated by OCTO IA Lead Mikki Northuis [Slack message](https://dsva.slack.com/archives/C01K37HRUAH/p1743693072475529?thread_ts=1743614815.495879&cid=C01K37HRUAH)._
