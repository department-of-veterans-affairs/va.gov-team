# Overview
As we've gone through design iterations with the Notification Preferences feature, we've found that there are some great opportunities to incorporate A/B testing. This document outlines two experiments we've had in mind. The main [business objective](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/README.md#measuring-success) associated with the Notification Preferences feature is to allow Veteran's to easily customize how they communicate with the VA. Two key results associated with the objective are: 

1. Increase the number of profiles that have mobile phone numbers and email addresses by 15% each on a quarterly basis. (Key Result #2)
2. 60% of first time users of notification preferences have set at least one of the four notification preferences available at launch within the first quarter of launch.(Key Result #3)

## Modal vs On-Page Alert Experiment

### Background
In order to achieve the key results outlined above, we need to drive users to the feature. Given that the concept of proactively setting notification preferences is a new concept for Veterans on VA.gov, we have some concerns around the level of awareness Veterans will have of the feature. We are proposing an A/B test with the use of modals and on-page alerts to help drive traffic and engagement with this new feature.

### Why do we want to A/B test this?
....

### How would we A/B test this?
....

### How would we A/B test?
....

### When are we proposing to conduct A/B test, and for how long?
....



## Warning State Experiment

### Background
As noted above, one of the main business goals of the Notification Preferences feature is to get all Veterans to proactively set their notification preferences by making selections for various notification items. Our current [design](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140948867/simulate/no-panels?mode=i) loads the page in a warning state with accompanying messaging to indicate to the user that we would like them to make a selection. This state appears multiple times on the page for each notification item where they have not made a selection.

### Why do we want to A/B test this?
Given the business goal of getting Veterans to proactively set their notifications, we'd like to gather quantitative data to learn if the warning state on each notification is an effective way of doing that. We think an A/B test is most effective at measuring this engagement because it will give us data from a large pool of users with minimal risk of behavior modification due to being guided or observed.

Additionally, this design is being considered as an experiment in the VA design system.  Measuring the effectiveness of this pattern can help VA determine whether or not this pattern should be formally added to the design system.

### How would we A/B test?
We'd like to conduct an A/B test leveraging feature flags and Google Analytics events to evaluate whether or not the warning state on radio inputs increases engagement. Interactions on radio inputs for [version A](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/141179062/simulate/no-panels?mode=i) would fire an event reflecting a non-warning state; [version B](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140948867/simulate/no-panels?mode=i) interactions would reflect the warning state.

### When are we proposing to conduct A/B test, and for how long?
~As part of the MVP release, for two weeks once we have rolled out the feature to 100% of users.~ Post MVP, depending on how engagement looks and usability testing after MVP launch.
