# Identity Dashboard

## Overview: (Provide a high level description of the product/set of features)
This service provides a mechanism for teams in the VA ecosystem to move towards a self-service model when managing their teams ability to authenticate and authorize users.


## Problem Statement: (Describe what problem we’re going to address with this product)
As the Identity Team continues to support various tools and applications to improve the development process for teams, it becomes untenable to manage and address all change requests as they are made. In order to streamline this process, the Identity Dashboard will enable teams to address their needs e.g. client configuration, user management, etc. with minimal support from the Identity Team. (See Use Cases)

VA application teams are in need of a centralized location to manage their integrations with Sign in Service, Unified Sign in Page, MPI user lookup, application authentication performance, and insight into the sensitive activities on their application. The Identity team is responsible for providing all of these solutions and requires a secure architecture in order to provide and maintain them. The VA Identity Modernization effort also requires that teams rapidly iterate and integrate with best in class user experience, stable, and reliable authentication services.

## Relevant Documents:
[Identity Dashboard](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Documentation/Identity_Dashboard.md)

## What's In Scope: 
For this first iteration, the focus will be on:
* Client Config - Managing applications (current functionality will focus on SiS) 
* Teams - Managing access for team members

## Out of Scope: (for this iteration)
*Future initiatives e.g. FWA Dashboard, Performance Management.

## Use Cases:
| User          | Problem       | How does this solution address the problem?  |
| ------------- |:-------------:| -----:|
| As a developer |  In order to set up my application with authentication on my own. |  Adoption of SiS to their application allows me to complete authentication. |
| As a developer |  If I want to avoid creating authentication | I don’t need to create authentication.| 
| As an admin of my application |  I need to manage who has access to which applications and tools.  | This allows me to manage my applications, others applications and tools. |

## Assumptions:
* The VA dev ecosystem would like to self-service.
* Sign in Service (SiS) is deployed to production 100%
* This solution will free up Identity Team bandwidth so they’re not addressing change requests.
* VA dev admins will understand how to use our dashboard without our assistance.


## Solution Approach: 
* Selection of self-service tools to allow application admins to be successful in integrating their application with authentication.
  
## Technical Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
| What LoE is required to maintain the dashboard?|               |
| Are there any limitations imposed by the VA in terms of what we’re able to allow VA dev teams to do on their own?| |
| Dashboards limitations- SiS needs to be 100% deployed to production. | |

## UX/ Design Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
| Dev flow for onboarding to new tools |               |
| Dev process for access management | |
| How do devs read/access/leverage documentation | |

## Measuring Success:
| KPI           | Notes         | 
| ------------- |:-------------:| 
| Time decreased addressing change requests |               |
| Number of change requests made in Slack | |
| Cost of development time fixing bugs vs spent on feature work | |

## Baseline KPI Values:
| KPI           | Notes         | 
| ------------- |:-------------:| 
| SSOe per app compared to SiS per app |               |
| Reduction in time to respond to BDPR events | |

## Milestones:
* Launch Dates
* Release Plan/Go to Market Strategy


## Future Scope:
* FWA Dashboard
* MPI Search
* Admin Portal/User Management
* Performance Dashboard
