# Campaign Landing Pages
The Campaign Landing Page (CLP) is a page builder in the VA.gov Drupal CMS which enables VA businesses to create, launch and manage modern, mobile-responsive, accessibility-optimized campaign landing pages to promote marketing or engagement content.

Campaign Landing Pages are intended to prevent creation of standalone marketing sites, and to create a rich experience for topics that are not otherwise Veterans benefit / facility related content.

Full context & governance model: 
https://docs.google.com/presentation/d/1y7FnBuaOrbfR_Bap0zAhMceVO8jlEeX9/edit#slide=id.p8

**Both the nature of the campaign and the campaign URL must be approved by stakeholders.** \
Not every Campaign Landing Page request will be approved. \
Not every requested URL will be approved. \

CMS Campaign Landing Pages:
https://prod.cms.va.gov/admin/content?title=&type=campaign_landing_page&moderation_state=All&owner=All



## Runbook for CLP creation
1. Request comes in, via helpdesk request or direct to PO, or potentially in a Github issue.
2. If not in a helpdesk request, redirect to Helpdesk or create a Helpdesk issue using email support@va-gov.atlassian.net or URL https://prod.cms.va.gov/help
3. Helpdesk will use #sitewide-public-websites channel to request approvals
    1. If PO (Dave Conlon) hasn't already reviewed the request, he needs to review/approve the creation / existence / description of the CLP.
    2. IA (#sitewide-content-ia) needs to review / approve the requested vanity URL
4. Helpdesk or any Drupal Admin can create the CLP node. We clone the [CLP template node](https://prod.cms.va.gov/node/16512)
5. If a new editor is needed, Helpdesk or any Drupal admin can create them and assign proper permissions according to [CLP CMS account administration policy](https://prod.cms.va.gov/help/cms-account-admin-policies/clp-cms-account-administration-policy).
    1. Send that editor the [self-guided Campaign Landing Page training](https://prod.cms.va.gov/help/campaign-landing-pages/how-to-manage-campaign-landing-pages)

This runbook can relocate out of PW repo if Helpdesk is able to vet / execute these requests in future without the team's involvement.

## Example CLP GH issues
https://github.com/department-of-veterans-affairs/va.gov-team/issues/37773
https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8182

## Prior initiatives for CLP
[Campaign landing page template MVP 1.0 - product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates)

