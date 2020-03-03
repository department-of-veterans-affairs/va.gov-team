# VSP Content & Information Architecture Team OKRs & KPIs

## Objectives and Key Results

### O: VFS and VSP team members can find all crucial documentation on their own

- KR1: Full set of crucial VFS and VSP documentation is accessible from a single entry point
- KR2: Public documentation resources have consolidated, functional search tool
- KR3: Implement standardized tracking of documentation support requests

### O: Documentation for VFS and VSP is robust and well-maintained

- KR1: Define core set of VFS and VSP documentation
- KR2: Implement tracking of VFS product teams with complete docs set
- KR3: Implement tracking of VFS team members updating docs at least 2x/month
- KR4: Increase in % of teams that undergo documentation offboarding review before their contract end date

### O: Scalability of and satisfaction with VSP’s Content and Information Architecture reviews continue to improve

- KR1: Implement at least 1 VFS-facing automated test for content or IA
- KR2: Implement OOO coverage process for all reviewing team members 
- KR3: Improvement in VFS ratings of review points 

### O: VA.gov meets VSP's content and IA standards

- KR1: Process implemented for IA health of VA.gov to be measured 2x/year
- KR2: IA health of VA.gov remains favorable throughout continued WBC efforts 
- KR3: Process implemented for content audits of VA.gov to occur quarterly to ensure plain language consistency

---
## Key Performance Indicators

| Metric | Related Hypothesis/(es) and Assumptions | Notes on Implementation | 
|---|---|---|
| IA health of VA.gov | Hypothesis: If we effectively support VFS teams in implementing "good IA" on VA.gov, then the findability of key content on VA.gov should remain at a healthy, successful baseline. | Need to implement quarterly or 2x/year IA checks on VA.gov |
| # documentation support requests per week | Hypothesis: If we ensure that documentation is in a findable, accessible place, then documentation support requests will decrease. | Need to implement tracking of all customer support Qs in global customer support super epic, and ensure that all documentation requests are being tracked and labeled appropriately. |
| # automated content & IA errors flagged for users | Hypothesis: As we implement better self-service and automated tests for content and/or IA, automated errors identified for teams building on VA.gov will increase in the short term. | Currently 0, need to implement metrics gathering as automated tests are implemented |

### Key Performance Indicators — Additional Ideas/Drafts

_Draft of KPI ideas as of 11/26/19. Note that measurement for *none* of these is currently implemented._

[Workshop with VSP Insights & Analytics](https://docs.google.com/spreadsheets/d/1eoYLCAV1pmE0CPXD4npgsPocJZMmvzp2E6lZJrMJgH4/edit#gid=1554481611)

[Pre-workshop planning](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/content-ia/kpi-setting-pre-workshop.md)

| Idea of Metric | Related Hypothesis or Assumption | Notes on Implementation |
|---|---|---|
| # of changes that occur in final content review | Assumption: If teams follow design patterns and content of current product while they are building on VA.gov, then we assume the burden of manual review will decrease. | This would just involve Peggy manually counting changes every time. Seems not ideal? Is there another way?| 
| # (or %) of teams engaging with us within 3 weeks of project kick off | Hypothesis: If teams engage with us closer to the start of their project, then we expect the support and review process to go more smoothly and be more successful. | Need ability to better track all projects and when they kick of |
|Number of manual reviews per team| Assumption (INVALID): More manual reviews is a sign of failure. This is not something we assume, particularly bc it is at odds with our goal to collaborate early and often. But is it worth tracking this anyway? | Need better tracking of support requests (and to label with requesting VFS team?). |
| IA "health" of VA.gov | Hypothesis: If we effectively support VFS teams in implementing "good IA" on VA.gov, then the findability of key content on VA.gov should remain at a healthy, successful baseline. | Need to implement quarterly or 2x/year IA checks on VA.gov — is this something we can/should do as platform? | 
| # automated content & IA errors flagged for users | Hypothesis: As we implement better self-service and automated tests for content and/or IA, automated errors identified for teams building on VA.gov will increase. | Currently 0! At least we would know what we're starting with. |
| # manual content & IA errors flagged for users | Hypothesis: As we implement better self-service and automated tests for content and/or IA, manual errors (ex. during Peggy's content review) flagged for users will decrease. | Similar to first idea — measuring manual errors or changes would likely be very manual. |
| # broken Slack links to documentation | Assumption: People use Slackbot links to find documentation. | We know very little about Slackbot documentation links, so we'd have to start there.|
| # broken links within documentation itself | Hypothesis: If crosslinking within documentation is implemented correctly and effectively, self-service will improve. | We can measure this! (Maybe a combo of "links to outside of repo" and "broken links in repo"?) Does it make sense to implement this measurement for `va.gov-team` though when we are about to embark on a larger documentation site MVP? | 
| # clicks to find documentation | Hypothesis: If we put important documentation in places that are easy to find, people will have to click less to find it. | Seems very useful to know but how would we implement this? | 
| Time spent searching for documentation | Hypothesis: If we put important documentaion in places that are easy to find, people will spend less time searching for it. | Seems very useful to know but how would we implement this? | 
| User time spent on documentation site | Assumption (is this valid??): The more useful the documentation site is, the more time people will spend on it. | Could this be implemented fairly easily using Google Analytics? Can we use GA in GitHub? | 
