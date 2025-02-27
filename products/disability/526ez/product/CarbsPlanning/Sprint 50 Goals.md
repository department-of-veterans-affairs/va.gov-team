# DBEX-Carbs Sprint 50 Goals	
02/26/2025 - 03/11/2025

## Engineering
  - Alison Jones
    OOO 03/03-03/07
    - 0781 Paper Sync
      - Scope change - Content change for 0781 opt in page
      - Scope change - Content change for behavioral changes intro
      - Bug - behavior types error message focus _(stretch goals, this is a component bug that impacts more than just behavioral types and needs a new solution)_

   
  - Nathan Burgess
    - 0781 Paper Sync
      - Scope change - Behavior list [3.12] destructive action modal
      - Scope change -Behavior combat intro [3.11] destructive action modal
      - 0781 New 0781 form name change
      - Spike - Test the Backup path for new 0781	

  
  - JR
    - 0781 Paper Sync
      - Scope change - Types of medical providers
      - Scope change - Supporting evidence document types
      - Scope change - 0781 Review page
      - Scope change - Modal - opt out of 0781 destructive action modal (for 0781 choice page only) - _This is large and slightly more complicated than some of our other destructive modals. We may have to brek this down into smaller tickets and spread the work out. TBD_

         
 - Scott Regenthal
    - 0781 paper sync
      -  Scope change - Traumatic events Official Report (no MST Events) [3.9] inline error message - _currently blocked by VFF, design to find a new solution_
      -  Scope change - Traumatic events Official Report (with MST Events) [3.9] inline error message - _currently blocked by VFF, design to find a new solution_
      - Scope change - Traumatic events Official Report destructive action modal
      - Scope change - Content change for event list message for number of events
      - EE Team support - Will paragraph breaks be preserved in the data that's sent
      - Create utility function to handle submission of 0781V2 data	- includes the PDF data to the correct forms work


- Kyle Soskin
  OOO 03/06-03/07
  - Transition work
  - 0781 PS
    - PDF forms medical record location data - _NOTE the solution for this was added to the "utility function to handle submission" and this ticket was moved to end-to-end testing_
    - Spike - opt out of a file upload needs solutioning _Stretch goal and might be move to out of scope_
  - Silent Failure
    - Reprocessing of two 526 evidence failures	

- Work not planned
  - [0781 PS] Behavioral type list: rename 'none' property to view only - _If capacity opens up we'll try to start this_ 


## Research and Design
[Sprint 50 Goals](https://dsva.slack.com/docs/T03FECE8V/F07N6EH4EUE)

_Research and Design are blocked on the 0781 Research work._

## Sumary
This sprint we have two people out of office for part of the time which will decrease some of our velocity. 

The goal of this sprint is to complete as much of the frontend user experience first. We have some a lot of scope changes that we want to get in which includes the content changes Liz requested, new pages to support the 0781 questions (Types of medical providers and Supporting evidence document types) and adding the 0781 Review page. The destructive action modals are high priority and our largest amount of work. This is a new solution that has not been implemented before in Beneafits and Claims. We believe our solution is doable, but we could run into possible blockers and issues as we navigate through the solution to remove data for the first time. 

Design has some minor changes to the design specs to support the team better in finding the "final" versions of the scope changes. 

With the announcement that the Perigean contract for managing and scheduling research participants was cancelled, the research on 0781 will be blocked. This impacts the following planned work:
- Support Perigean to recruit participants for 0781 research study, #101889
- Conduct 0781 research sessions, #103937

The team will follow up with OCTO for any changes and suggestions to work around this blocker. If we can't unblock the work, the team will regroup to think of other ways Research & Design can use this sprint time. 

In addition to the 0781 Paper Sync we have some effort to support the remediation team on claims that failed due to invalid emails and we are also doing the March benefits-disability-notifications alerts watch. Any new issues may decrease capacity on 0781 depending on the severity. We'll keep the communication going and making sure that OCTO is aware of any impacts this additional work will have on our delivery. 

[Roadmap for Disability Benefits (DBEX) Team 2 (Carbs)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717458460532/5a74ece0ca694a9e6c85b3a1130a8c7b8dabf123?wid=0-1728398176278)

[DBEX Carbs 2024 VA Disability 526 - Current sprint board](https://github.com/orgs/department-of-veterans-affairs/projects/1263/views/9)

## Notes
- OCTO has not prioritized the Disability apps' compliance with the Front-end deployment pipeline changes for vets-website (Shedule to be due Feb 3, 2025) - no word if there will be any impacts to us if we don't have it done by Monday. 
