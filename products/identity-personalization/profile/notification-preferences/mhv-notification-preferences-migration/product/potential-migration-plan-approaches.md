# Potential migration plan approaches

### Top recommendation: MHV integrates its profile with VA Profile

This would involve MHV integrating their notification preferences with VA Profile as soon as possible. Then, we could add preferences one-at-a-time to VA.gov as corresponding health tools move over to the site. 

#### Pros

- This would correspond to the phased health apartment strategy.
- If needed, preferences could coexist on VA.gov and MHV at the same time until we are ready to turn off the feature on MHV.
- This would allow for a seamless UX during the transition between MHV > VA.gov, as users could access either profile, data would save in the same backend (VA Profile).

#### Cons

- This requires development on MHV, and there are many competing priorities for people's time. This may not be a reasonable lift based on other priorities for the MHV team.

### If integrating MHV <> VA Profile is not possible: VA.gov conducts discovery on whether it makes sense to integrate with MHV backend first, then work on the VA Profile integration over time

#### Pros

- Users could use either VA.gov or MHV frontends, and preferences would save in the same place.
- We could still move preferences to the VA Profile backend one at a time.
- We would have flexibility in how we add preferences to the VA.gov frontend, either one at a time or all at once, and we could do this any time.
- This does not require additional changes to MHV beyond work that is already required (ie. MHV will need to coordinate with us on this work).

#### Cons

- VA.gov is effectively responsible for two integrations -- one to MHV, then reintegrating everything through VA Profile.
- I don't have a sense of technical complexity for integrating with MHV, and because of contract switches, we won't have anyone to do technical discovery on this until the new year.


### Don't actually support preferences on VA.gov until phase 4 (MHV feature retirment) instead of phase 2

This would involve us moving notification preferences over one at a time as they correspond to health apartment feature migration. However, instead of supporting preferences in phase 2 of the migration, we would wait until phase 4, when a feature is entirely turned off on MHV.

#### Pros

- Moving preferences over one at a time would mean that if a feature exists on VA.gov (eg. secure messages), so does its settings.
- There would be no conflict between the VA Profile and MHV backends, as we would retire the MHV version of a preference (eg. secure messaging alerts) at the same time as we activated it on VA.gov.
- No extra development for MHV over other approaches.

#### Cons

- This goes against the phased health apartment strategy, as we ideally would be supporting preferences in phase 2, not phase 4.
- Users would temporarily have to go to MHV to set preferences while a feature was live on VA.gov (eg. setting a secure messaging preference on MHV while the secure messaging feature is live on VA.gov) until the feature was fully retired on MHV.
- This does not get around the problem of turning off MHV preferences one at a time. This would create an experience where users would have to go back and forth between VA.gov and MHV to set different preferences based on what is supported on each platform (eg. setting secure messaging alerts on VA.gov and prescription notifications on MHV).

### Move all preferences to VA.gov and VA Profile at one time; Retire all preferences on MHV at the same time

This would involve us migrating all notification preferences at once instead of taking a phased approach.

#### Pros

- We could retire all MHV preferences on MHV at once.
- There would be no conflict between the VA Profile and MHV backends, as they would not be supporting preferences at the same time.
- No extra development for MHV over other approaches.
- We could actually retire the entire MHV profile at this point if we wanted, since the VA.gov profile only needs the MHV preferences in order to have feature parity.

#### Cons

- A feature might not yet exist on VA.gov while it's notification preference does (if we support all preferences at the beginning of the health apartment migration), **OR** a feature might exist on VA.gov but it's notification preference does not (if we wait to move all preferences until the end of the health apartment work). Either way, we created back-and-forth between VA.gov and MHV to manage features.
