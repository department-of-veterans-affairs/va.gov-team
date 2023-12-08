

## Availability Framework (Remote Configuration) - MVP  


## Availability Framework EPIC:

[Epic](https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/gh/department-of-veterans-affairs/va-mobile-app/5120)


### What is Availability Framework/Remote Configuration?

A software development technique for mobile apps where the behavior or features of an app can be changed remotely without having to publish an app update

### Problem Statement and Current Experience

Today, when critical errors affect the Mobile Application,  we currently do not have an immediate way to remotely address error fixes or clear cashes outside of the normal app store release and review process. 
As a result, users experience a broken app until it can be fixed and the veteran experience is undesirable.

### Proposed Solution Work for Mobile

We are proposing a solution to be able to "turn off" or restrict the feature so that the user will not have a bad user experience.

The user will receive a message indicating that the feature is currently experiencing an error. **_The user will have to update the app via the store in order to get the actual fix_** and to be able to access what was originally restricted to them.

### Use Cases

**USE CASE 1**:  **A screen is broken and it cannot be rendered without crashing app/red screen of death**. (**FOR ALL USERS**) **LEAST LIKELY SCENARIO**
Example: A coding error would mean the mobile app would show unrecognizable information instead of normal UI the vet is accustomed to. There is also the possibility this would force entire app to crash.

Goal: Prevent all users from attempting to load the problem screen until a fix has been made (to prevent app crashing).

**USE CASE 2**:  **A feature (or part of a feature) is broken in the mobile app but a _screen can be rendered_.** (**For ALL USERS**)
RX Example:  We are showing the wrong personal information in Rx. The feature is still working  and we can show the UI, but it is acritical enough error that we need to shut down the feature and establish a fix.

Goal: Prevent ALL USERS from accessing a broken feature until a fix has been made and offer the ability to get that info in some other way in the meantime (A&B) & then empower users to fix it (B).


**USE CASE 3**:  **A screen element, feature, or part of feature is broken (for SOME users, not all)**. The feature entry point can still be accessed and a screen can still be rendered, but some folks can see data within the feature and others can’t.
A. We are working to resolve it remotely
B. The problem is now resolved and installing a new version of the app will correct the problem

Goal: For a feature that is broken for SOME USERS but not all, set expectations and provide guidance (around how to get that info some other way in the meantime (A&B) and then empower users to fix it (B)) that helps the affected segment until a fix has been made, but do it without preventing access to that feature for the users who are not affected by the issue.



### MVP Approach (Q3/Q4-2023)

Note: All Copy/Messaging would be finalized as part of the Implemenation Phase.

 **Use Case #2 Front End Issues- Screen Can Be Rendered**

Since we can render a screen in this use case, the reccomendation would be to utilize the colored alert box. This will allow us to give the user an option of completing their task another way. 

When it’s determined that we need to use remote disaster mitigation/waygate, we will show an alert box with copy that explains that we are workign to  fix an issue (**Copy-TBD**).

After the issue is investigated, if we find we need to update the copy to give further clarity on the problem to the user, we can do so. Note: This likely is not needed unless we cannot give the user another way to access their information.

We will always give the user an alternative way to accomplish their task.
      
**MVP: A general help desk phone number(TBD)**

If a general phone nubmer does not exists, we might have to provide specific phone numbers for specific places in the app (i.e., a number for help with claims may not help with prescriptions).

**Post-MVP: More specific phone numbers specific to features.**

Since the vast majority of these use cases involve the user (via message) needing to update the app (via the app store) to fully resolve the issue. We are considering showing a button that will take the user to their app store to update once the issue is resolved and an update is available. (similar to what we do for encourage update)
This is less essential as we are already giving the user the ability to complete their task another way (phone number). Its is still imperative for the the user to eventually need to update the app.


**Use case #2: Back End Issues- Screen can be rendered**

This use case will not involve the need to update the mobile application.

We will utilize most of the same approach as a FE issue noted above, including using an alert box with a general error message that provides a phone number for users to complete their task. We will not need to include an update an app button as its not applicable. We could include a date/time when we anticipate the issue to be resolved since BE pushes "fixes" regularly and they are not dependent 
on the realease/app store.



**Use case #1 (likely very rare, if ever)**

Since this is an issue in which we can’t even produce a normal-looking screen to show the colored alert box, we suggest using a modal alert.
The alert modal consists of a heading, body copy, and button(s). Copy (TBD) will explain to the user that we’re fixing an issue with the app. 
We would likely only show one button, since we may not be sure what the user was attempting to accomplish when this happens, we won’t be able to provide any type of solution other than to wait it out.


### Desired Outcomes

**Operations Outcomes:**

* Ability to Remotely address bugs and or fix for user when a bug is determined on a feature in the app
* Determine what the content and modal will look like when a remote configuration is happening
* With the best UX possible, we should be able to remotely clear caches and/or shut down parts of the mobile app in times of dire need (**Note:The user will still have to update via the store in order to get the actual fix)**




### Content:  (Implementation Phase)

Need to determine what message the user will experience when access is initially restricted.

### Assumptions and Level of Confidence

1. Remote config attached to features alone will not suffice. This will remove a feature, but it takes time to flush cache.


### Out of Scope Items

1. IOS or Playstore Rollbacks
2. Feature Rollbacks by % (Paced Rollouts)
3. A/B Testing


### Risks

1. Hindering veteran app experience is worse than some of the outcomes we are attempting to avoid.  We will need to be clear where and what is being disabled and be as minimal as possible.
   


### Business Goals

* Relates to[ OCTO-DE goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme)
    * Increase the quality and reliability of VA services
    * Veterans and their families trust the security accuracy and relevancy of VA.gov


### Roadmap 

### MVP Appproach- Q3/Q4- see full details above (Implementation Phase-Copy TBD)

1. When we initially restrict access, we will provide the user with a generic message. (Allowing mobile time to figure out the “true problem”)


2. **When (and if) the problem is Discovered:**

The user message will be refined/updated to give more specifics if applicable. Contents of that message will include:
1. Updating the app (Via the store)
2. Date, Month, Time (if we know it) to update (assuming we know this information)
3. MVP only: Generic Help Desk Phone Number the user can call (**Phone number -TBD**). 


(**Copy to  finalized**) 


#### V2 and beyond (Timing of V2 not approved)
The next phase of this MAY include more specific feature help phone numbers if possible (claims, prescriptions)



### Measuring success (DRAFT- Finalized Monitoring and Dashboards to be set up after implementation and noted in the Epic)

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
