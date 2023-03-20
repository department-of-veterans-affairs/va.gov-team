March 16, 2023

# Background
As we are building the medications section of MHV on VA.gov, we want to make sure we know what we know and know what we don't know. 

Currently, there are quite a few applications that are involved in key medication steps. Veteran patients can access their medication data from their Blue Button report, their After-Visit Summary, MHV’s pharmacy section, the My VA Health portal (Cerner patients only), the Rx Refill stand-alone application, and the VA Flagship application. 
 - Patients can download their VA medication data, including self-reported medications and supplements, through MHV's Blue Button. 
 - For all active medications and medications that have been inactive for fewer than 180 days, patients can view and take actions under pharmacy section on MHV. 
 - In the After-Visit Summary, Veterans can view a list of all medications (VA and non VA) that the VA has on file for them in their medical record. 
 - In the Cerner My VA Health portal, Veterans can view a list of their medications (VA and non VA) that the VA has on file for them in their medical record, they can take action to refill eligible VA prescriptions, and they can renew select VA medications by sending a secure message. 
 - The Rx Refill application ...
 - The VA Health & Benefits application ...
 
 
We know that there are policies governing what medication data should be displayed and constraints for how it should be displayed. However, we are interested in learning more about 
- reliable data sources
- how data is stored
- how exactly pharmacy functionality is intended to work
- some of the intricate challenges around giving a Veteran complete and accurate medication data. 

- This research will help us deeply understand those questions, and most importantly give us insights on creating a standardized and consistent medication data for Veterans.  

# Veteran Journey

* Taking care of myself 
  * Managing primary care and chronic health issues - This moment matters because there’s knowledge transfer between providers leads to Veterans experiencing discontinuity in healthcare.
  * Maintaining my health 
* Aging

# Research goals

Pharmacy and medications data plays an important role in Veterans' health management. Understanding the usability and source of the data, pharmacy and medications functionality, and the data policies will help our team improve the pharmacy and medication functionality and create a Veteran-centric experience on va.gov.  
 
The purposes of this research are:  
- To understand the importance of a holistic medication list (VA and non-VA meds) and what data fields must be included in it, per VA policy.
- To understand the importance of displaying medications and allergy information together. 
- To deeply understand the pharmacy and medciation functionality today in My HealtheVet and My VA Health. 
- To deeply understand the pharmacy and medciation functionality today on the VA flagship mobile app and the Rx refill app. 
- To understand the role of AVS and PVS w/r/t medications and medication reconciliation
- To understand what we are trying to communicate with different prescription and refill statuses
- To understand how prescriptions are refilled, tracked, and renewed. 
- To understand how VA defines a medication treatment plan, how they are used in patient care, and why they are important to Veterans and providers. 

# Outcomes

By the end of this research effort, we will be able to:

- Deliver requirements for how to transition My HealtheVet medication and pharmacy functionality to VA.gov
- Delineate the key functionality from My HealtheVet, My VA Health, Rx Refill app, Flagship app, and AVS/PVS that will need to be included in the medications section on VA.gov. 
- Deliver user flows for an optimized user experience of refilling medications. 
- Deliver user flows for an optimized user experience of renewing medications. 
- Deliver wireframes to present the proposed medication section on MHV on VA.gov 
- Deliver recommendations for implementing the medication treatment plan and pre-visit summary on VA.gov in the future. 
 - Document medication treatment plans and pre-visit summaries to better inform post-MVP work.

# Timeline & Activities 

- 3/17: Finalize research plan and get approval from Coulton Bunney, Kay Lawyer, and Lauren Alexandarson 
- 3/22: Project kick off 
- 3/22: Finalize conversation guide and get approval from Coulton Bunney
- 3/24: Send out interview scheduling emails
- 3/27-4/5: Conduct interviews 
- 4/7: Organize notes and synthesize findings (continue interviews if it's not done by 4/7) 
- 4/12: Finalize summary report that includes requirements, comparison analysis, and task flows 
- 4/24: Complete lo-fi wireframes
 
# Research questions 

## Clinical

### Data questions
- What are the limitations of medication data on MHV from a clinical point of view? 
 - How about My VA Health? 
- What are the different statuses for prescriptions, and why are they important? 
 - Follow-up question: Why is it important for the Veteran to see these statuses? How do they use this information when engaging in care? 
- Why do allergies need to be shown on the same page as medications? 


### Jobs to be done: Refilling, renewing, etc. 
- When is a medication shipped versus filled onsite? (Talk through facility-side versus CMOP refills). 
 - Does the original location of the prescription affect what a Veteran can do with it in the various applications today? 
- In addition to: viewing their medication list, refilling a medication, tracking a medication shipment, and renewing a medication, are there any other use cases or actions we should be planning? 
- What are the differences in requirements between medications for refills and medications for renewal? 
 - What is the process that happens on the clinical/pharmacy side after a Veteran refills a prescription on MHV?
 - What is the process for a Veteran to renew a medication?  
   - Are there limitations to medication renewals?  
   - How do these limitations impact the user experience? 
 - Does the process for refilling and renewing differ based on different classes of medications (e.g., controlled vs not controlled substances)?  

### Treatment plans & PVS
- How is the pre-visit summary currently used?  
- What is the difference between a medications list and a medications treatment plan? 
  - Do users have access to a medication treatment plan, why or why not? 

### Misc. 
- Is there anything Veterans need do to receive correct medications when they move or switch facilities? 
- What are the medications requirements for CHAMPVA patients?  

## Usability:
- How do Veterans access their medication data today? 
- What actions can Veterans take on their medication list today (e.g., request a refill)? 
- What are all the different ways Veterans can learn about the status of a medication? 
 - Meds that are eligible to be refilled
 - Meds that have been shipped
 - Medications expiring / being discontinued 
- How do Veterans request changes to their medication list or correct in the EMR medications that aren’t showing up on their medication list?  
- What are the use cases for Veterans to review and download data for medications that they are no longer taking, or that have been discontinued, expired, or otherwise deactivated?

# Hypotheses 
- A single list of all medications Veterans are taking on file in their EMR (VA and non VA) could provide clarity for Veterans. 
- There are a lot of different prescription statuses, and users might not know what all those mean and what actions they should or shouldn’t take regarding their medications’ status. 
- Notifications may be a critical driver for helping Veterans keep track of their medications (when to refill, when to renew, when shipments are expected). 
- Veterans need clear pathways for refilling and renewing (and help to understand the difference)
- Veterans do not necessarily understand why self-entered medications are not always reconciled to the EMR

# Methodology, Recruitment, and Next Steps

## Round 1: Semi-structured interviews with internal subject matter experts**
Description: Conduct semi-structured interviews with internal subject matters experts using conversation guides. Synthesize findings, develop requirements and other deliverables.
Timing: 
Location: Zoom 
Participants: Internal subject matter experts (#? total interviews)

**Clinical:**
- Maureen Layden (maureen.layden@va.gov), Physician - Director, VA Medication Reconciliation Initiative
- Eric Spahn (eric.spahn@va.gov), Clinical analyst - Pharmacy Benefits Management, OCC business line owner 
- Margo Kabel (margo.kabel@va.gov) VHA Health informatics, program analyst, HCD
- Chris Ray, contractor PM on Rx Refill app
- Rob Silverman 
- Other pharmacists? 

**Usability:**
- Arienne Walters and Harrison Amelang, MHV pharmacy designers from ByLight
- Raquel and Tanner, ByLight product owners
- Meko Hong, Flagship mobile app PM
- Rx Refill App Product managers 
- Rick Ross - My VA Health 
- Shane Elliott and Rob Durkin - AVS & PVS Product managers

*For data transfering and technical knowledge on medications, we should sync up with VA flagship mobile team engineers.*

**Team responsibilities**
- Moderators: Coulton, Jenny
- Research guide writing and task development: Coulton, Jenny
- Project point of contact: Kay, Lauren, Coulton, Jenny, Raquel, Tanner
- Notetakers: Volunteers from team
- Observers: 
