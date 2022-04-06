# COVID-19 Patient Manager MVP Description
## Problem statement
COVID-19 is a novel disease that presents myriad challenges to clinicians caring for patients who have or may have COVID-19. Caring for these patients requires clinicians to keep up with new clinical guidelines, rapidly evolving inpatient data, outpatient symptoms monitoring and other patient-generated data, and an increasing volume of telehealth appointments. Helpful tools exist and/or are being developed (e.g., clinical decision support applications that provide recommendations at the point of care, outpatient symptoms monitoring applications, telehealth managers); however, they are not well integrated into the electronic health record, which is the centerpiece of clinician workflow. 
## Solutions
- Near-term (next 4-6 months): the COVID -19 Patient Manager is a clinician-facing decision support tool to assist with evidence-based management of COVID-19 cases of suspected cases. This is a SMART on FHIR, standards-based web application that integrates with the VA’s electronic health record CPRS (i.e. provides browser-based functionality in the mainstream of provider workflows, maintains patient and user context , and does not require the provider to log in twice to access the application). The COVID-19 Patient Manager will build upon the Agency for Healthcare Research and Quality (AHRQ) COVID-19 Care Summary application as a basis for evidence-based clinical recommendations. See below for additional information about the COVID-19 Patient Manager.
- Long-term: The COVID-19 Patient Manager is intended to be the first step toward an approach to workflow-based clinical tools that is standards-based, web app-first, a way to “future proof” CPRS, and a way to bridge clinicians’ experiences between CPRS and Cerner. 
## More detailed information
### COVID-19 Patient Manager Description	
COVID-19 Patient Manager is intended to provide clinicians the ability to evaluate and address issues associated with COVID-19 for a single patient or a patient population. The solution shall provide computerized decision support (CDS) to providers to aid in the diagnosis, treatment and risk mitigation of patients with confirmed or suspected COVID-19 syndromes.  Target use cases include admission to the hospital and treatment inside the hospital. The COVID-19 Patient Manager will use mobile-enabled, browser-based functionality in the mainstream of provider workflows and will seamlessly integrate with the Electronic Health Record (e.g., the Computerized Patient Record System [CPRS]). The solution will be integrated into CPRS and will be instantiated, authorized, authenticated and will maintain patient and user context between CPRS and web-based applications. The first iteration of the solution will provide recommendations for individual patients at the point of care. Future iterations will allow clinicians to manage cohorts of patients with COVID-19 status and improve decisions on individual patients.


## In-Scope Requirements & Needs for Minimal Viable Product (MVP) – Timeline 4-6 months
- Read-Only, browser-based functionality in the mainstream of provider workflows that will seamlessly integrate with the Electronic Health Record (e.g., the Computerized Patient Record System [CPRS])
- Present patient information at the point of care with appropriate visualizations to allow clinicians to manage improve decisions for individual patients; as a follow-on to the MVP, allow the ability to view a cohort list of patients with COVID-19 status
- Instantiated, authorized, authenticated and will maintain patient and user context between CPRS and web-based applications; patient and user context must be maintained from CPRS via Clinical Context Object Workgroup (CCOW), as the same information must be maintained through the workflow to keep patient context in sync
- Support Fast Healthcare Interoperability Resources (FHIR) standards developed by Health Level Seven International (commonly known as HL7) for the exchange of healthcare information electronically.
- Utilize the Agency for Healthcare and Research Quality (AHRQ) COVID-19 Care Summary application, a web-based application implemented with the React JavaScript framework, as a basis for developing the COVID-19 Patient Manager.
- AHRQ application adheres to the SMART on FHIR standard, allowing it to be integrated into EHR products that support the SMART on FHIR platform
- Uses the open source FHIR client library provided by the SMART Health IT group.  

## Data Elements
- At a high level, the solution shall include the following COVID-19 data elements:
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

More specifically, data elements for MVP and future versions may include the following data elements:
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
GitHub label = 
ZenHub board - [link to this if/when you have one]
Link to Teams folder if applicable: 
Link to Jira if applicable: 
List & link to the slack channels you use when you have them.


### Team Members
OCTO-DE/DEPO:
- 
Program Management:

Product Management:
- 
Design & Research:
- 
Engineering:
- 

### What We're Working On
- Name the core initiatives that you're building or working on


### Product Documentation
- Link to Roadmap
- Link to Objectives & Key Results
- Link to Product Guide

### Who We Work With
VA Business Owners:
- 
- 
VA Stakeholders & their roles: 
- 
- 















Proposed UI Mockup
 
## Team Repo



