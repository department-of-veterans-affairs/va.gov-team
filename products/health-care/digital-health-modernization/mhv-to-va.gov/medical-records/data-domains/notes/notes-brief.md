# Care summaries and notes: Domain brief

Last updated: Feb 6, 2023 | [Change Log](#change-log)

## Table of Contents
- [Description of domain](#description-of-domain)
- [Use cases](#use-cases)
- [Requirements](#requirements)
- [Research to date](#research-to-date)
- [Relevant links](#relevant-links)
- [Questions to answer](#questions-to-answer) 


## Description of domain

This is called VA Notes today on MHV Blue Button and VA Health Summary. They include all completed VA progress, telehealth, and consult notes including primary care, specialty care, mental health, social work, nursing notes, and Secure Messaging interactions that have been saved as notes. Physicians, nurses, consultants, therapists and other members of the health care team record their notes in your medical record. 

Members of the health care team may use VA Notes to record your health condition and the care provided to you. The notes may include medical facts, clinical findings, health progress, opinions and treatment plans. It may also track your response to the care that was provided. Most importantly, it serves as a way for members of your health care team to share information about you.

There are also clinican notes, which includes progress note, procedure note, and encounter note. Things like Admission and discharge summary are also notes from doctors. We need to define what should go in to notes and what to label this domain. 

**What is a clinical or progress notes? [Source](https://www.gfcounty.nd.gov/home/showpublisheddocument/660/637248972518830000#:~:text=What%20is%20VA%20OpenNotes%3F,document%20care%20and%20services%20performed.)**

After an appointment or hospital stay, your provider and health care team write a note about that visit in your VA EHR. The note is a summary of important issues about your health. Notes have several parts, and may include: 
- A list of medical problems or symptoms 
- What you told your provider, also called the "history"
- Vital signs and physical observations or measurements, such as blood pressure, weight, or heart and lung exams
- Test results such as blood or urine tests, or X-ray reports
- Your provider's views of your health problems, called "Assessment" or "Impression" 
- The recommended treatment plan, called "Plan"
- Suggested follow up needed, such as tests or referrals to a specialist
- Notes about your hospital admission, such as the condition that resulted in an admission, treatment provided.
- Notes about your hospital discharge, such as instructions related to work, physical activity, and follow-up appointments.

## Use Cases

Notes are not just for patients, but also a way for health care members to be informed about patients' health journey. Notes are available 36 hours after completion. What notes are important and useful for patients to access, and what are not? Why are there so many different notes, and how is note different from [after visit summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/AVS-Sample-White-Redacted.pdf)?  

- Procedure note (VA Note in BB): to read about what happened with the procedure and if anything needs to follow up 
- Progress note (VA Note in BB): to read about your health journey and see what's changed. 
- Admissions and Discharge notes (VA Admissions and Discharges in BB): to read about your hospital admissions and discharges.
- After Visit Summary (part of MHV): to get a full picture of all important details during a visit
- Outpatient encounter notes (VA Health Summary)
- Consult notes (VA Health Summary)
- History & physical notes (VA Health Summary)
- Discharge summary notes (VA Health Summary)
- Surgical procedure notes (VA Health Summary)
- Clinical procedure notes (VA Health Summary)

Note what's in BB and what's in Health Summary. We will focus on what currently in BB and the AVS.

**Common Use Cases**

What do people want to use their notes for: 
- To read about what doctors say about their procedures or any hospital stays
- To be informed about their health 
- To support disability claims 

## Requirements

### Title
Care summaries and notes

### Includes  

Only what is currently accessed via BB and the AVS.

  - VA notes
  - Admission & Discharge summaries 
  - After visit summaries

What should not be included?
- Secure message threads should not be included as notes. They should be accessed via the SM interface.

What might need to be included?
- Outpatient encounter notes (VA Health Summary)
- Consult notes (VA Health Summary)
- History & physical notes (VA Health Summary)
- Discharge summary notes (VA Health Summary)
- Surgical procedure notes (VA Health Summary)
- Clinical procedure notes (VA Health Summary)

We need to do some discovery on what these notes are, whether they are different from what is included under VA notes, why there is a difference, and whether we can actually access this data.

### Information architecture
Home > My Health > Health history > Care summaries and notes

### List view

- At the top of the page, a user should be able to quickly learn about the availability of notes. For more info, see https://mhv-syst.myhealth.va.gov/mhv-portal-web/blue-button-availability
- At the top of the page, a user should be able to quickly learn about disclaimers about this domain.
- A user should be able to see a list of all of their notes, ordered chronologically. 
- Each entry should include the:
  - Note title
    - VA note: Note title
    - Admission & discharge summary: Admission & discharge summary
    - AVS: After-visit summary
  - Date (This should be the date that most closely reflects when the patient had their visit or started their hospital stay)
    - VA note: date of note
    - Admission & discharge summary: Date of admission
    - AVS: Visit date  
  - Location where that note was written
  - Physician
    - VA note: signing physician 
    - A&D: Admitting physician
    - AVS: Provider
- A user should be able to click into each entry to get more details.
  
### Details view
- The H1 of the details view should be the title of the note. 
- Where possible and clinically permissable, transform text to make a note easier to read.
- From the top of the page, a user should be able to print a note, or download it as either a PDF or TXT file. 
- Because each category of the labs and tests is different, details view for each entry will also vary: 
  - VA note
    - Title (H1)
    - Date and time
    - Location
    - Signed by
    - Co-signed by
    - Last updated
    - Date and time signed
    - Note
  - Admission & discharge summary
    - Title (H1)
    - Admission date
    - Location
    - Admitting physician
    - Discharge date
    - Discharge physician
    - Last updated
    - Discharge summary
  - After visit summary
    - Title
    - Visit date
    - Then reflect the AVS as closely as possible - https://github.com/department-of-veterans-affairs/va.gov-team/blob/b62e5725d9033be0aefef60bdd8cac6df28164f3/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/AVS-Sample-White-Redacted.pdf

 ### Not for first iteration, requires future usability research
    
  - A user should be able to sort their notes in different ways
    - Chronologically
    - By location, chronologically
    - By signing physician, chronologically
  - A user should be able search Notes to find what they are looking for.
    - A user should be able to search by note metadata, such as note title, signing or co-signing physician, location, or date. 
    - A user should be able to search for keywords in the body content of a note, such as "high blood pressure" or "back pain." A common use case is finding reference to a specific health condition in order to support something like a disability claim.
    - Search results should be ordered chronologically, from newest to oldest, and matches should be highlighted. 
    - The search box can be collapsed to create real estate for the list view of notes. 

### Sketch file
https://www.sketch.com/s/0803544d-e78c-423a-a70e-7db01a9a31c7/p/2D083AD3-2552-47E5-947B-51762267B9F3/canvas


## Research to date

**Findings from card sort**

Cards that related to clinical notes included: Encounter notes, Admission summary, After visit summary, Discharge summary, Pre-visit summary, Treatment plan, and Progress notes. Below is a screenshot of how participants grouped these cards in relation to the [anchors described in the Generative Research Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md).

Based on these findings and juxtraposed with the interpretations described below, we can assume that participants expect their notes to be associated with a section dedicated to communicating their key issues ("About me") or linked with the appointment in which those notes were produced. Some participants distinguished between notes produced in different contexts, such as in-patient versus outpatient environments (Facility Type), or notes produced by practitioners in different specialties (e.g., by general practitioners). Participants did not consistently associate these notes with lab or test results. 

<img width="724" alt="image" src="https://user-images.githubusercontent.com/100814257/209850951-0892af7c-0a7d-423d-a9cb-17ec7428e927.png">


**Participants had a range of interpretations for what might be included in different types of notes.**

_Encounter notes:_ The term "encounter notes" elicited the most negative reactions amongst participants (n=7). Four out of the seven associated encounter notes with mental health in ways that alarmed them. One described an encounter as an interaction between a psychiatrist and someone having a PTSD episode. 

_Pre-visit summary or After-visit summary:_ Responses were not consistent, though most participants understood pre-visit to happen before a visit and after-visit to happen after a visit. Participants were unclear or inconsistent on what information those documents included, and some did not understand how they differed from Admission or Discharge summaries. 

<img width="656" alt="image" src="https://user-images.githubusercontent.com/100814257/204380721-771b81ff-67d1-4941-a6c2-72e0d173c6e1.png">

_Admission summary or Discharge summary:_ Only four participants were probed on these terms. Amongst these participants, Admission and Discharge summaries were associated with a hospital, rather than a clinical visit. 

<img width="385" alt="image" src="https://user-images.githubusercontent.com/100814257/204381348-4c98347b-04c8-4de9-a4c2-dd5118e6989c.png">


## Questions to answer
- Can we or should we redesign BB PDFs to be consistent with the view experience of the same note and with Health Summary? 
- Is there any information that users have access to for notes via BB or Health Summary that we cannot display in HTML?
- Are there note types we have not accounted for that must be included? Do their fields differ from what we have included above? 
- BB may include a SM as part of Notes today. We do not think we should do this and instead should keep these in SM. Can this be confirmed?
- BB may include Admission notes, Discharge notes as part of VA notes. How do these differ from Admission and Discharge summaries?
- Can users understand which note to click into from the list view to find what they are looking for?


## Relevant links

[Overall initiative decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)

[Notes decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/notes/decision-log.md)

[Use cases and user flows](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)

[Medical Records Competitive Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)

[Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)

[Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)

[Meaningful use standards documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/meaningful-use-standards) - provided by Patty Henry between 1/12/2023 - 1/17/2023.  These standards originated during the Obama administration. MyHealtheVet used to get measured against these standards, and while they no longer do, these standards are still considered best practice and pertain to viewing, downloading, and transmitting.

[Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280)

## Additional notes

- Notes from Jenny: On BB, this is called "VA Notes", which includes all notes (progress notes, visit summary, procedure messages...). In CCDA, encounter notes, consultation notes and procedure notes are all separated.
  - So this means we need to decide if we separate them out or keep them together and linked with the healthcare interaction/ occurrence to which they pertain. E.g., link notes with clinic visit, surgery/ procedure, etc. OR if we do it some other way? Has backend implications - need to liaise w/ both Jenny and Eric to understand better. 


## Change Log

|  Date           | Changed By       | Description of Change                                                                                               |
| ----------------| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| 2/6/23                |     Coulton Bunney             | Combined requirements with domain brief                                                         |
|2/22/23|         |Coulton Bunney|Added requirements to not show SM message threads as part of notes, and an outstanding question around including VA Health Summary notes
|                 |                  |                                                                                                                     |

