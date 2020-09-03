


# Status and decisions:

> [Roadmap Release Plan Links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/release-plan/README.md)


<details> <summary> August 2020</summary>

## August 28th, 2020

**Product**
- [Sprint 29 Planning for priority features.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/release-plan/quarterly-sprint-planning.md#sprint-29---land-proof-of-concept-designs-and-data-services) 
- [Sprint 28 Demo](https://docs.google.com/presentation/d/1aqKWrZQ0jYuM01Y8pOM_GNVgUrbJ4drhw-M6sPlp3f8/edit?usp=sharing) 
- [Sprint 28 Report](https://docs.google.com/document/d/1DeijbXbfz5dzIri6n_g8r3eiaQdKHupvbByuX7uWpP4/edit)
 - [Sprint 28 Retro](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/meeting-notes/retrospective/sprint-28.md)
 - [TOT Aug 18th](https://drive.google.com/file/d/1-Kev5hLUxlxb_qOTLClrLVQ0jEm6pLq5/view?usp=sharing)
 - [Stakeholder Presentation for Visit Intro -](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/meeting-notes/stakeholder-presentations/visit-intro-mvp.md) meetings with Dr. Bryne - Loma Linda and Tandi- Hawaii to review progress and validation we are on the right path. 

**Research and Design**
- Kristen McConnell our new UI /Researcher spent the week onboarding to VSA and starting to review product strategy while attending a few team meetings to get up to speed. 

**Engineering**
- Access approved for authenticate the call for MAP (wiki, jira, Sandbox Jenkins and K8)
	- Researching and building services for appointment details and pgd data with VAMF. 
- Team review meeting [pros/cons of technical capabilities for unauth vs, auth experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/auth-vs-unauthed.md).
- Creating of demographics UI Front end- push to staging late in week.
- Team meeting to review [FE data flow needed diagrams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/data-flow.md). In addition to prioritization of [Demographics coming from multiple sources](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/data-sources.md). 


**Next Step/Followup**
- Complete Visit Intro feature outlines for end of Q3 proof of concept
- Finalize demographics, intro, and confirmation page mocks with a storyboard diagram of user flow- will work with Kristen next week to iterate. 
- Continue to get answers and land architecture strategy for system and services for retrieving and posting healthcare patient data.
	
**Decisions:**
- Approval for both access to MAP and Sandbox for PGD approved. 

**Blockers:**
- No changes in status from previous week for blocker [Stakeholder Interviews](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11037)
- Need update from Lighthouse team FHIR gap with authentication Open Connect ID is not compatible with vets api [VA.gov and Lighthouse oAuth Strategies - #11669](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/11669) 
- Both BE investigation for [VAMP/PGD #12406](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/12406) and [Service for Retrieving Appt. Details #12404](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/12404) are blocked but anticipate final direction for access will be landed early next week.
## August 21st, 2020

**Product**
- Finalized [Initiative -Visit Intro](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md) [Feature - Visit Intro](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md) & [Feature- Demographics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/demographics.md) Outlines
- Drafts Feature Outlines for [Questionnaire Manager](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/questionnaire-manager.md), [Appt. Details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/appt-details.md), and [PGD](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/pgd.md)
 - [TOT Aug 18th](https://drive.google.com/file/d/1fpk_SdsZ_t-2L94p_ew2GVb93v1GKtzX/view?usp=sharing)

**Research and Design**
- [Research Findings from card sort and mock ups](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/veteran-prioritization/research-findings.md) 
- Additional iterations post Veteran feedback 
	- [Visit Intro](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md) 
	- [Demographics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/veteran-prioritization/Veteran%20info%201.png) 

**Engineering**
- [Feature Flag](https://user-images.githubusercontent.com/1793923/90675376-5fad8d00-e228-11ea-95d2-9c31a309fd01.gif) for questionnaires created 
- Researching [pros/cons of technical capabilities for unauth vs, auth experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/auth-vs-unauthed.md).
- Initial [tech architecture diagram for systems and services](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/assets/Questionnaire%20System%20Diagram.png) expecting to leverage.
- Researching and building services for appointment details and pgd data with VAMF. 

**Next Step/Followup**
- Complete Visit Intro feature outlines for end of Q3 proof of concept
- Finalize demographics, intro, and confirmation page mocks with a storyboard diagram of user flow
- Continue to get answers and land architecture strategy for system and services for retrieving and posting healthcare patient data.
	
**Decisions:**
- PGD database and VAMF are the sources for retrieving and storing healthcare data. 
- Due to team personnel changes our proof of concept will not include real data and instead be mock with limited workflow while using Q4 to land live production use for our MVP. 

**Blockers:**
- No changes in status from previous week for blocker [Stakeholder Interviews](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11037)
- Need update from Lighthouse team FHIR gap with authentication Open Connect ID is not compatible with vets api [VA.gov and Lighthouse oAuth Strategies - #11669](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/11669)
- Due to Design changes our Demographics and This Visit mocks with uncertain layout/data fields was not landed in time for [FE work in sprint 28](%5BFrontend%5D%20Display%20Demographics%20#12257). Therefore is blocked and will pick back up with sprint 29/30.  Shawna H has stepped in while new designer is onboarding and discussions continue on data services to leverage.  Development is estimated to be 1 sprint behind due to not landing finalized designs per roadmap targets. 
- Both BE investigation for [VAMP/PGD #12406](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/12406) and [Service for Retrieving Appt. Details #12404](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/12404) are blocked while awaiting VA teams direction on staging environment and approval /intake for posting to pgd. Stephen B is moving this forward with his VA counterparts on the VAMF teams.  

## Status - August 14th, 2020

**Product**
- [Visit Intro updates](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)
- [Feature- Demographics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/demographics.mdhttps://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/demographics.mdhttps://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/demographics.md)
 - [TOT Aug 11th](https://drive.google.com/file/d/1fpk_SdsZ_t-2L94p_ew2GVb93v1GKtzX/view?usp=sharing)
 - [Sprint 27 Demo Slides](https://docs.google.com/presentation/d/1RjYUMhgYkSvWF2zLnnOvrk7K-M5pvwiNXb1PrG7Ou1g/edit#slide=id.g865f6d892d_0_0) 
<img src="https://lh4.googleusercontent.com/qm5rd8x4R1NSjHBzVhOm0Mp1qUNWbILYNo5d4F0r9esYMGJoTvseUgOMu0-tDHKGoKKohb5TIUC9hN_NeDTuXeKoWMR4oCSI6PsupJwnCzELCpQlA2R5RHGB3fvj6BfbnyGMKm_o" width="300">

**Research and Design**
- Drafting research findings from card sort and mockup user testing. 

**Engineering**
- Sprint 27 demo of Health API's 
- Research continues for FHIR/authentication gaps and API's for PGD data

**Next Step/Followup**
- Review research findings and mockups/prototype for visit intro release. 
- Review drafts of all Visit into feature outlines 
- Need decisions on Lighthouse Open Connect ID for vets .api
	
**Decisions:**
- Aricka last week on the team is Aug. 21st. Shauna will be filling in until a new research/designer is identified. 

**Blockers:**
- No changes in status from previous week for blocker [Stakeholder Interviews](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11037)
- Need update from Lighthouse team FHIR gap with authentication Open Connect ID is not compatible with vets api [VA.gov and Lighhouse oAuth Strategies - #11669](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/11669)

## Status - August 7th, 2020

**Product**
- Product drafted [MVP Initiatives for remaining Q3 sprints](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)
	- [Feature - This Visit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)
	- [Workflow Diagram](https://app.mural.co/t/vsa8243/m/vsa8243/1596561661701/0afd94dfc8598b105524e87c8828b10dba98bbf2)
- [TOT Aug 4th](https://drive.google.com/file/d/1wa0av_riHEbdGTBo4ya6-2XDpPx4_XAz/view?usp=sharing)

**Research and Design**
- Design mockup of demographics and this visit for veteran feedback sessions. 
	- [Usability Testing Prep Questionnaires MVP Priorities #11838](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/11838)
	- [Card Sort](https://lh6.googleusercontent.com/C0-kJQU4_O8ftCXMNqCJLor3gzrT8_Tc6uvgWJYmr2MEhTo7NO_xx0nflHFnafWmxU2_N3DRYbrwHVSBv0rDnMb12MF96qAxs92i81XouXApk8-KqFUUELoc5bA0B-AIVYUnmbMU)
- User Testing Started on Friday 7th. 

**Engineering**
- VAOS/CPRS tech investigation and recommendations continue
- Engineering to continue research API/interface feeds into EHR's, MPI, CMS

**Next Step/Followup**
- prep stories for first coding sprint 28
-  complete Veteran feedback on mockup and priorities 
	
**Decisions:**
- Not a decision but a major technical finding - Determined that no Patient Generated Data goes into CPRS today and now team needs to determine what other clinician facing solution can view PGD database. 

**Blockers:**
- Received 6 of 15 VA forms for current state documents to use for standardized questions, will review and determine if we need more for next phase of development.
- No changes in status from previous week for blocker [Stakeholder Interviews](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11037)


</details>


<details> <summary> July 2020</summary>

## Status - July 31st, 2020

**Product**
- Product to drafted [MVP Initiatives for remaining Q3 sprints](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/this-visit.md)
	- continue to add detail to OKR's
- [Sprint 26 Retrospective](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/meeting-notes/retrospective/sprint-26.md)
-  [Sprint 26 Report Documented](https://docs.google.com/document/d/1BmB1z4-9pdnbtQ9LqYOQREpc7MGpdVMNS-VkfVvYeKM/edit)
-  [Sprint 27 Priority Planning](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/11299)
- [Sprint 26 Demo Presentation](https://docs.google.com/presentation/d/1bBoQ2_Z7neT9KsL2X5Yg4DJkZAJu4gM-a8ES8gx9Xgs/edit#slide=id.p1) 
- [TOT July 28th](https://drive.google.com/open?id=15UHjA9J7bo_oJg3rbqaJq2gsjXexLyF5)

**Research and Design**
- Created [Research Plan for upcoming Veteran Testing of MVP](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11544)

**Engineering**
- Engineering to continue research API/interface feeds into EHR's, MPI, CMS
- [Sprint 26 Demo - Forms Unaut-Auth Prototype ](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/10714)


**Next Step/Followup**
- Hold Discovery Sprint Readout with Leads and Stakeholders 
- Continue Initiative documentation for Q3 priority features 
- Priority Feature Planning for sprint 28
- User Testing Started
- Design to prototype in new tool and build mock conditional logic app for demonstration purposes.
- VAOS/CPRS tech investigation and recommendations complete
	
**Decisions:**
-  Due to BE Engineering work for the Facilities team did not stay as low as expected, there is now a need for Lance to support. Since we have Laurence on board now, Lance can return to facilities full time. Paul Short, our engineering lead, will now play a more hands on support role with Laurence/healthcare as Laurence ramps up (both as a mentor/coach and in support of the team). Paul will also be able to determine during this time if and when your team may need additional BE support 

**Blockers:**
- No changes in status from previous week for blockers [Paper - Current State Workflows #10219](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10219) and [Stakeholder Interviews #11037](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11037)


## Status - July 24th, 2020

**Product**
- Research and [documented SHEP](https://drive.google.com/open?id=1krisnJlCyGoNGqzlDn6gKZTUq6MtPbsd) and [Clinical Reminders Questions](https://drive.google.com/open?id=12DxPOC0SFb3VG-fcA5nkIsLpPKsPCHLM) to inform strategy. 
- Updated Product Outline 
	- Added [Outcomes/User Stories to each Unmet Needs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md#unmet-needsdesired-outcomes-user-stories)
	- Added first pass of [Initiative List for Prioritization](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md#initiatives-bets)
		- Drafted a detailed [Initiatives working list](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/questionnaire/product/initiatives) based off of Veteran and Stakeholder sessions 
	- Added first draft of [OKRs ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md#okrs) 
	- Added first draft of [Hypothesis and Assumptions/Risks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md#hypotheses)
- Interview Session with VAOS technical resource Stephen Barrs for questions on integration into the scheduling workflow. 
- [Submitted issue](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/11526) and Scheduled Project Kick Off for Collab Cycle for start of Sprint 27.
- Backlog Planning for Sprint 27 on Wednesday 22nd.

**Research and Design**

- [Created a Journey Map](https://app.mural.co/t/vsa8243/m/vsa8243/1595002246550/dcc8f89e70628bfb9f123075ff514189005fa17c) based on each Persona 
- Created a [sketch of an Experience Map](https://dsva.slack.com/archives/C0136TS768M/p1595609704127400?thread_ts=1595602052.126000&cid=C0136TS768M) 
- Initial draft of [Clinical Stakeholder Key Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/stakeholder-interviews/clinician-interviews/key-findings.md) 

**Engineering**

- Completed the [Technical Feasibility Document](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/11027) and Scheduled a review with the team for next week. 
- Started Research on Vista and CMS (Drupal) integration
-  Researching authentication gaps with Lighthouse and va.gov 

**Next Step/Followup**
	
- Product to draft MVP Initiatives for remaining Q3 sprints
	- continue to add detail to OKR's
- Hold Discovery Sprint Readout with Leads and Stakeholders 
- Engineering to continue research API/interface feeds into EHR's, MPI, CMS
	- Present authentication prototype at Sprint 26 demo. 
- Design to prototype in new tool and build mock conditional logic app for demonstration purposes.

**Decisions:**
-   Move forward with MVP user-stories based on initial set of clinical stakeholder sessions to get an early prototype of a pre-visit questionnaire live but potentially not active use by Veterans and care team. 
	- The initiatives and featues selected in this prototype are capabilities that are known will be needed once we land our end goal product strategy.
	- The risk here is that we will build a early prototype that may need changes once we have additional stakeholder input, curret state intake documents, and standardized intake documentation created for EHR transition. 
	- The up-side is we will learn allot and have working code for demonstartion of a vision to get buy in for a broad strategy. 
	- We are targeting this initial MVP prototype to be available early Q4 2020. 

**Blockers:**
-  [Paper - Current State Workflows #10219](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10219) 
	- Continue to identify contacts that can provide standardized forms 

- [Stakeholder Interviews #11037](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11037)
	- Patrick is following up with contacts he has across a few regions to see if they would be willing to participate and provide us time for interviews and engagement going forward.

## Status - July 17th, 2020


**Product**
- [Sprint 25 Retrospective](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/meeting-notes/retrospective/sprint-25.md) 
- [Sprint 25 Report Documented](https://docs.google.com/document/d/1C2xk9RDz7pBiKiJwS-6qHxE_AAg677vLSSZTemUUtac/edit?usp=sharing)
- [Sprint 26 Priority Planning](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/11032) 
- Completed [Team Mission/Vision - North Star](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/health-products/healthcare-experience/team-charter.md#team-mission-statement) in the Team Charter 
- Received [Clinical Reminders documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/questionnaire/product/feature-documentation/clinical-reminders) that Nursing typically interviews Veteran at start of visits. 
	- Created [Clinical Reminders Initiative Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/clinical-reminders-initiative.md) to start Epic and User Story for feature capabilities. 
- Notes from [Stakeholder interview Sharon Tapia, RN @Loma Linda](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/stakeholder-interviews/sharon-tapia.md) 
- Created Roadmap Planning docs (template at this point until scope is determined)
	- [Roadmap Release Plan Overview and Supporting Links ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/release-plan/README.md) 
	- [Created Quarterly Sprint Planning Priorities doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/release-plan/quarterly-sprint-planning.md) created to build out our roadmap and quarterly release strategy



**Research and Design**
- Healthcare team presented for the first time at Design Collaboration and [Sprint 25 Demo for research findings/recommendations](https://docs.google.com/presentation/d/1Rd-HzsKXc6I4Py9kA9y4tcMWUlAggL4SXFd-32Kxsrg/edit#slide=id.p1) 
-  [Discovery Research Readout](https://dsva.slack.com/archives/C0136TS768M/p1594655214085300) completed and presented by Aricka
- - [Created Personas Doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/user-research/discovery-personas.md) to be used throughout design and development specific to the healthcare/questionnaires workflow
- Created [Interview Questions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/clinician-interviews/clinician-questions.md) and [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/clinician-interviews/research-plan.md) for Stakeholder sessions

**Engineering**
- Created a prototype with the forms library to demonstrate unauthenticated questions answered then passing through data to authenticated forms entry where pre-populated information can be viewed.
- Laurence Guild, BE engineer started on the team and is completing onboarding

**Next Step/Followup**
	- Start to build Epics from stakeholder interview
	- Engineering to research API/interface feeds into EHR's and the MPI 

**Decisions:**
-   none this week

**Blockers:**
-  [Paper - Current State Workflows #10219](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10219) 
	- Lauren and Lacey have met with clinical teams that will provide us the "standard ~15 forms"

- [Stakeholder Interviews #11037](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11037)
	- Patrick is following up with contacts he has across a few regions to see if they would be willing to participate and provide us time for interviews and engagement going forward.


## Status - July 10th, 2020

**Status**
- Monday 6th, Aricka published the [Discovery Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/user-research/research-findings.md) including key findings and recommendations with actionable next steps.

-  [Mural collaboration exercise](https://app.mural.co/t/vsa8243/m/vsa8243/1594143386954/c8c3a641465deb6789687bbfd52d70ac8d642399) to get input into the [Team Mission and North Star Statements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/health-products/healthcare-experience/mission-statement.md)
-  Received Surveys Documentation 
	-  [SHEP Survey home page](http://vaww.car.rtp.med.va.gov/programs/shep/shep.aspx) | [SHEP Questionnaires](http://vaww.car.rtp.med.va.gov/programs/shep/shepReportsSHEPQuestionnaires.aspx) - must be on VA network
	- [CMS Patient Experience Surveys](https://www.cms.gov/Research-Statistics-Data-and-Systems/Research/CAHPS)
		- Consumer Assessment of Healthcare Providers & Systems (CAHPS)  
			- [CAHPS® Clinician & Group Survey and Instructions](https://www.ahrq.gov/sites/default/files/wysiwyg/cahps/surveys-guidance/cg/about/cg_3-0_overview.pdf)
			- Example -  [Outpt. and Amb. Surgery CAHPS](https://oascahps.org/Survey-Materials) - I selected the Mail Questionnaire
- Thurs 9th, met with DEPO leads (Patrick and Lacey) to request assistance to remove the two blockers below regarding contacts with potential stakeholders/ clinical staff we can interview and current state workflows from OEHRM (for example) for standardization of clinical documentation that may be done to-date.
-  [Forms Library](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/10908) and Authenticated Tech Feasibility/Prototype
- [Discovery Tech Feasibility doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/technical-feasibility.md) drafted start to fill out based on what is included in your tickets description and acceptance.
- Started MWF Engineering Sync to go into detail on investigations

- Next Step/Followup:
	-  [Discovery Research Readout](https://dsva.slack.com/archives/C0136TS768M/p1594655214085300) completed and will be presented by Aricka Tues 14th.
	- Anticipate receiving forms documents from interview sessions and clinical teams Lacey has reached out to.

**Decisions:**
-   [Current list of Stakeholders](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/questionnaire/discovery/stakeholder-interviews) are VA team members that we will want to interview and review our strategy and product roadmap **but are not decision makers.**
- UPDATED Decision Maker Stakeholders/SME's
	- Pacific Region 
		- Dr. Bryne @LomaLinda
		- Jemorie & Thandiwe @Pacific Islands Health Systems
	- Central Region TBD - Patrick identifying opportunities
	- East Coast Region TBD - Patrick identifying opportunities

**Blockers:**
-  [Paper - Current State Workflows #10219](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10219) 
	- Current state workflows, paper or digital forms being used today in primary care clinics and access to clinical staff is being requested.
	- Lacey/ Lauren/Patrick are working on approach for collaboration with the MHV and clinical VHA teams and getting contacts we can reach out to.
	- Anticipate receiving forms documents from interview sessions and clinical teams Lacey has reached out to. ie. engineering with MHV
	- Patrick is following up per meeting on the 14th to get documentation or contact we can reach out to 

- [Stakeholder Interviews #11037](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11037)
	- _See Decisions section above_ Identified an initial and updated list of stakeholder interviewees and the sessions need to be scheduled.
	- Patrick is following up with contacts he has across a few regions to see if they would be willing to participate an provide us time for interviews and engagement going forward.
		- Lacey is creating a 1 pager on our product for Patrick to use with these clinical teams.


## Status - July 3rd, 2020

**Status**

- Sprint 25 Backlog Grooming and Sprint Planning
- [Top Line Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/user-research/topline-summary.md) prepared and presented to the team by Aricka with group discussion on everyones feedback from Veteran research sessions. 
- Draft [Jobs To Be Done statements and unmet needs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/Jobs-to-be-done-statements.md) derived from Veteran research sessions 
- Completed Exploratory tech investigation into [Create developer.vet.gov API Prototype #10715](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/10715)
- e-Screening demo by the product team to learn the workflow and features that could potentially align to our work.
	- Removed previous weeks blocker by completing list of [Product Owner - Interviews](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/10222) and creating a separate issue (#13340) for Stakeholder interviews. 
- Participated in two interviews with clinical subject matter experts to gain insights into the primary care workflow and features that would be highly useful. 
	- [AVS PreVist Summary - Dr. Byrne](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/stakeholder-interviews/loma-linda.md) | Thursday, July 2⋅11:30am – 12:30pm (CST)
		-  Internal Medicine and Informatics physician form Loma Linda

	- [VA Pacific Islands Health Care System](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/stakeholder-interviews/pacific_islands.md)  | Thursday, July 2⋅3:30 – 4:30pm (CST)
- Held our first Team Happy Hour and leaned lots of fun facts about each-other!
	-	ie. On line vs. In line, D&D characters, met our pets & babies, Ren fest

- Next Step/Followup:
	- Discovery Research Readout completed and presented by Aricka 
	- Forms Library and Authenticated Tech Feasibility/Prototype
	- Completed Team Mission and North Star Statements
	- Anticipate forms documents from interview sessions and clinical teams Lacey has reached out to. 

**Decisions:**
- June, 30th during Sprint 25 planning the team recommended approval for additional discovery sprints to give time to define the scope and strategy for the product due to veteran feedback that they don't fill out forms today and the need to remove the below two blockers to gain more insights into the clinical process. 
	- Approved by by Lacey and Lauren 

**Blockers:**
-  [Paper - Current State Workflows #10219](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10219) 
	- Current state workflows, paper or digital forms being used today in primary care clinics and access to clinical staff is being requested.
	- Lacey and Lauren are working on approach for collaboration with the MHV and clinical VHA teams
	- Requested from our two interviews this week to provide any forms documents they use in the clinic.
- [Stakeholder Interviews #11037](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11037)
	- identified an initial list of stakeholder interviewees and the sessions need to be scheduled.


</details>

<details> <summary> June 2020</summary>

## Status - June 26th, 2020

**Status**
- Facilitate and summarize feedback from [Veteran Research Sessions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/user-research/participant-notes/participant-list.md)
	- _Consider Planning for another Discovery Sprint based on Veteran feedback todate being they do not fill out paper or digital questions in preparation for a visit_
		- See blocker #10219 - current state workflow as we need clinical insites on current and ideal workflow to move forward based on learnings from research.
- Continued Exploratory tech investigation into Identity, Profile and FHIR API (ie. Medications) and forms prototype with pre-populating Veteran information. 

- Next Step/Followup:
	- Determine if more Veteran interviews are needed due to No Shows/Cancelations - recived 3 more for Friday.
	- Research findings report/insights - _Aricka & Amanda_
	- Sprint 25 Backlog Grooming moved to next week due to full schedule on Friday with Veterna sessions. 

**Decisions:**

-   _N/A_

**Blockers:**

-   [Paper - Current State Workflows #10219](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10219) 
	- Current state workflows, paper or digital forms being used today in primary care clinics and access to clinical staff is being requested.
	- Lacey has identified sme's and has reached out, we are waiting for response 
- [Product Owner - Interviews #11037](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11037)
	-  Unknown Stakeholders to interview until we get feedback from Veterans on what they need the product scope to be.
	-  Lacey will schedule once we land scope

## Status - June 19th, 2020

**Status**
- Sprint 24 Planning Meeting & [Sprint 23 Retro](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/meeting-notes/retrospective/sprint23.md)
- [Clipboard/Questionnaire Team Design Workshop](https://app.mural.co/t/vsa8243/m/vsa8243/1592419389801/bb85b8eec339ad93c713c7d11c3f109fcd0c24ce)
- Discovery Research and Onboarding
	- [Aligned Product Teams interviews](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/stakeholder-interviews/README.MD)
		- Forms- eBenefits, Caregiver,B&M 2
		- Vet Profile
	- Team Platform Onboarding 
		- Content & IA
		- Q&A
- Veteran [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/user-research/research-plan.md) and [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/user-research/conversation-guide.md) Created and Interviews scheduled for following week. 
- Draft [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md) and [Team Charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/health-products/healthcare-experience/team-charter.md) 
- Next Step/Followup:
	- Facilitate Veteran Research sessions- _Aricka_
	- Schedule Meeting to review Workshop insights with team.  Will combine with readout from user interviews feedback. - _Aricka_

**Decisions:**

-   _N/A_

**Blockers:**

-   [Paper - Current State Workflows #10219](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10219) 
	- Current state workflows, paper or digital forms being used today in primary care clinics and access to clinical staff is being requested.
	- Lacey has identified sme's and has reached out, we are waiting for response 
- [Product Owner - Interviews](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/10222)
	-  Unknown Stakeholders to interview until we get feedback from Veterans on what they need the product scope to be.

## Status - June 12th, 2020

**Status**
- Discovery Research and Onboarding
	- [Aligned Product Teams interviews](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/stakeholder-interviews/README.MD)
		- Chatbot
		- Notifications
		- Identity
	- Team Platform Onboarding 
		- Analytics
		- ATO
- Team [discovery working session](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/kick-off/what-to-learn.md) and to review [Current State/Market Research Sync](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/kick-off/questionnaire-discovery-outline.pdf)
- Healthcare Experience - [Team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/health-products/healthcare-experience)  and [Questionnaires Product folders](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/questionnaire) created in GitHub.
- ZenHub [vsa-healthcare-exp workspace](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vsa-healthcare-exp&notFullScreen=false&repos=33202667,133843125&showPipelineDescriptions=false) created 
- Exploratory tech investigation with identity and forms platform.
- [Draft Discovery Brief and Planning Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/project_brief_planning.md) 

- Next Step/Followup:
	- [Prep materials](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/user-research/veteran-questions.md) for User Research Interviews _Amanda and Aricka_
	- Continue Scheduling Aligned Product Teams interviews- _Lacey_
	- Schedule a Workshop to gather VA knowledge experts current state problems, assumptions, and opportunities to explore with Veteran forms - _Lacey_
	- Schedule Agile Ceremonies -_Amanda_

**Decisions:**

-   Draft of Problem Statement and Product scope should not be narrowed until Veteran Feedback. 
	- ie. keep the form type, and digital tool, and platform for the product undecided in our research investigation and questions. 
- Unknown Stakeholders until we get feedback from Veterans on what they need the product scope to be.

**Blockers:**

-   [Paper - Current State Workflows #10219](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10219) 
	- Current state workflows, paper or digital forms being used today in primary care clinics and access to clinical staff is being requested.
	- Lacey has identified sme's and has reached out, we are waiting for response 


## Status - June 5th, 2020

**Status**
- Sprint 23 Discovery
	- [Discovery Sprint Kickoff, Thursday June 4th.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/kick-off/questionnaire-discovery-kickoff.pdf)
		- [Kickoff- zoom meeting recording](https://drive.google.com/file/d/1ktbpytWOFmHp8bwN5bJ4kAB4kou5QHHm/view?usp=sharing) 

-  Next Step/Followup:
	- Schedule Stakeholder/Aligned Product Teams interviews- _Lacey_
	- Current State Workflow Documentation - _Lacey_
	- Schedule Team Platform Onboarding - _Lacey_
	- Schedule Team working sessions and to review Current State/Market Research Sync - _Amanda_

**Decisions:**

-   _N/A_

**Blockers:**

-   _N/A_

</details>


