# Product Outline: Invalid Address Approximation

#### Team: Accredited Representative Crew

## Overview

We want to support searches using the Find a Rep tool (FAR) returning as many valid, local results as possible, to improve the likelihood that veterans will find a match to work with.

We have the full file of all Accredited Representatives and VSOs, but not all are associated with valid contact information -- this is, in part, because of the historical paper-form submission, which is in the process of being digitized.

## Problem statement

Because data for current Accredited Representatives (VSOs, attorneys and claims agents) was collected from paper applications, addresses and other contact information was not validated at the time of submission.

As a result, 350+ Accredited Reps have partial or invalid addresses on file in GCLAWS. We want to make these representatives discoverable in FAR, which matches either directly on Rep name or returning a list of matches using location and miles-away distance.

#### Out of scope: 

* The application form (21a) is being digitized and will validate addresses before submission, so the problem will diminish over time.
* Updating data for already-accredited reps (i.e., outside of form 21a) is on our roadmap, but not part of this feature.

## Solution

At a high level, we want to implement a vet-api backend-only behavior change -- no frontend UX changes or new public endpoints are needed.

Because the search uses geocoding, but 3% of entries have invalid address data, we would like to approximate the locations of these Reps using the information they have provided to the greatest extent possible. Approximately 1/3 of the entries without valid addresses still contain a valid ZIP code or city-state pair (we prefer ZIP, where available, for greater precision).

We propose using the Geocoder gem to create a lookup table mapping existing partial/invalid addresses (i.e., those with a valid ZIP or city-state pair) onto lat/long values, and adding these values to FAR so that these reps can be returned in a search. The use of a lookup table at runtime minimizes processing time and avoids duplicative API calls -- a given ZIP (or city-state pair) can be geocoded asynchronously, and once cached will be retrieved for all matching entries with O(1). 

The Geocoder gem is compatible with a variety of APIs; we will use US Census ZCTA data as the initial source for the table, and we propose using the API Geocodio to handle city-state pairs and as a fallback for missing ZIPs. While this will require creating a Geocodio account, our expected level of utilization falls within the free service tier, and our permanent retention in the lookup table complies with their Terms of Service (which is not the case for, for example, the Google Maps geocoding API).

In the longer term, other features in our roadmap (see Out of Scope above) should eventually moot the issue. That said, USPS does periodically update ZIP codes (additions/changes), and so in the meantime we'll need to conduct infrequent checks to see if any of our entries are affected.


#### Desired User Outcomes

1. In the short term, even representatives with incomplete or invalid address information are discoverable through FAR.
2. Veterans using FAR are given enough information about representatives to confirm they are local and contactable.

#### Undesired User Outcomes

1. Representatives may not want all contact information known to OGC visible through FAR, so sharing more data than they intend is undesirable.
2. Showing results with incomplete or invalid addresses can decrease user trust in the quality and accuracy of search results and perception of FAR (or even of Reps).

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
2. [Research spike](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126249) selecting the the Geocodeo API


## Communications

1. Team Name: Accredited Representation Crew
2. GitHub Label: ar-crew
3. Slack channel: #benefits-accredited-rep-crew

#### Team Leads

1. DEPO Lead: Jennifer Bertsch
2. Product: Lindsay Li-Smith and Sam Stromberg
3. Engineering: Jeff Wallace and Holden Hinkle
4. UX Research/Design: Ian McCullough
