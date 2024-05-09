# December 7, 2022 HEC Bi-weekly Health Care application update

**Note:** We have not had a stakeholder meeting since 10/26/22, as there were no agenda items and attendance was low around the Thanksgiving holiday week.

### 12/7/22 Agenda Items
- Household section optimization research sessions being held 12/6 thru 12/14
     - HEC stakeholders encouraged to join if available (several folks have decided to join us!)
- Questions from the Online Health Apps team on some of the data requested on the form
     - **Why do we ask for Mother's Maiden name?**
          - This is a Security Question, for additional authentication
     - **Military dates - will the application be denied if the dates are incorrect?**
          - The application is not denied, it is worked through with HEC team and verified
     - **If the Veteran is married, but the Spouse did not live with them last year, do we still need to capture the Spouse income details?**
          - This depends on legal paperwork.  
          - It can be left blank/zeros.  
          - This answer could trigger the application for auditing.
     - **Question on burial expenses, would they apply to parents? or just spouse and child?**
          - Parents cannot be claimed as a dependent per VA (consistent with the paper form)
          - Christopher Hawkins stated that this should be included.  
          - The answer can still trigger the application auditing
     - **What counts as "Property" income? Rentals? Sales?**
          - Yes, any income from property that is owned.

- SIGI - _On Hold for Online Application_
     - We have disabled SIGI in Staging
     - We are not releasing in Production until further notice
     - The paper form already has the question on it
     - The Enrollment system (ES) has deployed their changes to accept the values our online form will send


- In-progress Notification emails (FYI - not discussed, just an update here)
     - Rolled out 100% on Nov 1st

        
---

### Future Endeavors (Backlog)

- Registration path
     - [ ] **(5/25/22) Online Health Apps team** will provide a LOE be estimated to add the Registration path to the online form - requested by Stacey Echols
          - (7/20 Update) - Patrick - Some work to do on our side to determine how to allow for future discharge dates and to direct applicants to that Registration Only flow as an option.
          - (12/7/22 update) - We are tracking applications that include a "future discharge date" in our [GA Dashboard](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20220801&_u.date01=20220811&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22PT%22,%22hca-future%22,0%5D%5D&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.rowCount=25/)
- Next of Kin section
     - Exists  on the paper form today
     - Has not been on the Online form for 5+ years
     - Action item
          - [ ] **(8/16/22) HEC team** will decide if this should be a future initiative
               - This would result in new pages added to the form
               - Will require full process (design, usability interviews, development, full testing)
