## Home Page Banner Product Outline (v2.0)

Since the launch of VA.gov in 2018, we have supported/enabled "emergency communications/messaging" from VA leadership at OPIA with a Home Page banner alert.  The process by which that banner is used and deployed is **unique and problematic**.  In short:

- OPIA can publish on VA.gov homepage-only via an update to a yaml file with an HTML snippet on GitHub. This file is then PR'ed by a front end engineer on Public Websites, merged by platform after review and then deployed with hourly content builds. If the file needs to be pushed into production more immediately or during off-hours (evenings, weekends), the process requires Platform approval for an out-of-band deployment and a full content build (a process that can take up to one hour).

- There are multiple issues related to this process:

  - (1) **Single-threaded dependency** -- especially during off-hours -- on one knowledgeable Public Websites engineer (formerly Nick Sullivan, now Kelson Adams) to PR and promote the yaml file once it is updated by OPIA.  There currently is no "back up" plan if the Public Website engineer is unreachable.
  - (2) **Communication silo** - the way OPIA (aka Josh Tuscher) notifies VA.gov that the banner is going to be used/updated varies -- sometimes he reaches out to the Public Websites Product Owner via Teams, sometimes he contacts the PW engineer directly via mobile phone.  There currently is no "official notification" process in place that ensures this event is more broadly communicated and managed.
  - (3) **Risk of content error** - the yaml file approach requires OPIA to create or update content using what amounts to unstructured HTML mark-up.  As a result, there is no built-in link checking, spell checking, text formatting capability.  That has already resulted in content issues -- misspellings, broken links, formatting issues. Worth noting: During off-hours, weekends it is often the case that the OPIA author of the alert needs to make the change using his mobile device, increasing the risk of error.
  - (4) **Delayed publishing** - at one time, deploying the yaml file did not require waiting for an hourly content build. Once reviewed and approved by the PW FE engineer, the file could be pushed into production in real-time.  However, a new content build process introduced in mid-2020 moved the HP banner alert into the standard publishing path.  The business requirement is for the content to go live within 15 minutes of request for PR review.

![HP Banner](https://user-images.githubusercontent.com/63107147/126205733-c34132d0-8c11-4793-b4f0-93eca2e1ceef.png)

## The Problem to be Solved

**How might we make the process of creating or updating a VA.gov Home Page banner easier, faster and less risk-prone?**


## Proposed Solution(s)

**High Level User Story/ies**

As a content editor, I need to quickly publish error-free alerts on the VA.gov homepage at all hours, so that time sensitive information can reach Veterans.


**Requirements**

- **Short Term: Improving the existing yaml file approach**
  - **Awareness & Response:** Create a communication channel from VA stakeholder (OPIA) that notifies multiple VA.gov team-members and Platform when a new or updated Alert is planned.
    - Idea: Create an integrated HP Banner Alert channel in Teams (used by OPIA) and Slack (used by VA.gov); this must be tied to the #oncall channel for off-hours support.
  - **Redundancy:** Ensure any FE engineer (including #oncall engineer) is trained to implement the HP Banner alert process.
    - Idea: Make this a Site-Ops/Platform responsibility, eliminating reliance on Public Websites engineer/team.
    - Idea: Make the "How to do" document available to all teams/developers on https://depo-platform-documentation.scrollhelp.site/index.html
  - **Publishing Speed** Create a fast-track publishing capability for the HP Banner Alert to ensure that once it is PR'ed, it can be deployed into production within 15 minutes.
  
 - **Long Term: Moving from yaml to CMS**
   - Add HP banner content to CMS
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
   - Load data from public Github repo using React widget
     - Pros
       - does not require GFE access
       - does not depend on content build
     - Cons
       - malformed data could break homepage
       - adds additional source for content on va.gov outside of content build
       - handling of different environments (dev/stage/prod) unclear
     - Mitigations
       - add CI/CD tests to repo

## Hypothesis or Bet

**If** the Wizards are moved to the application page **then**  there will be a reduction in the number of ineligible/incorrect applications received by VA benefits administrators.

## OKR

_Drive more online use of benefits applications as they are more discoverable, resulting in more correct or eligible applications received_
 - Increase usage of how to apply wizards
 - Reduced bounce rate from wizards
 - Reduction in number of "incorrect" applications received (veterans are applying for the wrong benefits because they are not using the gating wizards.

_Success Metrics Note:_  The Analytics team is recommending the tagging/tracking approach already taken with the education benefits wizard -- e.g. GA can report on “Started Education How To Apply - Did not Complete [Funnel Segment]” --  a good proxy for success if we apply this across the HLR and Disability wizards as well. The KPI would be to show reduced bounce rate on the Wizards – implying that a more informed veteran would then be prepared to apply (e.g. reduction in ineligibles).

## Definition of done

The how to apply wizards are live in production across the identified pages, resulting in reduced Wizard bounce rates.

*Take into consideration Accessibility/QA needs as well as Product, Technical, and Design requirements.*

## Screenshots



## Status 




*Take into consideration Accessibility/QA needs as well as Product, Technical, and Design requirements.*

## How to configure this issue
- [ ] **Labeled with Team** (`product support`, `analytics-insights`, `operations`, `tools-be`, `tools-fe`,`content-ia`, `service-design`, `vsa-*`)
- [ ] **Labeled with Practice Area** (`backend`, `frontend`, `devops`, `design`, `research`, `product`, `ia`, `qa`, `analytics`, `contact center`, `research`, `accessibility`, `content`)
