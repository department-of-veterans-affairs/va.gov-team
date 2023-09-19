# WIP - ITF async proposed architecture

## Purpose

Gather findings, pose questions, and outline executable architecture that will allow us to make ITF creation non-blocking relative to the 
form 526 flow.

## Terms
- `ITF Provider` - the 3rd party API that we use (VBMS?) to officially create an ITF
- `3PI` - "third party interaction" or any action our system takes against an external system, e.g. lighthouse
- `Non-working state` - any condition which prevents normal interactivity with the described system, be it schechulded maitenance or catastrophic failure

## Resources
- [Slack thread about the continued outages and proposed fix](https://dsva.slack.com/archives/C04KW0B46N5/p1695064685597689?thread_ts=1694440762.541849&cid=C04KW0B46N5)

## Notes
### Acceptance Criteria

- In the case that our ITF provider is in any **non-working state**
  - As an end user with an existing ITF
    - I am presented with information about my existing ITF 
    - I am able to continue into the 526 form flow
  - As an end user with an expired / non-existent ITF
    - I am presented with confirmation that a new ITF is being created for me
    - I'm able to continue into the 526 form flow
- In the case that our ITF provider is in a working state
  - **ditto the above conditions**

**TL;DR**
- ITF creation is non-blocking
- A user enter the 526 flow should never see "We’re sorry. Something went wrong on our end."

### Axioms
- We are building this to interact with lighthouse
- We want the queuing to be on our end (not LH)
- We need 100% ITF retention and retriablity
- Must not affect functionality of ITF outside of 526

### Questions

## Proposal

- simplify front end 
  - no more Exists? then Create?.  update to be a Find or Create by flow
- Wrap existing find and create actions (factory) in 'find or create' service that we can offload to sidekiq
- persist a record of the ITF creation request to track the status of the ITF





