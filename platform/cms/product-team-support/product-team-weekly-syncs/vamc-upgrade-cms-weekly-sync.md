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

## Friday May 7
* Help desk triage
* Policies page runbook [#5053](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5053)
  * No re-launching existing Policies pages until VHA comms go out, with a link to training
  * Watching out for broken links in th 
* CMS Sprint 32
  * Facility services migration 
  * VAMC 10 and 15 scaffolding 
* When facility is removed in VAST/deleted, how do we remove facility from CMS?
  * Example:  Elizabeth VA Clinic in (Elizabeth, NJ) VA New Jersey health care (VISN 2)


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





