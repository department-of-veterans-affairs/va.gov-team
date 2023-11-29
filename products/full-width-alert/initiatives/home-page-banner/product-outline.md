## Home Page Banner Product Outline (v2.0)

Since the launch of VA.gov in 2018, we have supported/enabled "emergency communications/messaging" from VA leadership at OPIA with a Home Page banner alert.  The process by which that banner is used and deployed is **unique and problematic**.  In short:

- OPIA can publish on VA.gov homepage-only via an update to a yaml file with an HTML snippet on GitHub. This file is then PR'ed by a front end engineer on Public Websites, merged by platform after review and then deployed with hourly content builds. If the file needs to be pushed into production more immediately or during off-hours (evenings, weekends), the process requires Platform approval for an out-of-band deployment and a full content build (a process that can take up to one hour).

- There are multiple issues related to this process:

  - (1) **Single-threaded dependency** -- especially during off-hours -- on one knowledgeable Public Websites engineer (formerly Nick Sullivan, now Kelson Adams) to PR and promote the yaml file once it is updated by OPIA.  There currently is no "back up" plan if the Public Website engineer is unreachable.
  - (2) **Communication silo** - the way OPIA (aka Josh Tuscher) notifies VA.gov that the banner is going to be used/updated varies -- sometimes he reaches out to the Public Websites Product Owner via Teams, sometimes he contacts the PW engineer directly via mobile phone.  There currently is no "official notification" process in place that ensures this event is more broadly communicated and managed.
  - (3) **Risk of content error** - the yaml file approach requires OPIA to create or update content using what amounts to unstructured HTML mark-up.  As a result, there is no built-in link checking, spell checking, text formatting capability.  That has already resulted in content issues -- misspellings, broken links, formatting issues. Worth noting: During off-hours, weekends it is often the case that the OPIA author of the alert needs to make the change using his mobile device, increasing the risk of error.
  - (4) **Delayed publishing** - currently, the HP banner update involves a content build deployment, which happens hourly during normal work hours. An off-schedule deployment content build can take as long as an hour because of the processes involved (e.g. automated tests, etc.)  The business requirement is for the content to go live within 15 minutes of the update being authored and made available for PR.

![HP Banner](https://user-images.githubusercontent.com/63107147/126205733-c34132d0-8c11-4793-b4f0-93eca2e1ceef.png)

## The Problem to be Solved

**How might we make the process of creating or updating a VA.gov Home Page banner easier, faster and less risk-prone?**


## Proposed Solution(s)

**High Level User Story/ies**

As a content editor, I need to quickly publish error-free alerts on the VA.gov homepage at all hours, so that time sensitive information can reach Veterans.


**Requirements**
**[NOTE: In a 7/26 meeting with key players from CMS and Public Websites -- including Chelen, Walsh, Wirt, Hashimoto, Lloyd, Kelson -- the decision was made to focus effort on scoping out the CMS solution outlined as a Long-Term solve below.)**

- **Short Term: Improving the existing yaml file approach** (NOTE: In a meeting with key players from Public Websites, CMS -- including Chelen, Walsh, Wirt, Hashimoto, Lloyd, Kelson -- the decision was made to focus effort on fully scoping out the CMS solution
  - **Awareness & Response:** Create a communication channel from VA stakeholder (OPIA) that notifies multiple VA.gov team-members and Platform when a new or updated Alert is planned.
    - Idea: Create an integrated HP Banner Alert channel in Teams (used by OPIA) and Slack (used by VA.gov); this must be tied to the #oncall channel for off-hours support.
  - **Redundancy:** Ensure any FE engineer (including #oncall engineer) is trained to implement the HP Banner alert process.
    - Idea: Make this a Site-Ops/Platform responsibility, eliminating reliance on Public Websites engineer/team.
    - Idea: Make the "How to do" document available to all teams/developers on https://depo-platform-documentation.scrollhelp.site/index.html
  - **Publishing Speed** Create a fast-track publishing capability for the HP Banner Alert to ensure that once it is PR'ed, it can be deployed into production within 15 minutes.
    - Idea: Load data from public Github repo using React widget
      - Pros
        - does not require GFE access
        - does not depend on content build
      - Cons
        - malformed data could break homepage
        - adds additional source for content on va.gov outside of content build
        - handling of different environments (dev/stage/prod) unclear
      - Mitigations
        - add CI/CD tests to repo
 
 - **Long Term: Moving from yaml to Something Better**
   - Add HP banner content to CMS (More technical background about solutioning [available here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26991#issuecomment-875210594))
     - Pros
       - does not require OOB deploy
       - has built in error checking for mis-spellings, broken links, bad content formatting
       - uses existing content publishing pipeline
     - Cons
       - requires CMS/GFE access
       - requires CMS permissions and field
       - can be blocked by content build errors
     - Mitigations
       - improve specificity of permissions
       - have OCTODE staff perform content updates


   - **Mid Term: Refine the design of the HP alert banner to optimize readibility and Home Page UX overall**
     - https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/banners/sitewide-system-downtime-design-files
     - https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/full-width-alert
     - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/full-width-alert/design/VA-Emergency-alerts-spec.pdf

## Hypothesis or Bet

**If** we create a more robust, systematic approach to enabling HP banner alerts **then** we will reduce the litany of high profile risks (availability, timeliness, content errors) which exist now.


## Definition of done

**For Short Term Solution (Goal: Put in place by Sept. 1)**

- [ ] Set meeting with Platform for collaboration on improving communication, response, redundancy and speed to publish issues/gaps.
- [ ] Create tickets for solutioning

**For Mid Term Solution (Goal: Implement by Oct. 1)**

- [ ] Confirm recommended UX changes with Ryan T.
- [ ] Create ticket for backlog and implementation

**For Long Term Solution (Goal: Implement in Q1/2022)**

- [ ] Determine LOE for CMS solution and where it fits based on other CMS priorities
- [ ] Create ticket for backlog(s)

*Take into consideration Accessibility/QA needs as well as Product, Technical, and Design requirements.*

## Relevant Links

- [Public Websites 7/10 Epic from Mike Chelen](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26991)
- [New Rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/banners/Banner-Alert%20Rubric.md) 
- [Background](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/banners/banner-alerts.md)
- [Content Governance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/banners/VA.gov-homepage-banner-texts-preapproved-v5-020919.pdf)

## Additional Background

- Existing OOB deployment process is also blocked by broken links
- During business hours changes to `vagov-content` would be picked up by automated hourly deploy
- CMS provides manual "[Release Content](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/cms-content-release.md#cms-content-release)" button that is capable of deploying content in ~15 minutes

## Screenshots

- New HP Banner Alert design 

![image](https://user-images.githubusercontent.com/63107147/126380726-fc9eedc3-9dda-4c98-a192-d90fad0f6326.png)


## Status 


*Take into consideration Accessibility/QA needs as well as Product, Technical, and Design requirements.*

## How to configure this issue
- [ ] **Labeled with Team** (`product support`, `analytics-insights`, `operations`, `Console-Services`, `tools-fe`,`content-ia`, `service-design`, `vsa-*`)
- [ ] **Labeled with Practice Area** (`backend`, `frontend`, `devops`, `design`, `research`, `product`, `ia`, `qa`, `analytics`, `contact center`, `research`, `accessibility`, `content`)
