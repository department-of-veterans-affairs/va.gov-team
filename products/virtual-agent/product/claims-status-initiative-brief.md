# Claims Status Initiative Brief
#### Overview
 
Design and build an updated Disability Claims Status Flow as part of the VA.gov Chatbot. The new Claims Flow will include: Bot can provide a) a definition of the phase, b) a general claim timeline, and/or c) details within the phase (micro-transaction). The bot can direct users to other VA tools (ex. Claims Status Tool, VA.gov pages) where information can be found

---

## Outcome Summary
> *Provide the Veteran with a seamless and improved experience in finding information about their disability compensation claim status between details provided via the Chatbot, Claims Status Tool, and across other VA sources. Increase the rating of the end of the Claims Status Flow feedback survey in the Chatbot.*

**Associated Resources**
- [Virtual Agent Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/product/product_outline.md#key-decisions)
-  [Mural Board](https://app.mural.co/t/bahdigitalexperience6902/m/bahdigitalexperience6902/1701799055287/d5c1955ce52357dc4ab722475e0e4b897d744a97?sender=u33fd25fc99268b6df9ee9781)
- [Figma](https://www.figma.com/file/Zt0srMa4SNohWlGbBJmfzT/Chat-bot-claims?type=design&node-id=1628%3A9654&mode=design&t=WnH12bhglHb1aduB-1)
- [Github Epic](https://app.zenhub.com/workspaces/chatbot---benefit-microservices-65b953e667bb36095e6fd305/issues/gh/department-of-veterans-affairs/va-virtual-agent-benefits/5)
- [Chatbot Transcript Analysis](https://dvagov.sharepoint.com/:w:/r/sites/OmnichannelExperience/Shared%20Documents/VA%2[…]x?d=w8fa883698900410382fa773df719d1aa&csf=1&web=1&e=RFFAH7)

## Problem
> *What is the problem and who is affected?*
- At this time, this chatbot can only show a Veteran status information on compensation claims that are currently in progress. The chatbot will provide the date the claim was filed and the current phase that the compensation claim is in. All other details of the in-progress claims and other claims must be found via the Claims Status Tool or through an agent. To provide a seamless experience across VA platforms and channels, the Chatbot should have the same capabilities in this area as other tools on the VA platform, such as the Claims Status Tool. Responding to select claims status details and not providing details to the veteran could harm the veteran's confidence in the bot over the long term.   

> *What evidence do we have of the problem?*
- A transcript analysis review of the existing Chatbot Claims transcripts from June 2023-November 2023 provides insight into the current Claims flows including flows that include general information on claims, appeals, VCL, and more. This analysis has found that 57.39% of users did not mean to ask or were not satisfied with the answer about compensation claim status. 30.28% of users left the chatbot without answering the end-of-chatbot satisfaction survey.

## Desired User Outcomes
> *Why would a user want to use this?*
- *The Chatbot will share the number of compensation claims on file, the most recent claim opened, the date it was opened, and the related issues*
- *The Chatbot will share details on the step of the claim process that disability compensation claim is in including the current status of the claim: pending, claim received, initial review, evidence gathering review decision, preparation for notification, complete, errored, canceled, etc.*
- *The Chatbot will share when the claim moved status and the date the status changed*
- *The Chatbot will provide recent updates for the veteran to learn about the last activity done to the compensation claim. The chatbot will share the activity, date submitted, and any actions needed from the veteran*
- *The Chatbot will provide the veteran with the average number of days it takes to complete a disability compensation claim (provided by VA.gov) as of the most relevant date*
- *The Chatbot will provide the veteran with a phone number (1-800-827-1000) to click-to-call to answer questions related to disability claims status that the chatbot cannot answer*

## Undesired User Outcomes
- veterans are looking for details on their supplemental claims or appeals and expect information from the claims status flow

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
<table style="width:100%">
  <tr>
    <th>Goal</th>
    <th>Metric</th>
    <th>Notes</th>
    <th>Source</th>
  </tr>
  <tr>
    <td>Content answers the user’s question adequately.</td>
    <td>Did that answer your question?</td>
    <td>Yes/No question.</td>
    <td>Transcript</td>
  </tr>
  <tr>
    <td>Content answers the user’s question adequately.</td>
    <td>CSAT Survey</td>
    <td>Likert scale question. Only available if the user answers “Yes” to “Did that answer your question?”</td>
   <td>Transcript</td>
  </tr>
   <tr>
    <td>Content answers the user’s question adequately.</td>
    <td>Abandonment Rate</td>
    <td>User leaves the chat without answering “Did that answer your question?”</td>
   <td>Transcript</td>
  </tr>
   <tr>
    <td>Track user engagement</td>
    <td>% of chatbot interactions that go to Claims Status Skill</td>
    <td>Numerical value</td>
   <td>Transcript</td>
  </tr>
   <tr>
    <td>Ease of access</td>
    <td>Claims Status Link accessed</td>
    <td>Numerical value</td>
   <td>GA/Domo</td>
  </tr>
   <tr>
    <td>Alternative support accessed</td>
    <td>Click to Call Link accessed</td>
    <td>Numerical value</td>
   <td>GA/Domo</td>
  </tr>
  <tr>
    <td>Alternative support accessed</td>
    <td>AVA link accessed</td>
    <td>Numerical value</td>
   <td>GA/Domo</td>
  </tr>
</table>

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks**: 
  - Will Veterans use the claims status flow feature?
  - Will Veterans use the Voice-activated claims status flow feature?
- **Usability Risks** (can people figure out how to use it):
  - Will disabled Veterans be able to access the claims status flow feature?
  - Is accessibility a concern?
  - Does voice activation work consistently?
  - Is there a risk in not being able to easily transfer between skills?
  - 
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Clashing of JOVO, Proxy bot and Main Chatbot
    - Authentication Issues
    - API Errors
    - VA.gov Site Crashes
    - Issues with Scraping VA.gov for the Average Number of Days to Complete a Claims
    - Inability to Communicate with Backend Server
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Usability testing indicates that Veterans are interested in the expansion of Chatbot features.
  - Examination of chatbot transcripts indicates Veterans are looking for more information on the status of their claims.

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows.*
- Bot can provide a) a definition of the phase, b) a general claim timeline, and/or c) details within the phase
- Bot can direct users to other VA tools (ex. Claims Status Tool, VA.gov pages) where information can be found
> *What have you explicitly decided to **not** include and why?*
- The Claims Status flow will not provide the veteran with their disability rating as part of the flow. The Decision Letters topic also references disability ratings and we do not want veterans to only access their combined and individual disability ratings within the Claims Status Skill.

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
- Internal communications between OCTO, VES, VEO, and OCC (VHA)

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
- The Claims Status Skill would have been deployed to the development environment as of the week of 2/5/24, but was blocked due to a Skill manifest registration issue, blocking development in Dev Env, testing in Dev Env, and testing of Machine Learning trigger phrases in Dev
- UX Test Sessions occured the week of 1/29, test analysis followed from 2/5-2/15
- Dev API Coding completed the week of 1/1/24
- Dev Claims Flow Skill Framework Onboarding completed the week of 1/1/24
- Dev Began Work on Custom Validators for Keyword Matching & Fallbacks the week of 1/29/24
- Transcript analysis occurred from 12/15/23-1/15/24
- Machine Learning developed Trigger Phrase Test Plan Analyses from 2/5/-2/15/24
- Dev Completed the Scraping of the Average Number of Days from VA.gov the week of 2/5/24
* [Link to Release Plan for this Initiative](https://app.mural.co/t/bahdigitalexperience6902/m/bahdigitalexperience6902/1701799055287/d5c1955ce52357dc4ab722475e0e4b897d744a97?wid=0-1704204590877&outline=open)

#### Initiative Launch Dates
- *Target Launch Date*
  - March 28, 2024
- *Actual Launch Date* 
  - April 11, 2024

---
   
## Screenshots

### Before

### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: VA Chatbot, Benefits Microservices
- GitHub Label(s): va-virtual-agent
- Slack channel: va-chatbot-claims
- Product POCs: Luciana Morais, Nathalie Rayter

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCC (VHA), OCTO, VES, VFS, VBA
- Contact(s): Luciana Morais (OCTO), Nathalie Rayter (VES)
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
