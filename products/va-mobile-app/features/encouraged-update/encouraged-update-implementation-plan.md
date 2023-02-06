## Encouraged Update


### Implementation plan for Step 3


### Approach



* Adding this notification in the app is a 1 Sprint effort from an implementation perspective.  Testing will need a bit more time (we’ll cover that below).  If our metrics show that progress isn’t being made in decreasing the number of users on older versions of the app, we can revisit to determine if a forced upgrade is in order.


### Design and Content


#### [Link to Figma screen](https://www.figma.com/file/rtSeL1K31RkL6CJumhcSq6/Home?node-id=33%3A933)

[Link to Content Review](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/4033)


### Process


#### Technical approach



* Query the current app version in the iOS and Android app stores
* Compare to the local version on the device
* Supply logic regarding the encouraged update Alert Box in app
* Include supported devices and minimum OS version
* Enable a 'skip this update' toggle that will store the version skipped by the user for display logic.
* Integrate this information with the logic found in the UI Component (ticket [4041](https://app.zenhub.com/workspaces/va-mobile-ux-60fed87c42104e0017e04ef9/issues/department-of-veterans-affairs/va-mobile-app/4041))
* Useful links:.
    * iOS  [In-app updates | iOS Developer](https://developer.apple.com/app-store/in-app-events/)
    * Android  [In-app updates | Android Developers](https://developer.android.com/guide/playcore/in-app-updates) 


#### Engineering



* [Epic link](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/4020) - 3 pts for the UI, 13 pts for the logic
* Logic is implemented
* Test cases written


#### QA strategy



* No specific test data prep is needed for this
* Testing strategy and resources
    * Testing for this will essentially need to span three sprints because some testing can only be done after we’ve got a version on the app store with this code:
        * Sprint 58 working dates 11/9 - 11/22, then published on app stores 12/6. &lt;--- do initial testing here
        * Sprint 59 working dates 11/23 - 12/6 &lt;--- do nothing here, there’s no app store version with the code we need yet
        * Sprint 60 working dates 12/7 - 12/20 &lt;--- do final testing here, with the sprint 58 released version


#### UAT Plan



* Leadership didn’t feel this would be necessary
* Post-release monitoring App / Play Stores for user feedback


#### App Store

[App store content process doc](https://docs.google.com/document/d/1luRRb94AJZpqs5pp7pxWbuHakHXT9FZHe8QNihzDtog/edit) 


#### Metrics



* Decrease in percentage of users on old versions. 
    * [https://analytics.google.com/analytics/web/#/p265787033/reports/explorer?params=_u..nav%3Dmaui%26_r.explorerCard..selmet%3D%5B%22activeUsers%22%5D%26_r.explorerCard..seldim%3D%5B%22appVersion%22%5D&r=user-technology-detail&collectionId=user](https://analytics.google.com/analytics/web/#/p265787033/reports/explorer?params=_u..nav%3Dmaui%26_r.explorerCard..selmet%3D%5B%22activeUsers%22%5D%26_r.explorerCard..seldim%3D%5B%22appVersion%22%5D&r=user-technology-detail&collectionId=user) 
* Review success measures and monitoring plan as we incrementally increase exposure
* Metrics around people using this UI to upgrade or “skip”?
    * [https://analytics.google.com/analytics/web/#/p265787033/reports/explorer?params=_u..nav%3Dmaui%26_r.explorerCard..startRow%3D0&r=top-events&ruid=BFA0B975-82E6-4C3B-AD42-ED07A0C253C2&collectionId=3022309925](https://analytics.google.com/analytics/web/#/p265787033/reports/explorer?params=_u..nav%3Dmaui%26_r.explorerCard..startRow%3D0&r=top-events&ruid=BFA0B975-82E6-4C3B-AD42-ED07A0C253C2&collectionId=3022309925) 


#### Important links

**[VA Mobile Comparative Analysis](https://docs.google.com/document/d/1FrRwIg_z1wLNPQbTooe_6vKZg2QFBx6AxAhuFk6vGoo/edit#heading=h.8975zhx9xb00)**
