# SPRINT GOALS
🟦 ENG 🟨 RE 🟥 DE 🟪 PM 🟩 Analytics ✔️ Done ❗ Priority ⛔ Blocked :roller_skate: Rolling over




______________________________________________________________________________________________________________________________________________________


<details>
<summary>FUTURE SPRINT - 9/4/2024 - 9/17/2024 </summary>
______________________________________________________________________________________________________________________________________________________

## SPRINT 15 - 9/4/2024 - 9/17/2024  ------- FUTURE FUTURE / TENTATIVE ------

#### PLANNED RELEASES 
- NONE

#### SPRINT TICKETS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Tech & Design Debt**
       - ❗ Check if we're unblocked to push up PRs (due to ongoing discussion about EPS information in vets-website)
       - ⛔ WAITING ON SCOPE DECISIONS:
          - First appointment or all appointments scheduled within referral expiration?
          - What VA or external system will be used to know when a referral has been VA authorized? (E.g., EPS, mobile-hsrm-service in MAP, Consult Status: Authorized consult factor in CTB from vista-api-x, etc.)
          - Still using VA Notify for notification?
       - ❗ Create new design tickets when scope decisions have been made
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
      - 🟥 [[Design] Make updates to scheduling links to help with confusion around link redundancy](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/91113)
      - 🟥 [[Design] Change expiration date format in task card](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/91114)
      - 🟥 [[Design] Create final wireframes for short-term referral location solution](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/91938)
    - **Sub Goal: [Feature] MOU ISA**
      - 🟥 🟦 [Review diagram reqs for interconnection between va.gov and EPS](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/91576)
    - **Sub Goal: [Feature] Get New Referrals**
      - 🟦 [[SPIKE] How are we going to set up a database to store referral IDs?](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/91911)
      - ⛔ ❗ 🟥 Fill out work request for VA Notify
      - ⛔ 🟥 Send messages to Melanie for review and Privacy Officer
    - **Sub Goal: [Feature] Cancel cc appts that have been scheduled**
      - 🟥 [[Design] Add cancel steps into Community Care VSS after consult approval workflow (Mural)](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88898)
    - **Sub Goal: [Feature] Get CC app within vets-website set up**
      - 🟦 [[FE] Time selection inline validation error](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/91914)



 
</details>


______________________________________________________________________________________________________________________________________________________

## SPRINT 14 - 8/21/2024 - 9/3/2024 - CURRENT SPRINT


#### PLANNED RELEASES 
- NONE

#### SPRINT TICKETS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Tech & Design Debt**
       - ~❗ 🟦 [Get vets-website staging env pointing to WellHive Sandbox](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88892)~
       - ~🟦 [Meet with Ben and Jeff to get project onboarding](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90953)~
       - ~🟦 [Meet with Simi and Lee to get onboarded from engineering perspective](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90956)~
    - **Sub Goal: [Feature] Get New Referrals**
       - ✔️ 🟦 Stephen checking if referral ID is considered PHI (to know if we can append it to an inbound url to VA.gov) 
       - ✔️ ❗ 🟦 [[SPIKE] How are we going to solve for knowing the referral ID from a unique url from a text message (VA Notify)](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/90906)
       - ✔️ 🟦 [[Spike] Determine how we'll keep track of which referrals we've sent to VA Notify or not](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/90907)
       - :roller_skate: ❗ 🟥 Fill out work request for VA Notify
       - :roller_skate: 🟥 Send messages to Melanie for review and Privacy Officer
    - **Sub Goal: [Feature] Get connected with WellHive**
       - ~🟦 [[Eng] Create WellHive endpoints in vets-api](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/89819)~
    - **Sub Goal: [Feature] Conduct research study with Veterans**
       - ✔️ 🟨 [[Research] Create readme of research findings and move Research Repo ticket to done](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88890)
       - ✔️ 🟨 Present research findings readout to OCTO, VSS, EPS, IEN, PMD
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
       - ✔️ 🟥 [Create low-fi design options for referrals in Appts app](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/90909)
       - ✔️ 🟥 [Implement design or a11y changes to date and time picker component error alert or inline alert](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/90908)
       - ✔️ 🟥 Address new design tickets as a result of research recommendations
       - 🟥 [[Design] Move distance to default and how to display distance and estimated travel time in provider list page](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/91096)
    
      
</details>


______________________________________________________________________________________________________________________________________________________

## SPRINT 13 - 8/7/2024 - 8/20/2024

#### PLANNED RELEASES 
- NONE
  
#### SPRINT TICKETS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Tech & Design Debt**
       - ❗ 🟦 [Get vets-website staging env pointing to WellHive Sandbox](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88892)
    - **Sub Goal: [Feature] Get CC Consults**
       - ✔️ ❗ 🟦 [Determine method to retrieve consults based on convo with VeText](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87736)
    - **Sub Goal: [Feature] Get connected with WellHive**
       - 🟦 [[Eng] Create WellHive endpoints in vets-api](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/89819)
       - ~🟦 [[Eng] Create FE service layer](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/89821)~
    - **Sub Goal: [Feature] Conduct research study with Veterans**
       - ✔️ ❗ 🟨 [[Research] Create research findings presentation for OCTO, VSS, EPS](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88889)
       - ~🟨 [[Research] Create readme of research findings and move Research Repo ticket to done](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88890)~
       - ✔️ 🟨 [Create tickets to implement recommendations from research findings](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88891)
       - ✔️ 🟥 Meet with Melissa and Peter to cross-share findings and determine what design or content is needed as a result of their findings
       - 🟨 Schedule research findings readout to OCTO, VSS, EPS
       - ✔️ 🟨 [[Create ED ticket for filtering] Several teams have been working on "filters" for content. We really do not have a great pattern. I would suggest you submit this to experimental design.](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/85515)
    - **Sub Goal: [Feature] Call Search a Patient's Appts API from WellHive to know if any appts need to be displayed on a patient's Upcoming Appts page**
       - ~🟦 [[Eng] Create code to handle not double booking an appt at the same time](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/89730)~
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
       - ✔️ 🟥 Attend Design Office Hours for date and time picker component error
       - ✔️ 🟥 [Move annotations in MVP page to specs page in Figma](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88026)
    - **Sub Goal: [Feature] Cancel cc appts that have been scheduled**
      - ✔️ 🟥 [Determine "cancelation" of cc direct scheduled appt feature](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/84023)


      
</details>

______________________________________________________________________________________________________________________________________________________

## SPRINT 12 - 7/24/2024 - 8/6/2024 

#### SPRINT GOALS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Tech & Design Debt**
    - **Sub Goal: [Feature] Get CC Consults**
    - **Sub Goal: [Feature] Conduct research study with Veterans**
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
    - **Sub Goal: [Feature] Migrate app pages to vets-website staging env**
    - **Sub Goal: [Feature] Call Search a Patient's Appts API from WellHive to know if any appts need to be displayed on a patient's Upcoming Appts page**
    - **Sub Goal: [Feature] Integrate mocks with FE pages**
    - **Sub Goal: [Feature] Get CC app within vets-website set up**


#### PLANNED RELEASES 
- NONE
  
#### SPRINT TICKETS
- **GOAL: Introduce community care direct scheduling in Appointments** 
    - **Sub Goal: [Feature] Tech & Design Debt**
       - :roller_skate: ❗ 🟦 [Get vets-website staging env pointing to WellHive Sandbox](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88892)
    - **Sub Goal: [Feature] Get CC Consults**
       - :roller_skate: ❗ 🟦 [Determine method to retrieve consults based on convo with VeText](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87736)
       -  ~⛔ 🟥 [Update Community Care VSS after consult approval workflow (Mural)](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88886)~
    - **Sub Goal: [Feature] Conduct research study with Veterans**
       - ✔️ ❗ 🟨 [[Research] Complete research synthesis](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88888)
       - :roller_skate: ❗ 🟨 [[Research] Create research findings presentation for OCTO, VSS, EPS](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88889)
       - :roller_skate: 🟨 [[Research] Create readme of research findings and move Research Repo ticket to done](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88890)
       - :roller_skate: 🟨 [Create tickets to implement recommendations from research findings](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88891)
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
       - ✔️ 🟥 [[Design] Create design when Veteran already has an appointment at that time](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88887)
       - ✔️ 🟥 [[Design] Rework filter and results location now that preferred provider area is removed](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/89103)
    - **Sub Goal: [Feature] Migrate app pages to vets-website staging env**
       - 🟦 [Move Filtering of providers page to stg eng](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88896)
       - 🟦 [Move Choose a provider page with filtered results to stg env](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88895)
    - **Sub Goal: [Feature] Call Search a Patient's Appts API from WellHive to know if any appts need to be displayed on a patient's Upcoming Appts page**
       - :roller_skate: 🟦 [[SPIKE] Determine approach for checking if appts have been scheduled in WellHive, but aren't in VAOS Backend yet](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88491)
    - **Sub Goal: [Feature] Integrate mocks with FE pages**
       - ✔️ 🟦 [Provider list based on referral and patient preferences page](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/87727)

</details>

______________________________________________________________________________________________________________________________________________________

## SPRINT 11 - 7/10/2024 - 7/23/2024

#### SPRINT GOALS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Conduct research study with Veterans**
    - **Sub Goal: [Feature] Get CC Consults**
    - **Sub Goal: [Feature] Integrate mocks with FE pages**
    - **Sub Goal: [Feature] Get CC app within vets-website set up**
    - **Sub Goal: [Feature] Design & Tech Debt**



#### PLANNED RELEASES 
- NONE

#### SPRINT TICKETS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Conduct research study with Veterans**
       - ✔️ ❗ 🟨 [Conduct research sessions](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87733)
       - ✔️ ❗ 🟨 [Fill out quantitative question tracker](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87734)
       - ✔️ ❗ 🟨 [Update convo guide and CodePen prototype based on part 1 completion](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87735)
       - ✔️ 🟨 🟥 [[CodePen] Make adjustments based on CAIA feedback](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/zh/338)
    - **Sub Goal: [Feature] Get CC Consults**
       - ✔️ 🟪 Schedule meeting with Stephen Barrs and Shane Elliott after July 15 to discuss getting CC Consults using vista-api-x
       - ⛔ ~❗ 🟦 [Document architecture or sequence diagrams in repo based on conversation with VEText](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87736)~
    - **Sub Goal: [Feature] Integrate mocks with FE pages**
       - 🟪 Get Jeff and Ben spun up on local in order to validate FE tickets
       - ⛔ ~🟦 [Upcoming appts page with referral task card](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/87723)~
       - ✔️ 🟦 [Referral introduction page with referral and patient preferences](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/87724)
       - :roller_skate: 🟦 [Provider list based on referral and patient preferences page](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/87727)
       - ~🟦 [Filtering providers page](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/87729)~
       - ~🟦 [Choose date and time for provider page](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/87731)~
    - **Sub Goal: [Feature] Get CC app within vets-website set up**
       - 🟦 [Pending appts page with unscheduled referral and expired referral](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87738)
       - :roller_skate: 🟥 [Move annotations in MVP page to specs page in Figma](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/88026)
    - **Sub Goal: [Feature] Design & Tech Debt**
       - ✔️ 🟥 [Add annotations into Figma MVP where we're calling the different API](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87901)
       - 🟥 🟪 Review and update (or provide feedback on) schedule from Rob


      
</details>

______________________________________________________________________________________________________________________________________________________

## SPRINT 10 - 6/26/2024 - 7/9/2024 

#### SPRINT GOALS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Pull in patient preferences for user**
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
    - **Sub Goal: [Feature] Get CC app within vets-website set up**
    - **Sub Goal: [Feature] Get authorized referrals from CDW**
    - **Sub Goal: [Feature] Conduct research study with Veterans**
    - **Sub Goal: [Feature] Design & Tech Debt**
    - **Sub Goal: [Feature] Get connected with WellHive**




#### PLANNED RELEASES 
- NONE

#### SPRINT TICKETS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Pull in patient preferences for user**
         - ✔️ ❗ 🟦 [[BE] [SPIKE] 4 hours - Discuss or find out how to access to patient preferences (preferred provider)](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/84026)
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
         - ✔️ 🟥 [Midpoint Review - **Accessibility Feedback** - Unified Appointment Experience, Appointments, Community Care Direct Scheduling](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/85828)
    - **Sub Goal: [Feature] Get CC app within vets-website set up**
         - ✔️ 🟦 [Add alert scenarios on provider list page](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/83872)
         - ~🟦 [[FE] Filtering](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82611)~ 
    - **Sub Goal: [Feature] Get authorized referrals from CDW**
         - ✔️ Waiting on Stephen and Kristen McConnell to let us know what the VA leads from this team need.
    - **Sub Goal: [Feature] Conduct research study with Veterans**
         - ✔️ ❗ 🟨 [Add quantitative response tracker to Mural](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/86931)
         - ✔️ 🟨 [Conduct pilot research session](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/86936)
         - ✔️ 🟨 [Update convo guide & prototypes based on pilot](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/86937)
         - ✔️ 🟨 [Populate observer sign up sheet with roster from Perigean](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/86935)
         - :roller_skate: 🟨 🟥 [[CodePen] Make adjustments based on CAIA feedback](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/zh/338)
    - **Sub Goal: [Feature] Design & Tech Debt**
         - ✔️ 🟥 🟪 Get on VEText (Justin Wowk) radar to understand if concept is feasible
    - **Sub Goal: [Feature] Get connected with WellHive**
         - ✔️ 🟦 [Validate access to time slots API endpoint from WellHive](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/86958)





</details>

______________________________________________________________________________________________________________________________________________________

## SPRINT 9 - 6/12/2024 - 6/25/2024 
#### SPRINT GOALS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Pull in patient preferences for user**
    - **Sub Goal: [Feature] Conduct research study with Veterans**
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
    - **Sub Goal: [Feature] Get CC app within vets-website set up**
    - **Sub Goal: [Feature] Cancel cc appts that have been scheduled**
    - **Sub Goal: [Feature] Get authorized referrals from CDW**


#### PLANNED RELEASES 
- NONE

#### SPRINT TICKETS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Pull in patient preferences for user**
         - :roller_skate: ❗ 🟦 [[BE] [SPIKE] 4 hours - Discuss or find out how to access to patient preferences (preferred provider)](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/84026)
    - **Sub Goal: [Feature] Conduct research study with Veterans**
         - ✔️ 🟨 [Incorporate feedback to convo guide](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/85686)
         - ✔️ 🟥 🟨 [Add content into Figma prototype for usability testing](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/84211)
         - ✔️ 🟦 No continuation of work on the CodePen data and time selection calendar 
         - ✔️ 🟨 Submit research materials to Shane
         - ✔️ 🟨 Submit CAIA ticket for A11y prototype review and supporting sessions
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
         - ✔️ ❗ 🟥 [[Design] Make adjustments to MVP and Prototype based on filter conversation with WellHive](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/85750)
         - ✔️ 🟥 🟦 Discuss UX around availability via WellHive
              - ~[Comment in IA Feedback ticket from Midpoint Review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/85523#issuecomment-2158477844)~
              - ~[Comment in Figma](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4?node-id=2130-7431#829820263)~
         - 🟥 Address Midpoint Review feedback
              - ✔️ 🟥 [Midpoint - **Content** - Unified Appointment Experience, Appointments, Community Care Direct Scheduling](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/85519)
              - ✔️ 🟥 [Midpoint Review - **IA Feedback** - Unified Appointment Experience, Appointments, Community Care Direct Scheduling](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/85523)
              - ✔️ 🟥 [Midpoint Review - **Design Feedback** - Unified Appointment Experience, Appointments, Community Care Direct Scheduling](https://github.com/department-of-veterans-affairs/va.gov-team/issues/85515)
              - :roller_skate: 🟥 [Midpoint Review - **Accessibility Feedback** - Unified Appointment Experience, Appointments, Community Care Direct Scheduling](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/85828)
              - ~🟥 Submit experimental design ticket for filtering~
         - ✔️ 🟥 [Review feedback and make updates to business process flow (Mural(s))](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/85555) 
    - **Sub Goal: [Feature] Get CC app within vets-website set up**
         - ✔️ 🟦 [Provider choose a date and time page](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/83542)
         - :roller_skate: 🟦 [Add alert scenarios on provider list page](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/83872)
         - 🟦 [[FE] Filtering](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82611)
    - **Sub Goal: [Feature] Cancel cc appts that have been scheduled**
         - ~🟪 [Determine "cancelation" of cc direct scheduled appt feature](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/84023)~
    - **Sub Goal: [Feature] Get authorized referrals from CDW**
         - ✔️ Check in with Kay ([Slack thread](https://dsva.slack.com/archives/C06SQ48B205/p1715634052731809?thread_ts=1713973982.697579&cid=C06SQ48B205)) about access to referrals via CDW      


</details>


______________________________________________________________________________________________________________________________________________________

## SPRINT 8 - 5/29/2024 - 6/11/2024

#### SPRINT GOALS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Conduct research study with Veterans**
    - **Sub Goal: [Feature] Create KPIs**
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
    - **Sub Goal: [Feature] Get connected with WellHive**
    - **Sub Goal: [Feature] Get CC app within vets-website set up**
    - **Sub Goal: [Feature] Cancel cc appts that have been scheduled**
    - **Sub Goal: [Feature] Get authorized referrals from CDW**



#### PLANNED RELEASES 
- NONE

#### NOTES
- If time permits, create integrate mocks per page tickets and assign to [[Feature] Integrate mocks with FE pages Epic](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/84195). 
     - If time permits, create functional notes using Figma Annotation Library per page tickets (to support integration of mocks per page) and assign to [[Feature] Integrate mocks with FE pages Epic](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/84195). 

#### SPRINT TICKETS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Conduct research study with Veterans**
         - ✔️ 🟥 🟨 🟦 [Create CodePen Prototype(s) for Research](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/83297)
         - ✔️ ❗ 🟨 [[Research] Draft convo guide for research study](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82900)
    - **Sub Goal: [Feature] Create KPIs**
         - :roller_skate: 🟩 [Create KPIs and ensure business alignment](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82894)      
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
         - ✔️ 🟥 Schedule Midpoint review
         - ✔️ 🟥 [[Design] Create desktop and tablet size frames in Figma](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/83373)
         - ✔️ 🟥 [[Design] Create template & spacing page in Figma and Screenreader spec page in Figma](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82898)
         - ✔️ 🟥 [[Design] Zero results, search again, select different filters](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/83442)
     - **Sub Goal: [Feature] Get connected with WellHive**
         - ✔️ ❗ 🟦 [Test WellHive API connection](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/84022)
     - **Sub Goal: [Feature] Get CC app within vets-website set up**
         - :roller_skate: 🟦 [Provider choose a date and time page](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/83542)
         - :roller_skate: 🟦 [Add alert scenarios on provider list page](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/83872)
         - :roller_skate: 🟦 [[FE] Filtering](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82611)
     - **Sub Goal: [Feature] Cancel cc appts that have been scheduled**
         - ⛔ :roller_skate: 🟪 [Determine "cancelation" of cc direct scheduled appt feature](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/84023)
     - **Sub Goal: [Feature] Get authorized referrals from CDW**
          - Check in with Kay ([Slack thread](https://dsva.slack.com/archives/C06SQ48B205/p1715634052731809?thread_ts=1713973982.697579&cid=C06SQ48B205)) about access to referrals via CDW      




   
</details>
______________________________________________________________________________________________________________________________________________________

## SPRINT 7 - 5/15/2024 - 5/28/2024

#### SPRINT GOALS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Conduct research study with Veterans**
    - **Sub Goal: [Feature] Create KPIs**
    - **Sub Goal: [Feature] Create FE mocks to mitigate risk after WellHive connection work begins**
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
    - **Sub Goal: [Feature] Get authorized referrals from CDW**
    - **Sub Goal: [Feature] Get CC app within vets-website set up**
    - **Sub Goal: [Feature] Surface referrals for Veterans**



#### PLANNED RELEASES 
- NONE

#### SPRINT TICKETS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Conduct research study with Veterans**
         - ✔️ 🟨 [[Research] Socialize research plan and address feedback](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82836)
         - ✔️ 🟥 [[DESIGN] Finalize Figma Prototype(s) for Research](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/83566)
         - ~🟨 [[Research] Draft convo guide for research study](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82900)~
         - ✔️ 🟥 [[[DESIGN] Finalize Figma Wireframesfor Research](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82902)
    - **Sub Goal: [Feature] Create KPIs**
         - :roller_skate: (Overcommitted) 🟩 [Create KPIs and ensure business alignment](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82894)      
    - **Sub Goal: [Feature] Create FE mocks to mitigate risk after WellHive connection work begins**
         - ✔️ 🟦 [Mock wellHive Drive time endpoint#82389](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82389)
         - ✔️ 🟦 [Mock wellHive Patient endpoint#82391](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82391)
         - ✔️ 🟦 [Mock wellHive Network endpoint](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82390)
         - ✔️ 🟦 [Mock wellHive SpecialtyGroup endpoint](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82396)
         - ✔️ 🟦 [Mock wellHive ProviderOrganization endpoint](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82392)
         - ✔️ 🟦 [Mock wellHive ProviderService endpoint](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82394)
         - ✔️ 🟦 [Mock wellHive Referral endpoint](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82393)
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
         - ~🟥 [[Content] Review and finish content draft](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81767)~
         - ✔️ 🟥 Attend Design Office Hours and get feedback from Platform
         - ✔️ 🟥 [[DESIGN] Design updates to filtering](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/83141)
         - ✔️ 🟥 [[UX] Share out, get feedback, and implement changes to updated service blueprint](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82899)
         - ✔️ 🟥 [[Design] Update Intro page to communicate that we're showing you more providers than just your preferences, if provided in the referral](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/83298)
    - **Sub Goal: [Feature] Get authorized referrals from CDW**
         - ✔️ 🟨 🟥 [[SPIKE] For MVP, brainstorm how we might want to show all referrals to Veterans](https://github.com/department-of-veterans-affairs/va.gov-team/issues/81410)
    - **Sub Goal: [Feature] Get CC app within vets-website set up**
         - ✔️ 🟦 [[FE] Review your approved referral and start scheduling page](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82555)
         - ✔️ 🟦 [[FE] Choose a community care provider (page)](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82612)
         - ✔️ 🟦 [[FE] Confirm & Review appointment (page)](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82610)


   
</details>
______________________________________________________________________________________________________________________________________________________

## SPRINT 6 - 5/1/2024 - 5/14/2024
#### SPRINT GOALS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Conduct research study with Veterans**
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
    - **Sub Goal: [Feature] Create Appointment Notifications Hub**
    - **Sub Goal: Address Collab Cycle feedback from Design Intent**
    - **Sub Goal: [Feature] Discovery on Access Standards and drive time calc**
    - **Sub Goal: [Feature] Create FE mocks to mitigate risk after WellHive connection work begins**
    - **Sub Goal: [Feature] Get CC app within vets-website set up**


#### PLANNED RELEASES 
- NONE

#### SPRINT TICKETS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Conduct research study with Veterans**
         - ✔️ 🟨 [[Research] Draft research plan](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81766)
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
         -  ✔️ 🟥 [Create two wireframe prototypes](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81969)
         - ✔️ 🟥 [[DESIGN] Create wireframes for filtering options#82659](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82659)
    - **Sub Goal: [Feature] Create Appointment Notifications Hub**
         - :roller_skate: 🟥 [[DESIGN] Solidify UI for linking to notifications page](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81808)
         - ✔️ 🟥 [[Design] Create wireframes for Appointment Notifications card statuses](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81769)
         - ✔️ 🟨 [Discovery on latest MHV notifications work](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81765)
         - ✔️ 🟥 [Create service blueprint to communicate Veteran, staff and system interactions to guide stakeholder conversations](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82628)
    - **Sub Goal: Address Collab Cycle feedback from Design Intent**
         - ✔️ 🟥 [Design Feedback - Design Intent - Community Care Direct Scheduling](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81698)
         - ✔️ 🟥 [Design Intent - IA Feedback - Unified Appointment Experience, Appointments, Community Care Direct Scheduling](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81721)
         - ✔️ 🟥 [Design Intent - Accessibility Feedback - Unified Appointment Experience, Appointments, Community Care Direct Scheduling](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81745)
    - **Sub Goal: [Feature] Discovery on Access Standards and drive time calc**
         - ✔️ 🟥 [Document business rules around calculating drive time, etc.](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81776)
    - **Sub Goal: [Feature] Create FE mocks to mitigate risk after WellHive connection work begins**
         - ✔️ 🟦 [Mock wellHive Appointment endpoints](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81913)
         - :roller_skate: 🟦 [Mock wellHive Drive time endpoint#82389](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82389)
         - :roller_skate: 🟦 [Mock wellHive Patient endpoint#82391](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82391)
    - **Sub Goal: [Feature] Get CC app within vets-website set up**
         -  ✔️ 🟦 [Create CC app within vets-website](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81933)
         - :roller_skate: 🟦 [[FE] Review your approved referral and start scheduling page](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/82555)
______________________________________________________________________________________________________________________________________________________

## SPRINT 5 - 4/17/2024 - 4/30/2024  
#### SPRINT GOALS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Conduct research study with Veterans**
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
    - **Sub Goal: [Feature] Create Appointment Notifications Hub**
    - **Sub Goal: [Feature] Get authorized referrals from CDW**
    - **Sub Goal: Complete Design Intent**
    - **Sub Goal: [Feature] Review WellHive API documentation**

#### PLANNED RELEASES 
- NONE

#### SPRINT TICKETS
- **GOAL: Introduce community care direct scheduling in Appointments**
    - **Sub Goal: [Feature] Conduct research study with Veterans**
         - ✔️ 🟨 [[RESEARCH] Spike: determine low-fi or tree test research study](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/80283) 
    - **Sub Goal: [Feature] Create first draft of hi-fi wireframes and content for scheduling flow**
         - ✔️ 🟥 [[Content] Draft content for first draft of hi-fi wireframes for scheduling flow (not including Appointment Notifications)](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81498)
         - ✔️ 🟥 [[Design] Create hi-fi mock ups](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81287)
         - ✔️ 🟥 [[Design] Create hi-fi userflow with DS components of "scheduling" portion of userflow](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/79688)
    - **Sub Goal: [Feature] Create Appointment Notifications Hub**
         - ✔️ 🟦 [[FE] Build out appointment notifications card types](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81213)
         - ✔️ 🟦 [[FE] Build out appointment notification list](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81217)
         - ✔️ 🟥 [[DESIGN] Solidify Appointment list page components for surfacing notifications](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/80153)
         - ✔️ 🟥 [[Finalize couple userflow options](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/80123)
         - ✔️ 🟥 [[DESIGN] Complete Notifications List Pattern](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/80158)
    - **Sub Goal: [Feature] Get authorized referrals from CDW**
         - ✔️ 🟦 [Explore using CDW to access Consult Factors db table to find approved referrals](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81122)
         - ✔️ 🟦 [Service level coding](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81459)
         - ✔️ 🟦 [Spec out work with MFS team to create endpoint to connect to CDW](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/81527)
    - **Sub Goal: Complete Design Intent**
         - ✔️ 🟥 Complete Design Intent
    - **Sub Goal: [Feature] Review WellHive API documentation**
         - ✔️ 🟦 [[SPIKE] [ENG] Review referral and WellHive API specs](https://app.zenhub.com/workspaces/appointments-cc-direct-scheduling-660abc13699bfa00195d685a/issues/gh/department-of-veterans-affairs/va.gov-team/79687)
______________________________________________________________________________________________________________________________________________________

## SPRINT 4 - 4/3/2024 - 4/16/2024 
#### SPRINT GOALS

______________________________________________________________________________________________________________________________________________________
        
## SPRINT 3 - 3/20/2024 - 4/2/2024 
#### SPRINT GOALS
