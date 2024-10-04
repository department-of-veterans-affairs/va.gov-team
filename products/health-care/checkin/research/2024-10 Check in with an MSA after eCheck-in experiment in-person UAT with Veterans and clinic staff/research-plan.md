# Research plan - Check in with an MSA after eCheck-in experiment in-person UAT with Veterans and clinic staff 

## Background

For decades, when a patient was checked in, clinical staff rightfully assumed that a patient had, most importantly, arrived, checked in with MSAs, and was now sitting in the clinic waiting room ready to be called back for their appointment.

With the introduction of eCheck-in in early 2022, Veterans could check in remotely from their smartphones, initially, 15 minutes before their appointment, which has since increased to 45 minutes due to feedback that, 1) Veterans are often told by clinicians and MSAs to arrive even earlier to their appointments, and 2) cellular signal, which is required to complete eCheck-in, can more often be problematic once inside VA health facilities.

Completing eCheck-in shows the patient as checked in within VistA and VSE-CS (i.e., both staff-facing applications), but Veterans do not have to be physically in the clinic waiting room at the time of completion, which is a mental model and process change for clinic staff.

### Compliments from Veterans about eCheck-in
- Out of ~574 responses in early 2024 (from VSignals), where the vast majority of comments were about Veteran's satisfaction with MSAs or their clinical encounter, there were 18 compliments from Veterans about how easy to use eCheck-in was, how excited they were about it, and how they wished it was available at more VA facilities. ([VSignals Summary of Common Themes from Veterans Report](https://dvagov-my.sharepoint.com/:b:/g/personal/benjamin_brasso_va_gov/EQl4f33NUjBDssglCQbteiEB4YP850RQPK-SgGlRotMGDA?e=ihkF9M).)

<img width="800" alt="Screenshot 2024-09-25 at 10 31 00 AM" src="https://github.com/user-attachments/assets/55a70b48-e6b3-4ce5-b034-18fa0b6aff2a"> 


## Problem 

The introduction of eCheck-in (i.e, an additional modality for Veterans to check in to an appointment), reported by facility staff, has caused providers to lose patients, patients going to the wrong floor/clinic, miss appointments, wait longer than anticipated to see their provider if eCheck-in wasn't completed correctly, etc. (More information about the problem below.)

Further complicating these issues, VA facilities and clinics aren't mandated (i.e., there’s no VHA directive) to use Patient Check-in (PCI) and VSE-CS (PCI-CSV) and these tools and their data are being used differently, which in turn passes a burden on to the Veteran to understand how PCI is being used at each clinic they go to for care. For example, completing eCheck-in doesn't necessarily equate to a Veteran being in the waiting room; and for clinics that operate without MSAs, interpreting eCheck-in the wrong way can cause problems for both the clinical team and the Veteran.  

### Problem areas 

- Veterans using PCI, specifically eCheck-in, without a VHA directive mandating clinical staff and MSAs to use VSE-GUI and VSE-CS to review a patient's check in status, and understand that although checked in successfully, they might not be in the clinic waiting room, has caused clinical staff to lose patients, patients going to the wrong floor/clinic, miss appointments, caused Veterans to wait longer than expected to see their provider if eCheck-in wasn't completed correctly or interpreted correctly by staff, etc.
- Clinic operations, universally across VISNs, have not been able to figure out (or have unmet needs within VSE-GUI and VSE-CS on) how to, 1) identify when a patient has arrived at the clinic waiting room who has completed eCheck-in, and 2) let the clinical staff know the patient is ready to be seen.
- Veterans using eCheck-in at clinics who's clinical staff and MSAs aren't using VSE-GUI and VSE-CS to monitor patient check ins are frustrated that VA's digital services aren't working as expected, causing mistrust, missed appointments, wait longer than anticipated to see their provider, etc.
- There’s no consistently governed, patient friendly data for clinic name and physical location across VistA instances, VISNs, and clinics in order to provide Veterans accurate information on where to go once inside VA facilities, especially VAMC’s and hospitals, which have caused Veterans to, technically, "check in," but not be ready to be seen by their provider because they're in the wrong location. E.g., delivered in appointment text reminders and within eCheck-in. 

### Evidence of the problem 

#### Complaints from VA facilities 
- The Integrated Veteran Care (IVC) department received ~80-90 complaints about eCheck-in from facilities in early 2024.

#### Complaints from Veterans
- Out of ~574 responses in early 2024, where the vast majority of comments were about Veteran's satisfaction with MSAs or their clinical encounter, there were 44 complaints from Veterans specifically about either, 1) clinic staff ignoring eCheck-ins, or 2) not enough information in appointment reminders and eCheck-in for them to find the clinic for their appointment(s). ([VSignals Summary of Common Themes from Veterans Report](https://dvagov-my.sharepoint.com/:b:/g/personal/benjamin_brasso_va_gov/EQl4f33NUjBDssglCQbteiEB4YP850RQPK-SgGlRotMGDA?e=ihkF9M).)

<img width="800" alt="Screenshot 2024-09-25 at 10 31 00 AM" src="https://github.com/user-attachments/assets/9cd69553-a359-45a1-8437-e00127ac241d"><br/><br/>

<img width="800" alt="Screenshot 2024-09-25 at 10 31 10 AM" src="https://github.com/user-attachments/assets/8cc87fde-829e-49dd-9195-092d248d599e">


## OCTO-DE goals this research supports

- Veterans can manage their health services online
- Logged-in users have a personalized experience with relevant and time-saving features 

## How this research maps to the Veteran journey 

<img width="800" alt="Screenshot 2024-09-25 at 11 07 33 AM" src="https://github.com/user-attachments/assets/4140f4f6-7d46-4564-8faa-0a52514661e1">

## Research goals 

The purpose of this research is to, 1) understand the value of eCheck-in to Veterans for an experiment that removes the step that happens in the background that sets the appointment status to CHECKED-IN after competing eCheck-in, 2) understand the impact of this change, whether it solves the identified problems or creates new undesired burdens, on improving clinic staff's understanding of “checked in” vs. “arrived and ready to be seen,” and finally, 3) inform the next step in solving this complex end-to-end experience problem.   

In addition, it’s important to understand the outcomes of this research at VA facilities with varying levels of PCI utilization and patient tracking success. E.g., including a facility that often runs into the identified problems and ones that do not.  

### Research questions 

#### Veteran-facing
1. Do Veterans understand that they have to check in with an MSA at their clinic to complete the check in process? 
2. Do Veterans perceive the value of eCheck-in has increased or decreased as a result of now having to check in with staff after completing eCheck-in? What about Veterans who file a travel reimbursement claim during eCheck-in vs. those that do not? 
3. How likely or unlikely are Veterans to use eCheck-in again knowing that they’ll be required to check in with an MSA after completing eCheck-in on their smartphone? And, why?  

#### Staff-facing
4. Understand if clinic staff will review demographic information with Veterans during check in even if Veterans marked them as up to date during eCheck-in. If so, why? 
5. Has the workload increased or decreased for MSAs or clinicians checking patients in? If so, why and how? 
6. Has the average amount of time increased or decreased for Veterans waiting in line to check in with clinic staff? I.e., observationally. 
7. Has the amount of missed appointments, Veterans arriving late or being at the wrong clinic, lost patients, and/or canceled appointments by VA staff (when eCheck-in status is set to completed) increased or decreased?
8. Understand what the highest value improvement would be within these staff-facing tools to better support patient tracking and check ins for clinicians and MSAs.   
9. Has clinic patient tracking operations and communication between front of house and back of house improved, remained the same, or worsened? And, why? 

## Hypothesis

#### Veteran-facing
1. Do Veterans understand that they have to check in with an MSA at their clinic to complete the check in process? 
2. Do Veterans perceive the value of eCheck-in has increased or decreased as a result of now having to check in with staff after completing eCheck-in? What about Veterans who file a travel reimbursement claim during eCheck-in vs. those that do not? 
3. How likely or unlikely are Veterans to use eCheck-in again knowing that they’ll be required to check in with an MSA after completing eCheck-in on their smartphone? And, why?  
   - Veterans who file mileage-only travel reimbursement claims will likely use eCheck-in again. 
   - Veterans who don’t file travel reimbursement claims during eCheck-in will be unlikely to use eCheck-in again because VA is forcing them to perform the same task twice. 

#### Staff-facing
4. Understand if clinic staff will review demographic information with Veterans during check in even if Veterans marked them as up to date during eCheck-in. If so, why? 
5. Has the workload increased or decreased for MSAs or clinicians checking patients in? If so, why and how? 
6. Has the average amount of time increased or decreased for Veterans waiting in line to check in with clinic staff? I.e., observationally. 
7. Has the amount of missed appointments, Veterans arriving late or being at the wrong clinic, lost patients, and/or canceled appointments by VA staff (when eCheck-in status is set to completed) increased or decreased?
8. Understand what the highest value improvement would be within these staff-facing tools to better support patient tracking and check ins for clinicians and MSAs.   
9. Has clinic patient tracking operations and communication between front of house and back of house improved, remained the same, or worsened? And, why? 

## Research method  

### Overview

This research will include in-person Veteran intercepts at VA health facilities during the check in process at clinics and semi-structured staff-facing interviews with MSAs, clinic managers, and/or clinicians.  

1 or 2 researchers will coordinate visits with a VA health facility that often runs into the identified problems and one that does not. (E.g., based on reviewing the PCI PowerBI Dashboard and speaking with IVC, IPT and SPL.) 

After coordination with VA facilities has completed, researchers will work with HAS staff to determine the best approach for Veteran intercepts, in addition to ensuring Veterans are offered an incentive for participation and explanation of how their involvement supports OCTO-DE’s goals. 

Our goal is to intercept and gather feedback from at least 15 Veterans at each VA facility and speak with, at least, MSAs and clinicians that use VSE-CS to monitor patient check ins at each clinic and/or VA facility visited. 

### Locations

TBD

### Risks

| Description | How to track |
| ---------------- | ----------- |
| Decrease in Veteran usage of VA digital services, specifically eCheck-in. | In-person Veteran interviews and PCI PowerBI Dashboard |
| Decrease in Veteran satisfaction with VA digital services, e.g., decrease value of eCheck-in and/or frustration as a result of constant changes to digital services. | In-person Veteran interviews, VSignals reports |
| Increase in wait time for Veterans to check in at clinics. And, average amount of time it takes to check Veterans in, including eCheck-in and in-person check in. (E.g., it takes Veterans an average of 2 mins and 21 seconds to complete eCheck-in, including filing a travel reimbursement claim.) | In-person clinic observation and in-person MSA semi-structured interviews |
| Decrease in ease of access to checking in for an appointment and inclusivity, e.g., Veterans with mobility or vision challenges don't want to wait in line. | In-person Veteran interviews, VSignals reports |
| Negative impact on clinic operations and patient tracking at VA facilities that don’t have these problems. | In-person MSA semi-structured interviews and pilot feedback recurring meeting with IVC |
| Negative or no impact on clinic operations and patient tracking as a result of lack of education and training of the changes to these tools and what their data means, especially ones that have reported problems. | In-person MSA semi-structured interviews and pilot feedback recurring meeting with IVC |
| Veteran completes eCheck-in, but fails to find or go to the clinic and check in with an MSA or clinician on time. | In-person MSA semi-structured interviews and pilot feedback recurring meeting with IVC |
| Feasibility of implementation (the experiment itself, let alone the possibility of scalability) and staff education and training, which inherently impacts effort and timeline. | OCTO, IVC, IPT coordination |

### Research materials 

- [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/Initiatives/check-in-with-staff.md)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/2024-10%20Check%20in%20with%20an%20MSA%20after%20eCheck-in%20experiment%20in-person%20UAT%20with%20Veterans%20and%20clinic%20staff/research-plan.md)
- Conversation guide 

## Recruitment
n/a

## Timeline
TBD

## Team roles
- Moderator: Ben Brasso (ben.brasso@agile6.com)
- Research guide writing and task development: Ben Brasso (ben.brasso@agile6.com)
- Participant recruiting & screening: n/a
- Project point of contact: Ben Brasso (ben.brasso@agile6.com), Kristen McConnell (kristen.mcconnell@va.gov)
- Participants for pilot test: n/a
- Note-takers: TBD
- Observers: n/a

 


