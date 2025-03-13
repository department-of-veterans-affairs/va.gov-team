# Impact of CRM Release, Nov 2023

Ask VA Front-End Team

Last updated by @tygindraux: December 22, 2023

## Background

On November 17, 2023, the CRM team sent out a release which impacted the portal and CRM experience. This document describes the impact of these updates on our (Front End Team’s) work, based on their [release notes](https://drive.google.com/file/d/1c0ov_mWZyUSwq65wBAusaFFVlPk51Xk4/view?usp=drive_link).

## Updates and impact on our work

### Updates to AVA CRM Functionality
**(1) + New Message Update**
- If: Category = Education benefits and work study
- When sending a message to submitters, topic, inquiry assigned queue, submitter, Veteran relationship and question are required.
> Impact: None

**(2) + New Message Update**
- If: Business inquiry
- Submitter field shows the user’s full name along with their business email address. This lets the agent review the submitter selection when taking a new message action.
> Impact: None

**(3) Inquiry Action Update**
- Assignee field now shows the user’s full name and main email address when assigning an inquiry. Email addresses should be used to differentiate users that share the same name.
> Impact: None

**(4) Inquiry Views Update**
- Now AVA FMI Agents can create and share personal views.
> Impact: None

**(5) Inquiry Details Update**
- If: Category = Health care, Topic = Caregiver support program
- A Veteran’s zip code will now display on the CRM under Veteran details and ‘Additional Inquiry Detail’s when they submit a General Question.
> Impact: None

**(6) AVA Notifications Update**
- AVA Supervisors can enable email notifications using the + button on the Queue form.
> Impact: None

**(7) AVA Email Update**
- AVA users will now receive emails reminding them to log in every 90 days to maintain their system access.
> Impact: None

**(8) Inquiry Details Update**
- The ‘Veteran Inquiry History’ tab/subgrid now has a ‘Hide Business Inquiry’ button to match the main Inquiry view.
> Impact: None

**(9) Inquiry Action Update**
- Inquiry Action forms have been updated to match field display forms on the ‘Reroute to GI Bill’ field.
- The label for ‘Reroute to PATSr’ field has been renamed to ‘Reroute to Medical Facility (PATSR).’
- This label name was updated because Agents are more familiar with Medical Centers, than the system name of (PATSR).
> Impact: None; but this is an interesting example of the CRM team responding to feedback from agents and adjusting the label description.

**(10) Inquiry Correspondence Update**
- We have set the default font and size to New Times Roman size 12 to ensure consistency. We have hidden the ribbon buttons that control font and size.
> Impact: None

**(11) Inquiry Formatting Update**
- We have implemented submission rules that handle common naming conventions for unauthenticated submitters, will enforce a first-letter capitalization for each name (first and last) and strip all caps.
> Impact: None

**(12) Inquiry Correspondence Update**
- All AVA roles can delete their draft email.
> Impact: None

**(13) Inquiry Details Update**
- Update Historical submitter names will be updated to follow First, Last and Preferred formatting.
> Impact: None

**(14) AVA Correspondence Update**
- Users who select a record in the Correspondence sub grid on the create correspondence form will no longer receive a blank error message.
> Impact: None

### Updates to AVA CRM Functionality
**(15) Inquiry Routing Update**
- ‘Veterans Affairs-Debt’ inquiries submitted by a SCO on behalf of a Veteran, are now routed to the ‘Debt Management Center School Debt’ queue.
> Impact: This is what we already have documented in our [label spreadsheet](https://docs.google.com/spreadsheets/d/1qRpAwE-OmISFzYsg4w3n8VlBsxJxkBAFZL21AWDXFKc/edit#gid=558740714), so it appears that there's no change to our documentation needed.

**(16) Inquiry Routing Update**
- ‘VA Property Management - Homes for Sale/VA Release Estate Owned Properties’ inquiries are now routed to the VBA-LGY PMOU queue.
> Impact: We have updated the routing queue in our [label spreadsheet](https://docs.google.com/spreadsheets/d/1qRpAwE-OmISFzYsg4w3n8VlBsxJxkBAFZL21AWDXFKc/edit#gid=558740714) to match this change.

**(17) Topic Routing Update**
- ‘Appeal located at a regional office’ topic is now renamed as ‘Supplemental Claim’
- ‘Appeal located specifically at BVA Appeal (DC)’ topic is renamed to ‘Appeal at Board of Veterans Appeal (DC)’.
- A new topic, ‘Higher-Level Review’ is now available and routes to ‘VBA-ART’
> Impact: We have updated the current label names in our [label spreadsheet](https://docs.google.com/spreadsheets/d/1qRpAwE-OmISFzYsg4w3n8VlBsxJxkBAFZL21AWDXFKc/edit#gid=558740714) to match these changes. However, we will keep our recommendations as-is, which will include, removing the 'Higher-Level Review' (new) topic and renamed the 'Supplemental Claim' topic to 'Higher-Level Reviews or Supplemental Claims'.

**(18) Inquiry ReRouting Update**
- We resolved a bug that was sending duplicated new inquiry confirmation emails when inquiries were re-routed. Submitters will no longer receive an email when their inquiry is re-routed.
- This was a bug fix that was only occurring when agents re-routed inquiries to PATSR. We have never notified submitters of re-routes.
> Impact: None.

**(19) Inquiry ReRouting Update**
- AVA users can now re-route an inquiry that was re-routed from PATS-R back to PATS-R.
> Impact: None

**(20) Inquiry Routing Update**
- Users will receive a descriptive error message when an inquiry action fails.
> Impact: None

**(21) Inquiry Routing Update**
- The Assign and Flag for Supervisor inquiry actions now only display enabled users.
> Impact: None

**(22) Inquiry Routing update**
- Lookup view logic has been updated to only allow selecting active queues to ensure proper rerouting and selection.
> Impact: None

### Updates to AVA Portal
**(23) Portal Update**
- When submitting an inquiry to the VA Debt category with a topic of Education and the submitter is an SCO, either the ‘School Facility Code’ or ‘State of School’ will be required.
- Providing the ‘School Facility Code’ or ‘State of School’ will make the other field no longer required.
- This was a bug fix that was created when we added the SFC (School Facility Code) or State of School options to the debt category in our prior release. The behavior was always meant to mirror the GI Bill SFC/State of School behavior, where only one is required.
> Impact: The behaviour (either/or) wasn't clear to us before. We need to update all design documentation so these fields are either/or, whenever they're present.

**(24) Portal Update**
- To ensure consistent naming conventions for authorized submitters, we have implemented common naming convention rules for submission.
- Edit: This shouldn’t have appeared under portal updates. The story enforces capitalization rules within CRM for Submitters’ names. Ex: names submitted in all caps would be changed to first letter capitalization for each name.
> Impact: None

### Updates to AVA Reporting
**(25) Inquiry Details Update**
- To create a more accurate count of ‘Inquiry Days Open’ this calculation will now be the difference between ‘Inquiry Submitted On’ and the current day/date instead of the previous ‘Inquiry Created On’. This will updated nightly.
> Impact: None

**(26) Inquiry Details Update**
- The ‘Inquiry Days Open’ calculation has been updated for all existing inquiries. The ‘Days Open’ count for reopened inquiries begins at 1.
> Impact: None
