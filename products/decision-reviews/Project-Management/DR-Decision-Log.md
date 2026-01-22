# Decision Reviews Decision Log

## Decision Log

This Decision Log is used to record details of important decisions made throughout the life of the project. A decision log can provide quick and easy access to specific details about decisions made in the past if questions come up afterward.

Not every decision a project makes gets recorded in the Decision Log. When to include an item in the log involves striking a balance between what is valuable to have recorded versus what is too detailed. An entry should be recorded here in the following types of scenarios:

- When a decision has a large impact on the direction/timeline/scope/cost of the project.
- When multiple alternative options are considered and we want to keep a record of why we settled on the chosen option.
- For decisions that may be confusing or not clear to all stakeholders.
- For decisions that impact the what or how we achieve a deliverable/milestone, especially when that differs to stakeholder expectations. 
- For decisions that may not seem significant but have the potential to cause issues if not understood.



| Date | Decision Title | Summary | Decision & Reasoning | Made By | Status
|---|---|---|---|---|---|
|11.03.25 | Appeals policy implementation (Decision made) | We cannot legally allow appeals of contestable issues on the same day as the decision date. |  The Veteran receives their decision letter (i.e. can download it via the Claims Status Tool) the day before the date written on the letter. The decision date is the date the decision is issued, **not the post-dated day on the letter**. According to current policy, the Veteran **cannot file an appeal until the date written on their letter**. This is enforced as 12 AM on that date in UTC time by the server. | Randi, Grace, Christian, Amy | <code>Resolved</code>
|08.28.25 | Same-day appeals policy implementation (Decision in progress, resolved by 11/3 decision) | Front-end was enabling veterans in far timezones to submit same-day submssions when the back-end would define them as coming the next day, leading to errors not flagged on submission | Align front-end and back-end on timezone defining day end. Determine policy regarding same-day submissions. Change implementation if necessary.| Randi, Grace, Amy, Christian | <code>Resolved</code>
|1.15.25 |SC In Progress form handling |  Redirect users with In Progress form | When a Veteran has an in progress form when the new SC form launches, we'll redirect them back to the new homelessness question screen. And take them through the rest of new fields from there. (required and optional). We determined it wasn't the best user experience to let them proceed through the form as is and pick up on the new fields at the end as that didn't test well with users in 526's research. Additionally, it's difficult from an accessibility standpoint.  | Maurice | <code>Resolved</code>
|11.27.24 |Rails Engine Implementation |  Transitioning Decision Reviews Code to Rails Engine | The 'vets-api' code repo is large and complex and many teams make daily changes. This causes additional overhead for engineers due to the added caution during code review. Ruby on Rails framework has an Engine that allows changes to be made without affecting the main application. The DR team will move as much of the Decison Reviews code as possible into a Rails engine.  | Shaun | <code style="color : orange">Active </code>
|11.25.24 |5103 NOE Question | Maintain required question with small addition | Maintain how the notice of evidence question is now with updating the checkbox acknowledgment. We will update the field to drop the required label once LH updates the field's required property after Appeals API is transitioned. This is due to the fact this question has already been in Prod up to this point, LH can't currently update the field while on the DR API and the potential problematic decision to remove the field altogether for some Vets. | Amy, Maurice | <code style="color : green">Resolved</code>
|11.4.24 |Enable Failure Emails | Failure notifications will be enabled in Prod on 11/7| Originally planned to enable failure notifications (minus 4142) on 11/4 but ran into an issue due to Daylight savings time errors downstream. Turned off the emails minutes after turning them on while waiting for EMMS to correct issues. No emails were sent in this short period. Re-enabled on 11/7 for all forms/evidence submissions including 4142s.| Maurice | <code style="color : green">Resolved</code>
|10.4.24 |GH Projects migration | Migrating to GitHub Projects from Zenhub | Changing the home of our scrum board and issues to live within GH projects instead of Zenhub, which we learned is soon to be decommissioned by the VA anyway| Maurice | <code style="color : green">Resolved</code>



