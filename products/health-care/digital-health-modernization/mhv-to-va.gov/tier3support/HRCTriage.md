# MHV Web and Mobile - Tier 3 Triage of HRC Dynamics issues
### Standard Operating Procedures


## VA.gov/VAHB (HRC Dynamics)
Records in Dynamics (i.e. tickets) bounce between Help Desk tiers as compared to tickets with multiple contributors adding comments and status changes like in JIRA or GitHub.
### MHV Tier 3 Queue
To navigate to the MHV Tier 3 queue:
* Select Queues in the left rail navigation
 
* In the queues dropdown, select < MHV Tier 3 >
 
* In the items dropdown, select All Items
 
The default fields shown in this view include only some of the fields helpful for our reference.
 

### Edit Columns and Views
The following fields have been the most useful for reference in a default view:
* Record #
* Entered Queue
* Status Reason (Object)
* Owner (Object)
* Area (Object)
* Sub Area (Object)
To add columns to your view:
* Click Edit Columns
* Click +Add Columns
 
* Select the Related tab
* Search the field name to add
* Select the field in the Object (Request) result
NOTE-Multiple results may return. The Object Request is usually the one you’re looking for.
### Filter by Area or Sub Area
* Click the column name dropdown
* Select Filter by

### Initial Ticket Review
At minimum, the Status Reason and Owner fields are to be updated when you are initially reviewing a ticket.
* Click a record number
The Summary tab is the default view. In the Status section:
* Change the Status Reason to In Progress
* Change the Owner to your name
 
* In the ticket navigation, click Save (not Save & Close)
 

To view the details of the ticket:
* Click the Ticket Information tab
 
* Navigate to the Description field and scroll through for the details

### Triage Next Action
After review of the issue description, we need to take a next action:
* Provide a resolution if the cause is known
* Request more information from the reporter if not enough information is included to investigate or understand the issue
* Create a GitHub ticket (See guidance below) for one of our development teams to further investigate
* Reroute to the correct Tier 3 if the issue isn’t under MHV scope (this is rare as our Contact Center partners are pretty good about correctly routing)
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
* To update the HRC template, go to this file MHV-Tier-3-HRC.md

