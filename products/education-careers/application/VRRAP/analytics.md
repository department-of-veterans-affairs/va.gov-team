# VRRAP Analytics Implementation

[The main Google Analytics VRRAP query](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22BW%22,%22www.va.gov~2Feducation~2Fother-va-education-benefits~2Fveteran-rapid-retraining-assistance%22,0%5D%5D&explorer-table.rowStart=0&explorer-table.rowCount=50). 

A couple additional highlights from the implementation.  
* [Successful submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.dateOption=last7days&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.eventLabel:edu-1990s--submission-successful/)
* [GA analysis funnel for 22-1990s](https://analytics.google.com/analytics/web/#/analysis/a50123418w177519031p176188361)  (Select VRRAP application / Owner Brian Martin.  You will want to duplicate it from the menu (three dots on the right) so you can update it, add extra dimensions. etc. If you want other people to access the funnel, you have to share it from that same menu / link.) 

* Where applicants came from 
  * [Previous page](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.previousPagePath&_r.drilldown=analytics.pagePath:www.va.gov~2Feducation~2Fother-va-education-benefits~2Fveteran-rapid-retraining-assistance~2F/)
  * [Source / medium](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.sourceMedium&_r.drilldown=analytics.pagePath:www.va.gov~2Feducation~2Fother-va-education-benefits~2Fveteran-rapid-retraining-assistance~2F/)
* What if I don’t have a bank account toggle open /closed [tracked here](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22Additional%20Info%20-%20.*%20-%20What%20if%20I%20don%5Cu2019t%20have%20a%20bank%20account%3F%22,0%5D%5D/). 


## Complete tracking requested: 

### Banking Information
Tracks user behavior regarding direct deposit information
* Updates to pre-fill direct deposit info
* Selections of "I don't want to use direct deposit"
* Opens of "What if I don't have a bank account" learn more

### Program Selection
Provides insight into level of preparedness of applicants
* Applicants indicate they have / have not selected a program; Also interested in what's possible to track for the following free text fields in the "Program selection" area:
* School/training provider (Free-text field)
* Program name (Free-text field)
* States selected (Free-text field)

### Application Review Page
Tracking user behavior regarding review and confirmation of form input
* Opens of VRRAP application accordion on Review application page
* Edits on Review application page

Application Funnel
Tracks user flow through application introduction, application completion, form review, and confirmation pages
* Where applicants come from (Form finder, static content page, direct to application: previous page)
* Application abandonment - location
* Successful submissions
* Time in funnel
