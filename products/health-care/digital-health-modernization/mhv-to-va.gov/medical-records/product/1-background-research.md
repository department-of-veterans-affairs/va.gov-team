# 1) Background and past research on medical records
July 26, 2022

**Check out the [records discovery Mural!](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1654869136822/fd8bebaa98bd723136ea04c71212d888f75f3c83?sender=megpeters0505) It has visuals of many of the things described here.** 

## What are the types of records reports? 
Currently VA has 3 types of reports that contain a Veteran's medical records at VA:  
1) VA Blue Button Report
2) VA Health Summary (a.k.a. CCD, CCDA, or Continuity of Care Document)
3) VA Medical Images and Reports

In large part, these reports contain data based on a VA patient's interaction with VA medical providers. But if a Veteran gives their VA doctor health data from a non-VA doctor (ex: prescriptions), their VA doctor could enter that data into their VA health record. 

**NOTE:** To view and download records content, a Veteran must be:
- signed in,
- enrolled in VA health care, and
- registered at a VA facility.

### 1) Blue Button
**"Blue Button" is a way to view or download a Veteran's VA health records using any of the 3 types of reports listed above.** "Blue Button" also has another meaning: Veterans familiar with viewing and downloading their medical records equate the term "Blue Button" to the Blue Button Report.

The Blue Button Report contains the largest set of health data VA has for a Veteran. (See list below.) You can view the report in a browser or download it as a PDF. See the [Blue Button screen at the bottom left of this Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1638893982626/3b17e35260c8b5671613ac2b3b9bdb0d004848ba?sender=megpeters0505) or see a [sample Blue Button Report.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/Blue-Button-Report_MHVZZVISNTWENTY_20220728_1525.pdf)
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

#### To do
1) First get background on rules for the "Blue Button" brand. Can VA call the Blue Button Report something else? Must VA use the term "Blue Button" to mean the framework for downloading any of the 3 reports listed above?
2) In conversations with partners and stakeholders, discuss the possibility of either not using or downplaying the term "Blue Button" in the records section of MHV on VA.gov. In a recent conversation with Carnetta Scruggs and Bresha Lipscomb, Carnetta said they were considering changing "Blue Button" to "VA Health Records." See the [notes from that meeting at the bottom left of the records discovery Mural.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1654869136822/fd8bebaa98bd723136ea04c71212d888f75f3c83?sender=megpeters0505) 

#### Search my record
In early 2022, a My HealtheVet (MHV) developer created an application called "Search my record."
- ["Search my record" dark launch](https://www.myhealth.va.gov/mhv-portal-web/search-my-record) (You must sign in to use the application.) 
- [Mockup of the search screen for "Search my record."](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/search-my-record-search-screen.png)

A few things to note about "Search my record":
- All data in "Search my record" also lives in Blue Button, but...
- Blue Button includes some data that "Search my record" doesn't have (exs: DoD info, self-entered health data). 
- Currently MHV does not link to "Search my record," so only people who know the URL for "Search my record" can access it.

**Why did My HealtheVet create "Search my record"?**
- They wanted something more advanced, with more options in the UX than Blue Button Report has — something that allows Veterans to dig deeper, to search and pull up a specific thing (ex: lab result). 
- It became clear that Blue Button (the report) was outdated, that it needed an upgrade.
- After that, the goal was to make it better to search. 
 
MHV's UCD Team was not involved in the original design and development of "Search my record." After the dark launch, the UCD Team did a research study and provided recommendations for usability fixes to the UI. The developers made some of these fixes, but the project has been on hold since they ran into performance issues.

**Key point:** You cannot enter a keyword to search your records. Instead you select types of data to include in "Search my record" search results (exs: VA Notes, VA Labs and Tests, and VA Allergies). You are applying filters to determine what will be in your search results. On the search results page, you can click into an individual data point such as lab work on a specific day for a specific reason.

Here's a [doc from the MHV UCD Team's Arienne Walters and Bobby Bailey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/Search%20My%20VA%20Health%20Record%20-%20Differences%20from%20Blue%20Button.docx) about the differences between Blue Button Report and "Search my record."
 
### 2) VA Health Summary
The VA Health Summary contains the following data from a Veteran's VA medical record. A Veteran can use it to review their VA health care and to share information with community providers, family, or others who help them with their health. The VA Health Summary supports continuity of care between providers.

You can view the VA Health Summary in a browser or download it as a PDF or XML file. See this [sample VA Health Summary.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/VA-Health-Summary-CCD_MHVZZVISNTWENTY_20220124_1607.pdf) 
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

**Key point:** The VA Health Summary is created by VA. A Veteran has no control over what information is in the report. 

### Coming soon to the VA Health Summary? 
There's talk of including the [**After-Visit Summary (AVS)**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/AVS-Sample-White-Redacted.pdf) in the VA Health Summary. No details yet, but AVS's purpose relates closely to that of the VA Health Summary: it's a snapshot of your medical care at a point in time. After an appointment with a VA provider, you get an AVS with info on your recent appointment(s?), plus medications and instructions from your care team.

On a related note, the After-Visit Summary might be the best source of truth for all the prescriptions and medications a Veteran takes. Because there has not been a good source of truth for prescriptions and medications, the Office of the Inspector General was investigating, working with Pharmacy Benefits Management (PBM), the group responsible for managing information about medications.

### 3) VA Medical Images and Reports
A Veteran can:
- Download and view medical images such as MRIs and X-rays, as well as reports about medical images
- Request images


## How do Veterans use their medical records? 
During user research, we talked with Veterans about how they use their medical records. Veterans said they want to:
- Share their VA health care data with non-VA providers
- Document their service-connected disabilities for fear of losing access to health care
- Use medical records when filing for disability or an increase in disability rating — records about their claimed condition or that show their rated disability has gotten worse
- Show proof of immunization or vaccination
- Keep complete health records 

We also heard from Veterans that they think of their health record as a crucial component of their disability benefits.


## The records landscape at VA
Medical records touch a lot of areas of VA. For example, a Veteran's records may include prescriptions, appointments, and secure messages. As Records moves from My HealtheVet to VA.gov and gets redesigned, it will be important to consult people from many groups at VA, including VA's legal and privacy experts. The information in records is private and protected by law.

### Partners, stakeholders, and subject-matter experts (SMEs)
Here's the [full draft list of partners, stakeholders, and SMEs for medical records](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/product/team-partners-SMEs.md).

See who we've met with so far on the [Work, recommendations, and next steps page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/product/4-work-recommendations-next-steps.md).

When working with partners, stakeholders, and subject-matter experts (SMEs), it will be critical to:
- listen to their priorities,
- understand legal, security, and privacy requirements,
- figure out who the decision-makers are (the "who" may vary based on the decision),
- communicate progress regularly to the main partners, and
- inform SMEs and non-main stakeholders of the team's direction so they don't get too far with a solution that could be problematic.

**Key point:** The MHV on VA.gov product owner meets regularly with My HealtheVet leadership, Nancy Wilck and Theresa Hancock. When you need to talk to a partner or SME, having them introduce you will smooth the way.


## Research related to records 
Research with Veterans over the past 2 1/2 years has given us insights on: 
- how Veterans think about records,
- how they use their records, and
- ways to improve the MHV on VA.gov / Health Apartment Team's prototype. 

Following are details from several studies. 

### To do
- Read the research studies below. Notice the outstanding research question at the end.
- Look for more research studies related to records.
- Gather analytics and see what story they tell.

### 1) Round 1 user research on the MHV on VA.gov prototype 
March-April 2022

In Round 1 research, all participants used desktop to access a [prototype that showed a complete, high-level information architecture.](https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/a/7yK3287/play) Though the study did not focus on records, we got Veterans' feedback on our concept for the "Medical records" landing page as they did common tasks related to records.

**[Round 1 findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/initial-mhv-prototype/Round1_Usability/Final_report.md) on records:**
- The Pharmacy and Medical records Tools had very high task success rates across all users. 
- Participants weren’t sure what constituted “recent” for the table at the top of the main landing page. Does "recent" mean the last week, month, etc.?
- While most participants were not familiar with Blue Button, they were able to determine what it was based on contextual clues.
- Participants weren’t sure what the difference was between their VA Health Summary and their Blue Button Report. 
- One participant mentioned that there wasn’t a clear section for vaccine records — and wasn’t sure where they would live within the site.

**Recommendations related to records from Round 1:**
Iterate on "Medical records" tool design to address the following:
- Determine what is “recent” for the recent medical records table. What are the technical and UX considerations for what defines “recent”?
- Iterate on explanatory text to assist users trying to determine the difference between a medical record (from Blue Button) versus their VA Health Summary.
- Determine where vaccine records reside in the tool. Is that a separate section, or included in the medical records? 
- Share findings with the Flagship Mobile Team to see if they are still thinking about where vaccine records should live.

[View the "Medical records" page of the desktop prototype.](https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/prototype/a/44472CCE-CE14-4CED-9B07-E87CFED3EFE6) Note that we've made updates to this prototype based on the findings from Round 1 and Round 2. 

### 2) Round 2 user research on the MHV on VA.gov prototype 
May 2022

In Round 2 research, all participants used a mobile device to access a [mobile prototype that showed a complete, high-level information architecture.](https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/prototype/a/40D83D4A-9785-4204-A966-103B35FF65A7?hotspots=false) Like Round 1 above, this study did not focus on records; however, we got Veterans' feedback on our concept for the "Medical records" landing page for mobile as they did common tasks related to records.

**[Round 2 findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/initial-mhv-prototype/Round2_Usability/Final_Report.md) on records:**
- Participants were confused about certain terms, including "Blue Button,” and “Adverse Reactions.” 50% of users knew what Blue Button was (depending on whether they had used it before); this was similar to Round 1. 

[View the "Medical records" page of the mobile prototype.](https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/prototype/a/0F31920D-6FE8-4239-8207-3F129FCEA6E4?hotspots=false) Note that we've made updates to this prototype based on the findings from Round 1 and Round 2. 

### 3) "Search my record" usability findings 
October 2021

After the dark launch of ["Search my record,"](https://www.myhealth.va.gov/mhv-portal-web/search-my-record) the My HealtheVet UCD Team did a research study with Veterans and provided recommendations for usability fixes to the UI. (MHV's UCD Team was not involved in the original design and development of "Search my record.")

View the [“Search my record” usability findings.](https://xd.adobe.com/view/1ddcbf09-eae3-4d64-89bf-2d9e9d548f38-488f/)

### 4) Generative research on how Veterans think about their health care
December 2020

To understand how Veterans think about their health care, the Digital Health Modernization Team did generative research with 23 Veterans. We learned a few things related to records:
- Veterans understood the importance of documenting their service-connected disabilities 
- Issues with their health record prevented some participants from claiming their service-connected conditions

See slide 26 of the [Digital Health Modernization Team's generative research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/pre-mhv-prototype/generative-research-study-1/research-findings.md).

### 5) Outstanding research question
What should we call the records section of MHV on VA.gov? 
- "Medical records"
- "Health records"
- "Records"

In our research, "Medical records" has seemed like a successful label. That said, we have not probed extensively on it in our research with Veterans. In our current prototype, you can track your health in the records section. We need to make sure it's intuitive for Veterans to find tracking functionality under "Medical records." If it's not, we can change the label or move tracking functionality to a more intuitive place on MHV on VA.gov.
