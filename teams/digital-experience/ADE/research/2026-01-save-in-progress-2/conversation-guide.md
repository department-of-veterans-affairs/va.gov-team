# Conversation Guide for for 2026-01 Save in Progress -- 2nd round of usability testing

# Moderator logistics 📋✅
**Before all sessions**:
- Review participant list for participant name and screener question responses
- Check Settings > In Meeting (Advanced) > Automated captions, Full transcript, Save captions are all ON
- Check Settings > Meeting > In Meeting (Basic) > Sound notification when someone joins or leaves OFF
  - In the Participant "more" menu, make sure "Play Join and Leave Sound" is unchecked
- Check Settings > Meeting > In Meeting (Basic) > Screen sharing > Who can share > All Participants
- Check Settings > Meeting > In Meeting (Basic) > Hide participant profile pictures in a meeting ON

**10-15 min before each session**: 
- **START the Codespace**:

  1. Open the stop/start URL in github: https://github.com/department-of-veterans-affairs/vets-website/tree/co-110525-adding-interstitial-page 
  1. Click on green "<> Code" button
  1. In the Codespaces tab, click on the ellipsis (...) next to your Codespace (va-public-legendary-yodel)
  1. Select "Open in browser".
  1. See "Setting up your codespace", and a browser tab w/command window
  1. Ctrl-Shift-P > view > View Creation Log > see in terminal window at bottom
  1. Check for all green text (no red), and "webpack compiled successfully"
  1. Open standalone browser window with prototype: **https://bit.ly/456nrPv** (https://legendary-yodel-46rpq9g49pj37wv5-3002.app.github.dev/) and test it
- Sign onto Zoom website as Perigean and start Zoom meeting
<!-- - Slack Perigean notetaker a link to the notes doc in GitHub -->
- Post p# and "observer instructions" in #feedback-backchannel
  - @mention observers
  - Share brief summary of participant demographic info
  - Mural link for notetaking
- Wear HEADPHONES to prevent the user's screen reader from echoing back to them
- Paste prototype link into Zoom chat (but don't hit enter)
- Do Not Disturb ON so no notifications
- Make sure everyone is muted except me and the participant

When the participant is ready, turn on your camera and begin session with the intro

CHECK SLACK for real-time feedback or questions from observers


# Intro - 5 minutes

Thanks for joining us today! My name is **Cindy**. How are you doing today?

I have a colleague with us in this session who will be taking notes. 

*(if applicable)* [accessibility specialist] is also in this meeting to help with any technical issues that may arise with your use of assistive technology during this session. 

There are a few of my teammates who would like to observe this session as well. **Would it be OK with you if I invited them to join us?**
- *(If participant seems hesitant or unsure or uncomfortable)* Just so you know, my teammates will be muted and off camera and you won't have to interact with them. You also have the option to keep the session just the two of us plus the notetaker (and the technical support person).
- *(If yes, let them in--3-4 MAX. If no, post to #feedback-backchannel "Sorry, the participant doesn't want any observers in this session.")*

- *(OBSERVERS JOIN w/cameras ON )* We have a few people from the team listening in today: there's [NAME] *(wave or say "hi")*, [NAME] *(wave or say "hi")*, etc. *(If I don't know the name of one of the observers, ask them to please turn on their camera and say their name aloud)*

Could the observers please turn their cameras off now to save bandwidth? 

Today we're going to talk about filling out VA forms online. I'm going to ask you a few questions, and then I'll have you do some specific tasks using a website that I will share with you.

Before we start, I want to go over a few things:

- **This entire session may take 60 (or 90) minutes.** I want to be sure not to keep you longer, so I may occasionally prompt you with the next question or topic.
  
- **In this session, we want to hear your honest opinions.** There are no right or wrong answers; we are not testing your knowledge or abilities. We're testing a website to learn how we can make it easier to use. I welcome any and all of your feedback, and I won't be offended by any opinions you express.
- **Your participation in this interview is completely voluntary.** Whether or not you choose to participate will not affect your benefits with the VA. If you would like to stop the session or do not want to answer a question for any reason at any time, that's no problem. Just let me know.

- Finally, I would like to record my screen and audio to confirm that I’ve captured your opinions accurately and sometimes share video clips with our colleagues at the VA to show user feedback. If we do this, we don’t link anything you choose to share in the session to any information that identifies you, and we remove your face and name from any videos that we share.
**Knowing this, are you comfortable if I record my screen and audio as we talk today?**
  - *(If yes:)* Once I start recording, I am going to confirm once more that you are ok with me recording this session.

➡️ Select **Record**, then **Record to the cloud**.

*(If participant asks you to NOT record)* Are you comfortable if I save the transcript of the session? *(If not, take good notes!)*

- I have started recording. I'd like to confirm: 
  - **Are you comfortable if I record my screen and the audio as we talk today?** Yes / No
 
  - **Are you comfortable if we decide to use a recorded clip from our discussion today to share with other VA partners as long as we remove any information that can be used to identify you?** Yes / No

In the bottom toolbar of the Zoom window, click the arrow next to **SHOW CAPTIONS** > **View Full Transcript** > Save (NEED TO DO THIS TO GET TRANSCRIPT)

*After checking that transcription is working, close the Transcript panel by clicking **Close Full Transcript** in the Show Captions menu.*

## Screen sharing instructions (if needed)
- In the Zoom application on your computer, there's a row of buttons at the bottom. In the center is a button that says **Share** *(on phone, may need to scroll sideways or click **More...**)*
  - If you don't tap the screen for a while, all the buttons at the bottom will hide. To get them back, you can tap/click anywhere on the screen, and they'll show up again.
  - (If you have more than one screen, the row of buttons may be on the screen that's being shared)

- Now I'd like you to share your screen with me. Tap on the button that says **Share**. Then there will be options for what to share. Please choose **"Screen"** (phone) or your web browser.
- Great, now I can see your screen! Thank you for your patience in figuring this out.

- iPad: **Broadcast screen**
## Troubleshooting
- [Avoid **AI Companion**, which is a new option next to “Share” in the Zoom buttons]

- [If see **unpredictable jumping around** behavior and participant is using a browser other than Chrome, ask them to switch to Chrome (this helped with VoiceOver on an iPhone using Safari)]

- [If having **difficulty moving windows around** or opening the prototype, you could request control of the participant’s screen and mouse in Zoom: `<Name>’s screen tab > Request remote control`. Then you can move/resize browser (but not zoom windows/buttons) and type into browser bar. The participant may need to minimize the zoom video view, and drag the zoom buttons to the bottom of the screen so out of the way.]

- [If **can't see an iPhone's magnified screen**, ask participant to go into their phone and do `Settings > Accessibility > Show while Mirroring`]

- [If “**Uncaught runtime errors**”, close with “X” (label “dismiss”) in top right corner, leave site if prompted. 
  - Check my browser window to see if codespace shut down. 
  - If so, restart it. Then have them click on the Apron link to resume/start over.]

# Warm-up Questions - 5 minutes

Let’s start with a few questions... 

1. I understand you are a Veteran. Is that right? 
    - Thanks for confirming that.

1. What kind of device are you using today? *(Computer / Tablet / Smartphone)*
    - *(If not the expected device, ask to rejoin that way)*
    - What operating system? *(macOS / Windows / iOS / Android / _______)*

1. What web browser do you use? *(Chrome / Firefox / Edge / Safari / _______)*

1. I will be sharing a web page link with you during the session. How would you prefer to receive the URL? I could dictate it to you, put it in the Zoom chat, email it to you, or *(for smartphone only)* text it to you. *(RECORD)* 

   - *(If text or email)* Could the notetaker please text/email the link now? (https://bit.ly/456nrPv)

### For only assistive tech users

5. What assistive technology are you using right now? *(screen reader / magnifier _______________________)*
    - *(If **Dolphin** screen reader, won't be able to share screen on Zoom)*
    - *(if no AT)* Do you sometimes use assistive technology while using VA.gov or filling out a form online? 
      - If so, what do you use and when? 
        - Would you be willing to start using it now in this session? 
        - *(if not, run session w/o AT, or stop and ask Perigean for a replacement participant)*

1. How would you rate your level of experience with using a screen *(reader / magnifier)*--beginner, intermediate, advanced, or expert?

1. How long have you been using a screen *(reader / magnifier)*?

1. Have you ever shared your screen in Zoom while using a screen *(reader / magnifier)*? *(Yes / No)*
    - If not, we can help you do that.

### For everyone

10. What VA benefits, if any, do you have experience with? 
    - *RECORD: health care / education / career services / disability / home loan / pension / life insurance / burial benefits / none / __________*

1. Have you ever filled out a VA form online before? 
   - If so, can you tell me about your most recent experience? 
   - How did it go?


# User Tasks

## Task 0: Share screen

**I would like you to share your screen** with me so that I can see what you do during this session. Before we start, I want to make sure you know that screen share will show me your own screen, so if you'd like to close any apps or turn off notifications that you don't want me to see, you could do that now.
- *(refer to Screen sharing instructions above, if needed)*
- *STOP TECH TROUBLESHOOTING **< 15 min into session** if want a replacement participant from Perigean b/c not likely to be successful*

We can help guide you through this if you need help. Please say what you're doing out loud so that if there are any issues, we'll know what they are.
1. Make sure that the Zoom application has focus
1. Navigate to the screen share button
1. Check the "share sound" checkbox (so we can hear their screen reader speaking)--may have to tab a LOT to get to this in the right pane
1. Activate the screen share

**(If we can't hear the screen reader)** Since I can't hear your screen reader and don't want to interrupt it, after I ask you to do something, I'll try to not say anything until you say that you're done or need help, OK?

**(If video window is covering up phone screen)** It looks like my zoom video is covering up a lot of your screen. Could you please swipe it off? (Screen reader: swipe right until the video window has focus, and then double tap when you hear "Stash preview".)

## Task 00: Open prototype
Now I'd like you to open a website that I'm going to share with you. 

I will *[email/text/dictate/put into the Zoom chat]* the URL: **https://bit.ly/456nrPv** 
- *(If asked, reassure that this is a legitimate link to what I want you to test)*
- *(Might need to hold tablet horizontally so easier to read)*

Did you get the link? 

- *If “unsupported browser” error, ask to try a different browser or device, or share my screen (works for anyone) and mouse control (doesn't work w/iPhones)*
- *If prototype doesn't open, copy the URL and open in a new incognito window (Chrome), private window (Firefox, Safari) or InPrivate (Edge)*

Please click the (green) "Continue" button.

**You'll be interacting with a demo prototype today.** Since it's a demo, note that none of your actions will affect your own VA information or benefits.

## Task 1: Find Form to fill out
[start on unauthenticated VA.gov home page]

**(If using screen magnifier but can’t see zoomed screen over Zoom)** Is your screen magnified? If so, I can’t see that. Could you please tell me how far across the page you can see? And how far down from the top of the page?

Please **talk aloud** about what you're thinking BEFORE you click/tap on anything. 

I'd like you to fill out VA form 20-10206 ["20 10 206"] to request your military records. How might you find that form? 

### Path 1A: Participant signs in before finding form

[If p says they'd sign in, let them click --> **Sign in** --> (green) "Continue" button --> My VA]

[What do they want to do next?]

OK, let's pretend that you just [searched/whatever they say] and you landed on a new page. Please click the **Apron** link at the top of the page [to auth intro page and Task 2].

### Path 1B: Participant finds form before signing in

[What do they want to do next?]

OK, let's pretend that you just [searched/whatever they say] and you landed on a new page. Please click the **Umbrella** link at the top of the page [to unauth intro page and Task 2].

[(green) "Continue" button --> **Sign in to start your request**]

[If p looking for “Skip to the content” link and the page loaded scrolled down, tell them to look farther up on the page]


## Task 2: Start your request [from Auth Intro Page]

I'd like you to fill out VA form 20-10206 [“20 10 206”] to request your military records. 

### Watch for:
- [Any comments about this page looking like the page before? Y / N]

[**Start your request**]

[When they get to the form:] Please stop here so I can give you the next instruction.

## Task 3: Fill out form 
*[never reload the page; use **Back** button in browser if ever see a spinning cursor]*

Please fill out this form to request your military records, but I want you to make up fake details so you don't share your personal information with me. 

And please **talk aloud** with any thoughts, reactions, or questions you have.

### Watch for:
- [Feedback on form fields]
- [Feedback on interstitial page about saving]
- [Any confusion re links being on the interstitial page? Y / N] 
  - [Clicked on them? My VA / form intro page]
  - [If so, ASK] What did you expect? What did you find?

[Note: If click on anything that goes outside the codespace, ask participant to go back in your browser.]

## Task 4: Take a break in filling out form (after enter phone number, before email address) 
Let's say that you're hungry and need to take a break to eat a snack/lunch/dinner. What will you do with the form that you're filling out?

- [leave open in browser / close browser / Finish later button / Chris > Sign out]


- [If didn't sign out or close browser] 
  - In 30 minutes, your session will time out and you will be signed out. 
  - To simulate that, could you please sign out now? 
  - [Please click on the **Hat** link]
  
- What do you think will happen to the information you entered?
  
### Watch for:
- [Anything re saving info entered]
- [Anything re the "Finish later" button]
- [Feedback on the "Finish later" page?]
  - [Noticed "Your records request has been saved"? Y / N]

## Task 5: Resume filling out form [from unauth VA.gov]
[If they're not on the unauth VA.gov home page, ask them click on the **Hat** link]

OK, now let's say that you're back from eating. Please resume filling out the form that you were working to request your military records. How would you get back to your unfinished form?

- [Record how resume form:]
  - Sign in --> My VA --> form card --> Continue your request
  - Search/nav to unauth form intro (click on Umbrella) --> Sign in --> auth form intro --> Continue your request
  - [If they say “Umbrella”] How would you do this with the real VA.gov web page if we weren’t in this session together?

[If p is quiet] Please talk aloud about any thoughts, reactions, or questions you have.

[If p isn’t proceeding] Now you can continue filling out the form.

[If get runtime error with Edit citizenship button, close it twice with the X at far R side of the page]

### Watch for:
- [Realize that they have to sign in before returning to the form?]
- [Anything re saving info entered]
- [Any feedback on the form fields]
- [Any difficulty using the accordion controls? Y / N]

[If see "can't submit your request" alert, say:] Don't worry! It's not working because this is a prototype, not a real form.

# Post-Task Interview - 5 minutes

[**Type into #feedback-backchannel**: "Any questions you want me to ask?"]
1. Overall, about everything you've seen in this session...What worked *well* for you?
1. What was *unclear or did not work well* for you?
     - [If they say nothing, could ask:] What, if anything, did you find annoying?
1. What would you like to *change or add*?

1. **When did you expect the information you entered into this VA form to be saved?**

     1. [After every change / field / page / Finish later / Continue button / only after submitting--–ASK for clarification if needed]
     1. How do you know? 
     1. If you walk away from the web page without clicking anything, what do you think will happen to the information you entered?
     1. [Do they recognize that their information is being saved all the time? Y / N]
     1. [Did they remember what the interstitial page said? Y / N]

1. **How long do you expect the information you entered to be saved if you haven’t submitted the form?**
     1. VA saves your information for 60 days from the last time you made changes. What do you think happens to your information after 60 days? 
     1. Would it be helpful if you were notified if you have incomplete forms that haven’t been submitted? 
          1. [If so] When would you like to be notified and why? [How often?]
     1. Have you left a VA form unfinished before?
          1. [If so] What happened? Did you go back?
     1. Would you like to be able to delete a form you started but didn't finish?
          1. [If so] Why? 

1. If you had a magic wand and could change *anything* about *how we save your information* before you submit a form, what would you want?
1. Is there anything else that we haven't talked about that you think I should know? 

## Thank You and Closing - 3 minutes

**Are you still okay if we use any video or audio clips from this session?** 
- *(yes / no)*
- *(If participant says yes)* Is there any part of our discussion that you would NOT want shared in a video clip?

**We really appreciate you taking the time to share your thoughts with us today**. Your feedback is so helpful to us as we continue to learn about Veterans so we can improve the online tools that we provide.

If you know any other Veterans or family members who might be willing to participate in a future research session like this one, you can pass along the web link that you'll receive in your email from our team. 

Thank you so much again, and I hope that you enjoy the rest of your day!

*Open the Transcript panel, click **Save Transcript***

*End meeting for all*

## After Session 
- Click "End" on zoom website
- Return to form (Finish Later or auth form intro page) and click **Start a new request** to remove all info entered
- Download recording and closed caption (.vtt file)
- Rename and save transcript file from Finder
- Download notes
- Debrief to my spreadsheet
- **STOP the Codespace**:
  1. Open the stop/start URL in github: https://github.com/department-of-veterans-affairs/vets-website/tree/co-110525-adding-interstitial-page
  1. Click on green "<> Code" button
  1. In the Codespaces tab, see green dot and "active" next to the name of your codespace (va-public-legendary-yodel)
  1. Click on the ellipsis (...) next to your codespace 
  1. Select "Stop codespace"


## Approvals
- Martha Wilkes, OCTO Accessibility Strategist/Designer, on 12/18/2025
- Kevin Hoffman (in place of Shane Strassberg, Research-Ops Lead) on 12/23/2025


# Emergency Exit 🚨

We have covered all the questions I have for you today. Thank you so much for your time and feedback!


