# **Pension-Related Research Review and Prioritization** 

Office of the CTO \- Digital Experience (OCTO-DE), Pension and Burial Benefits Team   
Last updated: 02/12/2025  
Chavie Cramer \[chavie.cramer@coforma.io\], Daniela Jones \[daniela.jones@coforma.io\], Gretchen Maciolek \[gretchen.maciolek@adhocteam.us\]

## **Background and Goals**

Over the last year, the Pension and Burial Benefits Team has conducted primary and secondary research to better understand the current experience of learning about, applying for, receiving, and maintaining Veterans Pension. Through this research, a number of opportunities were identified to improve the usability and experience of the online pension form (VA 21P-527EZ). 

In November 2024, the research team initiated a prioritization exercise to advance proposed recommendations. The goals of this effort included:

* Holistically reviewing in-progress design work and research studies completed to date  
* Determining which recommendations, informed by past research, provide the highest value for Veterans, their advocates, and VA adjudicators  
* Evaluating how existing recommendations align with VA priorities and business goals, feasibility, and other relevant considerations  
* Prioritizing recommendations across several primary and secondary data sources to inform an updated roadmap for HCD work

## **Methodology**

We first reviewed study findings and other research assets to reassess work completed to date, including:

* [VSO Research (Fall ‘24)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-09%20527EZ%20VSO%20Research/research-findings.md)  
* [VSR Shadowing (Spring ‘24)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-05%20527EZ%20VSR%20Shadowing/report.md)  
* [Usability Study (Spring ‘24)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024%2002%20Pension%20Usability%20Evaluation/research-findings.md)  
* [Veterans Pension Benefits Journey Map](https://app.mural.co/t/departmentofveteransaffairs9999/m/hcdveo2185/1650040181744/b41f183d67ce4e5ebb73d043835c9c1180bbd840) 

Next, we completed cross-functional analysis to identify recurring themes. We then proposed an initial prioritization using the following techniques: 

* Affinity mapping and measuring signal strength based on frequency and sentiment associated with datapoints.   
* 2x2 prioritization matrix based on (1) direct Veteran impact and (2) level of effort and technical feasibility as guiding criteria.  
* Detailed cross-reference with existing tickets and related work in progress or completed and previously established priorities. 

We then organized proposed initiatives into stages (research, design, testing, implementation) to better assess and sequence anticipated activities and resources needed. 

This process culminated in an initial prioritization of potential pension-related initiatives to share for feedback with both the delivery team and enablement team partners. 

## **Opportunities and Recommendations**

For each of the opportunities and recommendations listed below, the team will utilize a variety of data sources, both quantitative and qualitative, to measure success, including:

* Google Analytics to monitor user engagement and drop-off rates  
* Call center data to understand examples of Veteran confusion  
* Direct user feedback via CSAT scores  
* Downstream reporting from VBMS for instances of claims entering development process and associated reason codes  
* Generative and evaluative user research  
    
1. Introduction Page  
   1. **Problem:** Veterans may be confused about the different types of pension or apply for the wrong benefit because the information provided on the introduction page is insufficient or unclear.  
   2. **Recommendation:** Provide information about the different types of pensions and clearer eligibility criteria on the introduction page to help applicants feel more confident and prepared when starting their application.  
   3. **Impact:** We expect that Veterans will have the necessary information to more accurately determine potential eligibility and gather the right supporting documentation for successful application completion.

2. Supporting Documents Page (End-Form Summary Page)  
   1. **Problem:** Veterans may not understand what supporting documents are needed because the form provides inadequate guidance on what is required for their unique situation and how to complete next steps.  
   2. **Recommendation:** Implement conditional logic on the supporting documents page to display appropriate forms and additional information based on the applicant's responses.  
   3. **Impact:** We expect that confusion will be reduced when uploading supporting documentation, resulting in fewer errors and/or missing information on applications, thereby reducing development letters and time to a decision.

3. Financial Information (Step 5\)  
   1. **Problem:** Veterans may experience frustration and high error rates when completing the financial information section due to unclear or inconsistent language and requests for information that is complex to understand, recall, or obtain.   
      1. These challenges may relate to: dependent qualifications, asset reporting, and medical reimbursements.  
   2. **Recommendation:** Conduct a design investigation to explore solutions that simplify the user experience, such as clarifying the purpose of and guidance to report medical expenses and assets and streamlining definitions across the section or form more broadly.   
      1. *Note: existing, in-progress design tickets related to this section of the form should be considered as part of a holistic review to ensure continuity across proposed design improvements.*  
   3. **Impact:** We expect that a holistic review of this section of the form will lead to design solutions that will support fewer incomplete or incorrect applications, decreases in form abandonment, reduced development letters and processing time, and increased Veteran satisfaction during the application journey. We also anticipate that this review will inform eventual digitization efforts of the Income and Asset Statement (VA Form 21P-0969).

4. Household Information (Step 4\)  
   1. **Problem:** Veterans may struggle to provide accurate information in the household information section, particularly the marriage history subsection, because of unclear instructions, requests for information that is difficult for Veterans to recall or obtain, and unintuitive question sequencing.  
   2. **Recommendation:** Conduct a design investigation to explore solutions that simplify the user experience, such as clarifying the purpose of the data, reducing unnecessary fields, and align question sequencing with user expectations.   
   3. **Impact:** We expect that a holistic review of this section of the form will lead to design solutions that support fewer incomplete or incorrect applications, decreases in form abandonment, reduced development letters and processing time, and increased Veteran satisfaction during the application journey.

5. Multi-Response List and Loop Bundle  
   1. **Problem:** Veterans may abandon the form or submit an application with a high volume of errors because they are unable to make edits to information entered or are unable to complete required task flows.   
      1. Identified areas for improvement include questions related to service names, treatment at VA medical centers, and dependent children.  
   2. **Recommendation:** Complete a usability study to test the multi-response list/loop pattern with the goal of assessing its effectiveness in improving task flow, reducing complexity, and ensuring clarity on next steps.  
   3. **Impact:** We expect that a usability study testing specific instances of the multi-response list/loop pattern on the pension form will enhance user experience, support the identification and reduction of potential errors, and better align the pension form with VA.gov Experience Standards. 

For a more detailed overview of the opportunities and recommendations listed above, refer to [this PDF](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/pension/research/2025-02%20HCD%20Prioritization).

## **Next Steps**

Opportunity specific: 

The following opportunities have been identified as **ready for implementation**. These are expected to be low-effort changes that result primarily in bug fixes or providing missing information, and have already been vetted through the collaboration cycle. 

* Introduction Page: Improve form introduction context ([\#88387](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77724))  
* Supporting Documents, End-Form Summary Page ([\#88521](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88521))

The following opportunities have been identified as **ready for design exploration**. These opportunities have a higher level of complexity and more work is needed to define solutions, which necessitates design-focused research and ideation. 

* Financial Information (Step 5\)  
* Household Information (Step 4\)

The following opportunities have been identified **as ready for testing**. Proposed solutions currently exist (linked below) and can be utilized as part of a research study with Veterans to assess the usability and performance of the multi-response list and loop pattern within the online pension form.

* Service Names ([\#82849](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82849))  
* Treatment at Medical Centers ([\#88673](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88673))  
* Dependent Children ([\#82850](https://github.com/orgs/department-of-veterans-affairs/projects/1278/views/3?filterQuery=-label%3Aepic+dependent+children&pane=issue&itemId=67220054&issue=department-of-veterans-affairs%7Cva.gov-team%7C82850))


  
Prioritization specific:

After receiving feedback from both the delivery team and enablement team partners, this list of proposed work to prioritize will be incorporated into the larger Pension and Burial Program roadmap.

## **Further research needed**

Several topics have been identified for further research, including: 

* Exploratory research on the overall experience of pension-eligible Veterans and their families or other advocates  
* Evaluative research on proposed design changes to the form (such as those pending in Financial and Household Information sections). 

As design work takes place, a phase 1 exploratory study will take place to investigate the overall experience with pension-eligible Veterans and their advocates. 

As new design features currently in progress are further defined and developed, we will explore evaluative testing in a phase 2 usability study with pension-eligible Veterans and their advocates.

The team will work cross-functionally to ensure that any product-led analytics and quantitative data definition will inform research efforts.

## **Appendix**

[Prioritization spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/pension/research/2025-02%20HCD%20Prioritization)

## **Tools used for Synthesis**

Mural and spreadsheets were both used for synthesis.

## **Who we talked to**

We consulted cross-functionally with research, design, product, engineering, and enablement team partners.    
