


# Sprint 0 Product Brief 


# Profile fail error handling

[Epic: Profile fail error handling #4491](https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/gh/department-of-veterans-affairs/va-mobile-app/4491)


### Problem Statement

The VA Mobile app currently relies on loading the profile API in order to display user data for each of the app’s features. If it is unsuccessful in loading the profile, the app displays error states in each feature of the app (much like a web site), some of which are providing inaccurate information. The inaccuracy of these messages and the feeling of the app being “broken” could undermine trust in the app and potentially in VA. \


**Current Experience**



1. **User is signed in but profile fails to load**
    1. Allows access to the Veterans Crisis Line information, Personal Information (but can’t edit), Share the app, Manage your account
    2. Shows user’s name but no military information in Nametag
    3. User can see category screens & navigation but when attempting to view feature level screens, see a variety of “one size fits all” errors & messages, some of which are providing inaccurate information:
        1. Claims, Messages, Direct deposit, Payments, Notifications Settings, VA Letters & docs  “The app can’t be loaded”
        2. Appointments “The app isn’t working right now”
        3. Military info “We can’t access your military info”
        4. Vaccines “We couldn’t find info about your vaccines”
        5. Disability rating “You do not have a combined disability on record”
        6. Webviews:  standard “error loading page - internet connection appears to be offline” message

**Pain Points**



* Anecdotally, during the Blind/Low-vision study, we spoke with a research participant who could log into the app with their credentials, but every section showed a generic loading error message. We expect that this was caused by a problem with connecting to profile. The app did not acknowledge what was happening or set expectations by explaining what might be causing the errors. 
* Users can’t access much of anything in the app (even static data) if profile doesn’t load
    * The app doesn’t cache much information locally, so if Profile doesn’t load, they can’t see any of their non-static data either.
* The app doesn’t set expectations right away about what happens to the app’s feature functionality when Profile doesn’t load properly.
    * Because the app doesn’t have specific error handling for the Profile fail situation, users will see a variety of errors & messages throughout the app, some of which are providing inaccurate information (see above).
    * Users complain in app store ratings and in Reddit forums about the app being broken after seeing error messages, and in some cases have created folk model explanations as to what’s happening (“[It’s off on the weekends](https://www.reddit.com/r/VeteransBenefits/comments/zpazpp/va_mobile_app/?utm_source=share&utm_medium=ios_app&utm_name=iossmf),” “[Does the VA update their systems during the weekend ?](https://www.reddit.com/r/VeteransBenefits/comments/11c1tnr/does_the_va_update_their_systems_during_the/)“) 


### Assumptions and Level of Confidence



1. Enough Veterans are affected by profile failing to load that designing for that experience in our app makes sense.
2. The app is able to recognize when Profile has failed to load and differentiate it from other error situations.
3. Designing for the situation when Profile has failed to load (example: Messaging what’s going on) will improve the Veteran experience.


### Risks



1. The number of Veterans affected by profile failing to load may not be significant enough to invest in improving the experience, so we could spend time researching or building something that isn’t worth the effort compared to the impact it makes.


### Business Goals



* Relates to[ OCTO-DE goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):
    * Veterans can manage their health services online
    * Logged-in users can easily track applications, claims, or appeals online
    * Logged-in users can update their personal information easily and instantly
    * Logged-in users have a personalized experience, with relevant and time-saving features
* What are our high level VA Mobile product goals that track to the OCTO-DE goals?


### Roadmap

**V1**



* 

**V2 and beyond**



* 


### Technical Approach



* Discovery spike with cross-functional teams (internal mobile team, and other partners) to understand:
    * If the app is able to recognize when Profile has failed to load and differentiate it from other error situations.
    * What the various failure situations are.
* Per : If we’re currently only interested in making the error messaging better, this may be entirely front end. but IMO the fix for this should probably come in phases [to address the root cause of the profile failing problem].
    * Improve the error messaging
    * Make the back end user request more robust (this is the work jayson was looking into based on the ticket i filed)
    * Make new backend endpoints for fetching the profile data separately. this will make it easier for the front end to retry if any part of the profile fails to load.
    * Make the front end use those new endpoints and re-fetch when they fail


### Measuring success 



* Number of complaints about the app being broken, down, or unavailable decreases across channels (app stores, reddit).
* Reduction in users trying to access features when they’re not available?

	


### Stakeholders



* VA Mobile Product Owners
* Authenticated Experience team? 


### Important Links

Related to, but not exactly the same as 
[Unauthenticated state](https://docs.google.com/document/d/12lJWGsC3sWhNyloGcl_L5av1ZEItGxUuYmLSXO5F3uA/edit#heading=h.91nw9c7vgyg2), [Offline access & connectivity issues](https://docs.google.com/document/d/1j7UW1pc3gwNzsyUI7PDr_4bHxwSo17rFMBJkjUNYy9M/edit?pli=1#), 

[content audit](https://docs.google.com/document/d/10IJwfjkIAMwJEKfs5Zfr-uIi3KKe1VsQAueflPNUFag/edit#heading=h.mnq6vtjqteg4).


### Notes

See [Investigate ways of making the users endpoint more stable #4550](https://app.zenhub.com/workspaces/va-mobile---backend-61d75d03a7505500147ec7f6/issues/gh/department-of-veterans-affairs/va-mobile-app/4550) 

Info on the data we get from different API calls from Jason Conigliari:

> Ok so here is a breakdown of the 3 services we're using and their corresponding data from our response. Anything not listed here is from a crucial source that will definitely throw an error if it is down. Let me know if anything isn't clear
> 
 ```
Lighthouse
    attributes
        health
            facilities
vet360
    attributes
        profile
            contact_email
            residential_address
            mailing_address
            home_phone_number
            mobile_phone_number
            work_phone_number
            fax_number
VAProfile
    attributes
        profile
            preferred_name
            gender_identity
```
