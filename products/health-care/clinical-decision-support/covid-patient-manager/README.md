# COVID-19 Patient Manager MVP Description
## Problem statement
COVID-19 is a novel disease that presents myriad challenges to clinicians caring for patients who have or may have COVID-19. Caring for these patients requires clinicians to keep up with new clinical guidelines, rapidly evolving inpatient data, outpatient symptoms monitoring and other patient-generated data, and an increasing volume of telehealth appointments. Helpful tools exist and/or are being developed (e.g., clinical decision support applications that provide recommendations at the point of care, outpatient symptoms monitoring applications, telehealth managers); however, they are not well integrated into the electronic health record, which is the centerpiece of clinician workflow. 
## Solutions
- The COVID -19 Patient Manager is a clinician-facing decision support tool to assist with evidence-based management of COVID-19 cases of suspected cases. This is a SMART on FHIR, standards-based web application that integrates with the VA’s electronic health record CPRS (i.e. provides browser-based functionality in the mainstream of provider workflows, maintains patient and user context , and does not require the provider to log in twice to access the application). The COVID-19 Patient Manager will build upon the Agency for Healthcare Research and Quality (AHRQ) COVID-19 Care Summary application as a basis for evidence-based clinical recommendations. See below for additional information about the COVID-19 Patient Manager.
- Long-term: The COVID-19 Patient Manager is intended to be the first step toward an approach to workflow-based clinical tools that is standards-based, web app-first, a way to “future proof” CPRS, and a way to bridge clinicians’ experiences between CPRS and Cerner. 
## More detailed information
### COVID-19 Patient Manager Description	
COVID-19 Patient Manager is intended to provide clinicians the ability to evaluate and address issues associated with COVID-19 for a single patient or a patient population. The solution provides computerized decision support (CDS) to providers to aid in the diagnosis, treatment and risk mitigation of patients with confirmed or suspected COVID-19 syndromes.  Target use cases include admission to the hospital and treatment inside the hospital. The COVID-19 Patient Manager uses mobile-enabled, browser-based functionality in the mainstream of provider workflows and seamlessly integrates with the Electronic Health Record (e.g., the Computerized Patient Record System [CPRS]). The solution is integrated into CPRS and is instantiated, authorized, authenticated and will maintain patient and user context between CPRS and web-based applications. The first iteration of the solution provides recommendations for individual patients at the point of care. 


## In-Scope Requirements & Needs for Minimal Viable Product (MVP) 
- Read-Only, browser-based functionality in the mainstream of provider workflows that seamlessly integrate with the Electronic Health Record (e.g., the Computerized Patient Record System [CPRS])
- Present patient information at the point of care with appropriate visualizations to allow clinicians to manage improve decisions for individual patients
- Instantiated, authorized, authenticated and maintains patient and user context between CPRS and web-based applications; patient and user context must be maintained from CPRS via Clinical Context Object Workgroup (CCOW), as the same information must be maintained through the workflow to keep patient context in sync
- Utilizes the Agency for Healthcare and Research Quality (AHRQ) COVID-19 Care Summary application, a web-based application implemented with the React JavaScript framework, as a basis for developing the COVID-19 Patient Manager.
- AHRQ application adheres to the SMART on FHIR standard, allowing it to be integrated into EHR products that support the SMART on FHIR platform
- Uses the open source FHIR client library provided by the SMART Health IT group.  

## Data Elements
- At a high level, the solution includes the following COVID-19 data elements:
  - Pertinent Medical History
    -  Signs and Symptoms
    Risk Factors for COVID-19
  - Diagnostic Tests
    - Laboratory Results
    - Vital Signs
  - Treatment History
    - Medications
    - Procedures and Therapies
- Risk Considerations
  - Risk Assessment Relevant to COVID-19 Management
  - Patient Reported Assessments and Outcomes
- Patient-Centered Social Needs

More specifically, data elements for MVP:
•	Labs chem
•	Labs heme
•	Labs micro
•	Problem list
•	Encounter PoV
•	Inpatient dx code
•	CPT
•	Vitals including pulse ox
•	Inpatient medications
•	Outpatient medications
•	Non-VA medications
•	HF – smoking and ETOH
•	HF – national 
•	Orders
•	ADT – treating specialty
•	ADT – ward
•	TIU titles (possibly mapped to VA LOINC-like titles
•	Imaging report titles

## About the Team
### GitHub/ZenHub/Teams/Jira
Team repo: https://github.com/department-of-veterans-affairs/covid-patient-manager
GitHub label = covid-patient-manager (https://github.com/department-of-veterans-affairs/covid-patient-manager) 
ZenHub board - (https://app.zenhub.com/workspaces/covid-patient-manager-5fc9453d958e1600153602d5/board)
Link to Teams folder if applicable: 
•	https://teams.microsoft.com/l/team/19%3at2CNBPjejMvipwwxdCeU5kessIuotzdnOcOkcLVQA8I1%40thread.tacv2/conversations?groupId=b1f59e8b-b653-4319-94ed-6a9d184c2752&tenantId=e95f1b23-abaf-45ee-821d-b7ab251ab3bf 
•	SMART-on-FHIR COVID-19 Patient Manager - General - All Documents (sharepoint.com)

Link to Jira if applicable: 
List & link to the slack channels you use when you have them.
•	#cpm-public
•	#cds-tools-team

### Team Members
OCTO-DE/DEPO:
* Shane Elliott

Project Management:
* Adrian Carroll (Coforma)

Product Management:
 * Laureen Kattan (Coforma)

Design & Research:
* Scott Postma (Coforma)

Engineering:
* Talia Hicks, Technical Lead (Coforma)
* Michael Scott (Coforma)
* Dale Durham (Coforma)

QA:
* Pratap Singh (Coforma)

### What We're Working On
•	Improving tool’s design via ongoing usability research 
•	Understanding CPM Usage & opportunities 
•	Exploring tool integration methods (e.g., automatic launch or button) 



### Product Documentation
- Link to Roadmap
- Link to Objectives & Key Results
- Link to Product Guide: CPM User Guide.pdf (sharepoint.com)

### Who We Work With
VA Business Owners:
- Dr. Shannon Brown (Philadelphia VAMC)
- Dr. Tara Khan (Tampa VAMC)
- Dr. David Ng (Bronx VAMC)




 
## Team Repo
[CPM Repo](https://github.com/department-of-veterans-affairs/covid-patient-manager)
