# Request & Support Process Critical Path

In which we explain each step along the way when a user submits a request to the VA Identity Team.

NOTE: Steps #2 & #3 will not be in the MVP

## 1. Slackbot Invoked By User
Someone (lets call them the Requestor) goes into the #VSP-Identity Slack channel and invokes our slackbot by typing _/help_

## 2. Initial Bot Response
Based upon what the user chooses in the slackbot drop-down, the slackbot will respond with a form

## 3. Did Initial Response Solve Problem?
The Requestor evaluates the initial response, and makes a decision as to whether or not the Slackbot's initial response is sufficient to solve their prolbem.
- If so, the matter never gets opened.
- If not, they fill out the provided form.

## 4. Requestor Fills out Form
At this point, the Requestor fills out the form provided by the Slackbot, and submits it, creating a new ticket.

## 5. New Ticket Created
When the User submits the Form, the following things happen:
- _A new Ticket is automatically created in Github._
- The requestor is notified via Slack with a ticket nuber for tracking.
 _ - This should automatically happen (actual message language TBD)_
- The Identity team is notified in the #identity-surge Slack channel.
  _- This should automatically happen (actual message TBD)._

## 6. Ticket is Triaged
The Identity team looks at the ticket to make sure that it doesn't need to be immediately addressed.  (Note: requests that need to be immediately addressed generally shouldn't go through this process, this is just in case a P1 skips the normal channels.)
- If it's critical, Step #7 is skipped and the ticket gets immediately assigned. 
- If not, then the identity team will prioritize it.
- A Single Point Of Contact (SPOC) from the Identity Team should be established.

## 7. Ticket is Prioritized
The Identity Team looks at the ticket, and prioritizes against other requests.

## 8. Ticket is Assigned
When the Identity Team determines it is time to work on the ticket, it is then assigned to a member of the the team
_- The initial assignment of a ticket should trigger another automated Slack message to the Requestor (language TBD)._

## 9. Ticket Completion Target Date
The Identity Team member to whom the ticket is assigned will put a target date towards the ticket.
- The SPOC should reach out to the Requestor via Slack and inform them of the target date.

## 10. Ticket is Worked On
The Identity Team member (or members, if need be), do the actual work. 
- If at any time, the target date changes, the SPOC should be notified.
  - The SPOC should let the Requestor know of the change.
 
## 11. Ticket is Ready for UAT
When the Ticket is finshed being worked upon, the SPOC should notify the Requestor that -- if possible -- they should do User Acceptance Testing.
- NOTE: Not every request is going to need this.

## 12. UAT
If possible, the requestor will do some kind of UAT, and makes the decision whether or not to release into production.
- If no, then the ticket goets back to **#10 Ticket is Worked On**.
- If yes, then the Identity team can release the code into production.
- NOTE: Not every request is going to need this.

## 13. Code Released into Production
At the Identity Team's discretion, the code released into production.
- NOTE: Not every request is going to need this.

## 14. Ticket Closed
After the code has been released into production, and it is determined that the new code hasn't broken anything, the Identity Team closes the ticket.
- _An automated Slack notification will be sent to #VSP-Identity Slack channel saying the ticket is closed (language TBD)_


