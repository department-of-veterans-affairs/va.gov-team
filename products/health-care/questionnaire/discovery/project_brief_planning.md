# Discovery Project Brief & Planning

## PROJECT BRIEF

We are currently collecting information from Veterans in a way that could be done more efficiently and more securely, but we need to learn a lot more about what the problem looks like in different contexts (e.g. in-person vs. online; within the peculiarities of different VA facilities and workflows). We also need to learn more about the current state & existing tools that address the problem and adjacent problems.

### Project Name
Healthcare Experience Team - Questionnaires (TBD)

### Problem Statement / How Might We statements

As a Veteran, I’m unable to easily and quickly provide pre and post visit documentation in a digital and discrete format that can be shared across facilities and my care team.

- How might we improve the in-person and online pre-appointment experiences for Veterans?
- How might we contribute to physical distancing efforts in VA facilities?
- How might we better integrate Veteran-provided data into VA workflows?
- How might we provide Veterans with a digital option when only a paper option exist today to complete pre-appointment questionnaires and screeners?



### What Sprint Teams Are Associated with this Discovery?

-   Healthcare Experience - Questionnaires
    

### Discovery Sprint Roles

[Meet the HealthcareExperience Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/health-products/healthcare-experience/team-charter.md#who-we-are)

### Stakeholders TBD

[Meet our Stakeholders and Aligned Product Owners](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/stakeholder-interviews/README.MD)


## DISCOVERY PLANNING

### Project Details

####  Primary users: 
- Veterans and/or their caregivers;
- Employees in Veteran-facing business lines that need to gather information from Veterans and/or their caregivers in advance of a in-person or telehealth appointment
-   Aligned VA Personas and Journey Maps.
	-   Will be identified during pre and discovery sprints.
    
#### Goals of Primary user (assumptions- until research)
    
-   A Veteran has the opportunity to complete screening questions prior to their in-person or telehealth appointment;  
-   Veterans are able to limit the amount of time they need to spend in the lobby/waiting area in the physical proximity of others;
-   Veterans spend less time filling out questionnaires and screeners;  
-   Veterans complete questionnaires and screeners at a higher rate, with higher accuracy when compared to current methods (e.g. paper, iPads);  
-   Veteran-facing employees spend less time transferring veteran-provided data from one medium (paper, iPads) to the canonical veteran record;
   
#### Business Goals:
    
-   Support physical distancing efforts in VA facilities
-   Reduce concurrent visitor loads in VA facilities by reducing the number of tasks a Veteran must to complete within the facility
-   Reduce concurrent telehealth appointment loads by reducing the number of tasks a Veteran must complete during an online appointment
-   Improve employee productivity by reducing the effort needed to integrate Veteran-provided data into canonical sources
    
#### Align to Business North Star
- Increase availability of self-service tools
	- At a minimum, we will make existing tools more widely available in a self-service manner as the current on-premise eScreening applications are completed by Veterans on a VA iPad in the facility and on the VA network.
    
- Decrease time to outcomes
    	
	- Make a pre-appointment tool available for online appointments means less appointment time is taken up by answering standardized questions, potentially reducing appointment times and/or increasing the efficacy of those appointments.

-   Maximize satisfaction, reliability, availability, & security
    	
	-   At a minimum, bringing the existing tools into the VA.gov family will make them much more widely available across multiple channels (online via internet; kiosks in facilities).

-   Are any of the above assumptions that need to be verified?
	-   All user goals and business goals are assumptions at this point and should be verified with Stakeholder and User Research sessions conducted during the pre-discovery and discovery sprints and reoccurring thought design and development of the product.
	-   See [Discovery Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/questionnaire/discovery/user-research)
    

#### How are we going to find out answers?
    
-   Current State Workflows provided by different clinical facilities
-   pdf forms used today - multiple locations for customizations
-   workflow diagrams for process of completing a form by veteran to review by a clinician and storage for record
-   Stakeholders and Aligned Products Discovery Sessions to see if/when forms interact with their workflows.
    

#### What secondary industry research should we do (google, facebook, internal documents)?
    
-   The team will be provided Market Research “suggestion” during Discovery kickoff and ask to review and find others from their own research.
    -   All the VA apps in progress
    	-   ie. VetLink, Kiosk, Connect Care Rx App, MyHealtheVet pt. Generated database, Connect Care - Family Health History Survey...etc.
    -   [Cerner eClipboard & Questionnaires (integrated in the EHR and patient portal)](https://connect.cerner.com/)
    -   [Interlace Health Intake video](https://youtu.be/Qt96awC5ztc)
    -   [Tonic](https://tonicforhealth.com/) - (Cerner integration- discrete)
    -   [Phreesia](https://www.phreesia.com/#) - [Best in KLASS Intake Management 2020](https://www.phreesia.com/2020/01/31/phreesia-named-2020-best-in-klas-for-patient-intake-management/)
    -   [Tips for Optimizing Intake Form](https://blog.intakeq.com/10-tips-to-optimize-your-patient-intake-forms/)
    -   [Patient Intake Management 2018](https://klasresearch.com/report/patient-intake-management-2018/1339)
    

####  Are there any intentional project constraints (things we're intentionally deeming out of scope)?
    
-   None at this time
    

####  Are there any challenges or risks that will make this discovery sprint hard to complete (tricky politics, technology complications, etc.)?
    
-   Lack of and/or reluctance of standardization across VA facilities for pre-appointment data collection processes and norms
-   How do we conduct in-person research (e.g. job shadowing) in the new covid reality?
-   We’ve mostly magic’d this effort up on our own, so possibly of “who told you to do this?” and other questions as to our authority
-   Integration with EHR systems at VistA vs. Cerner sites
-   With the current long term transition in EMR’s the bi-directional API/interfaces will need to be from multiple sources (who holds the source of truth for current forms data?
-   Access to current state workflows early in pre-discovery to prepare for stakeholder interviews
-   Stakeholder interviews early in pre-discover to prepare knowledgeable user research.
-   Many other VA products have been created using a form to capture veteran data and understanding which solutions will overlap or need to work together to create an intuitive transition when a veteran is using both products.
-   Dependencies -can we align our roadmap to other aligned products to integrate in their workflow (ie. they will need to make enhancements to their solution)
	-   Notifications to let the veteran know they have a clipboard
	-   Scheduling a visit will trigger a clipboard to be sent
	-   Authenticated and unauthenticated va.go home pages. To advertise or let the veteran know they have completed or to do forms.
	-   Many more to be identified during discovery...
    

#### What don't we know?
    
-   What is the current state workflow for Veterans and Clinics
-   What types of forms we are targeting
-   What encounter types are we targeting
-   What technology platform are we using. Ie. va.gov, kiosk, native app, web responsive app, .etc
-   What data will be available for integration into EHR and the form
    

### Timeline

-   Are there any hard and fast deadlines for completing the discovery work?
    -   None - however will target a 2 week Pre-discovery followed by a 2 week Discovery sprint.
    

-   When will the following take place?
    -   Discovery Prep: sprint 23 - 06/03/2020 - 06/16/2020
    -   Discovery Kick off - 06/04/2020
    -   Discovery (ideally 1-2 weeks): sprint 24 06/17/2020 - 06/30/2020
    -   User Research - targeting sprint 24 06/17/2020; but will move up in pre-discovery if the research plan is ready.
    -   Complete & Readout: 06/30 or 7/01
    
Discovery Week 1 | Discovery Week 2 
-------- | ----- |
<img src="https://lh4.googleusercontent.com/J2YPA__olky1Xf9doXek-sWCkPKZSHoOwp4rUIQOR7GB9pGAT9z85EpIrVGITO1dEW1dMc6Tc9DH1690XM01MDqdw_xaDiL6Ex3r93RDyS-LHjEJ3utLMGzG4_o__V6CCvWrlW2z" width="400"> | <img src="https://lh3.googleusercontent.com/AAA_SuPg3H0EdIYjcnu4F5BEHDsLVR_-EH3k0hIS5T-OmngdmdjfuF1fbx7_8VLMBf3Yqu-I10T5E7wczmuh9qX2fZt473W_0-9J3g7tFFvmEJ_usvO5xZuvy9AaPs9K5r8BWVr1" width="400">

## Upon Completion

To be filled out by the sprint team.

-   Lessons learned (about the discovery process)
	- Preliminary scope and Stakeholders (SME) identified before discovery sprint kickoff (ideealy during pre-discovery)
	- Current State workflows, diagrams, documents ready for product team in pre-discovery 
    
-   Links to key documents 
	- [Project Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md)
	- [Team Charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/health-products/healthcare-experience/team-charter.md#who-we-are)
	- [Discovery Readout] 
