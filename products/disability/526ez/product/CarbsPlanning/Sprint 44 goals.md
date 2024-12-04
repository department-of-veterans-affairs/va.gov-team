# DBEX-Carbs Sprint 44 Goals	
12/04/24 - 12/17/24

## Engineering
  - Alsion Jones
    - PTO 12/9 - 13
    - 
  
  - Nathan Burgess 
    - Veteran evidence upload document LH migration
       - Production monitoring and ramping up the canary rollout 
    - 0781 paper sync 
      - 0781 choice page skelton 
   - December benefits-disability-notifications alerts watch - details and procedures 
  
  - Sam Stuckey
    - 0781 paper sync
      - InProgressForm model in review
      - 0781 entry points using the feature flag in review
      - 0781 Start page skelton 
         
 - Scott Regenthal
    - 0781 paper sync
      -  JSON to PDF transform service
      -  Install new JSON -> PDF builder behind flipper in job

- Kyle Soskin
    - 0781a discovery for remediation of historical failures for reporting claims that need remediation
      - Reporting
      - CSV file (stretch goal) 
    - Bugs and issues support
  

## Research and Design
- Ruben is still out, so we'll have updated sprint goals for R&D when he returns

## Sumary
The team's main focus is to continue to deliver on 0781 Paper Sync initiative. We'll use time this sprint to do some quarterly planning to clearly define the plan for the number of resources needed to support delivering this initiative. Once we have a plan we'll share with OCTO for review. While we plan and refine out tickets, the team will begin delivering on skeleton pages for the 0781 flow as well on the JSON file and PDF builder. These are the fist steps to creating the flows and gathering data for the paper sync. 

The release of the Lighthouse Migration for Veterans Evidence Document Upload went into production on December 3rd. This sprint we'll be monitoring it's progress and ramping up the rollout as necessary. 
- Release date for 1%: Tuesday Dec 3 - done
- Release date for 5%: Thursday Dec 5
- Release date for 50%: Monday Dec 9
- Release date for 100%: Wednesday Dec 11

Discovery to uncover the impact of the silent upload failures from a production defect and report them to OCTO and VBA for remediation. This will help VBA make decisions on what to do with the data we have. The reporting from the discovery may be in creating spreadsheets, delivering documents, and working with VBA to take action.

Team Carbs has the benefits-disability-notifications alerts watch this month, so the team has put time aside to support that effort. If there are any DataDog monitoring improvements found we'll be making improvements or recommendations (depending on effort) as we go. 

[Roadmap for Disability Benefits (DBEX) Team 2 (Carbs)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717458460532/5a74ece0ca694a9e6c85b3a1130a8c7b8dabf123?wid=0-1728398176278)


## Notes
- No need to prioritize any remediation work for the 0781 overflow issue for the upcoming sprint. Still considering tradeoffs + discussing with relevant parties in VBA
- Disability apps compliant with the Front-end deployment pipeline changes for vets-website (due Feb 3, 2025) needs more discussion with Team TREX to plan this work together.
