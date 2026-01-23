# MHV Web and Mobile - Tier 3 Triage of HRC Dynamics issues
### Standard Operating Procedures


## VA.gov/VAHB (HRC Dynamics)
Records in Dynamics (i.e. tickets) move between Help Desk tiers with multiple contributors adding comments and status changes like in GitHub.

### MHV Tier 3 Queue and views
The broader queue that is used to access all potential items is found by accessing the All Items view.
* Select Queues in the left rail navigation
 
* In the queues dropdown, select < MHV Tier 3 >
 
* In the items dropdown, select All Items
#### MHV Tier 3 Support new items view
The default fields shown in this view include only some of the fields helpful for our reference. For this reason, we have a custome view that we use to make it clear which items have not yet been triaged by the team.
[MHV Untriaged items - (no appts)](https://dvagov-msp.crm9.dynamics.com/main.aspx?appid=33003bd2-8e16-413e-911f-5bdfa1b016ea&pagetype=entitylist&etn=queueitem&viewid=e1f3a81d-fcbf-f011-bbd3-001dd80a6183&viewType=4230)

#### MHV Tier 3 Support Open ticket view
This view shows all Open tickets: 
[MHV Tier 3 - Open Items Status - (no appts)](https://dvagov-msp.crm9.dynamics.com/main.aspx?appid=33003bd2-8e16-413e-911f-5bdfa1b016ea&pagetype=entitylist&etn=queueitem&viewid=e88ea9b4-05c0-f011-bbd3-001dd80db51f&viewType=4230)

### Triage: Initial Ticket Review
At minimum, the Status Reason and Owner fields are to be updated when you are initially reviewing a ticket.
* Click a record number
The Summary tab is the default view. In the Status section:
* Change the Status Reason to In Progress
* Change the Owner to your name
 
* In the ticket navigation, click Save (not Save & Close)
 
To view the details of the ticket:
* Click the Ticket Information tab
 
* Navigate to the Description field and scroll through for the details

### Next Action
After review of the issue description, we need to take a next action:
* Investigate the issue 
* Provide a resolution if the cause is known
* Request more information from the reporter if not enough information is included to investigate or understand the issue
* Create a GitHub ticket (See guidance below) for one of our development teams to further investigate
* Reroute to the correct Tier 3 if the issue isn’t under MHV scope (this is rare as our Contact Center partners are pretty good about correctly routing)

### Investigate the issue
* The Tier 3 Support member should use the avaialble tools to attempt to solve or address the issue that has been surfaced.  One of the best tools for this is with the Admin Portal.
* The Admin Portal allows a user to investigate Usage Logs to evaluate whether a Veteran is continuing to experience a failure mode, or if it was a temporary issue that has been resolved by the system or correctoin of user error.
* By logging into the Admin Portal, then Manage MHV Users and entering the MHV ID or SS#, the Usage logs can be accessed for the needed detail.

### Provide a Resolution
* Add the resolution message to the Case Notes field (e.g. temporary outage, the fix is live).
 

* In the ticket navigation, click Save (not Save & Close)
* Route the ticket back to Tier 2
 * In the Action field, search for the “Route to Tier II Queue” action
 * Select Route to Tier II Queue
 * Click Next Step
 
 

### Request More Information
If we need more information or would like to request the Veteran attempt specific steps, we route our request through Tier 2 similar to when there’s a resolution.


### Resolution Comments
These are common resolution comment text that may be included in the responses.
NOTE-The Help Desk representative may copy the returned notes verbatim to the Veteran. 


## Creating a Ticket for the Development Team
* For Veteran-facing issues, start with a HRC New Issue
* Make sure to add the correct MHV team project to ensure that the new ticket is visible on their board:
  * MHV-Secure-Messaging
  * MHV-Medical-Records
  * MHV-Medications
  * MHV-Liferay items
 * Add the MHV-Tier-3 label
 * Select Tier 3 Support as the Status for the ticket.
    
* To update the HRC template, go to this file MHV-Tier-3-HRC.md

