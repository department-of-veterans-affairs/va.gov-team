# Weekly sync: Public Websites / CMS

<details><summary>About this meeting</summary>

- Wednesdays 11am ET 
- Meeting owner: Clarence Maeng
- Facilitator: Kevin Walsh
- Standing agenda: 
  - Product by product, including CMS backlog review (eg: CLP, [Resources & support](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?epics=154174777_2915&repos=154174777), Outreach Hub, Benefit Hubs, VA Forms, etc)
  - How we work
  - etc.
  
</details>

<details><summary>Parking lot</summary>
 

</details>


<details><summary>Relevant CMS product backlogs and docs</summary>
  
- [**Resources & support** CMS backlog](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?epics=154174777_2915&repos=154174777)
- [**Campaign Landing Page MVP** CMS backlog](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?epics=154174777_2275,154174777_2274,154174777_2273,154174777_1475&filterLogic=any&repos=154174777)
  - [CLP FE documentation](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1607363793772/b7f9e809d68ace9c8d75ab649a758ed7653c8461)
  - [CLP CMS content model and rigidity decision logs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/content-requirements-spec/cms-content-model-and-rigidity.md)                         
- [**VA Forms** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/labels/VA%20Forms)
- [**Benefits hubs** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/issues?q=is%3Aopen+is%3Aissue+label%3A%22Benefit+hubs%22)
- [**Outreach hub** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/issues?q=is%3Aopen+is%3Aissue+label%3A%22Outreach+hub%22+)
- [**Banners and alerts** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/labels/Banners%20and%20alerts)
- [**VA.gov homepage** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/labels/VA.gov%20homepage)
- [**VA.gov megamenu** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/labels/VA.gov%20megamenu)

</summary>

</details>

## February 9 

### Recurring events 

Updates from CMS
* Launch date for recurring events - March 2nd
* Change management
  * Add a communication around the new filters, and let editors know that this in prep for recurring events coming soon.  
  * Screenshots (or just include the design specs)
  * Tested with Veterans
  * Brian will draft messaging and CMS team can 
  * From Dave: "Changes to events are coming... based on feedback from Veterans and from you. First thing is changes the Veteran experience, including event location information [anything else?] on the event listing pages and the ability to filter by dates. These changes were necessary for repeating events, which are coming in March". 
* Dave and Brian will communicate with Tim from VEO to let him know that recurring events are on their way
* CMS will be sending announcement to all Outreach and Event editors and VAMC editors.

Update from Public Websites
* Sam cleared the QA issues
  *  One zoom issue from QA, some metatag
  *  Tugboat worked well 
*  Production flag 
  * If we want to do any testing we would need a separate branch
  * Flag is for both V2 (filters to search by date) and recurring events
  * Sam will look to see if it's releasable now.
  * Trent would remove the production flag pending Sam's investigation, week of Feb 14.

Spotlighted events
* The most upcoming date will be shown if an event is featured.
* Veterans won't see any difference.
* Spotlight may show past events


Support for full day events
* Q2 candidate - relatively small lift for CMS, but some content design problems to work out



## January 19

Events
- Results of QA
- Launch readiness 
- PW: Sam is working on issues found in QA this week. 

Facilities 
- Featured event ... does it support recurring events? Eg flu clinic for the next 5 weeks
- Steve: As of today, it would show the most upcoming event but no indication of repeating
  - Next step: feature a VAMC event in a Tugboat, release the content and send link to Michelle and Dave for review (Event listing page and VAMC system homepage)

Announcement / Change management
- Announce recurring events with Claro (new theme)? 
- VHA Digital Media can support communication for VAMC editors
- VEO / Outreach Hub editors
- To discuss again Jan 26 or Feb 2

Later iteration for icebox backlog
- Permissions, publishing workflows, including curation to other calendars. 
- Content lifecycle 
  - automating archiving
  - reminders that event series is ending (notifications)
- Iteration on recurring events
- Support registration to individual and multiple event instances instead of the whole series (may depend on event registration engines)
- Support for all day events
- Frequency string (repeats weekly / monthly) 
- Location 
  - Filters 
  - Allow in person AND online 
- Events API
- Free text search
- Categories / taxonomy


CMS account admin and notications story
- reassigning content from deactivated accounts to new authors (or subscribing new users to their content) 


## January 12

Recurring events
* [Sample content](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/7543) added Jan 12 to and released to this [tugboat web environment](https://web-43gdezdssgpjvowq7wez2c3k7wfhqgex.ci.cms.va.gov/albany-health-care/events/42838/)
  * When that is all loaded in, CMS team will update the thread about this in Public Websites
    * Link to event URLs
    * CORs instructions for using Tugboat (stub of KB article)

Redirect requests
* Sam will maintain same workflow for things like Redirect request that Kelson had.
* Some business process changes coming (future agenda item)

Broken links in Benefits Hubs that aren't being detected by broken link check in content build
* They are surfaced in Node link report
* [Thread in #cms-support](https://dsva.slack.com/archives/CDHBKAL9W/p1641940149031800) 
* Content build's link checker does not check URLs that contain http*. This means these three cases are ignored:
  * Modernized https://www.va.gov/* links that are known to content-buid
  * Non-modernized VA links like https://www.vba.va.gov/  or https://www.va.gov/communitycare
  * Non-VA links
* [Related issue for this](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28139)
* Moving the bar on this would be QA standards team
  * Who are the right folks to  
* Might the we 
  * understand the breadth of bad links? 
    * aggregate links caught by node link report? (CMS team)
    * SiteImprove or other crawl tools? Dynomapper, Screaming Frog. 
* [CMS Epic to make it easier to create the ideal form experience](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/3232)   



## January 5

Recurring events 
* CMS: wrapping up editorial experience, KB and training materials in January. 
* Lots of discussion about registration and URL patterns and add to calendar.

## December 22, 2021

* Promo banner training (early January): who needs to be invited? - will async, Dave to get names


## December 15, 2021

* Shared tech debt: removing dependencies on `field_administration` from queries and templates (Connect with us)
  * Lynn's PR to deprecate of field_administration on `landing_page` (For use in the Connect With Us block) is still failing during the content build
    * [current tugboat errors](https://tugboat.vfs.va.gov/log/61ae8b90690c6828eb8b95d7)
    * Steve and Lynn to connect first
  * nodePage entity still has fieldAdministration on it to figure out when menu to place (tech debt in FE)
    * less of a priority but Kelson is looking into new ways of figuring out what menu to place
* Events v2 status updates
  * Brian: Cindy wrapped up research Veterans. Research report coming this week.
    * No impact for CMS, some new design components. Removing items from dropdowns
  * Kelson and Steve and Ethan have set us up for a non-breaking change in the rollout 
  * Time zones
    * Product decision: keep the timezone display in whatever the editor chose (same as current state). 
    * Kelson having fun with unix times and timezones
    * [CMS issue #7285](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/7285) to make timezonedata more rigid (default New York vs _selected_ NY)
* Holidays
  * Steve, Kelson, Brian out a couple days
  * Ethan and Lynn is out week between xmas and NY
  * Kev is in and out
  * ping CMS-support
  * Sync 22nd, 29th TBD. 

## December 8, 2021
* Promo banners (any questions?)
* Recurring events
  * Open questions from last week?
  * Are there things that can be worked on now?
    * CMS working on serving up recurring events n format needed by Kelson 
    * CMS to try to complete this Sprint (Dec 17th)
  * What needs to wait for usability testing to complete?
    * usabilty completed summary expected next week, may introduce potential changes 
  * Are there any data concerns from a CMS standpoint?
    * Not currently
  * url structure TBD
    * Brian to discuss with Micky on good URL pattern for repeating events
  * Repeats monthly may be an issue
  * Did "Connect with us" stuff get merged? Maybe? Lynn to check and Async with Kelson
 

## December 1, 2021
* Promo banners (any questions?)
* Recurring events
  * CMS: nothing has changed since the slide deck was presented in Aug, except a feature flag on prod
    * waiting on design iterations from PW and confirmed set of features
    * any docs on how to implement a CMS feature flag? (will async) everything Kelson has seen is for FE feature toggles
  * PW: usability testing happening today
    * Can filter by:
      * All upcoming
      * Next week
      * Next month
      * Specific date
      * Custom date range
      * Past events
  * Questions:
    * Are there things that can be worked on now?
    * What needs to wait for usability testing to complete?
    * Are there any data concerns from a CMS standpoint?
    * url structure TBD
    * Repeats monthly may be an issue
      * Currently in the CMS if repeats monthly is chosen, it saves as an actual date
        * may need an additional field to help capture
        * can't definitively say monthly at this time with the out of the box implementation
        * unless the FE can parse and find a pattern which is not preferred
        * Dave is good with having it say just "Repeats" so "monthly" is not neccessary
          * if the list of events for an event is of length 2 or more, show "Repeats"
          * last event shouldn't show "Find other times for this event" bc there aren't any more future events
          * "when:" should show next upcoming event (the most upcoming)
          * MVP = will cut off 365 from the current edit
            * post MVP = maybe some sort of notification for editors to validate if this event is still recurring
    * FE not concerned with perfomance with data for all of these recurring events until we hit 3-5k
    * "Find other times for this event" should only show future instances
    * "Filter by" does it search for all events including past?
    * FE is capped at 500 events currently
    * CMS to check how many events there actually are to determine if there are any missing (1,500)
      * how many are only Outreach Hub (993 published including past) vs. VAMC
      * need to come back later to content lifecycle for these
      * do we need to purge, archive, else?
      * currently are showing some past events
      * archived up to last month before
      * Dave: let's archive quarterly
    * What are the user stories around past events? (SEO, as a Veteran i want to know what happened last Veterans Day)
      * possibly: as an editor I want to keep past events so I can reuse them for future events because I don’t currently have recurring events.
    * url structure
      * CMS: there aren't distinct urls for each instance, url is for the node itself
    * "Add to calendar" functionality will remain fairly basic per Dave
    * timezone: CMS editor can select
        * decision to show on FE timezone on which it was created
    * "Where" nothing with map links yet
      * when it says online event, could be a url
    * Currently no field for "audience" in the CMS
    * 5492: Disable or hide the cost field on events to be put in next CMS sprint (47)
    * Is CMS team unblocked to start work? looks like yes
    * 
## November 24

* Promo Banners:
  * [Notes in this document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/banners/promobanners/CMS-PW-notes-2021-11-24.md)
* Recurring events
  * Need a seperate and longer meeting for recurring events; include Ethan, Kelson, Brian, Kev, Dave, SWirt, Ericka, Michelle
    * next weeks session will start 30 minutes early

## November 17

Cancelled?

## November 10
* CLP status
* Recurring events
  * Sequency / runbook
    * Research ongoing
    * Future convo on roadmap to prod
  * Generating (and ability to regenerate?) sample content for FE dev and QA purposes
    * Kelson to create some sample content
    * How does FE pull location for events when available in BE - Kev and Kelson to discuss
* "Connect with us" block on hub landing pages
* No meeting week of Nov 17? 
  * Move to Friday 18 Nov.

## November 3 

* CLP status

Upcoming Q4 epics and timing
* Promo 
  * What are next steps
  * Lynn to pick up probably Q1 22, need some KT
  * Josh has potential new design using banners - awaiting approval, Kelson to push to stakeholders
* Connect with us content model refactor (CMS-driven)
  * Public Websites team probably not able to hit until Q1, higher priorities. Unless incredibly small effort
* Recurring events
  * prparing to test timeline TBD
  * Cassandra to build out prototype
  * Cassandra to share design plans for tech review in Slack channel
  * 

## October 27 

* CLP status and next steps
  * A few CLPs in flight: Care optimization/ER, Flu Shot. Both are VHA. This is the first time VHA is using it. 
  * CMS team will look at opportunities to enhance training/KB, and where help desk may fit in. 
  * PW will think through intake 
* Virtual agent team support
  * PW meeting Nov 1 to talk through GraphQL
* Forms detail pages
  * When to use field is not required in CMS, Dave to bring to Forms team.  
* Benefits Hub right sidebar support services with no phone number- Text to URL entity change on CMS + FE updates to the template. [Slack Thread](https://dsva.slack.com/archives/C52CL1PKQ/p1635260933122200?thread_ts=1635260135.116400&cid=C52CL1PKQ) for context.
  * Kelson proposes a simple rich text field. 
* [Upcoming vs past events filters](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6800)
  * Amandeep can take this one. 
  * [See Slack thread](https://dsva.slack.com/archives/C01H29ERVJ7/p1635273694001100)

Async
* Outreach & Events: In the outreach event description do the "teaser" and 'description" fields have set character limits?  If so, what are they for each field?
* CMS Product support roadmap for Q4.
  * [Background with business goals (Mural)](https://app.mural.co/t/vagov6717/m/vagov6717/1632411814802/83ae1f501310581173d9799746c90898225a8a6b?sender=kevinwalsh8610)
  * [Zenhub timelines for epics](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/roadmap) 

## October 20

CLP - Review of current request fulfillment and editor support 
* The content deck form can be improved, per VHA suggestions, by product team
* Minimizing white glove treatment - Brian and David discussed. 
* URL side (Mikki) needs content first


[Refactor of react widgets to make them reusable and simplified](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2919)
* Review [audit](https://airtable.com/appxszQvxnpwBPq4Q/tbl5SHVnZJHJ2PLjm/viwRC7wjHYHyKnT6D?blocks=hide)
* Possible roadmap (github issue #2919)
* Next step: FE architecture
  * what fields does CMS really need to support? 
  * Sync with a content editor like Randi
  * Investigate whether certain fields are used 




## October 6

[Dave out]

Amandeep's role on FE

Promos
* PW is a couple weeks out from being able to work on them

React-only, mobile only pages (?) and banners visibility settings (slack threads from yesterday)
* Full width banners are appearing on some pages where they shouldn't, like the mobile checkin
* React apps use client-side routing. 
* We don't have granularity for mini-routes in react apps, but as far as we know that's not needed.
* We've removed trailing slash on the banner path setting which will  solve the immediate problem, because these pages are not /index.html pages. 
* Another FE PR by Kelson will address 

Staging.va.gov has CMS data that dates back to 3am ET. 
* In Tugboat we can manually rebuild the prod mirror on demand. 
* When staging.va.gov rebuilds (on every merge), it does a new content build 

Action links in rich text 
* CMS is looking to support these in Rich text editors for PW/Sitewide content team products 

[#6603 Defect affecting generation of Unique IDs for h2s and h3s](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6603)






## September 29

Veterans Day - VEO or other needs

Gov shutdown content needs
 * Evolving situation, contingency plan regularly being updated. As of now:
   * VHA will continue operations
   * VBA, OPIA, OIT (including OCTO, and Dave) TBD, may be furloughed. Last time it lasted 2 hours. 
 * Off-cycle deploy authority will be delegated to Andrea H and Michal F. 
 * Be mindful of deploy risks, extra extra care to avoid off cycle releases.

Promo banners 
 * How might we 
    * get these into the CMS as they stand now.
      * support all types of promos from design system.
    * find overlap/differences with sitewide banners (content model, governance, scope, editorial experience)
    * discovery on governance strategy
      * possibly support promos within other products (VAMC)
      * guard against whack-a-mole / banner takeover of the page. Eg VA Pittsburgh has a Pittsburgh-specific promo banner, and there's another promo banner that pops up. 
      * silo promo banners by product, directory, etc.
      * set content guidelines/guardrails.
    * CMS team to to set up 
      *  


## September 22

CMS team and staffing changes
- Previously: CMS Product Support team
- Currently: **Sitewide CMS team**
- Future: Sitewide CMS - Product support team

Banners
- Timeline on [#28924](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28924) and [#6176](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6176)
- Outcome of call with Sitewide content team Sept 17--they are aware of OPIA banner node and will be considering governance issues w/r/t banners and paths. 
- Intake request form - Brian and Dave will discuss what to do with it, since Promo is still a thing. Doesn't cover modals. 
- Dave/Steve/Kev - path field visibility.


## September 15

Alert banners (soon to be FKA "Banners")
- High five session 
- Update from OPIA handoff yesterday (covered in Jane's email, forwarded to Brian and Kelson)
- Next steps to remove alert block cruft [from FE](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28924) and [CMS](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6176) (PR ready)
- This Friday's meeting with Sitewide content team

Promo banners
- Current state - how does this work? 
  - In vets-website there's a folder called Announcements, with a [index.jsx config file](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/site-wide/announcements/index.jsx), where announcements can be added with a custom component that renders as a promo banner. 
  - [There are different types of promo banners](https://design.va.gov/components/promo-banners) (benefits announcements, news, signup)
  - If the text is too long, the design breaks. 
  - Currently supported on any URLs. 
  - The intention with the Afghanistan promo banner was to have it on all pages, but there's a defect (no timeline)
  - Promo banners have largely served as pressure release valves for other product requests, such as adding "Afghanistan resources" to the main nav. 
- User stories for PW team
  - Dave's MVP idea: Just on the homepage, or all pages.  It 
  - Dave: Is this a place for planned downtime announcements? PW will investigate.
- Possibility of extending this tool to VAMCs, but this brings governance issues
  - But each URL can only have one, so there are cross-product governance details to work out. Who trumps who? 
  - What happens if user dismisses the "top" promo banner, does another one show up? 
  - How might the design system support some of these governance needs. 
- Should promo banners expire? Maybe not an MVP feature but this could help with governance. 

## September 8

Banners blocker to launch
- CMS finishing two blockers required for OPIA 
  - https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6175 
  - https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6015 
- Existing COVID banner migration
  - Current node 33317 only has half the URLs
  - We either need to finish migrating or finalize the rules with Danielle. 
  - Steve Randi Danielle (optional Kelson)
- Homepage banner
  - Needs updating to match what's on prod
- CMS team to book time with JoshT from OPIA (and others?) 




## September 1

Banners runbook

Recurring events knowledge transfer for design - who should be there

## Aug 25

**Recurring events**
* Design work needed around workflow, UX (from both listing page and detail page)
  * Loop in Mikki
  * Loop in Facilities team to ensure UX is coordinated across the CMS
* Can we get a list of all events and urls in the system? to see how many have been cloned **CMS to do**

**Banners**
* Currently on all non-prod environments
* CMS to update content to provide parity on all sites **CMS to do**
* PW to ensure banner component is reusable **PW to do**
  * Projecting to have in non-prod soon (latest ~early next week, dependent on review process)
* CMS to sync with Danielle on pathing (include Dave) **CMS to do**
  * OPIA should only have access to homepage alert
  * May need some editorial experience changes in order to only show what's relevant to OPIA (question for Danielle)
* Dismiss functionality: may want an expiry for dismissal (e.g. promo banner has been in use since ~Sept?, dismissed and forgotten about)
  * Does this need separate UX and governance?
  * Homepage update coming soon
  * If moving from local storage to session storage, shouldn't be a big lift for PW
* Governance around changing paths when not supposed to (not a blocker)

**Breadcrumbs**
* PR to fix hyphenation should be in by COB today
* Will wait for Kev to return to connect dots


## Aug 18

**Recurring events for Outreach Hub and VAMC**

Drupal
* One event node (entity) for many events
* Editors will be able to override individual event instances (cancel etc)
* GraphQL demo https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6055

FE TBD 
* One node, many single pages
  * How to handle scaleability -- limits on number of instances
  * What is the right design for repeating events - one page with all instances or one page per instance
  * ICS calendar link feasibility for repeating events - 
  * What is the right URL for event pages
* Event listing page refactoring
* Preview experience
* PW team will design/research next steps here


**Banners**

* Content type close to ready, still working on governance features
* Scope
  * Non-content admins cannot create banners, but they can edit them. 
  * Non-content admins will not be able to edit 
  * PR open to support exceptions, catch alls, info and warning
* Governance
  * Punting on stacking and sorting issues for now, can be handled by business process by sitewide content team, who needs awareness. 
* Runbook for sunsetting block 42 (vaccine) 
  * Finish creating new node and scope (Steve and Randi/Danielle, need to confirm the visibility rules) 
  * Will we support both banner types at once? 
  * Testing the switch in a tugboat environment with Kelson's branch?  (archive block 42 + publish the new node, test the paths to see that they match prod), test the homepage banner. 
  * Merge Kelson's PR
  * Confirm the visibility rules with sitewide team. 
  * Repeat the launch on prod 
  * Then remove FE support for alert-block-based banners.
  * Then remove CMS support for alert-block-based banners.  
  * **CMS** issues for editorial experience - clear rules about what banners are for 
  * **CMS** issue to trigger content build

## August 11

**Banners**
* [rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/banners/Banner-Alert%20Rubric.md) from discussions with John/Dave/Jen in 2020 is hypothetical, needs more discussion with design system and thinking across products and teams
 * none of this is critical path for this phase 
* Query to pull in in has a POC
* Dismissibility
  * CMS team will be adding a dismissability field soon, defaulting to true
  * same behavior from the existing block/42 dismissibility
  * What happens to a dismissable banner after it's edited? 
  * FE could use revision ID to reset, for now. Or a hash. 
  * Iteration could consider adding additional tools for dismissability settings, based on data from Veterans.  
* Stacking 
 * Current state is OK for now, can be handled by business process with teams managing banners.
 * governance for stacking probably can't be on the CMS side
* Existing VAMC (`full_width_banner_alerts`) should continue to work as is for now, could possibly be moved to `banners` in the future. 
* path scope problem
  * Needs to be agnostic to the CMS (like the homepage)
  * Need a clear regex pattern, like asterisk at the tail end, which is what sitewide content team needs to migrate block/42 to new content type. 
  * `!` at the start of a string for path blocking. 
  * Nice to have: being able to regex the asterisk anywhere in the path, like `/*-health-care/*` for any health care site, or for any events, like `*/events/*`. 

**Recurring events**
* To be discussed with Michelle present week of the 16th.


## August 4 

Banners for Sept 1
 * New banner content type
 * **CMS** 
   * Get Entity ID to hardcode against
   * New field: dismissible with default as TRUE
   * Change alert body limit to 300 character soft limit, 500 character hard limit, not including HTML (not 1000)
   * 2nd half of august: Knowledge Base article(s) 
   * Change management and adoption in September
 * **Public websites** 
   * to track dismisses of alerts


Og:image
* CMS provides only the path for og:images, but not the hostURL (www.va.gov) 

CLP
* Tim H and Katie working on a new one 
* Pride is staying up, not being retired and redirected
* Trust CLP staying up for now, still being promoted
* John reviewing Jane's KB articles, slidedeck for training

