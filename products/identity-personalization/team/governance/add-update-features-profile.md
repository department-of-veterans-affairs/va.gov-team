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
