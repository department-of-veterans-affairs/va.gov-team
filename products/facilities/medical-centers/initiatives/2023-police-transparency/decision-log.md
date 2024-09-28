## Decision log - Police Transparency

### 1/4/2024 Additional Contact information
In UX sync, it was decided that we will use the VAMC Facility Non-clinical Service content type to expand the police contact information available. [Options considered and rationale](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16415) 

### 12/14/2023 Page last updated date
In UX sync, it was decided to not show the usual Page last updated date at the bottom of the web page. This would be confusing for Veterans as it may conflict with data fields above. This applies to MMVP as well as MVP.

### 12/6/2023 MVP scope
In sprint planning, it was decided that with one full sprint left before code freeze, the scope of the Police page would be limited to displaying contact information (phone number) and FAQs. FAQs are already built in Drupal and can be edited. Contact information was provided this day as a csv file. The csv file is currently missing facility ID. The field Telephone Ops contains the information that should be used for contact numbers. It is generally at the system level, so one number will be displayed per system for MVP. This information will be in Drupal to be displayed on the front end.

### 11/15/2023 Police contact information source
From Michelle: Understanding about local editor input/access changed during a conversation with Police Services leadership in which we learned a single 24/7 non-emergency phone number will be made available via csv and any additional phone numbers and/or physical address will be best known/owned by local staff.

Access by local editors is post-MVP.

### 11/3/2023 Use single app page using a query to dynamically present facility level data
Summary of conversation just now with Mikki and Dave P - we're going with a version of Option 2 - single app page using a query to dynamically present facility level data (preferably by passing a query so the page can default to data for the facility the user has come from). This allows us to avoid blowing out the node count and creating duplicate high level police content while leveraging left nav, breadcrumbs, and URLs. We'll need to think through the accessibility points Laura made earlier related to page title and live regions. [See Slack thread](https://dsva.slack.com/archives/C0FQSS30V/p1698966435539929)

### 10/23/2023 Police page will be in Drupal at the facility level
- Early discussions had explored the Police page being front-end only. However, issues with menu placement and potential editor-capability in the future were cases for making this a Drupal page. For MVP, this page will be in Drupal with centralized content and data provided by data upload. Editors won't be editing this page in the MVP.
- Early discussions had explored the Police page being at the sytem level and linking to the page from the left hand navigation. However, issues with menu placement and discussion about the legislative intent being at the facility level were cases for making this a facility-level page. For MVP, this page will be at the facility level. Potential links to this page have been considered from a Prepare for Your Visit accordion or from the spotlight box. Initial comments from Platform collab cycle suggest the Police link might not be consistent with other links in the spotlight box. This comment will be updated pending final collab cycle feedback.
