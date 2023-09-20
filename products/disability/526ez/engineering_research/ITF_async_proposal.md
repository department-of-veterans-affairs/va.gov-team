# ITF async proposed architecture and code spike

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
- A user enter the 526 flow should (almost) never see "We’re sorry. Something went wrong on our end."

### Axioms
- We are building this to interact with lighthouse
- We want the queuing to be on our end (not LH)
- We need 100% ITF retention and retriablity
- Must not affect functionality of ITF outside of 526
- Sidekiq is not stable enough to be a persistant data source relative to what ITFs NEED to be created
- We cannot lie to the user (we can no longer say ITF was created)

### WIP

#### User Facing Change

For the front end we need to create a new state that shows the user that an ITF is **going to be created**.  We can't use the existing success state, as this implies we have already created the ITF, wich could be a legal can of worms if for some reason we fail.  Given this new state, we will almost certainly:
- want to notify the user when the ITF is successfully created
- need to go through the collab cycle

Here is a summary of the change

- old behavior
  - if an ITF exists, show info about it
  - if an ITF doesn't exist, create it and show info
      - if this fails, we end up in an error state
- new behavior
  - if an ITF exists, same... show info about it
  - if an ITF doesn't exist, **enqueue it's creation** and tell the user we ill let them know when it's done, and they are free to continue the form
      - if ITF creation succeeds, notify the vet from the background worker via email
      - if ITF creation fails, we can retry
        - if it keeps failing, we can notify the vet or a dev to get involved

- [Backend spike PR](https://github.com/department-of-veterans-affairs/vets-api/pull/13887)
- [Frontend spike PR](https://github.com/department-of-veterans-affairs/vets-website/pull/25777)

#### Backend Change
- Track the transaction.  if Sidekiq goes down, we need to know what Users / Submissions are missing an ITF. Otherwise we risk technical problems and (probably legal problems).
    - create a model?
    - handle with logging?
- Square this new logic (ITF may not exist) with our existing code.  **This is a potential worm hole!!!**  This requires, theoretically, testing every edge case of every part of the app that uses ITF.
 
### TODO
- this is new UX, and has potential legal ramifications.  We are no longer saying 'yes we created an ITF', we are saying 'we are going to do our best to create an ITF for you'
- IF we like this new UX, we will need to bolster this implementation on the backend with a few key changes
  - use the 'effective date' as the new timestamp.  This will probably require buy in from VA and changes on their API
  - find everywhere we interact with ITF and update / check for continuity with the new logic.  We can't assume these ITFs will be created quickly, or at all
  - Develop a roll out plan.  We will probably need isolate this on the 526
  - add a local model to for ITFSubmission with a state machine

#### Bonus Stuff
- I've identified a weird state that is possible but unlikely where a catostrophic failure in the vets-api (**not the underlying services, but the actual vets-api code**) can put a user in a state where they see an error but their ITF was successfully created.  This is not something likely to happen in the wild, but probalby worth considering a fix for.  [This Slack thread](https://dsva.slack.com/archives/C053U7BUT27/p1695228246634029) outlines why this is different from our Catastrophic ITF failure, and how it (theoretically) happens
