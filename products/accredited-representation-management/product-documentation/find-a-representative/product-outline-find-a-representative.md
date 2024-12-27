# **Product Outline: Find a Representative**

Team: Accredited Representation Management

Product URL:[ Find a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/find-rep)

Main entry point:[ Get help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/) (landing page)


## **Overview**

Create a user-friendly, accessible tool for Veterans to search for an accredited representative on VA.gov. This experience is intended to mirror the search functionality of older, external tools:[ OGC](https://www.va.gov/ogc/apps/accreditation/index.asp) and[ eBenefits](https://www.ebenefits.va.gov/ebenefits/vso-search).


## **Problem Statement**

There is not currently an experience on VA.gov for Veterans to find a representative. The current experience happens either in person (referrals) or on older systems (eBenefits, OGC) which do not provide a great user experience: confusing errors, dead ends, and inconsistent user flows.

**How might we enable Veterans to find an accredited representative on VA.gov?**


## **Desired User Outcomes**

1. Veterans can search for accredited representatives on VA.gov and filter by location and representative type (VSOs, attorneys and claims agents)
2. Veterans have a clear understanding of the different types of representatives (VSOs, attorneys and claims agents)


## **Desired Business Outcomes**

1. Increase the functionality of VA.gov to support searching for accredited representatives
2. Reduce the time it takes for Veterans to find an accredited representative
3. Expedite the deprecation of the legacy eBenefits platform by delivering replacement services


## **Assumptions**

1. Veterans are interested in searching for a representative on VA.gov
2. Veterans are more likely to appoint VSOs, Attorneys and Claims Agents
3. Only a small percentage of Veterans are interested in appointing individual representatives in a VSO


## **Solution Approach**

Our immediate goal for Find a Representative is to mirror the representative search functionality on eBenefits, but with critical/impactful updates found through user research. From there, we will examine the experience through usability testing and incorporate findings into future versions. Ultimately, we hope to provide a more consistent and intuitive "Find a Representative" experience that lives directly on VA.gov.


## **Measuring Success**

Monthly performance metrics are currently documented in Sharepoint: the [Performance Metrics](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FAccredited%20Representation%20Management%2FPerformance%20Metrics\&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72) folder includes raw data, which is summarized in the monthly [Sprint Report](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FAccredited%20Representation%20Management%2FVeteran%20Facing%20Sprint%20Reports%20and%20Demos\&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72) decks.

We are actively working with the Platform Analytics team to visualize our[ ARM OKRs](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718224425278/b300ea8d63dcaaa0cdad0ebf6b4a65a20fcc9371?sender=ubac5f0487f25bc4431288699) in a Domo dashboard at a future time.


## **Supporting Documentation**

1. [Decision and Change Log: Find a Representative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/decision-change-log-find-a-representative.md)
2. [Find a Representative Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/launch-materials/product-playbook-incident-response-plan.md#find-a-representative-playbookincident-response-plan)
3. [Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/find-a-representative/contact-center)
4. [Service Map](https://www.docstomarkdown.pro/convert-markdown-to-google-docs-online/service-map.md)


## **Release History**

### Version 2.0 ([Demo](https://dsva.slack.com/archives/C05L6HSJLHM/p1710372276269209))

Find a Representative 2.0 was **released to 100% of users on March 13, 2024**. A landing page "Get help from a VA accredited representative or VSO" (rooted in the Resources and Support section of VA.gov) was also published, and this content page includes a link to the Find a Representative tool ([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-2.0.md)).

There will be multiple entry points into the landing page, stemming from the main navigation as well as in-context with related benefits pages. The team worked with CAIA to implement Best Bets and redirects on March 18, 2024. [Complete outline of Redirects and Best Bets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/ia-design-docs/manage-accredited-representative.md).

The feature set for this version was updated based on UX research findings, and includes:

1. Search 
   1. Representative definitions
   2. Required fields
      1. Representative Type
         1. ~~Veteran Service Organization~~
         2. VSO Representative 🆕
         3. Attorney
         4. Claims agent
      2. Location
         1. Single consolidated field that accepts address 1, city, state, zip code
         2. `Use my location` feature to populate this location field
   3. Optional fields
      1. Search area
         1. Default to 50 miles
         2. Drop down for user to slect additional options (5, 10, 25, 50, 100, 200 miles + show all) 🆕
      2. Name of representative
2. Display search results
   1. Filter results by
      1. Distance (Closest to farthest)
      2. Name (First/last name A to Z and Z to A)
   2. Search result details
      1. Distance in miles
      2. Name
      3. Associated organizations (VSO Representatives only) 🆕
      4. Address
      5. Phone number
      6. Email 🆕
3. Include transparency around data accuracy 🆕
   1. Alert above search results
   2. ~~Report Outdated Information feature~~ _This feature was_ [_removed_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/decision-change-log-find-a-representative.md) _on 7/25/2024_


### Version 1.0 (MVP)

Find a Representative 1.0 (MVP) was targeted to release in December 2023 ([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-1.0.md)), but the team decided to hold off after discovering the representative data powering search results was only \~50% accurate. The feature set for this version includes:

1. Search
   1. Location
      1. Single consolidated field that accepts address 1, city, state, zip code
      2. `Use my location` feature to populate this location field
   2. Select type of rep (single select)
      1. Veteran Service Organization (VSO)
      2. Attorney (Lawyer)
      3. Claims agent
   3. Search by name
      1. Organization name
      2. Representative first name
      3. Representative last name
   4. Rep definitions
      1. Veteran Service Organization (VSO)
      2. Attorney
      3. Claims agent
2. Display search results
   1. List display
   2. Filter results by
      1. Distance
      2. Representative Name / Organization Name
   3. Search result details
      1. Distance in miles
      2. Name
      3. Address
      4. Phone number


## **Future Plans and Ideas**

When [Appoint a Representative](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/appoint-a-representative) v2 (with digital submission) is released, we will work with stakeholders to redirect related pages within[ eBenefits](https://www.docstomarkdown.pro/convert-markdown-to-google-docs-online/%5Bhttps://www.ebenefits.va.gov/ebenefits/vso-search).

We may also redirect the[ legacy OGC representative search](https://www.va.gov/ogc/apps/accreditation/index.asp), if there are no downstream effects.

While timeline is TBD, ideas for the next version are stored in our [Find a Representative v3](https://dsva.slack.com/docs/T03FECE8V/F086REGJ0JY) Slack canvas. Longer term ideas for Find a Representative are stored in our[ ARM Future Ideas](https://dsva.slack.com/docs/T03FECE8V/F06JUJ4CR19) Slack canvas.


## **Communications**

1. **Team Name**: Accredited Representation Management
2. **GitHub Label**: accredited-representation-management-team
3. **Slack channel**: #benefits-representation-management


## **Team Leads**

1. **DEPO Lead**: Jennifer Bertsch
2. **Product Manager**: Lindsay Li-Smith
3. **Engineering**: Holden Hinkle
4. **UX Research/Design**: Janelle Finnerty
