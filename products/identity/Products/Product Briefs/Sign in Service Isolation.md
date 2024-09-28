# Sign in Service - Isolation

## Overview: (Provide a high level description of the product/set of features)

Migrating SiS from Vets-API to its own application within K8s

## Problem Statement: (Describe what problem we’re going to address with this product)

Migrating SiS to its own application will give us more control over the app and infrastructure, which in turn will help us ensure the stability of SiS as we will be the only contributing factors for the new app without any outside interference any longer.

## Relevant Documents:

## What's In Scope: 
For this first iteration, the focus will be on:
*

Create new infrastructure

Create test environments

Determine split point from vets api and SiS (What needs to stay in vets-api and what needs to come over)

Migrate existing data from vets api to SiS if needed

Migrate database schemas 

Migrate routes from vets api to app

Migrate remainder of code over to new app

Ensure existing clients still work with new app functionality

DataDog metric/monitors (Make sure they are migrated over and see if anything needs updated)

Deployment Changes

Document policies regarding deployments, PRs, incident response, audit, scaling, and diagramming everything so that it can be added to current va.gov ATO


## Out of Scope: (for this iteration)
*

Adding any new functionality to SiS - only focusing on migrating existing functionality

## Use Cases:
| User          | Problem       | How does this solution address the problem?  |
| ------------- |:-------------:| -----:|
| |   |   |

## Assumptions:
* 

## Solution Approach: 
* 
  
## Technical Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
| |               |

## UX/ Design Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
|  |               |


## Measuring Success:
| KPI           | Notes         | 
| ------------- |:-------------:| 
| |               |


## Baseline KPI Values:
| KPI           | Notes         | 
| ------------- |:-------------:| 
|  |               |


## Milestones:
* Launch Dates


## Future Scope:
* 
