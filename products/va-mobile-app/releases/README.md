
## Release Cadence (Draft)

There are two ways we can update our app:

- **Release**:  Releases are every 2 weeks and include new features, improvements, and bug fixes

- **Hotfix**:  Hotfixes are reserved for major issues/ urgent bug fixes requiring an off-cycle release

**Release Cadence**

- At the beginning of each sprint, a release branch is created, this will hold all code that will make it into the release occurring in 2 weeks
- Issues that are labeled as front-end and have been committed to the sprint are tagged with label ‘Target Release: XX/XX/XX’ (see table below for sprint to release date matrix)
   - We modify as necessary during the sprint if an issue will not make the targeted release
- Once development/QA has been completed within the sprint, the issue will be updated with the Release date [using the Zenhub Release feature]
- Tickets which have been merged to the develop branch by 10:30 PM pacific time of the previous sprint end date will be part of the release 
  - Example:
    - Target Release Date 12/7/21
    - Sprint Start 11/10/21-11/23/21
    - Merged in dev branch by 11/23/21
-Thirteen days prior to the release, sign off activities begin (See Release Sign Off)
 - Bot auto generates a release sign off ticket
 - The ticket is assigned to PM release lead, PO stakeholder, Design lead, & Engineering Lead to complete all tasks
- One week prior to the release sign off is due and the app is sent to the app store for review
- On release day, the app is submitted to the app store(s) with latest app version

Current Release Schedule (next 10 releases)

| Sprint    | Start Date    | End Date    | Release Date  | QA Sign Off Due Date   |  Release Sign Off Due Date  |
| --------  | ------------- | ----------- | --------------| ---------------------- |  ---------------------------|
| 32        | 11/10/21      | 11/23/21    | 12/07/21      | 11/26/21               |  11/30/21                   |
| 33        | 11/24/21      | 12/7/21     | 12/21/21      | 12/10/21               |  12/14/21                   |
| 34        | 12/08/21      | 12/21/21    | 01/04/22      | 12/24/21               |  12/28/21                   |
| 35        | 12/22/21      | 01/04/22    | 01/18/22      | 01/07/22               |  01/11/22                   |
| 36        | 01/05/22      | 01/18/22    | 02/01/22      | 01/21/22               |  01/25/22                   |
| 37        | 01/19/22      | 02/01/22    | 02/15/22      | 02/04/22               |  02/08/22                   |

**Release Preparation**

Who:  Product Manager, Design, Dev, QA, and VA POs

Purpose:  Define the scope of features, defects, enhancements that will be part of the release.  Additionally, defining communication and associate release readiness tasks to be completed before the feature goes live. 
 
**Release Readiness Checklist**

The process of working through the checklist helps uncover any remaining concerns before the release, and reminds internal stakeholders of their upcoming responsibilities.  Once the checklist has been satisfied, PM can begin release sign-off process

*Product Management*                                                                                                                       
  - All committed issues have been coded and marked as closed in ZenHub 
  - Communication and associate readiness tasks have been completed
     - Call center documentation
        - What call center documentation should be updated? Does the release warrant a demo to the call centers?
        - Advance notification should be given to VEO or HRC for larger feature releases
        - See Request Contact Center Review for directions on how to interact with VEO on product guide updates (see #32766 as an example)  
  - QA/UAT review has been completed                                                                            |

*Design/Development*   

- All development work has been completed and meets acceptance criteria
- All defects assigned to the release has been fixed
- All development & design documentation has been updated
- All unit test code has been updated
- All reviews have been completed

*Quality Assurance* 

- QA plan and test cases have been updated
- Testing completed and features/issues that are part of the release have passed validation
   - What has been developed, meets acceptance criteria
   - Issues that have been identified are addressed with dev
   - New issues that are found outside of acceptance criteria a ‘new’ ticket is created
   - Full Regression
      - In depth testing to ensure the existing functionalities haven’t been adversely affected. 
- Document findings in TestRail

**Release Sign Off** 

Who:  Product Management, Design, Dev, QA, and VA POs

Purpose: Formal way of declaring the completion of development & testing and now the app is ready for release.  

Due: Release sign off is due 1 week prior to the release 

Release Sign off Ticket:  The release sign off ticket is generated 13 days prior to the release.  The following items are expected to be completed for the release sign-off milestone:


 

