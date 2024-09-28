# Initiative outline: Updates to My VA Health Care in support of MHV on VA.gov Migration

**Last updated:** December 19, 2023 - added a note to MHV link project

### Communications

- **GitHub Label**: authenticated-exp; my-va-dashboard
- **Slack channel**: accountexp-authexp
- **Development Epic:** [#62258](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62258)

### Roles

[Please see the My VA product outline for the current My VA team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#roles).

### Table of Contents

- [Overview](#overview)
- [Projects](#projects)

## Overview
In support of the MHV on VA.gov migration, we'll need to make updates to the Health Care section on My VA. This work will come in phases and various iterations and released in alignment with the phases outlined by the MHV migration initiative.

## Projects

### Updates to appointment links and Cerner alert

<details>  <summary>Project Details</summary> 

### Overview   
   Updates to the "schedule and manage your appointments" links and the Cerner alert are in support of phase 1B of the migration specifically around appointment handling. More about this phase 1B in development epic: #[57666](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57666).

### Documentation
- [Frontend documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/my-va-small-initiatives/my-va-support-of-MHV-on-va.gov-migration/FE-documentation/my-va-phase-1b-FE-documentation.md)

### Key Dates
   - August 2023: Development (phase 1B)
   - September 2023: Released link and cerner updates

### Screenshots
   #### Before
   ![Health care cerner alert figure 39](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/804516d1-37b2-48ea-a81b-19192c9e0f29)

   #### After
   ![Screenshot 2023-10-31 at 1 13 05 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/c20d9495-67ef-42af-ba57-a3047c233427)

      
 </details>  

### Linking to MHV from My VA + simplifying the Cerner experience

<details>  <summary>Project Details</summary>
 
### Overview
**Note: as of December 8, 2023, we were asked to put this work on hold until all MHV health tools were available to all users on VA.gov**

The health wayfinding study from earlier in 2023 showed that some folks had a hard time finding/navigating to the new MHV landing page from My VA, and therefore had a hard time finding additional health information not shown on My VA.

We'll be adding some form of a "view all" link (content and mechanism tbd) to the Health Care section on My VA which will navigate users to the new MHV landing page on va.gov. We'll also be exploring this concept of "view all/more" acroess the other benefits on My VA to make sure we are making the experience as consistent as possible. 

Specifically for the health care section, once we add this link, we'll monitor the existing secondary links we currently display on My VA to see if engagement on those declines. This would indicate that they aren't needed and users are finding what they need from the link that navigates them to the MHV landing page. Additionally, as part of if this effort, we'll be simplyfing the Cerner user experience by eliminating the "Cerner alert" and instead encouraging those users to visit the MHV landing page and health tools from there.

### Measuring Success

#### Objective: Streamline a user's navigation from My VA to the new MHV landing page from within the health care section on My VA

#### Hypothesis 1: Users prefer to execute health care related tasks and action items from the MHV landing page versus the links provided on My VA.

**Key Result: We see a decline in engagement on the health care secondary links on My VA** (_within margin as determined by average fluctuation prior to launch_) 

|KPI|Baseline: <br />4 weeks pre-launch <br />(10/30/23 - 11/5/23)|Baseline: <br />3 weeks pre-launch <br />(11/6/23 - 11/12/23)|Baseline: <br />2 weeks pre-launch <br />(11/13/23- 11/19/23)|Baseline: <br />1 week pre-launch <br />(11/20/23 - 11/26/23)| Week 1 post-launch<br />(mm/dd/yy - mm/dd/yy)| Week 2 post-launch<br />(mm/dd/yy - mm/dd/yy)| Week 3 post-launch<br />(mm/dd/yy - mm/dd/yy)| Week 4 post-launch<br />(mm/dd/yy - mm/dd/yy)|
|------------------------------------------------------------------------------|------------------|---------------|---------------|-------------|---|---|---|---|
| Engagement with "Go to your inbox" link                                      |     40,417       |    37,238     |    48,019     |    34,101   |   |   |   |   |      
| Engagement with "Schedule and manage your appointments" link                 |     26,570       |    24,821     |    28,295     |    19,924   |   |   |   |   |   
| Engagement with "Refill and track your prescriptions" link                   |     22,322       |    21,896     |    25,577     |    19,398   |   |   |   |   |
| Engagement with "Request travel reimbursement" link                          |      8,707       |     8,321     |     9,725     |     6,886   |   |   |   |   |    
| Engagement with "Get your VA medical records and lab and test results" link  |     13,338       |    13,290     |    15,163     |     9,977   |   |   |   |   |   

#### Hypothesis 2: We will initially see significant engagement with the new link to MHV

**Key Result: ...tk...**
[GA report](https://analytics.google.com/analytics/web/#/dashboard/jTwco5hFRBmuXcjZN9YSPA/a50123418w177519031p176188361/_u.date00=20231120&_u.date01=20231126/)

|KPI| Week 1 post-launch<br />(mm/dd/yy - mm/dd/yy)| Week 2 post-launch<br />(mm/dd/yy - mm/dd/yy)| Week 3 post-launch<br />(mm/dd/yy - mm/dd/yy)| Week 4 post-launch<br />(mm/dd/yy - mm/dd/yy)|
|--------------------------|-------------------|---------------|---------------|-------------|
| Engagement with MHV link |                   |               |               |             |             |    

#### Hypothesis 3: tk...

**Key Result: Task completion/initiation from MHV landing page increases after navigating to MHV landing page from My VA**

TBD how best to capture and display this as a KPI but we'll need to create a funnel or next page report to track the following paths:
- My VA > MHV landing page from new My VA link > Inbox > start/complete a task
- My VA > MHV landing page from new My VA link > Appointments tool > start/complete a task
- My VA > MHV landing page from new My VA link > Prescriptions tool > start/complete a task
- My VA > MHV landing page from new My VA link > Travel reimbursement tool > start/complete a task
- My VA > MHV landing page from new My VA link > Medical records, lab/test results > start/complete a task

### Key Dates
- November 2023: Development
- October 2023: Kickoff & Design

### Documentation
- FE documentation

### Screenshots
   ### Before (Cerner handling)
   ![Screenshot 2023-10-31 at 1 13 05 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/f69667f8-806b-4ae0-b048-4ebdef57d1d6)

      
   ### After (Cerner handling)
      TK

   ### Before (MHV navigation)
   ![Screenshot 2023-10-31 at 1 20 54 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/803c62a5-80f7-4213-a074-239de112e4d1)


   ### After (MHV navigation)
      TK
