Epic [#95359](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95359)
[Figma design](https://www.figma.com/design/TxXD5bGUOhbHHWLb85GPjK/10-10CG?node-id=3519-6293&p=f&t=VJ1l5i51SLMOmZju-0) 

## Benefit to the Veteran
As a Veteran/Caregiver, I want to be immediately notified when my application submission has failed, so that I can take whatever actions are advised to complete a successful submission

## Hypothesis or Bet
**If** _we implement an automated email to be sent upon vets-api submission failure in addition to the manual process we have in place today_ **then** _the Veteran/Caregiver will be notified immediately and be able to take any actions needed prior to being contacted directly by the CG team._

## Background
- As part of the Zero Silent Failures and Collab Cycle QA Standards, we are required to add logging for Resolved Failures (when the failure is made known to the Veteran).  We also determined that we could implement another layer of automated notifications in addition to the manual process already in place for notifying the user of any submission failures.
- NOTE The known VA Notify email failure callback mechanism is in progress with VA Notify and will be implemented when ready for teams to use. 
