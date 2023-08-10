# Benefits Disability Experience - Product sync 

### Date: Aug 10 2023       
### Participants: 
### Topics Covered:
- P1 issue
   - Do we roll back the ITF msg after the traffic volume goes down after Aug 10?
   - Do we need any further work on file size for upload or does 99 MB per upload stand?
- Toxic Exposure 
   - Research planned for the week of Aug 21
   - Start work on mock-ups and plan the build
- ITF LH migration roll-out
  - 1-5 user test starting this sprint
  - next would be .5% rollout
- Question from David R re status of Landing page work?
  
### Date: Aug 3 2023       
### Participants: Austin
### Topics Covered:
- Toxic Exposure Research
   - Shannon picking up research plan to fill in gaps and have draft for Lydia return
- Data for ITF / Late submissions
- ITF Policy question from Julie / further discussion with Andrew Gray
- Meeting Matt, Jen and Steve around dashboarding
 - What do each persona need?
 - What other key perfomance metrics do we want to get
 - how to make public dashboards?
 - best way to create dashbaords?
- Future discussions with Contact Center
 - how to make dashboards for them
 - how to build relationships with Contact Center
   - are veterans comfortable with error numbers 


### Date: Jul 26 2023       
### Participants: Rakshinda, Austin
### Topics Covered:
- Toxic Exposure Research
   - Team 1 has no researcher
   - Team 2 is working on 
      - ITF (disovery has uncovered larger oppurtunities. Need to weigh options, but seems like an important place to focus and define short term, medium term and longer term improvements)
      - Review and Submit changes (need design approval / waiting for Shannon to return)
      - Bug for missing ID errors (requires input from Contact Center but we are being told there is sensitivity with talking to them)
            - Matt/Jen - to check what's the obstacle for this discussion 
   - **Reccomend** waiting on Lydia on Aug 8 vs disrupting the Team 2 work in progress
   - **Check** if Coforma can support with UX for the next 2 weeks - Austin
   - **Check** if Lydia is still planning to be back on Aug 8 - Rakshinda
   - **Check** Can Lesley Ropp(Enablement Team) support this? - Matt/Jen
- Q3 Initiatives prioritization
   - Team 1 has no capacity till about late Sepetmber for new initiatives working on
      - Lighthouse migration - current ETA November
      - 526ez sync with paper version - ETA late Sept
         - Toxic Exposure and 4142 form flow changes with research     
   - Team 2 working on
      - Validation and errors
          - From Error reports, surveys, and failure reports
      - Monitoring/logging
   - **Reccomend** Delaying a big priortization workshop till there's capacity to pick up work
   - Do not need July-Sept prioritization at this point
   - Plan something for mid-Sept
- Bug Triage meeting
   - Different cadence?
   - Keep the current one for a couple more weeks
- Issue Management Strategy
   - Review Definition of Done, Severity and Priority
   - Come up with a framework for use for other teams
   - Come up with Plug and Play model
- Data Extract for VRO
   -  Conversations ongoing with Steve and Diana   
- Using non-Lighthouse API needs Matt's approval 

### Date: Jul 19 2023       
### Participants: Rakshinda, Austin, Matt, Jen, Steve
### Topics Covered:
- Individual Unemployability form is not live in production
   - There was conversation about taking this out of the main flow. Not making this live till that is done would be add the least disruption.
     - Leave this in staging for now
     - Revisit later when we are looking at other forms that may need to be taken out of the flow
     - Look at other feature flags and if there are other forms that are not live in production
- eVSS Migration - review updated roadmap and challenges
   - Currently looking at continuing into November
   - The development work may not be easy to share with Team 2 at this point in migration
   - May lean on peer review
   - The biggest roadblock is lack of a testing environment
   - Meeting scheduled with Steve to discuss possible work-arounds to reduce testing time
- Q3 Initiatives prioritization
   - Review where we are and plan for the workshops
   - What stakeholders do we need?  - Matt to get back on this
- Catch-up on Work in Progress
   - 526ez sync with paper form
      -  Toxic Exposure - restart work after hold
   - Intro page changes
      - Content for landing pages pending research report share out. Shareout expected this week.
   - 4142
      -  Are we deciding to hold off on this for now till we test with the larger evidence collection scope?
        Or
     - Do we want to move ahead with flow changes while working through content changes at a later stage?

      
### Date: Jul 12 2023       
### Participants: Rakshinda, Steve, Shannon
### Topics Covered:
- Q3 Initiatives prioritization
   - Ideas - Shannon and Steve
      - Let Shannon know when our board is ready for additions
      - Get the board ready by Friday morning
      - Performance 
         - Page load is around 3 sec
         - More actions are happening that take the page to fully load with data for a lot longer than 3 seconds   
         - How to measure it?
         - Establish baselines and metrics
         - Identify problem areas and teams that control the fix
      - Improve logging and metrics
         - Silent failures
         - Review Kyle's work on this
         - Sam from 526ex Team2 is also working on it
      -  Diagram the 526 error categories
          -  Steve setting up datadog dashboard for visualizing issues and scale
             - Pair with lamb duty engineer (Mark this week)
      - Improving health and monitoring metrics
          - Shannon to get the list
- Content for Toxic Exposure
   - Recommendation
     - Use data from the first few screens or data already filled out for TE screens
     - Review eng capacity based on recommendation
     - Research report to be pulled in this sprint   
- Content for Landing Pages
   - Waiting for research report share out
   - If there are a lot of changes, might needto restest
   - Share a targeted timeline for production with collab cycle
- 4142
   -  Shannon to review the changes in 526 and other 2 versions before deciding on testing / implementation
   -  May test 4142 and evidence collection   
- Combined road-map
    - In progress - Austin
    
### Date: June 28 2023       
### Participants: Rakshinda, Shannon, Steve
### Topics Covered:
- Issue Management Strategy
   - Bug Triage - how's it working out?
      - Need to start looking at bugs
      - Put the logging items for discovery sprint and review reported bugs in the triage   
   - Can we find a different time? Work something with Austin
- Q3 Initiatives prioritization
   - Idea solicitation
   - Timeline
   - Look at getting the board ready by July 10th for review with Matt
- Combined road-map
  - In progress - Austin
- Analytics
  - Updating site-map and URLs
  - Austin and Rakshinda working on requirements for dashboard updates
  - In progress - work on goals for cliamant experience
     -  Submission time
     -  Sessions for completion
     -  Customer satisfaction, other health metrics
     -  Keep Steve and Shannon included 
- Keep changes on 526 ancillary forms in sync with other applications and stand-alone digitized forms
- Stop retrying large file uploads (> 150 MB)

 
### Date: June 21 2023       
### Participants: Rakshinda, Austin, Shannon
### Topics Covered:
- Catch-up / updates from the last 2 weeks
- Issue Management Strategy
  - How's it been working so far
     - Particiaption by each team for pairing
     - Bug Board
     - Process
    - Good collaboration between deisgn and dev team feedback from Team 2
    - Lack or clarity and tools to troubleshoot on Team 2
    - Seeing some challenges in pairing with Team 2 - Team 1
    - Feedback session on process
    - Need to get back to Contact center on the process
      - Encrypted emails are not readable outside GFE
    - Action item - daily stand-up for issue management
       - Include Shannon/Steve while Matt is out
    - Issue with claims getting lost due to downstream validation issues or other reason - Steve A
       -  Kyle, Sam, Steve,
       -  Need to get it on the Zenhub board for prioritization
    - Scheduling a meeting with contact center to walk through the ticket creation and new process
      
- Collaboration between teams
  -  What's working and what isn't
  -  How to improve collaboration
     - Eng collab - Thomas to reach out to Anneliese
     - product sync - twice a week to begin with
       
  -  Analytics  
    - Meeting this week for
    - New pulls for analytics - Shannon / Steve / Austin /
       
- Roadmap
  - Review updates by Team Carbs with Austin on another sync
    
- PTO Coverage for design team over the summer
  - Lydia is 4-5 weeks
     - Planning to get first drafts of content/design for ongoing epics
     - Possibility of Nicole and Julie
  - Nichole back when Lydia is leaving
  
- eVSS migration status - Steve
  - Send update every Wednesday

- eVSS outage because a pdf for 150 M was uploaded as evidence
  - problem originated with efolder document upload  
  - This caused outage of multiple services
 
###Action item 
- Find more time this week to go over the rest of the items
- Add the 150M file upload constraint to the endpoint call for document upload 


### Date: June 14 2023
### Topics Covered:
- Funnel data and user behavior
  - Shannon wants to make sure all efforts (Steve, Nyantee, Julie) are synced, also that we are not seeking impossibly "perfect" targets
  - Austin says Team 2 looking at user behavior overall, alongside error messaging (sees as complementary)
  - Steve confirms if Thomas (Team 2) and Seth (Team 1) are the best folks for Sentry work
  - Austin reminds we also have shorter term work around really understanding submission errors
  - Austin wants to know if we want to prioritize certain user groups
- Communication between team 1 and 2
  - Lydia wonders if we can agree on where to communicate across teams in Slack
  - Matt suggests looping Sarah and Rakshinda into conversation about combined channel
  - Austin says he'll touch base with Sarah, Lydia will do same with Rakshinda
- Austin will share brainstorm MURAL for folks to look at async
- Bug Pilot Rollout
  - Austin thinks we should go ahead and start piloting with contact center
  - Matt says it will fall on teams to create tickets, Shannon will help with creating non-contact-center tickets (in Matt's absense)
  - Matt reminds to capture feedback on MURAL, and will look forward to formal review when he returns
  - Regarding Sentry/Datadog errors noted by Steve: Austin wondering if should prioritize? Steve says prioritize on case by case basis based on other things going on, expects there to be a pattern that means fixing one means fixing many
  - Matt reminds to prioritize based on severity, Austin will make sure folks on big duty are understanding/doing this
  - Austin re: request from Kimberly regarding Form Error lis, will meet to discuss, still need to schedule hand off


### Date: June 7 2023
### Topics Covered:
- Team 2 Board Quick Overview
  - First sprint planning complete
  - Review sprint goal
- Roadmap
  - Austin to update shared update in BDX Idea Board Mural 
- Issue Management Strategy
  - Next Steps, Who to contact at CCS?
    - Matt to forward meeting  
  - Austin to discuss with Lydia on template
  - Bug request from Kimberly in slack channel
    - Lydia to follow up 
- Branch of service drop-down in the BDD flow within the 526 (Barrett Cooper)
  - Austin and Lydia to follow up with Barrett and hand off for assessment 
- UX review label (discussion with Lydia)
- If time (not DBEx related):
  - Interface with CWINRS (VR&E request from Aude Togbenon and Elizabeth Solley)
    - Not a bug / this will go through new feature request process - Matt with follow up 
    - Austin to create a ticket in proper board for future discussion


### Date: May 31 2023
### Topics covered:
- Rakshinda's coverage - June 2 - June 15
  -  Invite Lydia for the next two weeks 526 prod sync 
- Do we need more than 30 min for this sync? 
    - Keep it to 30 min for next few weeks
- Issue Management Strategy 
   - What's next? 
   - Finalize and share the details with Contact Center Support team
- Sprint 7 goals
- Bugs and Defects
   - What's being picked up by Team Carbs?
   - Create a ticket for Kimberley for pulling a report of issues for Team Carbs to synthesize the most impacting defects to prioritize for work
- Create the new workspace for Disability Benefits Experience team for x-team view 
   - Does addition of new workspace in Zenhub add to expence/licenses? Don't know
   - Create the DBEX workspace
- Product syncs across other benefit teams
   - Keep 526 product sync/share across both team1/team2
- Schedule Meet and Greet for Austin and Julie with Alejandro - Matt S
   - Invite Austin and Julie to the biweekly VBA checkin
   - Send agenda link to Austin 
-  Update the roadmap to include Team Carbs work - Austin
-  Email about integration with va.gov - Austin to fwd email to Rakshinda and Matt

### Date: May 24 2023
### Topics covered:
- BDD SHA launch date
   - Is there a preferred day of the week?
   - Should we invite stakeholders for the review? Or do another one if they can't join today?
       -  Schedule a feedback session
- Issue Management Strategy - debrief 
   - PM/POs to do daily review and prioritization of the bugs
   - New channel for 526ez bugs 
      -  Will need to see if that is necessary
   - Different board (kanban)
     -  Can look at that
   - Team Strategy
     -  Team 1 - 1/2 people per sprint
     -  Team 2 - carve out velocity
     -  Pair throughout the sprint    
- Review upcoming sprint goals


      
### Date: May 17 2023
### Topics covered:
- Issue Management Strategy - debrief <br>
      - Went well with good ideas <br>
      - Write-up and finalize by next week <br>
      - Biggest problem is lack of responsiveness and make work visible(bug board) <br>      
- Prep for Benefits Portfolio goals next week <br>
      - Document work aligned with our goals/metric by end of this week <br>
- Next prioritization <br>
      - Plan for July after Matt is back from PTO <br>
      - Tag Matt/Shannon in the solicitation slack thread <br>
      - Matt already has VBA priorities for the next few years <br>
      - Matt to consider how/when to engage stakeholders for the prioritization <br>
- QA strategy <br>
      - Lean on Steve Albers with the engineering team around tooling and processes <br>
      - Define the desired process <br>
      - Not a clear process for all va.gov teams for all changes(outside the collab cycle) <br>    
- Matt's coverage during PTO <br>
      - Possibly Shannon/Zach <br>
      - Will share coverage in the next couple of weeks

### Date: May 10 2023
### Topics covered:
- Future DOC Bug - [what we learnt](https://dsva.slack.com/archives/C8R3JS8BU/p1683646680437329?thread_ts=1683565044.419109&cid=C8R3JS8BU) <br>
   From: Cooper, Barrett E., VBAVACO  <br>
Sent: Wednesday, February 3, 2021 9:16 AM  <br>
Subject: Date of Contention  <br>
Is it possible to make the date of contention for BDD and BDD-Excluded claims submitted on VA.gov as the date of claim which is the day after discharge? The field is reporting VA.gov is entering the date the claim was submitted. We are required to enter the contention with the date of the day after discharge.
    - So using service exit date as claim open date is by design. Should we consider adding a validation to prevent them from entering contract end date as a solution?
    - Bring it up on the next VBA sync
- VAMC bug 
   - User is not able to enter VAMC and move forward
   - We find that it is not necessary input as it gets ignored by VSR/RVSR
   - Should we consider removing this or making it optional? Do we need to run this by Alejandro/Matt B - Bring it up on the next VBA sync
- Bugs/Defects strategy
   - Determine severity of the bug with the stakeholders / contact center
      - Middle of the sprint
      - Number of veterans / percentage of users affected / etc.  
      - When did the issue start?
      - Specific example
      - Send an email to Rakshinda/Matt with as much information as possible
      - Action Item - RA - Rubric for bug severity assessment
      - Action item - RA - Review with the team and share the Matt
      - Copy Matt on all emails with stakeholders,esp related to bugs
   -  Priortize bugs for discovery / fix for next sprint -   
- Bugs - what are we picking next
   - Bug fix for past date for BDD
   - Possibly discovery for Identification error  

### Date: May 3 2023
### Topics covered:
- Bugs/Defects priortization
   - Future DOC - pending data from Matt B on how many claims are being established with this issue - Matt Self
- New 526 team
   - What kind of work should we consider starting with? Bugs / eVSS migration / what else is important to the stakeholders that is currently waiting?  
- Review road-map
- OCTO lead engagement
   - Shannon focused on 526 and Julie is focused on non-526 claimant experience. This will change and Julie will take on 526 as well.
   - Engage Shannon/Julie as SMEs/support for design and research before engaging collab cycle
   - Engage Steve Albers as tech lead more actively
 
 - Metrics
   - Reconsider # of sessions to complete a claim based on the last portfolio goals discussion <br>

   - Look at completion rate excluding the unauthenticated landing page
   - Include completion rate in helat metrics
   - Look at reporting periods in fiscal year(Oct - Sept)
   - Possible research focus into drops into completion rate by steps

 Data from Jan 1' 2023 - April 29' 2023  
|Sessions to complete|Total Unique Users|Percentage|Target|
|-----|-----------|----|-------|
|1 session|86,081|54.0% |75%|
|2 sessions|40,034|25.1% |15%|
|3 or more|33,304|20.9% |10%|

 Data from Oct 1' 2021 - Sept 30' 2022  
|Sessions to complete|Total Unique Users|Percentage|
|-----|-----------|----|
|1 session|609,856|50.2% |
|2 sessions|281,719|23.2% |
|3 or more|322,946|26.6% |

### Date: April 19 2023
### Topics covered:
- Bugs/Defects priortization
   -  Future DOC - pending data from Matt B on how many claims are being established with this issue - Matt Self
   - ordered by priority on the idea board
   - break these up into
      - discovery of the scope/scale of the issue
      - dicovery of the fix
      - fix as priortized
- Review road-map
- Metrics
   - Keep track of # of sessions to complete a claim
   - Understand why the # has gone up to 4.7 (160%) in April


### Date: April 19 2023
### Topics covered:
- Review road-map
- Collab cycle expectations - While the timelines are expectations for normal tickets, we may be able to get some things expedited for urgent work.
- Bugs/Defects priortization
   -  Future DOC - pending data from Matt B on how many claims are being established with this issue
   -  Identification issue - Survey feedback has revealed that a number of 526 users receive an error stating "We need more information from you before you can file a Benefits Delivery at Discharge claim 
   -  508 blocker - potentially a very small FE change



### Date: April 5 2023
### Topics covered:
- 6 weekly portfolio goals prep - no prep required
- off site next week - availability for syncs and meetings with stakeholders?
- BDD Self Assessment - review plan with stakeholders
   - ETA to complete design plan by end of this week
   - When can we review with Kevin Hillegas and Barrett Cooper? 
- Validation for future DOC bug 
   - Are we expediting it over other work? Yes, include it to start in the next sprint. Talk to collab cycle office hours
- Who owns HCA 10 10? (Healthcare Application)
   - HCA is using evss common API services and we are not sure who should own the migration - Patrick Bateman
   - We do not need to migrate this
- Bug - Documents not reaching efolder
   - Matt is checking with conforma 
Matt 
   - An evss service PCIU that contains personal contact info and potentially military service history - Is it being used by 526ez?
      - Is currently being included with BRD migration
   - rateddisabilities on ebenefits and va.gov are pulling info from two different sources
      - Melissa Webstock from ebenefits
      - ebenefits source is the better source per VBA
      - Get LH team involved ifo from 
     
### Date: March 29 2023
### Topics covered:
- How do we want to share the outcome and continued progress after priortization with stakeholders
   - Iterative approach
   - Mural board is the preferred medium
   - Start with epics
   - Break down work
   - Roadmap
   - Feature Brief for each idea, as applicable
- 526 Lighthouse migration timeline 
   - 4 endpoints need technical doscovery before being able to estimate the work on actual migration
      - intenttofile, common API, submit, getpdf
      - Frontloading all the discovery work will take 2 sprints 
      - Expect to be able to share the migration roadmap/timeline by end of April(sprint end date of April 26th)
      - **Action Item** - Communicate the timeline to Janet Cutinho
- Cadence for Matt meeting with the team
   - Open to whatever frequency is best for the team, given calendar constraints
   - Review next week on how to best engage Matt, cadence and expectations from these meetings 
- Product/UX meeting scheduled on April 4th to review portfolio goals

### Date: March 28 2023
### Topics covered:
- Value Effort matrix review with stakeholders - prioritization prep for 4-6 ideas
- 526 Lighthouse migration timeline 
   - Needs discovery
   - Prioritize discovery for the next few sprints as needed so we can come up with a timeline for the program  
- Review sprint 2 goals
- Future Date of Claim findings 
  - Fold the validation fix for not allowing a veteran to enter future service exit date into the other validation/error msgs epic 
  **Action items** 
   - Write-up of the findings to communicate with the stakeholders and identify next steps
   - Ask for erroneous claims to debug further, if nedeed 
- Ancillary forms 
   - Reviewed high level outcome of meetings with Forms Digitization team
   - **Action Item** - Will schedule detailed Product/UX discussion for next steps
- Product Profile
  - There are 3 product profiles for 526ez. 
  - **Action item** - Delete/archive BDD and Original Claims product profiles after 526ez product profile has been updated.
- Later- **Action item** - establish a continuous idea intake/evaluation process once the intial roadmap and epics have been drafted

### Date: March 28 2023
### Topics covered:
- Value Effort matrix review with stakeholders - prioritization prep for 4-6 ideas
- 526 Lighthouse migration timeline 
   - Needs discovery
   - Prioritize discovery for the next few sprints as needed so we can come up with a timeline for the program  
- Review sprint 2 goals
- Future Date of Claim findings 
   - Write-up of the findings to communicate with the stakeholders and identify next steps
   - Ask for erroneous claims to debug further, if nedeed 
- Ancillary forms 
   - Reviewed high level outcome of meetings with Forms Digitization team
   - Will schedule detailed Product/UX discussion for next steps
- Product Profile
  - There are 3 product profiles for 526ez. We can delete/archive the BDD and Original Claims profiles after the 526ez has been updated.
  
### Date: March 22 2023
### Topics covered:
- Value Effort matrix review with stakeholders - prep and expectations
- Review data for Value Effort matrix review
- New tickets for evaluating value
- Feedback Survey
- BDD Requests 
   - Separation Health Assessment - Part A Self-Assessment  <br>
         Questions to consider:  <br>
             - MVP and target state? <br>
             - Define MVP - Does this require a change to the flow of 526ez form or just a content change?  <br>
             - What's the end state we want to target?
    - Are the 2nd set of requests all covered by the BDE team for 526 flow? 
- Logistics for 526ez overview with Matt/Sade/Robin/Kyle

### Date: March 15 2023
### Topics covered:
- Value matrix debrief
- Value matrix follow-up with Stakeholders
- Potential x-team overview from previous 526 team

### Date: March 9 2023
### Topics covered:
- Goal-ideas alignment on the idea board
   - Matt to review the board and add ideas/comments as needed
   - Matt to discuss the upcoming prioritization effort with VBA stakeholders
- Plan for next steps in prioritization
   - Schedule a value conversation with stakeholders middle of next week (week of March 13th) - Rakshinda
   - Schedule an effort/complexity conversation with the team and Matt later next week (week of March 13th) - Rakshinda
   - Schedule a prioritization meeting with the stakeholders and team to review the ideas on value/effort matrix and agree on what ideas to pursue (week of March 13th or 21st) - Rakshinda
- Handling incoming bugs
   - The bugs for all of va.gov are reported together
   - Matt to do the initial intake for 526 bugs and forward them to the us - manual
   - Matt(transition to Anneliese) follow-up on updates/completed bugs with the reporter, as needed
   - Later - look at possible automation of updates via SNOW/github 
- Handling incoming improvement requests
   - Schedule intake with the reporter with Matt and team
   - Prioritize and next steps BAU

### Date: Feb 15 2023
### Topics covered:
- Review github organization
- Ongoing discovery work
- Pre-prioritization work
- Plan for prioritization
- Plan for next week
   - Organize ideas/workstreams
   - Start discovery on known bugs/defects
   - Team norms workshop
- Planning for week of Feb 27th
   - Plan prioritization workshop - needs to be scheduled
   - Stakeholder introductions - needs to be scheduled
   
### Date: Feb 6' 2023
### Topics covered:
- Does this time work for our weekly sync? - Mornings
- Kick-off ideas 
   - Introductions
   - Context/background
   - Mission/Goals/North Star
   - Walk-through of 526 submission
   - Any known problems to solve
- Team of Teams slide
- Link to the old Zenhub board and existing issues
- 508 issue list - reach out to accessibility crew?
- Idea board Mural  access for Matt
- Review potential workstreams
- Is there a teams/stakeholder map - will review in the kick-off
- Which teams/people would we be working closely with? 
    - Platform team (collaboration cycle, help with work in progress)
    - Benefits Management(claim status) team - check status for existing claims
    - Decision Reviews team - workflow for denied claims (also picking up supplemental claims)
    - Automated Benefits Deliveries team (VRO/RRD)
     
    Claimant experience teams
          - Health
          - Benefits ( our team is here - focusing in claimant experience)
          - Digital experience
- How do you want to see this team function? Anything specific that was not happening before that we should do or vice-versa? - Will be addressed in the kick-off
- Fresh initiative (Supplemental claims are no longer the first goal; they are being handled by another team)
- Review old reserach but start validating it and plan new research
- Stakeholders
      - Business - Compensation service- administers benefits in VBA

#### Action items: 
 - Get Matt access to the A6 mural board - Rakshinda
 - Set up weekly sync - Rakshinda
 - Reach out to accessibility team for the audit report - Rakshinda
 - Find out list of existing 526 issues - try 526 label - Rakshinda

### Date: Jan 31st 2023
### Attendees - Matt Self, Rakshinda Aslam

### Topics covered:
- Introductions
- What is the mission for the BDE (Benefits Disability Experience) team?
At the highest level, the core disability experience team is here to own, from the ground up, the online submission experience for Veteran disability compensation claims and to make that experience as fast and easy as possible to complete, while ensuring submissions are timely, accurate, and in a state that allow VSR and RVSRS (the people who review and rate claims) to rate them quickly and easily!
- Are there any road-maps/2023 goals in existence?
Emphasizing from the blurb above, the key factors I'd like to move the needle on are:
  - SPEED: I'd like to reduce by half, the time it takes to submit a disability application online (10th %tile)
  - EASE: Applications should require as little cognitive burden and as few points of active interaction as possible
  - ACCURACY: applications should have 50% fewer errors than those submitted on paper (including PDFs)
  - OUTCOMES: VA.gov-submitted applications should result in more favorable outcomes (this one is squishy and perhaps gets eliminated)

Comments: There is not a lot of data behind these goals. We may need to design research to get anecdotal information that will help build a baseline, inform future work and check for post resolution data for success.
- Do we have short term/immediate goals for which work is in progress?
  - Looking at work flowing in three main workstreams 
  - Bugs/defects from the 526 form submission flow on VA.gov
        - This is not 24 by 7 operational support. Team will need to work on prioritized bugs mid-sprint, as needed.
  - Integrate with API transition from eVSS to Lighthouse infrastructure
        - 3 APIs on the transition roadmap
          - One in progress
          - One to be started
          - One will be decommissioned and needs to connect to a different existing Lighthouse API or built in-house)
  - Conduct research (w/vets, stakeholders, claims processors, and perhaps others) to identify opportunities and build a roadmap to make progress on the goals above
Comments: 
  - Item i and ii could be good for onboarding engineers and getting them used to the code base. 
  - Plenty of old research to be found on https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez
  - Do we have a list of issues identified with the current core submission process?
    - Yes - Matt to look for the zenhub board link
    - Older ones may not be valid anymore, look for validity
    - 508/Accessibility ones need to be looked at - those are valid and the outcome of a recent accessibility audit.

### Action items:
- Schedule a cadence for product sync - weekly to begin with? - Rakshinda
- Schedule a kick-off with the BDE team and Matt - early next week? - Rakshinda
- Request mural board access as a user with rights to create Mural boards. - Matt?
- Link to the zenhub board with current issues/defects for 526 form. - Matt




