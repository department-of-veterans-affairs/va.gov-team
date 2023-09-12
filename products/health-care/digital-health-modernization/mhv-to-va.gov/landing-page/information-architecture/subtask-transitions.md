# Transitions following subtasks across the MHV on VA.gov experience
Currently, work done by any specific product on VA.gov (Appointments, Medications, Medical Records, or Secure Messaging) is confined to those products. What hasn't been solved for yet is what happens after sub-tasks are completed.

Do users stay in the Appointments space and get a success and/or error alert communicating the results of their task? Or do they get routed to the product they were on before (if applicable)? Something else? If we determine that they should go back to where they were before, then a routing experience needs to be designed that answers 3 primary questions:

1.) Where should a user go when they complete a subtask?
2.) How do we route them there?
3.) How do we communicate it to them?


## Subtasks
Appointments:
* Scheduling a new appointment (only possible for some facilities)
* Requesting a new appointment
* Cancelling an appointment
Secure Messaging
* Sending a new message

## Example
Let's say I am viewing my After-Visit Summary (AVS) in the Care notes and Summaries space within Medial Records. I may see actions to take, such as the need to schedule a follow-up visit for diagnostic imaging on my left leg. If I navigate over to Appointments to schedule that next medical appointment and go through the task flow of scheduling, what happens when I click "submit appointment request"? With horizontal (task flow) navigation, I would be sent back to where I was before (my AVS summary). But in leaving the Appointments space & going back to my AVS within Medical Records, I still need a success alert to appear that lets me know whether or not my appointment was scheduled successfully.

tl;dr: the alert message belongs to the Appointments experience, but should it be displayed in the Medical Records experience? Are there other sub-tasks not captured above that we're missing? Do we need to solve for a transition experience, or is the best experience to keep the user in the same product space?

If we decide on a transition experience: what are technical constraints related to displaying alerts/messages to a Veteran while also routing them between tools? What is the best UX?

## Hypothesis or bet

* If we manage the user flow following a sub-task well, the MHV on VA.gov experience will be much more seamless and lead to a better Veteran experience.
* If we need to account for transition communications to Veterans, the experience should be uniform for all sub-tasks within MHV on VA.gov to deliver a consistent UX.

## User Flow
TBD
