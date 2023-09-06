

## Remote Disaster Product Brief - MVP


## Remote Disaster Mitigation Options

[Epic](https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/gh/department-of-veterans-affairs/va-mobile-app/5120)


### What is Remote Configuration?

A software development technique for mobile apps where the behavior or features of an app can be changed remotely without having to publish an app update

### Problem Statement and Current Experience

Today, when critical errors affect the Mobile Application,  we currently do not have an immediate way to remotely address error fixes or clear cashes outside of the normal app store release and review process. 
As a result, users experience a broken app until it can be fixed and the veteran experience is undesirable.

### Proposed Solution Work for Mobile

We are proposing a solution to be able to "turn off" or restrict the feature so that the user will not have a bad user experience.

The user will receive a message indicating that the feature is currently experiencing an error. **_The user will have to update the app via the store in order to get the actual fix_** and to be able to access what was originally restricted to them.

### Use Cases

1. A screen is broken in the mobile app app cannot be rendered
2. A feature (or part of a feature) is broken in the mobile app but the screen can still be rendered
    A. The team is working to resolve this issue remotely
    B. The issue is now resolved and installing a new version of the app will correct the problem

### Desired Outcomes

**Operations Outcomes:**

* Ability to Remotely address bugs and or fix for user when a bug is determined on a feature in the app
* Determine what the content and modal will look like when a remote configuration is happening
* With the best UX possible, we should be able to remotely clear caches and/or shut down parts of the mobile app in times of dire need (**Note:The user will still have to update via the store in order to get the actual fix)**


**User Outcomes:**

* In the event that there is a critical error, users aren’t subject to broken features, so their trust in our app & VA isn’t undermined.

### Content: 

Need to determine what message the user will experience when access is initially restricted.

### Assumptions and Level of Confidence

1. Remote config attached to features alone will not suffice. This will remove a feature, but it takes time to flush cache.
2. Users will continue to update normally and thus receive the disaster mitigation code before we need to use it.


### Risks

1. Hindering veteran app experience is worse than some of the outcomes we are attempting to avoid.  We will need to be clear where and what is being disabled and be as minimal as possible.
   
3. We could execute and put in a medium technical lift for a protective feature we never use.


### Business Goals

* Relates to[ OCTO-DE goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme)
    * Increase the quality and reliability of VA services
    * Veterans and their families trust the security accuracy and relevancy of VA.gov


### Roadmap 

### MVP Appproach (To be approved prior to  Implementation Start)

1. When we initially restrict access, we will provide the user with a generic message. (Allowing mobile time to figure out the “true problem”)


2. **When (and if) the problem is Discovered:**

The user message will be refined/updated to give more specifics if applicable. Contents of that message will include:
1. Updating the app (Via the store)
2. Date, Month, Time (if we know it) to update (assuming we know this information)
3. MVP only: Generic Help Desk Phone Number the user can call (**Phone number -TBD**). 


(**Copy to  finalized**) 


#### V2 and beyond (TBD- Not finalized)
The next phase of this MAY include more specific feature help phone numbers if possible (claims, prescriptions)


### Technical Approach (TBD in Implemention Phase)


### Measuring success (DRAFT- Finalized Monitoring and Dashboards to be set up after implementation)

* Use remote recovery under direct circumstances, which in most situations will be lots of users are found to be crashing. Examine how many users before we turn the mitigation on and extrapolate avoided crashes.

* Measure how isolated we can specify app disruption


### Open Questions  (From Initial Sprint O Meeting)

* Where should “gateways” be located in the app?
* What is the approval path for executing an option in the UI?
* What do we need to learn before moving forward?
* Remote config capabilities/shortcomings?
* Steps we’d need to take to host more complex API logic
* How to best describe a stoppage to a user?


### Important Links


* [Firebase Remote config](https://firebase.google.com/docs/remote-config/)
