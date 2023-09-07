# Standard Work - Product Bug Handling Process

### Change Log 
| Version | Author | Date | Changes |
| -----  | ------- | ------- | --------- |
| 1.0 | Adam Kasmier | 4/13/23 | Initial Creation  |
| 1.1 | Adam Kasmier | 5/12/23 | Details on engineering handling of 1 pt bug tickets; Inclusion of non-engineering in the process  |
| 1.2 | Adam Kasmier | 9/7/23 | Update details on how other teams are included to define solution prior to engineering fixing the bug |


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


### Roles and Responsibilities
| Role | responsibilities | 
| -----  | ------- | 
| Identified a Bug  | Anyone | 
| Bug Ticket Recreation  | QA | 
| Bug Ticket Scrub | QA| 
| Assign Bug Ticket to Epic | QA |
| Prioritize Bug Tickets in Epic  | Product | 
| Create spin off tickets to determine desired state | Product |
| Coordinate with Impacted teams  | Product | 
| Resolve bug ticket within pointed scope - completed ticket or updated size for real resolution and added artifacts/info to the ticket | Engineering |
| Retest and confirm bug fix  | QA | 
| Follow ticket to closed  | Product | 



### Steps 
Steps

**1.) A bug ticket is created**

**2.) QA scrubs the bug ticket (adds labels, ensures it includes applicable info (test user, steps to repeat, etc)**
- If bug ticket needs more information QA may assign the ticket to the ticket creator to get more details before it can progress 
- Scrubbed, once scrubbed adds estimate of 1 (amount of time engineering will spend on it initially)

**3.) QA adds scrubbed bug tickets to this [epic](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/5367) and moves it to Backlog Ready to Work column**
- Bug tickets that are associated with an ongoing and in development project will be linked to the project Epic and the Bug Epic 

**4.) Product reviews scrubbed bug tickets to determine prioritization and if there are any blockers / requirements needed**
- In the case the instance another team is needed to determine the solution a separate ticket will be created for that area for them to do their work
   - Example [3051](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/3051)
   - For UX ticket they will have in their name UX Review and also be tagged with Bug and UX labels for finding
   - Once UX Review tickets are done then the original bug ticket is updated with findings and ready for engineering work to be prioritized 

**5.) Product prioritizes bug tickets in this epic so that FE / BE can pull from when there is available capacity**

**6.) Bug tickets will have Health or Global team label and the PM on those teams should be reviewing those relevant to them**
- It will follow existing process of ticket grooming/sizing including QA test planning if deemed applicable 

**7.)Capacity needs may shift each quarter, this will be discussed for each quarterly planning and added to the SoS Sprint board**
- Product may also determine, when necessary, to add bug tickets and deprioritizing other work (ex bug ticket changes severity levels based on new data/findings; blocker for other work) 

**8.) Bug tickets are then worked in the Sprint** 
- Engineering works the ticket
- Typically they are 1 point Bugs unless they were previously reviewed in a past sprint using 1 point of effort 

**9.) If Engineering resolves the ticket within point capacity**
- QA test and validates work and confirms issue is no longer a bug 
    - Issues that arise will lead to other bug tickets that may be worked in existing sprint 
- Ticket is ready to be released

**10.) If ticket is not resolved within estimate, resolution will not happen that sprint** 
- Engineering will add artifacts / information to the ticket such as - their findings, solution to resolve, are other teams are needed,  if its resolvable, if not resolvable a work around, and other applicable info for when the ticket is considered in a future sprint 
- Engineer will update the ticket sizing to reflect their finding and anticipated solution 
- Engineering will move the ticket to the Backlog Ready to Work for Product to consider for prioritization in the future 

**11.)Product includes this ticket back in their Step 4 and repeat**




