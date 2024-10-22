# **VA.gov Identity Team Incident Declaration Guidelines**

An incident within the scope of the OCTO Identity team is an event that compromises the security, performance, or availability of key authentication services on VA.gov. This includes outages, bugs, or performance issues that significantly impact users. All incidents are classified based on P1 to P4 priority (P1 as high priority, P4 as low priority). All declared incidents additionally are classified with a severity level sev-1 to sev-5 (sev-1 representing total outage, sev-5 representing expected, or otherwise low impact outage)


## **Priority Levels**

The priority level of an event is used to determine if the incident needs to be declared.

**An incident must be declared if the Priority level is determined to be P1**. This indicates a critical impact on key services. 

### **Service Tiers**
All production services for the VA.gov Identity team are considered Tier 1 services. Staging is considered Tier 2\. Everything not production or staging is considered Tier 3\. Priority based on service type is determined by the number of users affected per hour:

| Service Type | \> 1000 users affected/hour | \> 100 users affected/hour | \> 0 users affected/hour |
| :---: | :---: | :---: | :---: |
| **Tier 1**  | **P1** | **P2** | **P3** |
| **Tier 2**  | **P2** | **P3** | **P4** |
| **Tier 3** | **P3** | **P4** | **P4** |

### **User Impact**

**User Impact** is defined by the inability of users to complete tasks within a reasonable timeframe. 

**As a rule of thumb, if a production outage lasts 15 minutes or more, it likely has affected 1,000 or more users, warranting the declaration of a P1 incident. Outages shorter than 15 minutes typically do not have sufficient impact to justify an incident declaration.**

To understand the impact of an outage, use the following monitors to check how many users are affected:

| Service |  Users Impacted & Outage Duration | Monitor showing user impact | Priority Level |
| :---: | :---: | :---: | :---: |
| **SSOe** | 1000+ users > 15mins | [SSOe Success Rate Monitor per CSP](https://vagov.ddog-gov.com/monitors/89113?view=spans) | **P1** |
| **SiS** | 1000+ users > 15mins | [SiS Success Rate Monitor per CSP](https://vagov.ddog-gov.com/monitors/104510?view=spans) | **P1** |
| **All Non-Production Services** | N/A for non-production environments | [SSOe Success Rate Monitor (Staging)](https://vagov.ddog-gov.com/monitors/255770?view=spans) [SiS Success Rate Monitor (Staging)](https://vagov.ddog-gov.com/monitors/255910?view=spans) | **P3** |
| **Degraded Production Service** | See service degradation table below for anything higher than 1000 users impacted per hour |  |  |

### **Service Degradation Definitions**

**Latency** refers to the time delay between a user's action and the system's response. When latency crosses a certain threshold, it indicates that users are being significantly affected within a specific time window.

 **As a rule of thumb, if an alert lasts 15 minutes or more, it likely has affected over 1,000 users, warranting the determination of a higher priority level for the outage. Alerts shorter than 15 minutes typically do not have sufficient effect to justify an incident declaration.** 

| Service | Service Impact Thresholds for Latency and Outages | Service Health Monitors | Priority Level |
| :---: | :---: | :---: | :---: |
| **SSOe** | 1000+ users > 15mins | [SSOe Overall Latency Monitor](https://vagov.ddog-gov.com/monitors/200801?view=spans) | **P1** |
| **SiS** | 1000+ users > 15mins | [SiS Overall Latency Monitor](https://vagov.ddog-gov.com/monitors/96117?view=spans)  | **P1** |
| **STS** | 1000+ users > 15mins | [Signincontroller Token Latency monitor](https://vagov.ddog-gov.com/monitors/96118?view=spans) | **P1** |


## **Severity Levels**

If an incident has been declared, it must be given a severity level. This is used to set the severity level in a [Datadog Incident](http://vagov.ddog-gov.com/incidents) associated with the declared incident.

| Severity | Description | Example |
| :---: | :---: | :---: |
| **sev-1**  | Total outage, users are unable to authenticate at all | All credentials are down |
| **sev-2**  | Partial outage, significant number of users are unable to authenticate | A single credential is down |
| **sev-3**  | Partial outage, some users are unable to authenticate | A subset of users cannot authenticate due to reliance on a certain system that is down |
| **sev-4**  | Intermittent, significant outage | Authentication is possible through multiple attempts, perhaps with latency |
| **sev-5**  | Intermittent, low impact, or expected outage | Expected maintenance or downtime for a single credential |
