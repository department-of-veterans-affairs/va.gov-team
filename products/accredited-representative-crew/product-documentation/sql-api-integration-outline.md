# Product Outline: SQL API Integration

Team: Accredited Representative Crew

## Overview

The ARC team is working to integrate the Accreditation API (see below), owned by the GCLAWS team, to maintain complete and up-to-date contact information for Accredited Reps, which is used in the Find a Representative, Appoint a Representative, and Representative Status tools ("Rep Tools" below).
While this integration is in progress, the team has been manually processing a file to conduct weekly updates. This file is run on of a Microsoft SQL Reporting Server owned by GCLAWS -- we would like to hit this server's API directly, both as an improvement on the current process and to provide redundancy with the Accreditation API.

## Problem statement

Currently, data underpinning the Rep Tools is updated on a weekly cadence, requiring some recurring manual work with a .csv file (see documentation below in Resources) and creating lag between when contact info gets updated and when it's available in the Rep Tools.

## Solution

In order to both automate the current process and provide a second option moving forward, we would like to hit the SQL Reporting Server's API directly (as a daily job) instead of using it to generate a spreadsheet (weekly). The code currently being used to push data from the .csv into the application can be used with API-generated data with minimal modification, so the engineering lift is relatively small.
Because the GCLAWS team owns the SQL Reporting server and its API, we are working with them to obtain relevant permissions and credentials. Because the data is being used to populate public-facing tools, while the data is Personally Identifying, it is already published publicly in its entirety (for example, the FAR tool includes a "show all" option).

#### Desired User Outcomes

1. When an Accredited Rep is added to the system or updates their contact information, that change is reflected more quickly within the Rep Tools.
2. Once the Accreditation API has been deployed, if it goes down, the Rep Tools have a second route to receive data updates.

#### Undesired User Outcomes

1. Users spend time attempting to contact a representative and ultimately are unable to connect with them, because they were referencing old contact information that is no longer associated with the representative.

#### Desired Business Outcomes

1. Information on VA.gov's Rep Tools is accurate and timely.
2. Periodic data updates to Rep Tools require minimal effort from the team.

#### Undesired Business Outcomes

1. GCLAWS changes their roadmap as a result of this integration, delaying progress on the Accreditation API (which encompasses a large range of services) or maintaining this SQL server beyond its intended lifespan.

#### Assumptions

1. Code written to integrate data from the manual .csv merge, from hitting the SQL API, and from the future Accreditation API is largely reusable / agnostic to the source of data.


## Measuring Success

#### KPIs 

1. New listings of Accredited Reps and approved changes to contact information are reflected on the FAR and AAR tools within 48 hours.

#### OKRs



## Supporting Documentation

1. [Ticket for Architecture Intent](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97573) for the Accreditation API integration
2. [Current manual process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/98e64010e9ea8c3073078cc8aec11253a38bbfe9/products/accredited-representation-management/how-to-manually-update-representative-data.md) for weekly data updates

#### Communications

1. Team Name: Accredited Representation Crew
2. GitHub Label: ar-crew
3. Slack channel: #benefits-accredited-rep-crew

#### Team Leads

1. DEPO Lead: Jennifer Bertsch
2. Product: Lindsay Li-Smith and Sam Stromberg
3. Engineering: Jeff Wallace and Holden Hinkle
4. UX Research/Design: Ian McCullough
