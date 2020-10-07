# Logged-in homepage: Discovery summary outline

## Background
## What we did
  - [Stakeholder interviews](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/stakeholder-interviews/stakeholder-interview-synthesis.md)
  - [Analytics review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/analytics/analytics-summary.md)
  - [Past research review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/previous-research-review.md)
  - [User interviews/co-design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/user-research/findings-summary.md)
  - [Comparative analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/comparative-analysis.md)
  - Additionally, there is the HKS research, which we did not do but is a helpful resource
## Key findings
### **People want a task-based logged-in homepage tailored to them.** 
In user sessions with Veterans, participants created a homepage that reflected the most important things they wanted to see upon logging in. 10 out of 10 pages created served as a landing pad that gives them access to their most important tasks (and little else) from one place.  When discussing the current logged-in homepage experience, Veterans described links and content that isn't relevant to them as clutter and noise.  

The pages our users created: 

- Gave them access to their most important tasks in one place

- Provided them with important updates

- Guided them to benefit information and recommendations

- Minimized content that wasn't specific to them

  > "Don't toot your horn on my page. Let me take care of my stuff, and I can get out of there."

Stakeholders described this type of task-based, personalized experience as [one of their goals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/stakeholder-interviews/stakeholder-interview-synthesis.md#stakeholder-goals) during our interviews, and this also aligns with [what we saw across sites](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/comparative-analysis.md#site-examples) in our comparative analysis.  

**Implications**

1. We need to focus the logged-in homepage on helping Veterans complete tasks as directly as possible (not linking them through multiple content pages to get to where they want to go).
2. We should minimize content on the logged-in homepage that is not specific to the user.
3. We should leverage data to intelligently provide users with benefit recommendations and guide them to information about benefits they don't have.
### **Content**
The existing homepage gets the benefit/content focus right, we just need to personalize this information.
- **Health care and disability are king.**

The pages created in our user sessions, and [the findings from brand consolidation research conducted in 2018](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/previous-research-review.md#brand-consolidation) tell us that these benefit areas are the most important to Veterans.  Our analytics support this as well:  the claim status tool is the most popular tool on VA.gov (**~60MM** page views between April 2019 and April 2020), and MyHealtheVet's homepage got **~145MM** page views in the same period. VA.gov's homepage got **~23MM** page views.

Emphasizing these over other tasks makes sense because these benefits require more management and active engagement (e.g. regularly ordering medication, checking for updates on a claim) when compared to other benefits such as education.

**Implications**: The logged-in homepage should prioritize information associated with these benefits and provide users with direct ways to complete the relevant tasks.
- **Veterans care about anything they have in flight, whether that is education or other benefits.**
  Participants in both our research study and the brand consolidation research demonstrate that Veterans want to see information about any of their active benefits.  Education benefits were most common outside of health and disability in both research studies. In our sessions, participants were most interested in seeing GI Bill balance and payment information on their homepage.  

Analytics further underscore the importance of this information, with **3.4MM** page views for the the GI Bill statement of benefits in the last year.

**Implications:** Information outside of the high-priority health and disability categories are important to users, and should be accounted for on the logged-in homepage.
- **Records and documents are a focus for almost everyone.**
  - User research
  - Past research (2018 homepage work)
  - Analytics??
- **This homepage needs to work at every phase of the veteran lifecycle, even when a veteran has no updates and no benefits.**
  - User research
  - Past research (Frog research report)
### Design
- **The existing "blue sky" prototype gets a lot of things right.**
  - User research
- **Not everything needs to be a “widget” — the best structure highlights the most important information and is easy to scan.**
  - User research
  - Previous research review
  - Comparative analysis  
### Overall authenticated experience
- **The homepage does not exist in a vacuum — it needs to be supported by a cohesive logged-in navigation**
  - User research (blue sky prototype; general discussion about accessing tools)
  - Stakeholder interviews
  - Analytics
- **Veterans expect notifications outside of VA.gov, but they also want new information to be clear to them when they log in.**
  - User research
  - Comparative analysis
## Recommendations
### Projects

Ultimately, this really comes down to 3 projects:

#### Logged-in homepage
  - **Phase 1: Focus on initial widgets in “top tasks” area**
    - **In scope**:
      - Visual redesign of apps, claims, and benefit widgets from My VA
      -	Include links from current homepage
        - If possible, show conditionally based on whether they apply to the user’s personal info.
        - If not, this would be phase 2.
      -	(Maybe) A disability rating widget or GI bill balance widget
        - These might also need to be phase 2
    - **Out of scope**:
      - Moving over "Find VA Benefits" functionality or content
      - Integrating any new data not already available on VA.gov
      - Significant functionality updates to existing widgets
 - **Phase 2: Expand on phase 1**
   - Many of these may come out of ideas generated during phase 1 that we were not able to build. This might include:
      -	A disability rating widget if it’s not included in phase 1
      -	A GI bill balance widget if it’s not included in phase 1
      -	Allowing some tasks to be completed right from the homepage
      -	Integrating new data, or showing data in a different way if deemed necessary (eg. could we should where a prescription is en route?)
      -	Additional features, if they are deemed necessary (eg. most recent payments, housing grant balance, etc)
 - **Phase 3: Focus on benefits discovery**
    - Some of this will inevitably be part of phase 1 since we can’t launch without a “blank” state.
    - However, we need to figure out — how are we guiding people based on where they are in their veteran lifecycle? This is where I think we should focus phase 3 efforts. This might include:
      -	A more fully-developed first-time user experience
      -	Benefit suggestions or recommendations from the logged-in homepage

#### Navigation
  - We need to revisit the logged-in navigation.
  - This will need to be iterative work that happens over time in concert with the IA team and the PW team.
  - Can happen side-by-side with logged-in homepage work pending resources.

#### Notification center
  - We should have a notification center on VA.gov but we should not rely on that as our only means of notifying veterans.
  - Can happen side-by-side with logged-in homepage work pending resources.

### Process
- Approach project iteratively (as outlined above)
- Develop design patterns for authenticated tools
  - User research (positive reaction to blue sky prototype)
  - Previous research review (findings from personalization 2.0 readout)
- Stakeholder management
- User test, user test, user test
  - Ensure future research studies include Veterans under 34. This group was not represented in our initial user study and may reveal additional insights around needs for new Veterans and education benefits.
### Metrics
- Measuring success 
## Next steps
- Start moving into design planning
- Start discussing this with stakeholders outside DEPO
- Continue work on OKRs & KPIs and getting analytics set up
- Technical discovery
- Initial V1 comps


______________

## Initial thoughts and notes

**Overview of this work**

- A quick intro to this project.
- [Stakeholder interviews](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/stakeholder-interviews/stakeholder-interview-synthesis.md)
- [Analytics review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/analytics/analytics-summary.md)
- [Past research review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/previous-research-review.md)
- [User interviews/co-design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/user-research/findings-summary.md)
- [Comparative analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/comparative-analysis.md)

**Findings & recs intro**

- Maybe — A comment on why we should feel justified in this work.
  - User testing: Current homepage/authenticated experience does not meet user's expectations for what they would expect to see in a logged-in state.
  - User testing: It is clear just how much people log in and expect to see something tailored to *them*.

**UI recs**

- Emphasize claim status tool and health care tools.
  - Most used in analytics.
  - May see these as the most important in user testing.
  - Health care is the only thing people really manage long term anyway.
  - This doesn't mean we may not show other select important statuses (applications in flight, GI bill balance).
- Notifications should be at the top of the page, accessible from anywhere.
  - Ubiquitous pattern seen in comparative analysis.
  - Most people enter from homepage, but this will make notifications accessible from anywhere.
- The body of the logged-in homepage/dashboard should show general status/progress info regardless of whether there is a notification update for that info or not. 
  - We don't want to rely on notifications only for the logged-in homepage, otherwise there will be a lot of times people come to their logged-in homepage only to see it blank/not have any meaningful actions to take.
  - Comparative analysis: Dashboards aren't only notification info. Even if the info is dynamic, they have general "status"/about info, like account type and account balance.

Base this on user testing:

- What we should put on the dashboard:
  - How much of this is status/"in flight" content (eg. claim status, in progress applications, upcoming appointments)?
  - How much of this is "about me" (eg. disability rating)?
  - Something about how to handle records?
  - Something about how to handle learning about new benefits?

**Process recs**

- Be strategic about involving outside stakeholders.
  - To avoid lengthy churn or the page becoming a dumping ground.
- Approach the redesign iteratively.
  - To avoid analysis paralysis (stakeholder interviews).
  - Because we see in analytics just how reliant people are on the top 20 tasks.
  - Because the logged in experience should be a system that works together, and we don't have a specific logged in nav OR notifications OR a logged in homepage. This all needs to work together and we don't want to take forever making it perfect.
  - **In what order should we approach this redesign (eg. the nav? some homepage widgets? notifications?)**
- User test, user test, user test.
  - This page is too imporatnt to user test once.
  - We saw in our research review that the 2018 homepage was tested at least 6 times to get to the right approach.
  - This will also allow us to design with users, build more iteratively, and make meaningful updates.

**Challenges**

Not sure whether we should include this as a separate section or just mention challenges contextually throughout.

- Getting to a better overall logged-in experience will require navigation work, which means we need to work closely with the public websites team, Mikki, and Meg to make sure the unauthenticated nav and the authenticated nav can work in harmony.
