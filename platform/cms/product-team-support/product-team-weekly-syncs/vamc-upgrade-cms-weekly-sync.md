# Weekly sync: VAMC upgrade / CMS

<details><summary>About this meeting</summary>

- Wednesdays 2:30pm ET 
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

## Wednesday Jan 20 2:30pm ET

- Erie follow ups, if any?
- Upcoming dual state launches
- Limit testing 
- Training
  - CMS orientation session 5 video will be available by end of day Jan. 22
  - Self-service invitation for VISN 6 re-emailed today, clarified that training activities require login to training environment, not production

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





