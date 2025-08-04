# Representative Status - Read Me

[Product Outline for Representative Status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/product-outline-representative-status.md
)

## **Recommended Next Steps**

#### Next Version Priorities - Representative Status 2.1

A future version of Representative Status should strive to bring the error rate (for calling the [Lighthouse Benefits Claims API](https://developer.va.gov/explore/api/benefits-claims/docs?version=current)) below 1%. Currently, the biggest impacts to error rate are when the API undergoes scheduled maintenance or has an unplanned incident/outage.
1. How might we update our Representative Status product, to hold off on API calls during periods of downtime (due to maintenance or incidents/outages) when we know that the API will return an error?
2. How might we improve the UX during periods of downtime? Our current error state provides users with a number to call, to check their representative status. 

Related ticket: [[Representative Status Widget] Add Downtime Notifications #113643](https://github.com/department-of-veterans-affairs/va.gov-team/issues/113643)
- Refinement is required to define the approach
- An early idea was to lean on existing downtime handling within `vets-website`
   - [Documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications)
   - [vets-website component](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/monitoring/DowntimeNotification)
 
#### Known Bugs
Some bugs have been identified for our Production experience. These have not yet been addressed due to lower priority, feel free to prioritize + address as needed.

[Known bugs are stored in this view of the Github project board](https://github.com/orgs/department-of-veterans-affairs/projects/1180/views/41). 

#### Future Ideas

Longer term ideas are stored in our [ARM Future Ideas](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/ARM%20Future%20Ideas.docx?d=wfe95a788166e4670bfda5a59798550d7&csf=1&web=1&e=7iFIw0) document.
