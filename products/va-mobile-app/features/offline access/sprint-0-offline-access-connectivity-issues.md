# Sprint 0 Product Brief: Offline access/connectivity issues

[Epic: Offline access/connectivity issues#4493](https://app.zenhub.com/workspaces/va-mobile-epics-636d76f8c818bf0010e50a41/issues/gh/department-of-veterans-affairs/va-mobile-app/4493) 


## Problem Statement

The VA Mobile app was designed to allow Veterans to easily access their benefits anytime. However, the app currently relies on being connected to a cellular or WIFI network in order to function—or in some cases, provide *any* access—and treats offline/low connectivity situations as a roadblock or a series of error states (much like a web site) without explaining what’s causing the issue.

 This is problematic for several reasons:



1. Users in offline/low connectivity situations repeatedly experience a variety of errors & messages throughout the app, some of which are inaccurate in this particular context due to their “one size fits all” wording. The inaccuracy of these messages and the feeling of the app being “broken” could undermine trust in the app and potentially in VA.
2. Prospective users of the app in low connectivity situations may experience slow download times due to the size of the app (example: 13.2MB in iOS)
3. Temporary, spotty internet makes for a poorer in-app experience and limited access for ALL users in certain situations, including when physically interacting with VA services.
    1. Some users may be on mobile plans that limit data usage, and rely on WIFI to access the internet from their phones.
    2. Internet and WIFI access is often spotty in VA Medical Centers, meaning that even those Veterans who have reliable WIFI or cellular access at home may have issues accessing their information (ex: medical records, etc) in the VA Mobile app when they are visiting a VAMC.
    3. Internet and WIFI can also be spotty in other situations (ex: big box stores, traveling, or even at home<sup>1,9</sup>) where Veterans need to access their information (ex: proof of service letters).
4. Offline/low connectivity situations may disproportionately affect underserved Veteran populations. Underserved Veteran populations may consistently have a poorer experience and less access to the benefits they’ve earned due to their reliance on mobile and more frequent internet connectivity issues.
    4. Overall, 15% of Americans are "smartphone-only" internet users, but the percentage of reliance on smartphones is higher in groups that are also considered to be  underserved Veteran populations.<sup>1, 3, 4, 6, 7</sup> 
    5. Poor connectivity and slow internet affects people (and Veterans) who are disproportionately non-white, lower income, and live in rural areas.<sup>2,3,8, 9</sup>

Native mobile apps are positioned to overcome this lack of connectivity in a way that websites cannot due to their reliance on an internet connection. Commercial mobile apps have leveraged that by advantage by addressing some of these issues in a few ways (some of which we might consider for the VA app):



1. A limited functionality offline state or a “low data” version of the app is available when service is not good or battery is low.<sup>5</sup>
2. Mission critical information is available offline (example: the State Farm app makes the user’s insurance card available offline, important if/when a driver gets into an accident—what’s the VA Mobile app’s equivalent?). 

1. [Mobile Technology and Home Broadband 2021 | Pew Research Center](https://www.pewresearch.org/internet/2021/06/03/mobile-technology-and-home-broadband-2021/) 
2. [How Broadband Access Advances Systemic Equality | News & Commentary | American Civil Liberties Union](https://www.aclu.org/news/privacy-technology/how-broadband-access-hinders-systemic-equality-and-deepens-the-digital-divide)
3. [Some digital divides between rural, urban, suburban America persist | Pew Research Center](https://www.pewresearch.org/fact-tank/2021/08/19/some-digital-divides-persist-between-rural-urban-and-suburban-america/) 
4. [Mobile Fact Sheet | Pew Research Center](https://www.pewresearch.org/internet/fact-sheet/mobile/) 
5. [Offline App Development: Use Cases and How to Implement | Imaginovation.ne:](https://imaginovation.net/blog/offline-app-development-why-your-mobile-app-should-work-in-offline-mode/)
6. [VA Recruitment Checker for Equality](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1116550612) 
7. [Veterans’ Attitudes Toward Smartphone App Use for Mental Health Care: Qualitative Study of Rurality and Age Differences - PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6125614/#:~:text=The%20rate%20of%20smartphone%20ownership,low%20levels%20of%20current%20engagement)
8. [Rural Veterans - VA](https://www.ruralhealth.va.gov/aboutus/ruralvets.asp)
9. [FCC National Broadband Map](https://broadbandmap.fcc.gov/location-summary/mobile?zoom=4.00&vlon=-91.310348&vlat=42.140069&env=0&tech=tech5g_spd2) 


### Current Experience



1. When not connected to the internet:
    1. **User is signed in & app is in foreground** when connectivity is lost
        1. Allows access to the Veterans Crisis Line information, Personal Information (but can’t edit), Share the app, Manage your account
        2. Shows user’s name but no military information in Nametag
        3. User can see category screens & navigation but when attempting to view feature level screens, see a variety of errors & messages, some of which are providing inaccurate information:
            1. Claims, Messages, Direct deposit, Payments, Notifications Settings, VA Letters & docs  “The app can’t be loaded”
            2. Appointments “The app isn’t working right now”
            3. Military info “We can’t access your military info”
            4. Vaccines “We couldn’t find info about your vaccines”
            5. Disability rating “You do not have a combined disability on record”
            6. Webviews:  standard “error loading page - internet connection appears to be offline” message
    2. **User is signed in & app is in background** OR **user is not signed in** when connectivity is lost
        1. Allows access to the Veterans Crisis Line information
        2. Sign in doesn’t work
        3. Find a VA location shows a standard “error loading page - internet connection appears to be offline” message


### Pain Points



* Users can’t access much of anything in the app (even static data) if they aren’t signed in.
    * The app doesn’t cache much information locally, so if a user isn’t connected to the internet, they can’t see any of their non-static data either.
* Even for users who *are* signed in, backgrounding the app means users need to log in again (even if they have set up biometric login), but because logging in to the app requires internet connectivity, they are locked out.
* The app doesn’t set expectations right away about what happens to the app’s feature functionality in a limited connectivity or offline situation.
    * Users who aren’t logged in, or who are logged in but have backgrounded the app (even if they have set up touch ID) have basically no access to the app beyond the sign in gate (and don’t receive any explanation as to what is happening beyond some error screens).
    * Because the app doesn’t have a low-data or offline mode, users who are logged in & then hit spotty internet may see a variety of errors & messages throughout the app, some of which are providing inaccurate information (see above).
        * "Could the app provide a way to show a minimal version (either a setting or asking in-real-time if they want to view a "minimal" version when internet service is slow or “spotty”
    * Users complain in app store ratings and in Reddit forums about the app being broken after seeing error messages, and in some cases have created folk model explanations as to what’s happening (“[It’s off on the weekends](https://www.reddit.com/r/VeteransBenefits/comments/zpazpp/va_mobile_app/?utm_source=share&utm_medium=ios_app&utm_name=iossmf)”)


## Assumptions and Level of Confidence



1. Enough Veterans are affected by poor connectivity and slow internet issues that supporting an offline or low connectivity experience in our app makes sense.
2. The app is able to recognize low connectivity situations and differentiate them from error situations.
3. Making some features available offline will improve the Veteran experience and address some equity issues.
4. Designing for low connectivity situations (example: Messaging what’s going on) will improve the Veteran experience.


## Risks



1. Building an offline or low connectivity experience could affect the overall performance of the app.
2. The number of Veterans who are accessing the VA Mobile app in offline or low connectivity situations may not be significant enough to invest in improving the experience, so we could spend time researching or building something that isn’t worth the effort compared to the impact it makes.
    1. What % of the overall population is this an issue for? 
        1. What percentage of the time is it an issue for these people?
3. We aren’t sure if we are allowed to provide certain health (or other personal) information to Veterans offline (per privacy/custody rules).
    2. Distinction between access (gate) and storage - need to cover both


## Business Goals



* Relates to[ OCTO-DE goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):
    * Veterans can manage their health services online
    * Logged-in users can easily track applications, claims, or appeals online
    * Logged-in users can update their personal information easily and instantly
    * Logged-in users have a personalized experience, with relevant and time-saving features
* What are our high level VA Mobile product goals that track to the OCTO-DE goals?


## Roadmap

TBD

**V1**



* 

**V2 and beyond**



* 


## Technical Approach



1. Discovery with cross-functional teams (internal mobile team, and other partners)
2. TBD


## Measuring success 



1. Number of complaints about the app being broken, down, or unavailable decreases across channels (app stores, reddit).
2. Reduction in users trying to access features when they’re not available?
3. *How can we measure whether improving this experience improves the lived experience of specific underserved Veteran groups?*

	


## Stakeholders



* VA Mobile Product Owners
* Authenticated Experience team? 


## Important Links

Related to, but not exactly the same as 
[Unauthenticated state](https://docs.google.com/document/d/12lJWGsC3sWhNyloGcl_L5av1ZEItGxUuYmLSXO5F3uA/edit#heading=h.91nw9c7vgyg2), [Profile fail error handling](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/profile-fail-error-handling.md).
