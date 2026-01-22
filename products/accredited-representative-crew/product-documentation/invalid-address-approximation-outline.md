# Product Outline: Invalid Address Approximation

#### Team: Accredited Representative Crew

## Overview

We want to support searches using the Find a Rep tool (FAR) returning as many valid, local results as possible, to improve the likelihood that veterans will find a match to work with.

We have the full file of all Accredited Representatives and VSOs, but not all are associated with valid contact information -- this is, in part, because of the historical paper-form submission, which is in the process of being digitized.

## Problem statement

Because data for current Accredited Representatives (VSOs, attorneys and claims agents) was collected from paper applications, addresses and other contact information was not validated at the time of submission.

As a result, 350+ Accredited Reps have partial or invalid addresses on file in GCLAWS. We want to make these representatives discoverable in FAR, which searches based on an input location (required) and ranks results using miles-away distance.

#### Out of scope: 

* The application form (21a) is being digitized and will validate addresses before submission, so the problem will diminish over time.
* Updating data for already-accredited reps (i.e., outside of form 21a) is on our roadmap, but not part of this feature.
* Changing the search tool so that location is not a required input (i.e., matching using a rep's name or accrediting organization regardless of geography) is out of scope, but may be revisited in the future.

## Solution

At a high level, we want to implement a vet-api backend behavior change -- some minor annotations on the UI will be added, but the  high-level experience using the search will remain the same. No new public endpoints are needed.

Because the search uses geocoding, but 3% of entries have invalid address data, we would like to approximate the locations of these Reps using the information they have provided to the greatest extent possible. Approximately 1/3 of the entries without valid addresses still contain a valid ZIP code or city-state pair (we prefer ZIP, where available, for greater precision).

We propose using the Geocoder gem to append lat/long values onto entries with partial/invalid addresses (i.e., those with a valid ZIP or city-state pair), so that these reps can be returned in a FAR search. Because ZIP codes change periodically, we will run a periodic job to refresh these lat/long estimates and append a last-checked date field to monitor freshness. Because these approximated locations will be populating existing fields, all Geocoder calls can be made asynchronously, and so performance of FAR at runtime is unaffected. 

The Geocoder gem is compatible with a variety of APIs; we propose using the Mapbox API (already used in other VA tools) to give us the approximated coordinates. While this will require creating a Mapbox API key, our expected level of utilization is <1,000/month (accounting for regular data refreshes), and our data retention complies with their Terms of Service (which is not the case for, for example, the Google Maps geocoding API).

In the UI, we currently include a link out to Google Maps for reps with validated addresses; we will use this pattern to the extent possible for reps with approximated addresses: the fields we provide to Mapbox (ZIP, city, state) will be displayed in search-result cards and linked to Google Maps in a similar way (although only at the level of the ZIP or city/state, not the approximated lat/long). The distance-away will be calculated and ordered in the same way, but will appear with an "(estimated)" annotation when the address has been approximated.

#### Desired User Outcomes

1. Representatives with incomplete or invalid address information are discoverable through FAR.
2. Veterans using FAR are given enough information about representatives to confirm they are local and contactable.

#### Undesired User Outcomes

1. Showing results with incomplete or invalid addresses can decrease user trust in the quality and accuracy of search results and perception of FAR (or of Reps).

#### Desired Business Outcomes

1. Searches in FAR return more results (and are a complete listing of nearby Reps).
2. All (as many as possible) Accredited Reps are discoverable in FAR.
3. Users are more likely to work with a Rep after using FAR.

#### Undesired Business Outcomes

1. Users of FAR less likely to contact a Rep (i.e., because invalid or non-uniform data harms perception of tool/ecosystem).
2. Reps direct requests to update contact information to inappropriate channels or in excess volume -- for VSO-accredited Reps, contact info changes should come from their primary org, for example.

#### Assumptions

1. Reps with invalid addresses have supplied enough information to accurately approximate their location (i.e., ZIP or city/state).
2. "Miles away" param in FAR is large enough that Reps attached to a ZIP or city centroid will be findable by local users.
3. The current number of Reps with invalid (/partial) addresses is large enough to justify the effort / technical lift.


## Measuring Success

#### KPIs 

1. 100% of representatives with an invalid full address, but a valid zip code are discoverable in Find a Representative search results.
2. 100% of representatives with an invalid full address, but a valid city/state combination are discoverable in Find a Representative search results.

#### OKRs



## Supporting Documentation

1. [Research spike](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122133) exploring approaches and deciding on Geocoder gem
2. [Research spike](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126249) selecting an API provider


## Communications

1. Team Name: Accredited Representation Crew
2. GitHub Label: ar-crew
3. Slack channel: #benefits-accredited-rep-crew

#### Team Leads

1. DEPO Lead: Jennifer Bertsch
2. Product: Lindsay Li-Smith and Sam Stromberg
3. Engineering: Jeff Wallace and Holden Hinkle
4. UX Research/Design: Ian McCullough
