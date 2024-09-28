# Fraud Notifications (possible [product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Product%20Briefs/Login%20Notifications.md) updates and additional questions that have come up)

## Project Summary
Notifications about sensitive activities made in a veteran’s account can serve as an early warning sign of unauthorized access or a security breach.

O4 KR 1 for 2024 is to reduce the time to detect fraud by 10%. By notifying veterans of unusual sign ins, they will be alerted to potential fraud and likely find out about it much earlier than they otherwise would. In these notifications, for instances that the veteran doesn’t recognize, we can ask veterans to take immediate steps, such as changing passwords, reviewing account activity, or contacting the VA, in order to secure their accounts and prevent further unauthorized actions. These actions should progress us towards one of our team’s 2024 OKRs - reducing the time to detect fraud.

## Success Metrics

### Outstanding questions that might help us measure what success looks like
- We need to know some data points before we can understand what success looks like. 
- What is our current “time to detect fraud” number? Yes we have this and are measuring this currently - [Data spreadsheet](https://docs.google.com/spreadsheets/d/1JKNTCMRDmgJh5jU--rOicPMqvw0zR00ze2X-VycFmOE/edit#gid=1457434547)
- For veterans whose account has suspected fraudulent activity, how long does it take them, on average, to report this to the VA? We don’t measure this yet (data from Contact Center)
- How long from when we send a notification to when they call in PLUS how long for BDPR to confirm as fraud
- How quickly does the BDPR team find potential fraud?(e.g. data needs to be conditional, cases that are fraud that we haven’t caught plus false positives)
- Time to remediation for the event (what parts are in our control between the time we detect to BDPR closing ticket? note: ticket close happens when BDPR tells us they close the case in other words all account data is reverted)
- What are our goal posts, where do we draw the line? How do we make this as simple as possible for MVP?

## Scope Considerations
Our MVP is an email alert to a user when their account is signed in by an unusual device or IP

As an offshoot of this work, we are interested in consolidating management of the various potential fraud related notifications. We don’t want to create another alert message that is managed by another team in another place. We believe that fewer teams managing notifications in fewer places will allow the VA’s messaging to veterans to be more cohesive and reduce confusion for all parties.

We still need to decide, likely in cooperation with Auth Experience and BDPR teams, who should own and manage the existing notifications, or which parts of them, along with our proposed new notification. For example, one possible outcome is that our team creates the trigger and sets up the new notification in VA Notify, and then we hand it over to the BDPR team to manage from there.
Out of scope
We are only looking at a single new notification for this iteration. We also don’t need to reproduce existing notifications which include:
Auth Exp team currently manages an email alert for user direct deposit changes through the VA Notify tool
BDP&R team currently manages an email and physical mail alert for user beneficiary changes through the GovDelivery tool
BDP&R team currently manages an email and physical mail alert for user bank account changes through the GovDelivery tool

## Team
| Name | Role |
| - | - |
| Jim Connelly | Product Manager |
| Clayton | UX Research |
| Charlye | UX Research |
|   | Engineer |
|   | Engineer |

