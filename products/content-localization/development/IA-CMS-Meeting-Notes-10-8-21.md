**Meeting:** Technical Implementation for Translated Content (URLs) 

**Date: 10/8/21**

**Attendees:** Danielle T, Mikki, Adam W, Sharon K, Tim C, Steve W

**Objective:** Follow-up discussion and review of system impacts and best option for implementation of translated content and URL structure.
  
**Agenda:**
- Are sub-directories the best path forward?
- Understand any additional concerns with sub-directories and sub-domains 

**Notes:**
- Current Approach (FE – react widget manages)
  - Tim: If the issue is mainly about identifying that it’s Spanish content, then this is a  good strategy. Typically, if Drupal were taking care of everything (which it’s not), including the URL, and it saw “es” in front of it, it tells it that we’re in Spanish segment.
- Sub-domains
  - Tim C. noted that we can’t use sub-domains now bc of the content build process, which doesn’t handle today
  -	Can’t update the menus
  - “Cons” of sub-domains are that they are treated like unique sites and results in SEO competition 
  - The domain governance required would add to the effort 
  - Tim: If you want to do subdomains, there will be more technical friction there. The other possibilities aren’t zero effort, but they’re much more doable. 
  - This isn’t the optimal approach from a VA.gov experience; it will feel like you are in different place. Not optimal UX.
- Sub-directories
  - Adam verified that using sub-directories for a URL structure doesn’t break the navigation and breadcrumbs. No major issues uncovered.
  -	Tested in Tugboat and changed URL instances
  - We could do 301 re-directs of current pages
  - We would need to update our react widget for the language toggle
  - If the team were to start putting /es in front of the Spanish urls, would that break the content build? 
  - Steve advised that as far as drupal is concerned it would not break the content build and we could go to a sub-directory soon. We’d need to determine   whether the translated pages should have their own menus.
  - If what you’re doing so far works with the small number of pages, there’s no reason to jump ship from that model until we’re ready. They can all be redirected and moved fairly easily.
  - Steve: If we’re talking about a small amount of content, we could talk about a directory off the url. Problem then is that the URL doesn’t get translated. 
  - English and translated content should be aware of each other – we can do this using entity ref fields
  - Entity ref is ok but consider deprecation path and gotchas
  - Adam: We did a POC where you would use an entity reference field and have corresponding reference fields….poor man’s translation management system. 
  - During testing also added another field for language 
  - I think the main issue is whether this adds more things in our backend…if we do go to Drupal multilingual, what issues might that bring up in the migration?
  - Adam: Right now, we’re just maintaining a list of urls. We would be able to con’t to maintain that. There’s nothing in Drupal that’s tells us what our urls are.
  - Sub-directories won’t break anything in the build path but requires work
  - Tim: Depending on how much friction that causes, it may be good to put the entity ref fields in place in Drupal.  Then the build system can be inherently aware of the pages language
- Mikki & group noted there are some questions that will need to be addressed if we do decide to go down sub-directory path. This includes:
  - Timing - whether we can/should start now
  -	Impact to headers and footers
  -	Should sub-directories have their own menus?
  -	Do we set-up a sub-directory for hubs like the Health Care hub -- which has ~10 pages translated?
-	Mike Chelen has recommended separating the CMS (static content) and the react (ie forms, authenticated experience) conversations. But at the end of the day, they’ve got to come together. We can set up some separate conversations, but both flows have to work.
- Has any UX research been done?
  - Danielle advised that we have done some which is how we arrived at the menu toggle.
  - We know the footer placement isn’t ideal; we’re running user survey to collect feedback
  - Tim C suggested surveying users re intermingling English and Spanish nav 
  - Steve: how much content do we plan to translate in next year or so? That can help determine when we move to an approach like sub-directories
  - Danielle advised near-term scope is 100 -200 pages
    - Danielle: we have 2 goals
    -	Long-term: We want to make it easy to translate and manage all content in the future should we or other teams progress to that state.
    -	Near-term: We will not be translating all content (or even most content) in the near-term, as we simply don't have the capacity for that, and we also want to continue to take an approach that bases content and language prioritization on need. But we do need to keep managing the pages we have and make it possible to translate some additional vital content in the near term. We want to make sure that we're doing that with the best practices that we can for now and while being mindful of the long-term goal so we can avoid as much tech debt as possible as we go.

- Addition per Slack:

Steve Wirt  
  - Thanks @Sharon Kasimow I think the one part that got recorded "Has any UX research been done?" but could use more emphasis.  It would be good to have a UX plan to build toward.  Otherwise we are throwing a variety of technical solutions at the wall and hoping one sticks.


Sharon Kasimow  
  - Hi @Steve Wirt!  To clarify, we currently have usability research underway. We’re not quite at the point where we’re asking for technical implementation but will lead with UX once we are ready. The goal for now is to gather technical input and figure out what limitations or obstacles we’ll need to work around and also, to be aware of technical inits like the public API that will have a big impact on our approach.



