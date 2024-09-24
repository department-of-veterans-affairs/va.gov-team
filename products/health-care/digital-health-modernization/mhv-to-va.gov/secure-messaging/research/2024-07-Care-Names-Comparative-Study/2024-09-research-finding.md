# **MHV on VA.gov, Secure Messaging, September 2024 Research Findings**

**Office of the CTO - Digital Experience (OCTO-DE)**

Date: 9/16/2024

Robyn Singleton, robyn.singleton@va.gov

# **Background**

Our project is part of the Digital Health Modernization strategy, which aims to create a centralized place for Veterans to access their health information. As part of this effort, My HealtheVet (MHV) is being moved to VA.gov. MHV provides Veterans with the ability to securely message and access previous messages with their healthcare teams. 

A well known pain point for Veterans in the current secure messaging experience lies in the ways in which healthcare providers and teams are named (see previous [discovery research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research/2022-11-triage-group-naming-discovery) and [feedback from MHV Coordinators](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/mhv-coordinator-feedback/quarterly-survey-results)). The Secure Messaging OCTO/OCC team created an updated experience to address this pain point; this experience will be vetted by MHV Coordinators and piloted in July/August. 

Prior to piloting the new experience, we want to confirm with Veterans that the updated experience outperforms the previous in relation to: 
- Task success
- Time to complete task
- Improved satisfaction
- Improve trust with VA digital health services

You can read more about the Digital Health Modernization strategy [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/product).

# **Research Goals**
The purpose of this research is to compare the old and new care team selection flows within the secure messaging experience to assess the degree to which two options for new experiences are easier, more efficient, and more intuitive to use for Veterans. 


# **Research Questions**
1. Which care team selection option enables Veterans to find the correct provider more quickly?
2. Which care team selection option do Veterans find to be more intuitive and less difficult to use?
3. Which care team selection option builds greater trust in the VA with Veterans?
4. Which care team selection option increases satisfactions amongst Veterans in the digital patient portal experience?  

# **Methodology**
### Unmoderated study: First-click testing with post-test questions
This unmoderated study consisted of participants completing three tasks with different images of care group names. We used Optimal Workshop's First-click Testing functionality to: 
- observe how often participants accurately identified a desired care group
- compare time to complete task across options
- assess participants' satisfaction and experience with the different care group options

# **Hypotheses and Conclusions**

_Hypothesis 1:_ A higher proportion of Veterans will select the incorrect care team in the old experience than either of the new experiences. 

  SOMEWHAT TRUE - 62% and 67% of participants successfully completed all tasks with both the Provider and Location prototypes respectively, compared with 32% of participants using the Classic prototype. However, when subjected to chi-square tests for statistical significance, only Task 1 showed significant differences between Classic and the other two prototypes (x2 = 28.278, p<.001). Pair-wise analysis showed a moderate affect for this differences: 
  
    - Provider vs. Classic: x2 = 17.990; p<.001, Cramers V = .364 -> moderate effect
    - Location vs. Classic: x2 = 19.720; p<.001, Cramers V = .375 -> moderate effect
    - Location vs. Provider: x2 = .019; p = .890 -> no significant differences​

_Hypothesis 2:_ The average time to complete tasks will be lower on either of the new experiences. 

  DEFINITELY TRUE - Time on task was significantly higher amongst participants using the Classic experience (p<.05). The difference was most pronounced on Tasks 1 and 3 (moderate effect) and least pronounced on Task 2 (small effect). No meaningful difference in time on task was observed between the Location and Provider prototypes. 

_Hypothesis 3:_ A higher proportion of Veterans will find either of the new experiences to be more intuitive and satisfying than the old experience. 

  SOMEWHAT TRUE - responses to post-task questions about the quality of the experience, perceived ease of use, and satisfaction with the respective prototypes indicated a higher rate of positive response for both Location and Provider prototypes compared with Classic prototype. The difference was statistically significant and represents a moderate to high effect size. There was no significant difference between Provider and Location responses. See [presentation slide deck](https://dvagov.sharepoint.com/sites/HealthApartment/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FHealthApartment%2FShared%20Documents%2FSecure%20Messaging%2FTriage%20Group%20Naming%2FResearch%2F2409%5FCare%20Names%20rebranding%20comparative%20study%20readout%2Epdf&parent=%2Fsites%2FHealthApartment%2FShared%20Documents%2FSecure%20Messaging%2FTriage%20Group%20Naming%2FResearch) for more detailed information.  

_Hypothesis 4:_ The old experience will produce higher rates of distrust in VA digital services than either of the new experiences. 

  NOT TRUE - differences in responses to the post-test question assessing trust in the VA to create user-friendly digital experiences were not statistically significant.

_Hypothesis 5:_ The "location first" new experience option will produce lower times to complete task, higher accuracy rates, higher satisfaction scores, and more positive feedback. 

  NOT TRUE - there were no significant differences in task success rates or post-test questions between Provider and Location prototypes.

# **Key Findings: Details**

The hypotheses-related findings comprise the key findings for this study. Please see the [presentation slide deck](https://dvagov.sharepoint.com/sites/HealthApartment/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FHealthApartment%2FShared%20Documents%2FSecure%20Messaging%2FTriage%20Group%20Naming%2FResearch%2F2409%5FCare%20Names%20rebranding%20comparative%20study%20readout%2Epdf&parent=%2Fsites%2FHealthApartment%2FShared%20Documents%2FSecure%20Messaging%2FTriage%20Group%20Naming%2FResearch) for more detailed results. 

**Additional key finding:** 
Amongst the cohort of Veterans who answered a post-test question asking them to indicate their preference between the Location and Provider prototypes (n=68), 29 (43%) preferred the Provider prototype and 39 (57%) preferred the Location prototype. 


# **Recommendations**

As there was no meaningful difference between the Location and Provider prototypes, the decision for which prototype to move forward with will be determined based on UX best practices. 

## **A11Y Recommendations**

None

# **Next Steps**

- Socialize research to teams and other stakeholders working on secure messaging experience on VA.gov and VAHB
- Implement revised prototype with X design in pilot

# **Further research needed**

# **Who we talked to**

We talked to  **208 participants.**

Audience segment:

- Veterans: 208 (all My HealtheVet users)
- Caregivers: 0
- Family members of a Veteran: 0

Gender: unknown

Devices used during study:

- Desktop: 0
- Tablet: 0
- Smart phone: 208
- Assistive Technology: unknown

Age: unkown

Education: unknown

Geographic location: unknown

Race: unknown

Disability and Assistive Technology (AT): unknown
