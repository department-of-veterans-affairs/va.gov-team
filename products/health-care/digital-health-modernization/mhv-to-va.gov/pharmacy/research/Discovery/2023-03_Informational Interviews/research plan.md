March 16, 2023

# Background

Today patients can access their medication data from Blue Button report and MHV’s pharmacy section. Patients can download their entire VA medication data including self-report medications and supplements through Blue Button. For all active medications and medications that have been inactive for fewer than 180 days, patients can view and take actions under pharmacy section on MHV. We know that there are policies governing what medication data should be displayed and constraints for how it should be displayed, but we don’t know which data source is the most reliable, how data is stored, how exactly pharmacy functionality in MHV work, and some of the intricate challenges that limits va.gov to have complete and accurate data. This research will help us deeply understand those questions, and most importantly give us insights on creating a standardized and consistent medication data for Veterans.  

# Veteran Journey

* Taking care of myself 
  * Managing primary care and chronic health issues - This moment matters because there’s knowledge transfer between providers leads to Veterans experiencing discontinuity in healthcare.
  * Maintaining my health 
* Aging

# Research goals

Pharmacy and medications data plays an important role in Veterans health management. Understanding the usability and source of the data, pharmacy and medications functionality, and the data policies will help our team improve the pharmacy and medication functionality and create a Veterans centric experience on va.gov.  
 
The purposes of this research are:  
- To deeply understand the pharmacy and medciation functionality today in MyHealtheVet. 
- To deeply understand the pharmacy and medciation functionality today for VA mobile app. 
- To understand how active, expired, and discontinued prescriptions are refilled and renewed. 
- To understand what medication treatment plan and pre-visit summary are, how they are used, and why they are important to Veterans and providers. 

# Outcomes

By the end of this research effort, we will be able to:

- Deliver requirements for how to transition MyHealtheVet pharmacy functionality to VA.gov
- Deliver comparison analysis among MyHealtheVet pharmacy and VA mobile app and RxRefill app in order to make sure medications on VA.gov align with other tools.
- Deliver task flows for an optimized user experience of renewing and refilling medications. 
- Deliver wireframes to present the changes for improving the user experience of pharmacy functionlity for Veterans. 
- Deliver recommendations for implementing medication treatment plan and pre-visit summary on VA.gov in the near future. 

# Timeline & Activities 

- 3/17: Finalize research plan and get approval from Coulton Bunney, Kay Lawyer, and Lauren Alexandarson 
- 3/22: Project kick off 
- 3/22: Finalize conversation guide and get approval from Coulton Bunney
- 3/24: Send out interview scheduling emails
- 3/27-4/5: Conduct interviews 
- 4/7: Organize notes and synthesize findings (continue interviews if it's not done by 4/7) 
- 4/12: Finalize summary report 
 
# Research questions 

## Data:
* Do the Health Summary and Blue Button sections pull data from the same place? (internal interviews)
* How will medical records data be affected when a facility migrates to Cerner? (internal interviews)
* How can the VA Health Summary and Blue Button sections be combined? Should they be combined? (internal interviews)
* Why is self entered data managed separately from other health data? (internal interviews)

## Policies, laws, and product history:
* In what ways do laws and policies affect what is included in a medical records and how it must be accessed? (internal interviews)
* Why is the information in medical records grouped in the way it is? (internal interviews)
* Should VA Health Summary and Blue Button sections be combined? (external interviews, internal interviews)
* Why was Search My Record created? (internal interviews)
* Why are medical records designed to primarily be downloaded and then viewed, rather than viewed and then downloaded? (internal interviews)
* What regulations and policies do we need to comply if we want to condense the output when a Veteran downloads records? (internal interviews)

## Usability:
* Who are the primary user groups for medical records today? (survey, internal interviews)
* How do veterans interact with medical records today? (analytics, internal interview)
* What information in medical records do Veterans access the most? What actions do they perform the most? (analytics)
* What problems was Search My Record created to address? (internal interview)
* What parts of medical records cause veterans the most frustration? (external interview, internal interview)
* What accessibility issues exist in the way medical records works today? (external interview, internal audit)
* Why would Veterans need to filter medical records data? Why would Veterans need to download information? (external interview, internal interview)

# Hypotheses 
* Legal and policy considerations will not noticeably constrain how we are able to redesign medical records.
* Medical records can be split up into discrete sections, such as 
  * Health summary
  * Recently added information
  * Lab results
  * Pathology results
  * Medical imaging results
  * Procedures
  * Previous visits
  * Medications
  * Allergies
  * Vaccines
  * Documents
* The primary user experience can be viewing information through each of the above sections, and downloading will be secondary functionality. 
* The Blue Button section and branding can be deprecated.
* The EHR migration will create significant medical record data conflicts for patients receiving care at both VistA and Cerner VAMCs.
* Blue Button Report and VA Health Summary and Search My Record can be combined.

# Methodology, Recruitment, and Next Steps

## Round 1: Semi-structured interviews with internal subject matter experts**
Description: Conduct semi-structured interviews with internal subject matters experts using conversation guides. Synthesize findings, develop recommendations, and deliver to MHV team to develop designs in Q4. 
Timing: By end of Q3
Location: Zoom 
Participants: Internal subject matter experts (10-12 total interviews, start with bolded names, then talk to more people on the list if we have time)

**Data focus:**
* 1-2 engineers and technical staff from MHV team 
  * MHV engineering lead: Barry Egbert (barry.egbert@blueguardianit.com)
  * PHR lead dev: Muazzam Khan 
  * Tech lead/API experts: Patrick Vinograd and Dave Mazik
  * Health APIs team at Lighthouse: Bryan Schoefield (tech lead)  
  * (maybe) VHIE (veterans health information exchange): Glen Crandall, Marie Swall - working on data interoperability issues between VA & DoD
* 1-2 engineers and technical staff who understand the Cerner data migration and upkeep plan
  * pending - need to find this person

**Clinical:**
- Maureen Layden (maureen.layden@va.gov), Physician - Director, VA Medication Reconciliation Initiative
- 

**Team responsibilities**
Moderators: Coulton, Jenny
Research guide writing and task development: Coulton, Jenny
Project point of contact: Coulton
Notetakers: Volunteers from team
Observers: 

## Round 2: Usability testing with Veterans
Description: Conduct usability testing with 5-10 Veterans using prototypes developed in response to recommendations from semi-structured interviews. 
Timing: 
Location: Zoom
Participants: 

Team responsibilities
Moderators: 
Research guide writing and task development:  
Project point of contact: 
Notetakers: 
Observers: 

## Additional research: 
