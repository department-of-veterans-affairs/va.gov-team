
# VA Mobile App - Personalized Home Screen Evaluative Research - Findings

Office of the CTO - Digital Experience (OCTO-DE), VA Mobile App

Date: 07/03/2024

Holly Collier ([holly.collier@adhocteam.us](mailto:holly.collier@adhocteam.us)), VA Mobile UX Team

**Research readout:**  
* [Internal team deck](https://docs.google.com/presentation/d/1ZPKnTM2UslfUm71EBhangvb3aAMtx_74riC9qns8OQc/edit#slide=id.g1531a8d3ce4_2_202) | PDF
* Monday design meeting deck 

**Jump to:**  
[Hypotheses and conclusions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20findings.md#hypotheses-and-conclusions)  
[Key findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20findings.md#key-findings)  
[Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20findings.md#recommendations-and-next-steps)  
[Who we talked to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20findings.md#who-participated-in-the-study)  


## Background

The VA Flagship mobile app was [designed to help Veterans who are actively engaged with VA health and benefits services to keep track of their tasks and interactions across VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Product-Outline.md#desired-user-outcomes).

Quantitative data analysis indicates that users who initially download the app do not actively use the app over time, and [research participants have also reported that they download the app to see if it can help them (but then don’t use it regularly)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/post-launch-discovery/July%202023/Mobile%20App%20Retention/Research%20Findings.md#detailed-findings). The VA Flagship mobile app team believes that bringing personalized content to the VA mobile app’s home screen will help new and current app users understand and find value in the app that they aren’t discovering now, help app users keep up with and manage their current interactions across VA, and ultimately help address the dip in retention we’re seeing.

See also: [VA Mobile App - Personalized Home Screen - Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/product/Personalized_homescreen-Product-Brief-2023.md)


### Project Objectives & Goals


#### [Flagship Mobile App Strategy](https://docs.google.com/presentation/d/1j0rO2HvDwHDTzunG3judC1HXOiWfGNTXVciLAkurpRw/edit#slide=id.g1e78b87c057_0_159)



* **Vision:** "Each Veteran is connected to the VA services that matter most to them, regardless of device, and without understanding the VA org chart.”
* **Objective 1:** Veterans will use authenticated services that are highly personalized and valuable.
* **Objective 3:** Increase active user base.


#### [OCTO Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme)



* **Goal 6:** Logged-in users have a personalized experience, with relevant and time-saving features.


#### Veteran Journey

Since Veterans can download the VA Health and Benefits mobile app any time after establishing benefits with VA, this work impacts the Veteran journey from Starting Up and beyond.



* [Veteran journey map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)


#### Previous User Research

We have not previously conducted concept or usability research focusing on the VA mobile app’s home screen.



* [Desk research & discovery exploring personalization broadly](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/discovery/readme.md#personalization-2023) was conducted several times from 2021-2023.
* [VA mobile app - User Retention Discovery Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/post-launch-discovery/July%202023/Mobile%20App%20Retention/Research%20Findings.md#detailed-findings) (the study that uncovered the engagement problem the personalized home screen is attempting to address) was conducted in 2023.
* [VA mobile app - Post-Launch Discovery Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/ux-research/post-launch-discovery/july-2022) (the study includes exploring the value of the app to Veterans) was conducted in August 2022.


### Research Goals

Fulfills issue [#2160](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/2160)


#### Primary:



* Understand if/how the personalized home screen design impacts participant comprehension of what the VA mobile app can do (in general, and for them specifically). ([*project success metric*](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/product/Personalized_homescreen-Product-Brief-2023.md#metrics))
* Understand if/how the personalized home screen design impacts participant perception of the app’s current and future value. ([*project success metric*](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/product/Personalized_homescreen-Product-Brief-2023.md#metrics))
* Evaluate the usability of the personalized home screen and category screens using high-level tasks that the participants will be asked to complete and determine if any significant usability barriers (including app performance) exist for participants who use the app with assistive technology vs without assistive technology.
    * Tasks focus on features that appear on the home screen within the Activities section and About you. They will be chosen based on the entry points that appear on the user’s personalized home screen (if no entry points appear, we will ask what they expect to be in that section). This could potentially include:
        * Check the status of a disability claim
        * Complete an outstanding health task (refill a prescription, read a new message, check the details of an upcoming appointment)
        * Show proof of Veteran status
        * Find their benefit verification letter


#### Secondary:

* Pilot conducting remote, evaluative research using a live, pre-release build of the app on participants’ mobile devices (including with screenreader users), and improve the instructions and process for that in preparation for future usability studies.

**Outside the scope of this study:** We will not be evaluating the personalized home screen’s impact on task completion (that will be handled using analytics), the impact on the value of the app to users over time, the usability of features that are surfaced on the home screen, or the personalized home screen’s impact on Veteran satisfaction with the amount (time & tasks) they are completing in the VA mobile app.


#### Outcome

This research will help us understand if/how the personalized app home screen design impacts the project’s [qualitative product success metrics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/product/Personalized_homescreen-Product-Brief-2023.md#metrics) as well as identify opportunities to improve the usability and design of the personalized home screen in future iterations.


### Research Questions

1. What do participants **believe that the VA mobile app _can do_** based on the contents of the personalized home screen?  [Link to finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20findings.md#1-what-do-participants-believe-that-the-va-mobile-app-can-do-in-general-based-on-the-contents-of-the-personalized-home-screen)
    1. _in general?_
    2. _for them_ in their current circumstances?
2. Do participants **find value in the VA mobile app** based on the contents of the personalized home screen?  [Link to finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20findings.md#2-do-participants-find-value-in-the-va-mobile-app-based-on-the-contents-of-the-personalized-home-screen-what-do-participants-believe-that-the-va-mobile-app-can-do-for-them-in-their-current-circumstances-based-on-the-contents-of-the-personalized-home-screen)
3. Do participants **understand** what the modules on the home screen are and **find value in the high-level data** being displayed within the modules?  [Link to finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20findings.md#3-do-participants-understand-what-the-modules-on-the-home-screen-are-mental-model-and-find-value-in-the-high-level-data-being-displayed-within-the-modules)
4. Do participants **choose to use the home screen as a task starting point**, and will they **successfully be able to accomplish** some tasks/answer some questions using the mobile app home screen?  [Link to finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20findings.md#4-do-participants-choose-to-use-the-home-screen-as-a-task-starting-point-and-will-they-successfully-be-able-to-begin-some-tasks-using-the-mobile-app-home-screen)
5. **Is there a difference between screenreader users and non-screenreader users** in terms of perception of app capabilities, perception of value, and the usability of the personalized home screen?  [Link to finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20findings.md#5-is-there-a-difference-between-screenreader-users-and-non-screenreader-users-in-terms-of-perception-of-app-capabilities-perception-of-value-and-the-usability-of-the-personalized-home-screen)
6. **Do participants experience performance issues/lag** when loading the personalized home screen? If so, do performance issues impact participants’ perception of the app’s capabilities or value?  [Link to finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20findings.md#6-do-participants-experience-performance-issueslag-when-loading-the-personalized-home-screen-if-so-do-performance-issues-impact-participants-perception-of-the-apps-capabilities-or-value)


## Methodology

We conducted moderated, remote, think-aloud user interviews with usability testing over Zoom using a pre-release production build of the VA mobile app installed on participants’ own mobile devices. The user interviews lasted up to 90 minutes in length. 



* 11 participants used an iPhone mobile device, 2 participants used an iPad
* 8 participants were current VA mobile app users, 4 were not users and 1 participant was a former app user
* 7 participants also reported being users of MyVA
* While our research plan called for recruiting both non-screenreader users as well as users who were screenreader experts, no participants who attended sessions used a screenreader.

  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/images/VAHBMA-HSP-Home-light.png" height="800" alt="VA mobile app - personalized home screen, light mode"> <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/images/VAHBMA-HSP-Home-dark.png" height="800" alt="VA mobile app - personalized home screen, dark mode">


  Screenshots from [the Figma file](https://www.figma.com/proto/q4oTyzyLfYrZVz4CACzVLA/Personalization-Visual-Design---Working---VA-Mobile?page-id=2176%3A1167&node-id=2306-7638&viewport=667%2C674%2C0.49&t=R7YetqFFK8lWiwRp-1&scaling=min-zoom&starting-point-node-id=2306%3A7638&show-proto-sidebar=1)

Because of the potential variability of the modules within the Activity section, we planned questions for all possible modules and then selected a Health task for the participant to complete based on what was present on the home screen in order to limit the length of the session.


## Hypotheses and Conclusions



1. Upon seeing the personalized VA mobile app home screen, participants will demonstrate that they understand what the VA mobile app can do (help users keep up with and manage interactions across VA).

    **True.** Based on first impressions of the contents of the new personalized home screen—participants who were current users as well as non-users of the app demonstrated that they understood what the mobile app can do. When asked, they described the app using similar terms that participants have used to describe it in previous studies: ”All of the stuff that is important... in one place," "Streamlined & simple," and "Quick & convenient access.” One participant described the app as “an assistant” that would give her “highlights of what's coming up”.

2. Participants will be able to imagine and describe how the app will help them with the tasks they currently use in the app and in their life.

    **True.** When prompted, all participants were able to describe a situation in their life where they imagined they could use the VA mobile app home screen to give them access to a specific task, be reminded of an outstanding task, or use the information on the home screen itself to accomplish a task.

3. Participants will understand that the personalized home screen modules contain high-level data from their in-flight tasks, and may describe it as being helpful in keeping up with their tasks.

    **True.** All participants recognized that the Activity modules on the home screen displayed their personalized information. All participants seemed to understand that the description text on each module described something that was “in-flight,” however, not all participants described the presence of the Activity module _itself_ as indicating that something was an “in-flight task”:
   *  8/13 participants described those modules as “active/pending items” that would provide a "shortcut" to the feature (and/or described the category screen entry point as "the long way”), and expected them to disappear if not active. 
   *  5/13 participants described the modules in the activity section as “Most used items/top stuff,” and expected them to be persistent on the home screen (with changes to the description text to indicate if they were not active).

   Regardless of mental model, participants thought it was helpful to have access to features from the home screen, and most participants said the data in the Activity modules was useful to help them keep up with their tasks. Some participants had suggestions about what the module description text could say instead of/in addition to the information displayed for Appointments and Claims, but felt the description text for Prescriptions and Secure Messages was useful as-is. 

4. Participants will choose to use the personalized home screen modules as a way to quickly answer questions/access in-flight tasks.

    **True:** Nearly all participants expected and then used the home screen modules successfully to begin their tasks (and arrived where they predicted they would be). However, in the case of one task (prescriptions), most participants’ expectations of the module destination based on the description text was different from what they experienced using the build.

5. Screenreader users and non-screenreader users will experience the same level of usability, and use of assistive technology will not cause a difference in participant perceptions of app capabilities or value.

    **Not enough information.** No participants used a screenreader for the session, so we were not able to determine whether there is difference in perceptions of app capabilities or value between participants who are and are not screenreader users.

6. Participants may experience some lag when the personalized home screen is loading data, but any lag will not affect their perception of the app’s capabilities or value. We believe that some users may choose an alternate way for accessing tasks if the lag is perceived to be too great.

    **Yes, and no:** Half of participants experienced load times of over 8 seconds when loading the home screen modules, sometimes even when returning to the homescreen additional times from locations deeper within the app. All participants were connected using 3-4 bars of wifi. Of the participants who experienced the long load time, half of them commented on the long load time, but eventually still said that they felt the app would be useful to them in their life.

    No participants who experienced long load times chose an alternate way for accessing tasks——they waited for the screen to finish loading (however, this may be because of task instructions asking the user to return to the home screen and may not be a reflection of what will occur organically).


## Key Findings
1. Participants demonstrated that they understood what the mobile can do and were able to describe a situation in their life where they imagined they could use the VA mobile app home screen to help.

2. All participants recognized that the Activity modules on the home screen displayed their personalized information and seemed to understand that the description text on each module indicated that something that was “in-flight,” however, not all participants described the presence of the Activity module itself as indicating that something was an “in-flight task.”

3. Participants successfully used the homescreen as the starting point for tasks and most found the module description text and the direct access to features useful.

4. All participants were expected to have a Proof of Veteran status link on the homescreen, but 5/13 did not. 

5. About half of participants experienced load times over 8 seconds on the homescreen during the session, but we did not observe evidence that this impacted participants’ perception of the app’s capabilities or value.


### Secondary Findings: Research ops

* We were successful in conducting research sessions using a pre-release production build of the VA mobile app (aka a production build that is not yet in the iOS app store) installed on participants’ mobile devices that they logged into using their production credentials.  
* The portion of the conversation guide dedicated to [app install & login](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20conversation%20guide.md#app-install--log-in) worked well, and we feel it will be helpful to use it as-is to test pre-production builds in the future. 
* Two participants joined the session without having Zoom installed in advance—this was disruptive, but not impossible to work around (we were eventually able to run the session using the moderator’s mobile device). A recruiter follow-up with each remaining participant ensured Zoom was installed prior to the session and made for quick & easy setup.

**High level overview of testing using a production build:**
Limiting the testing device type to iOS (iPhones and iPads) made for a more seamless/easy installation of the pre-release build because of the simplicity of the Testflight link (the link opens a webpage with links to download both of those, while installing a build on Android requires a more involved set of steps, and can be more variable due to differences in OS settings between device manufacturers). We also planned for extra setup time during the session for technical difficulties.

* To test with a pre-release production build, we confirmed and gathered consent in advance that participants: 
    * Would join the session using Zoom on their mobile device (on their own) _*Most important_
    * Were ok with downloading and installing Testflight & the app build
    * Could log in with VA credentials
* Participants did the following things during the session with help from the moderator:
    * Confirmed an additional time that they were on Zoom on mobile, were ok with installing stuff, and had their credentials ready to go
    * Shared their mobile device's screen in Zoom
    * Using a link we provided in Zoom, installed Testflight and the pre-release version of the VA mobile app. 
    * Logged into the pre-release version of the mobile app using their real credentials 
    * At the end of the session, uninstalled Testflight & the pre-production build (and reinstalled the App store version, if applicable)


## Detailed findings


### (Research questions, answered)

#### 1. What do participants **believe that the VA mobile app _can do —in general—_** based on the contents of the personalized home screen?

When asked to describe what the VA mobile app does for Veterans—based on first impressions of the contents of the new personalized home screen—participants described the app as:  
* **All of the stuff that is important... in one place (6 participants):**
   >  "...a hub of important information that you need on a regular basis." P1
   >  "This is a one stop shop!" P16
* **Streamlined & simple access (4 participants):**
   >  "[The app] gives a more streamlined ability for the Veteran to check anything—you know, whether they need to print something out real quick, or review something, or check the status or cancel it." P4
* **Quick & convenient access (3 participants):**
   >  "Quick access, it can give insight into what's happening." P2
* **An assistant (1 participant):**
   >  "Like a personal assistant, it's like giving you highlights of what's coming up. which is very helpful. and you don't have to navigate so much..." P10

The first 3 descriptions are consistent with those mentioned by Veterans during Post-Launch Discovery Research conducted in August 2022 (_[Key finding #2 “Veterans value the mobile app because of its convenience, perceived timeliness and simplicity”](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/post-launch-discovery/july-2022/final%20report.md)_), indicating that perceptions of what the app can do have probably remained consistent as opposed to changing as a result of the personalized home screen updates. 

#### 2. Do participants **find value in the VA mobile app** based on the contents of the personalized home screen? What do participants **believe that the VA mobile app _can do for them in their current circumstances_ based on the contents of the personalized home screen?**   

All participants said that they thought the personalized home screen would be helpful to them in their life, and were able to give at least one example of a thing in their life that it would help them do. 

When asked to imagine how they might use the homescreen of the app to help them with something in their life, participants described using the home screen as the entry point to give them access to a specific task, be reminded of an outstanding task, or use the information on the home screen itself to accomplish a task. 7/8 of the examples are currently possible in the home screen MVP, 1 example (access to benefit letters) is not.  Some participants also suggested tasks that are included in the home screen MVP scope but were not present on their home screen during the session. 
 
**Example tasks are listed from most to least mentioned:**

1. (7) Entry point/way to check the status of a claim 
     >  " I see active and I know there's no change [on my claim]." P12 
2. (6) Reminder/entry point when they need to figure out which prescriptions to refill or which drugs they're taking when speaking with a provider* 
      >  “Yeah, like the prescription refill. I feel that would be very helpful, because … like sometimes we have this bottle that has like hundreds of little pills and it, and it feels like I'm good for pills. But now, if you have to take 5, 3 times a day, you know… there's a lot of medication that you know. We can't have gaps in between taking them. We cannot have missed doses or things like that like you mess you up pretty bad.  So this is helpful security.” P10

      >  “In my medicine cabinet, I can see pills getting low (when filling week-box). This would be very useful and relatively quicker this way to figure out what prescriptions to refill” P9
3. (5) Reminder/entry point for reviewing the details of an upcoming appointment* 
      >  "I could have sworn I have an appointment this week, do I?" P4

      >  “I always try to put all my appointments as soon as I schedule them on my calendar.... because I have all the alerts going and everything. But if let's say that I know that I talked to someone, and I was driving, and I didn't get to put it in my calendar. I will probably come here, and I need to check in the appointments and make sure I have it more in my calendar. I will come here and do that, and it's simple enough. It even tells me I have one in the next 7 days, so I gotta make sure I have it in my book.” P10
4. (2) Using app instead of a computer to access information
      >  "If I got an email from the VA [on my phone] saying that I had something that I needed to do, whether it's, you know, pay for an appointment or to submit it more information for my claim or anything like that... then I'm just going to, you know, swipe out of my app on my email and go right into this to be able to address anything that I need to address rather than having to go sit down on my laptop and pull everything up on there….” P7

5. (2) Access to benefit letters
      >  “Way faster, even from my phone. Having airprint with my printer at home. BOOM - open the app, click on that, click on that, print it and be done. If it comes up on the phone - screenshot it, and attach it real quick in an email” P4
6. (2) Check for unread messages from a healthcare provider*
      >  “It's similar to my healthy vet in a sense that I go to my healthy vet to look at my appointments, and do secure messaging.” P11
7. (1) Access to disability rating to quickly fill out forms*
      >  “Because I need to see my disability rating and monthly payment quickly to fill out forms” P5
8. (1) Providing proof of Veteran status*
      >  “Somebody wants to see proof that you are a veteran; or things that require specific percentages of disability - "right there, bright as day" P4

#### 3. Do participants **understand** **what the modules on the home screen are (mental model)** and **find value in the high-level data** being displayed within the modules? 

The home screen contains two primary sections, the Activity section (containing feature modules) and About you (containing the user’s branch of service, proof of Veteran status, disability rating and monthly payment. Findings are reported by section.  

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/images/VAHBMA-HSP-Activity.png" width="300" alt="VA mobile app - personalized home screen, Activity section"> 

##### Activity section - Mental model:
* All participants recognized that the Activity modules on the home screen displayed their personalized information, and that tapping the module would take them to the  corresponding feature.

* When asked to describe what the list of Activity modules "are," participants described the the section in two different ways, and had corresponding expectations about how they expected the Activity modules to behave in situations when there was no data to display: 

  * 8/13 participants described the Activity section as containing “Active/pending” items (and expected a conditional appearance—the module would disappear if there was not an active item)
     * 5 of the participants who described the Activity sections as active/pending items also described the modules as a "shortcut" and/or the category screen entry point as "the long way."
  * 5/13 participants described the Activity section as containing “Most used items/top stuff” (and expected a fixed appearance—the module would show a number when active and a "0" or a blank space when there was no data to display).

   When asked what (if any) other items they thought would be helpful to include in the Activity area, participants also expected to see:
   * (5) Appointments*
   * (3) Messages from their provider*
   * (2) Payments (due)
   * (2) Claims*
   * (2) Travel claims
   * (2) Labs & tests reminder
   * (1) Inbox (messages from VA)
   * (1) Prescriptions*
   * (1) Letters I filed with VA
   * (1) Reminder to order supplies (CPAP, Hearing Aids)

    *_Participants who mentioned these existing features did not have them displayed as active modules on home during the session._
 
##### Activity section - Value of module & description data:

Participants thought it was helpful to have access to features from the home screen, and most participants said the data in the Activity modules was useful. Some had suggestions about what it could say instead of/in addition to the information displayed in the description text. Below are the responses, divided by feature module:

*  **Claims:**  

      <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/images/VAHBMA-HSP-Activity-Claims.png" width="300" alt="VA mobile app - personalized home screen, Claims module">  

      Responses were mixed on the helpfulness of the description text "[#] active":
      * 5/10 participants thought it was helpful
        > "If there's a change from 3 to 2 active then it would catch my eye" P10

      * 6/10 participants felt it would be useful to see additional information about their claim: 
        * 3 participants wanted to see a more specific status within active claim
          > "For example: Active might be that they are actively working on it. Pending could be that it was just submitted and no one is actively working on it, etc." P16

          > "I have a file request from the VA So I think that it would probably be good [to have it] on that" P7
        * 2 participants thought i would be helpful to see claims and appeals called out separately
        * 1 participant wanted to see the last updated date next to their claim
      * 3/10 participants said the level of detail in the description was fine:
        > "That ("active") motivates you to check" P11
      
        > "[No additional information needed] it's helpful that the page is really clean." P10 

        > "Active is fine—I don't expect more information than that." (P12)
      * 1 participant did not find it helpful: 
        > "I don't want to say that it [1 active] doesn't help me, but it doesn't help me." P2

* **Prescriptions:**  

  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/images/VAHBMA-HSP-Activity-Prescriptions.png" width="300" alt="VA mobile app - personalized home screen, Prescriptions module">  

  * 5 participants said they wouldn't change anything about the information displayed
  * 3 participants felt it would be useful to see more information: 
        * 1 mentioned tracking information for prescriptions in transit
        * 2 thought reminders that a prescription was about to run out would be useful: 
          >   "Instead of '9 ready to refill', maybe... wish there was a way or a reminder.. a "due soon" kind of thing... I wish it would make it clear which ones I would run out of soon." P1

* **Appointments:**  

  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/images/VAHBMA-HSP-Activity-Appointments.png" width="300" alt="VA mobile app - personalized home screen, Appointments module">  

  * 7/8 participants who saw the Appointments module said that the "next 7 days” time period was too short, but not all participants agreed on the best length of time:
        * 5 participants specifically suggested that it would be more useful for planning purposes to see the next 30 days of appointments:
          >  "If I don't check weekly, I won't know when the next one is coming up." P2 
        * 1 participant disagreed: 
          >   "I think a month is too much, but two weeks would be better." P16
  * 1 other participant who had an upcoming appointment about 2 weeks out expected to see an appointments module but did not have one. P8

*  **Secure message:**  

      <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/images/VAHBMA-HSP-Activity-Messages.png" width="300" alt="VA mobile app - personalized home screen, Messages module">  

      Only 1 participant experienced seeing this module and said it was "just the right amount" of information. 


##### About you section: Branch of service and Veteran status module:

   <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/images/VAHBMA-HSP-Aboutyou-PVS.png" width="300" alt="VA mobile app - personalized home screen, Branch of Service and Proof of Veteran Status module">  

  All participants were expected to have a Proof of Veteran status link displayed on the home screen, but 5/13 did not.

  * 8 participants who had a disability rating and monthly compensation amount had the expected module with their branch of service and proof of Veteran status link.
  * 3 participants who had a disability rating and monthly compensation amount had a module with their branch of service that did not include the proof of Veteran status link* _(this combination should not be possible given that a veteran with a disability rating who is receiving a monthly disability payment should also be allowed a proof of veteran status)_
  * 1 participant who had a disability rating and monthly compensation amount did not have a module that showed branch of service or proof of Veteran status _(this also should not be possible)_
  * 1 participant had a module that showed branch of service but no proof of Veteran status, disability rating or monthly compensation amount

*_Analytics quickly put in place during the research facilitation weeks confirmed that this issue is occurring approximately 21% of the time, and an engineering investigation determined that the "module but no link" issue is a problem with likely-incorrect data coming from the API. The “no module” state was caused by a backend failure during the session._


##### Branch of service and Veteran status module: Value of module & data:  

  6 of the 8 participants that saw Proof of Veteran status commented on its usefulness:

  * 4 participants said Proof of Veteran status was useful
      > "I could see my husband (100%) using this feature a lot; vs carrying around a copy in your wallet or in your car. VA ID card, drivers license all don't have the % on them." P4
  * 2 participants said Proof of Veteran status was not useful
      > "They usually just accept that I'm a Veteran or I pull out a physical card." P8

     > "I would never do that. So you know, if somebody says—there's a gun to your head, you know—'Get your phone out.' I'm like, I'm still gonna get my wallet out." P3 (Accessed via Profile)
  * 2 participants felt that the proof of Veteran status card contained too much personal information
     > “Disability rating and DoB don't need to be there. I don't want them to know I'm 100% connected.” P12

##### About you section: Disability rating and monthly compensation: 

   <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/images/VAHBMA-HSP-Aboutyou-Rating-Compensation.png" width="300" alt="VA mobile app - personalized home screen, Disability rating and monthly compensation module">  

  13/13 participants had Disability rating and monthly compensation modules on their home screen.


##### Disability rating and monthly compensation: Value of module & data:  

  7 of the 13 participants provided feedback on the disability rating and monthly compensation components:

  * 5 participants found it useful to see disability rating and monthly compensation on the home screen
     > "If I fill out paperwork, I need the proof of Veteran status or my rating and how much my compensation is." P1
  * 1 participant said that the presence of disability rating on the home screen problematic as well as not useful
     > "...I don't want them to know I'm 100% connected." P12

#### 4. Do participants choose to use the home screen as a task starting point, and will they **successfully be able to begin some tasks** using the mobile app home screen?   

**Yes.** Nearly all participants expected to tap and then used the home screen modules successfully to begin their tasks (and arrived where they predicted they would be). In the case of one task (prescriptions), most participants’ expectations of the module destination was different from what they experienced when using the app. 
 
**Activity section - Usability:**  
  12/13 participants expected to and then successfully used the home screen as the entry point for beginning their claims and health tasks. One participant initially used the category screen entry point for their first task but then used the home screen for the subsequent task. 

A deeper dive on the usability of each task:
* **Secure message** (1 participant):
Task prompt: Find out if you have received a message from your doctor.
      * Only 1 participant had an active secure message, but they expected to tap the home screen entry point & see their messages list (and successfully used this method to begin the task).

* **Appointments** (3 participants):
  Task prompt: Double check the time of your upcoming doctor's appointment.
      * All of the 3 participants who had Appts as their task expected to tap the homescreen entry point & see their appts list (and successfully used this method to begin the task).

* **Prescriptions** (8 participants):
  Task prompt: Check whether you have any prescriptions that need to be refilled.
      * All of the 8 participants who had prescriptions as their task expected to tap the home screen entry point & see their prescriptions (and successfully used this method to begin the task).
      * 5/8 participants expected the prescriptions list to show ONLY the refillable prescriptions, not all of them (the module linked to the full active prescriptions list): 
     > "the active prescriptions... that ended up being misleading. like at first I would have said, 'Oh, that's great! I can see how many prescriptions I have going.' But once I clicked on it, then I was confused and didn't understand what it was even referring to for active prescriptions." P4

     > "Home said 11, but then I just see all of them so I don't know which ones I should refill." P5

     > "UGHHHHH. This is the issue right? I've got discontinued prescriptions here which are no longer active. I was expecting to see the ones that are ready for refill not ALL the prescriptions" P12

     > "Is it 9 that I need to refill or does this include the as-needed ones that I may not need to refill?" P1
      * 1 participant who used the homescreen entry point to begin the task then successfully refilled their prescriptions! (actually completing the task was not part of the scope of this study)

* **Claims** (10 participants):
  Task prompt: Check the status of your open disability claim/appeal
      *   Claims was the first task involving the Activity section for all participants.
      *   9/10 participants who had Claims on their home screen initially expected to tap the home screen entry point & see their claims (and successfully used this method to begin the task). 
      *   1 participant reached the claims list via the category screen. After being asked to consider the homescreen entry point later, they were pleasantly surprised and used Activity section modules for subsequent tasks: "It got me there a lot faster." P1
      *   Several participants also noticed the benefits tab and identified it as another way to reach claims, describing it as "the long way" (P2).

**About you section - Usability:**

* All 8 participants who saw the Proof of Veteran Status link understood that they would tap it to show proof they were a Veteran.
* 2/13 participants expected to tap on the disability rating and monthly payment amount to view more details.


#### 5. **Is there a difference between screenreader users and non-screenreader users** in terms of perception of app capabilities, perception of value, and the usability of the personalized home screen?

**Not able to determine.** No participants used a screenreader for the session (despite recruiting and screening for expert screenreader users).

#### 6. **Do participants experience performance issues/lag** when loading the personalized home screen? If so, do performance issues impact participants’ perception of the app’s capabilities or value?

**Yes and no:** About half of participants experienced load times over 8 seconds (the longest being over 1 minute) on the homescreen during the session, but we did not observe evidence that this impacted participants’ perception of the app’s capabilities or value.

   * **7/13 participants experienced a load time of more than 8 seconds** on the homescreen during the session. Longer load times occurred both during the initial load of the home screen as well as when participants returned to the homescreen after being elsewhere in the app.
   * **4/7 of the participants who experienced a longer load time commented on it.** 3/4 of those participants that commented still said that they felt the app would be useful to them in their life.
     * 3/7 participants commented organically on the lag: 
        > “So it took a while to load. And just because a lot of VA things do take a while to load and sometimes don't, I was kinda like, ‘Oh, is it not gonna work.’” P5

        > “I don't think the—prescriptions—that didn't pop up right away. Did it?” P4

        > “It's still loading my information. So I don't know about me.” P15
     * 2/7 participants commented when moderator asked what participant was thinking during an extended loading:
        > "That’s how typical government works, you know… let's spend, you know, close to a billion dollars on this. And let's make sure that it doesn't work. That's what's going through my mind, you know.” P3  
        > “But I don't know if it would be hard—if this is a testing thing, or my wi-fi, it's sucky.” P10  
     * 2/7 participants did not comment explicitly on the load time

<table>
  <tr>
   <td>
<strong>Participant #</strong>
   </td>
   <td><strong>Time</strong>
   </td>
   <td><strong>Longest load section</strong>
   </td>
   <td><strong>Connectivity type</strong>
   </td>
  </tr>
  <tr>
   <td>P1
   </td>
   <td>7-10s
   </td>
   <td>About you 
   </td>
   <td>Full bars of cell and wi-fi
   </td>
  </tr>
  <tr>
   <td>P2
   </td>
   <td>1-2s, 5-8s second time
   </td>
   <td>Activity
   </td>
   <td>2 bars cell, 4 bars wifi
   </td>
  </tr>
  <tr>
   <td>P3
   </td>
   <td>8-10s
   </td>
   <td>About you
   </td>
   <td>2 bars cell, 4 bars wifi
   </td>
  </tr>
  <tr>
   <td>P4
   </td>
   <td>17s
   </td>
   <td>Activity
   </td>
   <td>4 bars cell
   </td>
  </tr>
  <tr>
   <td>P5
   </td>
   <td>16s
   </td>
   <td>Activity
   </td>
   <td>3 bars wifi
   </td>
  </tr>
  <tr>
   <td>P7
   </td>
   <td>3-5s
   </td>
   <td>Activity
   </td>
   <td>2 bars cell, 4 bars wifi
   </td>
  </tr>
  <tr>
   <td>P8
   </td>
   <td>5s
   </td>
   <td>Activity
   </td>
   <td>2 bars cell, 4 bars wifi
   </td>
  </tr>
  <tr>
   <td>P9
   </td>
   <td>2-3s
   </td>
   <td>About you
   </td>
   <td>2 bars cell, 4 bars wifi
   </td>
  </tr>
  <tr>
   <td>P10
   </td>
   <td>10s
   </td>
   <td>Activity
   </td>
   <td>1 bar cell, 4 bars wifi
   </td>
  </tr>
  <tr>
   <td>P11
   </td>
   <td>4-5s
   </td>
   <td>Activity
   </td>
   <td>4 bars cell service, 3 bars wi-fi
   </td>
  </tr>
  <tr>
   <td>P12
   </td>
   <td>3-4s
   </td>
   <td>Activity
   </td>
   <td>1 bar cell, 4 bars wifi
   </td>
  </tr>
  <tr>
   <td>P15
   </td>
   <td>1 min+
   </td>
   <td>About you
   </td>
   <td>4 bars wifi
   </td>
  </tr>
  <tr>
   <td>P16
   </td>
   <td>8s
   </td>
   <td>Activity
   </td>
   <td>Full bars of cell and wi-fi
   </td>
  </tr>
</table>



## Additional Insights



* **Participants shared overall impressions of VA mobile app compared to current tools:**
  * When asked to compare this new version of the app to the version installed on their device, 6/8 participants who were current users of the VA mobile app felt that the version we explored was more helpful/an upgrade from the version they had. 
    > "It gets me, don't have to go to another page to get information." P3

    > "I liked the activity piece, which is a nice addition. Made the information that's there easily accessible..." P12

    > "I don't like people changing things just to change things - this is a useful upgrade" P9
  * 2 participants didn't notice a change
    > "Very similar to what I'm already used to using, not seeing anything that stands out as different" P15
  * 4/4 participants who were not current users of the VA mobile app felt that the version of the app we explored was more helpful than the websites (VA.gov, MHV) that they were using to accomplish the same tasks.
    > "It's nice to get them all in one place" P11

    > Better than the website, right up front and easy to access with the arrows" P2

    > "I think it would be helpful - obviously bigger and way easier to use than the website." P4

* **Navigation:** 
    * All participants found their way back to the home screen after tapping through to view screens associated with a task.
    * When navigating to category screens from home after having already visited a feature within that category, several participants were surprised the navigation stack held their place when they returned to a category. 
* **Task notifications:**
    * About half of participants described receiving (and using) various forms of communications from VA to keep up with their tasks: email (4), SMS (3), and push notifications (1).
* **Dark mode:** The majority of participants we spoke with had their phone set to dark mode.


## Recommendations and Next Steps

* **Activity section:**
    * Given that there was some variation in how participants expected the Activity section to indicate that they had an item that was “in flight,” we recommend monitoring qualitative proxy sources and quantitative data for indicators related to the usability over time of the conditional display logic of the Activity section.
* **Prescriptions:**
    * Consider exploring how to address the gap in participant expectations between the module’s description text “[#] available to refill” and the module’s destination (the full, unfiltered list of active prescriptions).
    * Consider exploring ways to increase the usefulness of the module’s description text.
* **Appointments:**
    * Consider extending the 7-day date range in the module’s description text to better match participant expectations. 
* **Claims:**
    * Consider exploring ways to increase the usefulness of the module’s description text.
* **Proof of Veteran status:**
    * Consider exploring how to ensure that users who are eligible have access to Proof of Veteran status see it on their homescreens.
* **Follow up research:**
    * Conduct a future evaluative study of the personalized home screen with screen reader users.
    * Consider conducting a follow up study with former users of the app to determine if the personalized home screen 
has made an impact on their perception of value.
    * Monitor engagement metrics over time to assess impact of personalized home screen



### Next steps 

* VA mobile app Global team to work with VA mobile app Health & benefits team to determine what changes (if any) to make to Activity modules
* In addition to the feedback participants gave on the home screen entry points for the prescriptions, claims, and appointments features, participants also gave feedback on screens and elements within those features—those findings will be synthesized separately at a later date.


## Appendix



* [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20research%20plan.md)
* [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/personalized-homescreen/2024-04%20Personalized%20Home%20Screen%20-%20evaluative%20research/personalized%20home%20screen%20-%20conversation%20guide.md)
* Interview transcripts


### Tools used for Synthesis



* [Notetaker & Observer Notes (mural)](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1715976305728/ff0c43be38d25972f265d60cda1e3c13527d8883?wid=323-1716474556797)


### Who participated in the study

We had 13 participants complete the usability study, all using iOS mobile devices. All were Veterans who were users of VA Healthcare. 2 participants were blind/low vision and used assistive technology during the session (large text, magnifying glass, a caretaker who helped read things).


##### Audience segment:



* Veterans: 13
* Caregivers: 0
* Family members of a Veteran: 0


##### Gender:



* Male: 9
* Female: 4


##### Devices used during the study:



* Smartphone: 13
* Assistive Technology: 2


##### Age:



* 18-24: 0
* 25-34: 1
* 35-44: 2
* 45-54: 1
* 55-64+: 8
* Unknown: 1


##### Education:



* High school degree or equivalent: 1
* Some college (no degree): 3
* Associate's degree, trade certificate, or vocational training: 1
* Bachelor's degree: 5
* Master's degree: 2
* Doctorate degree: 1
* Unknown: 0


##### Race:



* White: 4
* Black: 3
* Hispanic: 3
* Biracial: 1
* Asian: 2
* Native: 0


##### Disability and Assistive Technology (AT): 



* Experienced AT User: 2
* Magnification/Zoom: 2


### Underserved groups who we haven’t talked to

This research does not include the perspectives of the following marginalized Veteran groups:



* Individuals with a cognitive disability
* Identify as Native
* Gay, lesbian, or bisexual, transgender, nonbinary, gender fluid, genderqueer, Two-Spirit (Indigenous only), or another gender beyond man or woman


[VA Recruitment Checker for Equality](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?gid=453861897#gid=453861897) 


