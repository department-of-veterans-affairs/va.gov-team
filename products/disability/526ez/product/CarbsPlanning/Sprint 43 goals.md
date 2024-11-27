# DBEX-Carbs Sprint 43 Goals	
11/20/24 - 12/03/24

## Engineering
  - Nathan Burgess and Alison Jones
    - Veteran evidence upload document LH migration
       - Migration and production release prep
       - Staging testing
       - Message trigger
       - DD monitoring and auditing for ZSF
      
  - Sam Stuckey
    - 0781 paper sync
      - InProgressForm model
      - 0781 entry points using the feature flag 
         
 - Scott Regenthal
    - 0781 paper sync
      - JSON Schema proposal 
      - JSON to PDF 

- Kyle Soskin
    - Zero silent failure support
    - Bugs and issues support 


## Research and Design
- There is no R&D work this sprint as Ruben is out the whole sprint. 

## Sumary
Happy Thanksgiving! Team capacity this sprint will be lower due to the holiday and PTO. 

The highest priority is to deliver the Lighthouse Migration for the Veteran evidence upload. While working on the intergration of the new Lighthouse API for VEDU, the team found that we were missing some Datadog queries for finding failures. This required more datadog fine-tuning before the feature could be release. This sprint the team will wrap up the montioring and test the integration and confirm there are no issues. If all goes well, we'll be pushing the feature to production by early next sprint. 

The team has has started the work for he 0781 Paper Sync iniative. The FE will work will be to focus on controling the canary rollout and suppurting new claims only. While the work for the BE will be setting up the JSON file and producing the PDF. These will both be in flight work as changes are expected throughout the building of the features. 

[Roadmap for Disability Benefits (DBEX) Team 2 (Carbs)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717458460532/5a74ece0ca694a9e6c85b3a1130a8c7b8dabf123?wid=0-1728398176278)
