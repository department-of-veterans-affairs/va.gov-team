---
title: "Calculator Detail Page Line Chart Testing Research Findings"
product: "Medical Calculators"
team: "Clinical Decision Support Collaborative"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2025-10-02"
researchers:
  - "Rosemary Rogers"
research_goals:
  - Evaluate the value of line charts within a specific calculator
  - Evaluate the usability and design of the line chart
methodology:
  - Moderated Remote Interview
  - "Method 2"
devices_used:
    desktop: 5
    assistive_technology: X
participants_total: 5

EHR:
 CPRS: 5
 Oracle: 0 

---

# Calculator Detail Page Line Chart Testing Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Medical Calculators, Clinical Decision Support Collaborative**

**Date:** 10/02/2025

**Contacts:** Rosemary Rogers

**[Research Readout (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1757268336123/6fe5f195c565aadf0d8e21c796e92bdb648cf24f?wid=0-1759241401977)**  


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

Primary goals:
- Understand how helpful line charts are within the context of a calculator detail page to assist with answering questions we cannot auto-populate. 
- Identify other calculators or fields where clinicians think this pattern might be helpful.
- Get feedback on the experience of opening and viewing the graph within the calculator detail page. 

Secondary goals:
- Identify more insights related to clinician workflows when using the tools

- What outcomes are we aiming to achieve for clinicians?  

The proposed design is intended to reduce cognitive burden created by context switching between the CDS Medical Calculator application and the EHR by bringing relevant data to support clinicians within their workflow of the calculator.

## Research Questions

* How intuitive is it to see a CTA to access lab history below the calculator input field?
    * Do clinicians notice this option?
    * What do clinicians expect to have happen when they click the link?
    * Do they click the link to open graphs?
* What are clinicians reactions to seeing graphs in this context?
    * Do they anticipate it improving their workflow?
    * Will they use this feature over going to CPRS or JLV?
* How intuitive is it to interact with the line chart and get the data they need?
    * What period of time to clinicians want to toggle between?
    * Do clinicians hover to see tool tips / granular data?
    * What do clinicians think of the general graph design (labels, etc)


## Methodology 
We conducted remote moderated research sessions (60-minutes) via MS Teams. Participants were asked questions about their role at the VA and their current or past use of the CDS Medical Calculator application. Then we gave the clinician a scenario to prompt them to completing the HAS-BLED calculator and reviewing lab history data.
  

## Hypotheses and Conclusions

- Clinicians will find that having the lab history data with a specific input field will improve their workflow
  
    **TRUE** All clinicians reported that having the lab history data would improve their workflow by not requiring them to look for data in other tools.
  
- Clinicians will not immediately recognize the "View Labile INR lab history" link and will first plan on getting the data from CPRS.
  
    **MOSTLY TRUE** Most clinicians glanced over the link or needed an additional probe to look for something within the calculator to help them answer the question.
  
- Clinicians will intuitively find the tool tips on the data points.
  
    **TRUE** Clinicians expected to hover on the data point to get exact point values. 

Pulling in patient data to support specific input fields will improve the clinicians' workflow and reduce context switching to find the relevant information in the EHR or another separate tool.


## Key Findings

1. Clinicians workflow regularly involves referencing the EHR to find patient data. Referencing the EHR first becomes their default behavior when tasked to find patient data.
2. Clinicians cognitive load increases when they are trying to understand terminology and criteria in a specific context to interpret the data shown.
3. Clinicians need a certain number of data points to interpret the trend. This doesn't always align with a particular time period.
4. Clinicians responded that having patient data within the calculator would improve their workflow, though some expressed a preference for table format.


## Details of Findings 

### Clinicians workflow regularly involves referencing the EHR to find patient data. Referencing the EHR first becomes their default behavior when tasked to find patient data.
- 3 of 5 clinicians initially glossed over or did not notice the hyperlink below the input field for Abnormal Liver Function and History of Labile INR and needed an additional probe.
- Clinicians initially expected to go to the EHR to find supporting patient data to help them answer the questions that did not autopopulate. Clinicians mentioned they would also look in JLV if the EHR did not have the data they were looking for.
- It is difficult for clinicians to create new habits or muscle memory after they have long established workflows. 

> I go back to CPRS to look for abnormal liver function. I would look in the labs for this. -Primary Care Physician (P1)

> I naturally would toggle back to CPRS but I see the nice hyperlink there. -Primary Care Physician (P2)

### Clinicians cognitive load increases when they are trying to understand terminology and criteria in a specific context to interpret the data shown.
- All clinicians needed to review the helper text for what criteria met the definition of Abnormal Renal Function when trying to interpret the lab values and ranges. For example, the question wasn't if the lab was out of normal range, but rather 2x or 3x the normal range. It was challenging for clinicians to remember this criteria as they were reviewing the graph and also trying to recall the normal range for a specific lab. 
- All clinicians commented that they were not entirely sure how "labile INR" was defined in the context of the HAS-BLED calculator.
- Some clinicians said they would need to go search for the definition of labile before making a final determination. 
- As clinicians reviewed the ALT/AST/AP labs it was clear that they needed additional information regarding reference ranges.
- Since the drawer covers the question, including the helper text, some clinicians had to go back and forth to remember what criteria met the definition of the Abnormal Renal Function 

> I would like the reference ranges in the legend.-Physician, Inpatient Care (P5)

> Having normal ranges would be good for people who don't use these things daily. -Primary Care Physician (P1)

> The tricky thing here is there is no upper limit of normal. It would be nice to have a horizontal line showing that.-Clinical Pharmacist (P4)

> I'm not sure what this question is. Would guidelines give me more? -Primary Care Physician (P1)

> Labile seems open to interpretation. A guidance statement would be nice to tell me what labile is. Physician, Inpatient Care (P5)

### Clinicians need a certain number of data points to interpret the trend. This doesn't always align with a particular time period.
- Clinicians were drawn to the last 3 - 4 data points when interpreting the line graphs. 
- The tool tip on hover was discoverable to clinicians when seeking the exact value.
- Most clinicians said the amount of time (the 4-5 year period) would be enough data.
- It depends on how often a patient is getting a particular lab and the context of the question to determine how much data or how far back in time a clinician is looking. For example, if a patient is having their INR monitored, this is often done every 4 -6 weeks.

> For a graph I only need it to go to the last 4 -5 values. Maybe a couple of years. -Primary Care Physician (P2)

> My perspective is it's probably not as useful back 3 years, but it could be useful info to see if they were really under control and then recently out of range to see if there were specific factors that caused the issue. -Clinical Pharmacist (P4)

> To get an exact number, I would hover over the point. -Primary Care Physician (P2)

### Clinicians responded that having patient data within the calculator would improve their workflow, though some expressed a preference for table format.
- Clinicians responded favorably to seeing the lab history data within the calculator compared to searching for it in the EHR or another tool. 
- Some clinicians preferred a table format for the lab data.
- Clinicians can see how pulling in problem list information could also help them get to data more quickly to answer certain questions.

> I'd give it a 5. Based on ease of interpretation and it being in one place. -Inpatient Physician (P5)

> If I could have one, I would choose to see a lab table. -Primary Care Physician (P2)

> History of Labile INR I would not have on top of my head and would want to see the lab history. -Primary Care Physician (P1)
---

## Additional Insights
**What's working well**
- Clinicians are able to have more meaningful and informed conversations with their patients when they can calculate exact numbers and are also able to demonstrate how certain lifestyle changes or interventions can reduce their patients overall risk.
- The color coding helps clinicians communicate risk to their patients.
- Clinicians use medical calculators regularly and it helps with decision making.
- The calculators are straightforward to use and the autopopulation is working well and makes it faster.

> The best thing is that it pulls the data and automatically plugs it in. I've not yet encountered any issues with data quality. -Primary Care Physician

> I've had more meaningful and informed conversations with patients by being able to give more exact numbers. -Clinical Pharmacist

**What's challenging**
- It is difficult to adjust established habits to fold the CDS console and medical calculators into their current workflows. How can medical calculators get further integrated into workflows and even leveraged with AI (such as ambient scribe)?
- For some clinicians, they were curious why it was possible to pull in the lab history data, but still not autopopulate the answer. For example, for bilirubin 2x normal, would it be possible to choose the lower end of a normal range, given each lab is calibrated slightly differently to make the determination.

> Its not something I have incorporated into my habits yet. Its hard for me to remember that console has this. -Primary Care Physician

**Interesting Nuggets**
- It is difficult to adjust established habits to fold the CDS console and medical calculators into their current workflows.
- There is a lot of information to track regarding a patient's health maintenance. One clinician shared how they have very methodical note templates to help them ensure they are covering all of the patient's recommended care. They group care into health management and health maintenance. Health management is everything related to managing existing conditions while health maintenance is covers more preventative care.
- It is difficult to stay up to date on changing recommendations. Clinicians need to stay ahead of society guidelines and even news articles to be able to respond to patients' questions. 

## Recommendations
1. To communicate the benefit of opening the link consider adding copy to indicate the purpose which might help initiate action. For example: View lab history to answer question. 
2. To support different cognitive processing styles and contextual needs, consider adding the patient data in both a table and graph format.
3. To reduce cognitive burden, add a definition for Labile INR as helper text below the field. 
4. To reduce cognitive burden and eliminate extra clicks, explore how the input field question and criteria could display within the drawer for a clinician to easily see with the lab data.
5. To reduce cognitive burden, add normal ranges for clinicians to easily reference as they interpret the data. Consider adding the range with the key and/or as a line in the graph or a column in a table.
6. To support context specific data needs, consider adding ways to emphasize certain data points, adjust the time interval of the graph or select the number of points to display.


## Next Steps

This research supports pursing the implementation of lab history data (in graph and/or table form) within the context of a specific calcualtor and input field. Prior to implementation, additional design work should incorporate or explore the recommendations. 


## Further research needed



## Appendix

### Research documents
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/clinical-decision-support/medical-calculators/research/2025-09-Calculator-Detail-Page-Line-Chart-Testing/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/clinical-decision-support/medical-calculators/research/2025-09-Calculator-Detail-Page-Line-Chart-Testing/conversation-guide.md)
- [Mural notes document](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1757268336123/6fe5f195c565aadf0d8e21c796e92bdb648cf24f?wid=88-1757268342686)

### Tools used for Synthesis
Mural
  
### Pages and applications used

[Figma prototype](https://www.figma.com/proto/uRUcFMxuFOoNMJeMXJsI5w/Dashboard---Calculators-and-Patient-Summary-Tabs?node-id=19531-2916&t=Ra44YiX7kcE0GF5S-0&scaling=min-zoom&content-scaling=fixed&page-id=19531%3A2915&starting-point-node-id=19531%3A3104)


### Research participants 

#### Recruitment criteria

For this study we connected with clinicians who had prior experience using the CDS Medical Calculators. We ensured we had some clinicians familiar with the specific calcualtor (HAS-BLED) that was the basis of our prototype. Not all clinicians had to have experience with HAS-BLED to be able to test the value of the feature we wanted to explore. 

#### Demographics 

We talked to **5 participants.**

Primary role:
  * Clinical dietician: 0
  * MSA: 0
  * Nurse Practitioner: 0
  * Nursing (RN, LPN): 0
  * Pharmacist: 1
  * Physician: 4
  * Physician Assistant: 0
  * Resident, Intern, or Fellow: 0
  * Other: X

Specialty:
  * Cardiology: 0
  * Dermatology: 0
  * Emergency Medicine: 1
  * Endocrine: 0
  * Hematology: 0
  * Hepatology/Gastroenterology: 0
  * Infectious Disease: 0
  * Informatics: 0
  * Mental Health: 0
  * Nephrology: 0
  * Neurology: 0
  * Oncology: 0
  * Pain Management: 0
  * Palliative Medicine: 1
  * Pharmacy: 1
  * Primary Care: 3
  * Pulmonology: 0
  * Surgery: 0
  * Other: 0

Care setting:
  * Outpatient: 4
  * Inpatient: 1
  * Emergency Department: 0
  * Other: 0

EHR:
 * CPRS: 5
 * Oracle: 0 

Devices used during study: 
* Desktop: 5 
* Tablet: 0 
* Smart phone: 0 
* Assistive Technology: 0

