# Add or Update Features on VA.gov Profile

Version 0.1, 05/2025

_The following information is meant as guidance when adding or updating VA.gov Profile features._

## VA.gov Profile overview

The VA.gov Profile provides a centralized place where users can see what information the VA knows about them, and where they can update that information as needed and available.

Our team does not manage the back-end systems that store Veteran information. The back-end systems we are integrated with are VA Profile, VA Notify, VEText, MPI, and Lighthouse. We also attempt to keep parity with the VA Mobile App. Please keep this in mind when recommending new or updated features as requests will typically require cross team coordination.

[VA.gov Profile product documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile)


## VA.gov Profile delivery checklist

### Prepare intake

1. Review all documentation on this page, and any relevant [implementation documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/intake.md#common-integration-documentation).
2. [Complete an intake ticket.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=auth-exp-request.yml)
3. Reach out to team on the #accountexp-authexp Slack channel for next steps. The team typically responds within 24 - 72 hours.

*Note: Ideally this step should occur before Design Intent but should not occur after Midpoint Review. This allows the Authenticated Experience team time to provide support and knowledge to help reduce deployment timelines.*


### Before launch

1. Review designs with the Authenticated Experience team between Design Intent and Midpoint Review.
   1. _Optional: We are also happy to attend Design Intent and Midpoint Review governance calls as a review step._

2. Send the staging environment to the Authenticated Experience team for QA prior to Staging review.

3. Update Authenticated Experience team contact center documentation to reflect updates.
   1. [Link to contact center documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/product)

4. Update use case documentation in GitHub to document expected behaviors of the updates.
   1. [Link to GitHub use cases.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/use-cases)

5. Integrate into the Authenticated Experience teams analytics tools:

   1. [Datadog Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-bd93d62d37a448b2511fce5becc4b731?fromUser=false\&refresh_mode=sliding\&from_ts=1712242328583\&to_ts=1712328728583\&live=true): As needed, add new widget to the dashboard.
   2. [Domo Dashboard](https://va-gov.domo.com/auth/index?redirectUrl=%2Fpage%2F1834995012%3FuserId%3D66061986): As needed, add new data tracking to the dashboard.
   3. Google Analytics: Ensure all analytics are set up, working, and do not interfere with other analytics.


### After launch

1. Update master Figma files with production designs, including new error states and updated user flows. Use cases should match the written GitHub documentation.
   1. [Authenticated Experience Figma Project](https://www.figma.com/files/project/176473451)


## VA.gov Profile sections

[Full VA.gov Profile section documentation.](https://dvagov.sharepoint.com/:x:/s/AuthenticatedExperience2/EV7WVgtnIatNn_jNLoT2mrIB2yFdSD5vYKLdXCGwA8N9jw?e=EqLBPS)

There are currently nine available sections to integrate with on VA.gov Profile.

1. Personal information: Legal name, date of birth, preferred name, and disability rating.
2. Contact information: Addresses, phone numbers, and email address.
3. Service history information: Veteran’s period of service including, branch and years of service.
4. Financial information: All of the user's money-in and money-out information with the VA, including direct deposit, payments, debts, and copays.
5. Health care settings: Health care settings such as scheduling preferences, messages signature, and health care contacts.
6. Dependents and contacts: All individuals associated with the user and their account, including dependents and accredited representatives.
7. Letters and documents: Links to all available documents and letters the user can download.
8. FUTURE Communication preferences: Including email and text notifications and paperless delivery.
9. Account security: All information having to do with users VA.gov account security and connected apps.

If your feature does not fit within one of these nine sections, please work with the Authenticated Experience team to identify if the VA.gov Profile is the right fit for you.


## VA.gov Profile usability standards

The following usability best practices should be kept in mind when adding or updating features in the VA.gov Profile.

1. When possible, provide inline editing. Edits should be accompanied by an alert that the information was successfully updated.

   1. Provide clear direction on the impacts of updating or removing information.
   2. When it is not possible to update information online, provide explanatory copy on how to update information.

2. Group uneditable information separate from editable information.

3. Label what information is required versus optional and give the ability to remove optional information.

4. When content is long, provide an unauthenticated FAQ to cover more complex topics within the Records or Resources and support sections of VA.gov.

   1. FAQ content should not live within VA.gov Profile.

6. If system save times are long, provide a loading spinner button to show the user that their save is in process.

7. Create all states of information for the feature, including, but not limited to:

   1. When the feature is available;
   2. when the feature is not available;
   3. all error states, including system errors.
  
8. Page level alerts and messages should be a [standard alerts](https://design.va.gov/components/alert/#examples---standard), and appear directly below the page header. Alerts within the page, such as in a section or card, should be [slim alert](https://design.va.gov/components/alert/#web-2), and appear below the header or sub header of that section.
 

## VA.gov Profile content standards
### Modal alerts
#### Cancelling edit changes
**When is this modal triggered?**
When a user selects the Cancel button while editing information.

| Section | Content |
| -------- | -------- |
| Modal header | Cancel changes? |
| Body copy | You haven’t saved the changes you made to your [H2 or H3 section title]. If you cancel, we won’t save your changes. |
| Primary button | Cancel changes |
| Secondary button | Keep editing |


#### Edit new information while editing
**When is this modal triggered?**
When a user attempts to edit another dataset while on the same page. Example: User is editing their email address and attempts to edit their mailing address at the same time.

| Section | Content |
| -------- | -------- |
| Modal header | Save or cancel your edits to [H2 or H3 section header] |
| Body copy | Before you can edit a new section of your profile, you need to save or cancel your edits to your [H2 or H3 section header]. If you cancel, we won't save your in-progress edits. |
| Primary button | OK |


#### Remove information
**When is this modal triggered?**
When a user removes information from profile an alert triggers to confirm their decision.

| Section | Content |
| -------- | -------- |
| Modal header | Remove your Remove your [H2 or H3]? |
| Body copy | This will remove your [what will this do? If not applicable don’t show this part. You can always add another [H2 or H3] any time. |
| Primary button | Remove |
| Secondary button | Cancel change |


### Notification settings
[Link to current Notification settings production files for examples.](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=4649-8881&t=aeIImeiPytf4vfpe-1)

Notification settings checkbox groups are made up of 4 sections:
1. Label header
2. (Optional) Group hint text
3. Checkbox label
4. (Optional) Checkbox description

Label header
* Describes the subject of notifications.
* Limit to 36 characters to keep text on a single line.
* Don’t use the word ‘notification’.
* Label headers are managed by the VA Profile API team, so any updates must be coordinated with them. The Authenticated Experience Team does not own or manage the label headers.

Group hint text
* Provides additional information that applies to all notification types within a single subject.
* Group hint text is optional.

Checkbox label
* Indicates which type of notification to receive.
* Only options are:
    * Notify me by email
    * Notify me by text
* If both email and text are available, email should always be listed first.

Checkbox description
* Provides additional information that applies to a single notification type.
* Typical use case will be to indicate what information the reminders will contain.
* Checkbox descriptions are optional.
