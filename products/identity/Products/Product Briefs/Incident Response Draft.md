# Incident Response (Draft)

## Overview: (Provide a high level description of the product/set of features)


## Problem Statement: (Describe what problem we’re going to address with this product)
We currently do not have an end-to-end methodology for defining, tracking, communicating and resolving incidents. In order to better serve Veterans and VA.gov, we need to create and communicate an Incident Response process.

## Relevant Documents:
- [Authentication status internal communication for VA Teams (Research)](https://docs.google.com/document/d/1-ZN_csS6uuT-c6DymBNe5up_LR4tX6_3ntUNjjn_jrE/edit#heading=h.5c3b2fdqm6qz)
- [Authentication status external communication to Veterans (Research)](https://docs.google.com/document/d/14ekf2-kyqAPJYdjK_CfHaiaV1HuJYJxM8r4tIyx_zqo/edit#heading=h.6nfp8v1e4nb1)
## What's In Scope: 
For this first iteration, the focus will be on:
* What is an incident, anyways?
  * Failing to meet SLA
  * Service Outages
  * ??
* How do we track the work we are doing to resolve an incident?
* How do we communicate an incident is happening to stakeholders
* Documenting steps to resolve
* Automating as much as we possibly can.
  
## Out of Scope: (for this iteration)
*

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
| Update the downtime banners to fire based on authentication method, either SiS or SSOe. Today the banner shows if the SSOe service is down even if a user is trying to login with SiS (oauth=true param set)| We need to add a PD integration within PD, we need to figure out how to handle backend statuses, potentially need to update the frontend banner settings, need to update the datadog monitor for SiS              |

## UX/ Design Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
|  |               |




## Milestones:
* Launch Dates


## Future Scope:
* 
