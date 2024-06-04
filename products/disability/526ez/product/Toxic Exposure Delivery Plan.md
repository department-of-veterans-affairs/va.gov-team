
## Goals
- Veterans can complete section 4 of the 526ez form online.
- Veterans can receive a PDF of the 2022 version of the 526ez form upon claim submission.


## Scope
- Release 1.0 only to Veterans who begin a new 526 form
  - This includes the primary (happy) path and backup submission path.
  - Delivery deadline for DBEX: end of June 2024
- Release 1.1 to Veterans who have an In Progress Form (IPF)
  - Delivery deadline: TBD

## Relevant Links
- [Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/disability-experience/team-docs/Release%20Plans/Toxic%20Exposure%20Release%20Plan.md)
- [Design documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/toxic-exposure.md)
- Meeting recording of technical approach and [diagrams in Slack](https://dsva.slack.com/archives/C04KW0B46N5/p1715293181014539?thread_ts=1715293137.064459&cid=C04KW0B46N5):
  - https://us06web.zoom.us/rec/share/4yzenPINHF8djrgx6x2XjepUbrC0QHgo3J6PPu9miRpeCp1HnJHqS9THVmFZmeYz.5j45fksUTFgqtqME
    Passcode: p=va8uL0
- Meeting recordings between teams 1 and 2 for handling the feature flag:
  - https://coformaco.zoom.us/rec/share/NXjIziBXAebZD2adg4QWApak5QJafqu3t26I2-9edjT7CqNajGJ5kNv1DN_qRdJG.tYRlVFcgHcoVMvKH
    Passcode: &=h7HiKH
  - https://coformaco.zoom.us/rec/share/ug_3WYVuIdRWWdoLGuqTS78KmoQgkc461TbGCFGiwzagx69pzj8-yWVpqfBJW1c8.2OpcBzNGjnkT5VIr
    Passcode: S3!v9guG         
- Meeting recording with Ligthhouse to discuss progress of synchronous submit endpoint:       
  - https://us06web.zoom.us/rec/share/1R3KWDbfwI9MG9Ghgm1bXwbv63uyd61SYjItE8YDaCN_cv6OeQIeHb0v1fWTN8aw.4c20SnZ2xyuqD8Yi       
    Passcode: d%Y&6hfh
- Meeting recording with Teams 1 & 2 to discuss delivery plan:
  - https://us06web.zoom.us/rec/share/SMoqdUKyXnKpzKqU7FPr0lUrjclqAFkO3N4or8sfdX9V49KqcZ2bgYvsp64yk-Jt.U_e1OwIUDgTtd0JA
    Passcode: $3CazkrD          

## Risks / Impediments
- External dependency: Lighthouse /submit endpoint
  - Exploration was done to identify if it is possible to migrate to the new version of the 2022 526ez form using /generatePDF as a workaround while awaiting the Lighthouse team to make /submit changes that include synchronous polling, and making the newest version of the endpoint available for testing and then implementation. 
  - The minimal /generatePDF endpoint migration is still required for the overall Toxic Exposure effort, as it’s needed for the backup submission path. DBEX Team 2 is working on this part.
  - The workaround to use /generatePDF only for the primary (happy) path adds additional scope of work and does not enable the team to meet the delivery deadline. Additionally, implementing the new form using the minimal /generatePDF endpoint prevents a synchronous PDF response, and adds additional risk to the pipeline by introducing additional failure points. Furthermore, the implementation of the /submit endpoint would be desired when available, so there is significant investment in tech debt for a (potentially) short term solution.
    - Current status from Lighthouse 5/17/24: /submit in Lighthouse staging early June, in production late June.
- Internal dependency: completion of /submit endpoint migration (team 1)
  - When the new /submit endpoint is made available by Lighthouse in the staging environment, previous migration work should be reviewed for changes and updates made where appropriate. The new endpoint will need to undergo Canary launch and staggered release with monitoring. Logic will also need to be implemented to handle the Toxic Exposure questions.
- Internal dependency: completion of /generatePDF endpoint migration in backup submissions (team 2) 


## Planned Delivery Timeline MVP Release April 2024 - July 2024
This delivery plan is segmented into pieces of functionality that are available to view in staging as a cohesive end to end user experience. Based on the way the data is structured, it has been broken out to segment the different questions of column 4 of the 526ez as key milestones.  

Sprints noted with an asterisk (*) will have flexible delivery completion, depending on the availability of the Lighthouse /submit endpoint. The official production release to users cannot occur without the /submit endpoint available in the production environment.


#### Milestone: A Veteran can link their conditions to Toxic Exposure, and receive a 2022 PDF with column 2 and checkbox for 15A is checked.
**Estimated Duration**: Sprint 28 (3/27 - 4/9/24) - Sprint 30 (4/24 - 5/7/24)   
**Actual Delivery Date**: Sprint 30 (4/24 - 5/7/24)     
**Environment**: Staging    
**Building Blocks:**    
 - [X] JSON Schema refactored
 - [X] Data transformation to save the Toxic Exposure data, capture the Toxic Exposure flag from the conditions array, and transform the Toxic Exposure data into the Lighthouse structure for the disabilities array.
 - [X] End to end test from 526ez to VBMS with the 2022 PDF, with column 2 filled and 15A checked.


#### Milestone: A Veteran can link their conditions to Toxic Exposure, and receive a 2022 PDF with column 2 and checkbox for 15A is checked; Gulf War 1990 and 9/11 pages data is populated in 15B and 15E.
**Estimated Duration**: Sprint 29 (4/10 - 4/23/24) - Sprint 31 (5/8 - 5/21/24)        
**Actual Delivery Date**: Sprint 31 (5/8 - 5/21/24)       
**Environment**: Staging    
**Building Blocks:**     
 - [X] Create the summary page for Gulf War 1990 questions.
 - [X] Add “none of these locations” to the Gulf War 1990 questions. 
 - [X] Implement checkbox and loop for Gulf War and 9/11 summary pages.
 - [X] Add “I’m not sure” to the Gulf War 1990 pages.
 - [X] Heading content and URL changes.
 - [X] Transform service on the first of each location in 15B and put these behind the Toxic Exposure feature flag.
 - [X] Handle multiple exposure durations 15B.
 - [X] End to end test from 526ez to VBMS with the 2022 PDF, regression testing column 2 filled and 15A checked, adding 15B and 15E are populated.

#### Milestone: A Veteran can link their conditions to Toxic Exposure, and receive a 2022 PDF with column 2 and checkbox for 15A is checked; Gulf War 1990 and 9/11 pages data is populated in 15B and 15E; herbicide & hazards pages data is populated in 15 C, D, E.
**Estimated Duration**: Sprint 31 (5/8 - 5/21/24) - Sprint 33 (6/5 - 6/18/24)*     
**Actual Delivery Date**:      
**Environment**: Staging    
**Building Blocks:**   
 - [X] Create herbicide pages.
 - [X] Create hazard pages.
 - [X] Transform service on the first of each hazard in 15C and put these behind the Toxic Exposure feature flag.
 - [ ] Transform service on the first of each hazard in 15D and put these  behind the Toxic Exposure feature flag.
 - [ ] Handle multiple exposure locations 15C.
 - [ ] Handle multiple exposure locations 15D.
 - [ ] Discovery on async document status upload for form 526 after claim is established.
 - [ ] Consolidate Submit and Toxic Exposure feature flags.     
 - [ ] End to end test from 526ez to VBMS with the 2022 PDF, regression testing column 2 filled and 15A checked, 15B and 15E are populated, adding 15C and 15D are populated.
 - [ ] Team 2: handling of two forms
 
 

#### Milestone: Migrate /submit endpoint and /generatePDF endpoint
**Estimated Duration**: Sprint 33 (6/5 - 6/18/24) - Sprint 34 (6/19-7/2/24)*      
**Actual Delivery Date**:            
**Environment**: Production          
**Building Blocks:**      
- [ ] Schedule weekly Lighthouse touchpoints through release.
- [ ] Migrate Lighthouse synchronous /submit endpoint & release.*
     - [X] [Submit release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/disability-experience/team-docs/Release%20Plans/DBEX%20Submit%20Migration%20Release%20Plan.md)    
     - [ ] Submit dashboard    
     - [ ] Submit Canary Launch        
- [ ] Revisit submit transformation & make any needed changes
- [ ] Migrate Lighthouse generatePDF endpoint and release with submit endpoint
- [ ] Schedule staging review


#### Milestone: A Veteran filing a new claim can complete section 4 of the 526ez paper form online, and receives a copy of the 2022 PDF upon claim submission with column 2 and questions 15A-15E populated appropriately.
**Estimated Duration**: Sprint 35 (7/3 - 7/16/24)*    
**Actual Delivery Date**:          
**Environment**: MVP Ship - Production     
**Building Blocks:**    
 - [ ] Staging review.
 - [ ] Bug Bash.
 - [ ] Security review.
 - [ ] Product guide updated.
 - [ ] Contact center review.
 - [ ] Rollback plan in place.
 - [ ] Submit & generatePDF release will update Veterans to using the 2022 PDF with Toxic Exposure questions.


## Next: In Progress Form (IPF) Post-MVP
TBD - coming soon
 


