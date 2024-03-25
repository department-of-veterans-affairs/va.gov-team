# Fraud Notifications MVP

## Overview: 
Send Veterans notifications when there is a login to their account under what might be fradulent circumstances, including:
* Logins from New Devices
* Unusual Account Activity
* Password Reset Requests
* Changes to Security Settings
* Logins From new or high-risk Locations



## Problem Statement: 
If we send a Veteran notification about a login that they did not initiate, it can serve as an early warning sign of unauthorized access or a security breach.

One of our 2024 OKRs is reducing the time to detect fraud by 10%, and by notifiying Veterans of unusual logins, they can help identify fraud much earlier than they have been able to previously. 

In addition, Veterans can take immediate steps, such as changing passwords, reviewing account activity, or contacting the VA, in order to secure their accounts and prevent further unauthorized actions. Eventually, we can allow them to lock their accounts.


## Relevant Documents:
- [Questions (and answers) arising from initial UX research into Fraud Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Fraud%20Notifications/Fraud%20Notifications%20-%20possible%20brief%20updats.md) (some of which is folded into this product brief).
- [UX Research Mural](https://app.mural.co/t/oddballinternal7486/m/oddballinternal7486/1709058764550/6122e5571e28b17c72781cf20646550887475202?sender=u8f85d3b7f2143f85bb7a9248)

## What's In Scope (MVP) 
After the initial round of research, we've decided on a simple MVP.

Email alert to a user when their account is signed into by:
* An unusual device.
* An unusual IP address.

## Out of Scope: (MVP)
As an offshoot of this work, we are interested in consolidating management of the various potential fraud related notifications. We don’t want to create another alert message that is managed by another team in another place. We believe that fewer teams managing notifications in fewer places will allow the VA’s messaging to veterans to be more cohesive and reduce confusion for all parties.

We still need to decide, likely in cooperation with Auth Experience and BDPR teams, who should own and manage the existing notifications, or which parts of them, along with our proposed new notification. 
 * For example, one possible outcome is that our team creates the trigger and sets up the new notification in VA Notify, and then we hand it over to the BDPR team to manage from there. 

We are only looking at a single new notification for this iteration. 

In the future, we also don’t need to reproduce existing notifications which include: 
- Auth Exp team currently manages an email alert for user direct deposit changes through the VA Notify tool
- BDP&R team currently manages an email and physical mail alert for user beneficiary changes through the GovDelivery tool
- BDP&R team currently manages an email and physical mail alert for user bank account changes through the GovDelivery tool


## Use Cases (MVP):
| User          | Problem       | How does this solution address the problem?  |
| ------------- |:------------ | -----:|
|Veteran | Unusual device login could be fraudulent |Gives Vet a notification and course of action  | 
|Veteran | Unusual IP login could be fraudlent  |Gives Vet a notification and course of action  |


## Assumptions:
* We can detect logins matching each of the Use Cases above
* We can leverage the work already done by the [va-notify team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify#playbook)
* These kind of notifications do not already exist
  * If they exist, then we can set up a configuration not to trigger an email for those cases
    
## Solution Approach: 
* 
  
## Technical Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
| |               |

## UX/ Design Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
| dfdfd |   dfdfdfdf           |


## Measuring Success:
| KPI           | Notes         | 
|  ------------- |:------------- | 
| What is the current "time to detect fraud" number? | [BDPR is currently measuring this](https://docs.google.com/spreadsheets/d/1JKNTCMRDmgJh5jU--rOicPMqvw0zR00ze2X-VycFmOE/edit#gid=1457434547) |
|For veterans whose account has suspected fraudulent activity, how long does it take them, on average, to report this to the VA?  | We don’t measure this yet (data from Contact Center) |
| How long from when we send a notification to when they call in PLUS how long for BDPR to confirm as fraud? | |
| How quickly does the BDPR team find potential fraud?(e.g. data needs to be conditional, cases that are fraud that we haven’t caught plus false positives) | |
| Time to remediation for the event (what parts are in our control between the time we detect to BDPR closing ticket? note: ticket close happens when BDPR tells us they close the case in other words all account data is reverted) |


## Baseline KPI Values:
| KPI           | Notes         | 
| ------------- |:-------------:| 
|  |               |


## Milestones:
* Launch Dates


## Future Scope:
* 
