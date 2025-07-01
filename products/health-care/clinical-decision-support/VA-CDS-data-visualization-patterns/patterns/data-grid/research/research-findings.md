# **Data Grid Usability Test Research Findings**

**Office of the CTO - Digital Experience (OCTO-DE), Data Grid, Data Visualization**

**Date:** 06/11/2025

**Contacts:** Ben Nguyen

[Link to Research Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/clinical-decision-support/VA-CDS-data-visualization-patterns/patterns/data-grid/research/images/dg%20usability.pdf)



**Jump to:**

[Methodology](#methodology)

[Hypotheses and conclusions](#hypothesis-and-conclusions)

[Key findings](#key-findings)

[Recommendations](#recommendations)

[Next Steps](#next-steps)

[Who we talked to](#who-we-talked-to)


# Research Goals

In 2025, the Data Visualization Team created the Data Grid—a reusable interface pattern designed to help clinicians view, search, and interact with large datasets. The team continues to refine its design and user experience to support clinicians in efficiently navigating and managing large data sets, such as comprehensive patient lists.

Through usability testing, we aim to validate what is working well for users and systematically identify and document usability issues in order to inform targeted design improvements.


# Research Questions

**Toolbar**

We want to ask questions and observe how clinicians search for data using the search functionality in the toolbar. We want to observe the entire workflow of what prompts clinicians to search for something and what actions they take based on the results of the search. Furthermore, we want to understand how clinicians are filtering the results. By understanding how clinicians use the toolbar, we hope to identify areas for improvement.



* How are users prioritizing the table search in relation to the individual column search fields?
* Are users getting the expected experience around the search functionality?
* How are users filtering table data? Are they able to recognize if filters are active?

**Table**

We want to understand how clinicians interact with and navigate the data grid table and see how they find key data. We’re interested to see if and how clinicians use the various table functionalities such as pinning, sorting, and filtering.



* How do clinicians use the pinning functionality (if at all)? What are some use cases where they would use pinning?
* Why and how do clinicians need to reorder columns?
* How do clinicians use column searches compared to the toolbar search?
* How do clinicians use the sorting functionality? What are some use cases where they would use sorting?
* How do clinicians update/edit cell values?


# Methodology

We conducted five one-hour remote usability testing sessions with clinicians using a prototype of the Data Grid. During these sessions, participants were asked to think aloud as they navigated the prototype. They demonstrated how they would complete key tasks such as searching for patients and filtering results within the Data Grid.


# Hypothesis and Conclusions



1. Clinicians will be able to navigate through and use Data Grid fairly easily because it has familiar design patterns and interactions found in other table tools.
    1. **LIKELY TRUE: Participants had an overall positive impression of Data Grid and have generally positive feedback. However, some tasks were not intuitive to them such as pinning and reordering columns.**
2. Clinicians will not be able to easily reorder columns using column pinning.
    2. **DEFINITELY TRUE: All participants showed confusion when asked to reorder columns and all attempted to drag and drop columns to reorder them.**


# Key Findings



1. Participants described the Data Grid as generally intuitive and effective, noting that it supported their workflows and made it relatively easy to find and interpret patient information.
2. Participants require more flexible date range filters that support approximate or open-ended dates, since exact dates are often unknown.
3. Participants found the existing methods for pinning and reordering columns unintuitive and cumbersome, expressing a desire for faster and more streamlined ways to tailor the layout to their needs.
4. Participants often didn’t realize additional columns were available resulting in missed information and frustration when expected data wasn’t immediately visible.
5. When the data grid displays only a few rows, the reduced height can make it difficult to access or use column menus effectively.


# Details of Findings

**Finding 1: Participants described the Data Grid as generally intuitive and effective, noting that it supported their workflows and made it relatively easy to find and interpret patient information.**

5/5 participants reported a positive overall experience with the Data grid, frequently describing it as “easy” and “intuitive” to use. While some participants encountered initial difficulties, all participants noted that the Data Grid became easy to use once they became familiar with its features, emphasizing its learnability. 

*“It’s clear and simple and I see a tool like this making my workflow much smoother.” - P3*

*“After a few uses, I think it will become second nature.” - P2*

**Finding 2: Participants require more flexible date range filters that support approximate or open-ended dates, since exact dates are often unknown.**

Feedback from all sessions indicated that current date range options don’t accommodate real-world uncertainty in data data, leading to inefficient searching and potential missed results. 

When using the dropdown filter, 4 / 5 participants asked for additional options that consisted of a range (e.g. Born between XXXX -  XXXX).

![before 2000](https://github.com/user-attachments/assets/f5eb8945-e206-45fa-b9fd-3e947a05c7c5)






*Clinicians wanted broader options then the ones shown*

All participants expressed the need for some form of date range selection feature, emphasizing the importance of having flexible options to specify date ranges that accommodate both exact and approximate timeframes. 

*“Most of the time, I don’t know the exact date, so it would be great if I could filter by approximate date or date ranges.” - P3*

When navigating through the column menus, 3 /5 participants stated that oftentimes they do not know the exact date to search within a menu for a date column.

![date of birth menu](https://github.com/user-attachments/assets/42949446-f866-4fc1-aca9-6cbd19359ad2)





*Example of a search bar in a column menu for a ‘Date of Birth’ column*

**Finding 3: Participants found the existing methods for pinning and reordering columns unintuitive and cumbersome, expressing a desire for faster and more streamlined ways to tailor the layout to their needs.**

4 / 5 participants emphasized the importance of being able to reorder columns to create personalized views that are catered to their workflow. 

All participants initially felt uncertain about which column would occupy the farthest left position when using the pinning feature.

![pinning](https://github.com/user-attachments/assets/e5e4196d-261b-4163-b929-6f4390b4c114)





*Multiple columns that are “pinned left”*

Only 1 participant was able to easily reorder the columns in a specific order using the pinning feature. **All participants tried to drag and drop the columns when asked to reorder them.**

*“I expected to just move columns around easily and keep the important ones fixed, but it took a bit to figure out the pinning.” - *P5 \


**Finding 4: Participants often didn’t realize additional columns were available resulting in missed information and frustration when expected data wasn’t immediately visible.**

4 / 5 participants had trouble recognizing that there were more columns. Only 1 participant immediately explored further columns by scrolling horizontally.

![right edge](https://github.com/user-attachments/assets/85d41acd-d6f4-4b4e-b0ce-7f7359c2a068)

*Example of the right side edge of the Data Grid*

*“I don’t realize there’s more data off-screen. It would be great if the interface made it clearer that I can scroll horizontally.” - *P5

**Finding 5: When the data grid displays only a few rows, the reduced height can make it difficult to access or use column menus effectively.**

5/5 participants pointed out that it was difficult for them to access column menus when there were few rows displayed.

*“When there are only a few rows showing, these feel kind of hidden or hard to reach. It’s like it shrinks too much and makes using it frustrating.” - *P2

![cut off menu](https://github.com/user-attachments/assets/ffd277ad-c002-4d72-9634-3b763f88bb17)


*Data Grid when there is only 1 result. The menu for the ‘Date of Birth’ column is cut off.*

Participants pointed out that this problem does not occur when there are ‘No Results Found’.

<img width="1041" alt="no result" src="https://github.com/user-attachments/assets/8980d9ee-f6b5-4ac5-8a18-23d24a52ce37" />

*Example of a menu when there are no results found*


# Additional Insights



* 2 / 5 participants suggested adding more colors to the Data Grid when asked if they would change anything about it.
    * 1 participant pointed out that staring at a “black and white” table for an extended period of time can be visually taxing.
* 2 / 5 participants forgot that they had active filters in the toolbar.
    * Participants liked the existing visual indicator for a filters in column menus.

![menu indicator](https://github.com/user-attachments/assets/8458b2e3-8512-4ab0-9704-f366cfc6ed5a)

*The “Full Name” column menu icon with a visual indicator that a filter is active*



* 1 participant pointed out that the current menu options such as a search bar do not work for all column types like checkbox columns.

![checkbox](https://github.com/user-attachments/assets/91fbba91-acc5-4241-8819-62b95bc6840c)

*Column menu for a checkbox focused column*


# Recommendations 



1. **Provide more flexible date range filters that support approximate or open-ended dates.** All participants stated that they are used to using date range pickers in similar tools. This date range picker can live in the top toolbar of the Data Grid. Another option would be to add more open-ended date options in a dropdown filter.
2. **Add drag-and-drop functionality so clinicians can easily reorder columns to fit their needs.** During testing, all participants tried to drag and drop the columns to reorder them. 
    1. Clinicians should also be allowed to save the order of the columns they prefer.
    2. Rather than using the concept of 'pinning,' allow users to reorder columns by assigning them a specific numerical position to eliminate confusion about column placement.
3. **Add visual cues—such as shadows, gradients, or edge fades—to signal that additional columns are available by scrolling horizontally.** Currently, it is not obvious at a glance to users that there are more columns.
4. **Ensure a consistent minimum table height to maintain visibility and accessibility of column menus, even when only a few rows are displayed.** All participants complained that they could not interact with column menus when there were only a few rows displayed. A standard minimum table height would solve this problem and make Data Grid more accessible at all sizes.


# Next Steps



* The Data Visualization team will revise Data Grid designs based on the findings.
* The Data Visualization team will work with other CDS app teams to implement Data Grid.
* The Data Visualization team will continue to test accessibility features.


# Appendix



* Research Plan
* Conversation Guide


# Tools used for Synthesis



* Mural


# Who we talked to

Recruitment criteria

We asked that participants are active healthcare professionals in the VA.

We talked to 5 participants.

Audience segment:

Veterans: 0

Caregivers: 0

Family members of a Veteran: 0

Gender:

Male: 2

Female: 3

LGBTQ+: 

Transgender: Unknown

Nonbinary, gender fluid, genderqueer, Two-Spirit (Indigenous only), or another gender beyond man or woman: Unknown

Gay, lesbian, or bisexual: Unknown

Devices used during the study:

Desktop: 5

Tablet: 0

Smartphone: 0

Assistive Technology: 0

Age:

25-34: 

35-44: 

45-54: 

55-64+: 

Unknown: 5

Education:

High school degree or equivalent: 

Some college (no degree): 

Associate's degree, trade certificate, or vocational training: 

Bachelor's degree: 

Master's degree: 

Doctorate degree: 

Unknown: 5

Geographic location:

Urban: 

Rural: 

Unknown: 5

Race:

White: 

Black: 

Hispanic: 

Biracial: 

Asian: 

Native: 

Unknown: 5

Disability and Assistive Technology (AT): 

No participant joined using Assistive Technology


# Underserved groups who we haven’t talked to

This research does not include the perspectives of the following marginalized Veteran groups:

Cognitive Disability

Other than honorable

Expat

LGBTQ+

Assistive Tech users

