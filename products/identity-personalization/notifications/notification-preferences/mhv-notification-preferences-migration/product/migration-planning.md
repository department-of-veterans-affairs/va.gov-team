# Migration planning

Now that we have [defined both existing and needed MHV notifications]() and reviewed this list with the MHV team, we need to figure out our plan for migrating these over to VA.gov. Existing and new notifications include:

**Existing notifications and notification preferences in MyHealtheVet**

- Rx refill shipment notifications (note: there is a text notification supported through VEText that already has a preference in the VA.gov profile)
- VA appointment reminders (note: there is a text notification supported through VEText that already has a preference in the VA.gov profile)
- Secure messaging alerts
- Medical image and reports available
- Biweekly MHV newsletter
- Send health summary to your non-VA care provider (currently in testing/on hold and only available to limited users)

**New notifications to develop as part of the health apartment**

- Notification that lab and test results are ready/available

## Considersations and challenges for migrating to VA.gov

Specifically, these are challenges we need to consider in how we approach moving notification preferences from MHV to VA.gov. This is not an exhaustive list of challenges we'll face in the notifications work (eg. needing to integrate Cerner data; unknown timing of when this work needs to be done).

### MHV backend is currently not connected to VA Profile

Unlike most features moving over to VA.gov, notification preferences will need to change backends in addition to the frontend. VA.gov integrates with VA Profile for notification preferences, while MHV does not. This means that we can/should not have VA.gov supporting health preferences at the same time as MHV. Otherwise, we risk people setting one preference in one place or the other, and those preferences don't match. 

### MHV features are moving over 1-by-1 to VA.gov

MHV features are moving over 1-by-1 to VA.gov. This presents a challenge with notification preferences: we'll likely only need to support 1 or maybe 2 new preferences at a time as features migrate (eg. having a secure messages alert preference once the secure messaging feature is live). However, in MHV, notification preferences are a whole feature, so we'll need to decide between moving all preferences over or having to retire one preference at a time.

<details>
  <summary>Click to expand for screenshot of MHV preferences</summary>

![MHV notification settings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-05-MHV-profile-research/MHV%20notification%20settings.jpeg)

</details>

### The MHV team will have to help with this work

While my team will be responsible for work in our profile and leading coordination with VA Profile, the MHV team can't be totally uninvolved. They'll need to agree to our migration approach, work with VA Profile to make sure preferences are defined, work with VANotify to migrate actual notifications (though, to be clear, that can happen separately from migrating preferences), work with VA Profile to migrate existing preferences (assuming they want to), and implement UI updates to retire preferences either one at a time or all at once.

## Recommendations on how to approach migrating notification preferences from MHV to VA.gov

These are in order of which approach I think we should take:

### VA.gov to integrate with MHV backend first, then work on the VA Profile integration over time

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

### Move preferences one at a time; Suggest MHV integrate with VA Profile

This would involve us moving notification preferences over one at a time as they correspond to health apartment feature migration. However, MHV would need to integrate with VA Profile prior to us moving over any notification preferences.

#### Pros

- This would correspond to the phased health apartment strategy.
- If needed, preferences could coexist on VA.gov and MHV at the same time until we are ready to turn off the feature on MHV.

#### Cons

- MHV would have to agree with this approach and dedicate people to the implementation. This would be more work for them, though, potentially not much additional work over what will already be needed (ie. working closely with VA Profile to define requirements and potential migration of existing preferences).
- It doesn't feel worth it to put development into MHV at this point. While the UI wouldn't need to change much (pro), the coordination and backend/frontend integration for MHV would be extra work.


### Move preferences one at a time; Do not have MHV integrate with VA Profile

**Note**: Not doing this because it would leave two backends live at once, which would create a poor UX.

<details>
  <summary>Click to expand details</summary>

This would involve us moving notification preferences over one at a time as they correspond to health apartment feature migration. 

#### Pros

- This would correspond to the phased health apartment strategy.
- This would be easier for all teams involved over a total migration of all preferences at once.
- No extra development for MHV over other approaches.

#### Cons

- Without MHV connecting to the VA Profile backend, we run the risk of people setting different preferences on VA.gov and MHV while we are between phases 2 and 4, or people potentially getting duplicate notifications (this depends on whether VANotify will provide notification support at the same time as we provide preference support). 
  
</details>
