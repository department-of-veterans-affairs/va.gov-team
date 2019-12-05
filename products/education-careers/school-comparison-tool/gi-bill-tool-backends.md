# GI Bill Tool Backends

## Background

GIDS (GI Bill Data Service) is a tool used by 4-5 people to produce a single table of data by uploading various spreadsheets. Typically this occurs two times per month. This “institutions” table is what powers the GI Bill Comparison Tool (frontend).

In the past when GIDS users wanted to deploy new data (either to the production app or preview app) GIDS would connect to that app’s pg database directly, would empty the table, and then load in the new rows of data.

Each release of data is treated as immutable/read-only. Although some requested future features (e.g. user-generated reviews) may result in the creation of additional tables to power those features within vets-api, the core school data GIDS produces is expected to remain the same in its read-only form and function.

We have decided to eliminate the preview app. Instead, a url parameter will be used to direct the production GIBCT frontend to select alternative versions of the data produced by GIDS. GIDS will provide users these special preview links.

**We face new decisions about where the GIDS data lives and how it moves to the frontend**, now that we are breaking apart the GIBCT into an API backend and React frontend.

Conceptually there are two ways for us to move forward.

## Option 1: GIDS as publisher of data artifacts

This is the approach that was taken in the past where GIDS would copy the school data to remote production or preview app databases.  However, we have been planning to do this differently due to security and reliability concerns that arose.

If we add the GIBCT institutions table to vets-api then having an external tool with direct access to the entire vets-api database was considered a security vulnerability that could adversely affect all of vets-api.

There was some discussion of having GIDS push data to the vets-api database using a very restricted pg user account and I do not recall why we ruled that out.

We also considered having the vets-api rails app maintain two database connections, one to its usual database and one to the GIBCT database. This was ruled out because Rails is not good at this and we didn’t want to risk destabilizing vets-api.

#### A: postgres_fdw

As outlined in department-of-veterans-affairs/vets-website#3960 we were thinking that postgres foreign data wrappers could be a good solution. This is basically a twist on having Rails maintain two db connections except we’d entrust GIBCT connection management to postgres and the vets-api Rails application would somewhat automatically have direct access to the GIBCT foreign table. It also is a more secure approach because the connection is one-way: vets-api db can only perform read-only queries on the GIBCT db and GIDS has no access to the vets-api database.

Note that even though we’d have a persistent connection to the GIBCT database that table would still be treated as a data artifact owned by GIBCT. Vets-api would incorporate new GIBCT data into its own table(s) whenever new data is released.  This is partly for puritanical reasons but more so to avoid being forced to maintain identical/shared schemas so that the two applications can evolve and be deployed separately.

Developer experience requires some smoothing-over due to how the pg configuration expects to be able to create an external database connection.

* Recent thoughtbot post with some helpful nuggets in it https://robots.thoughtbot.com/postgres-foreign-data-wrapper

#### B: GIDS push to vets-api via restricted user

The code for doing this already exists, but we would need to create this special user account and privileges. Because the restricted privileges are not defined in the main codebase they may be difficult to maintain, change, and test locally and in production. (For example, what will alert us if permissions were relaxed in production by mistake? What's the process for adding new table access for the restricted user?)

#### C: vets-api worker pulls from GIDS

The worker could connect to GIDS, either via postgres or a REST endpoint, and then import the data into tables owned by vets-api. Bear in mind that each version of data is roughly 35k rows with 88 columns.

## Option 2: GIDS as backend API

You might say that DS in the GIDS acronym already implies that it is a backend microservice that exposes a RESTful API. Depending on our goals this could be a perfectly valid approach and appears more in-line with the broader purpose of vets-api as an API facade on top of other (often legacy) VA systems. However, unless we're somehow improving upon or transforming the data coming from GIDS, it actually goes against our goal to organize our services as closely to vets-api as possible. GIDS is not external to our organization—making it very different from other backend services vets.gov relies on such as MVI.

#### A: vets-api client of GIDS

We implement a GIDS API client within vets-api to fetch data from GIDS.

This does add request latency and I'm not sure what value-add such a middle layer contributes in this case. Pagination and other features of the API should be implemented directly in GIDS and we should avoid spreading application logic around without good reason.

#### B: Reverse proxy to GIDS

If the entire backend API for the project is developed within GIDS then we should simply reverse proxy API requests directly to GIDS.
