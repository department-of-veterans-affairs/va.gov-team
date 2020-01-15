This document outlines the process for identifying, triaging and escalating Tier 3 VA.gov issues. This document covers how the Call Center Team will engage VFS teams to address and resolve Tier 3 issues found in their products. 

## Tier 3 Issues and Priority Definitions

Tier 3 issues are persistent bugs that the Call Center Team has investigated and determined to be caused by a technical failure that cannot be resolved with standard scripts and troubleshooting steps. The Call Center Team identifies Tier 3 issues through triage work in IRIS, Salesforce, and from notification from VA call center POCs.

Once a Tier 3 issue has been identified, the Call Center Team assigns a priority to the issue based on the following criteria:

  * **Low:** Fewer than 10 total reported issues and a viable work around exists
  * **Medium:** Fewer than 10 total reported issues and no viable work around exists
  * **High:** 10 or more total reported issues. 
  * **Urgent:** 10 or more reported issues in one day. This is considered a trending issue for VA.gov call centers. 

## Assigning Issues
Once the issue is triaged and identified as Tier 3, the Call Center team determines which VFS team is responsible and creates a github issue. The github issue will include the following information:

* Issue Title: Brief description of issue
    * Ex. Logon to ID.me error message
* Label: Call Center, Analytics and Insights, and the label for the VFS team responsible for handling the issue.
* Assignees: All Call Center team members will be assigned as well as the PM of the identified VFS team. 
    * If the Call Center team member is unsure of who the ticket should be assigned to, then it will be assigned to the Back End Tools Team for determination.
* Issue Details: The following information about the Tier 3 issue will be included. If there are multiple examples of the bug, a spreadsheet with the below information will be created and attached to the ticket.
1. Date issue reported
2. Source of the issue and ticket number (i.e. IRIS, VEO Tier 1 Call Center, HRC, etc)
3. Priority designation (i.e. low, medium, high, urgent)
4. Detailed description of the problem as stated by the customer and any subsequent information gathered by the call center team
5. Topic and Sub-topic of the issue

**NO PII WILL BE INCLUDED.** If PII is needed for further investigation, the VFS team must request it. Any PII will be sent via encrypted email or other secure delivery channel. 

## Response and Resolution Time
Once a Tier 3 issue has been assigned to a VFS team, the Call Center Team will expect a response within 48 hours acknowledging the receipt of the issue, concurrence or nonconcurrence on the assignment of the issue, any immediate ideas for troubleshooting and/or work arounds, and an estimated date for a resolution/update. 

Based on the priority of the ticket, the Call Center Team will expect a final resolution or a comprehensive update on the following timeline: 

  * **Low:** Resolution within 30 days
  * **Medium:** Resolution within 15 days
  * **High:** Resolution within 7 days
  * **Urgent:** Resolution within 48 hours

*Note:* The Call Center Team realizes VFS teams have dependencies for investigating issues, some of which rely on entire VA systems and teams. If an investigation or resolution is blocked because of a dependency on the part of another VA team, please notify the Call Center team so they can escalate the issue through the necessary customer experience channels. 
  
#### Status Requests
If a Call Center team member has not received an initial response from the VFS team within the first 48 business hours or a final resolution or update by the designated time based on priority, the Call Center team member will escalate the issue to the PM of the team that has been assigned the issue. 

## Issue Resolution
The Call Center Team will be responsible for closing the github issue. The following criteria must be met in order for an issue to be closed:
 * Resolution has been identified and implemented
 * Call Center Team has communicated resolution to user(s) affected

If a resolution cannot be found because of a permanent blocker, the Call Center Team will communicate this issue to the user and the issue will be labeled blocked and remain open. 

If a user responds to resolution communication that they are still experiencing the issue, the github issue will be reopened. 

## When to engage the Call Center Team
  
**General Rule:** The Call Center team will make every effort to include ALL pertinent infromation on the issue.  However, if more details are needed
- Find the appropriate github ticket relating to the issue
- @ all Call Center team members to be notified 
- Enter in all details or questions concerning the issue
  - Not all customers are fluid in technical terms, please attempt to use layman terminology for best responses
  - Be as detailed as possible to prevent or lessen multiple interactions with the customer which will only cause frustration
- A Call Center team member will reach out to the customer within 24 hours of the request

#### Still not sure?

If you still have a doubt about how or when to engage with the Call Center team or need an immediate answer to your question, please reach out to the [`#vsp-contact-center-support`](https://dsva.slack.com/messages/CK1FA11H8) Slack channel and we would be happy to assist you.
