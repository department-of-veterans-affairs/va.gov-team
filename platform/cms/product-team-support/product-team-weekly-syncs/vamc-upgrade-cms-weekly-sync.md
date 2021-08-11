# Weekly sync: VAMC upgrade / CMS

<details><summary>About this meeting</summary>

- Wednesdays 10am ET 
- Meeting owner: Clarence Maeng
- Facilitator: Kevin Walsh
- Standing agenda: 
  - Migration
  - VAMC Scaffolding
  - Training
  - User administration
  - Dual state and product launches
  - How we work
  - etc.
- [Previous agendas in Google Docs](https://docs.google.com/document/d/1Pchj-AHdET4URxAceIqSMvKOPluU3gZfZ6KIP7pCXqs/edit#)  
  
</details>

<details><summary>Parking lot</summary>

</details>

## August 13
* Staff Profile - Multiple Systems (Within one VISN/or not?)
  * Chandra Lake (for example)

## August 6

Schedule for removing endpoints for full prod launches
* Full production for Aug 11th, (Southern Nevada, Sioux Falls, Central California, Fargo, Albany,     Finger Lakes, and Northport)

Detail pages 
* guidance for Programs pages, health services, context [here](https://dsva.slack.com/archives/C02686M6K6X/p1628009571010300)
  * Pre-lockdown, 2 or 3 PAOs were adding a lot under health services
* Request from PAO to disable areas that will not be in use. (i.e., News releases) That may be enabled in the future.  VHA has approved disable and removing from menu as long as they can be enabled in the future.
  * Dave is recommending we do not disable menu items
  * Some PAOs are continuing to add services here. Getting push from administrators to get pages up for surgery, etc.
  * This will be case by case, so CMS help desk will tag Stan and Lisa on these requests.
  * how to handle cleanup for existing pages that have disabled menu items.
* System health service library source code for general taxonomy - mentioned in office hours and help desk needs to know how to support
  * "Care we provide" content can be boilerplate that editors at each system could adapt. 


* News releases 
  * Decision: if PAO wants to disable News releases, request fulfillment to CMS helpdesk whole will archive the page, and make sure there's no published news releases. 

Top task pages for Q3/Q4: Medical records, Billing and insurance, Register for care. 
* Is it possible to "get ahead" on these for dual state, by creating 140 of them, one for each system? 


## July 30

* VAMC editors support
  * Prod launches coming quickly so more issues are raised
  * 2nd weekly office hours starting in August, with some focus on Plain Language, Style guide, and where there may be additional training
  * VAMC upgrade team ramping up the self-service campaign
* Health service migrations
  * No Lovell FHCC for now, waiting on final name
  * Low lift once naming decision is made, just edit the CSVs that are already in codebase
* LGBTQ+
  * Detail pages getting updated
  * Other language changes 
* Walla Walla 
  * CMS team creates menu first week of August and delete the old one
* Upcoming VAMC launches
  * Stan sending list for August 
* Operating status permissions etc

## July 23

VAMC launches
 * Butler, Syracuse, OK city, New Jersey, SLC.
 * CMS team to create a remove endpoint PR for Butler
 * Stan can provide list for first two weeks of August. 

VAMC editor support 
* Staffing changes
* High touch users
* Office hours every Tuesday, and pushing to twice a week in August. There were 70 last week.
* PAO newsletter 
  * will remind them about office hours, and ask a review of VAMC facility data
  * knowledge base announcement (August 2?)
* Menu governance change requests workflow
  * Disabled menu items
  * Health services detail page requests
* [Knowledge Base article](https://prod.cms.va.gov/help/vamc/how-to-manage-vamc-menus)
  * VAMC upgrade team can work with Steve T on language

Migrations
 * Walla Walla: CMS Section and URL alias menu machine name are wallawalla, but everything should be two words, walla walla
   * Facilities team robots.txt 
   * CMS team to create new va-walla-walla-health-care menu
   * CMS team can rename Section
   * VAMC upgrade team will need to recreate menu items
   * CMS team to create CMS Knowledge Base article when VAMC name changes, what needs to happen, based on issue Steve created 
 * FH Lovell
   * Remove from migration until this is settled.
   * Dave will work with VHA on name.
 * Hopefully wrapped today and QA can start Monday or Tuesday.

Knowledge Base

Operating status
* changes incoming, more next week.



## July 16
  * Health services migration of remaining 6 VISNs. Proposed timeline: 
    * VAMC upgrade team A-Z mapping done by July 20 EOD
    * CMS team igrated to prod by July 30.  
  * Menu governance lockdown for VAMC detail pages ready to go
    * Announcement from VHA on hold unless we see a ton of help desk issues 
    * [Knowledge Base Article: How to manage VAMC menus](https://prod.cms.va.gov/help/va-medical-centers-vamcs/how-to-manage-vamc-menus)
    * [Status of eligible parent items](https://docs.google.com/spreadsheets/d/1XBUNWffdo8jCYGYq7FZtN4Ro268lkzYOqlsFZS4A1j0/edit?usp=sharing)
    * PAOs cannot enable their menu item. What is the current workflow for creating these pages, and what should it be?
  * Discuss va- randomness in Health Service import, is current resolution path acceptable?
  * What to do about Lovell now that it's (maybe?) in VAST
  * Account admin prototype
  

## July 9 


## July 2

  * Reminder: no new Leadership Listing pages during Sprint 51. CMS team will make URL changes early Sprint 36. 
  * Operating Status page changes - Menu required.  What is the new SOP.
    * Create menu item then disable.
  * Health service migrations  
    * Changing "LGBT Veteran care" to "LGBTQ+ Veteran care" -- Done July 2
    * VAMC upgrade team will change this in next round of data to be imported. 
    * Dave and Stan to discuss any needed changes to the Facility System Health Service descriptions. Field will be updating existing content. 
  * CMS action: add confirmation step to bulk publishing
  * VAMC - Full Production/Go Live Schedule - Proposed 
    * Tracked down the redirects to a Teamsite change that need to happen, documenting that process. 
    * F5 redirects can be a 2-8 week process. Public Websites will still be triaging the redirect approach.
    * Endpoints for first 3 VAMCs removed last Tuesday, field will be updating facility operating status in two places.  
    * Erie dropped out of next weeks launch 
    * July 21 (approved): Northern California, Coatesville, Minneapolis, 	St. Cloud 
    * July 28t (proposed), Syracuse, Butler, Salt Lake City, New Jersey
    * CMS to create 8 PRs for these. 
  * Communication plan to field when changes are made to CMS - current experience is creating backlash to CMS support desk and VAMC
    * Example, During Production Q&A this week, field had experiencing change and VAMC was unaware of changes or how to communicate them.
    * We can use this meeting to talk about upcoming changes.  


## June 25

* Facility health service migration
  * [#5615](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5615) (CMS Sprint 35, done.)
  * When is the next round? 
    * Next 3 VISNs will be ready for Sprint 37.  
* CMS role in go-live for VAMCs
  * VHA digital media will deciding on schedule to incentivize getting ready
    * That communication will go out in August 
    * VAMCs will need to have been in dual state for X time
    * No Mobile, No Domiciliary, Community Living Centers (blocked by lack of veteran experience), 
      * Blocked VAMCs may be unblocked by temporarily removing these types of facilities, or providing access to this info in a different way.
      * Research going on in Q3, product iteration in Q4 to support these cases and for Manila.
  * Remove endpoint for operating status migrations, merge and release to CMS prod the day before the Drupal becomes canonical. 
    * June 30: [#5634](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5634): Wilkes-Barre, Wilmington, Altoona
    * July 7: Erie, Lebanon and Eastern Oklahoma [#5696](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5696)
    * July 14: None
    * July 21: 
  * Anything else CMS should be doing? Should we review runbook?
    * Butler will need a separate CMS issue for VAST change to name
* Guidance for PAOs placing detail pages between and now and [#4988](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4988) merge, and fixing existing ones.
  * Stan: Last tuesday and every tuesday, VAMC upgrade team has told them to only choose Programs and Research for VAMC detail pages. They've been told that if they put it somewhere else, it will be moved. 
  * Dave: This is an opportunity for a help center article that explains 1) where you can put stuff and why. And a caveat that this will change. 
  * **CMS to do:** Adapt existing documentation page to explain current and future for VAMC menus. 
  * Dave: This is an example of product-specific help content that could be written by content team. 
* Leadership Pages
  * FE is currently hard-coded to need `*-health-care/leadership` but it will be moving to the original spec, `*-health-care/about-us/leadership`. 
  * For now, Continue to create pages at `*-health-care/leadership`, and leave URL automatic and ideally go ahead and get ahead of the curve here by creating as many as possible, so that we can move URLs. 
  * temporary content freeze on creating new Leadership List pages. [#5500 Runbook](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5500). 
  * **Decision**: No Leadership Listing pages during Sprint 51. CMS team will make URL changes early Sprint 36. 
* Programmatically creating URLs, status? Next steps. (i.e. Leadership list page, Programs, etc.)
  * In short: use autogenerated URLs always, except for VAMC system URL aliases, which need to be set before other content is added. 
  * As of today's release (or Mondays) menu items will be required for all VAMC content types except Stories, News releases, Events, and Staff profiles. 
* #cms-product-triage channel usage
 
## June 18 (Skipped, needs to be discussed)
* VAMC editor that created a bad table, plan to handle when someone goes off the rails. slack thread [**here**](https://dsva.slack.com/archives/CPQFCQKEH/p1623686219343000)
* Bulk publishing bub "Page not found"
* Scrapping Operating Status/ Turning it off, time needed, etc.
* Operating Status - improvement? options? and current status
* Training listening sessions scheduled June 28 and July 1, 68 active VAMC editors invited

## June 11

* Accessibility checker (overview)
  * Release will include a description of the issue and how to fix
  * Change management / comms around this: Stan to bring up at open house
  * Stan to get Dave a page count for Butler to track towards leveraging SiteImprove
    * Recommendation to scan SiteImprove on the live site
    * Longer term = possibly displaying SiteImprove within the CMS
* Butler/Wilkes Barre targetting June 30th, always going to transition off of dual-state on Wednesdays
  * Change management and comms still underway from VHA
* Mission Act - Website depricated as of Sept-30, 2021.  All Link on past and future need to be replaced.  
  * Suggestions? Input from VHA.
  * Planned redirect to a CLP, need to sync with PW on go-live for that
  * Is there monitoring when external links break en mass?
  * Could we find a way to help mitigate the risk of a major/widely used link breaking?
  * TeamSite deprecation isn't a big risk because redirects will be in place
* Help Desk
  * How might we engage VAMC Upgrade team more?
  * Separate meeting to discuss
* csv files ready for migration (planning)
  * Recommendation to do them in bigger batches
    * Bigger batch is a larger lift for VAMC Upgrade because it's based on # of health care systems, facilities, and services
      * 9 left, 3 should be done by this sprint
      * Possibly 3 batches
  * Recommendation for CMS to handle the data clean up
    * Major issues can be brought back to VAMC Upgrade
  * Details to be fleshed out in regards to the full handoff (checks/review in Tugboat, etc)
* Dave is seeing weird national VC content in Tugboat: Swirt and Dave to connect to troubleshoot
* Menus
  * Parent items should all have _enabled_ menu items, even if they are in draft. Who's responsibility is this?
  * If a user requsts enabling through CMS helpdesk, refer to VAMC Upgrade who will enable


## June 4

* GovDelivery may be enabled soon - do not send emails when adding the Dual State banners. 
* Menu items for all Detail pages
* Policies Page
  * VAMC upgrade team will delete the old Policies page before creting the new one, which will then take the /policies URL. Reach out if we need to go the URL alias editing route. 
  * Linkit defect has been fixed
* Help desk
  * White glove service - where one on one is being requested from one user to both VAMC upgrade and CMS team, for items that are in the training. Jane will send list of issues to Dave to consider escalation. Jane, Josh Stan, Lisa will document history. 
  * Supplemental training - look to August/September.
  * Help desk follow-up with VHA Digital Media reporter  
    * Items from Justin W should be routed to Stan. He's been charged by VHA Digital Media to do QA work. Justin is only there for 3 months. 
* Facility health service migrations
  * Health service names changed (taxonomy terms), and migrations stopped working. Eg Blind and low vision, not Low vision and blind. 
  * Content freeze on health service names 

## Friday May 28

**1. Policies page**

Timing of comms from VHA about new Policies pages.

* Training: https://prod.cms.va.gov/help/access-training/session-5-detail-pages
* On VAMC upgrade team to take this across the line (archive old and change URL alias to add `-old`, publish new at `/policies`, and update Prepare for your visit accordion link where necessary). 

**2. Menu lockdown**

Epic [#2427](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2427)

Menu items content issues
* Malstructured menus fixed!
* issues with `<nolink>` fixed!
* As of as of late May 28 [198 Detail Pages missing menu items](https://airtable.com/shrjv5gb1dLELE7FS), down from 233 on May 24. No "live report" yet. Not sure if this is a blocker for CMS team, but the URLs for these will get _worse_ after when we merge our menu work, so this will be a blocker for full launch for these products. 

Incoming menu UX changes in the coming weeks which we will be announcing
* New feature! Menus on all node view screens (Eg [Saranac Lake VA Clinic](https://pr5468-sbfhan6rl6jarzcwkrvrpqghxnub9jsh.ci.cms.va.gov/albany-health-care/locations/saranac-lake-va-clinic))
* Menu items will be required on VAMC Detail Pages 
* No weight or description fields on Menu settings 
* "Detail Page" content type will be renamed "VAMC Detail Page"
* Does VAMC upgrade team ever rewrite menu item titles? See [#5469](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5469) 
* Does VAMC upgrade team ever uncheck "Enable in menu" checkbox? We placed it here a long time ago but would like to remove it from normal editors, who should never uncheck it.  Content admins can still disable menu items (keeps them in the UI) on the menu admin screen. [See #5470](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5470)
* We'll be resetting all URLs for Detail pages to "Generate automatic URL alias". Many have had this unchecked because the URL alias had to be generated by hand.  
* Eligible parents have changed a bit, we've added `work-with-us/jobs-and-careers` and `work-with-us/volunteer-or-donate` to the list of eligible parents that are will be going out in the coming week or two. Here are the numbers so far on prod. Goal was to have these pages created by the time our announcement goes out, which could next week... looks like we're pretty close. 
  * -health-care/work-with-us/internships-and-fellowships (91)
  * -health-care/work-with-us/doing-business-with-us (45)
  * -health-care/work-with-us/jobs-and-careers (89)
  * -health-care/work-with-us/volunteer-or-donate (89)
  * -health-care/programs (66)
  * -health-care/research (68)
* Can the full caps for `<nolink>` menu items breadcrumbs be cleaned up as part of dual state launch? They are great for VAMC upgrade team but bad for PAOs. 
  * VAMC upgrade team tech debt to 
  * Rolling forward: Sentence case.
  * CMS team could reduce the list of options based on Section choice (string matching) #5471
  * CMS team could update past content
* All VAMC upgrade team members must now be content admins, because otherwise they are shut out of menu editing. CMS team doesn't currently offer "content admin training", but Lisa and Stan have been content admins all along. Great power, great responsibility yadda yadda.
  * VAMC upgrade team and Dave will discuss 
  * Content_publisher will soon lose cloning and content release trigger.
* Health service migration 
  * VISN 7 and 8 health services on prod by Wednesday EOD, possibly sooner. 


CMS team action items 
* Debug /node/add/vamc-policies doesn't autopopulate menu item title
* Estimate some migration stories for Care coordinator and Top task pages 


Pittsburgh IA updates happening next week
* [Full list of redirects](https://airtable.com/shrf9O0nAUavSJjI7) to be added next week
* No change management (per VHA) 

**3. Preventing duplicate content**

1. Only one facility health service per system health service per facility  
2. Only one of each "list" content type per system (News releases, Events, Stories, Leadership, Locations, Health Services)
3. Only one of each top task page per VAMC system (so far, just Policies)
4. Only one Operating Status page per VAMC system

**4. Help desk triage**

* Access to JIRA etc OK? 
  * Back to normal, but access via Citrix can be an issue. 
  * VAMC help desk team will tag both emails 
* Elevating user from Hudson Valley? 
  * Dual state, completed training 


**5. Training**

Some users (at least one, possibly more) are completing Training 5 only then saying their done. 
 * Dave will communicate this to VHA HQ
 * Others are just turning on the training and letting it run

PAOs needing hand-holding
 * We have data on tickets per user that we can use to see who's who.


## Friday May 21

* Help desk triage
  - High touch user management
    - VAMC upgrade team putting together a presentation about the overall product philosphy / content strategy, "do this / don't do that" approach
    - VHA Digital Comms will take ownership of this, Dave will work with them.
    - This presentation could get folded into the training, but not until at least July.
    - Will start "lo-fi" to tell this story, then iterate.
    - Lisa, Josh, Jane to meet.
* Office hours May 25
  - Jane will join, some common issues that can be raised like broken links, copy/paste Outlook/email links
* Facility health services 
  * Migration VISN 8 & 7 - Steve reviewing, if questions-->Lisa. This blocks dual state for VISN 8. Data for 8 will be prioritized.
  * Blobby facility health service content that hasn't been hardened and is on the chopping block (eg Cheyenne, scope of problem unknown)
    - VAMC upgrade team - Check "main locations" for VISN 19 VAMCs, to see if there is data hiddenin the blobby field that should be manually moved to the hardened content model. Eg. https://www.va.gov/cheyenne-health-care/locations/wheatland-va-mobile-clinic/ (compare Cardiology that is based on blobby vs Primary Care that is using Service Locations fields)
* Dual state launch
  * VISN 2 finished next week (1 VAMC)
  * VISN 8 blocked by migration. 
* Menu lockdown / Enforce IA design [#2427](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2427)
  * Review runbook
  * Status of required pages
  * Malstructured menus
  * Missing menu items
* Mobile, Domiciliary, Community Living Center (CLC)

## Friday May 14
* Help desk triage
  * Lots of issues to work through, eg new Dermatology. Heavy this week, same week that Help desk team went down from 3 to 0. 
* Facility health services migration
* Four draft pages for every VAMC (/work-with-us/internships-fellowships, /work-with-us/doing-business-with-us, /programs, /research). What's the timeline on creating these? Since these are the only pages eligible to have child menu items, would be ideal to have them in place before the announcement and documentation about the menu changes.
  * VAMC team to ensure all these pages on each system, in Draft or Published state. VAMCs that don't want it (eg Butler, or one in 19) will know that it's optional. 
  * CMS team won't merge or announce menu lockdown until these pages are there.
* Upcoming change: Facility health service selectors #4923 /  PR #5328
* PAOs are adding System and Facility Health services, but Taxonomy is not in CMS.(Consider ideas for a Work around until this can be resolved?)
  * Stan Lisa and Dave documenting the content strategy of the health services, and the CMS UX for managing health services can leverage that. 
* 10 or less broken links?  Are they still listed for purposes of fixing them?


## Friday May 7
* Help desk triage
  * Continue to use #cms-product-triage channel and mention @stan and @lisa to get their attention. 
* Policies page runbook [#5053](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5053)
  * In their current sprint, VAMC upgrade team will move content from existing Policies Page _detail pages_ into the new VAMC System Policies Page node type. 
  * Dave will review and send communication to PAOs. 
  * Before going live with these, watching out for broken links in the Visitor Information accordion 
* CMS Sprint 32
  * Facility services migration for VISN 7 and 8
  * VAMC 10 and 15 scaffolding 
* When facility is removed in VAST/deleted, how do we remove facility from CMS?
  * Example:  Elizabeth VA Clinic in (Elizabeth, NJ) VA New Jersey health care (VISN 2)
* 
  * attributes that come out of VAST? Mobile for sure. Some of the domiliciary and CLC but not all.  
  * Some CLCs are stand-alone facilities, or could be a building on an existing campus. 
  * Mobile is now a boolean on VAMC facility content type

## Friday April 30

* Help desk
  * Staffing changes -> Reduced capacity, SLA changing to 9am to 5pm ET.
  * VAMC upgrade team will help set expectations that responses will not be immediate. 
  * CMS team will be communicating to users
  * Weekly meetings for VAMC editors to focus on common issues, working towards a community of practice and FAQs.
  * VAMC support email is now auto-forwarding to Jira, and we are responding from Jira instead of email.
* Pause on VAMC launches
  * Tentative: Finger Lakes (very unique) and Hudson Valley, Central Iowa and St Cloud 
* Policies page launch for Butler and beyond
  * Only VISN 4 and 19 have links from Prepare for your visit accordion to the old Policies page. 
  * Broken links reports––forward to VAMC upgrade team. 
* Menu governance (Kevin)
  * New restrictions on menu options for non-content admins, launching next week. (Kevin will do a quick demo)
  * Setting up "Programs" and "Research" detail pages as (Menu Disabled) and archived until site releases them to load new pages.
  * Set up some co-working next week on Pittsburgh menu and IA changes 
  * Dual state menu and IA changes 

## Friday Apr 23

* Help desk triage updates
  * Flagging/labeling: triage channel when action needed.  Treat other emails as "FYSA". 
  * CMS team will continue to gather materials in one place so systemic analysis can be done generating canned help desk responses, improvements to UI, training. 
* VAMC policies page rollout (Kevin)
  * Background: FE is ready to go. Form is ready to go. 
  * What's the first VAMC to go past dual state? Is there one with a highly responsive editor? Thsi would be a good candidate for the trial rollout next week.
  * Look at list of Top Task pages that have been edited and by who.
  * How many of these pages have had their local content edited
  * What's the cloning procedure
  * Adding this to VAMC runbooks
* Menu governance (Kevin)
  * New restrictions on menu options for non-content admins, launching next week. (Kevin will do a quick demo)
  * Setting up "Programs" and "Research" detail pages as (Menu Disabled) and archived until site releases them to load new pages.
  * Set up some co-working next week on Pittsburgh menu and IA changes 
  * Dual state menu and IA changes 
* Loading (Story/News release) Listing pages with placeholder
* Update on archiving facilities (Steve)
  * Facilities can be archived, but the FE defect that lets unpublished facility services go to prod was breaking this, because the links were still appearing within the System health service accordions.


## Friday Apr 16

* any outcome from training meeting from Tuesday 12
  * Went well, walked PAOs through a lot of issues they were having
  * All attendees were active on prod and had completed training
  * May step up to once a week
  * Stan producing an artifact, and meeting was recorded.  
  * What is the right flavor of artifact to pull insights from
    * What can we learn about training (improving videos)
    * What can we learn about editorial experience
    * What can we learn for product iterations
  * Next one is April 27
* Help desk triage
* Reinforce directing folks to `support@va-gov.atlassian.net`
  * When emails are sent directly, reply with a `TO:` to this email address
  * Update signatures on va.gov email to include support email address
  * We're trying to kill off `vacmssupport@va.gov` email address, so remove where we see it
  * Lisa and Stan to check on emails
  * Do we need to update users or any other artifacts that have the old email address
* Go-live timeline
* Validate runbook for Go-live (separate meeting with Facilities) 
  * Stan will set up. 
* Account creation
* Account Permission - Publishing (e.g. VISN level permissions to publish?)
  * A few PAOs have VISN level responsibilities
  * Eg at VISN 21, a publisher has access at VISN level, but should have access only to certain VAMCs
  * Lisa to update Ero about Sections needs for these folks
  * VAMC dual state rollout can try to group these together 
* Update on any CMS changes or updates that VAMC needs to be aware of that may impact production. (i.e. Removing generic FHS)
  * 


## Friday Apr 8

Training
  * Policies page training
    * Jane: Dave and I met on Zoom to discuss Policies training, so we're good on that - we can take it off the agenda to make room for other items. I'll have the Policies training slides updated tomorrow and then get them recorded, captioned and posted in CMS help center early next week.
    * How might we make this more "plug and play" for future Top Task pages? **Kev to review with this in mind** 
  * Tuesday meeting with everyone who has done training (65 so far)
    * Jane and Josh attending.
* Help desk triage between teams
  * If help desk user doesn't respond after 3 asks, we close out issue.
  * Jira access is working well 
* Do we have a help desk satisfaction measure?
  * It's great if triage is working for us, how is it working for the field?
  * Two loud voices, one from VISN 4, satisfied - anecdotal.
  * CMS team will add a backlog item around measuring help desk satisfaction  
* Dual state launches progress and upcoming
  * Went well this week.
  * 4 next week and weeks following, including some big ones (20 facilities)
* Go-live timeline (eg for Erie)
  * VHA will be validating 8 times a day publishing in writing to turn off Teamsite
  * 60 day (or 30-day) countdown will begin once an update is added to carousel on legacy pages (eg https://www.erie.va.gov/)
  * this 60 day period may start next Thursday (end of May)
  * Start with 1 in a sprint or week, then scale up to the current pace of dual state (3-4 per week)
* Mobile, Domiciliary and Community Living Center facilities don't work in current product
  * blocking launch for any VAMCs that have these facilities (eg Philadelphia which has a domiciliary)
* CMS account flows 
  * PAOs can request accounts that are lesser or equal to theirs 

## Friday Mar 26

* CMS help desk triage - feedback and discussion.
  * Escalation paths, prevent request loops, what can we do better?
  * 22 users from first seven VISNs are in the system. 
  * How can we prevent "loops"
    * Stan: eg Stan referred Nate to help desk and help desk referred Nate to Stan. 
    * Dave: What's the data like? Is this CMS related or is it "how do i use this product"? 
      * Stan's team has larger capacity to teach the content intent and collect the data for the product team.
    * Clarence: main source of pain are a few users.
    * Stan: if it's a content question, send it to VAMC upgrade. If it's technical, CMS team eg "can't find this, how do i get to this". VAMC upgrade team will host a Q&A in a couple weeks for VAMC editors who have completed their training.
    * Vanessa: Proposed process for CMS help desk referring an issue to VAMC upgrade team: add Stan as a participant on Jira ticket. At that point Stan can respond via email to those Jira issues.
    * Can we add the participant field to the #cms-helpdesk-bot, then Stan can set up a notification for that channel when he is mentioned. 
* Dual-state: VISN 16!
  * Deployment schedule next week: 3 for Tuesday March 30. 3 for Wednesday.  
  * Eastern colorado- Steve and Kevin to try to reproduce on Tugboat today (may be an update next week)
* Content being published before Dual State (eg Houston content published before Houston is in dual state)
  * Stan will have source of truth pinned to VAMC upgrade channel. [This list](https://prod.cms.va.gov/admin/content?title=&type=health_care_region_page&moderation_state=editorial-published&owner=All) also shows VAMC systems that are published, which is an imperfect proxy for dual state. 
  * Next week: Talk about opportunities to remove publishing until Dual State. Kev to set something up. 
* Policies page announcement for training and change management (may be too soon to discuss, depends on FE) 
  * Jane has slacked slidedeck to Dave for review with a few questions 
  * Recording can happen next sprint. 
  * Existing FE Policies pages can be used in training materials.  
  * Delivery of training and other change management is dependent on FE (which is blocked by a CMS issue). 

## Friday Mar 19 10:30am ET

* CMS help desk triage - feedback on the last week.
  * triage channel working so far for content and user questions
  * Vanessa will look at adding Stan to Jira
* Policies page cutover runbook - which team will create these pages and populate them, and when. 
  * No announcement from users until FE work is done. 
  * Existing Dual State sites: VHA will send out announcement to users, possibly JHL or from her office.
* Problem statement: What is the best solution to create the Program & Research, top level pages for each systems, but not publish.
  * Place for PAO to place pages at a lower level after the menus and other pages are locked down.
  * If they don't have those areas now, how best do we create these areas? (Create and keep them disabled in Menu? Keep them in Draft?)
  * Possible solution: 
    * create a Programs template page that can be cloned, and a Research template page can be cloned. 
    * Add disabled menu items for each
    * Add some explainer / placeholder text with instructions. Eg: Edit this page and enable menu item. Add children "Detail page" content if this page is not enough. 
* The use of placeholder images for facilities and stories. (covered on March 18)
* Dual state schedule for next week. 

## Friday Mar 12 10:30am ET

1. VAMC user administration - Roles, timing and responsibility for unblocking new VAMC users on prod.  
  * Stan emails list of users for next training.
  * VAMC editors are added as blocked to prod, but training happens in training environment
  * Stan continues to communicate with VAMC editors about content
  * We've gone back and forth on who should unblock them on prod. But to lighten load on Stan, Stan should open jira issue to unblock editors on prod.
3. VAMC user help requests - Triage process for VAMC users help requests.
  * When CMS help desk gets VAMC user issue, we will triage via slack for now, and develop this process in coming weeks. 
5. Dual state launch planning and updates. 
  * Cheyenne, Montana, Eastern Colorado next Tuesday, finishes out VISN 19. Stan will send out updates.
  * Asheville, Durham on Wednesday, to start VISN 6.
  * Thursday AM for anything remaining. 
7. VAMC System Policies Page 
  * Content will need to be added, one for each VAMC system.
  * Change management with existing VAMC users. 
    * See who last updated Policies pages for their 
  * CMS team will manage the cutover when we're ready to go

@todo
- New issue: as an anonymous user, i can get to help docs from home page or login page.
- Recreate training videos to remove vacmssupport email address
- node id reerences to the old Policies page will need to be updated to use the new one. 

## Friday Mar 5 10:30am ET

- [Stan / Oksana] VAMC is releasing four more Systems into publication each week. Let's use this opportunity to publish the site and have it role out on one of the scheduled releases.

## Friday Feb 26 10:30am ET

- Drop of Content Export affect on dual-state launch timeline


## Friday Feb 19 10:30am ET (cancelled, done async)

- How to manage user confusion during VAMC roll out (who to reach out to for what, publishing when they shouldn't) (Jane)
- Standing agenda item, may not be needed this week: Dual state launch

## Friday Feb 12 10:30am ET

- [Projected volume of content](https://docs.google.com/spreadsheets/d/1pa0EgHuOXINvool4QHjV3lIDyYf-p9JRr8z1AuW4HFE/edit#gid=0) (or [XLSX file in this slack thread](https://dsva.slack.com/archives/CPQFCQKEH/p1613142977246500?thread_ts=1613082250.240700&cid=CPQFCQKEH)
- Dual state launches for the next 2 weeks
  - Fixing Lebanon facility references. Rescheduled for 17th
  - Monday broken links check (or Tuesday Feb 16 due to holiday). Any broken links will mean rescheduling and async broken link support. 
  - Bulk publish 20 minutes ahead of meetings. 
  - Stan sending out invites for next week today, then will schedule the week after. 
- Menu cleanup for future VISNs (the issue where structure was incorrect)
  - updates next week

## Friday Feb 12 10:30am ET

- [Projected volume of content](https://docs.google.com/spreadsheets/d/1pa0EgHuOXINvool4QHjV3lIDyYf-p9JRr8z1AuW4HFE/edit#gid=0) (or [XLSX file in this slack thread](https://dsva.slack.com/archives/CPQFCQKEH/p1613142977246500?thread_ts=1613082250.240700&cid=CPQFCQKEH)
- Dual state launches for the next 2 weeks
- Menu cleanup for future VISNs (the issue where structure was incorrect)


## Friday Feb 5 10:30am ET

- VAMC editor training
  - Some of our videos and screenshots are getting out of date, for example the navigation for VAMC sections, which editors are asking helpdesk about. 
  - Should those updates be done first, or should it include other changes to include other types of feedback?
  - Dave: What's the impact to the help desk? Find balance between helpdesk effort and effort required for revising training. 
  - Vanessa: so far it's just been a couple. If it starts to be more, i can bring it to y'alls attention. If it's the same thing repeatedly...
  - Dave: Could we bundle in work like Policies? What is the threshold for doing an iteration? To avoid context switching. Other potential changes 
    - Modularity for VAMC health service. 
    - Alerts and situation updates - how to write these
    - Things that could be reused for CLP and Vet Centers
    - Platform training
      - 508 training (first up) 
      - Plain language
      - Broken links
- Tugboat
  - How's it going?
  - Formal training next week, Thursday 12pm ET for one hour. 
  - Feedback: 
    - working great, so far so good. Total time for everything was about 20 minutes, from rebuild to release. (Salisbury, 120 nodes)
    - As long as VAMC users in the field have the name in it, we're good. They only handle one URL anyway. 
    - Hasn't tested the broken link check for Lebanon and Wilkes-barre, but will be doing that, will report back Monday. 
  - CMS team is meeting with Tugboat vendor about aliases Feb 16
- Lebanon and Wilkes-barre launch next week
  - Stan will schedule events 
  - Week of February Coatesville, Altoona and Butler
  - Week after that: 5 VAMCs
- Facility health service editorial experience 
  - required fields (phone number labels)
    - 508 intent 
  - Table caption
  - Dave and Kev to connect on this problem space and prioritization
  - Communication to Ryan S on Facility Service Location Page hardening (email went out yesterday)
- Menus 
  - bugs, eg [Iowa City](https://prod.cms.va.gov/admin/structure/menu/manage/va-iowa-city-health-care?destination=/admin/structure/menu%3Fpage%3D1) (revealed by Transformer builds)
    - VAMC upgrade team is fixing these in their next sprint. Kevin will communicate back to transformer 
  - Casing of non-clickable menu items

## Friday Jan 29 10am ET 

- Demo environments Beta testing (Oksana)
  - 1 hour with Lisa, Stan Oksana to identify any gaps in interface. Tuesday 3pm ET. Oksana will send invite. 
- Dual state launches week of Feb 8
- Training
  - Stan will send Jane VISN 21 and 23 user list today.
- Prod user account management
  - VISN 4 users are all on prod. 
  - Jane is verifying with Stan is when it's appropriate to enable accounts
  - We'll look at ways of tightening the loop and empowering VAMC upgrade team to do this work directly in upcoming sprint(s). 
- Facility health services cutover 
  - See notes from [CMS/Facilities call on Wednesday](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/product-team-weekly-syncs/facilities-cms-weekly-sync.md#content-model-refactoring)
- Sunsetting content / archiving strategy
  - Dave set the limit of news stories / news releases to 3 months, for migration 
  - CMS team will add this to a "later in Q1" timeline. 

## Wednesday Jan 20 2:30pm ET

- Training
  - CMS orientation session 5 video will be available by end of day Jan. 22
  - Self-service invitation for VISN 6 re-emailed today, clarified that training activities require login to training environment, not production
    - Stan is letting folks know that invites are coming in, and to look in Junk/Spam box. 
    - Emails are coming from Jira helpdesk email
    - VISN 16 lists are coming today (January 20). 
  - Accounts for Brenda and Ron created on prod, sidetraining by VAMC upgrade team. They will also go through the standard training. 
- Recreating devshop environments in tugboat
  - No need to recreate Erie. All other ones with `healthcare` in them, plus `fayettevillearkansas`. 
- Erie follow ups, if any?
- Upcoming dual state launches
  - Lebanon, Wilkes-Barre week of Jan 25
  - Butler, Coatesville, Wilmington week following (1st week of feb)
  - 4 the week after that.
  - 1 per day after that. 
- Limit testing 
  - No updates yet, but in current CMS sprint. 
  - Stan Average of 4-500 nodes per VAMC. No content is currently archived. 

## Wednesday Jan 13 2:30pm ET

Agenda 

- Erie dual state launch:
  - Facilities team will push PR to add /erie-health-care/ to robots.txt file: [issue: 18498](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18498)
    - VAMC, CMS, Facilities teams to confirm time to set up Dual-State GO-Live teleconference meeting to launch site
    - Needed for first dual-state, assure no critical issues, and to resolve any obsticles.  
    - When is best time to Publish to Dual-state?
    - Stan to schedule a go-live meeting on Tuesday morning, 1/19/21. Will include Michelle Middaugh just in case any FE code changes are needed that day.
- Other dual-state launches in light of "Transformer" effort
  - Will revisit week to week. The CMS team will have some further testing of node limitations by next Wednesday.
- Prepare Lebanon-health-care and Wilkes-barre-health-care for Dual-state in next week
  - Stan to submit request of Facilities to update robots.txt for both
  - Can all of VISN-4 be added in advance? CMS: yes
  - Will need to make sure that the banner is set before dual-state launch
  - Will need to make sure that there is no email blast to Gov-Delivery
  - Lebanon and Wilkes-Bare dual-state launch timeline will be revisited after lessons learned from Erie have been documented and reviewed  
- Transition from DevShop to Tugboat updates (announcement here: https://dsva.slack.com/archives/CDHBKAL9W/p1609957217325700)
  - The CMS team will schedule and give training for relevant stakeholders from the VAMC Upgrade, Facilities, and Public Websites teams
  - Projecting early February (2/5/21)
  - VAMC-Upgrade team's preference is to consolidate facilitieis into single systems, possibly VISN-wide to make it easier to manage
- CMS orientation session 5 self-service library update
  - Self-service resources will be available by end of this week, 1/15
  - Recorded session will be available by Tuesday, 1/19

Action items:
- VAMC Upgrade:
  - Schedule Erie go-live meeting
  - Submit request to Facilities team to update robots.txt
  - Ensure banner is set before dual-state launch
  - Ensure no email blast goes out
- CMS:
  - Finalize session 5 resources


## Wednesday Jan 6 2:30pm ET

Agenda 

- Erie dual state launch:
  - Currently nothing needed from either CMS or VAMC Upgrade team
  - Will monitor and track towards 1/11 for target date, Lebanon and Wiles-Barre around 1/18
- CMS orientation feedback from Ryan
  - Decision from Dave Conlon to wait until transformers/tome sync is live in production and couple communication with him around cut over for content model hardening with facility service model
  - Projected around Febraury to re-engage for his feedback
- Live training for facility status updaters
  - To be discussed with Michell Middaugh and the Facilities team directly
- Transition from DevShop to Tugboat updates (announcement here: https://dsva.slack.com/archives/CDHBKAL9W/p1609957217325700)
  - The CMS team will schedule and give training for relevant stakeholders from the VAMC Upgrade, Facilities, and Public Websites teams on this in roughly 2-3 weeks
- CMS orientation session 5 content review, holding Tues., Jan. 12, 10-11:30 a.m. ET for live training
  - Invitation sent out on 1/5/21

Action item:
- CMS team to engage the VAMC Upgrade team whenever any questions or conerns from users about menus arise. This is to help move support over business processes to VHA/VAMC parties and allow the CMS team to focus on technical support.
  
## Wednesday Dec 30 2:30pm ET

Meeting cancelled. 

## Wednesday Dec 23 2:30pm ET

Kevin OOO; Clarence will facilitate.

Agenda

- Training
- User administration
- Migration
- VAMC Scaffolding
- Holiday schedules for this meeting
- User Support/System Outages
- Dual state and product launches


  
## Wednesday Dec 16 2:30pm ET

1. Training & User administration (Jane)
  * Requests in from Stan
  * New group today 
  * Session 3 and 4 for ondemand viewing by Dec 18
  * Dave: Do accounts expire automatically? No. 
2. Migration
  * Health services (non-COVID-vaccines)
    * Fab 5 all in--system and facility. 1695 system, 3726 facility plus 91 migrated earlier. 
  * COVID Vaccine content 
    * 127 (all?) VAMC system nodes are in on Prod, and Sections.  
      * Stan and Dave will QA 
    * Kaise is working on system and facility service migration based on data from Dave yesterday. 
    * Moving forward, a single migration will make updates to those together. 
    * Extra columns for facility and service descriptions, so that follow-up migrations can make bulk updates easily
3. VAMC Scaffolding (Sections, Menus, VAMC System nodes)
  * CMS team will be done by December 18. 
4. Holiday schedules for this meeting
  * Meeting Dec 23. Kevin will be out, CMS team will still facilitate / work on agenda. 
  * No meeting Dec 30. 
5. User Support/System Outages
  * Need to be proactive when an outage occurs, such as PIVs failing
  * PIV failures started last Friday, some users did not learn until Tuesday.
  * CMS team will develop a practice to communicate these issues. 
6. Dual state and product launches
  * Because of COVID, review of content is slowing down
    * Threshhold by which we move things to dual state may change. Eg we may not require full review by stakeholders. 
    * Dave meeting with JHL about this tomorrow. 
    * Erie to launch after 1st of year. 
    * New VA.gov Alert banners will not have COVID info, and will drive users to teamsite product
  * To get all VAMCs to dual state by end of Q3, we'll need a cadence of 10 per sprint by the end of Q1. 
  

### Other? 
 
## Wednesday Dec 9 2:30pm ET

### How we work

1. How we work (Kevin)
1. Training - 10 min (Jane)
   1. Report back: 9 trainees. 2 no shows. 
   1. Request Facility info change link and expected turnaround time - https://vaww.va.gov/WEBCOM/VAMC_Facility_Location_Updates.asp
     - This is a question for VHA Digital Media - they make the updates to VAST, how quickly is that processed?
     - They can also contact the VISN administrator, or escalate to VHA Digital Media. 
     - CMS backlog issue to put this in the CMS UI https://github.com/department-of-veterans-affairs/va.gov-cms/issues/3678 
   1. Should there be a character limit on system banner alerts?
     - This will be coming, but not ready to pull trigger on this. 
1. User administration (Jane) 
- This may be a hot topic for the Spring, governance, data integrity.
1. VHA meeting Dec 9 agenda (Kevin/Jane) - move offline
1. Dual state and product launches - 5 min (Stan)
1. Vaccine content for Facility API (Dave)
 - New taxonomy term coming into VHA health service: "COVID 19 Vaccines" 
 - JHL is adding it, probably to Specialty Care
 - Trying to create a system of record about what facilities are offering one or more of the vaccines. Content will be produced and maintained in Drupal source of truth, available through Lighthouse.
 - Multiple ways to approach this... 
 - What's the data? 
 - Can the current content model support this? Seems like yes. 
 - Push to Lighthouse - we have a similar pattern for facility pushes that we could use, but this would be services. 
 - Need to get the content in? 
 
 
Next steps: Kev and Swirt will meet at 4:30pm to talk through the data and migration problem. 
 
1. Migration (Steve)
1. VAMC Scaffolding (Kevin/Steve)





