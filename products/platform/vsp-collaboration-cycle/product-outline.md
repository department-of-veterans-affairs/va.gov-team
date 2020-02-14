# VSP Reviews Product Outline


#### Communications
- Team Name(s): VSP Product Support & VSP Content & Information Architecture 
- GitHub Label: `content-ia-team` `product support`
- Slack channel: For questions/support on this use `#vfs-platform-support` or `#vsp-product-support`; for internal team communications use `#practice-areas-review-group`
- Product POCs: Andrea H, Megan K
- Stakeholders: all VFS teams using the platform to build on VA.gov; DEPO leads and team members embedded on VFS teams; all practice area reviewers conducting non-code reviews
- Access information: Details in the `vsp-collaboration-cycle` folder in [/platform/working-with-vsp](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp/vsp-collaboration-cycle)

#### Team Members

|Name|Role|Slack|
|---|---|---|
|Andrea|Product Manager (VSP Product Support) |@AndreaHewitt|
|Megan|Product Manager (VSP Content & IA) |@Megan Kelley|
|Crystabel|UX Designer|@Crystabel Reiter|
|Gretchen| UX Writer|@Gretchen Maciolek|

_Note that all VSP practice area reviewers & VSP leadership are "consulting" members of this initiative._

---

## Overview
The VSP Collaboration Cycle is a process that Veteran-facing Services (VFS) teams are required to complete for all medium-to-large work initiatives, in order to ensure that they (VFS teams) deliver reliable digital services that are continuously improving and work for people.

## Problem Statement
For the first many months of VSP's existence, each practice area had its own set of "rules of engagement" (ROEs). These ROEs required VFS teams building on VA.gov to comply with distinct review processes for each practice area: design, accessibility, information architecture, content, QA, engineering, research, product, analytics. For example, the team needed to get a separate content, design, and accessibility review before user testing — following different request processes and receiving feedback in non-standardized ways. This has resulted in many pain points, some of which are captured in [VSP Service Design team's research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/product-discovery/roe-documentation)). 

Top pain points include: 
- VFS team members do not understand what VSP's requirements are or how to meet them
- Following a separate review process for each practice area puts a high burden on VFS teams and results in duplication of context (VFS teams have to re-explain the problem/status/updates to each practice area)
- VFS teams are skipping review points and getting too far along in development before engaging VSP, resulting in VSP not being able to provide meaningful feedback on the VFS team's development approach
- VSP feedback sometimes ignored (products launched on VA.gov not meeting VSP standards), sometimes blocking (development on VA.gov is slowed too much)
- No formalized, consolidated process = limited ability to identify problem areas and iterate

**How might we consolidate the existing VSP reviews — _not including PR reviews_ — to present them as a unified process, and reduce the burden of coordination on VFS teams? How might we frame this review process as a collaborative, supportive relationship that embodies helpful, valuable guidance as opposed to blocking checkpoints?** 
 
## Desired User Outcomes

- VFS teams and DEPO team members understand the VSP review process and know what they need to do to adhere to it
- VFS teams and DEPO team members see value in the services provided by VSP
- VA.gov products meet VSP standards

## Undesired User Outcomes

- VFS teams have to complete more VSP reviews than before 
- VFS teams and DEPO team members see VSP reviews as blocking checkpoints with no real value 

## Desired Business Outcomes

- VA.gov products meet VSP standards
- Veterans have a successful experience using VA.gov
- VSP is seen as a valuable, helpful resouce for VFS teams (and ultimately for VA.gov)
- VSP can begin to better track which VFS teams are meeting VSP standards (in which practice areas and at which development stages)

## Undesired Business Outcomes

- VSP reviews are so burdensome and blocking that the rate of development on VA.gov is slowed too much
- VSP is seen as unhelpful, inflexible, and useless

## Assumptions

- [Most risky] We **assume** that VFS teams and their DEPO team members will follow a VSP review process if they can easily understand its requirements.
- We **assume** that consolidated review points will be more valuable and easier for VFS teams to adhere to.
- We **assume** that if we standardize the review process and make it easier to understand, VFS teams will see VSP reviews as net positive (net valuable). 

## Solution Approach

### What we're doing
- We are creating a consolidated VSP review process for all practice areas, and framing it as the `VSP Collaboration Cycle`
- We are replacing existing practice area ROEs with the coordinated review process (with the caveat that practice areas can always provide additional optional support)
- We will be implementing a standardized way to monitor whether VFS teams are following the review process and whether they are meeting VSP standards by practice area _(this is a separate initiative but will help us validate assumptions listed above)_

### What we're not doing
- We are not incorporating code/PR reviews into the consolidated review process. We see those (at this point) as a separate piece of development which is undergoing its own proposed changes (i.e. not requiring review on every PR for VSA Public Websites — initiative by FE Tools team Q1 2020). Furthermore, there is no single set of "code review" touch points which we could incorporate here according to the current code review process — proposing something like that would require extensive iteration on the code review process, which is out of scope for this initiative.
- We are avoiding adding additional touchpoints between VFS <> VSP at this point. We _only_ want to consolidate processes that already exist (whether or not VFS teams are following them). We _do not_ want to add additional touchpoints (or even significantly alter existing touchpoints). This is because a) we want to avoid increasing the review burden on VFS teams until we understand the level of the existing review burden, and b) as an MVP, we do not want to perfect every process in existence before rolling this out to VFS teams
- We are not formalizing a set of rules around which work initiatives need to follow this process. Our guidelines are currently that this is for "all medium-to-large work initiatives," and we will address small projects and edge cases on a case-by-case basis until we have a better understanding of how our proposed consolidated review process is working. **We will** provide examples of projects that should follow the process, and we will workshop with teams during rollout to understand how this applies to each of their existing initiatives. But we need to understand how to effectively lighten the review burden for certain projects before iterating ("skip this cycle for initiatives of X size" vs "skip to the staging review for intiatives with X criteria" vs something else — we need to learn more about how the process is working before formalizing its intake guidelines).  

### How we anticipate evolving 
- Iterate on specific collaboration points that we identify as most painful/least valuable
- Over time, begin to scale back manual reviews as we come to understand where they are and are not necessary
- Formally incorporate support for KPI setting into the VSP Collaboration Cycle (currently the VSP KPI workshops are run by team, not by project)
- Determine whether a "development intent" engineering touchpoint is something that would be valuable to add 

## KPIs
- VSP KR (Q1 & Q2 2020) & QASP Metric: Platform NPS
- VSP KR (Q1 & Q2 2020): Increase in VA.gov user satisfaction — _need to implement measurement_
- VSP KR (Q1 & Q2 2020): Increase in affirmative response from VSP teammates on whether they feel customers are taking + acting on their feedback. — _need to implement measurement_
- KPI: [Collaboration Cycle survey](https://adhoc.optimalworkshop.com/questions/20260uu8-0-0/questions/before) data (% of neutral and % of positive respondents when asked how valuable the collaboration point was)
- KPI: Qualitative feedback from collaboration cycle survey
- KPI: % of products launched on VA.gov that are noncompliant by practice area — _need to implement measurement_
- KPI: % of VFS teams complying with VSP's required review points — _need to implement measurement_ 

### Additional Measures of Success

This initiative is tied to VSP O1 (Q1 & Q2 2020): Any volume of simultaneous customers have a delightful, self-service, end-to-end experience using the Platform to build on VA.gov.

---

## Solution Narrative

### Current Status

- 2/7/20: [VSP Collaboration Cycle artifacts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp/vsp-collaboration-cycle) are being finalized and reviewed by all VSP practice area reviewers. We will be meeting with VSA leadership shortly to discuss a rollout plan. [ZenHub Super-epic](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/2137).

### Key Decisions

- New processes (such as a development intent check in, or incorporating KPI setting by project instead of by team) will not be finalized for inclusion in the MVP 
- Rollout will begin with VSA teams, in collaboration with VSA leadership
- All teams will jump into the new process wherever they are in the development cycle — this process will not wait until they are beginning a new initiative 

---
   
## Screenshots

### Before
![Screenshot Before 021320](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/vsp-collaboration-cycle/screenshot-before-021320.png)

### After
