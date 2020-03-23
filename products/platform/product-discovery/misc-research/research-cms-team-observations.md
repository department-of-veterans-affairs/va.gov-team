## **CMS Team Testing Paint Points Interview Observations**

Kevin Walsh: Product Owner

Jeff Brauer: Delivery Manager

### Problem Description #1

- Kevin H. testing new navigation design strategy for Pittsburgh

- Code deployment sequence: sandboxes > dev > staging > prodNew content deployment sequence: prod > staging > dev > sandboxes

- Kevin needed to test the new navigation code with the latest content in staging where they meet. Needed to make some content changes for the test case.  Froze staging for 2 weeks to do that.  We had to turn off continuous deployments to minimize risks to their user testing. 



#### Desired Solution Approach

- We need more places than staging.va.gov where latest content and pre-prod code meet. For demos, e2e testing of a feature branch (one environment for an epic), content sandbox.We’re probably not the right team to push forward an architecture.

Challenges: building a non-technical UI for choosing between two different branches at least, selecting the right prod copy cadence



### Problem Description #2

- Broken links in content that prevent builds from working. Worst-case scenario: an emergency notification needs to go out but a broken link elsewhere in CMS is preventing deployment. 

- Specific example: Content editor for Pittsburgh made a change that broke the Future Events page which resulted in code deployments to production being blocked. 



#### Desired Solution Approach

- Preview feature for CMS: get feedback on broken links, accessibility, plain language before hitting send. 

- Accessibility finds problems that are not about accessibility but still impact quality.Build more resilience, less false positives



### Problem Description #3

- Redirects - coordination around changing URLs is unwieldy, not scalable. 

- Need unified approach.



## Pain Point Ranking

1. Fragility of CMS 

2. Redirects system - there is a workaround 90% of the time but should be automated to save engineering time and merge the 3 places changes currently need to made. (Work with Content & IA team)

3. Testing environments for user testing, e2e testing, and demos - workaround is we create a PR environment on a case-by-case basis. Missing features to copy from prod again, chose prod version.  Work on non-technical interface in progress.

4. Feature toggles - address issue where CMS BE deploys a change the FE did not expect resulting in an error message displayed on the page. Will need more coordination with new re-compete and upcoming changes to the content model.  (2020 initiative)



### Positives

- Great relationship with platform team 

- PRs are going really well
