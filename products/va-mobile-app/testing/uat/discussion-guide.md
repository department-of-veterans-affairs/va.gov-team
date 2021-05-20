# Discussion Guide for Mobile App MVP UAT
## Introduction & Logistics (5 minutes)
Thank you for joining us today. My name is [Bridget/Jen/Melissa]. To give you some background, the VA has built a mobile app, and today we’d like to test it out with you. We're not looking to test you, but test the app we built to see if sign in works and that your information is displaying correctly. I will be your guide, and I also want to introduce [ENGINEER], who is one of the engineers on the project. They are going to follow along and may jump in if something doesn't work as expected and need to get some further details. I also have a few other colleagues on the line observing and taking notes. 

Any questions so far?

- I am going to ask you to share your phone screen on Zoom. I don't expect that you have done this before, and I will walk you through each step to screen share.

- I will also walk you through installing the app on your phone. Once the app is up and running I will ask you to sign in using your own username and password. 

- I expect setting up the app and signing in to take a lot of our time today, and I appreciate your patience working through these steps with me in advance.

Does this all sound ok so far?

Great. Before we start, there are a few more things I want to mention:

- Our conversation should take a little under an hour.
- As I mentioned we're going to ask you to download and install an app on your phone.
- When you are signed into the app, it will display your Appointment, Secure Messaging, Claims and Appeal, and VA.gov Profile information if you have it. I will ask you to navigate to different sections of the app to ensure data you may have in these areas is loading as expected. For example, I will ask you to do things like confirm that your personal information like date of birth, your Direct Deposit information, or things like your Secure Messages are correct. And since you will be sharing your phone we may see other personal things like other app notifications you have set (for example if you get any text messages and your email). 
    - Are you comfortable sharing your screen with your personal information such as (birth date, address, health info) on it today with us on this call? 
    - Do you have any questions about this?
- If for any reason and at any time you change your mind and want to stop the session, please let me know. This is a voluntary session, and you can stop at any time. 
- Again, the main goal today is to verify the app we built is showing correct information. However, if we have time at the end we want to hear any feedback you have. We will not be offended by any opinions you express. 

Those are all the logistics. Do you have any questions for me before we get started?

## Tech Set Up (10 minutes)
### Screen share set up
I'd now like to walk you through how to share your screen with me via Zoom from your device:
- When you are inside the Zoom application on your phone, you'll see a few buttons at the bottom. Starting at the left, you'll see Audio, Video, Share Content (green button in the middle of the screen), Participants, and lastly on the far right hand side, three dots labelled More.
- If you tap on those dots labelled more on the far right, you'll also see a function called "Chat".
- If you don't tap the screen for a while, all the icons at the bottom will hide. To get them back, you can tap anywhere on the screen and they'll show up again.
- The ones that will be important for us today are "Chat" and "Share Content." Any questions?

Now I'd like you to share your screen with me!
- Tap on the arrow that says "Share content". A menu should come up with options of what to share - please hit "Screen".
- You should be prompted with an option to select what you'd like to share - please select "Zoom" and then "Screen". Then select "Start Broadcast".
- If you see any additional prompts please read them aloud and I will help.
- Ok, tap anywhere on the screen to go back to the Zoom application.
- Great, now I can see your phone screen! Thank you for your patience in figuring this out with me so we can look at a app together today.

### App set up
#### TestFlight: Use if the participant is using an iPhone

I can walk you through setting up the app on your iPhone. As a heads up, I will ask you to navigate to see your email inbox as part of this process. 

- First, we need to send an email to you to invite you to test. I have sent an invitation to the email address [participant’s email address]. Do you have access to that email address on your phone right now? 
- Next, download the Test Flight app via the App Store. We have invited you to test the app using the app Test Flight. 
- Great. Please go to your [email address] inbox. 
- Then, open the email from “TestFlight” with the subject line “US Department of Veterans Affairs (VA) has invited you to test VA Mobile App”. You should see a link that you can click that should download and launch the app.
- You should see VA Mobile and be able to open the app from Test Flight

#### Google Play: Use if the participant is using an Android
I can walk you through setting up the app on your Android phone: 

First, we would need your email address that is associated with your Google play store account. Is this email: [XXX] the same email address you use for your Google Play Store?

- **[if NO]** Ok, let's locate your email address associated with the account. Open your Google Play Store app and find your account icon on the top right corner within the search bar. Click on the icon to find your account information. [Then follow if YES instructions]
- **[if YES]** Great, we have sent you an invite to your email address. Please go to your email app inbox to retrieve the invite.
- Ok, open the email from "Android App testing-Google…" from Google Play Store. You should see the button that says "become a tester." 
- Please click on that. This button will now download the app onto your Android.
- **[If they are having trouble getting the email]** It looks like you are having trouble locating the email; I have dropped a link from the google play store in Zoom. Do you mind going into the chat button to retrieve it?
    - Link: https://play.google.com/store/apps/details?id=us.adhocteam.alpha.vamobile
- When completed testing, you can opt-out by reverting to the email invite to opt-out of the program

#### Backup plan if they can’t share screen or get app installed on phone:
Ok, it seems like we're having some trouble getting the app up on your screen. I appreciate your effort to try though. So we’ll wrap up early. Thank you for your time today, we appreciate your willingness to spend time speaking with us. 

## Warm Up (5 minutes)
Looks like we’re finally up and running. That was a lot. Thanks for hanging in there while we got set up. Before we get started I have a few questions before we explore the app. 
-  Have you ever used VA.gov? 
    - What did use it for? 
- Do you use VA health care? 
    - If yes: Have you ever used My HealtheVet? 
        - Do you use Secure Messaging? 
        - Do you use VA for appointments? 
- Have you ever filed a claim with the VA?
- Have you ever visited your profile on VA.gov?
- Do you have direct deposit information on file with VA for compensation & pension benefits?

## Feature Testing (10-30 minutes)
Go ahead and open the VA app and tap the sign in button.
### Signing in 
Please sign into the app with your username and password. If you'd like to stop screen sharing while doing this, please feel free to do so. I will stop the recording when you are entering your username and password. 
 
(Optional, if the keyboard hides): Just so you know, the keyboard is not showing, so we cannot see your password. 

Things to watch for:

- [ ] *Can a user successfully get into the app using their ID.me, DS Logon, or MHV credentials?*
    - *Which one did they use?*
    - [ ] *If NOT, is an appropriate error message displaying?*
- [ ] *Can a user opt into biometric authentication?*
- [ ] *Do people see the onboarding flow?* 
    - [ ] *Can they get through it successfully and get into the app?*
 
*Backup plan if they can’t log in:*
- Ok, it seems like login isn’t going to work today. This session has already been really helpful though, and I appreciate your effort to try. It’s a lot of steps just to get to this point. So we’ll wrap up early, but before we do I am curious if you have any questions for me?
 
### General
Things to watch for:
- [ ] *Are the buttons on the bottom navigation bar sending people to the right place?*
- [ ] *Are any sections of the app not loading?*
    - [ ] *Are the appropriate errors or access messages displayed when it needs to?*
- [ ] *Is the ‘Back’ button consistently working and sending users to the correct (prior) screen?*
- [ ] *If the user has large text turned on, is the app displaying as it should?*
- [ ] *Are the buttons on the homescreen sending people to the right place?*
 
### Profile
Excellent. First, I'd like to look at the Profile section of the app. Can you go to "Profile”?
- [ ] [On the Profile screen] Does your name and military branch of service and seal (if applicable) information look correct? 

Things to watch for:
- [ ] *Can the user get to the Profile from the main navigation?*
- [ ] *If there is an issue loading Profile, is the correct error displayed?*
- [ ] *Is the Profile loading all the sections that it should be?*

### Personal & contact information
Please go to your Personal and Contact information. 
- [ ] Looking at the top of the screen, does your personal information of date of birth and gender look correct?
- [ ] Please scroll down the screen and take a moment to review your contact information. If information is showing here, is it correct?

Things to watch for:
- [ ] *If there is nothing in a field is it showing the correct copy?*
- [ ] *If a section is editable and the user edits it, is it correctly updating in the appropriate field in the app? (addresses, phone numbers, contact email)*
- [ ] *If a user would like to remove information from their profile, does that work correctly?*
- [ ] *If address validation is needed, is it working properly?*

### Military information
Please go to the Military Information section of your profile. 
- [ ] Is your military information correct?
 
Things to watch for:
- [ ] *If the military information cannot be pulled in, is the correct empty state screen displayed?*

### Direct deposit
Please go to the Direct Deposit section of your profile.
- Do you use Direct Deposit?
    - [ ] If yes: Is your direct deposit information correct?
 
Things to watch for:
- [ ] *For people who don’t have direct deposit information, is the correct empty state screen showing?*

### Settings
Please go to the Settings section of your profile. What I am looking for here is if the setting for your [Touch ID/Face ID/Fingerprint] reflects the preference you set when you signed into the app. Ok great, everything looks good. 

Things to watch for:
- [ ] *Are people seeing all the list items we expect them to see (manage your account, biometric management, share the app, privacy policy, notifications management, sign out)?*
- [ ] *Does the biometric setting reflect the preference the user set when they onboarded?*
 
### Letters
Please navigate to the Letters section of your profile. 
- Is this list of letters what you expected to see? Does it feel like anything is missing?
- If you are comfortable doing so, I would like you to open your Benefit Summary and Service Verification Letter, which shows your service history and benefit information and allows you to customize. Does the information shown on this screen look right?
    - Can you please make selections on this screen about what information you’d like to include in your letter and then generate the letter? I would like to see if the letter generates correctly. 

Things to watch for:
- [ ] *Can a user make selections for benefit letter download?*
    - [ ] *Does the information offered for the benefit letter look right to the user?*
- [ ] *Are letters downloading successfully?*

### Claims
Next I'd like to look at the Claims.

(If user indicated they DO NOT use Claims):
- [ ] *If a user has never used claims, do they see the correct screen (unenrolled message)?*

(If user indicated they have current or past claims):
- Please take a moment to look at your open claims and appeals. 
    - [ ] Do they look right?
- Please take a moment to look at your closed claims and appeals. 
    - [ ] Do they look right?
- Please click into one of your claims or appeals. 
    - [ ] *Does the information on this screen look right?
- Please navigate to the details section of this screen. 
    - [ ] Does this look right?
 
Things to watch for:
- [ ] *If a user has NO open claims, do they see the correct empty state message?*
- [ ] *If a user has NO closed claims, do they see the correct empty state message?*
- [ ] *If either appeals OR claims aren't loading, does the user see the appropriate error message and UI beneath that error message?*
- [ ] *If a user is on Step 3 AND has file requests, do they see a CTA to begin the upload process?*
    - [ ] *When they tap to begin the upload process, do they see a list of their file requests displaying?*

### Appointments
Next I'd like to look at the Appointments. Please go to the Health Care section and then to Appointments.

(If user indicated they DO NOT use Appointments):
- [ ] If a user does not have health records at VA, do they see the correct screen (unenrolled message)?

(If user indicated they DO use Appointments):
- Please take a moment to look at your upcoming appointments. 
    - [ ] Do they look right?
- Please take a moment to look at your past appointments. 
    - [ ] Do they look right?
- Please load your appointments from this year. 
    - [ ] Do they look right?
- Please click into one of your upcoming (or past) appointments
    - [ ] Does the information on this screen look right? 

Things to watch for:
- [ ] *If there are any canceled appointments, are they displaying in the upcoming list and listed as canceled?*
- [ ] *If a user has NO upcoming appointments, do they see the correct empty state message?*
- [ ] *If a user has NO past appointments within a certain date range, do they see the correct empty state message?*

### Secure Messaging
Next can you go to Secure Messaging?

(If user indicated they DO NOT use Secure Messaging):
- [ ] *If a user doesn’t have an MHV identifier, do they see the appropriate screen blocking access to the feature?*
[Skip to Open Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/testing/uat/discussion-guide.md#open-feedback-5-minutes)

(If user indicated they use Secure Messaging):

#### Inbox
- Please take a moment to look at your messages in your inbox. 
    - [ ] Does this information accurate?
    
Things to watch for:
- [ ] *If a user has messages in their inbox, are they displaying? Is the information accurate?*
- [ ] *If a user has no messages in their inbox, do they see the appropriate empty state screen?*

#### Folders
- Can you tap on Folders? 
    - [ ] *Does this information accurate?
- Do you use Custom Folders? 
    - [ ] If yes, are these the correct folders?
- Can you tap the Sent folder? 
    - [ ] Does this information accurate?

Things to watch for:
- [ ] *If a user has custom folders, are they showing up? *
    - [ ] *Are the right messages in them?*
- [ ] *Can the user see a read receipt within the Sent folder?*

#### View Message
- Are you comfortable tapping into one of your messages? 
    - [ ] If yes, does the message look correct?
- Scroll through your messages and see if you can find one with multiple replies. Lets see what that thread looks like.
- Do you have any messages with an attachment? Do you mind opening it?

Things to watch for:
- [ ] *Within a specific message screen, is that message loading and displaying correctly?*
- [ ] *If a user has a message with multiple replies can they see all the messages?*
- [ ] *If there is an attachment within a message, can the user open it?*

#### Reply
- Could you tap on the reply button a message
    - What’s the date of the message?

Things to watch for:
- [ ] *If the user hits ‘Reply’ is the compose reply screen displaying correctly?*
- [ ] *If a message is older than 45 days, does the alert show instead of a Reply button.*

#### Compose
- Please go back to your message inbox, and click the compose a message button. I'd like to see if the compose screen is displaying correctly.
- Does the contact list look accurate?
- Can you try and add an attachment to your new message?

Things to watch for:
- [ ] *Is the Compose a Message form coming up?*
- [ ] *Did the contact list look accurate?*
- [ ] *If a user doesn’t have anyone in their contacts list do they see “Can’t match you with a provider” error instead of form?*
- [ ] *Can the user add an attachment to their new message?* 

## Open feedback (5 minutes)
Thank you for letting me ask you to get around the app! Now I’d love to hear any feedback you have for us.

- Do you have any questions for me about anything you see?

I'd like to learn from you a bit about how you feel about everything we've talked about today.
### Optional Questions
- Do you think this mobile app would change how you interact with VA?
    - If yes, how would it change?
- Let's imagine again you are talking to a friend who is also a Veteran about this app and you’re telling them about it. What would you say about it?
- Let's say you could add 1 more thing to this app - what would you add? Why?
 
## Wrap Up (2 minutes)
That’s all the questions I have for you today. Do you have any last questions for me?

We really appreciate you taking the time to share your thoughts with us. Your feedback is so helpful to us as we continue to work on VA’s mobile app and make sure it really works for Veterans like you. Enjoy the rest of your day!
