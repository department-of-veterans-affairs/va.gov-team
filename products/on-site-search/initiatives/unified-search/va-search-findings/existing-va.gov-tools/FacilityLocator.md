## Common Issues or Limitations (Based on Analytics or Prior Research)

Performance and Technical Issues

> "Pagination: PPMS does not offer pagination as a parameter on their API, except for the Pharmacy endpoint. For other searches (Providers, ER, Urgent care), we provide PPMS with an address, radius and maximum results, and the endpoint responds with all providers in that maximum results/radius for the address, and THEN filters by service, so a request for 20 providers may return 20 providers in the geographic then filter down to 5 results for the service match, which affects our ability to effectively paginate."

> "The current implementation has significant latency, particularly for community care searches. Search performance is impacted by the number of results returned and the search parameters/bounding box. These factors currently have default settings which have no clear business rationale and may not be aligned with user expectations."

Data Quality and Accuracy Issues

> "Data Inaccuracies related to community care providers, especially for urgent or emergency care. Incorrect or outdated facility information, Facilities listed as open but are closed, Incorrect contact numbers, Facilities not accepting VA benefits, Incorrect facility types (e.g., listed as urgent care but is a primary care office)."

Search Functionality Limitations

> "The Facility Locator currently forces Veterans to choose the type of facility they wish to search for. This assumes the following: Veterans understand the organizational structure at the VA, Services are offered at only one type of facility, Veterans understand that they should perform more than one type of search to get a full list of options."

## User Segments/Search Needs

Search Behavior by User Type

> "Veterans search by a specific service and by distance when choosing a location to visit. The Facility Locator proved most helpful when Veterans understood what services they could receive from locations nearest to them. Rural Veterans in particular know that they will have to travel to larger towns in their area and or in another state to receive specialized care."

Geographic Differences

> "The expected number of search results varies based on geographic location. Rural participants wanted to see 2-3 results returned and mentioned that anything listed after that would be too far to travel. Urban participants expected to see a larger total number of results returned, but mentioned that they would generally want to see around 5 locations listed."

## Known User Pain Points

Search Experience Issues

> "Difficulty Searching - Number of responses: 15, Example response: 'When I type something in the search it brings up extremely unrelated results each time.' Example response: 'Can't find what I'm looking for without multiple searches.'"

Map and Navigation Problems

> "Some users wish the numbers on both the map and the list results were more useful. On the list, some users wanted to click the result number to center the associated facility on the map, but were not able to. On the map, results are shown by number only, which forces users to click multiple map markers to find the facility they are trying to locate."

Data Trust Issues

> "Veterans need consistent information between online and physical locations and are skeptical of information presented on VA.gov. Veterans receive information from multiple sources and it is confusing when that information is conflicting. VA locations may be named differently on Google Maps or on a search engine than they are on the Facility detail page on the VA.gov site."
> Integration with CMS or Document Systems

Drupal CMS Integration

> "Drupal data about Facilities is sent to Lighthouse via a nightly migration. We refer to that data as the 'Overlay.' The VA.gov Facility Locator front-end then queries Lighthouse, and receives LH data which includes Drupal overlay data. Changes after a facility are published are added to the POST queue in drupal and sent to Lighthouse. Changes to lighthouse are relatively immediate in Facility locator."

Facility URL Management

> "If a facility has a modernized, published Drupal page: That URL gets sent to Lighthouse, and the facility-locator app will use that URL via vets-api. The linked title will point to the modernized page. If a facility does NOT have a modernized, published Drupal page: the linked title will point to a Facility Locator detail page."

## Past Research Related to VA.gov Search

Discovery Research (2019)

> "We conducted moderated user testing sessions with 7 participants, all Veterans, during the week of October 28 – November 1, 2019. The participants were recruited through the DSVA's recruitment contract with Perigean. Sessions were conducted and recorded via Zoom."

Search Expectations Research (2020)

> "A task-based remote, moderated usability study was conducted via Zoom between March 4 - March 6, 2020. A moderator began with introduction questions and prompted users with questions (from the conversation guide). Participants were encouraged to talk through their exploration of the Facility Locator on VA.gov."

Mobile Experience Research (2021)

> "Because the Sitewide team's contract was not extended, this research effort was suspended after the completion of 5 out of the scheduled 9 interviews."

## Success Metrics and Evaluation Criteria

Key Performance Indicators

> "Average page load time: 4.01 sec, Goal 1: Facility Details Viewed: 21.60%, Bounce rate: 16.74%"

Search Refinement Rates

> "Search refinements by facility type: Average: 3.64% (2020), 4.44% (2021), 5.27% (2022). VA health: 2.49% (2020), 2.38% (2021), 2.88% (2022). Urgent care: 5.53% (2020), 7.97% (2021), 8.85% (2022)."

User Satisfaction Metrics

> "KPI 4: User satisfaction ratings - Key Results: A baseline rate for 5 star user satisfaction will be established by April 1, 2020."

## Current Search Landscape

The Facility Locator serves as VA's single source of truth for finding facilities across VHA, VBA, and NCA. However, it faces significant challenges including performance issues (particularly with community care searches), data accuracy problems, and a facility-centric search model that doesn't align with Veterans' service-based mental models. The system integrates multiple data sources through Lighthouse API and PPMS, with Drupal CMS providing content overlay. User research consistently shows that Veterans prefer searching by service rather than facility type, and geographic location significantly impacts search expectations.

**User Requirements**

- Service-centric search functionality
- Consistent, accurate facility information
- Fast search performance (<2-3 seconds)
- Mobile-optimized map experience
- Clear facility type differentiation

**Business Requirements**

- Integration with multiple VA systems (VHA, VBA, NCA)
- Support for community care provider searches
- Real-time data synchronization
- Accessibility compliance

**Technical Requirements**

- Lighthouse API integration
- PPMS data integration
- Drupal CMS content management
- Mapbox mapping functionality
- Performance optimization for large datasets

## Key Questions or Gaps to Address

Service Taxonomy: How can we expand from 19 to ~100 available service types in the search interface?
Performance: How can we reduce search latency, especially for community care searches?
Data Accuracy: How can we improve real-time data synchronization and accuracy?
Mobile Experience: How can we enhance map-list interaction on mobile devices?
User Mental Models: How can we better align the search experience with Veterans' service-based thinking?

## Recommendations for Next Steps

Research Recommendations

> "The following are recommendations to consider during the redesign of the Facility Locator Tool: Include a link to the facility locator tool on high traffic areas of the VA.gov website, Paginate the search results or show a scroll bar, Attach a number to locations on map, Show one most relevant location followed by list to browse, Provide option to select multiple services, Surface relevant location information on the search results - Phone number, Today's hours, Directions, Service selected"

Design Recommendations

> "Include a 'preparing for your visit' section on the facility detail pages that include: Physical information like parking, on-site directions, wheelchair availability information, Services and doctors, Helpful information for caregivers, Move New and Existing Patient Wait Times up on the detail page"

Search Experience Recommendations

> "Idea | Could the Facility Locator tool be a three step form that asks: User location, Location type seeking, Service(s) needed"

Research Topics to Investigate

> "Research topics: Pain points and bright spots with the current product (i.e., evaluative usability testing), Users' mental models for VA facilities and services, including community care - Specifically, how users think about in-network emergency care, urgency care, and urgent care pharmacy facilities, How to integrate services and facilities into the UX (i.e., search by condition or service needed vs. facility type), How/if we should integrate content editing/publishing of some facility detail page content using the Drupal CMS"

Additional Research Areas

> "There were topics we could not cover during this initial discovery session. The following are topics that still need to be investigated: Mission Act knowledge, Urgent Care eligibility, Map usage, Caregiver usages of Facility Locator Tool"

Future Research Questions

> "Research questions: How easy/difficult is it for a user to find a facility?, What ways do users navigate to the facility locator?, What search criteria should be present so that Veterans can find facilities?, What information do Veterans expect to see in the search results?, Do Veterans understand what the different facility classifications mean?, How do Veterans distinguish emergency, urgent, and community care facilities?, What other tools/sites do vets use to find facilities or services?"

Urgent Care Research Recommendations

> "Recommendations from the Urgent Care study that are relevant to Facility Locator: Moving 'Find a VA Location' closer to 'Search' and/or 'Contact Us', Removing the location finder link from the navigation, and integrating it into the existing 'Search' drop down similarly to how it has been integrated into the 'Contact Us' drop down."

Community Care Research Findings

> "The following findings from the Community Care study are helpful to the Facility Locator Discovery research: Veterans anticipate entering city or zip code and provider specialty criteria to establish a suitable set of results, 5 of 5 participants expect and would use a tool that utilizes geolocation (location tracking) to provide results, 5 of 5 expect to choose a provider specialty up front to make the results more relevant."
