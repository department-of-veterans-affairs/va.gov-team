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
5. Using API for online scheduling information
6. Staff profiles https://github.com/department-of-veterans-affairs/va.gov-team/issues/17116 https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5450 


</details>

## November 3

Metatags 


## October 27 

### VAMC

Cerner implementation 
- Contact us page

Operating status facilities list (FE change)

Events (FE change)

Top tasks hardening ETA (content model)

### Vet Center

Vet Center names
- North Bay
- Kailua-Kona



## October 20

### Vet Center

When a Vet Center has no spotlight (ie [Reno Vet Center](https://www.va.gov/reno-vet-center/))
- [#31682](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31682)
- No actions for now, we can consider making this field required in the future. 
- Other approaches
  - Having national spotlights as backups to fill in gap. (could be added to the Centralized content) 
  - Events in the future

Dashboard usability tests
* 4 editors scheduled for next week. 

Office hours
* not well-attended. 


### VAMC

Sort order logic for Locations
* [#30774 DISCOVERY](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30774)
* Ideally: Sort the same as the menu, because that can be controlled by an editor (can it accessed in graphql via the node?)
* If not, standardize sort in all places... by Facility ID or Facility name.
  * Then Update KB article about Locations pages to explain the sort. 

Top tasks
* Location data for content hardening work
* ETA for related links data (URL vs URI)
  * early next week. 

Side Nav PR review reminder
* Platform CMS team to test performance, hopefully Sprint 44. Kevin to follow up with them. 



## October 13

### Vet Center 

District 1
* kickoffs accomplished, users onboarded
* email going out tomorrow with content deck and links to training environment 
* soft deadline Friday November 19, editors have been told to expect to be chased down after that
* next District (2, 3, or 4) will be identified for early December
* Can we get a report about time spent per editor per day in CMS? 
  * Training and exercises is a little over an hour
  * ~5 hours per Vet Center is the estimate, including time in workbook.  
  * Not a short term priority for Facilities work, but useful for editorial experience prioritization



Facility status push (comments/events in details) 
* [Slack thread from Steve](https://dsva.slack.com/archives/C0FQSS30V/p1633628375145200) from October 7. 
* CMS to do: Editorial experience change about how to handle Details when status is Normal, which is not displayed anywhere? Guidance and field visibility etc. 

Official name ready for FE dev
* `field_official_name` stores

Required services for Vet Centers
* hopefully in time for next district
* change management will be required for District 1 and 5 and MVPs
  * AC for Migration issue: report what required services are created for them.
  * Announcement needs writing

Inline national service content should be visible mid-November at the latest.

### VAMC engineering

VistA / Cerner 
* Spokane has been set to Cerner, all other VAMCs set to VistA
* `field_vamc_ehr_system` and current possible values are `vista|VistA` and `cerner|Cerner`

Menus
* depth https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6659
* Steve and Gaida figured it out for the two systems that were not working. 
* timeline for performance review 





## October 6

[Dave is out]

### Vet Centers

Vet Center onboarding - any updates?
* Jane: invititations out for 12/13
  * Helpdesk is setting up accounts Tuesday the 12th at the latest
  * Office hours invites have been forwarded 

Vet Center usability study -
* Rachel: By Oct 8 research plan will be ready, recruitment of 5+ happening next week, getting list of District 5 users to recruit from
* Michelle: happy to suggest, or pull from the active or inactive users. 
* Rachel: a mix is good, it's hard to tell who's further on. Will create a list and run it past Michelle and Jane for a review. 
* Michelle will give Jessica S a headsup that a member of CMS team will be sending an email. Probably Rachel. 

Survey results
* Michelle: analyzing now, 40 respondents, very candid

### VAMC 

VAMC Location list sort logic 
* Facilities issue [#30774](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30774)
* Can we get CMS input on settings in CMS or on editorial side which can impact sort order? 
  * Kevin: Only the menu items can have their order controlled in the CMS
  * Facilities team is looking into what rules are in place
* Location for documentation?
  * Knowledge Base articles listed on the 3rd column at https://prod.cms.va.gov/help/vamc/vamc-guides (probably "About facilities and locations content").
  * More process/governance coming for KB 

Consistency for data structure in Centralized content
* Q&As for Vet Centers coming from Centralized content have a different data structure from other Q&As on the site. 
* Send any specifics to Steve before writing transformation code to see if anything can be done with the drupal output to match the format used in other non-centralized content components. 

Alignment/product responsibility for new CMS team members?
* TBD still. Jay, Amandeep will reach out if they are working on any FE stuff. 
* Suzanne and Erika as well will need some touchpoints, TBD.  

## September 29

### 4Q21 priorities

CMS needs to add
* Facility services -> Lighthouse

### VAMC

Published status of menu items

Product change to support Manila (facility with no system)
* still a big question mark

Lovell
* Main hospital, 3 facilities (may or may not be available to DoD) for Veterans.
* The four other facilities, which are not in VAST, are not available to Veterans, and will not appear on VA.gov.
* VHA digital media know that Lovell will not be migrated unless we can do it with a detail page under About US for the 4 DoD-only faciltiies
* Possible future state: DoD could pull facility data from Content API to populate their own website. 
* More info to come. VAMC meeting with VHA digital media about this. 
* CMS team will be migrating Lovell health service data 

Staff profiles 
- CMS: new boolean field on prod (see /node/add/person_profile). Existing staff profiles with content in two fields has had this checkbox checked. 
- FE should probably use the boolean conditional rather than checking the content of the two text fields, because an editor may uncheck the boolean and expect that the FE page will go away. 

Location sort order on homepage, locations page, menu, operating status, and health services accordions
- FE issue to understand current state

Scheduling Mobile VAMC facilities research/design/discovery overview: Mobile, CLCs, and Domicilaries are all getting unpublished/archived, so not blocking current VAMCs going out. Central Arkansas has created a Domicilary program page. 

- Week of October 25
- Dave, Leyda, Erika, Suzanne, Kevin, Jay, Steve possibly Rachel and Clarence (optional) 



### Vet Center

Official vs plain language Vet Center names 
- Need to confirm: low priority because District 1 and 5 are already handled? -> Ogden Outstation (Major Brent Taylor)
- CMS epic: [#5632](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5632)

Temporary vs permanent inactivation of San Marcos MVC
- Deafult to archive but not delete, until permanent deactivation can be confirmed. 
- Do new MVC vehicles get new IDs?
- if IDs don't change, we can rely on those. 

Attendance at District 1 office hours
- who should be on invite - October 12/13 kickoff - covering content workbook (aka content deck)
- Cutoff: Nov 19 or Dec 1 COB
- weekly office hours week start week of Oct 18th

Survey
- 28 responses! Deadline Friday, results later.

National health service content in the Vet Center facility editing experience

Migration of required services
- not ready for District 1

Feedback from Vet Center office hours
- "in review" status.


## September 22 

### CMS team and staffing changes
* Intros: Jay and Suzanne, Facilities team
* Previously: CMS Product Support team
* Currently: **Sitewide CMS team**
* Future: Sitewide CMS - Product support team

### VAMC

Top task pages - 
- Tugboat environment and test content
  - https://master-tkr1gvzvdlradcpbynywwn6txmcuk8ug.demo.cms.va.gov/lovell-federal-health-care
  - Medical records /node/35838
  - Register for care /node/35839
  - Billing and insurance /node/35840
  - Currently from Lovell Federal health care, but the system may change. 
- What's ready to go: Centralized content - react widgets, FAQs, intro text, Related links
  - FE implementation for new VAMC Register for care content model [#29494](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29494)
  - FE implementation for new VAMC Medical Records content model [#29495](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29495)
  - FE implementation for new VAMC Billing and insurance content model [#29496](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29496)
- What's still in progress: Service locations and service location data
  - FE implementation for Medical Records service location/data [#30390](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30390)
  - FE implementation for Register for care service location/data [#30391](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30391)
  - FE implementation for Billing and insurance service location/data [#30392](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30392)
- Dave to make decisions about service taxonomy dependencies for all the localizable content. 
- CMS to provide existing centralized content field names for each of the content types
- Should we publish test content? No. FE devs can use preview URLs. 

Lovell Federal health care 
- May be in dual state sooner than later
- Has four facilities not in VAST and therefore not in Facility API
- Do not have Facility IDs
- **CMS issue?:** can create these facilities, after discussion with Lighthouse and VHA Digital Media about 4 FHCC facilities and Facility IDs. Or Lighthouse creates it from a CSV because lat/long and other fields that CMS doesn't store. 

Care we provide h3s
- CMS epic: [#4799](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4799)
  - **CMS issue:** Create feature flag "care_we_provide_h3s"
  - Audit existing h3s 
  - Search and destroy 
  - Other tasks TBD based on audit 
  - VAMC upgrade coordination of Lovell migration
- FE issue to place "Care we provide at `[health care system]`" in the VAMC system health service accordions?

Refactor of operating status pages to pull facility status from system, rather than facilities hand-listed on Operating Status page
- CMS issue: [#5632](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5632)
- FE issue: [#30395](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30395)

VAMC Detail Page alert content block not visible on VA.gov if Alert Heading is empty 
- After CMS makes Alert Heading field required, should the FE have backup logic if still comes across content where the header is missing, along with the Vet Center services question (for services missing Type of Care attribute).
- This is out of compliance with design system
- Need plan for management of existing content
- Facilities team issue [#29771](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29771)

Featured stories
- [KB article](https://prod.cms.va.gov/help/vamc/how-do-i-feature-a-story-on-my-sites-homepage)
- **CMS will** bring this to VAMC upgrade for a PAO newsletter brief.

### Vet Center

Vet Center roll-out survey
- going out to First 10 MVP Vet Center editors and 80 District 5 editors
- Focus is on Facilities team process -- office hours, content deck. Less about the CMS experience. 
- What are the pain points so that we can make changes/improvements for District 1 in October. 
- Keeping it tight/short and anonymous to improve response rates 

Vet Center dashboard usability research
- Hypotheses were formed for Vet Center dashboard that we want to test, to bring lessons back to Vet Center, but also for how to apply to VAMC dashboard
- We would focus on non-MVP (District 5 except 2 people) users
- Michelle can provide Suzanne and Rachel with candidates for usability research participants, across the spectrum. 

Editing experience for operating status for Vet Centers
- The problem we're trying to solve: Vet Centers should be maintaining their facility status, they should also be notifying their district to say, for example, they've closed. 
- As a District director, i want to know when facility status changes. 
  - Short term: manual
  - Medium/long-term: automatic / email.   

## September 15

### Vet Centers

Overriding the official Vet Center name (i.e. Dr. Cameron McKinley Department of Veterans Affairs Veterans Center = Prescott Vet Center)
 - Facilities team: [#29844](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29844)
 - Facilities team to look at District 1 and 5 for other official names to determine priority
 - **CMS issue:** As a Content admin, i can override the official name with a Veteran-friendly one, so that the front end can use the plain language one as the h1. 
   - URL should use the plain language name (/prescott-vet-center)   
   - This is only the case for <5% of Vet Centers. 
   - Field should only be editable by Content Admins, disabled for others
   - Concerns that need to be addressed: Facility API parity, URL aliases. 
   - Implementation idea: "Official name" field that Facility API migrates into, which populates title, and which becomes overrideable by content admins. 
 

Nearby Vet Centers listing 
 - The published status of Vet Centers in VACMS should not matter because it's all Facility API... So no photos and no links to CMS-managed Vet Center content, for now. Future state: photos, and links to Vet Center pages. 
 - Lat/long in CMS? Should it be pulled in from Facility API?
 - **CMS issue**: Migrate in lat/long from facility API, to go with other Lat/Long issues (VBA, CAP, events, mobile VAMC)
 - editorial experience: 
   - Up to 5, excluding Vet Centers listed in "MAIN AND SATELLITE LOCATIONS" field, within an 80 mile radius. No nearby CAPs or MVCs. Other VC's CAPs may be included in the future. 

other affected Vet Center - vc_0705V 

### VAMC and Vet Center

Facility status push to lighthouse
- Status can be out of sync between CMS and Lighthouse
- less likely to happen for VAMC facilities
- changes to draft facilities that have never been published get pushed to lighthouse 
- if a facility has been published, we're only supposed to be pushing changes when changes are published.
- Business process changes
  - Barb needs to maintain the facility's moderation state for facilities having facility status updated
  - CMS issue to prioritize fix to logic [#6429](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6429)
- Adam from Lighthouse will provide list of 9 that were out of sync, Steve will review the use cases. 

### VAMC





## September 8


VAMC 
 * Google results: no index-no follow trailing slash work - is this now done for all known locations? will it be done automatically for newly created?
   * comment to ROBOTS.TXT file for how to write index-no entries.
 * Placeholder images 
   * for VAMC profiles [#29788](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29688)
   * as a general rule, placeholder images should not be in the CMS.
   * CMS can remove placeholder images after FE has ensured placeholders show when values are NULL. 
 * Profile pages.
   * https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6363 : First sentence and body are required 
 * Features stories and event sorting 
   * CMS team will design implementation steps but not merge anything until we've coordinated. #1317 / #1318 / #1316
 * Top tasks (Medical Records, Billing and Insurance, Register for Care)
   * Each are slightly more complex than Policies, but all in a similar way (the addition of Facility services)

Vet Center
 * Type of care default for Vet Centers - do Vet Centers still have the option to choose outside the Vet Center list? [24313](#https://github.com/department-of-veterans-affairs/va.gov-team/issues/24313)
   * Vet Center editors can only choose services that have Vet Center type of care that they don't already of 
 * District 1 planning
   * 2nd week of October
   * list of users forthcoming, missing some outreach specialists
 * Editor support processes 
   * It's been quiet and then there was a flood. Michelle reviewed 42 that had been requested. Another 2 dozen pending. 
   * Steve or Jessica from VHA will prod editors to get them moving, it's now past their deadline (Aug 20).
 * Required Vet Center services https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6332 
   * Michelle to provide list of required services.  
 * Nearby Vet Centers and Outstations
   * will all be automated (#27813) based on 80 mile range of zip code, minus the ones already specified on the page
   * In the future, this may change, so that regions where people are used to driving farther, editors could set the distance higher. 
   * CMS issue: delete the Nearby Vet Ceners field and update field labels and UI accordingly, including dashboard, and provide some inline help text to explain that _Vet Center locations_ within 80 miles will also be displayed.  Do not merge until #27813 is done. 
   * CMS issue: update training and KB article about Nearby Vet Centers. (post #27813)


## September 1

VAMC
* Hardening content model for 3 top task pages
  * kev to add MPS and Gaida and Michelle to Thursday call
* Editorial experience for the number of featured stories in Drupal 
  * [#29378](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29378) - we will limit the number of featured stories to two and return to story order in a future issue following changes to editorial experience 
  * [#1318](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/1318) CMS epic to rebuild this feature... no timeline on it. 
  * CMS to do: identify some small things that can be done... only one module? 
  * CMS to do: write own "known issues"
* System health service descriptions (based on Shreveport experience) 
  * 508 issues due to use of improper headings
  * How might we provide guidelines or guardrails... structured "Care we provide" content with bullets? Disable headings? If we disable headings, how do we handle existing content that has "Care we provide at VA Shreveport" h2 in the rich text? 
    * CMS to figure out a content model iteration that would prevent 508 issues, assuming FE could add an h3 "Care we provide at [Health Care System]", including content intent instructions.  

Vet Center 
 * operating status alert
   * "Normal" alert status displays one way on the Vet Center's own page than it does when included as a "Nearby" location on another page [#29415](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29415) 
   * CMS issue - do not push "more info" to lighthouse when status is normal
   * CMS issue - clear "more info" when status is saved as normal 
 * District 1 - 80 Vet Centers 2nd week of October
   * CMS issue to load POCs for District 1 (list forthcoming, missing some names)
   * More to come, agenda next week.
 * Editor support processes 
   * How might we automate the required services (without local info) and required Prepare for your visit accordions.
   * CMS issue to populate the required services for each Vet Center in District 1-4. Script can check to see if any are missing for existing Vet Centers too.  
     * Should this apply to new Vet Centers when they get created? Yes.
     * CMS issue: Editors should not be able to delete required services.  
   * Prepare for your visit
     * What to bring, national standardized content, could be hardened now, OR prepopulated
     * Other possibilities for preopulation or hardening: transportation, parking
 * Editorial experience for not repeating national content, first for VEt Center, hopefully a design pattern 
 *  

## August 25 

### FE topics
  * moderationState field
    * Neil created a ticket and scheduled for next sprint
    * Not currently a blocker, as long as filtering capability remains
    * Issue when in preview mode, want to see data that's archived
  * jump links/table of contents [#28249](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28249)
    * 28249: should FE fix it?
		  * Facilities is getting some push back on whether to fix or not from Ops
		  * Content needs to be bumped up a level
		  * Component is behaving as it should
		  * Shouldn't fix because it's pointing out a problem with the content
		  * Until Platform provides training, tools, the field doesn't even have a clue
		  * In our sphere of control is whether or not is appears vs. holistic approach (on Platform for later)
		  * Need a defensive strategy, ultimately would need it fixed on FE
		  * Dave to chime in on ticket to clarify
  
### VAMC
* Top tasks: Register for care, Billing and insurance, Medical records office
  * Coordination of remaining steps [6072](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6072)
  * Facilities to review what we've got
  * Next week's discussion after review
* Hi-res images
  * Current Facilities sprint (beginning 8/25)
    * Hi res image download rendered as a link without href [#29079](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29079)
    * Facilities team: validation on CMS side
			   * On FE we could do some defensive things:
			     * If there's no hi res image don't offer the checkbox
			     * Currently not presenting a link at all
			     * What is the right image for hi res? (A: original)
			     * Need in the KB for developers (list of images)
			   * Will be used in Facilities too, even though originated from a different product
			   * FE isn't going to actually pull the image, but trust that the image is actually hi res, check should be on CMS end
			   * Or don't check at all and if someone checks the box, give them the highest quality image we have
			   * Whatever aspect ratio is used on the page, if someone loads an image that's not hi res should we provide the largest? A: no, because the purpose is to make it available for print material
  * Validation on CMS side
    * presence of hi-res image
    * link to image
* Social media meta tag audit planned for next sprint, 8/30, [#6171](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6171)
* Staff profiles (fyi)
  * Remove hyperlinks for staff without bios [#29102](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29102) - Current Facilities sprint (beginning 8/25)

### Vet Centers
* Required components/content for publishing
  * service list (add to CMS migration backlog)
  * "Prepare for your visit" accordions (Appointments, parking/transportation, what to bring) (add to CMS migration backlog)
  * Facility images (including CAPs)
  * at least one local spotlight, maybe don't tackle for October because there might be a bunch of empty spotlights on the page
  * Are there some sort of migrations we could do to stub out these accordions for District 1 facilities?
    * Accordions would be editable except "what to bring"
    * For this facility add these accordions
    * Then also as a migration put in the facility service nodes for that facility
    * A: yes possible, don't have a method yet to put specific facility info into each (maybe we hold off on that)
    * What are the multiple levels of maturity? Bc we're going to be hardening it anyway at some point
    * Services would be the same migration that VAMC upgrade is doing now for facility = this service (all 70 are the same)
    * Both could just be additions to the VC migrations we already have
    * Create an issue for service list migration (CMS team)
    * Issue for default prepare for your accordions (CMS team)
    * CAP images, need to flip the switch and make required, doesn't hold up the entire main page
    * Facility (Vet stations, out stations, mobiles) image required too
      * They won't be able to save anything else until they save an image
      * Can we hinge the ability to publish on that?
      * Possible but we don't have a model / pattern for that yet
      * Not all of the validation can happen on a bulk publish
      * Break this work out from CAP images
      * Dave would like to consider some migrations in prep for District 1 kickoff
        * Also user creation
        * Michelle to get that list from Jessica/Barb
        * Are there any changes from the format from last time? Should be fine, just need section and email
        * Need to address regular cadence of quarterly validation (needs CMS ticket)
        * Consider if they don't log in within a quarter, automatically block their account
* District 1 kickoff planned for late October, FYI

### Other
* Topic for the future: site monitoring (related to broken VAMC Locations List pages)

## August 18
 
 Vet Center
 * Editors are using "Prepare for your visit" as a way around the national services taxonomy, eg MVC services on http://preview-prod.vfs.va.gov/preview?nodeId=3821 
 * Restricting number of "Prepare for Visit" Accordions to 5
 * Also a candidate for hardening - required or nationalized accordions
 * "What to bring" is national
 * 3 other standard "accordions" - Parking, Transportation, Appointments - needs more thinking and looking at the data coming in from District 5

VAMC
 * Staff profiles for care coordinators (and other non-leadership staff profiles)
   * Profiles without bios - no FE urls. This has been in Facilities backlog, to be refined but no timeline 
   * Content model for staff profiles - should potentially wait for other products that could dictate needs for staff profile. 


 * Making service taxonomy national content visible inline to editors
   * **CMS team** -  to refine these stories for VAMC and Vet Centers 
 * Common content creation errors
   * Link creation (inline links, appropriate labels, etc)
     * CMS team epic - how might we reduce use of absolute URLs, "click here" link labels, etc, through link experience, form validation or other ckeditor features, training, KB articles.
     * Style guide already has good guidance.
   * Rich text formatting (bullets)
     * CMS team - research CK editor plugin to apply bullets automagically, à la MSWord. 
     * CMS team - bullets could be mentioned in rich text KB article 
 * Tracking and validate changes in VAST [VAMC facility map fails to load on some detail views #28558](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28558#issuecomment-901097646)
   * CMS issue: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4369  
 * Social media meta tag overview 
   * Descriptions
   * Images
   * etc. 
 * Elaborating on the content intent in the editorial experience
   * Vet Center editorial experience study in a few months? Dashboards, content strategy guidance, etc.
   * another example: banners in VAMC product.  


## August 11
  * Fix for grainy photos and potential risks
    * Story pages need to maintain current product design (2:1, full width)

## August 4

**VAMC**
* Followups to broken VAMC Locations List pages
  * Post mortem
  * Tech debt/defects related to CMS #1005 (January 2020!) refactoring of List pages.
    * Automated testing to check Locations List page (not just individual Locations)
    * Facilities will validate other 5 List pages (Health Services, News releases, Events, Stories, Leadership)
 
* Dynamic side nav [##17746](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17746)
  * Discovery determined this work may be more effort than it is worth
  * May need to look at creating runbook tracking the individual tasks needed for new/merged faciities?
  * A CMS-based dynamic approach is blocked by some Accelerated Publishing work. 
  * Facilities team to log this in the icebox for now

CMS/VAMC/Facilities upgrade team can collaborate on a "how to spin up a VAMC site" runbook
  * VAMC upgrade team will get ball rolling on this. 

**Vet Centers**

Product iteration, still in ideation:
* Required Prepare for your visit, eg parking
* Nationalizing at least one of the Prepare for your visit accordions (what to bring)
* Required services for Vet Centers
  * Research happening about whether or not local description should be required to augment national description 
  * Editors _maybe_ wouldn't be able to remove/delete that service.


Meta description for Vet Centers Locations page 
 * Content input in [comment here on #27812](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27812#issuecomment-891111897)
 * **CMS team** to audit description and og:description for all content types, current state and what it should be.  
   * More of a site-wide issue than a Vet Center issue.  

How to direct Vet Centers for facility data changes
 * Email api@va.gov (current guidelines in CMS UI) or VSSC? 
 * Decision: continue to email api@va.gov and Lighthouse will respond with instructions
 * Facilities team can leapfrog Lighthouse with a data call to Vet Centers (other than District 5) by having them review data in Facility Locator, prior to onboarding to CMS. 
 * Potential editorial experience change: "Once data has changed upstream, it can take up to 48 hours to make its way here." and/or "Requests to change this data take time to process, etc".

Facility status "more info" field
 * Should CMS harden character count to 300 (instead of soft limit) or should Lighthouse relax their character count?
 
VAMC banner alerts
 * possibly refactor VAMC product to use the new banner content type and bring in situation updates in a different way. 
 * should we impose character limits and dismissible by default in the meantime for VAMC banners to match guardrails from new banner alert type?

Emergency communications more generally
 * what is the right experience for veterans and VAMC editors and how it relates to overall comms
 * what can go into a bottom of page 

Promotional content
 * can VAMC leverage https://design.va.gov/components/promo-banners for marketing content like VA Health Chat app (currently a banner alert at https://www.va.gov/wilmington-health-care/) 


**Other?**
* Hardening/engineering sync
