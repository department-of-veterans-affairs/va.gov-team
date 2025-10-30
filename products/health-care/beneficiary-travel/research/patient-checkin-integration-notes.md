# Patient Check-In Integration Whiteboard

## Notes

- Yes this will be behind a feature toggle
- Yes we will need to update the monitoring strategy
  - create app specific monitoring
- This is going to be for both PCI and OH-Travel
- We will deprecate the existing Claims Ingest API idea that the claim will be created a single API call
- Travel API team does not need to develop the async route
- *For now*, only needs to support Simple Milage Claims, but with the ability to extend

## Current state

Currently using Claims Ingest in a sidekiq job

Sending

``` javascript
{
  icn
  timestamp
}
```

Then sends a text message with results (the claim ID).

If the call timeouts, there is a retry flow to see if the claim was created or not. This should not be needed in the new API

## Migration

### Outstanding Questions

- What appointment modifiers do we have?
- Does our current Authorization set up support PCI level auth? or do we need to use system to system auth
- Should this roll back a claim if one of the steps fails?
- Where should, if any retries happen?
- Which team does the integration work?
  - ???
- which team is responsibly for the rollout?
  - Joint rollout
  - What does the support procedure look like?
- who is sending the text message?
  - PCI team?
- What does testing look like for PCI?
- What does testing look like for OH?
- Is the Travel Pay API OH ready?

### New state

Start the migration with the PCI

Using the Travel Pay API via a module that exposes an interface

``` ruby
## Params
# required: icn || edipi?
# required: appointment_identifier: however we are id'ing the appointment
# optional: rollback: do we rollback the claim or let a partially created claim live, default to false
# optional: expense: array of expenses, defaults to only simple milage. These values can be define in other places in the TravelPayModule as constants or factories 
claim = new TravelPayModule({ app_credentials }).submitClaims({ icn, appointment_identifier, rollback:true, expenses: [{ new TravelPayModule.Expense.SimpleMilage() }] })
claim.claimId = "something"
claim.status = "the claim status"
```

This would do:

1. get a token on behalf of the user
2. create the claim
3. Add the milage expense
4. submit the claim

Throw and error that has

- what error'd
- API message
- state of the claim
- if rollback was successful if it was enabled
