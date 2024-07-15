# Sprint 0 Version Support

[Link to Epic](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7197)

## Problem Statement

When building a mobile app, minimum OS compatibility must be selected. Supporting older operating systems allows more potential users to be able to run the app, but also may cause support issues as older hardware and unsupported (by Apple/Google) operating systems need to be maintained. Supporting only newer operating systems reduces the maintenance complexity of the app, but also reduces the number of people who may install the app. A balance must be achieved here.

The VA Health and Benefits mobile app team has not revisited [our mobile OS support decision](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-6-mobile-os-support-which-mobile-operating-systems-will-the-app-run-on) since June 2021, when [we decided to support](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#what-did-you-decide-on-june-2021):

- iOS: support version 13 (previous), 14 (current), and 15 (beta, to be released fall 2021)
- iOS version 12 was dropped because 1. it's previous, 2. the Apple sign-in component we are using is only supported in 13+
- Android: support API version 26 and above - no change

### Current Experience ###

Veteran-facing:
* Veterans are currently using the app on iOS versions that are [not supported by Apple](https://en.wikipedia.org/wiki/IOS_version_history) (iOS 13 and 14), and [Android versions that are no longer maintained by Google](https://en.wikipedia.org/wiki/Android_version_history) (Android 8, 9, and 10).
* Veterans are currently using the app on iOS and Android versions that we do not test (iOS 13) or rarely test (Android 8 and 9).
* We know of some OS-specific issues (ex: [Android 12 can't support error alertbox screen reader focus](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/4568#issuecomment-1407084136)). It's unclear how many OS-specific issues with the app exist.

Internal:
* Lack of clarity and communication around our OS version support has led us to test across a wider spectrum of OSes than we potentially want to support, with the pros/cons listed in the problem statement above.
* Similarly, lack of clarity and communication means we also are *not* testing on OS versions that veterans do use ([App team devices list, currently in Google Doc](https://docs.google.com/spreadsheets/d/152XBxp-PfsJCyuzLCHy7WPwgnQiOdVkPjpgpEWZ96bE/edit#gid=945617554)).
* Looking forward, that I know of (Engineers, pipe up?), we don't have a mechanism enforcing our OS version support, so veterans on unsupported-VA-mobile OS versions can continue to use the app in an untested OS unless we put guardrails in place.

### Desired Outcomes ###

* We re-establish the process for deciding what OS versions we will support, with guardrails in place to make sure it's revisited on an annual (or more frequent) basis.
* We update our supported versions from the June 2021 decision, and do the work necessary to implement that decision.

## Assumptions and Level of Confidence

1. It's a worthwhile conversation to talk about version support, and proactively deciding how to recalibrate the balance between complexity/maintenance and veteran access stated in the problem description.
2. We will be able to collect enough data to have an informed decision for how changing minimum versions might impact veterans currently using the app.

## Risks

1. What are the things that could throw a wrench in our efforts? 
    1.  Are there steps we can take to mitigate these risks?

## Business Goals
* How would this benefit VA?
* Which OCTO and Program goals does this tie to?

## Roadmap

**V1**

* Establish guardrails to ensure we remember to revisit this decision every year
* Do spike(s) to collect the necessary information to make a decision this year
* Make the decision with the necessary stakeholders - which versions we will support, and what that support looks like (ex: testing only; testing + hard stop for veterans; etc)
* Implement whatever is necessary to update our minimum supported versions (documentation changes, code changes, etc)

**V2 and beyond**

* Continue to revisit this decision on a recurring basis
* [Formalize test plan for newly-released OS versions](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/3563)

## Technical Approach

*	OS version support changes could be internal-only (what we test with, where we'll fix bugs), soft stop (message using availability framework on login screen, for instance "hey you still have access but should update your OS for the best results"), or hard stop (do not allow login without update). Availability framework (firebase setup) does allow targeting by device OS version.

## Measuring success 

*	What metrics can we watch to see if our efforts are reaching the desired outcomes?

## Stakeholders

* Who within VA do we need to ensure we work with?  Who has ‘veto’ power?

## Open Questions

What information is necessary to make the decision of which OS versions to support? For example:
* which versions are no longer supported by Apple and Google
* how our app audience is spread out over various OS versions (raw numbers, and if there are specific audiences more represented in older OS versions)
* if there are technology reasons to establish a new minimum version (ex: we want to do X that's only supported in version Y code and above)

## Important Links
