

## Sprint 0 Product Brief 


## Remote Disaster Mitigation Options

[Epic](https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/gh/department-of-veterans-affairs/va-mobile-app/5120)


### Problem Statement and Current Experience

Today, when critical errors affect the Mobile Application,  we currently do not have an immediate way to remotely address error fixes or clear cashes outside of the normal app store release and review process. 
As a result, users experience a broken app until it can be fixed and the veteran experience is undesirable.

### What is Remote Configuration?

A software development technique for mobile apps where the behavior or features of an app can be changed remotely without having to publish an app update

### Use Cases:

1. **Roll Backs**: IOS app or Android Store updates go through review process and can take 24-48 hours, longer if rejected. Rollbacks can be done withouth any backend code changes.

2. **Feature Rollouts** by % **(Paced Rollout)- Set conditional values in the your app that only a segment of users can see the feature. Ex: 25% of population for "X" feature

3. **A/B Testing:** Ability to enable and disable features of a subset of users. % of Population is served a NEW experience vs. % gets old experience. 

The A/B use case will be great for statistical analysis to determine the impact of a feature an gain feature confidence on that new feature. This will help us
determind if this change is an improvement over the old version.

In additon, if bugs are discovered, features can easily be disabled remotely withought having to go through the store release process.


### Desired Outcomes

**Operations Outcomes:**

* Ability to Remotely address bugs and or fix for user when a bug is determined on a feature in the app
* Determine what the content and modal will look like when a remote configuration is happening
* With the best UX possible, we should be able to remotely clear caches and/or shut down parts of the mobile app in times of dire need.
* This could be applied if we’re rolling out a major feature and need users to get it or if we need to roll a major feature back ASAP and we need user actions associated with it, or if an entire backend api is retired without alternative as we’ve seen the VA attempt in the past.


**User outcomes:**

* In the event that there is a critical error, users aren’t subject to broken features, so their trust in our app & VA isn’t undermined.

### Content: 

Need to Determine what dynamic messaging (Error Messaging) the user will receive when the feature is not available or in a "fix".

### Assumptions and Level of Confidence

1. Remote config attached to features alone will not suffice. This will remove a feature, but it takes time to flush cache.
2. Users will continue to update normally and thus receive the disaster mitigation code before we need to use it.


### Risks

1. Hindering veteran app experience is worse than some of the outcomes we are attempting to avoid, we will need to be clear where and what is being disabled and be as minimal as possible.
2. We could execute and put in a medium technical lift for a protective feature we never use.


### Business Goals

* Relates to[ OCTO-DE goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme)
    * Increase the quality and reliability of VA services
    * Veterans and their families trust the security accuracy and relevancy of VA.gov


### Roadmap


#### V1

* Force users to reauthenticate
* Use remote config flags and expedited execution
* Setting up scaling and process for a multi-team engineering model


#### V2 and beyond

* Custom logic executable from an api supply immediately/near immediately.
* Being able to shut down certain problematic user flows


### Technical Approach

* Possibly via remote config, but I could see this as something baked into an API response using maybe error boundaries on the frontend 
* Establish sunsetting process where a feature toggle changes over to a “gateway”


### Measuring success 

* A safe assumption is we will only use this under dire circumstances, which in most situations will be lots of users are found to be crashing, and we’ll be able to see how many do so before we turn the mitigation on and extrapolate avoided crashes.
* Could measure how isolated we can specify app disruption.


### Open Questions  (From Initial Sprint O)

* Where should “gateways” be located in the app?
* What is the approval path for executing an option in the UI?
* What do we need to learn before moving forward?
* Remote config capabilities/shortcomings?
* Steps we’d need to take to host more complex API logic
* How to best describe a stoppage to a user?


### Important Links



* [Firebase Remote config](https://firebase.google.com/docs/remote-config/)
