
## July 28

* Pride CLP archive/redirect details
  * Short term / long term strategies
  * No burning need to take down
  * Possibilities laid out by Mikki (what's easiest, what's smart, what's a good user experience, what provides the most SEO value):
    * Don't take it down, update content to summarize event. Show VA's position on the topic, and prompt for the next year.  The vanity URL and CLP do not need to be retired, traffic can still hit the page. 
    * Take it down, use temporary redirects in order to resurrect next year
    * Take the page down, use the year/date in the canonical URLs going forward so we can fully retire it each year.  I'd prefer not to do that with the vanity URLs, however.
    * Future direction...we could use a different canonical URL structure for events (i.e. va.gov/events/mental-health-awareness-month) and identify a strategy specific to events versus general campaigns, because events are a bit different.
      * Suggestion to redirect under events
      * Jen Lee was a strong proponent to let them die
      * Possible seasonal CLPs
      * When Mikki returns, John and Brian to sync and orchestrate the change. Will recommend using a different canonical URL structure
* Homepage banner questions
  * PW would like to address in the next month if possible
  * Biggest risk = if someone publishes the alert and something beyond CMS control blocks content release, no current mechanism to notify people
  * John to explore with OCTO-DE on whether they want to support off-hours activity
  * GovDelivery messages doesn't go out if content doesn't go out. does that need to be revisited?
* CLP training requirements
  * All Users, Editorial workflow
  * Partner with an existing person or with John
  * CLP specific training being worked on
* Outreach Hub training requirements
  * All Users, Events training

[kevin out]

## July 21

* CLP governance
  * notes: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/governance-model/read-me.md
  * getting closer to self-service model
  * what is the business process to archive, redirect, un-archive, un-redirect, etc. 
  * [How to clone documentation](https://prod.cms.va.gov/help/campaign-landing-pages/clone-a-campaign-landing-page) 
* Homepage banner
  * John has completed a [product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page-banner/product-outline.md) based on experience from July 3
    * Short term: Need to make sure the existing process is shored up and not 
    * Long term: CMS
* Events
  * John will take on events product brief in a similar way to Homepage banner.
* Metatags
  * Current sprint: fix `og:image` for CLP and fix `<title>` 9 other content types.
  * Later: more fine-grained audit and metatag planning for all 30 contentt ypes.
* #18151 TTY phone numbers in right rail of Hub landing pages.
* CMS account admin policies for CLP and Outreach Hub
* FYSA: Kevin out much of next week including July 28 

## July 14

* CLP governance
  * Web governance board meeting tomorrow, John is presenting two options for governance. 
    * 1. Each VACO/HQ would "self-govern" CLPs for their businesses
    * 2. Web governance board would approve use, and spread awareness 
  * CLP request form would still be used for awareness.
  * Content admin will still need to clone CLPs after request is received. PW will take 
    * CMS team will document CLP cloning for Content Admins in Knowledge Base article https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5857
* Meta tags https://pr5828-wrb1q983pfwgqw6ixqwofsjszpwdosrp.ci.cms.va.gov/ 
  * Check if og:image has a value before including it in the page template? 
  * FE vs CMS spec 
  * Kelson: 
    * There's a content-build PR to affect all non-VAMC og:title
    * For VAMC: 
* #18151 TTY phone numbers in right rail of Hub landing pages.



## July 7

* Leadership page redirects
  * Possibly no action needed, confirming with Mikki 
* Homepage banner alert
  * Current yml approach
    * Look for lightweight ways to improve existing process
    * John to speak with Josh T from OPIA about what approach would work, what communication channel
    * Who else could respond, building in resiliency, not just Kelson, a pool of people
  * Look at new technical approaches (https://github.com/department-of-veterans-affairs/va.gov-team/issues/26991) 
    * Kelson's Hardcoded alert ID POC
      * Replaced banner json with alert with list of alerts with a custom liquid filter that uses alert 42.
    * New CMS approach to content model / governance https://github.com/department-of-veterans-affairs/va.gov-team/issues/26991#issuecomment-875210594 
    * React widget
      * Loading from github
      * Loading from drupal json file 
  * This becomes a top priority for Public Websites, over anything CLP 
* CLP governance updates? 

## June 30


CLP
* governance 
  * Tim: idea to put governance in the hands of Gary H and Josh T at OPIA (web governance board), which has comms teams from each admin
  * yesterday VHA said it wouldn't be ideal, it only meets once a month. 
  * John meeting with with Tim and Gary next week
  * 



* Updates 
  * Scenarios for CMS
* metatags 
  * Kelson will write liquid filter to transform title and og:title metatags to Initial case 
    * CMS can help with some QA, based on a diff from Kelson
  * CMS team
    * OG:image support for CLP 
    * remove extra pipe in CLP and other content, like Florence VA Clinic, R&S pages. Goes back at least 6 weeks. 
* CMS help center / knowledge base
  * Product landing pages in Knowledge base
  * Product intent / strategy documentation from Product teams, for polishing (and support from) CMS team 
  * Jane will share Natalie's draft pages from Fall 2020 to John. https://prod.cms.va.gov/node/15138
* viewport_width image derivative now available - may make lazyloading less of a priority. 

Redirects
* Leadership URLs -- coming in next week 


## June 23 

[John's & Steve are out]

* Possible upcoming redirects work for VAMC leadership pages [#5500 Runbook](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5500)
* CLP governance scenarios
  * John met with Tim Hudak and has some followups to powerpoint and governance doc in markdown
  * More to come next week
* Migrating tables for Benefits Hubs -> Resources and support transition (see [slack thread with Randi](https://dsva.slack.com/archives/CDHBKAL9W/p1623769214163900))
  * kev will Update thread with Randi, Danielle & Beth

## June 16, 2021

Events calendars / Outreach Hub
* Vision for Outreach Hub - short term (Q3), long term calendar year 2021
  * We're seeing new use cases that weren't covered with the current iteration (VA wide event calendar)
  * [VEO scaling up usage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/business-users.md)
  * VC events?
  * As an option, the existing content model can be cloned for other offices
  * Training needs
* Discussion
  * Dave: What is the vision/purpose of the Outreach Calendar so that it has a unified vision and scale appropriately. Is this the one calendar to rule them all? 
  * John: Create a product outline, and look at features like filtering. 
  * Dave: is there a problem with giving access to all these users? And what are the business processes around that? 
  * Next steps: John and CMS team to write out permissions/risk implications of adding more users to Outreach Hub. 
  * No action for onboarding or training for now. 

Images
* Lazy loading implementation on the FE - slack thread for context [**here**](https://dsva.slack.com/archives/C01DS1XDEQ0/p1623440189097200)
  * Kelson will be doing a proof of concept for the CLP header, that could be extended across other products 
* Support for JPEG2000 imgaes on FE and CMS - slack thread for context [**here**](https://dsva.slack.com/archives/CDHBKAL9W/p1623444072152200)
  * Kelson: This would make lazy loading irrelevant. Would require backend and FE changes. There are ways of doing this all backend. 
  * Steve: For each format, it doubles the number of files that need to be moved.If we add an image style, CMS has to generate that derivative, and pre-warm them. The build process has to grab all of them and move them. Who needs to be part of this conversation? 
* CLP banner
  * CMS: make a new deriviative for wider screens, `viewport_width` for ~2500px, tbd. 
  * John: anything that can be done in the next week for vaccine hesitancy image?
  * Kelson: we can reduce the overall dimensions. 
* CMS help text / guidance about recommended image weight (currently 32mb), specifically for CLP?
  * Original files should not be discouraged
  * Using original files on www.va.gov should be discouraged

Accessibility
* Ownership of removing dfn wrapper applied by template on table cells
  * Easy fix to make, removing `dfn` tag
  * But removing it will bring back the accessibility issue for the table
  * CMS would need to support definitions in the content model or in the input format
* VA is read as a screenreader as `vah` (or Virginia)? 
  * CMS to create issue to potentially solve this in input filters or graphql processing

CLP
* Stakeholder reviews/workshops for [the CLP Governance Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/product-service-rollout.md)
  * Jane and Kev to review and we'll discussion June 30.  



## June 8 

* snapshot update on the CLP 1.0 plan (have a draft of what we plan to present as a governance/user model for VACO DigComms leads-teams over the next few weeks — e.g. handing over the keys). (edited)


## June 1

* VAMC Pittsburgh redirects [PW #25044](https://github.com/department-of-veterans-affairs/va.gov-team/25044) / [CMS #5132](https://github.com/department-of-veterans-affairs/va.gov-cms/5132) / [Devops #9286](https://github.com/department-of-veterans-affairs/devops/pull/9286)
  * Kev content fixes will go out at 11am ET content release
  * Kelson and Jeremy will roll out redirects 11:30am 

CLP
* `og:image` for CLP and beyond (can we pick one other product/content type?)
  * CMS issue to start speccing `og:image` for VAMC facility and CLP, using 2:1 1024x512 
* image derivatives in story teasers on CLP
* survey going out to John Santos
* Brian and John will be outlining the future of the governance of CLP post-MVP... is a request form needed for that? 

Outreach hub
* John meeting with Jean and Tim next week


## May 26

* Outreach Hub editors 
 - Keep John informed.  Is Tim Hudak is the gatekeeper? John will contact Tim and include Rachel Kauff. Will bring up publications governance. 
 - We can't cut of access to Publications in that product right now, so onboarding / training can speak to that.  
 - Until we develop training materials [#5292](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5292) onboarding is more handholding.  
* CLP feedback from VEO 
  * Very favorable
  * No really new feedback, but mentioned a few items: media library (more stock images?), reordering segments, more rich text. 
* Next CLP
  * Next Tuesday 9am, John Santos / OPIA, working with Danielle.
  * Getting some guidance around imagery: license some imagery. 
* CLP Hero image
  * Brian and John will schedule a followup looking at design, responsiveness, cropping, etc

## May 19

CLP 
* 🎉 Launch! Any updates/insights?
* Pride & Vaccine campaigns
  * Vaccines not deploying this week, Danielle said definitely next week. 
  * Pride: plan to launch June 1. Danielle working with John Santos from OPIA. Plan is to link to Discharge tool but it may be too dated, and the campaign will be cancelled. Jane will proceed with training assuming it's going forward. 
* New URL pattern is implemented via [#2383](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2383)

React Widgets 
* [#2919 CMS epic](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2919) and [#2920 Audit](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2920)
* [#24849 Refactor CTA helpers](https://github.com/department-of-veterans-affairs/va.gov-team/issues/24849)

Alerts on homepage and beyond
* Kevin will create epic with a discovery issue candidate for Sprint 33 or 34. 

Resources & support




## May 12

CLP
* No collab reviews will be required.  
* The PW team will need to provide assistance for Cloning, Analytics/Dashboard (and UTM) and any vanity URL redirect requests.
* What CMS-realted feature enhancements will we tackle (if prioritized by PO)? [Working List here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/mvp/user-testing-1.md)
* How will use and on-boarding of CLP be managed? We have more directional context on this — so will need to firm up in the coming weeks. [Will draw from the Service-Roll Out Plan working draft here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/product-service-rollout.md)

## May 5

CLP 
* Audience_tags epic now complete. [#4898]([https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4898)
* [#5216 Set up URL generation](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5216) awaiting first URL subdirectory (eg `/initiatives` - candidate for next sprint.
* Current CLPS in motion
  * Trust CLP launch - on pause for now. 
  * Vaccine hesitancy update
  * Pride
* Mission Act demo
  * GA work is done
  * Still useful for Demo purposes as a live prototype
  * Unpublishing then we can use Preview from now for live prototype  

Resources and support
* Sections update
* Related: New process for requesting changes to Sections

Outreach Hub
* Clarify user admin policy (approval of new accounts)
  * Doug Webb requested accounts for 2 users to create content in Outreach Hub
    * Move this discussion to Slack to make a decision about these users.
  * Next steps: 
    * Create a list of all Outreach Hub **ACTION for CMS team**
    * Compare to how VAMC product and Vet Center handles this **John and Dave**
    * Follow-up in next meeting.

Audience vocabularies
* Jen Lee will govern the audience vocabularies, if any requests for changes come in.

## April 28


* Prep for "Veteran trust in VA" launch http://preview-prod.vfs.va.gov/preview?nodeId=18299
  * Tim would love Friday, John would Publish. Some missing pieces being worked on this week. Traffic won't be driven at first. Decision later today about timing. 
* Outcomes from Staging review? 
  * No blockers for Veteran trust campaign 
* Review new (optional) audience field widget at https://pr5143-ii6l0ozrcxmdfu2c3fkwla2hsgqtvh0i.ci.cms.va.gov/node/18299/edit 
  * Review of editorial experience.
  * Template should check for values here before printing it. Also, how does this affect the rest of this page segment layout?
  * when should we merge this? when this gets released to CMS Prod, we'll need to re-assign taxonomy terms to existing CLPs, including the Trust campaign.  
  * "Veterans", "Family Members and Friends", and "Caregivers" will probably need to become: "All Veterans", "Family members and caregivers". No "Friends."
  * Next steps: 
    * Next Wednesday regroup to clarify the release of CMS/FE code
    * async Kelson and Steve and Kevin can think about if feature flags are needed  
  * Governance 
    * John will speak with Beth about Audience vocabularies [non-beneficiaries](https://prod.cms.va.gov/admin/structure/taxonomy/manage/audience_non_beneficiaries/overview) and [beneficiares]( https://prod.cms.va.gov/admin/structure/taxonomy/manage/audience_beneficiaries/overview) 
    * Talk about next steps May 5
* CLP for Vaccine Hesitance
  * Danielle working on copy, expect to launch in May
  * Update on this next week.
  * Content will be managed by content team
* Helpdesk vs Handholding balance for beta users
  * When should CMS helpdesk kickoff start?
* Onboarding users if needed (VBA)

## Wednesday, April 14
CLP
* Audience tags
* Analytics
* Communication with 3 test groups / On-boarding of MVP production users/launches)
  * JHL happy to hear that it's ready to go, will get back
  * John Dimartino (VBA) will get back. Jessica, Tanekwa.
  * Tim Hudak @ VEO has something they would like to try with, possibly today. 
  * Lauren and Danielle talking to COVID joint task force about a possibility, may be the same as VHA (Vaccine hesitation). OCTO Content team might do the building for JTF.
* Helpdesk vs Handholding balance
  * Brian and John will strategize this
  * CMS help desk team will hold off on CLP kickoff. 
* [Request form](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4953)
  * John and Brian will provide some feedback on the issue.
* Feedback form
  * CMS team's UX will have a look at [issue #4791](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4791) 


## Wednesday, April 6

CLP
* Published node for /campaign-mission-act on prod, unpublished events, and prod/staging switch in vets-website 
* Sync on ongoing research synthesis 
  - [CMS synthesis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/research/campaign-landing-page/beta-test-synthesis.md)
  - [Product Observations/Prioritized Action Items](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/mvp/user-testing-1.md)

CLP audience decisions
- Update to leverage existing audience terms (CMS team to refine backlog items)


* [#4953 CLP MVP request form](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4953) 
  * Next steps: John to review  


* MVP Roll-out plan:
  - Meet with the four VACO stakeholder groups (VHA, VBA, VEO, OPIA) to:
  - Provide update on any prioritized changes we plan to make for MVP release and timeline (in April)
  - Determine if there are 1-2 CLPs that we can launch into production in late April timeframe
  - Walk through the Analytics/Dashboard set-up

Other
* [#4952 Action links](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4952) for VRRAP page and beyond. 
* Update on Outreach and Events hub enhancements (still in Dave's court?)


## Wednesday, March 31

[Outreach Hub feedback and feature requests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22241)

CLP 
 * CX survey [#4791](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4791) (_moved back_)

## Wednesday, March 24

CLP
 * VHA onboarding
   * Jessica Austin Ashley (sp?) will get a quick overview tomorrow (3/25) from John and set on the date/time for user testing, hopefully early next week
   * John will update us via Slack about timing. 
   * We can start synthesis after that, about authoring experience or new features (email signup, reordering panels). To harden audience field or not. 
   * Kev to create issues for next CMS sprint for 1) finish usability 2) synthesis 3) backlog of iterations. 
 * Request form
   * Kevin will stub a ticket with some questions to request access 
   * John will add form ACs, questions, intro text, thank you text.
   * 
 * Video
   * R&S vs CLP vs VAMC
   * Will be part of a later investigation of videos more generally.
   * Transcripts can be considered separately from this initiative, but this priority can be moved "upstream" to the moment videos get uploaded to Youtube (instead of letting Youtube speech recognition do its thing). Then CMS would inherit that. 
 * Action links 
 * CX survey next steps
   * Brian will have something to share next week. 
   * CMS webform builder may lend itself to that purpose.  


## Wednesday, March 17 

 * new [Action link](https://design.va.gov/components/action-links) design component to help distinguish buttons and links, particularly for users of assistive tech
   * No CMS team action for now
   * CLP product team will discuss taking this for a spin.   
 * 3 of 4 beta user tests so far (VHA still coming for Vaccine hesitation campaign). Some themes:
   * would be great to be able to sort/restack panels
     * Ryan: loves it.
     * one test user said, "as a user i'd have to keep scrolling and i'd have to keep scrolling".
     * Could anchors help?
   * What about leading with a video? 
     * Existing campaigns lead with a video up front. 
     * How to balance user and business goals?
   * Signup box in a panel, possibly as a sidebar (eg govdelivery email list)
   * Audiences: "Is this exclusionary?" and the desire to have 7 audiences (not just 3). And freeforming audience names. Should it be optional?
     * Ryan: would love to hear users feedback on this.
   * Should downloads have previews of what you're getting? Eg thumbnail image. 
   * Editorial experience issues
     * Inline video adding is clunky
     * "You can leave off pictures if you want to compress things" -- a workaround to display certain content higher. 
     * Ownership
     * Some labelling.
     * Illustrated guides are helpful. But a screenshot may be better. 
     * Full synthesis post-VHA user test(s). 


## Wednesday, March 10

### CLP

 * Backlog issues (via Staging review)
   * Accessibility
   * Design/UX issues [#20883](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20883)
     * Images should always be the same size/ratio
     * Videos require intro text
     * Is there any way to format the bottom-most section the same way we do on VA.gov?
     * in regards to the back to top component, is there a way to align the button the right-most "column" like this:
     * On mobile, in the What you can do section, can we make the spacing in the gray boxes equal above and below? the spacing we have on desktop is perf if we can replicate that.
     * Download (PDF) links should be aligned at bottom of box?
   * CMS AX or FE Ex
      * Creating Events issues (e.g., unable to specify a URL link for "Where" unless it is a VAMC location) -- see Mission Act, Facebook Live event 
 * Beta on-boarding and user testing.
   * Two sessions set for this week -- Tim Hudak/VEO today; Bronwynn Emmet/OPI on Thursday
   * Awaiting response on scheduling from Sandy Tadeo/VBA
   * Awaiting new hire for VHA
 * Start to "harden" our MVP and post-MVP Product & Service Roll-Out Plan
   * Draft is [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/product-service-rollout.md) 
 * CLP pre-MVP Production Build and Release for COVID Vaccine Awareness (or Hesitancy)
   * Wholly produced and managed by PW and Sitewide Content
   * Likely build and launch in March
   * Need to ensure Analytics -- including campaign tracking (UTM) -- are in place
   * Risks?
  

## Wednesday March 3

### CLP

 * Creating Events issues (e.g., unable to specify a URL link for "Where" unless it is a VAMC location)
   * 
 * Review product guide (John)
   * incorporated into training materials
   * will iterate after reviewing with Sandy's team
 * Beta user testing and onboarding.
   * VEO session this afternoon (agenda and facilitiation) (John)
     * Focused mainly on the powerpoint and then look at FE build.   
   * VBA session usability testing (to be scheduled) (CMS team)
     * John will schedule this today.   

If there's time 
 * URL design and governance - based on h1? request and review process?
   * Final word for MVP: We will create a hard-coded, rigid URL for each CLP while we learn.  From there, we take learnings and decide:
     - Whether to keep having humans create URLs, or
     - Whether there is a good, low-risk way to auto-generate URLs, or
     - Whether there is a combo approach. [Could Drupal suggest non-duplicate URL(s) that can then be modified? Or is there code that could plug into Drupal to help do this? This way, stop words like "and," "the," and "or" can be removed by a human or by the suggestion functionality; then the URL would be checked again to be sure the URL isn't a duplicate in Drupal. The human would make sure the URL isn't the same as a legacy URL.]
    * Next step: CMS team will start auto-generating URLs based on [name of campaign] (aka H1), which will replaces spaces with dashes, no special characters, all lower case. And generate for the 4 existing CLPs. 
    * Breadcrumbs: Home > [name of campaign]
 * Request form for new CLPs: what fields? 
   - Who (is requesting)? (Note: Must come from VACO Digital Comms lead)
   - What (is campaign)?
   - When (does it start/end)?
   - Goals of the Campaign?
   - How will it be communicated to Veterans? (Social Media, Email, etc.)
   - Do you plan to build your Campaign Landing Page all at once or in stages (add content/panels post-launch)?
   - What is lifespan? Maintain (keep updating), Re-use (seasonal), Archive (preserve as is) or Retire (remove)?
   - Do you heavily review/edit content before its published?
   - Who is the intended audience? 
   - Who are the editors?
   - **Next steps**: CMS team will prototype this and consider some other questions that may be relevant for CMS implementation.
* Customer satisfaction survey: gather key data factors from users in the build process and then again in the post launch phase.
   - CMS can share our past surveys--questions and data. 
  

## Wednesday February 24

CLP editorial experience CMS epic [#2274](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2274)
* Inline adding of promos and downloads in PR 
* Other items added to Sprint 27, need prioritization. (done, async on Slack)


"CLP service design"

* **Create CLP Product Guide PPT/PDF** for call center — this could be translated into a user guide for the CMS learning center  (with additional instructional add-in/editing/formatting) — I hope to get this completed this week.
  * Similar to the R&S product guide.  
* **Produce CLP Product Video for call center** — this could be posted in the CMS learning center if it fits.  BTW: Is this something your team creates?
  * Not required for call center.  
* **Training and help desk**  
  * No videos required for first cohort (VBA Sandy, VHA Jeff Grandon and JHL mid-march(?), VEO Tim Hudak)
  * Randi and John will walk through, be on call, and provide procedural PDF. 
  * CMS helpdesk still needs to be looped in, John and Randi can cc the VACMS support email. 
* **Accounts on prod** 

Phase 2 cohort
* Spin-up the “**Request for CLP page builder**” online form (optimally) .  
  * Talking to DEPO folks about whether we can use smartsheet — as seen here.
  * Kev to create an issue for the request form
* **Required fields** during content creation process.
* Three stakeholder groups. Will all be part of the VACO groups (VHA, VBA, NCA central office)
* Todo: determine what “**training/certification**” must be done by CLP users before we give them the keys.


Questions about these: 
- who owns what (CMS/PW)
- what’s needed for beta group vs the next cohort of users




## Wednesday February 17

 * CLP alpha user review (John and Randi's comments) - [See google doc](https://docs.google.com/document/d/1gUTTX0-8Cm-nBVQ5CI_k15bgqSXHpGNm/edit)
 * CLP beta user onboarding (any updates)

## Wednesday February 10

### CLP

- CLP Start to finish
  - John shared [this graphic](https://dsva.slack.com/archives/C52CL1PKQ/p1612966331368900?thread_ts=1612965801.368000&cid=C52CL1PKQ)t
  - The request form will contain context about the purpose (and constraints!) of a CLP. 
  - A how to video?
  - John's estimate is max 12 CLPs per year (but probably less, 8-10?)
  - Where do Training / guides fit into this? 
- Character count on Benefits detail page intro field


Covered Feb 9 asynchronously / on call about content model doc

- Any further feedback on Content model changes documentation? 
- Any more FE or Content support needed for CLP? 
  - Eg: Video bundle now has field_publication_date for CLP
- Past events (for Outreach hub)
  - CMS team will build a tool to manually archive past events on prod, but this may not make it into next sprint ([4212](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4212)).  After that, we'll go ahead and archive past outreach events, and let that team know ([#4213](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4213))
  - CMS team will initiate a spike [4214](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4214) into how best to manage past events across CMS in an automatic way, and we will need product-specific feedback. 

## Wednesday February 3

### How we work

New documentation: [Content model changes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/content-model-changes.md)

### Upcoming demo environment trainings

Are there any short-term needs?

### CLP

Requirements 
- [x] Form validation errors with closed fieldsets #4137 @kaise-lafrai  **DONE**
- [ ] Support "Publication date" for videos. **Next up**

Enhancements
- [ ] Evaluate possibility of improving hero image cropping help text, as an alternative to #3969 **needs issue**
- [ ] #3762 Link summary required fields

## Resources and support

- [x] Defect: Related information field should be required on Q&A nodes #4090  

### Video for R&S and CLP

- #3950 Address block styling in Limited rich text editor
 
### Benefits detail pages

### Forms

- [ ] Migration defect: Forms flagged as deleted not being archived by nightly forms migration #4083  @swirtSJW 


## Wednesday January 27

### Upcoming demo environment trainings

- who's in? 

### CLP

- IA URL
  - meeting later today, but:
  - will be part of "Managed experience" for users
  - form to request a CLP? will flow through Public Websites

### Video for R&S and CLP

- Inline video adding is delayed until Drupal 9, unless we build it custom for Drupal 8. expected in April 2020
- Editors for CLP and R&S will need to add media to media library, first, then link it to Media list and CLP content types via those forms
- Not required for CLP MVP
 
### Benefits detail pages

- CMS technical debt: Intro text refactor #939

## Wednesday January 20 10:30am ET

### Campaign landing page MVP

- Review CMS backlog for current sprint #1475
- Help text for "Add a link to an external blog or other list of stories" field clarification
- FE support
  - ongoing asynchronous is working
  - two main concerns: 1) designs are very custom, not much design system, lots of custom CSS. 2) Accessibility audit ongoing. 
- Test users update from John
  - VBA and VHA, meetings ongoing with Randi and John
  - nothing ready in Feburary (use Teamsite for now)
  - After Kelson finishes FE and CMS team finishes with backend, Randi and John will rebuild test. 
  - Test users will prototype alphas in second half of February, hopefully. 
  - We'll figure out how the keys are given, and the "managed experience".

### Resources & support
- Any updates?

### Benefits detail pages

- CMS technical debt: Intro text refactor #939

### How we work

- content model refactoring documentation
- `if prod` vs feature flags
  - next steps: Swirt will connect with Ethan about past use and bring to another meeting or the above documentation. 

## Wednesday January 13 10am ET

### Campaign landing page MVP

- Question for Ryan T: Should an image be required for the Hero panel? If not, what color/gradient choice should be implemented?
- Defects identified will be resolved in prod by today
- Next steps

### Resources & support

- 

### Benefits detail pages

- 

## Wednesday January 6 10am ET

### Campaign landing page MVP

- [Review sprint 23 backlog](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?epics=154174777_2275,154174777_2274,154174777_2273,154174777_1475&filterLogic=any&repos=154174777)
  - 3921 Link teaser should allow 3 (3 pts)
  - 3922 Events entity browser missing some events (per John, this has been resolved)
  - 3924 Max 2 related benefits (needs refining)
  - 3926 Broken link checker false positive (8 pts)

- Questions from Public Website Team: 
  - What FE actions (if any) are needed to build accordions FAQ’s?: determined to be handled by PW team

  - Is layout/view already mobile capable or will a mobile version needed to be considered during FE build?: determined to be handled by PW team

  - What are the 508 & a11y considerations? (Previous discussions/findings?): determined to be handled by PW team

  - Have we consider CTA tracking and analytics per campaign i.e. how do we make this turnkey for analytics tracking requests/reviews.: determined to be handled by PW team and PO

  - What is the current planned "governance" considerations? What should be considered/known as we build FE elements?: determined to be handled by PW team and PO

### Resources & support

- What's left?: all major functionality has been built with the exception of videos, which will be revisited after the February Drupal update

### Benefits detail pages

- Tech debt: swapping out `field_intro_text` with `field_intro_text_limited_html`
  - Background: the old intro text field allows html that it shouldn't. Tech debt from the original Benefits Hub build. CMS team did half the work to fix this in Q2 2020. Would like to finish this out. 
    - Content with invalid html (tocs and buttons) was moved December 30 to appropriate places in the content. #3903 (basically done)
    - next steps: FE template should use the new field. CMS team can handle the liquid template, but not the transformer. #1166 (quick template work, but will require transformer adjustment).
    - Then CMS team can remove the old field from CMS, and the script that copies each edit over to new field. (#1421)
- CMS team to communicate through PW intake process. 

## Wednesday Dec 23 10am ET

### Campaign landing page MVP

- Review notes from John and Randi from content entry

### Resources & support

### Other

## Wednesday Dec 16 10am ET
 
 
### Resources & support 1.1

CMS work for MVP 1.1 will be done this sprint

 * Curating taxonomy terms to R&S homepage (CMS work done... ready for FE)
 * Taxonomy term listing bugs (done, pending some confirmation)
 * Add non-beneficiaries tags (in PR)
 
One tech debt issue slated for next sprint. 


### Other
 * Holiday schedules for this meeting 


### Campaign landing page MVP

 * High level update: 
    * MVP content model 99% complete (pending Audience tag), some editorial experience and contextual content strategy work in progress.
    * Sample test content is up at https://prod.cms.va.gov/campaign/test 
 * Clarify specs for 
   * "Why this matters panel": 
     * Audience field: should it allow both beneficiaries and non-beneficiary audiences? #3774
     * Social media links hardcoded or optional?  (needs CMS issue if it's optional)
   * Event teaser design & content model
 * CMS Team Sprint 21 update and Sprint 22 priorities
    * Content model documentation for FE devs not complete, may not be finished this sprint. What level of fidelity do we want?  
      * Decision: for now, we have enough fidelity, and will add more during a "FE support" phase. 
 

### Other? 
 
## Wednesday Dec 9 10am ET

### Other? 

- COVID Vaccines

### How we work

- Process for managing this doc (Kevin)
- Review intake process for FE and product issues reported via CMS helpdesk. 

### Resources & support

- Beneficiary and non-beneficiary tags
  - Non-beneficiary tags is in PR, should be out by rest of the week
  - Beneficiary tags 
- Homepage FE updates
  - new issue for CMS: Add a curation boolean to both Audience and Non-beneficiary 

  
### Campaign landing page MVP

- CMS Sprint 21 scope & progress
  - [Content model documentation for FE devs](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1607363793772/b7f9e809d68ace9c8d75ab649a758ed7653c8461) (Kevin) 
  - Content entry & editorial experience design... should they go together or not?
    - followup at 12:30 with John
- Getting content model to 100% -- progress report. (Kevin)
- Backlog review for Sprint 22 and beyond

