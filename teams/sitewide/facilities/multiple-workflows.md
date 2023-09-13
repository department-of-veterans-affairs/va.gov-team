# VBA Regional Office MVP editorial workflows proposal

## Value to Veterans
Veterans know where, when, and how they can receive services provided by VBA Regional Offices.

## Background
Facilities team will be piloting VBA Regional Offices (ROs) modernized web pages in an MVP with seven ROs. Editors at these VBA ROs need specific permissions to provide accurate information on their modernized web pages. There is an explicit need to prevent VBA editors from publishing an RO’s modernized web page before it has services and an operating status.

## Current State
In Drupal, we currently have a single Editorial Workflow that governs all content types. 

## Proposed Future State
Facilities is proposing the creation of a second, separate Workflow that would be considered an Experimental Feature, used only for VBA ROs. If successful, additional content types could be migrated to the second Workflow later.
However, CMS Team has expressed a preference for using Roles and Permissions instead of Workflow because:
- A separate Workflow was attempted in the past.
- The separate Workflow affected the primary Content view filters by Editorial Workflow: https://prod.cms.va.gov/admin/content 

To address this concern, Facilities researched and documented the previous Workflow failure and proposed a solution for the failure.

## Problem to Solve
Multiple Workflows created a situation where multiple moderation states with the same name caused publishing failures.

## Proposed Solution
Create a multiple filter where each Workflow has its own moderation states.
- Option 1: A moderation state has the same machine name, no matter the Workflow it’s a part of.
- Option 2: A moderation state has a different machine name in the dropdown menu depending on the Workflow it’s a part of.

## Measuring Success

