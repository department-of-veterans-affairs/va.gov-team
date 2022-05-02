

## July 28

* When to contact Lighthouse vs CMS support
  * Facility info is incorrect (not when requesting a modification - ie: additional phone number fields, etc)
  * How to make more clear in the UI
  * During office hours, Jessica mentioned a specific POC to direct requests but LH has deflected.
  * Possibly add link to KB article in the CMS UI https://prod.cms.va.gov/node/23533
* Add address line 2 for CAPs (Suite #, etc)
  * Dave and Kev may already be in sync on this
  * Will be FE work to pull in
  * CMS issue [#5980](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5980)
* Remove a Vet Center service is only available to content admin or above
  * Expectation is that users have the remove ability
  * CMS team to research what's going on
  * May need to prevent them from duplicating in a different way
  * Can wait for now because we're catching before publishing currently
  * See Slack https://dsva.slack.com/archives/C02730UEZPS/p1627066941051900, editor was able to add duplicate service accordion for military sexual trauma care but unable to remove duplicate, editor didn't have publisher access so couldn't archive it and didn't have a Remove button, so Michelle had to remove the accordion
* Automate "Nearby Vet Center" list
  * Section where they declare which ones they want included where users are getting confused
  * Can we default to everything within an x radius to be included?
  * VCs have lat/long data so technically possible
  * What about someone elses CAP? on the fringe between 2 VCs
    * A: CAPs don't currently have lat/long data so not possible until available; can add once available; address for the CAP isn't always its physical location
* VAMC: Online scheduling toggle switch should be set to "unknown" or suppress
  * PAO has control over scheduling availability is disconnected from actual system
  * Request from Dave to set to "unknown" or suppress so that it doesn't create misperceptions for Veterans; until we land on the source of truth for this data
* Meta tag question: description
  * Snippet that google creates when searching for VCs because there's no description tag
  * Facilities reccommending description meta tag for main page
  * Would want patterned text
  * Facilities team has a request currently in for Content Team, once fulfilled the CMS team can prioritize with Dave

## July 21

Mobile VHA
- [CMS epic-Distinguish mobile VAMC clinics from non-mobile clinics #4743](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4743)
- [Facilities epic - Mobile VHA locations #21781](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21781)

Vet Center Location Lists 
>  District 5 is missing Locations List nodes. there are 70 Vet Centers but only 3 Locations List nodes (the three that were in MVP). We need to create 67, one for each Vet Center.  It wouldn’t take too long to do this manually, maybe 2 hours. But it should be done programatically, since we have to do this for another ~223 in Q4 anyway, which we may as well do now. I believe i did this manually for the first 10 in MVP. We may need to let District 5 editors that they are blocked from adding additional mobile vet centers and nearby vet centers and outstations for now.
>  CMS issue [#5917](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5917)


Possible
* Top task hardening

## July 14

Vet Centers
* MVP launch! 2 today. Waiting on some content for the remaining 8. Reno, Escanaba and one other next. Great Falls, Rochester, and Orlando. 
* Editorial experience changes by tomorrow for Satellite
* Some meta tags missing from Drupal, which are in the progress 
* District 5 timeline
  * Kickoff July 14/15
  * Email going out July 16th with review from 
  * Open office hours Tuesdays 3pm-4pm ET from July 20 to Aug 17. 
  * Deadline to complete training and load content to CMS August 20. 
  * Review/feedback ongoing. 
* Does va.gov GA opt-out affect CMS tracking
  * [Platform support request](https://dsva.slack.com/archives/CBU0KDSB1/p1626288553111900)   

VAMC
* Photos on VAMC Stories appear grainy https://github.com/department-of-veterans-affairs/va.gov-team/issues/27280
* [Additional Info component on VAMC detail pages](https://dsva.slack.com/archives/C01H29ERVJ7/p1626207343227700).
* Leadership feature flag and other feature flags https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5500
  * **CMS team issue:** evaluate existing feature flags to see if they can be deleted. 


## July 7

Leadership URLs
 * Facilities team to remove need for Feature flag later

VAMC sidebar 
 * MPS reviewing. 

Engineering
* Review of Centralized content API and FE changes
  * Some Centralized content for Vet Centers disappeared due to changes upstream.
  * Changes to make centralized content work more like other GraphQL output had broader impacts than expected. 
    * snake case vs not snake 
    * single object vs array of objects 
  * in the future
    * err on the side of over-communication
    * collaborate across teams on content model documentation
    * collaborate across teams on testing within tugboat (eg Dependabot-based PR environments for changes to EFF module)
      * may require some additional clarification of what branch of `content-build` main is in use by a tugboat environment
* Validation of links in Drupal  
  * CMS issue to make CTA link and label fields dependent on each other https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5439 

Business
* Request for "District level user" role
  - initiated by District 5 (Vet Centers), expectation is that this will be true for all Districts.
  - User story: _As a District level user, I can view/edit/publish content for Vet Centers in my district so that I can assist my counterparts or cover absences._

Vet Center overall workflow about review
 * Current state: Folks in the field open Jira issue, Jane pings Michelle/Dave. 
 * Future: Discuss July 7
 * Does this scale to 140? Could be 7-15 
 * Alternatives: 
   * Contact Michelle directly? 
   * Dave and Michelle could be in Jira, possibly as approvers to a workflow. (new form? could be confusing) 
   * Main Vet Center could be set to "In review" state, and ? (Could conflict with internal use by Vet Centers)
 * Decision: With kickoff scheduled next Thursday 15/Friday 16, let's potentially iterate on this after District 5 and continue with status quo for now.

**Done async**
* Spotlight character limits (async)
  * how will existing content be impacted?  

* Editorial experience for service content - making the national decription visible (async)



## June 30

### FE related

Review help desk insights and VAMC / Vet Center known issues list.
- Prioritized in Facilities team sprint beginning 6/30:
  - [Vet Center phone numbers in service accordions #26688](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26688)
  - [National Vet Center content is missing #26674](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26674)
  - [Vet Center addresses do not include suite numbers on new Vet Center pages #26544](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26544)
  - [Include specified "Nearby Mobile Vet Centers" in Satellite Locations list #26689](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26689)
- Backlog
  - [Vet Center Spotlight CTA #26676](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26676)

New issues based on Content review
- [Satellite location visibility for Vet Center editors #17725](https://github.com/department-of-veterans-affairs/vets-website/issues/17725)
- [Operating status: improvements to editorial experience #17727](https://github.com/department-of-veterans-affairs/vets-website/issues/17727)
- 

Leadership URL feature flag QA and rollout next week.
 * Facilities to QA again with feature flag
 * CMS will hopefully run the runbook from #5500 mid-week of July 5

Vet Center 
* "Nearby Mobile Vet Centers 
   - Facilities engineers need entity ID to add to Satellite Locations list [#26689](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26689)
     - Can get this entity ID from field_nearby_mobile_vet_center (query is there, but not used by the template).
   - CMS editorial experience to better explain satellite 
     - **CMS issue** to transfer [Satellite location visibility for Vet Center editors #17725](https://github.com/department-of-veterans-affairs/vets-website/issues/17725) to CMS backlog
     - **CMS issue** to update label for Nearby Vet Center anbd other guidance potentially. 

* Guidance and character counts for Featured content 
  * **CMS issue** to add character count limit - 240 characters but don't count HTML. 

CMS account upgrades for MVP and District 5 Vet Center users with published content, by Michelle/Dave
 * Go to /admin/people, search by username or Section
 * Edit roles, remove Content Editor and add Content Publisher for Outreach Specialists
 * Update Directors role when they self-report completion of training. 
 * Jane will provide an idea of how long Vet Center training takes. 62 minutes (generous estimate), VA network required, login not required to view, login required to try activities in training

Overall workflow about review
 * Current state: Folks in the field open Jira issue, help desk pings Michelle/Dave in #facilities-support channel
 * Future: Discuss July 6





## June 23 

* Review #5500 runbook for Leadership page URL changes 
* MVP launches
  * Vet Center directors have not been brought along in the process, and that's where we're stuck for 10 MVP users
  * Colorado Springs and Springfield MA ready to go. 
* District 5 pipeline for launches ... should we establish a regular cadence for review/launch/user account upgrades
  * Week of July 12 kickoff meetings, where we District 5 users will be provided with
    * content decks 
    * help documentation (/help)
    * help desk links
    * Ongoing office hours
    * Video trainings 
  * Editors have 4 weeks to do training and content   
  * Editors can let Vet Center CO know instead of CMS Help desk 
    * Then Vet Center will review
  * When Vet Center CO green lights content, they will trigger ability / permission for Facilities team to bulk publish content (Tuesdays)
  * Then Facilities team will trigger CMS account upgrades for users whose content has been bulk published. 
* Next district kickoff, district TBD, week of August 2.  

## June 16


Vet Center
* No response from Jessica yet on Vet Center District 5 users
  * Arrived this morning, forwarded to Jane. (Jane bulk imported on June 16.)
* Connecting 17 Outstations to their Section and Vet Center [#5564](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5564). Who can fix this, and with what data?
  * **Action:** Michelle will take list at https://prod.cms.va.gov/admin/content?title=&type=vet_center_outstation&moderation_state=All&owner=All and update content and validate 
  * Change "Main Vet Center" and "Section" field to the appropriate Vet Center
  * **Action:** Michelle will create a draft documentation for this process 
* [#4582 Grouping Vet Centers Sections into Districts](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4582)
  * Dave emailed updated spreadsheet, Michelle will forward, Kevin will add to 4582 and we'll see about getting this into Sprint 35. 
* Consider text limit for Spotlight content?
  * **Action:** Facilities team will write some content intent for Featured content, and a recommended text length. 
  * **Action:** CMS issue for Sprint 36 or 37 to update interface
* Removing intro text on Locations page [#25026](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25026) -> following our change, CMS can remove the field and make updates to training as needed
  * **Action:** CMS issue needed to remove field in Sprint 36 or 37. 

Other
* Mikki's one off URLs
  * **Action:** Dave/Michelle will take this to VAMC upgrade team. 
* CMS Helpdesk relationship to Facilities' product backlogs (Vet Center and VAMC)
  * Dave: Start with known issues -- from customers' questions to Josh to the appropriate team. 
  * **Action:** Josh/Jane/Clarence/Kev to stub a one page document of known issues (not "critical defects"), smoke but not heavy fire. 
  * Consider adding to appropriate documentation, with any known workarounds, and any request fulfillment if relevant.
  * Example: 10 locations limit on VAMC Locations page. 
* Butler, Wilmington, Altoona, Wilkes-Barre going live June 30
  * **Action:** CMS PR to stop Teamsite operating status migrations

## June 9

### Vet Centers

MVP
* Release cycle
  * FE issues being resolved that had been identified on staging
  * Tugboat
    * `vetcenter-rcsco` tugboat environment only for stakeholder launch review
    * Michelle and Dave will refresh, publish content from the [Bulk publishing page](https://prod.cms.va.gov/admin/content/bulk?title=&type=All&moderation_state=All&taxonomy_entity_index_tid_depth=391), and send for stakeholder review 
  * RCSCO is doing eyes on review and giving final blessing.
    * Jessica will give go-ahead to facilities team, then Dave/Michelle will bulk publish, who will then trigger the user update. T
  * Upgrading Vet Center users to publisher
    * These will trickle in, then will spike, as content gets reviewed. 
    * Not a fire drill. 
  * District 5 and beyond won't be provided with as much content. 
    *  What is the right way to manage the pipeline of onboarding? 
    *  Should there be a specific day for launching, like every Tuesday? What is the pipeline? 
    *  On agenda for June 23
  * How to handle staff turnover?
    * What policies and interim service procedures can tide us over until we have a mature onboarding service
* Review helpdesk issues that have been raised
  * Adding services has been the biggest pain point (select lists for Sections) 
    * Having to look, at all (CMS issue #4936 would address this)
      * Sprint 35 or 36 
    * Not finding their Vet Center in the MVP list (CMS #4582 would help)
      * 5 districts, each with an average of 70 Vet Centers. No cross-maintaining of Vet Center content. District level will bless who has access at each Vet Center.
      * We can go ahead and group Vet Centers by District (and decide if we want to do this programmatically or by hand). 
      * TBD 
* [Vet Center feature requests epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25811) and new "feature request/Vet Center " label
* Redirects for MVP Vet Centers - confirming urls
  * Public websites will add redirects for Facility Locator 
* Post-mortem on Monday June 14 2:30pm ET
  * Retro board 

District 5 batch
* Jane has new Vet Center user template ready to send to Jessica
  * Jane will send to Jessica and cc Michelle and Dave

### VAMC

* Type of Care epic
  * Michelle final QA then give go ahead to CMS to delete parents on prod. https://web-luuw9cmafr91levkoejjdmcdcxn2dedu.demo.cms.va.gov/pittsburgh-health-care/health-services/ 

## June 2

**Vet Center** 
* Vet Center launches
  * Michelle and Dave working on MVP runbook for first 10
  * Criteria: content review - alignment with content intent, no wordsmithing. 
  * Check-in on Monday, temperature check
  * Can we look at activity by Vet Center editors? 
    * Jane can look at content changes and user activity
    * Google analytics by role?
  * 6 of 10 users have been logged in since week sometime
  * Sprint 35: 140 user accounts for District 5 (2 per Vet Center)
    * Sprint 34: Jane can generate a XLS template to send to Jessica end of week of June 7
    * Name, Email, Vet Center association
    * District 5 will have 4 weeks to complete their content


**VAMC**

IA 
* Menu lockdown update

Other
* Validation of VAMC type of care implementation
  * CMS team can go ahead and [remove the parent items](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4768) (content change), with QA on Tugboat 
* Staff profiles https://github.com/department-of-veterans-affairs/va.gov-team/issues/17116 https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5450 


Staff profile content type
* What help text is needed if any, right now
* Image Resolution - different needs for different contexts
* A bio should be the trigger for stand-alone page
* Vet Center may want to use only first name
* CMS can add a boolean for bio field, and two bio fields can be made dependent on that. FE can build based on boolean field being true. 



**Product triage**
  * **As a** Tier 1/2/3 help desk responder **i want** a report of known issues (feature requests and defects) across the va.gov-cms and va.gov-repo, for [the VAMC product] [the Vet Center product][some other product] **so that** i can track resolution, and add additional information, and so that i don’t have to treat Slack as the repository of product information. 
  * FE Defects, eg
    * Stories where FE requires image but CMS does not 
    * VAMC Locations list pages missing locations
    * Archived facility health services showing on prod
  * Feature requests, eg
    * i want to add an event to a Vet Center
  *  


## Wednesday May 26

**Vet Center**
1. Vet Center Director training

* Dave had conversation with Jessica. "Just watching videos" didn't resonate for the first MVPs.  
* Michelle to work with Jane about a couple possible dates for live presentation, trying to get the most people, and the rest can watch videos. 
* Ideally 2-3 weeks out.

2. District 5 next: 70 Vet Centers, PT 

* Jessica getting contact info
* Kickoff meeting first, then
* Training in about a month (late June). Not live training. CMS team will adjust training videos between now and then. 
* Some kind of support structure (eg office hours) 

3. MVP Vet Center

* Retro on the entire process with 10 MVP users June 14th.
* Email went out to Outreach Specialists say "your account is active on Prod but you don't have publisher access yet, we'll review and bulk publish"
* Michelle to follow up with a timebox for them. 

4. Switch to fetch Vet Center data from Lighthouse data when unpublished in the CMS (Issue to clean up code after full roll-put - [#25329](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25328)


**VAMC**
1. Type of Care sorting: How to sort now that we are not using taxonomy weights?

* Option 1: hardcoding, like it was handled in Vet Center 
* Option 2: CMS adds a weight attribute to the Type of Care attributes, and made available in a similar way that was used for entity field fetch ("subfield").
* What is the value of having weight in the CMS when we have multiple weights for different products? 
  * If we add or remove a type of care, the FE wouldn't be able to catch it. 
* Facilities team will look at an approach to this and prioritization of CMS weight value will be determined later.  
* Change in logic for Vet Centers (post-MVP) [#25330](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25330)

2. Type of Care testing

* Tugboat targetting a content-build branch to test
* Use https://prod.cms.va.gov/vha-health-services as a data audit

3. Inventory of VAMC components- ownership conversation with Public websites
  

## Wednesday May 19

Vet Center
* Vet Center training and adding users
  * 8 out of 10 outreach specialists confirmed, 2:30pm-4pm ET Monday, will be using Training environment (tugboat) so unaffected by prod deploy at 3:30pm ET. Joe and Troy will not attend.
  * Vet Center Directors? Facilities team will take this as an action item. But 8 is already a good number for training. We may want to _consider_ a 2nd training for directors. Would be a later sprint.
  * Next 60 Vet Centers: start with a kickoff with a content deck, headsup about training, will include directors. 
  * 10 editors are publishers on prod as editor, will be unblocked after training, and permissions elevated only after content is bulk published by Facilities team. 
* Dry run for Vet Center launch - not neeeded, it's been done repeatedly with Escanaba on Tugboat
* Tugboat user stories for Facilities for Vet Center. 
  * Tugboat support requests via #cms-support 

VAMC
* React widget audit report (#2920 CMS)
  * VAMC upgrade team has report on broken widgets for existing VAMC sites
  * Facilities meeting with Public Weblic websites about ownership
  * CMS issue to remove React widget from VAMC Detail page content type post-hardening of Medical Records, Pharmacy, and Make an appointment. 
  * CMS issue: Rename "Detail page" to "VAMC Detail Page". 
  * CMS issue: Improve User guide and training for VAMC Detail pages. 
  * CMS issue: Improve VAMC Detail Page (remove certain paragraph types). 
* Removing blobby health service content [#2509](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2509) dependent on removal of query in `content-build` repo. 
  -  Facilities team: remove fallback logic [#24899](https://github.com/department-of-veterans-affairs/va.gov-team/issues/#24899)
  -  Discuss Cheyenne issue with VAMC upgrade
  -  CMS issue to add a service location retroactively #5387, and moving forward in migrations #5273
* Orphan staff profiles 
  - profiles appear on the sitemap and in Google alerts even if not linked (eg from Leadership)
  - Staff profile node for Behavioral health call center generating page [#17116](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17116)
  - CMS epic: Tools to support stand-alone vs not-standalone stafff profiles **[#5450](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5450)**
    - Discovery issue to work with Facilities to determine implications for various parts of product (mini-profiles, leadership page, etc).
* 10 facility limit
  * eg Minneapolis in dual state
  * Atlanta and Florida have 20+
* Menu governance #2427 runbook



## Wednesday May 12

* Meta tags for VAMC 
  - Design guide update
  - Implementing change
    - pros/cons for hard coding into FE or overriding in CMS
  - **Actions: Kev to create issues for CMS removal of fields, remapping of meta_tags, and CMS announcement. [#5339](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5339)**
  - Facilities team: Add filter to VAMC Meta tags [#24796](https://github.com/department-of-veterans-affairs/va.gov-team/issues/24796)
* Sort order for services  
  * **Post MVP editorial experience change to reflect product's sort and groupings for Vet Center services (currently enforced on the FE), and remove the sort handles**
* (Note: we noticed the field name for the local service description for Vet Centers is incorrect on the mural - can you update it, please?) DONE
* Centralized content and FAQs. 
  *  Now functional va-accordion fork will proceed for  Vet Center. Michelle will schedule a followup about component ownership and tech debt around "FAQ section" component.
  *  Add documentation to https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/content-model-centralized-content.md for graphqlification / filters and "rules of engagement" for iterating on existing component templates, pointing to an example from `va-accordion`. 
* Vet Center runbook


## Wednesday, May 5

Report-back from nightwatch meeting
 * Builds will continue to go out May 12, despite any lingering a11y issues
 * Next steps: TBD, on Testing Tools team.
 * A couple of outstanding Facilities issues... aria tag.
 * CMS working on some duplication issues
 * There are also _duplicate_ issue 

VAMC 
 * Policies Page rollout (quick report on [#5053](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5053) 

Vet Center 
  * centralized content (FAQs and Nat'l featured content)
  * training for national editors May 13 1pm ET
  * training for local editors week of May 20 or 27? Factors:
    * FE readiness? Centralized content and Staging review.
    * Enough turnaround time from dry run
    * Giving notice
    * Decision: coming this Monday May 10. Make local editor training a stretch goal for Sprint 32, if not beginning of Sprint 33. 
  * Vet Center Launch
    * Given that VCs require bulk publishing (facilities plus Locations list plus Services), they should not be launched by the editors. VC editors should not receive Publisher role until after their VC is launched. 
    * Bulk publishing will be done by Dave or Michelle TBD for MVP. 
    * Should "In review" be used in the workflow? TBD. 
  * Nearby Vet Centers is a problem for MVP
    * 290 Vet Centers, ~20 Outstations, and ~70 MVCs are all unpublished, and if they are chosen as "Nearby" the FE won't build them (assuming it's filtering out unpublished content)
    * Unpublished Vet Centers, Outstations, and MVCs currently show on the Locations page.
    * Facilities FE issue post-MVP to change this to check if published, then show from Drupal, if not, get data from Lighthouse. 
    * CMS issue to icebox to set up a content moderation workflow specific to products that still in development, to prevent accidental publishing. 
  * Breadcrumbs: when to use array vs derive from url?
    * Breadcrumb data needs to come from CMS.
      * In many cases, CMS produces data with its menu system, and produces an array including Menu items labels and links.
      * But some products (and some content types) do not have menu items in the content layer: Vet Center, certain VAMC content types (Stories, Events, News releases, Staff profiles).
      * CMS epic is necessary for solving for a variety of scenarios 
      * There will be follow-up FE once that's in place. 
  * When "Type of care" is empty for a health service added to a Vet Center, display under "Other services."



## Wednesday, April 28

- Defects caused by missing expected data
  - Images, such as [Placeholder for missing optional images](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21800)
  - Content, such as 
    - [Empty link and missing header in Sheridan VAMC](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21404) 
      - New issue for to consider default headers [#23974](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23974)
    - Unpublished facility health services on prod [#23470, in progress](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23470)
    - Draft location #23481.
  - **Action:** Followup cross-team principle about where and when to be defensive about missing data (eg links, phone numbers, images)
    - Make the page fail, not the broken link?
    - Filter via GraphQL?
- Broken links -> [Discovery issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23791) and [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21780)
  - Nightwatch will start failing build starting May 11 for issues like this
  - CMS help desk may be able to resolve some of these issues in a way thatt reduces this in the future, by teaching editors as we go
  - CMS and other teams could identify ways of reducing issues in CKeditor or elsewhere
  - We can add items to Training backlog 
  - Monthly review of new issues that have arisen? 
- Policies - status on releasing hardened content 
- Vet Center FAQs and Vet Center Featured Content - Centralized content
  - [#5159](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5159) Short term solution for Vet Centers, will require FE followup
  - [#5160](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5160) Longer term solution to allow for more complex Centralized content.

- Default for Type of care attribute
  - Type of care is optional, unsure what the default should be if empty... "Other services"?
  - Michelle creating issue to track this -> [#23975](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23975) 

## Wednesday April 21

- [#5053 Policies cutover runbook](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5053)



## Wednesday April 14

Centralized content
* ~Policies -> `target types`([Slack convo](https://dsva.slack.com/archives/C0FQSS30V/p1618337427209400))~
  * As new paragraph types are added to a fetch field, our CI will catch this and CMS team will work with product team (pointing to Michael's work as an example) 

Tugboat and previewing content
* CORS issue: Fonts working now, but API calls to Facility.
  * Tugboat URLs are dynamically generated and CORS can't whitelist all of them
  * Michelle and Kevin will track down Ops issue, Dave could bump this.
* Liquid template filter converting some links to target=_blank
  * may be failing based on domain
  * Michelle and Michael can reproduce and document this
  * Dave: not a show-stopper

Vet Centers
* ~Mobile Vet Centers~ 
* Breadcrumbs for Vet Center and VAMC
  * Richmond Vet Center is showing as Richmond vet-center
  * similar problems on VAMC product
  * Kev to create issue to investigate Drupal as source of truth for breadcrumbs that do not have menu items, and send to Michelle and Mikki
    * Examples: Events, News releases, all Vet Center content types, Stories, Staff profiles, other content types that don't typically have menu items.
  * Relevant Facilities issue [#20922](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20922)

Policies
* ~Tugboat and features flag for Policies page~

VAMC
* Documentation for VAMC menu / IA governance
* ~Default images for facilities~
* Unpublished facility health services are visible on va.gov if the system health service is published.
  * CMS has issue for enforcing unique content
  * Facilities team to filter out unpublished facility health service [#23256](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23256)
  * VAMC upgrade team to stop the bleeding on dupe content

Phone number component in Drupal
* Editors are adding "option 8" in the extension field
* Michelle to create [parent epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23260) and Kevin to create a CMS issue that maps to it 

Past events page build failures
* Current hypothesis (not confirmed yet): Archiving all past events
* Next steps: 
  * Kev and Steve to reproduce in Tugboat 
    * using https://www.va.gov/erie-health-care/events/ for the past events issue
    * and with a new/vanilla VAMC events page
  * Clarify how this works with VAMC upgrade team.  
* AC: 
  * if no future events exist, events page says "no events"
  * if no past events exist, past events page builds saying "no past events"
  * if past events exist and then get archived, events page says "no events"
* Relevant Facilities issue [#23258](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23258)

VBA facilities
  * Lighthouse list (and therefore Drupal) is inaccurate
  * Data cull just happened, field reported many inaccuracies
  * Dave spoke with Alexis from Field operations about data, this will likely lead to throwing out what's in the CMS and starting from scratch. Big opportunities to build in crosslinks, hierarchies between content and facilities. 
  * next steps: validate a one-pager about an approach, including naming conventions
  * this will lead to Drupal being source of truth for Lighthouse and GeoBISL to consume, possibly with new unique identifiers to show hierarchies/relationships

## Wednesday April 7

* Centralized content - update from CMS team for Policies and Vet Centers - Steve
* Vet Center content status: quick updates
  - Vet Center taxonomy status - Dave
    - Existing taxons have content
    - Michelle will double check type of care 
  - ~Vet Center regions/zones - Kevin~
  - Facility services updates now happen "inline" on a Vet Center - Kevin
  - Minor content model changes incoming Thursday April 8 (some content may be needed for FE dev) - Kevin
    - "Nearby Mobile Vet Centers" on Locations list
      - Michelle will find a shared Mobile Vet Center for Escanaba
      - Kevin will create issue to prevent duplicate references to MVCs in Nearby.  
    - Facility status for CAPs 
      - Michelle will add operating status for these.
* Tugboat vs vets-website CI environments for product testing - Michael, Gibran, Steve, Kevin, Dave, Michelle
* How to handle new facilities, new Health care systems, merged health care systems. - Steve, Dave, Kevin, Michelle
* If there's time: IA governance update (Dave, Kevin, Steve) (screenshots [here](https://github.com/department-of-veterans-affairs/va.gov-cms/pull/4894)
  * Kev to schedule a Mikki blessing on the POC approach, with real spec in the two config fields.

## March 31

Centralized content GraphQL


VAMC policies 
  * Cutover 


## March 24 2021

* VAMC policies
  * Centralized content GraphQL - 
    * reverse lookup is not available for EFF fields.
    * [Relevant slack thread](https://dsva.slack.com/archives/C0FQSS30V/p1615917736024200)
    * Possible approaches: 
      * Get all Entity Field Fetch (centralized/national) field content first in one query (maybe be OOTB or a custom query). This may be the most efficient means. Next step: CMS team (Swirt) to write query to get all field settings for EFF fields. Validate this approach with Nick S and Neil H.
      * Would GraphQL 4 help? 
      * ~Write a new graphql connector for EFF fields.~
* [Vet Center content model documentation](https://app.mural.co/t/vagov6717/m/vagov6717/1614274642123/3509c33494d6dbc74e362cfe458dc5f2a517ec39)
* Type of care attributes and groupings (VAMC and Vet Center)
* Care we provide h3s (CMS: [#4799](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4799))
  * ~Michelle to link this to a FE issue~ [#22115](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22115) 

## ☘️ March 17 2021


1. Content entry for Escanaba (Michelle and Kevin to meet separately)
2. VAMC policies centralized content FE / content model support. (async Ethan/MPS)
3. VAMC policies cutover (delayed until March 24)

## March 10 2021

1. The state of Vet Center CMS build
2. Content entry for Escanaba
  * Page introduction should be required on both Vet Center and Vet Center Locations List #4624
  * Change media image to media library #4625
  * Remove First name and Last name and Company from field_address' #4626
  * Make revision log required on Vet Center content types #4628
  * remove field_hours and add field_office_hours for CAP. Don't require them. #4627 
4. Role of preview server for new work.
  * Preview doesn't respect feature flags
  * decision: not critical for VAMC policies page epic, but desirable in the future.  
6. VAMC policies page cutover, feature flags, centralized content content model. 
 
## March 3 2021


1. Policies page / Centralized content content model (Swirt, Kevin, Gibran, MPS, Michelle)
 * FE should query all Centralized content separately, then "dip into that well" when needed, instead of going through the "local" content.  
 * Originally this was going to be UUID driven for Tome sync/ Transformers. 
   * But with GraphQL adding entity IDs would make it easier for the FE to use. There's currently no way of using UUID in graphql. 
   * This would be a blocker for implementing Centralized content if we want to avoid using UUID. 
 * [Mural with content model](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1614800814809/825fd5a0b0360ff42c2470e128d8f35af42579ee) for the basic stuff **Kev to complete by March 4th**
 * Where should sample Policies content go for FE development? Some Options 
   * Pick a future VAMC (non-dual state) to use as a test ground for an unpublished Policies page **Kev would ask Stan which one would work**
   * Pick a VAMC with an editor that understands the rollout of this page.
     * Set the section to VAMC facilities or some other place.  
   * Create a sandbox VAMC that can be used for development purposes.
     * This could align with VAMC needs for having a template with which to clone. 
   * Rely on the liquid template PRs to manage change and prevent duplicate Policies pages from going out. 
     * not ideal because then we don't have a means to iterate
   * Feature flag
     * Would allow us to use the same URL for both old and new Policies pages
     * Unclear how Preview deals with feature flags.  
   * Security with obscurity (add to robots.txt) 
   * CMS team will work on a medium/long-term solution
   * We will consider tugboat for short-term for Policies page. (how does that work for vets-website PR enviros?)
  

2. Breadcrumbs
 * [#16020 breadcrumb](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16020) (Michael, Kevin, Ethan, Swirt, Michelle)
 * Oklahoma
 

3. Lighthouse collaboration (Swirt, Dave, others?)
 * Anything COVID...   **Next step: Steve working on issue, has notes to add.**
 * Vet Center data push... **Dave will take this.**
 * New lighthouse fields, where does it live? Does it need to be migrated from Lighthouse to CMS, does va.gov connect directly to lighthouse? **moving this Parking lot.** 
 
4. If there's time?
 * The menu / VAMC system name fragility (follow-up from the Eastern Oklahoma issue)
 * IA governance

5. Vet Center - Kev set up meeting with Michelle and Dave to tackle this agenda. 10:30am Thursday March 4
* Update on CMS team's work (Kevin)
  * Content model and CMS governance close to 100%, should unblock FE work by March 12 at latest.
  * Kaise currently Updating migrations from VAST
  * Editorial experience for local editors - usability testing dashboard and main form.   
* Entering sample content on prod for Escanaba and Health services (Kevin, Michelle, others?)
* Adding blocked MVP accounts on prod for testing and training purposes (Kevin, Michelle, Jane, others?)

## February 24 2021

### VAMC System
 * Policies page content model documentation (this will be done async, between Steve and MPS)
 * [#16020 breadcrumb](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16020) (moved to parking lot Feb 3)

### Vet Centers 

* [CMS Vet Center MVP Runbook/roadmap](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/roadmap) (done async)
* ~How to Vet Center staff request changes to VAST? Is there an equivalent to [the VAMC request form](https://vaww.va.gov/WEBCOM/VAMC_Facility_Location_Updates.asp)?~ (async)

Product design and content model
* Character limit requirements -- who decides?
  * Dave, Leyda and Michelle will provide character limits where possible, but default to no limits right now, so that we can learn about the content and lock down later. 1 option to create soft character limits.
  * Restrictions or requirements for content. Eg spotlight...
  * Service descriptions: Limited HTML rich text editor.
* "Featured content" component name and final spec (aka Spotlight) [#4385](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4385)
  * follow up async on specs. 
* Prepare for your visit content model - what's hardened, what's not? 
  * Local editors should be able to add unlimied "prepare for your visit" accordions, plain text header, limited html rich text content (no headers). Nothing nationalized for now.
  * This content may be added to training / change management, eg hand editors a word doc with content.
 
Next Monday's Vet Center sync call (agenda, attendance)
 * TBD if CMS team should attend. 
 * Possible CMS topics: Top task questions (eg how often do you add/update/remove CAPs in non-COVID times?), language questions (what do you call "X"?), headsup on upcoming usability testing.

Change management for national editors editing facility status.
* Editors of facility status may start to see some minor changes to forms when editing facility status for individual Vet Centers. CMS team can update them. 
* CMS team to schedule sync with national editors about other user stories

Questions that have arisen during our Discovery
* CMS Service blueprint questions
  * Setting expectations for MVP users about MVP functionality. -- who does what?
    * Dave put together presentation when 5 additional VAMC editors were added -- Focus on locations and services. 
    * What they are getting 
      * Locations
      * Services
      * Help desk
      * training
    * When editors want something in the product, what does CMS want to do?
      * eg respond with "talk to Dave and Jessica"?
  * CMS user onboarding kickoff
    * Training



## February 17 2021

Content model / FE changes
* Look back at `fieldDate` [PR #16015](https://github.com/department-of-veterans-affairs/vets-website/pull/16015) and method 
* Facility health services cutover - #17928 cleanup from cutover  #19881 "failover logic" issue that was noticed via broken link reports during Lebanon dual state launch. 
* FYSA: Policies page content model documentation ready by Feb 26 at latest. 
* Facility status migration issues - Dave will read what Steve sent JHL. Steve's PR has gone in to CMS to remove blockages for Bath and Canandaigua (Finger Lakes area). Dave: this is related to two VAMC systems being merged. Steve: two other similar issues, cert for Anchorage was boogered up, so that Alaska wouldn't come through in facility status migration. Facility status updates have not been correctly updated since December. Fix for Cert is in for Anchorage, which revealed the Finger Lakes. As of today's release, Bath and Canandaigua will not have their facility status migrated, until this is fixed. Dave: real solution is to get all VAMCs into Drupal.  Steve: another issue, some new Facilities have been created because Facilities are being added in ASP endpoint with facility IDs that don't exist in VAST. Potential risk is how Lighthouse handles this. Next steps: Dave/Steve taking this offline. 

Vet Centers
* ~Review CMS goals and backlog for Sprint 26.~
* Review Discovery questions/hypotheses.

## February 10 2021

All was handled async: 

* ~Results of Pittsburgh spelunking. (separate meeting, Stan to schedule)~
* Feedback on [Content model changes documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/content-model-changes.md)? 
* ~fieldDate removed? If so, CMS will merge our PR.~
* broken link checks in FE PRs. 

## February 3 

### General

Seeking input on [Content model changes documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/content-model-changes.md)

We can use this framework to discuss content model refactoring epics below.

### Upcoming demo environment training 

* Tentatively 12pm ET Thursday February 11th. 
  

### Content model refactoring 

* VAMC System Policies 
  * CMS team will be documenting content model in our Sprint 26, so FE can start in March. 

### Vet Centers

* #Type of care (Vet Center) field. [#19284](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19284) and [#4147](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4147)
  * Decision: Facilities team will delay the FE work until transformers are out. CMS team will put the depracation of the parent terms in the icebox. 
* CMS roadmap work in progress. 


### Other

* [#16020 breadcrumb](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16020) (moved to parking lot)
* `fieldDate` on Event listing
  * CMS still has field_date on Event content type, but will remove it once Facilities strips it out of FE


## January 27 2021 

### Upcoming demo environment traings (moving from Devshop to Tugboat)

- CMS team will be scheduling a demo environment training the second week of February.
- Who's interested in attending? We can't guarantee a time that will fit for everyone, but we'll do our best, and a recording will be made available. 

### VAMC System

* Pittsburgh spelunking
  * VAMC upgrade team is reviewing Pittsburgh for content changes (IA and otherwise) and will report back after this sprint. 
  * Eg Surgery health service, which got added, explaining the elective surgery process, so that Veterans can understand what they are getting to.

#### Content model refactoring 

* [Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/content-model-changes.md) not ready yet, but CMS team will demo something on Friday and share it out, and will ask for feedback in your next sprint. 

* Facility health service cutover
  * What's remaining? When? What support is needed from CMS? 
  * For appointments intro text, Erie and Pittsburgh are being done by Dave/VAMC, and VAMC will clean up others as part of launch. 
  * Dave will remove second service locations from University Drive health services 
  * Move some blobby content from Pittsburgh (Dave)
  * Phone number issue in flight (Gibran), no questions
  * Once that is done, we can turn off blobby content in editing page, and remove staging only link, and make sure that blobby content can still be read somewhere--Tugboat environment, proofing page, disabled on editing page. **Kev will write issue (CMS #4146) **. 
  * Pittsburgh editors (Ryan and Shelley) will review training for health services. They may have help desk questions. 
  * **Kev and Michelle to review for anything missing** 
  * FE issues to remove blobby GraphQL/Transformer / liquid template code
  * CMS to remove blobby field and data altogether. 

* Policies page [#3684](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/3684)
  * Basically "ready" for FE development, but we should arrange a spike for how FE might think about "Centralized content" more broadly. 
  * Policies currently uses Detail page. New content type "VAMC Policies" with new fields. 
    * "Entity field fetch" is new for transformers and graphql. 
    * **Kev to write an issue for Steve to document content model for FE devs** (CMS #4145)
  * Policies pages will be swapped out (old to new) on a VAMC system by system basis ("manually").  

* VHA health service type of care [#1981](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/1981)
  * VHA health service “type of care"
  * **Kev will create an issue to change label to "Type of care (VAMC)" and add a new field "Type of care (Vet Center)" #4147**
  * Type of care is currently both a parent and an attribute, the FE uses the parent
  * System health services could be refactored now to group by attribute not parent.
  * FE could just ignore the 5 terms that don’t have Type of care values (which are the parents)
  * Then CMS can safely delete Parent terms. https://prod.cms.va.gov/vha-health-services
  * This FE work can wait until Vet Centers get built, CMS team will continue to support both structures

#### IA governance

* Review [epic for hardening menu governance](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2427), and [hypotheses](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/facilities-collaboration/menu-governance-hypothesis.md) (Kevin) 
* Review [Unique content validation](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4073) epic, spike #4074 candidate for next sprint

#### Accessibility

* [#4084 Prevent h2/h3s in Facility "prepare for your visit" accordions](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4084) (and associated FE ticket [#18986](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18986))



### Vet Centers [#4080](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4080)

Schedule another meeting to discuss: 

* Review rough CMS sprint cadence (forthcoming, from Kevin)
 * Vet Center services design

## January 22 2021

### Vet Centers

- IA?

### VAMC product 

- IA governance with Mikki
- update on GraphQL limit testing

Content model changes
- [Review shared documentation for content model changes](https://dsva.slack.com/archives/CDHBKAL9W/p1610492404381400)
- VAMC health service appointments intro text
  - 100% additive 
  - will get slightly refactored at some point once we make the default text editable by a CMS editor 
- Health service taxonomy "Type of Care" refactoring - create shared runbook
  - Health services page FE work to use new "type of care" attribute as a grouping mechanism, including Transformer work.
  - [more steps TBD]
  - Final step: CMS team deletes deprecated parent taxonomy terms. 
- VAMC Policies Page refactor - create shared runbook. This is the first of many top task pages.
  - New content types (VAMC Policies Page + Centralized content), which in tandem will replace all /[health-care-system]/policies
  - Content migation analysis for all existing VAMC policies page to see how much diversity there is, which would suggest the appropriate approach (automated migration?)
  - New FE templates for VAMC Polices Page content type, graphql, transformers
  - [more steps TBD]
  - Final step: CMS team swaps old Policies nodes with new Policies nodes. 

## Week of Jan 11

- Facility status live training (to include Dave, Stan, Lisa, Michelle, CMS to reach out to PW to see if others need to join)
  - Michelle met with Dave yesterday to confirm content
  - Verify the list of attendees. Michelle: confirmed, it's just the Vet Center folks from the email Michelle sent. 
  - VBA training possibly later. 
  - Date: Dave has a preference for the week of inauguration. Week of 25th, for roughly one hour in the afternoon to meet all time zones. Dave is handling schedules. 
    - Michelle will gets some options, and David Addison will schedule.
- Process for managing this doc (Kevin)
  - Anyone can update 
  - Kevin will post in vsa-facilities on Thursdays with draft agenda
- GraphQL query limit monitoring
  - A limit unbeknownst to CMS team that the query only returns 2000 nodes with stand-alone URLs. Never a problem until Erie, and some pages were missing. Investigation found the limit. Michael bumped that limit to 5000 nodes. Neil's research from 6 months ago didn't acknowledge that 2000 nodes limit, so we don't know where the limit is. Core CMS team is now testing where the actual limit is. CMS ops team can bump that limit locally for tests.
  - We'll provide updates to Michelle and Dave when we have them. 
  - We'll know when we hit this limit because FE will stop building. 
  - CMS Core team issue for test: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/3961
  
Content model
- Action items from [time zone retro](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/facilities-collaboration/post-mortem-dec-2020.md)
- Health service taxonomy "Type of Care" refactoring - create shared runbook
  - Health services page FE work to use new "type of care" attribute as a grouping mechanism, including Transformer work. 
  - Final step: CMS team deletes deprecated parent taxonomy terms. 
- VAMC Policies Page refactor - create shared runbook
  - New content types (VAMC Policies Page + Centralized content), which in tandem will replace all /[health-care-system]/policies
  - Content migation analysis for all existing VAMC policies page to see how much diversity there is, which would suggest the appropriate approach (automated migration?)
  - New FE templates for VAMC Polices Page content type, graphql, transformers
  - [more steps]
  - Swapping of old nodes with new nodes. 

### TBD
