# Platform services used by the mobile flagship app and team

The purpose of this document is to outline VA platform services that the mobile flagship app and team 
use and call out any potential concerns for scalability.

## Figma

**Purpose**: Managing and executing design/ux

**Comments**: VADS is going with the Professional level that is a lower level that we’re using 
and will take away some features. The main one is branching which we use. It might also close 
off dev mode which I don’t know we’re using right now. We are uncertain what plugins (or if) 
they will allow and how that will affect our work.

## vets-api

**Purpose**: middleware to pass data to and from the app

**Comments**: Some scalability issues that have gotten better in recent months, but nothing specific 
to mobile. Mobile uses a separate API hosted within vets-api to enable to team to adhere to industry 
best practices such as versioning and hosted business logic.

## DataDog

**Purpose**: [How the mobile team uses DataDog](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/BackEnd/Monitoring/DataDog/)

**Comments**: No scaling issues identified at this time. Some headaches getting access though.

## PagerDuty

**Purpose**: Routing alerts into slack and team members for purposes of support and triage

**Comments**: Last I asked for this access I was told they were running low on accounts. If we’re 
expected to use this service or route monitoring through it, it seems like it may not scale

## BigQuery

**Purpose**: Data warehouse

**Comments**: We’ve already seen scalability issues with this service mostly around cost, but there 
are no usage guidelines or expectations documented. Probably something we need to address

## Domo

**Purpose**: Data dashboard visualizations

**Comments**: No issues so far with this service, but also limited usage

## Sentry

**Purpose**: [How the mobile team uses Sentry](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/BackEnd/Monitoring/Sentry)

**Comments**: Sentry has general scaling issues not related to mobile specifically. Access is a bit of a pain.

## TestRail

**Purpose**: [How the mobile team uses TestRail](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/QA/Resources#testrail)

**Comments**: We were asked to share accounts for this. Most of the team was able to navigate around 
that in a batch request, but since then we’ve been asked to share logins

## Google Analytics

**Purpose**: User data collection

**Comments**: No scaling issues identified at this time.

## AWS ParamStore

**Purpose**: Sensitive key storage

**Comments**: No scaling issues identified at this time. Some headaches getting access though.

## Feature Flags

**Purpose**: Conditionally releasing backend features

**Comments**: The feature flag endpoint in vets-api has a history of getting bloated. We haven't specifically had any notable issues, but this is a service Web teams heavily use as well.

## Test Users

**Purpose**: testing various features in the app.

**Comments**: Mostly this is fine, but since we're assembling a document I did want to call out the lack of production test users.
