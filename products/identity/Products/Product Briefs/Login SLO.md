# VA.gov Login SLO

## Overview: 
Determining, establishing and publishing the Service Level Objective (SLO) targets we want to hit for Veterans logging into VA.gov with the ultimate goal of continuously improving the login process to VA.gov. 

We have two audiences for this information:
* Veterans logging into va.gov.
* Other va.gov product teams.

## Problem Statement: 
We do not currently have any current SLOs for VA.gov logins, and creating them will help us monitor and improve the Veteran login experience.

## Relevant Documents:
* [Public Facing SLO Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-df6fa7bc92140323ffecbf4e10b16346?refresh_mode=sliding&from_ts=1710016052679&to_ts=1712608052679&live=true)
* [Login SLO Epic](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/75713)
* [va.gov Status Page](https://vagov.statuspage.io/)
* [SLO Brainstorm on Figma](https://www.figma.com/file/RFJBhEtGHVnWUOAGn1Gnl8/SLO-Brainstorm?type=whiteboard&node-id=0-1&t=3vuj1urgEUrWjBCo-0)

## What's In Scope: 
For this first iteration, success will be determining SLOs for:
* Authentication Logging & Monitoring
  * Availibility
    * Logging in.
    * Seeing information.
    * Logging out.
  * Response Time
    * How fast are things loading?
      



## Out of Scope: (for this iteration)
* Incident Response
* Service Level Agreements
* Accountability in SLOs - who gets assigned & their impact toward total numbers
* Automation
  *  Notify when investigations are happening.
  *  Slack notifications when SLOs reach a certain level.
* How we will publish the agreements to other teams.
  * Perhaps just posting a single SLO doc used by all teams in Github (rather than doing it per team)?


## Use Cases:

- As a Veteran, I should be able to login to VA.gov 99.9999% of the time, as measured continuously by the _SIS Authorize_ dashboard in datadog.   
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76838).
- As a Veteran, I should have to wait no longer than ***TBD*** to get a result when I try to login to VA.gov, as measured continuously by the _SIS Authorize_ dashboard in datadog. We will set up a monthly monitoring task to look for service degradation, and our response will be chronicled in a future iteration of this project.
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76848)
- As a Veteran, I should be able to login to VA.gov 99.9999% of the time, as measured continuously by the _SSOe Authorize_ dashboard in datadog.   
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76867)
- As a Veteran, I should have to wait no longer than ***TBD*** to get a result when I try to login to VA.gov, as measured continuously by the _SSOe Authorize_ dashboard in datadog. We will set up a monthly monitoring task to look for service degradation, and our response will be chronicled in a future iteration of this project.
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76865)
- As a Veteran, I should be able to login to VA.gov 99.9999% of the time, as measured continuously by the _SIS Callback_ dashboard in datadog.   
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76868)
- As a Veteran, I should have to wait no longer than ***TBD*** to get a result when I try to login to VA.gov, as measured continuously by the _SIS Callback_ dashboard in datadog. We will set up a monthly monitoring task to look for service degradation, and our response will be chronicled in a future iteration of this project.
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76870)
- As a Veteran, I should be able to login to VA.gov 99.9999% of the time, as measured continuously by the _SSOe Callback_ dashboard in datadog.   
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76872)
- As a Veteran, I should have to wait no longer than ***TBD*** to get a result when I try to login to VA.gov, as measured continuously by the _SSOe Callback_ dashboard in datadog. We will set up a monthly monitoring task to look for service degradation, and our response will be chronicled in a future iteration of this project.
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76871)
- As a Veteran, when I login to VA.gov I should be able to see my personal information 99.999% of the time, as measured continuously by the _SIS Introspect_ dashboard in datadog.   
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76873)
- As a Veteran, I should have to wait no longer than ***TBD*** to get my personal information when I login to VA.gov, as measured continuously by the _SIS Introspect_ dashboard in datadog. We will set up a monthly monitoring task to look for service degradation, and our response will be chronicled in a future iteration of this project.
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76874)
- As A Veteran, I should not have to re-enter my credentials 99.9999% of the time if I have been active in the previous 30 minutes, as measured continuously by the _SIS Refresh_ dashboard in datadog.     
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76876)
- As A Veteran, I should not have to re-enter my credentials 99.9999% of the time if I have been active in the previous 30 minutes, as measured continuously by the _SIS Token_ dashboard in datadog.     
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76879)
- As a Veteran, I should be able to logout from VA.gov 99.9999% of the time as, measured continuously by the _SIS Logout_ dashboard in datadog.   
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76884)
- As a Veteran, I should have to wait no longer than ***TBD*** to get a result when I try to logout from VA.gov, as measured continuously by the _SIS Logout_ dashboard in datadog. We will set up a monthly monitoring task to look for service degradation, and our response will be chronicled in a future iteration of this project.
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76890)
- As a Veteran, I should be able to logout from VA.gov 99.9999% of the time as, measured continuously by the _SSOe Logout_ dashboard in datadog.    
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76885)
- As a Veteran, I should have to wait no longer than ***TBD*** to get a result when I try to logout from VA.gov, as measured continuously by the _SSOe Logout_ dashboard in datadog. We will set up a monthly monitoring task to look for service degradation, and our response will be chronicled in a future iteration of this project.
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76891)
- As a Veteran, I should be able to logout from VA.gov 99.9999% of the time as, measured continuously by the _SIS Revoke_ dashboard in datadog.   
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76886)
- As a Veteran, I should have to wait no longer than ***TBD*** to get a result when I try to logout from VA.gov, as measured continuously by the _SIS Revoke_ dashboard in datadog. We will set up a monthly monitoring task to look for service degradation, and our response will be chronicled in a future iteration of this project.
  -  [User Story](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/76892)

## Assumptions:
* In order to answer the various things to be determined (you know, all of those things with a "***TBD***") in the actual user stories, a series of spikes have created for the engineering team to investigate the questions surrounding service outages, what we consider service degradation.
  *  NOTE: The spikes are all linked to their associated User Stories (and vice versa).
* That we may have other SLO that we need to create as we do the initial series of spikes, and the engineering team has opinions on what to monitor.
* There are already responses to availability service disruptions.


## Solution Approach: 

* Research
  * What do Veterans care about in this space?
  * What communication does CAIA have if va.gov maintenance is planned or is happening?
  * What do the other VA teams care about?
  * Can we update the [Va.gov Status Page](https://vagov.statuspage.io)?
  * Are there legal requirements for SLOs - want to maintain compliance, at least.
  * Can we leverage
  * Check w/ #accessibility-help channel to see if Datadog dashboards are acessible.

* Based upon the research the initial round of SLO are created.
  * Some might be combined if needed 
* We create a table that displays all of the SLO in a single place. _(User Story TK)_
* We come up with the language to represent each SLO to the outside world. _(User Story TK)_
* We create a monitoring plan. _(User Story TK)_
  * The Delivery Manager will manage the monitoring.
* We come up with a publishing schedule. _(User Story TK)_
  * The Delivery Manager will manage the publishing.
  * How did we do against each SLO in the previous monthl?

  
## Technical Considerations:
| Issue         | Notes         | 
| ------------- |:-------------| 
| VA Policy |  Is there VA policy surrounding availability & response times?     |
| Industry Standards |  Are there industry standards surrounding availability & response times?     |

## UX/ Design Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
| Language when publishing the SLOs |   Would like UX help in crafting the publishing language          |


## Measuring Success:
| KPI           | Notes         | 
| ------------- |:-------------| 
| 75% of the endpoints are covered w/ SLO|  Published in tabular form             |
| How are we meeting the SLO are published on a monthly basis |  Will be assigneed to Delivery Manager    |


## Baseline KPI Values:
| KPI           | Notes         | 
| ------------- |:-------------:| 
|  |               |


## Milestones:
- [ ] Spikes completed.
- [ ] Initial internal publishing of SLOs.



## Future Scope:
* Determining our response to observed service degradation.
* As the Identity Team adds new products and takes on new responsibilities, it is anticipated that new SLOs will need to be established and published.
