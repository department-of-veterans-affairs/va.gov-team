# Downtime Banners

## Table of Contents
- [Background](#background)
    - [Authentication dependencies](#authentication-dependencies) 
- [Technical user flow](#technical-user-flow)
- [Thresholds](#thresholds)
- [Content](#content)
    - [Unexpected downtime](#unexpected-downtime)
        - [ID.me](#idme)
        - [Login.gov](#logingov)
        - [DS Logon](#dslogon)
        - [SSOe](#ssoe)
        - [MPI/MVI](#mpi)
        - [Multiple services](#multiple-services)
    - [Maintenance windows](#maintenance-windows) 

## Background
The purpose of this document is to document what the banner looks like during authentication-related unexpected downtime events and/or maintenance windows. These downtime banners will display in the Sign-in Modal and Unified Sign-in Page.

We determine downtime statuses by making an API request to `/v0/backend_statuses`
- Unexpected downtime `statuses` array
- Maintenance banners `maintenance_windows` array

### Authentication dependencies
- Master Person Index (MPI)
- SSOe (IAM)
- CSPs
    - ID.me
    - Login.gov
    - DS Logon (deprecated after Oct 1 2025)

## Technical user flow
1. User navigates to VA.gov > Clicks "Sign in" to open the sign-in modal
2. A request is made to the `GET /v0/backend_statuses` (fed from PagerDuty and upcoming maintenance windows)
3. The response from `GET /v0/backend_statuses` is parsed and read
    1. The `statuses` array is checked to see if any of the authentication dependencies have a status other than `active`
        1. If dependency status is `active` - do nothing
        2. If dependency status is something other than `active` - lookup which dependency and display content associated with that dependency
        3. If multiple dependencies are something other than `active` - display the multiple services down content
    2. The `maintenance_windows` array is checked to see if any of the authentication dependencies have a maintenance window 1 hour prior
        1. If maintenance window does not exist - do nothing
        2. If maintenance window does exist and is within 1 hour prior to starting window, display the maintenance banner
  
## Thresholds
> Note: StatsD (vets-api) => DataDog => PagerDuty => `GET /v0/backend_statuses` API route => VA.gov (sign-in modal)

Thresholds are determined in Datadog and are connected to PagerDuty.

| Authentication dependency | Threshold |
| --- | --- |
| Master Person Index (MPI) | MPI PSIM latency is above 5 seconds for 15 minutes |
| SSOe (IAM) | No data received from outbound SSOe for 30 minutes |
| ID.me | Authentication success rate is <45% in the past 30 minutes |
| Login.gov | Authentication success rate is <45% in the past 30 minutes |
| DS Logon | Authentication success rate is <20% in the past 15 minutes |


## Content

### Unexpected Downtime

<a id="idme"></a>
### ID.me
| Title | Alert type | Content |
| --- | --- | --- |
| You may have trouble siging in with some of your accounts | Warning | We’re sorry. We’re working to fix some problems with ID.me. If you’d like to sign in to VA.gov with your ID.me, DS Logon, or My HealtheVet accounts, please check back later. |

![idme](https://github.com/department-of-veterans-affairs/va.gov-team/assets/67602137/9b88a51d-b10e-4f35-82c8-bbf823f1c65a)

<a id="logingov"></a>
### Login.gov
| Title | Alert type | Content |
| --- | --- | --- |
| You may have trouble siging in with Login.gov | Warning | We’re sorry. We’re working to fix some problems with our Login.gov sign in process. If you’d like to sign in to VA.gov with your Login.gov account, please check back later. |

![logingov](https://github.com/department-of-veterans-affairs/va.gov-team/assets/67602137/c27dd7ba-1f67-4b00-8fc5-7016a2b4677d)

<a id="dslogon"></a>
### DS Logon
| Title | Alert type | Content |
| --- | --- | --- |
| You may have trouble siging in with DS Logon | Warning | You may have trouble siging in with Login.gov | Warning | We’re sorry. We’re working to fix some problems with our DS Logon sign in process. If you’d like to sign in to VA.gov with your DS Logon account, please check back later. |

![dslogon](https://github.com/department-of-veterans-affairs/va.gov-team/assets/67602137/c475c3a6-3b18-44f0-a4be-16b4fa54f07f)

### SSOe
| Title | Alert type | Content |
| --- | --- | --- |
| Our sign in process isn’t working right now | Warning | We’re sorry. We’re working to fix some problems with our sign in process. If you’d like to sign in to VA.gov, please check back later. |

![ssoe](https://github.com/department-of-veterans-affairs/va.gov-team/assets/67602137/82b2d4b3-9925-440d-8398-8e54ed052b0e)

<a id="mpi"></a>
### MVI/MPI
| Title | Alert type | Content |
| --- | --- | --- |
| You may have trouble signing in or using some tools or services | Warning | We’re sorry. We’re working to fix a problem that affects some parts of our site. If you have trouble signing in or using any tools or services, please check back soon. |

![mvi](https://github.com/department-of-veterans-affairs/va.gov-team/assets/67602137/ec27bef8-0e82-4439-9adf-ac5517b83293)

### Multiple services
| Title | Alert type | Content |
| --- | --- | --- |
| You may have trouble signing in or using some tools or services | Warning | We’re sorry. We’re working to fix a problem that affects our site. If you have trouble signing in or using any tools or services, please check back soon. |

![multiple-svc](https://github.com/department-of-veterans-affairs/va.gov-team/assets/67602137/1bc2d382-c24c-4843-b409-9e23cc980093)

## Maintenance Windows

This applies to both global downtimes and authentication-related dependencies such as Login.gov, ID.me, etc.

| Title | Alert type | Content |
| --- | --- | --- |
| Upcoming site maintenance | Info | We’ll be working on VA.gov soon. The maintenance will last about [how many hours maintenance will last] hours. During this time, you won’t be able to sign in, use online tools, or access VA.gov webpages.<br/>Date: [Day, Date, Year]<br/>Start/End time: [start time] to [end time] [timezone] |


![maint](https://github.com/department-of-veterans-affairs/va.gov-team/assets/67602137/e3351989-cf74-4e0a-bd95-780256dfa3ac)
