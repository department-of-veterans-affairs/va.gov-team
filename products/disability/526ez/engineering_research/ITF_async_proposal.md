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
- [Slack thread with Micah's review](https://dsva.slack.com/archives/C04U3EDUR3M/p1695256516348859?thread_ts=1695242442.179589&cid=C04U3EDUR3M)
 
## Acceptance Criteria for post spike work

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

## Axioms
- We are building this to interact with lighthouse
- We want the queuing to be on our end (not LH)
- We need 100% ITF retention and retriablity
- Must not affect functionality of ITF outside of 526
- Sidekiq is not stable enough to be a persistant data source relative to what ITFs NEED to be created
- We cannot lie to the user (we can no longer say ITF was created)

## A User Facing Change?

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



### This as a technical lift

Not to hard.  Basiclly add a new form state, A model to record in process ITF submissions, and logic to enqueue the ITF creation.

- [Backend spike PR](https://github.com/department-of-veterans-affairs/vets-api/pull/13887)
- [Frontend spike PR](https://github.com/department-of-veterans-affairs/vets-website/pull/25777)

#### Outstanding work from this spike
- Square this new logic (ITF may not exist) with our existing code.  **This is a potential worm hole!!!**  This requires, theoretically, testing every edge case of every part of the app that uses ITF.
- Test the implementation

### This as a business decision

This is by far the more complicated side of this work.  A few outstanding questions for management

#### 1. what if ITF creation fails or takes to long?
- as a user, i pass the ITF creation screen, and complete my form.  As I'm about to submit...
  - IF the ITF is created  I am able to submit
  - ELSE the ITF is **still pending**, am I blocked from submitting the form?
    - IF YES, do I see a spinner?  a message telling me to come back later?
    - IF NO we need a new state for Form submissions.  This is a deep dark wormhole of downstream interaction
  - ELSE the ITF submission has **failed**, am I blocked from creating the form?
    - IF YES, what is my UX
    - IF NO, how do we go about recreating and syncing the ITF?  This also requires a state for form submissions
   
#### 2. What are the UI Implications?
- If we DO NOT update the UI
  -This would effectively be "lying" to the vet, telling them that we have created an ITF when we haven't. Legal wormhole?
- If we DO update the UI
  - Will the new message confuse them?  how will we asuage fears and follow ups that their form is not *really* submitted?

#### 3. What are the 'effective date' considerations?
- Does Lighthouse accept a 'crated at' timestamp?
  - IF YES, cool
  - IF NO, we would need them to update their code.  This could be a potentially large change, depending on how they interact with this data downstream.
 
#### 4. Is this even legal?
Seems like, probably yes.  But someone should probably ask a lawyer...

#### 5. Is the juice worth the squeeze?
It's worth noting that if we build this feature, we are doing what is colquially known as 'building to the bug', where in this case the 'bug' is a performance bottle neck in our down stream services.

It's a bit like putting a parking lot next to a highway offramp that tends to get clogged, rather than improving the offramp.

The problem on our end was a timeout.  That was corrected, and now we are simply engineering to a 'what if' scenario where we are anticipating latency and possible outages of a downstream system. 

 
### Preflight check list
Once this is built and in place we would need to be certain

- all use cases of ITF to form association have been updated to remove the assumption of a complete ITF
- we have a rollout / rollback plan that accomodates for this changing data modeling
