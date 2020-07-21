# Status and decisions for MVP Learning Center

## mm/dd/yy

## 07/20/20
Summary of roadmap sessions with CMS team (Kevin, Steve, Clarence, Oksana, Jeff Barnes); Jen Lee (PW); and Dave Conlon (VAMC Upgrade+Facilities)

__Decisions - Q3 CMS product prioritization__

Facilities:

1. Delivery points (aka addresses and hours)	- Facilities	- Target: Aug/Sept

Learning Center:

2. Multiple FAQs template	- 	Public Websites	 - Target: 9/22 (Sept)

3. About template - 	Public Websites	- Target:  9/22 (Sept)

4. Process list update to include screenshots	- 	Public Websites	- Target: 9/22 (Sept)

5. Learning Center Home	- Public Websites	- Target: Sept

6. Audience, topic, LC taxonomy	-	Public Websites	- Target: Sept

7. Make FAQs in the CMS reusable: COPE in Drupal	- Public Websites	- Target: Sept

__MVP launch of learning center__
- MVP content: VA account and profile articles
- MVP templates: About, FAQs, Step-by-step's
- Target launch eta: Oct/Nov

__Status:__

- CMS team will work on #s 2-4 during sprint 11; and prepare for #7, in sprint 12. 

__Other:__
- PW team will have a FE technical discovery to get ready for working with the CMS team on the above Q3 LC deliverables. 
- PW user research on prototype is in flight to begin Aug 3.


## 07/07/2020

Summary of meeting between Jen Lee, Beth Potts, Danielle Thierry, and Liz Lantz to sync on research plan for MVP usability testing.

Discussed card sort, GH issues [#10432](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10432#issuecomment-654412613) (responses captured in issue), [#10777](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10777), [#10775](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10775), [#10778](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10778), and reviewed conversation guide.  Re-ordered tasks based on conversation.

**Decisions**

- Determined we want to do **one unmoderated hybrid card sort** with two participant groups to test audience labels
  - Group 1: Veterans, family members, caregivers. Looking into whether or not we can recruit through Perigean for unmoderated card sort
  - Group 2: Content authors. Jen will coordinate recruiting efforts w/ VHA, VBA, NCA contacts and SMEs
  - Danielle to possibly refine audience labels and get back to Liz with any changes
  - Jen will start list of articles but wants it to be a team effort
- We will prioritize the prototype usability study over the card sort

## 06/30/2020

Summary of meeting between Jen Lee, Beth Potts, Danielle Thierry, and Liz Lantz to sync on research plan for MVP usability testing.

Discussed [possible articles from this list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/wip-copy/README.md), research goals and tasks in conversation guide draft.  Determined overarching goal of this study: can users find what they need, and do they understand where they are in the site?

**Question:  Are we intentionally making learning center look different? Why?**

- Yes, it is intentional. We want to make a clear distinction between tier 1 and tier 2 content for users, and also for businesses. 
- The other reason we designed it this way, is that it doesn't have navigation, and because we've experienced pages which businesses have tried to make look like our benefit hub pages but they create them in a way that doesn't align with our patterns and how we create pages.  They compromise the nav structure.  With tier 2 and tier 3 content, that we're not going to be creating or managing, we don't want to manage the IA on those. And if they have same IA, navigation, and menu links as our hub pages, it will be bad.

**Question: Can we explore rate information in this study? Specifically, looking for insights on where people expect to see rate information. Is it with their benefit management and getting info or is that something people can find in the learning center? Is it something they look at when applying or is it something they reference later?**

- This topic would be better addressed in a study dedicated to content and/or applying for benefits since our study is really about being able to find the information, and if it is confusing going back and forth in the hub.  We can understand if users get confused without adding rate-specific content to our study.
- We can gain insights to user behavior with this information with analytics. E.g. looking at navigation summaries, how many sessions include both this info + application pages, or how frequently logged-in users (inferring they already have benefits) are looking at this info.
- Could be possible to explore this question in conjunction with another team who is evaluating the application process.

**Question: Do we still think a card sort is necessary? If so, what questions are we trying to answer with this?**

- Definitely still want to do a card sort
- Danielle is working on re-thinking some labels
- Let's re-group to discuss (meeting ran out of time)

**Decisions**

Whittling down the list above to a few core screens for the prototype:

- Learning center home page (1)
- Search results pages (2)
  - One w/ VA account specific results
  - One with tag results, that also has similarly titled articles where the template tag could help users determine 
- Hub pages  (2)
  - One for participants to start on when we want to see if they get confused going to the learning center from the hub
  - One for participants to land on from the learning center after clicking a CTA, to see if they get confused going to the hub from the learning center
- Learning center article page (1)
  - Participant will land on here from first hub page
  - Ideally would have CTA that would direct them to the second hub page



## 06/22/2020

Summary of decisions from 6/17 LC+CMS meeting w/ Kevin Walsh, Steve Wirt, Oksana Cyrwus, Stephanie Orkand, and Jen Lee. 

We are not prototyping page templates in Drupal, but the CMS team can start some related drupal epics. These are the templates the team discussed can be started in parallel with non-CMS workstreams (prototyping and user research). 

**Learning center templates we can build in the CMS in parallel**

These templates were selected to start with because they are 1/content template types that we know will have the most use by content autors and will fit the majority of content use cases, or 2/ they have component elements that can/will be used in other products (e.g., video component will be used in campaign landing pages). 

   * [Reusable single Q&A](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#single-faq) (COPE epic)
   * Reusuable multiple FAQs (COPE epic)
   * [About template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#about)
   * [Video component](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#media-imagevideo)
   * [Step-by-step template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#step-by-step) (Iterations on 'subway map' process list to enable screengrabs) 


**Question: Are tags something we can start in parallel, since this will used across all learning center templates?**

- We need to flesh out the MVP taxonomy and other requirements. This needs to be a follow up call as a topic. 


## 06/11/2020

### CMS-focused follow-up meeting

**Agenda**

* Should we prototype in Drupal, or something else?
* What questions would we like to gather, to inform the questions we'd like answered by user testing?  (or, where to log these questions so we don't lose them)
* Next steps

**Action Items from this meeting**

1. Continue building questions for user research and review the need for prototyping
2. If prototype is warranted for testing, will pursue a clickable prototype. Public Websites discussion needed.
3. Jen to review the suggestion for bringing in more content for testing purposes
4. Stephanie to set up a followup with the CMS team on components. In this follow-up, we will need to review the components. As we review, we will need to discuss which components (if any) would need to go throgh user research first before being built.

**Initial list of questions or areas of interest, for user research**

1. The findability, navigation of content using this search-focused, tag-based navigation. Is the information easy to find using this new method?
2. The taxonomy, IA of categories. Is the chunking of the categories and labels the best way to begin this? For Veteran and other audiences, in terms of taxonomy and nomenclature, is this effective?
3. The labels of the types of templates, and if they affect what the user chooses to read (ex: FAQs, Checklist, Media List). We think it is useful for users. Do we test without the labels to gauge if including is an improvement or not?
4. Based on the thoughts regarding Tier 1 and Tier 2 content: is there a way we can find out with users how comfortable they are with the distinction between Tier 1 and Tier 2 content - or do they even care, as long as they can find what they need? Does it matter if something is in benefit hubs or learning center? How frequently do they go bak and forth?

### Notes from meeting

Before we begin a prototype, what questions do we want to get answered by user research? This may impact if we even need a prototype. 

In approaching a prototype, the CMS team recommends focusing on a clickable prototype & not building a prototype in Drupal. The investment in using Drupal for this purpose would be high. Their feedback is captured below under "Learning Center user research / prototyping notes from CMS

The CMS team recommends we include more than one content type (currently planning for Account information) for prototyping to help prove out a better content model. The CMS team provided thoughts and feedback regarding the distinction and access of Tier 1 and Tier 2 content, also captured in their notes below. 

We believe that users care less about where the content lives or how it's structured as long as it's easy to find what they are looking for. Are users thinking in precise terms the way IA, taxonomists are thinking?

The CMS team recommends not building a prototype in Drupal but there items they could start on shortly that would further this initiative. They could start on related Epics around:

* Reusable Q&AS, FAQs
* Video (note: this is shared with the Campaign Landing Page, and would be built to serve both)
* Checklist component
* Step-by-step component - it's a modification of the subway map for when we want to include screenshots. This would allow content authors who provide step 1, step 2, etc. for things like 'how to do x in a tool', they would be to provide screenshots as visual reference for users
* Iteration on the Table component

### Learning Center user research / prototyping notes from CMS

**Should we prototype in Drupal, or something else?**

1. Generally speaking, no. At this stage, we recommend clickable prototypes instead of investing in an approach using Drupal & FE that consumes the content API, because
   * The amount of resources required. 
   * The amount of risk / unknowns for many of the templates. 

**What questions would we like to gather, to inform the questions we’d like answered by user testing?**

1. Do these designs create too much distance between Tier 1 and 2 content?  
   * We see risk in this design that Tier 1 and Tier 2 are silo’d through two primary IA means: search and tags/taxonomy. 
   * The only bridges to Tier 1 that we can see are CTA buttons and Related information. Search and Topic/Tags listing do not seem to surface Tier 1. 
   * The CMS can support the IA needs of users to get to Tier 1 content while maintaining the Tier 1 / Tier 2 governance distinction.. 
2. Not a question exactly, but relevant to the “real content” question for user testing. The Account info epic 9938 looks like an excellent use case. BUT:
   * We recommend multiple use cases for each template. 
   * We’re concerned that a single use case for MVP (Account info) may not yield the level of content diversity required to make content model decisions. 
   * User research about account info may point us down a content model path specific to that use case, and content models are expensive to refactor.

**Additionally**

1. Just because we are not prototyping page templates in Drupal, doesn’t mean we can’t start some related drupal epics, at the component level, eg:
   * Reusable Q&As, FAQs
   * Video component
   * Checklist component
   * Iterations on Process list (eg screengrabs) 
   * Iterations on Table components


## 06/04/2020

Team Kick-off held, to align on problem to solve, high-level requirements and wireframes. 

**Why The Learning Center**

We have brought over Tier 1 content over for benefits. There is a lot of information that is not in the Tier 1 category but is very helpful content.

The Learning Center aims to house additional help information, knowledge articles about a service or a problem. It is benefit adjacent. The product is not campaign or marketing information, and it is not program office/administration content. The Learning Center is search-focused and tagged, rather than driven by IA and navigation. This will be in Drupal as templates.

**MVP and Requirements**

The content below does not replace or substitute the product outline. 
We plan to use VA.gov account information for this "MVP."
Some new functionality that was discussed:

* New/updated Search box with the ability to search within the learning center or va.gov (this is in the learning center, at the top of the pages)
* Tag system - 'Topics' and 'Audience'
* "On this Page" component
* "Back to top" (some of the pages will get really long)
* "Need More Help" section - can be phone numbers, links, links to chat. It will be customizable but something like a chatbot could be 'fixed' on there, if it's available.
* "Was this page helpful?" - TBD on where the data from users would go
* Ability to pull Youtube video, content in for Videos. 

**Identified Areas for User Testing**

The new tag system - by breaking up tags between "Topics" and "Audience", does this help users? The "Topics", for example, would be clickable and would take the user to articles tagged with that topic.

When viewing a list of articles tagged with a topic, we are curious if the types of templates affects what the user chooses to read (FAQs, Checklist, Media List). Would knowing this kind of content be helpful to the user?
Should we plan to conduct testing with the two identified user groups - Veterans, and groups who support Veterans?

**Next Steps**

A goal of the meeting was to determined what first steps we should take to move this initiative forward. 

1. User testing is desired, but we would like to have a prototype (clickable) available to test with
2. Defining questions that we wish to answer through user testing (research planning - meeting(s) to take place soon)
3. Follow-up on CMS next steps, and prototyping: should we prototype in Drupal, or something else? Stephanie to schedule a discussion for this topic
