# Architecture Proposal

## Data Flow

### UX
**note** for the purpose of end user facing UX, we denote ITFs as having two state, **existing** and **not existing**.  Complexity around how these states generated and represented is abstracted away from the user.

As an end user (veteran)
- I am logged in
- I arrive at the ITF screen (beginning of form 526 flow)
- IF I have an ITF that was created within the last year, there is no change to the exiting UX
- IF I *do not* have an existing ITF, I see a screen informing me that one is being created, with TBD messaging to the effect of "Your intent to file has been recorded and a record is being created.  Today is the ITF date".
 
### Routing Layer
- No changes to routing / endpoints

### Controller Layer
**note** there is no external API traffic implied by the following.  The controller simply loads or creates an ITF from our application database for the user.  All async creation / validation is offloaded to model layer / Asnyc engine.

- IF a valid ITF record exists for the user, the controller loads and returns it
- IF a valid ITF **does not** exist for the user, the controller creates one and returns it
- All async logic around the external creation of the ITF (e.g. calls to EVSS) is abstracted away from the contorller layer.

### Model Layer
**note** we *never* check for an ITF against our external source-of-truth in real time.  We trust our local database to be an update cache of valid ITFs.  To this end, we will have two new models (exact names TBD) but the structure here will reflect after our `Form526Submission` / `Form526JobStatus` relationship. We will separate the *ITF* and the *ITF creation* as logical, related chunks of data.  An ITF instance `has_many` ITF creation job records, and an ITF creation job `belongs_to` an ITF instance.

**note** both the ITF and the ITF creation job will have a `status` value.  It may seem redundant to track status on the ITF if we are able to see a success status on the associated job(s), however, even when a Job succeeds, and an ITF is marked as `confirmed`, it is important that we allow the rolling-cache the ability to de-confirm (expire / invalidate) an ITF.  Rolling cache jobs are *not* tracked in the database, therefor ITF's require their own distinct `state`.  

#### the ITF instance model
- actual name is TBD
- An ITF record is loaded from our application database by a unique user identifier
  - Account `has_many` ITFs.  ITF `belongs_to` an Account.
  - Because ITFs expire, and there is no good reason to delete expired ITFs, we use a one to many relation.
- IF an ITF record is found in the database, before it is returned it is checked for **validity**.  A **valid** ITF is defined as
  - Created within the last year (not expired)
  - Has a transaction state of `confirmed` or `pending`.
    - a state of `confirmed` indicates that our ITF is successfully represented in our external source of truth.
    - a state of `pending` indicates that the ITF exists locally but is still in it's async creation cycle, possibly waiting on a retry due to downstream system problems. We **must not** create another ITF record / ITF creation job cycle, as this could register the incorrect effective date, as well as pollute our system with redundant jobs. 
- IF an ITF record is valid it is returned to the controller.
- IF an ITF is **not valid**, `nil` is returned.  a **non valid** ITF is the same as a non-existent ITF (from the model layer's perspective)
  - When a `nil` or non-valid ITF is returned, the controller will `create!` and instance of the ITF model.
  - This new ITF record will be associated with the user
  - This new ITF record will be created with an `effective_date` timestamp.
  - This new ITF record will be created with a status of `pending`
    - This state will be updated asynchronously
   
 ### ITF creation job model
**note** Logically simliar to our `Form526JobStatus` model.  This model tracks the status of async record creation with context on each subsequent attempt.

- When an ITF instance is created, an asnyc job will be enqueued to track the source-of-truth sync of the new ITF.  This job will represented in our database by this tracking model
- Instantiated with a status of `try`
- Failed jobs will be updated with a status of `error`
  - error responses will be logged and recorded on in the database
  - When a job failes, we set the job status, record the error, and raise an error, automatically sending the job to the retry queueu where a new JobStatus model will be created.
- Successfull jobs will updated with a status of `success`
  - when a job succeeds, the associated ITF will also be updated with a state of `confirmed`. 

### Async Engine
**note** this is a logical encapsulation of everything required to keep our "cache" (aka local DB record) in sync with the source of truth (e.g. EVSS).  It has two parts, an async (sidekiq) creation job for ITF creation, and a rolling-cache refresh job to ensure that we maintain parity with our external source of truth. The async creation job's purpose is to allow ITF *writes* to be non-blocking, and the rolling-cache refresh is to allow our ITF *reads* to be non-blocking.

#### Async Creation
**note** there is a likely edge case where a user may perform a subsequent login while their ITF record is still being created.  We **must not** create another ITF record / ITF creation job cycle, as this could register the incorrect effective date, as well as polute our system with redundant jobs.  For this reason, we will treat `pending` as a valid ITF state, as this indicates that it is still in it's retry cycle. 

- When an ITF is created in our database, an `after_create` lifecycle hook enqueues it's external creation via the **Async Engine**
- This is a Sidekiq job the enqueues the call to our external source of truth (E.G. EVSS)
  - This job also creates an ITF creation Job record to track itself
- The job accepts the ID of the newly created local ITF record.  This gives it all the context it will need to load the appropriate models.
- The job makes a call to our external source of truth
- IF the call returns as success (e.g. `200`):
  - we update the ITF creation Job to `success`
  - we update the local ITF instance state to `confirmed`
- IF the call returns non-success (e.g. `400`):
  - we update the ITF creation Job to `error`
  - we record the error response on the ITF creation Job record
  - we **do not** modify the ITF record (unless this is an exhaustion event)
  - we will raise an error, thus enqueuing the failed creation for automatic retry.
    - These failures will most likely be caused by downstream service outages, and do not necessarily represent cause for alarm.  however, we will want to track these the same way we do other 526 related job failures in Datadog.
  - IF the worker exhausts it's retries
    - we update the ITF creation Job to `expired`
    - we update the ITF record's state to `failed`
    - we alert that manual remediation is required
  
#### Rolling-Cache refresh
**note** this part is... still under consideration.  There may be a better way to do this, as a rolling cache could be expensive

**note* we do not receive events from our external source of truth if something changes with an ITF. There is no known, apparent reason why our underlying source-of-truth rec ords would change, however we cannot ignore the possiblity that they might.  For this reason, we need to ensure that our local ITF records do not fall out of sync with our source-of-truth.  To accomplish this, we will have a slow rolling cache that refreshes each ITF every X number of days

- TODO: figure out how often this can run
- This job is always (maybe?) running in the background.
- It itterates over `confirmed` ITF records that are less than a year old **only**.  Other ITF statuses would imply
  - `pending`: the job is still in it's asnyc creation cycle, so running a cache check would be redundant
  - `failed` manual remediation is underway
- By running on only `confirmed` records that are less than a year old, we ensure our dataset will not grow unmanageably large
- Runs as a trickle, checking each ITF for parity with the external state
- IF an ITF is found to be **in sync**, we do nothing
  - possible alternative would be timestamping as 'last synced at'.  Not sure yet if this is useful.
- If an ITF is found to be **out of sync** it is updated to state of `broken`.  This is a non-valid state representation that we can use to alert on.
  - It's important to have a different state for ITFs that were never synced (`failed`) vs ITFs that came out of sync (`broken`) this will probably be an important datapoint if / when we start seeing broken ITFs, as could imply a systemic problem that needs addressing.

## Diagram

![ITF Async (1)](https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/7e36f94a-9f52-44c2-940b-3868b4f01dd9)

# Discovery
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
**ANSWER**: Our goal is to allow both ITF and form submission independantly.  If something goes wrong and both ITF and 526 submission take longer than a day (meaning their ITF date will be wrong) then we will have a remediation playbook.
TODO: figure out what our options are with VBA
   
#### 2. What are the UI Implications?
**ANSWER:** We are going to update the UX messaging to more accurately reflect the new process.  
TODO: get Julie (?) or UX involved.
 
### Preflight check list
Once this is built and in place we would need to be certain

- all use cases of ITF to form association have been updated to remove the assumption of a complete ITF
- we have a rollout / rollback plan that accomodates for this changing data modeling
