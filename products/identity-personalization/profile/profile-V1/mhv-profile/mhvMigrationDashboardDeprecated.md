
MIGRATED TO: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/mhv-notification-preferences-migration/dashboard.md
LAST UPDATED 5/17/2023

## Open questions? : 
We need system designs/maps, not just UX/UI but the map of the system, what is communicating where and why, ideally current state architecture and future state.  
[MHV Prototypes](https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa) <why do they have a logged out view? 



## Raci Mural Board 
[Board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1683563126254/26360684516a5511439b5056e1b13f3ae3acf49a?sender=u71ad98f94f5263595f9a4390) to determine ownership and responsibilities for MHV notification preferences, other types of preferences, and profile info integrated into VA.gov as part of the MHV migration to VA.gov.


## Overview of preference migration from MHV to Profile
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/mhv-notification-preferences-migration

## Migration plan 
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/mhv-notification-preferences-migration/product/migration-plan.md


## MHVtoVA.gov Directory 

https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov

## Legacy Research 
### 2020 Research
[Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/profile-V1/mhv-profile) where to find research from 2020 for MHV to Profile migration 

### 2022 Research 
[Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-05-MHV-profile-research/recommendations.md#we-should-collaborate-with-the-health-apartment-team-to-determine-where-it-makes-the-most-sense-to-put-health-related-profile-items)
[Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Research/2022-05-MHV-profile-research)


liz's research / [recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-05-MHV-profile-research/recommendations.md)
[liz's mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/vsa8243/1645732777530/3b751dac638c58f4463823ac9476e4e25dc1240f?sender=u10f2c4ac80310d9cff115982)
[iterative research that used liz's research](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1677775946971/1e8d73d4013ecec84b932c699ce1cf8584cb7e35?sender=u10f2c4ac80310d9cff115982)


## Outstanding questions
- Is the MHV Rx shipping and tracking email notification the same as the text notification, with regard to it applying only to certain facilities? If so, are they the same facilities?
- Is the VA Profile API flexible enough that we can have a unique channel name/label for a notification item? The MHV Newsletter isn't a notification as much as it is a subscription, and people were confused by the label "notify me by email" for this notification in user research.
- Will peopel's contact email address migrate over from the MHV profile to the VA.gov profile 1:1? Wondering if anyone who is currently opted into MHV email notifications could encounter the "we don't have your email address" messaging in our notification feature.

## Call/Meeting Log
### Email from first call 5/8/2023
![image](https://user-images.githubusercontent.com/129431463/236938796-4c5cb8be-3621-43d5-a00f-98c84763c7fb.png)

[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1677775946971/1e8d73d4013ecec84b932c699ce1cf8584cb7e35?sender=u10f2c4ac80310d9cff115982) detailing the different types of preferences 
Add in a link to the excel file 

#### Definitions of the different preferences:
- Profile information - name, address, etc., and where that data is stored and managed
- Notifications - the work around composing notification messages and having them funneled through and delivered by the VA Notify system
- Notification preferences - Choices the user can make about how/whether they receive notifications, and where that preference data is stored and managed
- Application preferences - Choices the user can make about how they interact with a specific digital application, and where that data is stored and managed
- VA.gov global preferences - Choices the user can make about how they interact with parts of the VA.gov site that are common/shared across many different applications and resources, and where that data is stored and managed
- Health preferences - User's desire to see a male or female provider, preferred days/times for appointments
- On-screen messages (NEW FEATURE) - Messages that are displayed on the screen while using VA.gov, and the events/conditions that trigger them

## Interesting Tidbits
data in MHV isn't supposed to flow out of MHV without notice being sent to the end user 
