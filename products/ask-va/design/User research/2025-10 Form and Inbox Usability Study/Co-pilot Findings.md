---
title: "Ask VA Form + Inbox Usability Study Research Findings"
product: "Ask VA"
team: "OCTO-DE Product Team"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2025-12-15"
researchers:
  - "Danielle Oppendike (UX Designer)"
  - "Elena Naids (Researcher)"
research_goals:
  - "Understand Veteran and business users’ needs from the Ask VA form and inbox."
  - "Identify opportunities to simplify the form and inbox to better meet their needs."
  - "Assess satisfaction and ease of use of the current Ask VA experience versus the exploratory prototype."
methodology:
  - "Moderated usability testing (N=13): 9 Veterans, 4 Business Submitters (SCOs/WSSS). 60-minute remote Zoom sessions, each participant completed form completion and inbox review tasks in both staging and prototype environments."
devices_used:
    desktop: 13
    tablet: 0
    smartphone: 0
    assistive_technology: 0
participants_total: 13
demographics:
  veterans: 9
  service_members: 0
  caregivers: 0
  dependents: 2
  VA_staff: 0
  age:
    "25-34": 0
    "35-44": 0
    "45-54": 0
    "55-64": 5
    "65+": 0
    unknown: 0
  education:
    high_school: 0
    some_college: 0
    associates: 0
    bachelors: 0
    masters: 0
    doctorate: 0
    unknown: 0
  location:
    urban: 0
    rural: 4
    unknown: 0
  race:
    white: 0
    black: 3
    hispanic: 2
    biracial: 0
    asian: 1
    native: 1
  disability:
    cognitive: 7
    AT_beginner: 0
    AT_advanced: 0
    screen_reader_desktop: 0
    screen_reader_mobile: 0
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 0
    sighted_keyboard: 0
    captions: 0
key_findings:
  - "Veterans and business submitters have different use cases for the category/topic, subject, question, and attachments fields in the Ask VA form."
  - "Category/topic lists provide reassurance but can be overwhelming, especially for Veterans."
  - "Business submitters frequently repeat the same information and experience frustration with redundant fields."
  - "Participants prefer the list view inbox for clarity, order, and ease of finding questions, with Veterans and business submitters both expressing this preference."
  - "Search and filtering needs differ sharply: Veterans rely on keywords and status/category, while business submitters need student name and reference number."
  - "Participants want clearer and more specific status indicators, with business submitters needing actionable statuses reflected in responses and email."
  - "Limited inbox history and inability to identify submissions by relevant data (student name, subject) cause difficulties for business submitters conducting audits or follow-up."
recommendations:
  - "Keep category/topic selection before entering the question for Veterans but restructure the lists to reduce overwhelm."
  - "Implement a tailored Ask VA form flow for business users, minimizing repeated data entry (category, school/contact info) and surfacing key submission fields (student name)."
  - "Move inbox to a table (list) view for all user types, with sort, filter, and column customization to surface Veteran or business submitter-specific needs."
  - "Add more specific and actionable status indicators both in the inbox and email notifications, especially for business workflows."
  - "Enable longer inbox history and allow searching/filtering by student name/reference number for business users."
kpi_alignment:
  - "Task completion rate for form submission and inbox review"
  - "Inbox findability and speed"
outcomes:
  user: "Veterans and business submitters can confidently and efficiently submit questions and review responses using Ask VA, with tailored flows matching their needs."
  business: "Higher satisfaction, faster issue resolution, and decreased support tickets due to improved self-service and reduced form/inbox friction."
opportunity_areas:
  - "Reduce form friction for business submitters"
  - "Improve dashboard/inbox information architecture"
further_research_needed:
  - "Assess real-world use of attachments per form category"
  - "Test new design and taxonomy solutions for category/topic lists"
underserved_groups_missing:
  - "Mobile device users"
  - "Participants with physical, hearing, or vision disabilities"
secondary_research:
  - "Web analytics"
  - "SME interviews"
synthesis_tools_used:
  - "Affinity Mapping"
  - "Mural"
---

# Ask VA Form + Inbox Usability Study Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Ask VA, OCTO-DE Product Team**

**Date:** 12/15/2025

**Contacts:** Danielle Oppendike, Elena Naids

---

**[Research Readout (PDF)](https://dvagov.sharepoint.com/:p:/r/sites/AskVA/Shared%20Documents/General/AVA%20VA.gov%20Team/Research%20%26%20Design/Form%20+%20Inbox%20Usability%20Study%20Findings%20and%20Recommendations.pptx?d=w103f154b310d45b6b1a2ecda33c9c268&csf=1&web=1&e=07CuV1)**  

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
This research supports Veterans and business submitters during the "Access Support & Submit Inquiries" phase of the VA digital journey.  
**Key moments:** Completing and submitting a support form for education/work study issues, returning to review previous questions, and handling follow-up with VA.  
**Outcomes:** Identify and reduce friction in form and inbox experiences, improve confidence, and support audit/follow-up needs for business users.

---

## Research Questions

* What are submitters’ expectations for the Ask VA interface and process?
* What are the main problem areas for the form (Veterans vs. business submitters)?
* What are the main problem areas for the inbox (Veterans vs. business submitters)?
* How do submitters work around these problem areas?

---

## Methodology

- **Moderated Usability Testing (N=13):** Participants (9 Veterans, 4 business submitters) joined 60-minute remote Zoom sessions. Each completed form and inbox tasks in both staging (current) and prototype environments, verbalizing expectations, actions, and pain points.

---

## Hypotheses and Conclusions

- **Hypothesis:** Business submitters have to use workarounds to get the information they need from Ask VA.
  - **Definitely True**
  - Supporting evidence: All 4 business submitters described repetitive entry of information and resorting to alternative tracking (e.g., keeping lists of student names) due to form/inbox limitations.  
    **P4:** "Click, click. Click. Click, click when every single time it's the same thing." (usability test, 2025-11)
  
- **Hypothesis:** Veteran submitters expect a simple contact form allowing them to ask any question.
  - **Likely True**
  - Supporting evidence: 4 of 9 Veterans preferred the "question first" form, citing desire for fewer screens and more direct input.  
    **P2:** "It's less screens you gotta go through. It's a little bit more straightforward. I can put everything on the first screen here." (usability test, 2025-11)
  
- **Hypothesis:** Category/topic fields provide needed reassurance but can also cause confusion or overwhelm.
  - **Definitely True**
  - Supporting evidence: 7 of 9 Veterans said lists were important for reassurance or learning potential benefits, but 4 found them overwhelming.  
    **P7:** "There were a lot of options to choose from and they could easily get distracted." (usability test, 2025-11)
  
---

## Key Findings

1. Veterans and business submitters have distinct needs for form fields—business submitters use subject/question for student info; Veterans rely on category/topic for reassurance.
2. Category/topic lists are essential for navigation but are overwhelming for Veterans and tedious for business submitters who repeat the same selection.
3. The inbox list (table) view is widely preferred for clarity and ability to sort, especially among business submitters (4/4) and Veterans (5/9).
4. Business submitters require different filtering/searching capabilities in the inbox (by student name or reference) than Veterans (by keyword/status/category).
5. Participants want more specific and actionable status indicators in the inbox and email, especially for business documentation submissions.
6. Ability to view more inquiries and longer inbox history is a critical need for business users conducting audits or follow-up.
7. Field redundancy and unnecessary data entry in the form undermine efficiency for business submitters.

---

## Details of Findings 

### Finding 1: Veterans and business submitters have distinct needs for form fields

Business submitters use the subject and question fields to identify student-specific info, while Veterans lean on category/topic for reassurance that they are asking correctly.

- _Supporting data: **P5:** "I always tell people do it in writing. Because if you don't have anything in writing when it comes, push comes to shove, what do you have to prove?" (usability test, 2025-11)_
- _Supporting data: **P8:** "I need to tell them like you know it is me. I am submitting it on behalf of a student. My specific question falls under this general category and then I want to have my question all in one area." (usability test, 2025-11)_

### Finding 2: Category/topic lists are essential, but overwhelming for Veterans, tedious for business submitters

Veterans appreciate lists for reassurance but report option overload. Business submitters mostly select the same options each time, leading to unnecessary repetition.

- _Supporting data: **P6:** "I like the, the detailed drop-down box with all the information in it. I think it narrows—it really helps seeing that you're getting directed to the right place." (usability test, 2025-11)_
- _Supporting data: **P3:** "It is tedious to do. Click, click. Click. Click, click when every single time it's the same thing." (usability test, 2025-11)_

### Finding 3: The inbox list (table) view is most effective and preferred

Participants (Veteran and business) indicated that a list format made it easier to scan, sort, and find information.

- _Supporting data: **P4:** "I can follow it easier because of the way it's laid out…In an orderly fashion categories, Submitted date, question, status. You know, updates and details. Instead of trying to go through one block versus another block. Trying to figure out what's going on there, so I can see everything." (usability test, 2025-11)_
- _Supporting data: 5 of 9 Veterans and 4 of 4 business submitters preferred list view._

### Finding 4: Filtering/searching needs are user-type specific

Veterans want to search by keyword and category/status. Business submitters look for student name and reference number (not always surfaced in inbox).

- _Supporting data: **P7:** "They're looking for: Student's name (4/4) - They relate everything by student, so they want to see things per student." (usability test, 2025-11)_
- _Supporting data: 7 of 9 Veterans noticed or tried to use search functionality._

### Finding 5: Participants want clearer, more actionable status indicators

Many participants found status unclear, insufficient, or unhelpful; business submitters especially want statuses indicating required action.

- _Supporting data: **P9:** "Sometimes it'll say attachment did not come through or you forgot to sign it…Which would be nice if it said that there was an error, so that because if there's no error, there's no urgency to go right back into it." (usability test, 2025-11)_
- _Supporting data: 7 of 9 Veterans cited status as a key inbox need._

### Finding 6: Business users need longer inbox history and better identification for submissions

Business submitters conduct audits and need to refer to old submissions, but limited history and poor surfacing of identifiers (e.g., student name) make this difficult.

- _Supporting data: All 4 business submitters reported using inbox for audits/records and cited limits on history as a pain point._
- _Supporting data: "Use it to submit documentation (timecards, applications, extensions, etc.)"* (usability test, 2025-11)_

### Finding 7: Field redundancy and unnecessary data entry undermine business efficiency

Business users are required to re-enter school/contact/category info for each submission, leading to frustration.

- _Supporting data: "My category never changes, but I am required to enter it anyway." (usability test, 2025-11)_
- _Supporting data: "My school and contact information never change, but I am required to enter them anyway." (usability test, 2025-11)_

---

## Additional Insights

- Several Veterans used the subject field redundantly, typing categories or topics again for reassurance.
- No participants reported issue with form length, but several business users indicated some fields (school/facility, preferred name) were unnecessary for each submission.

---

## Recommendations

1. **Keep category/topic before question for Veterans and restructure lists to minimize overwhelm.**  
   - Supports Finding 2. 7/9 Veterans want reassurance; 4/9 find lists overwhelming.  
   - Use VADS dropdown pattern, explore visual/taxonomy improvements, test new format for findability and speed.

2. **Implement a business user form flow that minimizes repetitive entry.**  
   - Addresses Findings 2, 7. Business users always select same options and want editable "profile" for persistent school/contact info.  
   - Pre-populate fields based on user role or account, introduce an editable info page, and surface only what changes per submission.

3. **Adopt the table (list) view for the inbox with sort/filter and tailored columns.**  
   - Addresses Findings 3, 4, 6. Both user types prefer this; business users need student name/reference, Veterans need category/status/keyword.  
   - VADS table pattern, with column customization exposable by user type.

4. **Add specific, actionable status indicators and improve response/notification wording, especially for business workflows.**  
   - Addresses Finding 5. 7/9 Veterans and all business users cite actionable status as critical.  
   - Leverage VADS alert/status patterns; test status updates with business submitters for unambiguous action needs.

5. **Enable extended inbox history and advanced search for business functions (student name, reference number).**  
   - Addresses Findings 4, 6. Business users struggling with limited history and missing identifiers for audits/reporting.  
   - Allow longer or unlimited record retention, enhanced search fields.

---

## Product User and Business Outcomes

### Desired User Outcome 
Submitters—Veterans or business—successfully and confidently submit questions and review responses, with tailored flows that match their workflow and mental models.

This research directly supports this outcome by highlighting friction with category/topic selection and field redundancy, and surfacing the critical need for value-add in the inbox interface to support business workflows.

### Desired Business Outcome
Reduce support burden and double submissions, increase self-service, and decrease business submitter frustration and audit errors.

Findings identify the precise points where business submitters face obstacles and errors, providing targeted recommendations to enhance efficiency and reduce repeated staff support needs.

---

## Key Performance Indicators

### KPI 1: Task completion rate for form submission and inbox review  
This research identifies patterns where field redundancy, list overwhelm, or poor inbox sorting cause user drop-off or confusion, supporting baseline and follow-up measurement.

### KPI 2: Inbox findability and speed  
Preference for list view, need for tailored search/filter by role, and report of existing friction offer clear metrics (time to locate, success rate) for measuring improvements in future design iterations.

---

## Next Steps

| Action | Owner | Timeline | Success Criteria |
|--------|-------|----------|------------------|
| Redesign form flows per user role—reduce redundancy for business users and reorganize category/topic lists for Veterans | UX Designer | January 2026 | Prototypes ready for usability testing |
| Build table view inbox prototype with role-based columns and filtering | Product designer | February 2026 | Tested with 6 business and 6 Veteran submitters; >80% task success |
| Update status indicators and test notification/email UI with business submitters | UX Writer | February 2026 | At least 4/4 business submitters identify actionable status |
| Extend inbox history and test with business submitters | Engineering | March 2026 | No failed audits or missing submissions in 3 simulated audit tasks |

---

## Further Research Needed

### Research Gaps

- Evaluate real-world use of attachments by category for validity of further enabling/disabling logic and field presence.
- Test new taxonomy and visual representations of category/topic lists with representative sample of Veterans, especially those who find current implementation overwhelming.
- Assess needs and satisfaction of mobile, assistive, and non-English users.

### Underserved Groups Not Yet Studied

- Mobile device users
- Participants with physical, hearing, or vision disabilities
- Non-English speaking submitters
- Veterans over age 65
- Veterans without degrees

---

## Appendix

### Research Documents
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/Product%20outline.md)
- [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/2025-10%20Form%20and%20Inbox%20Usability%20Study/Research%20Plan.md)
- [Conversation Guide (Veteran)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/2025-10%20Form%20and%20Inbox%20Usability%20Study/Veteran%20Conversation%20Guide.md)

### Tools Used for Synthesis
- Mural affinity mapping
- Post-session debrief and evidence extraction

### Pages and Applications Tested
- [Ask VA Staging Form & Inbox](https://staging.va.gov/contact-us/ask-va/introduction)
- Figma Prototype (contact team for link)

### Other Supporting Documents
- Participant quotes and coded feedback (internal)
- Demographic summary (Perigean)

### Secondary Research
- Web analytics on Ask VA form usage and page feedback
- Subject matter expert interviews

---

## Research Participants

### Recruitment Criteria

Participants recruited via Perigean to specifically include:
- Veterans with GI Bill, VR&E, or dependent education benefits
- Business users: 2 School Certifying Officials (SCO), 2 Work Study Site Supervisors (WSSS)
- Representation of cognitive disabilities, over age 55, rural locations, gender diversity, and major race/ethnicity groups as feasible

We talked to **13 participants.**

**Audience segment:**
* Veterans: 9 
* Business submitters (SCO/WSSS): 4

**Gender:**
* Male: unknown 
* Female: 3 
* Other/Nonbinary: 1

**LGBTQ+:**
* Nonbinary/gender fluid/gender queer: 1
* Gay, lesbian, or bisexual: 0
* Transgender: 0

**Devices used during study:** 
* Desktop: 13 
* Tablet: 0 
* Smartphone: 0 
* Assistive Technology: 0

**Age:**
* 25-34: 0
* 35-44: 0
* 45-54: 0
* 55-64: 5
* 65+: 0
* Unknown: 0

**Education:** (no data provided—likely unknown)

**Geographic location:**
* Urban: 0
* Rural: 4
* Unknown: 0

**Race:**
* White: 0
* Black: 3
* Hispanic: 2
* Biracial: 0
* Asian: 1
* Native, American Indian or Alaska Native: 1

**Disability and Assistive Technology:**
* Cognitive: 7
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* Speech Input Technology: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0

---

### Underserved groups we haven’t talked to

This research does not include the perspectives of the following marginalized Veteran groups:
* Mobile device users
* Veterans with physical, hearing, or vision disabilities
* Veterans over age 65
* Veterans without a college degree

**Recommendation:** Specifically recruit these groups in future rounds to ensure representation.
