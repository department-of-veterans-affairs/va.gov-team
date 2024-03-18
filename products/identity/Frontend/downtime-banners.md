# Downtime Banners

The purpose of this document is to document what the banner looks like during authentication-related unexpected downtime events and/or maintenance windows. These downtime banners will display in the Sign-in Modal and Unified Sign-in Page.

We determine downtime statuses by making an API request to `/v0/backend_statuses`
- Unexpected downtime `statuses` array
- Maintenance banners `maintenance_windows` array

## Unexpected Downtime

### ID.me
| Title | Alert type | Content |
| --- | --- | --- |
| You may have trouble siging in with some of your accounts | Warning | We’re sorry. We’re working to fix some problems with ID.me. If you’d like to sign in to VA.gov with your ID.me, DS Logon, or My HealtheVet accounts, please check back later. |

![idme](https://github.com/department-of-veterans-affairs/va.gov-team/assets/67602137/9b88a51d-b10e-4f35-82c8-bbf823f1c65a)

### Login.gov
| Title | Alert type | Content |
| --- | --- | --- |
| You may have trouble siging in with Login.gov | Warning | We’re sorry. We’re working to fix some problems with our Login.gov sign in process. If you’d like to sign in to VA.gov with your Login.gov account, please check back later. |

![logingov](https://github.com/department-of-veterans-affairs/va.gov-team/assets/67602137/c27dd7ba-1f67-4b00-8fc5-7016a2b4677d)

### DS Logon
| Title | Alert type | Content |
| --- | --- | --- |
| You may have trouble siging in with DS Logon | Warning | You may have trouble siging in with Login.gov | Warning | We’re sorry. We’re working to fix some problems with our DS Logon sign in process. If you’d like to sign in to VA.gov with your DS Logon account, please check back later. |

![dslogon](https://github.com/department-of-veterans-affairs/va.gov-team/assets/67602137/c475c3a6-3b18-44f0-a4be-16b4fa54f07f)

### My HealheVet (MHV)
| Title | Alert type | Content |
| --- | --- | --- |
| You may have trouble siging in with My HealtheVet | Warning |You may have trouble siging in with Login.gov | Warning | We’re sorry. We’re working to fix some problems with our My HealtheVet sign in process. If you’d like to sign in to VA.gov with your My HealtheVet account, please check back later. |

![mhv](https://github.com/department-of-veterans-affairs/va.gov-team/assets/67602137/8cf1f881-518e-4cfe-88d3-ca521d57b3de)

### SSOe
| Title | Alert type | Content |
| --- | --- | --- |
| Our sign in process isn’t working right now | Warning | We’re sorry. We’re working to fix some problems with our sign in process. If you’d like to sign in to VA.gov, please check back later. |

![ssoe](https://github.com/department-of-veterans-affairs/va.gov-team/assets/67602137/82b2d4b3-9925-440d-8398-8e54ed052b0e)

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
