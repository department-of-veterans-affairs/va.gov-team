# Add or Update Features on My VA

Version 0.1, 05/2025

_The following information is meant as guidance when adding or updating My VA features._


## My VA overview

When Veterans log into VA.gov, they expect to be met with an experience that reflects their personal circumstances at the VA. My VA aims to meet this expectation by providing Veterans with a direct route to their most critical tasks and updates.

My VA aggregates information from across VA.gov. While our team pulls info from across the site, we do not actually manage any of these integrations. Parent tools and teams that manage each integration are listed in our product documentation linked below.

[My VA product documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va)


## My VA delivery checklist

### Prepare intake

1. Review all documentation on this page, and any relevant [integration documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/intake.md#common-integration-documentation).
2. [Complete an intake ticket.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=auth-exp-request.yml)
3. Reach out to team on the #accountexp-authexp Slack channel for next steps.

*Note: Ideally this step should occur before Design Intent but should not occur after Midpoint Review. This allows the Authenticated Experience team time to provide support and knowledge to help reduce deployment timelines.*


### Before launch

1. Review designs with the Authenticated Experience team between Design Intent and Midpoint Review.
   1. _Optional: We are also happy to attend Design Intent and Midpoint Review governance calls as a review step._

2. Send the staging environment to the Authenticated Experience team for QA prior to Staging review.

3. Update Authenticated Experience team contact center documentation to reflect updates.
   1. [Link to contact center documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/product/product-guides.md)

4. Update use case documentation in GitHub to document expected behaviors of the updates.
   1. [Link to GitHub use cases.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases)

5. Integrate into the Authenticated Experience teams analytics tools:

   1. [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/4dk-pwd-mni/authenticated-experience-my-va?fromUser=false&refresh_mode=sliding&from_ts=1741082862507&to_ts=1741097262507&live=true): As needed, add new widget to the dashboard.
   2. [Domo Dashboard](https://va-gov.domo.com/page/1167851935): As needed, add new data tracking to the dashboard.
   3. Google Analytics: Ensure all analytics are set up, working, and do not interfere with other analytics.


### After launch

1. Update master Figma files with production designs, including new error states and updated user flows. Use cases should match the written GitHub documentation.
   1. [Authenticated Experience Figma Project](https://www.figma.com/files/project/176473451)


## My VA sections

[Full My VA section documentation.](https://dvagov.sharepoint.com/:x:/s/AuthenticatedExperience2/Ect662e3rshFnRRMAFBGM6QBXDSvIwWqagHtnww5KmWx4Q?e=YrIr4m)

There are currently six available sections to integrate with on My VA.

1. Claims and appeals: Users see how to apply for disability compensation, and track in progress claims.
2. Health care: Users see information related to their health care, such as appointments and unread messages.
3. Outstanding debts: Shows users overpayments and copays.
4. Benefit payments: Shows users most recent VA payment.
5. Education and training: Shows links to education benefits.
6. Benefit applications and forms: Users see any forms they have in progress on VA.gov.

If your feature does not fit within one of these sections, please work with the Authenticated Experience team to identify if My VA is the right fit for you.


## My VA usability standards

The following usability best practices should be kept in mind when adding or updating features on My VA.

1. All features and content on My VA should be dynamic and personalized to the user.

   1. There are two exceptions to the rule:

      1. (1) information on how to get help via phone, through Ask VA, in-person locations, or accredited representation;
      2. (2) a link to [Getting started with VA](https://www.va.gov/resources/getting-started-with-va/) to promote understanding of available benefits.

2. Each dynamic feature should include:

   1. An empty state prompting eligible users to get started;
   2. A state for when the user has the benefit but has no actions;
   3. All error states associated with your product, as well as system down error;
   4. _As needed_, a state that shows the user has an action to take.

3. Content should be brief and highlight the most important information for the user to know, with a link to next steps or details as needed.

   1. _Unless_ it is a 1-click task, which users should be allowed to complete inline on the page.
   2. Reference existing content documentation to ensure your features match content and tone for dynamic cards, links, and error messaging.
      1. Link to content documentation. (COMING SOON)
