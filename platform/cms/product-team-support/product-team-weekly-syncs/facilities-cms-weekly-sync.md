# Weekly sync: Facilities / CMS

<details><summary>About this meeting</summary>

- Wednesday 2:30pm ET 
- Meeting owner: Clarence Maeng
- Facilitator: Kevin Walsh


</details>

<details><summary>Parking lot</summary>

* New lighthouse fields, where does it live? Does it need to be migrated from Lighthouse to CMS, does va.gov connect directly to lighthouse? 
* What VAMC environment can be used to 

* [#4084 Prevent h2/h3s in Facility "prepare for your visit" accordions](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4084) (and associated FE ticket [#18986](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18986)) (moved here January 27)
* #Type of care (Vet Center) field. [#19284](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19284) and [#4147](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4147) (moved here February 3)
* Breadcrumb cross-team spike 
 * [#16020 breadcrumb](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16020) (moved to parking lot Feb 3)

</details>

## Wednesday April 14

* Tugboat feedback
* Documentation for VAMC menu / IA governance  
* Breadcrumbs for Vet Center

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
      - Michelle will find a shared Mobile Vet Center for 
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
