# **Product Outline: Representative Status**

Team: Accredited Representation Management

The Representative Status widget is available on the following pages:

1. [Find a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/find-rep)
2. [Get help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/)


## **Overview**

Create a user-friendly, accessible service on VA.gov that reflects a user's (Veteran or claimant) current representative status.


## **Problem Statement**

There is not currently an experience on VA.gov for users to understand their current representative status. Without insight into existing representation a Veteran or claimant may accidentally remove a representative that is actively assisting with a claim and delay their already lengthy claims process.

**How might we provide Veterans with insight into their current representative status on VA.gov?**


## **Desired User Outcomes**

1. Veterans and claimants can easily see if they have existing representation when interacting with the Find a Representative tool.
2. Veterans and claimants can easily see if they have existing representation when interacting with the Appoint a Representative tool.
3. Veterans and claimants can easily see their representative status in the Account Profile.


## **Desired Business Outcomes**

1. Increase the functionality of VA.gov to support Veteran’s insight into current representation.


## **Assumptions**

1. Many Veterans are unaware that they have a current representative appointed.
2. Veterans would like to see if they have current representation.


## **Solution Approach**

Our immediate goal for the Representative Status is to provide Veterans and claimants with insight into any existing representation, by way of a widget that can easily be implemented to any page on VA.gov.


## **Measuring Success**

Monthly performance metrics are currently documented in Sharepoint: the [Performance Metrics](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FAccredited%20Representation%20Management%2FPerformance%20Metrics\&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72) folder includes raw data, which is summarized in the monthly [Sprint Report](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FAccredited%20Representation%20Management%2FVeteran%20Facing%20Sprint%20Reports%20and%20Demos\&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72) decks.

We are actively working with the Platform Analytics team to visualize our[ ARM OKRs](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718224425278/b300ea8d63dcaaa0cdad0ebf6b4a65a20fcc9371?sender=ubac5f0487f25bc4431288699) in a Domo dashboard at a future time.


## **Supporting Documentation**

1. [Decision and Change Log: Representative Status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/decision-change-log-representative-status.md)
2. [Representative Status Widget Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/launch-materials/product-playbook-incident-response-plan.md)
3. [Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status-widget/contact-center)
4. [Service Map](https://www.docstomarkdown.pro/convert-markdown-to-google-docs-online/service-map.md)


## **Release History**

### Version 1.0 (MVP) ([Demo](https://dsva.slack.com/archives/C05L6HSJLHM/p1716406611746829))

The Representative Status widget 1.0 (MVP) was **released to 100% of users on May 20, 2024** ([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/release-plan-representative-status-widget-1.0.md)), which involved adding the Representative Status widget to the[ accredited representative landing page](https://www.va.gov/get-help-from-accredited-representative/) and the live[ Find a Representative page](https://www.va.gov/get-help-from-accredited-representative/find-rep/). 

The following widget states are displayed, based on the status code returned from the Benefits Claims API’s Power of Attorney Services ([Swagger documentation](https://developer.va.gov/explore/api/benefits-claims/docs?version=current)):

1. Unauthenticated
   1. User is not signed into VA.gov
2. Authenticated, no representative
   1. Status code 200 (successful API call, no active representative on file)
   2. Status code 422 (no Participant ID on file, indicating representation has never been appointed)
3. Authenticated, organization appointed (VSO)
   1. Status code 200 (successful API call, active VSO representation on file)
4. Authenticated, individual appointed (attorney or claims agent)
   1. Status code 200 (successful API call, active attorney or claims agent representation on file)
5. Error state (includes a number to call to inquire about representative status)
   1. Status code 401 (invalid token)
   2. Status code 404 (vets-api is unavailable)
   3. Status code 500, 502 and 503 (missing ICN, likely LOA1 users)
   4. Status code 504 (timeout issue, likely related to an ongoing issue with timeouts during vets-api deployments)


## **Future Plans and Ideas**

When the [Appoint a Representative product](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/appoint-a-representative) is released, the Representative Status widget will be included in the user flow to help users understand if they have existing representation, and that any requests for new representation will replace their current appointed representative.

We are also partnering with the Profile and MyVA teams to include a version of the representative status information that better matches existing design patterns.

While timeline is TBD, ideas for the next version are stored in our [Representative Status v2](https://dsva.slack.com/docs/T03FECE8V/F07UPV3TKUM) Slack canvas. Longer term ideas for Find a Representative are stored in our[ ARM Future Ideas](https://dsva.slack.com/docs/T03FECE8V/F06JUJ4CR19) Slack canvas.


## **Communications**

1. **Team Name**: Accredited Representation Management
2. **GitHub Label**: accredited-representation-management-team
3. **Slack channel**: #benefits-representation-management


## **Team Members**

1. **DEPO Lead**: Jennifer Bertsch
2. **PM**: Lindsay Li-Smith
3. **Engineering**: Holden Hinkle
4. **UX Research/Design**: Janelle Finnerty
