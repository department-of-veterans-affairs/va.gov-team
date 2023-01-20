# Migration plan

## Notifications moving into VA.gov

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

## Considerations and challenges for migrating to VA.gov

Specifically, these are challenges we need to consider in how we approach moving notification preferences from MHV to VA.gov. This is not an exhaustive list of challenges we'll face in the notifications work (eg. needing to integrate Cerner data; timing; etc).

### MHV is currently not connected to VA Profile

Unlike most features moving over to VA.gov, notification preferences will need to change backends in addition to the frontend. VA.gov integrates with VA Profile for notification preferences, while MHV does not. This means that we can/should not have VA.gov supporting health preferences at the same time as MHV. Otherwise, we risk people setting one preference in one place or the other, and those preferences don't match. 

### MHV features are moving over 1-by-1 to VA.gov

MHV features are moving over 1-by-1 to VA.gov. This presents a decision we'll need to make with notification preferences: do we move over all preferences at once, or move them over one at a time as health tools migrate to VA.gov?

<details>
  <summary>Click to expand for screenshot of MHV preferences</summary>

![MHV notification settings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-05-MHV-profile-research/MHV%20notification%20settings.jpeg)

</details>

### Collaboration across VA.gov, MHV, VA Profile, and VANotify

There are many players in this space -- VA.gov, MHV, VA Profile (stores preferences), and VANotify (supports notifications). We'll all need to work together to make sure both the preferences and actual notifications fully migrate into each system.

### Prescription tracking differences 

VEText and MHV use different sources (Local vs. CMOP) to power their prescription notifications. This will need to be reconciled eventually so people are receiving comprehensive and accurate updates.

## Migration approach

### Step one: MHV integrates its profile with VA Profile

- **Part A**: Fill out VA Profile intake form; get backend support for MHV notification preferences.
- **Part B**: MHV integrates their frontend with the VA Profile backend.

### Step two: VA.gov provides support for MHV preferences

We'll need to figure out if we want to do this one-by-one in correspondence with the health apartment features moving into VA>gov, or if we want to support all preferences at once.

### Step three: Move MHV notifications over to VANotify platform

This may happen concurrently with other parts of the process, but it is not necessary that it happen as preferences are built and supported. Preference work can still happen while the actual notifications are moved into the VANotify platform.
