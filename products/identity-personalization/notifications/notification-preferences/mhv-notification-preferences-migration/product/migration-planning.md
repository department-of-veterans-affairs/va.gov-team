# Migration planning

Now that we have [defined both existing and needed MHV notifications]() and reviewed this list with the MHV team, we need to figure out our plan for migrating these over to VA.gov. Existing and new notifications include:

**Existing notifications and notification preferences in MyHealtheVet**

- Rx refill shipment notifications
- VA appointment reminders
- Secure messaging alerts
- Medical image and reports available
- Biweekly MHV newsletter
- Send health summary to your non-VA care provider (currently in testing/on hold and only available to limited users)

**New notifications to develop as part of the health apartment**

- Notification that lab and test results are ready/available

## Considersations and challenges for migrating to VA.gov

### MHV backend is currently not connected to VA Profile

VA.gov integrates with VA Profile for notification preferences. However, MHV does not. This means that we can/should not have VA.gov supporting health preferences at the same time as MHV. Otherwise, we risk people setting one preference in one place or the other, and those preferences don't match. 

### MHV features are moving over 1-by-1 to VA.gov

MHV features (rightfully) moving over 1-by-1 to VA.gov presents a challenge with notification preferences: we'll likely only need to support 1 or maybe 2 new preferences at a time that support the new VA.gov features (eg. having a secure messages alert preference once the secure messaging feature is live). However, in MHV, notification preferences are a whole feature, and it would likely feel weird to retire one preference at a time instead of the whole feature at once.

![MHV notification settings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-05-MHV-profile-research/MHV%20notification%20settings.jpeg)

### Needing to integrate Cerner data

Integrating with Cerner data presents a big challenge for the backend (VA Profile). We'll need to consider how to reconcile potentially different records for the same person that might differ between MHV and the Cerner platform (eg. a person who goes to both Cerner and VistA facilities has opted to receive secure messaging alerts in one platform but not the other).

### Unknown timing

The new health apartment phased approach outlines that features outside of the health apartment (eg. My VA, Profile, etc) will need to support new health apartment features in [phase two of the migration](https://dsva.slack.com/archives/C02BTDTEPNH/p1666729478677299?thread_ts=1666728785.285899&cid=C02BTDTEPNH). Given that there are (understandably) so many unknowns with when we'll be ready for phase two because of external dependencies, this makes it hard for us to coordinate notification preference migration with VA Profile, who has their own roadmap and may not be able to pivot quickly if needed.

### The MHV team will have to help with this work

While my team will be responsible for work in our profile and leading coordination with VA Profile, the MHV team can't be totally uninvolved. They'll need to agree to our migration approach, work with VA Profile to make sure preferences are defined, work with VANotify to migrate actual notifications (though, to be clear, that can happen separately from migrating preferences), work with VA Profile to migrate existing preferences (assuming they want to), and implementing UI updates to retire preferences either one at a time or all at once.

## Potential approaches for migrating notification preferences

### Move preferences one at a time; Do not have MHV integrate with VA Profile

This would involve us moving notification preferences over one at a time as they correspond to health apartment feature migration. MHV would not need to do any work on their end prior to the migration.

#### Pros

- This would correspond to the phased health apartment strategy.
- This would be easier for all teams involved over a total migration of all preferences at once.
- No extra development for MHV over other approaches.

#### Cons

- Without MHV connecting to the VA Profile backend, we run the risk of people setting different preferences on VA.gov and MHV, or people potentially getting duplicate notifications (this depends on whether VANotify will provide notification support at the same time as we provide preference support). **Note**: we already live in this reality with appointment reminders and prescription shipment notifications.
- OR, we need to turn off MHV preferences one at a time. This would create an experience where users would have to go back and forth between VA.gov and MHV to set different preferences based on what is supported on each platform (eg. setting secure messaging alerts on VA.gov and prescription notifications on MHV)..

### Move preferences one at a time; Suggest MHV integrate with VA Profile

This would involve us moving notification preferences over one at a time as they correspond to health apartment feature migration. However, MHV would need to integrate with VA Profile prior to us moving over any notification preferences.

#### Pros

- This would correspond to the phased health apartment strategy.
- If needed, preferences could coexist on VA.gov and MHV at the same time until we are ready to turn off the feature on MHV.

#### Cons

- MHV would have to agree with this approach and dedicate people to the implementation. This would be more work for them, though, potentially not much additional work over what will already be needed (ie. working closely with VA Profile to define requirements and potential migration of existing preferences).
- It doesn't feel worth it to put development into MHV at this point. While the UI wouldn't need to change much (pro), the coordination and backend/frontend integration for MHV would be extra work.

### Move all preferences to VA.gov at one time; Retire all preferences on MHV at the same time

This would involve us migrating all notification preferences at once instead of taking a phased approach.

#### Pros

- We could retire all MHV preferences on MHV at once.
- There would be no conflict between the VA Profile and MHV backends, as they would not be supporting preferences at the same time.
- No extra development for MHV over other approaches.
- We could actually retire the entire MHV profile at this point if we wanted, since the VA.gov profile only needs the MHV preferences in order to have feature parity.

#### Cons

- This goes against the phased health apartment strategy.
- A feature might not yet exist on VA.gov while it's notification preference does (if we support all preferences at the beginning of the health apartment migration, OR a feature might exist on VA.gov but it's notification preference does not (if we wait to move all preferences until the end of the health apartment work). Either way, we created back-and-forth between VA.gov and MHV to manage features.

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

## Recommendations

There's no perfect solution with how we approach the notification migration. However, this is what I think we should prioritize:

- **Not having two backends conflicting:** There's no worse UX than potentially having conflicting data, so we should prioritize an approach that doesn't allow for having two different backends (VA Profile and MHV) live for a given notification at the same time.
- **Reducing burden on MHV**: MHV is going to have to participate in this work no matter what. However, we should try to keep extra work or additional build on MHV to a minimum.
- **Reduced confusion/inconvenience to users**: And of course, we should prioritize minimizing user burden and confusion.

Given this, I think we should consider the following approaches outlined above:

- **First rec - Don't actually support preferences on VA.gov until phase 4 (MHV feature retirment) instead of phase 2**: While this goes against the phased approach outlined for the health apartment, it would allow us to move preferences once at a time in accordance with features moving over to VA.gov. It would also avoid having two backends live at the same time and reduce burden on MHV. While this would require people to go to MHV to adjust settings for a feature until the feature is fully retired on MHV, we can talk about how to handle this to make the experience as painless as possible.
- **Second rec - Move all preferences to VA.gov at one time; Retire all preferences on MHV at the same time**: This would go against the phased approach, and it would mean notification preferences would move over to VA.gov in a way that may not necessarily be aligned to their corresponding feature. However, it would avoid having two backends live at the same time, and would not require additoinal work for MHV beyond what they already need to do.
- **Third rec - Move preferences one at a time; Suggest MHV integrate with VA Profile**: By far, this would allow us to support the best user experience, and it would allow us to stick with the health apartment phased approach. However, it would require MHV to put in development time to the site, which feels like a poor use of time given the site is going to be retired.

Options I don't think we should consider:

- **Move preferences one at a time; Do not have MHV integrate with VA Profile**: This would align with the phased approach, but we'd have the VA Profile and MHV backends live at the same time, which means people could set conflicting preferences in two places.
- 
