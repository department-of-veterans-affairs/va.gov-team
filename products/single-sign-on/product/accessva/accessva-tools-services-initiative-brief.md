# "AccessVA" to "AccessVA tools and services" on VA.gov Initiative Brief 
---
## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*
* Simplying the interface and UI of AccessVA while maintaining its functionality on VA.gov. A key part of its functionality is to provide a starting point for the sign-in process for applications that don't have an unauth state.

**Related/Associated product(s)**
- Single-Sign On (External) | [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/single-sign-on#product-outline) 

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* Business case: AccessVA is a custom site which costs overhead to maintain => moving to VA.gov would help lesseon/remove this overhead.
* UX case: AccessVA is a "legacy" site and does not meet modern VA experience standards => redesigning the page according to the VA Design System will help guarantee the site is compliant and accessible.
* "Technology" case: AccessVA uses ISVA. As the VA works to modernize it's SSO architecture, continued use of ISVA is unclear => moving off ISVA removes the risk of a "rug pull" via the removal of the underlying technology.
* "VA Strategy" case: Visiting AccessVA is the 1st step for accessing some key services that don't have an unauth state to offer users. Consolidating services to VA.gov falls in line with the ["Digital Front Door" campaign](https://digital.va.gov/office-of-information-and-technology/digital-front-door/).

<!--
## Desired User Outcomes
- *Why would a user want to use this?*
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

## Undesired User Outcomes
## Desired Business Outcomes

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes
-->

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*
  - **Service completion** VA services to clicking desired application link | Baseline - Determined at launch | Avg: < 10sec | Datadog and GA for paths
  - **Ease of use** User perception | Baseline - NA | Positive ease of use > 50% | Medallia Intercept and Feedback Surveys
  - **Ease of use** User perception | Baseline - NA | CSAT > 50% | Medallia Intercept Surveys

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - We don't feel there is much of a risk that people will not use the service as it will be replacing flows where AccessVA is used today already. A redirect from AccessVA to the new page is planned as a way to help with bookmarks and static pages for routing users to the new experience.
- **Usability Risks** (can people figure out how to use it):
  - Risk: Users may initially be confused by the dramatically different style of VA.gov vs AccessVA which does not use the VADS.
    - We're using the same user categories from AccessVA on the new page + the accordion method of organizing application links. This should feel somewhat familiar to AccessVA users.
    - Because the page is relatively simple, we could do unmoderated testing to verify task success.
  - Risk: Users may initially have a difficult time finding the application they want if they were depending on "muscle-memory" to navigate to the correct app + the logo. Since this is a static page, we cannot display the application logos via Drupal.
    - Applications will be links, served in alphabetical order, and grouped by user type. This should help with findability.
    - This is something we can test for via unmoderated studies for task success.
  - Remediation: Because this page will be on VA.gov, we'll be able to gather sentiments via Medallia. We can iterate to improve the page based on this feedback.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Minimal to no substantial technical/feasibility risks due to the page being static content. There will be no reliance on downstream services.
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Constraint: Because this will be a static page, creation, editing, and maintenance of the frontend is handled by the sitewide content and IA team, and external team to ICAM Portfolio Services

### Supporting research

- *Is this work supported by user research?*
  - Yes, some apps on AccessVA do not have an unauth state and rely upon AccessVA as the first step in their sign-on process.
  - The majority of apps on AccessVA are business apps which are needed for various services.
  - [AccessVA research repo](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/single-sign-on/research/user-discovery/2025-08-AccessVA)*
>  - *If this work is **not supported by existing user research**, will this work include user research?*
>    - *If this work **will include user research**, please briefly state what you hope to learn from that research.*
>    - *If this work **does not cite nor include user research**, please state why and be prepared to defend your decision.*

### What're you building?

> *What's in scope for you to build with this initiative? Describe key features/flows.*
- We are replatforming something from legacy infrastrucutre under VA.gov and using the VADS so not a lot is changing. We need to keep the services this infrastructure provides as it's key to some applications that don't have an unauth state or a modernized landing page. This gives us a stable place from which we can work with Identity to decide if this is a long-term solution or what that may be since these apps potentially service many different groups of users. Example, VSO that's partnering w/ VA or a business solution like Box.com (crosses so many boundaries at the VA)
> *What have you explicitly decided to **not** include and why?*
- We are not including the AccessVA "About AccessVA" and "Contact Us" pages. With AccessVA being absorbed into VA.gov, we are tapping into its existing feedback, troubleshooting, and support structure. Except for the specific "product information" about what AccessVA is, all other "About AccessVA" content is either not needed or covered by existing articles on VA.gov, esp those that educate VA.gov users about credentials or how to get an account.
> *Are you building for the VA Health and Benefits mobile application? Explain why or why not.*
- No, this is static page on VA.gov, not a standalone service for just Veterans and their supporters to use. 
> *How does this solution address your Assumptions & Risks?*
- This is addressed specifically under each named risk in the previous section
#### Go-to-market 

> *What marketing, outreach, or communications are necessary for this product to be successful?*
- Coordinate with application and knowledge teams to ensure all in-scope existing materials including Knowledge Articles consistently reference workflow updates for users, rather than the legacy workflow supported by AccessVA.
- Deploy targeted workforce communications to VA enterprise, outlining key dates, user interface changes, and new access points to prepare internal stakeholders. Work with application teams to provide communication templates and materials to integrate in their own change management processes to best support the Veteran. Work with OCTO on Veteran population change management and communications for appropriate channels. 
- Work with site owners to deploy visible site updates and other UX changes on impacted pages to share new and upcoming changes to their experience during the transition process.
> *Which groups/orgs are necessary to make this happen?*
- We are working with OCTO-Identity who is helping support this project. Because the page is a static page, the OCTO - Sitewide Content and IA Team will be building and updating the page.
--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket https://github.com/department-of-veterans-affairs/va.gov-team/issues/129912

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

In discussion with Amos, we feel a [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) isn't needed. 
- Does the feature you are working on moderately or significantly affect the Veteran experience of the product?
  - The new "VA services" page works just like AccessVA: identify your grouping, open the accordion, access the desired application via unique link, sign-in.
- Does the feature you are working on change the structure of the underlying data?
  - No
- Does the feature's backend or downstream interactions change?
  - No
- Is this a brand new experience for a Veteran?
  - No, the core experience is very similar to what AccessVA does today.

#### Initiative Launch Dates
- *Target Launch Date*
  - February 2026
- *Actual Launch Date* 
  - tbd (to be filled in by product)

---
   
## Screenshots

### Before
<img width="1206" height="638" alt="screenshot of the accessva main page which shows several accordions that are used to group different applications together based on user type" src="https://github.com/user-attachments/assets/41290a7e-b0c7-49d3-8bef-355ecb2bed05" />

### After
the following visual is from figma
<img width="856" height="747" alt="screenshot of figma mockup that shows revised page on va.gov with the h1 AccessVA tools and services" src="https://github.com/user-attachments/assets/8ffad158-d5e4-497a-a20a-21e339b2eb09" />

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: ICAM Portfolio Services - External SSO
- GitHub Label(s): ICAM-SVCS
- Slack channel: [#identity](https://dsva.slack.com/archives/C04LFGY2SJK)
- Product POCs:
  - Amos Stone | ICAM Technical Advisor & SSOe Product Owner:
    - john.stone3@va.gov
  - Sherry Smith | ICAM Product Lead/Product Line Manager & SSOe Product Owner:
    - sherry-lynne.smith@va.gov
  - Damien DeAntonio | ICAM Services Portfolio - Architect:
    - damien.deantonio@va.gov
  - Joel Calumpong | ICAM SSO UX lead:
    - joeljon.calumpong@va.gov
  - Adam Muskett | OKTA Lead:
    - adam.muskett@va.gov

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: VA OCTO - Identity
- Contact(s):
  - Samara Strauss | OCTO Identity crew lead
    - samara.strauss@va.gov
  - Lainey Trahan | VA.gov Identity Team - Product Manager
    - Elaine.Trahan@va.gov
  - Joelle Wells | Identity Experience, Product Manager
    - joelle.wells@va.gov
  - Clayton Zook | Identity Experience Team - UX Reseacher
    - Clayton.Zook@VA.gov
  - Megan Driscoll | Identity Experience - Content Designer
    - megan.driscoll2@va.gov
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
