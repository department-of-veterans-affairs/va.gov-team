# Preface
This document will help all team members working on VA.gov understand how and when it is appropriate to engage the Call Center team for support and provide relevant information to assist in routing reported issues to other appropriate teams.  Because of the limited number of resources on Call Center, they cannot be a "catch-all" for every issue reported on the platform and every application.  Please read the following document carefully in order to determine the appropriate path for your incident.

## IRIS Reporting

VA.gov technical issues are routed to the Call Center IRIS inbox from the Contact Us page on VA.gov.  The goal is to either assign, reassign, or respond within 24 business hours.
* Call Center team will review each issue to determine:
    * If it needs to be escalated to the appropriate team
    * If it should be reassigned to the Call Center that routed it to us
    * If it can be responded to from the response template that has been created
* The Call Center team will only report "trending" issues to the appropriate teams 
    * The Call Center defines a trend as five or more of the same issue. *(I want to discuss this. If possible, I think we should be tracking all issues. I won't list out the reasons here but basically, what is the timeframe for five issues? A day? A week? I think we want to track all issues we can for the time being so we can get a sense of how many issues are occurring in the small slice of data we have access to)* 
    
    
## SalesForce Reporting

VA.gov issues are captured by WHH (White House Hotline) agents in SalesForce.  The goal is to either assign, reassign, or respond within 24 business hours.
* Call Center team will review each issue tagged as VA.gov to determine:
  * If it needs to be escalated to the appropriate team
  * If it should be reassigned back to the WHH
* The Call Center team will only report "trending" issues to the appropriate teams
    * The Call Center defines a trend as five or more of the same issue.

## Compiling Data
Once the trend has been identified, a spreadsheet will be created by the Call Center team containing:
* Date issue reported
* Ticket number
* Description of issue as stated by the customer
* ALL PII WILL BE REMOVED

## Assigning Issues
Once the data from each source has been entered onto the spreadsheet, copy the information to paste it in a ZH (ZenHub) ticket that will be created.  The criteria for creating a ZH ticket is as follows:
* Issue Title: Brief description of issue
    * Ex. Logon to ID.me error message
* Label: Call Center and any other department that needs research/resolve the issue
* Assignees: All Call Center team members and individuals associated with the team that is researching/resolving the issue.
    * If the Call Center team member is unsure of who the ticket should be assigned to, then it will be assigned to Triage for determination.

## Status Requests
If a Call Center team member has not received an ETA for research or resolution from the appropriate team within 48 business hours, then it is the responsibility of the Call Center team to reach out through ZH to request an update.

## Lack of Communication
If there has been no status update by the end of the 48 business hours, the Call Center team member should escalate the issue to the PM of the team that has been assigned the issue.


## When to engage the Call Center Team
  
**General Rule:** The Call Center team will make every effort to include ALL pertinent infromation on the issue.  However, if more details are needed
- Find the appropriate ZH ticket relating to the issue
- @ all Call Center team members to be notified 
- Enter in all details or questions concerning the issue
  - Not all customers are fluid in technical terms, please attempt to use layman terminology for best res
  - Be as detailed as possible to prevent or lessen multiple interactions with the customer which will only cause frustration
- A Call Center team member will reach out to the customer within 24 hours of the request

External Call Centers are the front line, therefore it is imperative that design, product, etc. teams inform us of any new releases or bug fixes that may cause an influx of inquiries.
In order to prepare external Call Centers with the information that they require, please do the following:
- Advise the Call Center team as soon as possible.  The more advance notice the better.
   - This will allow us to give advance notice to external Call Centers
   - Additional information or clarification may be requested from external Call Centers
- Create a ZH ticket with ALL information and details that would be beneficial for a Call Center agent to have to effectively assist the customer.
   - Issue Title: Brief description of bug fix or release, etc.
   - Label: Call Center
   - Assignees: All Call Center team members and individuals associated with the bug fix, new release, etc.
   - Comments: Enter description in this area.
- The Call Center team will review the ticket within 72 business hours
   - Any questions will be entered into the comments section 
   - @ all assignees listed in the ticket
- If clarification cannot take place within the ZH ticket, a conference call will be scheduled with all assigees for resolution.   


## Still not sure?

If you still have a doubt about how or when to engage with the Call Center team for whatever reason, please reach out to the [`#vsp-vsp-contact-center-support`](https://dsva.slack.com/messages/CK1FA11H8) Slack channel and we would be happy to assist you.
