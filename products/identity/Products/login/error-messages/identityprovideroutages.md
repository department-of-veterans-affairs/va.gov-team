## Background
We've created message to show on our sign-in modal whenever one of our identity providers (DS Logon, MHV, ID.me) or MVI is experiencing an outage. The messages show appear the signin modal itself.

## Sign in Warning/ Error Messages
<img width="584" alt="Screen Shot 2019-05-15 at 1 23 30 PM" src="https://user-images.githubusercontent.com/21130918/57795756-c33b3780-7714-11e9-87ae-0894afbcf3eb.png">


## Example message within modal
<img width="835" alt="Screen Shot 2019-05-15 at 1 25 25 PM" src="https://user-images.githubusercontent.com/21130918/57795838-f4b40300-7714-11e9-8670-ea8d069961da.png">


## How to set up within pagerduty
1. Go to https://dsva.pagerduty.com/maintenance_windows and click Schedule Maintenance. 
2. Select one or more services, set the expected outage time range, and click Create Maintenance.  
- The "Description" text area is for notes and is not visible to an enduser.
<img width="831" alt="pager_duty_maintenance_window" src="https://user-images.githubusercontent.com/19188/58024022-42e35080-7adf-11e9-9275-745800dba54b.png">
