# DBEX-Carbs Sprint 49 Goals	
02/12/2025 - 02/25/2025

## Engineering
  - Alison Jones
    - 0781 Paper Sync
      - Scope change -Behavior list [3.12] destructive action modal _(blocked by the spike for how to remove persitent data)_
      - Scope change -Behavior combat intro [3.11] destructive action modal _(blocked by the spike for how to remove persitent data)_
      - Behavioral description pages content
      - Behavioral summary content
   
  - Nathan Burgess
    - 0781 Paper Sync 
      - 0781 Upload a document (no password)
      - 0781 Upload a document (with password)
      - Modal - delete an uploaded document
    - OOO 02/13 - 02/15
  
  - JR
    - 0781 Paper Sync
      - 0781 Choice page content revised
      - Evidence orientation page
      - Scope change - Types of medical providers
      - Scope change - Supporting evidence document types
         
 - Scott Regenthal
    - 0781 paper sync
      -  Scope change - Traumatic events Official Report (no MST Events) [3.9] 
      -  Scope change - Traumatic events Official Report (with MST Events) [3.9]
      -  Scope change - Traumatic events Official Report are you sure modal _(blocked by the spike for how to remove persitent data)_
      -  Scope change - Limiting the number of events message
      -  Update JSON schema for events official reports
      -  Scope change - Deleting an event message (when there is only one event)

- Kyle Soskin
  - Transition work
  - 0781 PS 
    - Spike - removing data after a selection destructive action confirmation alerts
    - Scope change - yes/no prompts for receiving treatment at VA facility 	
    - Scope change - yes/no prompts for receiving treatment at private facility	
    - Scope change - update file list on evidence upload page	(_currently blocked, waiting on OCTO to confirm a requirement_)
  - OOO 02/21 and 02/24

## Research and Design
[Sprint 49 Goals](https://dsva.slack.com/docs/T03FECE8V/F07N6EH4EUE)

_Onboarding of Qian is blocking the prototype work as she needs write access to Figma and her request has not been approved yet_

## Sumary
Reminder: Monday is a holiday 

Upon reviewing the scope of the 0781 Paper Sync initiative, it was proposed that the team should explore options for modifying the existing minimal viable product (MVP). The team did some revisions to the designs and flow and came up with a solution that we'll work on this sprint. 
- New page capturing provider types the claimant went to receive treatment for their traumatic events and behavioral changes to be included as a part of section 3 mental health statement to capture responses for question 12 on the 0781.
- [ 4.11 0781 Supporting evidence document types ] to be included as a part of section 3 mental health statement to capture responses for question 13b on VA Form 21-0781 (this page will no longer generate individual upload pages based on selections entered).
- Additional conditionally displayed prompt about whether or not the claimant received treatment at the provider relating to traumatic events or behavioral changes to be added to existing VA + Non-VA provider detail pages.
        * Logic tied to existing pages to direct which forms are populated with provider information.

This sprint we hope to wrap up Traumtic Events and Behavioral changes if we are able to solution for the persistent data after a selection destructive action. The new modal to opt out or for changing a user's mind once they have entered data and then removing that data is not something that has been done before in 526. All the actions on the modals require us to be able to solution that first. 

In addition to the Traumatic Events and Behavioral Changes, the 0781 upload will be implemented this sprint. It was decided last sprint by OCTO that the team can move forward with using the V1 component (vs. V3) to get this done as there were too many unknowns on V3 and would be a much larger scope of work. 

This is the month that the Carbs team has to monitor Watch Officer alerts. If any issues arise the team will have to put time aside to work those. 

Due to the focus to get 0781 to production, the team may not be able to support remediation, zero silent failures, or other production issues. If we need to take on that work, we may end up moving more 0781 out further. 

[Roadmap for Disability Benefits (DBEX) Team 2 (Carbs)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717458460532/5a74ece0ca694a9e6c85b3a1130a8c7b8dabf123?wid=0-1728398176278)

[DBEX Carbs 2024 VA Disability 526 - Current sprint board](https://github.com/orgs/department-of-veterans-affairs/projects/1263/views/9)

## Notes
- We are not prioritizing any remediation work at this time. 
- OCTO has not prioritized the Disability apps' compliance with the Front-end deployment pipeline changes for vets-website (Shedule to be due Feb 3, 2025) - no word if there will be any impacts to us if we don't have it done by Monday. 
