# Search & Discovery Grooming

<details><summary>About this meeting</summary>

- Reoccurring meeting: BiWeekly - Thursdays 11AM EST
- Meeting owner: Denise Coveyduc (PM-Search & Discovery)
- Facilitator: Denise Coveyduc
- Attendees: John Hashimoto (VAPO), Sam Suddath (FE Engineer), Megan Gayle (Designer/Researcher)
- Standing agenda: 
  - Issue Grooming
    - Add/Remove Backlog Items
    - Change priority of items  
    - Clarify/Change Acceptance Criteria 
  - Update status notes
  - Discuss topics (as needed) to gain/improve clarity 

</details>

## April 1 , 2021

***DISCUSSION TOPICS:*** 

 - [ ] Current Deployment Safeguards + Impact
 - [ ] Typeahead Suggestion List Status Update + Next Steps
 - [ ] Search:gov 4/5 Meeting Agenda 
 - [ ] Sitemap Next Steps (Metalsmith Plug in + Non-Canonical URLs)
 - [ ] Design Iterations - Results Page 

***GROOMING***
 - [ ] [POC2] Run 4/10-4/25 [#22497](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22497)
 - [ ] [Results Page Redesign] Final design iterations [#22498](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22498)
 - [ ] [Results Page Redesign] Depo Design Review  [#22500](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22500)
 - [ ] [Results Page Redesign] Dev Exploration to optimize/rebuild search [#22499](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22499)
 - [ ] [Click Tracking for Best Bets] Implementation [#22131](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22131)
 - [ ] [Analytics] Acquire GA Reports to focus on Global Search [#22501](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22501)

 ***NEXT STEPS/ACTIONS:***
 - TBD


 ***INITIATIVE STATUS***
 - *After Grooming PM will add a snapshot of our current initiative status*

## March 18, 2021

***DISCUSSION TOPICS:*** 

 - [x] Discuss Threshold + Deprecate guidance for Search.gov [#21325](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21325)
 - [x] Review status of Typeahead Suggestions List and Next Steps [#21316](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21316)
 - [x] Discuss next steps for Acronym Clarity [#19371](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19371)
 - [x] Initiative Status Review (Identifying new work items and actions as we go)

***NEW TASKS:***  [Work that needs to be tracked in GH]
 - TBD

 ***NEXT STEPS/ACTIONS:*** [Work that needs to be done]
 - Set up a meeting with search.gov How easy is it to change the threshold/deprecate dates? Assuming it is easy make the suggestions of 40/days/deprecate 15 days. Ask them not to make any adjustments during POC2 Timeframe. Can they clarify how suggestions are matched (alphabetically/popularity) why are they trying to improve the feeling of recency in government space? 


 ***INITIATIVE STATUS***
| Initiative            | S43 (3/10-3/23)                                                                                    | Next Steps                                                                                                                                        |
|-----------------------|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Acronym Clarity       | On Hold                                                                                            | Review 2020 Search terms to determine how frequent users are searching for acronyms > Conduct further research (talk to Cindy) > Dev Explorations |
| Typeahead POC 2       | Define strategy & create list of terms to suggestion database. Begin Validating terms with results | Review list with content team > Send list to search.gov> test implementation once added and reset analytics clock                                 |
| Results Page Redesign | Design Exploration                                                                                 | Team Review + Discussion > Design iteration (if needed) >Collab Cycle Kickoff > Development to implement                                          |
| XML Sitemap           | Knowledge transfer from PW (3/18 meeting) re: #20170                                               | Review XML Sitemap Tickets that exist in GH Today > Begin SEO Audit                                                                               |
| Click Tracking        | (Stretch) Explore Best Bet Implementation                                                          | Exploration will define next steps and what needs to happen                                                                                       |
| Typeahead 1.0         | On Hold - awaiting POC2 completion                                                                 | Awaiting POC2 Final Review > Launch to 100% users> Notify stakeholders                                                                            |

 
## March 3, 2021
***DISCUSSION TOPICS:*** 

 - [x] Typeahead Plans + [Strategy](https://docs.google.com/spreadsheets/d/1GQMbACxz4y6nPuh7erJJx605fqoTVxxuquX_W3Oa5PM/edit#gid=1997340956) to add suggestions 
 - [x] Onsite KPI Dashboard Discussion (Megan)
 - [x] Click Tracking Data Review (John)
 - [ ] Capture New Tasks/Issues - Bumped to next call due to time
 - [x] Staging Review Prep - Today March 4 at 1pm  [Collectively we decided to cancel


 ***INITIATIVE STATUS***
 
|**Initiative**         |**Status Notes + Next Steps**         |
|-----------------------|------------------------------|
|Typeahead POC            |Final  Dashboard revisions are complete 3/3 > Data Review may begin 3/4 |
|Typeahead 1.0             |Collab Staging Review 3/3 > Define + Add canned suggestions > extend to 100% of users  |
|UX Discovery            |Integrate findings into roadmap > PO Readout 3/ 4|
|Spelling Enhancement             |"Did you mean?" implementation moved to icebox until search.gov changes approach. No longer a focus for search and discovery team |
|Acronym Clarity             |Exploring acronyms > Defining strategy and design> Create DB Reader Tool > connect reader to search suggestions|
|Results Page Redesign| Design Intent Exploration including right rail and description/metadata info from search.gov to improve result descriptions


 ***NEW TASKS***
 - Click tracking as enhancement to Onsite Dashboard.
 - Accessibility Review Considerations related to issue [#20719](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20719)
 - SEO Audit  including exploration of Google Console Tools
 - 


 ***NEXT STEPS/ACTIONS:***
 - Notify Search.gov of plans + timeline given shift (John)
 - Meet with analytics to address number of queries that produce zero results (Sam)
 - Establish POC2 Issue and add Typeahead Next Steps(see below) to GH issue for tracking  (Denise)

Typeahead Next Steps (WIP)
- March 2 - suggestions only appear for query conducted within past 30 days or hardcoded
- March 4 - Determine strategy to establish list of canned suggestions to be added
- March 16 - Fix analytics taxonomy changes to address number of queries that produce zero results  #20889
- TBD - Deliver list of terms to be added to search.gov
- TBD - Search.gov to add new terms to DB
- TBD- Analytics can change the date forward to start the visualizations at the date we set as the beginning of our POC 
- TBD - POC #2 run 2 - 4 weeks (25% of VA.gov users)
- TBD - Assess POC2 Data
- Move to product API from search.gov
- May - Launch to 100% users




## February 18, 2021
***DISCUSSION TOPICS:*** 

 - [ ] Review "Needs Grooming" issues
 - [ ]  Discuss Spelling Enhancement  [#19190](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19190)
 - [ ] Review Initiative Next Steps
 - [ ]  Expand VA Acronym Clarity Requirements  [#19371](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19371)


 ***INITIATIVE STATUS***
 
|**Initiative**         |**Status Notes + Next Steps**         |
|-----------------------|------------------------------|
|Typeahead POC            |Awaiting Dashboard Review Fri 2/19 > Data Review Mon Feb 22 |
|UX Discovery            |Readout scheduled 2/22 >Integrate findings into roadmap |
|Typeahead 1.0             |ordering suggestions + Styling improvements > extend to 100% of users |
|Spelling Enhancement             |At Risk: Awaiting discussion with search.gov to validate implementation |
|Acronym Clarity             |Create DB Reader Tool > connect reader to search suggestions|
|Results Page Redesign| Informed by UX Discovery Outcomes> Need Qs answered from VA Stakeholders + search.gov


 ***NEXT STEPS/ACTIONS:***
 - Create an exploration issue for right rail - Public Websites Team about what controls and requirements we have regarding the right rail 
 - Reach out to Jen Lee to learn more about VA 's approach (John)
 - Collect analytics for # of clicks on right rail links (Denise)

## February 4, 2021

***DISCUSSION TOPICS:***
 - KPI Prioritization
 - Click Tracking Epic [#16444](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16444)
 - Typeahead POC [#8896](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8896)
 - Spelling Suggestion Improvement [#19190](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19190)
 - [Product Discovery] COVID-19 Vaccine Finder - VA Data Distribution [#19009](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19009)
 
 
 ***NEXT STEPS/ACTIONS:***
 - Ask analytics if POC reports are as accurate as DOMO will be (Denise)
 - Send list of potential enhancements from [#18734](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18734)(John)
 - Collab Cycle: Post Launch Check In [#8896](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8896) (Denise)
 - Organic traffic acquisition metric – when/where should we collect those? (Denise Sync with Analytics team)
 - Update analytics tickets for KPI dashboard (Denise)
 - Click Tracking- ask search.gov for a download of all click tracking data. (John)
 - Ask analytics team if we can collect CTR from search.gov for DOMO Dashboard  (Denise)
