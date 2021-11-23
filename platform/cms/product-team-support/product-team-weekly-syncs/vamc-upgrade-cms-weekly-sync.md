# Weekly sync: VAMC upgrade / CMS

<details><summary>About this meeting</summary>

- Fridays 10:15amam ET 
- Meeting owner: Clarence Maeng
- Facilitator: Kevin Walsh
- Standing agenda: 
  - Migration
  - VAMC Scaffolding
  - Account administration
  - Dual state and product launches
  - How we work
  - etc.
- [Previous agendas in Google Docs](https://docs.google.com/document/d/1Pchj-AHdET4URxAceIqSMvKOPluU3gZfZ6KIP7pCXqs/edit#)  

</details>

## November 26
- VAMC-health service pages (LGBTQ+ as example) reports looking for similar URL drift problems  (QA) review
- Training status (Wrap up)
  * Next steps
- Help Desk
- VAMC migration list for Dec 1st
  * (18) systems:  central western massachusetts, central ohio, columbia missouri, northern arizona, mountain home, st louis, marion, north texas, amarillo, el paso, texas valley, greater los angelos, phoenix, beckley, and louisville 

## November 19
- Training status
  * last group to be trained next 
  * Anyone with access to VAMC has to complete all of training to get access to know what they should not do.
  * Need to move towards categories of editors to better govern who can do what
  * Portland, Houston and Palo Alto to be used as resources for process of content editors who need approval 
- Help desk
  * Jane to follow up with these contributors will complete full thaining but only get content editor privilages: Portland, Houston and Palo Alto to be used as resources
  * Jane to add "Link to File" to training due to large volume of questions
  * Several people had issues with loading videos and the title defaults to "Video": Kev to create issue to take a look
  * Stan and Lisa to talk to San Diego VAMC on using Banners for marketing
  * Does VHA Dig Media need our level of access to Jira?
    * gather data on use cases and determine best path forward to ensure VHA Dig Media is staying informed
- Url alias for "lgbt" vs "lgbtq"
  * We need to go back and find the old LGBT-veteran-care and update to LBTQ-veteran-care
    * Stan has submitted ticket, Swirt has been working, Swirt to provide list of pages mis-titled
- VAMC migrations (Lovell!)
  * Dec 1st remaining 18 systems going out except Lovell (last 18 redirects)
    * problem is AD and Vets use system
    * Manilla is also a drastically different system 
- System health service "Care we provide" update
* Cancel next weeks meeting 


## November 5
- training environment URL change management
  - cut-off to be thanksgiving weekend Friday, messaging to go out Monday 22 Nov
- Help Desk ok to enable or disable Menus?
  - Stan write-up which are OK to do
- Print out of roles by VAMC system (Delegation of Authority) request from VHA
  - Kevin provided
- Contributor and publishing authority roll out?
- VAMC migration for Nov 10th - Estimated: 15 total 3 on the fence (VA Connecticut health care, VA Manchester health care, VA Dayton health care, VA Northeast Ohio  health care, VA Tomah health care, VA Wichita health care, VA Central Texas health care, VA Southern Arizona health care, VA San Diego health care, VA Nebraska-Western Iowa health care, VA Clarksburg health care, VA Huntington health care, VA Washington DC health care, VA Memphis health care, VA Tennessee Valley health care)
- Lovell csv file is ready.  Please prioritize migration in next sprint
-- Does VAMC still publish with only VA sites?   What to do about DoD sites? 
-- Dave and Stan to discuss offline
- Transition with VHA DM starting, need to consider communications with Justin Warren, Steve Tokar, Jeff Grandon (Distro group?)
-- need to change H1 on North Florida/South Georgia
-- Kevin to create issue will stay a slash
## October 29

### Help desk - 5 min

Broken links and menu requests
* Stan to write a transition plan for November for what can be enabled in menu, and broken links
* CMS team developing notifications framework later in Q4 with which we can send broken link notifications to PAOs/CMS editors. 

### Closing facilities - 5 min

* [The Beeville VA Clinic @ South Texas](https://www.va.gov/south-texas-health-care/locations/beeville-va-clinic/) - no health services, request is in to VAST to remove it. What next? Who?
* [Draft KB article](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/how-to-archive-a-closed-facility) - Stan to review. 

### Launch support - 2 min

Data for Lovell

Schedule for Sprint 60 launches - November 3, 10, and 17 by EOD. 

### Govdelivery settings - 5 min 

[Audit](https://master-1dmwlnxuv23pmihulgqf4omf2tyvmnfe.demo.cms.va.gov/admin/content/audit/vamc-govdelivery) shows a number of missing prefixes. 

Steve confirmed that these are breaking some GovDelivery. 

Who/when can address these? 
* VAMC upgrade team will update these
* CMS team to fix help text "For each of these fields, the topic_id that’s found at the end of the URL used to subscribe to GovDelivery emails. For example, if the URL is https://public.govdelivery.com/accounts/USVHA/subscriber/new?topic_id=1234, enter “1234”."
* CMS platform team to work on better alerting when there are errors. 

Should this field be locked down to content admins? There's no indication that PAOs have edited these, but it's also unclear if they should ever need to. How often might they change? 
* Decision: not for now, because then we inherit request fulfillment. 


### VAMC system health services - 10min


**Automated content updates**

CMS team engineers are writing a scripts to 
1. search and remove `<h3>Care we provide at [health care system]</h3>`, and 
2. Update fields to "Rich text limited" (no headings allowed), 

But will not run these script until the change management approach is agreed to, and the new "Care we provide at [health care system]" has been added to the template. 

**Audit**

* CMS team is doing a qualitative/quantitative audit on the 5800 existing nodes. Ths will lead to various recommendations for how to proceed, short and long eterm
* Want to interview Lisa/Stan early in VAMC upgrade team during their Sprint 60 (next Wednesday) about insights on problems, pain points, and opportunities for this field.
* Recommendations will be presented around the week of November 8.

**ISO Delegation of Authority**

Stan was pinged about a similar ISO request to the one from Palo Alto. It seems like a data call went out to all the ISOs at VAMCs. We may want to get ahead of this problem by communicating with PAOs, about what to expect if they are being asked. 

* Clarence: Help desk is probably the best resource for this. Still trying to understand what will satisfy. One PAO was fine with a screenshot of list of access, no training certification. 
* CMS help desk can support a list of users with access, but not training certs or other items. 
* If necessary, Dave can put the weight of the Office of the CTO behind statements of what we can support. 



## October 22

* Broken links, menu enabling/disabling - CMS help desk may be able to pitch in as Upgrade Team focuses on go-live schedule

## October 15

* Duplicate facilities from VAST
  * Stan touched base with PAOs who were confused that there was a secondary
  * Will VAST create new facilities each time one moves?
    * Ought to pull down old site instead and set to not active
    * Some of this may be from LH, not VAST
  * Short term:
    * Assign new facilities to San Fran (VAMC Upgrade)
    * Services need to be transitioned over to new facility (PAO/VAMC Upgrade)
      * Assigned to right facility, assigned to the right system health service, put in the right section (VAMC Upgrade)
      * Urls need to be updated (CMS Team to do in bulk)
    * Old one should still be published until a redirect can be put in place, with a note that that page is located at another VAMC
  * Long term:
    * Identify VAST workflow and what changes need to be made
    * What coordination needs to happen between the two PAOs involved?
* Broken links - CMS help desk may be able to pitch in

## October 8

* Help desk
  * PAO validation checklist - PAOs use it to review their sites. Questions coming in may refer to that. Chris and Stef have that. 
* Broken links
  * Certain editors are ignoring the broken links report, despite multiple explanations
  * Program areas are a challenge where there are a lot of child pages
  * Possibly update broken link fail test, and only fail based on number of pages with broken links, rather than number of broken links. 
* PAO newsletter ideas
  * Office hours
  * "Did you know" items?
  * PDFs
  * Broken links
* Lovell going to Dual state
  * CSV migration of health services - CMS Sprint 43 (by October 22)
  * Stan will provide by EOD today.
* Lisa OOO week of Oct 12

## October 1

* Help desk 
  * Lisa and Stan working on standardized email to encourage use of KB (http://prod.cms.va.gov/help/vamc) / CMS help desk.
* Dave out Oct 4-11
  * Beth and Danielle as escalation points (use #va-sitewide-content channel) 
* Full prod launches / redirects
  * Went out this week: Eastern Colorado, Fayetteville, Palo Alto.  
  * Going out October 6 Montana, cheyenne, new york harbor, central iowa, Augusta, Columbia South Carolina, Charleston, West Texas, black hills, Richmond, Hampton
* Update on Lovell plans
  * Conversation with Stan, Dave and Lovell folks yesterday
  * We can go ahead with the 4 facilities, there's no difference for Veterans between those and other VAMC facilities
  * The wonkiness for Veterans is well managed by the business, like dual-elegibile folks (eligible for VA and DoD benefits). 
  * Outstanding: Teamiste for Lovell is the only web presence for both Veterans and DoD service members (recruits, active military, and families). 
    * DHA - Defense Health Agency
    * NMRTC - Employee-facing (mostly)
  * The main hospital serves both audiences. But service member visits tend to be _referalls_ rather than primary. 
  * The four visits not in VAST are primary care for service member and families _except_ periodic health assessment (annual physical) for service members and families at main hospital
  * Ideally VA will not house the DoD content. Possible solutions
    * DoD sticks with teamsite and links out to new Veteran experience in a banner? 
    * Dave is contacting DHA and NMRTC to see if they're interested in the VACMS content API. 
      * Then Lovell folks can maintain web presence for two web properties.   
* Manila
  * No news yet. 
* PAO newsletter items
  * training exercises
  * KB articles


## September 24

Help desk 
* Stef can prepare a monthly "Top user" report 
* Emails going straight to Lisa/Stan. Instead of forwarding, reply should request that requests go straight to help desk. 
* Dave now able to access Jira
* New help desk manager, Chris Craig, joining Stefanie, and will get us back to 8am-8pm ET coverage
* Stef recommends Textpander for standard replies

Ability to archive certain content types now restricted to content admins. Relevant content types for VAMC: 
* Events List
* Health Services List
* Leadership List
* VAMC System Locations List
* News Releases List
* Stories List
* VAMC Facility
* VAMC System
* VAMC System Banner Alert with Situation Updates removed because it does not use moderation states
* VAMC System Operating Status
* VAMC System Policies Page
* VAMC System Register for Care
* VAMC System Medical Records Office
* VAMC System Billing and Insurance
* **[KB article](https://prod.cms.va.gov/help/cms-basics/archiving-and-deleting-content)**

* Where should business process documentation go? TBD based on framework for request fulfillment. 

Lovell
* 4 Lovell facilities not in VAST, likely added directly to Facility API and then available in Drupal
* System name and URL updated in Drupal, and FE sidebar nav
* CMS still updating menu machine name in Drupal (2nd week of October)

What to do about [33 "Orphaned" facilities](https://prod.cms.va.gov/admin/content?title=&type=health_care_local_facility&moderation_state=All&owner=8)
* VAMC upgrade: cross-walk Facility IDs with what's in VAST.
* CMS: Leave these here so that we can test some new comparison / audit tools. 

KB article: [How do I feature a Story on my site's homepage](https://prod.cms.va.gov/help/vamc/how-do-i-feature-a-story-on-my-sites-homepage)
* PAO newsletter candidate
* **CMS issue:** Improve VAMC System photo guidance (don't mashup facilities into the decorative photo)

Dual state / prod launches


## September 17

Archiving facilities
* CMS issue 5248 will remove the ability for PAOs to archive
* When the facility is still in VAST, PAO can set the facility to closed and put more info
* As long as its in VAST, we will have a published facility node for it, because it's in Facility API
* Once VAST has removed it, PAOs will get a support ticket in for next steps. 
* What about Mobile, Domicilary, and CLC
  * VAMC upgrade team is archiving all of them.
* Stan sent Stef and Jane the slides from yesterday's presentation to PAOs yesterday.  

Facility health service
* Reminders going out next week from VHA in PAO newsletter about how to maintain facility health services. 
* Reminder will go out in October. These may cause spikes in help desk. 
* Newsletter explains the value of it to lighthouse, google search, etc.
* Deadline will be set for updating facility health services, then CMS team will start pushing to Lighthouse. 
* CMS issue to audit VAMC facilities have, or are missing Service Location data. In the future, this report will be used to check when data was last updated.

"VA Lovell FHCC health care" will become "Lovell Federal health care"
* CMS issues 
  * System Name change and update to System Page
  * Update menu name (maybe make a new one?)
  * FE issue (CMS can handle it) to update string in sidebar nav
  * Migration - Stan to determine if these will be manually input, or if a new migration issue is needed. 
* Content entry and dual state is blocked until these are done.

Process for triaging broken links in VAMC product, **for the next month**
* #vfs-platform-builds channel
* Common broken links recently: 
  * Facility closures/archiving
  * Unpublished parents for detail pages
  * Policies pages
  * Dual state launches
  * Editor-introduced issues (bad link in an Operating Status banner) 
* Resolution time
* CMS help desk and Tier 2 will cc Stan and Lisa on the slack thread. If VAMC upgrade team is blocked on resolution, CMS team will work to resolve. 


## September 10 

Ongoing editor support processes
- Big increase, and will continue
- Continue to direct to office hours, considering adding a 3rd (Tues/Wed/Thurs)
- Dave: CMS help desk team attendance is optional, VAMC team can escalate.

Getting Dave access to Jira

Archiving mobile facilities (eg mobile facilities at Fayetteville Coastal https://github.com/department-of-veterans-affairs/va.gov-team/issues/29782)
- is this being done proactively? At least one editor requested it via help desk.
- CMS help desk: Refer  requests to archive mobile clinics to VAMC upgarde team. 

Staff profiles 
- CMS issue: menu items should not be required for staff profiles (except for Leadership staff profiles) 

Dual state and prod rollouts
- full prod rollouts in the coming weeks
  - September 15, 2021 - No roll outs
  - September 22, 2021 - Roll outs - Currently confirmed:   Philadelphia health care, Sheridan health care, Fayetteville Coastal (NC)
  - New schedule was sent, more VAMCs may be added Sept 16 for Sept 22.
- Operating status endpoints with redirects
  - Steve: these fail gracefully when the endpoint is redirected
  - New approach to removing endpoints: wait for full prod launch before creating PR to remove endpoint. 
- decommissioning dual state tugboat environments after dual state launch
  - Stan: 

Editor support
- Accessibility issues for:
  - https://prod.cms.va.gov/central-arkansas-health-care/health-services/veteran-connections-at-va-central-arkansas-health-care - Vet Center service 
  - https://prod.cms.va.gov/houston-health-care/health-services/workshops-and-classes-at-va-houston-health-care - Vet Center service
  - https://prod.cms.va.gov/pacific-islands-health-care/health-services/psychology-at-va-pacific-islands-health-care - h2s inside the accordion
- Content strategy for: https://www.va.gov/houston-health-care/programs/support-groups/

Vet Center services that were used for VAMC during a window
- Workshops and classes - Houston
- Veteran connections - Central Arkansas



## September 3

Scaffolding
- facility statuses on operating status - VAMC upgrade team will connect Operating Status for the remaining 10 or so systems that do not have these connections. Jane to send a list.  

CMS changes
- Archiving certain content types only by content admin.
- Deleting content only by admin. We will make this more granular later. 

Google is crawling/indexing some dual state sites despite Robots.txt
- Steve will investigate the robots.txt no-index no-follow settings, which should pre-empt sitemap.xml

Editor training 
- live Drupal training for end of September for PAOs? 
- dates: End of September, X slots available, first-come-first-served. 
- Dave: we need to be careful about not setting expectations that these will be available on a regular basis.
- Jane: people who learn better in live training can self-select. And make it very targetted by topic, most problematic issues. 
- Lisa: That's similar to what we're doing on Thursdays. Yesterday there were _80_ people.
- Dave: The risk that people won't do training because "live training is coming" may be too great... let's stick to the targetted Thursday sessions by Lisa and Stan.   

Ongoing editor support processes
- 

Dual state and prod rollouts
- full prod rollouts in the coming weeks
- decommissioning dual state tugboat environments after dual state launch

## August 27, 2021

Full product launches
- remove endpoints for 9/1: durham, central iowa, hampton, fayetteville arkansas [6185](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6185)

Guidance / editor support
- spike in new users due to VHA email reminder to complete training
  - VISN 17, 20 now engaged
  - after Labor Day every VISN will have been engaged in regards to training
- ask folks not to copy the helpdesk on email communications
  - if someone sends a direct email to someone, best practice is to forward helpdesk to create the issue in the system
- new CMS helpdesk manager onboarding now
- any issues with VISN 19 having 4 folks with access? (specifically Jason Strickland)
  - Dave ok with how they're managing

Soft content retirement protocol
- when new content is currently created it will automatically archive the old one and move it so that the new one gets the right alias
- CMS can't release as is because it would replace with a non-page
- CMS will only apply to policy pages and will loop in VAMC Upgrade when this occurs
- VAMC almost done with scaffolding of sites

Limit banner display
- currently a disconnect between CMS and FE that's causing the checkbox to limit banner to homepage may be inverted
- "InheretanceSubPages = False" not behaving as expected ("Show on all pages")
- runbook may need to be tweaked specifically for the "this page isn't the real one" banner
- next dual-state launches on Tues, 8/31
- Dave deciding what to change (FE or BE)
- How could we make the rebuild process most efficient once we land on fix? (between CMS and Facilities)
- Possibly change the label in the CMS, not necessarily the default value


## August 20

Incoming changes to VAMC product 
- 3 new top task content types, ignore for now. 
- staff profile selector widgets improvements

Guidance / editor support
- photo guidance 

Full product launches
- removed endpoints Aug 31: durham, central iowa, iowa city, hampton, fayetteville arkansas 

## August 13

* Schedule for removing endpoints for full prod launches
  * Hudson Valley going next week. 
* Staff Profile - Multiple Systems (Within one VISN/or not?)
  * as a principle, only one staff profile
  * For caregivers 
    * Facilities team will eventually be removing individual URLs 
    * CMS team: how to handle the phone number problem, which needs to be structured anyway.  
  * For leadership
    * Chandra Lake (for example), leadership at 3 VISNs
    * their URL and breadcrumb will show their "main" VAMC system  
* Photos guidance in the absence of guardrails - min 1000px width?  
  * Stories - landscape (displayed at 2:1 on va.gov, 3:2 on facebook/twitter on VAMC homepage), minimum width 1000px?
  * Facilities - portrait (displayed at 3:2 in most places)
  * Staff profiles - portrait (displayed as circle in some cases, 2:3 portrait) 
  * VAMC system photo - portrait (displayed at 3:2)
  * News releases - needs more investigation. 
 
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

[See archive from 2020 and Q1/Q2 2021](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/product-team-weekly-syncs/vamc-upgrade-archive.md)
