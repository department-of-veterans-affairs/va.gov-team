# Notes: Data fields and UX considerations

Last updated: December 14, 2022

## Purpose

To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams (e.g., Mobile). 

## Description of domain

This is called VA Notes today on MHV Blue Button and VA Health Summary. They include all completed VA progress, telehealth, and consult notes including primary care, specialty care, mental health, social work, nursing notes, and Secure Messaging interactions that have been saved as notes. Physicians, nurses, consultants, therapists and other members of the health care team record their notes in your medical record. 

Members of the health care team may use VA Notes to record your health condition and the care provided to you. The notes may include medical facts, clinical findings, health progress, opinions and treatment plans. It may also track your response to the care that was provided. Most importantly, it serves as a way for members of your health care team to share information about you.

There are also clinican notes, which includes progress note, procedure note, and encounter note. Things like Admission and discharge summary are also notes from doctors. We need to define what should go in to notes and what to label this domain. 

## Relevant links

[Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/decision-log.md)

[Use cases and user flows](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)

[Medical Records Competitive Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)

[Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)

[Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)

## Notes data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

**Data field title:** Notes (VA Notes on Blue Button Report)

**Data fields to include:**

- Date/time
- Note title
- Location
- Signed by 
- Co-signed by 
- Date/time signed 
- Note

## Use Cases

Notes are not just for patients, but also a way for health care members to be informed about patients' health journey. What notes are important and useful for patients to access, and what are not?  

- Procedure note: to read about what happened with the procedure and if anything needs to follow up 
- Progress note: to read about your health journey and see what's changed. 
- Outpatient encounter notes
- Consult notes 
- History & physical notes
- Discharge summary notes
- Surgical procedure notes
- Clinical procedure notes

**Common Use Cases**

What do people want to use their notes for: 
- To read about what doctors say about their procedures or any hospital stays
- To be informed about their health 

**Edge Cases**


## UX considerations

### When to show Notes section

<img width="1018" alt="Screenshot 2022-12-21 at 11 39 45 AM" src="https://user-images.githubusercontent.com/65574620/208989547-b6767929-9706-402b-a243-18db0d5663e6.png">

**Where do Notes fit within IA?**

Two ways: 
Home > My Health > Health history > Clinical notes
Home > My Health > Clinical notes


### How to show Notes section
- What should the screen look like? What information should be seen? What should be hidden? 



**View vs. share vs. download considerations:**



### Accessibility considerations:

- Need to create Accessibility brief/ document -> link here

_Accessibility considerations specific to Notes:_


### Research that relates to Notes



## Questions to answer

**UX:** 


**Business/ Engineering:** 

    

**Who do we need to get feedback from?**
 


## Lessons learned


## Backlog of potential features/ Ideas Parking Lot


## Additional notes

- Notes from Jenny: On BB, this is called "VA Notes", which includes all notes (progress notes, visit summary, procedure messages...). In CCDA, encounter notes, consultation notes and procedure notes are all separated.
  - So this means we need to decide if we separate them out or keep them together and linked with the healthcare interaction/ occurrence to which they pertain. E.g., link notes with clinic visit, surgery/ procedure, etc. OR if we do it some other way? Has backend implications - need to liaise w/ both Jenny and Eric to understand better. 
