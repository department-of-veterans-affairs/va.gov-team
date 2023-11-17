## Decision log - Police Transparency

### 11/15/2023 Police contact information source
From Michelle: Understanding about local editor input/access changed during a conversation with Police Services leadership in which we learned a single 24/7 non-emergency phone number will be made available via csv and any additional phone numbers and/or physical address will be best known/owned by local staff.

Access by local editors is post-MVP.

### 11/3/2023 Use single app page using a query to dynamically present facility level data
Summary of conversation just now with Mikki and Dave P - we're going with a version of Option 2 - single app page using a query to dynamically present facility level data (preferably by passing a query so the page can default to data for the facility the user has come from). This allows us to avoid blowing out the node count and creating duplicate high level police content while leveraging left nav, breadcrumbs, and URLs. We'll need to think through the accessibility points Laura made earlier related to page title and live regions. [See Slack thread](https://dsva.slack.com/archives/C0FQSS30V/p1698966435539929)

### 10/23/2023 Police page will be in Drupal at the facility level
- Early discussions had explored the Police page being front-end only. However, issues with menu placement and potential editor-capability in the future were cases for making this a Drupal page. For MVP, this page will be in Drupal with centralized content and data provided by data upload. Editors won't be editing this page in the MVP.
- Early discussions had explored the Police page being at the sytem level and linking to the page from the left hand navigation. However, issues with menu placement and discussion about the legislative intent being at the facility level were cases for making this a facility-level page. For MVP, this page will be at the facility level. Potential links to this page have been considered from a Prepare for Your Visit accordion or from the spotlight box. Initial comments from Platform collab cycle suggest the Police link might not be consistent with other links in the spotlight box. This comment will be updated pending final collab cycle feedback.
