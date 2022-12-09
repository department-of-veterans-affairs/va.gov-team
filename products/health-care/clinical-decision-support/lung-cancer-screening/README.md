# Lung Cancer Screening Initiative
LCSP v2 is a tool for Lung Cancer Screening coordinators across the VA.

# About the Product
## North Star Goal 
•	Create lung cancer survivors
LCSPv2 Value Proposition
•	Transition bridge LCSPv2 provides a "transition bridge" while VISNs and LPOP hub and spoke sites prepare for Cerner deployment
•	A Common database in LCSPv2 maintains accumulated data consistent for research cohorts (clinical treatment trials) 
•	Scalability and performance based on cloud-native technology helps eliminate outage hiccups so that the LCS program can focus on its mission 
•	Traveling Veterans are fully supported. When half the country is on Cerner, there will be many Veterans that had their initial screen performed in Legacy 

## User Problem Statement
Screening is a high touchpoint experience where a Lung Cancer Screening Coordinator must shepherd the patient through the multi-year process.  Implementing a recurring annual screening program to monitor lung cancer nodules is a heavy burden that requires time and organization.  As a result, several tools were built to track and manage the influx of new patients.  The tools were effective (some more than others) but ultimately the disparate tools made it difficult to share information across VAMCs and put patient safety at risk.  Example: if a patient has a radiology procedure in one VAMC but is planning to receive lung cancer screening at another in the same year there’s no guarantee that the information will be shared between VAMCs.

## MVP Product Requirements 

1. The fundamental functionality of the LCSPv2 tool is the ability to track patients as they move through the Lung Cancer Screening lifecycle. Coordinators group patients into several cohort groups (annual screening, nodule tracking, etc) and they use these cohorts to determine the next steps for these patients. The movement of the cohort happens after a patient has received an LDCT and the coordinator has processed the radiological report. 
2. No charting capabilities: Tracking: The ability for coordinators to make sense of where their LCSP patients are, understand their next steps and see at a high level where everyone stands. Understanding what has not happened with the patient (they didn’t do what you told them what to do. Overdue) 
Charting: The clinical task of adding pertinent information to a patient’s chart that is stored in the EHR and accessed by all of the providers involved in that patient’s care 
3. Tracking tool: Care management: Includes charting, tracking, and all aspects of the care journey for a patient who is involved in the program. Scheduling their next visits, reading their radiology reports, sharing information between providers, etc. 
Tracking tool: Allows coordinators to see their patients at a high level and understand where they stand in the journey of the program, but all case management remains inside of the EHR, for now. Equitable identification of participants. 
4. Small, controlled rollout: As we continue to iterate on the V2 tool, we have a unique opportunity to rollout a pilot program to a handful of sites. This will allow us to gather feedback from a real-life implementation of our tool, while also providing the coordinators at these sites with a solution where they otherwise would not have access to one.


## About the Team
### GitHub/ZenHub/Teams/Jira
GitHub repo = [https://github.com/department-of-veterans-affairs/lung-cancer-screen-and-track](https://github.com/department-of-veterans-affairs/lung-cancer-screen-and-track)
ZenHub board - [link to this if/when you have one]
[Link to Teams folder if applicable](https://github.com/department-of-veterans-affairs/lung-cancer-screen-and-track): 
•[Link to CDSP Teams folder](https://teams.microsoft.com/l/team/19%3atSpgDLtfwJshsi1OeS5A3MUYyB9HZ02DszYKBZMNsMY1%40thread.tacv2/conversations?groupId=1e94a8be-65b0-4431-9924-16329ebe3f7d&tenantId=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)

Link to Jira if applicable: 


### Slack Channels
- List & link to the slack channels you use when you have them.
•	#lcs-public
•	#cds-tools-team

### Team Members
OCTO-DE/DEPO:
- Shane Elliot

Project Management:
- Adrian Carroll (Coforma)

Product Management:
- Laureen Kattan (Coforma)

Design & Research:
- James Hobbs (Coforma, Design lead)
- Elisabeth Chin (Coforma) 
- Ayangbe Mannen (Coforma) 

Engineering:
- Nana Arkorful (Coforma, Dev lead)
- Omar Caraveo (Coforma) 
- Talia Hicks (Coforma)
- Steve Gorospe (Coforma)

### What We're Working On
Status
Roadmap
•	Proof of concept beta at Cerner sites ( Walla Walla and Columbus)
•	Initial focus on LDCT results tracking and follow-up assignments (Annual, Diagnostic, Nodule Tracking)
•	Scale to more sites
•	Iterative refinement to improve workflow efficiency in support of the systematic and equitable LCS program objectives

## Dual Track Strategy 
Given the ongoing roadblocks on the Cerner front, it’s a unique opportunity to maximize our efficiency by splitting the focus and proceeding with V2 in a dual track strategy  
What does “dual track mean?” 
LCSPv2 remains Cerner-first. This is our mandate, as we are the transition bridge for sites as they lose existing functionality when transitioning to Cerner  
LCSPv2 will begin to explore options on the VistA front to build a more robust tool as a proof of concept/with limited pilot usage  
LCSPv2 would not actively seek to replace V1 at any sites at this time 

Shared Objectives, Differing Initiatives 

While we are pursuing a dual track strategy, at the end of the day, our high level goals and objectives are the same regardless of the EHR. 
What might start to look a little different is the how of how we will get there. 

## Product Objectives

1. Drive towards data driven decisions 
2. Evolve from a tracking app into a full care management tool 
3. Design and create EHR-agnostic tracking solutions
4. Support the greater LCSP program success 
5. Make the information easily digestible


### Product Documentation
- Link to Roadmap: Current roadmap
- Link to Objectives & Key Results: 
- Link to Product Guide: 

### Who We Work With

VA Stakeholders & their roles: 
National Lung Cancer Screening Platform (NLCSP) Leadership:
- Dr. Jeffery Honeycutt, Chief of Radiology & Chief of Informatics at Lexington VAMC
- Dr. Chris Slatore, COS – HSCD – Specialty Clinics at Portland VAMC
- Angela Fabbrini, Program Manager for NLCSP
- Amber Liang, Associate Director for NLCSP
