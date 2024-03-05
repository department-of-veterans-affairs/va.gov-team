# Sign in Service
## Overview
Sign in Service is a client authentication service that provides a highly reliable, efficient, and secure user authentication experience to VA.gov and other VA applications. The Sign in Service is highly lean, cost effective, and transparent. It introduces the concept of ultimate accountability throughout the authentication process, with monitors and logging providing an auditable insight into every user authentication.

### Manage Devices Feature (ie sign out all)
Sign in Service offers the flexibility to make each session longer. For example on the mobile app with SiS, we allow sessions to be 45 days, while our previous product, SSOe, offers 30 minute sessoins. With a user's sessions across multiple devices having the possibility of being concurrently maintained for 45 days, this increases security concerns. In addition, industry standards for an application with longer-term sessions is to offer a way to remotely sign out devices that are currently signed in the application. This allows a user to be proactive with their security by ending open sessions with one click for any reason, especially if they get an alert about or have a suspision of a bad actor in thier account.

- MVP - sign out all devices as a single button or option
- Potential future state - offer the ability to manage per device


## Problem Statement
The current VA.gov authentication solution is cumbersome and opaque. It provides a less-than-ideal authentication for Veterans, while costing the VA significantly in operation costs. Additionally, it is difficult to understand issues when they do arise, and fixes may take weeks, or even months, to apply.
The Sign in Service was created to solve these shortcomings, while adding numerous features. It was designed with the idea that Veteran authentication should be as secure and transparent as possible, leveraging modern design and code practices to allow for a service that can be future-facing and effective.

## Relevant Documents:
[Sign in Service (SiS) Read.me](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/readme.md)

## What's In Scope: 
The main scope of Sign in Service is all external facing authentication.

For this first iteration, the focus will be on:
* Integrate Sign in Service the 5 most trafficked VA web applications or more VA Apps by end of Q2 2024.
  
## Out of Scope: (for this iteration)
* Sign-In Service VA wide by q2 2024 and be the Sign in Solution for the VA.
  
## Use Cases:
| User          | Problem       | How does this solution address the problem?  |
| ------------- |:-------------:| -----:|
| VA digital product teams (e.g., vets-api, vets-website, VA mobile app) |  | Ability to more easily iterate and innovate authentication on VA.gov |

## Assumptions:

## Solution Approach: 

## Technical Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
|               |               |

## UX/ Design Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
|               |               |

## Measuring Success:
| KPI           | Notes         | 
| ------------- |:-------------:| 
|               |               |

## Baseline KPI Values:
| KPI           | Notes         | 
| ------------- |:-------------:| 
|               |               |
## Milestones:
*Deploy to 100% of VA.gov Users
## Future Scope:
* Waiting for approval to launch to Va.gov: Proposed June 2024.
