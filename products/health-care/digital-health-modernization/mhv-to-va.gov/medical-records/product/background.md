# Background for medical records
July 26, 2022

## What are the types of records? 
Currently VA has 3 types of reports that contain a Veteran's medical records at VA:  
1) VA Blue Button Report
2) VA Health Summary (a.k.a. CCD, CCDA, or Continuity of Care Document)
3) VA Medical Images and Reports

In large part, these reports contain data based on a VA patient's interaction with VA medical providers. But if a Veteran gives their VA doctor health data from a non-VA doctor (ex: prescriptions), their VA doctor might enter that data into their VA health record. 

### 1) Blue Button:
"Blue Button" is a way to view or download a Veteran's VA health records using *any of the 3 types of reports listed above.* "Blue Button" also has another meaning: Veterans familiar with viewing and downloading their medical records equate the term "Blue Button" to the Blue Button Report.

The Blue Button Report contains the largest set of health data VA has for a Veteran. (See list below.) You can view the report in a browser or download it as a PDF. [See the bottom left of this Mural.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1638893982626/3b17e35260c8b5671613ac2b3b9bdb0d004848ba?sender=megpeters0505)
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

**Key point:** When you download a Blue Button Report, you choose what data goes into it. 

#### Search my record
In early 2022, a My HealtheVet (MHV) developer created an application called "[Search my record](https://www.myhealth.va.gov/mhv-portal-web/search-my-record)." (You must sign in to use the application.) A few things to note about "Search my record":
- All data in "Search my record" also lives in Blue Button, but...
- Blue Button includes some data that "Search my record" doesn't have (exs: DoD info, self-entered health data). 
- Currently MHV does not link to the "Search my record" app, so only people who know the URL for "Search my record" can access it. 

**Why did VA create "Search my record"?**
- They wanted something more advanced, with more options in the UX than Blue Button Report has — something that allows Veterans to dig deeper, to search and pull up a specific thing (ex: lab result). 
- It became clear that Blue Button (the report) was outdated, that it needed an upgrade.
- After that, the goal was to make it better to search. 
 
MHV's UCD Team was not involved in the original design and development of "Search my record." After the soft launch, the UCD Team did a research study and provided recommendations for usability fixes to the UI. The developers made some of these fixes, but since they ran into performance issues the project has been on hold.

NOTE: You cannot enter a keyword to search your records. Instead you select types of data to include in "Search my record" search results (exs: VA Notes, VA Labs and Tests, and VA Allergies). From search results, you can click into an individual data point such as lab work on a specific day for a specific reason.

[See the top middle of this Mural.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1638893982626/3b17e35260c8b5671613ac2b3b9bdb0d004848ba?sender=megpeters0505)
 
#### Coming soon to records? 
There's talk of including the **After-Visit Summary (AVS)** in records. No details yet, but AVS's purpose relates closely to that of the VA Health Summary: it's a snapshot of your medical care at a point in time. After an appointment with a VA provider, you get an AVS with info on your recent appointment(s?), plus medications and intructions from your care team.


### 2) VA Health Summary:
The VA Health Summary contains the following data from a Veteran's VA medical record. A Veteran can use it to review their VA health care and to share information with community providers, family, or others who help them with their health. The VA Health Summary supports continuity of care between providers.

You can view the VA Health Summary in a browser or download it as a PDF or XML file. [See the bottom left of this Mural.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1638893982626/3b17e35260c8b5671613ac2b3b9bdb0d004848ba?sender=megpeters0505)
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

**Key point:** The VA Health Summary is created by VA. A Veteran has no control over what info is in the report. 


## How do Veterans use records? 
During user research, we talked with Veterans about how they use their medical records. Here are some themes:
- To share their VA health care data with a non-VA provider
- To document their service-connected disabilities for fear of losing access to care
- To show proof of immunization or vaccination

We learned that Veterans think of their health record as a crucial component of their disability benefits.


## Lay of the land 
Xxxxx xxxx...

## Partners, stakeholders, and SMEs
[Here's the full draft list of partners, stakeholders, and SMEs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/product/team-partners-SMEs.md).

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
