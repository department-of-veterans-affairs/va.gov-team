## Toggl Customer Support Tracking  

### Purpose
- To enable the Analytics & Insights team to track time + efforts spent supporting customer support requests over time, we would like 
to standardize the way we track our customer support 

### Background
- Toggl is the current solution Empirical Path contractors utilize for time tracking on the VSP contract
- Toggl has **three fields** to classify for time tracking:<br>
      - _Description_: Free-text field description of work performed<br>
      - _Project_: Pre-determine field to identify the project<br>
      - _Tag_: Customizable field to provide additional context / categorization to work performed
 - Toggl includes a start + stop button to signal time spent
 
 
 ### Customer Support Time Tracking Process
 - Beginning as early as Sprint 51, team members executing customer support should begin tracking their time according to the standards below: 
     - _Description_: **ALWAYS** precede your description with the GH issue number of work performed if there is one applicable, if not consider creating one, i.e "15974 - Round 1 QA Testing " 
     - _Project_: For simplicity and consistency, track all time to the existing "Veteran-Facing Services Program (VSP) - Ongoing Support" project
     - _Tag_: Assign **1** tag that represents most closely to actual work performed, this tag should align closely with whats documented in the description, for a full list see table below
          - _If having performed several pieces of work, please retroactively do your best to itemize this work to 1 specific tag for each type of work performed_
     
     
     
 ### Tags and Definitions
     
 | Tag Title | When To Use / Definition | 
 | -- | -- | 
 Review Product Documentation + KPIs | _When reading through a team's product documentation to understand their product + KPIs more closely_ 
Collab Cycle / VFS Team Member(s) Meeting | _When having met with VFS team members for a product collab cycle meeting or 1-off meeting_ <br> _This can also be used for tracking office hours meeting_
Sprint Meeting (Standup, Grooming, Planning, Retro) | _When having done a standard sprint meeting including: Standup/Slack up, Grooming, Planning, Sprint Review, Retro_
Data Layer / GTM QA | _When having performed QA testing for either the data layer or GTM tagging_ 
Dashboard QA | _When having QAed a DOMO dashboard_ 
Data Layer / Requirements Documentation | _When having documented the data layer specification or documentation of other tracking requirements_
GTM Tagging / Configurations | _When having done the hands-on configuration of GTM tagging_
GA Implementation / Configuration | _When having done the hands-on configuration of GA Implementation / Configuration_ 
Vets-website/Component Library FE code changes | _When having made changes to `vets-website` front end for analytics tracking (Brian)_
Data Analysis & Reporting | _When having performed data analysis and/or fulfilling or responding to data interpretation questions_ 
GTM / GA Debugging | _When having debugged a piece of analytics tracking not working as expected_
Account Access/Offboarding  | _When having provisioned and/or removed Google Analytics and/or DOMO account access_
Data Visualization and Dashboarding | _When having done any GA and/or DOMO dashboarding work of creating widgets, charts & visualizations_
GCP | _When having done any work with Google Cloud Platform (_mostly BigQuery_)_
Documentation | _When having done or made updates to GH and/or Confluence documentation_ 
Misc Quick Update/Comment | **_ONLY USE WHEN NO OTHER TAG ABOVE IS APPLICABLE_** <br><br>_For misc , quick correspondence with VFS or VSP team members_


### Support Measurement / Reporting
- Please refer to [this dataset](https://va-gov.domo.com/kpis/details/811036779) for a complete database of time spent 
   - See column `tags_tags` for the tag representing the type of work performed and `gh_issue_number` for the specific ticket 
