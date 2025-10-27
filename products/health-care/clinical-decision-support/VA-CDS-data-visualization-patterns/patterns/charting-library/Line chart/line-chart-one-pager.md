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


Example of lab values in the CPRS table that some clinicians prefer to see rather than a line chart

“I’d give it (line chart) a 5/5 based on ease of interpretation and it being in one place” - Physician 

“If I could have one, I would choose to see a table.” - Physician

**Recommendation: **

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

Introduce customizable chart views. For instance, provide users with the ability to choose the number of data points displayed or to filter data based on specific time ranges. Below are concept mockups I created to visualize some possibilities of this recommendation.



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")


<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")



### **Finding 3 **

Clinicians cognitive load increases when they are trying to understand terminology and criteria in a specific context to interpret the data shown.



* All clinicians needed to review the helper text for what criteria met the definition of Abnormal Renal Function when trying to interpret the lab values. It was challenging for clinicians to remember specific criteria as they were reviewing the graph and also trying to recall ranges for specific labs.
* All clinicians were not entirely sure of the specific definition for “labile INR” and this affected the time to make a decision.
* As clinicians reviewed the ALT/AST/AP labs it was clear that they needed additional information regarding reference ranges.

**Recommendation: **

Include reference ranges alongside the line chart to provide context for data interpretation. This can be implemented through visual elements such as reference lines on the chart or as supporting helper text that outlines the expected or target ranges and clarifying definitions. Including normal ranges within the key can be good for screen reading software.



<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")


<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")




<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image7.png "image_tooltip")
 

<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image8.png "image_tooltip")


