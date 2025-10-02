# Drawer & Skeleton Loader Research

**Office of the CTO - Digital Experience (OCTO-DE), Data Grid, Data Visualization**

Date: 09/30/2025

Contacts: Ben Nguyen

Link to Research Readout

**Jump To:**


## Research Goals



1. Evaluate the usability of the drawer pattern and determine whether it functions effectively as a container for detailed information.
2. Evaluate how clinicians perceive and interpret the skeleton loader and what it communicates during data loading.
3. Identify opportunities for improvement in the drawer to inform guidance for app teams during implementation.


## Research Questions

**Drawer functionality:**



1. Are users able to discover that there is more information within the drawer?
2. How do users react to basic drawer functions?
3. How do they react to the open/close animations?
4. How do users interact with the information within the drawer?
5. How do users use the drawer in conjunction with the main screen?
6. How do users react to seeing and interacting with other visualizations such as graphs within the drawer?
7. How do users react to the drawer in different screen sizes?
8. What is the ideal order of information and visualizations within the drawer?

**Skeleton Loader:**



1. Are users able to recognize that data will populate the screen?
2. Do users understand the purpose of the skeleton loader?


## Methodology

We conducted five one-hour remote usability testing sessions with clinicians using a prototype of the Drawer. During these sessions, participants were asked to think aloud as they navigated the prototype. They demonstrated how they would complete key tasks such as searching for key information under pressure using the Drawer.


## Hypothesis & Conclusions

Users will react positively to the drawer because it contains a lot of useful information while keeping the context of the main screen.



* **LIKELY TRUE: Participants had an overall positive impression of the Drawer. However, some struggled to complete more detailed tasks.**

Users will want to be able to hide areas of the drawer that are not useful for them.



* **LIKELY TRUE: 3 out of 5 participants attempted or expressed the interest to hide, remove, or rearrange sections.**

Users will hardly notice the skeleton loader, reinforcing the loaders purpose.



* **MAYBE TRUE: Most clinicians did not initially notice the skeleton loader. However, 2 clinicians did and recognized  its intended purpose.**


## Key Insights



1. Drawers that present additional information without removing clinicians from the main view help maintain workflow continuity and support efficient decision-making.
2. Customizable drawers that allow clinicians to show, hide, or reorder sections can better support individual workflows, helping them prioritize information and reduce cognitive load.
3. Adjustable drawer width would enable clinicians to tailor the interface to their workflow, improving focus on detailed tasks while maintaining context when needed.
4. Clear and persistent confirmation of which patient’s details are displayed in the drawer is critical for ensuring clinicians maintain confidence that they are working with the correct patient record.
5. Clear visual dividers are essential for helping clinicians distinguish between sections in the drawer, enabling quicker scanning and reducing the risk of overlooking critical details.
6. The Skeleton Loader reassures clinicians that data is actively loading, which reduces the likelihood they will navigate away prematurely, helping them stay engaged and maintain workflow continuity.


## Details of Insights

**Insight 1: Drawers that present additional information without removing clinicians from the main view help maintain workflow continuity and support efficient decision-making.**

All participants successfully identified the drawer and expected it to contain more information about the patient. All participants liked the fact that they had the context of the Data Grid while being able to view more information in the drawer. 

*“I like that I can see all the information on the table still while this is open.” - P1*

“I can look at the information even though I’m using a smaller window and can multitask.” - P3

**Insight 2: Customizable drawers that allow clinicians to show, hide, or reorder sections can better support individual workflows, helping them prioritize information and reduce cognitive load.**

When asked to locate specific data points on a line graph, multiple clinicians expressed the want to bring the graph to the forefront of the drawer. 3 of 5 participants expressed a desire to rearrange and hide sections within the drawer so they could prioritize the information most relevant to their workflow.

“Some of this stuff I would never use – it would be nice if I could hide them.” - P3

“I’d like to move what is important to me up to the top so I don’t have to scroll.” - P4

**Insight 3: Adjustable drawer width would enable clinicians to tailor the interface to their workflow, improving focus on detailed tasks while maintaining context when needed.**

Participants were tasked to have 2 browser windows open with each taking up 50% of their screen. With 2 windows open simultaneously, clinicians were tasked to find information from the drawer and paste it into the other window open. 3 of 5 participants attempted to increase the width of the drawer in this view.

<img width="488" height="245" alt="image" src="https://github.com/user-attachments/assets/9e0d7379-2cb9-4568-8127-c97a868cfa97" />

*Screenshot of Drawer prototype and another window open. Each taking 50% of the screen*

*“If I could make this wider, I could focus more on what’s inside without feeling cramped.” - P2*

*“Now, the table isn’t as important so it’d be nice if I could expand the drawer.” - P3*

**Insight 4: Clear and persistent confirmation of which patient’s details are displayed in the drawer is critical for ensuring clinicians maintain confidence that they are working with the correct patient record.**

Although the patient name is located at the top of the drawer, clinicians want to know what specific row from the data grid they are viewing details of. One clinician mentioned that when mentally fatigued, it can be confusing for her to know which patient details she is viewing. 

2 of 5 participants had to double check and verify that they were viewing the correct patient details.

<img width="516" height="278" alt="image" src="https://github.com/user-attachments/assets/ab0bef0a-ddb6-4c34-977e-eac1580ee75b" />

*Without a highlight, it is confusuing for clinicians to know which row details they are viewing*


*“I forget…Am I looking at the third patient on the list? I’m not absolutely sure…” - P5*

*“It should be obvious whose information I’m reviewing.” - P4*

**Insight 5: Clear visual dividers are essential for helping clinicians distinguish between sections in the drawer, enabling quicker scanning and reducing the risk of overlooking critical details.**

Participants were tasked to locate specific information under ‘Appointments’. 4 of 5 failed to do so and failed to recognize ‘Appointments’ as a unique section completely. Some participants thought the ‘Appointments’ section correlated to the line chart directly above it.

<img width="354" height="357" alt="image" src="https://github.com/user-attachments/assets/d951c71e-55e4-4bd6-86d8-1f56b86f41f4" />

*Clinicians failed to see that 'Appointments' was a separate section*

*“I totally didn’t notice that section. It looks like it’s connected to the one above it.” - P1*

*“It needs clear breaks so I don’t miss something important.” - P2*

**Insight 6: The Skeleton Loader reassures clinicians that data is actively loading, which reduces the likelihood they will navigate away prematurely, helping them stay engaged and maintain workflow continuity.**

All participants were able to recognize that the Skeleton Loader indicated that data will soon populate the Drawer. Some pointed out that this is useful in high pressure situations because it reinforces the idea that the system is working.

*“I could tell the system was working, so I didn’t click away” - P3*

*“Without it, I might think it froze and try to refresh the page.” - P4*


## Recommendations

The following are recommendations and design implications based on certain insights.

Insight 2: Customizable drawers that allow clinicians to show, hide, or reorder sections can better support individual workflows, helping them prioritize information and reduce cognitive load.

**Recommendation: **A customizable drawer supports the diversity of clinician workflows across the VA by allowing teams to adapt the interface to their specific needs, making it a more scalable and reusable pattern. **We should allow reordering, hiding, or showing sections within the drawer.**

Insight 3: Adjustable drawer width would enable clinicians to tailor the interface to their workflow, improving focus on detailed tasks while maintaining context when needed.

**Recommendation: Allow clinicians to resize the drawer to balance detailed focus with main-view context.**

Insight 4: Clear and persistent confirmation of which patient’s details are displayed in the drawer is critical for ensuring clinicians maintain confidence that they are working with the correct patient record.

**Recommendation: Display prominent identifiers (e.g., highlighting the corresponding Data Grid row) when the Drawer is open.**

Insight 5: Clear visual dividers are essential for helping clinicians distinguish between sections in the drawer, enabling quicker scanning and reducing the risk of overlooking critical details.

**Recommendation: Incorporate strong visual dividers (lines, spacing, headers) between Drawer sections.**


## Next Steps

The Data Visualization team will revise Drawer designs based on the findings.

The Data Visualization team will work with other CDS app teams to implement Drawer.

The Data Visualization team will provide guidance based on research when working with app teams to implement the Drawer.


## Appendix

Research Plan

Conversation Guide

Slide Deck

