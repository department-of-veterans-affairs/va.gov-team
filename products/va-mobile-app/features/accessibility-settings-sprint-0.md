# Sprint 0: Accessibility Settings

[Ticket #9106](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/9106)

## Sprint 0 - Identifying the work

### Problem Statement

#### Current Experience ####

* We do not currently offer any accessibility settings or controls within the VA: Health and Benefits mobile app. Instead, we honor the settings within a user's device (phone or tablet) for color modes (dark or light), haptics, and font sizing. It is becoming increasingly popular for a variety of software, apps, etc. to extend additional levels of control (or overrides) within the product. For example, web browsers will give you the option to match your color mode to your device settings or change it just for the browser. 

#### Desired Outcomes ####

* Honor a user's device settings by default, but also allow the user to override these default settings with app-specific settings within the mobile app.

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

## Step 1 - Understanding the work

### Research Needed

* What do we need to learn before to can plan the feature?

### UX Design 

*	Create Figma Mockups

### MVP Scope

* For the initial MVP, I would plan to implement controls for the accessibility features that already exist in the app.

### Technical Approach

*	Are there other VA groups or tools we need to work with?
    *	What API work is needed?

### Measuring success 

*	What metrics can we watch to see if our efforts are reaching the desired outcomes?

## Step 2 - Planning the work

### Create Implementation Plan

*   Work with disciplines to create tickets
*   Create Test Plan
*   Link to Epic/Ticket List
*   Determine high-level time estimates/Roadmap for work

## Step 3 - Implementing the feature

*   Build feature (ENG DoD)
    * Unit tests created
    * Manual Testing completed (QART)
    * PRs reviewed by Mobile Platform
    * Documentation updated (Call Center docs, What's New content created, etc.)
 
*   Release Feature
    *   Release process and approvals
         

## Step 4 - Measuring and maintaining the feature

### Measuring Success

*   Watch analytics dashboard(s) for insight on success
*   Track progress against success metrics

### Maintenance/Post-MVP Plan

*   How do you plan to prioritize bugs?
*   What do you plan for later iterations?
*   What metric threasholds will determine future changes?




## Important Links
*   Links to deliverables
