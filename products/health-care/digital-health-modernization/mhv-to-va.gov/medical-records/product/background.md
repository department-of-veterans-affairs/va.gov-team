# Background for medical records
July 26, 2022

## What's in records? 
Currently VA has 2 types of medical records: 
- **Blue Button:** A Veteran's entire health record with VA. If the Veteran provided their VA doctor with health data from a non-VA doctor (ex: prescriptions), their VA doctor can enter that info into their VA health record.
<br></br>
- **My VA Health Summary (a.k.a. CCD, CCDA, or Continuity of Care Document):** If a Veteran sees a non-VA provider, they show that provider this document. The VA Health Summary supports continuity of care between providers.

### Blue Button:
The Blue Button report contains the following data. The report contains the largest set of health data VA has for a Veteran. You can view the report in a browser or download it as a PDF. [See the bottom left of this Mural.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1638893982626/3b17e35260c8b5671613ac2b3b9bdb0d004848ba?sender=megpeters0505)
- Appointments (VA future, past)
- Medications (VA med history + self-entered)
- Labs and tests (VA lab results, pathology reports, radiology reports, EKGs + self-entered) 
- EHR history and wellness reminders (VA problem list, admissions and discharges, notes, wellness reminders)
- Allergies (VA + self-entered)
- Immunizations (VA + self-entered)
- Vitals and readings (VA + self-entered)
- Health history (self-entered)
- Food and activity journals (self-entered)
- Goals (current, completed >> all self-entered)
- Demographics and health insurance (VA + self-entered) 
- DoD Military Service Information

A My HealtheVet developer created an application called "Search my record." There is no data in "Search my record" that's not in Blue Button. But Blue Button includes some things "Search my record"  doesn't have (exs: DoD info, self-entered health data).

### VA Health Summary:
The VA Health Summary contains the following data from a Veteran's VA medical record. A Veteran can use it to review their VA care and to share information with community providers, family, or others who help them with their health. You can view the VA Health Summary in a browser or download it as a PDF or XML file. [See the bottom left of this Mural.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1638893982626/3b17e35260c8b5671613ac2b3b9bdb0d004848ba?sender=megpeters0505)
- Patient and contact info
- Health care providers
- Insurance providers
- Advance directives
- Allergies
- Encounters (with VA: secure messages, appointments, perhaps phone calls)
- Functional status
- Medications
- Immunizations
- Procedures
- Plan of care / treatment
- Problems
- Results
- Social history
- Vital signs 
- Consultation notes
- History and physical
- Discharge summaries
- Radiology studies
- Pathology studies
- Procedure notes

## How do Veterans use records? 
During user research, we've talked with Veterans about how they use their medical records:
- To share VA health care data with a non-VA provider

Work in progress... 
**Veterans are concerned with documenting their service connected disabilities for fear of losing access to care.** Veterans think of their health record as a crucial component of their disability benefits.




## Lay of the land 
Xxxxx xxxx

## Partners / stakeholders / SMEs
Xxxxx xxxx

## What we know from user research 
MHV on VA.gov and My HealtheVet studies...

Round 1 UR of prototype: 
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/initial-mhv-prototype/Round1_Usability/Final_report.md
Participants weren’t sure what constituted “recent” for the table at the top of the tool. Does recent mean the last week, month, etc?
While most participants were not familiar with BlueButton, they were able to determine what it was based on contextual clues.
Participants weren’t sure what the difference was between their Health Summary, and their BlueButton Medical Record.
One participant mentioned there wasn’t a clear section for vaccine records, and wasn’t sure where they would live within the tool.

Recs from Round 1 UR:
Iterate on Medical Records Tool design to address the following

Determine what is “recent” for the recent medical records table. What are the technical and UX considerations for what defines “recent”
Iterate on explanatory text to assist users who are trying to determine the difference between a medical record (from BlueButton) versus their health summary
Determine where vaccine records reside in the tool. Is that a seperate section, or included in the medical records? - Pass findings onto Mobile Team, see if they are still thinking about that.

Round 2 report:
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/initial-mhv-prototype/Round2_Usability/Final_Report.md

Round 2 success at: 
viewing their medical records

Participants were confused about certain terms, including "Blue Button,” and “Adverse Reactions.”
50% of users knew what Blue Button was depending on if they had used it before; this was similar to the previous round. None of the participants understood that a Pending appointment is an appointment that has been requested by a Veteran but not yet confirmed by the VA. Of the 5 participants that gave details about what they would expect in the “Allergies and Adverse Reactions” section, 3 expected to see the general potential side effects of medications instead of specific reactions that they have had to a medication.
