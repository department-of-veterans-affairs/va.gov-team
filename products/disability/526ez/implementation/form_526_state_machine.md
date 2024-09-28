# Form 526 MVP State machine
## Overview

We are about to do an audit in cooperation with VBMS to determine the success of our past year of remediation efforts.  Though VBMS is the source of truth, we need a way to easily mark submissions as conceptually 'done' or 'off our plate'.  To date, we have been using the presence of `submitted_claim_id` and `backup_submitted_claim_id` to represent success via the primary or backup submission path, respectively.  **This did not account for our 'failsafe' remediations**. Additionally, with a simple state machine in place we have a way to record the results of Lighthouse's status updates. Even after we send a submission to lighthouse, it isn't "off our plate" until LH has marked it as successful (status of `vbms`).

### The solution
- Add a basic state machine to the form 526 Submission flow with pass fail states for VBMS and remediation
- Add other transitory states for completeness

### Omissions
This work *does not* add any transition validation to the state machine.  That would be out of scope for MVP, and dangerous to roll out as it could cause errors in the submission flow.  MVP is to simply add the datapoint, unblocking our audit of VBMS.

#### This is not a replacement for a Global UUID
This is not a holistic solution for end-to-end tracking. This work simply allows us a persistent, simple, queryable, and non-human-error-prone way to track submission state outside of the normal submission flow, ie remediation.  There is a pretty good chance that this will be replaced in the next year or so with a global UUID for submissions (at least that's the current thinking).

I imagine that once we have a global UUID, or similar iteration, we will be glad to have this data.  It will allow us to quickly identify old submissions that *should* have a global UUID at the time of transition.  Or, maybe this will be sufficient to catalogue everything that *predates* the global UUID.  Either way, we need an immediate solution for tracking our remediation, which is the primary value of this work.

## Implementation
### POSSIBLE LIFECYCLES:
  
#### Primary path:
  - Without polling
    - Happy path
      - unprocessed > (submission action)
        - finalize_success
    - Sad path
      - unprocessed > (submission action)
        - failed_primary_delivery
  - With polling
    - Happy path
      - unprocessed > (submission action)
        - delivered_to_primary > (polling action)
          - finalize_success
    - Sad paths
      - unprocessed > (submission action)
        - failed_primary_delivery
        - delivered_to_primary > (polling action)
          - rejected_by_primary
#### Backup paths: (polling is required in all cases)
  - Happy path
    - failed_primary_delivery || rejected_by_primary || unprocessed || failed_backup_delivery || rejected_by_backup > (submission action)
      - delivered_to_backup > (polling action)
        - finalize_success
  - Sad paths
    - failed_primary_delivery || rejected_by_primary || unprocessed || failed_backup_delivery || rejected_by_backup > (submission action)
      - failed_backup_delivery
      - delivered_to_backup > (polling action)
        - rejected_by_backup
Remedial paths:
  NOTE: if we are here, something is weird so we will no assumptions about incoming state
  - Happy path
    - any state > (submission action)
      - in_remediation > (polling or manual confirmation action)
        - finalized_as_successful
  - Sad path
    - any state > (submission action)
      - in_remediation > (polling or manual confirmation action)
        - unprocessable


## MVP events

```ruby
    # - a submission has been delivered to our happy path
    # - requires polling to finalize
    event :deliver_to_primary do
      # TODO: post MVP rule to enforce
      # transitions from: :unprocessed, to: :delivered_to_primary
      transitions to: :delivered_to_primary
    end

    # - submission failed delivery to primary path for any reason
    # - requires backup submission or remediation
    event :fail_primary_delivery do
      # TODO: post MVP rule to enforce
      # transitions from: :unprocessed, to: :failed_primary_delivery
      transitions to: :failed_primary_delivery
    end

    # - a successfully delivered submission has failed 3rd party validations on primary path
    # - requires backup submission or remediation
    event :reject_from_primary do
      # TODO: post MVP rule to enforce
      # transitions from: :delivered_to_primary,to: :rejected_by_primary
      transitions to: :rejected_by_primary
    end

    # - a submission has been delivered to our backup path
    # - accepts any non-success type state
    # - MUST accept all the same incoming statuses as fail_backup_delivery
    # - requires polling to finalize
    event :deliver_to_backup do
      # TODO: post MVP rule to enforce
      # transitions from: %i[failed_primary rejected_by_primary failed_backup_delivery], to: :delivered_to_backup
      transitions to: :delivered_to_backup
    end

    # - a submission has failed to be delivered to our backup path
    # - accepts any non-success type state
    # - MUST accept all the same incoming statuses as fail_backup_delivery
    # - requires remediation
    event :fail_backup_delivery do
      # TODO: post MVP rule to enforce
      # transitions from: %i[failed_primary rejected_by_primary failed_backup_delivery], to: :failed_backup_delivery
      transitions to: :failed_backup_delivery
    end

    # - a successfully delivered submission has failed 3rd party validations on backup path
    # - requires remediation
    event :reject_from_backup do
      # TODO: post MVP rule to enforce
      # transitions from: :delivered_to_backup, to: :failed_backup_delivery
      transitions to: :failed_backup_delivery
    end

    # - Submission has entered a manual remediation flow, e.g. failsafe, paper submission
    # - requires confirmation of success, e.g. polling or manual confirmation via audit
    event :begin_remediation do
      transitions to: :in_remediation
    end

    # - The only state that means we no longer own completion of this submission
    # - There is nothing more to do.  E.G.
    #   - VBMS has accepted and returned the applicable status to us via LH
    #   - Manual remediation has been confirmed successful
    #   - EVSS has received this submission and now owns it
    event :finalize_success do
      transitions to: :finalized_as_successful
    end

    # - a submission should be ignored
    # - we probably want to avoid using this state
    event :mark_as_unprocessable do
      transitions to: :unprocessable
    end
  end
```
