# Weekly sync: Lighthouse / CMS

<details><summary>About this meeting</summary>

- Mondays 4-4:45pm ET, https://us06web.zoom.us/j/83857365234?pwd=aGFvZUx4d0FWaGpDdnBxaTg0emN2QT09
- Meeting owner: Jill Adams
- Facilitator: Kamari Patrick
- Standing agenda: 
  - Migrations
    - From VAST
    - To Lighthouse
  - Retiring VBA Facilities db, Making CMS source of truth
- Regular participants: 
  - Facilities Team: Dave Conlon (PO), Michelle Middaugh (new PO 4/24/23), Kamari Patrick (PM), Jill Adams (DM), Steve Wirt & Christian Burk (CMS Engineers), Ryan Kock (FE engineer)
  - Lighthouse: James Costa (PO), Brendan Winn (PM), Dana Harris, Joseph Justice, Adam ?

</details>

## MEETING NOTES MOVING
To [Lighthouse/CMS Sync Notes (Google doc)](https://docs.google.com/document/d/1Esq3zdNulcbe84xeJwm6O5tu7gVbgvFzWObyfbkKDjA/edit?usp=sharing)

## Monday, April 24, 2023
### Standing topics

**LH synthetic data + testable end points**
* Nothing new from dev side (Adam). Still internal to work out path forward.
* 4/17 Action item to test viable data: still in progress.


**Make CMS source of truth for for Vet Centers & VAMC-related facilities** 
* Does not yet apply to VBA / NCA facilities
* Facilities team will provide the greenlight to Lighthouse when functionality is ready to test.
  * Old PR for this work exists & needs to be refreshed / verified.
  * **Action item:** Steve to work with Adam on testing when Fac work is ready. ~early May timing (Sprint 83), we think.
* Adam has verified that Lighthouse is implemented to add new field to parser and persist to internal cache. Not yet tied into reload process, which will wait until test data is in and verified. For now, will still come from the manual CSV.
* In terms of how frequently data is reloaded, goal is to minimize the length of time in which a Veteran could be getting a 404. 
  * Steve’s expectation: Drupal save will push the URL to Lighthouse. We need to verify which way data goes (push vs. pull) and any time lag.  
  * **Future action item:** Runbooks will need to be updated with final results re: the Lighthouse delay overnight vs. URL being generated, to be explicit with timing / expectations.

**Open Data Model Needs:**
* WIP in current sprint ending 4/25. 
* 3 fields that are not exactly booleans: `field_walk_ins_accepted`, `field_referral_required`, `field_online_scheduling_available`
  * Data structure = `Yes`, `No`, `Unspecified`, as workaround to unblock Editors who may not know definitively whether yes/no. Since the option exists, it's used for many VAMCs. 
  * Lighthouse expects a boolean value. CMS sends `Unspecified` as an empty string. Lighthouse parser is stripping NULL values, so empty string gets removed, and Lighthouse doesn’t know the difference between NULL vs. Unspecified vs. missing data. 
  * Options to mitigate: 
    1. Enforce Editors update the data to Yes/No. 
      * Per DaveC, not a viable option with any sort of reasonable response time.
    2. We could remove the Unspecified option, which would force Editors to update the value on next save. 
      * **Decision**: DaveC: We will not prioritize removing this option currently. 
    3. Update `Unspecified` to send as `No` or FALSE.
      * **Decision:** Dana Harris: It's too risky to modify the meaning of the data. We will not go this route.
    4. Update the Lighthouse parser to handle empty strings.
      * **Action item:** Adam to verify whether the parser can be updated to handle empty strings
    5. CMS update to push `Unspecified` through as an actual string, rather than N/A / empty being sent today.
      * We'll pursue this if parser update doesn't work out.

**Data into lower environment** 
* Steve is working on Services getting added to push, and Lighthouse working to read the format of the new services. 
* Blocked by Open Data Model work above

**Mental Health Numbers:**
* Goal: determine a primary mental health phone number per mental health service that will be sent to Lighthouse at the top Facility level
Next steps: 
Facilities team talking to office mental health 
First action item for new VA PO Michelle Middaugh; start date is today, currently in onboarding 
Facilities enhancement for CMS: as an editor, signify which phone number in my mental health facility service is the mental health phone of record for my facility.

**CAPS (Community Access Point Sites): post-V1 effort**
* No updates to previously proposed schema. Adam & co can verify when implementation begins.
* Endpoints / call patterns: Endpoints will update. Next steps will come as we near v1 launch. Kamari can flag to request mock endpoints if needed meantime.


**Articles documentation for editors after v1 goes live:** 
* Documentation has been iterating / progressing.
* Not complete but making progress in a shared document.

### One-off topic: 
Michelle ramp up – add as ongoing topic starting with 5/1 meeting



## Monday, April 17, 2023
### Standing topics

**LH synthetic data + testable end points**
* Make sandbox data synthetic 
* Action item for lighthouse to make sure testing viable data is still supported 

**Make CMS source of truth for facility URLs** 
* Lighthouse has the structure to ingest the data 
* Lighthouse team will give the green light 


**NCA data model card**
* Pull from 2 data sources (XML and table in CDW [same naming pattern as VBA])
  * 1st determine if facilities exist THEN XML (this may be reversed in the future)
  * Action items: lighthouse team add links in slack 


**Open Data Model Needs:**
* Haven’t enacted model yet, timeline?
  * Kamari will look for existing card
  * Look to put this into Sprint 82


**Data into lower environment** 
* Blocked by Open data model needs. Will be a v1 blocker.


**Mental Health Numbers:**
* Lighthouse can only accommodate a single mental health number
* Facilities team to find a way to send a single number to the top/Facility level
  * VHA Digital Media: Validating numbers for first pass 
  * Office of mental health contact: Prior to the mail group being created Elena was main POC. More often than she's the one responding still while utilizing the mailgroup for content updates regarding Mental Health numbers.
    * VHA OMNHSP MH Facility Locator
    * Email: mhfacilitylocator@va.gov
    * Main POC: Elena Cherkasova
    * Email: Elena.Cherkasova@va.gov
    * cc Branden in these conversations 


**UX follow up on mural** 
* Understand the why behind the decisions 
* Facility health services shows front end layout 
  * This was an analysis of the data as presented by VISN 
  * Where is this service located within a VAMC?
  * Research in va.gov repo
  * Are service modalities additional service locations OR within existing service locations
* Topic closed out.


**CAPS (Community Access Point Sites):**
* No update, still post-v1

**Articles documentation for editors after v1 goes live:** 
* Next step discuss with Jenny HL, documentation will live where editors will go
* Include James Costa and Branden Winn in the convo cc Joshua Jennings 
* Iteratively improve
* A concise plan: when can we say that the editor updated details is good enough
  * Lives on CMS article pages somewhere 



## Monday, April 10, 2023

### Standing topics
**Open Data Model Needs:**
* update data model and send dummy payload 
* Confirm CMS can push data into lower environment 

**Mental Health Numbers:**
* Kamari to talk to VHA Digital Media about potential changes needed
* Need to discuss how mental health numbers get to Lighthouse in general 

**Data into lower environment** 
* Lighthouse sandbox env. moving away from prod data - data needs to be production like, should be apparent that it's synthetic but NOT prod data) * (discuss when Dave C. + James is present) 
* Lower env. all point to sandbox, makes it difficult to test things because the data is so out of date 
* Need to test with data that is not synthetic 
* Maybe exposing another env. like staging 

**UX follow up on mural** 
* A lot of context lives with Dave C.; we can use a future meeting to do this
* Trying to understand what is informing these decisions to inform how data is being presented  

**CAPS (Community Access Point Sites):**
* post v1 effort 
* Agreeing on X date that facilities team and lighthouse will discuss schema 
* Run through everything and make sure it make sense 
* Can start before v1 goes live (after confirmation on mental health numbers we can start this) 

**Articles documentation for editors after v1 goes live:** 
* Joshua Jennings to send existing documentation 
https://lighthouseva.slack.com/files/UD6M316N5/F04JFSE6M7D/lh_cms_documentation_notes.docx
* We can start on this now 


## Monday, March 27, 2023

Standing Topics: 
* where are you keeping this number? Tuesday morning we may have an answer

* Open Data Model Needs:
  * update data model and send dummy payload 
  * get data into lower environment (should be apparent that it's synthetic but NOT prod data) (discuss when James is present) 
  * UX follow up on mural (3 weeks from now in this meeting)


* CAPS (Community Access Point Sites):
  * post v1 effort 

* Mental Health Numbers: Kamari to talk to VHA Digital Media about potential changes needed

* Articles documentation for editors after v1 goes live: 
  * make VHA digital media
  * Joshua Jennings to send existing documentation 

* VBA Services Data Model: no update this week 

One Off Topics
* Joshua Jennings moving out of PM position - Branden Winn 
* Add Dana Harris and Branden Winn


## Monday, March 20, 2023
* Open Data Model Needs:
  * Need to agree on what we (CMS) are sending and what lighthouse is accpeting 
  * After this is complete we can push a sample data set 


* Mental Health Numbers
  * This topic is still open, currently only show one phone number 
  * Need to confirm legislation to confirm need to show multiple phone numbers at top level AND/OR if a primary number needs to be identified 
  * Propsed is one main number at the top level and the service level has the other multiple phone numbers 

## Monday, March 13, 2023
* Topics
  * Data Model Changes 
    * (Jay is out, we will revist in our next session, extend current session to an hour in order to work through the data model, invite Steve Wirt)
  * Share historical decisions made in regards to UX 
    * (data, research studies informing current taxonomy design)(content model created by Dave C.)
  * Need to circle back on mental health 
    * get a knowledge dump from Jay to Christian, Dave C. and Steve Wirt (all of the phone numbers were captured, issue now is that there are multiple  phone numbers, tracking the legislation that requires that per facility)(multiple phone numbers requires a structural change)
  


## Monday, March 6, 2023
* Today's topic - follow up on previous discussion around data model changes
* Review action items/things from previous meeting
  * Editors can remove locations, but not the last one, there has to be at least one location
  * When a service in a facility is split out, discussed adding sub name, Lighthouse needs the additional context
    *   Should every service delivery location have a title?
    *   What if they don't supply a title?  Should we create one?
    *   "Office name" might be the new field to add
    *   Add this to the PR as this should be the last item/change
    *   Jay to make the change and add to PR for review

## Wednesday, March 1, 2023
* Review action items from last meeting and other updates
  * #10869 previously blocked, currently needs refinement, looking at being included next sprint
  * Joshua sent question to Jay via slack
  * Jay's last day currently scheduled for March 14 
  * Published URL updates
* Today's topic - proposed data model changes
  * Standard structure for hours of operation?
    *  In Lighthouse, currently come from VAST
    *  Is this question specific for VHA?  Yes
    *  Lighthouse will not manipulate hours of operation will persist what is in the CMS
    *  Is there a character limit for that field?  Not currently, could add one. 
  * Phone numbers
    * FE - appointments section with 2 numbers, assuming there are separate numbers for each section
    * Facilities uses 4 types of number types
    * Request - each service delivery location include the payload name 
  * Default hours and location for each service - can be overrided
  * Can an editor delete service locations?  Seeing an issue with Richmond Hospital - none of their services have a location
    *  Jay will review and verify  


## Wednesday, Februrary 15, 2023
* #11079 status - cannot find the ticket (perhaps this is the wrong ticket number)
  * Dotti to find ticket and prioritize
* Joshua to send list of questions regarding new service data to Jay
* Jay to look for examples of a VAMC facility health service that has multiple locations and share with Joshua
  * Pittsburgh is an example with more than one clinic being under a service
  * How do we want to prioritize?
* Lighthouse has been in a code freeze - in the coming weeks can revist the topic of CMS pushing data to Lighthouse.  Discuss in our next meeting.
  * How would Lighthouse like to proceed with content model updates?
    * Lock in a date to focus on this topic in an upcoming meeting
* If Facilities has more changes should we add them to the existing PR
  *  If something new in the next week, add to existing PR.  After that, send to Lighthouse directly. 
* Jay will be leaving this project in early March. 

## Monday, Februrary 6, 2023
* Facilities are saying they don't provide urgent care - Veteran satisfaction with appointment wait times at this location
  * There is a statistic for Urgent care appointments that is causing confusion (it means getting care urgently)
  * Dotti will prioritize the ticket for this (#11079)
* Structure of new service data 
  * 2 appointment phone fields is one example - not sure the difference?
  * Joshua will send a list of questions to Jay
* v1 - is that a new endpoint?
  * Can continue to use the existing endpoint 
  * Would be good to move to v1, but not required

## Monday, December 12, 2022 
* v1 status check
  * About to lift code freeze
  * Expanding database to address latency, considering putting in internal metrics to detect in the future
  * Once code freeze is lifted (targeting this week) hopes to push through pipeline, 
    * Step 1 - LH tells Facilites to push data - Fac team would refresh PR environment, 
      Ie right now we only push Covid status.. we open that up and push to staging first, LH then verifies 
      https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4769
      Facilites team - David, Jay, CHristian - assess issues that have waiting in the wings .
    * What else is necessary to get v1 to go live (3 proposals to be discussed)  
  * 4 or 5 staged groupings of code changes are waiting to go through, once the first one is pushed, have to work with Facilites team to flip the switch to push all the data, LH can handle the date, 
  * Fac team has all data staged, ready to be pushed
    * Timing-wise: If not this week, then next year
* Discuss CAPS payload proposal https://dsva.slack.com/archives/C02BTJTDFTN/p1664391222736709
  * Can't discuss with Adam absent - push to 19th
* Erroneous CLOSE status, where'd it come from?
  * Swirt confirmed it was never CLOSED in CMS https://dsva.slack.com/archives/C02BTJTDFTN/p1669743015670409 
* KBs to David, not addressed yet
* Mental Health - Started discussing and wanted to know next stesps
  * dive further what we want that to look like? What is SOT
  * VHADM has responded with explicit legislation citation - David fwd'd to James Costa 
* Caregive Support Data - investigated internally hosted data file vs CMS data - distinct pattern of differences - is there an issue disinguishing between system data and facility data.
  * Discuss with Dave C? Do we need JHL and Caregiver Support team members? AI>>DS bring to Dave C
  *Agree upon SOT

## Monday, November 28, 2022 
* v1 status check
  * Joshua - think we've identifed cauuse of latency, working on final post mortem notes, appears to be overall volume increase.
  * Have a fix in, API has been stable for several weeks
  * Working to identify addtional monitoring
  * Ready to start making changes - have 4 or 5 branches ready to add
  * Once branches are merged over next few weeks, looking at Q1 for v1 roll out  
* Next week: Discuss CAPS payload proposal https://dsva.slack.com/archives/C02BTJTDFTN/p1664391222736709
* Mental health phone numbers
  * DS pursuing from J's latest report  
  * Question is out: _What is the legal requirement if any?_
* ATC data for Specialty Care Urgent vs Primary Care Urgent vs Urgent care??  [slack thread](https://dsva.slack.com/archives/CJ162GDDJ/p1664207051125879)
  * Seems to be a confusing UI text label issue 
* KB Articles for support AI>>Joshua to provide 1st draft
  * Joshua provided, DS to review for next week's meeting, chat in Slack as necessary  
* Support Country Code -> DS to move to Q1 
  * Joshua put out request for some Country code to be added  
 

## Monday, November 21, 2022 
_No Meeting_


## Monday, November 14, 2022 
* v1 status check
  * Foucsed on latency investigation, will have some documentation, can provide status, what the issue was, no solidified date for when we can take the next step
  * When unblocked, will need to re-sync timelines
  * Two categories:
    * Several issues are complete, in holding pattern, could be ready to go once we assess any changes of the landscape
    * Other items require discussion - 3 Slack threads, content model changes 
      * Discuss CAPS payload proposal https://dsva.slack.com/archives/C02BTJTDFTN/p1664391222736709 <- waiting to be unblocked 
* Stale Vet Center data - LH will manage, no Facilities action SORTED/CONFIMRED - staged, ready when unblocked
  * Long term, intent will be for CMS to own the canonical URL, and the flip of the switch - facility page will be replaced by detail page  - for all facilities 
  * Will not host the URL file  
  * Post v1? with v1? 
  * Had a history of flawed/broken URLs - LH team will still want to validate URLs 
* Mental health phone numbers
  * In slack Excel sheet
  * Archived items remvoed, and removed any item where LH and CMS number was the only nubmer we had and was identical
  * Now we have a list of services where the editor has added an additional number
  * 2nd tab - unfiltered list 
  * AI>>DS to bring to Dave C  
* Support Country Code
* KB Articles for support AI>>Joshua to provide 1st draft


## Monday, November 7, 2022 
_NO MEETING _

## Monday, October 31, 2022 :jack_o_lantern:
_NO MEETING _


## Monday, October 24, 2022
* v1 status check
   * No change, still on code freeze, investagting latency, what are the criteria to live the freeze?   
   * What caused latency, how to set up safeguards, where to generate alerst 
   * After that we should be able to push through v1 changes, batches are waiting, but will take some cycles, can't push all at once
   * Plan is to push a change, test/asess for a few days, push next change
* URL Updates - Staleness applies to Vet Centers 
  * THere are 3 new sites that did not have URLs in API - making ~30 total
  * Randi notifies that new URLs are ready - been able to get last 4 sets into API 
  * Are we properly sending people to new Vet Center facility pages?
  * What is the logic for when FL returns a Facility page vs a Detail page 
  * https://dsva.slack.com/archives/C0FQSS30V/p1666118561808429
  * Detail page still exists - Veterans will still get the detail page. 
* Sandbox data 
  * Sandbox data will be more synthetic
  * 1. Sandbox data as Facilities reads from env
  * 2. What environment - that is not prod - does Facilities use to push?
  * Facilities can push to an existing sandbox -  need to continue conversation around expanding this? 
  * We do some of this on occasion - should this be default behavior, should there be another env? 
  * Make sure that any changes CMS is making - we need and env to assure that any changes to push - are not just done in prod 
* Supporting a country code - email sent, AI>> Joshua to check 
* KB articles in support of v1 AI>> Joshua to author draft send to David S 
* Mental health phone numbers
  * https://dsva.slack.com/archives/C02BTJTDFTN/p1665092143341629
  * AI>> Jay to filter existing list, remove anything where the results are fields migrated in directly, only want to see the 'non migrated' fields 
  * AI>> DS to create ticket 
    * https://github.com/department-of-veterans-affairs/va.gov-cms/issues/11338
  * THEN, Is there a nuance to the delta , for example is one  data source giving and extenstion the other doesn't
* Once v1 is ready, are we ready to start pushing CAPs - where did we agree on payload - LH team still has to set up new endpoint (simliar to standard CMS pushes), set up data structure to inject whatever we agree upon, then assure that everything is working
  * LOE - likely be a couple sprints
  * What cycles can move while in code freeze? 
  * Is there an optty in next couple mondays to figure out payload? come to concesus
  * Jay proposed 3 payload discusssions in Slack 
    * CAPS https://dsva.slack.com/archives/C02BTJTDFTN/p1664391222736709
    * Cover other 2 if time allows 
    * https://dsva.slack.com/archives/C02BTJTDFTN/p1664375519019619
    * https://dsva.slack.com/archives/C02BTJTDFTN/p1664383503541379 


## Monday, October 17, 2022
Attendees: Roger E, David S, Jay D, Joseph J, Adam. Joshua J
* v1 status check
  * Still holding pattern
  * Were able to remediate the escalated issue "MIM" -> stopped the produciton issue, currently stable.  Still investigating why this occured in the first place.  Have yet to resolve/detrmine underlying issue. 
* URL Updates - Staleness is only applied to Vet Centers 
  * Code freeze causes inablity to get in latest URL updates (from Randi?) probably about 30 va.gov URLs that are pointed to old sites rather than new fancy ones.
  * What woudl it take to find a workaround? 
  * Either way this needs to be first issue addressed 
  * It's unclear on who is receiving a URL from LH? or where that is exposed? Need to have a converstaion with Max - waht pain is this pain causing today?
  * DS>>AI Post to Slack on this issue 
  * Redircts from Teamsite is a manual process 
* DS>> AI Add Max to LH meeting 
* Sandbox data - James and Dave C had a discussion
  * No updates this past week
  * No mechanism that can replicate that data into Sandbox. CMS team to map out interactions. Customer and Supplier of data. As a data owner who pushes data/content to you we are not creating, we want to get ahead of the issue. 
  * Need to have these conversation, but due to the issues they are seeing have not made any traction yet.
* Status of v1 blocked issues: https://dsva.slack.com/archives/C02BTJTDFTN/p1663821995564509
  * No changes  
* KB/documentation for editors in support of v1
  * Josh to provide 1st draft 
  * Dave C - Concerned about VAST (they are supposed to get things in early because there are things that have to use that data). Going that route for service information is concerning. Is this related to ATC - one of the times brought up was relatd to VAST - this is not Service Data.. perhaps intersted in hosting ATC data ? Actively going back on discuussions on how data flow is looking, want to take next steps to set up meetings to get ATC, LH, Facilites aligned .
* Supporting country code 
   * Any update from Josh/James sync?
   * Few meetings held. Dicussed with VAST and they didn't want to go this route. NCA - LH will be looking to incorporate Nation Cemetary, not for state or tribal cemetaries. 
   * BISL meeting? On todo list
   * Josh sent an email. JOSH>>AI Needs to respond 
*  Mental health phone numbers
   * Jay posted spreadsheet - what's the next step? 
   * Report of sites that have more than one phone number. Did this get checked with the numbers from LH? LH has provided the data and we need to crosscheck the LH vs CMS data. Additional Phone Numbers found (multiple) or numbers that are not accounted for need to be highlighted. 
   * If all of the numbers are there (at facility and service level) looking to replace the SOT with CMS.
   * DS>>AI Follow up- find Slack thread? Emails from Elena? Elena is 100% comfortable letting CMS be SoT  
   * https://dsva.slack.com/archives/C02BTJTDFTN/p1665092143341629

## Monday, October 3, 2022
* v1 status check
  * Have not seen the issue since last Thursday. If issue is not seen in prod by end of day Tues the code freeze MAY be lifted. Still trying to identify the root cause.
  * 

* Sandbox data - James and Dave C had a discussion
  * No mechanism that can replicate that data into Sandbox. CMS team to map out interactions. Customer and Supplier of data. As a data owner who pushes data/content to you we are not creating, we want to get ahead of the issue. 
  * Need to have these conversation, but due to the issues they are seeing have not made any traction yet.
* Jay - status of v1 blocked issues: https://dsva.slack.com/archives/C02BTJTDFTN/p1663821995564509
  * Started SLACK threads on 3 tickets. Distilled it down and started conversation for when we can get staarted on them. 
* David S met with Josh and Joe - notes below 
  * Talk to some editors, describe the problem, how would an editor fix this issue. Coordinate with JHL to update facilities. David is looking into this. Will have to see where he is on this when he gets back.
  * Dave C - Concerned about VAST (they are supposed to get things in early because there are things that have to use that data). Going that route for service information is concerning. 
* Supporting country code 
   * Any update from Josh/James sync?
   * Few meetings held. Dicussed with VAST and they didn't want to go this route. NCA - LH will be looking to incorporate Nation Cemetary, not for state or tribal cemetaries. 
   * BISL meeting? On todo list
*  Mental health phone numbers
   * Report of sites that have more than one phone number. Did this get checked with the numbers from LH? LH has provided the data and we need to crosscheck the LH vs CMS data. Additional Phone Numbers found (multiple) or numbers that are not accounted for need to be highlighted. 
   * If all of the numbers are there (at facility and service level) looking to replace the SOT with CMS.



## Monday, September 26, 2022
* v1 status check
  * Internal latency on one of the endpoints impacting some consumers of data. Occurs between 2:50 and 3:00 ET Mon-Thur
  * Escalated - Major Incident Management Team within the VA. Currently LH is in a code freeze until this is figured out.
  * This will block LH from ingesting additional data from CMS
  * How much pain would it cause to pause CMS updating FAPI for a period of time?
  * Jay - looks like maybe a 3-5 pt ticket to add in to our work

* Sandbox data - James and Dave C had a discussion
* Jay - status of v1 blocked issues: https://dsva.slack.com/archives/C02BTJTDFTN/p1663821995564509
* David S met with Josh and Joe - notes below 
  * There is a lot of prep/change managment work around how we will need to prep editors
  * Where do we expect an editor to look for answers/calif when they see a descrepancy
  * To what extent do we refactor existing KBs?  
* Supporting country code 
   * Any update from Josh/James sync?
*  Mental health phone numbers
   * We didnt get to this last week  

## Wed September 21, 2022
### Documenation / KB meeting - 
* DS>> AI - Review problem summary/description doc from Josh
* LH manages taxonomy ID differences by internally mapping
* Current  mapping, Internal LH Service ID maps to  CMS display name and can map another value to ATC display name 
 * For instance, If we wanted to break Cardiology in to Cardiololy Level 1 /  Cardiololy Level 2, Would requrie creating a new ID and mapping to this new broken out service 
 * For example Mental Health
   * ATC has 3 services mapped to single Mental Health ID - LH is doing the mapping arrangement 
   * That mapping needs to be coordinated across all sources: CMS, ATC
 * David shared links of many current KBs in the meeting agenda
 * From an editor's perspective, if they saw something odd or believed there was a mistake with service info, where would they look (would they search the KB?)
 * Even in advance of that, how to educate VAMC editors to prepare for v1
 * 
                        

## Monday, September 19, 2022
* v1 deploy
  * Service ID mapping?
  * Corrected deficiency - LH can now accept all new services
  * LH corrected other small isues, temporary 'wipe out' 
  * v1 been on delay - lost some cycles 
  * Once sandbox data is pushed, do some vetting, then promote to produciton 
  * Still a few weeks out from going live 
* Sync CMS data to sandbox
  * When v1 goes live, must have larger set to meet needs of all consumers 
  * Joshua -  architect call this week with LH team, Steve, Jay AI: Joshua to coordinate 
  * We do know we want a snapshot view of all production data into lower environments 
  * When Facilites is ready - can we push this one-time snapshot to all lower env?
  * Local test envs are configured to push to sandbos, Jay can push from his local test - will confirm with Steve
  * Jay is OOTO Thu Fri 
  * AI: Jay - circle back, don't think it's a bit lift 
  * Johsua: Sandbox rate limit is being raised to match production - Joshua to confirm 
* Review Facilities issues blocked by v1 - where are we ready to pick up?
  * AI: DS - David and Jay to cowork  aim for Wed - debrief on each issue 
  * LH - anything from LH team they are waiting on? Overall it's Facilities waiting on LH 
  * CAPS lat/long -
  * Then ATC data, they are intersted in CMS data - look into discussing
    * LH, ATC, CMS, VHADM  - JHL was not a part  Dave C and JHL are co-owners of service taxonomy 
    * One more meetingw with ATC, then Josh/ATC will pull in Dave C and  JHL - Expectation is ATC will reach out 
* Supporting country code (Germany, Korea)
  * VAST will not modify their records 
  * Josh - very important sooner than later
  * Does this have to be part of the v1 release 
  * Review slack thread - 
  * Regarding non-US facilites - for VHA it's Manilla 
  * VBA - Dave C added country  code 
  * What facilites will break the model? Manilla?  Can we manually tweak? a one-off facility coming out of VAST?
  * Current behavior - country code is being placed into State field
    * Adam - Manilla is the only site in VAST that is technically out of the country - there are serveral non-US state-located 
    * Dave C owns VBA datatbase - we can provide data however LH needs it for VBA
    * Confirm - is the only non-supported outlier Manilla?  
        * Territories have a 2 character USPS code - in compliance with 
        * Update documenation to describe field as _US State or Territory_
    * What about NCA faclities - Adam - we can do an audit
  * Josh to sync with James - Dave C has meeting Tues afternoon 
    *  Is it documentation? or modifying structure? 
* Mental Health
  * LH phone numbers compared with CDW   
* CMS article documentation
  * Meeting Tues 20


## Monday, September 12, 2022

* v1 deploy
  * Lighthouse has deployed the updates necessary to be able to receive non-covid health services to Sandbox.
  * Jay sent payload on Friday, LH team needs to do some adjustment around the key id value
  * Slack convo https://dsva.slack.com/archives/C02BTJTDFTN/p1662586203419699
  * Sanity check - sending a service on Friday - revealed that the service id name isn't handled, LH made changes locally, once that is out we will be able to test again
  * Jay sent 4 services, only one got ingested 
    * Can LH solve it on their end - start here, Josh hoping this will be implemented tomorrow  _"Audiology and Speech" -> "audiology"_
    * That ID is the unique key
    * Jay: Does that identifier map the service to the other sources of other systems
    * All sources are mapped to ServiceID - LH maps to internal ID 
    * Display name vs key value for a service 
    * Aiming for tomorrow-ish to retest 
    * (If not, will ask Facility team to change )
  * If all goes well, ready to send to production. 
  * How much lead time to push to sandbox? Jay will switch if necessary but can hop on it quickly.
  * How long do we need for production?  Facilities has a modeule in Drupal - big button - "Queue Everything" - quick within 30 mins - as fast as queue processor can work through everything.
    * Confirmed no impact on content release 
* Review what Facilities team has as _BLOCKED_ https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9698
 * Jay's goal to speak intelligently and prioritize for next meeting - what's ready, what needs work  
* Sync CMS data to sandbox  
  * Slack convo https://dsva.slack.com/archives/C02BTJTDFTN/p1662738101432099
  * What problems does current LH approach create? Looks like it won't solve Facility's needs
  * Joshua - looking to have architect call this week with LH team, Steve, Jay
  * Talking about making the entire data set synthetic - what lapses does that create? How to understand more deeply?
  * Taking into account the future of Sandbox data, how it's going to live
* Mental Health
  * Dave C generate reports
    * Crosswalk ATC data and Facilities data - understand what impact might be if we start using ATC as source 
    * Delivered REAL TIME   
  * Mutliple phone numbers https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10332
    * Can LH team deliver report of Mental Health numbers in LH right now. Can crosswalk with what we have in Drupal 
    * AI: Joshua will own, Mental Health Primary from the Office of Mental Health CDW table 
* CMS article documentation
  * CM piece - discuss with JHL - commmunicating impact of v1
  * LH can begin documenting the reason why there are differences 
  * Facilities team/CMS team take the  lead on working with editors on how we explain
  * Opportunity here to discuss how to leverage this into communication with the Field in general (CMO's at each faclity) this is important and here's why
  * David to get current idea of KB's, set up meeting with LH Josh and Joe - in context of rough draft of what LH would author, and emphisising the WHY.

## Monday, August 29, 2022

* Sync CMS data to sandbox  
 * Gathering full plan - sandbox data is a representation of production - the only caveat is that we dont have CMS data in Sandbox.. should that data be complete match?
 * We will deprecate some of that - something like we will have 75%    
 * Encourage folks to transition off sandbox
   * Many consumers stay on sandbox and don't switch to production . we want to encourage that.
   * For CMS/FL needs, could look at production for now - at least for short term.
* v1 timeline check
   * Nearing code completion - within a few weeks of go-live
   * Josh sync with Adam - when to flip the switch for CMS - later this week? or early next week.
   * Will this occur in next two weeks?  YES! Definitely
   * Ideally towards the end of this week.   
   * Next wed? Plan on merging? Latter half of next week. Sep 7th? 
   * Coordinate when/how to _flip the switch_
   * What does validation look like after switch? LH will review full data push 
   * Jay touch base with Steve - any thoughts 
   * After switch flip, is there a push per facility? Jay - I think we have to resave them? Jay confirm with Swirt 
   * Adam & Jay perform small test pre-flip - point to sandbox version of LH API? 
   * Is Faciliies ready - Right now: Dont push anything except Covid 19 -> Push everything but (MH + Caregiver)
     * CLose to PR out today 8/29 
* Mental Health 
  * Crosswalk ATC data and Facilities data 
  * Waiting for Facility ID in reports 
  * Dave C generates report
  * Multiple phone numbers - confirmed Sprint 66 
* VAST - add support for custom hours within CMS
  * How would we define "Custom Hours"?
  * Take hours from VAST operational_hours_special_instructions 
  * At one point does CMS get migration from VAST, then send it to Facilites - should the flow be some data gets routed through CMS first before sending to LH? 
  * Dave C to have convo with James and Dave M - 
* CARMA meeting coming up.  Caregiver support list of facilities.  
  * Dave C prefers Jenny take the lead  - poke at trying to resolve
  * Dave C will assure JHL has email 
  * Dave C spoke to JHL, JHL to take up with comms person "We dont care who owns it as long as freshest source possible"
  * If JHL needs anything from LH, happy to help 
* CMS article documentation
  * As we approach v1 - how to document in CMS article
  * Add info around ATC historical data, how it impacts editors to reflect change
  * Facilty X has a service in both ATC and CMS, if editors deletes from CMS it will remain in ATC until? ?? 
  * The reason the data is still populating is because it exists in historical data set
  * Where is the best place to add these details? 
  * What it the logical place to denote this? 
  * WHo owns articles? CMS owns them ? 
  * Where will an editor see the changes, how do we explain to editor? Until FL moves, this is not visible to an editor 
  * What is the question the editor is going to ask?  WHy is FL showing a service not listed in my product.
  * CM piece - discuss with JHL -  commmunicating impact of v1 
  * HOw does an editor know that their change went through? ifthey see a problem, where would an editor go?
  * LH can begin documenting the reason why there are differences 
  * Facilities team/CMS team take the  lead on working with editors on how we explain , 
  * How can we reinforce .. VHA DM, lean into memo 
  * Once v1 has rolled out, VHA comms sends reminder emial.. remember previous comm -> lean into that , you're now contriubting to Facilites ecosystem and your data will be consumed by FL and other things, take language from LH team and build it into KB
  * Facility team will let LH team know where this content will live 


## Monday, August 22, 2022

* v1 timeline check
   * End of August. (maybe early Sept)
   * Lookingn closer to early Sept - LH has some internal investigation - looking at maybe one sprint delay 
   * Coordinate when/how to _flip the switch_
   * Only one endpoint, once LH gives thumbs up, swap out logic to execute "Push everything but MH + Caregiver"
   * Is Faciliies ready - Dont push anything except Covid 19 -> Push everything but (MH + Caregiver)
     * Are we ready to execute when LH gives the thumbs up 
     * #8019 - PR is out there right now  - Jay would estimate a 3 - Jay is comfortable for a 1 day turnaroudn
     * Get to this next sprint  - update PR for sprint 66
* Mental Health 
  * Crosswalk ATC data and Facilities data - PR expected end of day
  * Multiple phone numbers - target Sprint 66 
  * Not burning - we have an existing solution in place.  treat this like smoke, no fire - may not be as high a priority as other issues 
* Drupal views, including Facility ID - EOD today 8/22
* VAST - add support for custom hours within CMS
  * Take hours from VAST operational_hours_special_instructions 
  * Define Custom Hours - CMS has the capacity to capture commnet field per day, but how does that get back to LH?
  * LH could support any number of strings - can remap - right now it's  a list    
  * CMS could send LH a flag?
  * One option would be Tuesday 9-5:30 - every other tuesday 
  * At one point does CMS get migration from VAST, then send it to Facilites? Should the flow be some data gets routed through CMS first before sending to LH? 
* CARMA meeting coming up.  Caregiver support list of facilities.  
  * Bringing up to JHL, response to email? Is the CARMA data Veteran-facing or administrative
  * A lot of those facilities are lower clinics that roll up to larger facility 
  * We should be getting data about where Veterans can go 
  * Primarily this list has been used to give to caregivers - they use the LH API to point to the facilities that support services - 
  * For the CARMA team purposes, this list is correct
  * Does it matter if a lower facility is on the list, as long as it's staffed? We're all trying to solve the same problem  - connect veteran to care at closest point to them  - we need to find out what that data is.. if it's not granular at the CARMA level, then there's an addtional hop for someone to solve.  Something we could consider - notifcations?  We get info from LH to flag a facility, THIS is where  your caregvie faciilty is, this is the only place it can be unless you talk to CARMA team - Where does the responsiblity for validating occur? Facilites team vs the CARMA - what is the mechanism for reconciliation
  * Dave C prefers Jenny take the lead  - poke at trying to resolve
  * Dave C will assure JHL has email 
We didn't get to last week:
* Sync CMS data to sandbox
   * Internal meeting ..results? 



## Monday, August 15, 2022

* v1 timeline check
   * End of August. (maybe early Sept)
   * Code Complete 8/31
   * Docs have to be aligned intenral and external - 
   * CMS articles recommendations this week - need to be published in advance
     * For example: Audiology
   * Coordinate on when to flip the switch
     * Confirm - Facilities team has everything staged, ready to send it all 
     * What needs to happen on Facilites side
     * Jay - code is in place - right now code says Only Push Covid 'short circuit'
     * Steve has PR ready to remove the 'short circuit'
     * Create/Piggyback  PR for not pusing Mental Health 
     * Longer term do we want to have a flag in CMS: "Push to lighthouse" - Admin setting 
     * Don't want to impact/break v0
   * Caregiver support thread: https://dsva.slack.com/archives/C02BTJTDFTN/p1660227230256679
     * CMS info is coming from the field, assumption is CMS data is more accurate  
     * Wait for response from CARMA team - don't want to open a can 
* Mental Health audit / Joshua 
  *  another specific service we may want to audit and account for at the v1 go-live   
  *  Is LH safe to consume from CMS? 
  *  Dave C - set up specific meeting? AI: David S set up meeting this week. 
  *  Keep mental health data where it is now, but let's make a plan, not as straightforward - how do define problem space 
  *  Current sources: CMS, CDW, we use ATC for MH service available or not, supplemnt phone numbers from OMHSP   
  *  Can we assure that CMS is not pushing any MH at go live? LH would prefer a Don't Push 
* Drupal views/reports show facility ID, place in Stretch this sprint , Jay and Dave C have a chat   
* Meeting with VAST team/admin
   * There was an open text field associated with hours, but was removed becuase of abuse
   * VAST 2.0 is in the works, no timeline
   * How to get requirements/requests to VAST team as they develop 2.0?
   * If this happhens it won't be anytimg soon, we need to solve in the short term 
     * James - wed'd be interested in holding in our API, how do we incorporate? 
   * There are 2 checkboxes for editors to indicate limited qualification around hours: Nonstandard and Administrative  
   * Rhonda brought up previous issue: operationalhoursspecialinstructions , sent email
* For v1 LH will be using CMS for source of naming conventions - Name of Service
  * Run the risk of naming mismatch
  * How to get awareness of a service name change, if CMS changes - could result in conflict - could be out of sync for hours based on timing of updates
  * Some mechanism - AI:David Work with helpdesk to create a runbook Facility Va Service Taxonomy name 
  * WHen LH reloads, anything ATC has will get mapped to CMS value - 
  * Patient Friendly Name  vs Machine Name (Service ID) - will use CMS name mapping to Service ID 
*  Office of performance analytics and integration - Update from meeting with Dave C? 
* Sync CMS data to sandbox
   * Internal meeting ..results? 
* CARMA meeting coming up.  Caregiver support list of facilities.  
      
## Monday, August 8, 2022

* v1 timeline
   * End of August. (maybe early Sept)
* In preparation for the Lighthouse migration. vets-api will in future be available via a new URL *platform-api.va.gov. . 
  * Lighthouse is actively working on moving their API Gateway out of the current AWS environment and they will assume exclusive control over the *api.va.gov URL in the near(ish) future. 
     * Confirmed: unrelated to this team
     * PPMS does come through vets API but  that move has already been moved in code.  No action required. 
Slack convo: https://dsva.slack.com/archives/C0FQSS30V/p1659488479787469
* FYI: Covid status will be retired / Timeline?
   * May need to make adjustments to operating status more_info 300 character limit.  
   * No timeline yet.  
   * May need to push a null for all facilities to wipe out the existing.
* Community Access Point/Mapbox Lat-Long update ToS
   * We have gotten the thumbs up from mapbox that we are allowed to push CAP data from CMS to Facility API. 
* Meeting scheduled with VAST admins - 8/12 - Thanks for the contact!
* ATC impact update?
   * James is leading that conversation on internal VA efforts
   * Internal questions to ATC have been answered 
   * Internal contacts are known.  Trying to get them to make changes visible to Lighthouse.
   * Office of performance analytics and integration promoting discoverablity of Access To Care. 
      * Need to leverage data to Veterans to help them make decisions.
* Sync CMS data to sandbox
   * Internal meeting tomorrow to do for the short time.  Should result in a short term solution/answer.
* CARMA meeting coming up.  Caregiver support list of facilities.  
   * Crosswalk that to CMS facilities that do/don't have "Caregiver Support" service declared in the CMS.


## Monday, August 1, 2022

* Understanding VAST's model - 
  * Priority 1 "Open every other Saturday", Longer tail facility hours vs clinical hours, 
  * VAST contact? usually just a support ticket. Any contac? More on business side. James to look up name. Leonard? Overall, what are some gaps where VAST is not meeting the needs of VHA.  Adam doesn't see other hour fields, he does see "operational hours special instructions"
* ATC modifications update
  * Stable at this time, ATC has corrected duplicate issue, all facilities are populating off current data set! YAY!
  * Have to investigate, (like mental health services, is there benefit to consuming  - rignt now we cosumg "Individual Mental Health")
  * Impact surrounding Orthopaedics - was supposed to go away, but still exists - need to get more answers, if it is going away, then need to consult other data sources 
  * Use of ATC data - James and Dave to coordinate 
* Sync CMS data to sandbox; discuss on Steve's return
  * LH internal dicussions on desired behavior
  * Historically sandbox data mirrors production
  * What's the urgency? Does it need to be production? Can it be dummy data? Does LH want test data to be owned by CMS? If it has to be production, it is undesriable to clone from produciton to sandbox 
  * The issue that surfaced this is testing FL for Covid Data because sandbox didnt have that data.Facilites team dev could do local push into environmnets
  * it would be easiest for devs to trust that sandbox data is similar to prod - allows for sufficient testing of edge cases 
  * Sample data seems to not meet the requirement
  * Fastest approach , short term, Facility team populates it, even if one time for now. Pushing is time-consuming. Not urgent, can get by now that we know the limitations.  
  * Joshua to revisit convo, it has been circulating, related to sandbox data with other teams 
  * current state; Pull data daily from CMS, CMS data only goes to prod, not to sandbox.  As a potential sol'n - pull vs push - Swirt: code that limits push (block non-VHA facilities for Lovell) wouldnt be there to limit pull
* Flagging data during migration #9848
* Blocked by V1 #8017 #4769 #4410 #4411
  * Need to be ready to receive all service data (not just a subset) - Johsua to circle back with Adam - may be close to ready - as part of v1 (not post)
  * CAPS data - post V1 - The Next Thing - new cap'n endpoint 
* Retiring VBA Facilites db
  * "1-year out"
  * Be aware of the VBA Facilities effort and regularly update in this meeting 
* Past issues
  * Mobile facilities previous research:
 https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/feature-docs/mobile-health-clinics.md
  * Sync CMS data to sandbox; discuss on Steve's return


## Monday, July 25, 2022

* Dave C on leave this week 
* ATC Changes
  * Synced up with Dave C
  * Were previously aware that ATC was making changes, but didnt reallly get advance notice
  * Had to persist stale data, while handled internal changes, mapped new names .. Service X -> Y
  * 1 Service deprecated: Orthepaedic care - will not longer get wait data 
  * Will persist snapshot data - wait times will become stale, BUT - then it seems it was removed and added back? TBD
  * Have to confirm -Is it going away?
  * ATC modfied Mental Health broken into 3 services, MH Individual, MH Group, Integrated MH services 
  * Had to map to original, and each of those have their own wait times...many to one mapping.
  * For Now: We're keeping MH Individual exclusively - 74 facilites - 
LH team to determine path here, no longer show it as available, 15 new sites have MH, will wait and see, possibly combine, what do each of these mean? Looking at different options.. Dave C aware and investigating. 
  * ATC is pulling service info data from both Vista and Cerner - for a couple facilites they are pulling from both.  Not validating on their side.. Getting duplicate payloads, which breaks LH code. We see this in Boise - Primary Care had to throw that service away - what we're aware of now
 * ATC madness impacted v1 work - still working on providing solid date 
 * Josh setting up call with ATC, James will push fwd, 1/ get more insight 2/ addressing descrepancies in production data (Orthopaedics for instance)
* Flagging data during migration - descrepancies - Jay? 9848 
  * in V1 LH is combining CMS and ATC - Dave C wants to know if a service is being pushed from CMS, and not reflected in ATC  

## Monday, July 18, 2022

* Dave C on leave next week July 25-
* Estimate of V1 ship date?
  * No solidified date yet, getting close. We have answers to all q's. Implementing last chagnes.  Data soruces, SOT, logic around moving away from ATC. other items. 
  * Still targeting an August timeframe 
  * Need answers from ATC - what's happening to data as it exists today? Hoepfully nothing major. Mapping old names to new names - don't want to risk losing data.
  * Q: Is that pertinent to v1? We mightn not have wiat times or sat scores? A: Existied as part of v0.  Ie Different wait times for group vs individual. Determining how to get these answers - underlying data is going to change - even in v0. 
  * LH Please keep us in loop - Dave C personally wants to stay in loop
* ATC Changes to v0 - monitoring - Facilites team needs to be kept in loop .. implication to FL and VAMC product
  * Notify us if any changes require support
* Lovell: CMS team will add 4 DoD facilities directly to Drupal to support Lovell. Our assumption is that these should be pushed to Facility API. 
  * Asked and answered - Not going into LH API
  * Not veteran facing facilities. . confirmed in past
* Overall SSOT truth discussions for VHA data. LH team, Jenny HL, Dave C
  * Had meeting last week. How to align data sources for near term
  * how to ultimatley make drupal the SOT 
  * Decision - if any system says they have the service, then we accept that.  Periodt. 
  * We'd like to have the ability to leverage flags/notifications to let peopple in field know when there's a descrepancy.    
  * We want to be able to detect ATC, DST are not aligned with what PAOs are enteiring into our system
  * PAO - help us align this - Let DST or ATC know this should not be an item, or add it to facility 
  * Facility team will create some type of migration flag/mnotification as part of migration workflow. CM involved as well that this process will be coming 
  * James - are we maintaining mulitple sources of truth? From Jenny - going forward we'll always need to refer to DST or ATC. 
  * Jenny had mentioned concerns aroudn trusting the field for maintaining service invo without some form of backup.. 
* Can move forward on how data is flagged during migration to address descrepancies 
* VBA is starting pre-kickoff - Goal to eliminate Sandy's db, source from Drupal
  * Greenlit: Redoing regional offices and services.  Better undersand ecosystem to create appropriate data structures . .veteran facing and more reusable
  * Figuring out the players - 
  * No longer be a flat dB 
  * To explore: What if facility is also a medical center <- Not MVP, understand problem space - agnostic to who owns facility? 
  * Docuument and create hierarchical relationship   Parent office and child office, not just admin relationship, but from a VA standpoint - We have the literaly relathionship , butis that important to vet?  We are also trakcing which facilites are co=located with VA facilities? ANticipate using forward lookup of mapbox to better identify overlap. 
  * Adam: Last time we looked at this - we could see those fields but not avaiable to us in our ETL thru BISL - reach out to BISL ask them to pull those columns 
  * CAn LH provide contacts at BISL? CM around sunsetting Sandy's dB 
  * We are currently investigating with mapbox whetehr we have the abilityh to push lat/long to LH becuase of licensing agreement.Is this a blocker? Yes,, for this and for CAPSs
* Sync CMS data to sandbox. Joshua offline discussion - wait for Steve to return?
* Mobile facilities - Dave C offline discussion - anything critical? no urgency right now. AI: David S to find research from Leyda


## Monday, July 11, 2022
* Lat/Long info for VetCenter CAPs
  * https://dsva.slack.com/archives/C02BTJTDFTN/p1656535172014689
  * LH still needs to set up endpoint - similar to other updates, seperate URL ot CAPs
  * Logic not in place yet, LH team still has work to do to address - plan for POST V1
  * Some bandwidths within a few sprints?  What's thet deadline?  As Soon As We Can Get It. 
* For awareness - starting VBA work, which will involve replacing current database with Drupal source of truth. This may be more of a driver than the CAPs.
  * Do we anticipate VBA data being daily refresh or real-time? We don't know enough yet. Pre-kickoff is happening on Thursday. No site to experiment with yet.
  * As SSOT moves to Drupal, does BISL still pull ..?  BISL will have to have some change, Right now they're pulling directy from CDW from Sandy's DB?  Does drupal write to CDW directly? What does BISL want to do?  We need to put deprecation strategy in place.
  * Need to approach this change with BISL. Sandy's "single table" db is going away, data is going to be maintained in drupal 
  * BISL = Business Intelligence Service Line
  * V1 is #1 priority, CAPS is #2 = maybe 2 or 3 sprints from now, tickets are spun up.
* SSOT
  * Dave C, Jenny HL and Dave M meeting?
  * Josh discussion with LH team?
  * ATC relaunching?
  * Email from James 
  * Joshua: Topic as a whole - We're going to set up an additional call, LH & Jenny. Needs to be time alloted for Jenny to work with editors to get data up to date. Jenny knows which VISNs to work with. For V1 intent wast to have Drupal data only, at initail launch, ATC, DST, and CMS - if any 3 say this service exists it will be reported.  ATC, DST are historical.  does not represent real time. This will have impact on editors.  If a drupal editor says "we no longer have a service" it can persist up to 30 days.  Will need documentaiton and CM - how best to edit the CMS page, but if it's one of these 19 core services it will take time.  This should be temporary.  On XX date LH will move away from ATC and it will only be CMS data and at that point it will be real time. Then responsibity moves to editor to make change. 
  * Dave: Is there a way for editors to validate DST the way they can ATC?  "I deleted a service, why is it stil there" - can we instruct, first check with ATC and notify them. They may just say "if there's no appt in 30 days it will go away"
  * Goal is to clearly identify "it's not CMS issue"
  * What can we do about DST? Is there a way for folks to determine?  Josh.. not a lot of insight. We only pull 3 services.  We can mimimize if the descrpency is on of these 3 Dentistry, Podiatry, Nutrition, - then it's DST.
  * We can provide some guidance based on the service. .if it's this service, check here. 
  * How do we empower editors, give them guidance for why it's stil showing up in FL - can also be contradictory - like Urgent Care wait times for a facility that doesnt offer Urgent care  - why is this not in service accordion 
  * Josh confirmed: Satisfaction is at facility level, wait time is at service level 
  * Re: Gillette had the issue, no urgent care but ATC is reporting it as existing and has wait time and satisfaction scores 
  * https://www.va.gov/sheridan-health-care/locations/gillette-va-clinic/
editor said:
There is a "Veteran satisfaction" section on noted web page that only seems to be on one CBOC page... it notes "Urgent Care" wait times. There is no urgent care, how can I remove that section? Thanks
* We can't get rid of ATC fully, but no longer be a source of service info, but must stil use to get wait times and sat scores 

* Service audit
  * https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9406  
* Sync CMS data to sandbox 
  * https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9400
  * Joshua - led to larger discussion, wil update us - we don't quite  know yet - have to look 
* Mobile facilites
  * Dave C - follow up offline: Email about mobile facilities, get up to speed on research we've done. 
  * James: Let's lay out among our teams before bringing any proposal.
  * DAve C to follow up
* PPMS 
  * Confirmed:  Not relevant?


## Monday, July7, 2022
*Independence Day* :fireworks:

## Monday, June 27, 2022
*Last meeting*
* Adjust facility migrations timing
  * https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9395
  * Good info shared, in works, planning on kick off CMS migration at 8am
  * LH grabs everything at 7:30am
  * SOLVED?* 
  * In backlog for now 

* Define plan to address LH facility service audit
  * https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9406 
  * https://docs.google.com/spreadsheets/d/19Gihg32Fifu3FW4y0nMIeVUUbjcXYIzsbV7-B34JzsE/edit#gid=1839316337
  * David to expand sheet to list each service 
  * https://docs.google.com/spreadsheets/d/1_qPlxUgbOfqflklFFsFeFuZVmG3SY8k0/edit#gid=1932035819

Short term, Tryiong to determine what source of truth should be used
Long term - Make CMS the source of truth
There are some concerns given the large descepancies 
Joshua will discuss, what stpes can be taken be editors.
In short term, use a combination of data, then assess: is the CMS data close enough? 

Dave C, Jenny HL, and Dave M need to get on the same page 
Josh will get on same page within Lighthouse team, then circle back with Dave C, Dave M, and Jenny 
A facility says they have a service *says where?*, but no ATC data associated with it, we have no Wait Time or Satisfaction data 
Specialty Care is no longer a category that should be reflected (it's a catch all)
ATC team is relauching on 30th/1st, New services? New endpoints? James C and Josh to investigate with some urgency. Discussing with David Jenson 

https://va-atc-dev.azurewebsites.us/

Access to Care /  Decision Search Tool
We are under scrutiny right now, wait times, satisfaction data. 

*This week*
 * Work with Lighthouse to establish a sync of cms data down sandbox-api.va.gov
  * https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9400
  * Production and sandbox take care of their data independently, this model has worked until we stated pushing data, since it only comes from production, you don't push data to staging/sandbox 
  * Each API env is self-contained, outside of CMS, we actilvely pull (from ATC, VAST, CDW) so every day we rebuild the base model
  * THe only thing that's different, is Drupal Facility data doesnt get pulled, it gets pushed only to production  - so no other env's have the overlay data
  * Do we set up some back-end feature to occasionaly copy from production to other envs? -or- Facilites team pushes to other endpoints?
  * Drupal  would push to both Sandbox and Prod ?
  * Swirt: prob with that, sandbox has really low hit rate, we can only push 60 records/minute
  * Josh can see if rate limit can be increased.. would it solve?  Maybe
  * If one fails.  prod receives it sandbox doesnt - is that considered a failure.. are we creating a loophole where data can drift.. .
  * From data integrity POV, would prefer a pull from Prod to lower envs, even if once a week, to assure any drift is accounted for with a full sync 
  * James/Adam will consider options - increase limits? is thate easiest overall solution? would be fastest to implement 
  * Spin up someothing to inviestigate how we would set up data migration.. 
  * When is a good time to check back?  CHeck back in next 2 weeks . would be dificult to launch V1, if now CMS data is being pushed 

Dave C - follow up offline: Email about mobile facilities, get up to speed on research we've done. 
James: Let's lay out among our teams before bringing any proposal.


## Monday, June 20, 2022
HOLIDAY - JUNETEENTH

## Monday, June 13, 2022
*Last week*
* URL's for mobile sites and domiciliaries. ON HOLD FOR NOW 
  *  Many mobile sites didn't have a URL, we didn't want to break existing URLs, need to determine what the LH role is here, purge or leave in place?
  *  Task is on OCTO side - take a look at list. Answer the questions, what is the value of redirects 
  *  https://dsva.slack.com/archives/C02BTJTDFTN/p1654694809562479

* V1 Rollout update 
  * What is the source of truth for all service related data, CMS, ATC, DST 
  * Audit was performed - 300 facilites show a  service in CMS, which ACT and DST dont have
  * 1042 show service exists in ATC and DST, where CMS shows none 
  * Note: DST tracks only: nutrition, podiatry and dentisty 
  * Question: Are they cross listed? A: No not in ATC, which is why we have to get them out of CMS
  * Next Step: 
    * ATC lists XX services that are not populated in CMS
    * Dave C to bring to Jenny H L (VHA) and report back 
    * VHA has conflicting sources 
    * Moving to CMS being SSOT 
    * Regarging CMS not in ATC or DST
     * Someone has updated CMS regardless of notation in ATC or DTC
     * Some of this may be related to mobile site. Has there been an apt in last 30 days? if not, we don't provide it 
     * ATC and DST contains WaitTime , Satisfaction values 
     * Consider what we should we use today vs where do we ultimately want to move?
     * https://docs.google.com/spreadsheets/d/19Gihg32Fifu3FW4y0nMIeVUUbjcXYIzsbV7-B34JzsE/edit#gid=1839316337

*New issues*
* Recent outage
  * CDW Issue? we seem to have lost access. We cannont reload Facility DB because of changes far upstream. 
  * Anyting being sent into LH, is received and staged but can't update. 
  * Theory: VSSC has made security changes - revoked our auth? What does this apply to? VAH problem but effects abilty to update anything 
  * Facility Status should be updated bcuz it's not staged.
  * We need a layman's explanation - Why is LH not updating in Facilities API. Last update was Friday. 
  * This impacts Drupal users.
  * Does LH Team have a plan to communmicate to users? Goal is to fix today, if extends til tomorrow will expect LH to communicate 

* Adjust facility migrations timing
  * https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9395
  * Good info shared, in works, planning on kick off CMS migration at 8am
  * LH grabs everything at 7:30am
  * SOLVED?

* Work with Lighthouse to establish a sync of cms data down sandbox-api.va.gov
  * https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9400

* Define plan to address LH facility service audit
  * https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9406 
  * https://docs.google.com/spreadsheets/d/19Gihg32Fifu3FW4y0nMIeVUUbjcXYIzsbV7-B34JzsE/edit#gid=1839316337
  * David to expand sheet to list each service 
 
DS Notes
Define domiciliary
FYI In the *About this meeting* header on this page, I changed the owner of this meeting from Clarence to myself. Also I think we should change the Standing Agenda.


## Monday, June 6, 2022
* URL's for mobile sites and domiciliaries.
  * We will put this on hold until we understand more about them.
  * Website value for these will become NULL and redirects don't need to be worried about. 
  * Should we clear out domiciliaries that have a URL? Need to get an audit of the domiciliaries that currently have URLS associated
* V1 Rollout update
  * Health Connect (V0 - high priority item) went out.
  * V1 - Working through backlog. Expect to have readout results ATC vs CMS. Should have these this week. 

## Monday, May 23, 2022
* Facility Covid Status
  * Rollout looks successful
* URL's for mobile sites and domiciliaries.
  * Will touch on this again next week. 
* V1 Rollout update
  * Health connect (V0 - high priority item) went out today. Investigation in progress this sprint. Should be ready for us next sprint.

## Monday, May 16, 2022
* Facility Covid Status
  * Testing done in sandbox. Waiting for CMS to get data to push. Won't take place until everything is live. Editors will be entering data on Thurs/Fri this week.
  * Won't show until Monday the 23rd when the flipper kicks off. 
  * AI - Need to keep the LH team aware so that they can check the data when we start pushing. Will update in Slack when ready
* URL's for mobile sites and domiciliaries.
  * Mobile units are a problem space that needs a little more investigation. Multiple use cases. 
  * Domiciliaries - treated as programs. Not all are listed in VAST. May be useful to use the MC URL. They are currently pointed to VA Clinic (for Burlington)
  * AI - Work VHA Digital Media - How editors handle a "This is how to handle Domiciliary" "How to handle a Community Living Center" need to be added to KB
  * Audit to understand which ones are published in the CMS and hand it to VHA DIgital Media to cleanse.
  * Still need additional discussion with Dave, Steve, etc... Need an agreement going forward
* V1 Rollout update
  * Next high priority item. V0 is being looked at now. Hope to have an update next week to veriofy.
  * AI - Need some data from Steve to get all Services per Facility in a readable form. Done during the meeting and provided in Slack

## Monday, May 9, 2022
* Facility Covid Status
  * Supplemental Status is a structure containing both of the above options. This would combine the benefits (and detriments) of the other options. With both a label and an id, the API could use the static id for search/filter operations while consumers could use the label field for display purposes. CMS could change the label if desired while keeping the same id for dynamic display updates. Additions of new ids would still be a manual process for the API.
  * Example: Operating status is a combo. It has a "code" field which is restricted to [Normal, Notice, Limited, Closed] and an "additional_info" field which is freeform and can display any text. The API can do logic based on the code field while consumers can get extra information from the info field. The info field can be changed dynamically but a new code could only be added as a manual update to the schema.
* URL's for mobile sites and domiciliaries.
  * Mobile units are a problem space that needs a little more investigation. Multiple use cases. 
  * Domiciliaries - treated as programs. Not all are listed in VAST. May be useful to use the MC URL. They are currently pointed to VA Clinic (for Burlington)
  * AI - Work VHA Digital Media - How editors handle a "This is how to handle Domiciliary" "How to handle a Community Living Center" need to be added to KB
  * Audit to understand which ones are published in the CMS and hand it to VHA DIgital Media to cleanse.
* V1 Rollout update


## Monday, May 2, 2022
* V1 Rollout
  * Identifying paths forward with latency
  * New need for a preview/snapshot view of all CMS services per Facility. 
  * ATC comparison is needed on our end to facilitate a desire to use CMS as the source of truth 
  * All facililties with all services @SWIRT needed sooner that later. Impacts release to V1. within 5 days
* System name with facility push details
  * going with plain language common name
  * waiting for LH to be ready to receive
  * Adam looked at Steve's example. System component node with items commented out. Good to go. Can be released when ready. Send all fields.
* VC CAP new push endpoint
  * CMS and LH ready to implement post v1 rollout
* URL's for mobile sites and domiciliaries.
  * Mobile units are a problem space that needs a little more investigation. Multiple use cases. 
  * Domiciliaries - treated as programs. Not all are listed in VAST. May be useful to use the MC URL. They are currently pointed to VA Clinic (for Burlington)
  * AI - Work VHA Digital Media - How editors handle a "This is how to handle Domiciliary" "How to handle a Community Living Center" need to be added to KB
  * Audit to understand which ones are published in the CMS and hand it to VHA DIgital Media to cleanse.
* Health Connect Phone Number - Agreement on payload expectations. COmpleted in System name work

## Monday, April 25, 2022
* V1 Rollout
  * Identifying paths forward with latency
  * New need for a preview/snapshot view of all CMS services per Facility. 
  * ATC comparison is needed on our end to facilitate a desire to use CMS as the source of truth 
  * All facililties with all services @SWIRT needed sooner that later. Impacts release to V1. within 5 days
* System name with facility push details
  * going with plain language common name
  * waiting for LH to be ready to receive
  * Adam looked at Steve's example. System component node with items commented out. Good to go. Can be released when ready. Send all fields.
* VC CAP new push endpoint
  * CMS and LH ready to implement post v1 rollout
* URL's for mobile sites and domiciliaries.
  * Mobile units are a problem space that needs a little more investigation. Multiple use cases. 
  * Domiciliaries - treated as programs. Not all are listed in VAST. May be useful to use the MC URL. They are currently pointed to VA Clinic (for Burlington)
  * AI - Work VHA Digital Media - How editors handle a "This is how to handle Domiciliary" "How to handle a Community Living Center" need to be added to KB
  * Audit to understand which ones are published in the CMS and hand it to VHA DIgital Media to cleanse.
* Health Connect Phone Number - Agreement on payload expectations. COmpleted in System name work
* Update "Regular participants" for this meeting.

## Monday, April 18, 2022
* Sitewide crew org updates
* System name with facility push details
  * going with plain language common name
  * waiting for LH to be ready to receive
* Health connect phone number push details
  * to be sent at the same time as facility but with system data
  * CMS recommendation: always send phone numbers in the same structure
  * similar to mental health, will be sent in a single string
  * CMS most likely moving to two structures: one slimmed down, and one more beefed
* VC CAP new push endpoint
  * CMS and LH ready to implement post v1 rollout

## Monday, April 11, 2022
* This LH team is going to do Forms API.   Woot!
* Pushing Vet Center CAP would need a new push endpoint or a new nightly sync from Lighthouse.  Post V1
   * need to push lat lon.  Will be ready most likely by end of this sprint.  (admin only for moving pins)   
   * default services? Not defined yet how to handle.  Awaiting feedback Jessica.
* System Names  (official or plain)  Consumer investigation from Lighthouse may direct this decision. 
* healtth connect phone number location in the payload.  (swirt and Adam to follow up offline, and Dave has thoughts on this too)

## Monday, April 4, 2022
* general updates (servicelocations, healthserviceAPI, VA health connect, facility urls, Cerner)
* LH close to a QA-like environment this week, timelines will be clearer after that
* facility url: CMS team to work on data structure agreed to
* Cerner data
  * what health record is being used at which system (3 states = Vista, Cerner, or almost Cerner)
  * CMS could add to facility push but Dave has reservations
    * OCTO-DE would prefer Veterans to go through VA's portal, not Cerner's
    * may be some value for other systems to be able to differentiate
    * would need to make a distinction between Cerner and specific Vista instance
    * health care teams may be interested
    * LH to validate if there's a consumer desire before CMS connects to LH
    * data is currently available in the CMS
  * doesn't add any benefit to LH today, might augment Vista info
* VA health connect phone
  * LH to add to v0
  * 24 reload, details on how to send from CMS to LH
  * CMS to provide LH IDs of facilities with health connect numbers (existing 3 VISNs: 2, 8, 17)

## Monday, March 28, 2022
* `servicelocations` (8017)
  * LH in a holding pattern until latency issue is resolved
* `healthserviceAPI` (8019)
  * same boat
* VA health connect...
  * rolling out VISN by VISN (separate number per VISN)
  * can VA Health Connect go into v0?
  * LH: possible = yes; will push forward to implement
  * LH to think through what makes most sense for push from CMS, update daily instead of real time
  * Future state = editors in the field will be updating these phone numbers, want to think through validation and timeliness
  * Added to existing status push (payload per facility whenever operating status changes)
    * Revisit when thinking through mental health numbers so as not to block this
    * CMS to provide LH IDs of facilities with health connect numbers (existing 3 VISNs)
* COVID/facility urls: potentially appending to overlay process, looking for status
  * CMS ?: what should it be attached to?
    * COVID url: in service structure
      * would be bespoke
    * Faciltiy url: at the top level, e.g. status push
    * Dave to talk through with joint task force / JHL in regards to a comms strategy

## Monday, March 21, 2022
* `servicelocations`
  * CMS working on defining hours to normalize the data and put in more structured format (e.g. 9:00am vs. 9am)
  * could be blocked by hours details, hoping to resolve by 3/25
  * LH fine going the path of least resistance as they aren't ready to recieve yet anyway
  * locations also need to be added
* `healthserviceAPI`
  * LH not able to consume anything non-COVID yet
  * nothing tested yet for full load
* where facility hours source of truth ought to be?
  * large facilities hours are often listed as 24/7 but smaller facilities without ERs may need to define "core hours" or "business hours" (e.g. 9-5)
  * VAST does not have additional hours fields, but has facilities hours with an extra field for "operational hours" with additional notes/special instructions (text string that may include business hours are 9-5)
  * could CMS become a source of truth for these?
  * what does the current data describe? to define the subset
  * CMS to define by service
  * LH open to this but would like to define data definitions that would help with their additional notes/special instructions field
  * research around CMS field definitions (business hours, operational hours, service hours, core hours, emergency, urgent, etc)
  * possibly to explore in Q3
  * VAST POC: Kelly, James and Dave would know
* expected timelines for non-V1 specific items (e.g. `field_va_health_connect_phone`, mental health phone transition)
  * LH V1 initial estimate was end of Q1, not currently tied to a specific roll out date
  * `field_va_health_connect_phone` as candidate for next prioritization
    * Michelle verifying timeline from VISN perspective (guess is end of March), will potentially drive prioritization outside of LH V1
  * then mental health phone transition for CMS to be SSOT
  * could LH push health connect phone outside of V1? less convenient but possible
  * CMS: relatively minor to stop pushing as is and expose to editors, or bring in from another source
* possible scaling back the on-demand nature of overlay updates
  * LH to connect with Dave
  * service may be ok but operating status may need more urgency
* VAOS/mobile app issue
  * LH looking for other teams that may have info, CMS currently doesn't interact with VAOS

## Monday, March 7, 2022
* `servicelocations`
  * no updates
* `healthserviceAPI`
  * still in LH court, working through latency issues
  * from CMS: if a term gets updated it will push all relevant services and then all relevant facilities (ready by the end of this week)
  * Q: what if a facility is closed? will it send delete updates? A: yes, already in place; orphaned zombies should be accounted for with this
* `field_va_health_connect_phone`
  * no updates, available in the CMS just not pushing to LH yet
  * LH = post V1 (late March) to be able to receive it
  * Michelle and Facilities team looking for this functionality to direct VISN 8 to LH for source of truth
* geolocations and pins being misaligned update
  * Michelle to update in CMS KB
* how Facility Locator connects with LH
  * Dave C and Dave M to bring forward a larger convo with Unauth / Platform on how to best connect
  * Would like to glean from Lance his framework

## Monday, February 28, 2022
* `servicelocations` fields
* `healthserviceAPI`
  * all services are ready to push without locations data
  * LH hoping to have a solution to be ready to receive soon (possibly this week)
* VBA service - was going to validate with VBA if "pension" should be in the data
  * reach out to office of field operations to see if it needs to be deprecated from LH or we need to add data
  * no response yet
  * verified that LH gets lat/long from Sandy Tadeo's database and not geoBisl
* Process for map thumbnail misalignments (one offs)
  * Best way to make requests: posting in slack currently; LH to get back with best intake method for requestors to do directly
  * currently based on lat/long from LH which they get from multiple sources
  * possible batches and timing questions
    * "GSSC bands get updated on the last Saturday of every month. GSSC aims to integrate that data around the 15th of the following month, but recently it has been coming about a week later."

## Monday, February 14, 2022
* `servicelocations` fields. CMS projecting to fill out in sprint 52 (ends 2/25)
  * [8017](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8017) - identify sample data to use in order to validate with LH
  * LH: not critical for V1
* `healthserviceAPI`
  * CMS keeping the name we're already sending the same; LH validated ok
  * Service identifiers will be entered and sent from CMS to LH
  * CMS to stop filtering on COVID and start sending everything
  * LH to reach out once ready to recieve, CMS to implement full send
  * [8019](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8019)
* `field_va_health_connect_phone` refinement
  * CMS ready to start writing the push for this (each facility will have this number attached)
  * mid-March timeline for LH to be ready to address
* VBA service - was going to validate with VBA if "pension" should be in the data
  * reach out to office of field operations to see if it needs to be deprecated from LH or we need to add data

## Monday, February 7, 2022

* `servicelocations` fields in detailed service payload. LH looking for confirmation when to expect.
  * detailed service block for COVID, didn't fill out the full schema, specifically the node for service locations
  * CMS currently sending: published, name, national description, physical description, APIid, appointment lead in, phones, referral
  * [slack thread with context](https://dsva.slack.com/archives/C0FQSS30V/p1610129900071700)
  * CMS medium LOE, does LH need for v1 or post?
  * CMS to project filling out in sprint 52 (ends 2/25)
* Is it worth solving this user story (via help desk) in the interim? "As a VAMC staff, i want to know who to contact if i see an issue with the services that are listed for my facility in the facility locator."
  * LH can own intake for these questions before next version of FL
  * LH to update [KB article](https://prod.cms.va.gov/help/vamc/how-do-i-update-my-vamc-facilitys-basic-location-data)
* Status of healthserviceAPI
  * CMS: once numerated list is received from LH, can add it
  * naming it `serviceId`, CMS to rename `healthserviceAPI` to match
* `field_va_health_connect_phone`
  * CMS should be able to push by end of February
  * Is it ok to send with Facility Status payload? A: should be fine, as long they're distinct elements
      * expectation that this wouldn't change very often
* VBA service
  * FL is pulling "pension" which doesn't happen to line up with any of the existing services
  * Currently returns blank, not even a column in the data
  * Need to go back to VBA to validate if this is something that should be in the data
* Geo coordinates off
  * LH to group all together and send monthly to FL
  * timing TBD, normally roll out around 21-23 of the month

## Monday, January 31, 2022
* Status of healthserviceAPI
  * LH wrapping up setting up numerated list
  * CMS working on this sprint: list of service identifiers to be added in; handling for exceptions
    * need to determine how it's going to look in the push (field prefix - key value pair)
    * LH: it can go anywhere in the existing service structure, LH will be calling it serviceId (in CMS = healthserviceAPI but can rename to match): #7558 (not currently in sprint 51)
    * can't push non-COVID services, but LH can accept new field
    * LH doesn't need CMS changes in place to launch but will need it for work to key off of (testing and so forth)
  * LH to ping CMS once first portion is in place
* VA Health Connect number "field_va_health_connect_phone", timing for CMS and LH changes
  * how will LH get this data?
  * is it just the phone nubmer? A: yes
  * would it be reasonable to host this with the other number? or are we anticipating other things that would point to a new object?
    * A: unsure because discussions around branding still occuring; Conlon would like to flesh out the plan in order to determine
    * LH would like to explore in order to help shape this data long-term
  * what kind of timeline is desired to get live?
    * A: will make it easier on some existing products (end of March for next VISN that will need, VISN 8 currently has a hack in place - FE to surface this number on correct facility, not like Orlando - which has it correctly stored)
  * LH V1 go-live project = 2/25
  * LH would prefer to nail down any additional data that may want to be pushed with this in the future (explore between now and end of March)
  * do we want to be pushing CMS Cerner data to LH? (which EHRM a facility is connected to) A: not yet
    * LH to explore if this may be useful
    * easy for CMS to add at any time
  * would LH want to know what system each facility is a part of? health teams currently requesting
    * double counting facilities currently occuring between VBA and VHA

## Monday, January 24, 2022
* healthserviceAPI field updates
  * LH list received, CMS set to move forward
  * CMS timeline: still need to scope out how to implement (whether phased or all at once), will be at least another sprint before LH is able to receive (2/8 = LH end of sprint)
  * VCs have not been talked about yet, don't need to quite yet (CMS), LH should be good to support any future expansion
  * would be it fair for whoever is owning the services taxonomy to use the pattern that LH has established when new services get added? what should be the process that new ones are derived? through LH UX?
    * CMS to lead any recommendations with LH having first right of refusal
    * need = governance doc describing process
* CAPs
  * LH planning to treat as its own type (VAMC CAP vs VC CAP)
  * how facilities are structured = VC, Outstations, CAPs (can tell if the ID has OS at the end - outstation)
  * should we break out Outstations? classification = null for all VCs, "outstation" is part of the name; there may be a value to breaking them out to help users understand hierarchy
  * CAP hours are not being pushed to LH currently (CAPs in general, are waiting for lat/long)
  * CMS/LH discussion needed on CAPs
* VA Health Connect number "field_va_health_connect_phone"
  * direction coming from Charles to include (Dec 2021)
  * phone number will be rolled out for each health care system, getting put into CMS this sprint (by 1/28)
  * would like to be pushed to LH so that it's available for applications like Facility locator to be pulled into the FE
  * next set of facilities that will be going live with these = end of March
  * LH will probably just append to existing facilities

## Wednesday, January 19, 2022
* on CMS side: create management for existing field (not a new one, just admins can add, required) the healthseviceAPI field that will be leveraged as the unique identifier. the list of curated machine names will come from Lighthouse UX folks for ones that don't exist yet.
  * audiology, cardiology, dermatology, gastroenterology, gynecology, mentalHealth, ophthalmology, optometry, orthopedics, primaryCare, specialtyCare, urology
* the list currently has ~100 services
* Lighthouse UX to provide list by 1/21/22
* may need to flesh out edge cases (when a service breaks out into multiple)
* when new services are spun up, what is the process? CMS to ping Lighthouse for now, or CMS to come up with a pattern
  * concern around knowledge share and context for any possible staffing changes with Lighthouse UX
  * CMS to ask LH, LH to recommend a name, CMS to approve
  * how often are new services spun up? A: depends, intent is to do them in chunks (e.g. currently doing VBA services)
  * what's the timeframe from "need a new service" to it getting spun up? A: probably once a quarter at most
  * lift on LH should be manageable for new service requests
* CMS recommending to also push the term ID to help debug (would only be passed between CMS/LH)
* healthserviceAPI field probably won't get replaced (being leveraged for wait times by FE)
  * if they're going to eventually match should they still exist in duplicate?
  * ~15 will have wait time scores, the remaining ~85 won't
  * ideally would crosswalk existing data with new service machine names (not touching existing)
  * where did the original ATC ones originally come from? A: not sure, possibly LH UX (they blessed off the COVID one)
  * if we populate for all services, will that break the FE widget? Dave: FE should account for this (no wait time data for some services) if it doesn't already. will need to test this
* CMS can't make required until values are populated
* LH has all the current service names, looking to populate list by end of this week
* Ongoing governance meeting in regards to service strategy (Jessica - VC and JHL - VHA, looking to add VBA) - every Wednesday
  * in an effort to standardize taxonomies
  * want to lean into patient friendly names

## Monday, January 10, 2022
* Timing of Lighthouse v1 confirmation
  * preliminary date of late Feb but dependent on service identifier path forward
* Identifiers for detailed service entries
  * looking for Dave's input on using a term ID and publishing a table through the portal that shows the mapping
  * service identifier per service type instead of term ID: recommended from LH
  * CMS has a "health service API ID" that might suffice (comes from LH as opposed to access to care)
  * because the terms are maleable, what happens when things get split (e.g. smoking cessation and addiction)
    * LH recommendation: the old service gets spun down and replaced with two new services
    * what is the promise we would be making when returning search queries? TBD
      * bc if we wanted to return off of old service search after split, this recommendation wouldn't work
  * where do we burden consumers vs. stakeholders vs. LH vs. CMS
  * optics component (e.g. LGBT vs. LGBTQ+)
  * LH: interested in impact on consumers, superfluous ID doesn't serve them without a lookup
    * what other options would reduce the load on LH consumers?
    * string matching (did you mean?) instead of maintaining history
    * possibility of historical reference/lookup?
  * as long as names are consumable enough for API users
  * change management around when name of service changes
    * e.g. Veteran connections and community engagement
    * naming is highly volatile (anticipating VBA stuff)
    * how do we notify folks when things change?
  * is it worth starting to track synonyms?
  * current state for when a service gets split out: it depends on what the impact is on data contributors (data call to clean)
  * LH will huddle internally to discuss and we'll try to come to a firm decision at 1/17/22's sync
* Status in facility locator that doesn't match what's in the CMS (didn't get to)

## Monday, January 3, 2022

* Timing of Lighthouse v1
  * Aiming for February, not locked down yet
  * LH will confirm by mid-day tomorrow
* Radius functionality for lat long being actively worked on by LH and will be availble before v1 (possibly end of current sprint)
* Identifiers for detailed service entries
  * have discussed in the past adding a resource id or machine name field
  * on hold for a UX decision on the LH side but no preference determined
  * looking for consistency (e.g. diabetes vs. diabetic care)
  * how do you connect when they get updated?
  * don't want the list to change
  * need somthing that's user facing and will not change (truncated text string or service ID-123)
  * possibly using the term ID, but not very front facing so a translation to what this actually means would be needed
    * where do we connect the meaningful text string to the one that doesn't?
    * unless we agree on a set of text based terms
  * either CMS needs to control a non-changing text string identifier for a service
  * or send a text ID and LH maps
  * or just use term ID throughout and publish a table through the portal that shows the mapping (easiest to keep in sync)
    * lookup list to also be stored in the CMS
    * LH consumes a possible name change registry
    * if someone searches on a term that has changed the return wouldn't be exact
  * current search UI is cumbersome
  * will want Dave's input but LH would like to push forward as soon as possible

## Monday, December 27, 2021

Cancelled

## Monday, December 20, 2021

Cancelled

## Monday, December 13, 2021
* Integrating/being informed of changes in VAST - both Lighthouse and CMS teams
      * Meeting last week may shine light on path forward - update?
        * Communication path has been opened
      * Service phone number source of truth?
* Removing Facility status migration?
  * Keep until Dave talks to Jenny

## Monday, December 6, 2021
* Integrating/being informed of changes in VAST - both Lighthouse and CMS teams
   * CMS has backlog item to discover changes to VAST data - update?
   * Meeting later this week may shine light on path forward
* Basic Location Data Questions: Facility type/classification, Phone numbers confusion/conflicts, and "additional inquiries"
  * What will be source of truth for services phone numbers?  VAST or CMS?
  * Dave to talk to Jenny.
* Update on FAPI bug not displaying all CMS overlays.
  * CMS folks to Async and come up with timeline to fix (SWirt and Kev) - Update?
* Order of operations
  * Worked out in meeting

## Monday, November 29, 2021
* Integrating/being informed of changes in VAST - both Lighthouse and CMS teams
   * Potentially looking for update on regular cadence. - VAST admins to meet and discuss way to notify us.
   * CMS has backlog item to discover changes to VAST data
   * VAST to huddle and get back to LH to notify of any upcoming changes
* Updating guidelines / KB
  * Will talk to Michelle about creating ticket for Facilities backlog to create templates for e-mail links for making update to vet center info - Dave to update Michelle 
  * Adding michelle to this meeting (starting next week?)
* Operational Hours Special Instructions
  * currently one blob of content with 4 possible options from VAST
  * do we have the special insctruictions belong in CMS?
  * CMS to determine best way to get to front end
* Basic Location Data Questions: Facility type/classification, Phone numbers confusion/conflicts, and "additional inquiries"
  * need to seperate out phone numbers
  * What will be source of truth for services phone numbers?  VAST or CMS?
  * LH to remove "Additional Inquiries" potentially
* Update on FAPI bug not displaying all CMS overlays.
  * CMS to create a backlog item to look at updating facility and service URLS 
  * CMS folks to Async and come up with timeline to fix (SWirt and Kev)

## Monday, November 22, 2021
* Mission Valley VA Clinic (664BY) is moving and becoming Kearny Mesa VA Clinic (664BY)
  * Dave Conlon to follow up with Stan on URL updating process. Redirect happening
  * Potentially looking for update on regular cadence. - VAST admins to meet and discuss way to notify us.

* Updating guidelines / KB
  * Joe and Josh reviewed and updated the two tables
  * Will talk to Michelle about creating ticket for Facilities backlog to create templates for e-mail links for making update to vet center info - Dave to update Michelle 
* Discuss Ethans changes - Done
* Operational Hours Special Instructions
  * currently one blob of content with 4 possible options from VAST
  * do we have the special insctruictions belong in CMS
  * CMS to determine best way to get to front end


## Monday, November 15, 2021
* Mission Valley VA Clinic (664BY) is moving and becoming Kearny Mesa VA Clinic (664BY)
  * Updates?  Group went offline to discuss.
  * San Diego cut over to prod last wednesday 11/10
  * Dave Conlon to follow up with Stan on URL updating process.
  * Potentially looking for update on regular cadence.
  * How can CMS/LH get notified as early as possible of these things, James to poke with VAST folks
    * For this iteration we won't worry about it per Dave C
    * James talked to VAST awaiting response
* Updating guidelines / KB
  * Joe and Josh reviewed and updated the two tables
  * Will talk to Michelle about creating ticket for Facilities backlog to create templates for e-mail links for making update to vet center info

## Monday, November 8, 2021
* Mission Valley VA Clinic (664BY) is moving and becoming Kearny Mesa VA Clinic (664BY)
  * going live 11/15
  * CMS to run migration, validate Veterans experience
  * Coordinate with public websites on whether or not we need to redirect
  * Dave to discuss with Stan when change will occur
* LH request for [Calahan VA Clinic](https://www.va.gov/birmingham-health-care/locations/callahan-va-clinic/) that's permanently closed but still populating on VA.gov
  * Josh created ticket
* [How to archive KB](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/how-to-archive-a-closed-facility) needs some love
    * VAMC Upgrade team to break into what CMS will do vs.
* How critical is the timing of the upcoming changes?
  * Facility API changes made morning of 11/15 won't reflect in the CMS until after 3am ET (Facility API migration - LH), VAST changes reflect in LH around 7:30am ET
  * Ought to be part of the request:
    * When do you want changes to reflect on va.gov?
    * How can CMS/LH get notified as early as possible of these things, James to poke with VAST folks
    * For this iteration we won't worry about it per Dave C
    * James talked to VAST awaiting response
* Duplicate facilities from VAST
*  * Update?
* Updating guidelines / KB
  * Josh and Joe to look at and complete within next sprint
  * Will look at today?



## Monday, November 1, 2021
* Mission Valley VA Clinic (664BY) is moving and becoming Kearny Mesa VA Clinic (664BY)
  * going live 11/15
  * url for this facility, will be processing a redirect
    * will change the H1 and therefore the url
    * CMS recommends to process redirects through Drupal
    * CMS to manage urls for LH
* LH request for [Calahan VA Clinic](https://www.va.gov/birmingham-health-care/locations/callahan-va-clinic/) that's permanently closed but still populating on VA.gov
  * Still showing on Facility locator as closed
  * CMS can archive it, nothing in the path to process automatically (Josh to create a helpdesk ticket to track)
  * Probably exists in VAST as permanently closed but no longer in LH
  * Request fulfillment process to unpublish a site questions
    * Formal request is going to come to CMS
    * If user goes to LH first, LH will process for the user through a JSD ticket
  * [How to archive KB](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/how-to-archive-a-closed-facility) needs some love
    * VAMC Upgrade team to break into what CMS will do vs. LH, etc
* How critical is the timing of the upcoming changes?
  * Facility API changes made morning of 11/15 won't reflect in the CMS until after 3am ET (Facility API migration - LH), VAST changes reflect in LH around 7:30am ET
  * Ought to be part of the request:
    * When do you want changes to reflect on va.gov?
    * How can CMS/LH get notified as early as possible of these things, James to poke with VAST folks
    * For this iteration we won't worry about it per Dave C
* Duplicate facilities from VAST
*  * Update?
* Updating guidelines / KB
  * Josh and Joe to look at and complete within next sprint - update
* Possibility of unifying VBA and VHA sites
  * Update following 10/26 meeting
* Kevin to create issue on KB for facility deletion requests - done?

## Monday, October 25, 2021
* Duplicate facilities from VAST
* Will VAST create new facilities each time one moves?
  * SWirt to grab current instances of issue and send over - Done
  * Determine VAST business process - James Shared via Slack
  * Make VAST team aware of impacts of current method for transferring facilities from one center to another
  * Examine possible mitigation by LH
* Updating guidelines / KB
  * Josh and Joe to look at and complete within next sprint
* VBA sites missing after data update
  * Caseflow is using "inaccurate" list of facilities 
  * Facilities should not be hard-coded
  * Dave Conlon spoke to Caseflow provided canonical list
* Possibility of unifying VBA and VHA sites
  * need to schedule a full one hour session on this - scheduled for tomorrow (10/26/21)
* Kevin to create issue on KB for facility deletion requests

## Monday, October 18, 2021
* Duplicate facilities from VAST
* Will VAST create new facilities each time one moves?
  * SWirt to grab current instances of issue and send over
  * Determine VAST business process
  * Make VAST team aware of impacts of current method for transferring facilities from one center to another
  * Ought to pull down old site instead and set to not active
  * Some of this may be from LH, not VAST
* Updating guidelines / KB
  * Josh and Joe to look at and complete within next sprint
* VBA sites missing after data update
  * Caseflow is using "inaccurate" list of facilities 
  * Facilities should not be hard-coded
* Possibility of unifying VBA and VHA sites
  * need to schedule a full one hour session on this

## Monday, October 4, 2021
* Lovell coordination
  * 4 facilities within Lovell that service Veterans (Captain James, Evanston, McHenry, Kenosha) will be in Lighthouse
  * 4 additional that only service active military (USS Osborne, USS Red Rover, USS Tranquility, Zachary) will not be in Lighthouse
    * Won't be needed in the CMS
* Absolute URLs for services: ownership timeline for CMS
  * New updates are getting pulled in from a Sharepoint site
  * Manually updated, poorly formed
  * CMS can't own it yet because we're not aware of when they go from dual-state or not
  * Prior to turning on the full health service integration, will we be able to assume that CMS is providing correct paths?
    * For COVID services, it's currently a detail page so unstructured data
    * Which order the services come in through the API is important, shouldn't be maintaining it manually for much longer
* Documentation of who to reach out to for VAST updates
  * CMS to update KB articles and help text to point to the source of truth KB article
* As LH looks at the pending horizon of Facilities v1, might want to look at the backend infrastructure of how everything integrates


## Monday, September 27, 2021
* Creation of four new Lovell Federal facilities from Facilities sync call
* Absolute URLs for services being pulled by LH from CMS - timeline, roadmap

## Monday, September 20, 2021
* Facility data update workflow, [6413](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6413)
  * https://prod.cms.va.gov/help/vet-centers/how-do-i-update-my-facilitys-basic-location-data
  * Break out existing KB article by product type (possibly 4)
  * LH team to own info in KB articles for VAMC and VC; CMS to own cemeteries and VBA Regional offices for now
  * LH team to send over folks they want to have access to edit:
    * joshua.jennings@va.gov, james.costa@va.gov, adam.stilton@va.gov, joseph.justice2@va.gov
* Updates for facilities detailed services
  * Frequency of updates from CMS to make sure data is in sync
  * Ideally shouldn't need it but CMS to plan for a nightly sync
    * Bulk push of all vs. LH single query; bulk push with all individual services hasn't been tested yet; LH will be set up for bulk push but want to notify their DevOps folks as early as possible
    * Decision: start with the bulk push, explore single query if needed
    * Q: currently these pushes are scheduled for the night time, should we consider moving to when folks are around? TBD

## Monday, Spetember 13, 2021
* MVC status updates, if any
  * LH deployed update for Facilities API this past Friday, so should have no orphaned overlay info now
  * Falling back to the VAST operating status
* Census office API updates, if any
  * CMS team has a spike in queue
* PAO communications on how to update facility data
  * How can we streamline communications for escalations while limiting incorrect escalations?
  * Suggestion: LH to update and maintain CMS KB article on how to update facility data
  * In CMS help text would direct to KB article instead of directly to api@va.gov
  * Access to care wait time data: how to better inform users on how to update (add info to KB article)
  * Explore KB article editor role
* VBA data status
  * Dave did clean up
  * Back with VBA to answer questions, will circle back in ~2 weeks with the goal to refresh around mid-October

## Monday, August 30, 2021
* MVC statuses, LH code is complete and merged but not quite in (can then delete overlays)
* James and Jessica (VC) connected now for RCS (Readjustment Counseling Services) path stuff, James waiting on a response
  * Jessica might have info on updates for VCs not being handled the same way as VAMCs

## Monday, August 23, 2021
* New slack channel to collaborate here: [#cms-lighthouse](https://join.slack.com/share/zt-ukjhgl7n-YUFtRrwVRm_QssZWYfT2pQ)
* Census office API for lat/long service: for CMS to pull into a future sprint for discovery (for CAPs, future VBA stuff)
  * Potentially CMS as SSOT for this for LH to consume so that users can validate
* VBA database
  * Data call completed
  * Drupal to be used for content, to be put on CMS roadmap
  * Dave's targetting for Q4
  * Upstream BISL dependency to be aware of, driving timeline
  * Will additional columns break anything? (is the VBA facility inside a VHA facility? services at a specific address)
  * If data elements change will that break anything?
* VBA facilities have been deleted as a part of the above
  * CMS needs to understand and track when a facility is no longer in LH so that a VBA editor doesn't update a facility that doesn't exist
  * Could be the same use case as for VAMC facilities
* VBA_facilities database (with one table) changes
  * new columns should have no impact on LH, will just ignore
  * value changes in existing columns (facility_type): `outbased` field, is that mapped to classification? doesn't look to be used currently by LH
  * Dave has what he needs to move forward
  * What's the process for adding a new service / integration point with LH: bring up at this weekly meeting
  * LH queries time zone based off of lat/long
  * Uses IANA format (official zone name, doesn't have UTC) for Arizona funkiness, leverages polygons
    * Is this API accessible? lat/long to timezone conversion
    * CMS issue is how to display
    * CMS may look to LH to mimic for repeating events that it's creating
* CMS is working with VEO to centralize event data if LH is interested
* MVC statuses
  * Adding in overlay deletions today-ish, once in then operating status overlay can go in
  * LH should be good by next meeting
  * MVCs will still be listed in VAST

## Monday, August 16, 20221
* Lat/long update: Dave has found a service at the Census office that we might be able to use.
  * Dave will investigate how we might leverage for VC CAPs, and VBA stuff. TBD on timing. https://geocoding.geo.census.gov/
  * CMS team to explore how to leverage. Some concerns around if it needs to be validated.
* Mobile Vet Center statuses
  * When removed, Facility status for MVCs got stuck with no way to update
  * Will leave as is in CMS for now until Dave clarifies business process with Jessica
    * Facility needs to be removed or made inactive in VAST - won't be something that CMS/LH will be able to solve because the Facility will still appear with the VC.
    * CMS may need to archive in order to make it disappear.
    * FYI for CMS helpdesk: users may be confused.
    * Status from CMS side = currently doesn't exist for MVC
  * LH to set status to null
* Communication channel
  * Separate channel or existing?
  * Clarence to set up and add other relevant folks (Michelle Middaugh, CMS helpdesk)
* If CMS becomes source of truth for services data (away from ATC), some data will be lost but may not be needed (access to care, wait time, and satisfaction)
  * Currently LH is getting 14 services from ATC
  * 82 other services from CMS currently don't have wait time and satisfaction
  * Mission Act drove wait time and satisfaction data being tracked / visible
  * Important to keep in the API response but may never get for 82 services
  * CMS will govern if a facility has a service or not regardless
  * Possibly flagging the 14 services that have this info for the FE
  * Contingencies on bad data will need to be explored

## Monday, August 9, 20221
* LH currently working on changing the architecture of how they handle the overlay data, going to decouple the overlay from the facility objects so that CMS can send data for a facility that doesn't exist. Is CMS doing anything with the return codes?
  * CMS team to look into how they're handled, specifically 201 (received but couldn't do anything with it)
  * Currently, LH will store even if ID isn't recognized and not ever purging
  * CMS would want to know if recurring
  * CMS would want to know if 201 occurs in order to remove it from the queue
* The url to the service info pages for the detailed service blocks, currently LH is managing through external (bc COVID) - need Dave for direction
  * Paths ought to be part of the CMS but currently not
  * CMS doesn't have the full path bc the system isn't part of it yet, possibly bc some were nationally controlled
    * Not all the facilities are synced up because many are still done by hand, VAMC Upgrade team still needs to populate
* The character limit for additional info for operating status
  * Should LH loosen or CMS tighten? Decision by Dave to harden on CMS end. [CMS issue](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6027)
  * CMS to also look at the error messaging around this
* Machine names for services still on hold

## Monday, August 2, 2021
* How to uniquely identify the health services objects
  * LH to go through UX to validate whether to use machine name or non-sensical ID or a list that LH owns (what makes sense for different consumers)
  * Will then need to add unique identifier into payload from CMS

## Monday, July 19, 2021
* Clarification on workflow for VAMC user data request changes for facilities
  * Current process is to email api@va.gov (LH customer support team)
  * Suggestion to reroute users to VSSC = VAST
  * LH wants to own any data that flows through it
  * VAST data entries take an approved editor
  * VAST data changes take a while so encourage/remind VHA Digital Media to send requests in as early as possible (can take weeks)
    * Dave C to leverage "Did You Know?" type announcements to remind
* CMS health services
  * LH to discuss internally how to handle services
  * LH requesting a list of service names to be able to start stress testing (current names as they are) = can be found here:  https://prod.cms.va.gov/vha-health-services/export, doesn't have unique ID which we'll probably want to leverage as unique ID
    * Need to account for these changing (e.g. LGBT to LGBTQ+) as well as new
    * Q: is there a static record of these services?
    * A: in the CMS there's a "term_ID" which might be possible to use as a unique identifier (also, "Health Service API ID" is currently visible at https://prod.cms.va.gov/vha-health-services)
    * Would it possible to align LH UX and CMS UX on taxonomy? (let's target for after LH has a chance to review the list)
* VC CAP data
  * Waiting on how we determine lat/long that Dave is currently tracking down
  * LH looking for confirmation that CMS push approach is viable. A: yes, will take about a sprint for CMS to set up (doesn't include testing)

## Monday July 12, 2021
* CMS health services
  * API pushing per facility - implementation timing (for initial bulk and then ongoing)
  * LH needs to work on how to present information once received from CMS (into existing API or a new endpoint or its own API)
  * LH not quite ready to receive the data yet
  * Proposed timeline: CMS won't have complete data until ~Jan 2022
    * All facilities in review state by ~Oct 2021
    * Then need to review
    * Q: should we push sooner to ensure that the workflow works? for CMS we could start pushing fairly quickly (by removing for just COVID)
    * A: could do it as facilities go "live" (3 have completed recently); could try to match the cutover process; but no customer until we have all the facilities because the facility locator will most likely wait until every facility comes online
    * Eventually want to deprecate "Access to Care" and just use facilitiy health services
    * Dave: let's revisit in Q4 2021 to sync CMS and LH roadmaps/priorities
    * LH may want to wait until a current initiative is completed
    * **ACTION ITEM: LH will need a list of name strings to be sent in order to map service name to internal service name; CMS will need to iron out naming convention in order to send** (also research what's the right path for the data)
* CAPs
  * Endpoint details (sending all data always)
  * Whatever pattern we land on we may want to consider for VBA data when CMS is the source of truth for facility data
  * VC rollout is being slowed down to ~75 VCs by end of August 2021, the rest towards the end of the year, which buys some more time for CAP data
* What happens when a new facility/system gets created?
  * Currently the CMS doesn't assign a VISN, will need to be manually assigned
  * This is because there is no source for that info

## Monday June 28, 2021
* How LH's API should get data for CMS health services
  * Go with API bulk push or GraphQL pull because of amount of traffic
  * LH wants to stick with API path, GraphQL as a fail-safe option if traffic is too much. Currently not anticipating that traffic will be a problem.
  * **ACTION ITEM: LH to engage Swirt to get feedback when he gets back.** if we need to sync next week we'll schedule one-off
  * If the answer turns out to be go with GraphQL then feedback requested asap
  * **ACTION ITEM: CMS to sync with Core Team and both potential scenarios**
  * Currently a single API call per service, per facility; LH can handle one call per facility with all services bundled
* How to grab CAP facilities data
  * Contingent on getting lat/long: Dave is currently researching and until unstuck there is no known path forward
  * Dave C reached out to Dave Mazik, and he may know who recently trued up VHA location data
  * LH has some potential paths forward and is looking for validation
  * LH exploring best interface: recommending to keep restriction in place on existing end-point and set up a new end-point to handle new IDs
    * **ACTION ITEM: CMS Team to review and give feedback**
    * **ACTION ITEM: CMS to sync on this with Core Team**
    * Dave C exploring how to possibly leverage the CMS as the source of truth for VBA data
    * Timeframe = Q3 for data call, Q4 for possible implementation
    * CAP solution to potentially align with the VBA solution

## Monday June 14, 2021

* CAP data questions
  * Geolocation discussions continued
  * Workflow
    * Very first create call - does anything need to be different?

## Monday June 7 3pm ET

* CAP data questions
  * Sample data, Adam is requesting CAP payloads for Lighthouse team
    * ![image (6)](https://user-images.githubusercontent.com/60702623/121074690-343d6400-c7a2-11eb-97a4-846dd8b59290.png)
    * Should be identical to Facility fields
    * With a subset of data, what is that subset?
    * What's currently required? because VC is thin with what it collects (geolocation, name, address, hours)
      * LH to send CMS list of required fields
    * Health facilities geolocation comes from VAST, not sure how they true up their coordinates.
    * Is there a VA service that provides geolocation that we can leverage? possibly through mapbox's API (but would take a contract mod)
    * How do cemeteries locate?
    * Should Drupal care about geolocation? if so, how would we obtain and where would it be stored?
    * VAST and cemeteries have their own solution we think. James to investigate how NCA is obtaining.
    * Lat/Long is required for all facilities currently, cemeteries are most likely being generated by BISL.
    * What about Benefits facilities? Adam to look in to whether or not they're coming from the same tables (Sandy Tadeo's custom data vs. a source database).
  * Workflows
    * Publishing workflow data?
    * How the pushes to Lighthouse are going to be triggered in terms of the lifecycle for a CAP
      * Dave has a mural that maps out
      * Is there anything special for the very first create call? Steve = no, but if LH needs it to be different just let us know
        * Current endpoint doesn't allow for entities that don't exist
        * Details TBD, LH will let CMS know
* Potential GraphQL support
  * LH to explore if they can accomplish without the GraphQL approach
  * TBD
  * Some Program discussions around only supporting RESTful APIs

## Monday May 17 3pm ET

* VAST meeting outcome

## Monday May 10 3pm ET

Vet Center CAP data and questions
* When a Vet Center editor archives a Vet Center CAP, CMS will keep the data in archived (unpublished) form. Related questions: 
  * CMS will push this content update to Lighthouse. **ACTION: Needs CMS issue**
  * How long should CAP data archived in the CMS be available to Vets, and in what form? Should the CMS be the place where CAPs are gradually closed, or is that best managed by Lighthouse / Facility Locator?
(Questions for Dave).
    * Dave: It shouldn't be. Within one business day, it should disappear from Facility Locator. Facility Status in CMS may indicate impending closure, or closure. Facility Status can be "closed" but the CAP can remain published in CMS.
    * Archived in CMS = Deleted in Lighthouse. 
  * What happens if the CAP is archived, then re-activated with the same ID?
    * **Lighthouse should be able to re-open a CAP with the same ID.**
  * **Action: CMS issue for content lifecycle documentation for CAPs, including Lighthouse dependencies**.
  * When to kick off this cross-team epic for pushing CAPs into Lighthouse, and providing CAPs to customers like Facility Locator? 
    * Dave: We will have data from 10 Vet Centers at end of May, then 50. Where does this fit into Lighthouse priorities? 
    * Josh: When the data becomes available from CMS we'll want to make available via Lighthouse
    * Steve: We can mockup what the push will look like **Action: CMS issue, Sprint 33 (end of May) or 34.**

How might graphQL support the needs to supply service data to lighthouse? 
* [CMS GraphQL documentation](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/f4341c29ad8e998de1dac2fca0b749cdef15c923/READMES/graph_ql.md). 
* Example implementation: [Platform Build Pipeline info](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/platform/cms-metalsmith-build/product-outline.md)
* Research question: are there advantages to using GraphQL over the existing push approach. 
* Follow-up questions: #cms-support channel in DSVA slack.

## Monday May 3 3pm ET

Triage for incorrect data sourced via Facilities API 
* First user was forward to api@va.gov last week.
* next sprint for CMS: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5180

VAST meeting: was it rescheduled?
* May 12 
  * May lead to some longer term roadmaps for Lighthouse/CMS collaboration

CAP data
 - How long should archived CAP data be available to Vets, and in what form?
 - IDs. 12 characters max, referencing the "parent" Vet Center ID, and appending an increment up to 99. [vcparentID][cap][99]

(Time available) Questions on Real-time API access via Lighthouse for Accelerated Publishing initiative
 - Intro/background
 - Can Lighthouse proxy API requests to another backend, or must data always be pushed to Lighthouse?
 - Can Lighthouse provide keyless access for public data? (How do rate limits play in)

## Monday April 26 3pm ET

- If a Vet Center or VAMC staff finds an issue with the data coming through Facilities API, what should they do?  Multiple data sets... Access to care, Mental health care contacts, VAST. 
  - Triage document for data - who to contact for different data scenarios.  What is the right escalation path?
  - Is all the Vet Center data from VAST? 
  - Can we just send all editors to Lighthouse if they find issues? 

Outcome
 - Since Lighthouse is the "middle man" and has all the stakeholder data, it makes sense for users to reach out to Lighthouse if there are data issues
 - Send users to helpdesk system: 
   - To: api@va.gov 
   - Subject line: "Facility data"
   - Body: 
     - Something like: [Describe issue with facility data... which field is wrong and how should it be corrected. ] (the clearer the report, the faster the resolution) 
     - Facility ID and Name 
- Any updates / to do items from the VAST meeting?
  - No one from VAST was there. 
- CAP data
  - CAPs come and go regularly... it will not be a one-time data transfer.


- Action Items:
  - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review) - no update as of 4/12
  - Lighthouse to investigate pushing of services in bulk. (+11,000 if doing a bulk push of one service at a time, not an immediate need) - no update as of 4/12
  - Pushing Vet Center CAP would need a new push endpoint or a new nightly sync from Lighthouse. - will need to be prioritized
  - Detailed services returning an empty list rather than a null statement. Any next steps? From a data integrity standpoint a non-issue but Adam would like to go back and clean-up at some point.
    - Noticing automated schema tests not happy so looking to prioritize at some point

## Monday April 19 3pm ET

* Adding support for VCNumber in Facility API, eg as `parent: "VC_0327V"`; or unique CAP ID, in the same way as Facility Status
  - What would Lighthouse need to accept? prioritize for 4/19/21
  - There's something in VAST (parent)
  - CMS challenge: finding the relationship between VCs (e.g. VCNumber = 327 for Greensboro Vet Center, Spindale Outstation, and Greensboro Mobile Vet Center)
  - Exists in VAST (is this the source of truth?) but not available in the Facility API (should it?)
  - Problem we're tring to solve = trying to find a data source to show parent/child relationship
    - Dave is unsure of the accuraby of the data in VAST so hesitatnt to use them as the sourve of truth
    - Don't know if it's acitively being used and maintained
    - Upcoming meeting with VAST may provide clarity
    - Don't put any effort into this until we have more information
    - Question in the short term: how should Lighthouse handle new CAP site IDs? newly CMS generated IDs
      - Lighthouse would need to set up a new push/pull system to include IDs
      - CMS would want to keep the structure of the payload as similar to what's existing for services
- Upcoming VAST meeting coordination
  - Scheduled for Wed, 4/21
  - Goal of the meeting: to understand what VAST collects and why so CMS can communicate to users cohesively; understanding how there may be gaps in the way the field uses VAST (specifically around mobile facilities; e.g. mobile bus location schedules)
  - Questions for VAST:
    - How do they turn on/off Facility closure info (temporary closure, permanent closure, planned)?
    - How can we leverage to teach the field to manage correctly?
    - Clarity on the VCNumber field, how it's being used, is it being maintained?
- Facility status disconnects
  - Lighthouse currently implementing a fix, should be resolved
  - CMS to manage what to do with that info
- Dave out next 2 Mondays
- Detailed services: discussions ongoing around fields being classified as null or not null
* Action Items:
  - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review) - no update as of 4/12
  - Lighthouse to investigate pushing of services in bulk. (+11,000 if doing a bulk push of one service at a time, not an immediate need) - no update as of 4/12
  - Pushing Vet Center CAP would need a new push endpoint or a new nightly sync from Lighthouse. - will need to be prioritized
  - Detailed services returning an empty list rather than a null statement. Any next steps? From a data integrity standpoint a non-issue but Adam would like to go back and clean-up at some point.
    - Noticing automated schema tests not happy so looking to prioritize at some point


## Monday April 12 3pm ET

* Action Items:
  - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review) - waiting to check against VC
  - Lighthouse to investigate pushing of services in bulk. (+11,000 if doing a bulk push of one service at a time, not an immediate need) - no updates
    - Should be only by facility, anticipated load of calls is probably around 2,000
    - CMS would need some fairly heavy rework of its data push to group by facility
    - More than just COVID vaccine send anticpated once VAMC Upgrade is completed at the end of 2021
    - Do we worry about 11,000 or a smaller number now? At what point do we need to worry about bulk services?
      - Currently fine with just vaccine and maybe one or two more
      - CMS would like to be aware of any limitations as early as possible
      - CMS has some throttling ability to help mitigate
  - Pushing Vet Center CAP would need a new push endpoint or a new nightly sync from Lighthouse. - will need to be prioritized
  - Detailed services returning an empty list rather than a null statement. Any next steps? From a data integrity standpoint a non-issue but Adam would like to go back and clean-up at some point.
    - Noticing automated schema tests not happy so looking to prioritize at some point
* Q2 radar
  * CAP hours and phone number and address and name (don't live anywhere outside of the CMS) - will be prioritized by Lighthouse for Q2
    - 10 VCs by mid-May (10 services each VC)
  - Another 60 VCs by ~July (10 services each VC) - will be prioritized by Lighthouse for Q2
  - Another 240 VCs by ~Sept (10 services each VC)
    - Only mapping services to main VCs, not CAPs
  * Facility health services
    * Vet Center
    * VAMC services
    * Caregiver only? (Ming has a list)
      - James: was looking into Caregiver services short-term (early 2022); Drupal long-term; not sure if this is the same data
      - Need to understand the justification in order to prioritize for both teams
* Adding support for VCNumber in Facility API, eg as `parent: "VC_0327V"`; or unique CAP ID, in the same way as Facility Status
  - What would Lighthouse need to accept? prioritize for 4/19/21
  - There's something in VAST (parent)
- Notes
  - VAMC Upgrade rollout feedback: some VAST data is inaccurate and the timeline/workflow to change is 180 days and inconsistent
    - VAST feeds VATS (source of data for VAOS)

## Monday Apr 5 3pm ET

Agenda/Notes

  - Updates
    - CMS is now pushing Covid Vaccine service apointment info to Lighthouse. 
    - CMS has a method to bulk push these services to Lighthouse.
    - Timeline to get CAP data populated = mid-May

  - Action Items 
    - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review)
    - Lighthouse to investigate pushing of services in bulk.   (+11,0000 if doing a bulk push of one service at a time.)
    - Pushing Vet Center CAP Would need a new push endpoint or a new nightly sync from Lighthouse.

   - Prioritization?  Additional service data, VetCenter CAPS ?

## Monday Mar 29 3pm ET

Agenda/Notes

- Action item review
  - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review)
  
- GraphQL/Renaming Fields 
  - Possiblity of doing a nightly pull through GraphQL for both Covid19 (in addtion to the push) and for the larger health services integration
  - Potential issues and the need for renaming/mapping on both sides
- COVID health service data
  - Vaccine service
  - All health services
- VAST
- New items
   - Sync issues:
      - Facility exists in VAST but is not visitable for veterans. (active is not the appropriate status  ie. 660QD)
      - Lovel does not exist in vast but is a health facilty.
      - Human workflow needed with CMS report for buisiness process if a facility is removed from VAST.  It should not be an automated delete or archive.
  
  Action Items 
    - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review)
    - Lighthouse to investigate pusing of services in bulk.   (+11,0000 if doing a bulk push of one service at a time.)
    - Pushing Vet Center CAP Would need a new push endpoint or a new nightly sync from Lighthouse.

## Monday Mar 22 3pm ET

Agenda/Notes

- Action item review
  - Lighthouse team to complete UX review for field name changes
  - CMS team to complete 3 field name changes by sprint 28 (ends 3/26/21)
  - Dave to send CAP workflow to CMS team
- COVID health service data
  - Vaccine service
  - All health services
- VAST

## Monday Mar 8 3pm ET

Agenda/Notes

- COVID health service data
  - Vaccine service:
    - Lighthouse to tie up website piece; may be beneficial to push everything except the website piece for now
    - Currently stalled with VAOS work that's happening
    - CMS to make changes to field names by 3/26/21 (sprint 28)
  - All health services:
    - Pulling data all at once from CMS to Lighthouse nightly is recommeneded instaed of pushing because services don't change often
    - We do want the ability to push on demand though just in case
    - Does Dave have a list of meta detail for service? yes, but because Vet Centers is adding columns it hasn't made it to prod yet. Looking to lock down by this CMS sprint 27 (3/12/21)
  - VC CAPs ought to be prioritized above all others
    - CAP data doesn't exist anywhere so would be good to get in Lighthouse in order to distribute elsewhere
    - Long-term plan is to pivot Facility health service locator to a Service locator
    - Data capture for all facilities won't complete until the end of Sept 2021 because of VAMC migrations, but CAPs should happen before the facility service data
    - Might make sense to do a push because the frequency is greater. should this include CAP statuses?
    - Operating status versus existence needs to be fleshed out
    - Need to determine the right format for what gets captured in Lighthouse
    - Let's start with a sample of existing CAP data and compare it to existing Lighthouse data to get a sense of how we might want to integrate fields
- VAST

Action items

- Lighthouse team to complete UX review for field name changes
- CMS team to complete 3 field name changes by sprint 28 (ends 3/26/21)
- Dave to send CAP workflow to CMS team
