#### Team: Accredited Representative Crew

## Overview

We want to support searches using the Find a Rep tool (FAR) returning as many valid, local results as possible, to improve the likelihood that veterans will find a match to work with.
We have the full file of all Accredited Representatives and VSOs, but not all are associated with valid contact information -- this is, in part, because of the historical paper-form submission, which is in the process of being digitized.

## Problem statement

Because data for current Accredited Representatives (VSOs, attorneys and claims agents) was collected from paper applications, addresses and other contact information was not validated at the time of submission.
As a result, [number] of Accredited Reps have partial or invalid addresses on file in GCLAWS. We want to make these representatives discoverable in FAR, which matches either directly on Rep name or returning a list of matches using location and miles-away distance.

#### Out of scope: 

* The application form (21a) is being digitized and will validate addresses before submission, so the problem will diminish over time.
* Updating data for already-accredited reps (i.e., outside of form 21a) is on our roadmap, but not part of this feature.

## Solution

Because the search uses geocoding, but we have [number/proportion] of bad data, we would like to approximate the locations of these Reps using the information they have provided to the greatest extent possible.
We propose using the Geocoder gem, connected to the (free) API Geocodeo, to create a lookup table mapping existing invalid addresses onto approximate lat/long values, and adding these values to FAR so that these reps can be returned in a search.
In the longer term, other features in our roadmap (see Out of Scope above) should eventually moot the issue.

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

1. Research spike exploring approaches and deciding on Geocoder gem
2. Research spike selecting the the Geocodeo API


## Communications

1. Team Name: Accredited Representation Crew
2. GitHub Label: ar-crew
3. Slack channel: #benefits-accredited-rep-crew

#### Team Leads

1. DEPO Lead: Jennifer Bertsch
2. Product: Lindsay Li-Smith and Sam Stromberg
3. Engineering: Jeff Wallace and Holden Hinkle
4. UX Research/Design: Marisa Dominguez
