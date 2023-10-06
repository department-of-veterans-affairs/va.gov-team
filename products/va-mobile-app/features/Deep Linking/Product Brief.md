# Product Brief- Deep Linking MVP for Secure Messages 

### Problem Statement
Today, the Deep Linking functionality does not exist in the Mobile App.
We want to allow a user the ability  to follow a single link (via push notification) into a specific area within the mobile app.

**What is Deep Linking?**

Deep links are a type of link that send users directly to an app instead of a website or a store. They are used to send users straight to specific in-app locations, saving users the time and energy locating a particular page themselves – significantly improving the user experience.

**How is this Achieved?:**
Deep linking does this by specifying a custom URL scheme (iOS Universal Links) or an intent URL (on Android devices) that opens your app if it’s already installed. Deep links can also be set to direct users to specific events or pages, which could tie into campaigns that you may want to run.

We want to send this custom URL via EXISTING push notifications in the app only (MVP).

### Current Experience
We have no seemless way to allow the user to follow single secure link that will take them to specific area in teh mobile app.

### Desired Outcomes

Deep links produce a seamless user journey that reduces churn and increases the likelihood of an install. They let you make sophisticated campaigns while providing a better user experience, moving users onto your app in a single click.

We want to provide the veteran with the best user experience possible in order to drive conversion and retention rates in the app.

### MVP Q3 Decisions (High Level)

1. Secure Messaging vs Appointments- Deep Linking via **SECURE MESSAGING ONLY **for MVP

Note: Today we have volume of users was noted currently for appts, however we would like to go with secure messaging as it poses the least complication overall

2. Deep Link to Individual message in the inbox

Flow: User receives a push notification--> Push notification "deep links" to an individual message in the inbox


### Assumptions and Level of Confidence
TBD


### Risks
TBD

### Business Goals
Allow a user the ability  to follow a single link (via push notification) into a specific area within the mobile app.

### Roadmap
Implement a phases approach with Deep Linking by starting with secure message implementation in the MVP stage. Next, apply a phased approach to deep linking by implementing to another area ex: appointments.

### Technical Approach
Implemntation via a custom URL schema (iOS Universal Links) or an intent URL (on Android devices)


### Measuring success
See analytics ticket here: https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6355

The following new analytics events and parameters are required to measure the efficacy of the MVP of deeplinking in Secure Messaging:

1.  vama_notification_click: triggered when a user clicks any notification
2.  parameter notification_url the link from the notification


### Open Questions (During Research Phase)

1. MVP- Secure messaging or appointments?
Client's Preference is to implement Deep Linking with secure messaging vs appointments. MVP- Secure Messaging (Q3) will start with secure messages then apply phased approach for next steps with Deep Linking (ex: deep linking with apppts).

2. Are there any other expected outcomes besides the having the deep linking functionality working for one or the other? 
-Better Seamless User Experience

2. Do we late mesaure conversion or retention rate increase in the app as a measure of success?
TBD

3. Will we need Content Support?
   N/A at this time (MVP)



**Important Links**

Overall Epic: https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6037
