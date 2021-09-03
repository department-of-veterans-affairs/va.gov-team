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

## September 10 

Ongoing editor support processes

Dual state and prod rollouts
- full prod rollouts in the coming weeks
- decommissioning dual state tugboat environments after dual state launch

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
