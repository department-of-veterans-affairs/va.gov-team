# **VA.gov Identity Team Incident Declaration Guidelines**

## **How to Use This Document**

This document provides guidance on identifying and managing incidents related to key authentication services on VA.gov. Here's how to use it:

1. **Definition and Declaration of an Incident**: Begin by reviewing what constitutes an incident and the process for declaring one. This section explains the criteria for classifying an event as an incident based on user impact.  
2. **Severity/Priority Levels and Response Times**: Next, determine the severity of the incident. This section helps you prioritize and respond based on the level of impact and the number of affected users.  
3. **Service Degradation Definitions and User Impact**: Finally, consult this section to understand how to assess the impact using specific monitors and thresholds. This ensures you follow the correct steps to handle the incident effectively.

## **Definition and Declaration of an Incident**

An incident within the scope of the OCTO Identity team is an event that compromises the security, performance, or availability of key authentication services on VA.gov. This includes outages, bugs, or performance issues that significantly impact users. 

**An event should be classified as an incident if the number of users affected on VA.gov has surpassed the limits defined in the User Impact table below.** An incident must be officially declared when its severity reaches the "sev-1" or "P1" level, which indicates a critical impact on key services. 

## **Severity/Priority Levels and Response Times**

All production services for the VA.gov Identity team are considered Tier 1 services. Staging is considered Tier 2\. Everything not production or staging is considered Tier 3\. Outages are prioritized based on their severity which is determined by the number of users affected per hour:

| Service Type | \> 1000 users affected/hour | \> 100 users affected/hour | \> 0 users affected/hour |
| :---: | :---: | :---: | :---: |
| **Tier 1**  | **P1** | **P2** | **P3** |
| **Tier 2**  | **P2** | **P3** | **P4** |
| **Tier 3** | **P3** | **P4** | **P4** |

## **User Impact**

**User Impact** is defined by the inability of users to complete tasks within a reasonable timeframe. 

**As a rule of thumb, if an outage lasts 15 minutes or more, it likely has affected 1,000 or more users, warranting the declaration of a P1 incident. Outages shorter than 15 minutes typically do not have sufficient impact to justify an incident declaration.**

To understand the impact and severity of an outage, use the following monitors to check how many users are affected:

| Service |  Users Impacted & Outage Duration | Monitor showing user impact | Severity Level |
| :---: | :---: | :---: | :---: |
| **SSOe** | 1000+ users > 15mins | [SSOe Success Rate Monitor per CSP](https://vagov.ddog-gov.com/monitors/89113?view=spans) | **P1** |
| **SiS** | 1000+ users > 15mins | [SiS Success Rate Monitor per CSP](https://vagov.ddog-gov.com/monitors/104510?view=spans) | **P1** |
| **All Non-Production Services** | N/A for non-production environments | [SSOe Success Rate Monitor (Staging)](https://vagov.ddog-gov.com/monitors/255770?view=spans) [SiS Success Rate Monitor (Staging)](https://vagov.ddog-gov.com/monitors/255910?view=spans) | **P3** |
| **Degraded Production Service** | See service degradation table below for anything higher than 1000 users impacted per hour |  |  |

## **Service Degradation Definitions**

**Latency** refers to the time delay between a user's action and the system's response. When latency crosses a certain threshold, it indicates that users are being significantly affected within a specific time window.

 **As a rule of thumb, if an alert lasts 15 minutes or more, it likely has affected over 1,000 users, warranting the determination of a higher severity level for the outage. Alerts shorter than 15 minutes typically do not have sufficient effect to justify an incident declaration.** 

To understand the severity of latency-related issues, use the following guidelines to assess how many users are affected:

| Service | Service Impact Thresholds for Latency and Outages | Service Health Monitors | Severity Level |
| :---: | :---: | :---: | :---: |
| **SSOe** | 1000+ users > 15mins | [SSOe Overall Latency Monitor](https://vagov.ddog-gov.com/monitors/200801?view=spans) | **P1** |
| **SiS** | 1000+ users > 15mins | [SiS Overall Latency Monitor](https://vagov.ddog-gov.com/monitors/96117?view=spans)  | **P1** |
| **STS** | 1000+ users > 15mins | [Signincontroller Token Latency monitor](https://vagov.ddog-gov.com/monitors/96118?view=spans) | **P1** |
