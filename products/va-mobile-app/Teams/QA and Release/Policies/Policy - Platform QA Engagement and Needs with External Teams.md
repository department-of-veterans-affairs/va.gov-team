# WIP Thoughts on - Policy - Platform QA Engagement and Needs with External Teams

## Purpose: 
Intent is to identify and describe how Veteran Affairs Health and Benefits App (VAHB) QA and Release Platform will prioritize, engage and coordinate with external teams building with the VAHB App. 

## High level thoughts: 
- Would like this to work that the external teams know MObile's expectations and include that in their projects and when they are a certain point they engage QA 
- External teams should be in communication with Mobile early to understand what QA and Release's expectations are so they are building that into their project process
  - Require clear concise QA documentation
- Wonder if there should be some kind of an agreement in this process - solidfying all parties expectations     
- Need to determine the communication process when QA is working on the project there are questions or needs - expect fast response 
- Identify policy when external team is not meeting expectations timely and we have a backlog of others waiting what do we do 
- How does this work for agile / iterative projects - some projects coming to us could be absolutely massive and findings lead to rework and changes
   - Example Appointments team comes in and does scheduling - huge, complex feature vs Veteran Status team does a feature rewrite  
- For release management who is repsonsible for updating app store images, content, call center guide etc - external team ? flagship team?
   - Its currently management by Flagship PM is us pushing the change - so if same process external team will need to do that  
- Need standards for QA communications when working on external 
- What is the role and responsibility of Mobile POs when the External POs
- What expectations are Mobile POs communicating with potential external teams
- What kind of stakeholder management is involved with QA and Release \
- Who owns the code during production and when they leave
    - QA and Release should not be expected to manage new code as we do not do that today for Flagship
- What happens if the team is not ready by date sit - rarely have we seen Teams meet specific deadlines   
  
## Ideal process
- External team has a project idea for Mobile
   - Review Mobile documentation to understand QA and Release expectations, requirements and limitation (analytic testing)
   - Or external team sets meeting with Mobile QA 
- External team prioritized the work in their work stream 
   - External PM contacts VAHB PM on pipeline and prioritization conversations
     - Understand initial sizing and complexity of the work in the pipeline  
   - External team include QA and Release expectations in their project plan / build 
- External team communicates to VAHB PO to prioritize the work in Mobile and is added accordingly to a work pipeline
- When work is Prioritized QA reaches out to External Team 
   - Kickoff meeting between teams
     - External teams shares project details so QA tester has knowledge of the feature which is helpful in testing
     - QA verifies QA needs are met
        - Unit test, accessibility testing / requirements, test accounts ready, data prep ready, e2e testing written
     - Verify on communication plan (async, slack, response times, escalation points)        
- All requirements are met - QA work starts
   - Tasks are completed 
     - Test plan is written and completed 
     - Reviews unit test
     - Reviews e2e testing
     - Accessibility testing 
     - Updates test rails
     - Update testrails
     - Complete manual testing
     - Documents bugs / findings 
   - Finding and questions are collaborated on between teams
   - Change management is document accordingly 
 - QA to deliver a report on findings  
   -  Results include what testing was successful and failed  
      -  What changes team must make before pushing to production 
      -  Identify other work that needs to be consider or post mvp managed Sev-3 as an example
   - QA determine if its ready to push into production
 - Release Manager
   - need a successful QA report for code to be moved to production    


## Task items to consider: 
- Pre Prioritization discussions or needs
    - Discovery / awareness early in external team project planning  
        - Mobile
            - Share relevant documentation so external team can prep engagement when they are ready and prioritized
              - Understand QA and RElease requirements so they can build them in  
            - Release and QA Mgr to be initial POC
       - External Team
             - Share their product documentation (brief, timeline, specific needs) so Mobile has some awareness 
             - Share PO contacts
- Prioritization
    - Mobile POs prioritize external request within existing pipeline
- QA requirements
-   - Test plan is written and completed 
     - Reviews unit test
     - Reviews e2e testing
     - Accessibility testing 
     - Updates test rails
     - Update testrails
     - Complete manual testing
     - Documents bugs / findings
- QA limitations 
- Post prioritization engagement
    - Team kickoff / introduction 
      - Project review by external team 
      - QA validates if qa needs are met 
         - Test Accounts and data prep needs
         - Passing unit tests
         - Design system requirements
         - Feature flags / waygates
         - e2e testing / detox testing
         - Test Plan creation 
        - Identify what software is being used - if there is conflict between the teams
         - Jira vs Zenhub/Github
         - Different Repos    



 
