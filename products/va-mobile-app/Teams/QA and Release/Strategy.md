## Q4 2023  Plan  
 - 1 designated QA resource per team in which each person will attend their meetings / riturals and bring relevant info back to home QA team
   - Therese - Global
   - Tom - Health and Benefits
   - Tom - Release approval and RC testing (for the rest of 2023, 2024 not yet determined)
   - Rachael - Overarching QA person  (design system, API, automation, floating to help other areas)
   - Adam - Release Management
   - TBD - DevOps - currently hiring
 - QA capacity for teams explicitly tied to their QA agent, so teams should plan for this
    - If extra QA is needed Team PMs to reach out to QA and Release PM to discuss
    - If QA agent is out for a day or two likely no coverage, if longer then the specific teams need to discuss coverage options with QA  
 - Team will revisit this process frequently to see how things are going with this process 

## Q1 2024
- Believe Q4 2023 plan will continue but will need to revisit based on how all the teams coordinate once all the teams are set-up and maturing
- Discuss Bug scrub process and if any changes are needed
- Focus 
  - Automation
     1.) Develop guideline and procedures for when engineering handles the detox test (new and modifications)
     2.) Develop a way that only certain features/functionality can be tested vs having to run all e2e tests
  - QA and Release KPI creation (draft)
     - Bugs pre launch and post launch & severity 
     - Detox tests breaking after changes
     - App size (Per Tim 1/16)
     - Total releases
     - Build success vs fails
     - Average time for regression / manual effort per sprint
     - Total number of tests run 
  - Platform prep
     - Documenting existing processes
     - Idenitfy processes that need changed
     - Determine testing standard (iOSs we will support, new OS incorporation)  


## Intent 
- QA is empowered to make decisions that control the release and launch readiness of a project
   - Ability to say no or require additional work
- Be cognicant of QA work and have teams plan accordingly vs just flooding QA with work
- Develop consistent guidlines and rules that all teams Flagship and external will follow for testing and release
   - Not create a situation where its allowed for each team to be treated differently  - not going to work long term
- Implement a change, learn and adapt
   - Not waiting for the perfect answer / scenario / edge case  


## Risk / Considerations
- Setting up a process that may feel restrictive or delays release as new steps are needed for Flagship
   - Examples requiring certain things to be done before QA starts their work like adding more MVP requirements means more work required before launch so assumption is launch is delayed
   - Accept that changes won't make everyone happy but long term its for the better good (support by lead managers) 
- Determining who owns and manage the code post release - Rachel (PO) identified and spoke of 1/9 during 3pm Quarterly Planning convo
- Ensuring that QA is involved in early conversations on Flagship teams to help view the end to end experience given their knowledge and understanding
- Making the process to rigid that people can't get through 


## WIP 2024 Plan
Q1 2024
 - Automation
     1.) Develop guideline and procedures for when engineering handles the detox test for new features 
     2.) Develop a way that only certain features/functionality can be tested vs having to run all e2e tests 
Q2 2024
 - Automation
     1.) Engineering to start completing detox work for new features  
     2.) Qart to develop guideline and procedures for when engineering handles the detox test for exisiting feature (modifying existing detox test) 
Q3 2024 
 - Automation
     1.) Engineering to start modifying existing detox tests for existing features 
