# **Product Outline: Find a Representative**

**Team**: Accredited Representation Management

Product URL: [ Find a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/find-rep)

Main entry points:
1. [VA.gov homepage](https://www.va.gov/)
2. [Get help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/) (landing page)


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
3. Only a small percentage of Veterans are interested in appointing individual representatives within a VSO

---
## **Measuring Success**

**Datadog Dashboards**
1. [ARM: Find a Representative](https://vagov.ddog-gov.com/dashboard/55d-sc2-bxi/arm-find-a-representative?fromUser=false&refresh_mode=sliding&from_ts=1736986754401&to_ts=1739578754401&live=true)

**Domo Dashboards**
1. [Accredited Representation Managment](https://va-gov.domo.com/page/1897070864) - User trends for ARM products


## **Release History**

#### Version 1.0 (MVP) | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-1.0.md)

Targeted to release in December 2023, but a "No Go" was determined after discovering the representative data powering search results was only ~50% accurate. 

<details><summary>Expand to view the feature set for this version.</summary>

1. Search
   1. Location
      1. Single consolidated field that accepts any form of address
      2. `Use my location` feature to populate this location field
   2. Select type of rep (single select)
      1. Veteran Service Organization (VSO)
      2. Attorney
      3. Claims Agent
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

</details>

#### Version 2.0 | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-2.0.md) and [Demo Video](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Product%20Information/Product%20Demo%20Recordings/Find%20a%20Representative%20Demo.mov?csf=1&web=1&e=AaVq9f)

Released to 100% of users on March 13, 2024. A landing page "Get help from a VA accredited representative or VSO" (rooted in the Resources and Support section of VA.gov) was also published, and this content page includes a link to the Find a Representative tool ([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-2.0.md)).

<details><summary>Expand to view the feature set for this version.</summary>

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
  
</details>

---

### Next Steps

#### Version 3.0 | Release Date TBD

Introducing search filters, for users to refine their search results based on the representative's associated VSO. [WIP Figma designs for Find a Representative 3.0](https://www.figma.com/design/bzbwObT9hiItve0q3cQX9c/ARM---Find-and-Appoint-a-Representative?node-id=0-19109&p=f&t=9UDkWLdMS1C7DVfU-0)
   
#### Known Bugs
Some bugs have been identified for our Production experience. These have not yet been addressed due to lower priority, feel free to prioritize + address as needed.

[Known bugs are stored in this view of the Github project board](https://github.com/orgs/department-of-veterans-affairs/projects/1180/views/41). 

#### Redirect Goals
When [Appoint a Representative](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/appoint-a-representative) is out of pilot for the online submission of VA Form 21-22 (i.e. most, or all VSOs can accept online submissions), we will work with stakeholders to redirect related pages within eBenefits:
1. https://www.ebenefits.va.gov/ebenfits/vso-search - redirect to Find a Representative
2. https://www.ebenefits.va.gov/ebenfits/about/feature?feature=request-vso-representative - redirect to Appoint a Representative
3. https://www.ebenefits.va.gov/ebenfits/manage/representative - redirect to landing page

There may be an opportunity to redirect the following OGC Accreditation Search pages to Find a Representative, if there are no downstream effects. **Before proceeding with this redirect, connect with OGC and GCLAWS stakeholders to understand if any tools rely on this webpage.**
1. https://www.va.gov/ogc/apps/accreditation/index.asp
2. https://www.va.gov/ogc/apps/accreditation/accredpeople.asp (and all child pages)

Reference: [IA redirect plan - Sharepoint](https://dvagov.sharepoint.com/:w:/r/sites/SitewideCAIA/_layouts/15/Doc.aspx?sourcedoc=%7B203EE57C-1260-4A20-9981-40A7396FB36A%7D&file=0.0%20Redirect%20plan.docx&action=default&mobileredirect=true)

#### Future Ideas
Longer term ideas are stored in our[ARM Future Ideas](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/ARM%20Future%20Ideas.docx?d=wfe95a788166e4670bfda5a59798550d7&csf=1&web=1&e=7iFIw0) document.

---
## **Supporting Documentation**

1. [Decision and Change Log: Find a Representative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/decision-change-log-find-a-representative.md)
2. [Find a Representative Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/technical-documentation/product-playbook-incident-response-plan.md)
3. [Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/find-a-representative/contact-center) (with screenshots)

## **Communications**

1. **Team Name**: Accredited Representation Crew - Team Appoint
2. **GitHub Label**: ar-crew, ar-team-appoint
3. **Slack channel**: #benefits-accredited-rep-crew


## **Team Leads**

1. **DEPO Lead**: Jennifer Bertsch
2. **Product Manager**: Mia Bottcher, Lindsay Li-Smith
3. **Engineering**: Nick Sprinkle
4. **UX Research/Design**: David Krofel, Lena-Phuong Tran
