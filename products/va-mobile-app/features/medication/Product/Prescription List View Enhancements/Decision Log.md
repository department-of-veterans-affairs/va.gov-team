## Decision Log
This will be used to track all the major decisions made over the course of the project. 
It explains the reasons for each decision, so team members can identify their original motivations in case of confusion, disagreements, or unexpected changes to the project.

|Date|Inquiry/Question|Decision/Answer|
|--------|:-----------|:-------------|
**9/5/23** | Two statuses that need to be deleted from mobile filter list & logic: Active Suspended & Non-Verified.  When a prescription is in suspended status, the API sends it as refill in process; hence mobile will not receive a status Active: Suspended. Per Dr. Sphan'non-verified' we've never shown those b/c they are not useful to users and are <500 compared to the approx 18-20million prescription statuses within one year query.  Ticket [4906](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/4906#issuecomment-1707220696) created to address.  Next step confirming ok to move forward|
