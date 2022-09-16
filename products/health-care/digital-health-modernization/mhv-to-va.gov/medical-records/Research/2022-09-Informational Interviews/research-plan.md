August 23, 2022

# Background

At a high-level, transitioning MHV to VA.gov is trying to solve two problems:

* MHV is an old product that hasn’t been significantly redesigned in a long time. While it is well-liked, it lives separately from VA.gov and uses design patterns that differ from the rest of VA.gov. 
* When a VAMC migrates to from VistA to Cerner, a veteran will be forced to use two patient portals,  MHV and Cerner HealtheLife. Not only is this confusing, but HealtheLife has a host of issues from lack of accessibility to being completely disconnected from other services the VA provides. 

Taken together, the Health Apartment team has been tasked with redesigning MHV to better integrate into VA.gov, to improve its functionality in a veteran-centered way, and to deliver a seamless UX whether a patient goes to a VistA or Cerner facility. 

Within MHV, there are four primary pieces of functionality: appointments, secure messaging, accessing your medical records, and pharmacy. The following research plan seeks to outline the discovery research needed to lay the foundation for successfully redesigning and migrating the medical records functionality in MHV.

# Veteran Journey
* Starting up 
  * Attending to health needs - This moment matters. Veterans select health care coverage according to their individual needs and preferences. This maybe a moment they need medical records if they choose private healthcare over VA, or have a different doctor, or apply for disability. ️
* Taking care of myself 
  * Managing primary care and chronic health issues - This moment matters because there’s knowledge transfer between providers leads to Veterans experiencing discontinuity in healthcare.
  * Maintaining my health 

# Research goals
* To understand what data exists in MHV medical records and the technical constraints of that data.
  * In other words, understand what we can change technically.
* To understand the policies, laws, and product history that influence MHV medical records.
  * In other words, understand what we can change legally.
* To understand known usability issues with medical records and garner preliminary ideas for ways to improve them.
  * In other words, understand what we should change.

# Outcomes

By the end of this research effort, we will be able to,
* deliver recommendations for how to improve MHV medical records in a veteran-centered way
* deliver insight into how migration from VistA to Cerner will impact medical records

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

**Policies, laws, and product history focus:**
* 1-2 Product owners from MHV
  * Health data product line: Lichelle Bain
  * Head of MHV: Theresa Hancock (Theresa.Hancock@va.gov)
  * SME for medical records: New hire coming in Sept-Oct (per Dr. Evans), Rich Beaudoin?
* 1-2 Technical staff from MHV
  * David/Boomer Rawlins?
* 1-2 Design staff from MHV
  * Bobby Bailey and Arienne Walters
* 1 per record area - Clinical staff from VA
  * Clinical Informatics: Kellie Condon (kellie.condon@va.gov), Jonathan Nebeker
  * Pathology and labs: Thomas Haugen?
* 1-2 Legal experts from VA
  * Privacy: Stephania  Griffin (Stephania.griffin@va.gov), Margaret (Peggy) Pugh 
  * HR Policy Workgroup: Dr. Christine Erickson (christine.erickson@va.gov)
* (Maybe) 1-2 Technical staff from VistA
  * Lauryl (previous research lead on Medical Records) mentioned that this one is important because this one will give us answers for how we might change things. Other people can mostly give us answers for how things current work. 

**Usability (internal SMEs):**
* 1-2 Product owners from MHV
  * Health data product line: Lichelle Bain (lichelle.bain@va.gov) 
  * MHV Search My Record: Rich Beaudoin
  * MHV records section: Bresha Lipscomb, Carnetta Scruggs (knows about VistA)
* 1-2 Design staff from MHV
  * Bobby Bailey and Arienne Walters
* 1-2 Customer support staff from MHV
  * pending - need to find this person

**Team responsibilities**
Moderators: Coulton, Jenny
Research guide writing and task development: Coulton, Jenny, Megan
Project point of contact: Coulton
Notetakers: Volunteers from team
Observers: Jonathan, Marci, Tracey, MHV design team, Patrick

## Round 2: Usability testing with Veterans
Description: Conduct usability testing with 5-10 Veterans using prototypes developed in response to recommendations from semi-structured interviews. 
Timing: By end of first half Q4
Location: Zoom
Participants: MHV users (exact participant breakdown TBD)
Team responsibilities
Moderators: Jonathan, MHV design team
Research guide writing and task development:  Jonathan, MHV design team
Project point of contact: Coulton
Notetakers: Volunteers from team
Observers: Coulton, Jenny, Leila, Marci, Patrick

## Additional research: Moderated open card sort exercise
Read through mobile team card sort sessions, review results of Health Hub IA research sessions, and then decide if we need another card sort exercise. 
