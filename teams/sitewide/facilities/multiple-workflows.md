# VBA Regional Office MVP editorial workflows proposal

## Value to Veterans
Veterans know where, when, and how they can receive services provided by VBA Regional Offices.

(From Michelle: This is the RO initiative's value to Veterans. How will Veterans benefit from the second workflow experiment?)

## Background
Facilities team will be piloting VBA Regional Offices (ROs) modernized web pages in an MVP with seven ROs. Editors at these VBA ROs need specific permissions to provide accurate information on their modernized web pages. There is an explicit need to prevent VBA editors from publishing an RO’s modernized web page before it has services and an operating status.

## Current State
In Drupal, we currently have a single Editorial Workflow that governs all content types. 

(From Michelle: We should include why the current functionality will not meet the RO initiative needs. This might mean moving the last sentence in the previous paragraph here: There is an explicit need to prevent VBA editors from publishing an RO’s modernized web page before it has services and an operating status, but my understanding is also that we want to prevent them from archiving valid facility locations.)

(From Michelle: May need Steve to shape some of this but.... we can block archiving now using code, rather than workflow which makes it somewhat invisible/ unclear where the block exists. This method would allow us to restrict the ability to archive by content type and by admins only.)

## Proposed Future State
Facilities is proposing the creation of a second, separate Workflow that would be considered an Experimental Feature, used only for VBA ROs. If successful, additional content types could be migrated to the second Workflow later.

(From Michelle: Let's proactively address why a change to roles and/or permissions will not suit RO needs and why the Facilities team thinks the workflow approach is the best option.) 

However, CMS Team has expressed a preference for using Roles and Permissions instead of Workflow because:
- A separate Workflow was attempted in the past.
- The separate Workflow affected the primary Content view filters by Editorial Workflow: https://prod.cms.va.gov/admin/content 

To address this concern, Facilities researched and documented the previous Workflow failure and proposed a solution for the failure.

## Problem to Solve
Multiple Workflows created a situation where multiple moderation states with the same name caused publishing failures.
<img width="624" alt="Screenshot 2023-09-13 at 12 25 44 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/73648238/33f3bde3-06a4-42ba-932f-7cf8ed45316e">


## Proposed Solution
Create a multiple filter where each Workflow has its own moderation states.

### Option 1: A moderation state has the same machine name, no matter the Workflow it’s a part of.
<img width="623" alt="Screenshot 2023-09-13 at 12 25 58 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/73648238/b890ee4b-fffd-4d0d-8b5d-95631c401505">

### Option 2: A moderation state has a different machine name in the dropdown menu depending on the Workflow it’s a part of.
<img width="618" alt="Screenshot 2023-09-13 at 12 26 09 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/73648238/d6115e50-baf5-4644-8276-7e88c8adb580">


## Measuring Success

(From Michelle: How will we know this experiment is a success? Likely a reduction in inappropriate/inaccurate archives? perhaps measured by the number of issues handled by the Support team?)
