# **Research Overview**


## **Background**

In September 2025 the Medical Calculators team conducted usability testing sessions with clinicians to assess the usefulness of seeing specific lab history and additional calculator details which included line charts designed by the Data Visualization team. This was a good opportunity for the Data Visualization team to work with Medical Calculators researchers to also assess the usability of the line charts. We paired with the Med Calc team by assisting in all usability testing sessions and conducting synthesis together to develop findings.

**IMPORTANT:** Please view the Medical Calculators Team research for full details.

https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/clinical-decision-support/medical-calculators/research/2025-09-Calculator-Detail-Page-Line-Chart-Testing/research-plan.md


### **Data Visualization Goals**



* Understand how helpful line charts are to assist clinicians in answering questions within the context of Medical Calculators.
* Identify areas for improvement for the line chart to create recommendations for future iterations of the line chart.


### **Finding 1**

Clinicians responded that presenting patient data within a line chart would improve their workflow, though some expressed a preference for a table format.



* Clinicians responded favorably to seeing the lab history within a nested line chart compared to having to search for it in the EHR or another external tool.
* Some clinicians preferred a table format for the lab data because to them, it would be more straightforward.

<img width="454" height="80" alt="image (7)" src="https://github.com/user-attachments/assets/6fbff4ba-902f-4dc4-9f35-898809ffe6a8" />
<img width="708" height="75" alt="image (8)" src="https://github.com/user-attachments/assets/660511e8-66ce-4585-a437-b6876067dba1" />


_Example of lab values in the CPRS table that some clinicians prefer to see rather than a line chart_

“I’d give it (line chart) a 5/5 based on ease of interpretation and it being in one place” - Physician 

“If I could have one, I would choose to see a table.” - Physician

**Recommendation:**

Think about a table view of charts as a new pattern where clinicians can toggle between seeing  a chart or a table. This recommendation aligns with a prior ADE team recommendation to include tables which appears to be a government best practice. See link below for an example.

[https://www.cdc.gov/nchs/nhanes/visualization/index.htm](https://www.cdc.gov/nchs/nhanes/visualization/index.htm)


### **Finding 2**

Clinicians need to focus on particular points of interest on a line chart. Focusing on a few data points can reveal key trends to clinicians.



* Clinicians were drawn to the last 3 - 4 data points when interpreting the line graphs.
* The tool tip on hover was discoverable to clinicians when seeking the exact value.
* Time periods and intervals vary case by case.

“For a graph I only need it to go to the last 4 - 5 values. Maybe a couple of years.” - PCP

“My perspective is it’s probably not as useful back 3 years, but it could be useful info to see if they were under control and then recently out of range to see if there were specific factors that caused the issue.” - Clinical Pharmacist 

**Recommendation:**

Introduce customizable chart views. For instance, provide users with the ability to choose the number of data points displayed or to filter data based on specific time ranges. **Below are concept mockups I created to visualize some possibilities of this recommendation.**

<img width="405" height="492" alt="INR - ex" src="https://github.com/user-attachments/assets/97cf589b-c3b2-401f-8060-6d56db9ef64e" />

_In this example, there is a date range picker above the chart_

<img width="405" height="492" alt="INR - ex 2" src="https://github.com/user-attachments/assets/6aadceb9-268e-44be-9fe2-4b4fb20f40a2" />

_In this example, there is a menu where the clinician filter their view_

### **Finding 3**

Clinicians cognitive load increases when they are trying to understand terminology and criteria in a specific context to interpret the data shown.



* All clinicians needed to review the helper text for what criteria met the definition of Abnormal Renal Function when trying to interpret the lab values. It was challenging for clinicians to remember specific criteria as they were reviewing the graph and also trying to recall ranges for specific labs.
* All clinicians were not entirely sure of the specific definition for “labile INR” and this affected the time to make a decision.
* As clinicians reviewed the ALT/AST/AP labs it was clear that they needed additional information regarding reference ranges.

**Recommendation:**

Include reference ranges alongside the line chart to provide context for data interpretation. This can be implemented through visual elements such as reference lines on the chart or as supporting helper text that outlines the expected or target ranges and clarifying definitions. Including normal ranges within the key can be good for screen reading software.

<img width="405" height="492" alt="INR - ex 3" src="https://github.com/user-attachments/assets/21550a49-39fa-4810-a9ed-7b4ac0617f8d" />

_In this example, there are guiding lines that outline a "normal range"_

<img width="405" height="492" alt="INR - ex 4" src="https://github.com/user-attachments/assets/a576eee3-c7aa-4dcc-8f20-559a7fc6b7bd" />

_In this example, the "normal range" is stated within the key_

<img width="405" height="492" alt="INR - ex 5" src="https://github.com/user-attachments/assets/8e0554a9-40ad-47c0-bc6f-efe5c77d232f" />

_In this example, there is text above the chart that can contain definitions or other supporting information_

<img width="405" height="492" alt="INR - ex 6" src="https://github.com/user-attachments/assets/b9d1adba-3d72-4990-9d3d-d0e0cf22bb86" />

_In this example, there is text below the chart that can contain defitions or other supporting information_
