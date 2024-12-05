# Research Summary for Mobile App MVP Testing R2



Feb 2021

This research report consolidates feedback we received using 2 research methods: 

- Method 1: Moderated 60-minute conversations, conducted Feb 1-5
- Method 2: Unmoderated requests for feedback from VA and Ad Hoc employees

## Background and goals

The VA Mobile App team conducted testing to understand usability obstacles and get feedback from Veterans on the MVP app currently in development. This testing informed some necessary immediate adjustments and also potential future improvements.

## Research goals

Our key research goals were: 
- Set up APK file on participant’s device (moderated testing only)
- Evaluate usability of sign in
- Gather feedback on features at a high level
- Gauge general usefulness and relevance of the app



## Method 1: Moderated testing

#### Participant summary

We recruited 12 and spoke to 6 participants who can be described as follows:

- Participants were in the following age ranges: (2) 25-34, (2) 35-44, (1) 45-64, (1) 55-64
- All had filed a claim or appeal with VA, all used VA health care
- 5 participants had a service-connected disability rating, ranging from 60% to 90%
- All lived in major metropolitan areas
- 1 woman, 5 men

#### Distributing the app

We needed to first decide how to distribute our unpublished app. After investigating our options, we moved forward with the approach of recruiting participants with Android devices and asking them to download an APK file of the app onto their device. Sometimes this was successful, and other times was not due to lack of access to a mobile device or technical issues. As a backup plan, the moderator screen shared the app showing mock data. How participants reviewed the app can be described as follows: 

- 3 participants viewed a production build on their own Android device (this did not include claims, but did include sign in)
- 3 participants viewed the moderator’s screen share of app with mock data (this included claims, but did not include sign in)

Throughout the report, participant feedback is tagged with either APK or screenshare to clarify how they reviewed the app. 

#### Structuring the sessions

Because the app has a wide scope of features from sign in to health to benefits, we opted to structure our research in a looser format to achieve two things: 
- Gather clear usability feedback on sign in
- Gather high level feedback on features across the app 

We chose to take this approach for three reasons: 
1. First, because we asked participants to sign in with their own credentials, we needed to make our sessions flexible based on what data the participant saw after signing in.
2. Second, we anticipated participants being fatigued or frustrated by sign in, as that is a known pain point, and we wanted to offset the heavy structure of set up and sign in from the first part of the session with a more fluid conversation. 
3. Last, to move quickly and allow the Mobile App team to iterate on features across the MVP, a looser structure allowed us to gather feedback across the scope of the app rather than focusing on specific parts. This has allowed us to translate our findings into actionable tickets iterating on all areas, and has helped us get a better idea where we may need more testing in the future.



## Method 2: Unmoderated testing
We sent invitations to test the app via Testflight to about a dozen people who work at either VA or Ad Hoc, and we received feedback from 4 people. We did not recruit against specific criteria (e.g. has filed a claim, uses VA health care). The only common characteristic aside from working at VA or Ad Hoc was that all were iPhone users. We used three methods to gather feedback: 
- Soliciting feedback in a Microsoft Teams channel in the VA workspace or a Slack channel in the Ad Hoc workspace
- An Optimal Workshop survey
- 30-minute Zoom conversations guided by the survey questions

We intend to keep lines of communication open with people who have offered to be our internal testers for the next several months to continue to test with real users as much as we can. This report captures the feedback we have gotten up until 2/15.



## Relationship to the platform
We used Veteran Services Platform (VSP) resources for much of our research: recruitment was by Perigean and we followed the standard conversation guide and research plan format used by VFS teams. Where we differed was in the distribution method (as we are the only team working in the native mobile space), and the method, for the reasons noted above. 



# Findings
### Setting up the APK yielded mixed results
It was successful half the time, and the other half of sessions used plan B (moderator screen sharing mock data). We will need to distribute to stores or develop an alternate distribution method for unpublished apps to effectively test and run a study that is more likely to be able to use the same structure for all participants. Notable things we learned about the APK method include: 
- 1 participant ran into issues with the Package Installer of the APK
- 2 of 3 participants who used the APK had familiarity with APK files already from mobile work or a personal hobby
- 1 participant was on a cell data connection and downloading the file took 5+ mins

**Implications**
- More research is needed to determine a viable future distribution strategy for unpublished apps


### In moderated testing, all 3 participants who downloaded the APK file successfully signed in
One used ID.me, one used DS Logon, and one used MHV. One participant who signed in offered specific feedback that, on the sign in page and subsequent modals, footer links were scrolling on top of the page content, menu options looked compressed, and text was cut off in one place. 

**Implications**
- [#15057 - Improvements to sign in pages and modals](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15057)



### We observed important data and access inconsistencies in various participant’s production accounts
In moderated testing, P8 (MHV) and P11 (DS Logon) both signed in, but ran into errors that blocked access to key parts of the app. 
- Both P8 and P11 could only access parts of their profile and their middle name displayed as “Not Found” in the profile banner. 
- P8 saw appointments, but said they had confirmed upcoming appointments that were not displaying. 
- P11 could not see appointments, and instead saw the general service error message. 

In unmoderated testing, we heard about similar issues. 1 internal tester with all 3 credential types tested all 3 and found inconsistencies:

> “When I sign in with the DS Logon or MHV authentication option it does not bring my letters, appointments, etc. But if I sign in using ID.me, then I get my profile and data loaded...If I close the app and come back in, the app fetches data eventually, but things are ‘cached’ upon sign out from one credential type to another.” - Internal tester

Another internal tester had confirmed upcoming and past appointments, but did not see them in the app. They also saw their profile badge with their name, but the branch of service badge did not display. It does display on VA.gov. 

**Implications**

- [#20016 - Investigate sign in issues](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20016)
- [#20017 - Identify 'unhappy paths'](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20017)
- Internally test with all 3 credential types to ensure app works for all types 
- In the future, do more testing with users with their own data



### Participants clicked through the sign in screens quickly. 
1 participant was prompted to read the Level of Assurance (LOA) information screen, and did not have any questions about it. 2 participants did not read the LOA information screen, instead quickly clicked past it. No participants opted into biometrics, all citing that they did not use biometrics as the reason for not opting in. This suggests that the biometric option screen was clear in that participants understood what was being asked. How participants engaged with all the sign in screens unprompted suggests that we should keep any sign in screens clear and to the point, and also keep in mind that people might not always read them. 

**Implications**
- Keep any sign in screens clear and to the point

  
### When prompted for their first impression, many expressed feeling the app looked straightforward or easy to use. 
Participants liked that the app was streamlined just to the actions they would want to take as compared to having to navigate around VA websites. 

> “Everything that I would go on there for is readily available, so I like it...VA.gov has changed and it's straightforward. This is giving me the same feeling.” - P4 (screenshare)

**Implications:** Just keep these comments top of mind in the future as we’re considering adding new features or functions. Simple, easy to read, straightforward was the common theme.



### When asked for overall feedback on profile, participants voiced that the type of information in the app is what they would expect to see.
3 participants saw their own profile, but 2 saw errors in their name and certain sections of profile were hidden from them. 3 participants reviewed mock data in staging build via screen share. 1 participant said that they liked seeing their name and seal on profile as a signal they were logged in. Direct deposit information was cited by 1 participant as being useful. 

> “This is pretty much the same options as on VA.gov or eBenefits.” - P2 (screenshare)


### Letters were the feature of profile that got the most attention. 
Participants cited situations like job searching or identification purposes in which having letters at hand would be useful. We did not have more detailed conversations about the content of letters. The 1 participant who signed in and had access to letters successfully retrieved his Service Benefit and Verification Letter. 

> “[Letters are] high value and very useful.” - Internal VA tester

> “[I would] download my Civil Service Preference Letter at job interviews and email it right then and there.” - P2 (screenshare) 

**Implications:** 

- [#20013 - IA and design improvements for homescreen](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20013)
  - Consider moving letters to a more prominent location
  - Consider adding name and seal to homescreen to indicate login status on sign in
- Consider further task-based testing of profile in the future



### Reactions to appointments were positive overall. 
2 participants saw their own past appointments, 1 participant saw an error state, 3 participants reviewed mock data in staging build via screen share. We did not get a lot of specific feedback about the information shown on the appointments screen other than that it was what people expected to see. This indicates that our approach of replicating information shown on VA Online Scheduling (VAOS) is helpful and a solid start. Other notable feedback:

- The 'Add to Calendar' button was cited as highly useful by a majority of participants, and brought up as a suggestion by multiple people before they saw the feature.
- The top request was adding the ability to cancel appointments.
- Sharing appointments with caregivers was indicated as important for a participant with memory issues1 participant said that, in a mobile context, having a specific clinic phone and suite number is useful to quickly get help and know where to go. The same participant suggested having VA hospital information accessible in the app.

> "Here’s one example: I was running late and tried to search to find number to call, and all I would find is the switch board and got stuck in a menu forever trying to get in touch with the actual place....a direct line would be very beneficial" - P7 (APK)
>
> “Within the Contact VA if you were able to identify "your" VA hospital in your profile, you could have contact info specific to your hospital or location.” - P7 (APK)

**Implications:** 

- [#20011 - Discovery for appointments information. Can we offer clinic specific information like phone and suite number?](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20011)
- [#20019 - Discovery for 'Your VA Location' feature](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20019)
- [#20020 - Discovery for share appointments feature](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20020)
- Work closely with the VAOS team to understand the technical feasibility of some requests we heard today. Also, be ready to integrate new features as VAOS adds them.
- Add cancelations (in progress)
- Discovery for push notifications for upcoming appointments (in progress)
- Add rescheduling and scheduling



### When prompted to explore the app, most participants wanted to see claims first. Reactions to claims overall was very positive, with the ability to check a status being cited as highly useful.

0 participants saw their own claims, 3 participants saw a blank screen, 3 participants reviewed mock data in staging build via screen share. 

>  “The main thing with the status is 90% asking what phase [a claim] in.” - P11 (APK)

Other notable feedback includes: 

- People are interested in more transparency in the claims and appeals process, and the top requests were related to transparency and getting information quicker. 3 participants suggested adding decision letters for closed claims, with 1 participant saying knowing a decision quicker would enable faster movement on an appeal should a claim be denied: 

> “You can't start an appeal until you see why you got denied, and letters can take 5-10 business days. There is a gap between when claims are closed online and the letter of explanation, so a letter in the app would be helpful.” - Internal tester

- 1 participant was working on multiple Higher Level Reviews (HLRs) and noticed he did not see them represented in the mock data. This same participant said they would like to add new appeals, and they were the only participant who suggested this functionality. 

### File upload was cited as highly useful by a majority of participants.
It’s useful because it eliminates the need for a scanner, can help move a claim along more quickly and removes the need for in-person file deliveries. The desire for transparency also carried over to feedback around upload, with 2 participants suggesting the addition of estimated processing timelines for files uploaded via the app. 

> "This is really helpful since I have a lot of files saved on my phone. Especially when I am away from home, I could upload that information right away. Sometimes my scanner doesn't work so this would be much easier to take a picture. That is great." - P2


**Implications:** 

- [#20008 - Discovery for Higher Level Reviews](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20008)
- [#20009 - Discovery for Supplemental Claims](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20009)
- [#18795 - Refine claims file upload flow to improve usability and accessibility and provide more transparency anywhere we can](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18795)
- [#20038 - Refine claims information to match VA.gov more closely in areas where it doesn’t yet](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20038)
- [#20039 - Discovery for closed claim decision letters](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20039)



### Participants understood the intent of the app as "main actions" quickly and consistently, and responded positively to the features. 

> "I think the things we would use the most would need to be at our fingertips: claims appeals, appointments, secure messenger. Those would be beneficial from an app perspective. Those are the things that I would need to take action on. Everything else is research." - P11 (APK)

Although no participant seemed to find anything confusing or unclear, we should keep in mind half of the participants saw mock data and some participants ran into service errors and were not able to see app features working correctly with their own data. It is unclear if the display of their personal data would have changed this perception at all.



### We heard consistency across top requested features:

The top 2 requested features were health care related, and cited as things people do regularly, and would be beneficial to do quicky via an app. 

**Secure Messaging:** In moderated, 4/6 mentioned Secure Messaging. 
> “I use it to contact my therapist telling him if I need to talk, or my PCP if I need a referral, or talking to an orthopedic doctor about a flare up or something I forgot at an appointment. **Like a direct pipeline is kind of how I use it**...being able to access it quicker would help and be a little bit simpler.” - P11

**Prescriptions:** In moderated sessions, 5/6 mentioned prescriptions. 
> “Will this app have medication refills? Sometimes I forget I need to submit a refill and the mailing takes too long. This has caused issues for my daily medication and there may be a week between when I remember and they mail it.” - P7 (APK)

**The other top request was notifications.**
For many of the current and future features participants indicated wanting to get notifications. Notifications were cited for appointment reminders, change in claim status, updates in claim document processing, any action needed for a claim or appeal, and COVID vaccine readiness. When talking about health features that *could* be in the app, participants referenced notifications too, for example getting notified that lab work is ready or that a prescription needs refilled. People are interested in notifications from VA in general, across claims and health care. 

> “Will this app have push notification with change of claim status? I would like to have that, because right now it's a guessing game...It would be helpful if we knew right away if there was something we needed to do or there was a change in status.” - P2 (screenshare)

**Other suggested additions not yet mentioned include:** 
- COVID-19 vaccine rollout information: 1 participant suggested using the app to stay up to date on the vaccine rollout. 

> “Where I am we have a smaller outpatient clinic, and then [the big VA] is an hour away. That is where I go if I need anything major done. So if the vaccine is available there, I would like to know. I might make the choice to go.” - P8 (APK) 

- GI Bill Balance: suggested by 1 participant 
- Payments History: suggested by 1 participant 
- DD214: suggested by 1 participant

These suggestions align with what we have heard as top suggestions in prior research. 

  

### The majority of participants indicated that the app would be useful even when they were shown mock data as a representation of what the app could do for them. 
Having information on “action” tasks and being able to take actions on things like checking a claims status and appointment information was useful. Participants indicated that they would use the app for one feature, like appointments or easier sign in, even if it did not have other features they would find valuable:

> "So if this is simple and to the point and quicker to login, then I would use it...if it’s speedier than VA.gov that would be a factor to use it. Quicker and easier to read is a daily driver." - P12 (screenshare)

> “The main thing I would use is prescription refills, but for the sake of the appointments I probably would use it.” - P7 (APK)

**Implications:** 
- User feedback indicates we are on the right track with features in the MVP, both in what the features are and how we’ve brought them to life. Continue to refine usability and interaction design at a more granular level and “harden the core” of what we have built.
- Do discovery around notifications (in progress)
- Do discovery (in progress) then research, testing, build of Secure Messaging
- Do discovery of prescriptions
- Do discovery work on and prioritize other suggested additions



### Those asked if they would recommend the app were 50/50.
Because some participants ran into service errors and were not able to see app features, we did not ask them if they would recommend the app. Whenever we didn’t feel the session had shown the participant enough to be able to answer this question in a meaningful way, we did not ask the question. Participants who were not sure about recommending cited two reasons: 

- Lack of features
- Needing to know that the app would be useful to the person they were recommending it to before doing so 

> "If I know someone is using VA health care then [I would recommend this app]...not everyone is." - P12 (screenshare)

Participants who would recommend the app focused on the app offering important and frequently used items and communicating that benefit to other Veterans:

> “[I would tell other Veterans]: the mobile app has the most important things that we use the most.” - Internal tester 

**Implications:** 
- Add some highly requested features before app stores launch
- Be mindful that recommendations may not only come because a veteran has a good experience themselves, but that they also would know that the app would be useful to a fellow veteran



# Future research opportunities
We think the following areas would be beneficial to look into in the future:


#### Testing with Secure Messaging
With plans to incorporate Secure Messaging in the future as well as it being a highly requested feature from participants it would be beneficial to run a study around a prototype of a Secure Messaging mobile experience and see how it tests with users. This will be useful both for refining this feature, and understanding how it changes the participant’s perspective of the app as a whole.

#### Task based testing, especially with more complex flows like claims file upload
Most participants expressed high interest in claims file upload, both file selection and taking photos. We know this is important to get right from a detailed usability perspective. While we didn’t go into depth in testing tasks in this round of testing, it would be beneficial to conduct testing like this in the future, either before or after app stores release. 

#### Testing with folks who use assistive technology
As stated earlier, we need to put more thinking towards a method for testing an unpublished mobile app. As we do that, we should keep in mind that setup of the process before we get to app testing should be accessible to users who use assistive technology.

#### Communicating that more features will come
We have seen a pattern in studies that participants would like to see more in the app, and we plan to add more over time. To this end, we think it would be helpful to test different ways the app could communicate that this app is a first release and more features are coming in the future. 
