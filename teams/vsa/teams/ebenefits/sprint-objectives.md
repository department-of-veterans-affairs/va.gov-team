# eBenefit Sprint Objectives :rocket:
This is a high-level summary of the current goals and tasks in the current Sprint set forth by the [eBenefits Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/charter.md).

### Guided by:
- _"How will this help the Veteran, their dependents, and caregivers get the benefits they deserve?"_ 
- Deliver value in every Sprint
- Communicate and embrace transparency
- Stay organized and help your future self and team
- Measure outcomes where possible
- Remember the Call Center
----
## Sprint 12 (1/1 - 1/14) WIP*
```diff 
- TBD
```
### 1. Prepare "Your VA disability ratings" for Launch
- Complete and implement final reviews and changes required to launch (508 {staging})
- Develop and docuemnt in GH plan for moderated user acceptance testing 
- Review the launch checklist and document any remaining gaps for launch procedures  
  - [Epic for **Rated Disabilities**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1032)   

_Note that we will not be turning off any functionality in EBN or doing any comms around this feature._

### 2. Continue Developing Framework and API Connectivity for "View/Update Dependents" in Staging Environment
- Design: Complete Design Intent Review for "View Dependents"
- Design: Refine lo-fi mocks for Dependency Claims ("Submit 686")*
- Frontend: Continue to reconcile 686 schema and correct submission issues
- Eng: Define and document in GitHub the existing endpoints
- Eng: Review BGS documentation 

## Sprint 11 (12/18 - 12/31) 
```diff 
- 25 points over 8 issues
```
🎅🎄🎁
### 1. Prepare "View My Rated Disabilities" for Launch
- Implement final recommendations from initial reviews
- Complete final reviews required to launch (508 {staging}, QA {staging})
- Review the launch checklist and document any remaining gaps for launch procedures  
  - [Epic for **Rated Disabilities**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1032)   

_Note that we will not be turning off any functionality in EBN or doing any comms around this feature._

### 2. Continue Developing Framework and API Connectivity for "View/Update Dependents" in Staging Environment
- Design: Finalize mockups for "View Dependents" for review
- Design: Create and refine lo-fi mocks for Dependency Claims ("Submit 686")
- Frontend: Implement "View Dependents" MVP function per existing mockups in staging
- Eng: Define and document in GitHub the existing endpoints
- Eng: Document plans for addressing errors in 686 schema 
- Eng: Implement new Dependents' API endpoints for View Dependents  
  - [Epic for **View Dependents**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1393)  
  - [Epic for **Update Dependents**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1976)  

## Sprint 10 (12/4 - 12/17)
```diff 
- 63 points over 18 issues
```
### 1. Prepare "View My Rated Disabilities" for Launch
- Refine any error handling issues and user acceptance testing remaining in staging
- Complete final reviews required to launch (Call Center, Content/IA {mockups}, 508 {staging}, Security {staging})
- Address any further DSVA Design feedback
- Review the launch checklist and document any remaing gaps for launch procedures  
  - [Epic for **Rated Disabilities**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1032)   

_Note that we will not be turning off any functionality in EBN or doing any comms around this feature._

### 2. Development Initial Framework and API Connectivity for "View/Update Dependents" in Staging Environment
- Design: Based on user feedback, adjust mockups
- Design: Create mockups that incorporate all functionality that still needs to be added to Update Dependents (like the 674)
- Frontend: Implement "View Dependents" MVP function per existing mockups in staging
- Eng: Define and document in GitHub the existing endpoints, begin plan for requesting BGS service updates  
- Eng: Implement new Dependents' API endpoints for View Dependents  
  - [Epic for **View Dependents**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1393)  
  - [Epic for **Update Dependents**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1976)  

### 3. Begin UX/UI Discovery on "View/Submit My Representative" (Power of Attorney (POA))
- Design: Define and document in GitHub the current functions and workflows for the feature and business logic
- Establish who the stakeholders are, connect with them
  - [Epic for **View/Submit My Representative**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3672)  
  
## Sprint 9 (11/20 - 12/3)
```diff 
- 49 points over 16 issues
```
### 1. Prepare "View My Rated Disabilities" for Launch
- Assuming no enterprise blockers, test all required Rated Disabilities functionality in staging
- Schedule final reviews required to launch (Content/IA {mockups}, 508 {staging}, Security {staging})
- Review the launch checklist and make sure the feature meets all requirements  
  - [Epic for Rated Disabilities](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1032)
  - _Note that we will not be turning off any functionality in EBN or doing any comms around this feature._

### 2. Continue Development on "View/Update Dependents"
- Design: Based on user feedback further develop mockups for review
- Design: Establish any gaps in the business logic between form requirements and what is currently in staging for Dependents
- Frontend: Build "View Dependents" MVP function per existing mockups in staging
- Eng: Investigate and document in GitHub remaining errors that are currently in staging for Dependents
- Eng: Technical discovery on state of existing endpoints, begin plan for requesting BGS service updates  
  - [Epic for View Dependents](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1393)
  - [Epic for Update Dependents](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1976)


## Sprint 8 (11/6 - 11/19)
```diff 
- 45 points over 17 issues
```
### 1. Prepare "View My Rated Disabilities" to be code complete
- Obtain, test and implement TCDR endpoint
- Test TCDR in frontend on staging
- Schedule usability study on Rated Disabilities' new components (Conversation Guide, Research Plan, Perigean, etc)
- Schedule final reviews required to launch (Content/IA {mockups}, 508 {staging}, Security {staging})
- Review the launch checklist and make sure the feature meets all requirements
  - Note that we will not be turning off any functionality in EBN or doing any comms around this feature.

### 2. Continue discovery on "Dependents"
- Document in Github every aspect of Dependents workflows on EBN
- Schedule usability study on Dependents (Conversation Guide, Research Plan, Perigean, etc)
- Design: establish any gaps in the business logic between form requirements and what is currently in staging for Dependents
- Eng: Investigate errors that are currently in staging for Dependents
- Eng: Technical discovery on state of existing EVSS endpoints, begin plan for requesting EVSS service updates   
  - Epic for View Dependents: https://github.com/department-of-veterans-affairs/va.gov-team/issues/1393   
  - Epic for Update Dependents: https://github.com/department-of-veterans-affairs/va.gov-team/issues/1976    

### 3. Stretch Goal: View Dependents (that are on my Compensation Award) Functionality
- Frame the View Dependents function per existing mockups in staging

## **Sprint 7 (10/23 – 11/5)**  
```diff 
- 52 points over 19 issues
```
### 1. Prepare "View My Rated Disabilities" to be code complete
- Gather and frame out remaining EVSS data components
- Move frontend work to staging
- Prepare for usability study on Rated Disabilities' new components (Conversation Guide, Research Plan, Perigean, etc)
- Schedule reviews required to launch (Content/IA {mockups}, 508 {staging}, Security {staging})
- Review the launch checklist and make sure the feature meets all requirements
  - _Note that we will not be turning off any functionality in EBN or doing any comms around this feature._

### 2. Continue discovery on "Update Dependents"
- Explore and understand every aspect of Dependents workflows on EBN
- Design: create a research plan for learning about View Dependents workflows
- Design: establish what usability work has been completed for Update Dependents
- Eng: Technical discovery on previous Update Dependents work
- Eng: Technical discovery on state of existing EVSS endpoints, begin plan for requesting EVSS service updates
- Product: Determine need for third Epic: Add Dependents (without 686 submission)
  - Epic for View Dependents: https://github.com/department-of-veterans-affairs/va.gov-team/issues/1393
  - Epic for Update Dependents: https://github.com/department-of-veterans-affairs/va.gov-team/issues/1976

## **Sprint 6 (10/9 – 10/22)**  
```diff 
- 41 points across 17 issues
```
### 1. Continue to prepare "View My Rated Disabilities" for launch
- Gather and frame out remaining data components before staging
- Schedule reviews required to launch (Content/IA {mockups}, 508 {staging}, Security {staging})
- Review the launch checklist and make sure the feature meets all requirements
  - _Note that we will not be turning off any functionality in EBN or doing any comms around this feature._

### 2. Start discovery on "View and Update Dependents"
- Explore and understand every aspect of Dependents workflows on EBN
- Design: create a research plan for learning about Dependents workflows
- Design: create workflow diagrams/journey maps for existing process
- Eng: Technical discovery on previous Dependents work
- Eng: Technical discovery on state of existing EVSS endpoints, begin plan for requesting EVSS service updates
- Product: Create epics and first round of issues
  - Epic for View: https://github.com/department-of-veterans-affairs/va.gov-team/issues/1393
  - Epic for Update: https://github.com/department-of-veterans-affairs/va.gov-team/issues/1976

## **Sprint 5 (9/25 – 10/8)**  
```diff 
- 46 points across 17 issues
```
### 1. Continue to prepare "View My Rated Disabilities" for launch
- Gather and frame out remaining data components
- Review the launch checklist and make sure the feature meets all requirements
  - Note that we will not be turning off any functionality in EBN or doing any comms around this feature.

### 2. Start discovery on "View and Update Dependents"
- Explore and understand every aspect of Dependents workflows on EBN
- Design: create a research plan for learning about Dependents workflows
- Design: create workflow diagrams/ journey maps for existing process
- Eng: Technical discovery on previous Dependents work
- Eng: Technical discovery on state of existing EVSS endpoints, begin plan for requesting EVSS service updates
- Product: Create epics and first round of issues
  - Epic for View: https://github.com/department-of-veterans-affairs/va.gov-team/issues/1393
  - Epic for Update: https://github.com/department-of-veterans-affairs/va.gov-team/issues/1976

### 3. Stretch/ Optional: Start documentation for the Stakeholder Enterprise Portal
- Epic: https://github.com/department-of-veterans-affairs/va.gov-team/issues/1980
- Document all the features of SEP. Can be a joint product-design exercise or whatever makes the most sense in terms of capacity.

## **Sprint 4 (9/11 – 9/24)**  
```diff 
- 33 points across 13 issues
```
### 1. Move "View My Rated Disabilities" into staging
- Understand how errors are handled before launching **Rated Disabilities**
  - Identify and define what process, systems and error handling codes are present and applicable for both Rated Disabilities and `vets-api` itself
- Experiment and test pulling data via `vets-api`, insert into frontend
- Make sure a logged in test user with rated Disability data can navigate to the page and see a result

### 2. Establish some UX parameters as a foundation for other similar tasks
- Research and analyze errors, alternate login states
- Establish a baseline for current layout of features, 508
- Initialize a research plan to apply new transformations to migrated features

### 3. Finalize Onboarding
- Wrap up onboarding breakout sessions and deep dives with several other cross-functional teams

### 4. Stretch Goal: Define Next Project
- Groom `priorities.md`
- Work with design practice to choose next feature migration

**Retro**

- TBD     

## **Sprint 3 (8/28 – 9/10)**  
```diff 
- 24 points across 14 issues
```
1.	Deep discovery of EVSS and some of the innerworkings of `vets-api`
2.	Established the ability to build locally, rough prototype
3.   Lots of onboarding tasks  
4.   Held an eBenefits Orientation Workshop

**Retro**
- Maintain agreement on points
- Plan for Demo Day
- Team collaboration led to great momentum!
