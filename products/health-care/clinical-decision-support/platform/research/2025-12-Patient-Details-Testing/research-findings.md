---
title: "Patient Details Research Findings"
product: "CDS Console"
team: "CDS Platform Team"
office: "Office of Information and Technology & Veterans Health Administration"
date: "2025-01-09"
researchers:
  - "Liz Blasi, UX Design & Research"
research_goals:
  - "Understand what data clinicians want to see in Console Patient Details to best support clinical decision making"
  - "Identify where Patient Details provides the most value in clinician workflows"
  - "Understand how Patient Details value and needs differ between Oracle Health's PowerChart and CPRS"
methodology:
  - "Usability testing with production Patient Details Beta (CPRS)"
  - "Concept testing with prototypes (CPRS and Oracle Health)"
  - "Contextual inquiry of typical workflows"
devices_used:
    desktop: 8
    tablet: 0
    smartphone: 0
    assistive_technology: 0
participants_total: 8
Primary role:
  Clinical dietician: 0
  MSA: 0
  Nurse Practitioner: 1
  Nursing (RN, LPN): 0
  Pharmacist: 1
  Physician: 4
  Physician Assistant: 0
  Resident, Intern, or Fellow: 0
  Other: 2
Specialty:
  Cardiology: 0
  Dermatology: 0
  Emergency Medicine: 1
  Endocrine: 0
  Hematology: 0
  Hepatology/Gastroenterology: 0
  Infectious Disease: 0
  Informatics: 1
  Mental Health: 1
  Nephrology: 0
  Neurology: 0
  Oncology: 0
  Pain Management: 2
  Palliative Medicine: 0
  Pharmacy: 0
  Primary Care: 3
  Pulmonology: 1
  Surgery: 0
  Other: 0
Care setting:
  Outpatient: 5
  Inpatient: 2
  Emergency Department: 1
  Other: 0
EHR:
 CPRS: 5
 Oracle: 3

key_findings:
  - "Clinicians want abnormal values visually flagged, not buried in long notes"
  - "Trends enable shared decision making and help 'paint a picture' for patients"
  - "Clinicians expect conditions to drive key medications in a problem-oriented view"
  - "Medication adherence data serves as a clinical signal when tied to conditions"
  - "Medical calculators support clinical reasoning and patient education"
  - "Insight without ability to action breaks workflow momentum"
  - "Having key information 'all in one place' organized by condition reduces cognitive load"
  - "Future appointments are more valuable than past ones for care coordination"
recommendations:
  - "Improve findability of trend buttons and add normal range indicators to trended data"
  - "Add hover details on trended data points showing exact values and dates"
  - "Surface provider/clinic names with appointments to support care coordination"
  - "Enable direct actions from Patient Details (order labs, refill meds, document reviews)"
  - "Add medication refill status, expiration dates, and renewal information"
  - "Allow clinicians to customize which calculators appear in Patient Details"
  - "Implement ability to copy calculator results into clinical notes"
  - "Add care team information to support coordination across providers"
kpi_alignment:
  - "Reduced time spent on pre-charting and chart preparation"
  - "Increased clinician adoption of CDS Console as primary home for clinical decision support"
  - "Improved care coordination across specialties"
outcomes:
  user: "Faster, more confident clinical decision-making with reduced cognitive load and fewer missed details"
  business: "Higher CDS Console adoption rates and establishment as the primary home for clinical decision support across EHRs"
opportunity_areas:
  - "Pre-visit chart preparation and daily planning with nursing staff"
  - "Clinical reasoning during patient visits with visual evidence"
  - "Care coordination and follow-up planning across providers"
  - "Shared decision-making with patients using trends and calculators"
further_research_needed:
  - "Task workflows within Oracle Health's PowerChart"
  - "Oracle Health workflows with additional participants across specialties"
  - "Tasks/follow-up tracking within the context of Patient Details"
  - "Use of ICN in clinician workflows"
underserved_groups_missing:
  - "Additional Oracle Health primary care providers"
  - "Broader range of clinical specialties in Oracle Health"
  - "More diverse geographic representation"
secondary_research:
  - "None conducted for this study"
synthesis_tools_used:
  - "Mural"
  - "Affinity Mapping"
---

# Patient Details Research Findings 

**Office of Information and Technology & Veterans Health Administration, CDS Console, CDS Platform Team**

**Date:** 01/09/2025

**Contacts:** Liz Blasi, UX Design & Research

**[Research Readout (PDF)](https://dvagov.sharepoint.com/:b:/r/sites/CDSProgramTeam/Shared%20Documents/Clinical%20Decision%20Support%20Platform%20Team%20(CDSP)/2.%20User%20Research/2025%20User%20Research/Patient%20Details/Patient%20Details_Insights_1.09.2025_LizBlasi_V2.pdf?csf=1&web=1&e=EURy3S)**  

**Jump to:**
- [Hypotheses and conclusions](#user-content-hypotheses-and-conclusions)
- [Key findings](#user-content-key-findings)
- [Recommendations](#user-content-recommendations)
- [Product User and Business Outcomes](#user-content-product-user-and-business-outcomes)
- [Key Performance Indicators](#user-content-key-performance-indicators)
- [Next Steps](#user-content-next-steps)
- [Further research needed](#user-content-further-research-needed)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)

## Research Goals

This research explored how the CDS Console's Patient Details feature fits into clinician workflows and supports clinical decision-making across both CPRS and Oracle Health's PowerChart environments.

**Key Questions:**  
- What are the key moments Patient Details supports in the clinician's journey?  
- What outcomes are we aiming to achieve for clinicians, VA staff, and stakeholders?  

The study focused on understanding where Patient Details adds value in clinician workflows, how needs differ between EHR systems, and what information best supports clinical decision-making across specialties.

## Research Questions

* What data do clinicians want to see in Console Patient Details to best support their clinical decision making?
* Where in their workflow do clinicians see Patient Details providing the most value?
* How do Patient Details value and needs differ between Oracle Health's PowerChart and CPRS?
* What information is needed to best support clinical decision making across specialties?

## Methodology 

This study employed a mixed-methods approach combining usability testing and concept testing:

- **CPRS Testing**: Part 1 involved production testing of Patient Details Beta, followed by Part 2 concept testing with prototypes
- **Oracle Health Testing**: Part 1 explored typical workflows in PowerChart, followed by Part 2 concept testing with prototypes
- **Participants**: 8 clinicians total (5 CPRS users, 3 Oracle Health users) across various specialties including primary care, emergency medicine, pain management, pulmonology, and behavioral health

## Hypotheses and Conclusions

**Hypothesis:** If clinicians can reliably access holistic patient information and data through the CDS Console within their existing EHR workflows, then concept testing will reveal specific points of friction that, once addressed, will increase clinician adoption and reinforce the CDS Console as the primary "home" for Clinical Decision Support across EHRs.

- **Status: Likely True**  
- **Supporting evidence:** Clinicians across both CPRS and Oracle Health expressed strong interest in having "all in one place" access to key patient information. They identified specific workflow moments where Patient Details would be valuable (pre-charting, during visits, care coordination) and provided detailed feedback on what data and functionality would drive adoption. However, several friction points were identified that need to be addressed, including: ability to take action directly from Patient Details, improved findability of features like trend buttons, and customization options by role/specialty.

## Key Findings

1. **Clinicians want abnormal values visually flagged, not buried in long notes** - Out of range indicators were helpful, and clinicians emphasized the importance of having abnormal values clearly marked rather than having to dig through documentation to find them.

2. **Trends enable shared decision making and help 'paint a picture' for patients** - Clinicians found trended data (A1C, weight, BP) valuable not just for their own clinical reasoning but as a tool to show patients their progress and explain recommendations visually.

3. **Having key information 'all in one place' organized by condition reduces cognitive load** - The flat, scannable view of patient data was appreciated as an alternative to clicking through multiple tabs and sections in the EHR.

4. **Medical calculators support clinical reasoning, showing patients risk, and discussing treatment options** - High value across both CPRS and Oracle Health participants, with strong interest in having calculators relevant to their specialty and the ability to document results in notes.

5. **Insight without ability to action breaks workflow momentum** - When Patient Details reveals a need (expired medication, missing lab), clinicians want to act on it immediately rather than switching context back to the EHR.

6. **Medication adherence data serves as a clinical signal when tied to conditions** - Fill dates, expiration status, and refill gaps help clinicians distinguish between non-response to therapy versus non-adherence before escalating treatment.

7. **Future appointments are more valuable than past ones for care coordination** - Knowing where a patient is going next helps clinicians reinforce care plans, coordinate with other providers, and sequence their own interventions appropriately.

## Details of Findings 

### Finding 1: Labs and Vitals Meet Expectations with Room for Enhancement

**Overall, the Labs and Vitals section met clinician expectations**, though behavioral health providers noted it was not applicable to their role.

**Key insights:**
- Most values would be more helpful if "trended" - the trend button findability needs improvement
- Out of range indicators are helpful and align with clinician needs to quickly spot abnormal values
- "No data found" language was unclear to some participants
- The section was not perceived as applicable to behavioral health workflows

_Supporting data:_ "A weight trend would be helpful and actually just being able to trend vitals is generally helpful." - CPRS P2

_Supporting data:_ "And then the trend with the weight…just having a discussion about what options are available for them and also an acknowledgement of their efforts. If the weight is trending down." - CPRS P4

### Finding 2: Trended Data Supports Clinical Reasoning and Patient Education

**Clinicians expect interactive trended data** with hover details on each data point showing exact values and dates.

**Key insights:**
- Normal range indicators would be helpful on trend visualizations
- Clinicians would find trends helpful to show patients and "paint a picture" of their health trajectory
- Trends help distinguish between isolated abnormal values versus sustained patterns

_Supporting data:_ "I want to be able to click on each one of these points and for it to pop up exactly what that A1C was...And it's a good visual to show the patient too, because when we're saying these random numbers five point whatever six point you know...It doesn't really mean a lot to them, but they can see it's going up even if it's not in a danger zone they can see, - 'hey, this is creeping up, so not diabetic (yet) ...You're not even prediabetic...But we need to talk about this because - You're heading in that direction. That creates a picture." - CPRS P4

### Finding 3: Key Conditions Should Drive a Problem-Oriented View

**Clinicians perceived Key Conditions as being pulled from the problem list** and generally found it helpful.

**Key insights:**
- Provider treating each condition would be helpful (care team information)
- Oracle Health users assumed conditions come from "chronic list"
- Clinicians expect conditions to drive key medications
- Generally expect a problem-oriented view linking conditions to relevant data
- Curious if based on ICD-10 diagnosis
- "No data found" language was unclear

_Supporting data:_ "If smoker - it would be nice to know how much of a smoker, in CPRS reminders, it doesn't say how much of a smoker - That there's no input for any of the current templates on how many cigarettes this person is smoking to see if it's even improving or not..." - CPRS P5

_Supporting data:_ "Right now when you open up CPRS, there's like a problem list and sometimes the problem is there twice and it's there twice because we used to have ICD 9 coding and then they upgraded to ICD 10 coding....So then the wording is a little bit different, but it's the same problem, so it just makes their problem list expansive when it can be cut down...that's the only thing…" - CPRS P5

### Finding 4: Key Medications Need Additional Context for Clinical Decisions

**Dosing details were helpful**, but clinicians wanted more information to support clinical decisions.

**Key insights:**
- Expect medications to be tied to conditions
- Fill date alone is not as relevant as refill history and status
- Additional details would be helpful: past refill date, expiration date, when/if renewed, non-VA medications, ability to order refill, provider managing medication
- Oracle Health users expect to see distinction between "home documented medication" or "active prescription"

_Supporting data:_ "I think it would be useful to have medications that are expired or have no refills...That's helpful for me as I am thinking about what I like either need to talk with the patient about or just things I can do during the visit to move their care forward. Like I'll just run through and say OK, oh, this is this is expired or these medications have no refills...Let me deal with them right now. While you're in front of me so that we don't have to worry about, you don't have to call in later to get this dealt with…" - CPRS P2

### Finding 5: Appointments Support Care Coordination When They Include Provider Context

**For some providers who don't manage their own schedules**, appointment-related data was not as meaningful for their role.

**Key insights:**
- Users understood modality and check-in indicators
- Seeing past and upcoming appointments with other providers would be helpful - want to see provider name or clinic name listed
- If seeing upcoming appointments, it would influence providers to follow up with the other provider to reinforce what the patient has already been told

_Supporting data:_ "(Why appointments with provider or clinic name would be helpful) To to follow up and and see what their discussion with the patient is. And you know on on a follow up visit from them I can reinforce what they've already been told or if I have a, if I have a specific question (like for) endocrinology. To answer at their next visit, I can send them the information and say hey, I see you have an appointment coming up, you know with this veteran...I just saw her today...this is a conversation I had with her...Would you mind also giving your input on on this? That way…It helps you coordinate care a little bit better." - CPRS P4

### Finding 6: Tasks Need Personalization and Risk Prioritization

**Clinicians expect tasks assigned to themselves to show** to reduce information overload.

**Key insights:**
- Level of familiarity with Task Manager varied
- Expect 'higher risk' items to be reflected first
- Oracle Health users perceive this as being akin to 'pending orders' or 'recommendations'
- Perceive 'team and assignee' as care team
- For specialty providers, would be helpful for complex patients

_Supporting data:_ "I think the idea of assigning tasks is sort of interesting and assigning tasks to myself, so I guess if like if I wanted to make sure that I followed up with this patient or like to make sure that something happened to with this patient in a month Could give myself a task and then I presume it would come up somewhere…as I was using the CDS Console...It would be hard for me if I needed to go to a task list on a regular basis rather than like the task coming to me....Because I would forget to look…" - CPRS P2

_Supporting data:_ "Yeah, task manager would definitely help. I I think a lot of people actually asking for that (not familiar with Task Manager, hasn't used it). It's just different between specialties and primary care obviously, but yes, that would really be nice. You know if even if you if if you had a task manager for patients and then you organized the task separately...In a task manager that would just really be helpful...Imaging follow-up. Sometimes I wanna follow up a patient just by phone...Just hey, call patient in two weeks to see how he's doing kind of thing, right? If I had this in a more organized task manager with an overview, that would really make a difference." - CPRS P3

### Finding 7: Medical Calculators Highly Valued Across Specialties

**High value across CPRS and Oracle Health participants** with strong enthusiasm from Oracle Health users about having this capability in PowerChart.

**Key insights:**
- Expect content higher on the Patient Details page
- Some participants suggested a more 'condensed' area
- Behavioral health expected to be able to 'hide' - not applicable to role
- Presume they could 'play with numbers' if inputs are wrong
- Many participants mentioned other medical calculators they use
- Expect to be able to 'pick' what calculators show up in Patient Details
- See as valuable for clinical reasoning, showing patients, and when discussing risk
- On ASCVD Details, like ability to favorite
- Want to be able to pull results into notes

_Supporting data:_ "There's not as a robust calculator to like, show the patient 'here is your risk' in (terms of) how your kidney function currently shows based on you know what's normal, what yours looks like and specifically for like cardiovascular risk, this is really nice to show - 'Hey this is your actual 10 year risk' and they (the patient) can see it and it's very patient-friendly if I need to (show it)." - OH P1

_Supporting data:_ "Again, I'm not primary care, but you know, for emergency medicine, the ones I use the most would be the ones I want here, and it would be helpful if I got to decide which ones I wanted to use versus it was already preset for me, so if I could see a list and choose the top three that I wanted at the bottom, and then I can click (all calculators to Med Calc) to get ones I use less often" - CPRS P4

## Additional Insights

### Pre-charting Workflow Friction in Oracle Health

One Oracle Health participant described significant friction in pre-charting workflows: "If I'm on a different FIN, like if I'm in this patient between visit and I open another one up, all of this information goes away…We have to do this because of the encounter type in the EHR" - OH P3

This suggests that encounter/FIN context needs to be explicit and persistent across different clinical contexts (clinic visit, between-visit renewal, message center tasks) to prevent loss of pre-charting work.

### ICN Familiarity is Low

Most participants were not familiar with ICN (Integration Control Number) or explicitly stated they do not use it in day-to-day workflows. Clinicians default to MRN, name, and DOB as patient identifiers. When ICN is recognized, it's tied to specific administrative contexts like community care workflows. Additional research is needed to understand how clinicians perceive and use ICN.

## Recommendations

### 1. Improve Trended Data Visibility and Interactivity
**Recommendation:** Improve findability of "See trend over time" buttons and add normal range indicators to trended visualizations. Enable hover details on each data point showing exact values and dates.

_Supporting evidence:_ Multiple participants expressed that trends were valuable but the button was not immediately obvious. Normal range indicators would help clinicians and patients understand context at a glance.

### 2. Add Medication Management Context
**Recommendation:** Surface medication refill status, expiration dates, past refill dates, and renewal information. Consider flagging medications that are expired or have no refills remaining.

_Supporting evidence:_ "I think it would be useful to have medications that are expired or have no refills...That's helpful for me as I am thinking about what I like either need to talk with the patient about or just things I can do during the visit to move their care forward." - CPRS P2

### 3. Enable Direct Actions from Patient Details
**Recommendation:** Where possible, enable direct actions within Patient Details (order labs, refill medications, document PDMP review) while maintaining necessary safeguards. Maintain consistency of relevant patient data and context throughout the workflow.

_Supporting evidence:_ Clinicians strongly desire to act at the moment of insight without navigating to separate workflows, as this breaks clinical momentum and increases cognitive load.

### 4. Enhance Care Coordination Information
**Recommendation:** Surface provider/clinic names with appointments, and consider adding care team information to Key Conditions. Emphasize upcoming appointments over past ones.

_Supporting evidence:_ "To to follow up and and see what their discussion with the patient is...I can reinforce what they've already been told or if I have a specific question...I can send them the information...It helps you coordinate care a little bit better." - CPRS P4

### 5. Support Calculator Customization and Documentation
**Recommendation:** Allow clinicians to customize which calculators appear in Patient Details based on specialty/role. Implement ability to copy calculator results into clinical notes.

_Supporting evidence:_ "For emergency medicine, the ones I use the most would be the ones I want here, and it would be helpful if I got to decide which ones I wanted to use versus it was already preset for me" - CPRS P4

### 6. Address Encounter Context Persistence in Oracle Health
**Recommendation:** Ensure pre-charting work persists across encounter/FIN changes. Make encounter context explicit and visible throughout charting, ordering, and documentation workflows.

_Supporting evidence:_ Oracle Health users reported losing pre-charting work when switching between different clinical contexts (clinic visit, renewals, message center).

## Product User and Business Outcomes

### Desired User Outcome 

This research supports our desired user outcome by identifying specific workflow moments where Patient Details can reduce cognitive load, speed up chart preparation, and enable more confident clinical decision-making. By having key patient information "all in one place" organized by condition, clinicians can:

- Spend less time hunting across tabs and more time on patient care
- Make better-informed decisions with visual trends and risk calculators
- Coordinate care more effectively across specialties
- Have more productive, transparent conversations with patients using visual data

The research revealed that clinicians are burned out by fragmented information and see clear value in a consolidated, scannable patient view that supports - rather than interrupts - their workflow.

### Desired Business Outcome

This research supports our desired business outcome by providing evidence that Patient Details has the potential to become the primary "home" for clinical decision support across EHRs if key friction points are addressed. Specifically:

- **Increased adoption**: Clinicians expressed strong interest in using Patient Details for pre-charting, daily planning, in-visit clinical reasoning, and care coordination
- **Cross-EHR value**: Both CPRS and Oracle Health users saw value, though Oracle Health users were particularly enthusiastic about calculator and trending capabilities
- **Workflow integration**: Identified specific moments where Patient Details would naturally fit into existing workflows
- **Efficiency gains**: Potential for time savings in chart prep and reduced clicks/context switching

However, adoption depends on addressing identified gaps: ability to take action directly from Patient Details, customization options, and persistence of context across encounters.

## Key Performance Indicators

### KPI 1: Time Spent on Pre-charting and Chart Preparation

This research supports measurement of this KPI by identifying that clinicians see Patient Details as valuable for "scrubbing" (daily planning with nursing staff) and pre-charting. Multiple participants described how having key information in one place would reduce the time spent "digging through the chart."

**Measurement opportunity:** Track time to complete pre-charting tasks before and after Patient Details implementation, particularly for complex patients with multiple conditions.

### KPI 2: Clinician Adoption of CDS Console as Primary Home

This research supports measurement of this KPI by identifying specific workflow integration points where Patient Details would drive repeated use:

- Pre-charting and daily planning (80-85% of workflow at the beginning)
- In-visit clinical reasoning and patient education
- Care coordination and follow-up planning
- Complex patient management

**Measurement opportunity:** Track frequency of Patient Details access, time spent in Patient Details relative to EHR, and user-reported perception of Patient Details as a "home base" for clinical decision support.

## Next Steps

Based on the research findings, we recommend the following immediate actions:

1. **Prioritize clinical use cases**: Review and prioritize the 23 clinical use cases identified in this research (see Clinical Use Cases section) based on workflow impact and research evidence, with program lead support to align on scope and sequencing. [#241 Prioritize use cases to ground design work](https://github.com/department-of-veterans-affairs/cdsc-roadmap/issues/241)

2. **Prototype thin slices**: Create design concepts for prioritized use cases through cross-functional pairing (design, product, engineering) to iterate, validate, and test open assumptions in FY '26 Q2. [#243 Create Patient Details design concept](https://github.com/department-of-veterans-affairs/cdsc-roadmap/issues/243)

3. **Assess technical feasibility**: Evaluate low-hanging opportunities and technical feasibility to identify near-term wins and clarify longer-term dependencies, particularly around:
   - Enabling direct actions from Patient Details
   - Persistence of encounter context in Oracle Health
   - Calculator customization by role/specialty

4. **Plan follow-up research**: Schedule additional research sessions focused on:
   - Task workflows within Oracle Health's PowerChart
   - Oracle Health workflows with additional participants across specialties
   - Tasks/follow-up tracking within Patient Details context

## Further research needed

Based on themes and insights covered in this research round, additional research is recommended for the following topics:

1. **Oracle Health workflows**: Additional participants needed across primary care and various specialties/roles to better understand PowerChart workflows and how Patient Details integrates.

2. **Task workflows**: Deeper exploration of task management workflows within Oracle Health's PowerChart, including how tasks are assigned, tracked, and completed.

3. **Tasks/follow-up tracking**: Investigation of how clinicians manage follow-up actions and whether Patient Details can support task creation and tracking.

4. **ICN usage**: Understanding how clinicians perceive and use Integration Control Numbers (ICN) in their workflows, as familiarity was generally low across participants.

## Appendix

### Research documents
- [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/clinical-decision-support/platform/research/2025-12-Patient-Details-Testing/research-plan.md)
- [CPRS Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/clinical-decision-support/platform/research/2025-12-Patient-Details-Testing/conversation-guide.md)
- [Oracle Health Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/clinical-decision-support/platform/research/2025-12-Patient-Details-Testing/conversation-guide-oracle-health.md)
- [CPRS Prototype](https://www.figma.com/proto/YhERBZMWoqvwRgDUo6OgCx/User-Testing-Prototypes?page-id=2196%3A2&node-id=2293-3966&viewport=420%2C-2398%2C0.23&t=feykzPaXZ8xOghnK-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2293%3A3966)
- [Oracle Health Prototype](https://www.figma.com/proto/YhERBZMWoqvwRgDUo6OgCx/User-Testing-Prototypes?page-id=2196%3A2&node-id=3004-21735&viewport=306%2C-3091%2C0.3&t=F9qx2raNBZa13Q8M-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3004%3A21735)

### Tools used for Synthesis

- **Mural**: Used for affinity mapping and synthesizing insights across all 8 user sessions
- **Affinity Mapping**: Organized findings into themes around workflow value, data needs, and usability

Detailed notes and testimonials across all sessions can be found in: [Q1 '26 Patient Details User Testing Notes Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1762799339819/055431b933c4ac15cecff96c50a80a4e00403b80)

### Clinical Use Cases

Detailed use cases can be found in: [Clinician Experience Mapping Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1738002902653/5ab79a8d0c2f5f83fb8798b639db3827d9b8e22d)

**5 Highest Impact Clinical Use Cases:**

1. **One holistic patient view to reduce cognitive load**: Clinicians want a flat, scannable view of key conditions, medications, labs, vitals, tasks, and appointments alongside their EHR to reduce time spent hunting across tabs.

2. **Pre-visit chart prep without losing work**: Oracle Health users need confidence that pre-charting work will persist across encounter/FIN changes when switching between clinic visits, renewals, and Message Center.

3. **Clinicians struggle to reconstruct prior treatment history**: Need clear view of prior treatments, medications, interventions, and outcomes without manual reconstruction across notes, attachments, and external systems.

4. **Trends enable shared decision making with patients**: Visual trends (A1C, BP, weight) support both clinical judgment and patient conversations, helping "paint a picture" rather than relying on isolated data points.

5. **Insight without ability to action breaks workflow momentum**: When clinicians identify a needed action (order, refill, follow-up), they want to act immediately without leaving context.

**Additional Clinical Use Cases** (supporting specific specialties or teams):

6. **Medical calculators support shared decisions**: High value across specialties for clinical reasoning, patient education, and risk discussions (ASCVD, HEART score, Wells criteria, STORM).

7. **Medication adherence serves as clinical signal**: Refill history and fill gaps help distinguish non-response versus non-adherence before escalating therapy.

8. **Care coordination requires visibility across time and teams**: Future appointments are more valuable than past ones; knowing where patients are going helps coordinate and reinforce care plans.

9. **Opioid safety workflows are fragmented and high-risk**: Pain management requires PDMP, MME calculation, and STORM risk in a single, reliable workflow.

10. **Rapid suicide risk triage during pre-charting**: Behavioral health clinicians want PHQ9/GAD7 surfaced prominently with suicide-risk indicators (question #9) clearly flagged.

### Pages and applications used

- **CPRS Patient Details Beta** (production)
- **CPRS Prototype** (Figma)
- **Oracle Health Prototype** (Figma)

### Other supporting documents created

- Clinical use case mapping with 54 candidate scenarios synthesized into 23 use cases [Clinician Experience Mapping Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1738002902653/5ab79a8d0c2f5f83fb8798b639db3827d9b8e22d)
- Oracle Health workflow documentation across 3 participants [See slides 56-64](https://dvagov.sharepoint.com/:b:/r/sites/CDSProgramTeam/Shared%20Documents/Clinical%20Decision%20Support%20Platform%20Team%20(CDSP)/2.%20User%20Research/2025%20User%20Research/Patient%20Details/Patient%20Details_Insights_1.09.2025_LizBlasi_V2.pdf?csf=1&web=1&e=EURy3S)
- ICN familiarity findings [See slides 51-54](https://dvagov.sharepoint.com/:b:/r/sites/CDSProgramTeam/Shared%20Documents/Clinical%20Decision%20Support%20Platform%20Team%20(CDSP)/2.%20User%20Research/2025%20User%20Research/Patient%20Details/Patient%20Details_Insights_1.09.2025_LizBlasi_V2.pdf?csf=1&web=1&e=EURy3S)

### Secondary research

None conducted for this study.

### Research participants 

We talked to **8 participants.**

#### CPRS Users (n=5)

Primary role:
* Clinical dietician: 0
* MSA: 0
* Nurse Practitioner: 0
* Nursing (RN, LPN): 0
* Pharmacist: 0
* Physician: 4
* Physician Assistant: 0
* Resident, Intern, or Fellow: 0
* Other: 1 (Clinical Resource Hub)

Specialty:
* Cardiology: 0
* Dermatology: 0
* Emergency Medicine: 1
* Endocrine: 0
* Hematology: 0
* Hepatology/Gastroenterology: 0
* Infectious Disease: 0
* Informatics: 1
* Mental Health: 1
* Nephrology: 0
* Neurology: 0
* Oncology: 0
* Pain Management: 0
* Palliative Medicine: 0
* Pharmacy: 0
* Primary Care: 3
* Pulmonology: 1
* Surgery: 0
* Other: 0

Care setting:
* Outpatient: 4
* Inpatient: 1
* Emergency Department: 1
* Other: 0

#### Oracle Health Users (n=3)

Primary role:
* Clinical dietician: 0
* MSA: 0
* Nurse Practitioner: 1
* Nursing (RN, LPN): 0
* Pharmacist: 1
* Physician: 1
* Physician Assistant: 0
* Resident, Intern, or Fellow: 0
* Other: 0

Specialty:
* Cardiology: 0
* Dermatology: 0
* Emergency Medicine: 0
* Endocrine: 0
* Hematology: 0
* Hepatology/Gastroenterology: 0
* Infectious Disease: 0
* Informatics: 0
* Mental Health: 0
* Nephrology: 0
* Neurology: 0
* Oncology: 0
* Pain Management: 2
* Palliative Medicine: 0
* Pharmacy: 0
* Primary Care: 0
* Pulmonology: 0
* Surgery: 0
* Other: 1 (Hospitalist)

Care setting:
* Outpatient: 1
* Inpatient: 2
* Emergency Department: 0
* Other: 0

#### Combined Demographics

Devices used during study: 
* Desktop: 8
* Tablet: 0
* Smart phone: 0
* Assistive Technology: 0

Geographic location:
* Urban: Unknown
* Rural: Unknown
* Unknown: 8

Disability and Assistive Technology (AT):
* Cognitive: Unknown
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* Speech Input Technology: 0
* Hearing aids: Unknown
* Sighted keyboard: Unknown
* Captions: 0

#### Recruitment criteria

Participants were recruited to represent a mix of:
- **EHR systems**: Both CPRS (n=5) and Oracle Health (n=3) users
- **Clinical specialties**: Primary care, emergency medicine, behavioral health, pain management, pulmonology, hospital medicine
- **Care settings**: Outpatient (n=5), inpatient (n=2), emergency department (n=1)
- **Roles**: Physicians, nurse practitioners, and clinical pharmacists

Priority was given to clinicians who regularly engage in pre-charting, clinical decision-making, and care coordination activities where Patient Details would be most relevant.
