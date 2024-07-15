## Homepage redesign initiative brief 

[Overview](#overview)

[Problems to solve](#problems-to-solve)

[Desired outcomes](#desired-outcomes)

[Approach](#approach)

[Measuring success](#measuring-success)

[Assumptions and risks](#assumptions-and-risks)

[Summary of changes](#summary-of-changes)

[Ongoing efforts](#ongoing-efforts)
- [Cross-team collaboration](cross-team-collaboration)
- [Connection to authenticated experience](#connection-to-authenticated-experience)
- [Discussions with stakeholders](#discussions-with-stakeholders)

[Launch planning](#launch-planning)
- [Soft launch](#soft-launch)
- [Cutover determination - WIP](#cutover-determination-wip)

[Collaboration cycle](#collaboration-cycle)

[Timeline](#timeline) 

[Screenshots](#screenshots)

## Overview
In the nearly three years since the site's launch, the range of VA benefits and programs has grown and evolved, with new valuable offerings. The VA.gov authenticated experience has expanded to include MyVA, MyProfile, eBenefits migration, and soon MyHealthevet integration. 

Veterans have evolved too - from never logging in to understanding that some tasks are possible online _only when logged in_. This redesign initative was undertaken because the VA.gov homepage needs to reflect the evolution of our Veterans and the benefit landscape. 

## Problems to solve

**1. The text-heavy current experience increases cognitive load and discourages engagement.**
- The volume of content causes Veterans to focus on a single area of the homepage, usually the top 4 boxes. 
- Some tasks are easier than others to complete. 
- A few tasks in the top four boxes get most of the traffic.

**2. The row of Veteran portraits acts as a false bottom which negatively affects engagement with content displayed below the images.**

**3. Search and login**
- ~15% of users logged in to VA.gov, which means the majority of users do not benefit from the personalized experience.
- ~ 586K unique searches initiated from the homepage Jan-Jun 2022 - second only to Find a VA Form but still only 12% of all unique searches. 

**4. The current homepage does not meet organizational and stakeholder needs.**
- We need to help Veterans discover changes in products, services, or eligibility that affect them so they can take action.
- We need to empower Veterans to receive information, rather than to actively seek it out (i.e. subscirbe for email updates).
- We need to direct non-Veteran/beneficiary audiences where to go for the information and tasks appropriate to their needs
- The current UX design was optimized for viewability across Desktop and Mobile, limiting the number of links to five in each of the four top task boxes. This limitation has made it difficult to respond to the expanding benefit and program landscape and stakeholder requests. 

## Desired Outcomes

**Desired user outcomes**
As a Veteran or beneficiary, the VA.gov homepage supports my need to 
- learn about the different benefits available to me so that I can apply to these benefits.
- access tools and processes quickly and easily so that I can complete tasks to manage my VA benefits. 
- understand why and how to create an account to get access to the personalized experience. 

As a secondary audience to VA.gov (VSO, Member of Congress, News) I understand where on VA.gov I should go to manage and complete tasks appropriate to my needs.

**Undesired User Outcomes**
As a result of the redesign changes, Veterans and beneficiaries  
- are unable to complete the tasks necessary to manage their VA benefits online. 
- take longer to initiate a task from the homepage 
- are dissuaded from logging in or creating a VA.gov account
- express a lower level of satisfaction in the VA.gov experience

**Desired Business Outcomes**
- Stakeholders can promote and give visibility to new products and services
- Increased engagement in VA news (more traffic from the home page to the VA News blog)
- Increased use of personalized experience (more logins)

## Approach
The redesign was originally planned as [a series of smaller changes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/initiatives/2022-home-page-redesign-initiative/design/phased-design-plan.md) but it was decided to go straight to the planned Step 3 design for the first build, given the strong evidence for change and experimental nature of our work. Further refinement will be informed by Veteran research before changes are moved to production.

So that users of assistive technology can participate in usability testing of the new design, the nital iteration will be built as functional code with functional links, header and footer, in a subdomain on staging. Because the page will not receive visitor traffic outside of user testing, no data layer will be applied. See [March 2022 iteration](#march-2022-iteration) for a summary of changes. 

We will use findings from Veteran research, quantitative user data and benefit utilization to inform design iterations before moving the changes to production or replacing the existing homepage. 

Iterations should support the following goals:
- make it easier for Veterans to navigate the page, engage with relevant information and complete their tasks
- increase the use of the authenticated experience
- intuitively empower Veterans to find and take action on less common tasks
- provide and avenue for Veterans to receive updates and information

## Measuring Success

**Key Performance Indicators (KPIs)**
- Increased clickthrough rates
- Decreased time on page before taking action
- Increased login from homepage
- Increased Veteran satisfaction scores
- Increased subscriptions to email updates

**Baseline values**
- [Baseline event data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/initiatives/2022-home-page-redesign-initiative/analytics/baseline-event-data.md)
  > includes traffic to the homepage and log-in rates, events on the header, mega menu, top 4 box tasks, benefit hubs/"explore section", VAntage Point navigation, main page buttons and data visualizations
- [Homepage login data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/analytics/homepage-login.md)

## Assumptions and risks

**Value Risks** (will people use it): 
  - The use of the home page itself is a given.
  - The case for change is very strong, given engagement gaps with the current design.

**Usability Risks** (can people figure out how to use it):
  - It may be unclear that "Search" is searching content on VA.gov. The list of other search tools below complicates what exactly they're searching when they type something into that section.
  - The "Popular" heading may be unclear as to what exactly this list is for. (Popular what?)
  - The "other search tools" may be unclear as to where someone would actually be going when they click on those links, and what information they would find there.
  - There is a lot of copy in the "Browse benefits..." section. Users are likely just scanning the headings and not reading the copy. It could be generally overwhelming and create too much cognitive load to some users and they may ignore the section.

**Feasibility Risks** (can we build it with available tech/data):
  - The idea of creating a “parallel” home page experience seems pretty straightforward but has not been tried before in recent memory. There are potential challenges to our ideas, including Analytics setup and Search API integration. Future CMS integration has not yet been explored for feasibility or level of effort.
  - Changes to the codebase are small and localized. The only external dependency relates to the Search component, but the implementation and functionality will be identical to the search that already exists in the header. 

**Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - We may need the support of teams outside of OCTO-DE to get our experiment live on a va.gov subdomain.

## Summary of changes

- [March 2022 | First build](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/initiatives/2022-home-page-redesign-initiative/summary-of-changes.md#march-2022)
- [Round 2 Design iteration | October 2022](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/initiatives/2022-home-page-redesign-initiative/summary-of-changes.md#october-2022)
- [Launch design iteration | November 2022](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/initiatives/2022-home-page-redesign-initiative/summary-of-changes.md#november-2022)

## Ongoing efforts
- Define objectives and key results
- Develop a rubric for delivering meaningful Veteran-facing content

### Cross-team collaboration
- Tight collaboration/communication/research readouts with relevant teams (Public Websites, Apartment, Auth Experience)

### Connection to authenticated experience
- Explore routed queries - direct Veterans to a deep link rather than the search results page
- Determine expected behavior for logged in users
  - should sign in/sign up CTA still be present? 
  - user flow when My VA becomes the logged in home page (expected Summer 2022)

### Discussions with stakeholders
- June 22, 2022 Review of redesign and research plan with Dave Conlon, Chris Johnston, and Jeff Barnes
- July 12, 2022 [Deep dive presentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/initiatives/2022-home-page-redesign-initiative/VA.gov-homepage-deep-dive--July-2022.pdf) to Digital Modernization Council
- October 20-21, 2022 [Homepage refresh presentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/initiatives/2022-home-page-redesign-initiative/Homepage%20refresh%20DMC%20-%20Deep%20Dive%20-%2019%20Oct%202022.pptx) to Digital Modernization Council and Web Governance Board
--- 

## Launch planning

### Soft launch
The redesign will be "soft launched" in Production as a parallel page which Veterans and beneficiaries can visit via "opt in" from the existing VA.gov homepage. 
A similar method was used during the original launch of VA.gov but was managed using a preview subdomain which is not an option for this launch. 

Two options were evaluated during a design, accessibility and implementation discussion
- a banner, allowing a user to move between the existing and new experiences 
- a pop-up modal allowing a user to "opt in" to the new experience. 
**The modal was determined to be the preferred approach.** 

<details>
<summary> Pros/cons for banners and modals </summary>

Banners
 - (+) avoid the risk of stacking modals
 - (-) could unintentionally introduce user distrust 
 - (-) would create an escape route preventing data and feedback collection
 - (+/-) banners are less prominent 
 - (-) banner blindness

 Modal
 - (-) stacking risk presents usability and accessibility concerns 
 - (+) prominent display
 - (+) making it dismissible will manage annoyance factor and various user flows
</details>

**Expected behavior**
- The redesigned experience modal is presented **only** on the VA.gov homepage.
- A Veteran or beneficiary can interact with the modal to agree or decline to use the redesigned homepage.
- The modal offering the redesigned homepage experience displays **only once** within a user's session.
- Regardless of previous opt-in or decline, the modal will be presented during the user's next session (which includes the homepage).
- If the Veteran or beneficiary opts-in to the  redesigned homepage experience, the redesigned page opens in the same window and tab.
- The Veteran or beneficiary can return to the current homepage by using the VA logo and/or back button. The breadcrumb may also be an option, depending on the page. 
- Focus management and experience via keyboard, voice or screenreader will follow patterns established by other modals in use across VA.gov.

_Acceptable known risk:
Veterans or beneficiaries who opt-in to the redesigned experience may not be able to easily return to the redesigned page after navigating to deeper content pages. The user_ **may** _be able to return to the redesigned page using the back button. This user will have another opportunity to opt-in from the homepage during the next VA.gov session._

### Cutover determination (WIP)
A [subset of metrics considered "critical"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/initiatives/2022-home-page-redesign-initiative/cutover-determination-for-full-launch.md) will be used to determine when/if the redesign can replace the existing homepage in Production.

## Collaboration Cycle
Collab Cycle tracking details are available on the [Homepage design iteration timeline page](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/home-page/initiatives/2022-home-page-redesign-initiative/timeline.md#collab-cycle-touchpoints)

## Timeline 
Details on the major milestones for this initiative are available on the [Homepage design iteration timeline page](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/home-page/initiatives/2022-home-page-redesign-initiative/timeline.md#timeline)

## Screenshots

### Before (Current)
<details>
<summary> VA.gov home page as of 3/1/2022 </summary>

![Current homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/images/va-home-page-current.png)
</details>

### After (Still on VA.gov subdomain)

[Staging url](https://staging.va.gov/homepage-test/)

<details>
<summary> First build - June 2022 </summary>
 
![First build design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/images/va-home-page-first-build.png)

</details>

<details>
<summary> Round 2 design iteration | October 2022 </summary>
 
 ![Home-R2-D-1_ PROMO-h1](https://user-images.githubusercontent.com/55411834/195213208-f3590773-b6af-49b7-8e13-4ad5d08edaf6.png)

</details>



