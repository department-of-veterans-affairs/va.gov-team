# Sprint 0 - Demo Mode Access

[Link to Epic]

## Problem Statement

### Current Experience ###

* [Demo Mode Instructions](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/Mobile%20Demo%20Mode)
* The current process for accessing Demo Mode in the app is to tap the VA logo 21 times until the password prompt is displayed.  Once the correct password is entered, the user enters the app as a test user named Kimberley Washington.  Mock data for Kimberley Washington is used throughout most features of the app to show how the app works and what a user can expect to see.
    * [Feedback from PO](https://dsva.slack.com/archives/C018V2JCWRJ/p1697223230666639?thread_ts=1697219620.972579&cid=C018V2JCWRJ) that this process could be quicker
    * Use Cases:
        * Demo mode is used by VA employees to show functionality to other VA employees (ex: Rachel showing functionality to other VA stakeholders)
        * Demo mode can also be used by VA employees in veteran-facing roles using Demo Mode to show Veterans how the app works. (ex: VA employee showing a veteran where to find their claims status in the app) - **Do we know any more about this use case?  Can we talk with VA employees that do this?**
        * Demo mode could be utilized by Veterans themselves to help them determine if the app has the functionality they need prior to setting up login credentials since this can be time consuming. - **Do we know if this ever happens now? [Example of industry app with a user-facing Demo Mode.](https://www.youtube.com/watch?v=m5Z6lpT629A)**
* How could we test/confirm our hypothesis that this is a problem?
  
### Desired Outcomes ###

* What do we want the experience to be like for Veterans and/or other users?
* How could we test/confirm our hypothesis that this outcome would improve the experience?

## Assumptions and Level of Confidence

1. We assume that usage of Demo Mode will continue to increase.
2. We assume that our team will continue to prioritize the work to keep Demo Mode up to date

## Risks

1. Veterans could access Demo Mode and be confused about the mock data.  
2. Veterans could also accidentally find the Demo Mode login prompt and be confused why their VA password doesn't work

## Business Goals
* How would this benefit VA?
    * Making Demo Mode simpler to access would make demoing functionality by VA POs quicker
* Which OCTO and Program goals does this tie to?

## Roadmap

**V1**

* What scope would be included in the v1/MVP?
* Story to change how Demo Mode is accessed: https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6999
   * long press on the logo?
   * since the app doesn't control authentication, using a special password probably won't work
   * simpler password
   * remove password entirely?
   * Developer Tools are still accessible in Demo Mode so that is the only way bad things can be done
  

**V2 and beyond**

* Flesh out Demo mode to ensure everything is usable that we want to be
* Open it up to more public audiences

## Technical Approach

*	Are there other VA groups or tools we need to work with?

## Measuring success 

*	What metrics can we watch to see if our efforts are reaching the desired outcomes?

## Stakeholders

* Who within VA do we need to ensure we work with?  Who has ‘veto’ power?

## Open Questions

* What do we need to learn before moving forward?

## Important Links
