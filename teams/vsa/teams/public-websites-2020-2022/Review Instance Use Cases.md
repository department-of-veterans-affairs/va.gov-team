# Unauthenticated Crew - Review Instance Use Cases 

### Team Crew Chief:
PO: John Hashimoto 

### Public Websites:
PM: Brian A. Lloyd
FE: Nick Sullivan
FE: Kelson Adams
Design: Cassandra Allen
Research: Cindy Merrill

### Search and Discovery:
PM: Denise Coveyduc
FE: Samuel Suddath
Design: Megan Gayle

### Decision Tools:
PM: Marci McGuire
FE: Zachary Morel

## Table of contents
- [Staging/Review Pain Points](#stagingreview-pain-points)
- [Feature Flag Challenges](#feature-flag-challenges)
- [Off Cycle Pain Points](#off-cycle-pain-points) 
- [Interim Solution](#interim-solution)


**Intented Use of this Document:** VFS teams have been asked to document in GH Read-me their use case, and exactly what they are trying to do which cannot be accomplished using review instances or feature flags. 
VFS teams in the Unauthenticated Crew will document pain points, findings and Use cases in this document for use by Platform for solution finding activities forward. 

## Desired Outcome: 
Keep pace (remain agile) but ensure safeguards/rails are in place to mitigate off-cycle deploys. 

## Staging/Review Pain Points 
### Top level challenges with current staging/review instance environment:
1. Deployment Time:  Its a well known program wide issue that 'too many people pile on merges' which clog the system and bog down progress.  The other issue is that there are so many test that a build+test cycle takes a very long time.  Desired need is to reduce deployment time: commit merged to deployment on PROD was less than 10 minutes.
2. Useless in testing FE changes:  Staging.va.gov is relatively useless when testing for Front end changes before they go out to prod.  FE/PM/POs don't have confidence the changes applied have been merged into "main" will be on stating in an hour or so.  In fact, its very likely that if we mrege FE code into 'main' it will end up on staging until later that night after work hours for those needing to validate.
3. Off Cycle Deployments: There should be some sort of shortening of the build + ceremony processes for off cycle issues (See off-cycle pain points)
4. Time on Staging: Time on Staging is not a feasible window for review and validateion. It would be optimal to have at least 24 hours of testing on staging before things get push to production environment. 
5. Need a Sandbox Environment:  A sandbox environment would allow for more bake time in staging in order to reduce the amount of off-schedule deployments, validate builds and code in depth and ensure safe integration once promoted to production environment. 
6. Back end datasets are not always consistent across environments. There are times when data cannot be synced quickly enough in the Staging environment and is not present on review instances. (Mark Viterna - Lighthouse Team)
7. One long-standing issue we’re painfully aware of on the Facilities team is that the staging API uses a subset of PPMS data, which leads to very different search results for community care providers. That’s not likely to change. (Michael Pelz-Sherman - Facilities Team)
8. Worth noting: Review instances are difficult for those without engineering backgrounds to get into due to having to configure the SOCKS proxy. This is reducing their value as a development and review tool because some folks have been relying on developers to send updated screenshots or finding other mean to share their early-stage work. (More [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11629))
9. Stable and reliable review instances would solve a lot of engineer testing problems and requirements, however a clear communication chain has not been established. Who owns these instances? Who fixes them when they break, or ensures they are working properly? Do they operate with a working FE + BE together to test changes that require both environments?
10. Review instances may not lend themselves to testing on different devices (mobile, tablet).

## Feature Flag Challenges 
### Top level challenges with Feature Flag implimentation: 
The process of creating & using a feature toggle is:
1. create feature flag in vets-api (requires vets-api PR)
2. add/modify feature flags in vets-website (requires at least 1 vets-website PR)
3. add/use feature flag in React code (e.g. tools like YR, find forms, etc.) (requires at least 1 vets-website PR)
4. unable to use feature flags in liquid (there are ways, but it's hacky)
5. The challenge is when we want entire apps or large-scale features to be behind feature flags, the process above is sufficient (albeit time-consuming).  when we want to make little tweaks or minor improvements, but have those improvements behind feature flags, the process is choking. each PR that is sent up has to run through CI and the order of the PRs have to happen sequentially (they can't happen concurrently) since, for example, step 2 is dependent on step 1 being deployed to vets-api production, etc.
6. The act of removing the feature flag opens the possibility of inadvertendly introducing defects. 

## Off Cycle Pain Points 
### Challenges with current off-cycle request process:
1. They often come at the end of the day
2. People are often panicking (solving mode)
3. Big stakeholders often want to get involved (diagnose/troubleshot)
4. Asking for off-schedule permission is relatively easy (scary but easy)
5. Waiting for 5 hours is not optimal (Too Long to apply any needed fixes)
6. A non-standard format AND location for the required post mortem documentation leads to scariness for teams that haven't done one before.  Process needs to be baked, trained.
7. Post Mortem Value: Post mortem should be SHORT but PACKED with useful info, action items should be made into tickets immediately imho as otherwise the action items just get lost in the doc that no one looks at afterwards

## Interim Solution 
### Current process for validating in socks 'DEV' environment: 
In an effort to ensure a safe and stable eniroment the unauthenticated crew has implimented a new code-review-stage-deploy process/protocols, which is outlined below:
PO and PMs to be equipped with Socks to enable build reviews for sign-off before moving code into staging and then production (which, as we know, are almost the same thing … unless a feature flag is used)
Adding a new Review requirements element into our Acceptance Criteria (AC) where we will flag each ticket as either:
- (a) Tier 1 (must be validated in Socks by PO + PM + (if UX) Design Lead; 
- (b) Tier 2 (must be validated in Socks by PM or PO); or 
- (c) Tier 3 (no Socks validation necessary — e.g. bugs)
As re: Validation — Accessibility and Analytics only tickets go through our standard staging process (since we PM/POs can’t validate those)
