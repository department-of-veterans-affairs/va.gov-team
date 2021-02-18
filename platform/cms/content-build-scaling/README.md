
Below is the CMS team's current thinking and plan for unblocking VAMC rollouts and improving our overall content build/deploy process including division of labor/responsibility. 

**Baseline Agreements**
 - Transformer solution has required a significantly higher investment than planned, and will continue to require significant investment for ongoing maintenance per product 
 - The graphQL multi-query upgrade that went to production Monday, 2/15 is proving to have more than halved build/deploy time such that currently we can safely have content deployments 1x/hour today 
 - We should therefore **stop** all transformer work and instead focus on a roadmap to continually improve the existing build/deploy process, including graphQL multi-query and infrastructure

**Content build/deploy performance and scaling roadmap**

***Current Sprint (CMS 26, FE Tools 46)***
 - **[CMS Team]** Create estimate number of nodes per VAMC to understand total number nodes required over time based on the VAMC upgrade roadmap (COMPLETE - [see estimate here](https://docs.google.com/spreadsheets/d/1pa0EgHuOXINvool4QHjV3lIDyYf-p9JRr8z1AuW4HFE/edit#gid=106613017))
- **[CMS Team]** Set up load testing by creating hundreds of thousands of nodes
- **[FE Tools Team]** Overall build performance improvements and create benchmark duration for all build/deploy steps other than the GraphQL query (current assumption is all other steps take 30 minutes)

***Next Sprint (CMS 27, FE Tools 47)***
- **[CMS Team]** Execute load testing to determine expected GraphQL duration at key points in the roadmap, and when added to all other build/deploy steps, determine the timeframe by which the current content build process will no longer support 1x/hour (fail point)
- **[CMS Team]** Generate pages.json files with each content volume increment
- **[FE Tools Team]** Implement 1x/hour content builds

***Subsequent 2-3 Sprints (CMS 28-30, FE Tools 48-50)***
- **[Public Websites/Facilities]** Optimize lengthiest graphQL response queries
- **[CMS Team]** Improve graphQL infrastructure performance
- **[ALL]** Continue graphQL monitoring, logging and benchmarking for build/deploy performance
