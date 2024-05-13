
## Goals
- Veterans can complete section 4 of the 526ez form online.
- Veterans can receive a PDF of the 2022 version of the 526ez form upon claim submission.


## Scope
- MVP release only to Veterans who begin a new 526 form
  - This includes the primary (happy) path and backup submission path.
  - Delivery deadline for DBEX: end of June 2024
- Next release to Vets who have an In Progress Form (IPF)
  - Delivery deadline: TBD

## Relevant Links
- [Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/Toxic%20Exposure%20Release%20Plan.md)
- [Design documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/toxic-exposure.md)

## Risks / Impediments
- External dependency: Lighthouse /submit endpoint
  - Exploration was done to identify if it is possible to migrate to the new version of the 2022 526ez form using /generatePDF as a workaround while awaiting the Lighthouse team to make /submit changes that include synchronous polling, and making the newest version of the endpoint available for testing and then implementation. 
  - The minimal /generatePDF endpoint migration is still required for the overall Toxic Exposure effort, as it’s needed for the backup submission path. DBEX Team 2 is working on this part.
  - The workaround to use /generatePDF only for the primary (happy) path adds additional scope of work and does not enable the team to meet the delivery deadline. Additionally, implementing the new form using the minimal /generatePDF endpoint prevents a synchronous PDF response, and adds additional risk to the pipeline by introducing additional failure points. Furthermore, the implementation of the /submit endpoint would be desired when available, so there is significant investment in tech debt for a (potentially) short term solution.
    - Current status from Emily Theis - Lighthouse will try to have /submit in Lighthouse staging by early June 2024
- Internal dependency: completion of /submit endpoint migration
  - When the new /submit endpoint is made available by Lighthouse in the staging environment, previous migration work should be reviewed for changes and updates made where appropriate. The new endpoint will need to undergo Canary launch and staggered release with monitoring. Logic will also need to be implemented to handle the Toxic Exposure questions.


## Planned Delivery Timeline April 2024 - June 2024
This delivery plan is segmented into pieces of functionality that are available to view in staging as a cohesive end to end user experience. Based on the way the data is structured, it has been broken out to segment the different questions of column 4 of the 526ez as key milestones.  

Sprints noted with an asterisk (*) will have flexible delivery completion, depending on the availability of the Lighthouse /submit endpoint. The official production release to users cannot occur without the /submit endpoint available in the production environment.


#### Milestone: A Veteran can link their conditions to Toxic Exposure, and receive a 2022 PDF with column 2 and checkbox for 15A is checked.
**Duration**: Sprint 28 (3/27 - 4/9/24) - Sprint 30 (4/24 - 5/7/24)     
**Environment**: Staging    
**Building Blocks:**    
 - [X] JSON Schema refactored
 - [X] Data transformation to save the Toxic Exposure data, capture the Toxic Exposure flag from the conditions array, and transform the Toxic Exposure data into the Lighthouse structure for the disabilities array.
 - [X] End to end test from 526ez to VBMS with the 2022 PDF, with column 2 filled and 15A checked.


#### Milestone: A Veteran can link their conditions to Toxic Exposure, and receive a 2022 PDF with column 2 and checkbox for 15A is checked; Gulf War 1990 and 9/11 pages data is populated in 15B and 15E.
**Duration**: Sprint 29 (4/10 - 4/23/24) - Sprint 31 (5/8 - 5/21/24)    
**Environment**: Staging    
**Building Blocks:**     
 - [X] Create the summary page for Gulf War 1990 questions.
 - [X] Add “none of these locations” to the Gulf War 1990 questions. 
 - [X] Implement checkbox and loop for Gulf War and 9/11 summary pages.
 - [X] Add “I’m not sure” to the Gulf War 1990 pages.
 - [ ] Heading content and URL changes.
 - [ ] Transform service on the first of each location in 15B and put these behind the Toxic Exposure feature flag.
 - [ ] Handle multiple exposure durations 15B.
 - [ ] End to end test from 526ez to VBMS with the 2022 PDF, regression testing column 2 filled and 15A checked, adding 15B and 15E are populated.

#### Milestone: A Veteran can link their conditions to Toxic Exposure, and receive a 2022 PDF with column 2 and checkbox for 15A is checked; Gulf War 1990 and 9/11 pages data is populated in 15B and 15E; herbicide & hazards pages data is populated in 15 C, D, E.
**Duration**: Sprint 31 (5/8 - 5/21/24) - Sprint 33 (6/5 - 6/18/24)*     
**Environment**: Staging    
**Building Blocks:**   
 - [ ] Create herbicide pages.
 - [ ] Create hazard pages.
 - [ ] Transform service on the first of each hazard in 15C and put these behind the Toxic Exposure feature flag.
 - [ ] Transform service on the first of each hazard in 15D and put these  behind the Toxic Exposure feature flag.
 - [ ] Handle multiple exposure locations 15C.
 - [ ] Handle multiple exposure locations 15D.
 - [ ] End to end test from 526ez to VBMS with the 2022 PDF, regression testing column 2 filled and 15A checked, 15B and 15E are populated, adding 15C and 15D are populated.
 - [ ] Migrate Lighthouse synchronous /submit endpoint & release.*

#### Milestone: A Veteran filing a new claim can complete section 4 of the 526ez paper form online, and receives a copy of the 2022 PDF upon claim submission with column 2 and questions 15A-15E populated appropriately.
**Duration**: Sprint 34 (6/19 - 7/2/24)*    
**Environment**: MVP Ship - Production     
**Building Blocks:**    
 - [ ] Staging review.
 - [ ] Bug Bash.
 - [ ] Security review.
 - [ ] Product guide updated.
 - [ ] Contact center review.
 - [ ] Rollback plan in place.
 


