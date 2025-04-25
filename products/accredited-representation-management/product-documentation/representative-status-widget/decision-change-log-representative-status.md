# Decision and Change Log: Representative Status

This document is actively maintained by Product Manager, Lindsay Li-Smith, and updates are made every Friday.

- **3/1/2024**: Determined that the data structure only supports the appointment of an entire VSO, not an individual VSO Representative. MVP designs were updated to reflect this existing data structure.\
  _Discussion between Lighthouse and ARM, with final confirmation from Product Owner Jennifer Bertsch ([slack conversation](https://dsva.slack.com/archives/C063D0M76HX/p1709313981607549))_.
- **:tada: 5/20/2024**: Released 1.0 (MVP) to 100% of users, published on the Find a Representative and accredited representative landing pages.\
  _([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/release-plan-representative-status-widget-1.0.md))._
- **6/13/2024**: Approval to move forward with representative status in Profile and MyVA with the understanding that Profile can head right into development, but research may be needed to validate the MyVA designs.\
  _Product Owner and Product Managers from Profile and My VA were on the call, with ARM team members ([meeting notes](https://dsva.slack.com/archives/C909ZG2BB/p1718293293151099))._
- **7/8/2024**: Associated 422 status with “No Rep” status.\
  _ARM and Lighthouse teams agreed on this approach on 6/3/2024 ([meeting notes](https://dsva.slack.com/docs/T03FECE8V/F05TTMJ9WG1?focus_section_id=temp:C:RLFf59cce7e67764a97a70aac286))._
- **7/12/2024**: Updated the Error state to reflect new language from CAIA and the VA Benefits Hotline 1-800-827-1000 phone number (no longer the MyVA411 number).\
  _Product Manager Lindsay Li-Smith requested a phone number via email “Phone Number for Active POA?” and Martin Caraway (VBA) provided the number for MyVA411 and the VA Benefits Hotline. MyVA411 was referenced at launch, but Product Owner Chante Lantos-Swett advised the MyVA411 number will not be helpful for understanding representative status (_[_Github ticket for this update_](https://github.com/department-of-veterans-affairs/va.gov-team/issues/86190)_)_.
- **9/19/2024**: Confirmed that we are not at risk for silent failures. \
  _Confirmed by Technical Lead Holden Hinkle ([Github ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93229))._
- **9/25/2024**: Confirmed that we are ready to move forward with implementing the Representative Status designs in Profile (along with the MyVA link). \
  _Confirmed by Product Manager Lindsay Li-Smith ([Slack message](https://dsva.slack.com/archives/C909ZG2BB/p1727283149165399))._
- **3/6/2025**: Decided a standard alert + button is acceptable for the unauthenticated state.\
  _Confirmed by Product Manager, Lindsay Li-Smith ([Slack message](https://dsva.slack.com/archives/C05L6HSJLHM/p1741295898142749?thread_ts=1741290617.091169&cid=C05L6HSJLHM))._
- **3/26/2025**: Implemented the frontend helper and Pundit gem, to determine a user's representative status eligibility up front and reduce the 500 and 422 errors we get back from Lighthouse.
  _Implemented in this ([Github issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/85092))._
- **4/11/2025**: Additional checks for ICN and Participant ID (PID) were added to the frontend helper, to determine a user's representative status eligibility up front and reduce the 500 and 422 errors we get back from Lighthouse.
  _Implemented in this ([Github issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106509))._
- **4/21/2025**: Chose to keep links in Rep Status widget the same for the Profile experience, to maintain consistency for users as well as development.
  _Confirmed by Product Manager Lindsay Li-Smith ([Slack message](https://dsva.slack.com/archives/C05L6HSJLHM/p1745262466946299))._
