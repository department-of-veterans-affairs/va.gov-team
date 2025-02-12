# DBEX-Carbs Sprint 48 Goals	
01/29/2025 - 02/11/2025

## Engineering
  - Alison Jones
    - 0781 Paper Sync
      - Behavior changes description and summary skeleton
      - Scope change -Behavior changes continue action without a selection	
  
  - Nathan Burgess
    - 0781 Paper Sync 
      - Hide legacy PTSD flow when paper sync form flipper is enabled
      - Update trigger for entering new 0781 flow	
  
  - JR
    - 0781 Paper Sync
      - Scope change work to remove additional forms, screener, and correct the forms chapter
      - Evidence orientation page 
         
 - Scott Regenthal
    - 0781 paper sync
      -  Refactor: Move eventTypes attribute to top-level in formData structure
      -  Update JSON schema and service for revised event data structure
      -  Add unit tests for validation functions
      -  Stretch goals - can't start yet 
          - Refactor: Split up and rename "behaviors" attribute	- relies on the work for the behavioral changes to be done first which is scheduled this sprint
          - Limiting the number of events message - the functionality is done, we are looking at adding a custom message to make it better (waiting on HCD)
          - Deleting an event message (when there is only one event)	- this is VFF bug that we are not sure what to do with it yet

- Kyle Soskin
  - Transition work
  - Spike - 4142 with more than 5 non-VA locations - this is needed to help VBA decision on the number of non-VA locations that we allow
  - 0781 PS
    - 0781 and evidence upload soltuion and planning 

## Research and Design
[Sprint 48 Goals](https://dsva.slack.com/docs/T03FECE8V/F07N6EH4EUE?focus_section_id=temp:C:GJLc22dc09332794b5db34ecc6b0)

## Sumary
The team has discovered a few situations where the the list and loop for mulitiple pages has some issues that need addressesing. 
The team is working hard to come to a conclusion on them so that we can delvier soltuions as soon as possible. 
We have tickets for design and engineering once we get past the review stage on them we hope to continue to move forward with planning. 
For this sprint the team is focused on getting more done on the features that we have already started. 
  - Traumatic events
  - Behavior changes
  - 0781 Paper Sync flipper

While working on the changes for the additional forms chapter the team realized that the original solution (proposed by an engineer no longer on the team) proposed a new risk. The team is working on a new soltuion and hope to have this completed early in the sprint. 
Along with that the tean will continue to work on descoping the additional forms. 

Last sprint the team did a lot of digging into the 0781 upload feature that will use the new V3 component. Since there are with other teams working on this same componenet the team is working with them to determine the next actions to deliver this feature with the fewest risks. 
Kyle will be working with the other teams to hash out the details and hopefully we'll be able to continue our work to deliver the 0781 upload feature very soon. 
~ See [slack](https://dsva.slack.com/archives/C04KW0B46N5/p1738078571142969?thread_ts=1737665789.330649&cid=C04KW0B46N5)~ 

The team has started work for the transition off period by looking at mural boards, Github, and Datadog. This aligns with OCTO's goal for reducing the risk of not having the proper documentation for any team hand-offs at the end of the contract.
Next steps will be to sync with Team 1 on naming conventions and how we manage Github without breaking links. 

This is the month that the Carbs team has to monitor Watch Officer alerts. If any issues arise the team will have to put time aside to work those. 

The remediation team is looking for help in supporting their efforts. There is no planned work at this time, but it may come up during the sprint to support them. 

[Roadmap for Disability Benefits (DBEX) Team 2 (Carbs)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717458460532/5a74ece0ca694a9e6c85b3a1130a8c7b8dabf123?wid=0-1728398176278)

[DBEX Carbs 2024 VA Disability 526 - Current sprint board](https://github.com/orgs/department-of-veterans-affairs/projects/1263/views/9)

## Notes
- We are not prioritizing any remediation work at this time, just quick support as needed to keep them from being blocked. 
- OCTO has not prioritized the Disability apps' compliance with the Front-end deployment pipeline changes for vets-website (Shedule to be due Feb 3, 2025) - no word if there will be any impacts to us if we don't have it done by Monday. 
