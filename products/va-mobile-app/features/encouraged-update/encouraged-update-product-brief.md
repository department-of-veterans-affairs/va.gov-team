## Sprint 0 Product Brief 


## Forced/Encouraged Upgrade


#### Problem Statement

Mobile applications sometimes have updates that will cause breaking changes to previous app versions. Most times this can be overcome with other types of versioning or remote configurations, but sometimes there needs to be a way to force or indicate to a user that an upgrade is necessary. 

“As the owner of an app, I want to encourage users to update to the latest version so that, over time, I don’t have to maintain previous versions.”  Example, we currently have users on v 1.11 of the app, reporting bugs that have subsequently been fixed.  App is now on v 1.32 and counting.

**Current Experience**



1. Users are not required to update their apps and we rely on users having auto-update turned on to get the newest versions. 

**Pain Points**



* While our user base is very good at using auto update, we have a significant number of devices that are 6 or more versions behind and still using the app. 
* VA API teams prefer to version and retire endpoints, rather than deprecate old versions for long periods of time. Teams have also not versioned and changed endpoints on the fly and this needs to be protected against. 


#### Assumptions and Level of Confidence



1. The mobile app should have some way to either
    1. Force a user to update their application 
    2. Notify a user if a new version is available and provide a message to indicate that some things may not work if they do not, or that new features may not be available until they update. 


#### Pros to forced upgrade



1. Users will always have access to the latest version of the application with all the new features and functionality.
2. Endpoints that are retired should not affect newer versions of the application.
3. Support for previous versions is no longer required.
4. Any version-specific help documentation, user guides, tutorials, etc. would no longer need to be maintained going forward.


#### Cons to forced upgrade



1. Forcing users to update when they open an application can cause problems if you block app use until upgrade. 
2. A user may not be on WiFi and be charged for data, or there may be no service/less than robust in their location with which to upgrade, essentially making the app useless at that point of use. 
3. Some users prefer to upgrade when they want to, rather than when we tell them and we risk alienating a small subset of users. 
4. **Older phones may not be able to update, which would essentially make a phone useless for the app or make the app useless on the phone.** 
5. We cannot change the option once we decide on a path i.e. if we choose to force updates, we cannot offer the **_option_** to update later, and vice versa
6. As a user, I haven’t been offered any compelling reasons to want the app to update - this is why I have auto-updates disabled on my device.  I’ve had many situations where an update has “messed something up”, or now I can’t find where things are anymore, or it just doesn’t work the way I’m used to.  Without a compelling reason, I wouldn’t want this to happen.


#### Pros to providing upgrade awareness



1. By making users aware of new features and enhancements before auto-update happens, we capture some of the users a little earlier in that process.
2. Over a long period of time, we lessen the burden of having to watch out for deprecation of older version APIs, which would break the app for those users
3. Users can update when convenient for them


#### Cons to providing upgrade awareness



1. We may annoy users who don’t wish to get update reminders


#### Opinion



* Product’s recommendation at this point is to try to encourage users to update the app so that we lessen the current burden on engineering of having to monitor retirements of old endpoints and other changes that could break older versions of the app.  Possibilities include providing a pop-up or alert of some kind within the app (UX will investigate this) letting them know there's an update available and highlighting new features / benefits to them as encouragement / incentive, but it will still remain their choice to upgrade or not.  UX can spend a little time looking into how other apps do it and make some recommendations from there.
* It might be as simple as showing them the info in our What's New content, but we'll see what UX comes up with if leadership wants to pursue this.
* Adding this notification in the app is a 1 Sprint (small) effort.  If our metrics show that we haven’t achieved our goal of moving users from older versions of the app to newer versions, we can revisit to determine if a forced upgrade is in order.


#### Business Goals



* Develop a process and approach that balances the need to protect against structural and agency changes that could potentially brick the app for users.  
* Minimize the impact if we ever need to move to a new API
* Protect users from events that will snowball bad reviews of the app


#### Roadmap

Things that we need to do:



1. Force Upgrade or Encourage Upgrade product decision
2. Designs and content
3. Swift module to house version check logic (iOS native language)
4. Kotlin module to house version check logic (Android native language)
5. React Native native bridge module to trigger and display messages
6. Build React Native UI components


#### Outstanding Question



* Do we need a way to test this for QA? Override the version or something?

**V1**



* UX work is done, logic is implemented

**V2 - TBD**



* **UI changes** (ex: using allotted space on the new Nav home screen for banners)
        * UI changes will be tracked in individual tickets
        * Design deliverables: 
            * High fidelity designs
* **Component changes (if any)**
        * Component level changes will be tracked in individual tickets
        * Will go through the component committee process


#### Technical Approach


##### Apple (Swift):

[http://itunes.apple.com/lookup?bundleId=gov.va.vamobileapp](http://itunes.apple.com/lookup?bundleId=gov.va.vamobileapp) 

Results[0].version should be store version string. Can compare against app string

Results[0].supportedDevices in case we need to check against devices

Results[0].minimumOsVersion in case we need to check against a phones OS version


##### Android (Kotlin):

[https://developer.android.com/guide/playcore/in-app-updates](https://developer.android.com/guide/playcore/in-app-updates) 


#### Measuring success 

Decrease in percentage of users on very old versions. (currently [2.7% ](https://www.google.com/url?q=https://console.firebase.google.com/u/0/project/va-mobile-app/analytics/app/ios:gov.va.vamobileapp/overview/~2F%253Ft%253D1669139905335%26fpn%253D226948484727%26swu%253D1%26sgu%253D1%26sus%253Dupgraded%26cs%253Dapp.m.dashboard.overview%26g%253D1&sa=D&source=docs&ust=1669143715756146&usg=AOvVaw3mTcolGabwVy41hgE3Xizt)on versions more than 12 weeks- Nov 22, 2022)

Review to see if this is working and then decide if it's good enough or if we need forced upgrade

Metrics around people using this UI to upgrade or “snooze” - 


#### Stakeholders



* Product Owner: Chris Johnston
* Product Manager: Brenda Cudone
* Engineering Architecture: Patrick Saxton


#### Important Links

[Comparative analysis update alert - Google Docs](https://docs.google.com/document/d/1FrRwIg_z1wLNPQbTooe_6vKZg2QFBx6AxAhuFk6vGoo/edit#heading=h.8975zhx9xb00)

**Things to consider:**



* Do we want metrics around people using this UI to upgrade or “snooze”?



