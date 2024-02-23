# va.gov Login SLOs

## Overview: 
Determining and establishing the Service Level Objective (SLO) targets we want to hit for Veterans logging into va.gov with the ultimate goal of continuously improving the login process to va.gov.

## Problem Statement: 
We do not currently have any current SLOs for va.gov logins, and creating them will help us monitor and improve the Veteran login experience.

## Relevant Documents:

## What's In Scope: 
For this first iteration, the focus will be on:
* Authentication Logging & Monitoring
  * Availibility
  * Response Time
* Incident Response

* 
## Out of Scope: (for this iteration)


## Use Cases:
- As a Veteran, I should be able to login to va.gov 99.9999% of the time, as measured monthly by the _SIS Authorize_ dashboard in datadog. If the endpoint goes down, it will be treated as a P1, and fixed immediately.  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76838).
- As a Veteran, I should have to wait no longer than ***HOW LONG?*** to get a result when I try to login to va.gov, as measured monthly by the _SIS Authorize_ in datadog. If the monthly average time goes above ***HOW LONG***, we will ***WHAT SHOULD OUR RESPONSE BE?***       [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76848)
- As a Veteran, I should be able to login to va.gov 99.9999% of the time, as measured monthly by the _SSOe Authorize_ dashboard in datadog. If the endpoint goes down, it will be treated as a P1, and fixed immediately. [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76867)
- As a Veteran, I should have to wait no longer than ***HOW LONG?*** to get a result when I try to login to va.gov, as measured monthly by the _SSOe Authorize_ dashboard in datadog. If the monthly average time goes above ***HOW LONG?***, we will ***WHAT SHOULD OUR RESPONSE BE?*** [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76865)
- As a Veteran, I should be able to login to va.gov 99.9999% of the time, as measured monthly by the _SIS Callback_ dashboard in datadog. If the endpoint goes down, it will be treated as a P1, and fixed immediately. [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76868)
- As a Veteran, I should have to wait no longer than ***HOW LONG?*** to get a result when I try to login to va.gov, as measured monthly by the _SIS Callback_ dashboard in datadog. If the monthly average time goes above ***HOW LONG?***, we will ***WHAT SHOULD OUR RESPONSE BE?*** [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76870)
- As a Veteran, I should be able to login to va.gov 99.9999% of the time, as measured monthly by the _SSOe Callback_ dashboard in datadog. If the endpoint goes down, it will be treated as a P1, and fixed immediately. [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76872)
- As a Veteran, I should have to wait no longer than ***HOW LONG?*** to get a result when I try to login to va.gov, as measured monthly by the _SSOe Callback_ dashboard in datadog. If the monthly average time goes above ***HOW LONG?***, we will ***WHAT SHOULD OUR RESPONSE BE?*** [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76871)
- As a Veteran, when I login to va.gov I should be able to see my personal information 99.999% of the time, as measured monthly by the _SIS Introspect_ dashboard in datadog. If the endpoint goes down, it will be treated as a P1, and fixed immediately. [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76873)
- As a Veteran, I should have to wait no longer than ***HOW LONG?*** to get my personal information when I login to va.gov, as measured monthly by the _SIS Introspect_ dashboard in datadog. If the monthly average time goes above ***HOW LONG?***, we will ***WHAT SHOULD OUR RESPONSE BE?*** [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76874)
- As A Veteran, I should not have to re-enter my credentials 99.9999% of the time if I have been active in the previous 30 minutes, as measured monthly by the _SIS Refresh_ dashboard in datadog. If the endpoint goes down, it should be treated as a P2, and fixed on a timely basis. [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76876)
- As A Veteran, I should not have to re-enter my credentials 99.9999% of the time if I have been active in the previous 30 minutes, as measured monthly by the _SIS Token_ dashboard in datadog. If the endpoint goes down, it should be treated as a P2, and fixed on a timely basis. [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76879)
- As a Veteran, I should be able to logout from va.gov 99.9999% of the time as, measured monthly by the _SIS Logout_ dashboard in datadog. If the endpoint goes down, it will be treated as a P1, and fixed immediately. If the average time drops below 99.999%, the root cause will be investigated and resolved. [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76884)
- As a Veteran, I should have to wait no longer than ***HOW LONG?*** to get a result when I try to logout from va.gov, as measured monthly by the _SIS Logout_ dashboard in datadog. If the monthly average logout time goes above ***HOW LONG?***, we will ***WHAT SHOULD OUR RESPONSE BE?*** [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76890)
- As a Veteran, I should be able to logout from va.gov 99.9999% of the time as, measured monthly by the _SSOe Logout_ dashboard in datadog. If the endpoint goes down, it will be treated as a P1, and fixed immediately. If the average time drops below 99.999%, the root cause will be investigated and resolved. [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76885)
- As a Veteran, I should have to wait no longer than ***HOW LONG?*** to get a result when I try to logout from va.gov, as measured monthly by the _SSOe Logout_ dashboard in datadog. If the monthly average logout time goes above ***HOW LONG?***, we will ***WHAT SHOULD OUR RESPONSE BE?***  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76891)
- As a Veteran, I should be able to logout from va.gov 99.9999% of the time as, measured monthly by the _SIS Revoke_ dashboard in datadog. If the endpoint goes down, it will be treated as a P1, and fixed immediately. If the average time drops below 99.999%, the root cause will be investigated and resolved. [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76886)
- As a Veteran, I should have to wait no longer than ***HOW LONG?*** to get a result when I try to logout from va.gov, as measured monthly by the _SIS Revoke_ dashboard in datadog. If the monthly average logout time goes above ***HOW LONG?***, we will ***WHAT SHOULD OUR RESPONSE BE?*** [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76892)

## Assumptions:
* 

## Solution Approach: 
* First, we will have to determine the Service Level Indicators (SLIs) for each of our focus area. That will help up understand how to target the SLOs.
  
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
