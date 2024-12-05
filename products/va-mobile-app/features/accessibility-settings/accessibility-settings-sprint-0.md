# Sprint 0: Accessibility Settings

[Ticket #9106](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/9106)

## Sprint 0 - Identifying the work

### Problem Statement

#### Current Experience ####

* We do not currently offer any accessibility settings or controls within the VA: Health and Benefits mobile app. Instead, we honor the settings within a user's device (phone or tablet) for color modes (dark or light), haptics, and font sizing. It is becoming increasingly popular for a variety of software, apps, etc. to extend additional levels of control (or overrides) within the product. For example, web browsers will give you the option to match your color mode to your device settings or change it just for the browser. 

#### Desired Outcomes ####

Doing this work would give each Veteran more control over their app experience. Similarly to how we've given Veterans the option to personalize which push notifications they receive, it would allow them more control over their app. It could also open the door to expand the app with additional features such as theming, font sizing, etc. and provide a place for those additional features to live.

* Honor a user's device settings by default, but also allow the user to override these default settings with app-specific settings within the mobile app.
* For MVP, I would include the following settings:
   * Haptic Feedback (on/off)
   * Color mode (dark/light/honor device settings)
      * We could also explore the possibility of an "automatic" setting (light mode during the day and dark mode at night)
   * Reduce animation (on/off)

### Assumptions and Level of Confidence

*  We are assuming that users may want the option to easily override their default device settings within the mobile app. We're also assuming that they may want the mobile app to vary from their default device settings at all.

### Risks

1. There is a risk that targeting the various accessibility features that we have already implemented into the app (dark/light mode, haptics, reducing animation, etc.) may be difficult, time-consuming, or not possible.
   *  To help mitigate this risk, we should do some research to determine which settings we may be able to implement a control for in the app.

### Business Goals
* **How would this benefit VA?**
   * Our hope is that by allowing Veterans more control over their in-app experience at a granular level, it will result in Veterans feeling more connected to the app itself and by extension, help them feel more connected to VA as a whole.
   * Allowing them to easily adjust their accessibility settings within the app also keeps them in the app (rather than exiting to adjust their device settings) and opens the door to introducing these settings into a "first run" of the app during the initial onboarding.
   * Introducing this feature will also give us a place within the app to expand these settings in the future. One of these possibilities is to introduce additional themes for Veterans with visual disabilities (i.e. colorblind or high contrast themes), which will ultimately help to increase the overall accessibility of the mobile app.
* **Which OCTO and Program goals does this tie to?**
   * Improving Veteran Satisfaction
      * _This assumes that additional personalization / customization features within the mobile app would be something that Veterans want._
   * Improving Veteran Retention
      * _Providing additional personalization / customization will hopefully reinforce or create that sense of ownership over the app and this being "their space"._

### Stakeholders

* VA Mobile Product Owners
    * _Note: This work could be completed internally with no outside team support from other OCTO teams._

### Open Questions

* Is it possible to implement controls for reducing animations?
    * Is this something that we can detect in a user's device settings like we can with dark/light mode and haptics?
* What is the best way to present these options to a user (toggle component, etc.)? What are other apps doing?
* Where would the settings themselves live? Would we add an additional screen / area into the main "Settings" area of the app?
* Do we have the ability to add an "automatic" setting for light and dark mode (light during day and dark at night)?
* Is it possible to include analytics to see how often Veterans are overriding / customizing their app settings?
* How do we decide / govern what additional settings we might expand to include in the future?
   * What if another / outside team comes in and decides that they want an additional setting that we do not offer currently? How do we determine what gets added and what does not? (i.e. Global team "owns" it but would need accessibility sign-off)

## Important Links
*   Could be a possible solution for [Display Zoom](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/Display%20Zoom%20on%20Android/displayZoomOnAndroid.md) in the future.
     *   If we were able to add in the ability for font sizing within the app, the Veteran could possibly update their font size in the app if they have display zoom enabled and copy is breaking outside of containers / not wrapping properly.
*   [Examples of personalization / accessibility settings](https://www.figma.com/board/kY6MMlbNUuwvwct2pDqSN3/Personalization-%2F-Accessibility-Examples?node-id=0-1&t=TSFEg0uKzUydQIS2-1) in other apps.
