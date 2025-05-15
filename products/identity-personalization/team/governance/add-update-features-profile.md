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

1. Personal information: Users personal information including name, date of birth, preferred name, and disability rating.
2. Contact information: Users contact information including addresses, phone numbers, and emails.
3. \[Name TBD] Dependents and contacts: All individuals associated with the user and their account, including dependents, health care contacts, and accredited representatives.
4. \[Name TBD] Financial information: All of the user's money-in and money-out information with the VA, including direct deposit, payments, debts, and copays.
5. \[Name TBD] Service history information: Veteran’s period of service including, branch and years of service.
6. \[Name TBD] Letters and documents: Links to all available documents and letters the user can download.
7. \[Name TBD] Communication settings: Including email and text notifications, paperless delivery, and message signatures.
8. Account security: All information having to do with users VA.gov account security.
9. Connected apps: All 3rd party applications connected to the users VA.gov account.

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

5. If system save times are long, provide visuals to the user that their save is in process.

6. Create all states of the information feature, including, but not limited to:

   1. When the feature is available;
   2. when the feature is not available;
   3. all error states, including system errors.
