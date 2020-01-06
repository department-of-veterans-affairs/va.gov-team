# PR data dashboard

#### Communications
- Team Name: Product Support
- GitHub Label: product support
- Slack channel: VSP-product-support
- Product POCs: Andrea Hewitt and Dan Shank


#### Team Members
Dan Shank, FE developer
Travis Hilton, BE developer
Crystabel Reiter, Designer
Peter Hill, QA
Trevor Pierce, 508
Andrea Hewitt, product manager
---

## Overview
*A dashboard that pulls in GitHub data to display how many pull request reviews are taking more than on 2 business day to complete*

## Problem Statement
*Right now, we have no way of knowing quickly (without a lot of digging) if there are any issues or bottlenecks in the pull request review process.*

*If we have a dashboard that gives us up-to-date data from GitHub with calculations around PRs that are getting stuck at any point in the process, we can quickly identify problems in our process and jump to fix them.*
 
## User Goals

- *A user should be able to look at the dashboard and quickly identify if there are problems in the pull request process.*

## Business Goals

- *This can be used to capture metrics the VSP team is responsible for collecting and providing to DSVA*
- *After it’s clear there is a problem in the process, we can prioritize digging into the process and solving that problem*

## Assumptions


## Questions
How will be calculate the data so it’s just showing business days and not holidays?
How will we be able to automatically validate the data or will that be all a manual process?

## Solution Approach

- *We are building a prototype that is a very basic dashboard with GH data pulled in so that we can validate we can get that data and display it somewhere. We are starting there because we don’t want to sink a bunk of time into building a beautiful dashboard before knowing we can get the data and manipulate it to show what we want. 
- *We are building this dashboard in a way that we could add other data points to it in the future if it became clear those would give value. We don’t want to be locked into a dashboard with just these two data points if we realize there is some other GitHub data that is valuable*

## Value Propositions
The value this will bring to our platform process is being able to identify pull request bottlenecks early.

## KPIs
Stability of the dashboard -- >99% uptime

## Current Phase Requirements

#### In Current Scope
A user grab a percentage over any span of time for: Percent of vets-api first round code reviews completed within 48 hours (business days)
A user can grab a percentage over any span of time for: Percent of vets-website first round code reviews completed within 48 hours (business days)

#### Out of Current Scope
Unknown at this point



