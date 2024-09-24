# Sprint 0: Accessibility Settings

[Ticket #9106](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/9106)

## Sprint 0 - Identifying the work

### Problem Statement

#### Current Experience ####

* We do not currently offer any accessibility settings or controls within the VA: Health and Benefits mobile app. Instead, we honor the settings within a user's device (phone or tablet) for color modes (dark or light), haptics, and font sizing. It is becoming increasingly popular for a variety of software, apps, etc. to extend additional levels of control (or overrides) within the product. For example, web browsers will give you the option to match your color mode to your device settings or change it just for the browser. 

#### Desired Outcomes ####

* Honor a user's device settings by default, but also allow the user to override these default settings with app-specific settings within the mobile app.
* For MVP, I would include the following settings:
   * Haptic Feedback (on/off)
   * Color mode (dark/light/honor device settings)
      * We could also explore the possibility of an "automatic" setting (light mode during the day and dark mode at night)
    * Reduce animation (on/off)

### Assumptions and Level of Confidence

*  We are assuming that users may want the option to easily override their default device settings within the mobile app. We're also assuming that they may want the mobile app to vary from their default device settings at all.

### Risks

1. There is a risk that targeting the various accessibility features that we have already implemented into the app (dark/light mode, haptics, etc.) may be difficult, time-consuming, or not possible.
   *  To help mitigate this risk, we should do some research to determine which settings we may be able to implement a control for in the app.

### Business Goals
* Doing this work would give each Veteran more control over their app experience. Similarly to how we've given Veterans the option to personalize which push notifications they receive, it would allow them more control over their app. It could also open the door to expand the app with additional features such as theming, font sizing, etc. and provide a place for those additional features to live.

### Stakeholders

* VA Mobile Product Owners
    * _Note: This work could be completed internally with no outside team support from other OCTO teams._

### Open Questions

* Is it possible to implement controls for the accessibility features that we already have (haptics and dark/light mode)?
   * We should likely also look into providing an option to turn animations on or off and identify areas that this would apply to (i.e. the screen title transition in the header).
* What is the best way to present these options to a user (toggle component, etc.)? What are other apps doing?
* Where would the settings themselves live? Would we add an additional screen / area into the main "Settings" area of the app?
* Do we have the ability to add an "automatic" setting for light and dark mode (light during day and dark at night)?

## Important Links
*   Could be a possible solution for [Display Zoom](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/Display%20Zoom%20on%20Android/displayZoomOnAndroid.md) in the future.
     *   If we were able to add in the ability for font sizing within the app, the Veteran could possibly update their font size in the app if they have display zoom enabled and copy is breaking outside of containers / not wrapping properly.
*   [Examples of personalization / accessibility settings](https://www.figma.com/board/kY6MMlbNUuwvwct2pDqSN3/Personalization-%2F-Accessibility-Examples?node-id=0-1&t=TSFEg0uKzUydQIS2-1) in other apps.
