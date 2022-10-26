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

### MHV features are moving over 1-by-1 to VA.gov

MHV features (rightfully) moving over 1-by-1 to VA.gov presents a challenge with notification preferences: we'll likely only need to support 1 or maybe 2 new preferences at a time that support the new VA.gov features (eg. having a secure messages alert preference once the secure messaging feature is live). However, in MHV, notification preferences are a whole feature, and it would likely feel weird to retire one preference at a time instead of the whole feature at once.

### MHV backend is currently not connected to VA Profile

VA.gov integrates with VA Profile for notification preferences. However, MHV does not. This means that we can/should not have VA.gov supporting health preferences at the same time as MHV. Otherwise, we risk people setting one preference in one place or the other, and those preferences don't match. 

### Needing to integrate Cerner data

Integrating with Cerner data presents a big challenge for the backend (VA Profile). We'll need to consider how to reconcile potentially different records for the same person that might differ between MHV and the Cerner platform (eg. a person who goes to both Cerner and VistA facilities has opted to receive secure messaging alerts in one platform but not the other).

### Unknown timing

The new health apartment phased approach outlines that features outside of the health apartment (eg. My VA, Profile, etc) will need to support new health apartment features in [phase two of the migration](https://dsva.slack.com/archives/C02BTDTEPNH/p1666729478677299?thread_ts=1666728785.285899&cid=C02BTDTEPNH). Given that there are (understandably) so many unknowns with when we'll be ready for phase two because of external dependencies, this makes it hard for us to coordinate notification preference migration with VA Profile, who has their own roadmap and may not be able to pivot quickly if needed.

## Potential approaches for migrating notification preferences

Move preferences one at a time; Do not have MHV integrate with VA Profile
Move preferences one at a time; Suggest MHV integrate with VA Profile
Move preferences one at a time; Have MHV remove preferences from their profile and add individual preferences to each feature page
Move all preferences to VA.gov at one time; Retire all preferences on MHV at the same time

