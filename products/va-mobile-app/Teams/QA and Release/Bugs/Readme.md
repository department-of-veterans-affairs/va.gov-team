# Standard Work - Product Bug Handling Process

### Change Log 
| Version | Author | Date | Changes |
| -----  | ------- | ------- | --------- |
| 1.0 | Adam Kasmier | 4/13/23 | Initial Creation  |
| 1.1 | Adam Kasmier | 5/12/23 | Details on engineering handling of 1 pt bug tickets; Inclusion of non-engineering in the process  |
| 1.2 | Adam Kasmier | 9/7/23 | Update details on how other teams are included to define solution prior to engineering fixing the bug |
| 1.3 | Adam Kasmier | 10/27/23 | Upcoming Org changes, 3rd Party Bugs, QA process change to move the tickets to Backlog Ready to Work |
| 1.4 | Adam Kasmier | 11/21/23 | Process changing to where individual teams will manage their backlog of relevant bugs and prioritze the work accordingly vs one person for all over mobile. |

### Overview:

Intent of this document is to capture how Product handles Bug tickets after QA “scrubs” the Bug ticket.  QA creates Bug tickets and will review to verify applicable and necessary information is on them for engineering to review, this is called scrubbed. 

Once scrubbed it is then the responsibility of Product to prioritize the bug tickets to be worked in a Sprint. Bugs related to Health team items will be worked by the Health team while bugs related to Global team items will be worked by the Global team. 

Intent is to have a single place to track, monitor, and prioritize bug tickets which Product 


### Notes
- Github Epic  [5367](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/5367)
- Started Q2 2023 - capacity and tracking changed in Q3
- Bugs associated with ongoing development of a project / feature will be included in the Sprint as part of that project's capacity thus not treated the same here. Bug ticket will be associated with project epic and the bug epic
- When bugs are created they are assigned 1 point, the purpose is for engineering to spend 1 point looking into it 
   - After that 1 point if it is not resolved then engineering will add an artifact/info to the ticket and resize it based on their finding. Ticket will then be reassessed for a future sprint. Example [4755](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/4755)
- Some bugs may be very complicated and could lead to piling up complicated bugs 
- Bugs should be prioritized with both effort and value in mind 
- Bug ticket comments should be updated as work is completed
- Some bugs will need UX to determine desired state
  - A separate bug ticket just for UX will be spun up with "UX Review" in title and tagged with Bug and UX - Example ticket [6490](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6490)
  - Capping initial look for UX at 3 points per convo with UX Discipline Lead
  - [Board with filter to find these ticket ](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/board?labels=bug,ux)
- Note that Engineering Manager may bypass this process has their discretion - doing so then will be managed by engineering manager not not Bug PM


### Upcoming Changes
 - As of Sprint 86 (12/6) the individual mobile teams (API, Design System, Health/Benefits, Global, and QA/Release) will manage their own backlog and prioritization of relevant bug tickets 

### Management based on severity of tickets 
- Sev - 1 - drop everything work now
- Sev - 2 - picked up current or next sprint
    - If its part of a new launch it must be resolved / closed before feature is launch
    - If part of an existing feature worked next sprint
- Sev-3 - worked whenever teams prioritize work


### Roles and Responsibilities
| Role | responsibilities | 
| -----  | ------- | 
| Identified a Bug  | Anyone | 
| Bug Ticket Recreation  | QA | 
| Bug Ticket Scrub Label | QA| 
| Assign Bug Ticket to Bug Epic | QA |
| Label Bug Ticket with appropriate Mobile Team Label | QA | 
| Prioritize Bug Tickets in Epic  | Product of individual team | 
| Create spin off tickets to determine desired state | Product of individual team |
| Coordinate with Impacted teams  | Product of individual team | 
| Resolve bug ticket within pointed scope - completed ticket or updated size for real resolution and added artifacts/info to the ticket | Product of individual team |
| Retest and confirm bug fix  | Product of individual team | 
| Follow ticket to closed  | Product | 



### Steps 

**1.) A bug ticket is created by anyone**

**2.) QA scrubs the bug ticket (adds labels, ensures it includes applicable info (test user, steps to repeat, etc)**
- If bug ticket needs more information QA may assign the ticket to the ticket creator or appropriate Mobile team to get more details before it can progress 
- Once scrubbed successfuly adds estimate of 1 (amount of time engineering will spend on it initially) and 
    - Add Scrub label to the ticket
    - Add appropriate team label to the ticket
    - Add ticket to the Bug [epic](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/5367)
    - Move ticket to Backlog Ready to Work Column if ready
    - If its blocked by more information, desired state is needed move it to Blocked column 
- If its a third party bug ticket (bug ticket that has been opened with another team - label will be bug but not tied to the bug epic and managed exclusive by engineering ex [7109](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7109)

**3.) Product Managers on the Specialized Mobile Teams will routinely review their bug backlog and handle any blockers / requirements / desired state work**
- In the case the instance another team is needed to determine the solution a separate ticket will be created for that area for them to do their work and the PM will need to coordinate with appropriate teams for resources / capacity / priority to complete 
   - Example [3051](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/3051)
   - For UX ticket they will have in their name UX Review and also be tagged with Bug and UX labels for finding
   - Once UX Review tickets are done then the original bug ticket is updated with findings and ready for engineering work to be prioritized 
- PMs can find their team's bug tickets by going to [Zenhub board](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/board?labels=bug,health) going to Labels and selecting their team's label and the bug label (Example for Health Team's Bugs)
     -  <img width="132" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/f0377f4d-7494-4d41-a1f1-558eb02c3e71">


**4.) Product Managers on the Specialized Mobile Team prioritizes their own relevant bug tickets within their team as needed**
- During prioritization PM on Mobile teams will need to coordinate with QA, if QA resources are needed to validate, if QA has capacity to test
- If PM thinks that the ticket should be done by another team then its that PM's responsilibity to have that convo; PM will not go back to QA to reassess owner
- [Gidelines for Severity Bugs prioritization](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/Teams/QA%20and%20Release/Bugs/Bug%20Severity.md) 
    - Sev - 1 - drop everything work it now
    - Sev - 2 - ticket picked up current or next sprint
          - If its part of a new launch it must be closed before it moves to production
          - If part of an existing feature ticket is prioritized next sprint
    - Sev-3 - worked whenever teams prioritize work



**5.) Bug tickets are then worked in the Sprint** 

**6a.) If Engineering resolves the ticket within point capacity**
- QA test and validates work and confirms issue is no longer a bug 
    - Issues that arise will lead to other bug tickets that may be worked in existing sprint 
- Ticket is ready to be released

**6b.) If ticket is not resolved within estimate, resolution will not happen that sprint** 
- Engineering will add artifacts / information to the ticket such as - their findings, solution to resolve, are other teams are needed,  if its resolvable, if not resolvable a work around, and other applicable info for when the ticket is considered in a future sprint 
- Engineer will update the ticket sizing to reflect their finding and anticipated solution 
- Engineering will move the ticket to the Backlog Ready to Work for Product to consider for prioritization in the future 

**7.)Product includes this ticket back in their Step 4 and repeat**

