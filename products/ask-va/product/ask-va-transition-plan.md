# Ask VA Transition Plan
Last Updated: May 29, 2025

Team Oddball understands the criticality of a smooth transition and treats transition-out tasks with the same level of quality and importance as all other tasks on the Ask VA project. Understanding that this project will be delivered in an agile fashion, all documentation should be up-to-date and stored in a central workspace. However, a centralized plan will help communicate the current status of the project as well as provide helpful guidance on documentation, monitoring processes, and procedures that have been implemented. 

## Move Ask VA frontend to VA.gov
**Background:** The previous implementation of Ask VA (AVA) lived in a standalone Microsoft portal. The Microsoft portal was not mobile friendly, wasn't accessible, and didn't align with the VA design standards.

**Solution:** Bring the Ask VA frontend to VA.gov. Update the frontend to align with the VA.gov modernized platform. It should remain compatible with the existing Microsoft Customer Relationship Management (CRM) tool. 

**Success metrics:**
- ⬆ Form completion rate
- ⬆ Customer satisfaction/experience
- ⬆ Accurate routing

**Current status:** On May 15, 2025, we began routing 100% of users coming from the [VA.gov](http://va.gov) Contact Us to the new Ask VA experience. Full traffic from [ask.va.gov](http://ask.va.gov) was redirected to the new Ask VA portal on May 21, 2025.

| **Documentation** | **Purpose**|
|---|---|
|[Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/move-frontend%20Mar%202025/initiative-brief.md)|Provides an overview of this initiative|
|[Product guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/VA.gov%20Product%20Guide%20-%20Ask%20VA%20-%20Version%201.docx.pdf)|Overview of the product, user access, functionality and errors|
|[Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/release-plan.md)|Describes our phased approach to releasing on VA.gov|
|[Inquiry re-routing tables](https://login.microsoftonline.com/e95f1b23-abaf-45ee-821d-b7ab251ab3bf/oauth2/authorize?client%5Fid=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&response%5Fmode=form%5Fpost&response%5Ftype=code%20id%5Ftoken&resource=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&scope=openid&nonce=A09659BF7A3CABF7B8707B918BEB2F87DF3E5912E183C631%2DA87578F31FE0CD092B09CE2EA3AEB6828B8F3CE51C4FFEE7C7C7598911705C0E&redirect%5Furi=https%3A%2F%2Fdvagov%2Esharepoint%2Ecom%2F%5Fforms%2Fdefault%2Easpx&state=OD0w&claims=%7B%22id%5Ftoken%22%3A%7B%22xms%5Fcc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&wsucxt=1&cobrandid=11bd8083%2D87e0%2D41b5%2Dbb78%2D0bc43c8a8e8a&client%2Drequest%2Did=dc058ea1%2D3036%2D8000%2D5d2c%2D4829cdffa953) (SharePoint) | Outlines business lines in Ask VA their corresponding queues|
|[Figma](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=0-1&p=f&t=AF1HF7A4cEyvXQ6G-0)|Workspace for interface designs|
|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/r/1686859097688)|Workspace for flow diagrams, workshops, strategies and more|
|[Ask VA Private Repo](https://github.com/department-of-veterans-affairs/ask-va/)|Ask VA repo for private docs|
|[Public Github repository](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va)|Storage space for all public documentation related to Ask VA|

  **Action items:**
- Kick off [508 Compliance Ticket](https://github.com/department-of-veterans-affairs/ask-va/issues/1736)
- Implement STS Token
   - We have drafted the details on the STS token and stored it [here in Github](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2Fdepartment-of-veterans-affairs%2Fask-va%2Fblob%2Fmain%2Fdocs%2Fadr%2F0002-use-sts-token-to-transmit-icn-to-crm-for-authorization.md&data=05%7C02%7C%7C258639e8e8694b21a2de08dd9df93325%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638840415827042483%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=q6bTatW6Q%2BlvXn0jfbVzBQfgmThSs8ffn%2FhAy2gBY3w%3D&reserved=0).
- Confirm how the current CRM portal is managing to block users from accessing inquiries that don’t belong to them
   - Because the ask.va.gov portal and the CRM module are both reading and writing to the same back-end data store and live in the same environment, there is no API interface involved. Authorization is handled directly as part of CRM capabilities.
   - We think it is worth exploring whether any of these authorization capabilities (especially ‘External Identities’ and ‘Table Permissions’) could/should be used as part of the authorization flow for the CRM API, as an addition to or instead of the current approach of coding the authorization logic in the API routes themselves.
   - We have requested the CRM team work with Microsoft to get advice on this matter. 
- Implement learnings
- Reach out to Mark Dewey from Travel Pay to validate the app’s behavior
   - Confirmed that Travel Pay is utilizing an STS token. No further follow up required here.

## Keeping the lights on
**How (and when) to rollback to the classic experience:** The flow of users through the Contact-Us page of [VA.gov](http://va.gov) can be rolled back to 0% of users via a flipper. The redirect is managed by NEO. Becky has managed this redirect process with the group and submits an email request to <[NOCNetworkEdgeOperations@va.gov](mailto:NOCNetworkEdgeOperations@va.gov)>.

  Typically, production issues have been categorized using the following rubric:

| Severity   | Description                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------- |
| Severity 1 | Significantly impacts a user’s ability to submit an inquiry and get their question answered |
| Severity 2 | Fast follow, post launch items E.g. Missing content                                         |
| Severity 3 | Backlog E.g. Spacing issues, names not allowing apostrophes or hyphens                      |

| Priority - Denotes urgency within a severity category | Description            |
| ----------------------------------------------------- | ---------------------- |
| Priority 1                                            | Top priority           |
| Priority 2                                            | Less urgent but needed |
| Priority 3                                            | Low urgency            |
*Severity 1 issues are always prioritized Severity 1, Priority 1)

### Rollback criteria
**Only roll back if you cannot resolve Severity 1 and 2, Priority 1 issues.** Rolling back to the classic Ask VA portal is a last resort. 

|Severity|Description|
|---|---|
|Blocking Issues (Severity 1 and Severity 2, Priority 1) |Events or Errors where a user’s core functionality of AVA cannot be executed.<br><br>Examples:<br><br>- Can’t complete a question (can’t answer a required field)<br>    <br>- Can’t sign in<br>    <br>- Can’t read the details of my answer from the VA\| Roll back to Ava Classic<br>    <br>- Inquiry details don’t enter CRM - Submitter submits but the details don’t follow down stream ||Non-blocking (Severity 2, Priority 2 and below)|Non Fatal errors include minor design issues and impact to non required fields.<br><br>Examples:<br><br>- Can’t answer a non required field<br>    <br>- Can’t check the status of my inquiry while not authenticated|

Confirm prioritization of production issues with VA Product Owners. All team members are in the #ask-va-notifications channel. After-hours monitoring isn't necessary.

## Datadog Monitoring
**Background:** Datadog is the primary tool used by [VA.gov](http://va.gov)  software teams to monitor system health, performance, and behavior. Since the previous Ask VA version was not on [VA.Gov](http://va.gov), a new Datadog dashboard needed to be created. In addition to the dashboard, Datadog has been configured to send alerts to Slack.

**Current status:** The Ask VA Datadog has been set up and the widgets have been configured to track the metrics listed in the performance section of the [KPI document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md). With that said, all activity is logged in Datadog so no data is “lost” despite only focusing on these metrics.

| Link                                                                                                                                                                                        | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Ask VA Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/ye3-k3q-unc/ask-va-dashboard-playground?fromUser=true&refresh_mode=paused&from_ts=1748350860000&to_ts=1748437200000&live=false) | Ask VA dashboard which displays metrics based on these [performance KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/KPIs.md) |
| [Ask VA Monitor Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/ask-va-monitor-playbook.md)                                 | Github document that outlines required access and high level troubleshooting steps                                                                                                   |
| [Datadog Status Codes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/datadog_statuscodes.md)                                        | Github document that explains the main status codes tracked in Datadog                                                                                                               |
| [Ask VA Slack Alert Channel](https://dsva.slack.com/archives/C07U2R1CM6Z)                                                                                                                   | Slack channel with Ask VA Datadog error notifications are sent to                                                                                                                    |
| [Ask VA Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/InfoSec/ask-va-incident-response-plan.md)             | Detailed plan for handling critical issues                                                                                                                                           |

  **Action items:**
- Train Watch Tower OCTO Team member to our Datadog dashboard and explain when to escalate errors.

## Quality Assurance

**Background:** The majority of the phase 1 testing was conducted manually based on test scripts that cover various scenarios or flows within the Ask VA application. These scripts have been moved to TestRails under the "Ask VA" project.

Cypress tests have been written based on the TestRails cases, and a small subset of tests run in the pipeline. With that said, the recommendation is to run the larger Cypress suite on reoccurring basis in order to catch potential issues ahead of time. 

| Link                                                                                                                                                     | Description                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Ask VA Test Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/test-plans/ask-va-test-plan.md) | High level test plan for Ask VA phase 1                                                                                                                |
| [TestRails Project](https://dsvavsp.testrail.io/index.php?/projects/overview/98)                                                                         | All manual Form and Dashboard manual test scripts have been moved here. These scripts mirror those in the spreadsheets linked in the Ask VA Test Plan. |
| [Cypress Test Folder](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/ask-va/tests/e2e/fixtures/flows)         | Cypress tests have the same ID as the manual test scenarios.                                                                                           |

**Action Items:**
- Build Insomnia test suite
- Establish a cadence to run larger Cypress test suite

## Collaboration Cycle/Staging Review

**Background:** Collaboration Cycle is a mandatory governance process that all VA product teams must follow in order to launch new products or major initiatives. The final touchpoint in the cycle  is the "Staging Review" in which the platform governance team tests an app to find any potential launch blocking issues.

All Ask VA launch blocking issues have been addressed however there are still several issues that are open which need to be prioritized.

| Link                                                                                                            | Description                                                                                        |
| --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [Ask VA Staging Review Tickets](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1089)   | List of issues discovered by the platform governance team during their review of Ask VA in phase 1 |
| [Ask VA Collaboration Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62304) | Ticket includes all the various touch points and related documentation for each.                   |


**Action Items:**
- Review and prioritize remaining Staging Review tickets.



## Ask VA Phase 2 Projects

### Prefill topic questions with NLP data model

**Background:** To route their question to the right place, Veterans have to answer multiple questions. These category, topic, and subtopic questions require a Veteran to choose from a long list of options.

**Solution:** Auto-classifying categories, topics, and subtopics needed to route Veteran inquiries to the right place.

**Success metrics:**
- ⬆ Form completion rate
- ⬆ Customer satisfaction/experience
- ⬇ Time to submit form

**Current status:** We’ve defined a design strategy for surfacing predictions to users and created prototypes that are ready to test. Lylybell Teran and Jacob Cheriathundum are leading the ML/data model work: [See their latest update](https://github.com/orgs/department-of-veterans-affairs/projects/1033/views/24?filterQuery=&pane=issue&itemId=107297921&issue=department-of-veterans-affairs%7Cask-va%7C1779).

| Documentation                                                                                                                                                                                                                        | Purpose                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/prefill-nlp%20June%202025/initiative-brief.md)                                                                  | Provides an overview of this initiative                         |
| [Design strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Strategy/Phase%202/2025-03%20Design%20strategy%3A%20Categories%2C%20topics%20and%20subtopics%20in%20Phase%202.md) | Describes a proposed approach to surfacing predictions to users |
| [Figma](https://www.figma.com/design/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form---Phase-II-exploration?node-id=517-78036&p=f&t=cscy5dUXW5L9SNSL-0)                                                                                           | Workspace for interface designs                                 |
| [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/r/1686859097688)                                                                                                                                                      | Workspace for flow diagrams, workshops, strategies and more     |
| [Public Github repository](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va)                                                                                                                | Storage space for all public documentation related to Ask VA    |

### Ask VA Phase 2
**Background:** After launching on VA.gov, we plan to make quick, responsive improvements to the product while also bringing partners along on the journey.

**Current status:** The design team is undertaking initiatives to inform near- and further future product improvements.

| Documentation                                                                                                                                                     | Purpose                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [Phase 2 initiatives](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/Phase%202%3A%20Initiatives.md)            | Describes the phase 2 initiatives we planned Jan to March 2025 |
| [Status update](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Strategy/Phase%202/2025-04%20Status%20update.md) | Describes an update on past and ongoing phase 2 design work    |

**Action items:**

- [107821](https://github.com/department-of-veterans-affairs/va.gov-team/issues/107821) - Follow up with Content and IA team on their review of helpful links MVP.


### Proof of concept for chatbot integration

**Background:** A user should be able to start asking a question through chatbot and when chatbot is unable to answer, they can complete an Ask VA inquiry submission through the chatbot interface.We developed a prototype that shows a potential option for integrating Ask VA with chatbot. 

**Current status:** The design team has completed the prototype. Additional kick off sessions with Chatbot are needed.

| Documentation                                                                                                                                                                                                | Purpose                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| [Designs](https://www.figma.com/design/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form---Phase-II-exploration?node-id=763-6807)                                                                                           | Shows the latest designs on this project |
| [Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Strategy/Phase%202/2025-04%20Chatbot%20%3C%3E%20Ask%20VA%20integration%20design%20ideas.md) | Details the latest logic on this project |

**Action items:**
- Re-confirm with Chatbot the joint team priorities on this project
