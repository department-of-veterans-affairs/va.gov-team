# Facility Locator README 

> Index of links to key resources

## Product overview
The Facility Locator is an unauthenticated search tool which can be used to find VA facilities and services. It leverages 
- the public-facing Lighthouse Facilities API for VA owned and operated facilities
- a separate, external and non-public database, Provider Profile Management System (PPMS) for Community Care (VA network) locations
- map functionality from [Mapbox](https://docs.mapbox.com/mapbox-gl-js/api/)

Search results connect to modernized websites for VAMCs and Vet Centers or legacy detail pages which provide basic location and service information for VBA and cemeteries.

## Team
- Product Owner: Michelle Middaugh (suzanne.middaugh@va.gov)
- Facility API/Lighthouse Product Owner: Dawn Pruitt 
- Product Manager: Jane Xiong 
- Zenhub label: Facilities, Facility Locator
- Slack channel: #sitewide-facilities


## Product
- [Facility Locator Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/facility-locator-product-outline.md) | September 2023 
- [Product Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/Facility-Locator-product-guide-updated%2003.04.22.pdf) | March 2022
  - [Link to Product Guide Word version](https://dvagov-my.sharepoint.com/:f:/r/personal/suzanne_middaugh_va_gov/Documents/Facility%20Locator?csf=1&web=1&e=3BaPie) _requires VA network connection_
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/product)
- [Analytics](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/analytics)
- [Solution Narrative](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/product/solution-narrative/README.md)

## Engineering
- [Engineering Documentation and Incident response](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/README.md)
- [Error states](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/error_states.md)
- [Process for reporting inaccurate data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/reporting-inaccurate-data.md)

## UX
- [Research and design hub page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/vsa-ux-transition-doc.md) | March 2022
- [Design folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/design)
- [Research README](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/research)


## Legacy artifacts
The following were last updated in March 2022
- [VSA Facilities Team transition folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/facility-locator/product-transition-doc) 
- [VSA Facilities Team Research and Design Hub document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/vsa-ux-transition-doc.md) 
- [VSA Facility Locator product transition document](https://github.com/department-of-veterans-affairs/va.gov-team/master/teams/vsa/teams/facility-locator/product-transition-doc/facility-locator-transition.md) 

---

<details>
  <summary> Legacy info about the Facility Locator</summary>

- Facility Locator 1.0 work can be found in this old repo: <https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator>

**Product and system stakeholders**
- VA Product owner: David Conlon 
- VA.gov Lead: Chris Johnston 
- Facility API Product Owner: Dave Mazik 
- VSSC Analyst/Engineer: Chad Holmes 
- Michael Villeneuve: He runs GEOBISL, and wrote custom queries that pass data from CDW to vets-api.
- Information Architecture: Mikki Northius, @Mikki on Slack

**VHA business stakeholders** 
All of these folks help drive the vision and implementation of VA Community Care benefits.
- Dr. Kamron Matthews: Works directly with community health care networks and regions for Veterans to receive community care benefits.
  - Zach Fain: Does a lot of implemntation work for networks
  - Tobie Wethington: Project Manager for community provider data from PPMS (used in Facility locator for Community Care Urgent Care, Community Care Provider Locator)
- Dr. Jen McDonald: Was involved with Mission Act implementation
- Dr. Leo Greenstone: Business sponsor to have AbleVets team build their community care provider lookup on Facility Locator
- Dr. Mark Upton: Has an interest in community care urgent care facilities
- All about the 2019-2020 roadmap to make the next version of the product even better for users.

**Product goals**
- Switch primary data source from Vets API to Facility API: <https://developer.va.gov/explore/facilities/docs/facilities>
- Reach parity with all legacy VA facility locator tools, so they can be depracated
  - Main legacy facility locator: https://www.va.gov/directory/guide/home.asp
  - Will need to  meet users' needs, but also convince the business to turn off old tools
- Integrate urgent care facility and urgent care pharmacy facilities into the product
  - Here is VA's current product: <https://vaurgentcarelocator.triwest.com/>
- Incorporate Mission Act-required facility drive time functionality
- Update the product's information architecture to organize facilities based on users' mental models (e.g., mental health care vs. Vet Center)
- Update the product's UI and interaction design so users can get to facility results in just a few clicks/taps
- Update facility detail page to match new VAMC facility page design
  - Here is a health facility detail page design: <https://www.va.gov/pittsburgh-health-care/locations/pittsburgh-va-medical-center-university-drive/>
- Surface basic Veteran-benefit eligibility information for each facility type (e.g., health care facility, community care provider, etc.)
- Use the VHA health service taxonomy for health facilities
- Create/update new VBA service taxonomy and NCA service taxonomy, with new structured content designed, and powered by Drupal
- Make it faster
- Fix bugs

**Design problems**
    - Users don't have a way to get to urgent care facilities
  - See the following research study documentation:
    1. Main research repo: <https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/community-care/urgent-care/research>
    2. Research readout: <https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/community-care/urgent-care/research/jun-2019/findings.md>
    3. User flows Mural board: <https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1560946920965/4bb321f266f232e3e1d91559b168a0f3c11fe84f>
- Search UI is inconsistent (i.e., free text search box, dropdowns, typeahead)
- Community care "facilities" are actually providers, so users are searching for persons, not places
- Facility API data often does not load or show up on facility detail pages
- Web browser's location/geo-location functionality doesn't always work (or work well) on facility search page

**Research topics**
- Pain points and bright spots with the current product (i.e., evaluative usability testing)
- Users' mental models for VA facilities and services, including community care
  - Specifically, how users think about in-network emergency care, urgency care, and urgent care pharmacy facilities
- How to integrate services and facilities into the UX (i.e., search by condition or service needed vs. facility type)
- How/if we should integrate content editing/publishing of some facility detail page content using the Drupal CMS
  - Images! Should we use Drupal to manage facility images for each facility detail page?
- Creating facility detail page URLs and content that are SEO (i.e., /wilmington-vet-center vs. /vba456)
- How to include drive-time functionality into UX
- How to make the product work faster for users
- How to better architect how we call data from the community care database
- All the data sources! How can we better streamline our data sources, and structured product content on the UI, so users get a consistent product experience
    
  </details>
