# Research Findings for Bar Chart & Single Value Visualization (SVV) Usability Testing

**Office of the CTO - Digital Experience (OCTO-DE), Data Visualization Team, Clinical Decision Support Collaborative**

**Date:** 10/2025

**Contacts:** Ben Nguyen



## Background

During initial discovery with the CDSC app teams, the Data Visualization team identified Bar Chart and Single Value Visualization as patterns that could be used across apps to fulfill clinicians' need to quickly view data.

**NOTE: I will refer to the Single Value Visualization as SVV for the remainder of this document.**


## Research Goals



* To assess the overall usability of the Bar Chart and SVV as standalone patterns.
* To assess the usability and understandability of the Bar Chart being used alongside with the SVV.
* Identify opportunities for improvement in both patterns to inform guidance for app teams during implementation.


## Research Questions



1. How easily can clinicians interpret and use the Bar Graph and SVV, both individually and together?
2. In what ways do these visualizations support or hinder comprehension, decision-making, and workflow?
3. How does combining the Bar Graph with the SVV affect clinicians’ ability to understand and act on the data?
4. Which design of the SVV is most effective at communicating meaning clearly and efficiently?
5. How easily can clinicians use the patterns on a small mobile sized screen?


## Methodology

The Data Visualization team conducted semi-structured interviews using interactive Figma prototypes of the My Work Week application enhanced with a Bar Graph and SVV. Six users of My Work Week participated in the study, providing feedback on the usability and effectiveness of the visualizations. Clinicians were given the scenario to gather information using our prototype to effectively plan out their work week.


## Hypothesis & Conclusions

Clinicians will find the SVV useful in gathering quick information to plan out their work week.

**MAYBE TRUE:** The usefulness of the SVVs depended on the level of clinician, for example, if they were in a supervisory role or not.

Clinicians will be able to easily interpret the information that is being presented on the Bar Charts.

**MOSTLY TRUE:** Clinicians were able to quickly identify information on the Bar Charts, however further improvements need to be made in order to eliminate confusion and decrease clinician processing time.


## Key Findings



1. Clinicians did not perceive the SVV as interactive, revealing a gap in visual cues that signal actionable elements.
2. Clinicians’ focus within the SVV varies. Supervisors rely on the subtext for contextual understanding, while non-supervisory clinicians prioritize the main number for quick decision-making—indicating a need for flexible variants tailored to different user needs.
3. When shown together, clinicians did not immediately recognize the relationship between the bar chart and its supporting SVV, indicating a need for clearer visual linkage between the two elements.
4. Clinicians did not immediately recognize that the bars in the bar chart were hoverable and were frustrated that they could not quickly recognize the value bars represented.
5. Clinicians were confused by the bar widths on time-based charts, indicating a need for clearer visual encoding of time intervals on the x-axis.
6. Clinicians found both stacked and side-by-side bar chart layouts useful, suggesting that the design system should support both visualization options to accommodate different analytical needs.


## Details of Key Findings


### Clinicians did not perceive the SVV as interactive, revealing a gap in visual cues that signal actionable elements.



* When asked to navigate to other metrics, 5 of 6 clinicians stated that they would refer back to the homepage which they are used to seeing.
* The SVVs did not prompt clinicians to explore and discover more metrics by interacting with the SVVs.
* None of the participants immediately recognized that the SVVs were interactive.

*”I didn’t know that I could click on those tiles. I thought they were just listing information.” - VA Physician*


![Adobe Express - Screen Recording 2025-10-28 at 4 14 48 PM](https://github.com/user-attachments/assets/828b4a76-1783-4352-868a-841559ffba58)


(In our prototype, the SVVs were interactable)


### Clinicians’ focus within the SVV varies. Supervisors rely on the subtext for contextual understanding, while non-supervisory clinicians prioritize the main number for quick decision-making—indicating a need for flexible variants tailored to different user needs.



* 3 of the supervisory level clinicians found value with the bottom level text on the SVV.
* Non-supervisory clinicians only found the main value of the SVV useful.
* All clinicians found the SVV that calls to action like ”Needs Resolution” were useful and prompted exploration.

<img width="495" height="186" alt="image" src="https://github.com/user-attachments/assets/66b6ef6d-2513-4701-b87e-4765e68c6cd6" />


(Example of the SVVs that we showed in our prototype)

*“The percentage doesn’t matter to me but I can see it being useful for my manager” - VA Physician*

*“I like this because our clinic is starting to pay more attention to performance metrics” - VA Physician (Supervisor)*


### When shown together, clinicians did not immediately recognize the relationship between the bar chart and its supporting SVV, indicating a need for clearer visual linkage between the two elements.



* We showed clinicians a version of a bar chart alongside an accompanying version of an SVV.
* 4 clinicians initially thought that the two visualizations were unrelated and did not see the relationship until further prompted.
* Clinicians stated that the difference of colors in the SVV and bar chart caused confusion.

<img width="794" height="341" alt="Screenshot 2025-10-28 at 10 31 30 AM" src="https://github.com/user-attachments/assets/1bfd8166-7c01-4394-91c0-91ec77af9ecb" />


(Bar Chart accompanied by an SVV)

*“It’s confusing because the colors in this tile are different from the graph and the key” - VA Nurse*

*“The information is the same but the colors are different. It would make more sense if they matched” - VA Physician*


### Clinicians did not immediately recognize that the bars in the bar chart were hoverable and were frustrated that they could not quickly recognize the value bars represented.



* Clinicians were tasked to vocalize the exact value of certain bars on the Bar Chart.
* Most clinicians did not immediately recognize that they could hover over the bars which would reveal a tooltip with the exact value of the bar.
* Clinicians were frustrated that they could not quickly identify the exact value of the bars.

*”This would be much more usable if there were some type of lines or grid.” - VA Physician*

*“I didn’t know that you could hover over the bars and I wouldn’t have guessed that I could.” - VA Physician*


### Clinicians were confused by the bar widths on time-based charts, indicating a need for clearer visual encoding of time intervals on the x-axis.



* 3 clinicians were confused about the bar chart’s x-axis when displaying time.
* The width of the bar was the source of confusion, for example, if a bar is shown for the 9:00 hour, clinicians thought that it was instead showing from 8:30 – 9:30.
* The image  below shows how the beginning of the bar starts midway between 8:00 and 9:00 am and ends midway between 9:00 and 10:00 am


<img width="305" height="333" alt="Screenshot 2025-10-28 at 11 30 57 AM" src="https://github.com/user-attachments/assets/ca729c4d-bbf8-43a6-819c-8b6282569bec" />




### Clinicians found both stacked and side-by-side bar chart layouts useful, suggesting that the design system should support both visualization options to accommodate different analytical needs.



* We showed clinicians two variants of bar charts depicting 2 values. One variant displayed side by side bars and one showed stacked bars.
* Clinicians did not have a strong opinion on which one they preferred and were able to successfully use both variants.


<img width="823" height="404" alt="Screenshot 2025-10-28 at 11 42 09 AM" src="https://github.com/user-attachments/assets/dabef037-bbb2-4052-8da2-951e94a37b72" />


(Side by side bars depicting 30 and 60 minute appointments)

<img width="821" height="408" alt="Screenshot 2025-10-28 at 11 42 20 AM" src="https://github.com/user-attachments/assets/fbfac973-eb30-481f-a329-b44bdb978163" />



(Version with stacked bars)


## Recommendations



1. The difficulty clinicians had in recognizing the Single Value Visualization as interactive indicates a gap in its visual design. If we decide to create a variation of the SVV that is interactable, we should consider a visual design that communicates the interactivity. This could be a drop shadow or other elevations. 
2. Because clinicians at different levels found value in different aspects of the Single Value Visualization, we should consider creating variants to better meet their specific needs.
3. Clinicians were confused that the SVV and bar chart depicted the same information but was represented by different colors. To ensure users understand that patterns are related, consider creating multiple variations of the SVV to be paired with other patterns.
4. Clinicians expressed frustration that they could not quickly identify the value of bars. Consider a grid background to help them identify values quickly.
5. To provide flexibility for different use cases, provide variations of bar charts such as stacked bar charts and horizontal oriented bar charts.


## Next Steps

This research supports pursuing additional iterations and variants of Bar Chart and SVV to apply to different use cases. Further usability testing of variants should be done in the future.


## Appendix



* Research Plan
* [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/clinical-decision-support/VA-CDS-data-visualization-patterns/patterns/charting-library/bar-graph/bar-chart-and-svv-conversation-guide.md)
* [Mural Notes](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1759859549063/cd85dc0acddccd70edbd0c8b602099151650ed59)
