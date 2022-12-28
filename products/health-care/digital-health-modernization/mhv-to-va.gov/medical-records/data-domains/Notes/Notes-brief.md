# Notes: Data fields and UX considerations

Last updated: December 28, 2022

## Purpose

To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams (e.g., Mobile). 

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

Notes are not just for patients, but also a way for health care members to be informed about patients' health journey. Notes are available 36 hours after completion. What notes are important and useful for patients to access, and what are not? Why are there so many different notes, and how is note different from after visit summary? 

- Procedure note (VA Note in BB): to read about what happened with the procedure and if anything needs to follow up 
- Progress note (VA Note in BB): to read about your health journey and see what's changed. 
- Outpatient encounter notes (VA Health Summary)
- Consult notes (VA Health Summary)
- History & physical notes (VA Health Summary)
- Discharge summary notes (VA Health Summary)
- Surgical procedure notes (VA Health Summary)
- Clinical procedure notes (VA Health Summary)

Note what's in BB and what's in Health Summary

**Common Use Cases**

What do people want to use their notes for: 
- To read about what doctors say about their procedures or any hospital stays
- To be informed about their health 
- To support disability claims 

**Edge Cases**


## UX considerations

### When to show Notes section

<img width="1218" alt="Screenshot 2022-12-27 at 1 22 23 PM" src="https://user-images.githubusercontent.com/65574620/209723625-906b9f26-1a71-472a-81e1-947e822e6fef.png">

**Where do Notes fit within IA?**

Two ways: 
- Home > My Health > Health history > Clinical notes
- Home > My Health > Clinical notes


### How to show Notes section
What should the screen look like? What information should be seen? What should be hidden? 

VA Notes on Blue Button Report: 

<img width="864" alt="Screenshot 2022-12-21 at 12 00 59 PM" src="https://user-images.githubusercontent.com/65574620/208992987-9b3bd638-fb83-4dca-8a9a-6fccbc25c1f6.png">

What are important to show: 
- Type of clinical notes
- Title of the notes
- Date/time received
- Clinician's name

**View vs. share vs. download vs. print considerations:**

- View: How much notes is it helpful for users to view without overwhelming them on the screen? 
- Share: Do users share all notes or individual note? Who do they share it with? How do they share it currently, through secure messaging? What's the ideal way of sharing notes? 
- Download: Currently users need to download and open the report in PDF in order to view notes. Question is that if there is a need to download. 
- Print: What is print feature like? Is it simply a print button to print the whole list of notes? How would users print individual notes? 


### Accessibility considerations:

- Need to create Accessibility brief/ document -> link here

_Accessibility considerations specific to Notes:_


### Research that relates to Notes

**Findings from card sort**

Cards that related to clinical notes included: Encounter notes, Admission summary, After visit summary, Discharge summary, Pre-visit summary, Treatment plan, and Progress notes.



**Participants had a range of interpretations for what might be included in different types of notes.**

_Encounter notes:_ The term "encounter notes" elicited the most negative reactions amongst participants (n=7). Four out of the seven associated encounter notes with mental health in ways that alarmed them. One described an encounter as an interaction between a psychiatrist and someone having a PTSD episode. 

_Pre-visit summary or After-visit summary:_ Responses were not consistent, though most participants understood pre-visit to happen before a visit and after-visit to happen after a visit. Participants were unclear or inconsistent on what information those documents included, and some did not understand how they differed from Admission or Discharge summaries. 

<img width="656" alt="image" src="https://user-images.githubusercontent.com/100814257/204380721-771b81ff-67d1-4941-a6c2-72e0d173c6e1.png">

_Admission summary or Discharge summary:_ Only four participants were probed on these terms. Amongst these participants, Admission and Discharge summaries were associated with a hospital, rather than a clinical visit. 

<img width="385" alt="image" src="https://user-images.githubusercontent.com/100814257/204381348-4c98347b-04c8-4de9-a4c2-dd5118e6989c.png">


## Questions to answer

**UX:** 
- How do we group notes? 
- What to call notes?
- What information do they want most readily available about notes? 
- Are we redesign PDFs or do we want to display notes on the screen? 
- What notes do users find the most useful? Analytics? check VA Progress notes requested, what is progress notes? 
- Do users have different purposes for view/share/download/print? 
- Talk to whoever works on after visit summary, and see how different it notes from after visit summary


**Engineering:** 
- Can we take notes out of PDF format and display content on the screen? 

**SMEs:** 
- What are the different types of notes and what are they used for? 
- Are there any notes for clinians that patients don't have access to? 

**Who do we need to get feedback from?**
Ask Lauren A., Theresa Hancock, Bresha Lipscomb, Carnetta Scruggs, and Patty who we need to reach out to regarding notes.


## Lessons learned


## Backlog of potential features/ Ideas Parking Lot


## Additional notes

- Notes from Jenny: On BB, this is called "VA Notes", which includes all notes (progress notes, visit summary, procedure messages...). In CCDA, encounter notes, consultation notes and procedure notes are all separated.
  - So this means we need to decide if we separate them out or keep them together and linked with the healthcare interaction/ occurrence to which they pertain. E.g., link notes with clinic visit, surgery/ procedure, etc. OR if we do it some other way? Has backend implications - need to liaise w/ both Jenny and Eric to understand better. 
