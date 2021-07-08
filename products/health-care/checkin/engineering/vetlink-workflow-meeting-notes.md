# Questions about Queueing/Workflows in VetLink

## Glossary
- Action Flow - the "workflow" a patient goes through to complete their visit
- ATC - "Air Traffic Controller": someone who directs traffic to various services
- Inner Queue - the list of people waiting on a stage in the action flow

## Workflows / Action flows
0. Overall objective of queueing/workflows
    - no appt/ walk in
        - e.g. primary walk in (pc walk in)
        - NO "hand off" where you get ticket #1... pcp hands off to lab hands of to etc -> etc
        - kiosk has alphanumeric queue ranges
        - can call patients out of order
1. What does normal flow through the staff-facing workflow process look like?
2. How does a clinic create and enable a workflow?
     - clinical and ipact? 
3. Who creates workflows currently (what role)?
     - site point of contacts
     - POCs can delegate 

4. What is the behavior when more than 1 patient is waiting for the same step
in the workflow?
    - no ownership or locking
    - "inner queue" management is not software-driven
    - "inner queue" management is controlled by people & clinic processes, not the application

5. Who advances the patient through the action flow? 
    - sizeable majority doing it themselves (clerk,nurse,provider)
    - minority has "ATC"
6. Can the person who manages the action flow change them mid-day?
    - No, these are not customizable per clinic
    1. What happens?
    - Not Applicable
    2. Are there processes in place to avoid this?
    - this cannot happen because workflows are not customizable
7. Are the workflows created from a list of pre-set states?
    - No, 5 or 6 workflows to choose from
    1. If so, how can the workflow manager role request more states if needed?
    - N/A
    2. If not, are there any guardrails around what the state is named?
    - workflows are preset, cannot build a workflow, cannot create new states

8. What are some examples of logic in state transitions
    - No logic in state transition, but the states define which overall patient state buttons the staff member can see
    - patient button visibility changes mostly done for screen real estate purposes

9. What kind of metrics exist?
    - not a lot of staff usage metrics

11. Can a staff member move a patient backward in the process? 
    - sort of, can "undo"
    - Example: clerk -> done with clerk -> with nurse -> undo -> done with clerk -> with nurse -> done with nurse    

-- UNORGANIZED BELOW --

Can a pat be in more than 1 status
    - patient activity
    - appt 

not changing patient status, changing appointment (visit?) status

filters:
    - new user req access -> vetlink admin approve/deny -> can get assigned template(s): set with specific filters (women's nurse)
    -  no need to change filter every morning or lunch or whatever

big benefit:
    - more operational
    - time study stuff is cool, but not regular use
    - used to have to check all clinics and remember
    - it's for the day-to-day operations

use of questionnaires is how we get walkins added to queue:
    - not really a questionnaire
    - "talk to an enrollment specialist" -> what can we help you with? 3 options. dpeending on answers put into certain pat activities
    - staff can add pat to queue on demand

