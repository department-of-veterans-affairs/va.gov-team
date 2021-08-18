# Background
As we've gone through design iterations with the Notification Preferences feature, we've found that there are some great opportunities to incorporate A/B testing. This document outlines two experiments we've had in mind.

## Warning Icon Experiment

### Background
One of our main business goals of the Notification Preferences feature is to get all Veterans to proactively set their notification preferences by making selections. Our current [design](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140948867/simulate/no-panels?mode=i) incorporates a warning icon and accompanying message to indicate to the user that we would like them to make a selection. This icon and message appear multiple times on the page for each notification item where we need them to make a selection. 

### Why do we want to A/B test this?
This design is being considered within the experimental design process. During the design council review, there were some concerns raised around the repetitive nature of the warning icon. There is concern that the warning icon may be triggering for Veterans and come off as "yelling" at them. Given the business goal of getting Veterans to proactively set their notifications, we want to know what might be the most effective way of doing that. We think an A/B test is most effective at measuring this engagement because it will give us quantitative data from a large pool of users with minimal risk of behavior modification due to being guided or observed.

### How will we A/B test?
We'd like to conduct an A/B test leveraging feature flags and Google Analytics events to evaluate whether or not the warning state on radio inputs increases engagement. Interactions on radio inputs for [version A](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/141179062/simulate/no-panels?mode=i) would fire an event reflecting a non-warning state; [version B](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140948867/simulate/no-panels?mode=i) interactions would reflect the warning state.
