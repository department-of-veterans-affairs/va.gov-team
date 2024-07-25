# Decision and Change Log: Find a Representative

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
- **6/7/2024**: Removed the “Other” text input in the Report Outdated Information modal, because users were entering PII. All PII data has been removed.\
  _Initiated by Program Manager Parker Baranowski, managed by the ARM team, with VA Enablement staying informed ([post mortem - awaiting review](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/pull/1722#pullrequestreview-2130200755))._
- **7/18/2024**: Decided to remove the Report Outdated Information feature.\
  _Product Owner Jennifer Bertsch requested this be prioritized for the next sprint ([Slack conversation](https://dsva.slack.com/archives/C05L6HSJLHM/p1721334455491939))._
- **7/25/2024**: The Report Outdated Information feature was removed from Production.\
  _Confirmed by Product Manager Lindsay Li-Smith ([Slack conversation](https://dsva.slack.com/archives/C05L6HSJLHM/p1721931488251949))._
