## Outcome Summary
The Lighthouse Claims API will retrieve a veteran's claim status information from CorpDB, the database of record, using the BGS service gateway. Currently, EVSS API retrieves status information, but, historically, it has been difficult to iteratively improve this service. By migrating claims status end points over to Lighthouse, we will be able to more efficiently pursue our product goals and improve the performance of the application.  

**Related/Associated product(s)**
- Product | Link to product outline 

## Problem

* The transactions costs around collaboration have been high, it has been difficult to conduct joint discovery to determine what opportunities there might be to expand the number of attributes available for the Claim Status Tool. As a result, the pace at which we can pursue valuable bets and iterate on the status experience has been greatly reduced. 
* It is difficult to determine objective measures of application performance metrics related to the API calls being made. For example, metrics around latency are extremely limited.
* When bugs or user pain points surface, service improvement is often delayed because problem definition, root cause analysis, and implementation approaches requiring multiple teams to collaborate often get delayed due to process hurdles such as aligning roadmaps and seeking stakeholder approvals. 

## Desired User Outcomes
- Veterans experience better application performance
- Over time, veterans are able to receive more reliable and useful information related to their claims so that their expectations are managed and they know what actions they can take to reduce the time waiting for a favorable decision.
- Veterans get their pain points addressed faster.

## Desired Benefits Crew Outcomes
- The Benefits Crew is able to collaborate with a willing partner in Lighthouse to pursue big bets that require an expansion of the claims end point infrastructure.
- The Benefits Crew is able to more rapidly iterate on CST functionality.
- The Benefits Crew is able to more effectively diagnose bugs and pain points and determine which team is able to fix the issues. 
- The Benefits Crew is able to monitor application performance more effectively.

---
## Measuring Success

### Key Performance Indicators (KPIs)

- Number of reliable performance metrics we measure related to load times:
  - baseline: currenty, we don't have any
  - Target: at least one
- Number of joint intiatives between Lighthouse and Benefits Team 1 to improve the CST:
  - baseline: this initiative is the first
  - Target: 2 additional by the end of 2023
- CST Avg. Medallia score:
  - baseline 2.3
  - Target: 4.5
- Number of attributes added to claims API:
  - baseline 0
  - Target: (dependent on future initative goals)

---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - Low risk: The initial migration will not be adding any additional functionality or features for end users, but performance, such as load times, should improve.
- **Usability Risks** (can people figure out how to use it):
  - We need to ensure that the new end points are actually working. There is a risk that we could migrate to Lighthouse end points and miss something critical that causes CST to omit critical status information or, worse, supply the wrong information. To mitigate this we are setting up reliable testing environments and creating documentation that captures the way we are mapping attributes.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Low risk: Lighthouse is an established and trusted provider of API services, already able to interact with the BGS services gateway and already providing API services to existing VA applications. 
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - VA as an organization has made this migration a priority. 

### What're we building
- The scope of this initiative is to migrate the existing claims-status API service over to Lighthouse.
- We are not migrating the document service that allows veterans to submit additional evidence. That service will remain with EVSS.

--- 

## Launch Planning

### Timeline 
- Phase 1: End point migration from EVSS to Lighthouse (Dec 2022 - Jan 2023)
- Phase 2: Joint discovery on CorpDB data schema (Jan 2023 - February 2023)
- Phase 3: Make and pursue core bets (March 2023 - Dec 2023)

---

#### Communications

<details>

- Team Name: Benefits Team 1
- GitHub Label(s): lighthouse, claim-status-tool
- Slack channel: benefits-team-1
- Product POCs: Jacob Worrell

</details>


#### Stakeholders

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Matt Self
 
</details>


