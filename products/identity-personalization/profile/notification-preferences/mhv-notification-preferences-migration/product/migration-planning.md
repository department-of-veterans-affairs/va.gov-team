# Migration planning

**Existing notifications and notification preferences in MyHealtheVet**

- Rx refill shipment notifications (note: there is a text notification supported through VEText that already has a preference in the VA.gov profile)
- VA appointment reminders (note: there is a text notification supported through VEText that already has a preference in the VA.gov profile)
- Secure messaging alerts
- Medical image and reports available
- Biweekly MHV newsletter
- Send health summary to your non-VA care provider (currently in testing/on hold and only available to limited users)

**New notifications to develop as part of the health apartment**

- Notification that lab and test results are ready/available
- Additional notifications we may not have spoken about or scoped yet

## Considersations and challenges for migrating to VA.gov

Specifically, these are challenges we need to consider in how we approach moving notification preferences from MHV to VA.gov. This is not an exhaustive list of challenges we'll face in the notifications work (eg. needing to integrate Cerner data; timing; etc).

### MHV backend is currently not connected to VA Profile

Unlike most features moving over to VA.gov, notification preferences will need to change backends in addition to the frontend. VA.gov integrates with VA Profile for notification preferences, while MHV does not. This means that we can/should not have VA.gov supporting health preferences at the same time as MHV. Otherwise, we risk people setting one preference in one place or the other, and those preferences don't match. 

### MHV features are moving over 1-by-1 to VA.gov

MHV features are moving over 1-by-1 to VA.gov. This presents a decision we'll need to make with notification preferences: do we move over all preferences at once, or move them over one at a time as health tools migrate to VA.gov?

<details>
  <summary>Click to expand for screenshot of MHV preferences</summary>

![MHV notification settings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-05-MHV-profile-research/MHV%20notification%20settings.jpeg)

</details>

### Collaboration across VA.gov, MHV, VA Profile, and VANotify

There are many players in this space -- VA.gov, MHV, VA Profile (stores preferences), and VANotify (supports notifications). We'll all need to work together to make sure both the preferences and actual notifications fully migrate into each system.

## Recommendations for migration approach

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
